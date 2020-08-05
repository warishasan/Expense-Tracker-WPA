

const cacheName = 'v1';

/*const cacheAssets = [
  './serviceRegister.js',
  './index.html',
  './static/js/bundle.js',
  './static/js/0.chunk.js',
  './static/js/main.chunk.js',
  './App.js',
  './'


];*/


const cacheAssets = [
  './static/js/2.f0187318.chunk.js',
  './index.html',
  './static/js/main.e61f4e11.chunk.js',
  './static/css/main.fa5ead51.chunk.css',
  './'


];





// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});


this.addEventListener("fetch", (event) => {

  if (!navigator.onLine){
    event.respondWith(
      caches.match(event.request).then((resp) => {
  
        if (resp) {
          return resp
        }

        let requestUrl = event.request.clone();
        fetch(requestUrl)
      }
  
      )
  
    )
  

  }
 
})


// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});


/*










/*
const cacheName = 'v1';

const cacheAssets = [
    'serviceRegister.js',
    
    'index.html',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple',
  

];

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});





self.addEventListener('fetch', function(event) {
  if (!navigator.onLine){
    event.respondWith(
      caches.match(event.request).then((result)=>{
        console.log('results',result);
        if (result){
          return result;

        }
      })
    )
  }
})



// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
*/

/*


self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple").then(()=>{return fetch(event.request)})
    .catch(function() {
      return caches.match("offline.html");
    })
  );
});

*/