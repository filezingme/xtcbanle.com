(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(88),c=a.n(l),o=(a(99),a(89)),i=a(7),s=(a(101),a(36)),u=a.n(s),m=a(5),d=a(44),h=(a(139),a(27)),p=a(42),f=a(162);var g=function(e){var t=e.page,a=e.pages,n=e.maxPageDisplay,l=void 0===n?5:n,c=e.category,o=void 0===c?null:c,i=e.handleConvertToUrlFriendly,s=o?"".concat("","/").concat(i(o),"/"):"".concat("","/");return!isNaN(t)&&a&&r.a.createElement(f.a,null,1!==a&&1!==t?r.a.createElement(f.a.First,{href:"".concat(s,"1/"),title:"Trang \u0111\u1ea7u",alt:"Trang \u0111\u1ea7u"},r.a.createElement("i",{className:"fas fa-angle-double-left"})):r.a.createElement(f.a.First,{disabled:!0},r.a.createElement("i",{className:"fas fa-angle-double-left"})),t>1?r.a.createElement(f.a.Prev,{href:"".concat(s).concat(t-1,"/"),title:"Trang tr\u01b0\u1edbc",alt:"Trang tr\u01b0\u1edbc"},r.a.createElement("i",{className:"fas fa-angle-left"})):r.a.createElement(f.a.Prev,{disabled:!0},r.a.createElement("i",{className:"fas fa-angle-left"})),Object(p.a)(Array(a).keys()).map(function(e){return t===e+1?r.a.createElement(f.a.Item,{key:e+1,active:!0,href:"".concat(s).concat(e+1,"/"),title:"Trang ".concat(e+1),alt:"Trang ".concat(e+1)},e+1):e+1>t&&e+1<=t+l?r.a.createElement(r.a.Fragment,{key:e+1},r.a.createElement(f.a.Item,{href:"".concat(s).concat(e+1,"/"),title:"Trang ".concat(e+1),alt:"Trang ".concat(e+1)},e+1),e+1===t+l&&e+1<a&&r.a.createElement(f.a.Ellipsis,{href:"".concat(s).concat(t+(l+1),"/"),title:"Trang ".concat(t+(l+1)),alt:"Trang ".concat(t+(l+1))})):e+1<t&&e+1>=t-l&&r.a.createElement(r.a.Fragment,{key:e+1},e+1===t-l&&e+1>1&&r.a.createElement(f.a.Ellipsis,{href:"".concat(s).concat(t-(l+1),"/"),title:"Trang ".concat(t-(l+1)),alt:"Trang ".concat(t-(l+1))}),r.a.createElement(f.a.Item,{href:"".concat(s).concat(e+1,"/"),title:"Trang ".concat(e+1),alt:"Trang ".concat(e+1)},e+1))}),t<a?r.a.createElement(f.a.Next,{href:"".concat(s).concat(t+1,"/"),title:"Trang sau",alt:"Trang sau"},r.a.createElement("i",{className:"fas fa-angle-right"})):r.a.createElement(f.a.Next,{disabled:!0},r.a.createElement("i",{className:"fas fa-angle-right"})),a!==t?r.a.createElement(f.a.Last,{href:"".concat(s).concat(a,"/"),title:"Trang cu\u1ed1i",alt:"Trang cu\u1ed1i"},r.a.createElement("i",{className:"fas fa-angle-double-right"})):r.a.createElement(f.a.Last,{disabled:!0},r.a.createElement("i",{className:"fas fa-angle-double-right"})))},E=function(e){var t=e.image,a=e.thumb,n=e.title,l=e.group;return r.a.createElement(d.LightgalleryItem,{group:l,src:t,thumb:a},r.a.createElement("img",{src:a,style:{width:"100%"},loading:"lazy",alt:n,title:n}))};var v=function(e){var t=e.data,a=e.handleShowOrderForm,l=e.handleShowProductReadMore,c=e.handleActivedMenuItem,o=e.handleConvertToUrlFriendly,s=Object(n.useState)(null),u=Object(i.a)(s,2),p=u[0],f=u[1],v=Object(m.g)(),y=v.categoryName,b=v.productName,w=v.productId,O=v.page,T=void 0===O?1:O;function N(e){return e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}function j(e,t,a){return N(null!==t&&void 0!==t?e+t/100*e:null!==a&&void 0!==a?e+a/100*e:e)}Object(n.useEffect)(function(){if(!p){console.log("Product component",{categoryName:y,productName:b,productId:w,page:T});var e={};t.paginateConfig&&(e.itemsPerPage=t.paginateConfig.itemsPerPage,e.maxPageDisplay=t.paginateConfig.maxPageDisplay);var a=t.products;if(y&&(a=a.filter(function(e){return o(e.category)===o(y)}),c(y)),b&&w){var n=t.products.filter(function(e){return o(e.title)===o(b)&&e.id===parseInt(w)})[0];n.priceToUser=j(n.priceInfo.price,n.priceInfo.percentagePriceIncrease,t.siteInfo.percentagePriceIncreaseAppliesToAllProducts),l(null,n,!1)}var r=a.slice((parseInt(T)-1)*e.itemsPerPage,parseInt(T)*e.itemsPerPage);e.productList=r,e.totalPages=Math.ceil(a.length/e.itemsPerPage),e.siteInfo=t.siteInfo,f(e)}},[y,T]);var x=function(e,t){return null!==e&&void 0!==e&&e.length>t},I=function(e,t){var a=e.description;if(null!==a&&void 0!==a){var n=a.match(/\d+(?:\.\d+)?/g);n&&n.forEach(function(n){if(n>1e4){var r=j(Number(n),e.priceInfo.percentagePriceIncrease,t);a=a.replace(n,r),e.DescByOtherPriceInPercentage=a}})}return a};return p&&r.a.createElement(r.a.Fragment,null,p.productList.map(function(e){return e.priceToUser=j(e.priceInfo.price,e.priceInfo.percentagePriceIncrease,p.siteInfo.percentagePriceIncreaseAppliesToAllProducts),e.productFirstThumbnailUrl=""+"/assets/images/product/thumbnail/".concat(e.images[0]),r.a.createElement("section",{key:e.id},r.a.createElement("header",null,r.a.createElement("h1",{className:"home-product-title",onClick:function(t){l(t,e)}},e.title)),r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("h2",null,"Gi\xe1: ",r.a.createElement("span",{className:"price"},e.priceToUser),r.a.createElement("input",{type:"hidden",id:"price",value:N(e.priceInfo.price)}),r.a.createElement("input",{type:"hidden",id:"percentagePriceIncrease",value:e.priceInfo.percentagePriceIncrease}),r.a.createElement("input",{type:"hidden",id:"percentagePriceIncreaseAppliesToAllProducts",value:p.siteInfo.percentagePriceIncreaseAppliesToAllProducts})),r.a.createElement("h3",null,r.a.createElement("i",null,"M\xe3: ",r.a.createElement("strong",null,e.id)),r.a.createElement("br",null),r.a.createElement("i",null,"Nh\xf3m: ",r.a.createElement("a",{href:""+"/".concat(o(e.category),"/1/")},e.category)),r.a.createElement("br",null),r.a.createElement("br",null)),e.description&&r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-quote-left fa-2x fa-pull-left"}),r.a.createElement("p",{className:"excerpt",onClick:function(t){return l(t,e)}},function(e,t,a,n){var r=I(e,n);if(x(r,t)){var l=(r=r.substring(0,t)).lastIndexOf(" ");r=r.substr(0,l)+a}return Object(h.a)(r)}(e,100," ...",p.siteInfo.percentagePriceIncreaseAppliesToAllProducts),x(e.description,100)&&r.a.createElement("i",{className:"read-more"},"Xem th\xeam"))),r.a.createElement("h2",{className:"h2buy"},r.a.createElement("a",{href:"/#",className:"buy",onClick:function(t){return a(t,e)}},p.siteInfo.buyBtnText))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"gallery"},r.a.createElement(d.LightgalleryProvider,null,e.images.map(function(t,a){return r.a.createElement(E,{key:a,image:""+"/assets/images/product/".concat(t),thumb:""+"/assets/images/product/thumbnail/".concat(t),title:e.title,group:e.id.toString()})})))))))}),r.a.createElement("div",{className:"pagination-box1"},r.a.createElement(g,{page:parseInt(T),pages:p.totalPages,maxPageDisplay:p.maxPageDisplay,category:y,handleConvertToUrlFriendly:o})),r.a.createElement("section",null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"pagination-box2"},r.a.createElement(g,{page:parseInt(T),pages:p.totalPages,maxPageDisplay:p.maxPageDisplay,category:y,handleConvertToUrlFriendly:o})))))},y=a(54),b=a(75);var w=function(e){var t=e.categoryList,a=e.handleClose,n=e.isShow,l=e.activedItem,c=e.handleConvertToUrlFriendly;return t&&r.a.createElement(y.a,{show:n,onHide:a},r.a.createElement(y.a.Header,{closeButton:!0},r.a.createElement(y.a.Title,null,"NH\xd3M S\u1ea2N PH\u1ea8M")),r.a.createElement(y.a.Body,null,r.a.createElement(b.a,{className:"flex-column"},t.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(b.a.Link,{href:""+"/".concat(c(e.name),"/1/"),className:c(l)===c(e.name)?"actived":""},r.a.createElement("i",{className:"fas fa-angle-right"})," ",e.name," (",e.count,")"))}))))},O=a(74),T=a(25),N=a.n(T),j=a(51),x=a(18),I=a(13),C=a(50),S=a(31);a(57);var P=function(){return r.a.createElement("img",{id:"imgloading",src:"/assets/images/loading.gif",title:"loading",alt:"loading"})};var L=function(e){var t=e.siteInfo,a=e.handleClose,l=e.isShow,c=e.product,o=e.mailConfig,s=Object(n.useState)(!1),m=Object(i.a)(s,2),d=m[0],h=m[1],p=Object(n.useState)(""),f=Object(i.a)(p,2),g=f[0],E=f[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),b=y[0],w=y[1],O=Object(n.useState)(""),T=Object(i.a)(O,2),N=T[0],L=T[1],F=Object(n.useState)(0),k=Object(i.a)(F,2),A=(k[0],k[1],Object(n.useState)(function(){return Date.now()})),D=Object(i.a)(A,2),U=D[0],B=D[1],G=Object(n.useState)(!1),_=Object(i.a)(G,2),M=_[0],H=_[1],z=Object(n.useState)(!1),q=Object(i.a)(z,2),R=q[0],V=q[1],K=Object(n.useState)(!1),X=Object(i.a)(K,2),J=X[0],Y=X[1];return Object(n.useEffect)(function(){V(!1),h(!1)},[l]),t&&c&&o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{size:"lg",show:l,onHide:a,backdrop:"static",keyboard:!1},r.a.createElement(x.a,{noValidate:!0,validated:d,onSubmit:function(e){if(!1===e.currentTarget.checkValidity())e.preventDefault(),e.stopPropagation();else{e.preventDefault();var t={mailType:"Order",productTitle:c.title,productId:c.id,priceToUser:c.priceToUser,name:g,email:b,content:N,orderId:U,productFirstThumbnailUrl:c.productFirstThumbnailUrl,mailConfig:{toEmailAddress:o.toEmailAddress,cc:o.cc,bcc:o.bcc}};H(!0),u()({url:o.mailServiceUrl,method:"post",headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"},data:t}).then(function(e){H(!1),e.data.result&&"error"===e.data.result?(console.log(e),Y(!0)):(B(Date.now()),V(!0),E(""),w(""),L("")),h(!1)}).catch(function(e){console.log(e)})}h(!0)}.bind(this)},r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,null,'\u0110\u1eb7t mua "',c.title," (",c.id,')"'),M&&r.a.createElement(P,null),R&&r.a.createElement("p",{id:"ploading"},r.a.createElement("span",{role:"img","aria-label":"success"},"\u2714")," \u0110\xe3 g\u1eedi."),J&&r.a.createElement("p",{id:"ploading-error"},r.a.createElement("span",{role:"img","aria-label":"error"},"\u274c")," L\u1ed7i.")),r.a.createElement(I.a.Body,null,r.a.createElement(x.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1"},r.a.createElement(C.a,null,r.a.createElement(S.a,{xs:6,md:6},r.a.createElement(x.a.Control,{type:"text",placeholder:"T\xean",required:!0,value:g,onChange:function(e){return E(e.target.value)}})),r.a.createElement(S.a,{xs:6,md:6},r.a.createElement(x.a.Control,{type:"email",placeholder:"Email",required:!0,value:b,onChange:function(e){return w(e.target.value)}})))),r.a.createElement(x.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},r.a.createElement(x.a.Control,{as:"textarea",rows:6,placeholder:"Th\xf4ng tin li\xean h\u1ec7",required:!0,value:N,onChange:function(e){return L(e.target.value)}}),r.a.createElement(x.a.Control,{type:"hidden",value:U})),r.a.createElement(x.a.Group,{controlId:"exampleForm.ControlInput2"},r.a.createElement(C.a,null,r.a.createElement(S.a,{xs:12,sm:12},r.a.createElement(x.a.Control,{type:"text",placeholder:"Nh\u1eadp m\xe3 khuy\u1ebfn m\u1ea1i (n\u1ebfu c\xf3)",width:"50px",value:b,onChange:function(e){return w(e.target.value)}}),r.a.createElement(x.a.Text,{className:"text-muted"},"Gi\xe1 \u0111\xe3 \xe1p d\u1ee5ng khuy\u1ebfn m\u1ea1i ",r.a.createElement("span",null,"1,400,000")," (gi\u1ea3m 20%)"))))),r.a.createElement(I.a.Footer,null,r.a.createElement(j.a,{variant:"secondary",onClick:a},"\u0110\xf3ng"),r.a.createElement(j.a,{variant:"primary",type:"submit"},"G\u1eedi")))))},F=a(28);var k=function(e){var t=e.handleClose,a=e.isShow,l=e.pagesTab,c=e.mailConfig,o=Object(n.useState)(!1),s=Object(i.a)(o,2),m=s[0],d=s[1],p=Object(n.useState)(""),f=Object(i.a)(p,2),g=f[0],E=f[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),b=y[0],w=y[1],O=Object(n.useState)(""),T=Object(i.a)(O,2),N=T[0],P=T[1],L=Object(n.useState)(!1),k=Object(i.a)(L,2),A=k[0],D=k[1],U=Object(n.useState)(!1),B=Object(i.a)(U,2),G=B[0],_=B[1],M=Object(n.useState)(!1),H=Object(i.a)(M,2),z=H[0],q=H[1];return Object(n.useEffect)(function(){_(!1),d(!1)},[a]),l&&r.a.createElement(I.a,{size:"lg",show:a,onHide:t,backdrop:"static",keyboard:!1,className:"pagesTab",scrollable:!0},r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,null,"Th\xf4ng tin")),r.a.createElement(I.a.Body,null,r.a.createElement(F.a,{alwaysOpen:!0},l.aboutUs&&r.a.createElement(F.a.Item,{eventKey:"0"},r.a.createElement(F.a.Header,null,l.aboutUs.title),r.a.createElement(F.a.Body,null,Object(h.a)(l.aboutUs.content))),l.servicesAndOthers&&r.a.createElement(F.a.Item,{eventKey:"1"},r.a.createElement(F.a.Header,null,l.servicesAndOthers.title),r.a.createElement(F.a.Body,null,Object(h.a)(l.servicesAndOthers.content))),l.contact&&r.a.createElement(F.a.Item,{eventKey:"2"},r.a.createElement(F.a.Header,null,l.contact.title),r.a.createElement(F.a.Body,null,Object(h.a)(l.contact.content),r.a.createElement(x.a,{noValidate:!0,validated:m,onSubmit:function(e){if(!1===e.currentTarget.checkValidity())e.preventDefault(),e.stopPropagation();else{e.preventDefault();var t={mailType:"Contact",name:g,email:b,content:N,mailConfig:{toEmailAddress:c.toEmailAddress,cc:c.cc,bcc:c.bcc}};D(!0),u()({url:c.mailServiceUrl,method:"post",headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"},data:t}).then(function(e){D(!1),e.data.result&&"error"===e.data.result?q(!0):(_(!0),E(""),w(""),P("")),d(!1)}).catch(function(e){console.log(e)})}d(!0)}.bind(this),style:{marginBottom:"0px"}},r.a.createElement(I.a.Header,null,r.a.createElement(I.a.Title,null,"G\u1eedi li\xean h\u1ec7"),A&&r.a.createElement("img",{id:"imgloading",src:"/assets/images/loading.gif",title:"loading",alt:"loading"}),G&&r.a.createElement("p",{id:"ploading"},r.a.createElement("span",{role:"img","aria-label":"success"},"\u2714")," \u0110\xe3 g\u1eedi."),z&&r.a.createElement("p",{id:"ploading-error"},r.a.createElement("span",{role:"img","aria-label":"error"},"\u274c")," L\u1ed7i.")),r.a.createElement(I.a.Body,null,r.a.createElement(x.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1"},r.a.createElement(C.a,null,r.a.createElement(S.a,{xs:6,md:6},r.a.createElement(x.a.Control,{type:"text",placeholder:"T\xean",required:!0,value:g,onChange:function(e){return E(e.target.value)}})),r.a.createElement(S.a,{xs:6,md:6},r.a.createElement(x.a.Control,{type:"email",placeholder:"Email",required:!0,value:b,onChange:function(e){return w(e.target.value)}})))),r.a.createElement(x.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},r.a.createElement(x.a.Control,{as:"textarea",rows:6,placeholder:"Th\xf4ng tin li\xean h\u1ec7",required:!0,value:N,onChange:function(e){return P(e.target.value)}}))),r.a.createElement(I.a.Footer,null,r.a.createElement(j.a,{variant:"primary",type:"submit"},"G\u1eedi"))))))))};var A=function(e){var t=e.handleShowCopyright;return console.log("PageNotFound component"),Object(n.useEffect)(function(){return console.log("PageNotFound useEffect"),t(!1),function(e){console.log("PageNotFound unmounts")}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"PageNotFound"},r.a.createElement("h1",null,"Page Not Found"),r.a.createElement("h5",null,"There's nothing here :(")))};var D=function(e){var t=e.handleClose,a=e.isShow,l=e.product,c=e.handleConvertToUrlFriendly;return Object(n.useEffect)(function(){},[a]),l&&r.a.createElement(I.a,{size:"lg",show:a,onHide:function(){return t(!1)},"aria-labelledby":"example-modal-sizes-title-lg",className:"productReadMore",scrollable:!0},r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,{id:"example-modal-sizes-title-lg"},l.title," (",l.id,")")),r.a.createElement(I.a.Body,null,r.a.createElement("h2",null,"Gi\xe1: ",r.a.createElement("span",{className:"price"},l.priceToUser)),r.a.createElement("h3",null,r.a.createElement("i",null,"M\xe3: ",r.a.createElement("strong",null,l.id)),r.a.createElement("br",null),l.category&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",null,"Nh\xf3m: ",r.a.createElement("a",{href:""+"/".concat(c(l.category),"/1/")},l.category)),r.a.createElement("br",null),r.a.createElement("br",null))),l.DescByOtherPriceInPercentage?r.a.createElement("div",{className:"product-read-more-desc"},Object(h.a)(l.DescByOtherPriceInPercentage)):l.description&&r.a.createElement("div",{className:"product-read-more-desc"},Object(h.a)(l.description)),r.a.createElement("p",{className:"galleryTitle"},r.a.createElement("strong",null,"H\xecnh \u1ea3nh s\u1ea3n ph\u1ea9m")),l.images&&l.images.map(function(e,t){return r.a.createElement("img",{key:t,src:""+"/assets/images/product/".concat(e),style:{width:"100%"},loading:"lazy",alt:l.title,title:l.title})})))};var U=function(e){var t=e.customersTalkList,a=e.handleClose,n=e.isShow,l=e.handleShowLightGalleryAboveModal,c=e.showLightGalleryAboveModal;return t&&r.a.createElement(I.a,{size:"lg",show:n,onHide:function(){return a(!1)},"aria-labelledby":"example-modal-sizes-title-lg",scrollable:!0,className:c?"customers_talk_modal":""},r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,{id:"example-modal-sizes-title-lg"},"Kh\xe1ch h\xe0ng \u0111\xe3 mua")),r.a.createElement(I.a.Body,null,t.map(function(e,t){return r.a.createElement("div",{key:t,className:"card mb-4"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-lg-5 col-md-5 col-xs-6 ps-0"},r.a.createElement("div",{className:"customer_photos"},r.a.createElement(d.LightgalleryProvider,{onCloseAfter:function(e){return l(!1)}},e.images.map(function(a,n){var c=""+"/assets/images/customers/thumbnail/".concat(a),o=""+"/assets/images/customers/".concat(a);return r.a.createElement("div",{key:n,className:"item item".concat(e.images.length)},r.a.createElement(d.LightgalleryItem,{group:t.toString(),src:o,thumb:c},r.a.createElement("img",{src:c,loading:"lazy",alt:e.title,title:e.title,onClick:function(e){return l(!0)}})))})))),r.a.createElement("div",{className:"col-lg-7 col-md-7 col-xs-6"},r.a.createElement("div",{className:"customer_body"},r.a.createElement("h2",{className:"card-title customer_title"},e.title),r.a.createElement("div",{className:"customer_content"},Object(h.a)(e.content)),r.a.createElement("p",{className:"card-text customer_author"},r.a.createElement("small",{className:"text-muted"},e.author))))))})))};function B(){B=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(x){o=function(e,t,a){return e[t]=a}}function i(e,t,a,n){var r=t&&t.prototype instanceof m?t:m,l=Object.create(r.prototype),c=new T(n||[]);return l._invoke=function(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return j()}for(a.method=r,a.arg=l;;){var c=a.delegate;if(c){var o=b(c,a);if(o){if(o===u)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=s(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}(e,a,c),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(x){return{type:"throw",arg:x}}}e.wrap=i;var u={};function m(){}function d(){}function h(){}var p={};o(p,r,function(){return this});var f=Object.getPrototypeOf,g=f&&f(f(N([])));g&&g!==t&&a.call(g,r)&&(p=g);var E=h.prototype=m.prototype=Object.create(p);function v(e){["next","throw","return"].forEach(function(t){o(e,t,function(e){return this._invoke(t,e)})})}function y(e,t){var n;this._invoke=function(r,l){function c(){return new t(function(n,c){!function n(r,l,c,o){var i=s(e[r],e,l);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,c,o)},function(e){n("throw",e,c,o)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return n("throw",e,c,o)})}o(i.arg)}(r,l,n,c)})}return n=n?n.then(c,c):c()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function N(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=h,o(E,"constructor",h),o(h,"constructor",d),d.displayName=o(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,o(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},v(y.prototype),o(y.prototype,l,function(){return this}),e.AsyncIterator=y,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var c=new y(i(t,a,n,r),l);return e.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},v(E),o(E,c,"Generator"),o(E,r,function(){return this}),o(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=N,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],c=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var o=a.call(l,"catchLoc"),i=a.call(l,"finallyLoc");if(o&&i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(o){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;O(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:N(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var G=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),s=Object(i.a)(c,2),d=s[0],h=s[1];function p(){return(p=Object(o.a)(B().mark(function e(){var t,a,n,r;return B().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/data.json");case 2:t=e.sent,a=t.data,document.title=a.siteInfo.pageTitle,l(a),a.products&&(n=Array.from(new Set(a.products.map(function(e){return e.category}))))&&(r=[],n.forEach(function(e){r.push({name:e,count:a.products.filter(function(t){return t.category===e}).length})}),h(r));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(n.useEffect)(function(){!function(){p.apply(this,arguments)}()},[]),N()(window).on("scroll",function(){N()(this).scrollTop()>100?N()("#toTop").fadeIn():N()("#toTop").fadeOut(),N()(window).scrollTop()+N()(window).height()===N()(document).height()?N()("#toBottom").fadeOut():N()("#toBottom").fadeIn()});var f=Object(n.useState)(!1),g=Object(i.a)(f,2),E=g[0],y=g[1],b=Object(n.useState)({}),T=Object(i.a)(b,2),j=T[0],x=T[1],I=function(e,t){e.preventDefault(),y(!0),x(t)},C=Object(n.useState)(!1),S=Object(i.a)(C,2),P=S[0],F=S[1],G=Object(n.useState)(""),_=Object(i.a)(G,2),M=_[0],H=_[1],z=function(e){H(e)},q=Object(n.useState)(!0),R=Object(i.a)(q,2),V=R[0],K=R[1],X=Object(n.useState)(!1),J=Object(i.a)(X,2),Y=J[0],$=J[1],Q=Object(n.useState)(!1),W=Object(i.a)(Q,2),Z=W[0],ee=W[1],te=Object(n.useState)(!1),ae=Object(i.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)(!1),ce=Object(i.a)(le,2),oe=ce[0],ie=ce[1],se=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(ie(!0),x(t),console.log(t,a),a&&window.history.replaceState){var n="/product/".concat(ue(t.title),"-").concat(t.id,"/");window.history.replaceState(null,t.title,n)}},ue=function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\u0111/g,"d").replace(/\u0110/g,"D").replace(/[^a-z0-9_]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()};return a&&r.a.createElement(O.a,{basename:""},r.a.createElement("div",{id:"wrapper"},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",element:r.a.createElement(v,{data:a,handleShowOrderForm:I,handleShowProductReadMore:se,handleActivedMenuItem:z,handleConvertToUrlFriendly:ue}),exact:!0},r.a.createElement(m.a,{path:":page/",element:r.a.createElement(v,{data:a,handleShowOrderForm:I,handleShowProductReadMore:se,handleActivedMenuItem:z,handleConvertToUrlFriendly:ue}),exact:!0})),r.a.createElement(m.a,{path:"/:categoryName/:page/",element:r.a.createElement(v,{data:a,handleShowOrderForm:I,handleShowProductReadMore:se,handleActivedMenuItem:z,handleConvertToUrlFriendly:ue}),exact:!0}),r.a.createElement(m.a,{path:"/product/:productName-:productId/",element:r.a.createElement(v,{data:a,handleShowOrderForm:I,handleShowProductReadMore:se,handleActivedMenuItem:z,handleConvertToUrlFriendly:ue,exact:!0}),exact:!0}),r.a.createElement(m.a,{path:"*",element:r.a.createElement(A,{handleShowCopyright:function(e){K(e)}})})),r.a.createElement(w,{categoryList:d,handleClose:function(){F(!1)},isShow:P,activedItem:M,handleConvertToUrlFriendly:ue}),r.a.createElement(L,{siteInfo:a.siteInfo,handleClose:function(){y(!1)},isShow:E,product:j,mailConfig:a.mailConfig}),r.a.createElement(k,{handleClose:function(){$(!1)},isShow:Y,pagesTab:a.pagesTab,mailConfig:a.mailConfig}),r.a.createElement(U,{customersTalkList:a.customersTalk,handleClose:function(){ee(!1)},isShow:Z,handleShowLightGalleryAboveModal:function(e){re(e)},showLightGalleryAboveModal:ne}),r.a.createElement(D,{handleClose:function(){ie(!1)},isShow:oe,product:j,handleConvertToUrlFriendly:ue}),r.a.createElement("a",{href:"".concat("","/"),id:"home-ontop",title:"Trang ch\u1ee7",alt:"Trang ch\u1ee7"},r.a.createElement("i",{className:"fa fa-home"})),r.a.createElement("i",{className:"fas fa-bars",id:"menu-ontop",onClick:function(e){return function(e){e.preventDefault(),F(!0)}(e)},title:"Nh\xf3m s\u1ea3n ph\u1ea9m",alt:"Nh\xf3m s\u1ea3n ph\u1ea9m"}),r.a.createElement("i",{className:"far fa-window-restore",id:"pages-ontop",onClick:function(e){return function(e){e.preventDefault(),$(!0)}(e)},title:"V\u1ec1 ch\xfang t\xf4i/ D\u1ecbch v\u1ee5/ Li\xean h\u1ec7/...",alt:"V\u1ec1 ch\xfang t\xf4i/ D\u1ecbch v\u1ee5/ Li\xean h\u1ec7/..."}),r.a.createElement("i",{className:"far fa-comment-dots",id:"customers-talk-ontop",onClick:function(e){return function(e){e.preventDefault(),ee(!0)}(e)},title:"Danh s\xe1ch kh\xe1ch h\xe0ng \u0111\xe3 mua",alt:"Danh s\xe1ch kh\xe1ch h\xe0ng \u0111\xe3 mua"}),r.a.createElement("i",{className:"fa fa-arrow-up",id:"toTop",onClick:function(){return N()("html, body").animate({scrollTop:0},50),!1},title:"L\xean \u0111\u1ea7u trang",alt:"L\xean \u0111\u1ea7u trang"}),r.a.createElement("i",{className:"fa fa-arrow-down",id:"toBottom",title:"Xu\u1ed1ng cu\u1ed1i trang",alt:"Xu\u1ed1ng cu\u1ed1i trang",onClick:function(){return N()("html, body").animate({scrollTop:N()(document).height()},50),!1}})),V&&r.a.createElement("div",{className:"copyright"},"\xa9 All rights reserved."))},_=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,161)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null))),_()},92:function(e,t,a){e.exports=a(156)},99:function(e,t,a){}},[[92,3,2]]]);
//# sourceMappingURL=main.eee7749d.chunk.js.map