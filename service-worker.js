"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["app.8c0b67be393bf13671b8fb3c7a054c57.css","a34722b17b0d26cddba1448d24f6d99c"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["fonts/materialdesignicons-webfont.3ef6639.ttf","3ef6639a4cce5b903e4031b1b0102675"],["fonts/materialdesignicons-webfont.9b9f2c4.woff2","9b9f2c447d27a622fcb78f6b7f38a095"],["fonts/materialdesignicons-webfont.eec7f0f.woff","eec7f0f7c8944b878af8fb7fcc091ade"],["img/right-graphite@2x.f2e09a9.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["img/toolbox.1da4d62.png","1da4d62342ca95dcdb743a987cfa677a"],["index.html","11ec8f24d5a16607937d8f125a97f293"],["js/0.aa97bcb1d695f4929f1a.js","c330385cb6090143bf1e8c6b68bb2336"],["js/1.61daff884f92644a3fe8.js","488ab2442c3a1a3762afd0a0033887c7"],["js/10.b2e81d6efe4247ba8b0a.js","49858e6703943e57af8eea3fb2a90562"],["js/11.131996e31a467b478b22.js","0646e35e7d65a67b9f39bf493e9ee964"],["js/12.2bcf23cc6e525e786fda.js","55664eea00878f8fb304fb2a9d5553f4"],["js/2.cf6a385b695390b1024a.js","72cc309fee12abfaa5b652a351fbf8f6"],["js/3.0628901be233b5a63da1.js","b1b4a619c950cabdc6a458c7fbc0c2e2"],["js/4.8e40718dc858e0e564be.js","5ee6dc6890ae42405823ece5054cf8b3"],["js/5.f12efa86ef8f618278f5.js","1af84bafb5bf2124e80889415ea5a650"],["js/6.e4f79bc965327d97c72e.js","a199e1feaf7e8f7d69606b59430c375d"],["js/7.9bc208022139d2bad915.js","415a3d505befeda1d05e904c82dce94e"],["js/8.5c43d609fe47c8a09a82.js","d73412d21afd6166c9d76ad81bbd613b"],["js/9.799c3731c746ef287649.js","19363257da64782bdd31db01a23927b7"],["js/app.js","ffb2544a3cd704ddb889da8330ddb875"],["js/manifest.js","1ae710af127c4507c2d334fc55846382"],["js/vendor.js","1b1783bb2371f109a8308a14744593fa"],["statics/flespi_logo_black.svg","82f983ec2277961e9878f2bf014b13fc"],["statics/icons/apple-icon-152x152.png","d5da697eec032a743f6a94d6ef4470be"],["statics/icons/favicon-16x16.png","fa908e7babb7cad954beac016f56d11e"],["statics/icons/favicon-32x32.png","c3d58f5c2a54890cd4e03371aaaf1e11"],["statics/icons/icon-192x192.png","14d6cca701394318ed367e336cf50847"],["statics/icons/icon-512x512.png","823133d6375e12d5237785194dd12c74"],["statics/icons/ms-icon-144x144.png","838698af837cf35dfead7869b02ce5b8"],["statics/manifest.json","e1e0f9f6bf639012521b000d6066edfd"],["statics/quasar-logo.png","3020c8ac2c2872dec7741e5948520093"],["statics/right-graphite@2x.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["statics/toolbox.png","1da4d62342ca95dcdb743a987cfa677a"],["statics/toolbox50.png","525061fbc60090f9b92f626b25a2a976"],["statics/toolbox_mobile.png","cf46c82e435aa040daecaf16508027a3"]],cacheName="sw-precache-v3-toolbox-0.3.0-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,!1);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});