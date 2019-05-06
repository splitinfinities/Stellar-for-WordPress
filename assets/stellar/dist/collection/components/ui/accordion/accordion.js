import { blurringEase, properties } from '../../../utils';
export class Accordion {
    constructor() {
        this.open = false;
        this.tight = false;
        this.name = "accordion";
        this.label = "More Details";
        this.blur = 0;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 250,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.els = [];
    }
    componentWillLoad() {
        var callback = (mutationsList) => {
            for (var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    this.refresh();
                }
            }
        };
        this.observer = new MutationObserver(callback);
    }
    componentDidLoad() {
        this.expander = this.element.shadowRoot.querySelector(".expander");
        this.refresh();
        this.attachObserver();
        this.els = Array.from(this.element.querySelectorAll("*:not([slot='label'])"));
        this.updateTabIndex();
    }
    async refresh() {
        properties.set({
            "--accordion-height": `${this.expander.scrollHeight}px`
        }, this.element);
    }
    attachObserver() {
        this.observer.observe(this.element, { childList: true, subtree: true });
    }
    componentWillUnload() {
        this.observer.disconnect();
    }
    currentClasses() {
        return `expander ${this.openClass()}`;
    }
    openClass() {
        return (this.open) ? "open" : "";
    }
    updateTabIndex() {
        this.els.forEach((element) => {
            element.tabIndex = !this.open ? -1 : 0;
        });
    }
    handleClick() {
        this.open = !this.open;
        this.ease.start();
        this.updateTabIndex();
    }
    render() {
        return (h("div", { class: "wrap" },
            h("div", { class: "button-wrap", title: "Selecting this opens the content of this accordion", onClick: () => this.handleClick() },
                h("slot", { name: "label" },
                    h("stellar-button", { id: "button", tag: "button", ghost: true, label: this.label }, this.label)),
                h("stellar-asset", { class: "chevron", name: "arrow-down" })),
            h("stellar-blur", { vertical: this.blur },
                h("div", { class: this.currentClasses(), tabIndex: !this.open ? -1 : 0 },
                    h("slot", null)))));
    }
    static get is() { return "stellar-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "blur": {
            "state": true
        },
        "ease": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "els": {
            "state": true
        },
        "expander": {
            "state": true
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "observer": {
            "state": true
        },
        "open": {
            "type": Boolean,
            "attr": "open",
            "reflectToAttr": true,
            "mutable": true
        },
        "refresh": {
            "method": true
        },
        "tight": {
            "type": Boolean,
            "attr": "tight",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-accordion:**/"; }
}
