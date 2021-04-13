/**
  References:

  1. https://developers.google.com/web/fundamentals/primers/service-workers
  2. https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook
  3. https://googlechrome.github.io/samples/service-worker/
  4. https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
  5. https://serviceworke.rs/
*/

const CACHE_NAME = 'runtime';

self.skipWaiting();

self.addEventListener('fetch', function (event) {
  // Do nothing if not from the same origin
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      return fetch(event.request).then(function (response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // IMPORTANT: Clone the response. A response is a stream
        // and because we want the browser to consume the response
        // as well as the cache consuming the response, we need
        // to clone it so we have two streams.
        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
