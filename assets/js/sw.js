/**
  References:

  1. https://developers.google.com/web/fundamentals/primers/service-workers
  2. https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook
  3. https://googlechrome.github.io/samples/service-worker/
  4. https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
  5. https://serviceworke.rs/
*/

const RUNTIME = 'runtime';

self.skipWaiting();

self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            (async () => {
                const cache = await caches.open(RUNTIME);
                const cachedResponse = await cache.match(event.request);
                const networkResponsePromise = fetch(event.request);

                event.waitUntil(
                    (async () => {
                        const networkResponse = await networkResponsePromise;
                        await cache.put(event.request, networkResponse.clone());
                    })()
                );

                // Returned the cached response if we have one, otherwise return the network response.
                return cachedResponse || networkResponsePromise;
            })()
        );
    }
});
