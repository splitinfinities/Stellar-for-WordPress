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
        this.type = "cursor";
        this.distance = 0.5;
        this.padding = 40;
    }
    componentWillLoad() {
        this.update();
        __chunk_3.properties.set({ "--left": `50%`, "--top": `-3000px` }, this.element);
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
            this.attachCursor();
        }
    }
    attachScroll() {
        __chunk_3.properties.set({ "--top": `${window.pageYOffset + this.offset}px` }, this.element);
        // @ts-ignore
        window.addEventListener("scroll", () => {
            __chunk_3.properties.set({ "--top": `${window.pageYOffset + this.offset}px` }, this.element);
        }, { passive: true });
    }
    attachCursor() {
        // @ts-ignore
        window.addEventListener("mousemove", (e) => {
            __chunk_3.properties.set({ "--top": `${e.clientY}px` }, this.element);
            __chunk_3.properties.set({ "--left": `${this.minmaxx(e.clientX)}px` }, this.element);
        }, { passive: true });
        window.addEventListener("deviceorientation", (e) => {
            const z = Math.abs(e.alpha);
            const value = z / 360;
            const percentage = value * 100;
            __chunk_3.properties.set({ "--left": `${this.minmaxx(percentage)}px` }, this.element);
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
        return __chunk_1.h("slot", null);
    }
    get element() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "type": ["update"],
        "distance": ["update"]
    }; }
    static get style() { return ":host{--translate-y:calc(-50% + var(--top));--translate-x:calc(-50% + var(--left));position:fixed;top:0;left:0;z-index:20;-webkit-transform:translate3d(var(--translate-x),var(--translate-y),0);transform:translate3d(var(--translate-x),var(--translate-y),0);pointer-events:none}"; }
}

exports.stellar_follow = Follow;
