"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{623:function(e,t,n){n.d(t,{e:function(){return d}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(87),i=n(689),o=n(184),f=function(e){var t=e.film,n=t.title,r=t.id,a=(0,i.TH)();return(0,o.jsx)("div",{children:(0,o.jsx)(s.rU,{to:"/movies/".concat(r),state:{from:a},children:n})})},l=n(791),p=n(390),h=function(e){var t=e.children;return(0,o.jsx)("h1",{children:t})},d=function(){var e,t=(0,l.useState)(!1),n=(0,a.Z)(t,2),u=n[0],d=n[1],v=(0,l.useState)(null),m=(0,a.Z)(v,2),x=m[0],b=m[1],j=(0,s.lr)(),k=(0,a.Z)(j,1)[0],y=(0,l.useState)([]),w=(0,a.Z)(y,2),g=w[0],Z=w[1],S=null!==(e=k.get("query"))&&void 0!==e?e:"",_=(0,i.TH)();return console.log(_),(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==S||"/"===_.pathname){e.next=3;break}return e.abrupt("return");case 3:if(t=[],d(!0),b(null),"/"!==_.pathname){e.next=12;break}return e.next=9,(0,p.JS)();case 9:t=e.sent,e.next=15;break;case 12:return e.next=14,(0,p.z1)(S);case 14:t=e.sent;case 15:Z(t.results),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),b(e.t0);case 21:return e.prev=21,d(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}}();e()}),[S,_]),(0,o.jsxs)("section",{children:[g.length>0&&(0,o.jsx)(h,{children:"/"===_.pathname?"The most trending films of the day!":"Here we are! Films for your request ".concat(S)}),(0,o.jsx)("ul",{children:g.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(f,{film:e})},e.id)}))}),u&&(0,o.jsx)("div",{children:"LOADING..."}),x&&(0,o.jsxs)("div",{children:["Something went wrong.. ",x.message,". Please, reload the page!"]})]})}},149:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(439),a=n(623),u=n(128),c=n(184),s=function(e){var t=e.onSubmit;return(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.elements.query.value;t(n),e.target.reset()},children:[(0,c.jsx)("input",{type:"text",name:"query"}),(0,c.jsx)("button",{type:"submit",children:(0,c.jsx)(u.O6C,{})})]})},i=n(87);function o(){var e=(0,i.lr)(),t=(0,r.Z)(e,2),n=t[0],u=t[1];return(0,c.jsxs)("main",{children:[(0,c.jsx)(s,{onSubmit:function(e){var t=e.toLowerCase().trim();n.set("query",t),u(n)}}),(0,c.jsx)(a.e,{})]})}},390:function(e,t,n){n.d(t,{JS:function(){return i},TP:function(){return o},z1:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243),s="f6d968bc9808c07e077eb94ac6b79371";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=149.b4d770b2.chunk.js.map