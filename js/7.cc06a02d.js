(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{2378:function(e,t,i){"use strict";var s=i("4dd3"),n=i.n(s);n.a},"44e7":function(e,t,i){"use strict";var s=i("cc75"),n=i.n(s);n.a},"4ac8":function(e,t,i){"use strict";var s=i("bd4c0"),n=i.n(s);n.a},"4dd3":function(e,t,i){},bd4c0:function(e,t,i){},c4c9:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("entities-toolbar",{attrs:{item:e.selectedItem,ratio:e.ratio,actions:e.actions},on:{"change:ratio":function(t){return e.ratio=t}}},[i("div",{staticClass:"flex",class:{"middle-modificator":!e.active},staticStyle:{"max-width":"50%"},attrs:{slot:"selects"},slot:"selects"},[i("q-select",{ref:"itemSelect",staticClass:"items__select",class:{"items__select--no-selected":!e.active},attrs:{value:e.active,options:e.filteredItems,filled:"","hide-dropdown-icon":!e.isNeedSelect,label:e.active?"Device":"SELECT DEVICE",dark:"","hide-bottom-space":"",dense:"",color:"white",disable:!e.isNeedSelect,"virtual-scroll-item-size":48,"virtual-scroll-slice-size":6,"virtual-scroll-sticky-size-start":48,"virtual-scroll-sticky-size-end":e.needShowGetDeletedAction&&1===e.tokenType?29:0,"popup-content-class":"items__popup","popup-content-style":{height:48*(e.filteredItems.length>6?6:e.filteredItems.length)+(e.needShowGetDeletedAction&&1===e.tokenType?77:48)+(e.filteredItems.length?0:4)+"px"}},on:{filter:e.filterItems},scopedSlots:e._u([{key:"no-option",fn:function(){return[i("div",{staticStyle:{"min-height":"77px"}},[i("q-input",{staticClass:"q-ma-xs",attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemSelect.filter(t)}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1),i("div",{staticClass:"text-center"},[e._v("No results")])],1)]},proxy:!0},{key:"selected-item",fn:function(t){return[e.selectedItem?i("q-item",e._g(e._b({staticClass:"q-pa-none",staticStyle:{"min-height":"20px","margin-top":"2px","max-width":"100%"}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-none text-white",attrs:{header:""}},[e._v(e._s(e.selectedItem.name||"<noname>"))]),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-white ellipsis",staticStyle:{"line-height":"0.75rem!important","margin-top":"1px"},attrs:{caption:""}},[i("small",[e._v(e._s(e.selectedItem.configuration&&e.selectedItem.configuration.ident?e.selectedItem.configuration.ident:"<no ident>"))])])],1),i("q-item-section",{staticClass:"text-white",attrs:{side:""}},[e.selectedItem.deleted?i("q-item-label",{staticClass:"q-pa-none text-right"},[i("small",{staticClass:"cheap-modifier"},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right"},[i("small",[e._v("#"+e._s(e.selectedItem.id))])])],1)],1):e._e()]}},{key:"option",fn:function(t){return[i("q-item",e._g(e._b({staticClass:"q-pa-xs",class:{"text-grey-8":t.opt.deleted},attrs:{clickable:""},on:{click:function(i){e.active=t.opt.id,e.$emit("view-data-hide")}}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-xs",attrs:{header:""}},[e._v(e._s(t.opt.name||"<noname>"))]),i("q-item-label",{staticClass:"q-pa-none q-mt-none",staticStyle:{"line-height":"0.75rem!important","margin-top":"1px"},attrs:{caption:""}},[i("small",[e._v(e._s(t.opt.configuration&&t.opt.configuration.ident?t.opt.configuration.ident:"<no ident>"))])])],1),i("q-item-section",{attrs:{side:""}},[t.opt.deleted?i("q-item-label",{staticClass:"q-pa-xs text-right"},[i("small",{staticClass:"cheap-modifier cheap-modifier--item",class:{"cheap-modifier--mobile":e.$q.platform.is.mobile}},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right",class:{"q-pr-xs":e.$q.platform.is.mobile}},[i("small",[e._v("#"+e._s(t.opt.id))])])],1)],1)]}}])},[i("div",{staticClass:"bg-dark q-pa-xs select__filter",attrs:{slot:"before-options"},slot:"before-options"},[i("q-input",{attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemSelect.filter(t)}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1)],1),e.needShowGetDeletedAction&&1===e.tokenType?i("div",{staticClass:"select__get-deleted",attrs:{slot:"after-options"},slot:"after-options"},[i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.getDeletedHandler(t)}}},[e._v("see deleted")])],1):e._e()]),e.$q.platform.is.desktop&&e.selectedItem&&!e.selectedItem.deleted?i("transition",{attrs:{appear:"","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutUp"}},[e.trafficRoute?i("q-btn",{staticClass:"on-right pull-right text-center rounded-borders q-px-xs q-py-none text-white",staticStyle:{width:"50px"},attrs:{title:"Traffic hex payload",flat:"",dense:""},on:{click:e.trafficViewHandler}},[i("q-icon",{attrs:{size:"1.5rem",color:"white",name:"mdi-download-network-outline"}}),i("div",{staticStyle:{"font-size":".7rem","line-height":".7rem"}},[e._v("Traffic")])],1):e._e()],1):e._e()],1)]),e.isInit&&e.active?i("div",[+e.size[0]?i("logs",{ref:"logs",style:[{height:"calc("+e.size[0]+"vh - "+(+e.size[1]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},{maxWidth:e.mapMinimizedOptions.value&&e.mapMinimizedOptions.type&&"logs"===e.mapMinimizedOptions.type?"66%":""}],attrs:{item:e.selectedItem,limit:e.limit,originPattern:"gw/devices/:id",isEnabled:!!+e.size[0],config:e.logsConfig},on:{"view-log-message":e.viewLogMessagesHandler,"to-traffic":e.toTrafficHandler}}):e._e(),+e.size[1]?i("messages",{ref:"messages",style:[{height:"calc("+e.size[1]+"vh - "+(+e.size[0]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},{maxWidth:e.mapMinimizedOptions.value&&e.mapMinimizedOptions.type&&"messages"===e.mapMinimizedOptions.type?"66%":""}],attrs:{item:e.selectedItem,activeId:e.active,isEnabled:!!+e.size[1],limit:e.limit,config:e.config.messages},on:{"view-data":e.viewDataHandler}}):e._e()],1):e._e(),!e.items.length&&e.isItemsInit?i("div",{staticClass:"text-center text-grey-3 q-mt-lg"},[i("div",{staticStyle:{"font-size":"2rem"}},[e._v(e._s(e.isLoading?"Fetching data..":"Devices not found"))]),!e.isLoading&&e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"q-mt-sm",attrs:{icon:"mdi-download",label:"see deleted"},on:{click:e.getDeletedHandler}}):e._e()],1):e._e(),e.active&&e.messagesWithPosition.length&&e.$q.platform.is.desktop&&e.isVisibleMap?i("map-component",{ref:"map",attrs:{messages:e.messagesWithPosition,device:e.selectedItem,siblingHeight:e.siblingHeight},on:{"map:close":function(t){e.isVisibleMap=!1},"map:minimize":e.mapMinimizeHandler}}):e._e()],1)},n=[],a=(i("8e6e"),i("8a81"),i("456d"),i("c5f6"),i("28a5"),i("967e")),o=i.n(a),r=(i("96cf"),i("fa84")),c=i.n(r),l=(i("7f7f"),i("ac6a"),i("cadf"),i("06db"),i("8615"),i("c47a")),m=i.n(l),h=i("2ce0"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("virtual-scroll-list",{ref:"scrollList",attrs:{cols:e.cols,actions:e.actions,items:e.messages,dateRange:e.dateRange,viewConfig:e.viewConfig,colsConfigurator:"toolbar",filter:e.filter,theme:e.theme,title:"Messages",loading:e.loadingFlag,autoscroll:e.realtimeEnabled,scrollOffset:"10%",item:e.listItem,itemprops:e.getItemsProps,"has-new-messages":e.hasNewMessages},on:{"change:filter":e.filterChangeHandler,"scroll:top":e.paginationPrevChangeHandler,"scroll:bottom":e.paginationNextChangeHandler,"change:date-range":e.dateRangeChangeHandler,"action:to-bottom":e.actionToBottomHandler,"update:cols":e.updateColsHandler,"edit:cols":e.colsEditHandler,"action:to-new-messages":e.actionToNewMessages,"action:to-new-messages-hide":e.actionToNewMessagesHide}},[i("empty-pane",{attrs:{slot:"empty",config:e.config.emptyState},slot:"empty"})],1)],1)},u=[],f=(i("6762"),i("2fdb"),i("de45")),p=i("2b0e"),g=i("cdde"),v=i("ef95"),w=i("121a"),b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px"}},[e.item["__connectionStatus"]?i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px",border:"solid 1px #000",color:"#000",fontWeight:"bold",backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0",backgroundImage:"url(./statics/police.png)",overflow:"hidden",opacity:".7"},attrs:{title:e.date.formatDate(1e3*e.item.timestamp,"DD/MM/YYYY HH:mm:ss")}},e._l(Array(10),(function(t){return i("span",{key:t,staticClass:"text-uppercase",staticStyle:{padding:"0 5px","margin-left":"150px"},style:{backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0"}},[e._v("\n    "+e._s(e.item["__connectionStatus"])+"\n  ")])})),0):i("div",{staticClass:"cursor-pointer",class:[e.item["x-flespi-status"]?"missed-items":"",e.selected?"bg-white-opasity":e.highlightLevel?"text-"+e.highlightType+"-"+e.highlightLevel:""],style:{height:e.itemHeight+"px",width:e.rowWidth+"px",color:e.selected?"#333":""},on:{click:function(t){return e.itemClickHandler(e.index,e.clearItem)}}},[e._l(e.cols,(function(t,s){var n,a,o;return["action"===t.__dest?i("span",{key:t.name+s,staticClass:"list__item item_actions",class:(n={},n["item_"+s]=!0,n)},e._l(e.actions,(function(t,s){return i("q-icon",{key:s,staticClass:"cursor-pointer on-left",class:t.classes,attrs:{name:t.icon},nativeOn:{click:function(i){return i.stopPropagation(),e.clickHandler(e.index,t.type,e.clearItem)}}},[i("q-tooltip",[e._v(e._s(t.label))])],1)})),1):"etc"===t.__dest?i("span",{key:t.name+s,staticClass:"list__item item_etc",class:(a={},a["item_"+s]=!0,a)},[e._v(e._s(e.values.etc.value||"*Empty*"))]):i("span",{key:t.name+s,staticClass:"list__item",class:(o={},o["item_"+s]=!0,o),attrs:{title:e.values[t.name].value}},[e._v("\n        "+e._s(e.values[t.name].value)+"\n      ")])]}))],2)])},M=[],x=(i("4917"),i("8993")),y=i.n(x),$=i("bd4c"),z={props:["item","index","actions","cols","itemHeight","rowWidth","selected"],data:function(){var e=0,t="";return this.item.timestamp<this.item["server.timestamp"]-1800?(t="orange",e=10):this.item.timestamp<this.item["server.timestamp"]-600?(t="orange",e=7):this.item.timestamp<this.item["server.timestamp"]-120?(t="orange",e=4):this.item.timestamp-1>this.item["server.timestamp"]?(t="grey",e=6):this.item.timestamp-60>this.item["server.timestamp"]?(t="grey",e=8):this.item.timestamp-1800>this.item["server.timestamp"]&&(t="grey",e=10),{highlightType:t,highlightLevel:e,date:$["b"]}},computed:{values:function(){var e=this,t={};return t=this.cols.length?this.cols.reduce((function(e,t,i,s){return e[t.name]={value:null},i===s.length-1&&(e.etc={value:""}),e}),{}):{etc:{value:""}},Object.keys(this.item).forEach((function(i){if(-1!==i.indexOf("#")){var s=i.split("#"),n=s[0],a=s[1];if(t[n]){if(t[n].value){if("object"!==y()(t[n].value)){var o=t[n].value;t[n].value=m()({},a-1,o)}}else t[n].value={};t[n].value[a]=JSON.stringify(e.item[i])}else t.etc.value+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; ")}else if(t[i]){var r=e.item[i];i.match(/timestamp$/)&&(r=$["b"].formatDate(1e3*r,"DD/MM/YYYY HH:mm:ss")),-1!==i.indexOf("image.bin.")&&(r="<binary image>"),t[i].value="string"===typeof r?r:JSON.stringify(r)}else{if(-1!==i.indexOf("x-flespi"))return!1;-1!==i.indexOf("image.bin.")?t.etc.value+="".concat(i,": <binary image>"):t.etc.value+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; ")}})),Object.keys(t).forEach((function(e){if("object"===y()(t[e].value)&&t[e].value)if(t[e].value instanceof Array){var i=t[e].value.reduce((function(e,t,i,s){return e+=t,i!==s.length-1&&(e+=", "),e}),"");t[e].value=i}else if(t[e].value instanceof Object){var s=Object.keys(t[e].value).reduce((function(i,s,n,a){return i+="".concat(s,": ").concat(t[e].value[s]),n!==a.length-1&&(i+=", "),i}),"");t[e].value=s}})),t},clearItem:function(){var e=this;return Object.keys(this.item).reduce((function(t,i){return-1!==i.indexOf("x-flespi")||(t[i]=e.item[i]),t}),{})}},methods:{clickHandler:function(e,t,i){this.$emit("action",{index:e,type:t,content:i})},itemClickHandler:function(e,t){this.$emit("item-click",{index:e,content:t})}}},H=z,_=(i("44e7"),i("2877")),k=Object(_["a"])(H,b,M,!1,null,null,null),N=k.exports,C={props:["item","activeId","limit","config"],data:function(){return{listItem:N,theme:this.config.theme,viewConfig:this.config.viewConfig,actions:this.config.actions,moduleName:this.config.vuexModuleName}},computed:{messages:{get:function(){return this.$store.state[this.moduleName].messages},set:function(e){this.$store.commit("".concat(this.moduleName,"/setMessages"),e)}},active:{get:function(){return this.$store.state[this.moduleName].active},set:function(e){var t=this;return c()(o.a.mark((function i(){return o.a.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$store.dispatch("".concat(t.moduleName,"/unsubscribePooling"));case 2:return t.$store.commit("".concat(t.moduleName,"/setActive"),e),t.$store.commit("".concat(t.moduleName,"/clearMessages")),i.next=6,t.$store.dispatch("".concat(t.moduleName,"/getCols"),{actions:!0,etc:!0});case 6:return i.next=8,t.$store.dispatch("".concat(t.moduleName,"/initTime"));case 8:return i.next=10,t.getMessages();case 10:case"end":return i.stop()}}),i)})))()}},cols:{get:function(){return this.$store.state[this.moduleName].cols},set:function(e){this.$store.commit("".concat(this.moduleName,"/updateCols"),e)}},filter:{get:function(){return this.$store.state[this.moduleName].filter},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFilter"),e):this.$store.commit("".concat(this.moduleName,"/setFilter"),"")}},from:{get:function(){return this.$store.state[this.moduleName].from},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFrom"),e):this.$store.commit("".concat(this.moduleName,"/setFrom"),0)}},to:{get:function(){return this.$store.state[this.moduleName].to},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setTo"),e):this.$store.commit("".concat(this.moduleName,"/setTo"),0)}},dateRange:function(){return[this.$store.state[this.moduleName].from,this.$store.state[this.moduleName].to]},realtimeEnabled:function(){return this.$store.state[this.moduleName].realtimeEnabled},reverse:{get:function(){return this.$store.state[this.moduleName].reverse||!1},set:function(e){this.$store.commit("".concat(this.moduleName,"/setReverse"),e)}},currentLimit:{get:function(){return this.$store.state[this.moduleName].limit},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setLimit"),e):this.$store.commit("".concat(this.moduleName,"/setLimit"),1e3)}},selected:{get:function(){return this.$store.state[this.moduleName].selected},set:function(e){this.$store.commit("".concat(this.moduleName,"/setSelected"),e)}},hasNewMessages:{get:function(){return this.$store.state[this.moduleName].hasNewMessages},set:function(e){this.$store.state[this.moduleName].hasNewMessages=e}},loadingFlag:function(){var e=this.$store.state;return!(!e[this.config.vuexModuleName]||!e[this.config.vuexModuleName].isLoading)}},methods:{getItemsProps:function(e,t){var i=this.messages[e];t.key=i["x-flespi-message-key"],t.props.etcVisible=this.etcVisible,t.props.actionsVisible=this.actionsVisible,t.props.selected=this.selected.includes(e),t.on||(t.on={}),t.on.action=this.actionHandler,t.on["item-click"]=this.viewMessagesHandler},scrollTo:function(e){var t=this;this.$nextTick((function(){return t.$refs.scrollList&&t.$refs.scrollList.scrollTo(e)}))},scrollToWithSavePadding:function(e){var t=this;this.$nextTick((function(){return t.$refs.scrollList&&t.$refs.scrollList.scrollToWithSavePadding(e)}))},getMessages:function(){var e=this;return c()(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.to<=Date.now())){t.next=5;break}return t.next=3,e.$store.dispatch("".concat(e.moduleName,"/get"));case 3:t.next=8;break;case 5:return t.next=7,e.$store.dispatch("".concat(e.moduleName,"/getHistory"),1e3);case 7:e.scrollTo(e.messages.length-1);case 8:case"end":return t.stop()}}),t)})))()},resetParams:function(){this.$refs.scrollList.resetParams()},filterChangeHandler:function(e){this.filter!==e&&(this.filter=e,this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.getMessages())},updateColsHandler:function(e){this.cols=e},dateRangeChangeHandler:function(e){var t=this,i=e[0],s=e[1];if(this.from===i&&this.to===s)return!1;this.from=i,this.to=s,this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/get")).then((function(){return t.scrollTo(0)}))},paginationPrevChangeHandler:function(){var e=this;this.$store.dispatch("".concat(this.moduleName,"/getPrevPage")).then((function(t){t&&"number"===typeof t&&e.scrollToWithSavePadding(t)}))},paginationNextChangeHandler:function(){var e=this;this.$store.dispatch("".concat(this.moduleName,"/getNextPage")).then((function(t){t&&"number"===typeof t&&e.scrollTo(e.messages.length-t)}))},actionHandler:function(e){var t=e.index,i=e.type,s=e.content;switch(i){case"view":this.viewMessagesHandler({index:t,content:s});break;case"copy":this.copyMessageHandler({index:t,content:s});break}},viewMessagesHandler:function(e){var t=e.index,i=e.content;this.selected=[t],this.$emit("view-data",i)},copyMessageHandler:function(e){var t=this,i=(e.index,e.content);Object(g["a"])(JSON.stringify(i)).then((function(e){t.$q.notify({type:"positive",icon:"content_copy",message:"Message copied",timeout:1e3})}),(function(e){t.$q.notify({type:"negative",icon:"content_copy",message:"Error coping messages",timeout:1e3})}))},actionToBottomHandler:function(){var e=this;this.realtimeEnabled?this.scrollTo(this.messages.length-1):this.$store.dispatch("".concat(this.moduleName,"/getHistory"),1e3).then((function(){e.scrollTo(e.messages.length-1)}))},actionToNewMessages:function(){var e=this;return c()(o.a.mark((function t(){var i,s,n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.hasNewMessages=null,i=Date.now(),s=new Date(i).setHours(0,0,0,0),n=s+86399999,e.from=s,e.to=n,e.$store.commit("".concat(e.moduleName,"/clearMessages")),e.getMessages();case 6:case"end":return t.stop()}}),t)})))()},actionToNewMessagesHide:function(){this.hasNewMessages=null},unselect:function(){this.selected.length&&(this.selected=[])},colsEditHandler:function(){this.$eventBus.$emit("cols:edit","messages")}},watch:{activeId:function(e){this.active=e},limit:function(e){this.currentLimit=e}},created:function(){var e=this;this.$store.state[this.moduleName]?this.$store.commit("".concat(this.moduleName,"/clear")):this.$store.registerModule(this.moduleName,Object(f["e"])({Vue:p["default"],LocalStorage:this.$q.localStorage,name:{name:this.moduleName,lsNamespace:"flespi-toolbox-settings.cols"},errorHandler:function(t){e.$store.commit("reqFailed",t)},filterHandler:this.filterMessages})),this.currentLimit=this.limit,this.activeId&&(this.active=this.activeId),this.offlineHandler=p["default"].connector.socket.on("offline",(function(){e.$store.commit("".concat(e.moduleName,"/setOffline"),e.realtimeEnabled)})),this.connectHandler=p["default"].connector.socket.on("connect",(function(){e.$store.state[e.moduleName].offline&&(e.$store.commit("".concat(e.moduleName,"/setReconnected"),e.realtimeEnabled),e.realtimeEnabled&&e.$store.dispatch("".concat(e.moduleName,"/getMissedMessages")))}))},beforeDestroy:function(){this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling")),void 0!==this.offlineHandler&&p["default"].connector.socket.off("offline",this.offlineHandler),void 0!==this.connectHandler&&p["default"].connector.socket.off("connect",this.connectHandler),this.$store.commit("".concat(this.moduleName,"/clear"))},mixins:[v["a"]],components:{VirtualScrollList:f["c"],EmptyPane:w["a"]}},T=C,q=Object(_["a"])(T,d,u,!1,null,null,null),O=q.exports,I=function(){var e,t=this,i=t.$createElement,s=t._self._c||i;return s("vue-draggable-resizable",{ref:"dragResize",staticClass:"map-component__wrapper",class:[t.isMapMinimized||t.isMapMaximized?"map-component--minimized":""],style:t.wrapperStyles,attrs:{active:!0,x:t.startX,y:t.startY,w:t.width,h:t.height,z:1e3,minw:100,minh:100,parent:!0},on:{resizing:t.mapResizeHandler,dragging:t.draggingHandler}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMapMinimized&&!t.isMapMaximized,expression:"!isMapMinimized && !isMapMaximized"}],staticClass:"map-container__header",staticStyle:{"padding-right":"1px","padding-top":"3px"},style:{height:t.headerMapHeight+"px"}},[s("q-icon",{staticClass:"float-right cursor-pointer",attrs:{name:"mdi-close",color:"white"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.closeMapHandler(e)}}}),s("q-icon",{staticClass:"float-right cursor-pointer",attrs:{name:t.isMapMaximized?"mdi-fullscreen-exit":"mdi-fullscreen",color:"white"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.maximizeHandler(e)}}}),0!==t.siblingHeight?s("q-icon",{staticClass:"float-right cursor-pointer",attrs:{name:"mdi-arrow-bottom-right",color:"white"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.minimizeHandler("messages")}}}):t._e(),100!==t.siblingHeight?s("q-icon",{staticClass:"float-right cursor-pointer",class:(e={},e["height"+t.siblingHeight]=!0,e),attrs:{name:"mdi-arrow-top-right",color:"white"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.minimizeHandler("logs")}}}):t._e()],1),s("div",{style:t.mapStyles,attrs:{id:"map"}},[s("q-resize-observer",{on:{resize:t.onResize}})],1),t.isMapMinimized||t.isMapMaximized?s("div",{staticClass:"map-component__custom-controls"},[s("q-icon",{staticClass:"pull-right cursor-pointer",attrs:{name:"mdi-close",size:"30px",color:"grey-9"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.closeMapHandler(e)}}}),t.isMapMinimized?s("q-icon",{staticClass:"pull-right cursor-pointer",attrs:{name:"mdi-window-restore",size:"30px",color:"grey-9"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.restoreHandler(e)}}}):t._e(),t.isMapMaximized?s("q-icon",{staticClass:"pull-right cursor-pointer",attrs:{name:t.isMapMaximized?"mdi-fullscreen-exit":"mdi-fullscreen",size:"30px",color:"grey-9"},nativeOn:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.maximizeHandler(e)}}}):t._e()],1):t._e()])},D=[],L=i("e11eb"),S=(i("6cc5"),i("fb19")),E=i.n(S),R={name:"map-component",props:["messages","device","siblingHeight"],data:function(){return{map:null,marker:null,track:null,zoom:10,color:"#037be3",height:520,width:500,prevWidth:0,prevHeight:0,headerMapHeight:20,startX:50,startY:50,isMapMinimized:!1,isMapMaximized:!1,minimizeTo:"",winWidth:0,winHeight:0}},computed:{mapStyles:function(){var e={};return this.device&&this.messages&&this.messages.length&&(e.width="".concat(this.width,"px"),e.height="".concat(this.height-(this.isMapMinimized||this.isMapMaximized?0:this.headerMapHeight),"px")),e},wrapperStyles:function(){var e={};return this.device&&this.messages&&this.messages.length&&(e={width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),position:"absolute",backgroundColor:"#666"}),e}},methods:{initMap:function(){var e=this;if(!this.map){var t=this.messages.length?this.messages[this.messages.length-1]:{},i=t["position.latitude"]&&t["position.longitude"]?[t["position.latitude"],t["position.longitude"]]:[51.50853,-.12574];this.map=L["map"]("map",{center:i,zoom:this.zoom,attributionControl:!1,maxBounds:[[90,-180],[-90,180]]}),this.map.addEventListener("zoom",(function(t){e.zoom=t.target.getZoom()})),this.map.addEventListener("mousedown",(function(e){e.originalEvent.stopPropagation()})),L["control"].attribution({prefix:'<span class="leaflet-map__attribution">Leaflet</span>'}).addTo(this.map),L["tileLayer"]("//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{minZoom:3,noWrap:!0}).addTo(this.map)}},flyTo:function(e){this.map.flyTo(e)},closeMapHandler:function(){this.$emit("map:close"),this.isMapMinimized&&(this.$emit("map:minimize",{value:!1}),this.minimizeTo="",this.isMapMinimized=!1),this.isMapMaximized&&(this.isMapMaximized=!1)},maximizeHandler:function(){this.isMapMaximized?(this.width=this.prevWidth,this.height=this.prevHeight,this.isMapMaximized=!1):(this.prevWidth=this.width,this.prevHeight=this.height,this.maximize())},minimizeHandler:function(e){this.$emit("map:minimize",{type:e,value:!0}),this.prevWidth=this.width,this.prevHeight=this.height,this.isMapMinimized=!0,this.minimizeTo=e,this.isMapMaximized&&(this.isMapMaximized=!1)},restoreHandler:function(){this.$emit("map:minimize",{value:!0}),this.isMapMinimized=!1,this.minimizeTo="",this.$refs.dragResize.left=50,this.$refs.dragResize.top=50},minimize:function(e){var t=this,i=parseInt(this.$el.parentNode.clientWidth,10),s=parseInt(this.$el.parentNode.clientHeight,10);switch(this.width=.34*i,this.height=(s-50)*(this.siblingHeight/100)-(100===this.siblingHeight?0:50-this.siblingHeight),e){case"messages":this.$nextTick((function(){t.$refs.dragResize.left=.66*i,t.$refs.dragResize.top=s-t.height}));break;case"logs":this.$nextTick((function(){t.$refs.dragResize.left=.66*i,t.$refs.dragResize.top=50}))}},maximize:function(){var e=this,t=parseInt(this.$el.parentNode.clientWidth,10)-1,i=parseInt(this.$el.parentNode.clientHeight,10);this.width=t,this.height=i,this.$nextTick((function(){e.$refs.dragResize.left=0,e.$refs.dragResize.top=0})),this.isMapMinimized&&(this.$emit("map:minimize",{value:!1}),this.minimizeTo="",this.isMapMinimized=!1),this.isMapMaximized=!0},mapResizeHandler:function(e,t,i,s){this.width=i,this.height=s},generateIcon:function(){return L["divIcon"]({className:"my-div-icon icon-".concat(this.device.id),iconSize:new L["Point"](20,20),html:'<div style="border-color: '.concat(this.color,"; transform: rotate(").concat((this.messages[this.messages.length-1]["position.direction"]||0)-45,'deg)" class="my-div-icon__inner"></div><div class="my-div-icon__name">').concat(this.device.name,"</div>")})},onResize:function(){this.map&&this.map.invalidateSize()},onWindowResize:function(e){if(this.onResize(),this.isMapMinimized)this.minimizeHandler(this.minimizeTo),this.minimize(this.minimizeTo);else if(this.isMapMaximized)this.maximize();else{if(this.winWidth>e.width){var t=this.$refs.dragResize.left,i=this.winWidth-e.width;t+this.width>=this.winWidth-30&&(t&&(t-=i,t<0&&(i=-1*t,t=0),this.$refs.dragResize.left=t),0===t&&(this.$refs.dragResize.width-=i,this.width-=i,this.width<100&&(this.$refs.dragResize.width=100,this.width=100)))}if(this.winHeight>e.height){var s=this.$refs.dragResize.top,n=this.winHeight-e.height;s+this.height>=this.winHeight-30&&(s&&(s-=n,s<0&&(n=-1*s,s=0),this.$refs.dragResize.top=s),0===s&&(this.$refs.dragResize.height-=n,this.height-=n,this.height<100&&(this.$refs.dragResize.height=100,this.height=100)))}this.winHeight=document.documentElement.clientHeight,this.winWidth=document.documentElement.clientWidth}},draggingHandler:function(){this.isMapMinimized&&(this.$emit("map:minimize",{value:!1}),this.minimizeTo="",this.isMapMinimized=!1),this.isMapMaximized&&(this.isMapMaximized=!1)},getLatLngArr:function(){return this.messages.reduce((function(e,t){return e.push([t["position.latitude"],t["position.longitude"]]),e}),[])},updateMarkerHandler:function(e){var t=e.lastPos;this.marker&&this.marker.setLatLng(t).update()},initMarker:function(){var e=this,t=this.messages[this.messages.length-1],i=[t["position.latitude"],t["position.longitude"]];this.marker=L["marker"](i,{icon:this.generateIcon(),title:this.device.name}),this.marker.addEventListener("move",(function(t){e.marker.setIcon(e.generateIcon()),e.marker.update()})),this.marker.addTo(this.map)},initDeviceOnMap:function(){this.initMarker(),this.track=L["polyline"](this.getLatLngArr(),{color:this.color}).addTo(this.map)},updateDeviceOnMap:function(){var e=this.getLatLngArr(),t=this.marker&&this.marker instanceof L["Marker"]?this.marker.getLatLng():{},i=this.messages&&this.messages.length&&t.lat&&t.lat!==this.messages[this.messages.length-1]["position.latitude"]&&t.lng&&t.lng!==this.messages[this.messages.length-1]["position.longitude"];i&&this.map.flyTo(e[this.messages.length-1],this.zoom),this.messages.length&&(this.marker instanceof L["Marker"]||this.initMarker(),this.track instanceof L["Polyline"]||(this.track=L["polyline"](this.getLatLngArr(),{color:this.color}).addTo(this.map))),this.marker.setLatLng(e[this.messages.length-1]).update(),this.marker.setOpacity(1),this.track.setLatLngs(e)}},mounted:function(){this.initMap(),this.initDeviceOnMap(),this.winHeight=document.documentElement.clientHeight,this.winWidth=document.documentElement.clientWidth},watch:{messages:function(e){this.updateDeviceOnMap()},"$q.screen.width":{immediate:!0,handler:function(e){this.onWindowResize({height:this.$q.screen.height,width:e})}},"$q.screen.height":{immediate:!0,handler:function(e){this.onWindowResize({width:this.$q.screen.width,height:e})}},minimizeTo:function(e){e?this.minimize(e):(this.width=this.prevWidth,this.height=this.prevHeight)}},components:{VueDraggableResizable:E.a}},P=R,W=(i("4ac8"),Object(_["a"])(P,I,D,!1,null,null,null)),j=W.exports,V=i("a99a"),A=i("2f62"),Y=i("286e"),F=i("9b02"),G=i.n(F);function J(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function B(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?J(Object(i),!0).forEach((function(t){m()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):J(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var X={props:["limit","isLoading","isVisibleToolbar","isNeedSelect","config","settings"],mixins:[Y["a"]],data:function(){return{filter:"",active:null,ratio:50,isInit:!1,isItemsInit:!1,isVisibleMap:!1,mapMinimizedOptions:{},siblingHeight:null,needShowGetDeletedAction:!0,trafficRoute:null}},computed:B({},Object(A["d"])({isEmptyMessages:function(e){var t=this.config.messages&&e[this.config.messages.vuexModuleName]&&!e[this.config.messages.vuexModuleName].messages.length&&100!==this.ratio,i=this.config.logs&&e[this.config.logs.vuexModuleName]&&e[this.config.logs.vuexModuleName].messages&&!e[this.config.logs.vuexModuleName].messages.length&&0!==this.ratio;return t&&i},tokenType:function(e){return e.tokenInfo&&e.tokenInfo.access?e.tokenInfo.access.type:-1},itemsCollection:function(e){return e.devices||{}},tasksByDevice:function(e){return Object.values(e.tasks||{})}}),{items:function(){return Object.values(this.itemsCollection)},selectedItem:function(){var e=this.itemsCollection&&this.itemsCollection[this.active]||null;return e&&(e.deleted&&this.deletedHandler(),this.getTrafficRoute(e)),e},logsConfig:function(){var e=this.config.logs;return this.trafficRoute?e.itemSettings.needTrafficRoute=!0:e.itemSettings.needTrafficRoute=!1,e},filteredItems:function(){var e=this.filter.toLowerCase(),t=this.filter?this.items.filter((function(t){return t&&"undefined"!==typeof t.name&&null!==t.name&&t.name.toLowerCase().indexOf(e)>=0||t&&"undefined"!==typeof t.id&&null!==t.id&&(t.id+"").indexOf(e)>=0||t&&t.configuration&&"undefined"!==typeof t.configuration.ident&&null!==t.configuration.ident&&t.configuration.ident.toLowerCase().indexOf(e)>=0})):this.items;return t.sort((function(e,t){if(!e.name)return-1;if(!t.name)return 1;var i=e.name.toLowerCase(),s=t.name.toLowerCase();return i<s?-1:1})),t},size:function(){return[this.ratio,100-this.ratio]},messagesWithPosition:function(){return this.config&&this.config.messages&&this.$store.state[this.config.messages.vuexModuleName]?this.$store.state[this.config.messages.vuexModuleName].messages.filter((function(e){return!!e["position.latitude"]&&!!e["position.longitude"]})):[]},actions:function(){var e=this;return[{label:"Intervals",icon:"mdi-set-center",handler:function(){return e.moveToIntervals(e.active,null)},condition:!!this.tasksByDevice.length},{label:"Traffic",icon:"mdi-download-network-outline",handler:this.trafficViewHandler,condition:this.trafficRoute&&this.$q.platform.is.mobile},{label:"Map",icon:"mdi-map",handler:function(){return e.setMapVisibility(!e.isVisibleMap)},condition:!!this.messagesWithPosition.length},{label:"Clear",icon:"mdi-playlist-remove",handler:this.clearHandler,condition:!this.isEmptyMessages}]}}),methods:B({},Object(A["b"])(["getDeleted","getDeviceTrafficRoute"]),{filterItems:function(e,t){var i=this;if(this.isItemsInit)t();else{var s="devices";this.itemsLoad(s,t,this.active,(function(){i.isItemsInit=!0}))}},viewDataHandler:function(e){this.$emit("view-data",e),this.isVisibleMap&&e["position.latitude"]&&e["position.longitude"]&&this.$refs.map.flyTo([e["position.latitude"],e["position.longitude"]])},viewLogMessagesHandler:function(e){this.$emit("view-log-message",e)},unselect:function(){this.$refs.messages.unselect()},showMap:function(){this.messagesWithPosition.length&&(this.isVisibleMap=!this.isVisibleMap)},mapMinimizeHandler:function(e){this.mapMinimizedOptions=e,"messages"===e.type?this.siblingHeight=this.size[1]:"logs"===e.type?this.siblingHeight=this.size[0]:this.siblingHeight=null},clearHandler:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Do you really want to clear all data from the panes?",ok:!0,cancel:!0}).onOk((function(){e.$store.commit("".concat(e.config.messages.vuexModuleName,"/clearMessages")),e.$store.commit("".concat(e.config.logs.vuexModuleName,"/clearMessages"))})).onCancel((function(){}))},getDeletedHandler:function(){var e=this;return c()(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDeleted("devices");case 2:e.needShowGetDeletedAction=!1,e.$refs.itemSelect.reset();case 4:case"end":return t.stop()}}),t)})))()},clearActive:function(){this.active=null},deletedHandler:function(){this.ratio=100},getTrafficRoute:function(e){var t=this;this.trafficRoute=null;var i=e.configuration?e.configuration.ident:"";if(!i)return!1;this.getDeviceTrafficRoute({id:e.id,ident:i}).then((function(e){t.trafficRoute=e}))},trafficViewHandler:function(){this.$router.push(this.trafficRoute).catch((function(e){return e}))},toTrafficHandler:function(e){var t=e.content,i=t.ident,s=Math.floor(1e3*t.timestamp),n=s-1e4;i&&this.$router.push({path:this.trafficRoute,query:{from:n,to:s}}).catch((function(e){return e}))},init:function(){var e,t="devices",i=G()(this.settings,"entities[".concat(t,"]"),void 0),s=this.$route.params&&this.$route.params.id?this.$route.params.id:null;if(this.isInit=!0,s){if(s=s.split("-"),s.length>1?(e=Number(s[1]),s=Number(s[0])):1===s.length&&(s=Number(s[0])),e)return this.moveToIntervals(s,e),!1;this.itemsCollection[s]?this.active=s:this.active=null}else i&&this.itemsCollection[i]&&(this.active=i);this.selectedItem&&this.selectedItem.deleted&&this.deletedHandler(),this.$emit("inited")},moveToIntervals:function(e,t){var i=this;this.$nextTick((function(){i.$router.push("/devices/".concat(e,"/calc/").concat(t,"/intervals")).catch((function(e){return e}))}))},setMapVisibility:function(e){this.isVisibleMap=e}}),watch:{ratio:function(e){var t=this;this.$nextTick((function(){+t.size[0]&&t.active&&(t.$refs.logs.resetParams(),t.$emit("view-data-hide")),+t.size[1]&&t.active&&t.$refs.messages.resetParams()}))},$route:function(e){e.params&&e.params.id?this.itemsCollection[Number(e.params.id)]?this.active=Number(e.params.id):this.isInit&&(this.active=null):e.params&&!e.params.id&&(this.active=null)},active:function(e,t){var i=this.itemsCollection[e]||{};e?(this.$emit("update:settings",{type:"ENTITY_CHANGE",opt:{entity:"devices"},value:i.id}),this.$router.push("/devices/".concat(e)).catch((function(e){return e}))):this.$router.push("/devices").catch((function(e){return e})),i.deleted?this.deletedHandler():this.ratio=i.deleted?100:50}},components:{logs:h["a"],messages:O,MapComponent:j,EntitiesToolbar:V["a"]}},Z=X,U=(i("2378"),Object(_["a"])(Z,s,n,!1,null,null,null));t["default"]=U.exports},cc75:function(e,t,i){}}]);