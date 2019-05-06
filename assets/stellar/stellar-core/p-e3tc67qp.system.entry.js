var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{a(r.next(t))}catch(t){o(t)}}function u(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,u)}a((r=r.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};System.register(["./p-afdfa3ab.system.js","./p-2ddf37dd.system.js","./p-ddf33e94.system.js","./p-da4cf384.system.js","./p-92ab9c5e.system.js"],function(n){"use strict";var r,i,o,s;return{setters:[function(t){r=t.c,i=t.d,o=t.f},function(){},function(){},function(t){s=t.d},function(){}],execute:function(){var u=function(){function n(t){var e=this;r(this,t),this.noanimation=!1,this.size="medium",this.block=!1,this.vertical=!1,this.ease=s({end:10,start:-1,duration:125,tick:function(t){e.blur=t.value},complete:function(){e.blur=0,e.ease.stop()}}),this.blur=0}return n.prototype.tabs=function(){return t(this,void 0,void 0,function(){return e(this,function(){return this.tabsList&&0!==this.tabsList.length||(this.tabsList=Array.from(this.element.querySelectorAll("stellar-tab"))),[2,this.tabsList]})})},n.prototype.contents=function(){return t(this,void 0,void 0,function(){return e(this,function(){return this.contentsList=Array.from(document.querySelectorAll("stellar-content[for='"+this.name+"']")),[2,this.contentsList]})})},n.prototype.blurring=function(){return t(this,void 0,void 0,function(){return e(this,function(){return this.ease.start(),[2]})})},n.prototype.componentWillLoad=function(){return t(this,void 0,void 0,function(){return e(this,function(t){switch(t.label){case 0:return[4,this.tabs()];case 1:return t.sent(),[4,this.contents()];case 2:return t.sent(),[2]}})})},n.prototype.componentDidLoad=function(){return t(this,void 0,void 0,function(){var t,n,r=this;return e(this,function(e){switch(e.label){case 0:return this.noanimation||setTimeout(function(){window.dispatchEvent(new Event("resize")),r.element.shadowRoot.querySelector(".indicator").classList.add("ready")},100),[4,this.tabs()];case 1:return t=e.sent(),n=t.length,t.forEach(function(t,e){t.order=e+1,t.tabCount=n}),[2]}})})},n.prototype.render=function(){return i("div",{class:"tab-wrap"},i("div",{class:"tab-list",role:"tablist"},i("slot",null),i("stellar-blur",{horizontal:this.vertical?0:this.blur,vertical:this.vertical?this.blur:0},i("div",{class:"indicator"}))))},Object.defineProperty(n.prototype,"element",{get:function(){return o(this)},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return":host{--font-size:1rem;font-size:var(--font-size);display:block;position:relative;margin:0;width:auto;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;-webkit-scroll-snap-type:mandatory;-ms-scroll-snap-type:mandatory;scroll-snap-type:mandatory;-webkit-scroll-snap-points-x:repeat(10%);-ms-scroll-snap-points-x:repeat(10%);scroll-snap-points-x:repeat(10%);font-family:var(--font-primary);border-bottom:1px solid var(--theme-base1);background:var(--white);height:4em;margin-bottom:4rem}:host([size=tiny]){--font-size:.75rem}:host([size=small]){--font-size:.875rem}:host([size=medium]){--font-size:1.25rem}:host([size=large]){--font-size:1.5rem}:host stellar-blur{position:absolute;width:100%;height:100%;left:0;bottom:0}:host .indicator{display:block;position:absolute;bottom:-.1em;left:var(--tab-left,0);background:var(--theme-base5);width:var(--tab-width,0);height:.4em}:host .indicator.ready{-webkit-transition:all .35s var(--ease);transition:all .35s var(--ease)}:host .tab-wrap{max-width:1200px;margin:auto;height:100%}:host .tab-list{display:-ms-inline-flexbox;display:inline-flex;margin:0;padding:0;list-style:none;text-align:center;white-space:nowrap;height:100%;width:100%}:host .tab-wrap[scrollable=false]{overflow:visible}:host .tab-wrap[height=flex],:host .tab-wrap[height=flex] .tab-list,:host .tab-wrap[height=flex] ::slotted(stellar-tab){height:100%}:host(:not([vertical])) ::slotted(stellar-tab+stellar-tab){margin-left:1em}:host([block]){overflow:hidden;border:1px solid var(--theme-base0);width:100%}:host([block]) .tab-wrap{overflow:hidden;height:100%}:host([block]) .tab-list,:host([block]) .tab-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host([block]) .tab-list{width:100%;margin:0 3px}:host([block]) .tab-list ::slotted(stellar-tab){width:100%;-ms-flex:12 12 100%;flex:12 12 100%}:host([block]) ::slotted(stellar-tab[open=true]){color:var(--theme-base5)!important}:host([block]) .indicator{height:calc(100% - 6px);background:var(--theme-base1);top:3px;bottom:3px;-webkit-transition:all .35s var(--ease);transition:all .35s var(--ease)}:host([vertical]){height:auto;border-right:1px solid var(--theme-base1);border-bottom:none}:host([vertical]) .indicator{width:.4em;top:var(--tab-top);height:var(--tab-height)}:host([vertical]) .tab-list{-ms-flex-direction:column;flex-direction:column}:host([vertical]) .tab-list ::slotted(stellar-tab){height:4rem}:host([height=auto]){height:100%}:host-context(.dark-mode){border-bottom:1px solid var(--theme-base9);background:var(--black)}:host-context(.dark-mode) .indicator{background:var(--theme-base5)}:host-context(.dark-mode):host([block]){border:1px solid var(--theme-base9)}"},enumerable:!0,configurable:!0}),n}();n("stellar_tabs",u)}}});