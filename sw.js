self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("winter-arc").then(cache => {
      return cache.addAll(["./", "./index.html"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
});
