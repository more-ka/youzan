webpackJsonp([4],{"/3Rh":function(t,e,n){"use strict";var i=n("Zrlr"),r=n.n(i),o=n("wxAW"),a=n.n(o),s=n("TFhR"),c=n("//Fk"),u=n.n(c),d=n("mtWM"),h=n.n(d);var f=function(t,e,n){return new u.a(function(i,r){h()({method:t,url:e,data:n}).then(function(t){200<=t.data.status<=300&&i(t),r(t)}).catch(function(t){r(t)})})},l=function(){function t(){r()(this,t)}return a()(t,null,[{key:"getHomePage",value:function(){return f("get",s.a.homepage)}},{key:"getBanner",value:function(){return f("get",s.a.banner)}},{key:"getSearch",value:function(t){return f("get",s.a.search,t)}},{key:"getTopList",value:function(){return f("get",s.a.topList)}},{key:"getRank",value:function(){return f("get",s.a.rank)}},{key:"getSubList",value:function(){return f("get",s.a.subList)}},{key:"getDetails",value:function(){return f("get",s.a.details)}},{key:"getDeal",value:function(){return f("get",s.a.deal)}},{key:"addCart",value:function(t){return f("post",s.a.cartAdd,t)}},{key:"getCartList",value:function(){return f("get",s.a.cartList)}},{key:"add",value:function(t){return f("post",s.a.cartAdd,{id:t,number:1})}},{key:"reduce",value:function(t){return f("post",s.a.cartReduce,{id:t,number:1})}},{key:"removeList",value:function(t){return f("post",s.a.cartRemove,{ids:t})}},{key:"addressList",value:function(){return f("get",s.a.addressList)}},{key:"addressAdd",value:function(t){return f("post",s.a.addressAdd,t)}},{key:"addressRemove",value:function(t){return f("post",s.a.addressRemove,t)}},{key:"addressUpdate",value:function(t){return f("post",s.a.addressUpdate,t)}},{key:"addressSetDef",value:function(t){return f("post",s.a.addressSetDefault,t)}}]),t}();e.a=l},"0C+S":function(t,e){},NW8W:function(t,e){},TFhR:function(t,e,n){"use strict";var i={homepage:"/index/hotList",banner:"/index/banner",topList:"/category/topList",rank:"/category/rank",subList:"/category/subList",search:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartUpdate:"/cart/update",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressList:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDe"};for(var r in i)i.hasOwnProperty(r)&&(i[r]="https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan"+i[r]);e.a=i},"U/rD":function(t,e,n){"use strict";var i={filters:{formatPrice:function(t){if(!new RegExp(/[\.]/).test(t))return t+".00";var e=t+"",n=e.split(".")[0],i=e.split(".")[1];return 2===i.length?n+"."+i:1===i.length?n+"."+i+"0":void 0}},components:{Foot:n("nq5D").a}};e.a=i},eC21:function(t,e){},eUGE:function(t,e){},gWPi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("NW8W"),r=(n.n(i),n("0C+S")),o=(n.n(r),n("eC21")),a=(n.n(o),n("7+uW")),s=n("U/rD"),c=n("9qgI"),u=n.n(c),d=n("/3Rh");new a.default({el:".container",data:{cartList:null,total:0,editingShop:null,editingShopIndex:-1,removePopup:!1,removeData:null,removeMsg:"",ids:null,clear:!1},methods:{getCartList:function(){var t=this;d.a.getCartList().then(function(e){var n=e.data.cartList;n.forEach(function(t){t.checked=!0,t.removeChecked=!1,t.editing=!1,t.editingMsg="编辑",t.goodsList.forEach(function(t){t.checked=!0,t.removeChecked=!1})}),t.cartList=n})},selectGood:function(t,e){var n=this.editingShop?"removeChecked":"checked";e[n]=!e[n],t[n]=t.goodsList.every(function(t){return t[n]})},selectShop:function(t){var e=this.editingShop?"removeChecked":"checked";t[e]=!t[e],t.goodsList.forEach(function(n){n[e]=t[e]})},selectAll:function(){var t=this.editingShop?"allRemoveSelected":"allSelected";this[t]=!this[t]},edit:function(t,e){t.editing=!t.editing,t.editingMsg=t.editing?"完成":"编辑",this.cartList.forEach(function(n,i){i!==e&&(n.editing=!1,n.editingMsg=t.editing?"":"编辑")}),this.editingShop=t.editing?t:null,this.editingShopIndex=t.editing?e:-1},add:function(t){d.a.add(t.id).then(function(e){t.number+=1})},reduce:function(t){1!==t.number&&d.a.reduce(t.id).then(function(e){t.number-=1})},remove:function(t,e){this.removeMsg="确定删除该商品么？",this.removePopup=!0,t.removeChecked=!0},removeMore:function(){this.removeMsg="确定删除这"+this.ids.length+"个商品么？",this.removePopup=!0},removeConfirm:function(){this.removePopup=!1,this.removeList()},removeList:function(){var t=this,e=this.ids;d.a.removeList(e).then(function(e){for(var n=function(e){t.cartList.forEach(function(n,i){n.goodsList.forEach(function(r,o){t.ids[e]===r.id&&(n.goodsList.splice(o,1),r.startX="0px",r.endX="0px"),n.goodsList.length||t.cartList.splice(i,1)}),t.cartList.length?t.removeShop():(t.total=0,t.clear=!0)})},i=0;i<t.ids.length;i++)n(i)})},removeShop:function(){this.editingShop=null,this.editingShopIndex=-1,this.cartList.forEach(function(t){t.editing=!1,t.editingMsg="编辑"})},touchStart:function(t,e){e.startX=t.changedTouches[0].clientX},touchEnd:function(t,e,n,i){var r=t.changedTouches[0].clientX;n.endX=r;var o="0";n.startX-r>100&&(o="-60px",this.editingShop=!0,n.removeChecked=!0),r-n.startX>100&&(o="0px",this.editingShop=!1,n.removeChecked=!1),this.toLeft(this.$refs["goods-"+e+"-"+i],o,300)},toLeft:function(t,e,n){u()(t,{left:e},{duration:n})}},computed:{allSelected:{get:function(){return!(!this.cartList||!this.cartList.length)&&this.cartList.every(function(t){return t.checked})},set:function(t){this.cartList.forEach(function(e){e.checked=t,e.goodsList.forEach(function(e){e.checked=t})})}},allRemoveSelected:{get:function(){return!!(this.editingShop&&this.cartList&&this.cartList.length)&&this.cartList.every(function(t){return t.removeChecked})},set:function(t){this.editingShop&&this.cartList.forEach(function(e){e.removeChecked=t,e.goodsList.forEach(function(e){e.removeChecked=t})})}},getSelectList:function(){var t=[],e=0;return this.cartList&&this.cartList.length?(this.cartList.forEach(function(n){n.goodsList.forEach(function(n){n.checked&&(t.push(n),e+=n.price*n.number)})}),this.total=e,t):[]},getRemoveList:function(){var t=this;if(this.editingShop){var e=[];this.cartList.forEach(function(t){t.goodsList.forEach(function(t){t.removeChecked&&e.push(t)})});var n=[];return e.forEach(function(e){n.push(e.id),t.ids=n}),e}return[]}},beforeMount:function(){this.getCartList()},mixins:[s.a]})},nq5D:function(t,e,n){"use strict";var i=n("mw3O"),r=n.n(i).a.parse(location.search.substr(1)).index,o=[{name:"有赞",href:"index.html",icon:"icon-home"},{name:"分类",href:"category.html",icon:"icon-category"},{name:"购物车",href:"cart.html",icon:"icon-cart"},{name:"我",href:"member.html",icon:"icon-user"}],a={name:"Foot",data:function(){return{navConfig:o,currentIndex:parseInt(r)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Foot"},[n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,i){return n("li",{class:{active:i===t.currentIndex},on:{click:function(n){return t.changeNav(e,i)}}},[n("a",[n("i",{class:e.icon}),t._v(" "),n("div",[t._v(t._s(e.name))])])])}),0)])])},staticRenderFns:[]};var c=n("VU/8")(a,s,!1,function(t){n("eUGE")},"data-v-6293609a",null);e.a=c.exports}},["gWPi"]);
//# sourceMappingURL=cart.6aada52cc17c03eba92a.js.map