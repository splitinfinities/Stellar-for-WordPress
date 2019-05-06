const t=window.StellarCore.h;import"./chunk-7646164d.js";import"./chunk-340b8099.js";import{h as e,i as a}from"./chunk-43ad3764.js";import"./chunk-5ce278cb.js";class r{constructor(){this.ajax=!1,this.method="get",this.autocomplete="on",this.enctype="multipart/form-data",this.novalidate=!1,this.selectors=["stellar-input","stellar-toggle","stellar-range","stellar-switch","stellar-select"]}handleEnter(t){"enter"===t.key&&this.submit_form()}async register(t){this.selectors=[...this.selectors,...t]}async refresh(){var t=window.document.createEvent("UIEvents");t.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(t)}async state(){var t=new FormData,r=[],s=!0;const n=Array.from(this.element.querySelectorAll(this.selectors.join(",")));return await e(n,async t=>{try{let e=await t.validate();r.push(e)}catch(e){r.push({name:`${t.name}`,value:void 0,valid:!1,errors:[e.message]})}}),r.forEach(e=>{e&&(e.name&&t.append(e.name.toString(),e.value),e.valid||(s=!1))}),{els:n,json:a(r.filter(t=>t&&t.name)),results:r,formData:t,valid:s}}async submit_form(){const t=await this.state();t.valid&&(this.ajax?this.submit.emit(t):this.element.querySelector("form").submit())}render(){return t("form",{action:this.action,method:this.method,"accept-charset":this.acceptCharset,autocomplete:this.autocomplete,enctype:this.enctype,name:this.name,novalidate:this.novalidate,target:this.target,onSubmit:t=>{t.preventDefault(),this.submit_form()}},t("slot",null))}static get is(){return"stellar-form"}static get properties(){return{acceptCharset:{type:String,attr:"accept-charset"},action:{type:String,attr:"action"},ajax:{type:Boolean,attr:"ajax"},autocomplete:{type:String,attr:"autocomplete"},element:{elementRef:!0},enctype:{type:String,attr:"enctype"},method:{type:String,attr:"method"},name:{type:String,attr:"name"},novalidate:{type:Boolean,attr:"novalidate"},refresh:{method:!0},register:{method:!0},selectors:{state:!0},state:{method:!0},submit_form:{method:!0},target:{type:String,attr:"target"}}}static get events(){return[{name:"submit",method:"submit",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"keydown",method:"handleEnter"}]}static get style(){return"stellar-form{display:block}"}}export{r as StellarForm};