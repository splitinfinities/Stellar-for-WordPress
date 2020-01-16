import { r as registerInstance, h, H as Host, d as getElement } from './index-bcfb4a9f.js';
var HorizontalScrollCss = ":host{--scroll-height:32rem;height:var(--scroll-height);contain:content}:host>div{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;top:0;left:0;width:var(--scroll-height);height:var(--scroll-height);margin:0;padding-top:0;overflow-y:auto;overflow-x:hidden;-webkit-transform:rotate(-90deg) translateY(calc(var(--scroll-height) * -1));transform:rotate(-90deg) translateY(calc(var(--scroll-height) * -1));-webkit-transform-origin:right top;transform-origin:right top;direction:rtl}:host ::slotted(*){display:block;-webkit-transform:rotate(90deg) translateX(var(--scroll-height));transform:rotate(90deg) translateX(var(--scroll-height));-webkit-transform-origin:right top;transform-origin:right top;direction:ltr;width:auto;height:calc(100% - calc(var(--scroll-height) * .3)) !important;-ms-flex:0 100% !important;flex:0 100% !important;margin:0 !important}";
var HorizontalScroll = /** @class */ (function () {
    function HorizontalScroll(hostRef) {
        registerInstance(this, hostRef);
    }
    HorizontalScroll.prototype.render = function () {
        return (h(Host, { style: { "--scroll-height": this.el.offsetWidth + "px" } }, h("div", null, h("slot", null))));
    };
    Object.defineProperty(HorizontalScroll.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalScroll, "style", {
        get: function () { return HorizontalScrollCss; },
        enumerable: true,
        configurable: true
    });
    return HorizontalScroll;
}());
export { HorizontalScroll as horizontal_scroll };
