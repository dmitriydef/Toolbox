"use strict";var precacheConfig=[["app.9fcea246d188ccc9d5e2442fe3990db5.css","25aaec46aa9ad100b38a2fc3e28fd593"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["fonts/materialdesignicons-webfont.1eccbc4.ttf","1eccbc4c41d49fd81840aef3eaabe862"],["fonts/materialdesignicons-webfont.4b13596.woff2","4b1359677a76d07aa0526d2fddbd77b7"],["fonts/materialdesignicons-webfont.6473d7d.woff","6473d7d5a01bb3f8fccd5bbeaf2be312"],["img/right-graphite@2x.f2e09a9.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["img/toolbox.1da4d62.png","1da4d62342ca95dcdb743a987cfa677a"],["index.html","b22dee27b212a62c32b2baffe3d7055e"],["js/0.a8f3617398cc0c7f81c7.js","128ac393fe411f7f0252872c9526b046"],["js/1.a84614dcca061e14b46d.js","2cc4ef0e030fcfb973a7fde588eb6f86"],["js/10.5f8da450dafea7ee34f5.js","634ba38cdf972bfd6a1d42be4f11a4ba"],["js/11.3612d9157437c472435c.js","1bb6bb88bd2b70a91d01347c63293057"],["js/12.388aa744b142ee087a02.js","99653c20f3351d5cd06b83aa421eeea5"],["js/13.51d604fe1bd283dd4870.js","9b7698532c37d66073c5a603b3ad8d35"],["js/14.0708c3b430ac3a95a622.js","d2c745464b59f4127118ae171ba161c2"],["js/15.289aa48f52fff805c718.js","4a0f253dc79d228ce601b430e33d85a2"],["js/16.4a6c9c6fc1af7e52df21.js","dbeefcc4640ddd5abaf137b2deaab94e"],["js/17.89294bf93b63e167d5ee.js","6211ed6980b174b91dec08adc331bbca"],["js/18.43682941b6d31aae734b.js","d598b9570a1144606ffab2db204854ba"],["js/2.ca845d7eaa07f4a7f46a.js","2b806ed1b9e4afa496d562e68f280361"],["js/3.f72d581b9d9ea11809e1.js","4e4093270c5403334414eed26edc0d0e"],["js/4.f3e3c5179414ede874e3.js","db10cd7c01b9f8b840935101d8b18b74"],["js/5.acf27a4dfd691d55e7a8.js","dd0af003caca15b1e72928d9986f8835"],["js/6.b1d582f69e79564c420a.js","d1c7c614e1efe5f1a4d43a9d1f3c4a03"],["js/7.d96589de22cab6ef982f.js","9104b98421b522ff1bdb71ac4d3bb9b9"],["js/8.cc8589eda06b9b40f72d.js","72515e33af074713c07b46476a6fb0be"],["js/9.4a5d15944562a8fed861.js","04b7e06dcd3aa66365b005aad7725156"],["js/app.js","f5505feb0956ee82fdc7baffed017e23"],["js/manifest.js","dc4d6edee57af48e65ea79bab39ee0aa"],["js/vendor.js","d499432254131edecd0f7ca609230ff4"],["statics/flespi_logo_black.svg","82f983ec2277961e9878f2bf014b13fc"],["statics/icons/apple-icon-152x152.png","d5da697eec032a743f6a94d6ef4470be"],["statics/icons/favicon-16x16.png","fa908e7babb7cad954beac016f56d11e"],["statics/icons/favicon-32x32.png","c3d58f5c2a54890cd4e03371aaaf1e11"],["statics/icons/icon-192x192.png","14d6cca701394318ed367e336cf50847"],["statics/icons/icon-512x512.png","823133d6375e12d5237785194dd12c74"],["statics/icons/ms-icon-144x144.png","838698af837cf35dfead7869b02ce5b8"],["statics/manifest.json","e1e0f9f6bf639012521b000d6066edfd"],["statics/mountain.svg","1e3d1da4cf6d85e6e28cc3aae77e3ead"],["statics/right-graphite@2x.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["statics/toolbox.png","1da4d62342ca95dcdb743a987cfa677a"],["statics/toolbox50.png","525061fbc60090f9b92f626b25a2a976"],["statics/toolbox_mobile.png","cf46c82e435aa040daecaf16508027a3"]],cacheName="sw-precache-v3-toolbox-cache-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,!1);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});