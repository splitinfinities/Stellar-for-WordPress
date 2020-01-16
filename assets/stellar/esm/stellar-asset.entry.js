import { r as registerInstance, h } from './index-d1f18b4d.js';

const AssetCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block;-webkit-transform-origin:.5em .5em;transform-origin:.5em .5em}:host .icon-wrap{display:-ms-flexbox;display:flex}";

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
