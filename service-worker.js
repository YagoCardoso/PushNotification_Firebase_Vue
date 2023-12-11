// service-worker.js

const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',  // Adicione outras páginas que deseja cachear
  '/manifest.json',
  '/css/styles.css',
  '/path/to/perfil-icon.jpeg',
  '/path/to/icon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
