import{r as t,h as s}from"./p-378b4685.js";import"./p-20de5b5b.js";import{T as e}from"./p-7fa898d8.js";const l=class{constructor(s){t(this,s)}async componentWillLoad(){const t=this.match.params.name;this.data=await this.loader.getAllForTag(t)}async componentDidUpdate(){const t=this.match.params.name;this.data=await this.loader.getAllForTag(t)}renderUsage(){return s("div",null,s("stellar-tabs",{name:"stellar-code-examples"},this.data.documentation&&this.data.documentation.usage&&Object.keys(this.data.documentation.usage).map((t,e)=>s("stellar-tab",{name:`#${this.data.tag}-${t}`,open:0===e},t)),s("stellar-tab",null)),this.data.documentation&&this.data.documentation.usage&&Object.keys(this.data.documentation.usage).map((t,e)=>s("stellar-content",{for:"stellar-code-examples",id:`${this.data.tag}-${t}`,open:0===e},s("stellar-code",{codeString:this.data.documentation.usage[t],preview:!0}))))}render(){if(this.match&&this.match.params.name&&this.data)return s("div",null,s("stellar-docs-header",null),s("stellar-layout",{size:"large",type:"sidebar",align:"top"},s("aside",null,s("stellar-docs-navigation",null)),s("main",{class:"min-vh-100"},s("stellar-markdown",{codeString:this.data.documentation&&this.data.documentation.readme||"Readme to come..."}),s("stellar-tabs",{name:"stellar-docs",block:!0},s("stellar-tab",{name:"design"},"Design"),s("stellar-tab",{name:"code",open:!0},"Code"),s("stellar-tab",{name:"details"},"Details")),s("stellar-content",{for:"stellar-docs",id:"details"},s("stellar-layout",{size:"flush"},s("stellar-markdown",{src:`/components/${this.data.tag}/readme.md`}))),s("stellar-content",{for:"stellar-docs",id:"design"},s("stellar-layout",{size:"flush"},s("h1",null,"Design"))),s("stellar-content",{for:"stellar-docs",id:"code",open:!0},s("stellar-layout",{size:"flush",align:"top"},s("article",null,this.renderUsage())),s("stellar-layout",{size:"flush",align:"top"},s("aside",null,s("stellar-card",{padding:"none"},s("div",null,s("p",{class:"fw6 fs7 pa3 tc"},"Bundles"),s("hr",{class:"mv0"}),s("stellar-accordion",{tight:!0},s("stellar-item",{slot:"label"},"Uses ",this.data.stats&&this.data.stats.dependencies&&this.data.stats.dependencies.length||"0"),this.data.stats&&this.data.stats.dependencies&&this.data.stats.dependencies.map(t=>s("stellar-item",{type:"a",href:`/component/${t}`,route:!0},t))),s("stellar-accordion",{tight:!0},s("stellar-item",{slot:"label"},"Used by ",this.data.stats&&this.data.stats.dependencyOf&&this.data.stats.dependencyOf.length||"0"),this.data.stats&&this.data.stats.dependencyOf&&this.data.stats.dependencyOf.map(t=>s("stellar-item",{type:"a",href:`/component/${t}`,route:!0},t)))))))))))}};e.injectProps(l,["loader","ready"]);export{l as stellar_docs_component};