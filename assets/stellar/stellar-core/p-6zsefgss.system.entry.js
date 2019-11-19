var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,o){function a(t){try{u(n.next(t))}catch(t){o(t)}}function s(t){try{u(n["throw"](t))}catch(t){o(t)}}function u(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(a,s)}u((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;r=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(a[0]===6&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}if(o[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t];r=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-6f2a0351.system.js","./p-c6b679e5.system.js","./p-66b115bd.system.js"],function(t,e){"use strict";var i,n,r,o,a;return{setters:[function(t){i=t.d;n=t.i;r=t.f;o=t.g},function(){},function(t){a=t.a}],execute:function(){var e=function(){function t(t){i(this,t);this.trackInView=true;this.preload="auto";this.autoplay=false;this.muted=false;this.playsinline=false;this.controls=true;this.duration=0;this.startTime=0;this.pausedTime=0;this.currentTime=0;this.playing=false;this.timeupdate=n(this,"timeupdate",7);this.played=n(this,"played",7);this.paused=n(this,"paused",7);this.loaded=n(this,"loaded",7)}t.prototype.componentDidLoad=function(){var t=this;this.video_tag=this.element.querySelector("video");this.video_tag.onplay=function(){t.playing=true;t.played.emit(t.eventData);t.timeupdate.emit(t.eventData)};this.video_tag.onpause=function(){t.playing=false;t.pausedTime=t.video_tag.currentTime;t.paused.emit(t.eventData);t.timeupdate.emit(t.eventData)};this.video_tag.onloadedmetadata=function(){t.setDimensions();t.duration=t.video_tag.duration;t.loaded.emit(t.eventData)};this.trackInView&&this.addIntersectionObserver()};Object.defineProperty(t.prototype,"eventData",{get:function(){return{playing:this.playing,currentTime:this.currentTime,pausedTime:this.pausedTime,startTime:this.startTime,duration:this.duration}},enumerable:true,configurable:true});t.prototype.startInterval=function(){var t=this;if(this.playing){this.interval=setInterval(function(){t.currentTime=t.video_tag.currentTime;t.timeupdate.emit(t.eventData)},30)}else{clearInterval(this.interval)}};t.prototype.setDimensions=function(){this.width=!this.width?this.video_tag.videoWidth:this.width;this.height=!this.height?this.video_tag.videoHeight:this.height;a.set({"--width":""+this.width,"--height":""+this.height,"--aspect-ratio":this.height/this.width*100+"%"},this.element)};t.prototype.addIntersectionObserver=function(){var t=this;if("IntersectionObserver"in window){this.io=new IntersectionObserver(function(e){if(e[0].isIntersecting){t.handleInScreen()}else{t.handleOffScreen()}},{rootMargin:"50%",threshold:[0]});this.io.observe(this.element.querySelector("video"))}else{setTimeout(function(){t.handleInScreen()},300)}};t.prototype.handleInScreen=function(){if(this.autoplay){this.video_tag.play()}};t.prototype.handleOffScreen=function(){this.video_tag.currentTime=0;this.video_tag.pause()};t.prototype.getDuration=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,this.video_tag.duration]})})};t.prototype.play=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){this.video_tag.play();return[2]})})};t.prototype.pause=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){this.video_tag.pause();return[2]})})};t.prototype.toggle=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){if(this.video_tag.paused){this.play()}else{this.pause()}return[2]})})};t.prototype.stop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){this.skipTo(0);this.video_tag.pause();return[2]})})};t.prototype.skipTo=function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.pause()];case 1:e.sent();this.video_tag.currentTime=t*1e3;return[4,this.play()];case 2:e.sent();return[2]}})})};t.prototype.render=function(){return r("video",{preload:this.preload,width:this.width,height:this.height,autoplay:this.autoplay,muted:this.muted,playsinline:this.playsinline,poster:this.poster,controls:this.controls},r("slot",null))};Object.defineProperty(t.prototype,"element",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{playing:["startInterval"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"stellar-video{display:block;width:100%;height:0;position:relative;overflow:hidden;padding-bottom:var(--aspect-ratio)}stellar-video:after,stellar-video video{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0}stellar-video:after{content:\"\";display:block;pointer-events:none;z-index:2;mix-blend-mode:color}stellar-video[overlay]:after{background:linear-gradient(35deg,var(--theme-complement5),var(--theme-base5) 40%,var(--theme-complement5));mix-blend-mode:color}\@media not all and (min-resolution:.001dpcm){\@media{stellar-video[overlay]:after{mix-blend-mode:hard-light;opacity:.5}}}"},enumerable:true,configurable:true});return t}();t("stellar_video",e)}}});