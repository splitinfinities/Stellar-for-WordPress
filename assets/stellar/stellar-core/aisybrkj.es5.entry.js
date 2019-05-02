StellarCore.loadBundle("aisybrkj",["exports","./chunk-a218a313.js","./chunk-841f0e81.js","./chunk-297fc243.js","./chunk-b35109e5.js","./chunk-0eedf0e0.js"],function(t,e,i,r,s,o){var a=window.StellarCore.h,l=function(){function t(){this.tooltip=!1,this.size="medium",this.color="auto",this.name="Stellar",this.initials="ST",this.shape="square",this.processing=!1,this.colorAuto=!1}return t.prototype.componentWillLoad=function(){this.colors=Object.keys(r.colors).filter(function(t){return!["base","white","black"].includes(t)}),"auto"===this.color&&(this.colorAuto=!0),this.formatName()},t.prototype.hostData=function(){return{class:"theme-"+this.color}},t.prototype.formatName=function(){if(this.processing)this.initials="";else{if(("auto"===this.color||this.colorAuto)&&(this.colorAuto=!0,this.color=this.colors[this.name.length%this.colors.length]),this.name.length){var t=s.titleCase(this.name);this.initials="large"===this.size||"medium"===this.size?t.replace(/[^A-Z]/g,"").substring(0,2):t.substring(0,1)}else this.initials="ST";"star"!==this.shape&&"diamond"!==this.shape||(this.initials=this.initials.substring(0,1))}},t.prototype.render=function(){return a("button",{class:"wrapper",title:"You tabbed on an Avatar for "+this.name},this.processing&&a("div",{class:"processing"},a("stellar-avatar",{src:"Loading"})),a("div",{class:"content"},a("div",{class:"spacer"}),a("div",{class:"letter",title:this.name},this.initials),this.src&&a("img",{src:this.src,alt:this.name})),this.tooltip&&a("stellar-tooltip",null,this.name))},Object.defineProperty(t,"is",{get:function(){return"stellar-avatar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color",reflectToAttr:!0,mutable:!0},colorAuto:{state:!0},colors:{state:!0},element:{elementRef:!0},initials:{type:String,attr:"initials",reflectToAttr:!0,mutable:!0},name:{type:String,attr:"name",reflectToAttr:!0,mutable:!0,watchCallbacks:["formatName"]},processing:{type:Boolean,attr:"processing",reflectToAttr:!0,mutable:!0},shape:{type:String,attr:"shape",reflectToAttr:!0,mutable:!0},size:{type:String,attr:"size",reflectToAttr:!0,mutable:!0},src:{type:String,attr:"src"},tooltip:{type:Boolean,attr:"tooltip"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;width:var(--avatar-size);max-height:var(--avatar-size);font-size:var(--avatar-font-size);--avatar-color:var(--theme-base7,var(--red7));--avatar-color-dark:var(--theme-base5,var(--red5));--avatar-font-color:var(--white);--avatar-size:2.2em;--avatar-font-size:1.8rem;--avatar-text-shadow:0 0 0px hsla(0,0%,100%,0.4);-webkit-filter:drop-shadow(var(--drop-shadow));filter:drop-shadow(var(--drop-shadow))}:host([size=large]){--avatar-font-size:3.6rem}:host([size=medium]){--avatar-font-size:1.8rem}:host([size=small]){--avatar-font-size:1rem}:host([size=tiny]){--avatar-font-size:.8rem}:host .wrapper{display:block;position:relative;z-index:0;width:100%;max-width:2.2em;font:inherit;font-size:var(--avatar-font-size);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:0;background:transparent}:host .content{overflow:hidden;position:relative}:host .spacer{display:block;background:var(--avatar-color);background:linear-gradient(45deg,var(--avatar-color),var(--avatar-color-dark));padding-top:100%;width:100%;height:0}:host .letter{display:-ms-flexbox;display:flex;top:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;text-align:center;text-transform:lowercase;line-height:100%;padding:.35em .4em .2em;color:var(--avatar-font-color);font-size:var(--avatar-font-size);font-weight:600;text-shadow:var(--avatar-text-shadow)}:host .letter,:host img{position:absolute;z-index:1;width:100%}:host img{top:50%;right:50%;bottom:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:inherit;background:var(--white);height:auto;color:transparent;-o-object-fit:cover;object-fit:cover}:host([shape=circle]) .content,:host([shape=circle]) .spacer,:host([shape=circle]) .wrapper{border-radius:100%}:host([shape=rectangle]) .spacer{padding-top:60%}:host([shape=diamond]) .spacer{-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)}:host([shape=hexagon]) .spacer{-webkit-clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)}:host([shape=star]) .spacer{-webkit-clip-path:polygon(50% 0,64% 27%,98% 35%,74% 57%,79% 91%,50% 76%,21% 91%,25% 57%,2% 35%,36% 28%);clip-path:polygon(50% 0,64% 27%,98% 35%,74% 57%,79% 91%,50% 76%,21% 91%,25% 57%,2% 35%,36% 28%)}:host([shape=message]) .spacer{-webkit-clip-path:polygon(0 0,100% 0,100% 75%,75% 75%,75% 100%,50% 75%,0 75%);clip-path:polygon(0 0,100% 0,100% 75%,75% 75%,75% 100%,50% 75%,0 75%)}:host([processing]) .letter{background:url(spinner.svg) no-repeat 50% 50%/50% 50%;color:transparent}:host([processing][size=large]) .letter{background-size:32px}:host([processing][size=medium]) .letter{background-size:16px}:host-context(.dark-mode):host{--avatar-color:var(--theme-base8,var(--red8));--avatar-color-dark:var(--theme-base6,var(--red6));--avatar-font-color:var(--black);--avatar-text-shadow:0 0 0px rgba(0,0,0,0.4)}"},enumerable:!0,configurable:!0}),t}();t.StellarAvatar=l,Object.defineProperty(t,"__esModule",{value:!0})});