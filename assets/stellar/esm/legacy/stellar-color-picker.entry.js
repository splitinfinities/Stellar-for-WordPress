import { d as registerInstance, i as createEvent, f as h, g as getElement } from './stellar-core-1e602ba1.js';
import './chunk-40f083d9.js';
import { a as properties } from './chunk-d0cf38d8.js';
import { b as colors } from './chunk-27460e3f.js';
import './chunk-f26db59a.js';
import './chunk-cf2c1f95.js';
var ColorPicker = /** @class */ (function () {
    function ColorPicker(hostRef) {
        registerInstance(this, hostRef);
        this.val = "none";
        this.notransparent = false;
        this.change = createEvent(this, "change", 7);
    }
    ColorPicker.prototype.componentWillLoad = function () {
        this.options = Object.keys(colors).filter(function (color) {
            // @ts-ignore
            return !["base", "white", "black", "black-alt"].includes(color);
        });
        properties.set({
            "--selected-color": "var(--" + this.val + "5)"
        }, this.element);
    };
    ColorPicker.prototype.valueChangedHandler = function (val) {
        this.change.emit(val);
        properties.set({
            "--selected-color": "var(--" + this.val + "5)"
        }, this.element);
    };
    ColorPicker.prototype.updateValue = function (color) {
        this.val = color;
    };
    ColorPicker.prototype.render = function () {
        var _this = this;
        return h("div", { class: "wrap" }, this.options.map(function (option) { return h("button", { type: "button", value: option, class: option, style: { "background": "var(--" + option + "5)" }, onClick: function () { _this.updateValue(option); } }); }), !this.notransparent && h("button", { type: "button", value: "none", class: "none", style: { "background": "var(--white)" }, onClick: function () { _this.updateValue("none"); } }), h("div", { class: "placeholder" }));
    };
    Object.defineProperty(ColorPicker.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorPicker, "watchers", {
        get: function () {
            return {
                "val": ["valueChangedHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorPicker, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--width:32px;--height:32px;--gap:2px;--mod-width:calc(var(--width) + var(--gap));--mod-height:calc(var(--height) + var(--gap));display:inline-block;position:relative;width:var(--width);height:var(--height);background:var(--selected-color,var(--red5));border:2px solid var(--selected-color,var(--red5));border-radius:100%}:host([size=large]){--width:64px;--height:64px;--gap:4px}:host .wrap{border-radius:100%;position:relative;left:calc(var(--gap) * -1);top:calc(var(--gap) * -1);height:calc(100% + var(--gap) * 2);width:calc(100% + var(--gap) * 2)}:host button{cursor:pointer;display:block;position:absolute;-webkit-transition:all .4s var(--ease,ease-out) .1s;transition:all .4s var(--ease,ease-out) .1s;opacity:0;border:0;width:var(--width);height:var(--height);border-radius:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host button.current{position:relative;border:var(--gap) solid var(--gray2);background:var(--white);overflow:hidden}:host button.current:after{content:\"\";display:block;position:absolute;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);background:var(--red);height:4px}:host([val=none]),:host button.none{background:#fff;border:var(--gap) solid var(--black)}:host([val=none]):after,:host button.none:after{content:\"\";display:block;position:absolute;left:calc(50% - var(--gap));top:calc(0% - var(--gap));width:calc(var(--gap) * 2);height:calc(100% + (var(--gap) * 2));-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--red5)}:host button[data-selected=true]{opacity:1;z-index:9}:host .wrap:hover{width:calc(var(--mod-width) * 3);height:calc(var(--mod-height) * 6);border-radius:100%}:host .wrap:hover button{opacity:1;z-index:99;height:var(--height)}:host .wrap:hover button:first-of-type{-webkit-transform:translate3d(calc(var(--mod-width) * -1),var(--mod-height),0);transform:translate3d(calc(var(--mod-width) * -1),var(--mod-height),0)}:host .wrap:hover button:nth-of-type(2){-webkit-transform:translate3d(0,var(--mod-height),0);transform:translate3d(0,var(--mod-height),0)}:host .wrap:hover button:nth-of-type(3){-webkit-transform:translate3d(var(--mod-width),var(--mod-height),0);transform:translate3d(var(--mod-width),var(--mod-height),0)}:host .wrap:hover button:nth-of-type(4){-webkit-transform:translate3d(calc(var(--mod-width) * -1),calc(var(--mod-height) * 2),0);transform:translate3d(calc(var(--mod-width) * -1),calc(var(--mod-height) * 2),0)}:host .wrap:hover button:nth-of-type(5){-webkit-transform:translate3d(0,calc(var(--mod-height) * 2),0);transform:translate3d(0,calc(var(--mod-height) * 2),0)}:host .wrap:hover button:nth-of-type(6){-webkit-transform:translate3d(var(--mod-width),calc(var(--mod-height) * 2),0);transform:translate3d(var(--mod-width),calc(var(--mod-height) * 2),0)}:host .wrap:hover button:nth-of-type(7){-webkit-transform:translate3d(calc(var(--mod-width) * -1),calc(var(--mod-height) * 3),0);transform:translate3d(calc(var(--mod-width) * -1),calc(var(--mod-height) * 3),0)}:host .wrap:hover button:nth-of-type(8){-webkit-transform:translate3d(0,calc(var(--mod-height) * 3),0);transform:translate3d(0,calc(var(--mod-height) * 3),0)}:host .wrap:hover button:nth-of-type(9){-webkit-transform:translate3d(var(--mod-width),calc(var(--mod-height) * 3),0);transform:translate3d(var(--mod-width),calc(var(--mod-height) * 3),0)}:host .wrap:hover button:nth-of-type(10){-webkit-transform:translate3d(calc(var(--mod-width) * -1),calc(var(--mod-height) * 4),0);transform:translate3d(calc(var(--mod-width) * -1),calc(var(--mod-height) * 4),0)}:host .wrap:hover button:nth-of-type(11){-webkit-transform:translate3d(0,calc(var(--mod-height) * 4),0);transform:translate3d(0,calc(var(--mod-height) * 4),0)}:host .wrap:hover button:nth-of-type(12){-webkit-transform:translate3d(var(--mod-width),calc(var(--mod-height) * 4),0);transform:translate3d(var(--mod-width),calc(var(--mod-height) * 4),0)}:host .wrap:hover button:nth-of-type(13){-webkit-transform:translate3d(calc(var(--mod-width) * -1),calc(var(--mod-height) * 5),0);transform:translate3d(calc(var(--mod-width) * -1),calc(var(--mod-height) * 5),0)}:host .wrap:hover button:nth-of-type(14){-webkit-transform:translate3d(var(--mod-width),calc(var(--mod-height) * 5),0);transform:translate3d(var(--mod-width),calc(var(--mod-height) * 5),0)}:host-context(.dark-mode):host([val=none]),:host-context(.dark-mode):host button.none{background:var(--black)!important;border:2px solid var(--white)!important}"; },
        enumerable: true,
        configurable: true
    });
    return ColorPicker;
}());
export { ColorPicker as stellar_color_picker };
