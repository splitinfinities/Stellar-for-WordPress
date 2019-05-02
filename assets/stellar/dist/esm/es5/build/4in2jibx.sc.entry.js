import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../stellar-core.core.js";import"./chunk-7646164d.js";import{a as properties}from"./chunk-340b8099.js";import{a as delay}from"./chunk-e7da9887.js";var Scatter=function(){function t(){this.animation="fadeInUp",this.outAnimation="fadeOut",this.delay=100,this.timing=50,this.active=!1}return t.prototype.componentWillLoad=function(){this.children=Array.from(this.element.children)},t.prototype.componentDidLoad=function(){this.addIntersectionObserver()},t.prototype.addIntersectionObserver=function(){var t=this;"IntersectionObserver"in window?(this.io=new IntersectionObserver(function(e){e[0].isIntersecting&&(setTimeout(function(){t.active=!0,t.in()},350),t.removeIntersectionObserver())}),this.io.observe(this.element)):setTimeout(function(){t.in()},300)},t.prototype.removeIntersectionObserver=function(){this.io&&(this.io.disconnect(),this.io=null)},t.prototype.calculateTiming=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){switch(t.label){case 0:return[4,delay(1e3+this.children.length*this.delay)];case 1:return t.sent(),[2]}})})},t.prototype.out=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t=this;return tslib_1.__generator(this,function(e){switch(e.label){case 0:return properties.set({"--animation":this.outAnimation},this.element),this.children.forEach(function(e,i){e.style.setProperty("animation-delay",t.delay*i+"ms"),e.style.setProperty("animation-timing",t.timing+"ms")}),[4,this.calculateTiming()];case 1:return[2,e.sent()]}})})},t.prototype.in=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t=this;return tslib_1.__generator(this,function(e){switch(e.label){case 0:return properties.set({"--animation":this.animation},this.element),this.children.forEach(function(e,i){e.style.setProperty("animation-delay",t.delay*i+"ms"),e.style.setProperty("animation-timing",t.timing+"ms")}),[4,this.calculateTiming()];case 1:return[2,e.sent()]}})})},t.prototype.render=function(){return h("slot",null)},Object.defineProperty(t,"is",{get:function(){return"stellar-reveal"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{active:{type:Boolean,attr:"active",reflectToAttr:!0,mutable:!0},animation:{type:String,attr:"animation",reflectToAttr:!0},children:{state:!0},delay:{type:Number,attr:"delay",reflectToAttr:!0},element:{elementRef:!0},in:{method:!0},io:{state:!0},out:{method:!0},outAnimation:{type:String,attr:"out-animation",reflectToAttr:!0},timing:{type:Number,attr:"timing",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-stellar-reveal-h{display:block;--animation:fadeIn}.sc-stellar-reveal-h .sc-stellar-reveal-s > *{opacity:0}.sc-stellar-reveal-h[active] .sc-stellar-reveal-s > *{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-name:var(--animation);animation-name:var(--animation)}"},enumerable:!0,configurable:!0}),t}();export{Scatter as StellarReveal};