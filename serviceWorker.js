const staticBookBrowser = "book-browser-v2";

const assets = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./image/1984.jpeg",
  "./image/To_Kill_a_Mockingbird.jpg",
  "./image/The_Great_Gatsby.jpeg",
  "./image/Pride_and_Prejudice.jpg",
  "./image/The_Catcher_in_the_Rye.jpg"
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticBookBrowser).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (activateEvent) => {
  const cacheWhitelist = [staticBookBrowser];
  activateEvent.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});