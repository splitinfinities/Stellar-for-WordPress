import{h}from"../stellar-core.core.js";import"./chunk-7646164d.js";import{a as properties}from"./chunk-340b8099.js";var Video=function(){function e(){this.preload="auto",this.autoplay=!1,this.muted=!1,this.playsinline=!1,this.controls=!0}return e.prototype.componentDidLoad=function(){var e=this;this.video=this.element.querySelector("video"),this.video.onloadedmetadata=function(){e.setDimensions()},this.addIntersectionObserver()},e.prototype.setDimensions=function(){this.width=this.width?this.width:this.video.videoWidth,this.height=this.height?this.height:this.video.videoHeight,properties.set({"--width":""+this.width,"--height":""+this.height,"--aspect-ratio":this.height/this.width*100+"%"},this.element)},e.prototype.addIntersectionObserver=function(){var e=this;"IntersectionObserver"in window?(this.io=new IntersectionObserver(function(t){t[0].isIntersecting?e.handleInScreen():e.handleOffScreen()},{threshold:[.25]}),this.io.observe(this.element.querySelector("video"))):setTimeout(function(){e.handleInScreen()},300)},e.prototype.handleInScreen=function(){this.video.play()},e.prototype.handleOffScreen=function(){this.video.currentTime=0,this.video.pause()},e.prototype.render=function(){return h("video",{preload:this.preload,width:this.width,height:this.height,autoplay:this.autoplay,muted:this.muted,playsinline:this.playsinline,poster:this.poster,controls:this.controls},h("slot",null))},Object.defineProperty(e,"is",{get:function(){return"stellar-video"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autoplay:{type:Boolean,attr:"autoplay"},controls:{type:Boolean,attr:"controls"},element:{elementRef:!0},height:{type:Number,attr:"height",reflectToAttr:!0,mutable:!0},io:{state:!0},muted:{type:Boolean,attr:"muted"},overlay:{type:Boolean,attr:"overlay"},playsinline:{type:Boolean,attr:"playsinline"},poster:{type:String,attr:"poster"},preload:{type:String,attr:"preload"},video:{state:!0},width:{type:Number,attr:"width",reflectToAttr:!0,mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"stellar-video{display:block;width:100%;height:0;position:relative;overflow:hidden;padding-bottom:var(--aspect-ratio)}stellar-video:after,stellar-video video{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0}stellar-video:after{content:\"\";display:block;pointer-events:none;z-index:2;mix-blend-mode:color}stellar-video[overlay]:after{background:linear-gradient(35deg,var(--theme-complement5),var(--theme-base5) 40%,var(--theme-complement5));mix-blend-mode:color}\@media not all and (min-resolution:.001dpcm){\@media{stellar-video[overlay]:after{mix-blend-mode:hard-light;opacity:.5}}}"},enumerable:!0,configurable:!0}),e}();export{Video as StellarVideo};