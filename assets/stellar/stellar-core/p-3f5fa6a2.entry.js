import{r as t,g as e,h as s,H as i,c as r}from"./p-378b4685.js";const o=class{constructor(e){t(this,e),this.in=()=>{},this.out=()=>{},this.margin="0%"}componentWillLoad(){this.element||(this.element=this.el),this.addIntersectionObserver()}componentDidUnload(){this.removeIntersectionObserver()}addIntersectionObserver(){try{"IntersectionObserver"in window&&(this.io=new IntersectionObserver(t=>{this.multiple?t[0].isIntersecting?this.in():this.out():t[0].isIntersecting&&(this.in(),this.removeIntersectionObserver())},{rootMargin:this.margin,threshold:[0]}),this.io.observe("string"==typeof this.element&&"String"===this.element.constructor.name?document.querySelector(this.element):this.element))}catch(t){}}removeIntersectionObserver(){this.io&&(this.io.disconnect(),this.io=null)}get el(){return e(this)}},l=class{constructor(e){t(this,e),this.pager=!1,this.padding="1rem",this.active=[],this.first=!0,this.last=!1}componentWillLoad(){this.slides=this.el.querySelectorAll("stellar-slide"),this.slides.forEach((t,e)=>{t.setAttribute("tabIndex","0"),t.slideId=e})}scrollToSlide(t){t.scrollIntoView({behavior:"smooth",block:"nearest"})}next(){const t=Array.from(this.el.shadowRoot.querySelectorAll(".pager > button.visible"));t[t.length-1].nextSibling.click()}previous(){Array.from(this.el.shadowRoot.querySelectorAll(".pager > button.visible"))[0].previousSibling.click()}handleSwitched(t){this.pager&&(this.active=t.detail.visible?[...this.active,t.detail.slideId]:this.active.filter(e=>e!==t.detail.slideId)),t.detail.visible&&(this.first=0===t.detail.slideId,this.last=t.detail.slideId===this.slides.length-1)}render(){return s(i,{tabIndex:0,style:{"--padding":this.padding}},s("button",{class:`nav prev ${this.first?"hide":""}`,onClick:this.previous.bind(this)},s("ion-icon",{name:"arrow-round-back"})),s("button",{class:`nav next ${this.last?"hide":""}`,onClick:this.next.bind(this)},s("ion-icon",{name:"arrow-round-forward"})),this.pager&&this.slides&&s("div",{class:"pager"},Array.from(this.slides).map((t,e)=>s("button",{onClick:()=>this.scrollToSlide(t),class:this.active.includes(e)?"visible":""},"Slide ",e))),s("div",{class:"wrapper"},s("slot",null)))}get el(){return e(this)}static get style(){return":host{display:grid;grid-gap:1rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;contain:content;position:relative}:host .wrapper{-ms-flex-order:1;order:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;display:grid;grid-gap:var(--grid-gap, 2rem);grid-template-rows:1fr;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none;grid-auto-flow:column}:host ::slotted(stellar-slide){scroll-snap-align:center;display:block;-webkit-transition:all 200ms ease 0s;transition:all 200ms ease 0s;--object-fit:cover;height:100%}:host button.nav{grid-column:1;position:absolute;z-index:999;top:50%;height:4rem;width:4rem;cursor:pointer;border:0;left:1rem;background:var(--white);opacity:1;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);-webkit-transition:all 200ms ease 0s;transition:all 200ms ease 0s;-webkit-clip-path:circle();clip-path:circle();-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host button.nav:hover,:host button.nav:focus{left:0.5rem}:host button.nav.hide{-webkit-transform:translateX(200%) translateY(-50%);transform:translateX(200%) translateY(-50%)}:host button.nav.next{right:1rem;left:auto}:host button.nav.next:hover,:host button.nav.next:focus{right:0.5rem}:host button.nav.prev.hide{-webkit-transform:translateX(-200%) translateY(-50%);transform:translateX(-200%) translateY(-50%)}:host button.nav ion-icon{font-size:3rem;color:var(--black)}:host .pager{-ms-flex-order:2;order:2;display:grid;grid-auto-flow:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;grid-gap:1rem;width:auto}:host .pager button{width:1rem;height:1rem;border-radius:100%;border:none;background:var(--theme-base5);font-size:0;text-indent:-10000px;cursor:pointer;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-transform:scale(0.4);transform:scale(0.4);-webkit-transition:all 75ms ease-in-out 0s;transition:all 75ms ease-in-out 0s}:host .pager button.visible{-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-filter:grayscale(0%);filter:grayscale(0%)}:host .pager button:hover,:host .pager button:focus{-webkit-transform:scale(1.2);transform:scale(1.2)}"}},n=class{constructor(e){t(this,e),this.width="auto",this.swiper=!1,this.visible=!1,this.switched=r(this,"switched",7)}componentWillLoad(){this.el.closest("stellar-slides, stellar-simple-slides")&&(this.swiper="STELLAR-SLIDES"===this.el.closest("stellar-slides, stellar-simple-slides").nodeName)}onVisible(){this.switched.emit({slideId:this.slideId,visible:this.visible})}in(){this.visible=!0}out(){this.visible=!1}render(){return s(i,{style:{"--width":this.width},class:{"slide-zoom":this.swiper,"swiper-slide":this.swiper}},s("slot",null),s("stellar-intersection",{element:this.el,multiple:!0,in:this.in.bind(this),out:this.out.bind(this)}))}get el(){return e(this)}static get watchers(){return{visible:["onVisible"]}}static get style(){return"stellar-slide{display:block;width:var(--width, 100%);height:100%;contain:content}stellar-slide stellar-image,stellar-slide stellar-video{height:100%;--object-fit:cover;--figure-height:100%}.slide-zoom{text-align:center;display:block;width:100%}.swiper-slide{text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}"}};export{o as stellar_intersection,l as stellar_simple_slides,n as stellar_slide};