(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"121a":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"empty-state__back"},[i("div",{staticClass:"text-center text-grey-4",class:["q-pb-"+(e.$q.platform.is.mobile?"sm":"lg"),e.$q.platform.is.mobile?"":"q-pt-lg"],staticStyle:{"font-size":"1.5rem"}},[e._v(e._s(e.config.label))]),e.$q.platform.is.desktop?i("div",{staticClass:"row text-white q-px-md q-mb-md justify-center"},[i("div",{staticClass:"text-grey-4 col-12 q-px-sm",staticStyle:{"font-size":".9rem"}},[e._v(e._s(e.config.sublabel))]),e._l(e.config.hints,(function(t,s){return i("div",{key:s,staticClass:"q-pa-sm",class:t.wclass||["col-6","col-sm-3"]},[i("div",{staticClass:"empty-state__card full-height",domProps:{innerHTML:e._s(t.html)}})])}))],2):[i("q-dialog",{model:{value:e.dialogModel,callback:function(t){e.dialogModel=t},expression:"dialogModel"}},[i("div",{staticClass:"row text-white q-pa-md bg-grey-9"},[i("div",{staticClass:"text-grey-4 col-12 q-px-sm",staticStyle:{"font-size":".9rem"}},[e._v(e._s(e.config.sublabel))]),e._l(e.config.hints,(function(t,s){return i("div",{key:s,staticClass:"q-pa-sm",class:t.wclass||["col-6","col-sm-3"]},[i("div",{staticClass:"empty-state__card full-height",domProps:{innerHTML:e._s(t.html)}})])}))],2)]),i("div",{staticClass:"text-center q-mb-sm"},[i("q-btn",{attrs:{label:"Details",dense:"",color:"white",flat:""},on:{click:function(t){e.dialogModel=!0}}})],1)],i("div",{staticClass:"text-center"},[i("q-btn",{attrs:{type:"a",label:"More about Toolbox",href:"https://flespi.com/blog/drive-telematics-diagnostics-beyond-ordinary-with-flespi-toolbox",target:"_blank",dense:"",flat:e.$q.platform.is.mobile,color:"red",size:".8rem"}})],1),e._t("after")],2)},n=[],a={name:"EmptyPane",props:["config"],data:function(){return{dialogModel:!1}}},o=a,c=(i("cc73"),i("2877")),r=Object(c["a"])(o,s,n,!1,null,null,null);t["a"]=r.exports},"286e":function(e,t,i){"use strict";i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d");var s=i("c47a"),n=i.n(s),a=(i("28a5"),i("c5f6"),i("2f62")),o=i("9b02"),c=i.n(o);function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var l={};function m(e,t,i,s,n){var a;return s?t?a={entity:e,id:t,mode:1}:i&&(a={entity:e,id:i,mode:1}):a={entity:e,id:t,mode:1},!!a&&n.push(a)}t["a"]={beforeRouteEnter:function(e,t,i){var s=e.meta.moduleName,n=t.meta.moduleName;i((function(t){if(s!==n||!n){var i=s,a=[];if(i){var o,r=e.params&&e.params.id?e.params.id:null;r&&(o=Number(r.split("-")[0]));var d=c()(t.settings,"entities[".concat(i,"]"),void 0);switch(i){case"devices":"intervals"===n&&(n="devices"),i!==n&&(r&&a.push({entity:"tasks",id:Number(r),mode:1}),m(i,o,d,t.isNeedSelect,a));break;case"intervals":a.push({entity:"calcs",mode:1}),i="devices",i!==n&&(r&&a.push({entity:"tasks",id:Number(r),mode:1}),m(i,o,d,t.isNeedSelect,a));break;case"hexViewer":i="channels",i!==n&&m(i,o,d,t.isNeedSelect,a);break;case"channels":n="hexViewer"===n?"channels":n,i!==n&&m(i,o,d,t.isNeedSelect,a);break;case"platform":if(i="subaccounts","mqtt"===n)break;m(i,o,d,t.isNeedSelect,a);break;case"mqtt":if(i="subaccounts","platform"===n)break;m(i,o,d,t.isNeedSelect,a);break;default:m(i,o,d,t.isNeedSelect,a)}}a.forEach((function(e){l[e.entity]=e})),l[i]&&!l[i].id&&(t.isItemsInit=!0),t.getEntities(a).then((function(){t.init&&t.init()}))}}))},beforeRouteUpdate:function(e,t,i){var s=this,n=e.meta.moduleName,a=t.meta.moduleName,o=e.params&&e.params.id?Number(e.params.id):null,c=t.params&&t.params.id?Number(t.params.id):null,r=[],d=[];if(n===a){if(o)switch(n){case"devices":d.push({entity:"tasks",id:o,mode:1});break;case"intervals":o!==c&&d.push({entity:"tasks",id:o,mode:1});break}if(c)switch(n){case"devices":r.push({entity:"tasks",id:c,mode:1});break;case"intervals":o!==c&&r.push({entity:"tasks",id:c,mode:1});break}}r.forEach((function(e){delete l[e.entity]})),d.forEach((function(e){l[e.entity]=e})),this.removeEntities(r).then((function(){s.getEntities(d)})).then(i)},beforeRouteLeave:function(e,t,i){var s=t.meta.moduleName,n=e.meta.moduleName,a=[];if(s&&n!==s){var o=t.params&&t.params.id?Number(t.params.id):null;switch(s){case"devices":"intervals"===n&&(n="devices"),n!==s&&(a.push({entity:"tasks",id:o,mode:1}),a.push(this.isNeedSelect&&this.isItemsInit?{entity:s,mode:1}:{entity:s,id:o,mode:1}));break;case"intervals":a.push({entity:"calcs",mode:1}),s="devices",n!==s&&(a.push({entity:"tasks",id:o,mode:1}),a.push(this.isNeedSelect&&this.isItemsInit?{entity:s,mode:1}:{entity:s,id:o,mode:1}));break;case"hexViewer":s="channels",s!==n&&a.push(this.isNeedSelect&&this.isItemsInit?{entity:s,mode:1}:{entity:s,id:o,mode:1});break;case"platform":if(s="subaccounts","mqtt"===n)break;a.push(this.isNeedSelect&&this.isItemsInit?{entity:s,mode:1}:{entity:s,id:o,mode:1});break;case"mqtt":if(s="subaccounts","platform"===n)break;a.push(this.isNeedSelect&&this.isItemsInit?{entity:s,mode:1}:{entity:s,id:o,mode:1});break;default:a.push(this.isNeedSelect&&this.isItemsInit?{entity:s,mode:1}:{entity:s,id:o,mode:1})}}return a.forEach((function(e){delete l[e.entity]})),this.removeEntities(a).then((function(){i()}))},methods:d({},Object(a["b"])(["getEntities","removeEntities","unsubscribeItems"]),{itemsLoad:function(e,t,i,s){var n=this;return this.getEntities([{entity:e,mode:1}]).then((function(a){i&&n.unsubscribeItems({entity:e,id:i,mode:1}),t((function(){l[e]={entity:e,mode:1},s&&s()}))}))}})}},"2b06":function(e,t,i){},"2ce0":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("virtual-scroll-list",{ref:"scrollList",attrs:{cols:e.cols,actions:e.actions,items:e.messages,dateRange:e.dateRange,mode:e.mode,viewConfig:e.viewConfig,colsConfigurator:"toolbar",i18n:e.i18n,filter:e.filter,theme:e.theme,title:"Logs",loading:e.loadingFlag},on:{"change:filter":e.filterChangeHandler,"scroll:top":e.paginationPrevChangeHandler,"scroll:bottom":e.paginationNextChangeHandler,"change:date-range":e.dateRangeChangeHandler,"change:date-range-prev":e.dateRangePrevHandler,"change:date-range-next":e.dateRangeNextHandler,"change:mode":e.modeChange,"update:cols":e.updateColsHandler,"edit:cols":e.colsEditHandler},scopedSlots:e._u([{key:"items",fn:function(t){var s=t.item,n=t.index,a=t.actions,o=t.cols,c=t.etcVisible,r=t.actionsVisible,d=t.itemHeight,l=t.rowWidth;return i("logs-list-item",{key:n,attrs:{item:s,index:n,actions:a,cols:o,itemHeight:d,rowWidth:l,etcVisible:c,actionsVisible:r},on:{action:e.actionHandler,"item-click":e.viewMessagesHandler}})}}])},[i("empty-pane",{attrs:{slot:"empty",config:e.config.emptyState},slot:"empty"})],1)],1)},n=[],a=(i("a481"),i("967e")),o=i.n(a),c=(i("96cf"),i("fa84")),r=i.n(c),d=i("de45"),l=i("2b0e"),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px"}},[e.item["__connectionStatus"]||e.item["x-flespi-filter-prev"]||e.item["x-flespi-filter-next"]?e.item["x-flespi-filter-prev"]||e.item["x-flespi-filter-next"]?i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px",color:"#000",fontWeight:"bold",backgroundColor:e.item["x-flespi-filter-prev"]?"#819002":"#ccb300",overflow:"hidden"}},[i("span",{staticClass:"text-uppercase text-white",staticStyle:{padding:"0 5px"}},[e._v(e._s(e.item["x-flespi-filter-next"]?'Next results will be filtered by: "'+e.item["x-flespi-filter-next"]+'"':'Filter removed: "'+e.item["x-flespi-filter-prev"]+'"'))])]):i("div",{class:[e.color],style:{height:e.itemHeight+"px",width:e.rowWidth+"px",border:"solid 1px #000",color:"#000",fontWeight:"bold",backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0",backgroundImage:"url(./statics/police.png)",overflow:"hidden",opacity:".7"},attrs:{title:e.date.formatDate(1e3*e.item.timestamp,"DD/MM/YYYY HH:mm:ss")}},e._l(Array(10),(function(t){return i("span",{key:t,staticClass:"text-uppercase",staticStyle:{padding:"0 5px","margin-left":"150px"},style:{backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0"}},[e._v(e._s(e.item["__connectionStatus"]))])})),0):i("div",{staticClass:"cursor-pointer",class:[e.color,e.item.__status?"missed-items":""],style:{height:e.itemHeight+"px",width:e.rowWidth+"px",borderBottom:e.item.delimiter?"solid 1px #f40":"",boxSizing:"border-box"},on:{click:function(t){return e.itemClickHandler(e.index,e.clearItem)}}},[e._l(e.cols,(function(t,s){var n,a,o;return["action"===t.__dest?i("span",{key:t.name+s,staticClass:"list__item item_actions",class:(n={},n["item_"+s]=!0,n)},e._l(e.actions,(function(t,s){return i("q-icon",{key:s,staticClass:"cursor-pointer on-left",class:t.classes,attrs:{name:t.icon},nativeOn:{click:function(i){return i.stopPropagation(),e.clickHandler(e.index,t.type,e.clearItem)}}},[i("q-tooltip",[e._v(e._s(t.label))])],1)})),1):"etc"===t.__dest?i("span",{key:t.name+s,staticClass:"list__item item_etc",class:(a={},a["item_"+s]=!0,a)},[e._v(e._s(e.etc))]):i("span",{key:t.name+s,staticClass:"list__item",class:(o={},o["item_"+s]=!0,o),style:{backgroundColor:e.item["x-flespi-filter-fields"]&&e.item["x-flespi-filter-fields"].includes(t.name)?"#666":""}},["event_code"===t.name&&e.item.address?["connection"===e.item.address?i("q-icon",{attrs:{name:"mdi-ethernet",title:"address: connection"}}):e._e(),"sms"===e.item.address?i("q-icon",{attrs:{name:"mdi-email-outline",title:"address: sms"}}):e._e(),"local"===e.item.address?i("q-icon",{attrs:{name:"mdi-content-save-outline",title:"address: local"}}):e._e()]:e._e(),"event_code"===t.name&&e.item["error_text"]?i("q-icon",{attrs:{name:"mdi-alert-outline"}},[i("q-tooltip",[e._v(e._s(e.item["error_text"]))])],1):e._e(),901===e.item.event_code&&"name"===t.name?i("a",{staticClass:"text-green",attrs:{target:"_blank",href:e.$flespiCDN+"/file/"+e.item.uuid},on:{click:function(e){e.stopPropagation()}}},[e._v("\n          "+e._s(e.getValueOfProp(t))+"\n        ")]):i("span",{attrs:{title:JSON.stringify(e.getValueOfProp(t))}},[e._v("\n          "+e._s(e.getValueOfProp(t))+"\n        ")])],2)]}))],2)])},u=[],h=(i("7f7f"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("bd4c")),f=i("b06b"),p=i("839d"),g={props:["item","index","actions","cols","itemHeight","rowWidth"],data:function(){return{date:h["b"]}},computed:{etc:function(){var e=this,t=Object.keys(this.item).filter((function(t){return!e.hasInCols(t)}));return t.reduce((function(t,i){return"delimiter"===i||"event_origin"===i||"event_text"===i||"item_data"===i||"source"===i||"error_text"===i||"close_code"===i||"code"===i||"http_data"===i||"current"===i||"updated"===i||"error_code"===i||"send_code"===i||"address"===i||"__status"===i||"uuid"===i||"x-flespi-filter-fields"===i||"x-flespi-filter-next"===i||"x-flespi-filter-prev"===i?t:(t+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; "),t)}),"")||"*Empty*"},color:function(){switch(this.item.event_code){case 1:case 100:case 101:case 110:case 200:case 202:case 300:case 312:case 313:case 401:case 410:case 420:case 430:case 500:case 510:case 601:case 605:case 901:return"text-green";case 2:case 3:case 21:case 111:case 112:case 302:case 303:case 311:case 314:case 411:case 412:case 502:case 504:case 511:case 600:case 603:case 604:case 900:return"text-yellow";case 113:case 301:case 310:case 404:case 422:case 432:case 503:case 512:case 602:case 700:case 800:return"text-grey-6";case 20:case 114:case 203:case 204:case 315:case 316:case 402:case 403:case 501:case 902:return"text-red";case 201:return this.item.send_code<0?"text-red":"text-green";case 102:switch(this.item.close_code){case 3:return"text-green";case 2:case 12:case 15:return"text-grey-6";case 4:case 5:case 6:case 11:case 13:case 14:return"text-red";case 7:case 8:case 9:case 10:return"text-yellow";default:return""}default:return""}},eventLinkMore:function(){var e=this.$flespiServer;switch(this.item.event_code){case 1:case 2:case 3:return"".concat(e,"/docs/#/platform");case 20:case 21:return"".concat(e,"/docs/#/platform/!/counters");case 100:case 101:case 102:return"".concat(e,"/docs/#/gw/!/connections");case 110:case 111:case 112:case 113:return"".concat(e,"/docs/#/gw/!/commands");case 114:return"".concat(e,"/docs/#/gw/!/channels");case 200:case 201:case 202:case 203:case 204:return"".concat(e,"/docs/#/gw/!/modems");case 300:case 301:case 302:case 303:case 310:case 311:case 312:case 313:case 314:case 315:case 316:return"".concat(e,"/docs/#/gw/!/devices");case 401:case 402:case 403:case 404:case 410:case 411:case 412:case 420:case 422:case 430:case 432:return"".concat(e,"/docs/#/gw/!/streams");case 500:case 501:case 502:case 503:case 504:case 510:case 511:case 512:return"".concat(e,"/docs/#/mqtt/!/sessions");case 600:return"".concat(e,"/docs/#/platform/!/tokens");case 601:case 602:case 603:case 604:case 605:return"".concat(e,"/docs/#/gw/!/calcs");case 700:return"".concat(e,"/docs/#/storage/!/containers");case 800:return"".concat(e,"/docs/#/storage/!/abques");case 900:case 901:case 902:return"".concat(e,"/docs/#/storage/!/cdns");default:return""}},description:function(){var e=p.types,t=p.closeCodes,i=p.errorCodes,s=p.sendCodes,n=p.codesByEventcode,a=e[this.item.event_code]?"".concat(e[this.item.event_code]):this.item.event_code;return a+=this.item.close_code?" (".concat(t[this.item.close_code],")"):t[this.item.close_code]?"(".concat(this.item.close_code,")"):"",a+=this.item.error_code?" (".concat(this.item.error_code,": ").concat(i[this.item.event_code][this.item.error_code],")"):i[this.item.event_code]&&i[this.item.event_code][this.item.error_code]?"(".concat(this.item.error_code,")"):"",a+=this.item.send_code?" (".concat(this.item.send_code,": ").concat(s[this.item.send_code],")"):i[this.item.event_code]&&i[this.item.event_code][this.item.send_code]?"(".concat(this.item.send_code,")"):"",a+=this.item.code&&n[this.item.event_code]&&n[this.item.event_code][this.item.code]?" (".concat(this.item.code,": ").concat(n[this.item.event_code][this.item.code],")"):this.item.code&&n[this.item.event_code]&&!n[this.item.event_code][this.item.code]?"(code: ".concat(this.item.code,")"):"",a},clearItem:function(){var e=this;return Object.keys(this.item).reduce((function(t,i){return"delimiter"===i||"__status"===i||"x-flespi-filter-fields"===i||"x-flespi-filter-next"===i||"x-flespi-filter-prev"===i?t:(t[i]=e.item[i],t)}),{})}},methods:{hasInCols:function(e){return!!this.cols.filter((function(t){return e===t.name})).length},clickHandler:function(e,t,i){this.$emit("action",{index:e,type:t,content:i})},linkMoreClickHandler:function(){Object(f["a"])(this.eventLinkMore)},getValueOfProp:function(e){var t=e.custom?JSON.stringify(this.item[e.name]):this.item[e.name];return"event_code"===e.name&&(t=this.description),"timestamp"===e.name&&(t=h["b"].formatDate(1e3*this.item[e.name],"DD/MM/YYYY HH:mm:ss")),"host"===e.name&&(t=this.item["host"]||this.item["source"]||""),t},itemClickHandler:function(e,t){t._description="[".concat(h["b"].formatDate(1e3*this.item.timestamp,"DD/MM/YYYY HH:mm:ss"),"] ").concat(this.item.event_code,": ").concat(this.description),t._color=this.color,this.$emit("item-click",{index:e,content:t})}}},v=g,b=(i("d960"),i("2877")),y=Object(b["a"])(v,m,u,!1,null,null,null),w=y.exports,x=i("121a"),_=i("ef95"),N={props:["mode","item","cid","limit","originPattern","config"],data:function(){return{theme:this.config.theme,i18n:{"Messages not found":"Log entries not found"},viewConfig:this.config.viewConfig,actions:this.config.actions,moduleName:this.config.vuexModuleName}},computed:{messages:{get:function(){var e=this.$store.state[this.moduleName].messages;return this.setTranslation(e),e},set:function(e){this.$store.commit("".concat(this.moduleName,"/setMessages"),e)}},origin:{set:function(){var e=r()(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.origin!==t){e.next=3;break}return this.$store.commit("".concat(this.moduleName,"/setItemDeletedStatus"),this.item.deleted),e.abrupt("return",!1);case 3:return e.next=5,this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling"));case 5:if(this.$store.commit("".concat(this.moduleName,"/setOrigin"),t),this.$store.commit("".concat(this.moduleName,"/setItemDeletedStatus"),this.item&&this.item.deleted),this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/getCols"),this.config.cols),0!==this.$store.state[this.moduleName].mode){e.next=16;break}return e.next=12,this.$store.dispatch("".concat(this.moduleName,"/initTime"));case 12:return e.next=14,this.$store.dispatch("".concat(this.moduleName,"/get"));case 14:e.next=19;break;case 16:if(1!==this.$store.state[this.moduleName].mode){e.next=19;break}return e.next=19,this.$store.dispatch("".concat(this.moduleName,"/pollingGet"));case 19:if(1!==this.$store.state[this.moduleName].mode||this.item.deleted){e.next=22;break}return e.next=22,this.$store.dispatch("".concat(this.moduleName,"/getHistory"),200);case 22:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),get:function(){return this.$store.state[this.moduleName].origin}},cols:{get:function(){return this.$store.state[this.moduleName].cols},set:function(e){this.$store.commit("".concat(this.moduleName,"/updateCols"),e)}},filter:{get:function(){return this.$store.state[this.moduleName].filter},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFilter"),e):this.$store.commit("".concat(this.moduleName,"/setFilter"),"")}},dateRange:function(){return[this.$store.state[this.moduleName].from,this.$store.state[this.moduleName].to]},from:{get:function(){return this.$store.state[this.moduleName].from},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFrom"),e):this.$store.commit("".concat(this.moduleName,"/setFrom"),0)}},to:{get:function(){return this.$store.state[this.moduleName].to},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setTo"),e):this.$store.commit("".concat(this.moduleName,"/setTo"),0)}},reverse:{get:function(){return this.$store.state[this.moduleName].reverse||!1},set:function(e){this.$store.commit("".concat(this.moduleName,"/setReverse"),e)}},currentLimit:{get:function(){return this.$store.state[this.moduleName].limit},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setLimit"),e):this.$store.commit("".concat(this.moduleName,"/setLimit"),1e3)}},originByPattern:function(){var e=this;return this.item?this.originPattern.replace(/\/:(\w*)(\/)?/g,(function(t,i,s){return"/".concat(e.item[i]).concat(s||"")})):""},loadingFlag:function(){var e=this.$store.state;return!(!e[this.config.vuexModuleName]||!e[this.config.vuexModuleName].isLoading)}},methods:{resetParams:function(){this.$refs.scrollList.resetParams()},filterChangeHandler:function(e){this.filter!==e&&(this.filter=e,0===this.mode&&(this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/get"))))},setTranslation:function(e){this.i18n.from=e.length?"Previous batch until ".concat(h["b"].formatDate(1e3*e[0].timestamp,"HH:mm:ss")):"Prev",this.i18n.to=e.length?"Next batch from ".concat(h["b"].formatDate(1e3*e[e.length-1].timestamp,"HH:mm:ss")):"Next"},modeChange:function(){var e=r()(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=+t,e.next=3,this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling"));case 3:if(this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.commit("".concat(this.moduleName,"/setMode"),t),1!==t||!this.origin||null===this.$store.state[this.moduleName].mode){e.next=10;break}return e.next=8,this.$store.dispatch("".concat(this.moduleName,"/getHistory"),200);case 8:return e.next=10,this.$store.dispatch("".concat(this.moduleName,"/pollingGet"));case 10:if(0!==t||!this.origin){e.next=15;break}return e.next=13,this.$store.dispatch("".concat(this.moduleName,"/initTime"));case 13:return e.next=15,this.$store.dispatch("".concat(this.moduleName,"/get"));case 15:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),updateColsHandler:function(e){this.cols=e},dateRangeChangeHandler:function(e){var t=e[0],i=e[1];if(this.from===t&&this.to===i)return!1;this.from=t,this.to=i,this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/get"))},dateRangePrevHandler:function(){var e=this.to-this.from,t=this.from-1,i=t-e;this.dateRangeChangeHandler([i,t])},dateRangeNextHandler:function(){var e=this.to-this.from,t=this.to+1,i=t+e;this.dateRangeChangeHandler([t,i])},paginationPrevChangeHandler:function(){var e=this;0===this.mode&&this.$store.dispatch("".concat(this.moduleName,"/getPrevPage")).then((function(t){e.$refs.scrollList.scrollTo(t)}))},paginationNextChangeHandler:function(){var e=this;0===this.mode&&this.$store.dispatch("".concat(this.moduleName,"/getNextPage")).then((function(t){e.$refs.scrollList.scrollTo(e.messages.length-t)}))},actionHandler:function(e){var t=e.index,i=e.type,s=e.content;switch(i){case"view":this.viewMessagesHandler({index:t,content:s});break}},viewMessagesHandler:function(e){e.index;var t=e.content;this.$emit("view-log-message",t)},changeCid:function(){var e=r()(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling"));case 2:if(this.$store.commit("".concat(this.moduleName,"/setCid"),this.cid),this.$store.commit("".concat(this.moduleName,"/setItemDeletedStatus"),this.item.deleted),this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/getCols"),this.config.cols),0!==this.$store.state[this.moduleName].mode){e.next=11;break}return e.next=9,this.$store.dispatch("".concat(this.moduleName,"/initTime"));case 9:return e.next=11,this.$store.dispatch("".concat(this.moduleName,"/get"));case 11:return e.next=13,this.$store.dispatch("".concat(this.moduleName,"/pollingGet"));case 13:if(1!==this.$store.state[this.moduleName].mode||this.item.deleted){e.next=16;break}return e.next=16,this.$store.dispatch("".concat(this.moduleName,"/getHistory"),200);case 16:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),colsEditHandler:function(){this.$eventBus.$emit("cols:edit","logs")}},watch:{item:function(e){this.origin=this.originByPattern},mode:function(e){this.modeChange(e)},limit:function(e){this.currentLimit=e},cid:function(){this.changeCid()}},created:function(){var e=this;this.$store.state[this.moduleName]?this.$store.commit("".concat(this.moduleName,"/clear")):this.$store.registerModule(this.moduleName,Object(d["g"])({Vue:l["default"],LocalStorage:this.$q.localStorage,name:this.moduleName,errorHandler:function(t){e.$store.commit("reqFailed",t)},filterHandler:this.filterMessages})),this.currentLimit=this.limit,this.cid&&this.$store.commit("".concat(this.moduleName,"/setCid"),this.cid),this.item&&(this.$store.commit("".concat(this.moduleName,"/setOrigin"),this.originByPattern),this.$store.commit("".concat(this.moduleName,"/setItemDeletedStatus"),this.item.deleted),this.$store.dispatch("".concat(this.moduleName,"/getCols"),this.config.cols)),null===this.$store.state[this.moduleName].mode&&this.modeChange(this.mode),this.offlineHandler=l["default"].connector.socket.on("offline",(function(){e.$store.commit("".concat(e.moduleName,"/setOffline"),1===e.mode)})),this.connectHandler=l["default"].connector.socket.on("connect",(function(){e.$store.state[e.moduleName].offline&&(e.$store.commit("".concat(e.moduleName,"/setReconnected"),1===e.mode),1===e.mode&&e.$store.dispatch("".concat(e.moduleName,"/getMissedMessages")))}))},beforeDestroy:function(){this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling")),void 0!==this.offlineHandler&&l["default"].connector.socket.off("offline",this.offlineHandler),void 0!==this.connectHandler&&l["default"].connector.socket.off("connect",this.connectHandler),this.$store.commit("".concat(this.moduleName,"/clear"))},mixins:[_["a"]],components:{VirtualScrollList:d["b"],LogsListItem:w,EmptyPane:x["a"]}},k=N,S=Object(b["a"])(k,s,n,!1,null,null,null);t["a"]=S.exports},"839d":function(e){e.exports=JSON.parse('{"types":{"1":"item was created via REST API","2":"item was updated via REST API","3":"item was deleted via REST API","20":"item was blocked","21":"item was unblocked","100":"channel has accepted connection","101":"channel connection was identified","102":"channel connection was closed","110":"new channel\'s command was created","111":"channel\'s command was updated","112":"channel\'s command was deleted","113":"channel\'s command executed or discarded","114":"channel configuration is invalid","200":"SMS(delivery receipt) received via modem","201":"SMS was sent via modem","202":"modem has successfully connected to SMS gateway","203":"modem has lost connection to SMS gateway server","204":"failed to connect to SMPP gateway","300":"device connected","301":"device disconnected","302":"received SMS from device","303":"sent SMS to device","310":"Received a new setting value from the device","311":"REST API (PUT) request: the system accepted new setting value","312":"Device confirmed the acceptance of the new setting value","313":"Device rejected the new setting value","314":"REST API (DELETE) request: the sending of new setting value was cancelled by user","315":"REST API (DELETE) request: current setting value was cleared from the system by user","316":"The system marked the setting as unreadable due to exceeded retries limit","401":"stream connected successfully","402":"stream has lost connection","403":"stream failed to deliver messages","404":"stream has sent messages","410":"new subscription was created for stream","411":"stream subscription was updated","412":"stream subscription was deleted","420":"stream was subscribed to device messages","422":"stream was unsubscribed from device messages","430":"stream was subscribed to channel messages","432":"stream was unsubscribed from channel messages","500":"mqtt session connection was accepted","501":"mqtt session connection was blocked","502":"mqtt session connection was rejected","503":"mqtt session connection was closed","504":"persistent session was overflowed and deleted","510":"new subscription was created for MQTT session via REST API","511":"MQTT session subscription was updated via REST API","512":"MQTT session subscription was deleted via REST API","600":"token expired and has been deleted","601":"new devices assigned to calculator","602":"device was unassigned from calculator","603":"device parameters were changed in the calculator","604":"device was blocked by calculator","605":"device was unblocked by calculator","700":"container size has been changed","800":"abque size has been changed","900":"cdn size has been changed","901":"file was placed on cdn","902":"file was removed from cdn"},"closeCodes":{"2":"connection closed by tracking device","3":"connection successfully processed and closed","4":"received data violates channel\'s protocol","5":"internal error","6":"data parsing error (see log details)","7":"connection closed due to server maintenance","8":"protocol implementation updated","9":"channel\'s parameters changed","10":"connection closed upon user\'s request","11":"outgoing connection failed","12":"Current connection closed because of ident collision: device has opened another connection to the channel without closing first one. It may happen because of device firmware bug or by an unstable connectivity provider. In general, this happens to plenty of devices and usually can be ignored.","13":"device is blocked","14":"password mismatch","15":"device associated with the connection was created, changed or deleted","128":"Unspecified error","129":"Malformed Packet","130":"Protocol Error","131":"Implementation specific error","132":"Unsupported Protocol Version","133":"Client Identifier not valid","134":"Bad User Name or Password","135":"Not authorized","136":"Server unavailable","137":"Server busy","138":"Banned","139":"Server shutting down","140":"Bad authentication method","141":"Keep Alive timeout","142":"Session taken over","143":"Topic Filter invalid","144":"Topic Name invalid","145":"Packet identifier in use","146":"Packet Identifier not found","147":"Receive Maximum exceeded","148":"Topic Alias invalid","149":"Packet too large","150":"Message rate too high","151":"Quota exceeded","152":"Administrative action","153":"Payload format invalid","154":"Retain not supported","155":"QoS not supported","156":"Use another server","157":"Server moved","158":"Shared Subscriptions not supported","159":"Connection rate exceeded","160":"Maximum connect time","161":"Subscription Identifiers not supported","162":"Wildcard Subscriptions not supported","-1":"Unexpected disconnect"},"errorCodes":{"204":{"-1":"Authorization problems - check the modem\'s username and password","-2":"TCP/SSL connection related errors - check the modem\'s \'uri\' field"},"403":{"1":"unacceptable protocol version","2":"identifier rejected","3":"server unavailable","4":"bad username or password","5":"connection not authorized","100":"Continue","101":"Switching Protocols","102":"Processing","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Moved Temporarily","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I’m a teapot","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","449":"Retry With","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required","520":"Unknown Error","521":"Web Server Is Down","522":"Connection Timed Out","523":"Origin Is Unreachable","524":"A Timeout Occurred","525":"SSL Handshake Failed","526":"Invalid SSL Certificate","-99":"certificate error","-2":"request sent but no response received","-1":"failed to connect"}},"sendCodes":{"0":"Ok - Message Acceptable","1":"Invalid Message Length","2":"Invalid Command Length","3":"Invalid Command ID","4":"Invalid bind status","5":"Bind attempted when already bound","6":"Invalid priority flag","7":"Invalid registered-delivery flag","8":"SMSC system error","10":"Invalid source address","11":"Invalid destination address","12":"Invalid message-id","13":"Generic bind failure","14":"Invalid password","15":"Invalid System-ID","17":"Cancel failure","19":"Replace failure","20":"Too many messages in queue, at present","22":"Invalid services type","51":"Invalid number of destination addresses","52":"Invalid name","64":"Invalid Destination Flag Option","66":"Invalid value for submit with replace option","67":"Invalid value for esm_class field","68":"Cannot submit to a distribution list","69":"Generic submission failure","72":"Invalid type of number for source","73":"Invalid numbering plan indicator for source","74":"Invalid type of number for destination","75":"Invalid numbering plan indicator for destination","77":"Invalid esm type","78":"Invalid submit with replace flag option","85":"Invalid number of messages specified for query_last_msgs primitive","88":"SMSC is throttling inbound messages","98":"Invalid Validity Date","103":"Quota violation, add credit to account","194":"Invalid optional parameter length","195":"Missing optional parameter","196":"Invalid optional parameter value","254":"Generic delivery failure","255":"Unknown Error","-2":"Error from SMS gateway","-1":"No more SMS available for current period"},"codesByEventcode":{"20":{"1":"too many items in timeframe","2":"platform data consumption overflow","3":"item traffic overflow","4":"item storage overflow","5":"items count exceeds the current limit","6":"item configuration is invalid"}}}')},a99a:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-toolbar",{staticClass:"justify-between bg-grey-9"},[i("q-resize-observer",{on:{resize:e.resizeHandler}}),e._t("selects"),e.item?i("div",[e.item.deleted||void 0===e.mode?e._e():i("q-btn",{staticClass:"on-right pull-right text-center rounded-borders q-px-xs q-py-none",staticStyle:{"min-width":"73px","max-width":"73px"},attrs:{flat:"",dense:"",color:"white"},on:{click:function(t){return e.$emit("change:mode",!e.mode)}}},[i("q-icon",{attrs:{size:"1.5rem",color:"white",name:e.mode?"playlist_play":"history"}}),i("div",{staticStyle:{"font-size":".7rem","line-height":".7rem"}},[e._v(e._s(e.mode?"Real-time":"History"))]),i("q-tooltip",[e._v("Mode (Real-time/History)")])],1),!e.item.deleted&&void 0!==e.ratio&&e.width>=900?i("q-btn-toggle",{staticClass:"q-ml-sm gt-xs",attrs:{dense:"",flat:"",color:"grey-4","toggle-color":"white","toggle-text-color":"white",size:"sm",value:e.ratio,options:[{label:"logs",value:100},{label:"both",value:50},{label:"messages",value:0}]},on:{input:function(t){return e.$emit("change:ratio",t)}}}):e._e()],1):e._e(),e.item&&e.$q.platform.is.desktop&&e.width>=900?i("div",{staticClass:"flex justify-end",style:{width:(e.actions&&e.actions.length?72*e.actions.length:"")+"px"}},[e._l(e.actions,(function(t,s){return[t.condition?i("transition",{key:s,attrs:{appear:"","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutUp"}},[i("q-btn",{staticClass:"on-left cursor-pointer pull-right text-center rounded-borders q-px-xs q-py-none text-white",staticStyle:{width:"60px"},attrs:{title:t.label,flat:"",dense:""},on:{click:t.handler}},[i("q-icon",{attrs:{size:"1.5rem",name:t.icon}}),i("div",{staticStyle:{"font-size":".7rem","line-height":".7rem"}},[e._v(e._s(t.label))])],1)],1):e._e()]}))],2):e.item&&(!e.$q.platform.is.desktop||e.width<900)?i("div",[e.hasActiveActions?i("q-btn",{attrs:{flat:"",icon:"mdi-dots-vertical",color:"white"}},[i("q-menu",[i("q-list",[e.item.deleted||void 0===e.ratio?e._e():i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}]},[i("q-btn-toggle",{attrs:{dense:"",color:"grey-8","toggle-color":"white","toggle-text-color":"grey-9",size:"sm",flat:"",value:e.ratio,options:[{label:"logs",value:100},{label:"both",value:50},{label:"messages",value:0}]},on:{input:function(t){return e.$emit("change:ratio",t)}}})],1),e._l(e.actions,(function(t,s){return[t.condition?i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:s,attrs:{clickable:""},on:{click:t.handler}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.icon}})],1),i("q-item-section",[e._v(e._s(t.label))])],1):e._e()]}))],2)],1)],1):e._e()],1):e._e()],2)},n=[],a={props:["item","ratio","mode","actions"],data:function(){return{width:0}},computed:{hasActiveActions:function(){return!this.item.deleted&&void 0!==this.ratio||this.actions.reduce((function(e,t){return e||t&&t.condition}),!1)}},methods:{resizeHandler:function(e){var t=e.width;this.width=t}}},o=a,c=i("2877"),r=Object(c["a"])(o,s,n,!1,null,null,null);t["a"]=r.exports},b07e:function(e,t,i){},cc73:function(e,t,i){"use strict";var s=i("2b06"),n=i.n(s);n.a},d960:function(e,t,i){"use strict";var s=i("b07e"),n=i.n(s);n.a},ef95:function(e,t,i){"use strict";i("a481"),i("4917"),i("28a5");t["a"]={methods:{filterMessages:function(e,t){function i(e){var t=e.split(",");return t.reduce((function(e,t){var i=[],s="";return-1!==t.indexOf("!=")?(i=t.split("!="),s="!="):-1!==t.indexOf("<=")?(i=t.split("<="),s="<="):-1!==t.indexOf(">=")?(i=t.split(">="),s=">="):-1!==t.indexOf("=")?(i=t.split("="),s="="):-1!==t.indexOf("<")?(i=t.split("<"),s="<"):-1!==t.indexOf(">")?(i=t.split(">"),s=">"):(i=[t,null],s="exist"),s&&e.push({operation:s,field:i[0],value:i[1]}),e}),[])}if(this.filter){var s=i(e);return t.filter((function(e){var t=s.reduce((function(t,i){switch(i.operation){case"!=":return t&&!!e[i.field]&&e[i.field]!=i.value;case"<=":return t&&!!e[i.field]&&e[i.field]<=i.value;case">=":return t&&!!e[i.field]&&e[i.field]>=i.value;case"=":var s=JSON.stringify(e[i.field]);return"string"===typeof e[i.field]&&(s=s.slice(1,-1)),t&&!!s&&!!s.match("^".concat(i.value.replace(/\*/g,".*"),"$"));case"<":return t&&!!e[i.field]&&e[i.field]<i.value;case">":return t&&!!e[i.field]&&e[i.field]>i.value;default:return t&&void 0!==e[i.field]}}),!0);return t&&(e["x-flespi-filter-fields"]=s.map((function(e){return e.field}))),t}))}return 0===this.mode?t.map((function(e){return e["x-flespi-filter-fields"]&&delete e["x-flespi-filter-fields"],e})):t}}}}}]);