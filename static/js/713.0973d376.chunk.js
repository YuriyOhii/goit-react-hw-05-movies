"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[713],{996:function(n,e,t){t.d(e,{e:function(){return _}});var r,a,c,i,o,s,u,p,f=t(439),l=t(87),d=t(689),h=t(168),x=t(867),m=x.ZP.div(r||(r=(0,h.Z)(["\n  border-radius: 2px;\n  overflow: hidden;\n  padding-top: ",";\n"])),(function(n){return n.theme.spacing(4)})),v=x.ZP.p(a||(a=(0,h.Z)(["\n  text-align: center;\n  font-size: 20px;\n  padding: ",";\n  transition: font-size 300ms;\n"])),(function(n){return n.theme.spacing(1)})),g=(0,x.ZP)(l.rU)(c||(c=(0,h.Z)(["\n  text-decoration: none;\n  color: ",";\n  transition: color 300ms;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.red})),Z=x.ZP.div(i||(i=(0,h.Z)(["\n  text-align: center;\n  transition: transform 300ms;\n  &:hover,\n  &:focus {\n    transform: scale(1.02);\n  }\n"]))),w=t(184),b=function(n){var e=n.film,t=e.title,r=e.id,a=e.poster_path,c=(0,d.TH)();return(0,w.jsx)("div",{children:(0,w.jsx)(g,{to:"/movies/".concat(r),state:{from:c},children:(0,w.jsxs)(m,{children:[(0,w.jsx)(Z,{children:(0,w.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w200".concat(a):"https://via.placeholder.com/200x300",alt:"Movie poster"})}),(0,w.jsx)(v,{children:t})]})})})},y=x.ZP.span(o||(o=(0,h.Z)(["\n  text-transform: capitalize;\n  color: ",";\n  font-size: 24px;\n"])),(function(n){return n.theme.colors.red})),j=x.ZP.li(s||(s=(0,h.Z)(["\n  list-style: none;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),k=x.ZP.ul(u||(u=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),P=x.ZP.h1(p||(p=(0,h.Z)(["\n  text-align: center;\n  font-size: 30px;\n"]))),_=function(n){var e,t=n.movies,r=(0,l.lr)(),a=null!==(e=(0,f.Z)(r,1)[0].get("query"))&&void 0!==e?e:"",c=(0,d.TH)();return(0,w.jsxs)("section",{children:[t.length>0?"/"===c.pathname?(0,w.jsx)(P,{children:"The most trending films of the day!"}):(0,w.jsxs)(P,{children:["Here we are! Films for your request: ",(0,w.jsx)(y,{children:a})]}):null,(0,w.jsx)(k,{children:t.map((function(n){return(0,w.jsx)(j,{children:(0,w.jsx)(b,{film:n})},n.id)}))})]})}},713:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(861),a=t(439),c=t(757),i=t.n(c),o=t(791),s=t(219),u=t(996),p=t(390),f=t(184);function l(){var n=(0,o.useState)(!1),e=(0,a.Z)(n,2),t=e[0],c=e[1],l=(0,o.useState)(null),d=(0,a.Z)(l,2),h=d[0],x=d[1],m=(0,o.useState)([]),v=(0,a.Z)(m,2),g=v[0],Z=v[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),x(null),n.next=5,(0,p.JS)();case 5:e=n.sent,Z(e.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),x(n.t0);case 12:return n.prev=12,c(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)(u.e,{movies:g}),t&&(0,f.jsx)(s.a,{}),h&&(0,f.jsxs)("div",{children:["Something went wrong.. ",h.message,". Please, reload the page!"]})]})}},390:function(n,e,t){t.d(e,{JS:function(){return s},TP:function(){return u},tb:function(){return l},yj:function(){return f},z1:function(){return p}});var r=t(861),a=t(757),c=t.n(a),i=t(243),o="f6d968bc9808c07e077eb94ac6b79371";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=713.0973d376.chunk.js.map