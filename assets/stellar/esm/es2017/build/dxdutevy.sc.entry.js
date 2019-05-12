import { h } from '../stellar-core.core.js';

class Group {
    constructor() {
        this.size = "medium";
        this.overflow = false;
        this.count = 10;
        this.extras = [];
    }
    componentWillLoad() {
        if (this.overflow) {
            if (this.element.children.length > this.count) {
                const children = Array.from(this.element.children);
                children.forEach((element, index) => {
                    if ((index + 1) > this.count) {
                        this.size = element.size;
                        this.extras.push(element);
                        this.element.removeChild(element);
                    }
                });
            }
        }
    }
    resultantExtras() {
        return this.extras.map((element) => {
            const attributes = {};
            Array.prototype.slice.call(element.attributes).forEach(function (item) {
                attributes[item.name] = item.value;
            });
            return h(element.tagName, Object.assign({}, attributes));
        });
    }
    render() {
        return [
            h("slot", null),
            this.overflow && h("stellar-group-overflow", { size: this.size, count: this.extras.length }, this.resultantExtras())
        ];
    }
    static get is() { return "stellar-group"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "count": {
            "type": Number,
            "attr": "count"
        },
        "element": {
            "elementRef": true
        },
        "extras": {
            "state": true
        },
        "overflow": {
            "type": Boolean,
            "attr": "overflow"
        },
        "size": {
            "type": String,
            "attr": "size",
            "mutable": true
        }
    }; }
    static get style() { return ".sc-stellar-group-h, .sc-stellar-group-h   *.sc-stellar-group, .sc-stellar-group-h   .sc-stellar-group:after, .sc-stellar-group-h   .sc-stellar-group:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-group-h{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;height:auto}[fill].sc-stellar-group-h{display:-ms-flexbox;display:flex;width:100%}.sc-stellar-group-h .sc-stellar-group-s > *{height:auto}.sc-stellar-group-h[fill] .sc-stellar-group-s > *{width:100%}.sc-stellar-group-h .sc-stellar-group-s > stellar-button, .sc-stellar-group-h .sc-stellar-group-s > stellar-card, .sc-stellar-group-h .sc-stellar-group-s > stellar-input{--border-radius:0;margin:0}.sc-stellar-group-h .sc-stellar-group-s > :first-of-type{margin-left:-1px!important}.sc-stellar-group-h .sc-stellar-group-s > [emphasis]{-webkit-transform:scale(1.05);transform:scale(1.05);z-index:1}.sc-stellar-group-h .sc-stellar-group-s > stellar-avatar{margin-left:2px;--drop-shadow:none;position:relative;margin-left:-.5em;--drop-shadow:.1em 0 0 #fff;-webkit-transition:all .1s ease 0s;transition:all .1s ease 0s}[overflow].sc-stellar-group-h > .sc-stellar-group:first-of-type{z-index:10}[overflow].sc-stellar-group-h > .sc-stellar-group:nth-of-type(2){z-index:9}[overflow].sc-stellar-group-h > .sc-stellar-group:nth-of-type(3){z-index:8}[overflow].sc-stellar-group-h > .sc-stellar-group:nth-of-type(4){z-index:7}[overflow].sc-stellar-group-h > .sc-stellar-group:nth-of-type(5){z-index:6}[overflow].sc-stellar-group-h > .sc-stellar-group:nth-of-type(6){z-index:5}[overflow].sc-stellar-group-h > .sc-stellar-group:nth-of-type(7){z-index:4}[overflow].sc-stellar-group-h > .sc-stellar-group:nth-of-type(8){z-index:3}[overflow].sc-stellar-group-h > .sc-stellar-group:nth-of-type(9){z-index:2}[overflow].sc-stellar-group-h > .sc-stellar-group:nth-of-type(10){z-index:1}.sc-stellar-group-h   stellar-group-overflow.sc-stellar-group{margin-left:.25em}"; }
}

class GroupOverflow {
    constructor() {
        this.size = "medium";
    }
    render() {
        return (h("div", { class: "wrapper" },
            h("div", { class: "content" },
                h("div", { class: "count" },
                    "+",
                    this.count,
                    " more"),
                h("div", { class: "spacer" })),
            h("stellar-tooltip", null,
                h("slot", null))));
    }
    static get is() { return "stellar-group-overflow"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "count": {
            "type": Number,
            "attr": "count"
        },
        "element": {
            "elementRef": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return ".sc-stellar-group-overflow-h, .sc-stellar-group-overflow-h   *.sc-stellar-group-overflow, .sc-stellar-group-overflow-h   .sc-stellar-group-overflow:after, .sc-stellar-group-overflow-h   .sc-stellar-group-overflow:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-group-overflow-h{display:inline-block;width:calc(var(--group-overflow-size) * 2);max-height:var(--group-overflow-size);font-size:var(--group-overflow-font-size);--group-overflow-size:2.2em;--group-overflow-font-size:1.8rem}[size=large].sc-stellar-group-overflow-h{--group-overflow-font-size:3.6rem}[size=medium].sc-stellar-group-overflow-h{--group-overflow-font-size:1.8rem}[size=small].sc-stellar-group-overflow-h{--group-overflow-font-size:1rem}[size=tiny].sc-stellar-group-overflow-h{--group-overflow-font-size:.8rem}.sc-stellar-group-overflow-h   .wrapper.sc-stellar-group-overflow{display:block;position:relative;z-index:0;width:100%;max-width:calc(var(--group-overflow-size) * 2);font:inherit;font-size:var(--group-overflow-font-size)}.sc-stellar-group-overflow-h   .content.sc-stellar-group-overflow{overflow:hidden;position:relative}.sc-stellar-group-overflow-h   .spacer.sc-stellar-group-overflow{display:block;padding-top:50%;width:100%;height:0}.sc-stellar-group-overflow-h   .count.sc-stellar-group-overflow{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:1;width:100%;height:100%;text-align:left;line-height:100%;padding:.2em .4em;color:var(--theme-complement9);font-size:calc(var(--group-overflow-font-size) * .825);font-weight:600}"; }
}

export { Group as StellarGroup, GroupOverflow as StellarGroupOverflow };
