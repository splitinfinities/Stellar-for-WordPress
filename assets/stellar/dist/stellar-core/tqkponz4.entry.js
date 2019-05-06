const t=window.StellarCore.h;import"./chunk-7646164d.js";import{a as e}from"./chunk-340b8099.js";import{a as i}from"./chunk-e7da9887.js";class n{constructor(){this.animation="fadeInUp",this.outAnimation="fadeOut",this.delay=100,this.timing=50,this.active=!1}componentWillLoad(){this.children=Array.from(this.element.children)}componentDidLoad(){this.addIntersectionObserver()}addIntersectionObserver(){"IntersectionObserver"in window?(this.io=new IntersectionObserver(t=>{t[0].isIntersecting&&(setTimeout(()=>{this.active=!0,this.in()},350),this.removeIntersectionObserver())},{rootMargin:"50%",threshold:[0]}),this.io.observe(this.element)):setTimeout(()=>{this.in()},300)}removeIntersectionObserver(){this.io&&(this.io.disconnect(),this.io=null)}async calculateTiming(){const t=1e3+this.children.length*this.delay;await i(t)}async out(){return e.set({"--animation":this.outAnimation},this.element),this.children.forEach((t,e)=>{t.style.setProperty("animation-delay",`${this.delay*e}ms`),t.style.setProperty("animation-timing",`${this.timing}ms`)}),await this.calculateTiming()}async in(){return e.set({"--animation":this.animation},this.element),this.children.forEach((t,e)=>{t.style.setProperty("animation-delay",`${this.delay*e}ms`),t.style.setProperty("animation-timing",`${this.timing}ms`)}),await this.calculateTiming()}render(){return t("slot",null)}static get is(){return"stellar-reveal"}static get encapsulation(){return"shadow"}static get properties(){return{active:{type:Boolean,attr:"active",reflectToAttr:!0,mutable:!0},animation:{type:String,attr:"animation",reflectToAttr:!0},children:{state:!0},delay:{type:Number,attr:"delay",reflectToAttr:!0},element:{elementRef:!0},in:{method:!0},io:{state:!0},out:{method:!0},outAnimation:{type:String,attr:"out-animation",reflectToAttr:!0},timing:{type:Number,attr:"timing",reflectToAttr:!0}}}static get style(){return":host{display:block;--animation:fadeIn}:host ::slotted(*){opacity:0}:host([active]) ::slotted(*){-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-name:var(--animation);animation-name:var(--animation)}"}}export{n as StellarReveal};