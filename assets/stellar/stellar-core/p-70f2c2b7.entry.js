import{r as t,h as i,d as s}from"./p-ea8e8140.js";import{I as h}from"./p-1f91b58b.js";const e=class{constructor(i){t(this,i),this.nolazyload=!1,this.width=1280,this.height=720,this.ready=!1}componentDidLoad(){this.image=this.element.querySelector(".image"),this.nolazyload&&this.in()}in(){this.viewer||(this.viewer=new h({source:this.src,container:this.image,width:this.width,height:this.height})),this.viewer.render(),this.ready=!0}out(){this.viewer.destroy(),this.ready=!1}render(){return i("div",null,i("div",{class:"image"}),i("div",{class:"overlay"}),!this.nolazyload&&i("stellar-intersection",{element:this.element,multiple:!0,in:this.in.bind(this),out:this.out.bind(this),margin:"50%"}),!this.ready&&i("skeleton-img",{width:this.width,height:this.height}))}get element(){return s(this)}};export{e as stellar_360_image};