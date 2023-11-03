"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[713],{996:function(n,e,t){t.d(e,{e:function(){return T}});var r,a,c,i,u,s,o,p=t(861),f=t(439),l=t(757),d=t.n(l),h=t(87),x=t(689),m=t(168),v=t(867),g=v.ZP.div(r||(r=(0,m.Z)(["\n  border-radius: 2px;\n  overflow: hidden;\n  padding-top: ",";\n"])),(function(n){return n.theme.spacing(4)})),Z=v.ZP.p(a||(a=(0,m.Z)(["\n  text-align: center;\n  font-size: 20px;\n  padding: ",";\n  transition: font-size 300ms;\n"])),(function(n){return n.theme.spacing(1)})),b=(0,v.ZP)(h.rU)(c||(c=(0,m.Z)(["\n  text-decoration: none;\n  color: ",";\n  transition: color 300ms;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.red})),w=v.ZP.div(i||(i=(0,m.Z)(["\n  text-align: center;\n  transition: transform 300ms;\n  &:hover,\n  &:focus {\n    transform: scale(1.02);\n  }\n"]))),k=t(184),y=function(n){var e=n.film,t=e.title,r=e.id,a=e.poster_path,c=(0,x.TH)();return(0,k.jsx)("div",{children:(0,k.jsx)(b,{to:"/movies/".concat(r),state:{from:c},children:(0,k.jsxs)(g,{children:[(0,k.jsx)(w,{children:(0,k.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w200".concat(a):"https://via.placeholder.com/200x300",alt:"Movie poster"})}),(0,k.jsx)(Z,{children:t})]})})})},j=t(791),_=t(390),P=v.ZP.span(u||(u=(0,m.Z)(["\n  text-transform: capitalize;\n  color: ",";\n  font-size: 24px;\n"])),(function(n){return n.theme.colors.red})),z=v.ZP.li(s||(s=(0,m.Z)(["\n  list-style: none;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),S=v.ZP.ul(o||(o=(0,m.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),T=function(){var n,e=(0,j.useState)(!1),t=(0,f.Z)(e,2),r=t[0],a=t[1],c=(0,j.useState)(null),i=(0,f.Z)(c,2),u=i[0],s=i[1],o=(0,h.lr)(),l=(0,f.Z)(o,1)[0],m=(0,j.useState)([]),v=(0,f.Z)(m,2),g=v[0],Z=v[1],b=null!==(n=l.get("query"))&&void 0!==n?n:"",w=(0,x.TH)();return(0,j.useEffect)((function(){var n=function(){var n=(0,p.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,""!==b||"/"===w.pathname){n.next=3;break}return n.abrupt("return");case 3:if(e=[],a(!0),s(null),"/"!==w.pathname){n.next=12;break}return n.next=9,(0,_.JS)();case 9:e=n.sent,n.next=15;break;case 12:return n.next=14,(0,_.z1)(b);case 14:e=n.sent;case 15:Z(e.results),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),s(n.t0);case 21:return n.prev=21,a(!1),n.finish(21);case 24:case"end":return n.stop()}}),n,null,[[0,18,21,24]])})));return function(){return n.apply(this,arguments)}}();n()}),[b,w]),(0,k.jsxs)("section",{children:[g.length>0?"/"===w.pathname?(0,k.jsx)("h1",{children:"The most trending films of the day!"}):(0,k.jsxs)("h1",{children:["Here we are! Films for your request: ",(0,k.jsx)(P,{children:b})]}):null,(0,k.jsx)(S,{children:g.map((function(n){return(0,k.jsx)(z,{children:(0,k.jsx)(y,{film:n})},n.id)}))}),r&&(0,k.jsx)("div",{children:"LOADING..."}),u&&(0,k.jsxs)("div",{children:["Something went wrong.. ",u.message,". Please, reload the page!"]})]})}},713:function(n,e,t){t.r(e),t.d(e,{default:function(){return c}});var r=t(996),a=t(184);function c(){return(0,a.jsx)("main",{children:(0,a.jsx)(r.e,{})})}},390:function(n,e,t){t.d(e,{JS:function(){return s},TP:function(){return o},tb:function(){return l},yj:function(){return f},z1:function(){return p}});var r=t(861),a=t(757),c=t.n(a),i=t(243),u="f6d968bc9808c07e077eb94ac6b79371";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=713.11485958.chunk.js.map