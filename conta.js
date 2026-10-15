/* =====================================================================
   Camada de dados (Firebase): login, catálogo protegido, compartilhamento,
   estatísticas, comentários e painel admin.
   Só carrega o Firebase se firebase-config.js estiver preenchido.
   A segurança de verdade está nas regras do Firestore (firestore.rules):
   este arquivo é só a interface com o servidor.
   ===================================================================== */
const V = '10.14.1';
const CFG = window.CVD_FIREBASE;
const DOMINIOS = (window.CVD_DOMINIOS || []).map(d => d.toLowerCase());
const ADMINS = (window.CVD_ADMINS || []).map(e => e.toLowerCase());
const dominioOk = email => { const m = String(email || '').toLowerCase().match(/@([^@\s]+)$/); return !!m && DOMINIOS.includes(m[1]); };

if(!CFG || !CFG.apiKey || CFG.apiKey === 'COLE_AQUI'){
  window.CVDConta = { configurado: false, pronto: Promise.resolve(false), dominioOk };
} else {
  let resolverPronto; const pronto = new Promise(r => resolverPronto = r);
  const C = window.CVDConta = { configurado: true, pronto, user: null, perfil: null, ouvintes: new Set(), resolvido: false, dominioOk };
  try{
    const [{ initializeApp, getApp }, A, F] = await Promise.all([
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`),
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-auth.js`),
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`),
    ]);
    const app = initializeApp(CFG), auth = A.getAuth(app), db = F.getFirestore(app);
    auth.languageCode = 'pt-BR';
    const avisar = () => C.ouvintes.forEach(fn => { try{ fn(); }catch(e){} });
    const txt = (s, max) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
    const por = (a, b) => (b.criadoEm?.seconds || 0) - (a.criadoEm?.seconds || 0);
    const lerPerfil = async u => { const s = await F.getDoc(F.doc(db, 'users', u.uid)); return s.exists() ? { uid: u.uid, ...s.data() } : null; };
    /* e-mail confirmado pelo administrador (coleção "verificados") */
    const lerVerificado = async u => { try{ const s = await F.getDoc(F.doc(db, 'verificados', (u.email || '').toLowerCase())); return s.exists() ? s.data() : null; }catch(e){ return null; } };
    const carregarConta = async u => {
      C.verificado = await lerVerificado(u);
      C.perfil = await lerPerfil(u);
      if(!C.perfil && C.verificado){   // conta já existia sem perfil: cria agora (regra de auto-cadastro)
        try{ await F.setDoc(F.doc(db, 'users', u.uid), { nome: txt(C.verificado.nome || u.email, 80), email: u.email, role: 'vendedor', status: 'aprovado', criadoEm: F.serverTimestamp() }); C.perfil = await lerPerfil(u); }catch(e){}
      }
    };
    let acessoRegistrado = false;
    const registrarEntrada = () => {
      if(C.estado() === 'ok' && !acessoRegistrado){
        acessoRegistrado = true;
        F.updateDoc(F.doc(db, 'users', C.user.uid), { ultimoAcesso: F.serverTimestamp() }).catch(() => {});
        C.registrar('entrar', 'app', 'Entrou no app', '');
      }
    };

    A.onAuthStateChanged(auth, async u => {
      C.user = u; C.perfil = null; acessoRegistrado = false;
      if(u){
        try{ await u.reload(); await auth.currentUser.getIdToken(true); C.user = auth.currentUser; await carregarConta(auth.currentUser); }catch(e){}
        registrarEntrada();
      }
      C.resolvido = true; resolverPronto(true); avisar();
      clearInterval(C._poll);
      if(u && !u.emailVerified) C._poll = setInterval(() => { if(!document.hidden && C.estado() === 'verificar') C.atualizar().catch(() => {}); else if(C.estado() !== 'verificar') clearInterval(C._poll); }, 8000);   // libera sozinho quando o admin validar
    });

    const erro = e => {
      const m = { 'auth/invalid-credential':'E-mail ou senha incorretos.', 'auth/wrong-password':'E-mail ou senha incorretos.', 'auth/user-not-found':'E-mail ou senha incorretos.',
        'auth/email-already-in-use':'Este e-mail já tem cadastro. Use "Entrar".', 'auth/weak-password':'Senha fraca. Use ao menos 8 caracteres, com letras e números.', 'auth/invalid-email':'E-mail inválido.',
        'auth/too-many-requests':'Muitas tentativas. Aguarde alguns minutos e tente de novo.', 'auth/network-request-failed':'Sem conexão. Tente de novo.',
        'permission-denied':'Sem permissão para esta ação.' };
      return new Error(m[e.code] || 'Algo deu errado. Tente novamente.');
    };
    const secApp = () => { try{ return getApp('sec'); }catch(e){ return initializeApp(CFG, 'sec'); } };
    const NEG = 'Use o seu e-mail @cvdvale.com.br ou @cvdentus.com.br. Outros endereços não têm acesso.';

    Object.assign(C, {
      ehAdminEmail(){ return !!(C.user && ADMINS.includes((C.user.email || '').toLowerCase())); },
      /* estado do acesso: carregando | deslogado | dominio | verificar | bloqueado | ok */
      estado(){
        if(!C.resolvido) return 'carregando';
        if(!C.user) return 'deslogado';
        if(!dominioOk(C.user.email)) return 'dominio';
        if(C.perfil && C.perfil.status === 'bloqueado') return 'bloqueado';
        if(!C.perfil && !C.ehAdminEmail()) return 'bloqueado';
        return 'ok';
      },
      aprovado(){ return C.estado() === 'ok'; },
      admin(){ return C.aprovado() && (C.ehAdminEmail() || (C.perfil && C.perfil.role === 'admin')); },

      /* ---------- conta ---------- */
      async cadastrar(nome, email, senha){
        nome = txt(nome, 80); email = txt(email, 120).toLowerCase();
        if(!dominioOk(email)) throw new Error(NEG);
        if(nome.length < 2) throw new Error('Informe seu nome.');
        if(senha.length < 8 || !/[a-zA-Z]/.test(senha) || !/[0-9]/.test(senha)) throw new Error('A senha precisa ter ao menos 8 caracteres, com letras e números.');
        try{
          const cred = await A.createUserWithEmailAndPassword(auth, email, senha);
          await F.setDoc(F.doc(db, 'users', cred.user.uid), { nome, email, role: 'vendedor', status: 'aprovado', criadoEm: F.serverTimestamp() });
        }catch(e){ throw erro(e); }
      },
      async entrar(email, senha){
        email = txt(email, 120).toLowerCase();
        if(!dominioOk(email)) throw new Error(NEG);
        try{ await A.signInWithEmailAndPassword(auth, email, senha); }catch(e){ throw erro(e); }
      },
      async sair(){ await A.signOut(auth); },
      async recuperarSenha(email){ email = txt(email, 120).toLowerCase(); if(!dominioOk(email)) return; try{ await A.sendPasswordResetEmail(auth, email); }catch(e){} },
      /* troca opcional de senha (pede a atual para confirmar) */
      async alterarSenha(atual, nova){
        if(nova.length < 8 || !/[a-zA-Z]/.test(nova) || !/[0-9]/.test(nova)) throw new Error('A nova senha precisa ter ao menos 8 caracteres, com letras e números.');
        try{
          await A.reauthenticateWithCredential(auth.currentUser, A.EmailAuthProvider.credential(auth.currentUser.email, atual));
          await A.updatePassword(auth.currentUser, nova);
        }catch(e){ throw erro(e); }
      },
      async reenviarVerificacao(){ try{ await A.sendEmailVerification(auth.currentUser); }catch(e){ throw erro(e); } },
      async atualizar(){
        if(auth.currentUser){
          await auth.currentUser.reload(); await auth.currentUser.getIdToken(true);
          C.user = auth.currentUser; await carregarConta(auth.currentUser); registrarEntrada(); avisar();
        }
      },

      /* ---------- catálogo (só depois do login) ---------- */
      async carregarCatalogo(){
        const s = await F.getDocs(F.collection(db, 'catalogo')); const out = {};
        s.forEach(d => { try{ out[d.id] = JSON.parse(d.data().json); }catch(e){} });
        return Object.keys(out).length ? out : null;
      },
      async publicarCatalogo(nome, json){
        if(!C.admin()) throw new Error('Apenas administradores.');
        await F.setDoc(F.doc(db, 'catalogo', nome), { json, atualizadoEm: F.serverTimestamp(), por: txt(C.perfil ? C.perfil.nome : C.user.email, 80) });
      },

      /* ---------- compartilhar com cliente ---------- */
      async criarCompartilhamento(o){
        const d = { titulo: txt(o.titulo, 160), url: o.url, criadoPor: C.user.uid, criadoEm: F.serverTimestamp() };
        if(o.baixarUrl) d.baixarUrl = o.baixarUrl;
        if(o.thumb) d.thumb = txt(o.thumb, 200);
        if(o.tipo) d.tipo = txt(o.tipo, 40);
        if(typeof o.mb === 'number') d.mb = o.mb;
        const ref = await F.addDoc(F.collection(db, 'compartilhamentos'), d);
        return ref.id;
      },
      async listarCompartilhamentos(){
        if(!C.admin()) throw new Error('Apenas administradores.');
        const s = await F.getDocs(F.query(F.collection(db, 'compartilhamentos'), F.orderBy('criadoEm', 'desc'), F.limit(100)));
        return s.docs.map(d => ({ id: d.id, ...d.data() }));
      },
      async excluirCompartilhamento(id){ if(!C.admin()) throw new Error('Apenas administradores.'); await F.deleteDoc(F.doc(db, 'compartilhamentos', id)); },

      /* ---------- estatísticas ---------- */
      registrar(tipo, chave, titulo, extra){
        if(C.estado() !== 'ok') return;
        const k = tipo + '|' + chave + '|' + (extra || ''), agora = Date.now();
        C._ult = C._ult || {}; if(C._ult[k] && agora - C._ult[k] < 2500) return; C._ult[k] = agora;
        F.addDoc(F.collection(db, 'eventos'), { uid: C.user.uid, tipo, chave: txt(chave, 64), titulo: txt(titulo, 140), extra: txt(extra || '', 100), criadoEm: F.serverTimestamp() }).catch(() => {});
      },
      async eventos(dias, limite){
        if(!C.admin()) throw new Error('Apenas administradores.');
        const desde = F.Timestamp.fromMillis(Date.now() - dias * 864e5);
        const s = await F.getDocs(F.query(F.collection(db, 'eventos'), F.where('criadoEm', '>=', desde), F.orderBy('criadoEm', 'desc'), F.limit(limite || 3000)));
        return s.docs.map(d => d.data());
      },
      async todosUsuarios(){
        if(!C.admin()) throw new Error('Apenas administradores.');
        const s = await F.getDocs(F.collection(db, 'users')); return s.docs.map(d => ({ uid: d.id, ...d.data() }));
      },
      /* contas novas ainda sem o OK do admin (o acesso delas já funciona normalmente) */
      async contasNovas(){
        if(!C.admin()) return [];
        return (await C.todosUsuarios()).filter(u => !u.revisado && u.status !== 'bloqueado' && u.role !== 'admin' && !ADMINS.includes((u.email || '').toLowerCase())).sort(por);
      },
      async marcarRevisado(uid){ if(!C.admin()) throw new Error('Apenas administradores.'); try{ await F.updateDoc(F.doc(db, 'users', uid), { revisado: true }); }catch(e){ throw erro(e); } },
      async listarUsuarios(status){ return (await C.todosUsuarios()).filter(u => u.status === status).sort(por); },
      /* Admin cria conta já verificada: senha aleatória (ninguém a conhece) + e-mail para a pessoa definir a própria senha. */
      async criarContaFuncionario(nome, email, senha){
        if(!C.admin()) throw new Error('Apenas administradores.');
        nome = txt(nome, 80); email = txt(email, 120).toLowerCase();
        if(!dominioOk(email)) throw new Error(NEG);
        if(nome.length < 2) throw new Error('Informe o nome da pessoa.');
        if(senha.length < 8 || !/[a-zA-Z]/.test(senha) || !/[0-9]/.test(senha)) throw new Error('A senha inicial precisa ter ao menos 8 caracteres, com letras e números.');
        const sec = A.getAuth(secApp()); sec.languageCode = 'pt-BR';
        try{ await F.deleteDoc(F.doc(db, 'excluidos', email)); }catch(e){}
        const marca = { nome, email, criadoPor: C.user.uid, criadoEm: F.serverTimestamp() };
        let existia = false, uid = null, etapa = '';
        try{
          const cred = await A.createUserWithEmailAndPassword(sec, email, senha); uid = cred.user.uid;
        }catch(e){ if(e.code === 'auth/email-already-in-use') existia = true; else throw erro(e); }
        try{
          etapa = 'verificados';
          try{ await F.deleteDoc(F.doc(db, 'verificados', email)); }catch(e){}   // registro de tentativa anterior (as regras não permitem sobrescrever)
          await F.setDoc(F.doc(db, 'verificados', email), marca);
          etapa = 'perfil (users)';
          if(uid) await F.setDoc(F.doc(db, 'users', uid), { nome, email, role: 'vendedor', status: 'aprovado', criadoEm: F.serverTimestamp(), criadoPor: C.user.uid });
        }catch(e){ const x = erro(e); throw new Error(x.message + ' [falhou em: ' + etapa + (uid ? '; o login já foi criado no Firebase' : '') + ']'); }
        if(existia){ try{ await A.sendPasswordResetEmail(sec, email); }catch(e){} }   // conta antiga: a senha genérica não vale, manda link para redefinir
        try{ await A.signOut(sec); }catch(e){}
        return existia ? 'existia' : 'criada';
      },
      /* Exclui o acesso: apaga o perfil e a verificação e registra o e-mail em "excluidos" (impede recadastro sozinho). */
      async excluirUsuario(uid, email){
        if(!C.admin()) throw new Error('Apenas administradores.');
        email = txt(email, 120).toLowerCase();
        if(uid === C.user.uid || ADMINS.includes(email)) throw new Error('Esta conta não pode ser excluída.');
        try{
          await F.setDoc(F.doc(db, 'excluidos', email), { email, criadoPor: C.user.uid, criadoEm: F.serverTimestamp() });
          await F.deleteDoc(F.doc(db, 'verificados', email));
          await F.deleteDoc(F.doc(db, 'users', uid));
        }catch(e){ throw erro(e); }
      },
      /* Admin valida o e-mail de quem já se cadastrou (sem esperar o e-mail de confirmação). */
      async listarVerificados(){
        if(!C.admin()) return new Set();
        const s = await F.getDocs(F.collection(db, 'verificados')); return new Set(s.docs.map(d => d.id));
      },
      async validarEmail(email, nome){
        if(!C.admin()) throw new Error('Apenas administradores.');
        email = txt(email, 120).toLowerCase(); if(!dominioOk(email)) throw new Error(NEG);
        try{
          await F.deleteDoc(F.doc(db, 'verificados', email)).catch(() => {});
          await F.deleteDoc(F.doc(db, 'excluidos', email)).catch(() => {});
          await F.setDoc(F.doc(db, 'verificados', email), { nome: txt(nome || email, 80), email, criadoPor: C.user.uid, criadoEm: F.serverTimestamp() });
        }catch(e){ throw erro(e); }
      },
      async removerValidacao(email){ if(!C.admin()) throw new Error('Apenas administradores.'); try{ await F.deleteDoc(F.doc(db, 'verificados', txt(email, 120).toLowerCase())); }catch(e){ throw erro(e); } },
      async mudarUsuario(uid, status){ if(!C.admin()) throw new Error('Apenas administradores.'); await F.updateDoc(F.doc(db, 'users', uid), { status }); },

      /* ---------- comentários ---------- */
      async enviarComentario({ categoria, texto, itemChave, itemTitulo }){
        if(!C.aprovado()) throw new Error('Seu acesso não está liberado.');
        texto = txt(texto, 800);
        if(texto.length < 3) throw new Error('Escreva um pouco mais.');
        const b = F.writeBatch(db), ref = F.doc(F.collection(db, 'comentarios'));
        b.set(ref, { autorUid: C.user.uid, autorNome: txt(C.perfil ? C.perfil.nome : C.user.email, 80), categoria, texto, itemChave: txt(itemChave || 'geral', 64), itemTitulo: txt(itemTitulo || 'Geral', 140), status: 'pendente', criadoEm: F.serverTimestamp() });
        b.update(F.doc(db, 'users', C.user.uid), { ultimoComentario: F.serverTimestamp() });
        try{ await b.commit(); }catch(e){ throw new Error(e.code === 'permission-denied' ? 'Aguarde 30 segundos entre um comentário e outro.' : erro(e).message); }
      },
      async meusComentarios(){ const s = await F.getDocs(F.query(F.collection(db, 'comentarios'), F.where('autorUid', '==', C.user.uid))); return s.docs.map(d => ({ id: d.id, ...d.data() })).sort(por); },
      async dicasDoItem(chave){ const s = await F.getDocs(F.query(F.collection(db, 'comentarios'), F.where('itemChave', '==', chave), F.where('status', '==', 'aprovado'))); return s.docs.map(d => ({ id: d.id, ...d.data() })).sort(por); },
      async dicasAprovadas(){ const s = await F.getDocs(F.query(F.collection(db, 'comentarios'), F.where('status', '==', 'aprovado'))); return s.docs.map(d => ({ id: d.id, ...d.data() })).sort(por); },
      async listarComentarios(status){ if(!C.admin()) throw new Error('Apenas administradores.'); const s = await F.getDocs(F.query(F.collection(db, 'comentarios'), F.where('status', '==', status))); return s.docs.map(d => ({ id: d.id, ...d.data() })).sort(por); },
      async moderarComentario(id, status, nota){ if(!C.admin()) throw new Error('Apenas administradores.'); await F.updateDoc(F.doc(db, 'comentarios', id), { status, revisadoPor: txt(C.perfil ? C.perfil.nome : C.user.email, 80), revisadoEm: F.serverTimestamp(), notaAdmin: txt(nota || '', 300) }); },
      async excluirComentario(id){ if(!C.admin()) throw new Error('Apenas administradores.'); await F.deleteDoc(F.doc(db, 'comentarios', id)); },
    });
  }catch(e){
    console.error('Firebase não carregou', e);
    window.CVDConta = { configurado: true, indisponivel: true, resolvido: true, pronto: Promise.resolve(false), ouvintes: new Set(), dominioOk, estado: () => 'indisponivel' };
  }
}
window.__contaPronta = true;
window.dispatchEvent(new Event('cvd-conta-pronta'));
