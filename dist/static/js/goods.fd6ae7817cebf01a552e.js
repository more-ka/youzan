webpackJsonp([1],{"/3Rh":function(t,e,a){"use strict";var n=a("Zrlr"),s=a.n(n),r=a("wxAW"),i=a.n(r),o=a("TFhR"),u=a("//Fk"),c=a.n(u),d=a("mtWM"),l=a.n(d);var f=function(t,e,a){return new c.a(function(n,s){l()({method:t,url:e,data:a}).then(function(t){200<=t.data.status<=300&&n(t),s(t)}).catch(function(t){s(t)})})},h=function(){function t(){s()(this,t)}return i()(t,null,[{key:"getHomePage",value:function(){return f("get",o.a.homepage)}},{key:"getBanner",value:function(){return f("get",o.a.banner)}},{key:"getSearch",value:function(t){return f("get",o.a.search,t)}},{key:"getTopList",value:function(){return f("get",o.a.topList)}},{key:"getRank",value:function(){return f("get",o.a.rank)}},{key:"getSubList",value:function(){return f("get",o.a.subList)}},{key:"getDetails",value:function(){return f("get",o.a.details)}},{key:"getDeal",value:function(){return f("get",o.a.deal)}},{key:"addCart",value:function(t){return f("post",o.a.cartAdd,t)}},{key:"getCartList",value:function(){return f("get",o.a.cartList)}},{key:"add",value:function(t){return f("post",o.a.cartAdd,{id:t,number:1})}},{key:"reduce",value:function(t){return f("post",o.a.cartReduce,{id:t,number:1})}},{key:"removeList",value:function(t){return f("post",o.a.cartRemove,{ids:t})}},{key:"addressList",value:function(){return f("get",o.a.addressList)}},{key:"addressAdd",value:function(t){return f("post",o.a.addressAdd,t)}},{key:"addressRemove",value:function(t){return f("post",o.a.addressRemove,t)}},{key:"addressUpdate",value:function(t){return f("post",o.a.addressUpdate,t)}},{key:"addressSetDef",value:function(t){return f("post",o.a.addressSetDefault,t)}}]),t}();e.a=h},AeEs:function(t,e){},AnIW:function(t,e){},"Do/K":function(t,e){},HFfA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("JWK+"),s=(a.n(n),a("pI1A")),r=(a.n(s),a("AeEs")),i=(a.n(r),a("AnIW")),o=(a.n(i),a("d7BR")),u=(a.n(o),a("Do/K")),c=(a.n(u),a("7+uW")),d=a("U/rD"),l=a("mw3O"),f=a.n(l),h=a("gN+L"),p=a("/3Rh"),v=f.a.parse(location.search.substr(1)).id;new c.default({el:"#app",data:{id:v,details:null,detalTab:["商品详情","本店成交"],tabIndex:0,deals:null,bannerList:null,sku:0,skuPop:!1,skuNum:1,isAddCart:!1,addCartMsg:!1},methods:{getDetails:function(){var t=this;p.a.getDetails().then(function(e){t.details=e.data.data,t.bannerList=[],t.details.imgs.forEach(function(e){t.bannerList.push({clickUrl:"",img:e})})})},changeTab:function(t){this.tabIndex=t,this.tabIndex&&!this.deals&&this.getDeal()},getDeal:function(){var t=this;p.a.getDeal().then(function(e){t.deals=e.data.data.lists})},skuShow:function(t){this.sku=t,this.skuPop=!0},skuClose:function(){this.skuPop=!1},changeNum:function(t){t<0&&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;p.a.addCart({id:v,number:this.skuNum}).then(function(e){200===e.data.status&&(t.isAddCart=!0,t.skuPop=!1),t.addCartMsg=!0,setInterval(function(){t.addCartMsg=!1},1500)})}},created:function(){this.getDetails()},components:{swipe:h.a},mixins:[d.a],watch:{skuPop:function(t,e){document.body.style.overflow=t?"hidden":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.body.style.height=t?"100%":"auto",document.querySelector("html").style.height=t?"100%":"auto"}}})},IVVV:function(t,e){},"JWK+":function(t,e){},TFhR:function(t,e,a){"use strict";var n={homepage:"/index/hotList",banner:"/index/banner",topList:"/category/topList",rank:"/category/rank",subList:"/category/subList",search:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartUpdate:"/cart/update",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressList:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDe"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058"+n[s]);e.a=n},"U/rD":function(t,e,a){"use strict";var n={filters:{formatPrice:function(t){if(!new RegExp(/[\.]/).test(t))return t+".00";var e=t+"",a=e.split(".")[0],n=e.split(".")[1];return 2===n.length?a+"."+n:1===n.length?a+"."+n+"0":void 0}},components:{Foot:a("nq5D").a}};e.a=n},d7BR:function(t,e){},eUGE:function(t,e){},"gN+L":function(t,e,a){"use strict";var n=a("DNVT"),s=(a("v2ns"),{name:"Swipe",props:{lists:{type:Array,required:!0}},mounted:function(){new n.a(".swiper-container",{autoplay:!0,loop:!0,pagination:{el:".swiper-pagination"}})}}),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow"},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),this._v(" "),e("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var i=a("VU/8")(s,r,!1,function(t){a("IVVV")},"data-v-a6fc583e",null);e.a=i.exports},nq5D:function(t,e,a){"use strict";var n=a("mw3O"),s=a.n(n).a.parse(location.search.substr(1)).index,r=[{name:"有赞",href:"index.html",icon:"icon-home"},{name:"分类",href:"category.html",icon:"icon-category"},{name:"购物车",href:"cart.html",icon:"icon-cart"},{name:"我",href:"member.html",icon:"icon-user"}],i={name:"Foot",data:function(){return{navConfig:r,currentIndex:parseInt(s)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Foot"},[a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{class:{active:n===t.currentIndex},on:{click:function(a){return t.changeNav(e,n)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}),0)])])},staticRenderFns:[]};var u=a("VU/8")(i,o,!1,function(t){a("eUGE")},"data-v-6293609a",null);e.a=u.exports},pI1A:function(t,e){},v2ns:function(t,e){}},["HFfA"]);
//# sourceMappingURL=goods.fd6ae7817cebf01a552e.js.map