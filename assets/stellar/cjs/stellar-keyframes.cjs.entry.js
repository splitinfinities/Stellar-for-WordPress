'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
require('./index-d326a972.js');
require('./_commonjsHelpers-3fc1f64e.js');
const cssCustomProperties_min = require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');

const KeyframesCss = ":host{--position:var(--position, 0);display:block;width:100%;height:100%;max-width:var(--width);max-height:var(--height);contain:content}:host .background{background-position:var(--position);background-size:cover;width:var(--width);height:var(--height);display:block}";

const Keyframes = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.width = 400;
        this.height = 400;
        this.frame = 1;
    }
    componentWillLoad() {
        this.update();
    }
    update() {
        cssCustomProperties_min.properties.set({
            '--width': `${this.width}px`,
            '--height': `${this.height}px`,
            '--aspect-ratio': `${this.width / this.height * 100}%`,
            '--position': `0 ${this.height * -(this.frame - 1)}px`
        }, this.element);
    }
    render() {
        return index.h("div", { class: "background", style: { "background-image": `url(${this.src})` } });
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "frame": ["update"]
    }; }
    static get style() { return KeyframesCss; }
};

exports.stellar_keyframes = Keyframes;
