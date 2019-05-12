import { default as eqjs } from 'eq.js';
import Sortable from '@shopify/draggable/lib/sortable';
import SwapAnimation from '@shopify/draggable/lib/plugins/swap-animation';
export class Grid {
    constructor() {
        this.cols = "auto";
        this.compact = false;
        this.padding = false;
        this.align = "items-start";
        this.responsive = true;
        this.swappable = false;
        this.swappableSelector = "stellar-card";
    }
    async makeResponsive() {
        if (this.responsive && this.responsive !== "false") {
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
    static get properties() { return {
        "__swappable": {
            "state": true
        },
        "align": {
            "type": String,
            "attr": "align",
            "reflectToAttr": true
        },
        "cols": {
            "type": "Any",
            "attr": "cols",
            "reflectToAttr": true
        },
        "compact": {
            "type": Boolean,
            "attr": "compact",
            "reflectToAttr": true
        },
        "element": {
            "elementRef": true
        },
        "order": {
            "state": true
        },
        "padding": {
            "type": Boolean,
            "attr": "padding",
            "reflectToAttr": true
        },
        "refresh": {
            "method": true
        },
        "responsive": {
            "type": "Any",
            "attr": "responsive",
            "reflectToAttr": true
        },
        "swappable": {
            "type": Boolean,
            "attr": "swappable"
        },
        "swappableSelector": {
            "type": String,
            "attr": "swappable-selector"
        }
    }; }
    static get events() { return [{
            "name": "orderChanged",
            "method": "orderChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:stellar-grid:**/"; }
}
