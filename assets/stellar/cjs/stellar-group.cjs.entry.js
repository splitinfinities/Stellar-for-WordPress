'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

const GroupCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;height:auto;contain:content;min-height:calc(var(--ms6) - 0.1rem)}:host([fill]){display:-ms-flexbox;display:flex;width:100%}:host([size=\"tiny\"]){min-height:calc(var(--ms4) - 0.1rem)}:host([size=\"small\"]){min-height:calc(var(--ms5) - 0.1rem)}:host([size=\"medium\"]){min-height:calc(var(--ms7) - 0.2rem)}:host([size=\"large\"]){min-height:var(--ms7)}:host ::slotted(*){-ms-flex-item-align:stretch;align-self:stretch}:host([fill]) ::slotted(*){width:100%}:host ::slotted(stellar-button),:host ::slotted(stellar-input),:host ::slotted(stellar-card){--border-radius:0;margin:0}:host ::slotted(*:nth-of-type(1)){margin-left:-1px !important}:host ::slotted([emphasis]){-webkit-transform:scale(1.05);transform:scale(1.05);z-index:1}:host ::slotted(stellar-avatar){margin-left:2px;--drop-shadow:none}:host ::slotted(stellar-avatar){position:relative;margin-left:-0.5em;--drop-shadow:.1em 0 0 white;-webkit-transition:all 100ms ease 0s;transition:all 100ms ease 0s}:host([overflow])>*:nth-of-type(1){z-index:10}:host([overflow])>*:nth-of-type(2){z-index:9}:host([overflow])>*:nth-of-type(3){z-index:8}:host([overflow])>*:nth-of-type(4){z-index:7}:host([overflow])>*:nth-of-type(5){z-index:6}:host([overflow])>*:nth-of-type(6){z-index:5}:host([overflow])>*:nth-of-type(7){z-index:4}:host([overflow])>*:nth-of-type(8){z-index:3}:host([overflow])>*:nth-of-type(9){z-index:2}:host([overflow])>*:nth-of-type(10){z-index:1}:host stellar-group-overflow{margin-left:0.25em}";

const Group = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.overflow = false;
        this.count = 10;
        this.extras = [];
    }
    componentWillLoad() {
        this.sizes();
        this.buttons();
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
    sizes() {
        const kids = Array.from(this.element.children);
        if (kids) {
            kids.forEach((kid) => {
                kid.size = this.size;
            });
        }
    }
    buttons() {
        const buttons = this.element.querySelectorAll('stellar-button');
        if (buttons) {
            buttons.forEach((button) => {
                button.classList.add('h-auto');
            });
        }
    }
    resultantExtras() {
        return this.extras.map((element) => {
            const attributes = {};
            Array.prototype.slice.call(element.attributes).forEach(function (item) {
                attributes[item.name] = item.value;
            });
            return index.h(element.tagName, Object.assign({}, attributes));
        });
    }
    render() {
        return [
            index.h("slot", null),
            this.overflow && index.h("stellar-group-overflow", { size: this.size, count: this.extras.length }, this.resultantExtras())
        ];
    }
    get element() { return index.getElement(this); }
    static get style() { return GroupCss; }
};

exports.stellar_group = Group;
