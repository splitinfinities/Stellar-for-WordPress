System.register(["./p-43f53497.system.js"],(function(t){"use strict";var n,i,o;return{setters:[function(t){n=t.r;i=t.h;o=t.d}],execute:function(){var e=":host{contain:content;position:relative;display:contents;width:100%;height:100%}:host ::slotted(*){position:absolute}:host([float]) ::slotted(*:nth-of-type(3n+1)){-webkit-animation-direction:alternate;animation-direction:alternate}:host([float]) ::slotted(*:nth-of-type(3n+2)){animation-direction:reverse}:host([float]) ::slotted(*:nth-of-type(3n+3)){animation-direction:alternate-reverse}:host([float]) ::slotted(*:nth-of-type(5n+1)){-webkit-animation:floating-x 10s infinite;animation:floating-x 10s infinite}:host([float]) ::slotted(*:nth-of-type(5n+2)){-webkit-animation:floating-x-spin 15s infinite;animation:floating-x-spin 15s infinite}:host([float]) ::slotted(*:nth-of-type(5n+3)){-webkit-animation:floating-x-full-spin 35s infinite;animation:floating-x-full-spin 35s infinite}:host([float]) ::slotted(*:nth-of-type(5n+4)){-webkit-animation:floating-x-full-spin-rel 20s infinite;animation:floating-x-full-spin-rel 20s infinite}:host([float]) ::slotted(*:nth-of-type(5n+5)){-webkit-animation:floating-x-full-spin 25s infinite;animation:floating-x-full-spin 25s infinite}";var a=t("stellar_scatter",function(){function t(t){n(this,t);this.float=false;this.min=0;this.max=100;this.sizes=false;this.colors=false}t.prototype.componentWillLoad=function(){var t=this;var n=this.element.querySelectorAll("*");Array.from(n).forEach((function(n){var i=t.randomFloat();var o=t.randomFloat();n.setAttribute("style","top: "+i+"%; left: "+o+"%");if(t.colors){n.classList.add("fs"+t.fontScale())}if(t.sizes){n.classList.add("theme-"+t.colorSwatch()+t.colorScale())}}))};t.prototype.randomFloat=function(){return this.min+Math.random()*(this.max+1-this.min)};t.prototype.randomNumber=function(t){if(t===void 0){t=2}return Math.floor(Math.random()*t)+1};t.prototype.fontScale=function(){return this.randomNumber(6)};t.prototype.colorScale=function(){return this.randomNumber(10)};t.prototype.colorSwatch=function(){return this.randomNumber()===1?"base":"complement"};t.prototype.render=function(){return i("slot",null)};Object.defineProperty(t.prototype,"element",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return e},enumerable:true,configurable:true});return t}())}}}));