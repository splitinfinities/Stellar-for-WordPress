'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

const HorizontalScrollCss = ":host{--scroll-height:32rem;height:var(--scroll-height);contain:content}:host>div{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;top:0;left:0;width:var(--scroll-height);height:var(--scroll-height);margin:0;padding-top:0;overflow-y:auto;overflow-x:hidden;-webkit-transform:rotate(-90deg) translateY(calc(var(--scroll-height) * -1));transform:rotate(-90deg) translateY(calc(var(--scroll-height) * -1));-webkit-transform-origin:right top;transform-origin:right top;direction:rtl}:host ::slotted(*){display:block;-webkit-transform:rotate(90deg) translateX(var(--scroll-height));transform:rotate(90deg) translateX(var(--scroll-height));-webkit-transform-origin:right top;transform-origin:right top;direction:ltr;width:auto;height:calc(100% - calc(var(--scroll-height) * .3)) !important;-ms-flex:0 100% !important;flex:0 100% !important;margin:0 !important}";

const HorizontalScroll = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { style: { "--scroll-height": `${this.el.offsetWidth}px` } }, index.h("div", null, index.h("slot", null))));
    }
    get el() { return index.getElement(this); }
    static get style() { return HorizontalScrollCss; }
};

exports.horizontal_scroll = HorizontalScroll;
