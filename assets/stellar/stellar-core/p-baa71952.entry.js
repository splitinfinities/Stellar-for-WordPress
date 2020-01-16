import{r as t,h as e,g as a}from"./p-fd27e385.js";import"./p-20de5b5b.js";import{T as o}from"./p-cd443245.js";const r=class{constructor(e){t(this,e),this.content="Loading...",this.name="Loading...",this.dark=!1,this.empty=!1}componentWillLoad(){this.empty=0===this.element.querySelectorAll("stellar-comment").length}componentDidLoad(){this.element.querySelector("stellar-avatar")&&(this.element.querySelector("stellar-avatar").tabIndex=-1,this.name=this.element.querySelector("stellar-avatar").name),this.element.querySelector('[slot="content"]')&&(this.content=this.element.querySelector('[slot="content"]').textContent.trim())}render(){return e("div",{class:`comment ${this.empty?"empty":""}`,"aria-label":`Comment by ${this.name}: ${this.content}`,tabindex:0},e("div",{class:"content"},e("slot",{name:"avatar"}),e("slot",{name:"content"})),e("div",{class:"thread","aria-label":`In reply to  ${this.name} saying ${this.content}`},e("slot",null)))}get element(){return a(this)}static get style(){return':host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block}:host stellar-avatar{margin-right:1rem;float:left}:host .comment>.content{position:relative;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:1rem;background:white;border:1px solid var(--gray2)}:host .comment>.thread{margin:0 0 0 3rem;position:relative}:host .comment ::slotted([slot="avatar"]){margin-right:1rem}:host .comment>.thread::after{content:"";width:0.4rem;height:calc(100% - .5rem);position:absolute;left:-1.25rem;top:-1.5rem;z-index:0;background:var(--theme-complement4);background:linear-gradient(135deg, var(--theme-complement4) 0%, var(--theme-base4) calc(100% - 2rem), var(--theme-base4) 100%)}:host .comment>.thread::before{content:"";width:20rem;height:.4rem;position:absolute;left:-1.25rem;bottom:2rem;z-index:0;background:var(--theme-base4)}:host .comment.empty>.content{margin:0}:host .comment.empty>.thread{display:none !important}:host ::slotted(stellar-comment){margin-top:1rem}:host([dark]) .comment>.content{background:var(--gray9);border:1px solid var(--gray8)}:host([dark]) .comment>.thread::after{background:var(--theme-complement9);background:linear-gradient(135deg, var(--theme-complement9) 0%, var(--theme-base9) calc(100% - 2rem), var(--theme-base9) 100%)}:host([dark]) .comment>.thread::before{background:var(--theme-base9)}'}};o.injectProps(r,["dark"]);export{r as stellar_comment};