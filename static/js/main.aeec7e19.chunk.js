(this["webpackJsonprym-characters"]=this["webpackJsonprym-characters"]||[]).push([[0],[,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(5),s=c.n(n),i=(c(10),c(2)),o=(c(11),c(12),c.p+"static/media/RyM.20259291.svg"),l=c(0);function j(){return Object(l.jsx)("div",{className:"Header",children:Object(l.jsx)("img",{className:"Header-img",src:o,alt:"Header img"})})}c(14);function u(e){var t=e.searchedCharacters,c=e.setPersonaje;return Object(l.jsx)("section",{className:"ChScroll-Container",children:Object(l.jsx)("ul",{className:"ChScroll-ul",children:t.map((function(e,t){return Object(l.jsx)("li",{className:"ChScroll-li",onClick:function(){return c(e)},children:"Dead"===e.status?Object(l.jsx)("div",{className:"ChScroll-ChImg-Dead",children:Object(l.jsx)("img",{className:"Profile-Picture",src:e.image,alt:"profilepic"})}):Object(l.jsx)("div",{className:"ChScroll-ChImg-Alive",children:Object(l.jsx)("img",{className:"Profile-Picture",src:e.image,alt:"profilepic"})})},t)}))})})}c(15);function h(e){var t=e.searchValue,c=e.setSearchValue;return Object(l.jsx)("input",{className:"Searher",type:"text",placeholder:"Search character \ud83d\udd0e",value:t,onChange:function(e){c(e.target.value)}})}c(16);function d(e){var t=e.personaje,c=t.image,a=t.name,r=t.status,n=t.species,s=t.gender;return Object(l.jsxs)("section",{className:"CardInfo-Container",children:[Object(l.jsx)("img",{src:c,className:"CardInfo-ProfilePicture",alt:"profilepic"}),Object(l.jsxs)("div",{className:"CardInfo-Info1",children:[Object(l.jsx)("h2",{children:a}),Object(l.jsx)("p",{children:Object(l.jsx)("strong",{children:r})})]}),Object(l.jsx)("div",{className:"CardInfo-Info2",children:Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Specie:"})," ",n]})}),Object(l.jsx)("div",{className:"CardInfo-Info3",children:Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Gender:"})," ",s]})})]})}c(4);var p=function(e){var t=e.info,c=(e.setRymUrl,t.prev);return Object(l.jsx)("button",{className:"prev",type:"button",onClick:function(){c},children:"\u2b05"})};var m=function(e){var t=e.info,c=e.setRymUrl,a=t.next;return Object(l.jsx)("button",{type:"button",onClick:function(){console.log(t),c(a)},children:"\u27a1"})},b={info:{count:826,pages:42,next:"https://rickandmortyapi.com/api/character/?page=20",prev:"https://rickandmortyapi.com/api/character/?page=18"},results:[{id:361,name:"Toxic Rick",status:"Dead",species:"Humanoid",type:"Rick's Toxic Side",gender:"Male",origin:{name:"Alien Spa",url:"https://rickandmortyapi.com/api/location/64"},location:{name:"Earth",url:"https://rickandmortyapi.com/api/location/20"},image:"https://rickandmortyapi.com/api/character/avatar/361.jpeg",episode:["https://rickandmortyapi.com/api/episode/27"],url:"https://rickandmortyapi.com/api/character/361",created:"2018-01-10T18:20:41.703Z"}]};var f=function(){var e=Object(a.useState)("https://rickandmortyapi.com/api/character"),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(b.results),o=Object(i.a)(s,2),f=o[0],O=o[1],x=Object(a.useState)(b.info),g=Object(i.a)(x,2),v=g[0],C=g[1],y=Object(a.useState)(b),S=Object(i.a)(y,2),N=S[0],k=S[1];Object(a.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){return k(e)})).catch((function(e){return console.log(e)})),C(N.info),O(N.results)}),[c,N]);var I,P=Object(a.useState)(b.results[0]),R=Object(i.a)(P,2),w=R[0],H=R[1],U=r.a.useState(""),V=Object(i.a)(U,2),A=V[0],D=V[1];return I=!A.length>=1?f:f.filter((function(e){var t=e.name.toLowerCase(),c=A.toLowerCase();return t.includes(c)})),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(h,{searchValue:A,setSearchValue:D}),Object(l.jsx)(u,{searchedCharacters:I,setPersonaje:H}),v.prev&&Object(l.jsx)(p,{setRymUrl:n,info:v}),v.next&&Object(l.jsx)(m,{setRymUrl:n,info:v}),Object(l.jsx)(d,{personaje:w})]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.aeec7e19.chunk.js.map