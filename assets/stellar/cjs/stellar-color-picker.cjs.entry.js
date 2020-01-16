'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
const index$1$1 = require('./index-d326a972.js');
require('./_commonjsHelpers-3fc1f64e.js');
const cssCustomProperties_min = require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');
require('./index-9d31ce96.js');
const theme = require('./theme-1038bd3c.js');

const ColorPickerCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;--width:32px;--height:32px;--gap:2px;--mod-width:calc(var(--width) + var(--gap));--mod-height:calc(var(--height) + var(--gap));display:inline-block;position:relative;width:var(--width);height:var(--height);background:var(--selected-color, var(--red5));border:2px solid var(--selected-color, var(--red5));border-radius:100%}:host([size=\"large\"]){--width:64px;--height:64px;--gap:4px}:host .wrap{border-radius:100%;position:relative;left:calc(var(--gap) * -1);top:calc(var(--gap) * -1);height:calc(100% + var(--gap) * 2);width:calc(100% + var(--gap) * 2)}:host button{cursor:pointer;display:block;position:absolute;-webkit-transition:all 400ms var(--ease, ease-out) 100ms;transition:all 400ms var(--ease, ease-out) 100ms;opacity:0;border:0;width:var(--width);height:var(--height);border-radius:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host button.current{position:relative;border:var(--gap) solid var(--gray2);background:var(--white);overflow:hidden}:host button.current::after{content:\"\";display:block;position:absolute;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);background:var(--red);height:4px}:host([val=\"none\"]),:host button.none{background:white;border:var(--gap) solid var(--black)}:host([val=\"none\"])::after,:host button.none::after{content:\"\";display:block;position:absolute;left:calc(50% - var(--gap));top:calc(0% - var(--gap));width:calc(var(--gap) * 2);height:calc(100% + (var(--gap) * 2));-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--red5)}:host button[data-selected=\"true\"]{opacity:1;z-index:9}:host .wrap:hover{width:calc(var(--mod-width) * 3);height:calc(var(--mod-height) * 6);border-radius:100%}:host .wrap:hover button{opacity:1;z-index:99;height:var(--height)}:host .wrap:hover button:nth-of-type(1){-webkit-transform:translate3d(calc(var(--mod-width) * -1), var(--mod-height), 0);transform:translate3d(calc(var(--mod-width) * -1), var(--mod-height), 0)}:host .wrap:hover button:nth-of-type(2){-webkit-transform:translate3d(0, var(--mod-height), 0);transform:translate3d(0, var(--mod-height), 0)}:host .wrap:hover button:nth-of-type(3){-webkit-transform:translate3d(var(--mod-width), var(--mod-height), 0);transform:translate3d(var(--mod-width), var(--mod-height), 0)}:host .wrap:hover button:nth-of-type(4){-webkit-transform:translate3d(calc(var(--mod-width) * -1), calc(var(--mod-height) * 2), 0);transform:translate3d(calc(var(--mod-width) * -1), calc(var(--mod-height) * 2), 0)}:host .wrap:hover button:nth-of-type(5){-webkit-transform:translate3d(0, calc(var(--mod-height) * 2), 0);transform:translate3d(0, calc(var(--mod-height) * 2), 0)}:host .wrap:hover button:nth-of-type(6){-webkit-transform:translate3d(var(--mod-width), calc(var(--mod-height) * 2), 0);transform:translate3d(var(--mod-width), calc(var(--mod-height) * 2), 0)}:host .wrap:hover button:nth-of-type(7){-webkit-transform:translate3d(calc(var(--mod-width) * -1), calc(var(--mod-height) * 3), 0);transform:translate3d(calc(var(--mod-width) * -1), calc(var(--mod-height) * 3), 0)}:host .wrap:hover button:nth-of-type(8){-webkit-transform:translate3d(0, calc(var(--mod-height) * 3), 0);transform:translate3d(0, calc(var(--mod-height) * 3), 0)}:host .wrap:hover button:nth-of-type(9){-webkit-transform:translate3d(var(--mod-width), calc(var(--mod-height) * 3), 0);transform:translate3d(var(--mod-width), calc(var(--mod-height) * 3), 0)}:host .wrap:hover button:nth-of-type(10){-webkit-transform:translate3d(calc(var(--mod-width) * -1), calc(var(--mod-height) * 4), 0);transform:translate3d(calc(var(--mod-width) * -1), calc(var(--mod-height) * 4), 0)}:host .wrap:hover button:nth-of-type(11){-webkit-transform:translate3d(0, calc(var(--mod-height) * 4), 0);transform:translate3d(0, calc(var(--mod-height) * 4), 0)}:host .wrap:hover button:nth-of-type(12){-webkit-transform:translate3d(var(--mod-width), calc(var(--mod-height) * 4), 0);transform:translate3d(var(--mod-width), calc(var(--mod-height) * 4), 0)}:host .wrap:hover button:nth-of-type(13){-webkit-transform:translate3d(calc(var(--mod-width) * -1), calc(var(--mod-height) * 5), 0);transform:translate3d(calc(var(--mod-width) * -1), calc(var(--mod-height) * 5), 0)}:host .wrap:hover button:nth-of-type(14){-webkit-transform:translate3d(var(--mod-width), calc(var(--mod-height) * 5), 0);transform:translate3d(var(--mod-width), calc(var(--mod-height) * 5), 0)}:host([dark][val=\"none\"]),:host([dark]) button.none{background:var(--black) !important;border:2px solid var(--white) !important}";

const ColorPicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.val = "none";
        this.notransparent = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.update = index.createEvent(this, "update", 7);
    }
    componentWillLoad() {
        this.options = Object.keys(index$1$1.colors).filter((color) => {
            // @ts-ignore
            return !["base", "white", "black", "black-alt"].includes(color);
        });
        cssCustomProperties_min.properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    valueUpdatedHandler(val) {
        this.update.emit(val);
        cssCustomProperties_min.properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    updateValue(color) {
        this.val = color;
    }
    render() {
        return index.h("div", { class: "wrap" }, this.options.map(option => index.h("button", { type: "button", value: option, class: option, style: { "background": `var(--${option}5)` }, onClick: () => { this.updateValue(option); } })), !this.notransparent && index.h("button", { type: "button", value: "none", class: "none", style: { "background": `var(--white)` }, onClick: () => { this.updateValue("none"); } }), index.h("div", { class: "placeholder" }));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "val": ["valueUpdatedHandler"]
    }; }
    static get style() { return ColorPickerCss; }
};
theme.Tunnel.injectProps(ColorPicker, ['dark']);

exports.stellar_color_picker = ColorPicker;
