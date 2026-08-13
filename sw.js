// Service Worker minimal — sert uniquement à permettre au navigateur de détecter
// une nouvelle version du fichier index.html et à proposer un rechargement propre.
// Ne met rien en cache pour offline (volontairement, cf. Kaizen = sauvegardes
// directes en D1 en temps réel, aucun besoin de fonctionnement hors-ligne) afin
// de toujours servir la dernière version disponible sur le réseau.

const SW_VERSION = '2026.08.13-4';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Laisse passer toutes les requêtes réseau normalement (pas de cache offline)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
