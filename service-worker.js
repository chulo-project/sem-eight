const CACHE_VERSION = "v1";
const CACHE_NAME = `exam-prep-cache-${CACHE_VERSION}`;

const SCOPE = self.registration.scope;
const SCOPE_URL = new URL(SCOPE);
const SCOPE_PATH = SCOPE_URL.pathname;

const toUrl = (path) => new URL(path, SCOPE).toString();

const OFFLINE_URL = toUrl("offline.html");
const PRECACHE_URLS = [
  toUrl("./"),
  OFFLINE_URL,
  toUrl("manifest.webmanifest"),
  toUrl("assets/icon.svg"),
  toUrl("assets/css/style.css"),
];

const SITEMAP_URL = toUrl("sitemap.xml");

function uniqueStrings(values) {
  return Array.from(new Set(values));
}

function parseSitemapLocs(xmlText) {
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = re.exec(xmlText)) !== null) {
    locs.push(match[1].trim());
  }
  return locs;
}

async function getSitemapUrls() {
  const response = await fetch(SITEMAP_URL, { cache: "no-cache" });
  if (!response.ok) return [];
  const xml = await response.text();

  const locs = parseSitemapLocs(xml);
  const urls = locs
    .map((loc) => {
      try {
        return new URL(loc, SCOPE).toString();
      } catch (_) {
        return null;
      }
    })
    .filter(Boolean)
    .filter((u) => {
      const parsed = new URL(u);
      return isSameOrigin(parsed) && isInScope(parsed);
    });

  return uniqueStrings(urls);
}

async function precache() {
  const cache = await caches.open(CACHE_NAME);

  try {
    await cache.addAll(PRECACHE_URLS);
    return;
  } catch (e) {
    await Promise.all(
      PRECACHE_URLS.map(async (url) => {
        try {
          await cache.add(url);
        } catch (_) {
          // ignore individual precache failures
        }
      }),
    );
  }
}

async function precacheFromSitemap() {
  const cache = await caches.open(CACHE_NAME);

  try {
    const urls = await getSitemapUrls();
    await Promise.all(
      urls.map(async (url) => {
        try {
          await cache.add(url);
        } catch (_) {
          // ignore individual precache failures
        }
      }),
    );
  } catch (_) {
    return;
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    precache()
      .then(precacheFromSitemap)
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) => key.startsWith("exam-prep-cache-") && key !== CACHE_NAME,
            )
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => precacheFromSitemap())
      .then(() => self.clients.claim()),
  );
});

function isSameOrigin(requestUrl) {
  return requestUrl.origin === self.location.origin;
}

function isInScope(requestUrl) {
  return (
    requestUrl.origin === SCOPE_URL.origin &&
    requestUrl.pathname.startsWith(SCOPE_PATH)
  );
}

function isStaticAsset(request) {
  const url = new URL(request.url);
  if (!isSameOrigin(url)) return false;
  if (!isInScope(url)) return false;
  return /\.(?:css|js|png|jpg|jpeg|svg|webp|gif|ico|woff2?)$/i.test(
    url.pathname,
  );
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET") return;
  if (!isSameOrigin(url)) return;
  if (!isInScope(url)) return;

  if (request.mode === "navigate") {
    event.respondWith(
      caches.match(request, { ignoreSearch: true }).then((cached) => {
        const network = fetch(request)
          .then((response) => {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
            return response;
          })
          .catch(() => null);

        if (cached) {
          network.then(() => {});
          return cached;
        }

        return network.then((resp) => resp || caches.match(OFFLINE_URL));
      }),
    );
    return;
  }

  if (
    url.pathname.endsWith("/sitemap.xml") ||
    url.pathname.endsWith("sitemap.xml")
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request)
            .then((response) => {
              const copy = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
              return response;
            })
            .catch(() => cached),
      ),
    );
    return;
  }

  if (isStaticAsset(request)) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request)
            .then((response) => {
              const copy = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
              return response;
            })
            .catch(() => cached),
      ),
    );
  }
});
