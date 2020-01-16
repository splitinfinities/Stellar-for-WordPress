var __awaiter=this&&this.__awaiter||function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function a(t){try{u(n.next(t))}catch(e){r(e)}}function s(t){try{u(n["throw"](t))}catch(e){r(e)}}function u(t){t.done?i(t.value):o(t.value).then(a,s)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,o,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(r=a[0]&2?o["return"]:a[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;if(o=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;o=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(a[0]===6&&i.label<r[1]){i.label=r[1];r=a;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(a);break}if(r[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(s){a=[6,s];o=0}finally{n=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-090ab129.system.js","./p-752b9e3e.system.js","./p-fdba8b89.system.js"],(function(t){"use strict";var e,i,n,o,r,a;return{setters:[function(t){e=t.r;i=t.c;n=t.h;o=t.H;r=t.g},function(){},function(t){a=t.p}],execute:function(){var s='stellar-video{display:block;width:100%;height:0;position:relative;overflow:hidden;padding-bottom:var(--aspect-ratio);contain:content;--object-fit:initial}stellar-video video{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0;-o-object-fit:var(--object-fit);object-fit:var(--object-fit)}stellar-video::after{content:"";display:block;position:absolute;pointer-events:none;z-index:2;width:100%;height:100%;top:0;left:0;right:0;bottom:0;mix-blend-mode:color}stellar-video[overlay]::after{background:linear-gradient(35deg, var(--theme-complement5) 0%, var(--theme-base5) 40%, var(--theme-complement5) 100%);mix-blend-mode:color}@media not all and(min-resolution:.001dpcm){@media {stellar-video[overlay]::after{mix-blend-mode:hard-light;opacity:0.5}}}';var u=t("stellar_video",function(){function t(t){e(this,t);this.trackInView=true;this.preload="auto";this.autoplay=false;this.muted=false;this.playsinline=false;this.controls=true;this.playing=false;this.duration=0;this.startTime=0;this.pausedTime=0;this.currentTime=0;this.update=i(this,"update",7);this.played=i(this,"played",7);this.paused=i(this,"paused",7);this.loaded=i(this,"loaded",7)}t.prototype.componentWillLoad=function(){this.video_tag=this.element.querySelector("video");this.setDimensions()};t.prototype.componentDidLoad=function(){var t=this;this.video_tag=this.element.querySelector("video");this.video_tag.onplay=function(){t.playing=true;t.played.emit(t.eventData);t.update.emit(t.eventData)};this.video_tag.onpause=function(){t.playing=false;t.pausedTime=t.video_tag.currentTime;t.paused.emit(t.eventData);t.update.emit(t.eventData)};this.video_tag.onloadedmetadata=function(){t.setDimensions();t.duration=t.video_tag.duration;t.loaded.emit(t.eventData)}};t.prototype.videoElement=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.video_tag]}))}))};Object.defineProperty(t.prototype,"eventData",{get:function(){return{playing:this.playing,currentTime:this.currentTime,pausedTime:this.pausedTime,startTime:this.startTime,duration:this.duration}},enumerable:true,configurable:true});t.prototype.startInterval=function(){var t=this;if(this.playing){this.interval=setInterval((function(){t.currentTime=t.video_tag.currentTime;t.update.emit(t.eventData)}),30)}else{clearInterval(this.interval)}};t.prototype.setDimensions=function(){this.width=!this.width?this.video_tag?this.video_tag.videoWidth:this.width:this.width;this.height=!this.height?this.video_tag?this.video_tag.videoHeight:this.height:this.height;a.set({"--width":""+this.width,"--height":""+this.height,"--aspect-ratio":this.height/this.width*100+"%"},this.element)};t.prototype.in=function(){if(this.autoplay){this.video_tag.play()}};t.prototype.out=function(){this.video_tag.currentTime=0;this.video_tag.pause()};t.prototype.getDuration=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.video_tag.duration]}))}))};t.prototype.play=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.video_tag.play();return[2]}))}))};t.prototype.pause=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.video_tag.pause();return[2]}))}))};t.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.video_tag.paused){this.play()}else{this.pause()}return[2]}))}))};t.prototype.stop=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.skipTo(0);this.video_tag.pause();return[2]}))}))};t.prototype.skipTo=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.pause()];case 1:e.sent();this.video_tag.currentTime=t*1e3;return[4,this.play()];case 2:e.sent();return[2]}}))}))};t.prototype.render=function(){return n(o,null,n("video",{preload:this.preload,width:this.width,height:this.height,autoplay:this.autoplay,muted:this.muted,playsinline:this.playsinline,poster:this.poster,controls:this.controls},n("slot",null)),n("stellar-intersection",{element:this.element,multiple:true,in:this.in.bind(this),out:this.out.bind(this)}))};Object.defineProperty(t.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{playing:["startInterval"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return s},enumerable:true,configurable:true});return t}())}}}));