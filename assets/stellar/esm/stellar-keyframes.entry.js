import { r as registerInstance, h, d as getElement } from './index-bcfb4a9f.js';
import './index-320c6878.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';

const KeyframesCss = ":host{--position:var(--position, 0);display:block;width:100%;height:100%;max-width:var(--width);max-height:var(--height);contain:content}:host .background{background-position:var(--position);background-size:cover;width:var(--width);height:var(--height);display:block}";

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
