'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-f620c3d3.js');
require('./chunk-ee96ca86.js');
const __chunk_3 = require('./chunk-61a48f92.js');
require('./chunk-73f3d344.js');
require('./chunk-73f7b312.js');
require('./chunk-e87c7d7e.js');

class Follow {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.width = 400;
        this.height = 400;
        this.frame = 1;
    }
    componentWillLoad() {
        this.update();
    }
    update() {
        __chunk_3.properties.set({
            '--width': `${this.width}px`,
            '--height': `${this.height}px`,
            '--aspect-ratio': `${this.width / this.height * 100}%`,
            '--position': `0 ${this.height * -(this.frame - 1)}px`
        }, this.element);
    }
    render() {
        return __chunk_1.h("div", { class: "background", style: { "background-image": `url(${this.src})` } });
    }
    get element() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "frame": ["update"]
    }; }
    static get style() { return ":host{--position:var(--position,0);display:block;width:100%;height:100%;max-width:var(--width);max-height:var(--height)}:host .background{background-position:var(--position);background-size:cover;width:var(--width);height:var(--height);display:block}"; }
}

exports.stellar_keyframes = Follow;
