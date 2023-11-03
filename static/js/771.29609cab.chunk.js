"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[771],{771:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,c,a,u,i,s=t(861),o=t(439),p=t(757),f=t.n(p),d=t(168),l=t(867),h=l.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: ",";\n"])),(function(e){return e.theme.spacing(2)})),v=l.ZP.div(c||(c=(0,d.Z)(["\n  padding: ",";\n  border-bottom: 2px solid ",";\n  &:not(:last-of-type) {\n    margin-bottom: ",";\n  }\n"])),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.colors.grey}),(function(e){return e.theme.spacing(2)})),x=t(184),m=function(e){var n=e.review,t=n.author,r=n.content,c=n.updated_at,a=new Date(c);return(0,x.jsxs)(v,{children:[(0,x.jsxs)(h,{children:[(0,x.jsxs)("p",{children:[(0,x.jsx)("b",{children:"Author: "}),t]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("b",{children:"Date: "}),a.toDateString()]})]}),(0,x.jsx)("p",{children:r})]})},w=t(390),Z=t(791),b=t(689),g=l.ZP.h2(a||(a=(0,d.Z)(["\n  border-top: 2px solid ",";\n  font-size: 32px;\n  text-align: center;\n"])),(function(e){return e.theme.colors.grey})),y=l.ZP.li(u||(u=(0,d.Z)(["\n  list-style: none;\n"]))),k=l.ZP.p(i||(i=(0,d.Z)(["\n  text-align: center;\n  color: ",";\n  font-size: 20px;\n"])),(function(e){return e.theme.colors.red}));function j(){var e=(0,b.UO)().movieId,n=(0,Z.useState)(!1),t=(0,o.Z)(n,2),r=t[0],c=t[1],a=(0,Z.useState)(null),u=(0,o.Z)(a,2),i=u[0],p=u[1],d=(0,Z.useState)([]),l=(0,o.Z)(d,2),h=l[0],v=l[1];return(0,Z.useEffect)((function(){var n=function(){var n=(0,s.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),p(null),n.next=5,(0,w.tb)(Number(e));case 5:t=n.sent,v(t.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),p(n.t0);case 12:return n.prev=12,c(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,x.jsxs)("section",{children:[(0,x.jsx)(g,{children:"Movie reviews"}),h.length>0?(0,x.jsx)("ul",{children:h.map((function(e){return(0,x.jsx)(y,{children:(0,x.jsx)(m,{review:e})},e.id)}))}):(0,x.jsx)(k,{children:"There is no reviews here!"}),r&&(0,x.jsx)("div",{children:"LOADING..."}),i&&(0,x.jsxs)("div",{children:["Something went wrong.. ",i.message,". Please, reload the page!"]})]})}},390:function(e,n,t){t.d(n,{JS:function(){return s},TP:function(){return o},tb:function(){return d},yj:function(){return f},z1:function(){return p}});var r=t(861),c=t(757),a=t.n(c),u=t(243),i="f6d968bc9808c07e077eb94ac6b79371";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie?query=".concat(n,"&api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=771.29609cab.chunk.js.map