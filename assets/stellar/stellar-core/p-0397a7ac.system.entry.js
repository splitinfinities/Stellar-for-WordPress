System.register(["./p-de1c7c63.system.js","./p-c4dffc26.system.js","./p-34212f9b.system.js"],(function(e){"use strict";var t,r,s,n,a;return{setters:[function(e){t=e.r;r=e.h;s=e.H;n=e.g},function(){},function(e){a=e.T}],execute:function(){var o=":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block;padding:2rem;background-color:var(--theme-base4)}:host .callout-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.db) .callout-wrap{display:block}:host ::slotted(*){color:var(--gray9)}:host([dark]){background-color:var(--theme-base6)}";var i=e("stellar_callout",function(){function e(e){t(this,e);this.dark=false;this.type="default";this.theme="gray"}e.prototype.componentDidLoad=function(){this.element.setAttribute("aria-label","An "+this.type+" message. "+this.element.textContent);this.element.setAttribute("aria-role","status");this.element.setAttribute("tabindex","0");this.handleType()};e.prototype.handleType=function(){switch(this.type){case"alert":this.theme="yellow";break;case"error":this.theme="red";break;case"info":this.theme="cyan";break;case"success":this.theme="green";break;case"default":case undefined:this.theme="gray";break;default:this.theme="gray";break}};e.prototype.render=function(){return r(s,{class:"theme-"+this.theme},r("div",{class:"callout-wrap"},r("slot",null)))};Object.defineProperty(e.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{type:["handleType"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return o},enumerable:true,configurable:true});return e}());a.injectProps(i,["dark"])}}}));