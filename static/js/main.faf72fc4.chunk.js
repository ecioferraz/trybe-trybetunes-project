(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(22),s=a.n(r),i=(a(33),a(8)),o=a(3),u=Object(c.createContext)(),l=a(0),j={name:"",email:"",description:"",image:""};function b(e){var t=e.children,a=Object(c.useState)(j),n=Object(o.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(""),b=Object(o.a)(i,2),d=b[0],m=b[1],h=Object(c.useState)([]),f=Object(o.a)(h,2),p=f[0],O=f[1],x=Object(c.useState)([]),v=Object(o.a)(x,2),g={userInfo:r,setUserInfo:s,searchedArtist:d,setSearchedArtist:m,discography:p,setDiscography:O,favorites:v[0],setFavorites:v[1]};return Object(l.jsx)(u.Provider,{value:g,children:t})}var d=a(4),m=a(2),h=a.n(m),f=a(5),p=a(23),O=a(24),x=a(28),v=a(27),g=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.dataTestId,c=e.labelText,n=e.name,r=e.onChange,s=e.placeholder,i=e.type,o=e.value;return Object(l.jsxs)(l.Fragment,{children:[c&&Object(l.jsxs)("label",{htmlFor:n,children:[c," "]}),Object(l.jsx)("input",{className:t,"data-testid":a,id:n,name:n,onChange:r,placeholder:s,type:i,value:o})]})}}]),a}(c.Component);g.defaultProps={dataTestId:"",labelText:"",placeholder:"",value:""};var N=a(16),y="user",w=function(e){return localStorage.setItem(y,JSON.stringify(e))},k=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},I=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(y));null===t&&(t={}),k(t)(e)}))},S=function(e){return new Promise((function(t){w(Object(N.a)(Object(N.a)({},{name:"",email:"",image:"",description:""}),e)),k("OK")(t)}))},C=function(e){return new Promise((function(t){w(Object(N.a)({},e)),k("OK")(t)}))};a(36);function F(e){var t=e.className,a=e.heart;return Object(l.jsx)("section",{className:t,children:a?Object(l.jsxs)("div",{class:"rhombus2",children:[Object(l.jsx)("div",{class:"circle21"}),Object(l.jsx)("div",{class:"circle22"})]}):Object(l.jsxs)("div",{className:"lds-roller",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})})}a(37);function T(e){var t=e.author,a=e.className,c=e.freepik,n=e.href,r=e.tag;return Object(l.jsx)("footer",{className:a,children:c?Object(l.jsxs)("a",{href:n,children:[r," ","photos by"," ",t]}):Object(l.jsxs)("a",{href:n,children:[r," ","photo created by"," ",t," ","- www.freepik.com"]})})}function P(){var e=Object(c.useContext)(u),t=e.userInfo,a=e.setUserInfo,n=Object(c.useState)(!1),r=Object(o.a)(n,2),s=r[0],i=r[1],j=Object(d.f)(),b=function(){var e=Object(f.a)(h.a.mark((function e(a){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),c=t.name,i(!0),e.next=5,S({name:c});case 5:return e.next=7,I();case 7:i(!1),j.push("/trybe-trybetunes-project/search");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("main",{className:"login-page ".concat(s&&"is-loading"),"data-testid":"page-login",children:[s?Object(l.jsx)(F,{className:"loading"}):Object(l.jsxs)("form",{className:"login-form",onSubmit:b,children:[Object(l.jsx)("h1",{className:"logo",children:"TrybeTunes"}),Object(l.jsx)("h6",{className:"greetings",children:"Ol\xe1! Fa\xe7a seu login:"}),Object(l.jsx)("section",{className:"input-container",children:Object(l.jsx)(g,{className:"login-input",dataTestId:"login-name-input",name:"name",onChange:function(e){var t=e.target.value;return a({name:t,email:"",image:"",description:""})},placeholder:"Digite seu nome",type:"text",value:t.name})}),Object(l.jsx)("button",{className:"login-btn","data-testid":"login-submit-button",disabled:t.name.length<3,type:"submit",children:"Entrar"})]}),Object(l.jsx)(T,{author:"wayhomestudio",className:"image-credit",href:"https://www.freepik.com/photos/people",tag:"People"})]})}a(20);function D(e){var t=e.album,a=t.collectionId,c=t.artworkUrl100,n=t.collectionName,r=t.artistName,s=function(e){return e.length<25?e:e.slice(0,25).concat("...")};return Object(l.jsx)("div",{className:"album-card",children:Object(l.jsxs)(i.b,{"data-testid":"link-to-album-".concat(a),to:"/trybe-trybetunes-project/album/".concat(a),children:[Object(l.jsx)("img",{src:c,alt:"Album Cover"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:s(n)}),Object(l.jsx)("h5",{children:s(r)})]})]})})}function E(){var e=Object(c.useContext)(u),t=e.searchedArtist,a=e.discography;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Resultado de \xe1lbuns de:"," ",t]}),Object(l.jsx)("section",{className:"album-cards",children:0===a.length?Object(l.jsx)("h3",{children:"Nenhum \xe1lbum foi encontrado"}):a.map((function(e){return Object(l.jsx)(D,{album:e},e.collectionId)}))})]})}a(46);function U(){var e=Object(c.useContext)(u).userInfo;return Object(l.jsx)("header",{"data-testid":"header-component",children:Object(l.jsxs)("nav",{children:[Object(l.jsx)("h1",{className:"logo",children:"TrybeTunes"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{"data-testid":"link-to-search",to:"/trybe-trybetunes-project/search",children:"Search"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{"data-testid":"link-to-favorites",to:"/trybe-trybetunes-project/favorites",children:"Favorites"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{"data-testid":"link-to-profile",to:"/trybe-trybetunes-project/profile",children:"Profile"})})]}),Object(l.jsx)("div",{className:"username",children:Object(l.jsx)("h2",{"data-testid":"header-user-name",children:e.name})})]})})}function A(e){var t=e.handleSubmit,a=e.setSearchInput,c=e.searchInput;return Object(l.jsx)("form",{className:"search-form",onSubmit:t,children:Object(l.jsxs)("div",{className:"search-container",children:[Object(l.jsx)(g,{className:"search-input",dataTestId:"search-artist-input",name:"search",onChange:function(e){var t=e.target.value;return a(t)},placeholder:"Digite um artista ou banda",type:"text",value:c}),Object(l.jsx)("button",{className:"search-btn","data-testid":"search-artist-button",disabled:c.length<2,type:"submit",children:Object(l.jsx)("i",{className:"fas fa-search"})})]})})}var J=function(){var e=Object(f.a)(h.a.mark((function e(t){var a,c,n,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=encodeURI(t).replaceAll("%20","+"),c="https://itunes.apple.com/search?entity=album&term=".concat(a,"&attribute=allArtistTerm"),e.next=4,fetch(c);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,s=r.results,e.abrupt("return",s.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=J;function K(){var e=Object(c.useContext)(u),t=e.setUserInfo,a=e.setSearchedArtist,n=e.discography,r=e.setDiscography,s=Object(c.useState)(!1),i=Object(o.a)(s,2),j=i[0],b=i[1],d=Object(c.useState)(""),m=Object(o.a)(d,2),p=m[0],O=m[1],x=Object(c.useState)(!1),v=Object(o.a)(x,2),g=v[0],N=v[1],y=function(){var e=Object(f.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(!0),N(!0),a(p),e.next=6,z(p);case 6:c=e.sent,r(c),O(""),b(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(h.a.mark((function e(){var a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,I();case 3:a=e.sent,c=a.name,t({name:c}),b(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[b,t]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(U,{}),Object(l.jsx)("main",{className:"search-page ".concat(g&&n.length>13&&"searched"),"data-testid":"page-search",children:j?Object(l.jsx)(F,{className:"loading"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(A,{handleSubmit:y,setSearchInput:O,searchInput:p}),Object(l.jsx)("section",{className:"album-library",children:g&&Object(l.jsx)(E,{})})]})}),Object(l.jsx)(T,{author:"lookstudio",className:"image-credit",href:"https://www.freepik.com/photos/music",tag:"Music"})]})}var M=a(15),V="favorite_songs";JSON.parse(localStorage.getItem(V))||localStorage.setItem(V,JSON.stringify([]));var _=function(){return JSON.parse(localStorage.getItem(V))},R=function(e){return localStorage.setItem(V,JSON.stringify(e))},B=function(e){return function(t){setTimeout((function(){t(e)}),500)}},$=function(){return new Promise((function(e){var t=_();B(t)(e)}))},q=function(e){return new Promise((function(t){if(e){var a=_();R([].concat(Object(M.a)(a),[e]))}B("OK")(t)}))},G=function(e){return new Promise((function(t){var a=_();R(a.filter((function(t){return t.trackId!==e.trackId}))),B("OK")(t)}))};function H(e){var t=e.track,a=e.albumInfo,n=t.artistName,r=t.previewUrl,s=t.trackId,i=t.trackName,j=Object(c.useContext)(u),b=j.favorites,d=j.setFavorites,m=Object(c.useState)(!1),p=Object(o.a)(m,2),O=p[0],x=p[1],v=Object(c.useState)(!1),g=Object(o.a)(v,2),N=g[0],y=g[1],w=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y(!0),O){e.next=6;break}return e.next=4,q(t);case 4:d([].concat(Object(M.a)(b),[t])),x(!0);case 6:if(!O){e.next=11;break}return e.next=9,G(t);case 9:d(b.filter((function(e){return e.trackId!==s}))),x(!1);case 11:y(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){return e.length<25?e:e.slice(0,25).concat("...")},I=O?Object(l.jsx)("i",{className:"fas fa-heart"}):Object(l.jsx)("i",{className:"far fa-heart"});return Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:t=e.sent,a=t.some((function(e){return e.trackId===s})),x(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[x,s]),Object(l.jsxs)("section",{className:"album-tracks",children:[Object(l.jsx)("div",{children:Object(l.jsxs)("h5",{children:[a&&"".concat(k(n)," - "),k(i)]})}),Object(l.jsxs)("div",{className:"audio-fav-container",children:[Object(l.jsx)("div",{className:"audio-container",children:Object(l.jsxs)("audio",{className:"player",controls:!0,"data-testid":"audio-component",src:r,children:[Object(l.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento"," ",Object(l.jsx)("code",{children:"audio"}),"."]})}),N?Object(l.jsx)(F,{className:"like-loading",heart:!0}):Object(l.jsx)("div",{className:"checkbox-container",children:Object(l.jsxs)("label",{htmlFor:"fav-".concat(s),children:[I,Object(l.jsx)("input",{checked:O,className:"fav-checkbox","data-testid":"checkbox-music-".concat(s),hidden:!0,id:"fav-".concat(s),onChange:w,type:"checkbox"})]})})]})]})}var L=function(){var e=Object(f.a)(h.a.mark((function e(t){var a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=L;a(47);function W(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),u=i[0],j=i[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(f.a)(h.a.mark((function t(){var a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.match.params.id,r(!0),t.next=4,Q(a);case 4:c=t.sent,j(c),r(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(U,{}),Object(l.jsx)("main",{className:"album-page ".concat(u.length<5&&"full-page"," ").concat(n&&"is-loading"),"data-testid":"page-album",children:n||0===u.length?Object(l.jsx)(F,{}):Object(l.jsxs)("div",{className:"album",children:[Object(l.jsxs)("div",{className:"album-info",children:[Object(l.jsx)("img",{src:u[0].artworkUrl100,alt:"Album Cover"}),Object(l.jsx)("h3",{"data-testid":"album-name",children:u[0].collectionName}),Object(l.jsx)("h4",{"data-testid":"artist-name",children:u[0].artistName})]}),u.slice(1).map((function(e){return Object(l.jsx)(H,{track:e},e.trackId)}))]})}),Object(l.jsx)(T,{author:"prostooleh",className:"image-credit left",href:"https://www.freepik.com/photos/music",tag:"Music"})]})}a(48);function X(){var e=Object(c.useContext)(u),t=e.favorites,a=e.setFavorites,n=Object(c.useState)(!1),r=Object(o.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,$();case 3:t=e.sent,a(t),i(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(U,{}),Object(l.jsx)("main",{className:"favs-page ".concat(t.length<8&&"favorited"),"data-testid":"page-favorites",children:s?Object(l.jsx)(F,{}):t.length?Object(l.jsx)("section",{className:"favorited-songs",children:t.map((function(e){return Object(l.jsx)(H,{albumInfo:!0,track:e},e.trackId)}))}):Object(l.jsx)("h3",{children:"Nenhuma faixa salva."})}),Object(l.jsx)(T,{author:"Vecteezy",className:"image-credit",freepik:!0,href:"https://www.vecteezy.com/free-photos",tag:"Free Stock"})]})}var Y=a.p+"static/media/vecteezy_vector-cute-ghost_.d983ca48.jpg";a(21);function Z(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useContext)(u),s=r.userInfo,j=s.name,b=s.email,d=s.description,m=s.image,p=r.setUserInfo;return Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,I();case 3:t=e.sent,p(t),n(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[p]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(U,{}),Object(l.jsx)("main",{className:"profile-page","data-testid":"page-profile",children:a?Object(l.jsx)(F,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("section",{className:"pic-btn-container",children:[Object(l.jsx)("img",{alt:"Imagem do usu\xe1rio","data-testid":"profile-image",src:m||Y}),Object(l.jsx)(i.b,{to:"/trybe-trybetunes-project/profile/edit",children:Object(l.jsx)("button",{type:"button",children:"Editar perfil"})})]}),Object(l.jsxs)("section",{className:"user-info-container",children:[Object(l.jsx)("h4",{children:"Nome"}),Object(l.jsx)("p",{children:j}),Object(l.jsx)("h4",{children:"Email"}),Object(l.jsx)("p",{children:b}),Object(l.jsx)("h4",{children:"Descri\xe7\xe3o"}),Object(l.jsx)("p",{children:d})]})]})}),Object(l.jsx)(T,{author:"Vecteezy",className:"image-credit",href:"https://www.vecteezy.com/free-photos",tag:"Free Stock"})]})}function ee(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useContext)(u),s=r.userInfo,i=r.setUserInfo,j=s.name,b=s.email,m=s.description,p=s.image,O=Object(d.f)(),x=function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n(!0),e.next=4,C(s);case 4:n(!1),O.push("/profile");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,I();case 3:t=e.sent,i(t),n(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(U,{}),Object(l.jsx)("main",{className:"profile-page","data-testid":"page-profile-edit",children:a?Object(l.jsx)(F,{}):Object(l.jsxs)("form",{className:"user-form-container",onSubmit:x,children:[Object(l.jsx)("img",{alt:"Imagem do usu\xe1rio","data-testid":"profile-image",src:p||Y}),Object(l.jsx)(g,{className:"profile-image-input",dataTestId:"edit-input-image",labelText:"Imagem de perfil",name:"profile-pic",onChange:function(e){var t=e.target.value;return i({name:j,email:b,description:m,image:t})},type:"text",value:p}),Object(l.jsx)(g,{className:"profile-input",dataTestId:"edit-input-name",labelText:"Nome",name:"name",onChange:function(e){var t=e.target.value;return i({name:t,email:b,description:m,image:p})},type:"text",value:j}),Object(l.jsx)(g,{className:"profile-input",dataTestId:"edit-input-email",labelText:"Email",name:"email",onChange:function(e){var t=e.target.value;return i({name:j,email:t,description:m,image:p})},type:"email",value:b}),Object(l.jsxs)("label",{htmlFor:"description",children:["Descri\xe7\xe3o",Object(l.jsx)("textarea",{className:"profile-textarea-input","data-testid":"edit-input-description",name:"description",onChange:function(e){var t=e.target.value;return i({name:j,email:b,description:t,image:p})},value:m})]}),Object(l.jsx)("button",{"data-testid":"edit-button-save",disabled:!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(b)||!j||!m,type:"submit",children:"Salvar"})]})}),Object(l.jsx)(T,{author:"Vecteezy",className:"image-credit",href:"https://www.vecteezy.com/free-photos",tag:"Free Stock"})]})}function te(){return Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{exact:!0,path:"/trybe-trybetunes-project/",component:P}),Object(l.jsx)(d.a,{exact:!0,path:"/trybe-trybetunes-project/search",component:K}),Object(l.jsx)(d.a,{exact:!0,path:"/trybe-trybetunes-project/album/:id",component:W}),Object(l.jsx)(d.a,{exact:!0,path:"/trybe-trybetunes-project/favorites",component:X}),Object(l.jsx)(d.a,{exact:!0,path:"/trybe-trybetunes-project/profile",component:Z}),Object(l.jsx)(d.a,{exact:!0,path:"/trybe-trybetunes-project/profile/edit",component:ee})]})}function ae(){return Object(l.jsx)(i.a,{children:Object(l.jsx)(b,{children:Object(l.jsx)(te,{})})})}s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(ae,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.faf72fc4.chunk.js.map