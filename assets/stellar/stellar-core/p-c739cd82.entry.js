import{r as t,h as a,g as i}from"./p-378b4685.js";const e=class{constructor(a){t(this,a),this.direction="up",this.delay=0,this.duration=500,this.animationDistance="30%",this.triggerDistance="33%"}componentDidLoad(){const t="right"===this.direction||"down"===this.direction?"-"+this.animationDistance:this.animationDistance;this.element.querySelector(".reveal").style.setProperty("--distance",t)}in(){this.element.querySelector(".reveal").classList.add(`slide-${this.direction}`)}render(){return a("div",{class:"reveal",style:{animationDuration:`${this.duration}ms`,animationDelay:`${this.delay}ms`}},a("slot",null),a("stellar-intersection",{element:this.element,multiple:!0,in:this.in.bind(this),margin:this.triggerDistance}))}get element(){return i(this)}static get style(){return"stellar-reveal{contain:content}@-webkit-keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}100%{opacity:1}}@keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}100%{opacity:1}}@-webkit-keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}100%{opacity:1}}@keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}100%{opacity:1}}@-webkit-keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}100%{opacity:1}}@keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}100%{opacity:1}}@-webkit-keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}100%{opacity:1}}@keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}100%{opacity:1}}.reveal{opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-duration:500ms;animation-duration:500ms}.slide-up{-webkit-animation-name:slide-up;animation-name:slide-up}.slide-down{-webkit-animation-name:slide-down;animation-name:slide-down}.slide-right{-webkit-animation-name:slide-right;animation-name:slide-right}.slide-left{-webkit-animation-name:slide-right;animation-name:slide-right}"}};export{e as stellar_reveal};