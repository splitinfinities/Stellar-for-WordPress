import { h } from '@stencil/core';
import { default as eqjs } from 'eq.js';
import Sortable from '@shopify/draggable/lib/sortable';
import SwapAnimation from '@shopify/draggable/lib/plugins/swap-animation';
export class Grid {
    constructor() {
        this.cols = "auto";
        this.compact = false;
        this.padding = false;
        this.align = "items-start";
        this.noresponsive = false;
        this.swappable = false;
        this.swappableSelector = "stellar-card";
    }
    async makeResponsive() {
        if (!this.noresponsive) {
            eqjs.definePts(this.element, {
                "tiny": 320,
                "small": 480,
                "medium": 640,
                "large": 800,
                "massive": 1024
            });
            this.refresh();
        }
    }
    async makeSwappable() {
        if (this.swappable) {
            this.__swappable = new Sortable(this.element.querySelectorAll('.grid'), {
                draggable: this.swappableSelector,
                delay: 350,
                swapAnimation: {
                    duration: 200,
                    easingFunction: 'ease-in-out',
                    horizontal: true,
                    vertical: true
                },
                plugins: [SwapAnimation]
            });
            this.__swappable.on('swappable:start', () => { this.refresh(); });
            this.__swappable.on('swappable:stop', () => { this.updateOrder(); });
        }
    }
    async updateOrder() {
        const elements = this.element.querySelectorAll(this.swappableSelector);
        const order = [];
        Array.from(elements).forEach((element) => {
            order.push(element.id);
        });
        this.order = order;
        this.orderChanged.emit(this.order);
    }
    componentWillLoad() {
        this.makeResponsive();
        this.makeSwappable();
    }
    componentDidLoad() {
        this.makeResponsive();
        this.makeSwappable();
    }
    async refresh() {
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(resizeEvent);
    }
    render() {
        return h("div", { class: `grid ${this.align}` },
            h("slot", null));
    }
    static get is() { return "stellar-grid"; }
    static get originalStyleUrls() { return {
        "$": ["grid.css"]
    }; }
    static get styleUrls() { return {
        "$": ["grid.css"]
    }; }
    static get properties() { return {
        "cols": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "number|string",
                "resolved": "number | string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "cols",
            "reflect": true,
            "defaultValue": "\"auto\""
        },
        "compact": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "compact",
            "reflect": true,
            "defaultValue": "false"
        },
        "padding": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "padding",
            "reflect": true,
            "defaultValue": "false"
        },
        "align": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "align",
            "reflect": true,
            "defaultValue": "\"items-start\""
        },
        "noresponsive": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "noresponsive",
            "reflect": true,
            "defaultValue": "false"
        },
        "swappable": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "swappable",
            "reflect": false,
            "defaultValue": "false"
        },
        "swappableSelector": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "swappable-selector",
            "reflect": false,
            "defaultValue": "\"stellar-card\""
        }
    }; }
    static get states() { return {
        "order": {},
        "__swappable": {}
    }; }
    static get events() { return [{
            "method": "orderChanged",
            "name": "orderChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "refresh": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
}
