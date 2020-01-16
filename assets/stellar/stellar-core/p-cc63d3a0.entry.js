import{r as t,h as e,g as s,H as a}from"./p-fd27e385.js";import"./p-dd50d686.js";import"./p-20de5b5b.js";import{T as i}from"./p-cd443245.js";import{b as r}from"./p-5c97c18e.js";import"./p-c428ff15.js";import{p as o}from"./p-c93f133f.js";import"./p-22e0cac7.js";import"./p-3a3a4911.js";const n=class{constructor(e){t(this,e),this.open=!1,this.tight=!1,this.name="accordion",this.label="More Details",this.dark=!1,this.blur=0,this.ease=r({end:10,start:-1,duration:250,tick:t=>{this.blur=t.value},complete:()=>{this.blur=0,this.ease.stop()}}),this.els=[]}componentWillLoad(){window.MutationObserver&&(this.observer=new MutationObserver(t=>{for(var e of t)"childList"==e.type&&this.refresh()}))}componentDidLoad(){this.expander=this.element.shadowRoot.querySelector(".expander"),this.refresh(),this.attachObserver(),this.els=Array.from(this.element.querySelectorAll("*:not([slot='label'])")),this.updateTabIndex()}async refresh(){o.set({"--accordion-height":`${this.expander.scrollHeight}px`},this.element)}attachObserver(){this.observer&&this.observer.observe(this.element,{childList:!0,subtree:!0})}componentWillUnload(){this.observer&&this.observer.disconnect()}currentClasses(){return`expander ${this.openClass()}`}openClass(){return this.open?"open":""}updateTabIndex(){this.els.forEach(t=>{t.tabIndex=this.open?0:-1})}handleClick(){this.open=!this.open,this.ease.start(),this.updateTabIndex()}render(){return e("div",{class:"wrap"},e("div",{class:"button-wrap",title:"Selecting this opens the content of this accordion",onClick:()=>this.handleClick()},e("slot",{name:"label"},e("stellar-button",{id:"button",tag:"button",ghost:!0,label:this.label},this.label)),e("ion-icon",{class:"chevron",name:"arrow-down"})),e("stellar-blur",{vertical:this.blur},e("div",{class:this.currentClasses(),tabIndex:this.open?0:-1},e("slot",null))))}get element(){return s(this)}static get style(){return':host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block;position:relative;width:100%;overflow:hidden;--accordion-height:200vh;--padding-underneath:6rem}:host .expander{-webkit-transition:all 0.35s ease-out 0.1s, opacity 0.25s ease-out 0s;transition:all 0.35s ease-out 0.1s, opacity 0.25s ease-out 0s;opacity:0;padding:0;width:100%;max-height:50vh;height:0;overflow:hidden;-webkit-transform:translateY(-60px);transform:translateY(-60px)}:host .expander.open{-webkit-transition:all 0.35s ease-in-out 0s, opacity 0.175s ease-in-out 0.175s, overflow 0s ease-in-out 0.2s;transition:all 0.35s ease-in-out 0s, opacity 0.175s ease-in-out 0.175s, overflow 0s ease-in-out 0.2s;opacity:1;height:calc(var(--accordion-height) + var(--padding-underneath));overflow:auto;-webkit-transform:translateY(0px);transform:translateY(0px)}:host .expander stellar-item{padding-left:1rem}:host .expander stellar-item:last-of-type{margin-bottom:.5rem}:host([tight]){--padding-underneath:1rem}:host([tight]) .expander ::slotted(stellar-item){padding:0 1.5rem}:host([tight]) .expander ::slotted(stellar-item){padding:0 0.75rem}:host .wrap{-webkit-transform:translateZ(0);transform:translateZ(0)}:host .wrap .button-wrap{position:relative;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;z-index:9;min-height:3rem;padding:1rem 0;color:var(--theme-base9)}:host .wrap .button-wrap stellar-item button.button{padding:0}:host .chevron{position:absolute;right:1rem;color:var(--gray4);margin-left:auto;-webkit-transition:all 350ms ease-in-out 0s;transition:all 350ms ease-in-out 0s}:host([open]) .chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .wrap .button-wrap stellar-button{--color:var(--gray9)}:host ::slotted(stellar-item[slot="label"]){padding-right:2rem}:host([dark]) ::slotted(stellar-item),:host([dark]) ::slotted(stellar-item[slot="label"]){color:var(--theme-base5)}'}};i.injectProps(n,["dark"]);const l=class{constructor(e){t(this,e),this.closable=!0,this.remember=!0,this.name="stellar",this.shown=!0,this.striped=!1,this.dark=!1,this.theme="gray"}componentWillLoad(){if(this.remember){const t=this.element.innerHTML;window&&window.btoa&&(this.name=this.name+"_"+btoa(unescape(encodeURIComponent(t)))),localStorage.getItem(this.name)&&(this.shown=!("hidden"===localStorage.getItem(this.name)))}switch(this.type){case"alert":this.theme="yellow";break;case"error":this.theme="red";break;case"info":this.theme="cyan";break;case"success":this.theme="green"}}handleClose(){this.shown=!1,this.remember&&localStorage.setItem(this.name,"hidden")}render(){return e(a,{class:`theme-${this.theme} ${this.shown?"db":"dn"}`},e("div",{class:"wrap"},e("slot",null),this.closable&&e("button",{"aria-label":"Close",onClick:()=>{this.handleClose()}},e("ion-icon",{name:"close"}))))}get element(){return s(this)}static get style(){return':host{display:block;position:relative;padding:0 20px;-webkit-transition:all 350ms var(--ease) 0s;transition:all 350ms var(--ease) 0s;width:100%;height:60px;overflow:hidden;contain:content;background-color:var(--theme-base4, var(--gray5))}:host([striped])::after{content:"";position:absolute;width:120%;top:0;left:-10%;right:0;bottom:0;z-index:0;background:repeating-linear-gradient(45deg, var(--theme-base0), var(--theme-base0) 2rem, var(--theme-base1) 0, var(--theme-base1) 4rem);mix-blend-mode:multiply;-webkit-animation:moveStripes 10s linear both infinite;animation:moveStripes 10s linear both infinite}:host([visible="false"]){height:0;overflow:hidden}:host([visible="false"]) *{opacity:0}:host .wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;position:relative;width:100%;max-width:1200px;height:100%;z-index:1;overflow:auto}:host([size="full"]) .wrap{min-width:30rem;max-width:100%}:host a{color:white}:host a:hover,:host a:active{color:var(--theme-base1)}:host p{color:var(--theme-base9)}:host .wrap ion-icon{font-size:2rem;color:var(--theme-base9)}:host button{margin-right:0;margin-left:auto;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:white;background:transparent;border:none;cursor:pointer;width:3rem;height:3rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;outline:0}:host button[icon] ion-icon{margin-right:0;margin-left:1rem;color:black;background:transparent;border:none}:host([dark]){background-color:var(--theme-base7, var(--gray7))}:host([dark][striped])::after{background:repeating-linear-gradient(45deg, var(--theme-base7), var(--theme-base7) 2rem, var(--theme-base8) 0, var(--theme-base8) 4rem)}:host([dark]) .wrap ion-icon{color:var(--theme-base1)}'}};i.injectProps(l,["dark"]);const h=class{constructor(e){t(this,e)}render(){return e("stellar-parallax",{horizontal:!0},e("stellar-parallax-section",{speed:5},e("div",{class:"stars"})),e("stellar-parallax-section",{speed:-10},e("div",{class:"stars"})),e("stellar-parallax-section",{speed:-4},e("div",{class:"stars"})))}get element(){return s(this)}static get style(){return"stellar-starscape{contain:content;background:linear-gradient(50deg, var(--theme-base7), var(--theme-complement7), var(--theme-base7), var(--theme-complement7));background-size:400% 400%;position:absolute;top:0;left:0;bottom:0;right:0;z-index:-1;overflow:hidden}stellar-starscape .stars{position:absolute;height:200vh;width:200vw;top:-10vh;left:0;bottom:0;right:0;z-index:1;opacity:0.75;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAgMAAADQNkYNAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMACzOmUnwDAAABMklEQVR4Ae1ZB05FMQyrLIUNvZpZ97/COwLaCBN2Kur+Wqt7OqNNO5oiNC9laPU4KrtMgKjvsjD4bvvY17EqpaXwSOoxu0jyNxwXFPUOlZdKdJ1lRtTfzATgT9iLZgw3y9u/PwLKthMDb5+aT5UzLIQ2kgtioxwiSheaV4eNVDLhmxQN30uEpx7rFV02DMAf+WTYxtJ8N/sJyUJXIkcf5F08fyGV27Vllkoaw13V1E8bkuVbnsNSzzGVWEzp6RcchDmprRCf7xpDzp3CHZyY4V3fF6cwIaRIOOZt0+OV0CgjVh/2p8RvBu+wZNhwIzIuhLIOBq4RQ3mTUxzzuv//6KPEJ+oAzlaU4l0Y7OS7N4MJV18/lL9Xv39hKccetI2KqqbWKnr+Kri+Z66+vVvMqvRfAGkGHx/jJEqXAAAAAElFTkSuQmCC') 50% 50% / 100px 100px}stellar-starscape stellar-parallax-section:nth-of-type(1) .stars{opacity:0.25;left:17px}stellar-starscape stellar-parallax-section:nth-of-type(2) .stars{opacity:0.45;left:24px}"}};export{n as stellar_accordion,l as stellar_message,h as stellar_starscape};