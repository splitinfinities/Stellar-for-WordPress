import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import { p as properties } from './css-custom-properties.min-d9d14253.js';
import './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';

const FollowCss = ":host {\n    --translate-y: calc(-50% + var(--top));\n    --translate-x: calc(-50% + var(--left));\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 20;\n    transform: translate3d(var(--translate-x),var(--translate-y), 0);\n    pointer-events: none;\n    contain: content;\n}\n";

const Follow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = "cursor";
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
            this.attachCursor();
        }
    }
    attachScroll() {
        properties.set({ "--top": `${window.pageYOffset + this.offset}px` }, this.element);
        // @ts-ignore
        window.addEventListener("scroll", () => {
            properties.set({ "--top": `${window.pageYOffset + this.offset}px` }, this.element);
        }, { passive: true });
    }
    attachCursor() {
        // @ts-ignore
        window.addEventListener("mousemove", (e) => {
            properties.set({ "--top": `${e.clientY}px` }, this.element);
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
    get element() { return getElement(this); }
    static get watchers() { return {
        "type": ["update"],
        "distance": ["update"]
    }; }
    static get style() { return FollowCss; }
};

export { Follow as stellar_follow };
