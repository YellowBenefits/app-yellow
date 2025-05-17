self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('yellow-cache').then(function(cache) {
      return cache.addAll([
        'index.html',
        'index.css',
        'nicepage.css',
        'jquery.js',
        'nicepage.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
