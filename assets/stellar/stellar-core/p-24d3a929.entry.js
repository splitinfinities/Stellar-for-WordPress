import{r as t,e,h as i,H as s,g as l}from"./p-fd27e385.js";const r=class{constructor(i){t(this,i),this.width="auto",this.swiper=!1,this.visible=!1,this.switched=e(this,"switched",7)}componentWillLoad(){this.el.closest("stellar-slides, stellar-simple-slides")&&(this.swiper="STELLAR-SLIDES"===this.el.closest("stellar-slides, stellar-simple-slides").nodeName)}onVisible(){this.switched.emit({slideId:this.slideId,visible:this.visible})}in(){this.visible=!0}out(){this.visible=!1}render(){return i(s,{style:{"--width":this.width},class:{"slide-zoom":this.swiper,"swiper-slide":this.swiper}},i("slot",null),i("stellar-intersection",{element:this.el,multiple:!0,in:this.in.bind(this),out:this.out.bind(this)}))}get el(){return l(this)}static get watchers(){return{visible:["onVisible"]}}static get style(){return"stellar-slide{display:block;width:var(--width, 100%);height:100%;contain:content}stellar-slide stellar-image,stellar-slide stellar-video{height:100%;--object-fit:cover;--figure-height:100%}.slide-zoom{text-align:center;display:block;width:100%}.swiper-slide{text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}"}};export{r as stellar_slide};