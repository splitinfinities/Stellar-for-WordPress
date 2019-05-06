import { h } from '../stellar-core.core.js';

class Comments {
    render() {
        return (h("section", null,
            h("slot", null)));
    }
    static get is() { return "stellar-comments"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "comments": {
            "state": true
        }
    }; }
    static get style() { return ".sc-stellar-comments-h, .sc-stellar-comments-h   *.sc-stellar-comments, .sc-stellar-comments-h   .sc-stellar-comments:after, .sc-stellar-comments-h   .sc-stellar-comments:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-comments-h{display:block}.sc-stellar-comments-h .sc-stellar-comments-s > stellar-comment{margin-top:1rem}"; }
}

export { Comments as StellarComments };
