System.register(["./p-afdfa3ab.system.js"],function(e){"use strict";var t,r,s;return{setters:[function(e){t=e.c,r=e.d,s=e.f}],execute:function(){var l=function(){function e(e){t(this,e),this.icon="analytics",this.icon_size=.85,this.home="/",this.label="Home",this.description="An icon that shows the main page you're on",this.color="blue5"}return e.prototype.componentWillLoad=function(){this.updateBreadcrumbs()},e.prototype.updateBreadcrumbs=function(){var e=this.el.querySelector("stellar-breadcrumb:last-of-type"),t=this.el.querySelectorAll("stellar-breadcrumb");Array.from(t).forEach(function(e){e.last=!1}),e.last=!0},e.prototype.render=function(){return r("div",{id:"breadcumb_wrapper",class:"breadcrumbs"},r("div",{class:"flush-left"}),r("stellar-breadcrumb",{first:!0},r("stellar-asset",{id:"icon",name:this.icon,src:this.icon_src,color:this.color}),r("stellar-label",null,this.label)),r("slot",null),r("div",{class:"flush"}))},Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--background:linear-gradient(45deg,var(--theme-base7),var(--theme-base0));display:inline-block;border-bottom:1px solid var(--background);background:var(--white);height:3rem;overflow-x:auto;overflow-y:hidden;font-size:var(--font-size,1rem);-webkit-clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,0 50%,0 0);clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,0 50%,0 0)}:host stellar-asset{font-size:2rem;line-height:0}:host stellar-label{line-height:1;margin:0 0 0 .25rem;color:#fff}:host .breadcrumbs{display:-ms-inline-flexbox;display:inline-flex;position:relative;background:var(--background);width:auto;height:100%}:host .breadcrumbs .flush{right:0;margin-left:-2rem}:host .breadcrumbs .flush,:host .breadcrumbs .flush-left{display:block;-ms-flex:0 0 2rem;flex:0 0 2rem;background:transparent;width:2rem;height:inherit}:host .breadcrumbs .flush-left{left:0;margin-right:-2.5rem}:host-context(.dark-mode){--background:linear-gradient(45deg,var(--theme-base7),var(--theme-base9))}"},enumerable:!0,configurable:!0}),e}();e("stellar_breadcrumbs",l)}}});