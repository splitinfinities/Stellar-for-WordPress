'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-f620c3d3.js');

class Group {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
            return __chunk_1.h(element.tagName, Object.assign({}, attributes));
        });
    }
    render() {
        return [
            __chunk_1.h("slot", null),
            this.overflow && __chunk_1.h("stellar-group-overflow", { size: this.size, count: this.extras.length }, this.resultantExtras())
        ];
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;height:auto}:host([fill]){display:-ms-flexbox;display:flex;width:100%}:host ::slotted(*){height:auto}:host([fill]) ::slotted(*){width:100%}:host ::slotted(stellar-button),:host ::slotted(stellar-card),:host ::slotted(stellar-input){--border-radius:0;margin:0}:host ::slotted(:first-of-type){margin-left:-1px!important}:host ::slotted([emphasis]){-webkit-transform:scale(1.05);transform:scale(1.05);z-index:1}:host ::slotted(stellar-avatar){margin-left:2px;--drop-shadow:none;position:relative;margin-left:-.5em;--drop-shadow:.1em 0 0 #fff;-webkit-transition:all .1s ease 0s;transition:all .1s ease 0s}:host([overflow])>:first-of-type{z-index:10}:host([overflow])>:nth-of-type(2){z-index:9}:host([overflow])>:nth-of-type(3){z-index:8}:host([overflow])>:nth-of-type(4){z-index:7}:host([overflow])>:nth-of-type(5){z-index:6}:host([overflow])>:nth-of-type(6){z-index:5}:host([overflow])>:nth-of-type(7){z-index:4}:host([overflow])>:nth-of-type(8){z-index:3}:host([overflow])>:nth-of-type(9){z-index:2}:host([overflow])>:nth-of-type(10){z-index:1}:host stellar-group-overflow{margin-left:.25em}"; }
}

exports.stellar_group = Group;
