import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import './css-custom-properties.min-d9d14253.js';
import { b as blurringEase } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';

const ProgressCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  contain: content;\n  display: block;\n  position: relative;\n  overflow: hidden;\n  --border-radius: 0.3rem;\n  --time: 124;\n  --negative-time: -124;\n}\n\n:host .blur-content {\n  display: block;\n  height: 100%;\n}\n\n:host([editable]) {\n  cursor: pointer;\n}\n\n:host .progress {\n  display: block;\n  position: relative;\n  transition: all 0.25s var(--ease) 0ms;\n  background: var(--gray0);\n  width: 100%;\n  height: 0.6rem;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n}\n\n:host([editable]:hover) .progress {\n  height: 2.4rem;\n}\n\n:host .status,\n:host .secondary {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: -100%;\n  transition: all 0.35s var(--ease, ease-in-out) 0ms;\n  background: var(--theme-base5, var(--gray5));\n  width: 100%;\n  z-index: 2;\n}\n\n:host .secondary {\n  background: var(--theme-base3, var(--gray3));\n  z-index: 1;\n}\n\n:host([slender]) .progress {\n  border: 0;\n  height: 0.2rem;\n}\n\n:host([slender][editable]:hover) .progress {\n  height: 0.4rem;\n}\n\n:host([noease]) .progress,\n:host([noease]) .status,\n:host([noease]) .secondary {\n  transition: none !important;\n}\n\n:host([indeterminate]) {\n  height: 100px;\n  width: 100px;\n}\n\n:host([indeterminate]) svg {\n  transform: rotate(0deg);\n  stroke: var(--theme-base5);\n  animation: rotate var(--ease) 9.2s infinite;\n}\n\n:host([indeterminate]) circle {\n  stroke-dasharray: var(--time);\n  stroke-dashoffset: var(--time);\n  animation: load var(--ease) 2.3s infinite;\n}\n\n:host([dark]) .progress {\n  background: var(--theme-base9);\n}\n\n:host([dark]) .secondary {\n  background: var(--theme-base7, var(--gray7));\n  z-index: 1;\n}\n\n:host([dark]) circle {\n  animation: load-dark var(--ease) 2.3s infinite;\n}\n\n@keyframes load {\n  0% {\n    stroke: var(--theme-complement7);\n  }\n\n  50% {\n    stroke-dashoffset: 0;\n    stroke: var(--theme-base5);\n  }\n\n  100% {\n    stroke-dashoffset: var(--negative-time);\n    stroke: var(--theme-base3);\n  }\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  25% {\n    transform: rotate(90deg);\n  }\n\n  50% {\n    transform: rotate(180deg);\n  }\n\n  75% {\n    transform: rotate(270deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes load-dark {\n  0% {\n    stroke: var(--theme-complement5);\n  }\n\n  50% {\n    stroke-dashoffset: 0;\n    stroke: var(--theme-base5);\n  }\n\n  75% {\n    stroke: var(--theme-base7);\n  }\n\n  100% {\n    stroke-dashoffset: var(--negative-time);\n    stroke: var(--theme-complement7);\n  }\n}\n";

const Progress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Renders if this element is slender or not
         */
        this.slender = false;
        /**
         * Sets the maximum cap for steps in the progress bar
         */
        this.max = 100;
        /**
         * Sets the maximum cap for steps in the progress bar
         */
        this.indeterminate = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        /**
         * Allows the progress bar to be clicked on, to help the user to navigate through the progressing content.
         */
        this.editable = false;
        /**
         * eliminates the easing in the css so you can apply value updates without jitter.
         */
        this.noease = false;
        /**
         * eliminates the easing in the css so you can apply value updates without jitter.
         */
        this.rounded = false;
        /**
         * Sets the value of the progress bar
         */
        this.value = 0;
        /**
         * Sets the value of the progress bar
         */
        this.secondary = 0;
        this.blurable = true;
        this.wrapper = "stellar-blur";
        this.blur = 0;
        this.ease = blurringEase({
            end: 20,
            start: -1,
            duration: 200,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.update = createEvent(this, "update", 7);
    }
    componentWillLoad() {
        if (!this.blurable) {
            this.wrapper = "div";
        }
    }
    observeValue() {
        if (!this.indeterminate && this.blurable) {
            this.ease.start();
        }
    }
    handleClick(e) {
        if (this.editable) {
            var bounding = this.element.getBoundingClientRect();
            var widthClicked = e.pageX - bounding.left;
            var totalWidth = bounding.width;
            var calc = (widthClicked / totalWidth * this.max);
            var rounded = Math.round(calc * 1e2) / 1e2;
            if (this.rounded) {
                rounded = Math.ceil(rounded);
            }
            this.value = rounded;
            this.update.emit({
                value: this.value
            });
        }
    }
    progress(secondary) {
        if (secondary) {
            let progress = (this.secondary / this.max) * 100;
            progress = progress < 100 ? progress : 100;
            progress = progress > 0 ? progress : 0;
            return progress;
        }
        else {
            let progress = (this.value / this.max) * 100;
            progress = progress < 100 ? progress : 100;
            progress = progress > 0 ? progress : 0;
            return progress;
        }
    }
    render() {
        if (this.indeterminate) {
            return h("svg", { viewBox: "0 0 100 100" }, h("circle", { cx: "50", cy: "50", r: "20", "stroke-width": "4", fill: "none", "stroke-linecap": "round" }));
        }
        // @ts-ignore
        return (h(this.wrapper, { class: "progress", horizontal: this.blur, onClick: (e) => { this.handleClick(e); } }, h("div", { class: "status", style: { transform: `translate(${this.progress()}%, 0)` } }), this.secondary ? h("div", { class: "secondary", style: { transform: `translate(${this.progress(true)}%, 0)` } }) : ""));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "value": ["observeValue"]
    }; }
    static get style() { return ProgressCss; }
};
Tunnel.injectProps(Progress, ['dark']);

export { Progress as stellar_progress };
