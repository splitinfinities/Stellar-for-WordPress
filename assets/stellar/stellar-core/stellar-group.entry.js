import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';

const GroupCss = ":host, :host *, :host *:before, :host *:after {\n    box-sizing: border-box;\n}\n\n:host {\n\tdisplay: inline-flex;\n\talign-items: stretch;\n\tjustify-content: center;\n\theight: auto;\n\tcontain: content;\n\tmin-height: calc(var(--ms6) - 0.1rem);\n}\n\n:host([fill]) {\n\tdisplay: flex;\n\twidth: 100%;\n}\n\n:host([size=\"tiny\"]) {\n\tmin-height: calc(var(--ms4) - 0.1rem);\n}\n\n:host([size=\"small\"]) {\n\tmin-height: calc(var(--ms5) - 0.1rem);\n}\n\n:host([size=\"medium\"]) {\n\tmin-height: calc(var(--ms7) - 0.2rem);\n}\n\n:host([size=\"large\"]) {\n\tmin-height:var(--ms7);\n}\n\n:host ::slotted(*) {\n\talign-self: stretch;\n}\n\n:host([fill]) ::slotted(*) {\n\twidth: 100%;\n}\n\n:host ::slotted(stellar-button),\n:host ::slotted(stellar-input),\n:host ::slotted(stellar-card) {\n\t--border-radius: 0;\n\tmargin: 0;\n}\n\n:host ::slotted(*:nth-of-type(1)) {\n\tmargin-left: -1px !important;\n}\n\n:host ::slotted([emphasis]) {\n\ttransform: scale(1.05);\n\tz-index: 1;\n}\n\n:host ::slotted(stellar-avatar) {\n\tmargin-left: 2px;\n\t--drop-shadow: none;\n}\n\n:host ::slotted(stellar-avatar) {\n\tposition: relative;\n\tmargin-left: -0.5em;\n\t--drop-shadow: .1em 0 0 white;\n\ttransition: all 100ms ease 0s;\n}\n\n:host([overflow]) > *:nth-of-type(1) { z-index: 10; }\n:host([overflow]) > *:nth-of-type(2) { z-index: 9; }\n:host([overflow]) > *:nth-of-type(3) { z-index: 8; }\n:host([overflow]) > *:nth-of-type(4) { z-index: 7; }\n:host([overflow]) > *:nth-of-type(5) { z-index: 6; }\n:host([overflow]) > *:nth-of-type(6) { z-index: 5; }\n:host([overflow]) > *:nth-of-type(7) { z-index: 4; }\n:host([overflow]) > *:nth-of-type(8) { z-index: 3; }\n:host([overflow]) > *:nth-of-type(9) { z-index: 2; }\n:host([overflow]) > *:nth-of-type(10) { z-index: 1; }\n\n:host stellar-group-overflow {\n\tmargin-left: 0.25em;\n}\n";

const Group = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.overflow = false;
        this.count = 10;
        this.extras = [];
    }
    componentWillLoad() {
        this.sizes();
        this.buttons();
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
    sizes() {
        const kids = Array.from(this.element.children);
        if (kids) {
            kids.forEach((kid) => {
                kid.size = this.size;
            });
        }
    }
    buttons() {
        const buttons = this.element.querySelectorAll('stellar-button');
        if (buttons) {
            buttons.forEach((button) => {
                button.classList.add('h-auto');
            });
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
    static get style() { return GroupCss; }
};

export { Group as stellar_group };
