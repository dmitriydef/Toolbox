(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"+kCt":function(e,t,i){},"3vs0":function(e,t,i){"use strict";var s=i("EsCb"),n=i.n(s);n.a},"7VC1":function(e,t,i){"use strict";var s=i("XKFU"),n=i("Lgjv"),o=i("ol8x");s(s.P+s.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padEnd:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},"9XZr":function(e,t,i){"use strict";var s=i("XKFU"),n=i("Lgjv"),o=i("ol8x");s(s.P+s.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},An74:function(e,t,i){"use strict";var s=i("EzUZ"),n=i.n(s);n.a},EsCb:function(e,t,i){},EzUZ:function(e,t,i){},HLqC:function(e,t,i){var s=i("R5Y4"),n=i("mv/X"),o=i("ZCgT");function r(e){return function(t,i,r){return r&&"number"!=typeof r&&n(t,i,r)&&(i=r=void 0),t=o(t),void 0===i?(i=t,t=0):i=o(i),r=void 0===r?t<i?1:-1:o(r),s(t,i,r,e)}}e.exports=r},Lgjv:function(e,t,i){var s=i("ne8i"),n=i("l0Rn"),o=i("vhPU");e.exports=function(e,t,i,r){var a=String(o(e)),c=a.length,l=void 0===i?" ":String(i),m=s(t);if(m<=c||""==l)return a;var h=m-c,d=n.call(l,Math.ceil(h/l.length));return d.length>h&&(d=d.slice(0,h)),r?d+a:a+d}},R5Y4:function(e,t){var i=Math.ceil,s=Math.max;function n(e,t,n,o){var r=-1,a=s(i((t-e)/(n||1)),0),c=Array(a);while(a--)c[o?a:++r]=e,e+=n;return c}e.exports=n},Sxd8:function(e,t,i){var s=i("ZCgT");function n(e){var t=s(e),i=t%1;return t===t?i?t-i:t:0}e.exports=n},UN7E:function(e,t,i){},Vr3c:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[e.active?[i("q-toolbar",{staticClass:"justify-between",attrs:{color:"dark"}},[i("div",[i("q-item",{staticClass:"no-padding",staticStyle:{display:"inline-flex"},style:{cursor:e.isNeedSelect?"":"default!important"}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:"140px"},attrs:{label:""}},[e._v(e._s(e.selectedItem.name||"<noname>"))]),i("q-item-tile",{staticStyle:{"font-size":"0.8rem"},attrs:{sublabel:""}},[e._v(e._s(e.selectedItem.uri))])],1),i("q-item-side",{staticClass:"text-right"},[i("q-item-tile",{staticClass:"text-center",staticStyle:{display:"inline-block"},attrs:{stamp:"",color:"white"}},[e.selectedItem.deleted?i("div",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),e._v("#"+e._s(e.selectedItem.id.toString()))]),e.isNeedSelect?i("q-item-tile",{staticStyle:{display:"inline-block"},attrs:{stamp:"",color:"white",size:"2rem",icon:"mdi-menu-down"}}):e._e()],1),e.isNeedSelect?i("q-popover",{ref:"popoverActive",attrs:{fit:""}},[i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},[i("VirtualList",{attrs:{size:76,remain:e.items.length>6?6:e.items.length}},e._l(e.items,function(t,s){return i("q-item",{key:s,staticClass:"cursor-pointer",class:{"text-grey-8":t.deleted},attrs:{highlight:""},nativeOn:{click:function(i){e.active=t.id,e.$refs.popoverActive.hide(),e.$emit("view-data-hide")}}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",attrs:{label:""}},[e._v(e._s(t.name||"<noname>"))]),i("q-item-tile",{attrs:{sublabel:""}},[i("small",[e._v(e._s(t.uri||"<no uri>"))])])],1),i("q-item-side",{staticClass:"text-center"},[t.deleted?i("q-item-tile",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),i("q-item-tile",[i("small",[e._v("#"+e._s(t.id.toString()))])])],1)],1)}))],1),e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:e.getDeletedHandler}},[e._v("see deleted")]):e._e()],1):e._e()],1),i("q-icon",{staticClass:"on-right cursor-pointer pull-right",staticStyle:{position:"relative",top:"10px"},attrs:{size:"1.5rem",vif:"active",color:"white",name:"merge_type"},nativeOn:{click:function(t){return e.viewLogsHandler(t)}}},[i("q-tooltip",[e._v("View logs")])],1)],1),e.selectedItem.deleted?e._e():i("q-btn",{class:{"on-left":e.$q.platform.is.desktop},attrs:{flat:"",color:"white",icon:e.modeModel?"playlist_play":"history",rounded:e.$q.platform.is.mobile},on:{click:function(t){e.modeModel=!e.modeModel}}},[e._v("\n        "+e._s(e.$q.platform.is.mobile?"":e.modeModel?"Real-time":"History")+"\n        "),e.newMessagesCount&&e.$q.platform.is.desktop?i("q-chip",{staticClass:"cursor-pointer q-ml-sm",attrs:{small:"",square:"",color:"red"}},[e._v(e._s(e.newMessagesCount))]):e._e(),e.newMessagesCount&&e.$q.platform.is.mobile?i("span",{staticStyle:{position:"absolute",top:"2px",right:"2px",width:"7px",height:"7px","background-color":"red","border-radius":"50%"}}):e._e(),i("q-tooltip",[e._v("Mode (Real-time/History)")])],1),i("div")],1),i("div",{staticStyle:{display:"flex"}},[i("messages",{directives:[{name:"show",rawName:"v-show",value:e.$q.platform.is.desktop||e.$q.platform.is.mobile&&!e.selectedMessages,expression:"$q.platform.is.desktop || ($q.platform.is.mobile && !selectedMessages)"}],ref:"messages",style:{minHeight:"calc(100vh - "+(e.isVisibleToolbar?"100px":"50px")+")",position:"relative",width:e.$q.platform.is.desktop?"25%":"100%"},attrs:{mode:e.mode,activeId:e.active,limit:e.limit,config:e.config.messages,connection:e.activeConnection,type:e.activeConnection?"messages":"connections"},on:{"view-data":function(t){e.selectedMessages=t},"change:connection":function(t){e.activeConnection=t},close:function(){e.activeConnection=null,e.selectedMessages=""}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.$q.platform.is.desktop||e.$q.platform.is.mobile&&e.selectedMessages,expression:"$q.platform.is.desktop || ($q.platform.is.mobile && selectedMessages)"}],style:{width:e.$q.platform.is.desktop?"75%":"100%"}},[e.activeConnection?i("q-toolbar",{attrs:{color:"dark"}},[e.$q.platform.is.mobile?i("q-icon",{staticClass:"cursor-pointer",attrs:{size:"1.5rem",name:"mdi-close"},nativeOn:{click:function(t){return function(){e.selectedMessages=""}()}}}):e._e(),i("q-toolbar-title",[e._v(e._s(e.activeConnection.peer))]),i("q-checkbox",{staticStyle:{"margin-right":"10px"},attrs:{dark:"",color:"white","checked-icon":"mdi-matrix","unchecked-icon":"mdi-format-text","true-value":"hex","false-value":"text"},model:{value:e.typeOfHexView,callback:function(t){e.typeOfHexView=t},expression:"typeOfHexView"}},[i("q-tooltip",[e._v("Change view mode (hex/text)")])],1)],1):e._e(),e.activeConnection?i("hex-viewer",{style:{height:"calc(100vh - "+(e.isVisibleToolbar?e.activeConnection?"150px":"100px":"50px")+")",position:"relative",overflow:"auto"},attrs:{hex:e.hex,view:e.typeOfHexView}}):i("div",{staticStyle:{"text-align":"center",color:"#9e9e9e","font-size":"3rem","padding-top":"40px"}},[e._v("Select connection")])],1)],1),e.selectedItem.deleted?i("div",{staticClass:"text-center",staticStyle:{"font-size":"1.5rem","margin-top":"30px",color:"white"}},[e._v("Nothing to show by channel «"+e._s(e.selectedItem.name)+"» "),i("div",{staticStyle:{"font-size":"0.9rem"}},[e._v("or you haven`t access")])]):e._e()]:[i("div",{staticClass:"text-center",staticStyle:{display:"flex","justify-content":"center","font-size":"1.5rem"}},[i("div",{staticClass:"text-grey-3",staticStyle:{"margin-top":"50px"}},[e.items.length?i("q-btn",{staticStyle:{display:"flex","flex-wrap":"nowrap","margin-top":"20px"},attrs:{flat:"","icon-right":"mdi-menu-down"}},[e._v("\n          Select channel\n          "),i("q-popover",{ref:"popoverNotActive",attrs:{fit:""}},[i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},[i("VirtualList",{attrs:{size:76,remain:e.items.length>6?6:e.items.length}},e._l(e.items,function(t,s){return i("q-item",{key:s,staticClass:"cursor-pointer",class:{"text-grey-8":t.deleted},attrs:{highlight:""},nativeOn:{click:function(i){e.active=t.id,e.$refs.popoverNotActive.hide()}}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:e.$q.platform.is.mobile?"":"140px"},attrs:{label:""}},[e._v(e._s(t.name||"<noname>")),e.$q.platform.is.desktop?i("q-tooltip",[e._v(e._s(t.name))]):e._e()],1),i("q-item-tile",{attrs:{sublabel:""}},[i("small",[e._v(e._s(t.uri||"<no uri>"))])])],1),i("q-item-side",{staticClass:"text-center"},[t.deleted?i("q-item-tile",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),i("q-item-tile",[i("small",[e._v("#"+e._s(t.id.toString()))])])],1)],1)}))],1),e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:e.getDeletedHandler}},[e._v("see deleted")]):e._e()],1)],1):e._e(),e.items.length?e._e():i("div",[e._v(e._s(e.isLoading?"Fetching data..":"Channels not found"))])],1)])]],2)},n=[],o=(i("ls82"),i("yXPU")),r=i.n(o),a=(i("xfY5"),i("rGqo"),i("yt8O"),i("RW0V"),i("MVZn")),c=i.n(a),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"wrapper"},[i("q-resize-observable",{on:{resize:e.wrapperResizeHandler}}),i("div",[Object.keys(e.connections).length&&e.mode||!e.mode||"messages"===e.type?i("q-toolbar",{attrs:{color:"dark"}},[e.showSearch||e.mode||e.filter?i("q-search",{class:{collapsed:!e.mode&&!e.showSearch},staticStyle:{"margin-right":"5px"},style:{width:e.mode&&e.connection?"calc(100% - 50px)":"100%"},attrs:{autofocus:!e.mode,type:"text",inverted:"",placeholder:e.connection?"incoming or target *":"host:port",debounce:0,color:"none"},on:{focus:function(t){e.showSearch=!0},blur:e.searchBlurHandler},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}):i("q-icon",{staticClass:"cursor-pointer",style:{fontSize:"24px",paddingLeft:"8px",marginRight:"5px"},attrs:{name:"search"},nativeOn:{click:function(t){e.showSearch=!0}}}),e.mode||e.showSearch||e.connection?e._e():i("q-datetime",{staticClass:"vsl-date",staticStyle:{"margin-right":"5px"},attrs:{format:"DD-MM-YYYY HH:mm:ss",value:e.from,inverted:"",color:"grey-8",type:"datetime",format24h:""},on:{change:function(t){e.from=t}}}),e.mode||e.showSearch?e._e():i("q-btn",{staticClass:"text-white q-mr-sm",attrs:{icon:"arrow_forward"},on:{click:e.paginationNextChangeHandler}}),"messages"!==e.type||e.showSearch?e._e():i("q-btn",{staticClass:"text-white",staticStyle:{position:"absolute",right:"5px"},attrs:{icon:"mdi-close"},on:{click:function(){e.$emit("close")}}},[i("q-tooltip",[e._v("Close current connection")])],1)],1):e._e(),e.messages.length&&Object.keys(e.renderEntities).length?[i("VirtualList",{ref:"scroller",class:{"bg-dark":!0,"text-white":!0,"cursor-pointer":!0},style:{position:"absolute",top:"50px",bottom:e.mode?0:"36px",right:0,left:0,height:"auto"},attrs:{onscroll:e.listScroll,size:e.itemHeight,remain:e.itemsCount,debounce:10,wclass:"q-w-list"}},e._l(e.renderEntities,function(t,s){return i(e.type+"-list-item",{key:""+JSON.stringify(t)+s,tag:"component",attrs:{item:t,index:s,actions:e.actions,itemHeight:e.itemHeight,selected:e.selected.includes(s)},on:{action:e.actionHandler,"item-click":e.itemClickHandler}})})),e.mode?e._e():i("q-btn",{staticClass:"text-white",staticStyle:{position:"absolute",bottom:"0",width:"100%"},attrs:{color:"dark",icon:"mdi-download"},on:{click:e.paginationNextChangeHandler}},[e._v("Get more")])]:i("div",{staticClass:"no-messages text-center",class:{"text-grey-6":!0},staticStyle:{"font-size":"3rem","padding-top":"40px"}},[e._v(e._s("connections"===e.type?"No connections":"No events")+"\n    ")])],2)],1)},m=[],h=i("RIqP"),d=i.n(h),u=(i("Z2Ku"),i("L9s1"),i("KKXr"),i("3kWr")),f=i("lf+j"),p=i.n(f),v=i("Kw5r"),g=i("9JDm"),x=i("75Vb"),y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-item",{class:["text-"+e.eventsColors[e.item["proxy.event"]]+"-4",e.selected?"bg-grey-10":""],nativeOn:{click:function(t){return function(t){e.itemClickHandler(e.index,e.item,t)}(t)}}},[e.actions?i("q-item-side",e._l(e.actions,function(t,s){return i("q-icon",{key:s,staticClass:"cursor-pointer on-left",class:t.classes,attrs:{name:t.icon},nativeOn:{click:function(i){i.stopPropagation(),e.clickHandler(e.index,t.type,e.item)}}},[i("q-tooltip",[e._v(e._s(t.label))])],1)})):e._e(),i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[e._v(e._s(e.date.formatDate(1e3*e.item.timestamp,"DD/MM/YYYY HH:mm:ss")))]),e.item["proxy.payload.size"]?i("q-item-tile",{attrs:{sublabel:""}},[e._v(e._s(e.item["proxy.payload.size"]+" B : ")),i("small",[e._v(e._s(e.item["proxy.payload.hex"].slice(0,15))+"...")])]):e._e()],1),i("q-item-side",{attrs:{right:""}},[i("small",[e._v(e._s(0===e.item["proxy.source"]?"incoming":"target "+e.item["proxy.source"]))]),i("q-icon",{staticClass:"q-ml-xs",attrs:{color:0===e.item["proxy.source"]?"green":"yellow",name:0===e.item["proxy.source"]?"mdi-arrow-right-thick":1===e.item["proxy.event"]?"mdi-arrow-right-thick":"mdi-arrow-left-thick"}})],1)],1)},w=[],_={props:["item","index","actions","itemHeight","selected"],data:function(){return{date:g["d"],eventsColors:{0:"purple",1:"green",2:"red"}}},methods:{clickHandler:function(e,t,i){this.$emit("action",{index:e,type:t,content:i})},itemClickHandler:function(e,t,i){this.$emit("item-click",{index:e,content:t,event:i})}}},b=_,q=(i("3vs0"),i("KHd+")),C=Object(q["a"])(b,y,w,!1,null,null,null);C.options.__file="MessagesListItem.vue";var k=C.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-item",{nativeOn:{click:function(t){return function(t){e.itemClickHandler(e.index,e.item,t)}(t)}}},[i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[e._v(e._s(e.peer))]),i("q-item-tile",{attrs:{sublabel:""}},[e._v(e._s(e.date.formatDate(1e3*e.timestamp,"DD/MM/YYYY HH:mm:ss")))])],1),i("q-item-side",{attrs:{right:""}},[e._v("\n    "+e._s(e.item.messages.length+" events")+"\n  ")])],1)},S=[],H={props:["item","index","itemHeight","actions"],data:function(){return{date:g["d"],timestamp:this.item.messages[0].timestamp,peer:this.item.peer}},methods:{itemClickHandler:function(e,t,i){this.$emit("item-click",{index:e,content:t,event:i})}}},M=H,N=(i("pQzE"),Object(q["a"])(M,$,S,!1,null,null,null));N.options.__file="ConnectionsListItem.vue";var O=N.exports,I=i("WjpJ"),L=i.n(I),E={props:["mode","activeId","connection","limit","config","type"],data:function(){return{theme:this.config.theme,i18n:{},viewConfig:this.config.viewConfig,actions:this.config.actions,moduleName:this.config.vuexModuleName,itemHeight:56,itemsCount:0,wrapperHeight:0,needAutoScroll:!!this.mode,connections:{},connectionsByIndex:[],selected:[],showSearch:!1,filter:"",connectionsFilter:"",messagesPerConnectionLimit:1e4,connectionsLimit:100}},computed:{renderEntities:function(){return this.connection?this.currentMessages:this.currentConnections},currentConnections:function(){var e=this;return this.filter?this.connectionsByIndex.reduce(function(t,i){return-1!==e.connections[i].peer.indexOf(e.filter)&&(t[i]=e.connections[i]),t},{}):this.connections},currentMessages:function(){return this.filter?this.connection.messages.filter(this.filterMessages):this.connection.messages},messages:{get:function(){return this.$store.state[this.moduleName].messages},set:function(e){this.$store.commit("".concat(this.moduleName,"/setMessages"),e)}},active:{get:function(){return this.$store.state[this.moduleName].active},set:function(){var e=r()(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling"));case 2:return this.$store.commit("".concat(this.moduleName,"/setActive"),t),i=this.$store.state.items.filter(function(e){return t===e.id})[0]||{},v["default"].set(this.config.viewConfig,"needShowEtc",i.protocol_name&&("http"===i.protocol_name||"mqtt"===i.protocol_name)),e.next=7,this.$store.dispatch("".concat(this.moduleName,"/getCols"));case 7:this.modeChange(this.mode),this.$store.dispatch("".concat(this.moduleName,"/pollingGet"));case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},from:{get:function(){var e=this.$store.state[this.moduleName];return e.messages[0]&&e.messages[0].timestamp?Math.ceil(1e3*e.messages[0].timestamp):Date.now()},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFrom"),Math.ceil(new Date(e).setSeconds(0)/1e3)):this.$store.commit("".concat(this.moduleName,"/setFrom"),0),this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.clearConnections(),this.getMessages()}},currentLimit:{get:function(){return this.$store.state[this.moduleName].limit},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setLimit"),e):this.$store.commit("".concat(this.moduleName,"/setLimit"),1e3)}}},methods:{resetParams:function(){if(!this.$refs.wrapper)return!1;if(this.wrapperHeight=this.$refs.wrapper.offsetHeight-this.itemHeight,this.itemsCount=Math.ceil(this.wrapperHeight/this.itemHeight),this.$refs.scroller){var e=this.$refs.scroller.$el;e.scrollTop+=1}},clearSelected:function(){this.selected=[]},wrapperResizeHandler:function(){this.resetParams()},listScroll:function(e,t){this.currentScrollTop||(this.currentScrollTop=t.offset),this.allScrollTop=this.$refs.scroller?this.$refs.scroller.$el.scrollHeight-this.$refs.scroller.$el.clientHeight:0,this.messages.length&&(t.offset<this.currentScrollTop&&this.needAutoScroll?this.needAutoScroll=!1:!this.needAutoScroll&&1===this.mode&&t.offset>=this.allScrollTop&&(this.needAutoScroll=!0),this.currentScrollTop=t.offset)},filterMessages:function(e){if(0==="incoming".indexOf(this.filter)&&0===e["proxy.source"])return!0;if(/^target(\s){0,1}(\d){0,1}$/.test(this.filter)||0==="target".indexOf(this.filter)){var t=parseInt(this.filter.split(" ")[1]||0);return t?e["proxy.source"]===t:!!e["proxy.source"]}return!1},setTranslation:function(e){this.i18n.to=e.length?"Next batch from ".concat(g["d"].formatDate(1e3*this.from,"HH:mm:ss")):"Next"},newMessagesInterseptor:function(e){if(!e.length)return this.clearConnections(),!1;var t=this.connection?this.poolConnection:this.poolConnections;if(e.forEach(t),this.connectionsByIndex.length>this.connectionsLimit){var i=this.connectionsByIndex[0];delete this.connections[i],this.connectionsByIndex.shift()}},poolConnections:function(e){var t=e["ident"];this.connections[t]||(this.connections[t]={messages:[],peer:e["peer"],ident:t},this.connectionsByIndex.push(t)),this.connections[t].messages.push(e)},poolConnection:function(e){e["ident"]===this.connection["ident"]&&this.connection.messages.push(e)},getMessages:function(){return this.$store.dispatch("".concat(this.moduleName,"/get"))},modeChange:function(e){switch(e=+e,this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.commit("".concat(this.moduleName,"/setMode"),e),this.needAutoScroll=!!e,this.clearSelected(),e){case 0:this.active&&this.getMessages();break}},paginationNextChangeHandler:function(){this.getMessages()},actionHandler:function(e){var t=e.index,i=e.type,s=e.content;switch(i){case"view":this.viewMessagesHandler({index:t,content:s});break;case"copy":this.copyMessageHandler({index:t,content:s});break}},viewMessagesHandler:function(e){var t=e.index,i=e.content;this.selected=[t],this.$emit("view-data",i)},itemClickHandler:function(e){var t=this,i=e.index,s=e.content,n=e.event;if("messages"===this.type){if(n.shiftKey)this.selected[0]?this.selected[0]>i?this.selected=L()(i,this.selected[0]+1):this.selected=L()(this.selected[0],i+1):this.selected=[i];else if(n.ctrlKey)if(this.selected.includes(i)){var o=this.selected;o.splice(this.selected.indexOf(i),1),this.selected=o}else this.selected=d()(this.selected).concat([i]);else this.selected=[i];this.$emit("view-data",this.connection.messages.filter(function(e,i){return t.selected.includes(i)}))}else"connections"===this.type&&this.$emit("change:connection",s)},copyMessageHandler:function(e){var t=this,i=(e.index,e.content);this.$copyText(JSON.stringify(i)).then(function(e){t.$q.notify({type:"positive",icon:"content_copy",message:"Message copied",timeout:1e3})},function(e){t.$q.notify({type:"negative",icon:"content_copy",message:"Error coping messages",timeout:1e3})})},unselect:function(){this.selected.length&&(this.selected=[])},searchBlurHandler:function(){this.showSearch=!1},clearConnections:function(){this.connections={},this.connectionsByIndex=[]}},watch:{activeId:function(e){this.active=e},mode:function(e){this.filter="",this.modeChange(e)},limit:function(e){this.currentLimit=e},type:function(e){this.clearSelected(),this.resetParams(),"connections"===e?(this.newMessagesInterseptor(this.messages),this.filter=this.connectionsFilter):(this.clearConnections(),this.connectionsFilter=this.filter,this.filter="")}},created:function(){var e=r()(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$store.state[this.moduleName]||this.$store.registerModule(this.moduleName,Object(u["b"])({Vue:v["default"],LocalStorage:this.$q.localStorage,name:this.moduleName,errorHandler:function(e){t.$store.commit("reqFailed",e)},filterHandler:this.filterMessage,newMessagesInterseptor:this.newMessagesInterseptor})),this.currentLimit=this.limit,this.activeId&&this.$store.commit("".concat(this.moduleName,"/setActive"),this.activeId),null===this.$store.state[this.moduleName].mode&&(this.modeChange(this.mode),this.$store.dispatch("".concat(this.moduleName,"/pollingGet"))),v["default"].connector.socket.on("offline",function(){1===t.mode&&(t.$store.commit("".concat(t.moduleName,"/setOffline"),1===t.mode),t.$store.commit("setSocketOffline",!0))}),v["default"].connector.socket.on("connect",function(){t.$store.state[t.moduleName].offline&&(t.$store.commit("".concat(t.moduleName,"/setReconnected"),1===t.mode),t.$store.commit("setSocketOffline",!1))});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),mounted:function(){this.resetParams()},updated:function(){this.messages.length?this.needAutoScroll&&this.$refs.scroller&&(this.$refs.scroller.$el.scrollTop=this.$refs.scroller.$el.scrollHeight):this.currentScrollTop=0},destroyed:function(){v["default"].connector.socket.off("offline"),v["default"].connector.socket.off("connect"),this.$store.commit("".concat(this.moduleName,"/clear")),this.$store.unregisterModule(this.moduleName)},mixins:[x["a"]],components:{MessagesListItem:k,VirtualList:p.a,ConnectionsListItem:O}},D=E,A=(i("An74"),Object(q["a"])(D,l,m,!1,null,null,null));A.options.__file="Messages.vue";var R=A.exports,T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"wrapper",on:{click:e.clearSelectedHandler}},[i("q-context-menu",[e.hex?i("q-list",{staticStyle:{"min-width":"150px","max-height":"300px"},attrs:{link:"",separator:""}},[i("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(t){e.copy("hex")}}},[i("q-item-main",{attrs:{label:"Copy as hex"}})],1),i("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(t){e.copy("text")}}},[i("q-item-main",{attrs:{label:"Copy as raw"}})],1),i("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(t){e.copy("view")}}},[i("q-item-main",{attrs:{label:"Copy as seen"}})],1),i("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(t){e.exportData("hex")}}},[i("q-item-main",{attrs:{label:"Export as hex"}})],1),i("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(t){e.exportData("text")}}},[i("q-item-main",{attrs:{label:"Export as raw"}})],1),i("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(t){e.exportData("view")}}},[i("q-item-main",{attrs:{label:"Export as seen"}})],1)],1):e._e()],1),e.hex?i("div",{staticClass:"text-white hex-viewer",style:{wordBreak:"text"===e.view?"break-all":""},on:{click:e.selectAllHandler}},["hex"===e.view?[i("div",{staticClass:"hex-viewer__addresses"},e._l(e.addresses,function(t){return i("div",{key:t},[e._v(e._s(t.toString(16).padStart(7,0).toUpperCase()))])})),i("div",{staticClass:"hex-viewer__value",on:{mouseleave:e.mouseLeaveHandler}},e._l(e.bytesArray,function(t,s){return i("div",{key:s+t},e._l(t,function(t,n){return i("span",{key:""+s+n+t,staticClass:"q-pr-xs q-pl-xs q-mt-sm q-mb-sm",class:{selected:e.selected.includes(16*s+n),active:e.active===16*s+n||e.start===e.end===16*s+n},on:{mouseover:function(t){e.setActiveHandler(s,n)},mousedown:function(t){return e.startSelectionHandler(t,s,n)},mouseup:function(t){return e.endSelectionHandler(t,s,n)}}},[e._v(e._s(t))])}))})),i("div",{staticClass:"hex-viewer__text",on:{mouseleave:e.mouseLeaveHandler}},e._l(e.bytesArray,function(t,s){return i("div",{key:s+t},e._l(t,function(t,n){return i("span",{key:""+s+n+t,staticClass:"q-pr-xs q-pl-xs q-mt-sm q-mb-sm",class:{selected:e.selected.includes(16*s+n),active:e.active===16*s+n||e.start===e.end===16*s+n},on:{mouseover:function(t){e.setActiveHandler(s,n)},mousedown:function(t){return e.startSelectionHandler(t,s,n)},mouseup:function(t){return e.endSelectionHandler(t,s,n)}}},[e._v(e._s(e.replaceByteWithDot(t)))])}))}))]:"text"===e.view?e._l(e.bytesArray,function(t,s){return i("span",{key:""+s+t,staticClass:"q-mt-sm q-mb-sm",class:{selected:e.selected.includes(s),active:e.active===s||e.start===e.end===s,"raw-hex-data":"."===e.replaceByteWithDot(t)},on:{mouseover:function(t){e.setActiveHandler(null,s)},mousedown:function(t){return e.startSelectionHandler(t,null,s)},mouseup:function(t){return e.endSelectionHandler(t,null,s)}}},[e._v(e._s(e.replaceByteWithMnemo(t)))])}):e._e()],2):i("div",{staticStyle:{"text-align":"center",color:"#9e9e9e","font-size":"3rem","padding-top":"40px"}},[e._v("No HEX data")])],1)},z=[],V=(i("7VC1"),i("a1Th"),i("9XZr"),i("SRfc"),i("kcif")),j=i.n(V),Y={name:"HexViewer",props:["hex","view"],data:function(){return{active:-1,start:-1,end:-1,selectionMode:!1,timer:0,clicks:0}},computed:{bytesArray:function(){if("hex"===this.view){var e=this.hex.match(/.{1,32}/g);return e.map(function(e){return e.match(/.{1,2}/g)})}if("text"===this.view)return this.hex.match(/.{1,2}/g)},addresses:function(){return L()(0,16*this.hex.match(/.{1,32}/g).length,16)},selected:function(){return-1!==this.start&&-1!==this.end?this.start>this.end?L()(this.end,this.start+1):L()(this.start,this.end+1):[]}},watch:{hex:function(){this.start=-1,this.end=-1}},methods:{replaceByteWithDot:function(e){var t=parseInt(e,16),i=String.fromCharCode(t);return t<32||t>=127||i.match(/\s/g)?".":i},replaceByteWithMnemo:function(e){var t=parseInt(e,16),i=String.fromCharCode(t);return t<32||t>=127||i.match(/\s/g)?"\\x".concat(e):i},clearSelectedHandler:function(e){e.target.isEqualNode(this.$refs.wrapper)&&!this.selectionMode&&(this.start=-1,this.end=-1),this.selectionMode&&(this.selectionMode=!1)},startSelectionHandler:function(e,t,i){if(3===e.which)return!1;-1!==this.end&&(this.end=-1),this.selectionMode=!0,this.start=t?16*t+i:i},endSelectionHandler:function(e,t,i){if(3===e.which)return!1;this.end=t?16*t+i:i,this.selectionMode=!1},setActiveHandler:function(e,t){this.selectionMode?this.end=e?16*e+t:t:this.active=e?16*e+t:t},selectAllHandler:function(){var e=this;this.clicks++,1===this.clicks?this.timer=setTimeout(function(){e.clicks=0},700):(clearTimeout(this.timer),this.clicks=0,this.start=0,this.end=this.hex.match(/.{1,2}/g).length-1)},mouseLeaveHandler:function(){this.active=-1,this.selectionMode&&this.$q.platform.is.desktop&&(this.end=this.hex.match(/.{1,2}/g).length-1)},getContent:function(e,t){var i=this,s="";switch(e){case"hex":if(t&&this.selected.length){var n=this.hex.match(/.{1,2}/g);s=this.selected.map(function(e){return n[e]}).join("")}else s=this.hex;break;case"text":var o=this.hex.match(/.{1,2}/g),r=t&&this.selected.length?this.selected.map(function(e){return o[e]}):o;s=r.map(function(e){return String.fromCharCode(parseInt(e,16))}).join("");break;case"view":if("text"===this.view){var a=t&&this.selected.length?this.selected.map(function(e){return i.bytesArray[e]}):this.bytesArray;s=a.map(function(e){return i.replaceByteWithMnemo(e)}).join("")}else{var c=t&&this.selected.length?j()(this.selected,16):j()(Object.keys(this.hex.match(/.{1,2}/g)),16);c.forEach(function(e,t){s+="".concat(i.addresses[t].toString(16).padStart(7,0).toUpperCase(),"   ").concat(i.bytesArray[t].slice(0,e.length).join(" "),"   "),s+="".padEnd(32-2*e.length," "),s+="".padEnd(16-e.length," "),e.forEach(function(e,n){var o=i.bytesArray[t][n];s+=i.replaceByteWithMnemo(o)}),s+="\n"})}break}return s},copy:function(e){var t=this,i=this.getContent(e,!0);this.$copyText(i).then(function(i){t.$q.notify({type:"positive",icon:"content_copy",message:"".concat(e," copied"),timeout:1e3})},function(i){t.$q.notify({type:"negative",icon:"content_copy",message:"Error coping ".concat(e),timeout:1e3})})},exportData:function(e){var t="hex"===e?"application/octet-stream":"text/plain",i=document.createElement("a"),s=this.getContent(e,!0),n=new Blob([s],{type:t}),o=URL.createObjectURL(n);i.setAttribute("href",o),i.setAttribute("download","data.txt"),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)}}},B=Y,P=(i("sKzY"),Object(q["a"])(B,T,z,!1,null,null,null));P.options.__file="HexViewer.vue";var U=P.exports,W=i("L2JU"),F={name:"PageHexViewer",props:["limit","isLoading","isVisibleToolbar","isNeedSelect","config"],data:function(){return{mode:1,active:null,activeConnection:null,isInit:!1,needShowGetDeletedAction:!0,selectedMessages:"",typeOfHexView:"hex",left:!0}},computed:c()({},Object(W["d"])({newMessagesCount:function(e){return this.config.messages&&e[this.config.messages.vuexModuleName]?e[this.config.messages.vuexModuleName].newMessagesCount:0},isEmptyMessages:function(e){return this.config.messages&&e[this.config.messages.vuexModuleName]&&!e[this.config.messages.vuexModuleName].messages.length},tokenType:function(e){return e.tokenInfo.access?e.tokenInfo.access.type:-1},PROXY_PROTOCOL_ID:function(e){var t=e.protocols;return Object.keys(t).reduce(function(e,i){return"proxy"===t[i]&&(e=parseInt(i)),e},0)},items:function(e){var t=this;return e.items.filter(function(e){return t.PROXY_PROTOCOL_ID&&e.protocol_id===t.PROXY_PROTOCOL_ID})}}),{selectedItem:function(){var e=this;return this.items.filter(function(t){return t.id===e.active})[0]||{}},hex:function(){return!(!this.selectedMessages||!this.activeConnection)&&this.selectedMessages.reduce(function(e,t){return e+=t["proxy.payload.hex"]||"",e},"")},modeModel:{get:function(){return!!this.mode},set:function(e){var t=Date.now();this.date=e?0:t-t%864e5,this.mode=Number(e),this.activeConnection=null,this.selectedMessages="",this.$emit("view-data-hide")}}}),methods:c()({},Object(W["b"])(["getDeleted"]),{unselect:function(){this.$refs.messages.unselect()},getDeletedHandler:function(){var e=r()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDeleted("channels");case 2:this.needShowGetDeletedAction=!1;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),viewLogsHandler:function(){this.$router.push("/channels/".concat(this.active))}}),created:function(){var e=this,t=this.$q.localStorage.get.item("tools/hex");this.$store.dispatch("getItems","channels").then(function(){e.isInit=!0,e.$route.params&&e.$route.params.id?e.items.filter(function(t){return t.id===Number(e.$route.params.id)}).length?e.active=Number(e.$route.params.id):e.active=null:t&&e.items.filter(function(e){return e.id===t}).length&&(e.active=t),e.selectedItem.deleted&&(e.mode=0)})},destroyed:function(){var e=r()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("unsubscribeItems","channels");case 2:this.$store.commit("clearItems");case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),watch:{$route:function(e){e.params&&e.params.id?this.items.filter(function(t){return t.id===Number(e.params.id)}).length?this.active=Number(e.params.id):this.isInit&&(this.active=null):e.params&&!e.params.id&&(this.active=null)},active:function(e){this.activeConnection=null,this.selectedMessages="";var t=this.items.filter(function(t){return t.id===e})[0]||{};e?(this.$q.localStorage.set("tools/hex",e),this.$router.push("/tools/hex/".concat(e))):this.$router.push("/tools/hex"),t.deleted&&(this.mode=0)}},components:{messages:R,VirtualList:p.a,HexViewer:U}},K=F,X=(i("fzep"),Object(q["a"])(K,s,n,!1,null,null,null));X.options.__file="HexViewer.vue";t["default"]=X.exports},WjpJ:function(e,t,i){var s=i("HLqC"),n=s();e.exports=n},ZCgT:function(e,t,i){var s=i("tLB3"),n=1/0,o=1.7976931348623157e308;function r(e){if(!e)return 0===e?e:0;if(e=s(e),e===n||e===-n){var t=e<0?-1:1;return t*o}return e===e?e:0}e.exports=r},fzep:function(e,t,i){"use strict";var s=i("UN7E"),n=i.n(s);n.a},kcif:function(e,t,i){var s=i("KxBF"),n=i("mv/X"),o=i("Sxd8"),r=Math.ceil,a=Math.max;function c(e,t,i){t=(i?n(e,t,i):void 0===t)?1:a(o(t),0);var c=null==e?0:e.length;if(!c||t<1)return[];var l=0,m=0,h=Array(r(c/t));while(l<c)h[m++]=s(e,l,l+=t);return h}e.exports=c},l0Rn:function(e,t,i){"use strict";var s=i("RYi7"),n=i("vhPU");e.exports=function(e){var t=String(n(this)),i="",o=s(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(i+=t);return i}},pQzE:function(e,t,i){"use strict";var s=i("+kCt"),n=i.n(s);n.a},sKzY:function(e,t,i){"use strict";var s=i("tZmY"),n=i.n(s);n.a},tLB3:function(e,t,i){var s=i("GoyQ"),n=i("/9aa"),o=NaN,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,m=parseInt;function h(e){if("number"==typeof e)return e;if(n(e))return o;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=c.test(e);return i||l.test(e)?m(e.slice(2),i?2:8):a.test(e)?o:+e}e.exports=h},tZmY:function(e,t,i){}}]);