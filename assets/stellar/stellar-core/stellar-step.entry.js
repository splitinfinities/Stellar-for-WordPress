import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';

const StepCss = "stellar-step {\n  display: block;\n  contain: content;\n  width: 100%;\n  font-weight: bold;\n  height: inherit;\n  position: relative;\n  text-decoration: none;\n  cursor: default;\n  margin-right: calc(-2rem + 2px);\n  clip-path: polygon(calc(100% - 2rem) 0%, 100% 50%, calc(100% - 2rem) 100%, 0% 100%, 2rem 50%, 0% 0%);\n}\n\nstellar-step button {\n  width: 100%;\n  height: 100%;\n  appearance: none;\n  padding: 0;\n  border: 0;\n  position: relative;\n  background: var(--theme-base5);\n  cursor: pointer;\n}\n\nstellar-step button:hover,\nstellar-step button:focus {\n  background: var(--theme-base6);\n}\n\nstellar-step stellar-label {\n  margin: 0;\n  color: white;\n  z-index: 1;\n  position: relative;\n  transition: all 150ms ease 0s;\n}\n\nstellar-steps stellar-step:first-of-type {\n  clip-path: polygon(calc(100% - 2rem) 0%, 100% 50%, calc(100% - 2rem) 100%, 0% 100%, 0% 0%);\n}\n\nstellar-steps stellar-step:last-of-type {\n  clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 0% 100%, 2rem 50%, 0% 0%);\n}\n\nstellar-step .title {\n  z-index: 1;\n}\n\nstellar-step .title::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\nstellar-step button::after {\n  content: \"\";\n  position: absolute;\n  width: 140%;\n  top: 0;\n  left: -30%;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n  opacity: 0;\n  background: repeating-linear-gradient(45deg, var(--theme-base1), var(--theme-base1) 2rem, var(--theme-base2) 0, var(--theme-base2) 4rem);\n  mix-blend-mode: multiply;\n  animation: moveStripes 10s linear both infinite;\n}\n\nstellar-step[open] button::after {\n  opacity: 1;\n}\n\nstellar-step[open] stellar-label {\n  transform: scale(1.25);\n}\n\n@keyframes moveStripes {\n  from {\n   background-position-x: 0;\n  }\n\n  to {\n   background-position-x: 5.5rem;\n  }\n}\n";

const Step = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = "#";
        this.disabled = false;
        this.open = false;
        this.contentChange = createEvent(this, "contentChange", 7);
    }
    componentWillLoad() {
        this.parent = this.element.closest("stellar-steps");
    }
    handleClick() {
        this.parent.steps().forEach((element) => {
            element.open = false;
        });
        this.open = true;
        this.contentChange.emit({
            parent: this.parent,
            name: this.href.replace(/[#]/g, "")
        });
    }
    renderTitle() {
        return (h("span", { class: "title" }, h("slot", null)));
    }
    render() {
        return (h("button", { role: "tab", "aria-selected": this.open ? "true" : "false", "aria-setsize": this.tabCount, "aria-posinset": this.order, tabindex: "0", class: "step-button", onClick: () => this.handleClick() }, h("stellar-label", null, this.renderTitle())));
    }
    get element() { return getElement(this); }
    static get style() { return StepCss; }
};

export { Step as stellar_step };
