(this.webpackJsonpfnews=this.webpackJsonpfnews||[]).push([[0],{35:function(t,e,n){},36:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(13),s=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))},r=n(8),i=n(11),o=n(24),j=n(21),l="WRITE_INFO",u={tag:""},b=Object(r.c)({input:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(j.a)(Object(j.a)({},t),{},{tag:e.payload});default:return""}}}),d=(n(35),n(9)),x=n(3),O=(n(36),n(26)),h=n(18),p=n.n(h),f=n(25);var m=n(1);function v(){var t=Object(i.b)(),e=Object(c.useState)(""),n=Object(O.a)(e,2),a=n[0],s=n[1];return Object(m.jsx)("form",{children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"inputArticle",children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0442\u0456:"}),Object(m.jsx)("textarea",{placeholder:"\u0412\u0430\u0448\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f...",className:"form-control",value:a,onChange:function(t){return s(t.target.value)},id:"inputArticle",rows:"10"}),Object(m.jsx)("span",{onClick:function(e){var n;e.preventDefault(),s(""),t((n=a,function(){var t=Object(f.a)(p.a.mark((function t(e){var c,a,s,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c='\n\t\t\tmutation{\n\t\t\t\taddText(text: "'.concat(n.replace(/\s+/g," "),'"){\n\t\t\t\t\taddText{\n\t\t\t\t\t\tid,\n\t\t\t\t\t\ttext,\n\t\t\t\t\t\ttexttag\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}'),t.next=3,fetch("http://192.168.1.9:8000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:c})});case 3:return a=t.sent,t.next=6,a.json();case 6:s=t.sent,r=s.data.addText.addText.texttag,e({type:l,payload:r}),console.log(r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:Object(m.jsx)(d.b,{to:"/result",className:"btn btn-dark",children:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438"})})]})})}function g(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(v,{})})}n(40);var N=n.p+"static/media/logo.950f57de.svg";function y(){return Object(m.jsx)("div",{className:"header",children:Object(m.jsxs)("nav",{className:"d-flex",children:[Object(m.jsx)(d.b,{to:"/",children:Object(m.jsx)("img",{src:N,alt:"logo"})}),Object(m.jsxs)("div",{className:"d-flex ",children:[Object(m.jsx)("h2",{className:"about-us",children:Object(m.jsx)(d.b,{activeClassName:"active-nav",to:"/about-us",children:"\u041f\u0440\u043e \u041d\u0430\u0441"})}),Object(m.jsx)("h2",{children:Object(m.jsx)(d.b,{activeClassName:"active-nav",to:"/about-project",children:"\u041f\u0440\u043e \u041f\u0440\u043e\u0435\u043a\u0442"})})]})]})})}n(41);function w(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)("img",{width:"150",src:N,alt:"logo"}),Object(m.jsx)("div",{className:"bottom-line"})]})}function F(){return Object(m.jsx)(m.Fragment,{})}function T(){return Object(m.jsx)(m.Fragment,{})}n(42);function C(){var t=Object(i.c)((function(t){return t.input.tag}));return Object(m.jsx)("div",{className:"result-container",children:t})}var k=function(){return Object(m.jsx)("div",{className:"bg-main ",children:Object(m.jsx)("div",{className:"cont-main container",children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(y,{}),Object(m.jsxs)(x.c,{children:[Object(m.jsx)(x.a,{exact:!0,path:"/",component:g}),Object(m.jsx)(x.a,{exact:!0,path:"/about-us",component:F}),Object(m.jsx)(x.a,{exact:!0,path:"/about-project",component:T}),Object(m.jsx)(x.a,{exact:!0,path:"/result",component:C})]}),Object(m.jsx)(w,{})]})})})},I=Object(r.e)(b,Object(r.d)(Object(r.a)(o.a))),S=Object(m.jsx)(i.a,{store:I,children:Object(m.jsx)(k,{})});Object(a.render)(S,document.getElementById("root")),s()}},[[43,1,2]]]);
//# sourceMappingURL=main.b2e733f9.chunk.js.map