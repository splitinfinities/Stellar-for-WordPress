import { blurringEase } from '../../../utils';
export class Progress {
    constructor() {
        this.slender = false;
        this.max = 100;
        this.indeterminate = false;
        this.editable = false;
        this.noease = false;
        this.rounded = false;
        this.value = 0;
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
            this.change.emit({
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
            return h("svg", { viewBox: "0 0 100 100" },
                h("circle", { cx: "50", cy: "50", r: "20", "stroke-width": "4", fill: "none", "stroke-linecap": "round" }));
        }
        return (h(this.wrapper, { class: "progress", horizontal: this.blur, onClick: (e) => { this.handleClick(e); } },
            h("div", { class: "status", style: { transform: `translate(${this.progress()}%, 0)` } }),
            this.secondary && h("div", { class: "secondary", style: { transform: `translate(${this.progress(true)}%, 0)` } })));
    }
    static get is() { return "stellar-progress"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "blur": {
            "state": true
        },
        "blurable": {
            "type": Boolean,
            "attr": "blurable"
        },
        "ease": {
            "state": true
        },
        "editable": {
            "type": Boolean,
            "attr": "editable",
            "reflectToAttr": true
        },
        "element": {
            "elementRef": true
        },
        "indeterminate": {
            "type": Boolean,
            "attr": "indeterminate",
            "reflectToAttr": true
        },
        "max": {
            "type": Number,
            "attr": "max",
            "reflectToAttr": true
        },
        "noease": {
            "type": Boolean,
            "attr": "noease",
            "reflectToAttr": true
        },
        "rounded": {
            "type": Boolean,
            "attr": "rounded",
            "reflectToAttr": true
        },
        "secondary": {
            "type": Number,
            "attr": "secondary",
            "reflectToAttr": true,
            "mutable": true
        },
        "slender": {
            "type": Boolean,
            "attr": "slender",
            "reflectToAttr": true
        },
        "value": {
            "type": Number,
            "attr": "value",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["observeValue"]
        },
        "wrapper": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:stellar-progress:**/"; }
}
