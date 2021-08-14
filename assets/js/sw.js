/**
  References:

  1. https://developers.google.com/web/fundamentals/primers/service-workers
  2. https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook
  3. https://googlechrome.github.io/samples/service-worker/
  4. https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
  5. https://serviceworke.rs/
  6. https://www.youtube.com/watch?v=baSiSIyTGSk
*/

const RUNTIME = 'runtime';

self.skipWaiting();

self.addEventListener('fetch', (event) => {
  // Do nothing if not the same origin
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Network first strategy
  event.respondWith(
    (async () => {
      const cache = await caches.open(RUNTIME);

      try {
        const networkResponse = await fetch(event.request);

        // Save/Update cache if network response is ok
        if (networkResponse && networkResponse.status === 200) {
          cache.put(event.request, networkResponse.clone());
        }

        return networkResponse;
      } catch (e) {
        const cachedResponse = await cache.match(event.request);

        return cachedResponse;
      }
    })()
  );
});
