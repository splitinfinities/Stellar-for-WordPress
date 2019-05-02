import { blurringEase, focusWithin } from '../../../utils';
focusWithin(document);
export class Dropdown {
    constructor() {
        this.position = "center";
        this.icon = false;
        this.label = "Dropdown";
        this.open = false;
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
        this.blur = 0;
    }
    componentDidLoad() {
        focusWithin(document);
    }
    observeOpen() {
        this.ease.start();
    }
    onToggle() {
        this.open = !this.open;
    }
    render() {
        return (h("div", { "aria-label": this.label, class: "dropdown", title: this.label },
            h("div", { class: "toggle" },
                h("slot", { name: "handle" }),
                !this.icon && h("stellar-asset", { name: "arrow-down", class: "caret" })),
            h("stellar-blur", { vertical: this.blur },
                h("div", { class: "list-wrap" },
                    h("ul", { class: "list" },
                        h("slot", null),
                        h("div", { class: "footer" },
                            h("slot", { name: "footer" })))))));
    }
    static get is() { return "stellar-dropdown"; }
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
        "icon": {
            "type": Boolean,
            "attr": "icon"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "open": {
            "type": Boolean,
            "attr": "open",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["observeOpen"]
        },
        "position": {
            "type": String,
            "attr": "position",
            "reflectToAttr": true,
            "mutable": true
        },
        "timeout": {
            "state": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-dropdown:**/"; }
}
