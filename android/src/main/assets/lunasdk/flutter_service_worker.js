'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4592521fa4097d2950a401993d51d169",
"version.json": "11bde44a3648895f04b9ebb6a819797a",
"favicon.ico": "066308b08065b7d8e3ed78b60ebaec34",
"index.html": "1bcabd6aef171270cf98e861018b1ab0",
"/": "1bcabd6aef171270cf98e861018b1ab0",
"main.dart.js": "3d19263918e9ae7dacf26ae57ae98e33",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/apple-touch-icon.png": "d97d01e3ad24b07d713e7c0d6c98037f",
"icons/icon-192.png": "260251c64f43a87d12cf71325f0ec45d",
"icons/icon-192-maskable.png": "3b4054062a251ac69252734b8b74beaf",
"icons/icon-512-maskable.png": "1a01966ac6fd17c6495b6f27017fe8d3",
"icons/icon-512.png": "b4523abd6732415ba6145b769013daca",
"manifest.json": "9c79f10094886115b0c56f1680974590",
"assets/AssetManifest.json": "d28806582a3ee69fbf74aa01ebd9bf34",
"assets/NOTICES": "7fbae1cf1d3e09ae70420c8aac27d140",
"assets/env.dev": "3843167c11d93df5c0e9a6db95e76120",
"assets/FontManifest.json": "e29643096330eea66b5f80bfc112130c",
"assets/AssetManifest.bin.json": "c7baa9720d1ed74b1c802010dd0bfbca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a8ed000bd502a5fbc89fbd8f7cc3aada",
"assets/fonts/MaterialIcons-Regular.otf": "813527e7de592c8c425d1c3c8166166a",
"assets/assets/images/img_lunaone_brand.png": "e2482863aaf76cdbb372e3aa2a0ed739",
"assets/assets/images/logo_text_luna.svg": "6c53288ccc451f453c6d070176e0fc27",
"assets/assets/images/img_artboard_alarm.png": "352e3e88393c1216bfa6b07fae987359",
"assets/assets/images/logo_luna_pos.png": "cdc1555e7eb7218211512f9befa76777",
"assets/assets/images/img_artboard_error.png": "ebd7881d7b46bdf00c8e4fb4b655c5cc",
"assets/assets/images/img_clock_circle.svg": "efb83de2b5dc64f5746bbb1f7c4bb408",
"assets/assets/images/img_logo_qris.png": "fc2462628665fcd12ee83670c167aa44",
"assets/assets/images/img_no_image.svg": "46326d89ec7e683cc415b0d38f0910ed",
"assets/assets/images/img_lunapos_logo_black.svg": "7425dc99fe40c64470f44e11d2e2ba03",
"assets/assets/images/img_lunaone_brand_original.png": "3ac119e736dee8c481feef6e479baf82",
"assets/assets/images/img_success_checklist.svg": "f4e1a368b987e56efa77afaa0c0b4c1c",
"assets/assets/images/img_luna_logo_half.svg": "bb76a63210d8e290475c174e3df1e087",
"assets/assets/images/img_badge_verified.svg": "2daf2c1e024381be77a0f206fa9a3160",
"assets/assets/images/img_lunaone_2.svg": "c954d33a3c0f8094fa0f4e1b89b9c8c3",
"assets/assets/images/img_empty_state.svg": "b9aa5ebb87ceea2e782c8cbfd3373ff2",
"assets/assets/images/img_logo_lunapos.svg": "7056dfdcf49130594d0f54876d432f38",
"assets/assets/images/img_success.png": "3cc6525019b62db7ee41fd730e52e846",
"assets/assets/images/img_artboard_qris_inactive.png": "47168af08477919329d89a866fe4e9e5",
"assets/assets/images/img_badge_standard.svg": "a12156eb0b412cf3d184d06374ebc8b0",
"assets/assets/icons/ic_clock.svg": "bd90a8c37f1d7c9a3b214691e51b33dc",
"assets/assets/icons/ic_filter.svg": "779a6512441e97c5aa91416de1ee1184",
"assets/assets/icons/ic_dot_three.svg": "2a35c7436b4066414e80c27bc5290088",
"assets/assets/icons/ic_line_setting.svg": "96e64121d0abe3afc1a9de162cbbc1c2",
"assets/assets/icons/ic_share.svg": "bca730569136815918987257e1955c2e",
"assets/assets/icons/ic_calculator_memory_store.svg": "5cc900ae35a137fa8b89c4ce46ed00d4",
"assets/assets/icons/ic_transaction_income.svg": "05cbf7a545b8ddf7f71ca86f922c70c5",
"assets/assets/icons/ic_menu_product.svg": "361b1fa8aed6c79d1df9ee5cb10f1f6c",
"assets/assets/icons/ic_mini_atm_deposit.svg": "10fde43ee8a6a4c965e2b7256ed4adc6",
"assets/assets/icons/ic_logo_byu.svg": "c111161e14d023ce323b1ca84f3b44b2",
"assets/assets/icons/ic_nav_home.svg": "63ec37d7e2361c5f2947aca40c627fcc",
"assets/assets/icons/ic_logo_tri.cdr.svg": "5b3a256599343a389dc2effcdf6a5211",
"assets/assets/icons/ic_info.svg": "02a73579253971243906044cb2c7626f",
"assets/assets/icons/ic_money_bag.svg": "67e3cd280b14160ebc76b1276a3dcca0",
"assets/assets/icons/ic_whatsapp.svg": "457adc977cb173d8a619e14ab09d6e1d",
"assets/assets/icons/ic_plus.svg": "56ade8d09f69d8ce9e3867ba202408fe",
"assets/assets/icons/ic_mini_atm_withdraw.svg": "340cc16852d2affe82c168e49caaf4a7",
"assets/assets/icons/ic_report.svg": "d38c93cb1154cbeecc28738343678569",
"assets/assets/icons/ic_menu_prepaid_phone_credit.svg": "1d058cec26e764bb3fcbf61999785198",
"assets/assets/icons/ic_menu_electricity_bill.svg": "dcc96a31b383c6e6651a209332b7d71f",
"assets/assets/icons/ic_luna_empty_outlet.svg": "9bc3f76a8682df103d5b6061468ab521",
"assets/assets/icons/ic_logo_telkomsel.svg": "4f743ffc301d7918c1e82e4058d80e3e",
"assets/assets/icons/ic_nav_accountancy.svg": "80478d98c26f638342140f1c2f47ebfe",
"assets/assets/icons/ic_nav_bell.svg": "4288062cd2b8db55299b8cd7928c766c",
"assets/assets/icons/ic_menu_contact.svg": "38a9598c158acae2742318d6ddbb20a1",
"assets/assets/icons/ic_calendar.svg": "785403147def8ef9d023a3556ea820d4",
"assets/assets/icons/ic_menu_googleplay.svg": "3a19d7f0962724cceee256d3f043684d",
"assets/assets/icons/ic_menu_internet_data.svg": "95b214a4932ed190b8ecf0f480dc3e04",
"assets/assets/icons/ic_outcome.svg": "28bfa80b635a545e8b32ab1ba650fdd4",
"assets/assets/icons/ic_arrow_bottom.svg": "a48aa4579a84b00305fc929b12d7c152",
"assets/assets/icons/ic_guide_book.svg": "efede68e0a1339ac934ecba55c4edf47",
"assets/assets/icons/ic_trash.svg": "6aaa284b60188eacc6f55ebe3bbe31bb",
"assets/assets/icons/ic_income.svg": "1eae3a7e814ccf70119c418bc0668042",
"assets/assets/icons/ic_chevron_down.svg": "d8a6280dfd19e02931b559932d6c840d",
"assets/assets/icons/ic_customer_service.svg": "15066eb6c433f2f60eaa8f16829e674a",
"assets/assets/icons/ic_close_in_circle.svg": "627f5e71bf67d0b22dd379b3a4c3e587",
"assets/assets/icons/ic_math_equals.svg": "363fcae6ea96fff522fa4ecc57c9db09",
"assets/assets/icons/ic_check_in_circle.svg": "cc3d69d63d74abf6929dfe2cd5defee5",
"assets/assets/icons/ic_logo_axis.svg": "cc1a814b0fa5b72b19bcb33686e19626",
"assets/assets/icons/ic_chevron_bot.svg": "61807257788cef6eaa2692579ad6acb7",
"assets/assets/icons/ic_menu_postpaid_phone_credit.svg": "2742d2b802798862e2b05b80b5179a00",
"assets/assets/icons/ic_action_print.svg": "615663528e3059a9e93861d1d4ca4c1b",
"assets/assets/icons/ic_action_share.svg": "c75c25d1e5716bc9f3308a2763fff3d9",
"assets/assets/icons/ic_green_arrow.svg": "0c0a283a500aa86db72a58b68407b88c",
"assets/assets/icons/ic_menu_electricity_token.svg": "b1d2953a8cc1b3570304b9a5ae8f1103",
"assets/assets/icons/ic_warning.svg": "b15b48bc2409f9fb6a0c9947e990c4cc",
"assets/assets/icons/ic_logo_im3.svg": "fd9c9018d52d627ddd2469b67365a3b8",
"assets/assets/icons/ic_math_divide.svg": "d413ac5153dc460485700f0cb608895d",
"assets/assets/icons/ic_check.svg": "b1cc46af3dc444f0341e27aa8cdfdbe0",
"assets/assets/icons/ic_logo_xl.svg": "e5ac7bc4f8a0739360f3e99793bf9df2",
"assets/assets/icons/ic_menu_topup_flazz.svg": "2b7ddaa4ff1304f0d76e7e147695fdf4",
"assets/assets/icons/ic_action_edit.svg": "b85243e4b52cefb723835df3a58714be",
"assets/assets/icons/ic_back.svg": "8dd7030d3926ed2d37927e1c0c94bdf1",
"assets/assets/icons/ic_logo_smartfren.svg": "b4aaaa5acbbba0d8eed0d6f9ed54ab6c",
"assets/assets/icons/ic_menu_setting.svg": "626b2fd9e1b51c14878f25d92e9f64bb",
"assets/assets/icons/ic_menu_business_card.svg": "ee91e7c27989beb42dc26d4d5a13d9f8",
"assets/assets/icons/ic_warning_2.svg": "d0166a044bc5b51e5e70e738c83f1427",
"assets/assets/icons/ic_nav_menu.svg": "ac3afae3f087bfafd8c0c79072f3cbd2",
"assets/assets/icons/ic_download.svg": "32029ddc49974b5d3363771a2dfa7c97",
"assets/assets/icons/ic_chevron_right.svg": "f6663d25a489deb3b356d1c48e7d8a16",
"assets/assets/icons/ic_menu_game.svg": "82e495b28e05fffb86ac4f284bd2559a",
"assets/assets/icons/ic_red_arrow.svg": "a453e4060cbb85f6a54847f7d60efef1",
"assets/assets/icons/ic_reminder.svg": "6524981b5c85c1ac1e72040883dffa03",
"assets/assets/icons/ic_clock_pending.svg": "5b6407faa51a07b14daea1275d3e8337",
"assets/assets/icons/ic_arrow_up.svg": "55c3c50e8979da0b2ca9a6bbe1fae38a",
"assets/assets/icons/ic_edit.svg": "1fa7cd7bccc053af513bb5a55c2ddc25",
"assets/assets/icons/ic_cancel.svg": "a054a0e7f1ecf52240963abd35dd1a96",
"assets/assets/icons/ic_action_delete.svg": "2800aca47800930955105ebfaf29a066",
"assets/assets/icons/ic_stock.svg": "e746518071b93eb1859a24075b0d4cf5",
"assets/assets/icons/ic_security_shield.svg": "9fbdc54a859cbbac42bdb17368ac56a6",
"assets/assets/icons/ic_transaction_outcome.svg": "96c89462d93380867cabbd4e0b8b6d5e",
"assets/assets/fonts/inter/Inter_18pt-LightItalic.ttf": "6eb3a2d2c6f095080ac034867886d0bf",
"assets/assets/fonts/inter/Inter_18pt-BoldItalic.ttf": "66469edaf106f7a1e14f4061212a1123",
"assets/assets/fonts/inter/Inter_18pt-Bold.ttf": "7ef6f6d68c7fedc103180f2254985e8c",
"assets/assets/fonts/inter/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/fonts/inter/Inter_18pt-MediumItalic.ttf": "c64a8c393f4d6ffd87f80723727b7f2c",
"assets/assets/fonts/inter/Inter_18pt-Light.ttf": "dfaec8b8820224135d07f1b409ceb214",
"assets/assets/fonts/inter/Inter_18pt-Italic.ttf": "ab4004692577ac82604c777fa83da556",
"assets/assets/fonts/inter/Inter_18pt-SemiBoldItalic.ttf": "0f93bef7d8e8ea0612ba37a71efcccff",
"assets/assets/fonts/inter/Inter_18pt-SemiBold.ttf": "e5532d993e2de30fa92422df0a8849dd",
"assets/assets/fonts/inter/Inter_18pt-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"assets/env.prod": "4dd79802de6abcac4a5b602792e33ada",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
