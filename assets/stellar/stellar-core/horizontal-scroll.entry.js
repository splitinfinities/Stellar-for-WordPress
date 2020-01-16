import { r as registerInstance, h, H as Host, g as getElement } from './index-cc4604b3.js';

const HorizontalScrollCss = ":host {\n  --scroll-height: 32rem;\n  height: var(--scroll-height);\n  contain: content;\n}\n\n:host > div {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  width: var(--scroll-height);\n  height: var(--scroll-height);\n  margin: 0;\n  padding-top: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-transform: rotate(-90deg) translateY(calc(var(--scroll-height) * -1));\n  transform: rotate(-90deg) translateY(calc(var(--scroll-height) * -1));\n  -webkit-transform-origin: right top;\n  transform-origin: right top;\n  direction: rtl;\n}\n\n:host ::slotted(*) {\n  display: block;\n  transform: rotate(90deg) translateX(var(--scroll-height));\n  transform-origin: right top;\n  direction: ltr;\n  width: auto;\n  height: calc(100% - calc(var(--scroll-height) * .3)) !important;\n  flex: 0 100% !important;\n  margin: 0 !important;\n}\n";

const HorizontalScroll = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { style: { "--scroll-height": `${this.el.offsetWidth}px` } }, h("div", null, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get style() { return HorizontalScrollCss; }
};

export { HorizontalScroll as horizontal_scroll };
