const CACHE_NAME = "pwa-cache-v1";
const ASSETS = [
  "/",
  "/index.html",
  // Add your CSS, JS, or images here, for example:
  // '/style.css',
  // '/app.js'
];

// 1. Install Event: Cache essential assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching shell assets");
      return cache.addAll(ASSETS);
    }),
  );
});

// 2. Activate Event: Clean up old caches if version changes
self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
});

// 3. Fetch Event: Serve cached content offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return the cached file if found, otherwise fetch from the network
      return cachedResponse || fetch(event.request);
    }),
  );
});
