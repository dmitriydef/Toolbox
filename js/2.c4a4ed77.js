(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"2b19":function(t,e,i){"use strict";var s=i("48b9"),n=i.n(s);n.a},"48b9":function(t,e,i){},"5e04":function(t,e,i){},9285:function(t,e,i){},ab66:function(t,e,i){"use strict";var s=i("5e04"),n=i.n(s);n.a},b831:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("q-layout",{ref:"layout",staticClass:"bg-grey-9",attrs:{view:"hHh LpR lFf"}},[t.isVisibleToolbar?i("q-header",[i("q-toolbar",{staticClass:"header__main-toolbar bg-grey-9"},[i("q-btn",{attrs:{flat:"",icon:"mdi-menu"},on:{click:t.toggleMenu}}),i("q-toolbar-title",{style:{minWidth:t.$q.platform.is.mobile?"60px":"210px"}},[i("img",{staticClass:"gt-sm",staticStyle:{height:"30px"},attrs:{src:"statics/toolbox50.png",alt:"Toolbox"}}),i("img",{staticClass:"lt-md",staticStyle:{height:"30px"},attrs:{src:"statics/toolbox_mobile.png",alt:"Toolbox"}}),i("sup",{staticClass:"version",class:{"version--mobile":t.$q.platform.is.mobile}},[t._v(t._s(t.version))]),t.configByEntity?i("span",{staticStyle:{position:"relative",top:"-5px","margin-left":"10px"}},[t._v(t._s(t.configByEntity.label))]):t._e()]),t.errors.length?i("q-btn",{attrs:{small:"",flat:"",round:"",icon:"notifications"},on:{click:t.clearNotificationCounter}},[t.newNotificationCounter?i("q-chip",{staticClass:"absolute-top-right q-ma-none text-white",attrs:{color:"red",size:"xs"}},[t._v(t._s(t.newNotificationCounter))]):t._e(),i("q-menu",{ref:"popoverError",attrs:{fit:""}},[i("q-list",{staticClass:"scroll q-py-none",staticStyle:{"max-height":"200px"},attrs:{separator:""}},t._l(t.errors,(function(e,s){return i("q-item",{key:s,staticStyle:{cursor:"default"}},[i("q-item-section",[i("q-item-label",{attrs:{header:""}},[t._v(t._s(e))])],1)],1)})),1)],1)],1):t._e(),i("q-btn",{attrs:{small:"",flat:"",round:"",icon:"mdi-settings"},on:{click:t.settingsHandler}}),i("q-btn",{staticClass:"within-iframe-hide",attrs:{small:"",flat:"",round:"",icon:"mdi-exit-to-app"},on:{click:t.confirmExitHandler}})],1)],1):t._e(),i("q-drawer",{attrs:{side:"right","no-swipe-open":"","no-swipe-close":"","content-class":{"bg-grey-9":!0}},model:{value:t.sides.right,callback:function(e){t.$set(t.sides,"right",e)},expression:"sides.right"}},[Object.keys(t.currentMessage).length?i("object-viewer",{attrs:{object:t.currentMessage,cols:t.messagesColsCollectionByEntity},on:{close:t.hideRightHandler,"update:col":t.updateColHandler}}):t.colsEditing?i("cols-editor",{attrs:{cols:t.colsForEditing},on:{"cols:close":function(e){t.sides.right=!1},"cols:update":t.updateColsHandler,"cols:default":t.setDefaultColsHandler}}):t._e()],1),t.isVisibleToolbar?i("q-drawer",{attrs:{side:"left","content-class":{"bg-grey-7":!0}},model:{value:t.sides.left,callback:function(e){t.$set(t.sides,"left",e)},expression:"sides.left"}},[i("q-list",{staticClass:"q-py-none",attrs:{separator:""}},[t.renderEntities.includes("platform")?i("q-item",{attrs:{to:"/platform","active-class":"bg-grey-6 text-white"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.config.platform.icon,color:"red"}})],1),i("q-item-section",{staticClass:"text-white"},[t._v("\n            "+t._s(t.config.platform.label)+"\n          ")])],1):t._e(),t.renderEntities.includes("channels")||t.renderEntities.includes("devices")||t.renderEntities.includes("streams")||t.renderEntities.includes("modems")?i("q-expansion-item",{attrs:{group:"menu",label:"Telematics Hub",icon:"mdi-sitemap",value:t.hubGroupModel,dark:""}},[i("div",[i("q-list",{staticClass:"row q-py-none"},[t.renderEntities.includes("channels")?i("q-item",{staticClass:"col-6",attrs:{to:"/channels","active-class":"bg-grey-6"}},[i("q-item-section",{staticClass:"text-center text-white"},[i("div",[i("q-icon",{attrs:{name:t.config.channels.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.channels.label))])])],1):t._e(),t.renderEntities.includes("devices")?i("q-item",{staticClass:"col-6",attrs:{to:"/devices","active-class":"bg-grey-6"}},[i("q-item-section",{staticClass:"text-center text-white"},[i("div",[i("q-icon",{attrs:{name:t.config.devices.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.devices.label))])])],1):t._e(),t.renderEntities.includes("streams")?i("q-item",{staticClass:"col-6",attrs:{to:"/streams","active-class":"bg-grey-6"}},[i("q-item-section",{staticClass:"text-center text-white"},[i("div",[i("q-icon",{attrs:{name:t.config.streams.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.streams.label))])])],1):t._e(),t.renderEntities.includes("modems")?i("q-item",{staticClass:"col-6",attrs:{to:"/modems","active-class":"bg-grey-6"}},[i("q-item-section",{staticClass:"text-center text-white"},[i("div",[i("q-icon",{attrs:{name:t.config.modems.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.modems.label))])])],1):t._e(),t.renderEntities.includes("channels")||t.renderEntities.includes("devices")||t.renderEntities.includes("streams")||t.renderEntities.includes("modems")?i("q-separator",{staticStyle:{width:"100%"}}):t._e(),t.renderEntities.includes("calcs")?i("q-item",{staticClass:"col-6",attrs:{to:"/calcs","active-class":"bg-grey-6"}},[i("q-item-section",{staticClass:"text-center text-white"},[i("div",[i("q-icon",{attrs:{name:t.config.calcs.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.calcs.label))])])],1):t._e(),t.renderEntities.includes("calcs")?i("q-separator",{staticStyle:{width:"100%"}}):t._e(),t.renderEntities.includes("hexViewer")?i("q-item-label",{staticClass:"col-12 text-white",attrs:{header:""}},[t._v("Tools")]):t._e(),t.renderEntities.includes("hexViewer")?i("q-item",{staticClass:"col-6",attrs:{to:"/tools/hex","active-class":"bg-grey-6"}},[i("q-item-section",{staticClass:"text-center text-white"},[i("div",[i("q-icon",{attrs:{name:t.config.hexViewer.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.hexViewer.label))])])],1):t._e()],1)],1)]):t._e(),t.renderEntities.includes("containers")||t.renderEntities.includes("cdns")?i("q-expansion-item",{attrs:{group:"menu",label:"Storage",icon:"mdi-database",value:t.storageGroupModel,dark:""}},[i("div",[i("q-list",{staticClass:"row q-py-none"},[t.renderEntities.includes("containers")?i("q-item",{staticClass:"col-6",attrs:{to:"/containers","active-class":"bg-grey-6"}},[i("q-item-section",{staticClass:"text-center text-white"},[i("div",[i("q-icon",{attrs:{name:t.config.containers.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.containers.label))])])],1):t._e(),t.renderEntities.includes("cdns")?i("q-item",{staticClass:"col-6",attrs:{to:"/cdns","active-class":"bg-grey-6"}},[i("q-item-section",{staticClass:"text-center text-white"},[i("div",[i("q-icon",{attrs:{name:t.config.cdns.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.cdns.label))])])],1):t._e()],1)],1)]):t._e(),t.renderEntities.includes("mqtt")||t.renderEntities.includes("mqttClient")?i("q-expansion-item",{attrs:{group:"menu",label:"MQTT",icon:"mdi-access-point-network",value:t.mqttGroupModel,dark:""}},[i("div",[i("q-list",{staticClass:"row q-py-none"},[t.renderEntities.includes("mqtt")?i("q-item",{staticClass:"col-6",attrs:{to:"/mqtt","active-class":"bg-grey-6"}},[i("q-item-section",{staticClass:"text-center text-white"},[i("div",[i("q-icon",{attrs:{name:t.config.mqtt.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.mqtt.label))])])],1):t._e(),t.renderEntities.includes("mqtt")?i("q-separator",{staticStyle:{width:"100%"}}):t._e(),i("q-item-label",{staticClass:"col-12 text-white",attrs:{header:""}},[t._v("Tools")]),i("q-item",{staticClass:"col-6",attrs:{to:"/tools/mqtt","active-class":"bg-grey-6"}},[i("q-item-section",{staticClass:"text-center text-white"},[i("div",[i("q-icon",{attrs:{name:t.config.mqttClient.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.mqttClient.label))])])],1)],1)],1)]):t._e()],1)],1):t._e(),i("q-page-container",{staticClass:"bg-grey-9"},[i("raw-viewer",{ref:"rawViewer",attrs:{config:t.rawConfig,inverted:""}}),t.configByEntity&&t.isInit?i("router-view",{ref:"main",attrs:{limit:t.limit,isLoading:t.loadingFlag,isVisibleToolbar:t.isVisibleToolbar,isNeedSelect:t.isNeedSelect,config:t.configByEntity,settings:t.settings},on:{"view-data":t.viewDataHandler,"view-data-hide":function(e){t.sides.right=!1,t.currentMessage={}},"view-log-message":t.viewLogMessagesHandler,"update:settings":t.updateSettingsHandler,inited:function(e){t.entityInited=!0}}}):t._e()],1)],1),i("q-inner-loading",{staticStyle:{"z-index":"2001"},attrs:{showing:t.loadingFlag,dark:""}},[i("q-spinner-gears",{attrs:{size:"100px",color:"white"}})],1)],1)},n=[],a=(i("8e6e"),i("8a81"),i("28a5"),i("6762"),i("2fdb"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("7f7f"),i("c47a")),o=i.n(a),r=i("2b0e"),c=i("bd4c"),l=i("2f62"),d=i("9224"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("q-item",{staticClass:"q-pa-none"},[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis text-bold text-white"},[t._v("Message")])],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{staticClass:"pull-right cursor-pointer",attrs:{color:"white",name:"mdi-close",size:"1.8rem"},nativeOn:{click:function(e){return t.$emit("close")}}})],1)],1),i("q-item",{staticClass:"q-pa-none"},[i("q-item-section",{staticClass:"q-px-sm"},[i("q-input",{staticClass:"q-py-none",attrs:{type:"text",color:"white",dark:"",label:"Search",outlined:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),i("q-scroll-area",{staticStyle:{height:"calc(100% - 104px)"},attrs:{"thumb-style":{background:"#757575",opacity:1,borderRadius:"5px"},"bar-style":{background:"white",opacity:1}}},[i("q-list",{attrs:{separator:"",dark:""}},[Object.keys(t.object).length&&Object.keys(t.filteredObject).length?t._e():i("q-item",[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis text-bold text-center text-white",attrs:{header:""}},[t._v("No parameters")]),Object.keys(t.object).length?t._e():i("q-item-label",{staticClass:"ellipsis text-center text-white",attrs:{caption:""}},[t._v("Message has not fields")]),!Object.keys(t.filteredObject).length&&this.search?i("q-item-label",{staticClass:"ellipsis text-center text-white",attrs:{caption:""}},[t._v("Nothing found on your search")]):t._e()],1)],1),Object.keys(t.filteredObject).length?t._l(Object.keys(t.filteredObject),(function(e){return i("q-item",{key:e},[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis text-bold q-pa-none text-white",attrs:{header:""}},[t._v(t._s(e)),i("q-tooltip",[t._v(t._s(e))])],1),-1===e.indexOf("image.bin.")?i("q-item-label",{staticClass:"ellipsis text-white",attrs:{caption:""}},[t._v(t._s(JSON.stringify(t.filteredObject[e]))),i("q-tooltip",[t._v(t._s(JSON.stringify(t.filteredObject[e])))])],1):i("q-item-label",{attrs:{caption:""}},[i("img",{staticClass:"image-bin",attrs:{src:"data:image/"+e.split(".")[2]+";base64, "+t.filteredObject[e],alt:e}})])],1),i("q-item-section",{attrs:{avatar:""}},[i("q-btn",{attrs:{icon:t.cols[e]&&t.cols[e].display?"mdi-table-column-remove":"mdi-table-column-plus-after",color:t.cols[e]&&t.cols[e].display?"red-5":"white",flat:"",dense:""},on:{click:function(i){return t.toggleColHandler(e)}}},[i("q-tooltip",[t._v(t._s(t.cols[e]&&t.cols[e].display?"Hide this column":"Show this column"))])],1)],1)],1)})):t._e()],2)],1)],1)},h=[],m=(i("386d"),{props:["object","cols"],data:function(){return{search:""}},computed:{filteredObject:function(){var t=this;return Object.keys(this.object).reduce((function(e,i){return-1!==i.indexOf(t.search)&&(e[i]=t.object[i]),e}),{})}},methods:{toggleColHandler:function(t){var e=this.cols[t];e||(e={name:t,width:150,display:!0}),this.$emit("update:col",e)}}}),f=m,g=(i("2b19"),i("2877")),p=Object(g["a"])(f,u,h,!1,null,null,null),b=p.exports,y=i("de45"),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-dialog",{ref:"modal",staticClass:"modal-date",attrs:{maximized:t.$q.platform.is.mobile},on:{show:t.openHandler,hide:function(e){t.tabModel=""}}},[i("q-card",{class:{"bg-grey-9":void 0!==t.inverted},style:{minWidth:t.$q.platform.is.mobile?"100%":"30vw",height:t.$q.platform.is.mobile?"100%":"60vh"}},[i("q-card-section",{staticClass:"q-pa-none",style:{height:"calc(100% - 54px)"}},[t.hasData?[i("q-tabs",{staticClass:"text-white",model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[t._l(t.config,(function(e,s){return[e.data?[i("q-tab",{key:"tab-"+s,attrs:{name:s,label:e.title,color:"grey-9"}})]:t._e()]}))],2),i("q-tab-panels",{staticClass:"bg-grey-9 scroll",staticStyle:{height:"calc(100% - 48px)"},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},t._l(t.config,(function(e,s){return i("q-tab-panel",{key:"tab-pane-"+s,attrs:{name:s}},[e.data?[e.description?i("div",{staticClass:"text-center q-mb-sm",class:[e.data._color],staticStyle:{"font-size":"1.1rem"}},[t._v(t._s(e.description))]):t._e(),e.wrapper&&"object"===typeof e.wrapper?i(e.wrapper,{tag:"component",attrs:{data:t.getData(e.data),inverted:t.inverted}}):e.wrapper&&"string"===typeof e.wrapper?i(e.wrapper,{tag:"component",class:{"text-white":void 0!==t.inverted}},[t._v(t._s(t.getData(e.data)))]):i("div",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(t.getData(e.data)))])]:t._e()],2)})),1)]:i("div",{staticClass:"text-center",class:{"text-white":void 0!==t.inverted},staticStyle:{"font-size":"2rem","margin-top":"50px"}},[t._v("No additional data available")])],2),i("q-separator",{attrs:{color:"white"}}),i("q-card-actions",{staticClass:"bg-grey-9 text-white",attrs:{align:"right"}},[i("q-btn",{attrs:{flat:""},on:{click:function(e){return t.$refs.modal.hide()}}},[t._v("Close")])],1)],1)],1)},q=[],w={props:["config","inverted"],data:function(){return{tabModel:""}},computed:{hasData:function(){var t=this;return Object.keys(this.config).reduce((function(e,i){return t.config[i].data&&(e=!0),e}),!1)}},methods:{open:function(){this.$refs.modal.show()},openHandler:function(){var t=this,e=0,i=Object.keys(this.config).some((function(i,s){return e=s,!!t.config[i].data}));this.tabModel=i||Object.keys(this.config)[0]?Object.keys(this.config)[e]:""},getData:function(t){return Object.keys(t).reduce((function(e,i){return"_description"===i||"_color"===i||(e[i]=t[i]),e}),{})}}},x=w,_=Object(g["a"])(x,v,q,!1,null,null,null),C=_.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(Array.isArray(t.data)?"[":"{"))]),t._l(t.data,(function(e,s,n){var a;return i("div",{key:s+"-"+n,staticClass:"margin-left"},[e&&"object"===typeof e?i("div",[i("div",{staticClass:"cursor-pointer",on:{click:function(e){t.toggle(Array.isArray(t.data)?s:n)}}},[t.showObj[Array.isArray(t.data)?s:n]?i("q-icon",{staticStyle:{"vertical-align":"baseline"},attrs:{color:void 0!==t.inverted?"white":"grey-9",name:"mdi-menu-down"}}):i("q-icon",{staticStyle:{"vertical-align":"baseline"},attrs:{color:void 0!==t.inverted?"white":"grey-9",name:"mdi-menu-right"}}),i("span",{class:[t.theme.label]},[t._v(t._s(s))]),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(" : "+t._s(Array.isArray(e)?"Array ["+e.length+"]":"Object"))])],1),t.showObj[Array.isArray(t.data)?s:n]?i("json-tree",{staticClass:"margin-left",attrs:{data:e,inverted:t.inverted}}):t._e()],1):i("div",[i("span",{class:[t.theme.label]},[t._v(t._s(s))]),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(" : ")]),i("span",{class:(a={},a[t.theme.typeNumberOrBool]="number"===typeof e||"boolean"===typeof e,a[t.theme.typeString]="string"===typeof e,a[t.theme.typeEmpty]="undefined"===typeof e||null===e,a)},[t._v(t._s(JSON.stringify(e)))])])])})),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(Array.isArray(t.data)?"]":"}"))])],2)},k=[],O={name:"json-tree",props:{data:[Object,Array],inverted:{type:Boolean,default:function(){return!0}}},data:function(){for(var t=[],e=Object.keys(this.data).length,i=0,s=e;i<s;i++)t.push(!0);return{showObj:t}},computed:{theme:function(){return void 0!==this.inverted?{label:"text-pink-4",typeString:"text-red-3",typeNumberOrBool:"text-blue-3",typeEmpty:"text-grey-5"}:{label:"text-pink-8",typeString:"text-red-6",typeNumberOrBool:"text-blue-6",typeEmpty:"text-grey-6"}}},methods:{toggle:function(t){r["default"].set(this.showObj,t,!this.showObj[t])}}},$=O,j=(i("ab66"),Object(g["a"])($,E,k,!1,null,null,null)),S=j.exports;function M(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function N(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?M(Object(i),!0).forEach((function(e){o()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):M(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var H={data:function(){return{version:d.version,currentMessage:{},currentData:{},sides:{left:!this.$q.platform.within.iframe&&!this.$q.platform.is.mobile,right:!1},currentLimit:1e3,rawConfig:{},entity:"",isVisibleToolbar:!0,connectFlag:!1,isTabsVisible:!0,entityByGroup:["platform","channels","calcs","devices","streams","modems","containers","cdns","mqtt","mqttClient","hexViewer"],isNeedSelect:!0,entityInited:!1,isInit:r["default"].connector.socket.connected(),colsEditing:!1}},computed:N({},Object(l["d"])({token:function(t){return t.token},isLoading:function(t){return t.isLoading&&!this.entityInited},config:function(t){return t.config},errors:function(t){return t.errors},newNotificationCounter:function(t){return t.newNotificationCounter},settings:function(t){return t.settings}}),{messagesColsCollectionByEntity:function(){return this.messagesColsByEntity.reduce((function(t,e,i){return t[e.name]=e,t[e.name].index=i,t}),{})},messagesColsByEntity:{get:function(){var t=this.messagesConfigByEntity.vuexModuleName,e=[];return this.$store.state[t]&&this.$store.state[t].cols&&(e=this.$store.state[t].cols),e},set:function(t){var e=this.messagesConfigByEntity.vuexModuleName;this.$store.commit("".concat(e,"/updateCols"),t)}},messagesConfigByEntity:function(){var t={};switch(this.entity){case"devices":case"channels":t=this.configByEntity.messages;break;case"intervals":t=this.configByEntity.intervals}return t},logsColsByEntity:{get:function(){if(!this.configByEntity.logs)return[];var t=this.configByEntity.logs.vuexModuleName,e=[];return this.$store.state[t].cols&&(e=this.$store.state[t].cols),e},set:function(t){var e=this.configByEntity.logs.vuexModuleName;this.$store.commit("".concat(e,"/updateCols"),t)}},colsForEditing:{get:function(){var t=null;return"messages"===this.colsEditing?t=this.messagesColsByEntity:"logs"===this.colsEditing&&(t=this.logsColsByEntity),t},set:function(t){"messages"===this.colsEditing?this.messagesColsByEntity=t:"logs"===this.colsEditing&&(this.logsColsByEntity=t)}},loadingFlag:function(){return this.connectFlag||this.isLoading},hubGroupModel:function(){var t=this.entity;return"channels"===t||"calcs"===t||"devices"===t||"streams"===t||"modems"===t||"hexViewer"===t||"intervals"===t},storageGroupModel:function(){var t=this.entity;return"containers"===t||"cdns"===t},mqttGroupModel:function(){var t=this.entity;return"mqtt"===t||"mqttClient"===t},configByEntity:function(){return"intervals"===this.entity?this.config.devices:this.config[this.entity]},renderEntities:function(){var t=this;return this.entityByGroup.filter((function(e){return t.config[e].isDrawable}))},limit:{get:function(){return this.currentLimit},set:function(t){var e=this;t<100?(this.$q.notify({type:"negative",message:"Please set the count to more than 100.",timeout:1500}),this.currentLimit=100):t>2e3&&this.currentLimit<=2e3?this.$q.notify({color:"amber-9",icon:"warning",timeout:1e4,message:"You are setting the row count to more than 2000. This can affect your browser performance. Do you want to continue?",position:"top-right",actions:[{label:"Agree",handler:function(){e.currentLimit=t}},{label:"Abort",handler:this.settingsClickHandler}]}):this.currentLimit=t}},logMessageConfig:function(){var t={"log object":{title:"log object",description:this.currentData._description,wrapper:S,data:this.currentData},item_data:{title:"item data",wrapper:S,data:this.currentData.item_data},http_data:{title:"http data",wrapper:S,data:this.currentData.http_data},properties:{title:"properties",wrapper:S,data:this.currentData.properties},pending:{title:"pending",wrapper:S,data:this.currentData.pending},current:{title:"".concat(this.currentData.name," [").concat(c["b"].formatDate(1e3*this.currentData.timestamp,"HH:mm:ss"),"]"),wrapper:S,data:this.currentData.current}},e=Object.keys(t).reduce((function(e,i){return e||!!t[i].data}),!1);return e?t:e}}),methods:N({},Object(l["c"])(["setCid","clearToken","clearCurrentRegion","reqFailed","addError","clearNotificationCounter"]),{},Object(l["b"])(["initConnection"]),{viewDataHandler:function(t){var e=this;this.colsEditing&&(this.colsEditing=!1),t&&(t=Object.keys(t).reduce((function(t,e){return 0===e.indexOf("x-flespi")&&delete t[e],t}),t),this.currentMessage=JSON.parse(JSON.stringify(t)),setTimeout((function(){e.sides.right=!0}),20))},hideRight:function(){this.sides.right=!1,this.currentMessage={}},toggleMenu:function(){this.sides.left=!this.sides.left},hideRightHandler:function(){this.hideRight(),this.$refs.main.unselect()},confirmExitHandler:function(){var t=this;this.$q.dialog({title:"Confirm",message:"Do you really want to exit?",color:"grey-9",cancel:!0,ok:!0}).onOk((function(){t.reset()})).onCancel((function(){}))},settingsHandler:function(){var t=this;this.$q.dialog({title:"Settings",color:"grey-9",prompt:{model:this.limit,label:"Page row count",type:"number",outlined:!0},ok:!0,cancel:!0}).onOk((function(e){t.limit=+e})).onCancel((function(){}))},viewLogMessagesHandler:function(t){this.currentData=JSON.parse(JSON.stringify(t)),this.logMessageConfig?(this.rawConfig=this.logMessageConfig,this.$refs.rawViewer.open()):this.$q.notify({message:"No additional data available",timeout:1500})},getGroups:function(t){return t.reduce((function(t,e){if(["hub","storage","mqtt","platform"].includes(e))switch(e){case"hub":t.push("channels"),t.push("calcs"),t.push("devices"),t.push("streams"),t.push("modems"),t.push("hexViewer");break;case"storage":t.push("containers"),t.push("cdns");break;case"mqtt":t.push("mqtt"),t.push("mqttClient");break;case"platform":t.push("platform");break}return t}),[])},reset:function(t){this.clearToken(),this.clearCurrentRegion(),this.$router.push("/login").catch((function(t){return t})),t&&this.addError(t)},setEntity:function(t){this.entity!==t&&(this.entityInited=!1,this.entity=t)},setDefaultEntity:function(){this.renderEntities.length?(this.$router.push("/".concat(this.config[this.renderEntities[0]].path||this.renderEntities[0])).catch((function(t){return t})),this.setEntity(this.renderEntities[0])):this.reset("Nothing to show by current token")},routeProcess:function(t){var e=this;if(t.params.group)var i=r["default"].connector.socket.on("connect",(function(){var t=e.$route.params.group.split(","),s=e.getGroups(t);s.length&&(e.entityByGroup=s,e.setDefaultEntity()),r["default"].connector.socket.off("connect",i)}));t.params.token?this.routeParamsProcess(t):this.token?this.routeMainProcess(t):this.$router.push({name:"simpleLogin",params:{goto:t.path}}).catch((function(t){return t}))},routeParamsProcess:function(t){var e=this;this.isNeedSelect=!this.$route.params.noselect||!this.$q.platform.within.iframe,this.isVisibleToolbar=!t.params.fullscreen||!this.$q.platform.within.iframe,this.$q.sessionStorage.set("toolbox-session-settings[".concat(window.name||"default","]"),{isNeedSelect:this.isNeedSelect,isVisibleToolbar:this.isVisibleToolbar}),this.initConnection({token:t.params.token}).then((function(){if(t.params.id&&t.params.type)var i=r["default"].connector.socket.on("connect",(function(){e.renderEntities.includes(t.params.type)?(e.setEntity(e.$route.params.type),e.$router.push("/".concat(t.params.type,"/").concat(t.params.id)).catch((function(t){return t}))):e.reset("Nothing to show by current token"),r["default"].connector.socket.off("connect",i)}))}))},routeMainProcess:function(t){if("/"===t.path)this.setDefaultEntity();else if(this.$route.meta.moduleName){if(this.setEntity(this.$route.meta.moduleName),this.$route.meta.moduleName===this.entity)return!1;this.$router.push(this.$route.path).catch((function(t){return t}))}else this.$router.push(this.$route.path).catch((function(t){return t}))},connectionPreserveHandler:function(){this.isInit=!0,this.connectFlag=!1},updateSettingsHandler:function(t){this.$store.commit("setToolboxSettings",t)},updateColHandler:function(t){var e=t.index?"edit":"add";if("edit"===e){var i=this.$store.state[this.messagesConfigByEntity.vuexModuleName].cols[t.index];this.$set(i,"display",!i.display)}else this.$store.state[this.messagesConfigByEntity.vuexModuleName].cols.push(t)},updateColsHandler:function(t){this.colsForEditing=t},setDefaultColsHandler:function(){var t="";"messages"===this.colsEditing?t=this.messagesConfigByEntity.vuexModuleName:"logs"===this.colsEditing&&(t=this.configByEntity.logs.vuexModuleName),this.$store.commit("".concat(t,"/setDefaultCols"))}}),watch:{token:function(t){t||this.$router.push("/login").catch((function(t){return t}))},$route:function(t){this.routeProcess(t),this.$refs.layout&&this.hideRight()}},beforeCreate:function(){var t=this;this.$store.commit("getToolboxSettings"),this.colsEditHandler=function(e){t.currentMessage={},t.colsEditing=e,t.sides.right=!0},this.$eventBus.$on("cols:edit",this.colsEditHandler)},created:function(){var t=this;this.routeProcess(this.$route);var e=this.$q.sessionStorage.getItem("toolbox-session-settings[".concat(window.name||"default","]"));e&&(this.isNeedSelect=e.isNeedSelect||!this.$q.platform.within.iframe,this.isVisibleToolbar=e.isVisibleToolbar||!this.$q.platform.within.iframe),this.isInit||(this.connectFlag=!0,this.connectionPreserveHandlerIndex=r["default"].connector.socket.on("connect",this.connectionPreserveHandler)),window&&window.name&&window.addEventListener("beforeunload",(function(){t.$q.sessionStorage.remove("toolbox-session-settings[".concat(window.name,"]")),t.$q.sessionStorage.remove("flespi-toolbox-token[".concat(window.name,"]"))}))},beforeDestroy:function(){this.$eventBus.$off("cols:edit",this.colsEditHandler),void 0!==this.connectionPreserveHandlerIndex&&r["default"].connector.socket.off("connect",this.connectionPreserveHandlerIndex)},components:{ObjectViewer:b,RawViewer:C,ColsEditor:y["a"]}},B=H,D=(i("fc11"),Object(g["a"])(B,s,n,!1,null,null,null));e["default"]=D.exports},fc11:function(t,e,i){"use strict";var s=i("9285"),n=i.n(s);n.a}}]);