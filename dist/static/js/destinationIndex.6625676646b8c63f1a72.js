webpackJsonp([10,6],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=n(4),r=n(5),i=a(r),u=n(47),s=a(u),c=n(254),l=a(c);n(196);new o.Vue({el:"#destinationIndex",store:i.default,template:'<div class="pageview"><my-header></my-header><destination-index></destination-index></div>',components:{destinationIndex:l.default,"my-header":s.default}})},1:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.PAGE_SET_INFO="PAGE_SET_INFO",e.SHOPPING_GET_NUM="SHOPPING_GET_NUM",e.TOP_RIGHT_CLICK_FONT="TOP_RIGHT_CLICK_FONT",e.GLOBAL_SET_LOADINNG="GLOBAL_SET_LOADINNG",e.SET_TOKEN="SET_TOKEN",e.INDEX_GET_DATA="INDEX_GET_DATA",e.MESSAGE_GET_LIST="MESSAGE_GET_LIST",e.MESSAGE_LIST_CURRENTPAGE="MESSAGE_LIST_CURRENTPAGE",e.SHOPPINGCART_GET_LIST="SHOPPINGCART_GET_LIST",e.SHOPPINGCART_LIST_CURRENTPAGE="SHOPPINGCART_LIST_CURRENTPAGE",e.SHOPPINGCART_SELECT_ALL="SHOPPINGCART_SELECT_ALL",e.SHOPPINGCART_SELECT_ITEM="SHOPPINGCART_SELECT_ITEM",e.SHOPPINGCART_DELETE_SELECT="SHOPPINGCART_DELETE_SELECT",e.SHOPPINGCART_DELETE_ARRAY="SHOPPINGCART_DELETE_ARRAY",e.CALCULATE_TOTAL_PRICE="CALCULATE_TOTAL_PRICE",e.MESSAGE_GET_COUNTER="MESSAGE_GET_COUNTER",e.CENTER_GET_DATA="CENTER_GET_DATA",e.COLLECT_GET_LIST="COLLECT_GET_LIST",e.COLLECT_LIST_CURRENTPAGE="COLLECT_LIST_CURRENTPAGE",e.SHOW_CHECKBOX="SHOW_CHECKBOX",e.LOGIN_IS_SUCCESS="LOGIN_IS_SUCCESS",e.DESTINATION_GET_INDEX="DESTINATION_GET_INDEX",e.BECOMMENT_GET_LIST="BECOMMENT_GET_LIST",e.BECOMMENT_LIST_CURRENTPAGE="BECOMMENT_LIST_CURRENTPAGE"},2:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),i=o(r),u=n(5),s=o(u),c=n(1),l=a(c),f=n(54),d=o(f),_=n(18),g=_.build.assetsPublicPath+_.build.assetsSubDirectory+"/api/";d.default.interceptors.request.use(function(t){return s.default.commit(l.GLOBAL_SET_LOADINNG,!0),t},function(t){return i.default.reject(t)}),d.default.interceptors.response.use(function(t){return s.default.commit(l.GLOBAL_SET_LOADINNG,!1),t},function(t){return i.default.reject(t)}),e.default={getMessageList:function(t,e){d.default.get(g+"center/getNotification.json?t="+1*new Date+"&currentPage="+t+"&callback=?").then(function(t){t.status>=200&&t.status<300&&e(t.data)}).catch(function(t){return i.default.reject(t)})},getLogin:function(t,e){d.default.get(g+"user/login.json?t="+1*new Date+"&callback=?").then(function(t){t.status>=200&&t.status<300&&e(t.data)}).catch(function(t){return i.default.reject(t)})},getShoppingCartNum:function(t){d.default.get(g+"order/countShopCartNum.json?t="+1*new Date+"&callback=?").then(function(e){e.status>=200&&e.status<300&&t(e.data)}).catch(function(t){return i.default.reject(t)})},getCollectList:function(t,e){return new i.default(function(n,a){d.default.get(g+"center/getFavourite.json?t="+1*new Date+"&currentPage="+t+"&callback=?").then(function(t){t.status>=200&&t.status<300&&(e(t.data),n(t.data))}).catch(function(t){a(t)})})},getBeCommentList:function(t,e){return new i.default(function(t,n){d.default.get("/center/waitForCommentList").then(function(n){n.status>=200&&n.status<300&&(e(n.data),t(n.data))}).catch(function(t){n(t)})})},getShoppingCartList:function(t,e){return new i.default(function(n,a){d.default.get(g+"order/shopCart.json?t="+1*new Date+"&currentPage="+t+"&callback=?").then(function(t){t.status>=200&&t.status<300&&(e(t.data),n(t.data))}).catch(function(t){a(t)})})},deleteShoppingCartList:function(t,e){d.default.get("/shopping/delete").then(function(n){n.status>=200&&n.status<300&&e(n.data,t)}).catch(function(t){return i.default.reject(t)})},getCenterData:function(t){return new i.default(function(e,n){d.default.get(g+"center/getCenter.json?t="+1*new Date+"&callback=?").then(function(n){n.status>=200&&n.status<300&&(t(n.data),e(n.data))}).catch(function(t){n(t)})})},getIndexData:function(t){return new i.default(function(e,n){d.default.get(g+"home/homepageV3.json?t="+1*new Date+"&callback=?").then(function(n){n.status>=200&&n.status<300&&(t(n.data),e(n.data))}).catch(function(t){n(t)})})},getDestinationIndex:function(t){d.default.get(g+"destination/getDestination.json?t="+1*new Date+"&callback=?").then(function(e){e.status>=200&&e.status<300&&t(e.data)}).catch(function(t){return i.default.reject(t)})}}},4:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=n(13),r=a(o),i=n(37),u=a(i),s=n(19),c=a(s),l=n(38),f=a(l),d=n(7),_=a(d),g=n(63),h=a(g),p=n(64),E=a(p),T=n(67),C=a(T),m=n(62),L=a(m),S=n(22),P=(a(S),n(36)),v=a(P),I=n(35),O=a(I);n(33),r.default.use(L.default),r.default.use(C.default),r.default.use(E.default),r.default.use(_.default),r.default.use(h.default);var N={"zh-CN":v.default,"en-US":O.default},M=new h.default({locale:"zh-CN",messages:N});n(34),t.exports={Vue:r.default,$:u.default,Common:c.default,wx:f.default,i18n:M,VueRouter:C.default}},5:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(13),r=a(o),i=n(6),u=a(i),s=n(30),c=a(s),l=n(26),f=a(l),d=n(31),_=a(d),g=n(29),h=a(g),p=n(28),E=a(p),T=n(25),C=a(T),m=n(27),L=a(m),S=n(32),P=a(S),v=n(24),I=a(v);r.default.use(u.default),e.default=new u.default.Store({modules:{index:E.default,common:f.default,my:_.default,messageList:c.default,login:h.default,collect:C.default,destinationIndex:L.default,shoppingCart:P.default,beComment:I.default},strict:!1})},9:function(t,e){"use strict";t.exports={NODE_ENV:'"production"'}},17:function(t,e,n){"use strict";var a=n(68),o=n(9);t.exports=a(o,{NODE_ENV:'"development"'})},18:function(t,e,n){(function(e){"use strict";var a=n(61);t.exports={build:{env:n(9),assetsRoot:a.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"https://luchanan.github.io/vue2.0-multi-page/dist/",productionSourceMap:!1,productionGzip:!1,productionGzipExtensions:["js","css"]},dev:{env:n(17),port:8080,assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},cssSourceMap:!1}}}).call(e,"/")},19:function(t,e){"use strict";var n={isLogin:function(){return null!=window.localStorage.getItem("userInfo")},hasDeviceId:!1,index2PageCount:function(t,e){return Math.ceil(t/(e||10))},goBack:function(){window.history.go(-1)}};t.exports=n},20:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(21),r=a(o),i=[];i.push(r.default),e.default=i},21:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),r=(a(o),{path:"/center/waitForCommentList",data:{error_code:1e3,error_msg:"ok","execute_time|1-10":1,"comment_list|10":[{product_name:"@cparagraph()","id|+1":1e3,order_date:"@datetime()"}],"last_index|+10":9,total_index:31}});e.default=r},22:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t){t.forEach(function(t){i.default.mock(t.path,t.data)})}Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),i=a(r),u=n(23),s=a(u),c=n(20),l=a(c);o(s.default),o(l.default),e.default=i.default},23:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),r=(a(o),[{path:"/center/waitForCommentList",data:{"error_code|1":["0000","1000"],error_msg:function(){var t=this.error_code,e="";switch(t){case"0000":e="删除成功";break;case"1000":e="删除失败";break;default:e="未知错误"}return e},"execute_time|1-10":1}}]);e.default=r},24:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(3),u=o(i),s=n(1),c=a(s),l=n(4),f=n(2),d=o(f),_={beCommentList:[],hasMore:!0,currentPage:0},g={getBeCommentList:function(t){var e=t.commit;if(_.hasMore)return e(c.BECOMMENT_LIST_CURRENTPAGE),d.default.getBeCommentList(_.currentPage,function(t){e(c.BECOMMENT_GET_LIST,t)})}},h=(r={},(0,u.default)(r,c.BECOMMENT_GET_LIST,function(t,e){console.log(e),t.beCommentList=t.beCommentList.concat(e.comment_list),t.hasMore=t.currentPage<l.Common.index2PageCount(e.total_index)==!0}),(0,u.default)(r,c.BECOMMENT_LIST_CURRENTPAGE,function(t){t.currentPage+=1,t.hasMore=!1}),r);e.default={state:_,actions:g,mutations:h}},25:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(3),u=o(i),s=n(1),c=a(s),l=n(4),f=n(2),d=o(f),_={showCheckbox:!1,collectList:[],hasMore:!0,currentPage:0},g={getCollectList:function(t){var e=t.commit;if(_.hasMore)return e(c.COLLECT_LIST_CURRENTPAGE),d.default.getCollectList(_.currentPage,function(t){e(c.COLLECT_GET_LIST,t)})}},h={getCollectList:function(t){return t.collectList},collectHasMore:function(t){return t.hasMore},getCheckboxShow:function(t){return t.showCheckbox}},p=(r={},(0,u.default)(r,c.COLLECT_GET_LIST,function(t,e){t.collectList=t.collectList.concat(e.favourite_list),t.hasMore=t.currentPage<l.Common.index2PageCount(e.total_index)==!0}),(0,u.default)(r,c.COLLECT_LIST_CURRENTPAGE,function(t){t.currentPage+=1,t.hasMore=!1}),(0,u.default)(r,c.SHOW_CHECKBOX,function(t){t.showCheckbox?t.showCheckbox=!1:t.showCheckbox=!0}),r);e.default={state:_,actions:g,getters:h,mutations:p}},26:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(3),u=o(i),s=n(50),c=o(s),l=n(7),f=n(1),d=a(f),_=n(2),g=o(_),h={globalLoadinng:!0,headerTitle:"我的",left:"",right:"",type:"",shoppingCartNum:0,token:null},p={setPageInfo:function(t,e){var n=t.commit;n(d.PAGE_SET_INFO,e)},getShoppingCartNum:function(t){var e=t.commit;g.default.getShoppingCartNum(function(t){e(d.SHOPPING_GET_NUM,t)})}},E={getPageInfo:function(t){return t},getShoppingCartNum:function(t){return t.shoppingCartNum}},T=(r={},(0,u.default)(r,d.SET_TOKEN,function(t,e){t=(0,c.default)(t,e)}),(0,u.default)(r,d.PAGE_SET_INFO,function(t,e){t=(0,c.default)(t,e)}),(0,u.default)(r,d.SHOPPING_GET_NUM,function(t,e){t.shoppingCartNum=e.shop_cart_num}),(0,u.default)(r,d.GLOBAL_SET_LOADINNG,function(t,e){t.globalLoadinng=e,t.globalLoadinng?l.Indicator.open():l.Indicator.close()}),(0,u.default)(r,d.TOP_RIGHT_CLICK_FONT,function(t,e){t.right.font===e.afterFont?t.right.font="编辑":t.right.font="完成"}),r);e.default={state:h,actions:p,getters:E,mutations:T}},27:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=o(r),u=n(1),s=a(u),c=n(2),l=o(c),f={getDestinationIndex:[]},d={getDestinationIndex:function(t){var e=t.commit;l.default.getDestinationIndex(function(t){e(s.DESTINATION_GET_INDEX,t)})}},_={getDestinationIndex:function(t){return t.getDestinationIndex}},g=(0,i.default)({},s.DESTINATION_GET_INDEX,function(t,e){t.getDestinationIndex=e.country_list});e.default={state:f,actions:d,getters:_,mutations:g}},28:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=o(r),u=n(1),s=a(u),c=n(2),l=o(c),f={indexData:[]},d={getIndexData:function(t){var e=t.commit;return l.default.getIndexData(function(t){e(s.INDEX_GET_DATA,t)})}},_={getIndexData:function(t){return t.indexData}},g=(0,i.default)({},s.INDEX_GET_DATA,function(t,e){t.indexData=e});e.default={state:f,actions:d,getters:_,mutations:g}},29:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=o(r),u=n(14),s=o(u),c=n(1),l=a(c),f=n(2),d=o(f),_={loginSuccess:!1,errorMessage:""},g={goLogin:function(t,e){var n=t.commit;return new s.default(function(t,a){d.default.getLogin(e,function(e){n(l.LOGIN_IS_SUCCESS,e),t(e)})})}},h={getLoginSuccess:function(t){return t.loginSuccess},getLoginMessage:function(t){return t.errorMessage}},p=(0,i.default)({},l.LOGIN_IS_SUCCESS,function(t,e){t.loginSuccess="0000"===e.error_code,t.errorMessage=e.error_msg});e.default={state:_,actions:g,getters:h,mutations:p}},30:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(3),u=o(i),s=n(4),c=n(2),l=o(c),f=n(1),d=a(f),_={listData:[],hasMore:!0,currentPage:0,totalPage:0},g={getMessageList:function(t){var e=t.commit;_.hasMore&&(e(d.MESSAGE_LIST_CURRENTPAGE),l.default.getMessageList(_.currentPage,function(t){e(d.MESSAGE_GET_LIST,t)}))}},h={getMessageListGet:function(t){return t.listData},hasMore:function(t){return t.hasMore}},p=(r={},(0,u.default)(r,d.MESSAGE_GET_LIST,function(t,e){t.listData=t.listData.concat(e.notification_list),t.hasMore=t.currentPage<s.Common.index2PageCount(e.total_index)==!0}),(0,u.default)(r,d.MESSAGE_LIST_CURRENTPAGE,function(t){t.currentPage+=1,t.hasMore=!1}),r);e.default={state:_,actions:g,getters:h,mutations:p}},31:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(3),u=o(i),s=n(1),c=a(s),l=n(2),f=o(l),d={messageCount:0,centerData:[]},_={getMessageCount:function(t,e){var n=t.commit;n(c.MESSAGE_GET_COUNTER,e)},gerCenterData:function(t){var e=t.commit;return f.default.getCenterData(function(t){e(c.CENTER_GET_DATA,t)})}},g={getMessageCount:function(t){return t.messageCount},getCenterData:function(t){return t.centerData}},h=(r={},(0,u.default)(r,c.MESSAGE_GET_COUNTER,function(t,e){t.messageCount=e}),(0,u.default)(r,c.CENTER_GET_DATA,function(t,e){t.centerData=e}),r);e.default={state:d,actions:_,getters:g,mutations:h}},32:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(3),u=o(i),s=n(5),c=o(s),l=n(1),f=a(l),d=n(4),_=n(2),g=o(_),h=n(7),p={go:"去结算",delete:"删除"},E={shoppingCartCheckbox:!1,shoppingList:[],hasMore:!0,currentPage:0,totalPrice:0,buyBtnDisabled:!0,buyBtnCurrentFont:p.go,priceShow:{visibility:"visible"},checkAll:!1,itemChecked:[],isDelete:!1,deleteIDs:[]},T={getShoppingCartList:function(t){var e=t.commit;if(E.hasMore)return e(f.SHOPPINGCART_LIST_CURRENTPAGE),g.default.getShoppingCartList(E.currentPage,function(t){e(f.SHOPPINGCART_GET_LIST,t)})},deleteShoppingCartList:function(t){var e=t.commit,n=t.state,a=n.deleteIDs;(0,h.MessageBox)({title:"",showCancelButton:!0,message:"确定删除这"+a.length+"个商品?",callback:function(t){"confirm"===t&&g.default.deleteShoppingCartList(n.deleteIDs,function(t){console.log(t),"0000"===t.error_code?e(f.SHOPPINGCART_DELETE_SELECT,t):(0,h.Toast)({message:t.error_msg,duration:3e3})})}})}},C={getShoppingList:function(t){return t.shoppingList},shoppingCartHasMore:function(t){return t.hasMore}},m=(r={},(0,u.default)(r,f.SHOPPINGCART_DELETE_ARRAY,function(t){var e=(t.shoppingList.length,[]),n=t.shoppingList.filter(function(t,e,n){return t.checked===!0});n.forEach(function(t,n,a){e.push(t.id)}),t.deleteIDs=e}),(0,u.default)(r,f.SHOPPINGCART_DELETE_SELECT,function(t,e){t.deleteIDs.forEach(function(n,a,o){var r=t.shoppingList.map(function(t){return t.id}).indexOf(n);t.shoppingList.splice(r,1),(0,h.Toast)({message:e.error_msg,duration:3e3})})}),(0,u.default)(r,f.SHOPPINGCART_SELECT_ITEM,function(t,e){var n=(t.shoppingList.length,t.shoppingList.findIndex(function(t){return t.id===e}));n>-1&&(t.shoppingList[n].checked=!t.shoppingList[n].checked);var a=t.shoppingList.every(function(t,e){return t.checked});t.checkAll=a===!0;var o=t.shoppingList.some(function(t,e){return t.checked});t.buyBtnDisabled=o===!1,c.default.commit(f.SHOPPINGCART_DELETE_ARRAY),c.default.commit("CALCULATE_TOTAL_PRICE")}),(0,u.default)(r,f.CALCULATE_TOTAL_PRICE,function(t){var e=0;t.deleteIDs.forEach(function(n,a,o){var r=t.shoppingList.map(function(t){return t.id}).indexOf(n);e+=Number(t.shoppingList[r].payment)}),t.totalPrice=e}),(0,u.default)(r,f.SHOPPINGCART_SELECT_ALL,function(t){t.shoppingList.forEach(function(e){e.checked=!t.checkAll}),t.checkAll=!t.checkAll,c.default.commit(f.SHOPPINGCART_DELETE_ARRAY),c.default.commit("CALCULATE_TOTAL_PRICE"),t.buyBtnDisabled=t.checkAll===!1}),(0,u.default)(r,f.SHOPPINGCART_GET_LIST,function(t,e){e.cart_list.forEach(function(t,e,n){t.checked=!1}),t.shoppingList=t.shoppingList.concat(e.cart_list),t.hasMore=t.currentPage<d.Common.index2PageCount(e.total_index)==!0}),(0,u.default)(r,f.SHOPPINGCART_LIST_CURRENTPAGE,function(t){t.currentPage+=1,t.hasMore=!1}),(0,u.default)(r,f.SHOW_CHECKBOX,function(t){if(c.default.commit("TOP_RIGHT_CLICK_FONT",{afterFont:"完成"}),t.shoppingCartCheckbox){t.shoppingCartCheckbox=!1,t.priceShow={visibility:"visible"},t.buyBtnDisabled=!0,t.buyBtnCurrentFont=p.go,t.isDelete=!1;var e=t.shoppingList.some(function(t,e){return t.checked});t.buyBtnDisabled=e===!1}else t.shoppingCartCheckbox=!0,t.priceShow={visibility:"hidden"},t.buyBtnDisabled=!1,t.buyBtnCurrentFont=p.delete,t.isDelete=!0}),r);e.default={state:E,actions:T,getters:C,mutations:m}},33:function(t,e){},34:function(t,e){},35:function(t,e){t.exports={setting:{topTitle:"setting",share:"share friends",advice:"advice",changeLanguage:"change language",logout:"log out"}}},36:function(t,e){t.exports={setting:{topTitle:"设置",share:"告诉朋友",advice:"意见反馈",changeLanguage:"切换语言",logout:"退出登录"}}},37:function(t,e){t.exports=jQuery},38:function(t,e){t.exports=jWeixin},41:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),r=a(o),i=n(4),u=n(6);e.default={computed:(0,r.default)({setLeftHeader:function(){return{"header_left my_setting":""===this.$store.getters.getPageInfo.left,"header_left back":"back"===this.$store.getters.getPageInfo.left.className}},setRightHeader:function(){return{"header_right my_message":""===this.$store.getters.getPageInfo.right,"header_right hide":this.$store.getters.getPageInfo.right.hide===!0&&void 0===this.$store.getters.getPageInfo.right.userFont,"header_right font":this.$store.getters.getPageInfo.right.userFont===!0}},searchShow:function(){return{"search hide":""===this.$store.getters.getPageInfo.type,search:""!==this.$store.getters.getPageInfo.type}},setLeftHeaderUrl:function(){return""===this.$store.getters.getPageInfo.left?"#/setting":"javascript:void(0)"},setRightHeaderUrl:function(){return void 0===this.$store.getters.getPageInfo.right.userFont?"#/message":"javascript:void(0)"}},(0,u.mapGetters)({pageInfo:"getPageInfo",messageCount:"getMessageCount"})),methods:{leftHeader:function(t){"javascript:void(0)"===t.target.getAttribute("href")&&i.Common.goBack()},rightHeader:function(t){void 0!==this.$store.getters.getPageInfo.right.userFont&&this.$store.commit("SHOW_CHECKBOX")}}}},43:function(t,e){},47:function(t,e,n){var a,o;n(43),a=n(41);var r=n(48);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-62bcc10f",t.exports=a},48:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"center_header"},[n("a",{class:t.setLeftHeader,attrs:{href:t.setLeftHeaderUrl},on:{click:t.leftHeader}}),t._v(" "),n("h1",[t._v(t._s(t.pageInfo.headerTitle))]),t._v(" "),n("div",{class:t.searchShow},[n("input",{attrs:{type:"text",value:"搜索目的地"}})]),t._v(" "),n("a",{class:t.setRightHeader,attrs:{href:t.setRightHeaderUrl,"data-count":t.messageCount},on:{click:t.rightHeader}},[t._v(t._s(t.pageInfo.right.font))])])},staticRenderFns:[]}},55:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),r=a(o),i=n(4),u=n(6);e.default={props:["footerIndex"],mounted:function(){var t=this;document.querySelector("footer").children[0].children[t.footerIndex].children[0].classList.add("on"),i.Common.isLogin()&&this.$store.dispatch("getShoppingCartNum")},computed:(0,r.default)({},(0,u.mapGetters)({getShoppingCartNum:"getShoppingCartNum"}))}},65:function(t,e,n){var a,o;a=n(55);var r=n(66);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=a},66:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("ul",{staticClass:"clearfix"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",[n("a",{staticClass:"cart",attrs:{href:"shoppingCart.html","data-font":"购物车","data-count":t.getShoppingCartNum}})]),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"index.html","data-font":"首页"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"destination",attrs:{href:"destinationIndex.html","data-font":"目的地"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"my",attrs:{href:"center.html","data-font":"我的"}})])}]}},144:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),r=a(o),i=n(4),u=n(6),s=n(243),c=a(s),l=n(206),f=a(l),d=n(65),_=a(d);i.Vue.use(c.default,f.default),e.default={created:function(){this.$store.dispatch("setPageInfo",{headerTitle:"",type:"destinationIndex",left:{className:"back"},right:{hide:!0}}),this.$store.dispatch("getDestinationIndex")},components:{"common-footer":_.default},computed:(0,r.default)({},(0,u.mapGetters)({country:"getDestinationIndex"})),methods:{selectOn:function(t){var e=this.$refs.scrollViewLeft,n=this.$refs.scrollViewRight,a=t.target;(0,i.$)(a).addClass("on").siblings().removeClass("on"),e.scrollToElement(a,500);var o=(0,i.$)(a).data("id");(0,i.$)("#scroll_right li[data-id='"+o+"']").show().siblings().hide(),n.scrollTo(0,0,300,f.default.utils.ease.quadratic),n.refresh()}},updated:function(){var t=document.querySelector("header").clientHeight,e=document.querySelector(".footer").clientHeight;document.querySelector(".destination_index").style.height=window.lib.flexible.dpr*window.screen.height-(t+e)+"px",this.$refs.scrollViewLeft.refresh(),this.$refs.scrollViewRight.refresh()}}},196:function(t,e){},254:function(t,e,n){var a,o;a=n(144);var r=n(267);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=a},267:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container destination_index"},[n("section",{staticClass:"scroll_wrap flex"},[n("iscroll-view",{ref:"scrollViewLeft",attrs:{id:"scroll_left",options:{preventDefault:!1,disableMouse:!0,disablePointer:!0,disableTouch:!1}}},[n("ul",t._l(t.country,function(e,a){return n("li",{class:0===a?"on":"",attrs:{"data-id":e.id},on:{click:t.selectOn}},[t._v(t._s(e.country_name))])}),0)]),t._v(" "),n("iscroll-view",{ref:"scrollViewRight",staticClass:"flex_item",attrs:{id:"scroll_right",options:{preventDefault:!1,disableMouse:!0,disablePointer:!0,disableTouch:!1}}},[n("ul",t._l(t.country,function(e,a){return n("li",{staticClass:"clearfix",attrs:{"data-id":e.id,pindex:a}},t._l(e.city_list,function(e,a){return n("a",{attrs:{href:"","data-pindex":t.pindex,cindex:a,index:a}},[n("div",{staticClass:"img_wrap",attrs:{"data-cindex":t.cindex}},[n("div",{staticClass:"bg"}),t._v(" "),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.app_image,expression:"city.app_image"}],staticClass:"img_lazyload",attrs:{src:"",lazy:"loading"}}),t._v(" "),n("div",{staticClass:"font"},[n("h3",{staticClass:"ellipsis"},[t._v(t._s(e.city_name))]),t._v(" "),n("h4",{staticClass:"ellipsis"},[t._v(t._s(e.title))])])])])}),0)}),0)])],1),t._v(" "),n("common-footer",{attrs:{footerIndex:"1"}})],1)},staticRenderFns:[]}}});