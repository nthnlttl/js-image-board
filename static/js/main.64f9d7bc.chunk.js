(this["webpackJsonpimage-board-app"]=this["webpackJsonpimage-board-app"]||[]).push([[0],{13:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),s=c(6),r=c.n(s),i=c(7),l=c(2),o=c(0);var u=function(t){console.log(t);var e=t.images.map((function(t){return Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(o.jsxs)("li",{style:{listStyleType:"none"},children:[Object(o.jsx)("img",{style:{width:"200px",height:"250px"},src:t.url})," ",Object(o.jsx)("p",{children:t.text})]})})}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{style:{display:"flex",justifyContent:"center"},children:"Cats"}),Object(o.jsx)("ul",{children:e})]})};var j=function(t){var e=Object(n.useState)(""),c=Object(l.a)(e,2),a=c[0],s=c[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),u=i[0],j=i[1];return Object(o.jsxs)("form",{style:{display:"flex",justifyContent:"center"},onSubmit:function(e){e.preventDefault(),t.createImage(u,a),s(""),j(""),console.log(e.target.url.value),console.log(e),console.log(e.target)},children:[Object(o.jsx)("input",{style:{},value:u,name:"url",type:"url",id:"new-image",placeholder:"Image URL",onChange:function(t){console.log(t),j(t.target.value)}}),Object(o.jsx)("input",{name:"text",value:a,type:"text",id:"image-text",placeholder:"Image Caption",onChange:function(t){console.log(t),s(t.target.value)}}),Object(o.jsx)("button",{style:{backgroundColor:"#1E9D45"},type:"submit",children:"Add Image"})]})};var b=function(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)(0),r=Object(l.a)(s,2),b=r[0];return r[1],Object(n.useEffect)((function(){a([{id:1,url:"https://static01.nyt.com/images/2014/07/23/upshot/23UP-cat/23UP-cat-superJumbo.jpg",text:"OG Cat"},{id:2,url:"https://static01.nyt.com/images/2014/07/23/upshot/23UP-cat/23UP-cat-superJumbo.jpg",text:"Cat 2, shockingly resembles the first cat..."},{id:3,url:"https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png",text:"This cat is a killer"}])}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{images:c,setImages:a}),Object(o.jsx)(j,{createImage:function(t,e){var n={id:b,url:t,text:e};a([].concat(Object(i.a)(c),[n]))}}),Object(o.jsx)("input",{type:"text"}),Object(o.jsx)("button",{children:"Add Image"}),Object(o.jsx)("button",{children:"Cancel"})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.64f9d7bc.chunk.js.map