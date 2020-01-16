var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(s,a)}c((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return c([e,t])}}function c(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(a){s=[6,a];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-43f53497.system.js","./p-8d6d3b24.system.js","./p-752b9e3e.system.js","./p-fdba8b89.system.js","./p-bd9c4de0.system.js","./p-49be6f75.system.js"],(function(e){"use strict";var t,n,r,i;return{setters:[function(e){t=e.r;n=e.h;r=e.d},function(){},function(){},function(e){i=e.p},function(){},function(){}],execute:function(){var o=":host{contain:content;height:calc(var(--sectionHeight) * 1px);display:block;opacity:calc(var(--cameraZ) + 1);will-change:opacity;-webkit-transition:opacity 200ms ease 0s;transition:opacity 200ms ease 0s}:host .container{position:fixed;top:0;left:0;width:100%;height:100%;-webkit-perspective:calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);perspective:calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);-webkit-perspective-origin:calc(var(--scenePerspectiveOriginX) * 1%) calc(var(--scenePerspectiveOriginY) * 1%);perspective-origin:calc(var(--scenePerspectiveOriginX) * 1%) calc(var(--scenePerspectiveOriginY) * 1%);will-change:perspective-origin;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host .scene{position:absolute;top:0;height:100vh;width:100%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(calc(var(--cameraZ) * 1px));transform:translateZ(calc(var(--cameraZ) * 1px));will-change:transform}:host ::slotted(stellar-scroll-z-section){position:absolute;display:block;width:100%;top:40%;z-index:2}@media only screen and(min-width: 600px){:host ::slotted(stellar-scroll-z-section){width:45%}}";var s=e("stellar_scroll_z_root",function(){function e(e){t(this,e);this.initialOriginX=50;this.initialOriginY=30;this.itemZ=10;this.cameraSpeed=150;this.cameraZ=-1;this.scenePerspective=1;this.distanceFromTop=0;this.distanceFromBottom=0;this.perspectiveOrigin={x:0,y:0,maxGap:10}}e.prototype.randomFloat=function(e,t){return Math.floor(Math.random()*(t-e))+e};e.prototype.componentWillLoad=function(){this.distanceFromTop=this.element.getBoundingClientRect().top;this.distanceFromBottom=this.element.getBoundingClientRect().bottom;this.prepare()};e.prototype.prepare=function(){this.sections=Array.from(this.element.querySelectorAll("stellar-scroll-z-section"));i.set({"--scenePerspective":this.scenePerspective,"--scenePerspectiveOriginX":this.initialOriginX,"--scenePerspectiveOriginY":this.initialOriginY,"--itemZ":this.itemZ,"--cameraSpeed":this.cameraSpeed,"--cameraZ":this.cameraZ,"--sectionHeight":0},document.documentElement);this.perspectiveOrigin={x:parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginX")),y:parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginY")),maxGap:10};this.setSceneHeight();this.scatter()};e.prototype.scatter=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.sections.forEach((function(t,n){var r="calc("+e.randomFloat(-30,30)+"rem + 50%)";var i="calc("+e.randomFloat(-30,30)+"rem + 50%)";var o="calc(var(--itemZ) * var(--cameraSpeed) * "+n+" * -1px)";t.style.setProperty("transform","translate3D("+r+", "+i+", "+o+")")}));return[2]}))}))};e.prototype.setSceneHeight=function(){var e=this.sections.length;var t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--itemZ"));var n=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective"));var r=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed"));var i=window.innerHeight+n*r+t/2*r*e;document.documentElement.style.setProperty("--sectionHeight",""+i)};e.prototype.moveCamera=function(){this.distanceFromTop=this.element.getBoundingClientRect().top;this.distanceFromBottom=this.element.getBoundingClientRect().bottom;var e=window.pageYOffset-this.distanceFromTop;if(e>=0){document.documentElement.style.setProperty("--cameraZ",""+e)}else{document.documentElement.style.setProperty("--cameraZ","-1")}};e.prototype.moveCameraAngle=function(e){var t=(e.clientX-window.innerWidth/2)*100/(window.innerWidth/2)*-1;var n=(e.clientY-window.innerHeight/2)*100/(window.innerHeight/2)*-1;var r=this.perspectiveOrigin.x+t*this.perspectiveOrigin.maxGap/100;var i=this.perspectiveOrigin.y+n*this.perspectiveOrigin.maxGap/100;document.documentElement.style.setProperty("--scenePerspectiveOriginX",""+r);document.documentElement.style.setProperty("--scenePerspectiveOriginY",""+i)};e.prototype.render=function(){return n("div",{class:"container"},n("div",{class:"scene"},n("slot",null)))};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return o},enumerable:true,configurable:true});return e}())}}}));