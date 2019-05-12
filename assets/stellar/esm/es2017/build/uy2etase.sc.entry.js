import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import { a as properties } from './chunk-340b8099.js';
import './chunk-43ad3764.js';
import './chunk-5ce278cb.js';

class Follow {
    constructor() {
        this.type = "scroll";
        this.distance = 0.5;
        this.padding = 40;
    }
    componentWillLoad() {
        this.update();
        properties.set({ "--left": `50%`, "--top": `-3000px` }, this.element);
    }
    componentDidLoad() {
        setTimeout(() => {
            this.update();
        }, 200);
    }
    get offset() {
        return window.innerHeight * this.distance;
    }
    update() {
        if (this.type === "scroll") {
            this.attachScroll();
        }
        else if (this.type === "cursor") {
            this.attachScroll();
            this.attachCursor();
        }
    }
    attachScroll() {
        properties.set({ "--top": `${window.pageYOffset + this.offset}px` }, this.element);
        window.addEventListener("scroll", () => {
            properties.set({ "--top": `${window.pageYOffset + this.offset}px` }, this.element);
        }, { passive: true });
    }
    attachCursor() {
        window.addEventListener("mousemove", (e) => {
            properties.set({ "--left": `${this.minmaxx(e.clientX)}px` }, this.element);
        }, { passive: true });
        window.addEventListener("deviceorientation", (e) => {
            const z = Math.abs(e.alpha);
            const value = z / 360;
            const percentage = value * 100;
            properties.set({ "--left": `${this.minmaxx(percentage)}px` }, this.element);
        }, true);
    }
    minmaxx(x) {
        let left = (this.padding + (this.element.offsetWidth / 2));
        let right = (window.innerWidth - left);
        if (x <= left) {
            x = left;
        }
        else if (x >= right) {
            x = right;
        }
        return x;
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "stellar-follow"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "distance": {
            "type": Number,
            "attr": "distance",
            "watchCallbacks": ["update"]
        },
        "element": {
            "elementRef": true
        },
        "padding": {
            "type": Number,
            "attr": "padding"
        },
        "type": {
            "type": String,
            "attr": "type",
            "watchCallbacks": ["update"]
        }
    }; }
    static get style() { return ".sc-stellar-follow-h{--spring:spring(1,9000,11,-0.2);position:absolute;top:var(--top);left:var(--left);z-index:20;-webkit-transition:top 50ms var(--ease) 0s,left 50ms var(--ease) 0s;transition:top 50ms var(--ease) 0s,left 50ms var(--ease) 0s;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);pointer-events:none}"; }
}

export { Follow as StellarFollow };
