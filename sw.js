const CACHE_NAME = 'km-v87-4';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request)); });
