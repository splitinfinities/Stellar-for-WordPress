import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import { a as properties } from './chunk-340b8099.js';
import { a as colors } from './chunk-9f751763.js';
import './chunk-a955a305.js';
import './chunk-5ce278cb.js';

class ColorPicker {
    constructor() {
        this.val = "none";
    }
    componentWillLoad() {
        this.options = Object.keys(colors).filter((color) => {
            return !["base", "white", "black"].includes(color);
        });
        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    valueChangedHandler(val) {
        this.change.emit(val);
        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    updateValue(color) {
        this.val = color;
    }
    render() {
        return h("div", { class: "wrap" },
            this.options.map(option => h("button", { value: option, class: option, style: { "background": `var(--${option}5)` }, onClick: () => { this.updateValue(option); } })),
            h("button", { value: "none", class: "none", style: { "background": `var(--white)` }, onClick: () => { this.updateValue("none"); } }),
            h("div", { class: "placeholder" }));
    }
    static get is() { return "stellar-color-picker"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "options": {
            "state": true
        },
        "val": {
            "type": String,
            "attr": "val",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["valueChangedHandler"]
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;background:var(--selected-color,var(--red5));border:2px solid var(--selected-color,var(--red5));border-radius:100%}:host,:host .wrap{width:32px;height:32px}:host .wrap{border-radius:100%}:host .placeholder{position:absolute;top:0;left:0;-webkit-transition:opacity .2s var(--ease,ease-out) .1s,width .2s var(--ease,ease-out) .1s,z-index .2s var(--ease,ease-out) .1s;transition:opacity .2s var(--ease,ease-out) .1s,width .2s var(--ease,ease-out) .1s,z-index .2s var(--ease,ease-out) .1s;opacity:1;z-index:0;background:#fff;width:32px;height:32px;border-radius:100%}:host .placeholder[data-selected=true]{opacity:1;z-index:9}:host button{cursor:pointer;display:block;position:absolute;-webkit-transition:all .4s var(--ease,ease-out) .1s;transition:all .4s var(--ease,ease-out) .1s;opacity:0;border:0;width:32px;height:32px;border-radius:100%;-webkit-transform:translate3d(34px,0,0);transform:translate3d(34px,0,0)}:host button.current{position:relative;border:2px solid var(--gray2);background:var(--white);overflow:hidden}:host button.current:after{content:\"\";display:block;position:absolute;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);background:var(--red);width:32px;height:4px}:host([val=none]),:host button.none{background:#fff;border:2px solid var(--black)}:host([val=none]):after,:host button.none:after{content:\"\";display:block;position:absolute;left:calc(50% - 2px);top:calc(0% - .2rem);width:4px;height:calc(100% + .4rem);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--red5)}:host button[data-selected=true]{opacity:1;z-index:9}:host .wrap{position:relative;left:-34px}:host .wrap .placeholder{opacity:0;z-index:-1}:host .wrap:hover{width:96px;height:204px;border-radius:100%}:host .wrap:hover button{opacity:1;z-index:99;height:32px}:host .wrap:hover button:first-of-type{-webkit-transform:translate3d(0,34px,0);transform:translate3d(0,34px,0)}:host .wrap:hover button:nth-of-type(2){-webkit-transform:translate3d(34px,34px,0);transform:translate3d(34px,34px,0)}:host .wrap:hover button:nth-of-type(3){-webkit-transform:translate3d(68px,34px,0);transform:translate3d(68px,34px,0)}:host .wrap:hover button:nth-of-type(4){-webkit-transform:translate3d(0,68px,0);transform:translate3d(0,68px,0)}:host .wrap:hover button:nth-of-type(5){-webkit-transform:translate3d(34px,68px,0);transform:translate3d(34px,68px,0)}:host .wrap:hover button:nth-of-type(6){-webkit-transform:translate3d(68px,68px,0);transform:translate3d(68px,68px,0)}:host .wrap:hover button:nth-of-type(7){-webkit-transform:translate3d(0,102px,0);transform:translate3d(0,102px,0)}:host .wrap:hover button:nth-of-type(8){-webkit-transform:translate3d(34px,102px,0);transform:translate3d(34px,102px,0)}:host .wrap:hover button:nth-of-type(9){-webkit-transform:translate3d(68px,102px,0);transform:translate3d(68px,102px,0)}:host .wrap:hover button:nth-of-type(10){-webkit-transform:translate3d(0,136px,0);transform:translate3d(0,136px,0)}:host .wrap:hover button:nth-of-type(11){-webkit-transform:translate3d(34px,136px,0);transform:translate3d(34px,136px,0)}:host .wrap:hover button:nth-of-type(12){-webkit-transform:translate3d(68px,136px,0);transform:translate3d(68px,136px,0)}:host .wrap:hover button:nth-of-type(13){-webkit-transform:translate3d(0,170px,0);transform:translate3d(0,170px,0)}:host .wrap:hover button:nth-of-type(14){-webkit-transform:translate3d(34px,170px,0);transform:translate3d(34px,170px,0)}:host-context(.dark-mode):host([val=none]),:host-context(.dark-mode):host button.none{background:var(--black)!important;border:2px solid var(--white)!important}"; }
}

export { ColorPicker as StellarColorPicker };
