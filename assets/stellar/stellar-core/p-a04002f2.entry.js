import{r as t,h as e,H as s,g as i}from"./p-fd27e385.js";const o=class{constructor(e){t(this,e),this.shown=!0,this.hash=""}componentWillLoad(){this.hash=btoa(unescape(encodeURIComponent(this.el.innerText))),this.remember&&localStorage.getItem(this.hash)&&(this.shown=!("hidden"===localStorage.getItem(this.hash)))}handleClose(){this.shown=!1,this.remember&&localStorage.setItem(this.hash,"hidden")}render(){return e(s,{class:`${this.shown?"show":"hide"}`},e("slot",null))}get el(){return i(this)}static get style(){return':host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:fixed;z-index:999999;height:auto;top:0;left:0;right:0;bottom:0;background:var(--black);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);display:grid;padding:2rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;opacity:1;-webkit-transition:all 100ms ease 0s;transition:all 100ms ease 0s}:host(.hide){opacity:0}:host ::slotted(*){max-width:60rem;height:auto;width:90%;top:0;left:0;right:0;bottom:0;margin:auto}:host([fullscreen]),:host([fullscreen=""]){padding:0}:host([fullscreen]) ::slotted(*),:host([fullscreen=""]) ::slotted(*){max-width:100%;width:100%;height:100%}'}};export{o as stellar_interstitial};