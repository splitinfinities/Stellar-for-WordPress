const t=window.StellarCore.h;import"./chunk-7646164d.js";import"./chunk-340b8099.js";import"./chunk-9f751763.js";import{a as e}from"./chunk-a955a305.js";import"./chunk-5ce278cb.js";class r{constructor(){this.open=!1,this.ease=e({end:6,start:-1,duration:200,tick:t=>{this.blur=t.value},complete:()=>{this.blur=0,this.ease.stop()}}),this.blur=0}async handleActive(t){this.parent=t.detail.parent;const e=await this.parent.contents();t.detail.name!==this.element.id&&e.forEach(e=>{e.open=e.id===t.detail.name,e.open&&this.ease.start()})}render(){return t("stellar-blur",{class:"wrap",role:"tabpanel",vertical:this.blur,"aria-hidden":this.open?"false":"true"},t("slot",null))}static get is(){return"stellar-content"}static get encapsulation(){return"shadow"}static get properties(){return{behavior:{type:String,attr:"behavior",reflectToAttr:!0,mutable:!0},blur:{state:!0},ease:{state:!0},element:{elementRef:!0},for:{type:String,attr:"for",reflectToAttr:!0,mutable:!0},open:{type:Boolean,attr:"open",reflectToAttr:!0,mutable:!0},parent:{state:!0}}}static get listeners(){return[{name:"document:contentChange",method:"handleActive"}]}static get style(){return".sc-stellar-content-h, .sc-stellar-content-h   *.sc-stellar-content, .sc-stellar-content-h   .sc-stellar-content:after, .sc-stellar-content-h   .sc-stellar-content:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-content-h{display:none;-webkit-animation-name:fadeInUp;animation-name:fadeInUp;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-duration:.35s;animation-duration:.35s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0);opacity:0}[open].sc-stellar-content-h{display:block;opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}\@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}"}}export{r as StellarContent};