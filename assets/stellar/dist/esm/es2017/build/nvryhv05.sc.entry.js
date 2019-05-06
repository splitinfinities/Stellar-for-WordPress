import { h } from '../stellar-core.core.js';

class Message {
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
    static get style() { return ".sc-stellar-message-h{display:block;position:relative;padding:0 20px;-webkit-transition:all .35s var(--ease) 0s;transition:all .35s var(--ease) 0s;width:100%;height:60px;overflow:hidden;background-color:var(--theme-base4,var(--gray5))}[striped].sc-stellar-message-h:after{content:\"\";position:absolute;width:120%;top:0;left:-10%;right:0;bottom:0;z-index:0;background:repeating-linear-gradient(45deg,var(--theme-base0),var(--theme-base0) 2rem,var(--theme-base1) 0,var(--theme-base1) 4rem);mix-blend-mode:multiply;-webkit-animation:moveStripes 10s linear infinite both;animation:moveStripes 10s linear infinite both}[visible=false].sc-stellar-message-h{height:0;overflow:hidden}[visible=false].sc-stellar-message-h   *.sc-stellar-message{opacity:0}.sc-stellar-message-h   .wrap.sc-stellar-message{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;position:relative;width:100%;max-width:1200px;height:100%;z-index:1;overflow:auto}[size=full].sc-stellar-message-h   .wrap.sc-stellar-message{min-width:30rem;max-width:100%}.sc-stellar-message-h   a.sc-stellar-message{color:#fff}.sc-stellar-message-h   a.sc-stellar-message:active, .sc-stellar-message-h   a.sc-stellar-message:hover{color:var(--theme-base1)}.sc-stellar-message-h   p.sc-stellar-message{color:var(--theme-base9)}.sc-stellar-message-h   .wrap.sc-stellar-message   stellar-asset.sc-stellar-message{font-size:2rem;color:var(--theme-base9)}.sc-stellar-message-h   button.sc-stellar-message{margin-left:auto;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#fff;cursor:pointer;width:3rem;height:3rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;outline:0}.sc-stellar-message-h   button.sc-stellar-message, .sc-stellar-message-h   button[icon].sc-stellar-message   stellar-asset.sc-stellar-message{margin-right:0;background:transparent;border:none}.sc-stellar-message-h   button[icon].sc-stellar-message   stellar-asset.sc-stellar-message{margin-left:1rem;color:#000}.dark-mode.sc-stellar-message-h -no-combinator.sc-stellar-message-h, .dark-mode   .sc-stellar-message-h -no-combinator.sc-stellar-message-h{background-color:var(--theme-base7,var(--gray7))}.dark-mode.sc-stellar-message-h -no-combinator[striped].sc-stellar-message-h:after, .dark-mode   .sc-stellar-message-h -no-combinator[striped].sc-stellar-message-h:after{background:repeating-linear-gradient(45deg,var(--theme-base7),var(--theme-base7) 2rem,var(--theme-base8) 0,var(--theme-base8) 4rem)}.dark-mode.sc-stellar-message-h -no-combinator.sc-stellar-message-h   .wrap.sc-stellar-message   stellar-asset.sc-stellar-message, .dark-mode   .sc-stellar-message-h -no-combinator.sc-stellar-message-h   .wrap.sc-stellar-message   stellar-asset.sc-stellar-message{color:var(--theme-base1)}"; }
}

export { Message as StellarMessage };
