"use strict";var precacheConfig=[["app.d28d7a1f1eab97873512bacbe935619b.css","29431577bc1ef8ff824bc54db131f416"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["fonts/materialdesignicons-webfont.1eccbc4.ttf","1eccbc4c41d49fd81840aef3eaabe862"],["fonts/materialdesignicons-webfont.4b13596.woff2","4b1359677a76d07aa0526d2fddbd77b7"],["fonts/materialdesignicons-webfont.6473d7d.woff","6473d7d5a01bb3f8fccd5bbeaf2be312"],["img/right-graphite@2x.f2e09a9.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["img/toolbox.1da4d62.png","1da4d62342ca95dcdb743a987cfa677a"],["index.html","4d3d8ab608118911087bd6cebcaeea0b"],["js/0.9a6e2699f084fda7ee20.js","5dc29c396861bfc1fc57ab9c9b323dda"],["js/1.5e5d90ad664487be345c.js","c3b2423a62906acf58c339c2c359f132"],["js/10.6fa0ef17df612d2dd074.js","a3c618afa05d5e4bedcd923366d2ef33"],["js/11.4d9633eecbfa17d04298.js","939474df7704d10281030470610014d9"],["js/12.3387cbd32078a5dc845d.js","110db1ea9d836f338d5f41f38d6658f5"],["js/13.2260a37af9c2c3de322e.js","d6e3726a0b6d018c343157f2c89ea555"],["js/14.787465b98af611ab4b1a.js","6bea41db73d855bdb6e57ef2f24418ef"],["js/15.36a1da0e34c9ed8321ce.js","7122794dfa51078ef67c8a8d9ea15694"],["js/16.1b93a3a57cf6e70497ea.js","7e0805280909d7ff3769a64ebc6cf0a4"],["js/17.b4b4f7e9115b25b9cd90.js","e2322eddc0145863d95e98642a3d4e4a"],["js/18.f7bd5afc6fdf80117e12.js","7878e2d00b50f23d0579e70d015b7253"],["js/2.9cc26e94f5e65dfd9351.js","500f8d3db0c5a122445fc5c13e555db2"],["js/3.4279486e16d1dbf93499.js","15684da30daf4541d57e01aa9d954cfe"],["js/4.5815d0ab8afba71d75ca.js","1da5b88f6683417814a14a1390cc045c"],["js/5.3faac79e0aae2c56e146.js","492007548549cb0b72d3993a650c0e31"],["js/6.367671e5b621859a3956.js","3d43a2c2b8da74c5ec6c18e4013b6455"],["js/7.a86607b358fffd7f566e.js","80b1cf733f89ad2365cad1a28d8e8d68"],["js/8.03d4a8cfd201334eb9c1.js","efac21a0319643dee43c28a8e06a989f"],["js/9.113d25c51d241c4f5e69.js","06f9aab2f2a73ca34b8dd007c4cdc94b"],["js/app.js","72991e294f861d29c8afa49ac18ad4ad"],["js/manifest.js","347745eb53dabe9a4dbb7dc17a143ebb"],["js/vendor.js","c71ab3509a0ac173a58699fa84ae00dc"],["statics/flespi_logo_black.svg","82f983ec2277961e9878f2bf014b13fc"],["statics/icons/apple-icon-152x152.png","d5da697eec032a743f6a94d6ef4470be"],["statics/icons/favicon-16x16.png","fa908e7babb7cad954beac016f56d11e"],["statics/icons/favicon-32x32.png","c3d58f5c2a54890cd4e03371aaaf1e11"],["statics/icons/icon-192x192.png","14d6cca701394318ed367e336cf50847"],["statics/icons/icon-512x512.png","823133d6375e12d5237785194dd12c74"],["statics/icons/ms-icon-144x144.png","838698af837cf35dfead7869b02ce5b8"],["statics/manifest.json","e1e0f9f6bf639012521b000d6066edfd"],["statics/mountain.svg","1e3d1da4cf6d85e6e28cc3aae77e3ead"],["statics/right-graphite@2x.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["statics/toolbox.png","1da4d62342ca95dcdb743a987cfa677a"],["statics/toolbox50.png","525061fbc60090f9b92f626b25a2a976"],["statics/toolbox_mobile.png","cf46c82e435aa040daecaf16508027a3"]],cacheName="sw-precache-v3-toolbox-0.7.6-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,!1);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});