//minimalistic worker with the only goal to fulfill Chrome/Edge's PWA install requests
//no service worker caches are used, only the browser cache
//additional .html files can be pre loaded using .js scripts linked in index.html.
//via fetch API,it could be loaded here)
let _isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
console.log(">>>service worker loading,isSafari:"+_isSafari);

self.addEventListener('activate', function (event) {
  console.log("!!!!!sw activate");
  event.waitUntil(self.clients.claim());
});

self.addEventListener('install', function(event) {
  console.log("!!!!!!sw install");
  event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener('fetch', function (event) {
  console.info('!!!!sw fetch :' + event.request.url + ",mode:" +event.request.mode);
  if (_isSafari) {
    //to use the service worker for Safari
    //safari works different from Chrome and FF:
    //it needs to explicitly request from network when being offline
    //otherwise loading additional html files  would not work
    //Chrome and FF do the right thing by default
    event.respondWith(fetch(event.request));
  }
});
