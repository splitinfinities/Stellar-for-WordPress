StellarCore.loadBundle("uy2etase",["exports","./chunk-a218a313.js","./chunk-841f0e81.js","./chunk-14f6ad5f.js","./chunk-0eedf0e0.js"],function(e,t,n,o,r){var i=window.StellarCore.h,a=function(){function e(){this.type="scroll",this.distance=.5,this.padding=40}return e.prototype.componentWillLoad=function(){this.update(),n.properties.set({"--left":"50%","--top":"-3000px"},this.element)},e.prototype.componentDidLoad=function(){var e=this;setTimeout(function(){e.update()},200)},Object.defineProperty(e.prototype,"offset",{get:function(){return window.innerHeight*this.distance},enumerable:!0,configurable:!0}),e.prototype.update=function(){"scroll"===this.type?this.attachScroll():"cursor"===this.type&&(this.attachScroll(),this.attachCursor())},e.prototype.attachScroll=function(){var e=this;n.properties.set({"--top":window.pageYOffset+this.offset+"px"},this.element),window.addEventListener("scroll",function(){n.properties.set({"--top":window.pageYOffset+e.offset+"px"},e.element)},{passive:!0})},e.prototype.attachCursor=function(){var e=this;window.addEventListener("mousemove",function(t){n.properties.set({"--left":e.minmaxx(t.clientX)+"px"},e.element)},{passive:!0}),window.addEventListener("deviceorientation",function(t){var o=Math.abs(t.alpha);n.properties.set({"--left":e.minmaxx(o/360*100)+"px"},e.element)},!0)},e.prototype.minmaxx=function(e){var t=this.padding+this.element.offsetWidth/2,n=window.innerWidth-t;return e<=t?e=t:e>=n&&(e=n),e},e.prototype.render=function(){return i("slot",null)},Object.defineProperty(e,"is",{get:function(){return"stellar-follow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{distance:{type:Number,attr:"distance",watchCallbacks:["update"]},element:{elementRef:!0},padding:{type:Number,attr:"padding"},type:{type:String,attr:"type",watchCallbacks:["update"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--spring:spring(1,9000,11,-0.2);position:absolute;top:var(--top);left:var(--left);z-index:20;-webkit-transition:top 50ms var(--ease) 0s,left 50ms var(--ease) 0s;transition:top 50ms var(--ease) 0s,left 50ms var(--ease) 0s;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);pointer-events:none}"},enumerable:!0,configurable:!0}),e}();e.StellarFollow=a,Object.defineProperty(e,"__esModule",{value:!0})});