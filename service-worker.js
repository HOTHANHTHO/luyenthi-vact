/* Service worker — cho phép chạy offline sau lần mở đầu (khi đã host qua http/https) */
var CACHE = "vact-cache-20260619m";
var ASSETS = [
  "./",
  "./index.html",
  "./js/app.js",
  "./js/auth.js",
  "./data/questions.js",
  "./data/questions_hsa_de1.js",
  "./data/questions_hsa_de2_4.js",
  "./data/questions_bosung_20260619.js",
  "./data/questions_bosung2_20260619.js",
  "./data/questions_tho_de1_2.js",
  "./data/questions_tho_de3.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-180.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  // Network-first: luon lay ban moi khi co mang, offline thi dung cache
  e.respondWith(
    fetch(e.request).then(function (resp) {
      var copy = resp.clone();
      caches.open(CACHE).then(function (c) { c.put(e.request, copy); }).catch(function () {});
      return resp;
    }).catch(function () { return caches.match(e.request); })
  );
});
