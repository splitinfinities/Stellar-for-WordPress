import{r as t,h as a,H as e,d as s}from"./p-ea8e8140.js";import{c as r,t as o}from"./p-5c97c18e.js";import"./p-c428ff15.js";import"./p-c93f133f.js";import"./p-22e0cac7.js";import"./p-3a3a4911.js";import"./p-20de5b5b.js";import{T as i}from"./p-148b1416.js";const h=class{constructor(a){t(this,a),this.notooltip=!1,this.color="auto",this.name="Stellar",this.initials="ST",this.shape="square",this.processing=!1,this.dark=!1,this.colorAuto=!1}componentWillLoad(){this.colors=Object.keys(r).filter(t=>!["base","white","black"].includes(t)),"auto"===this.color&&(this.colorAuto=!0),this.formatName()}formatName(){if(this.processing)this.initials="";else{if(("auto"===this.color||this.colorAuto)&&(this.colorAuto=!0,this.color=this.colors[this.name.length%this.colors.length]),this.name.length){var t=o(this.name);this.initials="large"===this.size||"medium"===this.size?t.replace(/[^A-Z]/g,"").substring(0,2):t.substring(0,1)}else this.initials="ST";"star"!==this.shape&&"diamond"!==this.shape||(this.initials=this.initials.substring(0,1))}}render(){return a(e,{class:`theme-${this.color}`},a("button",{class:"wrapper",title:`You tabbed on an Avatar for ${this.name}`,onFocus:()=>{this.focus=!0},onBlur:()=>{this.focus=!1}},this.processing&&a("div",{class:"processing"},a("stellar-avatar",{src:"Loading"})),a("div",{class:"content"},a("div",{class:"spacer"}),a("div",{class:"letter",title:this.name},this.initials),this.src&&a("img",{src:this.src,alt:this.name})),!this.notooltip&&a("stellar-tooltip",{focused:this.focus},this.name)))}get element(){return s(this)}static get watchers(){return{name:["formatName"]}}static get style(){return":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:inline-block;width:var(--avatar-size);max-height:var(--avatar-size);font-size:var(--avatar-font-size);--avatar-color:var(--theme-base7, var(--red7));--avatar-color-dark:var(--theme-base5, var(--red5));--avatar-font-color:var(--white);--avatar-size:var(--ms4);--avatar-font-size:var(--ms1);--avatar-text-shadow:0 0 0px rgba(255, 255, 255, .4);-webkit-filter:drop-shadow(var(--drop-shadow));filter:drop-shadow(var(--drop-shadow))}:host([size='tiny']){--avatar-size:var(--ms1);--avatar-font-size:var(--ms-2)}:host([size='small']){--avatar-size:var(--ms3);--avatar-font-size:var(--ms-1)}:host([size='medium']){--avatar-size:var(--ms6);--avatar-font-size:var(--ms3)}:host([size='large']){--avatar-size:calc(var(--ms8) + 0.1em);--avatar-font-size:var(--ms5)}:host .wrapper{display:block;position:relative;z-index:0;width:100%;max-width:2.2em;font:inherit;font-size:var(--avatar-font-size);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:0;background:transparent}:host .content{overflow:hidden;position:relative}:host .spacer{display:block;background:var(--avatar-color);background:linear-gradient(45deg, var(--avatar-color) 0%, var(--avatar-color-dark) 100%);padding-top:100%;width:100%;height:0}:host .letter{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:1;width:100%;height:100%;text-align:center;text-transform:lowercase;line-height:100%;padding:0.35em 0.4em 0.2em;color:var(--avatar-font-color);font-size:var(--avatar-font-size);font-weight:600;text-shadow:var(--avatar-text-shadow)}:host img{position:absolute;top:50%;right:50%;bottom:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);z-index:1;border-radius:inherit;background:var(--white);width:100%;height:auto;color:transparent;-o-object-fit:cover;object-fit:cover}:host([shape='circle']) .wrapper,:host([shape='circle']) .content,:host([shape='circle']) .spacer{border-radius:100%}:host([shape='rectangle']) .spacer{padding-top:60%}:host([shape='diamond']) .spacer{-webkit-clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)}:host([shape='hexagon']) .spacer{-webkit-clip-path:polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);clip-path:polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)}:host([shape='star']) .spacer{-webkit-clip-path:polygon(50% 0%, 64% 27%, 98% 35%, 74% 57%, 79% 91%, 50% 76%, 21% 91%, 25% 57%, 2% 35%, 36% 28%);clip-path:polygon(50% 0%, 64% 27%, 98% 35%, 74% 57%, 79% 91%, 50% 76%, 21% 91%, 25% 57%, 2% 35%, 36% 28%)}:host([shape='message']) .spacer{-webkit-clip-path:polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);clip-path:polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)}:host([processing]) .letter{background:url(\"spinner.svg\") no-repeat 50% 50%/50% 50%;color:transparent}:host([processing][size='large']) .letter{background-size:32px}:host([processing][size='medium']) .letter{background-size:16px}:host([dark]){--avatar-color:var(--theme-base8, var(--red8));--avatar-color-dark:var(--theme-base6, var(--red6));--avatar-font-color:var(--black);--avatar-text-shadow:0 0 0px rgba(0, 0, 0, .4)}"}};i.injectProps(h,["dark"]);export{h as stellar_avatar};