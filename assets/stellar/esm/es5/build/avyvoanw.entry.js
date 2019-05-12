import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../stellar-core.core.js";import"./chunk-7646164d.js";import{a as properties}from"./chunk-340b8099.js";import{k as delay}from"./chunk-43ad3764.js";import"./chunk-5ce278cb.js";import{a as ezClipboard}from"./chunk-f527ab08.js";import{a as get_interview_lines,b as update_interview_lines}from"./chunk-435d24f9.js";var Video=function(){function t(){this.trackInView=!0,this.preload="auto",this.autoplay=!1,this.muted=!1,this.playsinline=!1,this.controls=!0,this.duration=0,this.startTime=0,this.pausedTime=0,this.currentTime=0,this.playing=!1}return t.prototype.componentDidLoad=function(){var t=this;this.video_tag=this.element.querySelector("video"),this.video_tag.onplay=function(){t.playing=!0,t.played.emit(t.eventData),t.timeupdate.emit(t.eventData)},this.video_tag.onpause=function(){t.playing=!1,t.pausedTime=t.video_tag.currentTime,t.paused.emit(t.eventData),t.timeupdate.emit(t.eventData)},this.video_tag.onloadedmetadata=function(){t.setDimensions(),t.duration=t.video_tag.duration,t.loaded.emit(t.eventData)},this.trackInView&&this.addIntersectionObserver()},Object.defineProperty(t.prototype,"eventData",{get:function(){return{playing:this.playing,currentTime:this.currentTime,pausedTime:this.pausedTime,startTime:this.startTime,duration:this.duration}},enumerable:!0,configurable:!0}),t.prototype.startInterval=function(){var t=this;this.playing?this.interval=setInterval(function(){t.currentTime=t.video_tag.currentTime,t.timeupdate.emit(t.eventData)},30):clearInterval(this.interval)},t.prototype.setDimensions=function(){this.width=this.width?this.width:this.video_tag.videoWidth,this.height=this.height?this.height:this.video_tag.videoHeight,properties.set({"--width":""+this.width,"--height":""+this.height,"--aspect-ratio":this.height/this.width*100+"%"},this.element)},t.prototype.addIntersectionObserver=function(){var t=this;"IntersectionObserver"in window?(this.io=new IntersectionObserver(function(e){e[0].isIntersecting?t.handleInScreen():t.handleOffScreen()},{rootMargin:"50%",threshold:[0]}),this.io.observe(this.element.querySelector("video"))):setTimeout(function(){t.handleInScreen()},300)},t.prototype.handleInScreen=function(){this.video_tag.play()},t.prototype.handleOffScreen=function(){this.video_tag.currentTime=0,this.video_tag.pause()},t.prototype.getDuration=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){return[2,this.video_tag.duration]})})},t.prototype.play=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){return this.video_tag.play(),[2]})})},t.prototype.pause=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){return this.video_tag.pause(),[2]})})},t.prototype.toggle=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){return this.video_tag.paused?this.play():this.pause(),[2]})})},t.prototype.stop=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){return this.skipTo(0),this.video_tag.pause(),[2]})})},t.prototype.skipTo=function(t){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(e){switch(e.label){case 0:return[4,this.pause()];case 1:return e.sent(),this.video_tag.currentTime=1e3*t,[4,this.play()];case 2:return e.sent(),[2]}})})},t.prototype.render=function(){return h("video",{preload:this.preload,width:this.width,height:this.height,autoplay:this.autoplay,muted:this.muted,playsinline:this.playsinline,poster:this.poster,controls:this.controls},h("slot",null))},Object.defineProperty(t,"is",{get:function(){return"stellar-video"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autoplay:{type:Boolean,attr:"autoplay"},controls:{type:Boolean,attr:"controls"},currentTime:{state:!0},duration:{state:!0},element:{elementRef:!0},getDuration:{method:!0},height:{type:Number,attr:"height",reflectToAttr:!0,mutable:!0},interval:{state:!0},io:{state:!0},muted:{type:Boolean,attr:"muted"},overlay:{type:Boolean,attr:"overlay"},pause:{method:!0},pausedTime:{state:!0},play:{method:!0},playing:{type:Boolean,attr:"playing",mutable:!0,watchCallbacks:["startInterval"]},playsinline:{type:Boolean,attr:"playsinline"},poster:{type:String,attr:"poster"},preload:{type:String,attr:"preload"},skipTo:{method:!0},startTime:{state:!0},stop:{method:!0},toggle:{method:!0},trackInView:{type:Boolean,attr:"track-in-view"},video_tag:{type:"Any",attr:"video_tag",mutable:!0},width:{type:Number,attr:"width",reflectToAttr:!0,mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"timeupdate",method:"timeupdate",bubbles:!0,cancelable:!0,composed:!0},{name:"played",method:"played",bubbles:!0,cancelable:!0,composed:!0},{name:"paused",method:"paused",bubbles:!0,cancelable:!0,composed:!0},{name:"loaded",method:"loaded",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"stellar-video{display:block;width:100%;height:0;position:relative;overflow:hidden;padding-bottom:var(--aspect-ratio)}stellar-video:after,stellar-video video{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0}stellar-video:after{content:\"\";display:block;pointer-events:none;z-index:2;mix-blend-mode:color}stellar-video[overlay]:after{background:linear-gradient(35deg,var(--theme-complement5),var(--theme-base5) 40%,var(--theme-complement5));mix-blend-mode:color}\@media not all and (min-resolution:.001dpcm){\@media{stellar-video[overlay]:after{mix-blend-mode:hard-light;opacity:.5}}}"},enumerable:!0,configurable:!0}),t}(),VideoInterview=function(){function t(){this.randomId=Math.floor(6*Math.random())+1,this.color="white",this.width=800,this.height=800,this.aspectRatio=100,this.visualization="bars2",this.loaded=!1,this.loading=!1,this.seekable=!1,this.duration=0,this.current=0,this.visible=!1,this.cache=new WeakMap}return t.prototype.componentWillLoad=function(){properties.set({"--width":this.width+"px","--height":this.height+"px","--aspectRatio":this.aspectRatio+"%"},this.element)},t.prototype.componentDidLoad=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){return this.interviewLines||(this.interviewLines=get_interview_lines(this.element)),update_interview_lines(this.interviewLines,this.cache,this.time),this.visualizer=this.element.shadowRoot.querySelector("web-audio-visualizer"),this.video=this.element.shadowRoot.querySelector("stellar-video"),this.addIntersectionObserver(),[2]})})},t.prototype.addIntersectionObserver=function(){var t=this;"IntersectionObserver"in window&&(this.io=new IntersectionObserver(function(e){e[0].isIntersecting?t.handleInScreen():t.handleOffScreen()},{rootMargin:"50%",threshold:[0]}),this.io.observe(this.element))},t.prototype.handleTimeUpdate=function(t){this.playing=t.detail.playing,this.current=Math.abs(Math.round(1e3*t.detail.currentTime)),this.duration=Math.round(1e3*t.detail.duration),update_interview_lines(this.interviewLines,this.cache,this.time)},Object.defineProperty(t.prototype,"time",{get:function(){return this.current},enumerable:!0,configurable:!0}),t.prototype.handleInScreen=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t=this;return tslib_1.__generator(this,function(e){switch(e.label){case 0:return[4,delay(1e3)];case 1:return e.sent(),this.visible=!0,[4,delay(100)];case 2:return e.sent(),this.visualizer=this.element.shadowRoot.querySelector("web-audio-visualizer"),this.video=this.element.shadowRoot.querySelector("stellar-video"),this.video.addEventListener("canplaythrough",function(){t.seekable=!0}),[2]}})})},t.prototype.attachContext=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t,e;return tslib_1.__generator(this,function(i){switch(i.label){case 0:return this.context?[3,3]:(this.context=new AudioContext,t=this.context.createMediaElementSource(this.video.video_tag),this.visualizer||(this.visualizer=this.element.shadowRoot.querySelector("web-audio-visualizer")),[4,this.visualizer.connect(this.context)]);case 1:return e=i.sent(),[4,t.connect(e.analyser)];case 2:i.sent(),e.analyser.connect(this.context.destination),i.label=3;case 3:return[2]}})})},t.prototype.handleOffScreen=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){return this.pause(),[2]})})},t.prototype.play=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){switch(t.label){case 0:return this.video?[4,this.video.play()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},t.prototype.skipTo=function(t){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(e){switch(e.label){case 0:return this.video?[4,this.video.skipTo(t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},t.prototype.pause=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){switch(t.label){case 0:return this.video?[4,this.video.pause()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},t.prototype.toggle=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){switch(t.label){case 0:return this.attachContext(),this.video?[4,this.video.toggle()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},t.prototype.handleClick=function(){this.toggle(),this.current===this.duration&&this.skipTo(0)},t.prototype.handleCurrentClick=function(){ezClipboard.copyPlain(this.current)},t.prototype.render=function(){var t=this;return h("div",{class:"card",onDblClick:function(){t.handleClick()}},!this.visible&&h("div",null,h("skeleton-img",{width:1050,height:600,loading:!0})),this.visible&&h("section",null,h("stellar-video",{controls:!1,autoplay:!0,playsinline:!0,trackInView:!1,onTimeupdate:function(e){t.handleTimeUpdate(e)}},h("source",{src:this.src})),h("div",{class:"transcript"},h("slot",{name:"transcript"})),this.video&&h("web-audio-visualizer",{for:"interview-"+this.randomId,type:this.visualization,width:1024,height:1024,color:this.color}),h("button",{class:this.loading?"loading button":this.playing?"playing button":"button",onClick:function(){t.handleClick()}},h("stellar-asset",{name:this.loading?"sync":this.playing?"pause":"play",class:this.loading?"animation-spin":""})),h("h3",null,h("stellar-unit",{class:"current",value:this.current,from:"ms",to:"s",onClick:function(){t.handleCurrentClick()}})),h("h3",null,h("stellar-unit",{class:"duration",value:this.duration,from:"ms",to:"s"})),this.seekable&&h("stellar-progress",{value:this.current,max:this.duration,noease:!0,blurable:!1,slender:!0,editable:!0,onChange:function(e){t.skipTo(e.detail.value)}})))},Object.defineProperty(t,"is",{get:function(){return"stellar-video-interview"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{aspectRatio:{type:Number,attr:"aspect-ratio",mutable:!0},color:{type:String,attr:"color"},context:{state:!0},current:{state:!0},duration:{state:!0},element:{elementRef:!0},height:{type:Number,attr:"height",mutable:!0},interviewLines:{state:!0},io:{state:!0},loaded:{state:!0},loading:{state:!0},pause:{method:!0},play:{method:!0},playing:{type:Boolean,attr:"playing",mutable:!0},randomId:{state:!0},seekable:{state:!0},skipTo:{method:!0},src:{type:String,attr:"src"},toggle:{method:!0},updateFunc:{state:!0},video:{state:!0},visible:{state:!0},visualization:{type:String,attr:"visualization",mutable:!0},visualizer:{state:!0},width:{type:Number,attr:"width",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--width:800px;--height:800px}:host,:host div.card{display:block;position:relative}:host div.card{width:auto;height:auto;margin:auto;overflow:hidden}:host div.card section{height:inherit;display:block;position:relative;padding-top:0!important}:host web-audio-visualizer{position:absolute;top:auto;left:0;right:0;bottom:0;width:100%;height:60%;pointer-events:none;z-index:2}:host web-audio-visualizer[type=circle]{height:100%}:host web-audio-visualizer[type=bars2]{width:80%;left:10%;right:10%}:host stellar-360-image,:host stellar-360-video,:host stellar-image,:host stellar-video{--gradient:radial-gradient(circle at 30% 107%,var(--theme-base5) 0%,var(--theme-base8) 5%,var(--theme-complement8) 45%,var(--theme-complement5) 60%,var(--theme-base5) 90%);position:relative;z-index:1;display:block}:host stellar-progress{position:absolute;top:0;left:0;width:100%;z-index:9;--border-radius:0}:host stellar-progress .progress{border:0}:host h3{color:#fff;margin:0}:host stellar-unit{position:absolute;bottom:1rem;z-index:4;color:#fff!important;font-weight:700}:host stellar-unit.current{left:1rem}:host stellar-unit.duration{right:1rem}:host .transcript{position:absolute;bottom:0;width:70%;left:15%;z-index:5;pointer-events:none}:host .button{position:absolute;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;width:9rem;height:9rem;top:50%;right:50%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);border-radius:100%;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:4;outline:0;cursor:pointer;padding-left:1rem;mix-blend-mode:soft-light}:host .button:focus,:host .button:hover{-webkit-transform:translate(50%,-50%) scale(1.1);transform:translate(50%,-50%) scale(1.1);mix-blend-mode:hard-light}:host .button stellar-asset{font-size:7rem;margin:auto;display:block}:host .button.loading{padding:0}:host .button.playing{width:2.8rem;height:2.8rem;top:2.2rem;right:1.8rem;padding:0;background:transparent;-webkit-transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s;transition:all .35s var(--ease) 0s,background .175s var(--ease) 0s}:host .button.playing stellar-asset{font-size:2.8rem}:host:after{content:\"\";display:block;width:100%;height:8rem;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.65)));background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.65));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#00000000\",endColorstr=\"#a6000000\",GradientType=0);position:absolute;z-index:2;bottom:0;left:0;right:0}"},enumerable:!0,configurable:!0}),t}();export{Video as StellarVideo,VideoInterview as StellarVideoInterview};