import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import { a as properties } from './chunk-340b8099.js';
import './chunk-43ad3764.js';
import './chunk-5ce278cb.js';

class Follow {
    constructor() {
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
    static get is() { return "stellar-keyframes"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "frame": {
            "type": Number,
            "attr": "frame",
            "reflectToAttr": true,
            "watchCallbacks": ["update"]
        },
        "height": {
            "type": Number,
            "attr": "height"
        },
        "src": {
            "type": String,
            "attr": "src"
        },
        "width": {
            "type": Number,
            "attr": "width"
        }
    }; }
    static get style() { return ":host{--position:var(--position,0);display:block;width:100%;height:100%;max-width:var(--width);max-height:var(--height)}:host .background{background-position:var(--position);background-size:cover;width:var(--width);height:var(--height);display:block}"; }
}

export { Follow as StellarKeyframes };
