import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import './chunk-aefb00c1.js';
import { a as blurringEase } from './chunk-15cea9da.js';
import './chunk-f26db59a.js';

class Content {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = false;
        this.ease = blurringEase({
            end: 6,
            start: -1,
            duration: 200,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.blur = 0;
    }
    async handleActive(event) {
        this.parent = event.detail.parent;
        const contents = await this.parent.contents();
        if (event.detail.name !== this.element.id) {
            contents.forEach((element) => {
                element.open = element.id === event.detail.name;
                if (element.open) {
                    this.ease.start();
                }
            });
        }
    }
    render() {
        return (h("stellar-blur", { class: "wrap", role: "tabpanel", vertical: this.blur, "aria-hidden": !this.open ? "true" : "false" }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  display: none;\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n  -webkit-animation-timing-function: var(--ease);\n  animation-timing-function: var(--ease);\n  -webkit-animation-duration: 350ms;\n  animation-duration: 350ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-transform: translate3d(0, 15px, 0);\n  transform: translate3d(0, 15px, 0);\n  opacity: 0;\n}\n\n:host([open]) {\n  display: block;\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n\@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 15px, 0);\n    transform: translate3d(0, 15px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n\@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 15px, 0);\n    transform: translate3d(0, 15px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}"; }
}

export { Content as stellar_content };
