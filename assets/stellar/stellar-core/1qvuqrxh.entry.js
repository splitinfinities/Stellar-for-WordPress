const e=window.StellarCore.h;class t{constructor(){this.checked=!1,this.checkedDefault=!1}componentDidLoad(){this.checkedDefault&&(this.checked=this.checkedDefault)}async activate(){this.checked=!this.checked}handleChecked(){this.change.emit({checked:this.checked})}render(){return e("label",{class:"label"},e("input",{type:"checkbox",checked:this.checked,tabindex:"-1",onClick:()=>{this.activate()}}),e("button",{onClick:()=>{this.activate()}},e("span",null,this.checked&&e("stellar-asset",{name:"checkmark"}),!this.checked&&e("stellar-asset",{name:"close"}))),e("slot",null))}static get is(){return"stellar-switch"}static get properties(){return{activate:{method:!0},checked:{type:Boolean,attr:"checked",reflectToAttr:!0,mutable:!0,watchCallbacks:["handleChecked"]},checkedDefault:{type:Boolean,attr:"checked-default"},el:{elementRef:!0}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"stellar-switch{display:block;--border-radius:200px;--font-size:1.2rem}stellar-switch .label{-webkit-tap-highlight-color:transparent;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;position:relative;margin:1.1rem 0}stellar-switch button ::-moz-selection{background:transparent}stellar-switch button ::selection{background:transparent}stellar-switch .label button{font-size:var(--font-size);display:inline-block;position:relative;-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s;margin-right:1em;background-color:var(--gray2);width:4rem;height:.8rem;vertical-align:text-bottom;border-radius:var(--border-radius);border:0;cursor:pointer;outline:0}stellar-switch .label button:focus{background-color:var(--theme-base3)}stellar-switch .label button:focus:after{-webkit-box-shadow:0 0 0 3px rgba(0,0,0,.125),0 0 3px 0 rgba(0,0,0,.3);box-shadow:0 0 0 3px rgba(0,0,0,.125),0 0 3px 0 rgba(0,0,0,.3)}stellar-switch .label button span{font-size:2rem;font-weight:700;color:var(--gray7);left:0;top:0;font-style:normal;text-transform:uppercase;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;padding:0;pointer-events:none;z-index:1}stellar-switch .label button:after,stellar-switch .label button span{-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s;position:absolute}stellar-switch .label button:after{content:\"\";top:-.8rem;left:-.2rem;-webkit-transform:translate3d(.125em,.125em,0);transform:translate3d(.125em,.125em,0);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,.3);box-shadow:0 0 3px 0 rgba(0,0,0,.3);background-color:#fff;border-radius:var(--border-radius);width:2.1rem;height:2.1rem}stellar-switch .label:active button:after{-webkit-transform:translate3d(2px,.125rem,0);transform:translate3d(2px,.125rem,0);width:2.3rem}stellar-switch .label:active input:checked+button:after{-webkit-transform:translate3d(1.9rem,.125rem,0);transform:translate3d(1.9rem,.125rem,0)}stellar-switch .label input{pointer-events:none;position:absolute;opacity:0}stellar-switch .label input:checked+button{background-color:var(--theme-base6);color:#fff}stellar-switch .label input:checked+button span{padding:0 0 0 2.1rem;color:#fff}stellar-switch .label input:checked+button:after{-webkit-transform:translate3d(2.25rem,.125rem,0);transform:translate3d(2.25rem,.125rem,0);background:var(--theme-base5)}.dark-mode stellar-switch .label input:checked+button,.dark-mode stellar-switch .label input:checked+button span{color:var(--black)}"}}export{t as StellarSwitch};