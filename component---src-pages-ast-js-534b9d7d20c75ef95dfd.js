(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o}),n.d(t,"pageQuery",function(){return i});n(50),n(135),n(136);var r=n(0),a=n.n(r),c=n(247),u=n(204);var o=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.data.astToml,t=new c.Parser,n=function(e,t){if(!(["parent"].includes(e)||Array.isArray(t)&&0===t.length))return t},r=e.examples.map(function(e){var r=t.parse(e.org),c=JSON.stringify(r.children[0],n,2);return a.a.createElement("div",null,a.a.createElement("h2",null,e.name),a.a.createElement("p",null,e.desc),a.a.createElement("pre",null,a.a.createElement("code",null,e.org)),a.a.createElement("p",null,"Yields:"),a.a.createElement("pre",null,a.a.createElement("code",null,c)))});return a.a.createElement(u.a,null,a.a.createElement("h1",null,"Abstract Syntax Tree"),r)},r}(a.a.Component),i="1420576552"},198:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var r=n(0),a=n.n(r),c=n(66),u=n.n(c);n.d(t,"a",function(){return u.a});n(199),n(9).default.enqueue;var o=a.a.createContext({});function i(e){var t=e.staticQueryData,n=e.data,r=e.query,c=e.render,u=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,u&&c(u),!u&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,n=e.query,r=e.render,c=e.children;return a.a.createElement(o.Consumer,null,function(e){return a.a.createElement(i,{data:t,query:n,render:r||c,staticQueryData:e})})}},199:function(e,t,n){var r;e.exports=(r=n(203))&&r.default||r},201:function(e,t,n){"use strict";var r=n(208),a=n.n(r),c=n(209),u=n.n(c),o=n(210),i=n.n(o);u.a.plugins=[new i.a];var l=new a.a(u.a);t.a=l},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Orga"}}}}},203:function(e,t,n){"use strict";n.r(t);n(23);var r=n(0),a=n.n(r),c=n(93);t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null}},204:function(e,t,n){"use strict";var r=n(202),a=n(0),c=n.n(a),u=n(200),o=n(206),i=n.n(o),l=n(198);n(29),n(30),n(13),n(49),n(23);var s=function(e){var t=e.children,n=e.to,r=e.activeClassName,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","to","activeClassName"]);return/^\/(?!\/)/.test(n)?c.a.createElement(l.a,Object.assign({to:n,activeClassName:r},a),t):c.a.createElement("a",Object.assign({href:n},a),t)};function d(){var e=E(["\n"]);return d=function(){return e},e}function m(){var e=E(["\ncolor: gray;\nmargin: 0 auto;\npadding-bottom: ",";\ntext-align: center;\nborder-bottom: none;\n"]);return m=function(){return e},e}function f(){var e=E(["\ndisplay: flex;\njustify-content: center;\n"]);return f=function(){return e},e}function p(){var e=E(["\ndisplay: block;\ntext-decoration: none;\nborder-radius: 0.4rem;\npadding: .5rem 1.5rem;\ntext-align: center;\n&:hover {\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #f1f1f1;\n}\n"]);return p=function(){return e},e}function v(){var e=E(["\npadding-top: 3rem;\npadding-bottom: 2rem;\n"]);return v=function(){return e},e}function E(e,t){return t||(t=e.slice(0)),e.raw=t,e}var g=n(201).a.rhythm,y=u.a.header(v()),h=Object(u.a)(s)(p()),b=u.a.div(f()),x=u.a.h1(m(),g(1.5)),w=Object(u.a)(s)(d()),O=function(e){var t=e.siteTitle;return c.a.createElement(y,null,c.a.createElement(w,{to:"/"},c.a.createElement(x,null,t)),c.a.createElement(b,null,c.a.createElement(h,{to:"/docs"},"DOCS"),c.a.createElement(h,{to:"/ast"},"AST"),c.a.createElement(h,{to:"/syntax"},"SYNTAX"),c.a.createElement(h,{to:"/roadmap"},"ROADMAP"),c.a.createElement(h,{to:"https://github.com/xiaoxinghu/orgajs"},"CODE")))};O.defaultProps={siteTitle:""};var j=O;n(211);function C(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\nmargin: auto;\nmax-width: 740px;\n"]);return C=function(){return e},e}var T=u.a.div(C());t.a=function(e){var t=e.children;return c.a.createElement(l.b,{query:"755544856",render:function(e){return c.a.createElement(T,null,c.a.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(j,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("div",{style:{padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:r})}}}]);
//# sourceMappingURL=component---src-pages-ast-js-534b9d7d20c75ef95dfd.js.map