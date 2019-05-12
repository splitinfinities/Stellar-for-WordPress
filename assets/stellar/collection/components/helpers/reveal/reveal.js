import properties from 'css-custom-properties';
import delay from 'await-delay';
export class Scatter {
    constructor() {
        this.animation = "fadeInUp";
        this.outAnimation = "fadeOut";
        this.delay = 100;
        this.timing = 50;
        this.active = false;
    }
    componentWillLoad() {
        this.children = Array.from(this.element.children);
    }
    componentDidLoad() {
        this.addIntersectionObserver();
    }
    addIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    setTimeout(() => {
                        this.active = true;
                        this.in();
                    }, 350);
                    this.removeIntersectionObserver();
                }
            }, {
                rootMargin: '50%',
                threshold: [0]
            });
            this.io.observe(this.element);
        }
        else {
            setTimeout(() => {
                this.in();
            }, 300);
        }
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    async calculateTiming() {
        const time = 1000 + (this.children.length * this.delay);
        await delay(time);
    }
    async out() {
        properties.set({
            "--animation": this.outAnimation
        }, this.element);
        this.children.forEach((element, index) => {
            element.style.setProperty('animation-delay', `${this.delay * index}ms`);
            element.style.setProperty('animation-timing', `${this.timing}ms`);
        });
        return await this.calculateTiming();
    }
    async in() {
        properties.set({
            "--animation": this.animation
        }, this.element);
        this.children.forEach((element, index) => {
            element.style.setProperty('animation-delay', `${this.delay * index}ms`);
            element.style.setProperty('animation-timing', `${this.timing}ms`);
        });
        return await this.calculateTiming();
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "stellar-reveal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": Boolean,
            "attr": "active",
            "reflectToAttr": true,
            "mutable": true
        },
        "animation": {
            "type": String,
            "attr": "animation",
            "reflectToAttr": true
        },
        "children": {
            "state": true
        },
        "delay": {
            "type": Number,
            "attr": "delay",
            "reflectToAttr": true
        },
        "element": {
            "elementRef": true
        },
        "in": {
            "method": true
        },
        "io": {
            "state": true
        },
        "out": {
            "method": true
        },
        "outAnimation": {
            "type": String,
            "attr": "out-animation",
            "reflectToAttr": true
        },
        "timing": {
            "type": Number,
            "attr": "timing",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-reveal:**/"; }
}
