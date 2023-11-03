"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[424],{424:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,c,i,s,u,o=t(861),p=t(439),d=t(757),f=t.n(d),l=t(168),h=t(867),x=h.ZP.div(r||(r=(0,l.Z)(["\n  border-radius: 2px;\n  overflow: hidden;\n  padding-top: ",";\n"])),(function(n){return n.theme.spacing(4)})),v=h.ZP.p(a||(a=(0,l.Z)(["\n  text-align: center;\n  font-size: 18px;\n  padding: ",";\n  transition: font-size 300ms;\n"])),(function(n){return n.theme.spacing(1)})),m=h.ZP.div(c||(c=(0,l.Z)(["\n  text-align: center;\n  transition: transform 300ms;\n"]))),g=t(184),Z=function(n){var e=n.one,t=e.character,r=e.name,a=e.profile_path,c=e.job;return(0,g.jsxs)(x,{children:[(0,g.jsx)(m,{children:(0,g.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w200".concat(a):"https://via.placeholder.com/200x300",alt:"Cast member poster. If we have it :)"})}),(0,g.jsx)(v,{children:(0,g.jsx)("b",{children:null!==t&&void 0!==t?t:c})}),(0,g.jsx)(v,{children:r})]})},w=t(390),b=t(791),j=t(689),k=h.ZP.li(i||(i=(0,l.Z)(["\n  list-style: none;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),y=h.ZP.ul(s||(s=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),_=h.ZP.h2(u||(u=(0,l.Z)(["\n  text-align: center;\n  font-size: 32px;\n"])));function P(){var n=(0,j.UO)().movieId,e=(0,b.useState)(!1),t=(0,p.Z)(e,2),r=t[0],a=t[1],c=(0,b.useState)(null),i=(0,p.Z)(c,2),s=i[0],u=i[1],d=(0,b.useState)([]),l=(0,p.Z)(d,2),h=l[0],x=l[1],v=(0,b.useState)([]),m=(0,p.Z)(v,2),P=m[0],S=m[1];return(0,b.useEffect)((function(){var e=function(){var e=(0,o.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),u(null),e.next=5,(0,w.yj)(Number(n));case 5:t=e.sent,x(t.cast),S(t.crew),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),u(e.t0);case 13:return e.prev=13,a(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,g.jsxs)("section",{children:[(0,g.jsx)(_,{children:"Movie participaters"}),h.length>0&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h3",{children:"Cast"}),(0,g.jsx)(y,{children:h.map((function(n){return(0,g.jsx)(k,{children:(0,g.jsx)(Z,{one:n})},n.credit_id)}))})]}),P.length>0&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h3",{children:"Crew"}),(0,g.jsx)(y,{children:P.map((function(n){return(0,g.jsx)(k,{children:(0,g.jsx)(Z,{one:n})},n.credit_id)}))})]}),r&&(0,g.jsx)("div",{children:"LOADING..."}),s&&(0,g.jsxs)("div",{children:["Something went wrong.. ",s.message,". Please, reload the page!"]})]})}},390:function(n,e,t){t.d(e,{JS:function(){return u},TP:function(){return o},tb:function(){return f},yj:function(){return d},z1:function(){return p}});var r=t(861),a=t(757),c=t.n(a),i=t(243),s="f6d968bc9808c07e077eb94ac6b79371";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=424.6aa470ed.chunk.js.map