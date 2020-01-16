import { r as registerInstance, h } from './index-fa9baa86.js';

const AssetCss = ":host, :host *, :host *:before, :host *:after {\n\tbox-sizing: border-box;\n}\n\n:host {\n  contain: content;\n\tdisplay: block;\n\ttransform-origin: .5em .5em;\n}\n\n:host .icon-wrap {\n\tdisplay: flex;\n}\n\n/*\n:host([block]),\n:host([block]) stellar-icon,\n:host([block]) stellar-icon .icon-inner,\n:host([block]) stellar-icon .icon-inner svg {\n\twidth: 100%;\n\theight: auto;\n} */\n";

const Asset = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = "person";
        this.language = "ios-";
        this.block = false;
    }
    componentWillLoad() {
        this.ariaLabel = this.name
            .replace('ios-', '')
            .replace('md-', '')
            .replace(/\-/g, ' ');
    }
    render() {
        return (h("div", { class: "icon-wrap" }, h("ion-icon", { src: this.src, name: this.name, ariaLabel: this.ariaLabel, "aria-label": this.ariaLabel })));
    }
    static get style() { return AssetCss; }
};

export { Asset as stellar_asset };
