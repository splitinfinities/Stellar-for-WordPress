import { c as registerInstance, d as h } from './stellar-core-d63b686e.js';

class Asset {
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
        return (h("div", { class: "icon-wrap" }, h("ion-icon", { src: !this.name && this.src ? this.src : undefined, name: !this.src && this.name ? this.language + this.name : undefined, ariaLabel: this.ariaLabel, "aria-label": this.ariaLabel })));
    }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n}\n\n:host {\n	display: block;\n	-webkit-transform-origin: .5em .5em;\n	transform-origin: .5em .5em;\n}\n\n:host .icon-wrap {\n	display: -ms-flexbox;\n	display: flex;\n}\n\n:host([block]),\n:host([block]) ion-icon,\n:host([block]) ion-icon .icon-inner,\n:host([block]) ion-icon .icon-inner svg {\n	width: 100%;\n	height: auto;\n}"; }
}

export { Asset as stellar_asset };
