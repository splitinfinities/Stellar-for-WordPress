import{r as t,h as i}from"./p-ea8e8140.js";const e=class{constructor(i){t(this,i),this.history=[],this.count=50}async addHistory(t){let i=[t,...this.history];this.history=i.length>this.count?i.slice(1,this.count):i}render(){return i("div",null,this.history.map(t=>i("div",null,i("p",null,t))))}static get style(){return"web-audio-debugger{display:block;position:fixed;top:0;right:0;width:160px;height:300px;overflow:auto;text-align:right;padding:1rem;border:2px solid black}web-audio-debugger p{font-size:12px;margin:0 0 1em 0}"}};export{e as W};