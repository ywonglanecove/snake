(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(1),r=n(3),s=n.n(r);n(9),n(10);var i=({food:e})=>Object(o.jsx)("div",{className:"food",style:{left:e[0]+"em",top:e[1]+"em",width:"1em",height:"1em"}}),c=({snake:e})=>e.map((e=>Object(o.jsx)("div",{className:"snake",style:{left:e[0]+"em",top:e[1]+"em",width:"1em",height:"1em"}},e))),d=({snake:e,food:t})=>Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(c,{snake:e})," ",Object(o.jsx)(i,{food:t})]}),l={left:37,up:38,right:39,down:40};const m={[l.up]:[0,-1],[l.down]:[0,1],[l.left]:[-1,0],[l.right]:[1,0]},u=(e,t)=>{return n=e,o=t,2===Math.abs(n-o)?e:t;var n,o};const h="next",v="init",g="direction";var f=(e,t,n)=>()=>{const[o,r]=Object(a.useReducer)((e=>(t,n)=>{switch(n.type){case h:return{...t,game:e(t.game,t.direction)};case g:return{...t,direction:n.payload};case v:return{...t,game:e(),timer:n.payload};default:return t}})(e),{game:void 0,timer:void 0,direction:l.up}),s=e=>{Object.values(l).includes(e.keyCode)&&r({type:g,payload:e.keyCode})};return o.game&&!o.game.isAlive&&n(o.timer),[o,()=>{const e=t((()=>{r({type:h})}));r({type:v,payload:e}),document.body.addEventListener("keydown",s)}]};const k=((e,t,n)=>(o,a)=>void 0===o?((e,t,n)=>{const o=[[Math.floor(t/2),Math.floor(n/2)]];return{snake:o,isAlive:!0,food:e(o),movingDirection:l.up}})(e,t,n):((e,t,n,o,a)=>{const r=u(o.movingDirection,a),s=m[r],i=[o.snake[0][0]+s[0],o.snake[0][1]+s[1]],c=(d=i,l=o.food,d[0]===l[0]&&d[1]===l[1]);var d,l;const h=c?o.snake:o.snake.slice(0,-1),v=[i,...h],g=!((e,t,n)=>-1===e[0]||-1===e[1]||e[0]===t+1||e[1]===n+1)(i,t,n)&&(f=i,!h.some((e=>e[0]===f[0]&&e[1]===f[1])));var f;return{...o,snake:g?v:o.snake,food:c?e(v):o.food,isAlive:g,movingDirection:r}})(e,t,n,o,a))(((e,t,n)=>{const o=[...new Array(t)].flatMap(((e,t)=>[...new Array(n)].map(((e,n)=>[t,n]))));return t=>{return((e,t)=>t[Math.floor(t.length*e)])(e(),o.filter((n=t,e=>!n.some((t=>t[0]===e[0]&&t[1]===e[1])))));var n}})(Math.random,31,23),31,23);var p=()=>{const[e,t]=f(k,(e=>setInterval(e,150)),clearInterval)();return Object(o.jsxs)("div",{className:"board",style:{width:"32em",height:"24em"},children:[e.game?Object(o.jsx)(d,{snake:e.game.snake,food:e.game.food}):null,e.game&&e.game.isAlive?null:Object(o.jsx)("button",{onClick:t,children:"Start"})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(o.jsx)(p,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.ed1f738f.chunk.js.map