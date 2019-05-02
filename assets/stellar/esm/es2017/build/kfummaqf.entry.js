import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import './chunk-340b8099.js';
import './chunk-9f751763.js';
import { r as parentNodeSelector } from './chunk-a955a305.js';
import './chunk-5ce278cb.js';

class Step {
    constructor() {
        this.href = "#";
        this.disabled = false;
        this.open = false;
    }
    componentWillLoad() {
        this.parent = parentNodeSelector(this.element, 'stellar-steps');
    }
    handleClick() {
        this.parent.steps().forEach((element) => {
            element.open = false;
        });
        this.open = true;
        this.contentChange.emit({
            parent: this.parent,
            name: this.href.replace(/[#]/g, "")
        });
    }
    renderTitle() {
        return (h("span", { class: "title" },
            h("slot", null)));
    }
    render() {
        return (h("button", { role: "tab", "aria-selected": this.open ? "true" : "false", "aria-setsize": this.tabCount, "aria-posinset": this.order, tabindex: "0", class: "step-button", onClick: () => this.handleClick() },
            h("stellar-label", null, this.renderTitle())));
    }
    static get is() { return "stellar-step"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "element": {
            "elementRef": true
        },
        "href": {
            "type": String,
            "attr": "href",
            "reflectToAttr": true,
            "mutable": true
        },
        "open": {
            "type": Boolean,
            "attr": "open",
            "reflectToAttr": true,
            "mutable": true
        },
        "order": {
            "type": Number,
            "attr": "order",
            "reflectToAttr": true
        },
        "parent": {
            "state": true
        },
        "tabCount": {
            "type": Number,
            "attr": "tab-count",
            "reflectToAttr": true
        }
    }; }
    static get events() { return [{
            "name": "contentChange",
            "method": "contentChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "stellar-step{display:block;width:100%;font-weight:700;height:inherit;position:relative;text-decoration:none;cursor:default;margin-right:calc(-2rem + 2px);-webkit-clip-path:polygon(calc(100% - 2rem) 0,100% 50%,calc(100% - 2rem) 100%,0 100%,2rem 50%,0 0);clip-path:polygon(calc(100% - 2rem) 0,100% 50%,calc(100% - 2rem) 100%,0 100%,2rem 50%,0 0)}stellar-step button{width:100%;height:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;position:relative;background:var(--theme-base5);cursor:pointer}stellar-step button:focus,stellar-step button:hover{background:var(--theme-base6)}stellar-step stellar-label{margin:0;color:#fff;z-index:1;position:relative;-webkit-transition:all .15s ease 0s;transition:all .15s ease 0s}stellar-steps stellar-step:first-of-type{-webkit-clip-path:polygon(calc(100% - 2rem) 0,100% 50%,calc(100% - 2rem) 100%,0 100%,0 0);clip-path:polygon(calc(100% - 2rem) 0,100% 50%,calc(100% - 2rem) 100%,0 100%,0 0)}stellar-steps stellar-step:last-of-type{-webkit-clip-path:polygon(100% 0,100% 50%,100% 100%,0 100%,2rem 50%,0 0);clip-path:polygon(100% 0,100% 50%,100% 100%,0 100%,2rem 50%,0 0)}stellar-step .title{z-index:1}stellar-step .title:after{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}stellar-step button:after{content:\"\";position:absolute;width:140%;top:0;left:-30%;right:0;bottom:0;z-index:0;opacity:0;background:repeating-linear-gradient(45deg,var(--theme-base1),var(--theme-base1) 2rem,var(--theme-base2) 0,var(--theme-base2) 4rem);mix-blend-mode:multiply;-webkit-animation:moveStripes 10s linear infinite both;animation:moveStripes 10s linear infinite both}stellar-step[open] button:after{opacity:1}stellar-step[open] stellar-label{-webkit-transform:scale(1.25);transform:scale(1.25)}\@-webkit-keyframes moveStripes{0%{background-position-x:0}to{background-position-x:5.5rem}}\@keyframes moveStripes{0%{background-position-x:0}to{background-position-x:5.5rem}}"; }
}

export { Step as StellarStep };
