(this["webpackJsonprecipes-app-test"]=this["webpackJsonprecipes-app-test"]||[]).push([[0],Array(21).concat([function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/shareIcon.06215ed4.svg"},function(e,t,a){e.exports=a.p+"static/media/blackHeartIcon.b8913346.svg"},function(e,t,a){},,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/logo.0df3ef35.png"},,function(e,t,a){e.exports=a.p+"static/media/drinkIcon.f87c47c3.svg"},function(e,t,a){e.exports=a.p+"static/media/exploreIcon.157945ff.svg"},function(e,t,a){e.exports=a.p+"static/media/mealIcon.b27ba19e.svg"},function(e,t,a){e.exports=a.p+"static/media/profileIcon.74e487e5.svg"},function(e,t,a){e.exports=a.p+"static/media/searchIcon.db812135.svg"},function(e,t,a){e.exports=a.p+"static/media/loading.c4cb9abc.gif"},,function(e,t,a){e.exports=a.p+"static/media/whiteHeartIcon.ea3b6ba8.svg"},function(e,t,a){e.exports=a(73)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),i=a.n(c),o=(a(51),a(6)),l=a(7),s=(a(52),a(53),a(3)),u=a.n(s),m=a(5),d=a(1),p=Object(n.createContext)(),b=function(){var e=Object(m.a)(u.a.mark((function e(t,a){var n,r,c,i,o,l,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>2&&void 0!==s[2]?s[2]:"",r={procuraComida:"search.php?s=",procuraId:"lookup.php?i=",procuraBebida:"search.php?s=",random:"random.php",ingredients:"list.php?i=list",ingredientes:"filter.php?i=",area:"list.php?a=list",filterByArea:"filter.php?a=",categories:"list.php?c=list",filterIngredient:"filter.php?i=",filterCategory:"filter.php?c=",primeiraLetra:"search.php?f="},c="".concat({drink:"https://www.thecocktaildb.com/api/json/v1/1/",food:"https://www.themealdb.com/api/json/v1/1/"}[t]).concat(r[a]).concat(n),e.next=6,fetch(c);case 6:return i=e.sent,e.next=9,i.json();case 9:return o=e.sent,e.next=12,o;case 12:return l=e.sent,e.abrupt("return",l);case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var f=function(e){var t=e.children,a=Object(n.useState)(""),c=Object(d.a)(a,2),i=c[0],o=c[1],l=Object(n.useState)(),s=Object(d.a)(l,2),f=s[0],g=s[1],E=Object(n.useState)({food:{},drink:{}}),v=Object(d.a)(E,2),h=v[0],O=v[1],j=Object(n.useState)(),y=Object(d.a)(j,2),k=y[0],x=y[1],S=Object(n.useState)(),N=Object(d.a)(S,2),C=N[0],w=N[1],I=Object(n.useState)(!1),D=Object(d.a)(I,2),F=D[0],R=D[1],T=Object(n.useState)(!1),B=Object(d.a)(T,2),z=B[0],A=B[1],M={handleClick:function(){var e=Object(m.a)(u.a.mark((function e(t,a,n,r){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t,a,n);case 2:c=e.sent,r(c);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),data:h,setName:o,name:i,setData:O,filterByIng:f,setFilterByIng:g,dataMeals:k,setDataMeals:x,dataDrinks:C,setDataDrinks:w,renderFoods:F,setRenderFoods:R,renderDrinks:z,setRenderDrinks:A};return r.a.createElement(p.Provider,{value:M},t)},g=a(36),E=a.n(g);a(55);var v=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),o=Object(d.a)(i,2),s=o[0],u=o[1],m=Object(n.useState)(!0),p=Object(d.a)(m,2),b=p[0],f=p[1],g=Object(n.useState)(!1),v=Object(d.a)(g,2),h=v[0],O=v[1];return Object(n.useEffect)((function(){!function(){var e=/^[a-z0-9](\.|-|_|[a-z]|\d)+@([a-z]|\d)+\.[a-z]{2,3}(\.[a-z]{2})?$/.test(a),t=s.length>6;if(e&&!0===t)f(!1)}()}),[a,s]),h?r.a.createElement(l.a,{to:"/comidas"}):r.a.createElement("div",{className:"loginContainer"},r.a.createElement("header",{className:"loginHeader"},r.a.createElement("img",{className:"logo",src:E.a,alt:"logo"})),r.a.createElement("h1",null,"Find your favorite recipe on iTry!"),r.a.createElement("div",{className:"loginForm"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),localStorage.setItem("mealsToken",1),localStorage.setItem("cocktailsToken",1),localStorage.setItem("user",JSON.stringify({email:a})),O(!0)},className:"container",autoComplete:"off"},r.a.createElement("label",{htmlFor:"email",className:"label-float"},r.a.createElement("input",{type:"text",id:"email",value:a,onChange:function(e){return c(e.target.value)},"data-testid":"email-input",placeholder:" "}),r.a.createElement("p",null,"E-mail")),r.a.createElement("label",{htmlFor:"password",className:"label-float"},r.a.createElement("input",{type:"password",id:"password","data-testid":"password-input",value:s,onChange:function(e){return u(e.target.value)},placeholder:" "}),r.a.createElement("p",null,"Password")),r.a.createElement("button",{className:"btnLogin",type:"submit",disabled:b,"data-testid":"login-submit-btn"},"Entrar"))))},h=a(10),O=(a(64),a(38)),j=a.n(O),y=a(39),k=a.n(y),x=a(40),S=a.n(x);var N=function(){var e=Number(Object(l.h)().pathname.includes("bebidas"))+2*Number(Object(l.h)().pathname.includes("comidas"));return r.a.createElement("footer",{"data-testid":"footer",className:"footer ".concat({0:"neutralStyle",1:"drinkStyle",2:"foodStyle"}[e])},r.a.createElement(o.b,{to:"/bebidas"},r.a.createElement("img",{src:j.a,alt:"bebidas","data-testid":"drinks-bottom-btn"})),r.a.createElement(o.b,{to:"/explorar"},r.a.createElement("img",{src:k.a,alt:"explorar","data-testid":"explore-bottom-btn"})),r.a.createElement(o.b,{to:"/comidas"},r.a.createElement("img",{src:S.a,alt:"bebidas","data-testid":"food-bottom-btn"})))};a(65);var C=function(){var e=Object(l.h)().pathname,t=Object(l.g)(),a=Object(n.useState)(""),c=Object(d.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)(""),f=Object(d.a)(s,2),g=f[0],E=f[1],v=Object(n.useContext)(p),h=v.setDataMeals,O=v.setDataDrinks,j=v.setRenderFoods,y=v.setRenderDrinks,k=function(e){var t=e.target;"pesquisa"===t.name?o(t.value):E(t.id)},x=function(){if("primeiraLetra"===g&&i.length>1)return alert("Sua busca deve conter somente 1 (um) caracter")},S=function(e){if(null===e)return alert("Sinto muito, n\xe3o encontramos nenhuma receita para esses filtros.");1===e.length&&t.push("/comidas/".concat(e[0].idMeal))},N=function(e){if(null===e)return alert("Sinto muito, n\xe3o encontramos nenhuma receita para esses filtros.");1===e.length&&t.push("/bebidas/".concat(e[0].idDrink))},C=function(){var t=Object(m.a)(u.a.mark((function t(){var a,n,r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(x(),"/comidas"!==e){t.next=10;break}return"food",t.next=5,b("food",g,i);case 5:a=t.sent,n=a.meals,h(n),S(n),j(!0);case 10:if("/bebidas"!==e){t.next=19;break}return"drink",t.next=14,b("drink",g,i);case 14:r=t.sent,c=r.drinks,O(c),N(c),y(!0);case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"serchBar"},r.a.createElement("div",{className:"div-do-inferno"},r.a.createElement("input",{className:"barraDeBusca","data-testid":"search-input",name:"pesquisa",type:"text",onChange:k}),r.a.createElement("button",{className:"buttonSearch",type:"button","data-testid":"exec-search-btn",onClick:C},"Buscar")),r.a.createElement("label",{htmlFor:"filter",className:"labelRadio"},r.a.createElement("br",null),r.a.createElement("input",{className:"initialRadio",id:"ingredientes",name:"filter",type:"radio","data-testid":"ingredient-search-radio",onChange:k}),"Ingrediente",r.a.createElement("input",{className:"radio",id:"procuraComida",name:"filter",type:"radio","data-testid":"name-search-radio",onChange:k}),"Nome",r.a.createElement("input",{className:"radio",id:"primeiraLetra",name:"filter",type:"radio","data-testid":"first-letter-search-radio",onChange:k}),"Primeira Letra"))},w=a(41),I=a.n(w),D=a(42),F=a.n(D);var R=function(e){var t=e.titulo,a=e.pesquisa,c=e.className,i=Number(Object(l.h)().pathname.includes("bebidas"))+2*Number(Object(l.h)().pathname.includes("comidas"))+3*Number(Object(l.h)().pathname.includes("perfil")),s=Object(n.useState)(!1),u=Object(d.a)(s,2),m=u[0],p=u[1],b=function(){return p(!m)};return r.a.createElement("div",null,r.a.createElement("header",{className:"header ".concat({0:"neutralStyle",1:"drinkStyle",2:"foodStyle",3:"favoriteAndDone"}[i])},r.a.createElement(o.b,{to:"/perfil"},r.a.createElement("img",{"data-testid":"profile-top-btn",src:I.a,alt:"imagem de pefil"})),r.a.createElement("h3",{"data-testid":"page-title",className:c},t),"true"===a?r.a.createElement("button",{className:"btnSearch",type:"button",onClick:b},r.a.createElement("img",{src:F.a,alt:"icone de busca","data-testid":"search-top-btn"})):null),r.a.createElement("div",{className:"filtros"},m?r.a.createElement(C,null):null))};var T=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),i=Object(d.a)(c,2),o=i[0],l=i[1],s=Object(n.useState)({}),p=Object(d.a)(s,2),f=p[0],g=p[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,b("food","procuraComida");case 3:return t=e.sent,l(t),e.next=7,b("food","categories");case 7:a=e.sent,g(a),r(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),[o,a,f,r]};var B=function(e){var t=e.index,a=e.thumb,n=e.name,c=e.onClick,i=e.apiType;return r.a.createElement("button",{type:"button","data-testid":"".concat(t,i?"-ingredient-card":"-recipe-card"),name:n,className:"cardRecipe",onClick:c},r.a.createElement("img",{"data-testid":"".concat(t,"-card-img"),className:"recipeThumbnail",name:n,src:a,alt:n}),r.a.createElement("span",{"data-testid":"".concat(t,"-card-name"),name:n},n))};function z(e){var t=e.list,a=e.apiType,n=e.page,c=e.onClick;return r.a.createElement("main",{className:"cardContainer"},r.a.createElement("div",{className:"cardList"},t?t.map((function(e,t){return t>11||function(e,t){var i=e["str".concat(a)],l=e["str".concat(a,"1")];return"Ingredient"!==a?r.a.createElement(o.b,{className:"singleCard",to:"/".concat(n,"/").concat(e["id".concat(a)]),key:t},r.a.createElement(B,{index:t,thumb:e["str".concat(a,"Thumb")],name:e["str".concat(a)]})):"bebidas"!==n?r.a.createElement("div",{className:"singleCard"},r.a.createElement(B,{index:t,thumb:"https://www.themealdb.com/images/ingredients/".concat(i,"-Small.png"),name:e["str".concat(a)],onClick:c,apiType:a})):r.a.createElement("div",{className:"singleCard"},r.a.createElement(B,{index:t,thumb:"https://www.thecocktaildb.com/images/ingredients/".concat(l,"-Small.png"),name:e["str".concat(a,"1")],onClick:c,apiType:a}))}(e,t)})):r.a.createElement("div",null,"Empty List")))}z.defaultProps={list:[{}]};var A=z,M=a(12);var P=function(e){var t=e.type,a=e.action,c=e.list,i=e.callback,o=e.setLoading,l=e.toggle,s=e.toggleCallback,d=Object(n.useContext)(p).setFilterByIng,f={food:"procuraComida",drink:"procuraBebida"},g=function(){var e=Object(m.a)(u.a.mark((function e(n){var r,c,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.target,d(null),o(!0),c=r.innerText,l!==c&&"All"!==c){e.next=10;break}return e.next=7,b(t,f[t]);case 7:e.t0=e.sent,e.next=13;break;case 10:return e.next=12,b(t,a,c);case 12:e.t0=e.sent;case 13:m=e.t0,i(m),o(!1),s(c===l?"All":c);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(l),r.a.createElement("aside",{className:"categoryContainer"},r.a.createElement("nav",{className:"categoryButtons"},r.a.createElement(M.a,{className:"All"===l?"btnCategorias btnClicked":"btnCategorias","data-testid":"All-category-filter",onClick:g},"All"),c.map((function(e,t){return t>4||r.a.createElement(M.a,{className:l!==e.strCategory?"btnCategorias":"btnCategorias btnClicked","data-testid":"".concat(e.strCategory,"-category-filter"),key:t,onClick:g},e.strCategory)}))))},L=a(43),J=a.n(L);var q=function(){return r.a.createElement("div",{className:"main-details"},r.a.createElement("div",{className:"loadingContainer"},r.a.createElement("img",{className:"loadingGif",src:J.a,alt:"Loading..."})))},H=function(e,t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{titulo:e,pesquisa:t,className:a}),r.a.createElement(q,null),r.a.createElement(N,null))};a(32);var W=function(){var e=Object(n.useContext)(p),t=e.filterByIng,a=e.renderFoods,c=e.dataMeals,i=e.setFilterByIng,o=Object(n.useState)({}),l=Object(d.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)([]),b=Object(d.a)(m,2),f=b[0],g=b[1],E=T(),v=Object(d.a)(E,4),O=v[0],j=v[1],y=v[2],k=v[3],x=Object(n.useState)("All"),S=Object(d.a)(x,2),C=S[0],w=S[1];return Object(n.useEffect)((function(){u(Object(h.a)({},O)),g(y.meals)}),[O,y]),Object(n.useEffect)((function(){return function(){i(null)}}),[i]),j?H("Comidas","true","foodStyle"):r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{titulo:"Comidas",pesquisa:"true",className:"foodStyle"}),r.a.createElement("div",{className:"pageComida"},r.a.createElement(P,{type:"food",action:"filterCategory",list:f,callback:u,setLoading:k,toggle:C,toggleCallback:w}),a?r.a.createElement(A,{list:c,apiType:"Meal",page:"comidas"}):r.a.createElement(A,{list:t?t.meals:s.meals,apiType:"Meal",page:"comidas"})),r.a.createElement(N,null))};a(21);var $=function(){var e=Object(n.useState)({redirect:!1,path:""}),t=Object(d.a)(e,2),a=t[0],c=t[1];function i(e){var t=e.target.name;e.preventDefault(),c({redirect:!0,path:t})}return a.redirect?r.a.createElement(l.a,{to:"/explorar/".concat(a.path)}):r.a.createElement("div",null,r.a.createElement(R,{titulo:"Explorar"}),r.a.createElement("main",{className:"pageComida"},r.a.createElement("div",{className:"exploreContainer"},r.a.createElement(M.a,{"data-testid":"explore-food",className:"btnExplore",type:"button",name:"comidas",variant:"light",size:"lg",onClick:i},"Explorar Comidas"),r.a.createElement(M.a,{"data-testid":"explore-drinks",className:"btnExplore",type:"button",name:"bebidas",variant:"light",size:"lg",onClick:i},"Explorar Bebidas"))),r.a.createElement(N,null))};var G=function(){var e=Object(n.useState)({idDrink:""}),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({path:""}),o=Object(d.a)(i,2),s=o[0],p=o[1],f=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("drink","random");case 2:t=e.sent,console.log(t),a=t.drinks,c({idDrink:a[0].idDrink});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function g(e){var t=e.target.name;"surprise"===t?f():p({path:t})}return a.idDrink?r.a.createElement(l.a,{to:"/bebidas/".concat(a.idDrink)}):s.path?r.a.createElement(l.a,{to:"/explorar/bebidas/".concat(s.path)}):r.a.createElement("div",null,r.a.createElement(R,{titulo:"Explorar Bebidas"}),r.a.createElement("main",{className:"pageComida"},r.a.createElement("div",{className:"exploreContainer"},r.a.createElement(M.a,{"data-testid":"explore-by-ingredient",className:"btnExploreBebidas",type:"button",name:"ingredientes",variant:"light",size:"lg",onClick:g},"Por Ingredientes"),r.a.createElement(M.a,{"data-testid":"explore-surprise",className:"btnExploreBebidas",type:"button",name:"surprise",variant:"light",size:"lg",onClick:g},"Me Surpreenda!"))),r.a.createElement(N,null))};var V=function(){var e=Object(n.useState)({idMeal:""}),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({path:""}),o=Object(d.a)(i,2),s=o[0],p=o[1],f=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("food","random");case 2:t=e.sent,a=t.meals,c({idMeal:a[0].idMeal});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function g(e){var t=e.target.name;"surprise"===t?f():p({path:t})}return a.idMeal?r.a.createElement(l.a,{to:"/comidas/".concat(a.idMeal)}):s.path?r.a.createElement(l.a,{to:"/explorar/comidas/".concat(s.path)}):r.a.createElement("div",null,r.a.createElement(R,{titulo:"Explorar Comidas"}),r.a.createElement("main",{className:"pageComida"},r.a.createElement("div",{className:"exploreContainer"},r.a.createElement(M.a,{"data-testid":"explore-by-ingredient",className:"btnExploreComidas",type:"button",name:"ingredientes",variant:"light",size:"lg",onClick:g},"Por Ingredientes"),r.a.createElement(M.a,{"data-testid":"explore-by-area",className:"btnExploreComidas",type:"button",name:"area",variant:"light",size:"lg",onClick:g},"Por Local de Origem"),r.a.createElement(M.a,{"data-testid":"explore-surprise",className:"btnExploreComidas",type:"button",name:"surprise",variant:"light",size:"lg",onClick:g},"Me Surpreenda!"))),r.a.createElement(N,null))};var Y=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),i=Object(d.a)(c,2),o=i[0],l=i[1],s=Object(n.useState)({}),p=Object(d.a)(s,2),f=p[0],g=p[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,b("drink","procuraBebida");case 3:return t=e.sent,l(t),e.next=7,b("drink","categories");case 7:a=e.sent,g(a),r(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),[o,a,f,r]};var _=function(){var e=Object(n.useContext)(p),t=e.filterByIng,a=e.renderDrinks,c=e.dataDrinks,i=e.setFilterByIng,o=Object(n.useState)({}),l=Object(d.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)([]),b=Object(d.a)(m,2),f=b[0],g=b[1],E=Y(),v=Object(d.a)(E,4),O=v[0],j=v[1],y=v[2],k=v[3],x=Object(n.useState)("All"),S=Object(d.a)(x,2),C=S[0],w=S[1];return Object(n.useEffect)((function(){u(Object(h.a)({},O)),g(y.drinks)}),[O,y]),Object(n.useEffect)((function(){return function(){i(null)}}),[i]),j?H("Bebidas","true","drinkStyle"):r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{titulo:"Bebidas",pesquisa:"true",className:"drinkStyle"}),r.a.createElement("div",{className:"pageComida"},r.a.createElement(P,{type:"drink",action:"filterCategory",list:f,callback:u,setLoading:k,toggle:C,toggleCallback:w}),a?r.a.createElement(A,{list:c,apiType:"Drink",page:"bebidas"}):r.a.createElement(A,{list:t?t.drinks:s.drinks,apiType:"Drink",page:"bebidas"})),r.a.createElement(N,null))};a(66);var K=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],i=a[1],o=e.history;return Object(n.useEffect)((function(){!function(){var e=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):"";i(e.email)}()}),[]),r.a.createElement("div",null,r.a.createElement(R,{titulo:"Perfil",className:"textPerfil"}),r.a.createElement("div",{className:"perfil pageComida"},r.a.createElement("p",{"data-testid":"profile-email",className:"email"},c),r.a.createElement("div",{className:"PerfilContainer"},r.a.createElement("button",{"data-testid":"profile-done-btn",type:"button",onClick:function(){return o.push("/receitas-feitas")}},"Receitas Feitas"),r.a.createElement("button",{"data-testid":"profile-favorite-btn",type:"button",onClick:function(){return o.push("/receitas-favoritas")}},"Receitas Favoritas"),r.a.createElement("button",{"data-testid":"profile-logout-btn",type:"button",onClick:function(){return localStorage.clear(),void o.push("/")}},"Sair"))),r.a.createElement(N,null))},Q=a(15),U=a(44),X=a(75),Z=(a(67),a(25)),ee=a.n(Z),te=a(33);var ae=function(e){var t=e.url,a=e.index,c=Object(n.useState)(!1),i=Object(d.a)(c,2),o=i[0],s=i[1],u=Object(l.h)().pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:function(){var e=t||"http://localhost:3000".concat(u);te(e),s(!0),setTimeout((function(){return s(!1)}),2e3)},className:"btnShare"},r.a.createElement("img",{src:ee.a,alt:"Compartilhe o link desta receita","data-testid":"".concat(a,"-horizontal-share-btn")})),o&&r.a.createElement("p",null,"Link copiado!"))};var ne=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),o=Object(d.a)(i,2),s=o[0],u=o[1],m=Object(n.useState)(null),p=Object(d.a)(m,2),b=p[0],f=p[1];function g(e,t){f("/".concat(e,"s/").concat(t))}function E(e){var t=e.target.name,a=s.filter((function(e){return e.type.includes(t)}));c(a)}return Object(n.useEffect)((function(){var e=localStorage.getItem("doneRecipes")?JSON.parse(localStorage.getItem("doneRecipes")):[];u(e),c(e)}),[]),b?r.a.createElement(l.a,{to:b}):r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{titulo:"Receitas Feitas",pesquisa:"false",className:"textPerfil"}),r.a.createElement("main",{className:"pageRF"},r.a.createElement("div",{className:"btnFiltro"},r.a.createElement("button",{name:"",type:"button",onClick:E,"data-testid":"filter-by-all-btn"},"All"),r.a.createElement("button",{name:"comida",type:"button",onClick:E,"data-testid":"filter-by-food-btn"},"Food"),r.a.createElement("button",{name:"bebida",type:"button",onClick:E,"data-testid":"filter-by-drink-btn"},"Drinks")),r.a.createElement(U.a,{className:"paiDeTodos"},0===a.length?"Lista vazia!":a.map((function(e,t){return r.a.createElement(Q.a,{className:"listaReceitas",name:e.name,style:{width:"18rem"},key:t},r.a.createElement(Q.a.Img,{"data-testid":"".concat(t,"-horizontal-image"),variant:"top",onClick:function(){return g(e.type,e.id)},src:"".concat(e.image),alt:e.name}),r.a.createElement(Q.a.Body,null,r.a.createElement("div",{className:"paizao"},r.a.createElement(Q.a.Title,{"data-testid":"".concat(t,"-horizontal-name"),onClick:function(){return g(e.type,e.id)}},e.name),r.a.createElement(ae,{className:"btnShare",url:"http://localhost:3000/".concat(e.type,"s/").concat(e.id),index:t})),r.a.createElement(Q.a.Subtitle,{className:"mb-2 text-muted","data-testid":"".concat(t,"-horizontal-top-text")},0===e.area.length?e.alcoholicOrNot:"".concat(e.area," - ").concat(e.category)),r.a.createElement(Q.a.Text,{"data-testid":"".concat(t,"-horizontal-done-date")},e.doneDate),r.a.createElement(X.a,{variant:"flush"},0===e.tags.length?"":e.tags.map((function(e,a){return a>2||r.a.createElement(X.a.Item,{className:"listaReceitas",key:a,"data-testid":"".concat(t,"-").concat(e,"-horizontal-tag")}," ",e," ")})))))})))))},re=(a(68),a(26)),ce=a.n(re);var ie=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),o=Object(d.a)(i,2),s=o[0],u=o[1],m=Object(n.useState)(null),p=Object(d.a)(m,2),b=p[0],f=p[1];function g(e,t){f("/".concat(e,"s/").concat(t))}function E(e){var t=e.target.name,a=s.filter((function(e){return"bebida"===e.type})),n=s.filter((function(e){return"comida"===e.type}));"bebida"===t&&c(a),"comida"===t&&c(n),"all"===t&&c(s)}return Object(n.useEffect)((function(){var e=localStorage.getItem("favoriteRecipes")?JSON.parse(localStorage.getItem("favoriteRecipes")):[];u(e),c(e)}),[]),b?r.a.createElement(l.a,{to:b}):r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{titulo:"Receitas Favoritas",pesquisa:"false",className:"textPerfil "}),r.a.createElement("main",{className:"pageRF"},r.a.createElement("div",{className:"btnFavoriteRecipes"},r.a.createElement("button",{name:"all",type:"button",onClick:E,"data-testid":"filter-by-all-btn"},"All"),r.a.createElement("button",{name:"comida",type:"button",onClick:E,"data-testid":"filter-by-food-btn"},"Food"),r.a.createElement("button",{name:"bebida",type:"button",onClick:E,"data-testid":"filter-by-drink-btn"},"Drinks")),r.a.createElement("div",{className:"paiDeTodos"},0===a.length?"Lista vazia!":a.map((function(e,t){return r.a.createElement(Q.a,{name:e.name,style:{width:"18rem"},key:t,className:"cardRecipe"},r.a.createElement(Q.a.Img,{"data-testid":"".concat(t,"-horizontal-image"),variant:"top",onClick:function(){return g(e.type,e.id)},src:"".concat(e.image),alt:e.name}),r.a.createElement(Q.a.Body,null,r.a.createElement("div",{className:"paizao"},r.a.createElement(Q.a.Title,{"data-testid":"".concat(t,"-horizontal-name"),onClick:function(){return g(e.type,e.id)}},e.name),r.a.createElement(ae,{url:"http://localhost:3000/".concat(e.type,"s/").concat(e.id),index:t}),r.a.createElement("button",{type:"button",className:"button-filtro",name:e.name,onClick:function(){return function(e){var t=s.filter((function(t){return t.name!==e}));c(a.filter((function(t){return t.name!==e}))),u(t),localStorage.setItem("favoriteRecipes",JSON.stringify(t))}(e.name)}},r.a.createElement("img",{className:"shareIcon",alt:e.name,src:ce.a,"data-testid":"".concat(t,"-horizontal-favorite-btn")}))),r.a.createElement("div",{className:"mb-2 text-muted","data-testid":"".concat(t,"-horizontal-top-text")},0===e.area.length?e.alcoholicOrNot:"".concat(e.area," - ").concat(e.category))))})))))},oe=a(14);var le=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(),o=Object(d.a)(i,2),l=o[0],s=o[1],p=Object(n.useState)({selected:"All"}),f=Object(d.a)(p,2),g=f[0],E=f[1],v=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("food","area");case 2:return t=e.sent,a=t.meals,c([{strArea:"All"}].concat(Object(oe.a)(a))),e.next=8,b("food","procuraComida");case 8:n=e.sent,s(Object(oe.a)(n.meals));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v()}),[]),Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("All"!==g.selected){e.next=8;break}return e.next=3,b("food","procuraComida");case 3:t=e.sent,a=t.meals,s(Object(oe.a)(a)),e.next=13;break;case 8:return e.next=10,b("food","filterByArea",g.selected);case 10:n=e.sent,r=n.meals,s(Object(oe.a)(r));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g]),console.log(l),a?r.a.createElement("div",null,r.a.createElement(R,{titulo:"Explorar Origem",pesquisa:"true"}),r.a.createElement("main",{className:"pageComida"},r.a.createElement("select",{className:"select-area","data-testid":"explore-by-area-dropdown",onChange:function(e){var t=e.target.value;E({selected:t})}},a.map((function(e,t){var a=e.strArea;return r.a.createElement("option",{"data-testid":"".concat(a,"-option"),value:a,key:t},a)}))),r.a.createElement(A,{list:l,apiType:"Meal",page:"comidas"})),r.a.createElement(N,null)):r.a.createElement("p",null,"Loading...")};var se=function(){var e=Object(n.useContext)(p).setFilterByIng,t=Object(n.useState)(),a=Object(d.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)({redirect:!1}),s=Object(d.a)(o,2),f=s[0],g=s[1],E=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("food","ingredients");case 2:t=e.sent,a=t.meals,12,n=a.filter((function(e,t){return t<12})),i(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var t=Object(m.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b("food","filterIngredient",a);case 2:n=t.sent,e(Object(h.a)({},n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){E()}),[]),f.redirect?r.a.createElement(l.a,{to:"/comidas"}):c?r.a.createElement("div",null,r.a.createElement(R,{titulo:"Explorar Ingredientes"}),r.a.createElement("main",{className:"pageComida"},r.a.createElement("div",null,r.a.createElement(A,{list:c,apiType:"Ingredient",page:"comidas",onClick:function(e){var t=e.target.name;g({redirect:!0}),v(t)}}))),r.a.createElement(N,null)):H("Explorar Ingredientes")};var ue=function(){var e=Object(n.useContext)(p).setFilterByIng,t=Object(n.useState)(),a=Object(d.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)({redirect:!1,path:""}),s=Object(d.a)(o,2),f=s[0],g=s[1],E=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("drink","ingredients");case 2:t=e.sent,a=t.drinks,12,n=a.filter((function(e,t){return t<12})),i(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var t=Object(m.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b("drink","filterIngredient",a);case 2:n=t.sent,e(Object(h.a)({},n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){E()}),[]),f.redirect?r.a.createElement(l.a,{to:"/bebidas"}):c?r.a.createElement("div",null,r.a.createElement(R,{titulo:"Explorar Ingredientes"}),r.a.createElement("main",{className:"pageComida"},r.a.createElement("div",null,r.a.createElement(A,{list:c,apiType:"Ingredient",page:"bebidas",onClick:function(e){var t=e.target.name;g({redirect:!0,path:t}),v(t)}}))),r.a.createElement(N,null)):H("Explorar Ingredientes")};var me=function(){return r.a.createElement("div",null,r.a.createElement("main",null,r.a.createElement("h1",null,"Not Found")))};a(69);var de=function(e){var t=e.renderData,a=t.id,c=t.pathname,i=t.renderType,o=t.completed,s=t.localStrObject,u=Object(n.useState)(null),m=Object(d.a)(u,2),p=m[0],b=m[1],f=localStorage.getItem("doneRecipes")?JSON.parse(localStorage.getItem("doneRecipes")):[],g=1!==f.filter((function(e){return e.id===a})).length,E=(localStorage.getItem("inProgressRecipes")?localStorage.getItem("inProgressRecipes"):"").includes(a),v=function(e){i&&function(){var e=Object(h.a)({},s);e.doneDate=(new Date).toLocaleDateString(),localStorage.setItem("doneRecipes",JSON.stringify([].concat(Object(oe.a)(f),[e])))}(),b(e)},O=function(e){var t=Object(d.a)(e,4),a=t[0],n=t[1],c=t[2],i=t[3];return r.a.createElement("button",{className:"redirectBtn","data-testid":a,disabled:i,type:"button",onClick:function(){return v(n)}},c)};return p?r.a.createElement(l.a,{to:p}):i?O(["finish-recipe-btn","/receitas-feitas","Finalizar receita",!o]):g&&O(["start-recipe-btn","".concat(c,"/in-progress").replace("//","/"),E?"Continuar Receita":"Iniciar Receita"])},pe=a(45),be=a.n(pe);a(70);var fe=function(e){var t=e.favoriteObject,a=t.id,c=localStorage.getItem("favoriteRecipes")?localStorage.getItem("favoriteRecipes"):"",i=Object(n.useState)(c.includes(a)),o=Object(d.a)(i,2),l=o[0],s=o[1];return r.a.createElement("button",{className:"btnFavorite",type:"button",onClick:function(){var e=Object(h.a)({},t);delete e.tags;var n=""===c?[]:JSON.parse(c),r=l?Object(oe.a)(n).filter((function(e){return e.id!==a})):[].concat(Object(oe.a)(n),[e]);localStorage.setItem("favoriteRecipes",JSON.stringify(r)),s(!l)}},r.a.createElement("img",{src:l?ce.a:be.a,alt:"Favorite","data-testid":"favorite-btn"}))},ge=(a(71),a(33));var Ee=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(l.h)().pathname;return r.a.createElement("div",{className:"btnShareContainer"},r.a.createElement("button",{className:"btnShare",type:"button",onClick:function(){ge("http://localhost:3000".concat(i).replace("/in-progress","")),c(!0),setTimeout((function(){return c(!1)}),2e3)}},r.a.createElement("img",{src:ee.a,alt:"Compartilhe o link desta receita","data-testid":"share-btn"})),a&&r.a.createElement("p",null,"Link copiado!"))};a(27);var ve=function(e){console.log(e);var t=e.recipes,a=t.recommended,c=t.recommendedType,i=Object(n.useState)(0),o=Object(d.a)(i,2),s=o[0],u=o[1],m=Object(n.useState)(null),p=Object(d.a)(m,2),b=p[0],f=p[1],g=function(e,t){return r.a.createElement("button",{type:"button",onClick:function(){return function(e){var t=s+e,a=t>2?0:t;u(a=t<0?2:a)}(t)}},e)};return b?r.a.createElement(l.a,{to:b}):r.a.createElement("section",{className:"carousel"},r.a.createElement("div",{className:"carouselBtnArea"},g("<",-1),g(">",1)),r.a.createElement("div",{className:"recommendedShow"},a.map((function(e,t){return function(e,t){var a=Math.floor(t/2)!==s?" hideCard":"";return r.a.createElement("button",{className:"recommendedCard".concat(a),"data-testid":"".concat(t,"-recomendation-card"),key:t,type:"button",onClick:function(){return f("/".concat(c,"/\n          ").concat(e.idMeal||e.idDrink))}},r.a.createElement("img",{src:e.strMealThumb||e.strDrinkThumb,alt:e.strMeal||e.strDrink}),r.a.createElement("p",null,e.strCategory),r.a.createElement("h3",{"data-testid":"".concat(t,"-recomendation-title")},e.strMeal||e.strDrink))}(e,t)}))))},he=a(19),Oe=(a(72),{comidas:"meals",bebidas:"cocktails"});var je=function(e){var t=e.data,a=t.id,c=t.type,i=t.renderType,o=t.recipe,l=t.setCompleted,s=Oe[c],u=Object.keys(o).filter((function(e){return e.includes("strIngredient")&&null!==o[e]&&""!==o[e]})),m=Object(n.useState)([]),p=Object(d.a)(m,2),b=p[0],f=p[1];Object(n.useEffect)((function(){b.length===u.length?l(!0):l(!1)}),[u,b,l]),Object(n.useEffect)((function(){localStorage.getItem("inProgressRecipes")?f(JSON.parse(localStorage.getItem("inProgressRecipes"))[s][a]||[]):localStorage.setItem("inProgressRecipes",JSON.stringify({cocktails:{},meals:{}}))}),[a,s]);var g=function(e,t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"checkbox",defaultChecked:n,id:"ingredient-".concat(t),onClick:function(){return function(e,t){var n=t?b.filter((function(t){return t!==e})):[].concat(Object(oe.a)(b),[e]).sort();f(n),localStorage.setItem("inProgressRecipes",JSON.stringify(Object(h.a)(Object(h.a)({},JSON.parse(localStorage.getItem("inProgressRecipes"))),{},Object(he.a)({},s,Object(he.a)({},a,n)))))}(t,n)}}),r.a.createElement("label",{htmlFor:"ingredient-".concat(t),className:n&&"checkedIng"},e))};return r.a.createElement(r.a.Fragment,null,function(){var e=i?"-ingredient-step":"-ingredient-name-and-measure";return r.a.createElement("ul",null,u.map((function(t,a){var n=t.match(/\d/g).join(""),c=b.indexOf(n)>=0||null,l="".concat(o[t],": ").concat(o["strMeasure".concat(n)]);return r.a.createElement("li",{key:a,"data-testid":"".concat(a).concat(e)},i?g(l,n,c):l)})))}())};var ye=function(e){var t=e.videoData,a=t.url,n=t.recipeName;return a?r.a.createElement("iframe",{height:"480",src:a.replace("/watch?v=","/embed/"),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture",allowFullScreen:!0,"ng-show":"showvideo",title:"".concat(n," Video"),"data-testid":"video"}):null},ke={comidas:"food",bebidas:"drink"},xe={comidas:"Meal",bebidas:"Drink"};var Se=function(){var e=Object(l.h)().pathname,t=e.split("/"),a=Object(d.a)(t,4),c=a[1],i=a[2],o=a[3],s="comidas"===c?"bebidas":"comidas",p=Object(n.useState)(!1),f=Object(d.a)(p,2),g=f[0],E=f[1],v=Object(n.useState)(!1),h=Object(d.a)(v,2),O=h[0],j=h[1],y=Object(n.useState)(!1),k=Object(d.a)(y,2),x=k[0],S=k[1];Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r,c,i,o,l,s,m,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(d.a)(t,5),n=a[0],r=a[1],c=a[2],i=a[3],o=a[4],console.log(n,r,c,i,o),e.next=4,b(n,r,c);case 4:l=e.sent,s=l.meals,m=l.drinks,p=s||m,console.log(p),p=i>1?p.slice(0,i):p[0],o(p);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e([ke[c],"procuraId",i,1,E]),e([ke[s],"procuraComida","",6,j])}),[i,s,c]);var N=g.strYoutube,C=g.strMeal,w=g.strDrink||C,I={id:i,type:c.replace("s",""),area:g.strArea?g.strArea:"",category:g.strCategory,alcoholicOrNot:g.strAlcoholic?g.strAlcoholic:"",name:g["str".concat(xe[c])],image:g["str".concat(xe[c],"Thumb")],tags:g.strTags?g.strTags.split(","):""};return g&&O?r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"main-details"},r.a.createElement("img",{src:g["str".concat(xe[c],"Thumb")],alt:w,"data-testid":"recipe-photo",className:"thumbnail-details"}),r.a.createElement("h1",{"data-testid":"recipe-title"},w),r.a.createElement("div",{className:"btnIcons"},r.a.createElement(Ee,null),r.a.createElement(fe,{favoriteObject:I})),r.a.createElement("h2",{"data-testid":"recipe-category"},"comidas"===c?g.strCategory:g.strAlcoholic),r.a.createElement("br",null),r.a.createElement("h3",null,"Ingredients"),r.a.createElement(je,{key:e,data:{id:i,type:c,renderType:o,recipe:g,setCompleted:S}}),r.a.createElement("br",null),r.a.createElement("h3",null,"Instructions"),r.a.createElement("p",{"data-testid":"instructions"},g.strInstructions),r.a.createElement("br",null),r.a.createElement(ye,{videoData:{url:N,recipeName:w}}),r.a.createElement("br",null),r.a.createElement(ve,{key:e,recipes:{recommended:O,recommendedType:s}}),r.a.createElement("br",null)),r.a.createElement(de,{key:e,renderData:{pathname:e,id:i,renderType:o,completed:x,localStrObject:I}})):r.a.createElement(q,null)};var Ne=function(){return r.a.createElement(f,null,r.a.createElement(o.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:v}),r.a.createElement(l.b,{exact:!0,path:"/comidas",component:W}),r.a.createElement(l.b,{exact:!0,path:"/bebidas",component:_}),r.a.createElement(l.b,{exact:!0,path:"/comidas/:id",key:1,component:Se}),r.a.createElement(l.b,{exact:!0,path:"/bebidas/:id",key:2,component:Se}),r.a.createElement(l.b,{exact:!0,path:"/comidas/:id/in-progress",key:3,component:Se}),r.a.createElement(l.b,{exact:!0,path:"/bebidas/:id/in-progress",key:4,component:Se}),r.a.createElement(l.b,{exact:!0,path:"/explorar/comidas",component:V}),r.a.createElement(l.b,{exact:!0,path:"/explorar/bebidas",component:G}),r.a.createElement(l.b,{exact:!0,path:"/explorar/comidas/area",component:le}),r.a.createElement(l.b,{exact:!0,path:"/explorar/comidas/ingredientes",component:se}),r.a.createElement(l.b,{exact:!0,path:"/explorar/bebidas/ingredientes",component:ue}),r.a.createElement(l.b,{exact:!0,path:"/explorar",component:$}),r.a.createElement(l.b,{exact:!0,path:"/perfil",component:K}),r.a.createElement(l.b,{exact:!0,path:"/receitas-feitas",component:ne}),r.a.createElement(l.b,{exact:!0,path:"/receitas-favoritas",component:ie}),r.a.createElement(l.b,{path:"/",component:me}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[46,1,2]]]);
//# sourceMappingURL=main.068ad8fb.chunk.js.map