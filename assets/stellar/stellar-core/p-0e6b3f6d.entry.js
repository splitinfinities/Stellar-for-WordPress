import{r as t,h as e,H as s,g as r}from"./p-378b4685.js";const a=class{constructor(e){t(this,e),this.pager=!1,this.padding="1rem",this.active=[],this.first=!0,this.last=!1}componentWillLoad(){this.slides=this.el.querySelectorAll("stellar-slide"),this.slides.forEach((t,e)=>{t.setAttribute("tabIndex","0"),t.slideId=e})}scrollToSlide(t){t.scrollIntoView({behavior:"smooth",block:"nearest"})}next(){const t=Array.from(this.el.shadowRoot.querySelectorAll(".pager > button.visible"));t[t.length-1].nextSibling.click()}previous(){Array.from(this.el.shadowRoot.querySelectorAll(".pager > button.visible"))[0].previousSibling.click()}handleSwitched(t){this.pager&&(this.active=t.detail.visible?[...this.active,t.detail.slideId]:this.active.filter(e=>e!==t.detail.slideId)),t.detail.visible&&(this.first=0===t.detail.slideId,this.last=t.detail.slideId===this.slides.length-1)}render(){return e(s,{tabIndex:0,style:{"--padding":this.padding}},e("button",{class:`nav prev ${this.first?"hide":""}`,onClick:this.previous.bind(this)},e("stellar-asset",{name:"arrow-round-back"})),e("button",{class:`nav next ${this.last?"hide":""}`,onClick:this.next.bind(this)},e("stellar-asset",{name:"arrow-round-forward"})),this.pager&&this.slides&&e("div",{class:"pager"},Array.from(this.slides).map((t,s)=>e("button",{onClick:()=>this.scrollToSlide(t),class:this.active.includes(s)?"visible":""},"Slide ",s))),e("div",{class:"wrapper"},e("slot",null)))}get el(){return r(this)}static get style(){return":host{display:grid;grid-gap:1rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;contain:content;position:relative}:host .wrapper{-ms-flex-order:1;order:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;display:grid;grid-gap:var(--grid-gap, 2rem);grid-template-rows:1fr;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none;grid-auto-flow:column}:host ::slotted(stellar-slide){scroll-snap-align:center;display:block;-webkit-transition:all 200ms ease 0s;transition:all 200ms ease 0s;--object-fit:cover;height:100%}:host button.nav{grid-column:1;position:absolute;z-index:999;top:50%;height:4rem;width:4rem;cursor:pointer;border:0;left:1rem;background:var(--white);opacity:1;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);-webkit-transition:all 200ms ease 0s;transition:all 200ms ease 0s;-webkit-clip-path:circle();clip-path:circle();-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host button.nav:hover,:host button.nav:focus{left:0.5rem}:host button.nav.hide{-webkit-transform:translateX(200%) translateY(-50%);transform:translateX(200%) translateY(-50%)}:host button.nav.next{right:1rem;left:auto}:host button.nav.next:hover,:host button.nav.next:focus{right:0.5rem}:host button.nav.prev.hide{-webkit-transform:translateX(-200%) translateY(-50%);transform:translateX(-200%) translateY(-50%)}:host button.nav stellar-asset{font-size:3rem;color:var(--black)}:host .pager{-ms-flex-order:2;order:2;display:grid;grid-auto-flow:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;grid-gap:1rem;width:auto}:host .pager button{width:1rem;height:1rem;border-radius:100%;border:none;background:var(--theme-base5);font-size:0;text-indent:-10000px;cursor:pointer;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-transform:scale(0.4);transform:scale(0.4);-webkit-transition:all 75ms ease-in-out 0s;transition:all 75ms ease-in-out 0s}:host .pager button.visible{-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-filter:grayscale(0%);filter:grayscale(0%)}:host .pager button:hover,:host .pager button:focus{-webkit-transform:scale(1.2);transform:scale(1.2)}"}};export{a as stellar_simple_slides};