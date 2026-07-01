const CACHE_NAME = 'vale-air-manager-v1-5-0-build-20260701-1538';
const ASSETS = [
  './', './index.html', './css/style.css', './js/app.js', './manifest.json', './BUILD.json',
  './assets/logos/logo-1.svg', './assets/logos/logo-2.svg', './assets/logos/logo-3.svg', './assets/logos/logo-4.svg',
  './assets/avatars/avatar-ceo-1.svg', './assets/avatars/avatar-ceo-2.svg', './assets/avatars/avatar-ceo-3.svg', './assets/avatars/avatar-ceo-4.svg',
  './assets/planes/plane-regional.svg', './assets/planes/plane-turboprop.svg', './assets/planes/plane-narrow.svg', './assets/planes/plane-wide.svg', './assets/planes/plane-heavy.svg', './assets/planes/plane-cargo.svg',
  './assets/staff/pilot.svg', './assets/staff/crew.svg', './assets/staff/mechanic.svg', './assets/staff/director.svg',
  './data/airports.json', './data/aircraft.json', './data/staff.json'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).catch(() => caches.match('./index.html'))));
});
