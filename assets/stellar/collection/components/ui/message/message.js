export class Message {
    constructor() {
        this.closable = true;
        this.remember = true;
        this.name = "stellar";
        this.shown = true;
        this.striped = false;
        this.theme = "gray";
    }
    componentWillLoad() {
        if (this.remember) {
            const string = this.element.innerHTML;
            this.name = this.name + "_" + btoa(unescape(encodeURIComponent(string)));
            if (localStorage.getItem(this.name)) {
                this.shown = !(localStorage.getItem(this.name) === "hidden");
            }
        }
        switch (this.type) {
            case "alert":
                this.theme = "yellow";
                break;
            case "error":
                this.theme = "red";
                break;
            case "info":
                this.theme = "cyan";
                break;
            case "success":
                this.theme = "green";
                break;
        }
    }
    hostData() {
        return {
            class: `theme-${this.theme} ${this.shown ? "db" : "dn"}`
        };
    }
    handleClose() {
        this.shown = false;
        if (this.remember) {
            localStorage.setItem(this.name, "hidden");
        }
    }
    render() {
        return (h("div", { class: "wrap" },
            h("slot", null),
            h("button", { "aria-label": "Close", onClick: () => { this.handleClose(); } },
                h("stellar-asset", { name: "close" }))));
    }
    static get is() { return "stellar-message"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "closable": {
            "type": Boolean,
            "attr": "closable"
        },
        "element": {
            "elementRef": true
        },
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true,
            "mutable": true
        },
        "remember": {
            "type": Boolean,
            "attr": "remember"
        },
        "shown": {
            "type": Boolean,
            "attr": "shown",
            "reflectToAttr": true,
            "mutable": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true
        },
        "striped": {
            "type": Boolean,
            "attr": "striped",
            "reflectToAttr": true
        },
        "theme": {
            "state": true
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-message:**/"; }
}
