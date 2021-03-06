import { r as registerInstance, h, d as getElement } from './index-bcfb4a9f.js';

const RevealCss = "stellar-reveal{contain:content}@-webkit-keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}100%{opacity:1}}@keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}100%{opacity:1}}@-webkit-keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}100%{opacity:1}}@keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}100%{opacity:1}}@-webkit-keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}100%{opacity:1}}@keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}100%{opacity:1}}@-webkit-keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}100%{opacity:1}}@keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}100%{opacity:1}}.reveal{opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-duration:500ms;animation-duration:500ms}.slide-up{-webkit-animation-name:slide-up;animation-name:slide-up}.slide-down{-webkit-animation-name:slide-down;animation-name:slide-down}.slide-right{-webkit-animation-name:slide-right;animation-name:slide-right}.slide-left{-webkit-animation-name:slide-right;animation-name:slide-right}";

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
