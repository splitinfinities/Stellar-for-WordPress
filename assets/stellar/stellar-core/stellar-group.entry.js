import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';

class Group {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get element() { return getElement(this); }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n:host {\n	display: -ms-inline-flexbox;\n	display: inline-flex;\n	-ms-flex-align: stretch;\n	align-items: stretch;\n	-ms-flex-pack: center;\n	justify-content: center;\n	height: auto;\n}\n\n:host([fill]) {\n	display: -ms-flexbox;\n	display: flex;\n	width: 100%;\n}\n\n:host ::slotted(*) {\n	height: auto;\n}\n\n:host([fill]) ::slotted(*) {\n	width: 100%;\n}\n\n:host ::slotted(stellar-button),\n:host ::slotted(stellar-input),\n:host ::slotted(stellar-card) {\n	--border-radius: 0;\n	margin: 0;\n}\n\n:host ::slotted(*:nth-of-type(1)) {\n	margin-left: -1px !important;\n}\n\n:host ::slotted([emphasis]) {\n	-webkit-transform: scale(1.05);\n	transform: scale(1.05);\n	z-index: 1;\n}\n\n:host ::slotted(stellar-avatar) {\n	margin-left: 2px;\n	--drop-shadow: none;\n}\n\n:host ::slotted(stellar-avatar) {\n	position: relative;\n	margin-left: -0.5em;\n	--drop-shadow: .1em 0 0 white;\n	-webkit-transition: all 100ms ease 0s;\n	transition: all 100ms ease 0s;\n}\n\n:host([overflow]) > *:nth-of-type(1) { z-index: 10; }\n:host([overflow]) > *:nth-of-type(2) { z-index: 9; }\n:host([overflow]) > *:nth-of-type(3) { z-index: 8; }\n:host([overflow]) > *:nth-of-type(4) { z-index: 7; }\n:host([overflow]) > *:nth-of-type(5) { z-index: 6; }\n:host([overflow]) > *:nth-of-type(6) { z-index: 5; }\n:host([overflow]) > *:nth-of-type(7) { z-index: 4; }\n:host([overflow]) > *:nth-of-type(8) { z-index: 3; }\n:host([overflow]) > *:nth-of-type(9) { z-index: 2; }\n:host([overflow]) > *:nth-of-type(10) { z-index: 1; }\n\n:host stellar-group-overflow {\n	margin-left: 0.25em;\n}"; }
}

export { Group as stellar_group };
