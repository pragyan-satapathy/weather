(function(e){function t(t){for(var a,i,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-img",{staticStyle:{height:"100vh"},attrs:{src:e.background_cover}},[r("v-main",[r("HelloWorld")],1)],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"grid-list-md":"","text-center":""}},[r("v-layout",[r("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}}),r("v-flex",{attrs:{"ma-5":""}},[r("v-text-field",{attrs:{dark:"",outlined:"",label:"City/District name","append-icon":"fa fa-search",color:"white"},on:{"click:append":function(t){return e.$store.dispatch("fetchWeather",{city:e.city})},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$store.dispatch("fetchWeather",{city:e.city})}},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1)],1),e.isContainerVisible?r("v-container",{attrs:{"white--text":"","font-weight-bold":""}},[e._v(" "+e._s(e.location)+", "+e._s(e.country)+" "),r("br"),r("br"),r("v-container",{attrs:{"display-4":"","font-weight-medium":""}},[e._v(" "+e._s(Math.round(e.curr_temp))+"°C ")]),r("v-container",{attrs:{"display-2":"","font-weight-medium":""}},[e._v(" "+e._s(e.weather)+" ")]),r("br"),r("br"),e._v(" "+e._s(e.day)+", "+e._s(e.date)+" "),r("br"),r("br")],1):e._e()],1)},s=[],u=r("2f62");a["a"].use(u["a"]);var c=new u["a"].Store({state:{weather_api:{}},mutations:{setWeather_api(e,t){e.weather_api=t,console.log(">>>>>>>>>>>>>>>>>",e.weather_api)}},actions:{fetchWeather(e,t){var a=r("bc3a"),n="";const o="41a1e54eb2350be2f840ddd2536d4052";var i={method:"get",url:"https://api.openweathermap.org/data/2.5/weather?q="+t.city+"&units=metric&appid="+o,headers:{},data:n};a(i).then((function(t){e.commit("setWeather_api",JSON.parse(JSON.stringify(t.data)))})).catch((function(e){console.log(e)}))}},modules:{},getters:{curr_temp(e){if(e.weather_api.main&&e.weather_api.main.temp)return e.weather_api.main.temp},location(e){if(e.weather_api.name)return e.weather_api.name},country(e){if(e.weather_api.sys&&e.weather_api.sys.country)return e.weather_api.sys.country},weather(e){if(e.weather_api.weather)return e.weather_api.weather[0].main}}}),p={name:"HelloWorld",data:()=>({city:"",today:new Date}),computed:{day(){var e=new Array(7);return e[0]="Sunday",e[1]="Monday",e[2]="Tuesday",e[3]="Wednesday",e[4]="Thursday",e[5]="Friday",e[6]="Saturday",e[this.today.getDay()]},date(){return this.today.getDate()+"/"+(this.today.getMonth()+1)+"/"+this.today.getFullYear()},curr_temp(){return c.getters.curr_temp},max_temp(){return c.getters.max_temp},min_temp(){return c.getters.min_temp},location(){return c.getters.location},country(){return c.getters.country},isContainerVisible(){return void 0!==c.state.weather_api&&c.state.weather_api!=={}&&c.state.weather_api.name},weather(){return c.getters.weather}}},l=p,f=r("2877"),h=r("6544"),d=r.n(h),m=r("a523"),g=r("0e8f"),w=r("a722"),y=r("8654"),_=Object(f["a"])(l,i,s,!1,null,"baa4fa8a",null),v=_.exports;d()(_,{VContainer:m["a"],VFlex:g["a"],VLayout:w["a"],VTextField:y["a"]});var b=r("cf05"),x=r.n(b),O={name:"App",components:{HelloWorld:v},data:()=>({}),computed:{background_cover(){if(c.getters.weather){if("thunderstorm"==c.getters.weather.toLowerCase())return"https://i.gifer.com/9z9V.gif";if("haze"==c.getters.weather.toLowerCase())return"https://i.gifer.com/2ZJu.gif";if("drizzle"==c.getters.weather.toLowerCase())return"https://j.gifs.com/v1PopA.gif";if("rain"==c.getters.weather.toLowerCase())return"https://gifimage.net/wp-content/uploads/2018/10/anime-rain-gif-loop-7.gif";if("snow"==c.getters.weather.toLowerCase())return"https://songbook1.files.wordpress.com/2016/12/snowfall-on-christmas-tree-blue-1.gif";if("clouds"==c.getters.weather.toLowerCase())return"https://i.gifer.com/bEt.gif";if("tornado"==c.getters.weather.toLowerCase())return"https://i.gifer.com/2QhR.gif";if("hurricane"==c.getters.weather.toLowerCase())return"https://i.gifer.com/2QhR.gif"}return x.a}}},k=O,j=r("7496"),C=r("adda"),S=r("f6c4"),V=Object(f["a"])(k,n,o,!1,null,null,null),L=V.exports;d()(V,{VApp:j["a"],VImg:C["a"],VMain:S["a"]});var W=r("f309");a["a"].use(W["a"]);var M=new W["a"]({});a["a"].config.productionTip=!1,new a["a"]({store:c,vuetify:M,render:function(e){return e(L)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.51f649b2.png"}});
//# sourceMappingURL=app.8b10f0bb.js.map