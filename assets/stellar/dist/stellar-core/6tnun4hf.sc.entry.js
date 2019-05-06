const t=window.StellarCore.h;import"./chunk-7646164d.js";import"./chunk-340b8099.js";import{b as s,c as e}from"./chunk-43ad3764.js";import"./chunk-5ce278cb.js";class i{constructor(){this.tooltip=!1,this.size="medium",this.color="auto",this.name="Stellar",this.initials="ST",this.shape="square",this.processing=!1,this.colorAuto=!1}componentWillLoad(){this.colors=Object.keys(s).filter(t=>!["base","white","black"].includes(t)),"auto"===this.color&&(this.colorAuto=!0),this.formatName()}hostData(){return{class:`theme-${this.color}`}}formatName(){if(this.processing)this.initials="";else{if(("auto"===this.color||this.colorAuto)&&(this.colorAuto=!0,this.color=this.colors[this.name.length%this.colors.length]),this.name.length){var t=e(this.name);this.initials="large"===this.size||"medium"===this.size?t.replace(/[^A-Z]/g,"").substring(0,2):t.substring(0,1)}else this.initials="ST";"star"!==this.shape&&"diamond"!==this.shape||(this.initials=this.initials.substring(0,1))}}render(){return t("button",{class:"wrapper",title:`You tabbed on an Avatar for ${this.name}`},this.processing&&t("div",{class:"processing"},t("stellar-avatar",{src:"Loading"})),t("div",{class:"content"},t("div",{class:"spacer"}),t("div",{class:"letter",title:this.name},this.initials),this.src&&t("img",{src:this.src,alt:this.name})),this.tooltip&&t("stellar-tooltip",null,this.name))}static get is(){return"stellar-avatar"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color",reflectToAttr:!0,mutable:!0},colorAuto:{state:!0},colors:{state:!0},element:{elementRef:!0},initials:{type:String,attr:"initials",reflectToAttr:!0,mutable:!0},name:{type:String,attr:"name",reflectToAttr:!0,mutable:!0,watchCallbacks:["formatName"]},processing:{type:Boolean,attr:"processing",reflectToAttr:!0,mutable:!0},shape:{type:String,attr:"shape",reflectToAttr:!0,mutable:!0},size:{type:String,attr:"size",reflectToAttr:!0,mutable:!0},src:{type:String,attr:"src"},tooltip:{type:Boolean,attr:"tooltip"}}}static get style(){return".sc-stellar-avatar-h, .sc-stellar-avatar-h   *.sc-stellar-avatar, .sc-stellar-avatar-h   .sc-stellar-avatar:after, .sc-stellar-avatar-h   .sc-stellar-avatar:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-avatar-h{display:inline-block;width:var(--avatar-size);max-height:var(--avatar-size);font-size:var(--avatar-font-size);--avatar-color:var(--theme-base7,var(--red7));--avatar-color-dark:var(--theme-base5,var(--red5));--avatar-font-color:var(--white);--avatar-size:2.2em;--avatar-font-size:1.8rem;--avatar-text-shadow:0 0 0px hsla(0,0%,100%,0.4);-webkit-filter:drop-shadow(var(--drop-shadow));filter:drop-shadow(var(--drop-shadow))}[size=large].sc-stellar-avatar-h{--avatar-font-size:3.6rem}[size=medium].sc-stellar-avatar-h{--avatar-font-size:1.8rem}[size=small].sc-stellar-avatar-h{--avatar-font-size:1rem}[size=tiny].sc-stellar-avatar-h{--avatar-font-size:.8rem}.sc-stellar-avatar-h   .wrapper.sc-stellar-avatar{display:block;position:relative;z-index:0;width:100%;max-width:2.2em;font:inherit;font-size:var(--avatar-font-size);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:0;background:transparent}.sc-stellar-avatar-h   .content.sc-stellar-avatar{overflow:hidden;position:relative}.sc-stellar-avatar-h   .spacer.sc-stellar-avatar{display:block;background:var(--avatar-color);background:linear-gradient(45deg,var(--avatar-color),var(--avatar-color-dark));padding-top:100%;width:100%;height:0}.sc-stellar-avatar-h   .letter.sc-stellar-avatar{display:-ms-flexbox;display:flex;top:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;text-align:center;text-transform:lowercase;line-height:100%;padding:.35em .4em .2em;color:var(--avatar-font-color);font-size:var(--avatar-font-size);font-weight:600;text-shadow:var(--avatar-text-shadow)}.sc-stellar-avatar-h   .letter.sc-stellar-avatar, .sc-stellar-avatar-h   img.sc-stellar-avatar{position:absolute;z-index:1;width:100%}.sc-stellar-avatar-h   img.sc-stellar-avatar{top:50%;right:50%;bottom:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:inherit;background:var(--white);height:auto;color:transparent;-o-object-fit:cover;object-fit:cover}[shape=circle].sc-stellar-avatar-h   .content.sc-stellar-avatar, [shape=circle].sc-stellar-avatar-h   .spacer.sc-stellar-avatar, [shape=circle].sc-stellar-avatar-h   .wrapper.sc-stellar-avatar{border-radius:100%}[shape=rectangle].sc-stellar-avatar-h   .spacer.sc-stellar-avatar{padding-top:60%}[shape=diamond].sc-stellar-avatar-h   .spacer.sc-stellar-avatar{-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)}[shape=hexagon].sc-stellar-avatar-h   .spacer.sc-stellar-avatar{-webkit-clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)}[shape=star].sc-stellar-avatar-h   .spacer.sc-stellar-avatar{-webkit-clip-path:polygon(50% 0,64% 27%,98% 35%,74% 57%,79% 91%,50% 76%,21% 91%,25% 57%,2% 35%,36% 28%);clip-path:polygon(50% 0,64% 27%,98% 35%,74% 57%,79% 91%,50% 76%,21% 91%,25% 57%,2% 35%,36% 28%)}[shape=message].sc-stellar-avatar-h   .spacer.sc-stellar-avatar{-webkit-clip-path:polygon(0 0,100% 0,100% 75%,75% 75%,75% 100%,50% 75%,0 75%);clip-path:polygon(0 0,100% 0,100% 75%,75% 75%,75% 100%,50% 75%,0 75%)}[processing].sc-stellar-avatar-h   .letter.sc-stellar-avatar{background:url(spinner.svg) no-repeat 50% 50%/50% 50%;color:transparent}[processing][size=large].sc-stellar-avatar-h   .letter.sc-stellar-avatar{background-size:32px}[processing][size=medium].sc-stellar-avatar-h   .letter.sc-stellar-avatar{background-size:16px}.dark-mode.sc-stellar-avatar-h -no-combinator.sc-stellar-avatar-h, .dark-mode   .sc-stellar-avatar-h -no-combinator.sc-stellar-avatar-h{--avatar-color:var(--theme-base8,var(--red8));--avatar-color-dark:var(--theme-base6,var(--red6));--avatar-font-color:var(--black);--avatar-text-shadow:0 0 0px rgba(0,0,0,0.4)}"}}export{i as StellarAvatar};