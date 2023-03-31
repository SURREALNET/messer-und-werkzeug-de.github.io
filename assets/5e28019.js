(window.webpackJsonp=window.webpackJsonp||[]).push([[22,5,15,16],{256:function(t,e,r){var content=r(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("268f718a",content,!0,{sourceMap:!1})},257:function(t,e,r){"use strict";r.r(e);r(141),r(10),r(30);var o=r(19),n=r(70),l=r(140),c=r(260),d={name:"productItem",props:{product:Object},data:function(){var t=this,e=n.find((function(e){return e.name===t.product.category})),r=l.find((function(e){return e.name===t.product.brand}));return{config:o,categoryData:e,brandData:r}},methods:{decode:function(t){return c.decode(t)}}},f=(r(258),r(18)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumbs[0],alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[r("nuxt-link",{staticClass:"noLinkStyle",attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.name}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])],1)]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,"1e708522",null);e.default=component.exports},258:function(t,e,r){"use strict";r(256)},259:function(t,e,r){var o=r(68)(!1);o.push([t.i,".course-item[data-v-1e708522]{min-height:450px;display:flex;flex-direction:column}.course-item .text-center[data-v-1e708522]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-between}.mb-4 h5[data-v-1e708522]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}",""]),t.exports=o},261:function(t,e,r){"use strict";r.r(e);var o={name:"products",props:{products:Array}},n=r(18),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.products,(function(t,e){return r("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[r("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(257).default})},263:function(t,e,r){"use strict";r.r(e);r(20),r(10);var o=r(19),n=r(70),l=r(51);for(var c=[],i=0;i<=l.length;i++)try{c.push(l[i].brand)}catch(t){}c=c.filter((function(t,e,r){return r.indexOf(t)===e}));var d={name:"categorySidebar",data:function(){return{config:o,categories:n}}},f=r(18),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"},t._l(t.categories,(function(e,o){return r("div",{key:o,staticClass:"dropdown"},[r("nuxt-link",{staticClass:"d-flex align-items-center text-white text-decoration-none",class:e.subCategories.length>=1&&"dropdown-toggle",attrs:{to:"/kategorie/"+e.slug+"/",title:""+e.name,id:"dropdownUser1","data-bs-toggle":e.subCategories.length>=1&&"dropdown","aria-expanded":"false"}},[r("strong",[t._v(t._s(e.name))])]),t._v(" "),e.subCategories.length>=1?r("ul",{staticClass:"dropdown-menu dropdown-menu-dark text-small shadow",attrs:{"aria-labelledby":"dropdownUser1"}},[r("li",t._l(e.subCategories,(function(e,o){return r("a",{key:o,staticClass:"dropdown-item",attrs:{href:"/kategorie/"+e.slug+"/"}},[t._v(t._s(e.name))])})),0)]):t._e()],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},264:function(t,e,r){r(265)},265:function(t,e,r){"use strict";var o=r(5),n=r(1),l=r(13),c=r(3),d=r(25),f=r(8),m=r(110),v=r(14),h=r(50),x=r(111),_=r(192),C=r(6),y=r(32),w=C("replace"),k=RegExp.prototype,D=n.TypeError,S=c(x),E=c("".indexOf),T=c("".replace),L=c("".slice),P=Math.max,j=function(t,e,r){return r>t.length?-1:""===e?r:E(t,e,r)};o({target:"String",proto:!0},{replaceAll:function(t,e){var r,o,n,c,x,C,I,O,$,F=d(this),M=0,R=0,U="";if(null!=t){if((r=m(t))&&(o=v(d("flags"in k?t.flags:S(t))),!~E(o,"g")))throw D("`.replaceAll` does not allow non-global regexes");if(n=h(t,w))return l(n,t,F,e);if(y&&r)return T(v(F),t,e)}for(c=v(F),x=v(t),(C=f(e))||(e=v(e)),I=x.length,O=P(1,I),M=j(c,x,0);-1!==M;)$=C?v(e(x,M,c)):_(x,c,M,[],void 0,e),U+=L(c,R,M)+$,R=M+I,M=j(c,x,M+O);return R<c.length&&(U+=L(c,R)),U}})},290:function(t,e,r){"use strict";r.r(e);r(33),r(71),r(264),r(30),r(43);var o=r(19),n=r(109),l={name:"singleBrandComponent",head:function(){return{title:this.seoData&&this.seoData.seo&&this.seoData.seo.title?this.seoData.seo.title:o.brandSeo.defaultTitle.replaceAll("$HERSTELLER",this.brandData.name),meta:[{hid:"description",name:"description",content:this.seoData&&this.seoData.seo&&this.seoData.seo.metaDescription?this.seoData.seo.metaDescription:o.brandSeo.defaultMetaDescription.replaceAll("$HERSTELLER",this.brandData.name)},{hid:"robots",name:"robots",content:this.seoData&&this.seoData.seo&&this.seoData.seo.robots?this.seoData.seo.robots:o.brandSeo.defaultRobots}]}},data:function(){var t=this.$route.params.slug,e=n.a.brands.getBrandFromSlug(t),r=n.a.seo.getSeoForBrand(e);return{filteredProducts:n.a.brands.getProductsForBrand(e).slice(0,100),brandData:e,seoData:r,config:o}}},c=r(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-fluid py-5"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-2 fadeInUp"},[r("CategorySidebar")],1),t._v(" "),r("div",{staticClass:"col-lg-10 fadeInUp"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n              "+t._s(t.config.seo.mainKeyword)+"\n            ")]),t._v(" "),r("h1",{staticClass:"mb-5 h2",domProps:{innerHTML:t._s(t.brandData.name)}})]),t._v(" "),r("Products",{attrs:{products:t.filteredProducts}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategorySidebar:r(263).default,Products:r(261).default})}}]);