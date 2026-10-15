// Cache só da "casca" do app (alguns KB). Os materiais em si são sempre links externos.
const VERSAO = 'cvd-materiais-v47';
const CASCA = ['./', 'index.html', 'firebase-config.js', 'conta.js', 'manifest.webmanifest', 'img/logo-branco.svg', 'img/icone.svg',
  'img/optymus.webp', 'img/clinical-plus.webp', 'img/dentsurg-pro.webp'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(CASCA)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Rede primeiro (pega sempre a lista de links mais nova); cai no cache se estiver offline.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, {cache: 'no-cache'}).then(r => { const copia = r.clone(); caches.open(VERSAO).then(c => c.put(e.request, copia)); return r; })
      .catch(() => caches.match(e.request))
  );
});
