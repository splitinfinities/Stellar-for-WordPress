import { c as registerInstance, h as createEvent, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import './chunk-aefb00c1.js';
import { a as blurringEase } from './chunk-15cea9da.js';
import './chunk-f26db59a.js';

class Progress {
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
        this.valueChange = createEvent(this, "valueChange", 7);
    }
    componentWillLoad() {
        if (!this.blurable) {
            this.wrapper = "div";
        }
    }
    observeValue() {
        if (this.blurable) {
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
            console.log(`bounding: ${bounding}`);
            console.log(`widthClicked: ${widthClicked}`);
            console.log(`totalWidth: ${totalWidth}`);
            console.log(`max: ${this.max}`);
            console.log(`calc: ${calc}`);
            console.log(`rounded: ${rounded}`);
            if (this.rounded) {
                rounded = Math.ceil(rounded);
            }
            this.value = rounded;
            this.valueChange.emit({
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
        // @ts-ignore
        return (h(this.wrapper, { class: "progress", horizontal: this.blur, onClick: (e) => { this.handleClick(e); } }, h("div", { class: "status", style: { transform: `translate(${this.progress()}%, 0)` } }), this.secondary && h("div", { class: "secondary", style: { transform: `translate(${this.progress(true)}%, 0)` } })));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "value": ["observeValue"]
    }; }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  --border-radius: 0.3rem;\n}\n\n:host .blur-content {\n  display: block;\n  height: 100%;\n}\n\n:host([editable]) {\n  cursor: pointer;\n}\n\n:host .progress {\n  display: block;\n  position: relative;\n  -webkit-transition: all 0.25s var(--ease) 0ms;\n  transition: all 0.25s var(--ease) 0ms;\n  background: var(--gray0);\n  width: 100%;\n  height: 0.6rem;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n}\n\n:host([editable]:hover) .progress {\n  height: 2.4rem;\n}\n\n:host .status,\n:host .secondary {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: -100%;\n  -webkit-transition: all 0.35s var(--ease, ease-in-out) 0ms;\n  transition: all 0.35s var(--ease, ease-in-out) 0ms;\n  background: var(--theme-base5, var(--gray5));\n  width: 100%;\n  z-index: 2;\n}\n\n:host .secondary {\n  background: var(--theme-base3, var(--gray3));\n  z-index: 1;\n}\n\n:host([slender]) .progress {\n  border: 0;\n  height: 0.2rem;\n}\n\n:host([slender][editable]:hover) .progress {\n  height: 0.4rem;\n}\n\n:host([noease]) .progress,\n:host([noease]) .status,\n:host([noease]) .secondary {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n\n:host-context(.dark-mode):host .progress {\n  background: var(--theme-base9)\n}\n\n\n:host-context(.dark-mode):host .secondary {\n  background: var(--theme-base7, var(--gray7));\n  z-index: 1;\n}"; }
}

export { Progress as stellar_progress };
