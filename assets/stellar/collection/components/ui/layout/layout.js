import { default as eqjs } from 'eq.js';
export class Layout {
    constructor() {
        this.size = "medium";
        this.padding = "medium";
        this.align = "top";
    }
    componentWillLoad() {
        eqjs.definePts(this.element, {
            "tiny": 320,
            "small": 480,
            "medium": 640,
            "large": 800,
            "massive": 1024,
        });
        this.refresh();
    }
    componentDidLoad() {
        this.refresh();
    }
    refresh() {
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(resizeEvent);
    }
    render() {
        return (h("div", { class: "layout" },
            h("slot", null)));
    }
    static get is() { return "stellar-layout"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "align": {
            "type": String,
            "attr": "align",
            "reflectToAttr": true
        },
        "element": {
            "elementRef": true
        },
        "padding": {
            "type": String,
            "attr": "padding",
            "reflectToAttr": true
        },
        "refresh": {
            "method": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true
        },
        "type": {
            "type": String,
            "attr": "type",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-layout:**/"; }
}
