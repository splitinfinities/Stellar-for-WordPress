var __awaiter=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))(function(n,o){function a(t){try{l(r.next(t))}catch(t){o(t)}}function s(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(a,s)}l((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var i,r,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{i=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};StellarCore.loadBundle("bmyle4si",["exports","./chunk-a218a313.js","./chunk-841f0e81.js","./chunk-14f6ad5f.js","./chunk-0eedf0e0.js"],function(t,e,i,r,n){var o=window.StellarCore.h,a=function(){function t(){this.shadow="medium",this.flippable=!1,this.flipped=!1,this.padding="medium",this.tag="div",this.href="#",this.name="",this.value="#",this.flip_icon="cog",this.rotationLimit=.75,this.transition=!1}return t.prototype.refresh=function(){this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.middleX=this.width/2,this.middleY=this.height/2},t.prototype.componentDidLoad=function(){var t=this;"a"===this.tag&&(setTimeout(function(){t.refresh()},10),this.element.addEventListener("mouseenter",this.addRotation.bind(this)),this.element.addEventListener("mousemove",this.animateRotation.bind(this)),this.element.addEventListener("mouseleave",this.removeRotation.bind(this))),this.updateFlippableCardHeight(),this.addResizeObserver()},t.prototype.addResizeObserver=function(){this.ro=new r.ResizeObserver(function(t){for(var e=0,r=t;e<r.length;e++){var n=r[e];i.properties.set({"--card-width":n.contentRect.width+"px"},n.target)}}),this.ro.observe(this.element)},t.prototype.updateFlippableCardHeight=function(){if(this.flippable){var t=this.element.shadowRoot.querySelector(".front");i.properties.set({"--min-height":t.offsetHeight+"px"},this.element);var e=this.element.shadowRoot.querySelector(".back");i.properties.set({"--flipped-min-height":e.scrollHeight+50+"px"},this.element)}},t.prototype.addRotation=function(){var t=this;this.refresh(),this.transition=!0,setTimeout(function(){t.transition=!1},250)},t.prototype.animateRotation=function(t){return __awaiter(this,void 0,void 0,function(){var e,r;return __generator(this,function(n){return i.properties.set({"--card-transform":"rotateX("+(r=this.rotationLimit/this.middleY*(this.middleY-t.offsetY))+"deg) rotateY("+(e=this.rotationLimit/this.middleX*(t.offsetX-this.middleX))+"deg)","--card-hover-top":r/this.rotationLimit+"rem","--card-hover-right":e/this.rotationLimit*-1+"rem"},this.element),[2]})})},t.prototype.removeRotation=function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(e){return this.refresh(),this.transition=!0,setTimeout(function(){t.transition=!1,i.properties.set({"--card-transform":"rotateX(0deg) rotateY(0deg)","--card-hover-top":"0px","--card-hover-right":"0px"},t.element)},250),[2]})})},t.prototype.click=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){return this.for&&"modal"===(t=this.for.split(":"))[0]&&document.querySelector('stellar-modal[name="'+t[1]+'"]').open(),[2,!0]})})},t.prototype.flip_card=function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return t&&(t.stopPropagation(),t.preventDefault()),this.flippable&&(this.flipped=!this.flipped,this.flip.emit()),[2]})})},t.prototype.render=function(){var t=this;return o(this.tag,Object.assign({},{href:this.href,url:this.href,name:this.name,value:this.value,type:this.type},{class:"stencil-route-link"!==this.tag?"wrap":"",anchorClass:"stencil-route-link"===this.tag?"wrap":"",onClick:function(e){t.click(e)}}),this.flippable&&[o("stellar-button",{tag:"button",ghost:!0,class:"flip-button",onClick:function(e){e.stopPropagation(),e.preventDefault(),t.flip_card(e)}},o("stellar-asset",{name:this.flipped?"close":this.flip_icon,class:"ma0"})),o("div",{class:"front"},o("slot",null)),o("div",{class:"back"},o("slot",{name:"back"}))],!this.flippable&&o("slot",null))},Object.defineProperty(t,"is",{get:function(){return"stellar-card"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{element:{elementRef:!0},flip_card:{method:!0},flip_icon:{type:String,attr:"flip_icon"},flippable:{type:Boolean,attr:"flippable",reflectToAttr:!0},flipped:{type:Boolean,attr:"flipped",reflectToAttr:!0,mutable:!0},for:{type:String,attr:"for"},height:{state:!0},href:{type:String,attr:"href"},middleX:{state:!0},middleY:{state:!0},name:{type:String,attr:"name"},padding:{type:String,attr:"padding",reflectToAttr:!0},ro:{state:!0},rotationLimit:{state:!0},shadow:{type:String,attr:"shadow"},tag:{type:String,attr:"tag"},transition:{type:Boolean,attr:"transition",reflectToAttr:!0,mutable:!0},type:{type:String,attr:"type"},value:{type:String,attr:"value"},width:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"flip",method:"flip",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-moz-appearance:none;appearance:none;-webkit-appearance:none!important;display:block;background:var(--background);border-radius:var(--border-radius);height:100%;--border:1px solid var(--gray1);--background:var(--white);--flipped-background:var(--white);--flipped-min-height:var(--flipped-min-height,20rem);--border-radius:var(--border-radius-sm);--padding:3rem;--min-height:10rem;--card-width:auto}:host([tag=a]){background:transparent}:host([padding=small]){--padding:1rem}:host([padding=medium]){--padding:2rem}:host([padding=large]){--padding:4rem}:host .wrap{-moz-appearance:none;appearance:none;-webkit-appearance:none!important;display:block;border:var(--border);width:var(--card-width);height:100%;text-decoration:none;outline:none;display:grid;border-radius:var(--border-radius)}:host([flippable]) .wrap .back,:host([flippable]) .wrap .front,:host .wrap{padding:0;grid-template-columns:var(--padding) 1fr var(--padding);grid-template-rows:auto var(--padding) 1fr var(--padding) auto;grid-template-areas:\"header header header\" \". . .\" \". section .\" \". . .\" \"footer footer footer\";min-height:var(--min-height)}:host([flippable]) .wrap .back,:host([flippable]) .wrap .front{height:auto;display:grid}:host .wrap ::slotted(*),:host .wrap ::slotted(section){grid-area:section;max-width:calc(var(--card-width) - (var(--padding) * 2))}:host .wrap ::slotted(header){padding:1rem var(--padding);border-bottom:var(--border);border-radius:var(--border-radius) var(--border-radius) 0 0;grid-area:header!important;width:calc(var(--card-width) - 2px);max-width:calc(var(--card-width) - 2px)}:host .wrap ::slotted(header.subhead){background:var(--theme-base7)}:host .wrap ::slotted(header.sticky){position:-webkit-sticky;position:sticky;top:0;z-index:999999}:host .wrap ::slotted(footer){grid-area:footer!important;padding:1rem var(--padding);border-top:var(--border);width:calc(var(--card-width) - 2px);max-width:calc(var(--card-width) - 2px)}:host([has*=header][has*=footer]){grid-template-columns:1rem auto 1rem;grid-template-rows:1fr auto 1fr}:host stencil-route-link.wrap a{text-decoration:none}:host a.wrap:active,:host button.wrap:active,:host stencil-route-link.wrap:active{background:var(--theme-base0)}:host([shadow=light]){-webkit-box-shadow:0 .8rem 3rem -2rem var(--gray1);box-shadow:0 .8rem 3rem -2rem var(--gray1)}:host([shadow=heavy]){-webkit-box-shadow:0 .8rem 3rem -1rem var(--gray1);box-shadow:0 .8rem 3rem -1rem var(--gray1)}:host([rounded=true]){border-radius:1rem}:host([flippable]){-webkit-perspective:3000px;perspective:3000px;background:transparent}:host([flippable]) .wrap{display:block;background:var(--background);-webkit-transition:all .5s var(--ease,ease-in-out) 0s,background-color 0s ease 0s;transition:all .5s var(--ease,ease-in-out) 0s,background-color 0s ease 0s}:host([flippable]) .wrap .front{-webkit-transition:min-height .35s linear 0s,opacity .15s linear .3s!important;transition:min-height .35s linear 0s,opacity .15s linear .3s!important;z-index:1;opacity:1;height:100%}:host([flippable]) .wrap .back *,:host([flippable]) .wrap .front{-webkit-backface-visibility:hidden;backface-visibility:hidden}:host([flippable]) .wrap .back{top:0;left:0;position:absolute;height:100%;width:100%;z-index:0;-webkit-transform:rotateY(180deg);transform:rotateY(180deg);overflow-y:none;pointer-events:none;opacity:0}:host([flippable]) .wrap .back,:host([flippable][flipped]) .wrap .front{-webkit-transition:min-height .35s linear 0s,opacity .15s linear 0s!important;transition:min-height .35s linear 0s,opacity .15s linear 0s!important}:host([flippable][flipped]) .wrap .back{-webkit-transition:min-height .35s linear 0s,opacity .15s linear .3s!important;transition:min-height .35s linear 0s,opacity .15s linear .3s!important}:host([flippable]) .wrap .flip-button{position:absolute;right:.5rem;top:.5rem;z-index:1;-webkit-transform:translateZ(1px);transform:translateZ(1px)}:host([flippable][flipped]){--background:var(--flipped-background,#fff)!important;--min-height:var(--flipped-min-height)!important;z-index:1}:host([flippable][flipped]) .wrap{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}:host([flippable][flipped]) .wrap .flip-button{-webkit-transform:translateZ(-1px);transform:translateZ(-1px)}:host([flippable][flipped]) .wrap .back,:host([flippable][flipped]) .wrap .front{min-height:var(--min-height)}:host([flippable][flipped]) .wrap .front{pointer-events:none;opacity:0}:host([flippable][flipped]) .wrap .back{pointer-events:auto;overflow-y:initial;opacity:1}:host-context(.dark-mode){--border:1px solid var(--gray8);--background:var(--gray9);--flipped-background:var(--gray9)}"},enumerable:!0,configurable:!0}),t}();t.StellarCard=a,Object.defineProperty(t,"__esModule",{value:!0})});