(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2559aeeb"],{"2ce0":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("virtual-scroll-list",{ref:"scrollList",attrs:{cols:e.cols,actions:e.actions,items:e.messages,date:e.from,mode:e.mode,viewConfig:e.viewConfig,colsConfigurator:"toolbar",i18n:e.i18n,filter:e.filter,theme:e.theme,title:"Logs"},on:{"change:filter":e.filterChangeHandler,"change:pagination-prev":e.paginationPrevChangeHandler,"change:pagination-next":e.paginationNextChangeHandler,"change:date":e.dateChangeHandler,"change:date-prev":e.datePrevChangeHandler,"change:date-next":e.dateNextChangeHandler,"change:mode":e.modeChange,"update:cols":e.updateColsHandler},scopedSlots:e._u([{key:"items",fn:function(t){var i=t.item,n=t.index,a=t.actions,o=t.cols,c=t.etcVisible,r=t.actionsVisible,d=t.itemHeight,l=t.rowWidth;return s("logs-list-item",{key:n,attrs:{item:i,index:n,actions:a,cols:o,itemHeight:d,rowWidth:l,etcVisible:c,actionsVisible:r},on:{action:e.actionHandler,"item-click":e.viewMessagesHandler}})}}])})],1)},n=[],a=(s("a481"),s("96cf"),s("c973")),o=s.n(a),c=s("de45"),r=s("2b0e"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px"}},[e.item["__connectionStatus"]||e.item["x-flespi-filter-prev"]||e.item["x-flespi-filter-next"]?e.item["x-flespi-filter-prev"]||e.item["x-flespi-filter-next"]?s("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px",color:"#000",fontWeight:"bold",backgroundColor:e.item["x-flespi-filter-prev"]?"#819002":"#ccb300",overflow:"hidden"}},[s("span",{staticClass:"uppercase text-white",staticStyle:{padding:"0 5px"}},[e._v(e._s(e.item["x-flespi-filter-next"]?'Next results will be filtered by: "'+e.item["x-flespi-filter-next"]+'"':'Filter removed: "'+e.item["x-flespi-filter-prev"]+'"'))])]):s("div",{class:[e.color],style:{height:e.itemHeight+"px",width:e.rowWidth+"px",border:"solid 1px #000",color:"#000",fontWeight:"bold",backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0",backgroundImage:"url(./statics/police.png)",overflow:"hidden",opacity:".7"},attrs:{title:e.date.formatDate(1e3*e.item.timestamp,"DD/MM/YYYY HH:mm:ss")}},e._l(Array(10),function(t){return s("span",{key:t,staticClass:"uppercase",staticStyle:{padding:"0 5px","margin-left":"150px"},style:{backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0"}},[e._v(e._s(e.item["__connectionStatus"]))])})):s("div",{staticClass:"cursor-pointer",class:[e.color,e.item.__status?"missed-items":""],style:{height:e.itemHeight+"px",width:e.rowWidth+"px",borderBottom:e.item.delimiter?"solid 1px #f40":"",boxSizing:"border-box"},on:{click:function(t){e.itemClickHandler(e.index,e.clearItem)}}},[e.actionsVisible?s("span",{staticClass:"list__item item_actions text-white"},e._l(e.actions,function(t,i){return s("q-icon",{key:i,staticClass:"cursor-pointer on-left",class:t.classes,attrs:{name:t.icon},nativeOn:{click:function(s){s.stopPropagation(),e.clickHandler(e.index,t.type,e.item)}}},[s("q-tooltip",[e._v(e._s(t.label))])],1)})):e._e(),e._l(e.cols,function(t,i){var n;return s("span",{key:t.name+i,staticClass:"list__item",class:(n={},n["item_"+i]=!0,n),style:{backgroundColor:e.item["x-flespi-filter-fields"]&&e.item["x-flespi-filter-fields"].includes(t.name)?"#666":""}},["event_code"===t.name&&e.item.address?["connection"===e.item.address?s("q-icon",{attrs:{name:"mdi-ethernet",title:"address: connection"}}):e._e(),"sms"===e.item.address?s("q-icon",{attrs:{name:"mdi-email-outline",title:"address: sms"}}):e._e(),"local"===e.item.address?s("q-icon",{attrs:{name:"mdi-content-save-outline",title:"address: local"}}):e._e()]:e._e(),"event_code"===t.name&&e.item["error_text"]?s("q-icon",{attrs:{name:"mdi-alert-outline"}},[s("q-tooltip",[e._v(e._s(e.item["error_text"]))])],1):e._e(),901===e.item.event_code&&"name"===t.name?s("a",{staticClass:"text-green",attrs:{target:"_blank",href:(e.SERVER?" https://cdn.flespi.io/":"https://localhost:9019/")+"file/"+e.item.uuid},on:{click:function(e){e.stopPropagation()}}},[e._v("\n      "+e._s(e.getValueOfProp(t))+"\n    ")]):s("span",{attrs:{title:JSON.stringify(e.getValueOfProp(t))}},[e._v("\n      "+e._s(e.getValueOfProp(t))+"\n    ")])],2)}),e.etcVisible?s("span",{staticClass:"list__item item_etc"},[e._v(e._s(e.etc))]):e._e()],2)])},l=[],m=(s("7f7f"),s("ac6a"),s("cadf"),s("456d"),s("f490")),u=s("96a1"),h=s("839d"),f={props:["item","index","actions","cols","etcVisible","actionsVisible","itemHeight","rowWidth"],data:function(){return{date:m["d"],SERVER:"https://flespi.io"}},computed:{etc:function(){var e=this,t=Object.keys(this.item).filter(function(t){return!e.hasInCols(t)});return t.reduce(function(t,s){return"delimiter"===s||"event_origin"===s||"event_text"===s||"item_data"===s||"source"===s||"error_text"===s||"close_code"===s||"http_data"===s||"current"===s||"updated"===s||"error_code"===s||"send_code"===s||"address"===s||"__status"===s||"uuid"===s||"x-flespi-filter-fields"===s||"x-flespi-filter-next"===s||"x-flespi-filter-prev"===s?t:(t+="".concat(s,": ").concat(JSON.stringify(e.item[s]),"; "),t)},"")||"*Empty*"},color:function(){switch(this.item.event_code){case 1:case 100:case 101:case 110:case 200:case 202:case 300:case 312:case 313:case 401:case 410:case 420:case 430:case 500:case 510:case 601:case 605:case 901:return"text-green";case 2:case 3:case 21:case 111:case 112:case 302:case 303:case 311:case 314:case 411:case 412:case 502:case 504:case 511:case 600:case 603:case 604:case 900:return"text-yellow";case 113:case 301:case 310:case 404:case 422:case 432:case 503:case 512:case 602:case 700:case 800:return"text-grey-6";case 20:case 114:case 203:case 204:case 315:case 316:case 402:case 403:case 501:case 902:return"text-red";case 201:return this.item.send_code<0?"text-red":"text-green";case 102:switch(this.item.close_code){case 3:return"text-green";case 12:case 2:return"text-grey-6";case 4:case 5:case 6:case 11:case 13:case 14:return"text-red";case 7:case 8:case 9:case 10:return"text-yellow";default:return""}default:return""}},eventLinkMore:function(){switch(this.item.event_code){case 1:case 2:case 3:return"".concat("https://flespi.io","/docs/#/platform");case 20:case 21:return"".concat("https://flespi.io","/docs/#/platform/!/counters");case 100:case 101:case 102:return"".concat("https://flespi.io","/docs/#/gw/!/connections");case 110:case 111:case 112:case 113:return"".concat("https://flespi.io","/docs/#/gw/!/commands");case 114:return"".concat("https://flespi.io","/docs/#/gw/!/channels");case 200:case 201:case 202:case 203:case 204:return"".concat("https://flespi.io","/docs/#/gw/!/modems");case 300:case 301:case 302:case 303:case 310:case 311:case 312:case 313:case 314:case 315:case 316:return"".concat("https://flespi.io","/docs/#/gw/!/devices");case 401:case 402:case 403:case 404:case 410:case 411:case 412:case 420:case 422:case 430:case 432:return"".concat("https://flespi.io","/docs/#/gw/!/streams");case 500:case 501:case 502:case 503:case 504:case 510:case 511:case 512:return"".concat("https://flespi.io","/docs/#/mqtt/!/sessions");case 600:return"".concat("https://flespi.io","/docs/#/platform/!/tokens");case 601:case 602:case 603:case 604:case 605:return"".concat("https://flespi.io","/docs/#/gw/!/calcs");case 700:return"".concat("https://flespi.io","/docs/#/storage/!/containers");case 800:return"".concat("https://flespi.io","/docs/#/storage/!/abques");case 900:case 901:case 902:return"".concat("https://flespi.io","/docs/#/storage/!/cdns");default:return""}},description:function(){var e=h.types,t=h.closeCodes,s=h.errorCodes,i=h.sendCodes,n=e[this.item.event_code]?"".concat(e[this.item.event_code]):this.item.event_code;return n+=this.item.close_code?" (".concat(t[this.item.close_code],")"):t[this.item.close_code]?"(".concat(this.item.close_code,")"):"",n+=this.item.error_code?" (".concat(this.item.error_code,": ").concat(s[this.item.event_code][this.item.error_code],")"):s[this.item.event_code]&&s[this.item.event_code][this.item.error_code]?"(".concat(this.item.error_code,")"):"",n+=this.item.send_code?" (".concat(this.item.send_code,": ").concat(i[this.item.send_code],")"):s[this.item.event_code]&&s[this.item.event_code][this.item.send_code]?"(".concat(this.item.send_code,")"):"",n},clearItem:function(){var e=this;return Object.keys(this.item).reduce(function(t,s){return"delimiter"===s||"__status"===s||"x-flespi-filter-fields"===s||"x-flespi-filter-next"===s||"x-flespi-filter-prev"===s?t:(t[s]=e.item[s],t)},{})}},methods:{hasInCols:function(e){return!!this.cols.filter(function(t){return e===t.name}).length},clickHandler:function(e,t,s){this.$emit("action",{index:e,type:t,content:s})},linkMoreClickHandler:function(){Object(u["a"])(this.eventLinkMore)},getValueOfProp:function(e){var t=e.custom?JSON.stringify(this.item[e.name]):this.item[e.name];return"event_code"===e.name&&(t=this.description),"timestamp"===e.name&&(t=m["d"].formatDate(1e3*this.item[e.name],"DD/MM/YYYY HH:mm:ss")),"host"===e.name&&(t=this.item["host"]||this.item["source"]||""),t},itemClickHandler:function(e,t){t._description="[".concat(m["d"].formatDate(1e3*this.item.timestamp,"DD/MM/YYYY HH:mm:ss"),"] ").concat(this.item.event_code,": ").concat(this.description),t._color=this.color,this.$emit("item-click",{index:e,content:t})}}},p=f,g=(s("d960"),s("2877")),v=Object(g["a"])(p,d,l,!1,null,null,null);v.options.__file="LogsListItem.vue";var b=v.exports,w=s("ef95"),x={props:["mode","item","cid","limit","originPattern","config"],data:function(){return{theme:this.config.theme,i18n:{"Messages not found":"Log entries not found"},viewConfig:this.config.viewConfig,actions:this.config.actions,moduleName:this.config.vuexModuleName}},computed:{messages:{get:function(){var e=this.$store.state[this.moduleName].messages;return this.setTranslation(e),e},set:function(e){this.$store.commit("".concat(this.moduleName,"/setMessages"),e)}},origin:{set:function(){var e=o()(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.origin!==t){e.next=3;break}return this.$store.commit("".concat(this.moduleName,"/setItemDeletedStatus"),this.item.deleted),e.abrupt("return",!1);case 3:return e.next=5,this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling"));case 5:if(this.$store.commit("".concat(this.moduleName,"/setOrigin"),t),this.$store.commit("".concat(this.moduleName,"/setItemDeletedStatus"),this.item.deleted),this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/getCols"),this.config.cols),0!==this.$store.state[this.moduleName].mode){e.next=14;break}return e.next=12,this.$store.dispatch("".concat(this.moduleName,"/initTime"));case 12:return e.next=14,this.$store.dispatch("".concat(this.moduleName,"/get"));case 14:return e.next=16,this.$store.dispatch("".concat(this.moduleName,"/pollingGet"));case 16:if(1!==this.$store.state[this.moduleName].mode||this.item.deleted){e.next=19;break}return e.next=19,this.$store.dispatch("".concat(this.moduleName,"/getHistory"),200);case 19:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),get:function(){return this.$store.state[this.moduleName].origin}},cols:{get:function(){return this.$store.state[this.moduleName].cols},set:function(e){this.$store.commit("".concat(this.moduleName,"/updateCols"),e)}},filter:{get:function(){return this.$store.state[this.moduleName].filter},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFilter"),e):this.$store.commit("".concat(this.moduleName,"/setFilter"),"")}},from:{get:function(){return this.$store.state[this.moduleName].from},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFrom"),e):this.$store.commit("".concat(this.moduleName,"/setFrom"),0)}},to:{get:function(){return this.$store.state[this.moduleName].to},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setTo"),e):this.$store.commit("".concat(this.moduleName,"/setTo"),0)}},reverse:{get:function(){return this.$store.state[this.moduleName].reverse||!1},set:function(e){this.$store.commit("".concat(this.moduleName,"/setReverse"),e)}},currentLimit:{get:function(){return this.$store.state[this.moduleName].limit},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setLimit"),e):this.$store.commit("".concat(this.moduleName,"/setLimit"),1e3)}},originByPattern:function(){var e=this;return this.originPattern.replace(/\/:(\w*)(\/)?/g,function(t,s,i){return"/".concat(e.item[s]).concat(i||"")})}},methods:{resetParams:function(){this.$refs.scrollList.resetParams()},filterChangeHandler:function(e){this.filter!==e&&(this.filter=e,0===this.mode&&(this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/get"))))},setTranslation:function(e){this.i18n.from=e.length?"Previous batch until ".concat(m["d"].formatDate(1e3*e[0].timestamp,"HH:mm:ss")):"Prev",this.i18n.to=e.length?"Next batch from ".concat(m["d"].formatDate(1e3*e[e.length-1].timestamp,"HH:mm:ss")):"Next"},modeChange:function(){var e=o()(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=+t,this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.commit("".concat(this.moduleName,"/setMode"),t),1!==t||!this.origin||null===this.$store.state[this.moduleName].mode){e.next=6;break}return e.next=6,this.$store.dispatch("".concat(this.moduleName,"/getHistory"),200);case 6:if(0!==t||!this.origin){e.next=11;break}return e.next=9,this.$store.dispatch("".concat(this.moduleName,"/initTime"));case 9:return e.next=11,this.$store.dispatch("".concat(this.moduleName,"/get"));case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),updateColsHandler:function(e){this.cols=e},dateChangeHandler:function(e){this.$store.dispatch("".concat(this.moduleName,"/get"),{name:"setFrom",payload:e})},datePrevChangeHandler:function(){this.$store.dispatch("".concat(this.moduleName,"/get"),{name:"datePrev"})},dateNextChangeHandler:function(){this.$store.dispatch("".concat(this.moduleName,"/get"),{name:"dateNext"})},paginationPrevChangeHandler:function(){var e=0;e=this.messages.length?1e3*this.messages[0].timestamp:0,this.$store.dispatch("".concat(this.moduleName,"/get"),{name:"paginationPrev",payload:e})},paginationNextChangeHandler:function(){var e=0;e=this.messages.length?1e3*this.messages[this.messages.length-1].timestamp:0,this.$store.dispatch("".concat(this.moduleName,"/get"),{name:"paginationNext",payload:e})},actionHandler:function(e){var t=e.index,s=e.type,i=e.content;switch(s){case"view":this.viewMessagesHandler({index:t,content:i});break}},viewMessagesHandler:function(e){e.index;var t=e.content;this.$emit("view-log-message",t)},changeCid:function(){var e=o()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling"));case 2:if(this.$store.commit("".concat(this.moduleName,"/setCid"),this.cid),this.$store.commit("".concat(this.moduleName,"/setItemDeletedStatus"),this.item.deleted),this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/getCols"),this.config.cols),0!==this.$store.state[this.moduleName].mode){e.next=11;break}return e.next=9,this.$store.dispatch("".concat(this.moduleName,"/initTime"));case 9:return e.next=11,this.$store.dispatch("".concat(this.moduleName,"/get"));case 11:return e.next=13,this.$store.dispatch("".concat(this.moduleName,"/pollingGet"));case 13:if(1!==this.$store.state[this.moduleName].mode||this.item.deleted){e.next=16;break}return e.next=16,this.$store.dispatch("".concat(this.moduleName,"/getHistory"),200);case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},watch:{item:function(e){this.origin=this.originByPattern},mode:function(e){this.modeChange(e)},limit:function(e){this.currentLimit=e},cid:function(){this.changeCid()}},created:function(){var e=this;this.$store.state[this.moduleName]?this.$store.commit("".concat(this.moduleName,"/clear")):this.$store.registerModule(this.moduleName,Object(c["e"])({Vue:r["default"],LocalStorage:this.$q.localStorage,name:this.moduleName,errorHandler:function(t){e.$store.commit("reqFailed",t)},filterHandler:this.filterMessages})),this.currentLimit=this.limit,this.cid&&this.$store.commit("".concat(this.moduleName,"/setCid"),this.cid),this.item&&(this.$store.commit("".concat(this.moduleName,"/setOrigin"),this.originByPattern),this.$store.commit("".concat(this.moduleName,"/setItemDeletedStatus"),this.item.deleted),this.$store.dispatch("".concat(this.moduleName,"/getCols"),this.config.cols)),null===this.$store.state[this.moduleName].mode&&(this.modeChange(this.mode),this.$store.dispatch("".concat(this.moduleName,"/pollingGet"))),this.offlineHandler=r["default"].connector.socket.on("offline",function(){e.$store.commit("".concat(e.moduleName,"/setOffline"),1===e.mode)}),this.connectHandler=r["default"].connector.socket.on("connect",function(){e.$store.state[e.moduleName].offline&&(e.$store.commit("".concat(e.moduleName,"/setReconnected"),1===e.mode),1===e.mode&&e.$store.dispatch("".concat(e.moduleName,"/getMissedMessages")))})},beforeDestroy:function(){void 0!==this.offlineHandler&&r["default"].connector.socket.off("offline",this.offlineHandler),void 0!==this.connectHandler&&r["default"].connector.socket.off("connect",this.connectHandler),this.$store.commit("".concat(this.moduleName,"/clear"))},mixins:[w["a"]],components:{VirtualScrollList:c["a"],LogsListItem:b}},_=x,y=(s("fa30"),Object(g["a"])(_,i,n,!1,null,null,null));y.options.__file="Index.vue";t["a"]=y.exports},"839d":function(e){e.exports={types:{1:"item was created, usually by customer via REST API",2:"item was updated, usually by customer via REST API",3:"item was deleted, usually by customer via REST API",20:"item was blocked",21:"item was unblocked",100:"channel has accepted connection",101:"channel connection was identified",102:"channel connection was closed",110:"new channel's command was created",111:"channel's command was updated",112:"channel's command was deleted",113:"channel's command executed or discarded",114:"channel configuration is invalid",200:"SMS(delivery receipt) received via modem",201:"SMS was sent via modem",202:"modem has successfully connected to SMS gateway",203:"modem has lost connection to SMS gateway server",204:"failed to connect to SMPP gateway",300:"device connected",301:"device disconnected",302:"received SMS from device",303:"sent SMS to device",310:"Received a new setting value from the device",311:"REST API (PUT) request: the system accepted new setting value",312:"Device confirmed the acceptance of the new setting value",313:"Device rejected the new setting value",314:"REST API (DELETE) request: the sending of new setting value was cancelled by user",315:"REST API (DELETE) request: current setting value was cleared from the system by user",316:"The system marked the setting as unreadable due to exceeded retries limit",401:"stream connected successfully",402:"stream has lost connection",403:"stream failed to deliver messages",404:"stream has sent messages",410:"new subscription was created for stream",411:"stream subscription was updated",412:"stream subscription was deleted",420:"stream was subscribed to device messages",422:"stream was unsubscribed from device messages",430:"stream was subscribed to channel messages",432:"stream was unsubscribed from channel messages",500:"mqtt session connection was accepted",501:"mqtt session connection was blocked",502:"mqtt session connection was rejected",503:"mqtt session connection was closed",504:"persistent session was overflowed and deleted",510:"new subscription was created for MQTT session via REST API",511:"MQTT session subscription was updated via REST API",512:"MQTT session subscription was deleted via REST API",600:"token expired and has been deleted",601:"new devices assigned to calculator",602:"device was unassigned from calculator",603:"device parameters were changed in the calculator",604:"device was blocked by calculator",605:"device was unblocked by calculator",700:"container size has been changed",800:"abque size has been changed",900:"cdn size has been changed",901:"file was placed on cdn",902:"file was removed from cdn"},closeCodes:{2:"connection closed by tracking device",3:"connection successfully processed and closed",4:"received data violates channel's protocol",5:"internal error",6:"data parsing error (see log details)",7:"connection closed due to server maintenance",8:"protocol implementation updated",9:"channel's parameters changed",10:"connection closed upon user's request",11:"outgoing connection failed",12:"Current connection closed because of ident collision: device has opened another connection to the channel without closing first one. It may happen because of device firmware bug or by an unstable connectivity provider. In general, this happens to plenty of devices and usually can be ignored.",13:"device is blocked",14:"password mismatch",128:"Unspecified error",129:"Malformed Packet",130:"Protocol Error",131:"Implementation specific error",132:"Unsupported Protocol Version",133:"Client Identifier not valid",134:"Bad User Name or Password",135:"Not authorized",136:"Server unavailable",137:"Server busy",138:"Banned",139:"Server shutting down",140:"Bad authentication method",141:"Keep Alive timeout",142:"Session taken over",143:"Topic Filter invalid",144:"Topic Name invalid",145:"Packet identifier in use",146:"Packet Identifier not found",147:"Receive Maximum exceeded",148:"Topic Alias invalid",149:"Packet too large",150:"Message rate too high",151:"Quota exceeded",152:"Administrative action",153:"Payload format invalid",154:"Retain not supported",155:"QoS not supported",156:"Use another server",157:"Server moved",158:"Shared Subscriptions not supported",159:"Connection rate exceeded",160:"Maximum connect time",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported","-1":"Unexpected disconnect"},errorCodes:{204:{"-1":"Authorization problems - check the modem's username and password","-2":"TCP/SSL connection related errors - check the modem's 'uri' field"},403:{1:"unacceptable protocol version",2:"identifier rejected",3:"server unavailable",4:"bad username or password",5:"connection not authorized",100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Moved Temporarily",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I’m a teapot",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",449:"Retry With",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required",520:"Unknown Error",521:"Web Server Is Down",522:"Connection Timed Out",523:"Origin Is Unreachable",524:"A Timeout Occurred",525:"SSL Handshake Failed",526:"Invalid SSL Certificate","-99":"certificate error","-2":"request sent but no response received","-1":"failed to connect"}},sendCodes:{0:"Ok - Message Acceptable",1:"Invalid Message Length",2:"Invalid Command Length",3:"Invalid Command ID",4:"Invalid bind status",5:"Bind attempted when already bound",6:"Invalid priority flag",7:"Invalid registered-delivery flag",8:"SMSC system error",10:"Invalid source address",11:"Invalid destination address",12:"Invalid message-id",13:"Generic bind failure",14:"Invalid password",15:"Invalid System-ID",17:"Cancel failure",19:"Replace failure",20:"Too many messages in queue, at present",22:"Invalid services type",51:"Invalid number of destination addresses",52:"Invalid name",64:"Invalid Destination Flag Option",66:"Invalid value for submit with replace option",67:"Invalid value for esm_class field",68:"Cannot submit to a distribution list",69:"Generic submission failure",72:"Invalid type of number for source",73:"Invalid numbering plan indicator for source",74:"Invalid type of number for destination",75:"Invalid numbering plan indicator for destination",77:"Invalid esm type",78:"Invalid submit with replace flag option",85:"Invalid number of messages specified for query_last_msgs primitive",88:"SMSC is throttling inbound messages",98:"Invalid Validity Date",103:"Quota violation, add credit to account",194:"Invalid optional parameter length",195:"Missing optional parameter",196:"Invalid optional parameter value",254:"Generic delivery failure",255:"Unknown Error","-2":"Error from SMS gateway","-1":"No more SMS available for current period"}}},9029:function(e,t,s){},"96a1":function(e,t,s){"use strict";var i=s("a60d");t["a"]=function(e,t){if(i["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(e,{openExternal:!0});var s=window.open(e,"_blank");if(s)return s.focus(),s;t&&t()}},c3b7:function(e,t,s){},d960:function(e,t,s){"use strict";var i=s("c3b7"),n=s.n(i);n.a},fa30:function(e,t,s){"use strict";var i=s("9029"),n=s.n(i);n.a}}]);