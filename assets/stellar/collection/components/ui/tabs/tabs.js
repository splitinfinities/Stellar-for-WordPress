import { blurringEase } from '../../../utils';
export class Tabs {
    constructor() {
        this.noanimation = false;
        this.size = "medium";
        this.block = false;
        this.vertical = false;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 125,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.blur = 0;
    }
    async tabs() {
        if (!this.tabsList || this.tabsList.length === 0) {
            this.tabsList = Array.from(this.element.querySelectorAll('stellar-tab'));
        }
        return this.tabsList;
    }
    async contents() {
        this.contentsList = Array.from(document.querySelectorAll(`stellar-content[for='${this.name}']`));
        return this.contentsList;
    }
    async blurring() {
        this.ease.start();
    }
    async componentWillLoad() {
        await this.tabs();
        await this.contents();
    }
    async componentDidLoad() {
        if (!this.noanimation) {
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
                this.element.shadowRoot.querySelector('.indicator').classList.add('ready');
            }, 100);
        }
        const tabs = await this.tabs();
        const tabCount = tabs.length;
        tabs.forEach((tab, index) => {
            tab.order = index + 1;
            tab.tabCount = tabCount;
        });
    }
    render() {
        return (h("div", { class: "tab-wrap" },
            h("div", { class: "tab-list", role: "tablist" },
                h("slot", null),
                h("stellar-blur", { horizontal: !this.vertical ? this.blur : 0, vertical: this.vertical ? this.blur : 0 },
                    h("div", { class: "indicator" })))));
    }
    static get is() { return "stellar-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "behavior": {
            "type": String,
            "attr": "behavior",
            "reflectToAttr": true
        },
        "block": {
            "type": Boolean,
            "attr": "block",
            "reflectToAttr": true
        },
        "blur": {
            "state": true
        },
        "blurring": {
            "method": true
        },
        "contents": {
            "method": true
        },
        "contentsList": {
            "state": true
        },
        "ease": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "height": {
            "type": String,
            "attr": "height"
        },
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true,
            "mutable": true
        },
        "noanimation": {
            "type": Boolean,
            "attr": "noanimation",
            "reflectToAttr": true,
            "mutable": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true
        },
        "tabs": {
            "method": true
        },
        "tabsList": {
            "state": true
        },
        "vertical": {
            "type": Boolean,
            "attr": "vertical",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-tabs:**/"; }
}
