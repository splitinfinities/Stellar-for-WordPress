const t=window.StellarCore.h;class e{async steps(){return this.stepsList&&0!==this.stepsList.length||(this.stepsList=Array.from(this.element.querySelectorAll("stellar-step"))),this.stepsList}async contents(){return this.contentsList=Array.from(document.querySelectorAll(`stellar-content[for='${this.name}']`)),this.contentsList}async componentWillLoad(){const t=await this.steps(),e=t.length;t.forEach((t,s)=>{t.order=s+1,t.tabCount=e})}render(){return t("div",{class:"step-list",role:"tablist"},t("slot",null))}static get is(){return"stellar-steps"}static get properties(){return{contents:{method:!0},contentsList:{state:!0},element:{elementRef:!0},name:{type:String,attr:"name",reflectToAttr:!0,mutable:!0},steps:{method:!0},stepsList:{state:!0}}}static get style(){return"stellar-steps{display:block;width:100%;height:4rem}stellar-steps .step-list{position:relative;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}stellar-steps .indicator{background:red}"}}export{e as StellarSteps};