import{h}from"../stellar-core.core.js";import"./chunk-7646164d.js";import{a as properties}from"./chunk-340b8099.js";import"./chunk-43ad3764.js";import"./chunk-5ce278cb.js";var Follow=function(){function e(){this.width=400,this.height=400,this.frame=1}return e.prototype.componentWillLoad=function(){this.update()},e.prototype.update=function(){properties.set({"--width":this.width+"px","--height":this.height+"px","--aspect-ratio":this.width/this.height*100+"%","--position":"0 "+this.height*-(this.frame-1)+"px"},this.element)},e.prototype.render=function(){return h("div",{class:"background",style:{"background-image":"url("+this.src+")"}})},Object.defineProperty(e,"is",{get:function(){return"stellar-keyframes"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{element:{elementRef:!0},frame:{type:Number,attr:"frame",reflectToAttr:!0,watchCallbacks:["update"]},height:{type:Number,attr:"height"},src:{type:String,attr:"src"},width:{type:Number,attr:"width"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-stellar-keyframes-h{--position:var(--position,0);display:block;width:100%;height:100%;max-width:var(--width);max-height:var(--height)}.sc-stellar-keyframes-h   .background.sc-stellar-keyframes{background-position:var(--position);background-size:cover;width:var(--width);height:var(--height);display:block}"},enumerable:!0,configurable:!0}),e}();export{Follow as StellarKeyframes};