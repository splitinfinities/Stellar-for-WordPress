StellarCore.loadBundle("d1hg729b",["exports","./chunk-a218a313.js","./chunk-841f0e81.js"],function(e,t,i){var r=window.StellarCore.h,n=function(){function e(){this.width=600,this.height=300,this.block=!1,this.loading=!1,this.icon=!1}return e.prototype.componentWillLoad=function(){var e=this;this.block||i.properties.set({"--width":this.width+"px","--height":this.height+"px"},this.element),this.observer=new IntersectionObserver(function(t){t.forEach(function(t){t.intersectionRatio>0?e.element.classList.add("visible"):e.element.classList.remove("visible")})}),this.observer.observe(this.element)},e.prototype.render=function(){return[this.loading&&this.icon&&r("stellar-asset",{name:"spinning-bubbles",color:"gray25"}),r("svg",{width:this.width,height:this.height},r("rect",{width:this.width,height:this.height}))]},Object.defineProperty(e,"is",{get:function(){return"skeleton-img"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{block:{type:Boolean,attr:"block",reflectToAttr:!0},element:{elementRef:!0},height:{type:Number,attr:"height",reflectToAttr:!0},icon:{type:Boolean,attr:"icon",reflectToAttr:!0},loading:{type:Boolean,attr:"loading",reflectToAttr:!0},observer:{state:!0},width:{type:Number,attr:"width",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"skeleton-img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;display:block;position:relative;margin-bottom:1rem;border-radius:4px;overflow:hidden;max-width:var(--width);max-height:var(--height)}skeleton-img svg{display:block;width:100%;height:auto;overflow:hidden}skeleton-img svg rect{fill:var(--theme-base5)}skeleton-img[loading]{position:relative}skeleton-img[loading]:before{content:\"\";display:block;position:absolute;top:0;right:0;bottom:0;left:-100%;background-color:var(--theme-base5);background-image:linear-gradient(45deg,var(--theme-base5),var(--theme-base5) 20%,var(--theme-base3) 40%,var(--theme-base4) 61%,var(--theme-base5) 80%,var(--theme-base5));width:300%;height:100%;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}skeleton-img[loading].visible:before{-webkit-animation:shimmer 1.25s linear 0s infinite forwards;animation:shimmer 1.25s linear 0s infinite forwards}skeleton-img stellar-asset{position:absolute;top:50%;right:50%;bottom:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:var(--icon-width);height:var(--icon-height)}\@-webkit-keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}to{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}\@keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}to{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}"},enumerable:!0,configurable:!0}),e}();e.SkeletonImg=n,Object.defineProperty(e,"__esModule",{value:!0})});