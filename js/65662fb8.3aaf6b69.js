(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["65662fb8"],{"1cba":function(e,t,i){var s=i("4796"),a=i("9aff"),n=i("6428");function o(e){return function(t,i,o){return o&&"number"!=typeof o&&a(t,i,o)&&(i=o=void 0),t=n(t),void 0===i?(i=t,t=0):i=n(i),o=void 0===o?t<i?1:-1:n(o),s(t,i,o,e)}}e.exports=o},2985:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("q-toolbar",{staticClass:"justify-between bg-grey-9"},[e.items.length?i("div",{staticClass:"flex",class:{"middle-modificator":!e.active},staticStyle:{"max-width":"40%"}},[i("q-select",{ref:"itemSelect",staticClass:"items__select",class:{"items__select--no-selected":!e.active},attrs:{value:e.active,options:e.filteredItems,"hide-dropdown-icon":!e.isNeedSelect,filled:"",label:e.active?"Channel":"SELECT CHANNEL",dark:"","hide-bottom-space":"",dense:"",color:"white",disable:!e.isNeedSelect,"virtual-scroll-item-size":60,"virtual-scroll-slice-size":6,"virtual-scroll-sticky-size-start":48,"virtual-scroll-sticky-size-end":e.needShowGetDeletedAction&&1===e.tokenType?29:0,"popup-content-class":"items__popup","popup-content-style":{height:60*(e.filteredItems.length>6?6:e.filteredItems.length)+(e.needShowGetDeletedAction&&1===e.tokenType?77:48)+"px"}},on:{filter:e.filterItems},scopedSlots:e._u([{key:"no-option",fn:function(){return[i("div",[i("q-input",{staticClass:"q-ma-xs",attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemSelect.filter(t)}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1),i("div",{staticClass:"text-center"},[e._v("No results")])],1)]},proxy:!0},{key:"selected-item",fn:function(t){return[i("q-item",e._g(e._b({staticClass:"q-pa-none",staticStyle:{"min-height":"20px","margin-top":"2px","max-width":"100%"}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-none text-white",attrs:{header:""}},[e._v(e._s(e.selectedItem.name||"<noname>"))]),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-white ellipsis",staticStyle:{"line-height":"0.75rem!important","margin-top":"1px"},attrs:{caption:""}},[i("small",[e._v(e._s(e.selectedItem.uri||"<no uri>"))])])],1),i("q-item-section",{staticClass:"text-white",attrs:{side:""}},[e.selectedItem.deleted?i("q-item-label",{staticClass:"q-pa-none text-right"},[i("small",{staticClass:"cheap-modifier"},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right"},[i("small",[e._v("#"+e._s(e.selectedItem.id))])])],1)],1)]}},e.filteredItems.length?{key:"option",fn:function(t){return[i("q-item",e._g(e._b({staticClass:"q-pa-xs",class:{"text-grey-8":t.opt.deleted},attrs:{clickable:""},on:{click:function(i){e.active=t.opt.id,e.$emit("view-data-hide")}}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-xs",attrs:{header:""}},[e._v(e._s(t.opt.name||"<noname>"))]),i("q-item-label",{staticClass:"q-pa-none q-mt-none",staticStyle:{"line-height":"0.75rem!important","margin-top":"1px"},attrs:{caption:""}},[i("small",[e._v(e._s(e.protocols&&e.protocols[t.opt.protocol_id]||"<no protocol>"))])]),i("q-item-label",{staticClass:"q-pa-none q-mt-none",staticStyle:{"line-height":"0.75rem!important","margin-top":"1px"},attrs:{caption:""}},[i("small",[e._v(e._s(t.opt.uri||"<no uri>"))])])],1),i("q-item-section",{attrs:{side:""}},[t.opt.deleted?i("q-item-label",{staticClass:"q-pa-xs text-right"},[i("small",{staticClass:"cheap-modifier cheap-modifier--item"},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right"},[i("small",[e._v("#"+e._s(t.opt.id))])])],1)],1)]}}:null],null,!0)},[i("div",{staticClass:"bg-dark q-pa-xs select__filter",attrs:{slot:"before-options"},slot:"before-options"},[i("q-input",{attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemSelect.filter(t)}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1)],1),e.needShowGetDeletedAction&&1===e.tokenType?i("div",{staticClass:"select__get-deleted",attrs:{slot:"after-options"},slot:"after-options"},[i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:e.getDeletedHandler}},[e._v("see deleted")])],1):e._e()]),e.$q.platform.is.desktop?i("transition",{attrs:{appear:"","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutUp"}},[e.selectedItem&&e.selectedItem.protocol_id===e.proxyProtocolId?i("q-btn",{staticClass:"on-right pull-right text-center rounded-borders q-px-xs q-py-none text-white",staticStyle:{width:"50px"},attrs:{title:"View hex payload",flat:"",dense:""},on:{click:e.hexViewHandler}},[i("q-icon",{attrs:{size:"1.5rem",color:"white",name:"mdi-matrix"}}),i("div",{staticStyle:{"font-size":".7rem","line-height":".7rem"}},[e._v("HEX")])],1):e._e()],1):e._e()],1):e._e(),e.active?i("div",[e.selectedItem.deleted?e._e():i("q-btn",{staticClass:"on-right pull-right text-center rounded-borders q-px-xs q-py-none",staticStyle:{"min-width":"70px","max-width":"70px"},attrs:{flat:"",dense:"",color:"white"},on:{click:function(t){e.modeModel=!e.modeModel}}},[i("q-icon",{attrs:{size:"1.5rem",color:"white",name:e.modeModel?"playlist_play":"history"}}),i("div",{staticStyle:{"font-size":".7rem","line-height":".7rem"}},[e._v(e._s(e.modeModel?"Real-time":"History"))]),i("q-tooltip",[e._v("Mode (Real-time/History)")])],1),e.selectedItem.deleted?e._e():i("q-btn-toggle",{staticClass:"q-ml-sm gt-xs",attrs:{dense:"",color:"grey-8","toggle-color":"white","toggle-text-color":"grey-9",size:"sm",options:[{label:"logs",value:100},{label:"both",value:50},{label:"messages",value:0}]},model:{value:e.ratio,callback:function(t){e.ratio=t},expression:"ratio"}}),i("q-btn",{staticClass:"lt-sm text-white",attrs:{dense:"",size:"sm"}},[e._v("\n        "+e._s(50===e.ratio?"both":0===e.ratio?"messages":"logs")+"\n        "),i("q-menu",{staticStyle:{"background-color":"transparent"}},[e.selectedItem.deleted?e._e():i("q-btn-toggle",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",color:"grey-8","toggle-color":"white","toggle-text-color":"grey-9",size:"sm",options:[{label:"logs",value:100},{label:"both",value:50},{label:"messages",value:0}]},model:{value:e.ratio,callback:function(t){e.ratio=t},expression:"ratio"}})],1)],1)],1):e._e(),e.active&&e.$q.platform.is.desktop?i("div",{staticClass:"flex",staticStyle:{width:"46px"}},[i("transition",{attrs:{appear:"","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutUp"}},[e.modeModel&&!e.isEmptyMessages?i("q-btn",{staticClass:"on-left pull-right text-center q-py-none text-white",staticStyle:{width:"60px"},attrs:{title:"Clear all panes",flat:"",dense:""},on:{click:e.clearHandler}},[i("q-icon",{attrs:{size:"1.5rem",color:"white",name:"mdi-playlist-remove"}}),i("div",{staticStyle:{"font-size":".7rem","line-height":".7rem"}},[e._v("Clear")])],1):e._e()],1)],1):e.active&&!e.$q.platform.is.desktop&&(e.selectedItem&&e.selectedItem.protocol_id===e.proxyProtocolId||e.modeModel&&!e.isEmptyMessages)?i("div",[i("q-btn",{attrs:{flat:"",icon:"mdi-dots-vertical",color:"white"}},[i("q-menu",[i("q-list",[e.selectedItem&&e.selectedItem.protocol_id===e.proxyProtocolId?i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:e.hexViewHandler}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"mdi-matrix"}})],1),i("q-item-section",[e._v("Hex")])],1):e._e(),e.modeModel&&!e.isEmptyMessages?i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:e.clearHandler}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"mdi-playlist-remove"}})],1),i("q-item-section",[e._v("Clear")])],1):e._e()],1)],1)],1)],1):e._e()]),e.isInit&&e.active?i("div",[+e.size[0]?i("logs",{ref:"logs",style:{minHeight:"calc("+e.size[0]+"vh - "+(+e.size[1]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},attrs:{mode:e.mode,item:e.selectedItem,limit:e.limit,isEnabled:!!+e.size[0],originPattern:"gw/channels/:id",config:e.config.logs},on:{"view-log-message":e.viewLogMessagesHandler}}):e._e(),+e.size[1]?i("messages",{ref:"messages",style:{minHeight:"calc("+e.size[1]+"vh - "+(+e.size[0]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},attrs:{mode:e.mode,item:e.selectedItem,activeId:e.active,isEnabled:!!+e.size[1],limit:e.limit,config:e.config.messages},on:{"view-data":e.viewDataHandler}}):e._e()],1):e._e(),e.items.length?e._e():i("div",{staticClass:"text-center text-grey-3 q-mt-lg"},[i("div",{staticStyle:{"font-size":"2rem"}},[e._v(e._s(e.isLoading?"Fetching data..":"Channels not found"))]),!e.isLoading&&e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"q-mt-sm",attrs:{icon:"mdi-download",label:"see deleted"},on:{click:e.getDeletedHandler}}):e._e()],1)],1)},a=[],n=(i("8e6e"),i("8a81"),i("967e")),o=i.n(n),l=(i("96cf"),i("c5f6"),i("55dd"),i("7f7f"),i("456d"),i("ac6a"),i("cadf"),i("06db"),i("8615"),i("c47a")),c=i.n(l),r=i("2ce0"),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("virtual-scroll-list",{ref:"scrollList",attrs:{cols:e.cols,actions:e.actions,items:e.messages,date:e.from,mode:e.mode,viewConfig:e.viewConfig,colsConfigurator:"toolbar",i18n:e.i18n,filter:e.filter,theme:e.theme,title:"Messages"},on:{"change:filter":e.filterChangeHandler,"change:pagination-prev":e.paginationPrevChangeHandler,"change:pagination-next":e.paginationNextChangeHandler,"change:date":e.dateChangeHandler,"change:date-prev":e.datePrevChangeHandler,"change:date-next":e.dateNextChangeHandler,"change:mode":e.modeChange,"update:cols":e.updateColsHandler},scopedSlots:e._u([{key:"items",fn:function(t){var s=t.item,a=t.index,n=t.actions,o=t.cols,l=t.etcVisible,c=t.actionsVisible,r=t.itemHeight,m=t.rowWidth;return i("messages-list-item",{key:""+JSON.stringify(s)+a,attrs:{item:s,index:a,actions:n,cols:o,itemHeight:r,rowWidth:m,etcVisible:l,actionsVisible:c,selected:e.selected.includes(a)},on:{action:e.actionHandler,"item-click":e.itemClickHandler}})}}])})],1)},d=[],h=i("4db1"),u=i.n(h),f=(i("6762"),i("2fdb"),i("de45")),p=i("2b0e"),g=i("bd4c"),v=i("ef95"),x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px"}},[e.item["__connectionStatus"]||e.item["x-flespi-filter-prev"]||e.item["x-flespi-filter-next"]?e.item["x-flespi-filter-prev"]||e.item["x-flespi-filter-next"]?i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px",color:"#000",fontWeight:"bold",backgroundColor:e.item["x-flespi-filter-prev"]?"#819002":"#ccb300",overflow:"hidden"}},[i("span",{staticClass:"text-uppercase text-white",staticStyle:{padding:"0 5px"}},[e._v(e._s(e.item["x-flespi-filter-next"]?'Next results will be filtered by: "'+e.item["x-flespi-filter-next"]+'"':'Filter removed: "'+e.item["x-flespi-filter-prev"]+'"'))])]):i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px",border:"solid 1px #000",color:"#000",fontWeight:"bold",backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0",backgroundImage:"url(./statics/police.png)",overflow:"hidden",opacity:".7"},attrs:{title:e.date.formatDate(1e3*e.item.timestamp,"DD/MM/YYYY HH:mm:ss")}},e._l(Array(10),(function(t){return i("span",{key:t,staticClass:"text-uppercase",staticStyle:{padding:"0 5px","margin-left":"150px"},style:{backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0"}},[e._v("\n    "+e._s(e.item["__connectionStatus"])+"\n  ")])})),0):i("div",{staticClass:"cursor-pointer",class:[e.item.__status?"missed-items":"",e.selected?"bg-white-opasity":e.highlightLevel?"text-"+e.highlightType+"-"+e.highlightLevel:""],style:{height:e.itemHeight+"px",width:e.rowWidth+"px",color:e.selected?"#333":"",borderBottom:e.item.delimiter?"solid 1px #f40":""},on:{click:function(t){return e.itemClickHandler(e.index,e.clearItem,t)}}},[e.actionsVisible?i("span",{staticClass:"list__item item_actions"},e._l(e.actions,(function(t,s){return i("q-icon",{key:s,staticClass:"cursor-pointer on-left",class:t.classes,attrs:{name:t.icon},nativeOn:{click:function(i){return i.stopPropagation(),e.clickHandler(e.index,t.type,e.item)}}},[i("q-tooltip",[e._v(e._s(t.label))])],1)})),1):e._e(),e._l(e.cols,(function(t,s){var a;return i("span",{key:t.name+s,staticClass:"list__item",class:(a={},a["item_"+s]=!0,a),style:{color:e.item["x-flespi-filter-fields"]&&e.item["x-flespi-filter-fields"].includes(t.name)?"#4caf50":""},attrs:{title:e.values[t.name].value}},[e._v("\n    "+e._s(e.values[t.name].value)+"\n  ")])})),e.etcVisible?i("span",{staticClass:"list__item item_etc"},[e._v("\n    "+e._s(e.values.etc.value||"*Empty*")+"\n  ")]):e._e()],2)])},b=[],y=(i("4917"),i("8993")),w=i.n(y),_=(i("28a5"),{props:["item","index","actions","cols","itemHeight","etcVisible","rowWidth","actionsVisible","selected"],data:function(){var e=0,t="";return this.item.timestamp<this.item["server.timestamp"]-1800?(t="orange",e=10):this.item.timestamp<this.item["server.timestamp"]-600?(t="orange",e=7):this.item.timestamp<this.item["server.timestamp"]-120?(t="orange",e=4):this.item.timestamp-1>this.item["server.timestamp"]?(t="grey",e=6):this.item.timestamp-60>this.item["server.timestamp"]?(t="grey",e=8):this.item.timestamp-1800>this.item["server.timestamp"]&&(t="grey",e=10),{highlightType:t,highlightLevel:e,date:g["b"]}},computed:{values:function(){var e=this,t={};return t=this.cols.length?this.cols.reduce((function(e,t,i,s){return e[t.name]={value:null},i===s.length-1&&(e.etc={value:""}),e}),{}):{etc:{value:""}},Object.keys(this.item).forEach((function(i){if(-1!==i.indexOf("#")){var s=i.split("#"),a=s[0],n=s[1];if(t[a]){if(t[a].value){if("object"!==w()(t[a].value)){var o=t[a].value;t[a].value=c()({},n-1,o)}}else t[a].value={};t[a].value[n]=JSON.stringify(e.item[i])}else t.etc.value+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; ")}else if(t[i]){var l=e.item[i];-1!==i.indexOf("image.bin.")?l="<binary image>":-1!==i.indexOf("proxy.event")?l=0===l?"data received":1===l?"connected":"disconnect":-1!==i.indexOf("proxy.source")?l=0===l?"channel incoming connection":"target ".concat(l):i.match(/timestamp$/)&&(l=g["b"].formatDate(1e3*l,"DD/MM/YYYY HH:mm:ss")),t[i].value="string"===typeof l?l:JSON.stringify(l)}else{if("delimiter"===i||"__status"===i||"x-flespi-filter-fields"===i||"x-flespi-filter-next"===i||"x-flespi-filter-prev"===i)return!1;-1!==i.indexOf("image.bin.")?t.etc.value+="".concat(i,": <binary image>"):t.etc.value+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; ")}})),Object.keys(t).forEach((function(e){if("object"===w()(t[e].value)&&t[e].value)if(t[e].value instanceof Array){var i=t[e].value.reduce((function(e,t,i,s){return e+=t,i!==s.length-1&&(e+=", "),e}),"");t[e].value=i}else if(t[e].value instanceof Object){var s=Object.keys(t[e].value).reduce((function(i,s,a,n){return i+="".concat(s,": ").concat(t[e].value[s]),a!==n.length-1&&(i+=", "),i}),"");t[e].value=s}})),t},clearItem:function(){var e=this;return Object.keys(this.item).reduce((function(t,i){return"delimiter"===i||"__status"===i||"x-flespi-filter-fields"===i||"x-flespi-filter-next"===i||"x-flespi-filter-prev"===i?t:(t[i]=e.item[i],t)}),{})}},methods:{clickHandler:function(e,t,i){this.$emit("action",{index:e,type:t,content:i})},itemClickHandler:function(e,t,i){this.$emit("item-click",{index:e,content:t,event:i})}}}),$=_,N=(i("d912"),i("2877")),C=Object(N["a"])($,x,b,!1,null,null,null),q=C.exports,k=i("5a3a"),H=i.n(k),S={props:["mode","item","date","activeId","limit","config"],data:function(){return{theme:this.config.theme,i18n:{},viewConfig:this.config.viewConfig,actions:this.config.actions,moduleName:this.config.vuexModuleName}},computed:{messages:{get:function(){var e=this.$store.state[this.moduleName].messages;return this.setTranslate(e),1===this.mode?e:this.filterMessages(this.filter,e)},set:function(e){this.$store.commit("".concat(this.moduleName,"/setMessages"),e)}},active:{get:function(){return this.$store.state[this.moduleName].active},set:function(e){var t;return o.a.async((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,o.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling")));case 2:return this.$store.commit("".concat(this.moduleName,"/setActive"),e),t=this.$store.state.items[e]||{},this.$set(this.config.viewConfig,"needShowEtc",t.protocol_name&&("http"===t.protocol_name||"mqtt"===t.protocol_name)),this.$store.commit("".concat(this.moduleName,"/clearMessages")),i.next=8,o.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/getCols")));case 8:if(0!==this.$store.state[this.moduleName].mode){i.next=15;break}return i.next=11,o.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/initTime")));case 11:return i.next=13,o.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/get")));case 13:i.next=16;break;case 15:1===this.$store.state[this.moduleName].mode&&this.$store.dispatch("".concat(this.moduleName,"/pollingGet"));case 16:if(1!==this.$store.state[this.moduleName].mode||this.item.deleted){i.next=19;break}return i.next=19,o.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/getHistory"),200));case 19:case"end":return i.stop()}}),null,this)}},cols:{get:function(){return this.$store.state[this.moduleName].cols},set:function(e){this.$store.commit("".concat(this.moduleName,"/updateCols"),e)}},filter:{get:function(){return this.$store.state[this.moduleName].filter},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFilter"),e):this.$store.commit("".concat(this.moduleName,"/setFilter"),"")}},from:{get:function(){return this.$store.state[this.moduleName].from},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFrom"),e):this.$store.commit("".concat(this.moduleName,"/setFrom"),0)}},to:{get:function(){return this.$store.state[this.moduleName].to},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setTo"),e):this.$store.commit("".concat(this.moduleName,"/setTo"),0)}},reverse:{get:function(){return this.$store.state[this.moduleName].reverse||!1},set:function(e){this.$store.commit("".concat(this.moduleName,"/setReverse"),e)}},currentLimit:{get:function(){return this.$store.state[this.moduleName].limit},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setLimit"),e):this.$store.commit("".concat(this.moduleName,"/setLimit"),1e3)}},selected:{get:function(){return this.$store.state[this.moduleName].selected},set:function(e){this.$store.commit("".concat(this.moduleName,"/setSelected"),e)}}},methods:{resetParams:function(){this.$refs.scrollList.resetParams()},filterChangeHandler:function(e){this.filter!==e&&(this.filter=e,0===this.mode&&(this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/get"))))},setTranslate:function(e){this.i18n.from=e.length?"Previous batch until ".concat(g["b"].formatDate(1e3*e[0].timestamp,"HH:mm:ss")):"Prev",this.i18n.to=e.length?"Next batch from ".concat(g["b"].formatDate(1e3*e[e.length-1].timestamp,"HH:mm:ss")):"Next"},modeChange:function(e){var t;return o.a.async((function(i){while(1)switch(i.prev=i.next){case 0:return t=null===this.$store.state[this.moduleName].mode,i.next=3,o.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling")));case 3:if(e=+e,this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.commit("".concat(this.moduleName,"/setMode"),e),1!==e||!this.active||null===this.$store.state[this.moduleName].mode){i.next=11;break}return i.next=9,o.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/getHistory"),200));case 9:return i.next=11,o.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/pollingGet")));case 11:if(0!==e||!this.active||this.item.deleted&&!t){i.next=16;break}return i.next=14,o.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/initTime")));case 14:return i.next=16,o.a.awrap(this.$store.dispatch("".concat(this.moduleName,"/get")));case 16:case"end":return i.stop()}}),null,this)},updateColsHandler:function(e){this.cols=e},dateChangeHandler:function(e){this.$store.dispatch("".concat(this.moduleName,"/get"),{name:"setFrom",payload:e})},datePrevChangeHandler:function(){this.$store.dispatch("".concat(this.moduleName,"/get"),{name:"datePrev"})},dateNextChangeHandler:function(){this.$store.dispatch("".concat(this.moduleName,"/get"),{name:"dateNext"})},paginationPrevChangeHandler:function(){var e=0;e=this.messages.length?1e3*this.messages[0].timestamp:0,this.$store.dispatch("".concat(this.moduleName,"/get"),{name:"paginationPrev",payload:e})},paginationNextChangeHandler:function(){var e=0;e=this.messages.length?1e3*this.messages[this.messages.length-1].timestamp:0,this.$store.dispatch("".concat(this.moduleName,"/get"),{name:"paginationNext",payload:e})},actionHandler:function(e){var t=e.index,i=e.type,s=e.content;switch(i){case"view":this.viewMessagesHandler({index:t,content:s});break;case"copy":this.copyMessageHandler({index:t,content:s});break}},viewMessagesHandler:function(e){var t=e.index,i=e.content;this.selected=[t],this.$emit("view-data",i)},itemClickHandler:function(e){var t=this,i=e.index,s=(e.content,e.event);if(s.shiftKey)this.selected[0]?this.selected[0]>i?this.selected=H()(i,this.selected[0]+1):this.selected=H()(this.selected[0],i+1):this.selected=[i];else if(s.ctrlKey)if(this.selected.includes(i)){var a=this.selected;a.splice(this.selected.indexOf(i),1),this.selected=a}else this.selected=[].concat(u()(this.selected),[i]);else this.selected=[i];var n=this.messages.reduce((function(e,i,s){var a=t.selected.includes(s);if(a){var n=Object.keys(i).reduce((function(e,t){return"delimiter"===t||"__status"===t||"x-flespi-filter-fields"===t||"x-flespi-filter-next"===t||"x-flespi-filter-prev"===t?e:(e[t]=i[t],e)}),{});e.push(n)}return e}),[]);this.$emit("view-data",n)},copyMessageHandler:function(e){var t=this,i=(e.index,e.content);this.$copyText(JSON.stringify(i)).then((function(e){t.$q.notify({type:"positive",icon:"content_copy",message:"Message copied",timeout:1e3})}),(function(e){t.$q.notify({type:"negative",icon:"content_copy",message:"Error coping messages",timeout:1e3})}))},unselect:function(){this.selected.length&&(this.selected=[])}},watch:{activeId:function(e){this.active=e},mode:function(e){this.modeChange(e)},limit:function(e){this.currentLimit=e}},created:function(){var e=this;if(this.$store.state[this.moduleName]?this.$store.commit("".concat(this.moduleName,"/clear")):this.$store.registerModule(this.moduleName,Object(f["c"])({Vue:p["default"],LocalStorage:this.$q.localStorage,name:this.moduleName,errorHandler:function(t){e.$store.commit("reqFailed",t)},filterHandler:this.filterMessages})),this.currentLimit=this.limit,this.activeId){this.$store.commit("".concat(this.moduleName,"/setActive"),this.activeId);var t=this.$store.state.items[this.activeId]||{};p["default"].set(this.config.viewConfig,"needShowEtc",t.protocol_name&&("http"===t.protocol_name||"mqtt"===t.protocol_name)),this.$store.dispatch("".concat(this.moduleName,"/getCols"))}null===this.$store.state[this.moduleName].mode&&this.modeChange(this.mode),this.offlineHandler=p["default"].connector.socket.on("offline",(function(){e.$store.commit("".concat(e.moduleName,"/setOffline"),1===e.mode)})),this.connectHandler=p["default"].connector.socket.on("connect",(function(){e.$store.state[e.moduleName].offline&&(e.$store.commit("".concat(e.moduleName,"/setReconnected"),1===e.mode),1===e.mode&&e.$store.dispatch("".concat(e.moduleName,"/getMissedMessages")))}))},beforeDestroy:function(){this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling")),void 0!==this.offlineHandler&&p["default"].connector.socket.off("offline",this.offlineHandler),void 0!==this.connectHandler&&p["default"].connector.socket.off("connect",this.connectHandler),this.$store.commit("".concat(this.moduleName,"/clear"))},mixins:[v["a"]],components:{VirtualScrollList:f["a"],MessagesListItem:q}},I=S,O=Object(N["a"])(I,m,d,!1,null,null,null),M=O.exports,D=i("2f62"),P=i("286e");function E(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function j(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?E(i,!0).forEach((function(t){c()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):E(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var L={props:["limit","isLoading","isVisibleToolbar","isNeedSelect","config"],mixins:[P["a"]],data:function(){return{filter:"",mode:1,active:null,ratio:50,isInit:!1,needShowGetDeletedAction:!0}},computed:j({},Object(D["d"])({isEmptyMessages:function(e){var t=this.config.messages&&e[this.config.messages.vuexModuleName]&&!e[this.config.messages.vuexModuleName].messages.length&&100!==this.ratio,i=this.config.logs&&e[this.config.logs.vuexModuleName]&&e[this.config.logs.vuexModuleName].messages&&!e[this.config.logs.vuexModuleName].messages.length&&0!==this.ratio;return t&&i},tokenType:function(e){return e.tokenInfo&&e.tokenInfo.access?e.tokenInfo.access.type:-1},protocols:function(e){return e.protocols},itemsCollection:function(e){return e.items},items:function(e){return Object.values(e.items)},proxyProtocolId:function(e){var t=e.protocols;return Object.keys(t).reduce((function(e,i){return"proxy"===t[i]&&(e=parseInt(i)),e}),0)}}),{filteredItems:function(){var e=this.filter.toLowerCase(),t=this.filter?this.items.filter((function(t){return t&&"undefined"!==typeof t.name&&null!==t.name&&t.name.toLowerCase().indexOf(e)>=0||t&&"undefined"!==typeof t.id&&null!==t.id&&(t.id+"").indexOf(e)>=0})):this.items;return t.sort((function(e,t){if(!e.name)return-1;if(!t.name)return 1;var i=e.name.toLowerCase(),s=t.name.toLowerCase();return i<s?-1:1})),t},size:function(){return[this.ratio,100-this.ratio]},selectedItem:function(){var e=this.itemsCollection[this.active]||null;return e&&e.deleted&&this.deletedHandler(),e},modeModel:{get:function(){return!!this.mode},set:function(e){var t=Date.now();this.date=e?0:t-t%864e5,this.mode=Number(e),this.$emit("view-data-hide")}}}),methods:j({},Object(D["b"])(["getDeleted"]),{filterItems:function(e,t){t()},viewDataHandler:function(e){this.$emit("view-data",e[e.length-1])},viewLogMessagesHandler:function(e){this.$emit("view-log-message",e)},hexViewHandler:function(){this.$router.push("/tools/hex/".concat(this.active)).catch((function(e){return e}))},unselect:function(){this.$refs.messages.unselect()},clearHandler:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Do you really want to clear all data from the panes?",ok:!0,cancel:!0}).onOk((function(){e.$store.commit("".concat(e.config.messages.vuexModuleName,"/clearMessages")),e.$store.commit("".concat(e.config.logs.vuexModuleName,"/clearMessages"))})).onCancel((function(){}))},selectReset:function(){this.$refs.itemSelect&&this.$refs.itemSelect.reset()},getDeletedHandler:function(){return o.a.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(this.getDeleted("channels"));case 2:this.needShowGetDeletedAction=!1,this.selectReset();case 4:case"end":return e.stop()}}),null,this)},clearActive:function(){this.active=null},deletedHandler:function(){this.ratio=100,this.mode=0},init:function(){var e="channels",t=this.$q.localStorage.getItem(e),i=this.$route.params&&this.$route.params.id?Number(this.$route.params.id):null;this.isInit=!0,i?this.itemsCollection[i]?this.active=i:this.active=null:t&&this.itemsCollection[t]&&(this.active=t),this.selectedItem&&this.selectedItem.deleted&&this.deletedHandler()}}),watch:{ratio:function(e){var t=this;this.$nextTick((function(){+t.size[0]&&t.active&&(t.$refs.logs.resetParams(),t.$emit("view-data-hide")),+t.size[1]&&t.active&&t.$refs.messages.resetParams()}))},$route:function(e){if(e.params&&e.params.id){var t=Number(e.params.id);this.itemsCollection[t]?this.active=Number(e.params.id):this.isInit&&(this.active=null)}else e.params&&!e.params.id&&(this.active=null)},active:function(e){var t=this.itemsCollection[e]||{};e?(this.$q.localStorage.set("channels",e),this.$router.push("/channels/".concat(e)).catch((function(e){return e}))):this.$router.push("/channels").catch((function(e){return e})),t.deleted?this.deletedHandler():this.ratio=t.deleted?100:50}},components:{logs:r["a"],messages:M}},z=L,T=(i("ac4a"),Object(N["a"])(z,s,a,!1,null,null,null));t["default"]=T.exports},4796:function(e,t){var i=Math.ceil,s=Math.max;function a(e,t,a,n){var o=-1,l=s(i((t-e)/(a||1)),0),c=Array(l);while(l--)c[n?l:++o]=e,e+=a;return c}e.exports=a},"5a3a":function(e,t,i){var s=i("1cba"),a=s();e.exports=a},6428:function(e,t,i){var s=i("b4b0"),a=1/0,n=17976931348623157e292;function o(e){if(!e)return 0===e?e:0;if(e=s(e),e===a||e===-a){var t=e<0?-1:1;return t*n}return e===e?e:0}e.exports=o},ac4a:function(e,t,i){"use strict";var s=i("c065"),a=i.n(s);a.a},b4b0:function(e,t,i){var s=i("1a8c"),a=i("ffd6"),n=NaN,o=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,r=/^0o[0-7]+$/i,m=parseInt;function d(e){if("number"==typeof e)return e;if(a(e))return n;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=c.test(e);return i||r.test(e)?m(e.slice(2),i?2:8):l.test(e)?n:+e}e.exports=d},c065:function(e,t,i){},d912:function(e,t,i){"use strict";var s=i("e1de"),a=i.n(s);a.a},e1de:function(e,t,i){}}]);