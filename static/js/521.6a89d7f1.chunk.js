"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[521],{521:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var c=e(439),o=e(689),a=e(791),r=e(192),i=e(200),s=e(588),u=e(184),f=function(){var n=(0,o.UO)().movieId,t=(0,a.useState)(null),e=(0,c.Z)(t,2),f=e[0],h=e[1],l=(0,a.useState)(!0),d=(0,c.Z)(l,2),m=d[0],p=d[1],j=(0,a.useState)(!1),v=(0,c.Z)(j,2),g=v[0],_=v[1],x=(0,a.useState)(!1),y=(0,c.Z)(x,2),k=y[0],w=y[1];return(0,a.useEffect)((function(){(0,s.y)(n).then((function(n){n.cast&&n.cast.length>0?(h(n.cast),w(!1)):(h([]),w(!0))})).catch((function(n){console.log(n),_(!0)})).finally((function(){p(!1)}))}),[n]),(0,u.jsxs)("div",{className:"container",children:[m&&(0,u.jsx)(r.g,{}),g&&(0,u.jsx)(i.j,{}),k&&(0,u.jsx)("h1",{children:"Requested movie does not exist"}),f&&f.length>0&&(0,u.jsx)("div",{className:"actor-cont",children:f.map((function(n){return(0,u.jsxs)("div",{children:[n.profile_path?(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:"".concat(n.name)}):(0,u.jsx)("img",{className:"image",src:"https://www.freeiconspng.com/uploads/no-image-icon-11.PNG",alt:"".concat(n.name)}),(0,u.jsx)("p",{className:"actor-name",children:n.name}),(0,u.jsxs)("p",{className:"character",children:["Character:",(0,u.jsx)("span",{className:" text-info",children:n.character})]})]},n.id)}))})]})}},588:function(n,t,e){e.d(t,{Bt:function(){return s},Ny:function(){return r},Tg:function(){return a},on:function(){return u},y:function(){return i}});var c="https://api.themoviedb.org/3/",o="44cd7d40e9c9ffc80f6b2e51bac6d9ee",a=function(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(o)).then((function(n){return n.json()}))},r=function(n){return fetch("".concat(c,"movie/").concat(n,"?api_key=").concat(o)).then((function(n){return n.json()}))},i=function(n){return fetch("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.json()}))},s=function(n){return fetch("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.json()}))},u=function(n){return fetch("".concat(c,"search/movie?page=1&api_key=").concat(o,"&query=").concat(n)).then((function(n){return n.json()}))}},200:function(n,t,e){e.d(t,{j:function(){return o}});var c=e(184),o=function(){return(0,c.jsx)("h2",{children:"Error loading movies"})}}}]);
//# sourceMappingURL=521.6a89d7f1.chunk.js.map