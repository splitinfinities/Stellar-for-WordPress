import { h } from '../stellar-core.core.js';

class CopyWrap {
    constructor() {
        this.align = "left";
        this.full = false;
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "copy-wrap"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "align": {
            "type": String,
            "attr": "align",
            "reflectToAttr": true
        },
        "full": {
            "type": Boolean,
            "attr": "full",
            "reflectToAttr": true
        }
    }; }
    static get style() { return ".sc-copy-wrap-h, .sc-copy-wrap-h   *.sc-copy-wrap, .sc-copy-wrap-h   .sc-copy-wrap:after, .sc-copy-wrap-h   .sc-copy-wrap:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-copy-wrap-h{display:block}[align=left].sc-copy-wrap-h{text-align:left!important}.sc-copy-wrap-h[align=left] .sc-copy-wrap-s > *{margin-right:auto!important}[align=center].sc-copy-wrap-h{text-align:center!important}.sc-copy-wrap-h[align=center] .sc-copy-wrap-s > *{margin-right:auto!important;margin-left:auto!important}[align=right].sc-copy-wrap-h{text-align:right!important}.sc-copy-wrap-h[align=right] .sc-copy-wrap-s > *{margin-left:auto!important}.sc-copy-wrap-h .sc-copy-wrap-s > stellar-button{display:inline-block}.sc-copy-wrap-h .sc-copy-wrap-s > img, .sc-copy-wrap-h .sc-copy-wrap-s > stellar-code-block{margin-bottom:2rem}.sc-copy-wrap-h .sc-copy-wrap-s > :last-child{margin-bottom:0}.sc-copy-wrap-h[full] .sc-copy-wrap-s > *{max-width:100%}.sc-copy-wrap-h .sc-copy-wrap-s > ol, .sc-copy-wrap-h .sc-copy-wrap-s > ul{margin:.25em 0;display:inline-block;text-align:left}.sc-copy-wrap-h .sc-copy-wrap-s > li{margin-top:.5em}"; }
}

export { CopyWrap };
