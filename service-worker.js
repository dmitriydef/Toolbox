"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["app.8c0b67be393bf13671b8fb3c7a054c57.css","a34722b17b0d26cddba1448d24f6d99c"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["fonts/materialdesignicons-webfont.3ef6639.ttf","3ef6639a4cce5b903e4031b1b0102675"],["fonts/materialdesignicons-webfont.9b9f2c4.woff2","9b9f2c447d27a622fcb78f6b7f38a095"],["fonts/materialdesignicons-webfont.eec7f0f.woff","eec7f0f7c8944b878af8fb7fcc091ade"],["img/right-graphite@2x.f2e09a9.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["img/toolbox.1da4d62.png","1da4d62342ca95dcdb743a987cfa677a"],["index.html","480223498c58ae34bacb63d4c4bdeb63"],["js/0.618cdcb4ad9d230f3cce.js","0ee78be5191a1b32c570a236e13df53a"],["js/1.0f6cd1c63ef29aca0625.js","f23335dbbe5f883bac3543e597e03123"],["js/10.b8ceec8dc58bb84022bb.js","bde33cd4c3cac62cf78263549010ad3f"],["js/11.fac2d4ee7f526af6b9b2.js","96de24fe0963a4ac67caac1a1ae16b8c"],["js/12.c1a958f63b5bb27a60af.js","6ecc01581efb2542190d64f9ae026b87"],["js/13.f4b83fed7c9cd3daac53.js","1333b38ccef85b405a295c2113fc0831"],["js/14.d1e393266211cebb47f6.js","ccafec0b157633142eeb87917d734892"],["js/2.70b7e982546b3ec21fbe.js","daaef6454f44e56939e924b208971984"],["js/3.e0d4a5ceedc1952dbbd8.js","95231673db0ac12d7e32727a3ede17c7"],["js/4.c79f0e02ead96184677a.js","4f9e309432c3a8217411726db96f0eb9"],["js/5.bcc23a889615c53302a1.js","45b62a139569cad1aa2d4192f49df3c6"],["js/6.034995a250b4c4d0ebf1.js","8cbaf07a3a6b6858d11399f02d7c26e8"],["js/7.a687ad66b82ce9c02a99.js","fa5f0b8d2a72b8839c82ada8ce1469d3"],["js/8.6bd964a18e66f5575cb9.js","f174881a32548243c1743e63bb2b740e"],["js/9.3508cae6c4f630211ee5.js","92e79729fcdd08d26bfd8f429ae8b3ef"],["js/app.js","437854104aa6fd1bd5ce663c9659a893"],["js/manifest.js","e9959363d30fe5c24b5b6f1b545b09cf"],["js/vendor.js","a6b917932f0db7525db495a0245f2eaf"],["statics/flespi_logo_black.svg","82f983ec2277961e9878f2bf014b13fc"],["statics/icons/apple-icon-152x152.png","d5da697eec032a743f6a94d6ef4470be"],["statics/icons/favicon-16x16.png","fa908e7babb7cad954beac016f56d11e"],["statics/icons/favicon-32x32.png","c3d58f5c2a54890cd4e03371aaaf1e11"],["statics/icons/icon-192x192.png","14d6cca701394318ed367e336cf50847"],["statics/icons/icon-512x512.png","823133d6375e12d5237785194dd12c74"],["statics/icons/ms-icon-144x144.png","838698af837cf35dfead7869b02ce5b8"],["statics/manifest.json","e1e0f9f6bf639012521b000d6066edfd"],["statics/right-graphite@2x.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["statics/toolbox.png","1da4d62342ca95dcdb743a987cfa677a"],["statics/toolbox50.png","525061fbc60090f9b92f626b25a2a976"],["statics/toolbox_mobile.png","cf46c82e435aa040daecaf16508027a3"]],cacheName="sw-precache-v3-toolbox-0.5.1-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,!1);return[t.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});