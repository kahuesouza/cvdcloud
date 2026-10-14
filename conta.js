/* =====================================================================
   Camada de dados: login, comentários e painel admin (Firebase)
   Só carrega o Firebase se firebase-config.js estiver preenchido.
   Toda a segurança de verdade está nas regras do Firestore (firestore.rules):
   este arquivo é só a interface com o servidor.
   ===================================================================== */
const V = '10.14.1';
const CFG = window.CVD_FIREBASE;

function semConfig(){
  window.CVDConta = { configurado: false, pronto: Promise.resolve(false) };
}

if(!CFG || !CFG.apiKey || CFG.apiKey === 'COLE_AQUI'){ semConfig(); }
else {
  let resolverPronto; const pronto = new Promise(r => resolverPronto = r);
  window.CVDConta = { configurado: true, pronto, user: null, perfil: null, ouvintes: new Set() };
  try{
    const [{ initializeApp }, A, F] = await Promise.all([
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`),
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-auth.js`),
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`),
    ]);
    const app = initializeApp(CFG), auth = A.getAuth(app), db = F.getFirestore(app);
    auth.languageCode = 'pt-BR';
    const C = window.CVDConta;
    const avisar = () => C.ouvintes.forEach(fn => { try{ fn(); }catch(e){} });
    const txt = (s, max) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);

    const lerPerfil = async u => { const s = await F.getDoc(F.doc(db, 'users', u.uid)); return s.exists() ? { uid: u.uid, ...s.data() } : null; };
    A.onAuthStateChanged(auth, async u => {
      C.user = u; C.perfil = null;
      if(u){ try{ await u.reload(); await auth.currentUser.getIdToken(true); C.perfil = await lerPerfil(auth.currentUser); }catch(e){} }
      C.resolvido = true; resolverPronto(true); avisar();
    });

    const erro = e => {
      const m = { 'auth/invalid-credential':'E-mail ou senha incorretos.', 'auth/wrong-password':'E-mail ou senha incorretos.', 'auth/user-not-found':'E-mail ou senha incorretos.',
        'auth/email-already-in-use':'Este e-mail já tem cadastro.', 'auth/weak-password':'Senha fraca. Use ao menos 8 caracteres.', 'auth/invalid-email':'E-mail inválido.',
        'auth/too-many-requests':'Muitas tentativas. Aguarde alguns minutos e tente de novo.', 'auth/network-request-failed':'Sem conexão. Tente de novo.',
        'permission-denied':'Sem permissão para esta ação.' };
      return new Error(m[e.code] || 'Algo deu errado. Tente novamente.');
    };

    Object.assign(C, {
      async cadastrar(nome, email, senha){
        nome = txt(nome, 80); email = txt(email, 120).toLowerCase();
        if(nome.length < 2) throw new Error('Informe seu nome.');
        if(senha.length < 8) throw new Error('A senha precisa ter ao menos 8 caracteres.');
        try{
          const cred = await A.createUserWithEmailAndPassword(auth, email, senha);
          await F.setDoc(F.doc(db, 'users', cred.user.uid), { nome, email, role: 'vendedor', status: 'pendente', criadoEm: F.serverTimestamp() });
          try{ await A.sendEmailVerification(cred.user); }catch(e){}
        }catch(e){ throw erro(e); }
      },
      async entrar(email, senha){ try{ await A.signInWithEmailAndPassword(auth, txt(email, 120).toLowerCase(), senha); }catch(e){ throw erro(e); } },
      async sair(){ await A.signOut(auth); },
      async recuperarSenha(email){ try{ await A.sendPasswordResetEmail(auth, txt(email, 120).toLowerCase()); }catch(e){ /* não revela se o e-mail existe */ } },
      async reenviarVerificacao(){ try{ await A.sendEmailVerification(auth.currentUser); }catch(e){ throw erro(e); } },
      async atualizar(){ if(auth.currentUser){ await auth.currentUser.reload(); await auth.currentUser.getIdToken(true); C.user = auth.currentUser; C.perfil = await lerPerfil(auth.currentUser); avisar(); } },
      aprovado(){ return !!(C.user && C.user.emailVerified && C.perfil && C.perfil.status === 'aprovado'); },
      admin(){ return C.aprovado() && C.perfil.role === 'admin'; },

      /* ---------- comentários (vendedor) ---------- */
      async enviarComentario({ categoria, texto, itemChave, itemTitulo }){
        if(!C.aprovado()) throw new Error('Sua conta ainda não foi aprovada.');
        texto = txt(texto, 800);
        if(texto.length < 3) throw new Error('Escreva um pouco mais.');
        const b = F.writeBatch(db), ref = F.doc(F.collection(db, 'comentarios'));
        b.set(ref, { autorUid: C.user.uid, autorNome: C.perfil.nome, categoria, texto, itemChave: txt(itemChave || 'geral', 64), itemTitulo: txt(itemTitulo || 'Geral', 140), status: 'pendente', criadoEm: F.serverTimestamp() });
        b.update(F.doc(db, 'users', C.user.uid), { ultimoComentario: F.serverTimestamp() });
        try{ await b.commit(); C.perfil.ultimoComentario = new Date(); }catch(e){ throw new Error(e.code === 'permission-denied' ? 'Aguarde 30 segundos entre um comentário e outro.' : erro(e).message); }
      },
      async meusComentarios(){
        const s = await F.getDocs(F.query(F.collection(db, 'comentarios'), F.where('autorUid', '==', C.user.uid)));
        return s.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (b.criadoEm?.seconds || 0) - (a.criadoEm?.seconds || 0));
      },
      async dicasDoItem(chave){
        const s = await F.getDocs(F.query(F.collection(db, 'comentarios'), F.where('itemChave', '==', chave), F.where('status', '==', 'aprovado')));
        return s.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (b.criadoEm?.seconds || 0) - (a.criadoEm?.seconds || 0));
      },
      async dicasAprovadas(){
        const s = await F.getDocs(F.query(F.collection(db, 'comentarios'), F.where('status', '==', 'aprovado')));
        return s.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (b.criadoEm?.seconds || 0) - (a.criadoEm?.seconds || 0));
      },

      /* ---------- admin ---------- */
      async listarComentarios(status){
        if(!C.admin()) throw new Error('Apenas administradores.');
        const s = await F.getDocs(F.query(F.collection(db, 'comentarios'), F.where('status', '==', status)));
        return s.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (b.criadoEm?.seconds || 0) - (a.criadoEm?.seconds || 0));
      },
      async moderarComentario(id, status, nota){
        if(!C.admin()) throw new Error('Apenas administradores.');
        await F.updateDoc(F.doc(db, 'comentarios', id), { status, revisadoPor: C.perfil.nome, revisadoEm: F.serverTimestamp(), notaAdmin: txt(nota || '', 300) });
      },
      async excluirComentario(id){ if(!C.admin()) throw new Error('Apenas administradores.'); await F.deleteDoc(F.doc(db, 'comentarios', id)); },
      async listarUsuarios(status){
        if(!C.admin()) throw new Error('Apenas administradores.');
        const s = await F.getDocs(F.query(F.collection(db, 'users'), F.where('status', '==', status)));
        return s.docs.map(d => ({ uid: d.id, ...d.data() })).sort((a, b) => (b.criadoEm?.seconds || 0) - (a.criadoEm?.seconds || 0));
      },
      async mudarUsuario(uid, status){
        if(!C.admin()) throw new Error('Apenas administradores.');
        await F.updateDoc(F.doc(db, 'users', uid), { status });
      },
    });
  }catch(e){
    console.error('Firebase não carregou', e);
    window.CVDConta = { configurado: true, indisponivel: true, pronto: Promise.resolve(false), ouvintes: new Set() };
  }
}
window.dispatchEvent(new Event('cvd-conta-pronta'));
