"use strict";var precacheConfig=[["/qcx/index.html","848e81fdc5e74d79e7eae9a0b22e8783"],["/qcx/static/css/main.92c6952b.css","8b0c83eab122b295adeb144f91312392"],["/qcx/static/js/main.af2477f9.js","e3d1e50a3d7610a95b71b693a79a7a0b"],["/qcx/static/media/IosWallet.3dd1a08b.png","3dd1a08b2b996298eff6802e00d78217"],["/qcx/static/media/LiveStats.85d3df7f.png","85d3df7fa6d23c094fd41ba9d4e0cd01"],["/qcx/static/media/LiveStats.8a754643.png","8a75464372dec1578eed7c1a0b668664"],["/qcx/static/media/Notifications.427216ec.png","427216ecf1ea8e53cc2f1cc052613174"],["/qcx/static/media/Notifications.d25be9b7.png","d25be9b74f408a5655f34310baba3faf"],["/qcx/static/media/OpenOrders.57258e96.png","57258e967fb34d52c8f2494d8e949a75"],["/qcx/static/media/OpenOrders.e786b98d.png","e786b98d71c56f32dbf1b009d58c934c"],["/qcx/static/media/OrdersInfo.78d0a851.png","78d0a851f80178607662741d2e3e1461"],["/qcx/static/media/OrdersInfo.922873b0.png","922873b0043e2631476c3ea66b39c3ee"],["/qcx/static/media/PastTransactions.5a2edcbe.png","5a2edcbedcf481c3aad2d26929f5d3ae"],["/qcx/static/media/Trade.981bf426.png","981bf42684d493ecd2b13b451220e3f3"],["/qcx/static/media/Trade.ca0a90ef.png","ca0a90ef07b9edfb5ebc59445555bbe0"],["/qcx/static/media/TransactionInfo.5366af43.png","5366af433e45ae53da40a32d2855092f"],["/qcx/static/media/Wallet.e3c7e547.png","e3c7e547608eb16247713ce1fdbe8af9"],["/qcx/static/media/appstore.6c65b091.svg","6c65b091e7297bc687ab53b59e51a2c2"],["/qcx/static/media/gmail.847c083c.png","847c083cc09040091439e3c05d1fedde"],["/qcx/static/media/googleplay.ce177c0d.svg","ce177c0dce6812638ce90ba766ee5696"],["/qcx/static/media/icon.c00656cb.png","c00656cba45aabe652d82c441049d3fb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/qcx/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});