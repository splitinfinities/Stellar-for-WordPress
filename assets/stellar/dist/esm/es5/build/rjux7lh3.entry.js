import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../stellar-core.core.js";import"./chunk-7646164d.js";import{a as properties}from"./chunk-340b8099.js";var Blur=function(){function t(){this.vertical=0,this.horizontal=0}return t.prototype.hostData=function(){return{id:this.element.id||this.generatedId}},t.prototype.supported_match=function(){return-1===navigator.userAgent.toLowerCase().indexOf("firefox")&&!/iPad|iPhone|iPod/.test(navigator.platform)},t.prototype.supported=function(){var t=this;try{sessionStorage.clear()}catch(t){}return function(){var e;try{if("true"===sessionStorage.getItem("blur-supported"))return"true"===sessionStorage.getItem("blur-supported");e=t.supported_match(),sessionStorage.setItem("blur-supported",e?"true":"false")}catch(r){e=t.supported_match()}return e}()},t.prototype.setBlurFilter=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){return properties.set({"--blur-url":"url('#"+this.generatedId+"-filter')"},this.element),[2]})})},t.prototype.componentDidLoad=function(){var t=this;this.supported()&&(this.generatedId=this.element.id||this.generateId(),setTimeout(function(){t.setBlurFilter()},10))},t.prototype.generateId=function(){return"blur-"+(t=0,e=1e3,t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t);var t,e},t.prototype.render=function(){return[h("slot",null),this.supported()&&h("svg",{class:"blur-svg"},h("defs",null,h("filter",{id:this.generatedId+"-filter"},h("feGaussianBlur",{id:this.generatedId+"-gaussian",in:"SourceGraphic",stdDeviation:this.horizontal+","+this.vertical}))))]},Object.defineProperty(t,"is",{get:function(){return"stellar-blur"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{element:{elementRef:!0},generatedId:{state:!0},horizontal:{type:Number,attr:"horizontal",reflectToAttr:!0,mutable:!0},setBlurFilter:{method:!0},vertical:{type:Number,attr:"vertical",reflectToAttr:!0,mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"stellar-blur,stellar-blur *,stellar-blur :after,stellar-blur :before{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-blur{-webkit-filter:var(--blur-url);filter:var(--blur-url);display:block;overflow:initial}stellar-blur .blur-svg{display:none}\@media (prefers-reduced-motion:reduce){stellar-blur{-webkit-filter:none!important;filter:none!important}}"},enumerable:!0,configurable:!0}),t}();export{Blur as StellarBlur};