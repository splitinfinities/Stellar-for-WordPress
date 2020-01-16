import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';
import { c as colors } from './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import { p as properties } from './css-custom-properties.min-d9d14253.js';
import './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';

const ColorPickerCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  contain: content;\n  --width: 32px;\n  --height: 32px;\n  --gap: 2px;\n  --mod-width: calc(var(--width) + var(--gap));\n  --mod-height: calc(var(--height) + var(--gap));\n  display: inline-block;\n  position: relative;\n  width: var(--width);\n  height: var(--height);\n  background: var(--selected-color, var(--red5));\n  border: 2px solid var(--selected-color, var(--red5));\n  border-radius: 100%;\n}\n\n:host([size=\"large\"]) {\n  --width: 64px;\n  --height: 64px;\n  --gap: 4px;\n}\n\n:host .wrap {\n  border-radius: 100%;\n  position: relative;\n  left: calc(var(--gap) * -1);\n  top: calc(var(--gap) * -1);\n  height: calc(100% + var(--gap) * 2);\n  width: calc(100% + var(--gap) * 2);\n}\n\n:host button {\n  cursor: pointer;\n  display: block;\n  position: absolute;\n  transition: all 400ms var(--ease, ease-out) 100ms;\n  opacity: 0;\n  border: 0;\n  width: var(--width);\n  height: var(--height);\n  border-radius: 100%;\n  transform: translate3d(0, 0, 0);\n}\n\n:host button.current {\n  position: relative;\n  border: var(--gap) solid var(--gray2);\n  background: var(--white);\n  overflow: hidden;\n}\n\n:host button.current::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  transform: rotate(-45deg);\n  background: var(--red);\n  height: 4px;\n}\n\n:host([val=\"none\"]),\n:host button.none {\n  background: white;\n  border: var(--gap) solid var(--black);\n}\n\n:host([val=\"none\"])::after,\n:host button.none::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: calc(50% - var(--gap));\n  top: calc(0% - var(--gap));\n  width: calc(var(--gap) * 2);\n  height: calc(100% + (var(--gap) * 2));\n  transform: rotate(45deg);\n  background: var(--red5)\n}\n\n:host button[data-selected=\"true\"] {\n  opacity: 1;\n  z-index: 9;\n}\n\n:host .wrap:hover {\n  width: calc(var(--mod-width) * 3);\n  height: calc(var(--mod-height) * 6);\n  border-radius: 100%;\n}\n\n:host .wrap:hover button {\n  opacity: 1;\n  z-index: 99;\n  height: var(--height);\n}\n\n:host .wrap:hover button:nth-of-type(1) {\n  transform: translate3d(calc(var(--mod-width) * -1), var(--mod-height), 0);\n}\n\n:host .wrap:hover button:nth-of-type(2) {\n  transform: translate3d(0, var(--mod-height), 0);\n}\n\n:host .wrap:hover button:nth-of-type(3) {\n  transform: translate3d(var(--mod-width), var(--mod-height), 0);\n}\n\n:host .wrap:hover button:nth-of-type(4) {\n  transform: translate3d(calc(var(--mod-width) * -1), calc(var(--mod-height) * 2), 0);\n}\n\n:host .wrap:hover button:nth-of-type(5) {\n  transform: translate3d(0, calc(var(--mod-height) * 2), 0);\n}\n\n:host .wrap:hover button:nth-of-type(6) {\n  transform: translate3d(var(--mod-width), calc(var(--mod-height) * 2), 0);\n}\n\n:host .wrap:hover button:nth-of-type(7) {\n  transform: translate3d(calc(var(--mod-width) * -1), calc(var(--mod-height) * 3), 0);\n}\n\n:host .wrap:hover button:nth-of-type(8) {\n  transform: translate3d(0, calc(var(--mod-height) * 3), 0);\n}\n\n:host .wrap:hover button:nth-of-type(9) {\n  transform: translate3d(var(--mod-width), calc(var(--mod-height) * 3), 0);\n}\n\n:host .wrap:hover button:nth-of-type(10) {\n  transform: translate3d(calc(var(--mod-width) * -1), calc(var(--mod-height) * 4), 0);\n}\n\n:host .wrap:hover button:nth-of-type(11) {\n  transform: translate3d(0, calc(var(--mod-height) * 4), 0);\n}\n\n:host .wrap:hover button:nth-of-type(12) {\n  transform: translate3d(var(--mod-width), calc(var(--mod-height) * 4), 0);\n}\n\n:host .wrap:hover button:nth-of-type(13) {\n  transform: translate3d(calc(var(--mod-width) * -1), calc(var(--mod-height) * 5), 0);\n}\n\n:host .wrap:hover button:nth-of-type(14) {\n  transform: translate3d(var(--mod-width), calc(var(--mod-height) * 5), 0);\n}\n\n  :host([dark][val=\"none\"]),\n  :host([dark]) button.none {\n    background: var(--black) !important;\n    border: 2px solid var(--white) !important;\n  }\n";

const ColorPicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.val = "none";
        this.notransparent = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.update = createEvent(this, "update", 7);
    }
    componentWillLoad() {
        this.options = Object.keys(colors).filter((color) => {
            // @ts-ignore
            return !["base", "white", "black", "black-alt"].includes(color);
        });
        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    valueUpdatedHandler(val) {
        this.update.emit(val);
        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    updateValue(color) {
        this.val = color;
    }
    render() {
        return h("div", { class: "wrap" }, this.options.map(option => h("button", { type: "button", value: option, class: option, style: { "background": `var(--${option}5)` }, onClick: () => { this.updateValue(option); } })), !this.notransparent && h("button", { type: "button", value: "none", class: "none", style: { "background": `var(--white)` }, onClick: () => { this.updateValue("none"); } }), h("div", { class: "placeholder" }));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "val": ["valueUpdatedHandler"]
    }; }
    static get style() { return ColorPickerCss; }
};
Tunnel.injectProps(ColorPicker, ['dark']);

export { ColorPicker as stellar_color_picker };
