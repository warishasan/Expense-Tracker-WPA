

const cacheName = 'v1';

/*
const cacheAssets = [
  './',
  './serviceRegister.js',
  './index.html',
  
  './App.js'
  


];
*/

const cacheAssets = [
  './',
  './static/css/main.f95d1124.chunk.css',
  './index.html',
  './static/js/2.c7367c9a.chunk.js',
  './static/js/main.e506733e.chunk.js'
 


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


/*

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

*/


self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

      .then(response => {
        
        return caches.open(cacheName).then(cache => {
          cache.put(event.request.url, response.clone());
          return response;
        });
      });

    }).catch(error => {

        console.log("error in loading pages")

    })
  );
});





self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheAllowlist = [cacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
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