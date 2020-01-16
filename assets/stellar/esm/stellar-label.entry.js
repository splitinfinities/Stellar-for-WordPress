import { r as registerInstance, h } from './index-bcfb4a9f.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-0e374e95.js';

const LabelCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;--margin:var(--ms-2);line-height:1.3;color:var(--gray9);font-size:var(--ms0);display:block;font-weight:600;letter-spacing:0.05em;margin-bottom:var(--margin);cursor:pointer}:host([underneath]){margin-top:var(--margin);margin-bottom:0;color:var(--gray5);font-weight:600;text-transform:initial}:host([size=\"tiny\"]){font-size:var(--ms-2)}:host([size=\"small\"]){font-size:var(--ms-1)}:host([size=\"medium\"]){font-size:var(--ms1)}:host([size=\"large\"]){font-size:var(--ms2)}:host label{all:inherit}:host([dark]){color:var(--gray0)}:host([underneath][dark]){color:var(--gray5)}";

const Label = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
    }
    render() {
        // @ts-ignore
        return h("label", { for: this.for }, h("slot", null));
    }
    static get style() { return LabelCss; }
};
Tunnel.injectProps(Label, ['dark']);

export { Label as stellar_label };
