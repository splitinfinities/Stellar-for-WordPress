import { h } from '../stellar-core.core.js';

class Group {
    constructor() {
        this.size = "medium";
        this.overflow = false;
        this.count = 10;
        this.extras = [];
    }
    componentWillLoad() {
        if (this.overflow) {
            if (this.element.children.length > this.count) {
                const children = Array.from(this.element.children);
                children.forEach((element, index) => {
                    if ((index + 1) > this.count) {
                        this.size = element.size;
                        this.extras.push(element);
                        this.element.removeChild(element);
                    }
                });
            }
        }
    }
    resultantExtras() {
        return this.extras.map((element) => {
            const attributes = {};
            Array.prototype.slice.call(element.attributes).forEach(function (item) {
                attributes[item.name] = item.value;
            });
            return h(element.tagName, Object.assign({}, attributes));
        });
    }
    render() {
        return [
            h("slot", null),
            this.overflow && h("stellar-group-overflow", { size: this.size, count: this.extras.length }, this.resultantExtras())
        ];
    }
    static get is() { return "stellar-group"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "count": {
            "type": Number,
            "attr": "count"
        },
        "element": {
            "elementRef": true
        },
        "extras": {
            "state": true
        },
        "overflow": {
            "type": Boolean,
            "attr": "overflow"
        },
        "size": {
            "type": String,
            "attr": "size",
            "mutable": true
        }
    }; }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;height:auto}:host([fill]){display:-ms-flexbox;display:flex;width:100%}:host ::slotted(*){height:auto}:host([fill]) ::slotted(*){width:100%}:host ::slotted(stellar-button),:host ::slotted(stellar-card),:host ::slotted(stellar-input){--border-radius:0;margin:0}:host ::slotted(:first-of-type){margin-left:-1px!important}:host ::slotted([emphasis]){-webkit-transform:scale(1.05);transform:scale(1.05);z-index:1}:host ::slotted(stellar-avatar){margin-left:2px;--drop-shadow:none;position:relative;margin-left:-.5em;--drop-shadow:.1em 0 0 #fff;-webkit-transition:all .1s ease 0s;transition:all .1s ease 0s}:host([overflow])>:first-of-type{z-index:10}:host([overflow])>:nth-of-type(2){z-index:9}:host([overflow])>:nth-of-type(3){z-index:8}:host([overflow])>:nth-of-type(4){z-index:7}:host([overflow])>:nth-of-type(5){z-index:6}:host([overflow])>:nth-of-type(6){z-index:5}:host([overflow])>:nth-of-type(7){z-index:4}:host([overflow])>:nth-of-type(8){z-index:3}:host([overflow])>:nth-of-type(9){z-index:2}:host([overflow])>:nth-of-type(10){z-index:1}:host stellar-group-overflow{margin-left:.25em}"; }
}

class GroupOverflow {
    constructor() {
        this.size = "medium";
    }
    render() {
        return (h("div", { class: "wrapper" },
            h("div", { class: "content" },
                h("div", { class: "count" },
                    "+",
                    this.count,
                    " more"),
                h("div", { class: "spacer" })),
            h("stellar-tooltip", null,
                h("slot", null))));
    }
    static get is() { return "stellar-group-overflow"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "count": {
            "type": Number,
            "attr": "count"
        },
        "element": {
            "elementRef": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;width:calc(var(--group-overflow-size) * 2);max-height:var(--group-overflow-size);font-size:var(--group-overflow-font-size);--group-overflow-size:2.2em;--group-overflow-font-size:1.8rem}:host([size=large]){--group-overflow-font-size:3.6rem}:host([size=medium]){--group-overflow-font-size:1.8rem}:host([size=small]){--group-overflow-font-size:1rem}:host([size=tiny]){--group-overflow-font-size:.8rem}:host .wrapper{display:block;position:relative;z-index:0;width:100%;max-width:calc(var(--group-overflow-size) * 2);font:inherit;font-size:var(--group-overflow-font-size)}:host .content{overflow:hidden;position:relative}:host .spacer{display:block;padding-top:50%;width:100%;height:0}:host .count{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:1;width:100%;height:100%;text-align:left;line-height:100%;padding:.2em .4em;color:var(--theme-complement9);font-size:calc(var(--group-overflow-font-size) * .825);font-weight:600}"; }
}

export { Group as StellarGroup, GroupOverflow as StellarGroupOverflow };
