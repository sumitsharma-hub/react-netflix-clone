(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},47:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),a=n.n(o),i=n(18),r=n.n(i),s=(n(28),n(29),n(4)),l=n(5),u=n.n(l),d=n(6),b=n(7),h=n.n(b),v=(n(47),n(19)),f=n(22),j=n.n(f);var p=function(e){var t=e.title,n=e.fetchUrl,i=e.islargeRow;Object(o.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.get("https://api.themoviedb.org/3".concat(n)).then((function(e){f(e.data.results)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);var r=Object(o.useState)([]),l=Object(s.a)(r,2),b=l[0],f=l[1],p=Object(o.useState)(""),g=Object(s.a)(p,2),m=g[0],O=g[1];return console.log(b),Object(c.jsx)(a.a.Fragment,{children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("div",{className:"row_posters",children:b.map((function(e){return Object(c.jsx)("img",{onClick:function(){return function(e){m?O(""):j()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);O(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(i&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(i?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),m&&Object(c.jsx)(v.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})})},g="6ee35b76c65a0b39518780dcfb07bcf7",m={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginal:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentryMovies:"/discover/movie?api_key=".concat(g,"&with_genres=99")};n(63);var O=function(){Object(o.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.get("https://api.themoviedb.org/3/discover/tv?api_key=6ee35b76c65a0b39518780dcfb07bcf7&with_networks=213").then((function(e){return r(e.data.results[Math.floor(Math.random()*e.data.results.length-1)])})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var e,t,n=Object(o.useState)([]),a=Object(s.a)(n,2),i=a[0],r=a[1];return console.log(i),Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(c.jsxs)("div",{className:"banner_contents",children:[Object(c.jsx)("h1",{className:"banner_title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(c.jsxs)("div",{className:"banner_buttons",children:[Object(c.jsx)("button",{className:"banner_button",children:"play"}),Object(c.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(c.jsx)("h1",{className:"banner_description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substring(0,t-1)+"...":e)})]}),Object(c.jsx)("div",{className:"banner_fadebottom"})]})},_=(n(64),n.p+"static/media/Netflix_Logo.f4070143.png");var w=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(c.jsx)("div",{className:" nav ".concat(n&&"nav_black"),children:Object(c.jsx)("img",{className:"nav_logo",src:"".concat(_),alt:"netflixlogo"})})};var x=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(w,{}),Object(c.jsx)(O,{}),Object(c.jsx)(p,{title:"Netflix original",fetchUrl:m.fetchNetflixOriginal,islargeRow:!0}),Object(c.jsx)(p,{title:"Top trending",fetchUrl:m.fetchTrending}),Object(c.jsx)(p,{title:"ActionMovies",fetchUrl:m.fetchActionMovies})]})};r.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.3b1e87eb.chunk.js.map