const staticAssets =[
  './',
  './css/main.css',
  './index.html',
    './about.html',
    './work.html',
    './contact.html',
];



self.addEventListener('install',async event =>{
  const cache = await caches.open('static');
  cache.addAll(staticAssets);
});

self.addEventListener('fetch', event =>{
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req){
  const cachedResponse = await caches.match(req);
  return cachedResponse || fetch(req);
}
self.addEventListener('fetch', function(event) {});
