import{d as s,g as e}from"./p-1da3eb99.js";import{a as t}from"./p-fffe1be5.js";class i{constructor(e){s(this,e),this.when=!0,this.message=""}enable(s){this.unblock&&this.unblock(),this.history&&(this.unblock=this.history.block(s))}disable(){this.unblock&&(this.unblock(),this.unblock=void 0)}componentWillLoad(){this.when&&this.enable(this.message)}updateMessage(s,e){this.when?this.when&&e===s||this.enable(this.message):this.disable()}componentDidUnload(){this.disable()}render(){return null}get el(){return e(this)}static get watchers(){return{message:["updateMessage"],when:["updateMessage"]}}}t.injectProps(i,["history"]);export{i as stencil_router_prompt};