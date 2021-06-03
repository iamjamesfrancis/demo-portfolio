const currentCacheName = "static-v4";
// Last `v static-v3
self.addEventListener("install", (e) => {
  self.skipWaiting();

  e.waitUntil(
    caches.open(currentCacheName).then((cache) => {
      cache.addAll([
        "./",
        "./404.html",
        "./style/main.css",
        "./style/fullpage.min.css",
        "./js/fullpage.min.js",
        "./js/gsap.min.js",
        "./js/typed.min.js",
        "./js/app.js",
        "./images/ams.png",
        "./images/angular.png",
        "./images/arrow_down.png",
        "./images/bootstrap.png",
        "./images/chatbot.png",
        "./images/circle.png",
        "./images/copyright.png",
        "./images/css.png",
        "./images/django.png",
        "./images/figma.png",
        "./images/flutter.png",
        "./images/github.png",
        "./images/gmail.png",
        "./images/help.png",
        "./images/html.png",
        "./images/insta.png",
        "./images/jquery.png",
        "./images/js.png",
        "./images/logo.png",
        "./images/nttf_logo.png",
        "./images/outlook.png",
        "./images/ps.png",
        "./images/python.png",
        "./images/repeat.png",
        "./images/sqaure.png",
        "./images/stackoverflow.png",
        "./images/vue.png",
        "./manifest.json",
        "./logo/logo.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

const expectedCaches = [currentCacheName];

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!expectedCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
