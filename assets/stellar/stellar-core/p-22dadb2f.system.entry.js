System.register(["./p-de1c7c63.system.js"],(function(t){"use strict";var e,i,a;return{setters:[function(t){e=t.r;i=t.h;a=t.g}],execute:function(){var n="stellar-reveal{contain:content}@-webkit-keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}100%{opacity:1}}@keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}100%{opacity:1}}@-webkit-keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}100%{opacity:1}}@keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}100%{opacity:1}}@-webkit-keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}100%{opacity:1}}@keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}100%{opacity:1}}@-webkit-keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}100%{opacity:1}}@keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}100%{opacity:1}}.reveal{opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-duration:500ms;animation-duration:500ms}.slide-up{-webkit-animation-name:slide-up;animation-name:slide-up}.slide-down{-webkit-animation-name:slide-down;animation-name:slide-down}.slide-right{-webkit-animation-name:slide-right;animation-name:slide-right}.slide-left{-webkit-animation-name:slide-right;animation-name:slide-right}";var r=t("stellar_reveal",function(){function t(t){e(this,t);this.direction="up";this.delay=0;this.duration=500;this.animationDistance="30%";this.triggerDistance="33%"}t.prototype.componentDidLoad=function(){var t=this.direction==="right"||this.direction==="down"?"-"+this.animationDistance:this.animationDistance;this.element.querySelector(".reveal").style.setProperty("--distance",t)};t.prototype.in=function(){this.element.querySelector(".reveal").classList.add("slide-"+this.direction)};t.prototype.render=function(){return i("div",{class:"reveal",style:{animationDuration:this.duration+"ms",animationDelay:this.delay+"ms"}},i("slot",null),i("stellar-intersection",{element:this.element,multiple:true,in:this.in.bind(this),margin:this.triggerDistance}))};Object.defineProperty(t.prototype,"element",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return n},enumerable:true,configurable:true});return t}())}}}));