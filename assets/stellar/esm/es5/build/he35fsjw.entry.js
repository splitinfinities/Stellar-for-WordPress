import{h}from"../stellar-core.core.js";var Breadcrumb=function(){function e(){this.href="/",this.target="_self",this.label="Breadcrumb link",this.disabled=!1}return e.prototype.componentDidLoad=function(){this.label+=" for "+this.element.textContent},e.prototype.render=function(){return h("a",{class:"button",href:this.href,target:this.target,"aria-label":this.label,title:this.label,"data-disabled":this.disabled},h("slot",null))},Object.defineProperty(e,"is",{get:function(){return"stellar-breadcrumb"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},element:{elementRef:!0},first:{type:Boolean,attr:"first",reflectToAttr:!0},href:{type:String,attr:"href"},label:{type:String,attr:"label",mutable:!0},last:{type:Boolean,attr:"last",reflectToAttr:!0},target:{type:String,attr:"target"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-clip-path:polygon(1em 100%,0 0,calc(100% - 1em) 0,100% 100%,calc(100% - 1em) 100%,0 100%);clip-path:polygon(1em 100%,0 0,calc(100% - 1em) 0,100% 100%,calc(100% - 1em) 100%,0 100%);-webkit-clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,calc(0% + .5em) 50%,0 0);clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,calc(0% + .5em) 50%,0 0);margin:0 0 0 -.35em;background:var(--white);text-align:center;text-decoration:none;color:var(--theme-base8)}:host(:focus-within),:host a:focus,:host a:hover{background:var(--theme-base5);color:#fff}:host a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:1em 1.75em;height:auto;text-decoration:none;white-space:nowrap;color:currentColor;font-size:var(--font-size);font-weight:600}:host a stellar-asset{margin-right:.25em}:host(:focus),:host(:hover){color:var(--white);background:var(--theme-base5)}:host([first]){background:var(--theme-base7);color:var(--white);margin:0 -.25rem 0 -.15em;position:-webkit-sticky;position:sticky;left:-.5rem;z-index:2}:host([first]) a{padding-left:1.25em;padding-right:1.25em}:host([first]) a stellar-asset{margin:0}:host([last]){color:var(--gray9);background:var(--white)}:host([last]) a:focus,:host([last]) a:hover,:host([last]:focus),:host([last]:hover){background:#fff;color:var(--gray9)}:host-context(.dark-mode){background:var(--black);color:var(--theme-base0)}:host-context(.dark-mode):host(:focus),:host-context(.dark-mode):host(:focus-within),:host-context(.dark-mode):host(:hover),:host-context(.dark-mode):host a:focus,:host-context(.dark-mode):host a:hover{color:var(--white);background:var(--theme-base7)}:host-context(.dark-mode):host([last]){color:#fff;background:var(--black)}:host-context(.dark-mode):host([first]){background:var(--theme-base9)}:host-context(.dark-mode):host([last]) a:focus,:host-context(.dark-mode):host([last]) a:hover,:host-context(.dark-mode):host([last]:focus),:host-context(.dark-mode):host([last]:hover){background:var(--black);color:#fff}"},enumerable:!0,configurable:!0}),e}(),Breadcrumbs=function(){function e(){this.icon="analytics",this.icon_size=.85,this.home="/",this.label="Home",this.description="An icon that shows the main page you're on",this.color="blue5"}return e.prototype.componentWillLoad=function(){this.updateBreadcrumbs()},e.prototype.updateBreadcrumbs=function(){var e=this.el.querySelector("stellar-breadcrumb:last-of-type"),t=this.el.querySelectorAll("stellar-breadcrumb");Array.from(t).forEach(function(e){e.last=!1}),e.last=!0},e.prototype.render=function(){return h("div",{id:"breadcumb_wrapper",class:"breadcrumbs"},h("div",{class:"flush-left"}),h("stellar-breadcrumb",{first:!0},h("stellar-asset",{id:"icon",name:this.icon,src:this.icon_src,color:this.color}),h("stellar-label",null,this.label)),h("slot",null),h("div",{class:"flush"}))},Object.defineProperty(e,"is",{get:function(){return"stellar-breadcrumbs"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},description:{type:String,attr:"description"},el:{elementRef:!0},home:{type:String,attr:"home"},icon:{type:String,attr:"icon"},icon_size:{type:Number,attr:"icon_size"},icon_src:{type:String,attr:"icon_src"},label:{type:String,attr:"label"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--background:linear-gradient(45deg,var(--theme-base7),var(--theme-base0));display:inline-block;border-bottom:1px solid var(--background);background:var(--white);height:3rem;overflow-x:auto;overflow-y:hidden;font-size:var(--font-size,1rem);-webkit-clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,0 50%,0 0);clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,0 50%,0 0)}:host stellar-asset{font-size:2rem;line-height:0}:host stellar-label{line-height:1;margin:0 0 0 .25rem;color:#fff}:host .breadcrumbs{display:-ms-inline-flexbox;display:inline-flex;position:relative;background:var(--background);width:auto;height:100%}:host .breadcrumbs .flush{right:0;margin-left:-2rem}:host .breadcrumbs .flush,:host .breadcrumbs .flush-left{display:block;-ms-flex:0 0 2rem;flex:0 0 2rem;background:transparent;width:2rem;height:inherit}:host .breadcrumbs .flush-left{left:0;margin-right:-2.5rem}:host-context(.dark-mode){--background:linear-gradient(45deg,var(--theme-base7),var(--theme-base9))}"},enumerable:!0,configurable:!0}),e}();export{Breadcrumb as StellarBreadcrumb,Breadcrumbs as StellarBreadcrumbs};