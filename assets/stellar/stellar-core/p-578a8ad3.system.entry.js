var __awaiter=this&&this.__awaiter||function(t,e,a,n){function s(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,r){function l(t){try{o(n.next(t))}catch(e){r(e)}}function i(t){try{o(n["throw"](t))}catch(e){r(e)}}function o(t){t.done?a(t.value):s(t.value).then(l,i)}o((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var a={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,s,r,l;return l={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function i(t){return function(e){return o([t,e])}}function o(l){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,s&&(r=l[0]&2?s["return"]:l[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,l[1])).done)return r;if(s=0,r)l=[l[0]&2,r.value];switch(l[0]){case 0:case 1:r=l;break;case 4:a.label++;return{value:l[1],done:false};case 5:a.label++;s=l[1];l=[0];continue;case 7:l=a.ops.pop();a.trys.pop();continue;default:if(!(r=a.trys,r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){a=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){a.label=l[1];break}if(l[0]===6&&a.label<r[1]){a.label=r[1];r=l;break}if(r&&a.label<r[2]){a.label=r[2];a.ops.push(l);break}if(r[2])a.ops.pop();a.trys.pop();continue}l=e.call(t,a)}catch(i){l=[6,i];s=0}finally{n=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register(["./p-de1c7c63.system.js","./p-c4dffc26.system.js","./p-9bdb6980.system.js"],(function(t){"use strict";var e,a,n;return{setters:[function(t){e=t.r;a=t.h},function(){},function(t){n=t.T}],execute:function(){var s=t("stellar_docs_component",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(a){switch(a.label){case 0:t=this.match.params.name;e=this;return[4,this.loader.getAllForTag(t)];case 1:e.data=a.sent();return[2]}}))}))};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(a){switch(a.label){case 0:t=this.match.params.name;e=this;return[4,this.loader.getAllForTag(t)];case 1:e.data=a.sent();return[2]}}))}))};t.prototype.renderUsage=function(){var t=this;return a("div",null,a("stellar-tabs",{name:"stellar-code-examples"},this.data.documentation&&this.data.documentation.usage&&Object.keys(this.data.documentation.usage).map((function(e,n){return a("stellar-tab",{name:"#"+t.data.tag+"-"+e,open:n===0},e)})),a("stellar-tab",null)),this.data.documentation&&this.data.documentation.usage&&Object.keys(this.data.documentation.usage).map((function(e,n){return a("stellar-content",{for:"stellar-code-examples",id:t.data.tag+"-"+e,open:n===0},a("stellar-code",{codeString:t.data.documentation.usage[e],preview:true}))})))};t.prototype.render=function(){if(this.match&&this.match.params.name&&this.data){return a("div",null,a("stellar-docs-header",null),a("stellar-layout",{size:"large",type:"sidebar",align:"top"},a("aside",null,a("stellar-docs-navigation",null)),a("main",{class:"min-vh-100"},a("stellar-markdown",{codeString:this.data.documentation&&this.data.documentation.readme||"Readme to come..."}),a("stellar-tabs",{name:"stellar-docs",block:true},a("stellar-tab",{name:"design"},"Design"),a("stellar-tab",{name:"code",open:true},"Code"),a("stellar-tab",{name:"details"},"Details")),a("stellar-content",{for:"stellar-docs",id:"details"},a("stellar-layout",{size:"flush"},a("stellar-markdown",{src:"/components/"+this.data.tag+"/readme.md"}))),a("stellar-content",{for:"stellar-docs",id:"design"},a("stellar-layout",{size:"flush"},a("h1",null,"Design"))),a("stellar-content",{for:"stellar-docs",id:"code",open:true},a("stellar-layout",{size:"flush",align:"top"},a("article",null,this.renderUsage())),a("stellar-layout",{size:"flush",align:"top"},a("aside",null,a("stellar-card",{padding:"none"},a("div",null,a("p",{class:"fw6 fs7 pa3 tc"},"Bundles"),a("hr",{class:"mv0"}),a("stellar-accordion",{tight:true},a("stellar-item",{slot:"label"},"Uses ",this.data.stats&&this.data.stats.dependencies&&this.data.stats.dependencies.length||"0"),this.data.stats&&this.data.stats.dependencies&&this.data.stats.dependencies.map((function(t){return a("stellar-item",{type:"a",href:"/component/"+t,route:true},t)}))),a("stellar-accordion",{tight:true},a("stellar-item",{slot:"label"},"Used by ",this.data.stats&&this.data.stats.dependencyOf&&this.data.stats.dependencyOf.length||"0"),this.data.stats&&this.data.stats.dependencyOf&&this.data.stats.dependencyOf.map((function(t){return a("stellar-item",{type:"a",href:"/component/"+t,route:true},t)})))))))))))}};return t}());n.injectProps(s,["loader","ready"])}}}));