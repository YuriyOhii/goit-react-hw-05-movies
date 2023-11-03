"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{996:function(n,e,t){t.d(e,{e:function(){return T}});var r,a,c,i,u,s,o,p,f=t(861),l=t(439),d=t(757),x=t.n(d),h=t(87),m=t(689),v=t(168),g=t(867),Z=g.ZP.div(r||(r=(0,v.Z)(["\n  border-radius: 2px;\n  overflow: hidden;\n  padding-top: ",";\n"])),(function(n){return n.theme.spacing(4)})),b=g.ZP.p(a||(a=(0,v.Z)(["\n  text-align: center;\n  font-size: 20px;\n  padding: ",";\n  transition: font-size 300ms;\n"])),(function(n){return n.theme.spacing(1)})),y=(0,g.ZP)(h.rU)(c||(c=(0,v.Z)(["\n  text-decoration: none;\n  color: ",";\n  transition: color 300ms;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.red})),w=g.ZP.div(i||(i=(0,v.Z)(["\n  text-align: center;\n  transition: transform 300ms;\n  &:hover,\n  &:focus {\n    transform: scale(1.02);\n  }\n"]))),j=t(184),k=function(n){var e=n.film,t=e.title,r=e.id,a=e.poster_path,c=(0,m.TH)();return(0,j.jsx)("div",{children:(0,j.jsx)(y,{to:"/movies/".concat(r),state:{from:c},children:(0,j.jsxs)(Z,{children:[(0,j.jsx)(w,{children:(0,j.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w200".concat(a):"https://via.placeholder.com/200x300",alt:"Movie poster"})}),(0,j.jsx)(b,{children:t})]})})})},P=t(791),_=t(390),z=g.ZP.span(u||(u=(0,v.Z)(["\n  text-transform: capitalize;\n  color: ",";\n  font-size: 24px;\n"])),(function(n){return n.theme.colors.red})),S=g.ZP.li(s||(s=(0,v.Z)(["\n  list-style: none;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),q=g.ZP.ul(o||(o=(0,v.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),C=g.ZP.h1(p||(p=(0,v.Z)(["\n  text-align: center;\n  font-size: 30px;\n"]))),T=function(){var n,e=(0,P.useState)(!1),t=(0,l.Z)(e,2),r=t[0],a=t[1],c=(0,P.useState)(null),i=(0,l.Z)(c,2),u=i[0],s=i[1],o=(0,h.lr)(),p=(0,l.Z)(o,1)[0],d=(0,P.useState)([]),v=(0,l.Z)(d,2),g=v[0],Z=v[1],b=null!==(n=p.get("query"))&&void 0!==n?n:"",y=(0,m.TH)();return(0,P.useEffect)((function(){var n=function(){var n=(0,f.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,""!==b||"/"===y.pathname){n.next=3;break}return n.abrupt("return");case 3:if(e=[],a(!0),s(null),"/"!==y.pathname){n.next=12;break}return n.next=9,(0,_.JS)();case 9:e=n.sent,n.next=15;break;case 12:return n.next=14,(0,_.z1)(b);case 14:e=n.sent;case 15:Z(e.results),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),s(n.t0);case 21:return n.prev=21,a(!1),n.finish(21);case 24:case"end":return n.stop()}}),n,null,[[0,18,21,24]])})));return function(){return n.apply(this,arguments)}}();n()}),[b,y]),(0,j.jsxs)("section",{children:[g.length>0?"/"===y.pathname?(0,j.jsx)(C,{children:"The most trending films of the day!"}):(0,j.jsxs)(C,{children:["Here we are! Films for your request: ",(0,j.jsx)(z,{children:b})]}):null,(0,j.jsx)(q,{children:g.map((function(n){return(0,j.jsx)(S,{children:(0,j.jsx)(k,{film:n})},n.id)}))}),r&&(0,j.jsx)("div",{children:"LOADING..."}),u&&(0,j.jsxs)("div",{children:["Something went wrong.. ",u.message,". Please, reload the page!"]})]})}},593:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r,a=t(996),c=t(439),i=t(87),u=t(128),s=t(168),o=t(867).ZP.form(r||(r=(0,s.Z)(["\n  margin-top: ",";\n"])),(function(n){return n.theme.spacing(3)})),p=t(184),f=function(){var n=(0,i.lr)(),e=(0,c.Z)(n,2),t=e[0],r=e[1];return(0,p.jsxs)(o,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.query.value.toLowerCase().trim();t.set("query",e),r(t),n.target.reset()},children:[(0,p.jsx)("input",{type:"text",name:"query"}),(0,p.jsx)("button",{type:"submit",children:(0,p.jsx)(u.O6C,{})})]})};function l(){return(0,p.jsxs)("main",{children:[(0,p.jsx)(f,{}),(0,p.jsx)(a.e,{})]})}},390:function(n,e,t){t.d(e,{JS:function(){return s},TP:function(){return o},tb:function(){return l},yj:function(){return f},z1:function(){return p}});var r=t(861),a=t(757),c=t.n(a),i=t(243),u="f6d968bc9808c07e077eb94ac6b79371";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=593.d501b327.chunk.js.map