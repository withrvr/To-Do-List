(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),o=n.n(a),r=(n(12),n(7)),i=n(5),l=n(0),d=function(e){var t=e.item,n=e.todos,c=e.handleClick,s=e.handleChange;return Object(l.jsxs)("form",{className:"my-3 m-auto row gap-2",children:[Object(l.jsx)("input",{type:"text",className:"form-control col",value:t,onChange:s}),Object(l.jsxs)("button",{className:"btn btn-success col-2 my-auto",onClick:function(e){return c(e,t)},children:["Add #",n.length+1]})]})},j=function(e){var t=e.todos.map((function(e,t){var n="todo"+t;return Object(l.jsx)("div",{className:"alert alert-secondary alert-dismissible fade show",children:Object(l.jsx)("div",{children:e})},n)}));return Object(l.jsx)("div",{children:t.length>0?Object(l.jsx)("div",{children:t}):Object(l.jsx)("h3",{children:"To Items added YET"})})},u=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),o=Object(i.a)(a,2),u=o[0],b=o[1];return Object(l.jsxs)("div",{className:"container mb-5 text-center col-lg-8",children:[Object(l.jsx)(d,{todos:n,item:u,handleClick:function(e,t){e.preventDefault(),t&&(s([t].concat(Object(r.a)(n))),b(""))},handleChange:function(e){b(e.target.value)}}),Object(l.jsx)(j,{todos:n})]})};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5cfd68e8.chunk.js.map