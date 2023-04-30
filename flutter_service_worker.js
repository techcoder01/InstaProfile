'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a0bcf8292a02fc653a14be52ac090c62",
".git/config": "ae5023024c06f7556effe356bf29f092",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1de9f2cc132c5a9b109da9b0034013c4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "93a69987c0a3c8caa4dae0fbcb16931c",
".git/logs/refs/heads/master": "93a69987c0a3c8caa4dae0fbcb16931c",
".git/logs/refs/remotes/origin/master": "ac827961daab7e616a505684e27f3db2",
".git/objects/00/a194e68c41d8de66fc0a9f14375a9ad1c3ef65": "0432b5221183bad86993fd1fd91a1665",
".git/objects/06/a6c531b9412807e2f84ae49e625a6e5f68cd35": "01847c96ffc160fa0c8007fbc66f5b1c",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/40378cb2f578c3472da2a1fa684bea6a7b4af5": "8421579e0cf7323d47f25c0e5c83ec40",
".git/objects/17/56182ed3e6830d0e0c844150da40c947f4047b": "7519708d1c9916e0a78509670fba66b1",
".git/objects/1f/33664d17e07223e176263361551b1f0289f273": "7a390907785c76def429604ed37aa151",
".git/objects/25/f2fe52c02aadd409228d51c842d843382f0d66": "f1c015d6b0ccc00f1361a32b757e07e1",
".git/objects/26/fdd8c225a7320e090485f57b424b17380fd627": "75c7f860a3df472d9a4fe13d9f1674a4",
".git/objects/29/cdcc078597afc3c4d46243681db74639e0db88": "0a5aa90309365de93600a6dbfdeb2002",
".git/objects/33/5f784788856314dc668dc3a9590955e8cd8955": "db833ad6dedad950323481fcab6032b9",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/e855ddecee27bfc9ee98b81921017b349c5c31": "4e0f3ddaa077b2710a4389e395b21f1c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/86fd74f77c5f17de2902afee264b0f878e7bf6": "8ae97de8d3e54a1b36b157e559af5c95",
".git/objects/83/adf523231e58ac4e6493e737c2db833ba737e6": "2d5e4acf3f0262b2c4151499d28efa3d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/04ff28b7935f7ba33e8edf253dbf34bdf62cb2": "c1bbb02cd3fec6ab4173544011d6a368",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/082335b9027c58fb8b9d3b45e6f30713ecf550": "ace68940615afd73c29d18910e918e84",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/846ad1234b278496ccc9c0b6fa304212c74019": "a0a561466277106f54e6fa66161f0955",
".git/objects/af/7aff6740ef815069993ce16256a68ab7a9331d": "5b655289b590da3e7ee18c07a8b3c4be",
".git/objects/b1/fa11c53ac3f8c30c0caf8093a81345bd0db454": "4b4046d63666a44b88a0b68cf904f551",
".git/objects/b2/db0aa2f2aeee722b8876905b9c269df92306d0": "e552b1a95e5a80e4c4a2ae17cd42fb75",
".git/objects/b6/06d33c6d6d3eb2869c629ff381d3b0f5359e11": "900a8a0ad451ad47ad60ad7432b02365",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d0/5781dc1e79d19c45e83611af303b1c5bdeb48e": "37e936c7c948628129ab04b159d27dba",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/2e8e0ccd7cf98a98fca7b7e62a8ae5379fb09e": "581fa585755d42ca5585568088920de6",
".git/objects/e5/4b8d2b711101f2b6541d7d426bf673df6a5a7c": "8ff3037238a2a2301b9e9b0640ca9b90",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/db55a721f2ffaa9b19ed28024511c1708fe12b": "076aab75e00a7b88b96b42147d0eadee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/c277ea04112016124d92e21eee0db6ca58de71": "212d45cbf313a919c53f231b7cf6555f",
".git/objects/f3/5a36193573ce3e420f628c39e09a8fa9dfc4e8": "068dc7519e1ccc3fcd132d0203f106e0",
".git/refs/heads/master": "a235a147bad01d2108e4c843898369e1",
".git/refs/remotes/origin/master": "a235a147bad01d2108e4c843898369e1",
"assets/AssetManifest.json": "9b158f8e5badddc6e504363c0d6ceb6b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/1.png": "9a076ea5f33e600df26a592babfb97c7",
"assets/images/2.png": "80e8021cc07b043a6011dba2450122a4",
"assets/images/3.png": "9180340507ef05987ad9b5055dc141ee",
"assets/images/5.png": "132aababfbf10880dc977b86430e0d72",
"assets/images/6.png": "c0a906e370b83049254cca63165c537c",
"assets/images/7.png": "2c4ec9f672c3ff74092056d126a0d71c",
"assets/images/AbdulHannan.jpg": "3ab7340e8d53f6418986ad8c7b4018b2",
"assets/images/follow.png": "91e57f828093c677f3703b13a39bb40f",
"assets/images/link1.png": "84dccd89c5c66c83feac94337b38f0d0",
"assets/images/p1.png": "9995031832e70bbb6b9ab2fb1c42a4ad",
"assets/images/p2.png": "ed029acc44f7bf7e6bb81fe167512f1e",
"assets/images/p3.png": "80e8021cc07b043a6011dba2450122a4",
"assets/images/p4.png": "762f165d8b61aaedba83643057c95152",
"assets/images/p5.png": "c59ee3eddfc1368baaf382d36837e881",
"assets/images/profilePic.jpg": "cc5def571139916f31f48f766aa8ae80",
"assets/NOTICES": "1c1af7a96477dd23b121bf6b33c55714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7fb420e083fb3bf1d9069170ffc33cab",
"/": "7fb420e083fb3bf1d9069170ffc33cab",
"main.dart.js": "030a5910d96bdc6e7eb511e613bb5f47",
"manifest.json": "cb7e322ac108772ab370531f1af12113",
"version.json": "6942a9a5e1c03917382547250869e5df"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
