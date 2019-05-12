var __awaiter=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))(function(n,a){function s(t){try{l(r.next(t))}catch(t){a(t)}}function o(t){try{l(r.throw(t))}catch(t){a(t)}}function l(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(s,o)}l((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var i,r,n,a,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,r&&(n=2&a[0]?r.return:a[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,a[1])).done)return n;switch(r=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(6===a[0]&&s.label<n[1]){s.label=n[1],n=a;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(a);break}n[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],r=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}};StellarCore.loadBundle("jqzuklrs",["exports","./chunk-a218a313.js","./chunk-841f0e81.js","./chunk-14f6ad5f.js","./chunk-0eedf0e0.js"],function(t,e,i,r,n){var a=window.StellarCore.h,s=function(){function t(){this.visualizationColor="gray",this.autoplay=!1,this.playlist="show",this.name="Playlist",this.remember=!0,this.artwork=!1,this.view="playlist",this.playing=!1,this.load=!1,this.loading=!1,this.current=0,this.currentTrack={title:"Loading...",artist:"One sec...",picture:void 0},this.progress_value=0}return t.prototype.componentWillLoad=function(){this.loadFromStorage()},t.prototype.componentDidLoad=function(){this.visualizer=this.element.shadowRoot.querySelector("web-audio-visualizer"),this.audio=this.element.shadowRoot.querySelector("audio"),this.progress=this.element.shadowRoot.querySelector("progress"),this.playlistItems=this.element.querySelectorAll("stellar-song"),this.currentPlaylistItem=this.element.querySelector("stellar-song[playing]"),Array.from(this.playlistItems).forEach(function(t,e){t.setIndex(e)}),this.audio&&(this.audio.volume=.7);var t=this.element.querySelector("stellar-song[playing]")||this.element.querySelector("stellar-song");t.playing=!0,this.prepare(t),this.autoplay&&this.play(),this.remember&&this.loadFromStorage(),this.handleTimeUpdates(),this.handleProgressClick()},t.prototype.handleProgressClick=function(){var t=this;this.progress.addEventListener("click",function(e){t.audio.currentTime=e.offsetX/t.progress.offsetWidth*t.audio.duration})},t.prototype.handleTimeUpdates=function(){var t=this;this.audio.addEventListener("timeupdate",function(){t.currentTime=r.asTime(parseFloat(t.audio.currentTime.toString()).toFixed(10)),t.duration=r.asTime(parseFloat(t.audio.duration.toString()).toFixed(10)),t.progress_value=0!==t.audio.currentTime&&0!==t.audio.duration?t.audio.currentTime/t.audio.duration*100:0}),this.audio.addEventListener("ended",this.next.bind(this))},t.prototype.handleKeydown=function(t){"space"===t.key?this.pause():"left"===t.key?this.previous():"right"===t.key&&this.next()},t.prototype.handleSongLoaded=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(i){switch(i.label){case 0:return(e=t.detail.el).playing?[4,this.prepare(e)]:[3,3];case 1:return i.sent(),[4,this.play(!0)];case 2:i.sent(),i.label=3;case 3:return[2]}})})},t.prototype.loadFromStorage=function(){var t=localStorage.getItem("playlist");"show"!==t&&"hide"!==t||(this.playlist=t)},t.prototype.prepare=function(t){return __awaiter(this,void 0,void 0,function(){var e,i;return __generator(this,function(r){switch(r.label){case 0:return this.currentPlaylistItem&&this.currentPlaylistItem.switching(),this.currentTrack={title:"Loading...",artist:"One sec...",picture:void 0},this.currentPlaylistItem=t,this.audio.src=this.currentPlaylistItem.src,[4,this.audio.load()];case 1:return r.sent(),e=this,[4,this.currentPlaylistItem.getIndex()];case 2:return e.current=r.sent(),this.currentPlaylistItem.playing=!0,i=this,[4,this.currentPlaylistItem.details()];case 3:return i.currentTrack=r.sent(),[2]}})})},t.prototype.play=function(t){return void 0===t&&(t=!1),__awaiter(this,void 0,void 0,function(){var e,i,r,n;return __generator(this,function(a){switch(a.label){case 0:return t||(this.currentTrack={title:"Loading...",artist:"One sec...",picture:void 0}),this.loading=!0,this.playing=!0,[4,this.audio.play()];case 1:return a.sent(),this.context?[3,3]:(e=new AudioContext,i=e.createMediaElementSource(this.audio),[4,this.visualizer.connect(e)]);case 2:r=a.sent(),i.connect(r.analyser),r.analyser.connect(e.destination),this.context=e,a.label=3;case 3:return n=this,[4,this.currentPlaylistItem.details()];case 4:return n.currentTrack=a.sent(),this.loading=!1,[2]}})})},t.prototype.pause=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return this.audio.paused?[3,2]:(this.playing=!1,[4,this.audio.pause()]);case 1:return t.sent(),[3,4];case 2:return this.playing=!0,[4,this.audio.play()];case 3:t.sent(),t.label=4;case 4:return[2]}})})},t.prototype.next=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return t=this.element.querySelector("stellar-song[playing]"),[4,(t=this.current===this.playlistItems.length-1?this.element.querySelector("stellar-song:first-child"):t.nextElementSibling).play()];case 1:return e.sent(),[2]}})})},t.prototype.previous=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){return(t=this.element.querySelector("stellar-song[playing]")).removeAttribute("playing"),(t=0===this.current?this.element.querySelector("stellar-song:last-child"):t.previousElementSibling).setAttribute("playing",!0),t.play(),[2]})})},t.prototype.togglePlaylist=function(){this.playlist="show"===this.playlist?"hide":"show",localStorage.setItem("playlist",this.playlist)},t.prototype.toggleAlbumArtView=function(){this.view="playlist"===this.view?"art":"playlist"},t.prototype.handlePlay=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return console.log(this.load),this.load||(this.load=!0,this.load_songs.emit({})),this.pause(),[2]})})},t.prototype.render=function(){var t=this;return a("div",{id:"player"},a("div",{class:"playlist-title"},a("h6",null,this.name),a("button",{class:"playlist",onClick:function(){return t.togglePlaylist()}},a("h6",{class:"list"},a("stellar-asset",{name:"musical-notes"}),"list"))),a("div",{class:"playlist-playing"},a("button",{onClick:function(){t.handlePlay()},class:"toggle-button","data-playing":this.playing},a("ion-icon",this.playing?{name:"md-pause"}:{name:"md-play"})),!this.load&&a("stellar-button",{tag:"button",size:"tiny",onClick:function(){t.load=!0,t.load_songs.emit({})}},"Load ",this.name||"this playlist"),this.load&&a("div",{class:"playlist-playing-details"},a("h2",null,this.currentTrack.title||"Loading..."),a("h3",null,this.currentTrack.artist||"One Sec...")),this.load&&a("div",{class:"playlist-playing-image"},this.loading&&a("stellar-progress",{indeterminate:!0}),!this.loading&&void 0!==this.currentTrack.picture&&a("img",{src:this.currentTrack.picture,onClick:function(){return t.toggleAlbumArtView()}})),a("web-audio-visualizer",{type:"art"===this.view?"circle":"bars",color:this.visualizationColor})),a("div",{id:"controls",class:"controls"},a("button",{onClick:function(){return t.previous()},class:"button previous"},a("stellar-asset",{name:"skip-backward"})),a("button",{onClick:function(){return t.next()},class:"button next"},a("stellar-asset",{name:"skip-forward"}))),a("div",{class:"playlist-progress"},a("h6",{id:"currentTime"},this.currentTime),a("h6",{id:"totalTime"},this.duration),a("progress",{id:"progress",max:"100",value:this.progress_value})),a("audio",{id:"playlist-audio",preload:"auto",tabindex:"0",controls:!0},a("source",{id:"source",type:"audio/mp3"})),a("div",{id:"playlist",class:"playlist-list "+this.playlist},this.load&&a("slot",null)))},Object.defineProperty(t,"is",{get:function(){return"stellar-playlist"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{artwork:{type:Boolean,attr:"artwork",reflectToAttr:!0,mutable:!0},audio:{state:!0},autoplay:{type:Boolean,attr:"autoplay"},context:{state:!0},current:{state:!0},currentPlaylistItem:{state:!0},currentTime:{state:!0},currentTrack:{state:!0},duration:{state:!0},element:{elementRef:!0},load:{type:Boolean,attr:"load",reflectToAttr:!0,mutable:!0},loading:{type:Boolean,attr:"loading"},name:{type:String,attr:"name"},next:{method:!0},pause:{method:!0},play:{method:!0},playing:{type:Boolean,attr:"playing",reflectToAttr:!0,mutable:!0},playlist:{type:String,attr:"playlist",reflectToAttr:!0,mutable:!0},playlistItems:{state:!0},prepare:{method:!0},previous:{method:!0},progress:{state:!0},progress_value:{state:!0},remember:{type:Boolean,attr:"remember"},view:{type:String,attr:"view",reflectToAttr:!0,mutable:!0},visualizationColor:{type:String,attr:"visualization-color"},visualizer:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"load_songs",method:"load_songs",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"keydown",method:"handleKeydown"},{name:"loaded",method:"handleSongLoaded"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-stellar-playlist-h, .sc-stellar-playlist-h   *.sc-stellar-playlist{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-playlist-h{--color-one:var(--theme-base1);--color-two:var(--theme-base9);--color-three:var(--theme-base5);--color-four:var(--theme-base7);--color-bg:var(--theme-base0);--color-bg-active:var(--theme-base1);--color-bg-playing:var(--theme-base2);--color-line:var(--theme-base1)}.dark-mode.sc-stellar-playlist-h -no-combinator.sc-stellar-playlist-h, .dark-mode   .sc-stellar-playlist-h -no-combinator.sc-stellar-playlist-h{--color-one:var(--theme-base9);--color-two:var(--theme-base1);--color-three:var(--theme-base7);--color-four:var(--theme-base2);--color-bg:var(--black-alt);--color-bg-active:var(--theme-base8);--color-bg-playing:var(--theme-base8);--color-line:var(--black)}.sc-stellar-playlist-h{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--color-bg);max-width:650px;width:100%;margin:0 auto}.sc-stellar-playlist-h   button.sc-stellar-playlist{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;outline:0;border:0;cursor:pointer}.sc-stellar-playlist-h   audio.sc-stellar-playlist{display:none}.sc-stellar-playlist-h   web-audio-visualizer.sc-stellar-playlist{height:0;margin-top:1rem;opacity:0;-webkit-transition:all .25s var(--ease) 0s;transition:all .25s var(--ease) 0s;pointer-events:none;width:100%}[playing].sc-stellar-playlist-h   web-audio-visualizer.sc-stellar-playlist{opacity:1;height:10rem}.sc-stellar-playlist-h   h6.sc-stellar-playlist{font-size:.75rem;margin:0;text-transform:uppercase;color:var(--color-two);letter-spacing:.23em;z-index:1}.sc-stellar-playlist-h   h6.list.sc-stellar-playlist{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.sc-stellar-playlist-h   h6.list.sc-stellar-playlist   stellar-asset.sc-stellar-playlist{margin-right:.5rem}.sc-stellar-playlist-h   .playlist-playing.sc-stellar-playlist, .sc-stellar-playlist-h   .playlist-playing-details.sc-stellar-playlist, .sc-stellar-playlist-h   .playlist-progress.sc-stellar-playlist, .sc-stellar-playlist-h   .playlist-title.sc-stellar-playlist{-webkit-transition:all .1875s ease-in-out 0s;transition:all .1875s ease-in-out 0s}.sc-stellar-playlist-h   .playlist-playing-image.sc-stellar-playlist{-webkit-transition:all .25s ease-in-out 0s;transition:all .25s ease-in-out 0s}.sc-stellar-playlist-h   .playlist-title.sc-stellar-playlist{background:var(--color-one);height:40px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:10px 30px}.sc-stellar-playlist-h   .playlist-playing-details.sc-stellar-playlist{margin-right:30px}.sc-stellar-playlist-h   .playlist-playing.sc-stellar-playlist{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;margin:30px}.sc-stellar-playlist-h   .playlist-playing.sc-stellar-playlist   h2.sc-stellar-playlist, .sc-stellar-playlist-h   .playlist-playing.sc-stellar-playlist   h3.sc-stellar-playlist{font-weight:400;margin:0}.sc-stellar-playlist-h   .playlist-playing.sc-stellar-playlist   h2.sc-stellar-playlist{color:var(--color-two);font-weight:700;font-size:17px;overflow:hidden;width:100%}.sc-stellar-playlist-h   .playlist-playing.sc-stellar-playlist   h3.sc-stellar-playlist{color:var(--color-four);font-size:16px;overflow:hidden;width:100%}.sc-stellar-playlist-h   .playlist-progress.sc-stellar-playlist{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:baseline;align-items:baseline;-ms-flex-pack:justify;justify-content:space-between;width:100%;padding:0 15px 15px;z-index:5}.sc-stellar-playlist-h   .playlist-progress.sc-stellar-playlist   progress.sc-stellar-playlist{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;height:3px;bottom:0;left:0;width:100%;-webkit-transition:all 75ms ease-in-out .25s;transition:all 75ms ease-in-out .25s;cursor:pointer;z-index:2}.sc-stellar-playlist-h   .playlist-progress.sc-stellar-playlist   progress.sc-stellar-playlist:hover{-webkit-transition:all 75ms ease-in-out 0s;transition:all 75ms ease-in-out 0s;height:16px;bottom:-8px}.sc-stellar-playlist-h   .playlist-progress.sc-stellar-playlist   progress[value].sc-stellar-playlist::-moz-progress-bar{background-color:var(--color-line)}.sc-stellar-playlist-h   .playlist-progress.sc-stellar-playlist   progress[value].sc-stellar-playlist::-webkit-progress-bar{background-color:var(--color-line)}.sc-stellar-playlist-h   .playlist-progress.sc-stellar-playlist   progress[value].sc-stellar-playlist::-webkit-progress-value{background-color:var(--color-three)}.sc-stellar-playlist-h   .playlist-list.sc-stellar-playlist{max-height:24rem;overflow:auto;-webkit-transition:all .2s ease 0s;transition:all .2s ease 0s}.sc-stellar-playlist-h   .playlist-list.hide.sc-stellar-playlist{max-height:0}.sc-stellar-playlist-h   .controls.sc-stellar-playlist{display:-ms-flexbox;display:flex;display:none;margin:1em 0}.sc-stellar-playlist-h   .controls.sc-stellar-playlist   .button.sc-stellar-playlist{font-size:2rem;width:50%;-ms-flex:12 6 200px;flex:12 6 200px}.sc-stellar-playlist-h   .controls.sc-stellar-playlist   .button.sc-stellar-playlist   stellar-asset.sc-stellar-playlist{display:inline-block}.sc-stellar-playlist-h   .playlist-playing-image.sc-stellar-playlist{margin:auto 0 auto auto;width:5rem;-ms-flex:0 0 5rem;flex:0 0 5rem;height:5rem;cursor:pointer}.sc-stellar-playlist-h   .playlist-playing-image.sc-stellar-playlist   img.sc-stellar-playlist{width:100%;background:#fff;border:1px solid var(--color-one);border-radius:3px;height:auto;-webkit-box-shadow:0 3px 3px 0 var(--color-one);box-shadow:0 3px 3px 0 var(--color-one)}.sc-stellar-playlist-h   .playlist-playing.sc-stellar-playlist   .toggle-button.sc-stellar-playlist{padding:0;margin-right:20px;width:50px;-ms-flex:0 0 50px;flex:0 0 50px;height:50px;padding:14px;border-radius:100%;background:var(--color-three);color:#fff}.sc-stellar-playlist-h   .playlist-playing.sc-stellar-playlist   .toggle-button.sc-stellar-playlist   path.sc-stellar-playlist{fill:var(--color-bg)}.sc-stellar-playlist-h   .playlist-playing.sc-stellar-playlist   .toggle-button[data-playing=false].sc-stellar-playlist{padding:14px 12px 14px 16px}.sc-stellar-playlist-h   .st0.sc-stellar-playlist{fill:var(--color-three)}.sc-stellar-playlist-h   .st1.sc-stellar-playlist{fill:#fff}[view=art].sc-stellar-playlist-h   .playlist-playing.sc-stellar-playlist{position:relative;margin:0;padding:0;overflow:hidden}[view=art].sc-stellar-playlist-h   web-audio-visualizer.sc-stellar-playlist{height:100%;position:absolute;bottom:0;z-index:2;-webkit-transition:all 0s var(--ease) 0s;transition:all 0s var(--ease) 0s}[view=art].sc-stellar-playlist-h   .playlist-playing.sc-stellar-playlist   .toggle-button.sc-stellar-playlist{display:none}[view=art].sc-stellar-playlist-h   .playlist-playing.sc-stellar-playlist   .playlist-playing-details.sc-stellar-playlist{position:absolute;bottom:0;width:100%;padding:2rem;background:var(--color-one);left:0;right:0;text-align:center;mix-blend-mode:hard-light;margin:0;-webkit-transform:translateY(100%);transform:translateY(100%);z-index:3}[view=art].sc-stellar-playlist-h:hover   .playlist-playing-details.sc-stellar-playlist{-webkit-transform:translateY(0);transform:translateY(0)}[view=art].sc-stellar-playlist-h   .playlist-progress.sc-stellar-playlist{padding:0 15px 0}[view=art].sc-stellar-playlist-h   .playlist-progress.sc-stellar-playlist   h6.sc-stellar-playlist{display:none}[view=art].sc-stellar-playlist-h   .playlist-playing-image.sc-stellar-playlist{width:100%;margin:0 auto;-ms-flex:none;flex:none;height:0;padding-bottom:100%}[view=art].sc-stellar-playlist-h   .playlist-playing-image.sc-stellar-playlist:focus, [view=art].sc-stellar-playlist-h   .playlist-playing-image.sc-stellar-playlist:hover{-webkit-transform:scale(1.025);transform:scale(1.025);cursor:pointer}[view=art].sc-stellar-playlist-h   .playlist-playing-image.sc-stellar-playlist   img.sc-stellar-playlist{width:100%}[view=art].sc-stellar-playlist-h   .controls.sc-stellar-playlist{display:none}"},enumerable:!0,configurable:!0}),t}();t.StellarPlaylist=s,Object.defineProperty(t,"__esModule",{value:!0})});