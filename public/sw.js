if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => a(e, c),
      o = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "3415d964f50851638672c398558be4e7",
        },
        {
          url: "/_next/static/On9w8nnI4bnNRophj0ndF/_buildManifest.js",
          revision: "46046de7cc050583ab466c54547b1e61",
        },
        {
          url: "/_next/static/On9w8nnI4bnNRophj0ndF/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/198.31adee67f206fa9d.js",
          revision: "31adee67f206fa9d",
        },
        {
          url: "/_next/static/chunks/341.716d46e6e5cb6bdc.js",
          revision: "716d46e6e5cb6bdc",
        },
        {
          url: "/_next/static/chunks/472.a3826d29d6854395.js",
          revision: "a3826d29d6854395",
        },
        {
          url: "/_next/static/chunks/4bd1b696-cf72ae8a39fa05aa.js",
          revision: "cf72ae8a39fa05aa",
        },
        {
          url: "/_next/static/chunks/642.5a9112b2413dbb60.js",
          revision: "5a9112b2413dbb60",
        },
        {
          url: "/_next/static/chunks/855-ef9fa67a1727ba9c.js",
          revision: "ef9fa67a1727ba9c",
        },
        {
          url: "/_next/static/chunks/955-eef566c2181946fd.js",
          revision: "eef566c2181946fd",
        },
        {
          url: "/_next/static/chunks/964-cd4f0f4d3b90d2a3.js",
          revision: "cd4f0f4d3b90d2a3",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-f7bbc1d774eb830b.js",
          revision: "f7bbc1d774eb830b",
        },
        {
          url: "/_next/static/chunks/app/layout-24768d10081881a4.js",
          revision: "24768d10081881a4",
        },
        {
          url: "/_next/static/chunks/app/page-d82c40e88b65df32.js",
          revision: "d82c40e88b65df32",
        },
        {
          url: "/_next/static/chunks/app/sign-in/%5B%5B...sign-in%5D%5D/page-45fa15136b1312b7.js",
          revision: "45fa15136b1312b7",
        },
        {
          url: "/_next/static/chunks/framework-7c95b8e5103c9e90.js",
          revision: "7c95b8e5103c9e90",
        },
        {
          url: "/_next/static/chunks/main-10e867752addc3b8.js",
          revision: "10e867752addc3b8",
        },
        {
          url: "/_next/static/chunks/main-app-05f408737f950664.js",
          revision: "05f408737f950664",
        },
        {
          url: "/_next/static/chunks/pages/_app-663ec5428c344dae.js",
          revision: "663ec5428c344dae",
        },
        {
          url: "/_next/static/chunks/pages/_error-544778206352ce59.js",
          revision: "544778206352ce59",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-c159dbddfead4df7.js",
          revision: "c159dbddfead4df7",
        },
        {
          url: "/_next/static/css/f64eeea1aeac65e4.css",
          revision: "f64eeea1aeac65e4",
        },
        {
          url: "/_next/static/media/569ce4b8f30dc480-s.p.woff2",
          revision: "ef6cefb32024deac234e82f932a95cbd",
        },
        {
          url: "/_next/static/media/747892c23ea88013-s.woff2",
          revision: "a0761690ccf4441ace5cec893b82d4ab",
        },
        {
          url: "/_next/static/media/8d697b304b401681-s.woff2",
          revision: "cc728f6c0adb04da0dfcb0fc436a8ae5",
        },
        {
          url: "/_next/static/media/93f479601ee12b01-s.p.woff2",
          revision: "da83d5f06d825c5ae65b7cca706cb312",
        },
        {
          url: "/_next/static/media/9610d9e46709d722-s.woff2",
          revision: "7b7c0ef93df188a852344fc272fc096b",
        },
        {
          url: "/_next/static/media/ba015fad6dcf6784-s.woff2",
          revision: "8ea4f719af3312a055caf09f34c89a77",
        },
        { url: "/file.svg", revision: "d09f95206c3fa0bb9bd9fefabfd0ea71" },
        { url: "/globe.svg", revision: "2aaafa6a49b6563925fe440891e32717" },
        {
          url: "/icons/0ass-128.png",
          revision: "3e4163f033948663881c9289debc76cf",
        },
        {
          url: "/icons/0ass-144.png",
          revision: "be7bf8ebe0f1cfdcd4763079e0d2f62c",
        },
        {
          url: "/icons/0ass-152.png",
          revision: "4b4a092302c3439446a58387179e1873",
        },
        {
          url: "/icons/0ass-16.png",
          revision: "fbe39b6d36c0476ae3b84a05a10e9fbb",
        },
        {
          url: "/icons/0ass-180.png",
          revision: "aba43d170035d3c4af6d365c0bc3d3ba",
        },
        {
          url: "/icons/0ass-192.png",
          revision: "42c61156b622010c8a710186556f527b",
        },
        {
          url: "/icons/0ass-256.png",
          revision: "e50751d4d79982b9e639f6bfda8c3f40",
        },
        {
          url: "/icons/0ass-48.png",
          revision: "37c4f0905de60e158cfa22515405c9d0",
        },
        {
          url: "/icons/0ass-512.png",
          revision: "ecdd328a1e1ec57bfe3b57bf4751b749",
        },
        {
          url: "/icons/0ass-64.png",
          revision: "30fa069d5e79b5e89a385a0602b96e2e",
        },
        {
          url: "/icons/0ass-72.png",
          revision: "ae1aed9d58fe6656dcfa2b92c4344adc",
        },
        {
          url: "/icons/0ass-96.png",
          revision: "3fc57a708c70cff2b83cb4e32790527d",
        },
        { url: "/manifest.json", revision: "fd898146c65f900b8582439cb9df51d3" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/vercel.svg", revision: "c0af2f507b369b085b35ef4bbe3bcf1e" },
        { url: "/window.svg", revision: "a2760511c65806022ad20adf74370ff3" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
