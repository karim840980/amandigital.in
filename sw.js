self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('aman-v1').then((cache) => {
      return cache.addAll(['/amandigital.in/']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
