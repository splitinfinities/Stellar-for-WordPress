import{c as t,f as r}from"./p-9ed7c17e.js";import{a as s}from"./p-75188364.js";class o{constructor(r){t(this,r)}componentWillLoad(){if(this.history&&this.root&&this.url)return this.history.replace((r=this.root,"/"==(t=this.url).charAt(0)&&"/"==r.charAt(r.length-1)?r.slice(0,r.length-1)+t:r+t));var t,r}get el(){return r(this)}}s.injectProps(o,["history","root"]);export{o as stencil_router_redirect};