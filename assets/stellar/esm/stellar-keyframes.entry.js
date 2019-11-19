import { d as registerInstance, f as h, g as getElement } from './stellar-core-1e602ba1.js';
import './chunk-40f083d9.js';
import { a as properties } from './chunk-d0cf38d8.js';
import './chunk-27460e3f.js';
import './chunk-f26db59a.js';
import './chunk-cf2c1f95.js';

class Follow {
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
    static get style() { return ":host{--position:var(--position,0);display:block;width:100%;height:100%;max-width:var(--width);max-height:var(--height)}:host .background{background-position:var(--position);background-size:cover;width:var(--width);height:var(--height);display:block}"; }
}

export { Follow as stellar_keyframes };
