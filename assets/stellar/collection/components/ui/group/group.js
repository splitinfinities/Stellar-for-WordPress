export class Group {
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
    static get style() { return "/**style-placeholder:stellar-group:**/"; }
}
