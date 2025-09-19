self.addEventListener('install', (event) => {
  console.log('Service Worker встановлено');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
