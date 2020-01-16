import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';

const RevealCss = "stellar-reveal {\n  contain: content;\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(var(--distance));\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes slide-down {\n  0% {\n    transform: translateY(var(--distance));\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes slide-right {\n  0% {\n    transform: translateX(var(--distance));\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes slide-left {\n  0% {\n    transform: translateX(var(--distance));\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.reveal {\n  opacity: 0;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n  animation-duration: 500ms;\n}\n\n.slide-up {\n  animation-name: slide-up;\n}\n\n.slide-down {\n  animation-name: slide-down;\n}\n\n.slide-right {\n  animation-name: slide-right;\n}\n\n.slide-left {\n  animation-name: slide-right;\n}\n";

const Reveal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Direction the element moves when animating in
         */
        this.direction = 'up';
        /**
         * How long to delay the animation (ms)
         */
        this.delay = 0;
        /**
         * How long the animation runs (ms)
         */
        this.duration = 500;
        /**
         * How far the element moves in the animation (% of element width/height)
         */
        this.animationDistance = '30%';
        /**
         * How much of the element must be visible before it animates (% of element height)
         */
        this.triggerDistance = '33%';
    }
    componentDidLoad() {
        const animationDistance = this.direction === 'right' || this.direction === 'down' ? '-' + this.animationDistance : this.animationDistance;
        this.element.querySelector('.reveal').style.setProperty('--distance', animationDistance);
    }
    in() {
        this.element.querySelector('.reveal').classList.add(`slide-${this.direction}`);
    }
    render() {
        return (h("div", { class: "reveal", style: {
                animationDuration: `${this.duration}ms`,
                animationDelay: `${this.delay}ms`
            } }, h("slot", null), h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), margin: this.triggerDistance })));
    }
    get element() { return getElement(this); }
    static get style() { return RevealCss; }
};

export { Reveal as stellar_reveal };
