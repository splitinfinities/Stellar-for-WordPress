import{r as o,h as r,g as t}from"./p-378b4685.js";import"./p-c428ff15.js";import{p as a}from"./p-c93f133f.js";import"./p-20de5b5b.js";import{T as s}from"./p-2fea32e1.js";const l=class{constructor(r){o(this,r),this.pill=!1,this.outline=!1,this.dark=!1,this.color="cyan5",this.textColor="white"}componentWillLoad(){a.set({"--background-color":`var(--${this.color})`,"--color":`var(--${this.textColor})`},this.element)}render(){return r("stellar-label",{class:"tag",size:this.size},r("slot",null))}get element(){return t(this)}static get style(){return':host{contain:content;display:inline-block;--color:var(--color, var(--white));--background-color:var(--background-color, var(--blue5))}:host([color*="0"]),:host([color*="1"]),:host([color*="2"]),:host([color*="3"]),:host([color*="4"]){--color:var(--black) !important}:host .tag{display:block;border:2px solid var(--background-color);background-color:var(--background-color);padding:0 var(--ms-6);text-transform:uppercase;white-space:nowrap;color:var(--color);font-weight:700;overflow:hidden;text-overflow:ellipsis;margin:0}:host([size="tiny"]) .tag{padding:0 var(--ms-8)}:host([size="small"]) .tag{padding:0 var(--ms-7)}:host([size="medium"]) .tag{padding:0 var(--ms-5)}:host([size="large"]) .tag{padding:0 var(--ms-4)}:host([pill]) .tag{border-radius:5rem}:host([dark][color*="5"]),:host([dark][color*="6"]),:host([dark][color*="7"]),:host([dark][color*="8"]),:host([dark][color*="9"]){--color:var(--black) !important}'}};s.injectProps(l,["dark"]);export{l as stellar_tag};