StellarCore.loadBundle("ybmaipsj",["exports","./chunk-a218a313.js","./chunk-841f0e81.js","./chunk-14f6ad5f.js","./chunk-0eedf0e0.js"],function(e,r,t,l,o){var n=window.StellarCore.h,a=function(){function e(){}return e.prototype.renderColorPallette=function(e){return[n("stellar-grid",{cols:"6"},l.colors[e].map(function(r,t){return n("stellar-card",{padding:"tiny"},n("div",{class:"aspect-ratio aspect-ratio--16x9 flex items-center justify-around",style:{"background-color":"var(--"+e+t+")"}},n("div",{class:"aspect-ratio--object flex items-center justify-around "},n("h5",{class:"f-invert fw6 ttu "+e+t},r))),n("div",{class:"pv3 ph4 tc nt4 bg-white relative"},n("div",{class:"dt w-100"},n("div",{class:"dtc"},n("p",{class:"f5 f4-ns mv0 black"},"var(--",e,t,")")))))}))]},e.prototype.render=function(){return n("div",null,this.renderColorPallette("gray"),this.renderColorPallette("red"),this.renderColorPallette("orange"),this.renderColorPallette("yellow"),this.renderColorPallette("lime"),this.renderColorPallette("green"),this.renderColorPallette("teal"),this.renderColorPallette("cyan"),this.renderColorPallette("blue"),this.renderColorPallette("indigo"),this.renderColorPallette("violet"),this.renderColorPallette("fuchsia"),this.renderColorPallette("pink"))},Object.defineProperty(e,"is",{get:function(){return"stellar-color-library"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}();e.StellarColorLibrary=a,Object.defineProperty(e,"__esModule",{value:!0})});