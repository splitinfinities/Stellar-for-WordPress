System.register(["./p-6f2a0351.system.js","./p-c6b679e5.system.js","./p-66b115bd.system.js","./p-4ed6ec38.system.js","./p-659cc05e.system.js","./p-ade40a6b.system.js"],function(e,t){"use strict";var r,l,n;return{setters:[function(e){r=e.d;l=e.f},function(){},function(){},function(e){n=e.b},function(){},function(){}],execute:function(){var t=function(){function e(e){r(this,e)}e.prototype.renderColorPallette=function(e){var t=n[e];return[l("stellar-grid",{cols:"6"},t.map(function(t,r){return l("stellar-card",{padding:"tiny"},l("div",{class:"aspect-ratio aspect-ratio--16x9 flex items-center justify-around",style:{"background-color":"var(--"+e+r+")"}},l("div",{class:"aspect-ratio--object flex items-center justify-around "},l("h5",{class:"f-invert fw6 ttu "+e+r},t))),l("div",{class:"pv3 ph4 tc nt4 bg-white relative"},l("div",{class:"dt w-100"},l("div",{class:"dtc"},l("p",{class:"f5 f4-ns mv0 black"},"var(--",e,r,")")))))}))]};e.prototype.render=function(){return l("div",null,this.renderColorPallette("gray"),this.renderColorPallette("red"),this.renderColorPallette("orange"),this.renderColorPallette("yellow"),this.renderColorPallette("lime"),this.renderColorPallette("green"),this.renderColorPallette("teal"),this.renderColorPallette("cyan"),this.renderColorPallette("blue"),this.renderColorPallette("indigo"),this.renderColorPallette("violet"),this.renderColorPallette("fuchsia"),this.renderColorPallette("pink"))};Object.defineProperty(e,"style",{get:function(){return""},enumerable:true,configurable:true});return e}();e("stellar_color_library",t)}}});