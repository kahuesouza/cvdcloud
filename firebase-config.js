/* =====================================================================
   Configuração do Firebase (login, catálogo protegido, comentários e admin)
   ---------------------------------------------------------------------
   Esses valores NÃO são segredos (identificam o projeto). A proteção dos
   dados vem do login e das regras do Firestore (firestore.rules).
   Se esta configuração for removida (null), o app volta ao modo de
   preparação (sem login).
   ===================================================================== */
window.CVD_FIREBASE = {
  apiKey: "AIzaSyBe8sADQa8drl-VHIadXtQmgQa7-HjKC4U",
  authDomain: "cvd-vale.firebaseapp.com",
  projectId: "cvd-vale",
  storageBucket: "cvd-vale.firebasestorage.app",
  messagingSenderId: "1019559739053",
  appId: "1:1019559739053:web:4cdbd254d1df9821571024"
};

/* Só estes domínios podem criar conta (a regra de verdade está em firestore.rules). */
window.CVD_DOMINIOS = ['cvdvale.com.br', 'cvdentus.com.br'];

/* Administradores por e-mail (só para a interface; a regra de verdade está em firestore.rules). */
window.CVD_ADMINS = ['kahuesouza@cvdvale.com.br'];
