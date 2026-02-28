const CACHE_NAME = 'security-plus-v5';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png',
    // New modules
    './domains.js',
    './subdomains.js',
    './acronyms.js',
    './storage.js',
    './testGenerator.js',
    './analytics.js',
    './dashboardView.js',
    './reinforcement.js',
    // Question blocks
    './questions/block01.js',
    './questions/block02.js',
    './questions/block03.js',
    './questions/block04.js',
    './questions/block05.js',
    './questions/block06.js',
    './questions/block07.js',
    './questions/block08.js',
    './questions/block09.js',
    './questions/block10.js',
    './questions/block11.js',
    './questions/block12.js',
    './questions/block13.js',
    './questions/block14.js',
    './questions/block15.js',
    './questions/block16.js',
    './questions/block17.js',
    './questions/block18.js',
    './questions/block19.js',
    './questions/block20.js',
    './questions/block21.js',
    './questions/block22.js',
    './questions/block23.js',
    './questions/block24.js',
    './questions/block25.js',
    './questions/block26.js',
    './questions/block27.js',
    './questions/block28.js',
    './questions/block29.js',
    './questions/block30.js'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching all assets');
            return cache.addAll(ASSETS);
        })
    );
});

// Activate & Cleanup old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
});

// Fetch events: Cache First, fallback to Network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

