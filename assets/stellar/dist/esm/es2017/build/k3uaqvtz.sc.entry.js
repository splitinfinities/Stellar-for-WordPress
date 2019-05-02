import { h } from '../stellar-core.core.js';

class Label {
    render() {
        return h("label", { for: this.for },
            h("slot", null));
    }
    static get is() { return "stellar-label"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "for": {
            "type": String,
            "attr": "for"
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true
        },
        "underneath": {
            "type": Boolean,
            "attr": "underneath",
            "reflectToAttr": true
        }
    }; }
    static get style() { return ".sc-stellar-label-h, .sc-stellar-label-h   *.sc-stellar-label, .sc-stellar-label-h   .sc-stellar-label:after, .sc-stellar-label-h   .sc-stellar-label:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-label-h{line-height:1.3;color:var(--gray9);font-size:1.4rem;display:block;font-weight:900;letter-spacing:.05em;margin-bottom:.75em;cursor:pointer;text-transform:uppercase}[underneath].sc-stellar-label-h{margin-top:.75em;margin-bottom:0;color:var(--gray5);font-weight:600;text-transform:none}[size=small].sc-stellar-label-h{font-size:1.2rem}[size=tiny].sc-stellar-label-h{font-size:1rem}.sc-stellar-label-h   label.sc-stellar-label{all:inherit}.dark-mode.sc-stellar-label-h -no-combinator.sc-stellar-label-h, .dark-mode   .sc-stellar-label-h -no-combinator.sc-stellar-label-h{color:var(--gray0)}.dark-mode.sc-stellar-label-h -no-combinator[underneath].sc-stellar-label-h, .dark-mode   .sc-stellar-label-h -no-combinator[underneath].sc-stellar-label-h{color:var(--gray5)}"; }
}

export { Label as StellarLabel };
