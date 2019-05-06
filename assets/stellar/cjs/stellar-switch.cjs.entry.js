'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');

class Switch {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.checked = false;
        this.checkedDefault = false;
        this.change = __chunk_1.createEvent(this, "change", 7);
    }
    componentDidLoad() {
        if (this.checkedDefault) {
            this.checked = this.checkedDefault;
        }
    }
    async activate() {
        this.checked = !this.checked;
    }
    handleChecked() {
        this.change.emit({
            checked: this.checked
        });
    }
    render() {
        return (__chunk_1.h("label", { class: "label" }, __chunk_1.h("input", { type: "checkbox", checked: this.checked, tabindex: "-1", onClick: () => { this.activate(); } }), __chunk_1.h("button", { onClick: () => { this.activate(); } }, __chunk_1.h("span", null, this.checked && __chunk_1.h("stellar-asset", { name: "checkmark" }), !this.checked && __chunk_1.h("stellar-asset", { name: "close" }))), __chunk_1.h("slot", null)));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "checked": ["handleChecked"]
    }; }
    static get style() { return "stellar-switch{display:block;--border-radius:200px;--font-size:1.2rem}stellar-switch .label{-webkit-tap-highlight-color:transparent;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;position:relative;margin:1.1rem 0}stellar-switch button ::-moz-selection{background:transparent}stellar-switch button ::selection{background:transparent}stellar-switch .label button{font-size:var(--font-size);display:inline-block;position:relative;-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s;margin-right:1em;background-color:var(--gray2);width:4rem;height:.8rem;vertical-align:text-bottom;border-radius:var(--border-radius);border:0;cursor:pointer;outline:0}stellar-switch .label button:focus{background-color:var(--theme-base3)}stellar-switch .label button:focus:after{-webkit-box-shadow:0 0 0 3px rgba(0,0,0,.125),0 0 3px 0 rgba(0,0,0,.3);box-shadow:0 0 0 3px rgba(0,0,0,.125),0 0 3px 0 rgba(0,0,0,.3)}stellar-switch .label button span{font-size:2rem;font-weight:700;color:var(--gray7);left:0;top:0;font-style:normal;text-transform:uppercase;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;padding:0;pointer-events:none;z-index:1}stellar-switch .label button:after,stellar-switch .label button span{-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s;position:absolute}stellar-switch .label button:after{content:\"\";top:-.8rem;left:-.2rem;-webkit-transform:translate3d(.125em,.125em,0);transform:translate3d(.125em,.125em,0);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,.3);box-shadow:0 0 3px 0 rgba(0,0,0,.3);background-color:#fff;border-radius:var(--border-radius);width:2.1rem;height:2.1rem}stellar-switch .label:active button:after{-webkit-transform:translate3d(2px,.125rem,0);transform:translate3d(2px,.125rem,0);width:2.3rem}stellar-switch .label:active input:checked+button:after{-webkit-transform:translate3d(1.9rem,.125rem,0);transform:translate3d(1.9rem,.125rem,0)}stellar-switch .label input{pointer-events:none;position:absolute;opacity:0}stellar-switch .label input:checked+button{background-color:var(--theme-base6);color:#fff}stellar-switch .label input:checked+button span{padding:0 0 0 2.1rem;color:#fff}stellar-switch .label input:checked+button:after{-webkit-transform:translate3d(2.25rem,.125rem,0);transform:translate3d(2.25rem,.125rem,0);background:var(--theme-base5)}.dark-mode stellar-switch .label input:checked+button,.dark-mode stellar-switch .label input:checked+button span{color:var(--black)}"; }
}

exports.stellar_switch = Switch;
