(this.webpackJsonpmyproductpage=this.webpackJsonpmyproductpage||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"data":[{"name":"Cosmetics","productList":[{"name":"Hair Oil","price":122},{"name":"Face wash","price":123}]},{"name":"Household","productList":[{"name":"Hair Oil","price":122},{"name":"Face wash","price":123}]}]}')},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),o=c(6),a=c.n(o),i=(c(13),c(14),c(5)),s=c(8),u=(c(15),c(0));var d=function(e){var t=Object(n.useState)([]),c=Object(s.a)(t,2),r=c[0],o=c[1];Object(n.useEffect)((function(){console.log(r)}),[r]);var a=function(e){return"".concat(e,"_").concat((new Date).getTime())},d=function(e,t){return"".concat(t,"_").concat(e,"_").concat((new Date).getTime())};return Object(u.jsx)("div",{className:"Outer",children:e.ProductList.map((function(e,t){return Object(u.jsxs)("div",{className:"ProductCell",children:[Object(u.jsxs)("h3",{children:["Name : ",e.name]},a(e.name)),Object(u.jsxs)("h3",{children:["Price : ",e.price]},a(e.price)),Object(u.jsx)("button",{onClick:function(){return function(e){o([].concat(Object(i.a)(r),[e])),console.log("Product Added to the cart.")}(e)},children:"Add to the cart"},d(t,e.name)),Object(u.jsx)("button",{onClick:function(){return function(e){var t=Object(i.a)(r);if(t.length>0){var c=r.indexOf(e);c>=0?(t.splice(c,1),console.log("Product removed from the cart.")):console.log("this Item is not Present in Cart")}else console.log("Cart is Empty");o(t)}(e)},children:"Remove from cart"},d(t,e.price))]},a(t))}))})},l=c(7);var m=function(){var e=function(e){return"".concat(e,"_").concat((new Date).getTime())},t=function(e,t){return"".concat(t,"_").concat(e,"_").concat((new Date).getTime())};return Object(u.jsx)("div",{className:"App",children:l.data.map((function(c,n){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"Header",children:[Object(u.jsx)("p",{children:c.name},n),Object(u.jsx)("hr",{style:{backgroundColor:"black"}},e(n))]}),Object(u.jsx)("div",{className:"Itme",children:Object(u.jsx)(d,{ProductList:c.productList},t(n,c.name))},e(c.name))]})}))})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),j()}],[[17,1,2]]]);
//# sourceMappingURL=main.37528de3.chunk.js.map