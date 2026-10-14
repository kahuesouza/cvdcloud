/* =====================================================================
   Configuração do Firebase (login, catálogo protegido, comentários e admin)
   ---------------------------------------------------------------------
   1) Crie o projeto no Firebase (guia: LEIA-ME_ADMIN.md).
   2) Cole abaixo os valores do "Config do app da Web" e salve.
   Esses valores NÃO são segredos (identificam o projeto). A proteção dos
   dados vem do login e das regras do Firestore (firestore.rules).
   Enquanto estiver "null", o app funciona sem login (modo de preparação).
   ===================================================================== */
window.CVD_FIREBASE = null;

/* Exemplo do formato (substitua pelos seus valores):
window.CVD_FIREBASE = {
  apiKey: "COLE_AQUI",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  projectId: "SEU-PROJETO",
  storageBucket: "SEU-PROJETO.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxx"
};
*/

/* Só estes domínios podem criar conta (a regra de verdade está em firestore.rules). */
window.CVD_DOMINIOS = ['cvdvale.com.br', 'cvdentus.com.br'];

/* Administradores por e-mail (só para a interface; a regra de verdade está em firestore.rules). */
window.CVD_ADMINS = ['kahuesouza@cvdvale.com.br'];
