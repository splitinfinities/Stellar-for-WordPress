import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import { p as properties } from './css-custom-properties.min-d9d14253.js';
import './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';

const KeyframesCss = ":host {\n    --position: var(--position, 0);\n    display: block;\n    width: 100%;\n    height: 100%;\n    max-width: var(--width);\n    max-height: var(--height);\n    contain: content;\n}\n\n:host .background {\n    background-position: var(--position);\n    background-size: cover;\n    width: var(--width);\n    height: var(--height);\n    display: block;\n}\n";

const Keyframes = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.width = 400;
        this.height = 400;
        this.frame = 1;
    }
    componentWillLoad() {
        this.update();
    }
    update() {
        properties.set({
            '--width': `${this.width}px`,
            '--height': `${this.height}px`,
            '--aspect-ratio': `${this.width / this.height * 100}%`,
            '--position': `0 ${this.height * -(this.frame - 1)}px`
        }, this.element);
    }
    render() {
        return h("div", { class: "background", style: { "background-image": `url(${this.src})` } });
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "frame": ["update"]
    }; }
    static get style() { return KeyframesCss; }
};

export { Keyframes as stellar_keyframes };
