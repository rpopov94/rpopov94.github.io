(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5,6],{952:function(t,e,r){"use strict";r.r(e);r(306);var n={props:{item:Object}},l=r(69),component=Object(l.a)(n,(function(){var t,e,r=this,n=r._self._c;return n("div",{staticClass:"mb-2"},[n("b-card",{staticClass:"h-100",staticStyle:{"min-height":"200px","max-width":"400px"},attrs:{"img-src":"/images/"+r.item.image,"img-alt":"Image","img-top":"",tag:"article"}},[r.item&&null!==(t=r.item)&&void 0!==t&&t.link?n("b-card-text",[n("b-link",{staticClass:"title",attrs:{href:null===(e=r.item)||void 0===e?void 0:e.link}},[r._v("\n        "+r._s(r.item.layout)+"\n      ")])],1):n("b-card-text",[n("b-link",{staticClass:"title",attrs:{to:r.item.path}},[r._v("\n        "+r._s(r.item.layout)+"\n      ")])],1),r._v(" "),n("b-card-text",[r._v("\n      "+r._s(r.item.abstract)+"\n    ")])],1)],1)}),[],!1,null,"23d0ca36",null);e.default=component.exports},956:function(t,e,r){"use strict";r.r(e);var n={props:{title:String,items:Array}},l=r(69),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"mb-5 text-center"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("hr"),t._v(" "),e("b-row",t._l(t.items,(function(t,r){return e("b-col",{key:r,attrs:{md:"4"}},[e("item",{attrs:{item:t}})],1)})),1)],1)}),[],!1,null,"003e26b1",null);e.default=component.exports;installComponents(component,{Item:r(952).default})},988:function(t,e,r){"use strict";r.r(e);var n=r(24),l=(r(82),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("articles/fetchArticles");case 3:case"end":return e.stop()}}),e)})))()},computed:{articles:function(){return this.$store.state.articles.articles}}}),c=r(69),component=Object(c.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"mt-5"},[t("items-cloud",{attrs:{title:"Articles",items:this.articles}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemsCloud:r(956).default})}}]);