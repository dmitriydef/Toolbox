(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["64fd930d"],{"1cba":function(e,t,i){var s=i("4796"),n=i("9aff"),o=i("6428");function a(e){return function(t,i,a){return a&&"number"!=typeof a&&n(t,i,a)&&(i=a=void 0),t=o(t),void 0===i?(i=t,t=0):i=o(i),a=void 0===a?t<i?1:-1:o(a),s(t,i,a,e)}}e.exports=a},2985:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[e.active?[i("q-toolbar",{staticClass:"justify-between",attrs:{color:"dark"}},[i("div",{staticStyle:{"max-width":"40%"}},[i("q-item",{staticClass:"no-padding",staticStyle:{display:"inline-flex","max-width":"100%"},style:{cursor:e.isNeedSelect?"":"default!important"}},[i("q-item-main",{attrs:{title:"protocol: "+(e.protocols[e.selectedItem.protocol_id]||e.selectedItem.protocol_id)}},[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:"140px"},attrs:{label:""}},[e._v(e._s(e.selectedItem.name||"<noname>"))]),i("q-item-tile",{staticClass:"ellipsis overflow-hidden",staticStyle:{"font-size":"0.8rem"},attrs:{sublabel:""}},[e._v(e._s(e.selectedItem.uri))])],1),i("q-item-side",{staticClass:"text-right"},[e.selectedItem.id?i("q-item-tile",{staticClass:"text-center",staticStyle:{display:"inline-block"},attrs:{stamp:"",color:"white"}},[e.selectedItem.deleted?i("div",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),e._v("#"+e._s(e.selectedItem.id.toString()))]):e._e(),e.isNeedSelect?i("q-item-tile",{staticStyle:{display:"inline-block"},attrs:{stamp:"",color:"white",size:"2rem",icon:"mdi-menu-down"}}):e._e()],1),e.isNeedSelect?i("q-popover",{ref:"popoverActive",attrs:{fit:""}},[i("q-input",{staticClass:"q-ma-xs q-pa-xs items__filter",attrs:{color:"dark",clearable:"",placeholder:"Filter","hide-underline":""},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},[e.filteredItems.length?i("VirtualList",{attrs:{size:76,remain:e.filteredItems.length>6?6:e.filteredItems.length}},e._l(e.filteredItems,function(t,s){return i("q-item",{key:s,staticClass:"cursor-pointer",class:{"text-grey-8":t.deleted},attrs:{highlight:""},nativeOn:{click:function(i){e.active=t.id,e.$refs.popoverActive.hide(),e.$emit("view-data-hide")}}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",attrs:{label:""}},[e._v(e._s(t.name||"<noname>"))]),i("q-item-tile",{attrs:{sublabel:""}},[i("small",[e._v(e._s(e.protocols&&e.protocols[t.protocol_id]||"<no protocol>"))])]),i("q-item-tile",{staticClass:"ellipsis overflow-hidden",attrs:{sublabel:""}},[i("small",[e._v(e._s(t.uri||"<no uri>"))])])],1),i("q-item-side",{staticClass:"text-center"},[t.deleted?i("q-item-tile",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),t.id?i("q-item-tile",[i("small",[e._v("#"+e._s(t.id.toString()))])]):e._e()],1)],1)})):i("div",{staticClass:"text-center q-ma-md"},[e._v("\n                No channels\n              ")])],1),e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:e.getDeletedHandler}},[e._v("see deleted")]):e._e()],1):e._e()],1),e.selectedItem.protocol_id===e.proxyProtocolId?i("q-icon",{staticClass:"on-right cursor-pointer pull-right",staticStyle:{position:"relative",top:"10px"},attrs:{title:"View hex payload",size:"1.5rem",color:"white",name:"mdi-matrix"},nativeOn:{click:function(t){return e.hexViewHandler(t)}}}):e._e()],1),i("div",[e.selectedItem.deleted?e._e():i("q-btn",{staticClass:"on-left",attrs:{title:"Mode (Real-time/History)",size:"sm",flat:"",color:"white",icon:e.modeModel?"playlist_play":"history",rounded:e.$q.platform.is.mobile},on:{click:function(t){e.modeModel=!e.modeModel}}},[e._v("\n          "+e._s(e.$q.platform.is.mobile?"":e.modeModel?"Real-time":"History")+"\n          "),e.newMessagesCount?i("q-chip",{staticClass:"cursor-pointer q-ml-sm",attrs:{small:"",square:"",color:"red"}},[e._v(e._s(e.newMessagesCount))]):e._e()],1),e.selectedItem.deleted?e._e():i("q-btn-toggle",{staticClass:"q-ml-sm gt-xs",attrs:{dense:"",color:"grey-8","toggle-color":"white","toggle-text-color":"dark",size:"sm",options:[{label:"logs",value:100},{label:"both",value:50},{label:"messages",value:0}]},model:{value:e.ratio,callback:function(t){e.ratio=t},expression:"ratio"}}),i("q-btn",{staticClass:"lt-sm",attrs:{dense:"",size:"sm"}},[e._v("\n          "+e._s(50===e.ratio?"both":0===e.ratio?"messages":"logs")+"\n          "),i("q-popover",{staticStyle:{"background-color":"transparent"}},[e.selectedItem.deleted?e._e():i("q-btn-toggle",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{dense:"",color:"grey-8","toggle-color":"white","toggle-text-color":"dark",size:"sm",options:[{label:"logs",value:100},{label:"both",value:50},{label:"messages",value:0}]},model:{value:e.ratio,callback:function(t){e.ratio=t},expression:"ratio"}})],1)],1)],1),i("div",[e.modeModel&&!e.isEmptyMessages?i("q-icon",{staticClass:"on-left cursor-pointer pull-right",attrs:{title:"Clear all panes",size:"1.5rem",color:"white",name:"mdi-playlist-remove"},nativeOn:{click:function(t){return e.clearHandler(t)}}}):e._e()],1)]),+e.size[0]?i("logs",{ref:"logs",style:{minHeight:"calc("+e.size[0]+"vh - "+(+e.size[1]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},attrs:{mode:e.mode,item:e.selectedItem,limit:e.limit,isEnabled:!!+e.size[0],originPattern:"gw/channels/:id",config:e.config.logs},on:{"view-log-message":e.viewLogMessagesHandler}}):e._e(),+e.size[1]?i("messages",{ref:"messages",style:{minHeight:"calc("+e.size[1]+"vh - "+(+e.size[0]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},attrs:{mode:e.mode,activeId:e.active,isEnabled:!!+e.size[1],limit:e.limit,config:e.config.messages},on:{"view-data":e.viewDataHandler}}):e._e()]:[i("div",{staticClass:"text-center",staticStyle:{display:"flex","justify-content":"center","font-size":"1.5rem"}},[i("div",{staticClass:"text-grey-3",staticStyle:{"margin-top":"50px"}},[e.items.length?i("q-btn",{staticStyle:{display:"flex","flex-wrap":"nowrap","margin-top":"20px"},attrs:{flat:"","icon-right":"mdi-menu-down"}},[e._v("\n          Select channel\n          "),i("q-popover",{ref:"popoverNotActive",attrs:{fit:""}},[i("q-input",{staticClass:"q-ma-xs q-pa-xs items__filter",attrs:{color:"dark",clearable:"",placeholder:"Filter","hide-underline":""},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},[e.filteredItems?i("VirtualList",{attrs:{size:76,remain:e.filteredItems.length>6?6:e.filteredItems.length}},e._l(e.filteredItems,function(t,s){return i("q-item",{key:s,staticClass:"cursor-pointer",class:{"text-grey-8":t.deleted},attrs:{highlight:""},nativeOn:{click:function(i){e.active=t.id,e.$refs.popoverNotActive.hide()}}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:e.$q.platform.is.mobile?"":"140px"},attrs:{title:t.name,label:""}},[e._v(e._s(t.name||"<noname>"))]),i("q-item-tile",{attrs:{sublabel:""}},[i("small",[e._v(e._s(e.protocols&&e.protocols[t.protocol_id]||"<no protocol>"))])]),i("q-item-tile",{attrs:{sublabel:""}},[i("small",[e._v(e._s(t.uri||"<no uri>"))])])],1),i("q-item-side",{staticClass:"text-center"},[t.deleted?i("q-item-tile",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),t.id?i("q-item-tile",[i("small",[e._v("#"+e._s(t.id.toString()))])]):e._e()],1)],1)})):i("div",{staticClass:"text-center q-ma-md"},[e._v("\n                No channels\n              ")])],1),e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:e.getDeletedHandler}},[e._v("see deleted")]):e._e()],1)],1):e._e(),e.items.length?e._e():i("div",[i("div",[e._v(e._s(e.isLoading?"Fetching data..":"Channels not found"))]),!e.isLoading&&e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"q-mt-sm",attrs:{icon:"mdi-download",label:"see deleted"},on:{click:e.getDeletedHandler}}):e._e()],1)],1)])]],2)},n=[],o=(i("96cf"),i("c973")),a=i.n(o),l=(i("c5f6"),i("55dd"),i("7f7f"),i("ac6a"),i("cadf"),i("456d"),i("6762"),i("2fdb"),i("3156")),c=i.n(l),r=i("2ce0"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("virtual-scroll-list",{ref:"scrollList",attrs:{cols:e.cols,actions:e.actions,items:e.messages,date:e.from,mode:e.mode,viewConfig:e.viewConfig,colsConfigurator:"toolbar",i18n:e.i18n,filter:e.filter,theme:e.theme,title:"Messages"},on:{"change:filter":e.filterChangeHandler,"change:pagination-next":e.paginationNextChangeHandler,"change:mode":e.modeChange,"update:cols":e.updateColsHandler,"change:date":e.dateChangeHandler},scopedSlots:e._u([{key:"items",fn:function(t){var s=t.item,n=t.index,o=t.actions,a=t.cols,l=t.etcVisible,c=t.actionsVisible,r=t.itemHeight,d=t.rowWidth;return i("messages-list-item",{key:""+JSON.stringify(s)+n,attrs:{item:s,index:n,actions:o,cols:a,itemHeight:r,rowWidth:d,etcVisible:l,actionsVisible:c,selected:e.selected.includes(n)},on:{action:e.actionHandler,"item-click":e.itemClickHandler}})}}])})],1)},m=[],u=i("448a"),f=i.n(u),h=i("de45"),p=i("2b0e"),g=i("f490"),v=i("ef95"),x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px"}},[e.item["__connectionStatus"]||e.item["x-flespi-filter-prev"]||e.item["x-flespi-filter-next"]?e.item["x-flespi-filter-prev"]||e.item["x-flespi-filter-next"]?i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px",color:"#000",fontWeight:"bold",backgroundColor:e.item["x-flespi-filter-prev"]?"#819002":"#ccb300",overflow:"hidden"}},[i("span",{staticClass:"uppercase text-white",staticStyle:{padding:"0 5px"}},[e._v(e._s(e.item["x-flespi-filter-next"]?'Next results will be filtered by: "'+e.item["x-flespi-filter-next"]+'"':'Filter removed: "'+e.item["x-flespi-filter-prev"]+'"'))])]):i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px",border:"solid 1px #000",color:"#000",fontWeight:"bold",backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0",backgroundImage:"url(./statics/police.png)",overflow:"hidden",opacity:".7"},attrs:{title:e.date.formatDate(1e3*e.item.timestamp,"DD/MM/YYYY HH:mm:ss")}},e._l(Array(10),function(t){return i("span",{key:t,staticClass:"uppercase",staticStyle:{padding:"0 5px","margin-left":"150px"},style:{backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0"}},[e._v(e._s(e.item["__connectionStatus"]))])})):i("div",{staticClass:"cursor-pointer",class:[e.item.__status?"missed-items":""],style:{height:e.itemHeight+"px",width:e.rowWidth+"px",backgroundColor:e.selected?"rgba(255,255,255,0.7)":"",color:e.selected?"#333":""},on:{click:function(t){e.itemClickHandler(e.index,e.clearItem,t)}}},[e.actionsVisible?i("span",{staticClass:"list__item item_actions"},e._l(e.actions,function(t,s){return i("q-icon",{key:s,staticClass:"cursor-pointer on-left",class:t.classes,attrs:{name:t.icon},nativeOn:{click:function(i){i.stopPropagation(),e.clickHandler(e.index,t.type,e.item)}}},[i("q-tooltip",[e._v(e._s(t.label))])],1)})):e._e(),e._l(e.cols,function(t,s){var n;return i("span",{key:t.name+s,staticClass:"list__item",class:(n={},n["item_"+s]=!0,n),style:{color:e.item["x-flespi-filter-fields"]&&e.item["x-flespi-filter-fields"].includes(t.name)?"#4caf50":""},attrs:{title:e.values[t.name].value}},[e._v("\n    "+e._s(e.values[t.name].value)+"\n  ")])}),e.etcVisible?i("span",{staticClass:"list__item item_etc"},[e._v("\n    "+e._s(e.values.etc.value||"*Empty*")+"\n  ")]):e._e()],2)])},_=[],b=(i("4917"),i("9523")),y=i.n(b),w=i("7037"),$=i.n(w),C=(i("28a5"),{props:["item","index","actions","cols","itemHeight","etcVisible","rowWidth","actionsVisible","selected"],data:function(){return{date:g["d"]}},computed:{values:function(){var e=this,t=this.cols.reduce(function(e,t,i,s){return e[t.name]={value:null},i===s.length-1&&(e.etc={value:""}),e},{});return Object.keys(this.item).forEach(function(i){if(-1!==i.indexOf("#")){var s=i.split("#"),n=s[0],o=s[1];if(t[n]){if(t[n].value){if("object"!==$()(t[n].value)){var a=t[n].value;t[n].value=y()({},o-1,a)}}else t[n].value={};t[n].value[o]=JSON.stringify(e.item[i])}else t.etc.value+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; ")}else if(t[i]){var l=e.item[i];-1!==i.indexOf("image.bin.")?l="<binary image>":-1!==i.indexOf("proxy.event")?l=0===l?"data received":1===l?"connected":"disconnect":-1!==i.indexOf("proxy.source")?l=0===l?"channel incoming connection":"target ".concat(l):i.match(/timestamp$/)&&(l=g["d"].formatDate(1e3*l,"DD/MM/YYYY HH:mm:ss")),t[i].value="string"===typeof l?l:JSON.stringify(l)}else{if("__status"===i||"x-flespi-filter-fields"===i||"x-flespi-filter-next"===i||"x-flespi-filter-prev"===i)return!1;t.etc.value+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; ")}}),Object.keys(t).forEach(function(e){if("object"===$()(t[e].value)&&t[e].value)if(t[e].value instanceof Array){var i=t[e].value.reduce(function(e,t,i,s){return e+=t,i!==s.length-1&&(e+=", "),e},"");t[e].value=i}else if(t[e].value instanceof Object){var s=Object.keys(t[e].value).reduce(function(i,s,n,o){return i+="".concat(s,": ").concat(t[e].value[s]),n!==o.length-1&&(i+=", "),i},"");t[e].value=s}}),t},clearItem:function(){var e=this;return Object.keys(this.item).reduce(function(t,i){return"delimiter"===i||"__status"===i||"x-flespi-filter-fields"===i||"x-flespi-filter-next"===i||"x-flespi-filter-prev"===i?t:(t[i]=e.item[i],t)},{})}},methods:{clickHandler:function(e,t,i){this.$emit("action",{index:e,type:t,content:i})},itemClickHandler:function(e,t,i){this.$emit("item-click",{index:e,content:t,event:i})}}}),N=C,k=(i("d912"),i("2877")),q=Object(k["a"])(N,x,_,!1,null,null,null);q.options.__file="MessagesListItem.vue";var H=q.exports,M=i("5a3a"),S=i.n(M),I={props:["mode","date","activeId","limit","config"],data:function(){return{theme:this.config.theme,i18n:{},viewConfig:this.config.viewConfig,actions:this.config.actions,moduleName:this.config.vuexModuleName}},computed:{messages:{get:function(){var e=this.$store.state[this.moduleName].messages;return this.setTranslation(e),1===this.mode?e:this.filterMessages(this.filter,e)},set:function(e){this.$store.commit("".concat(this.moduleName,"/setMessages"),e)}},active:{get:function(){return this.$store.state[this.moduleName].active},set:function(){var e=a()(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling"));case 2:return this.$store.commit("".concat(this.moduleName,"/setActive"),t),i=this.$store.state.items.filter(function(e){return t===e.id})[0]||{},p["default"].set(this.config.viewConfig,"needShowEtc",i.protocol_name&&("http"===i.protocol_name||"mqtt"===i.protocol_name)),e.next=7,this.$store.dispatch("".concat(this.moduleName,"/getCols"));case 7:this.modeChange(this.mode),this.$store.dispatch("".concat(this.moduleName,"/pollingGet"));case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},cols:{get:function(){return this.$store.state[this.moduleName].cols},set:function(e){this.$store.commit("".concat(this.moduleName,"/updateCols"),e)}},filter:{get:function(){return this.$store.state[this.moduleName].filter},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFilter"),e):this.$store.commit("".concat(this.moduleName,"/setFilter"),"")}},from:{get:function(){var e=this.$store.state[this.moduleName];return e.messages[0]&&e.messages[0].timestamp?Math.ceil(1e3*e.messages[0].timestamp):Date.now()},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFrom"),Math.ceil(e/1e3)):this.$store.commit("".concat(this.moduleName,"/setFrom"),0),this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/get"))}},currentLimit:{get:function(){return this.$store.state[this.moduleName].limit},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setLimit"),e):this.$store.commit("".concat(this.moduleName,"/setLimit"),1e3)}},selected:{get:function(){return this.$store.state[this.moduleName].selected},set:function(e){this.$store.commit("".concat(this.moduleName,"/setSelected"),e)}}},methods:{resetParams:function(){this.$refs.scrollList.resetParams()},filterChangeHandler:function(e){this.filter!==e&&(this.filter=e)},setTranslation:function(e){this.i18n.to=e.length?"Next batch from ".concat(g["d"].formatDate(1e3*this.from,"HH:mm:ss")):"Next"},dateChangeHandler:function(e){this.from=e},modeChange:function(e){switch(e=+e,this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.commit("".concat(this.moduleName,"/setMode"),e),e){case 0:this.active&&this.$store.dispatch("".concat(this.moduleName,"/get"));break}},updateColsHandler:function(e){this.cols=e},paginationNextChangeHandler:function(){this.$store.dispatch("".concat(this.moduleName,"/get"))},actionHandler:function(e){var t=e.index,i=e.type,s=e.content;switch(i){case"view":this.viewMessagesHandler({index:t,content:s});break;case"copy":this.copyMessageHandler({index:t,content:s});break}},viewMessagesHandler:function(e){var t=e.index,i=e.content;this.selected=[t],this.$emit("view-data",i)},itemClickHandler:function(e){var t=this,i=e.index,s=(e.content,e.event);if(s.shiftKey)this.selected[0]?this.selected[0]>i?this.selected=S()(i,this.selected[0]+1):this.selected=S()(this.selected[0],i+1):this.selected=[i];else if(s.ctrlKey)if(this.selected.includes(i)){var n=this.selected;n.splice(this.selected.indexOf(i),1),this.selected=n}else this.selected=f()(this.selected).concat([i]);else this.selected=[i];this.$emit("view-data",this.messages.filter(function(e,i){return t.selected.includes(i)}))},copyMessageHandler:function(e){var t=this,i=(e.index,e.content);this.$copyText(JSON.stringify(i)).then(function(e){t.$q.notify({type:"positive",icon:"content_copy",message:"Message copied",timeout:1e3})},function(e){t.$q.notify({type:"negative",icon:"content_copy",message:"Error coping messages",timeout:1e3})})},unselect:function(){this.selected.length&&(this.selected=[])}},watch:{activeId:function(e){this.active=e},mode:function(e){this.modeChange(e)},limit:function(e){this.currentLimit=e}},created:function(){var e=this;if(this.$store.state[this.moduleName]?this.$store.commit("".concat(this.moduleName,"/clear")):this.$store.registerModule(this.moduleName,Object(h["b"])({Vue:p["default"],LocalStorage:this.$q.localStorage,name:this.moduleName,errorHandler:function(t){e.$store.commit("reqFailed",t)},filterHandler:this.filterMessages})),this.currentLimit=this.limit,this.activeId){this.$store.commit("".concat(this.moduleName,"/setActive"),this.activeId);var t=this.$store.state.items.filter(function(t){return e.activeId===t.id})[0]||{};p["default"].set(this.config.viewConfig,"needShowEtc",t.protocol_name&&("http"===t.protocol_name||"mqtt"===t.protocol_name)),this.$store.dispatch("".concat(this.moduleName,"/getCols"))}null===this.$store.state[this.moduleName].mode&&(this.modeChange(this.mode),this.$store.dispatch("".concat(this.moduleName,"/pollingGet"))),p["default"].connector.socket.on("offline",function(){1===e.mode&&(e.$store.commit("".concat(e.moduleName,"/setOffline"),1===e.mode),e.$store.commit("setSocketOffline",!0))}),p["default"].connector.socket.on("connect",function(){e.$store.state[e.moduleName].offline&&(e.$store.commit("".concat(e.moduleName,"/setReconnected"),1===e.mode),e.$store.commit("setSocketOffline",!1))})},beforeDestroy:function(){p["default"].connector.socket.off("offline"),p["default"].connector.socket.off("connect"),this.$store.commit("".concat(this.moduleName,"/clear"))},mixins:[v["a"]],components:{VirtualScrollList:h["a"],MessagesListItem:H}},O=I,D=(i("2abc"),Object(k["a"])(O,d,m,!1,null,null,null));D.options.__file="Index.vue";var L=D.exports,z=i("2f62"),E=i("95ff"),V=i.n(E),j={props:["limit","isLoading","isVisibleToolbar","isNeedSelect","config"],data:function(){return{filter:"",mode:1,active:null,ratio:50,isInit:!1,needShowGetDeletedAction:!0}},computed:c()({},Object(z["d"])({newMessagesCount:function(e){var t=this.config.messages&&e[this.config.messages.vuexModuleName]?e[this.config.messages.vuexModuleName].newMessagesCount:0,i=this.config.logs&&e[this.config.logs.vuexModuleName]?e[this.config.logs.vuexModuleName].newMessagesCount:0;return t+i},isEmptyMessages:function(e){var t=this.config.messages&&e[this.config.messages.vuexModuleName]&&!e[this.config.messages.vuexModuleName].messages.length&&100!==this.ratio,i=this.config.logs&&e[this.config.logs.vuexModuleName]&&e[this.config.logs.vuexModuleName].messages&&!e[this.config.logs.vuexModuleName].messages.length&&0!==this.ratio;return t&&i},tokenType:function(e){return e.tokenInfo.access?e.tokenInfo.access.type:-1},protocols:function(e){return e.protocols},items:function(e){var t=e.items,i=t.map(function(e){return e.id});return this.isInit&&this.acitve&&!i.includes(this.acitve)&&this.clearActive(),t},proxyProtocolId:function(e){var t=e.protocols;return Object.keys(t).reduce(function(e,i){return"proxy"===t[i]&&(e=parseInt(i)),e},0)}}),{filteredItems:function(){var e=this.filter.toLowerCase(),t=this.filter?this.items.filter(function(t){return t&&"undefined"!==typeof t.name&&null!==t.name&&t.name.toLowerCase().indexOf(e)>=0||t&&"undefined"!==typeof t.id&&null!==t.id&&(t.id+"").indexOf(e)>=0}):this.items;return t.sort(function(e,t){var i=e.name.toLowerCase(),s=t.name.toLowerCase();return!i||i<s?-1:1}),t},size:function(){return[this.ratio,100-this.ratio]},selectedItem:function(){var e=this,t=this.items.filter(function(t){return t.id===e.active})[0]||{};return t.deleted&&this.deletedHandler(),t},modeModel:{get:function(){return!!this.mode},set:function(e){var t=Date.now();this.date=e?0:t-t%864e5,this.mode=Number(e),this.$emit("view-data-hide")}}}),methods:c()({},Object(z["b"])(["getDeleted"]),{viewDataHandler:function(e){this.$emit("view-data",e[e.length-1])},viewLogMessagesHandler:function(e){this.$emit("view-log-message",e)},hexViewHandler:function(){this.$router.push("/tools/hex/".concat(this.active))},unselect:function(){this.$refs.messages.unselect()},clearHandler:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Do you really want to clear all data from the panes?",ok:!0,cancel:!0}).then(function(){e.$store.commit("".concat(e.config.messages.vuexModuleName,"/clearMessages")),e.$store.commit("".concat(e.config.logs.vuexModuleName,"/clearMessages"))}).catch(function(){})},getDeletedHandler:function(){var e=a()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDeleted("channels");case 2:this.needShowGetDeletedAction=!1;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),clearActive:function(){this.active=null},deletedHandler:function(){this.ratio=100,this.mode=0}}),created:function(){var e=this,t="channels",i=this.$q.localStorage.get.item(t),s=this.$route.params&&this.$route.params.id?this.$route.params.id:null;this.$store.dispatch("getItems",this.isNeedSelect?t:{entity:t,id:s}).then(function(){e.isInit=!0,s?e.items.filter(function(e){return e.id===Number(s)}).length?e.active=Number(s):e.active=null:i&&e.items.filter(function(e){return e.id===i}).length&&(e.active=i),e.selectedItem.deleted&&e.deletedHandler()})},beforeDestroy:function(){var e=this.$route.params&&this.$route.params.id?this.$route.params.id:null,t="channels";this.$store.dispatch("unsubscribeItems",this.isNeedSelect?t:{entity:t,id:e})},watch:{ratio:function(e){var t=this;this.$nextTick(function(){+t.size[0]&&t.active&&(t.$refs.logs.resetParams(),t.$emit("view-data-hide")),+t.size[1]&&t.active&&t.$refs.messages.resetParams()})},$route:function(e){e.params&&e.params.id?this.items.filter(function(t){return t.id===Number(e.params.id)}).length?this.active=Number(e.params.id):this.isInit&&(this.active=null):e.params&&!e.params.id&&(this.active=null)},active:function(e){var t=this.items.filter(function(t){return t.id===e})[0]||{};e?(this.$q.localStorage.set("channels",e),this.$router.push("/channels/".concat(e))):this.$router.push("/channels"),t.deleted?this.deletedHandler():this.ratio=t.deleted?100:50}},components:{logs:r["a"],messages:L,VirtualList:V.a}},A=j,T=(i("ac4a"),Object(k["a"])(A,s,n,!1,null,null,null));T.options.__file="Channels.vue";t["default"]=T.exports},"2abc":function(e,t,i){"use strict";var s=i("dc9f"),n=i.n(s);n.a},"43c4":function(e,t,i){},4796:function(e,t){var i=Math.ceil,s=Math.max;function n(e,t,n,o){var a=-1,l=s(i((t-e)/(n||1)),0),c=Array(l);while(l--)c[o?l:++a]=e,e+=n;return c}e.exports=n},"5a3a":function(e,t,i){var s=i("1cba"),n=s();e.exports=n},6428:function(e,t,i){var s=i("b4b0"),n=1/0,o=1.7976931348623157e308;function a(e){if(!e)return 0===e?e:0;if(e=s(e),e===n||e===-n){var t=e<0?-1:1;return t*o}return e===e?e:0}e.exports=a},a587:function(e,t,i){},ac4a:function(e,t,i){"use strict";var s=i("43c4"),n=i.n(s);n.a},b4b0:function(e,t,i){var s=i("1a8c"),n=i("ffd6"),o=NaN,a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,r=/^0o[0-7]+$/i,d=parseInt;function m(e){if("number"==typeof e)return e;if(n(e))return o;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var i=c.test(e);return i||r.test(e)?d(e.slice(2),i?2:8):l.test(e)?o:+e}e.exports=m},d912:function(e,t,i){"use strict";var s=i("a587"),n=i.n(s);n.a},dc9f:function(e,t,i){}}]);