(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],l=0,h=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b3192649"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app-bar",{attrs:{app:""}},[a("v-app",{attrs:{id:"inspire"}},[a("v-autocomplete",{staticClass:"mx-4",attrs:{loading:t.loading,items:t.items,"search-input":t.search,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",label:"Word in the title of films","solo-inverted":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)],1),a("div",[a("v-card",{staticClass:"mx-auto"},[a("v-row",{attrs:{dense:""}},t._l(t.courses,(function(e,n){return a("v-col",{key:n,attrs:{cols:12,cm:"6",md:"4",lg:"3",xl:"3"}},[a("v-card",[a("a",{attrs:{href:t.otherSite(e.imdbID)}},[a("img",{staticClass:"imgInCard",attrs:{src:e.Poster}}),a("div",{staticClass:"textInCard"},[a("p",{staticClass:"titleInCard"},[t._v(" "+t._s(e.Title)+" ")]),a("p",[t._v("Year: "+t._s(e.Year))]),a("p",[t._v("ID: "+t._s(e.imdbID))])])])])],1)})),1)],1)],1)],1)},o=[],s=(a("4de4"),a("c975"),a("ce5b")),i=a.n(s),c=a("62c3"),u=a.n(c),l={vuetify:new i.a,name:"App",data:function(){return{courses:null,loading:!1,items:[],search:null,select:null,states:["word","letter","number","person","pen","class","people","sound","water","side","place","man","woman","boy","Hawaii","girl","year","day","week","month","name","line","air","land","home","hand","house","picture","Mississippi","animal","mother","father","brother","sister","new","world","New York","head","north","page","country","question","answer","school","plant","Puerto Rico","sun","state","city","Tennessee","Texas","south","east","child","west","Washington","vacation","Wisconsin","Wyoming","valley"]}},watch:{search:function(t){var e=this;t&&t!==this.select&&this.querySelections(t),t==this.select&&u.a.get("http://www.omdbapi.com/?apikey=e9a2816f&s="+t).then((function(t){return e.courses=t.data.Search}))}},methods:{querySelections:function(t){var e=this;this.loading=!0,setTimeout((function(){e.items=e.states.filter((function(e){return(e||"").toLowerCase().indexOf((t||"").toLowerCase())>-1})),e.loading=!1}),500)},otherSite:function(t){return"https://www.imdb.com/title/"+t+"/"}},mounted:function(){var t=this;u.a.get('http://www.omdbapi.com/?apikey=e9a2816f&s="Love"').then((function(e){return t.courses=e.data.Search}))}},f=l,h=(a("034f"),a("2877")),p=a("6544"),d=a.n(p),m=a("7496"),v=a("40dc"),b=a("c6a6"),y=a("b0af"),g=a("62ad"),w=a("0fd9"),x=Object(h["a"])(f,r,o,!1,null,null,null),_=x.exports;d()(x,{VApp:m["a"],VAppBar:v["a"],VAutocomplete:b["a"],VCard:y["a"],VCol:g["a"],VRow:w["a"]});a("d3b7");var C=a("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},k=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},V=[],S={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},P=S,T=a("a523"),W=a("adda"),A=Object(h["a"])(P,O,V,!1,null,null,null),I=A.exports;d()(A,{VCol:g["a"],VContainer:T["a"],VImg:W["a"],VRow:w["a"]});var E={name:"Home",components:{HelloWorld:I}},L=E,q=Object(h["a"])(L,j,k,!1,null,null,null),H=q.exports;n["default"].use(C["a"]);var M=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],D=new C["a"]({routes:M}),Y=D,$=a("f309");n["default"].use($["a"]);var N=new $["a"]({});n["default"].config.productionTip=!1,new n["default"]({router:Y,vuetify:N,render:function(t){return t(_)}}).$mount("#app")},"85ec":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.2be9e9bf.js.map