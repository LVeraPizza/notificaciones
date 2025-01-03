self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        'https://lverapizza.github.io/notificaciones/principal.html',
        'https://lverapizza.github.io/notificaciones/manifest.json',
        'https://lverapizza.github.io/notificaciones/index.html',
        'https://lverapizza.github.io/notificaciones/contacto.html',
        'https://lverapizza.github.io/notificaciones/css/styles.css',
        'https://lverapizza.github.io/notificaciones/script.js',
        'https://lverapizza.github.io/notificaciones/splash.js',
        'https://lverapizza.github.io/notificaciones/service-worker.js',
        'https://lverapizza.github.io/notificaciones/logo_vp.png',
        'https://lverapizza.github.io/notificaciones/img/eventos/logo_año_nuevo.png',
        "https://lverapizza.github.io/notificaciones/firebase-cloud-messaging-push-scope", 
        "https://lverapizza.github.io/notificaciones/firebase-messaging-sw.js",

        // Agrega otros archivos que necesites en el caché
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
