import{d as t,f as s}from"./p-1da3eb99.js";class i{constructor(s){t(this,s),this.history=[],this.count=50}async addHistory(t){let s=[t,...this.history];this.history=s.length>this.count?s.slice(1,this.count):s}render(){return s("div",null,this.history.map(t=>s("div",null,s("p",null,t))))}static get style(){return"web-audio-debugger{display:block;position:fixed;top:0;right:0;width:160px;height:300px;overflow:auto;text-align:right;padding:1rem;border:2px solid #000}web-audio-debugger p{font-size:12px;margin:0 0 1em 0}"}}export{i as web_audio_debugger};