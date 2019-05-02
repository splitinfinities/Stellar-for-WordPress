import{h}from"../stellar-core.core.js";import{a as Image$1}from"./chunk-eee53063.js";var Image360=function(){function e(){this.width=1280,this.height=720}return e.prototype.componentDidLoad=function(){this.image=this.element.querySelector(".image"),this.viewer=new Image$1({source:this.src,container:this.image,width:this.width,height:this.height}),this.viewer.render()},e.prototype.render=function(){return[h("div",{class:"image"}),h("div",{class:"overlay"})]},Object.defineProperty(e,"is",{get:function(){return"stellar-360-image"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{element:{elementRef:!0},height:{type:Number,attr:"height",reflectToAttr:!0},image:{state:!0},poster:{type:String,attr:"poster",reflectToAttr:!0},src:{type:String,attr:"src",reflectToAttr:!0},viewer:{state:!0},width:{type:Number,attr:"width",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"stellar-360-image{display:block;position:relative}stellar-360-image canvas{display:block;width:100%!important;height:auto!important}stellar-360-image .overlay{opacity:.3;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply);position:absolute;top:0;left:0;width:100%;height:100%}"},enumerable:!0,configurable:!0}),e}();export{Image360 as Stellar360Image};