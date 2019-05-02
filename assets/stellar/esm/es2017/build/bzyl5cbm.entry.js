import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import './chunk-340b8099.js';
import './chunk-9f751763.js';
import { a as blurringEase } from './chunk-a955a305.js';
import './chunk-5ce278cb.js';

class Content {
    constructor() {
        this.open = false;
        this.ease = blurringEase({
            end: 6,
            start: -1,
            duration: 200,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.blur = 0;
    }
    async handleActive(event) {
        this.parent = event.detail.parent;
        const contents = await this.parent.contents();
        if (event.detail.name !== this.element.id) {
            contents.forEach((element) => {
                element.open = element.id === event.detail.name;
                if (element.open) {
                    this.ease.start();
                }
            });
        }
    }
    render() {
        return (h("stellar-blur", { class: "wrap", role: "tabpanel", vertical: this.blur, "aria-hidden": !this.open ? "true" : "false" },
            h("slot", null)));
    }
    static get is() { return "stellar-content"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "behavior": {
            "type": String,
            "attr": "behavior",
            "reflectToAttr": true,
            "mutable": true
        },
        "blur": {
            "state": true
        },
        "ease": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "for": {
            "type": String,
            "attr": "for",
            "reflectToAttr": true,
            "mutable": true
        },
        "open": {
            "type": Boolean,
            "attr": "open",
            "reflectToAttr": true,
            "mutable": true
        },
        "parent": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "document:contentChange",
            "method": "handleActive"
        }]; }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:none;-webkit-animation-name:fadeInUp;animation-name:fadeInUp;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-duration:.35s;animation-duration:.35s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0);opacity:0}:host([open]){display:block;opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}\@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}"; }
}

export { Content as StellarContent };
