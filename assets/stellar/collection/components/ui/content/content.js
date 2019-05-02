import { blurringEase } from '../../../utils';
export class Content {
    constructor() {
        this.open = false;
        this.ease = blurringEase({
            end: 6,
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
        this.blur = 0;
    }
    async handleActive(event) {
        this.parent = event.detail.parent;
        const contents = await this.parent.contents();
        if (event.detail.name !== this.element.id) {
            contents.forEach((element) => {
                element.open = element.id === event.detail.name;
                if (element.open) {
                    this.ease.start();
                }
            });
        }
    }
    render() {
        return (h("stellar-blur", { class: "wrap", role: "tabpanel", vertical: this.blur, "aria-hidden": !this.open ? "true" : "false" },
            h("slot", null)));
    }
    static get is() { return "stellar-content"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "behavior": {
            "type": String,
            "attr": "behavior",
            "reflectToAttr": true,
            "mutable": true
        },
        "blur": {
            "state": true
        },
        "ease": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "for": {
            "type": String,
            "attr": "for",
            "reflectToAttr": true,
            "mutable": true
        },
        "open": {
            "type": Boolean,
            "attr": "open",
            "reflectToAttr": true,
            "mutable": true
        },
        "parent": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "document:contentChange",
            "method": "handleActive"
        }]; }
    static get style() { return "/**style-placeholder:stellar-content:**/"; }
}
