import{r as s,d as t}from"./p-ea8e8140.js";import"./p-20de5b5b.js";import{A as e}from"./p-d881d5cf.js";const i=class{constructor(t){s(this,t),this.when=!0,this.message=""}enable(s){this.unblock&&this.unblock(),this.history&&(this.unblock=this.history.block(s))}disable(){this.unblock&&(this.unblock(),this.unblock=void 0)}componentWillLoad(){this.when&&this.enable(this.message)}updateMessage(s,t){this.when?this.when&&t===s||this.enable(this.message):this.disable()}componentDidUnload(){this.disable()}render(){return null}get el(){return t(this)}static get watchers(){return{message:["updateMessage"],when:["updateMessage"]}}};e.injectProps(i,["history"]);export{i as stencil_router_prompt};