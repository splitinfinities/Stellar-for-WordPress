import { properties } from '../../../utils';
export class Follow {
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
    static get style() { return "/**style-placeholder:stellar-follow:**/"; }
}
