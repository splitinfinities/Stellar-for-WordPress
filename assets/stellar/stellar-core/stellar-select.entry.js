import { c as registerInstance, h as createEvent, d as h, f as getElement } from './stellar-core-d63b686e.js';
import { a as delay } from './chunk-4a053c09.js';

class Select {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = "select";
        this.placeholder = "Choose something...";
        this.required = false;
        this.open = false;
        this.verbiage = "selection";
        this.valueLabel = undefined;
        this.blur = 0;
        this.clear_confirm = false;
        this.values = [];
        this.change = createEvent(this, "change", 7);
    }
    componentWillLoad() {
        if (this.multiple) {
            this.value = [];
        }
        this.listen_to_values();
    }
    async componentDidLoad() {
        this.current = this.element.shadowRoot.querySelector('stellar-item.current');
        if (this.multiple) {
            const options = await this.option_elements();
            // @ts-ignore
            options.forEach((element) => {
                element.multiple = true;
            });
        }
        if (this.default) {
            if (typeof this.default === "object" && this.default.constructor.name === "Array") {
                this.default.forEach((value) => {
                    // @ts-ignore
                    this.element.querySelector(`stellar-item[value="${value}"]`).select_item();
                });
            }
            else {
                // @ts-ignore
                this.element.querySelector(`stellar-item[value="${this.default}"]`).select_item();
            }
        }
    }
    async clearValue() {
        if (this.clear_confirm) {
            await delay(100);
            this.clear_confirm = false;
            this.value = [];
            this.values = [];
            const options = await this.option_elements();
            Array.from(options).forEach((element) => {
                element.selected = false;
            });
            this.change.emit(this.value);
        }
        else {
            this.clear_confirm = true;
        }
    }
    handleOpenChange() {
        // @ts-ignore
        this.element.shadowRoot.querySelector('button.select-title').focus();
    }
    async handleMultipleChange(value) {
        const options = await this.option_elements();
        // @ts-ignore
        options.forEach((element) => {
            element.multiple = value;
        });
    }
    async mountedHandler(event) {
        const data = event.detail;
        if (this.multiple) {
            const option_elements = await this.option_elements();
            let values = [];
            // @ts-ignore
            option_elements.forEach((option) => {
                option.selectable = true;
                if (this.value && this.value.includes(option.value) && !data.element.selected) {
                    option.selected = true;
                }
                if (option.selected) {
                    values.push(option.value);
                }
            });
            this.value = values;
        }
        else {
            this.value = data.element.selected ? data.element.value : this.value;
            if (this.value) {
                const options = await this.option_elements();
                // @ts-ignore
                options.forEach((element) => {
                    element.selectable = true;
                    if (this.value === element.value) {
                        element.selected = true;
                    }
                });
            }
        }
    }
    async selectionChangedHandler(event) {
        const data = event.detail;
        if (this.multiple) {
            data.selected = !data.selected;
            const option_elements = await this.option_elements();
            let values = [];
            // @ts-ignore
            option_elements.forEach((option) => {
                if (this.value && this.value.includes(option.value) && data.value !== option.value) {
                    option.selected = true;
                }
                if (option.selected) {
                    values.push(option.value);
                }
            });
            this.value = values;
            this.change.emit(this.value);
        }
        else {
            if (!data.element.classList.contains("current")) {
                const options = await this.option_elements();
                // @ts-ignore
                options.forEach((element) => {
                    element.selected = false;
                });
                data.selected = true;
                this.value = data.value;
                this.change.emit(this.value);
                if (this.current) {
                    this.current.apply(await data.data());
                }
                setTimeout(() => {
                    this.open = false;
                }, 200);
            }
        }
    }
    selectedFocusChangedHandler() {
        this.focused = true;
    }
    selectedBlurChangedHandler() {
        this.focused = false;
    }
    handleTitleFocus() {
        this.focused = true;
    }
    handleTitleBlur() {
        this.focused = false;
    }
    handleNotClick(e) {
        if (e.target !== this.element && !this.element.contains(e.target)) {
            if (this.open) {
                this.open = false;
            }
        }
    }
    handleEscapeKey(event) {
        if (event.key === "space" && this.open) {
            this.open = false;
        }
    }
    handleArrowKeys(ev) {
        if (ev.keyCode === 40 || ev.keyCode === 38) {
            if (this.open) {
                ev.preventDefault();
                ev.stopPropagation();
                if (ev.keyCode === 40) {
                    this.focusNextOption();
                }
                else {
                    this.focusPreviousOption();
                }
            }
        }
    }
    readable_value() {
        // @ts-ignore
        if (typeof this.value === "object") {
            if (this.value.length === 0) {
                if (this.placeholderInverted) {
                    return `All ${this.verbiage}(s) selected`;
                }
                else {
                    return `No ${this.verbiage}(s) selected`;
                }
            }
            return `${this.value.length} ${this.verbiage}${this.value.length > 1 ? "s" : ""}`;
        }
        else if (typeof this.value === "string") {
            return this.valueLabel || this.value.toString() || `Select ${this.verbiageAn ? "an" : "a"} ${this.verbiage}`;
        }
        else {
            return this.valueLabel || this.value;
        }
    }
    async validate() {
        const status = {
            name: `${this.name}`,
            value: this.value,
            valid: true,
            errors: [],
        };
        if (!this.novalidate) {
            // @ts-ignore
            if (!this.value) {
                status.valid = false;
                status.errors.push({ message: 'This field is required.' });
            }
            const options = await this.options();
            // @ts-ignore
            if (!options.includes(this.value)) {
                status.valid = false;
                status.errors.push({ message: `"${this.value}" isn't a valid option.` });
            }
        }
        this.status = status;
        return this.status;
    }
    listen_to_values() {
        var targetNode = this.element;
        var config = { childList: true, subtree: true };
        var callback = (mutationsList) => {
            for (var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    this.update_values();
                }
            }
        };
        this.observer = new MutationObserver(callback);
        this.observer.observe(targetNode, config);
    }
    async update_values() {
        const values = Array.from(this.element.querySelectorAll('stellar-item'));
        this.values = values.map((element) => {
            if (this.multiple) {
                element.multiple = true;
            }
            if (element.valueLabel && element.selected) {
                this.valueLabel = element.valueLabel;
            }
            return element.value;
        });
    }
    async option_elements() {
        return this.element.querySelectorAll('stellar-item:not(.current)');
    }
    async options() {
        const elements = await this.option_elements();
        const options = [];
        // @ts-ignore
        elements.forEach((option) => {
            options.push(option.value);
        });
        return options;
    }
    async focusPaths() {
        let current = undefined;
        let next = undefined;
        let previous = undefined;
        const elements = await this.options();
        // @ts-ignore
        elements.forEach((element, index) => {
            // @ts-ignore
            if (element.hasFocus()) {
                previous = elements[index - 1];
                current = element;
                next = elements[index + 1];
            }
        });
        if (!current) {
            var first = elements[0];
            this.focusElement(first);
            current = first;
        }
        return { previous, current, next };
    }
    focusFirstItem() {
        //@ts-ignore
        this.element.querySelector('.select-list stellar-item:first-of-type').focus();
    }
    focusElement(element) {
        element.focus();
    }
    async focusNextOption() {
        const elements = await this.focusPaths();
        if (elements.next) {
            this.focusElement(elements.next);
        }
    }
    async focusPreviousOption() {
        const elements = await this.focusPaths();
        if (elements.previous) {
            this.focusElement(elements.previous);
        }
    }
    closeOthers() {
        const selects = document.querySelectorAll('stellar-select[open]');
        Array.from(selects).forEach((s) => {
            if (s !== this.element) {
                s.open = false;
            }
        });
    }
    handleTitleClick() {
        this.closeOthers();
        this.open = !this.open;
    }
    renderLabel() {
        if (this.label) {
            return h("div", { class: "label-wrapper" }, h("stellar-label", { onClick: () => { this.focusFirstItem(); } }, this.label), this.renderEmptyButton());
        }
    }
    renderErrors() {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("p", { class: "validation" }, this.status.errors.map(error => h("span", null, error.message))));
        }
    }
    renderEmptyButton() {
        return this.multiple && this.value && this.value.length > 0 && h("stellar-button", { tag: "button", size: "tiny", ghost: true, class: "theme-red", onClick: (e) => { e.stopPropagation(); this.clearValue(); } }, h("stellar-asset", { name: "close", class: "fs4 mr1" }), this.clear_confirm ? `Clear ${this.value.length} selections?` : `Clear`);
    }
    render() {
        return (h("div", { class: "wrapper" }, this.renderLabel(), h("div", { class: "select" }, h("button", { type: "button", class: "select-title", onClick: () => this.handleTitleClick(), onFocus: () => this.handleTitleFocus(), onBlur: () => this.handleTitleBlur() }, h("stellar-item", { class: "current", type: "button", value: this.value ? this.value.toString() : "", tabindex: "-1", selectable: false, label: this.readable_value() }, this.readable_value()), h("stellar-asset", { name: "arrow-down" }), this.name && h("input", { type: "text", tabindex: "-1", value: this.value, name: this.name.toString(), required: this.required })), this.tooltip && h("stellar-tooltip", { align: "bottom-left", onClick: () => this.handleTitleClick() }, this.tooltip), h("stellar-blur", { vertical: this.blur, class: "select-list" }, h("div", { class: "select-list-header" }, h("slot", { name: "header" })), h("div", { class: "select-list-body" }, h("slot", null)), this.footer && h("div", { class: "select-list-footer" }, h("slot", { name: "footer" })))), h("stellar-label", { size: "small", underneath: true }, this.description), !this.novalidate && this.renderErrors()));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"],
        "multiple": ["handleMultipleChange"]
    }; }
    static get style() { return ":host {\n  --color: var(--black);\n  --border-radius: 0.3rem;\n  --item-size: 4.25rem;\n  --background: var(--white);\n  --border-color: var(--gray1);\n\n  -webkit-box-sizing: border-box;\n\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  position: relative;\n}\n\n:host(:not(.hydrated)) {\n  display: none;\n}\n\n:host stellar-item,\n:host ::slotted(stellar-item) {\n  --item-size: 4.2rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n\n:host ::selection,\n:host *::selection {\n  background: var(--theme-base0) !important;\n}\n\n:host *,\n:host *::after,\n:host *::before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n\n:host .select {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n:host .select-title {\n  cursor: pointer;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  outline: none;\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius);\n  padding: 0;\n  width: 100%;\n  height: var(--item-size);\n  overflow: hidden;\n  line-height: 1.4;\n  color: var(--color);\n  font-weight: 500;\n  background: var(--background);\n}\n\n:host([focused]) .select-title,\n:host .select-title:focus,\n:host .wrapper:hover .select-title {\n  border-color: var(--theme-base5);\n  -webkit-box-shadow: 0 0 0 1px var(--theme-base5);\n  box-shadow: 0 0 0 1px var(--theme-base5);\n}\n\n:host .select-title stellar-item {\n  background: var(--background) !important;\n  color: var(--color) !important;\n}\n\n:host .select-title input {\n  display: none;\n}\n\n:host .select-title stellar-asset {\n  position: absolute;\n  right: 2rem;\n  -webkit-transition: -webkit-transform 100ms var(--ease) 0s;\n  transition: -webkit-transform 100ms var(--ease) 0s;\n  transition: transform 100ms var(--ease) 0s;\n  transition: transform 100ms var(--ease) 0s, -webkit-transform 100ms var(--ease) 0s;\n  font-size: 1.6rem;\n  color: var(--theme-base5);\n  background: transparent;\n  border: 0;\n}\n\n:host .select-title .button stellar-asset {\n  display: none;\n}\n\n:host([open]) .select-title stellar-asset {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n:host .select-list {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  top: 0;\n  left: 0;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n  -webkit-transition: opacity 250ms var(--ease) 350ms, max-height 200ms var(--ease) 350ms, -webkit-transform 200ms var(--ease) 350ms;\n  transition: opacity 250ms var(--ease) 350ms, max-height 200ms var(--ease) 350ms, -webkit-transform 200ms var(--ease) 350ms;\n  transition: transform 200ms var(--ease) 350ms, opacity 250ms var(--ease) 350ms, max-height 200ms var(--ease) 350ms;\n  transition: transform 200ms var(--ease) 350ms, opacity 250ms var(--ease) 350ms, max-height 200ms var(--ease) 350ms, -webkit-transform 200ms var(--ease) 350ms;\n  opacity: 0;\n  z-index: 3;\n  background: var(--background);\n  width: 100%;\n  max-height: 0rem;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  color: var(--theme-base5);\n  border: 1px solid var(--border-color);\n  pointer-events: none;\n  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.15);\n  box-shadow: 0 1px 2px rgba(0,0,0,0.15);\n  border-radius: 0.3rem;\n}\n\n:host .select-list ::slotted(stellar-item) {\n  color: var(--color);\n  border-bottom: 1px solid var(--border-color);\n}\n\n:host .select-list ::slotted(stellar-item:last-child) {\n  border-bottom: none;\n}\n\n:host .label-wrapper {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  height: 1.8rem;\n}\n\n:host .label-wrapper stellar-label {\n  margin: 0;\n}\n\n:host .select-list-footer {\n  -ms-flex-order: 3;\n  order: 3;\n  height: 4rem;\n  border-top: 1px solid var(--theme-base5);\n}\n\nstellar-input .validation {\n  margin-bottom: 0;\n  color: var(--red5);\n  font-size: var(--complementing-font-size);\n  font-weight: 500;\n}\n\nstellar-input .validation span {\n  display: block;\n  padding: 1.4rem 0;\n  line-height: 1.4;\n}\n\nstellar-input .validation span + span {\n  border-top: 1px solid var(--border-color);\n}\n\n:host([open]) .select-list,\n:host .select-list:focus-within {\n  -webkit-transition: opacity 250ms var(--ease) 0ms, max-height 200ms var(--ease) 0ms, -webkit-transform 200ms var(--ease) 0ms;\n  transition: opacity 250ms var(--ease) 0ms, max-height 200ms var(--ease) 0ms, -webkit-transform 200ms var(--ease) 0ms;\n  transition: transform 200ms var(--ease) 0ms, opacity 250ms var(--ease) 0ms, max-height 200ms var(--ease) 0ms;\n  transition: transform 200ms var(--ease) 0ms, opacity 250ms var(--ease) 0ms, max-height 200ms var(--ease) 0ms, -webkit-transform 200ms var(--ease) 0ms;\n  opacity: 1;\n  pointer-events: initial;\n  max-height: 20rem;\n  overflow-y: auto;\n}\n\n:host([size=\"small\"]) .select-title {\n  height: 3.5rem;\n}\n\n:host([size=\"small\"]) .select-title stellar-asset {\n  right: 1rem;\n}\n\n:host([size=\"small\"]) .label {\n  font-size: 0.75rem;\n}\n\n:host([size=\"small\"]) stellar-item {\n  --font-size: 1.4rem;\n  --item-size: 3.5rem;\n}\n\n:host([size=\"small\"][open]) .select-list,\n:host([size=\"small\"]) .select-list:focus-within {\n  max-height: 11rem;\n}\n\n:host([overlay]) .select-list {\n  position: absolute;\n  top: calc((var(--item-size) * .75) + 0.5rem);\n}\n\n:host stellar-tooltip {\n  cursor: pointer;\n}\n\n:host stellar-item stellar-tooltip {\n  display: none;\n}\n\n\n:host-context(.dark-mode) {\n  --background: var(--black-alt);\n  --color: var(--white);\n  --border-color: var(--gray9);\n}\n\n:host ::selection,\n:host *::selection {\n  background: var(--theme-base0) !important;\n}"; }
}

export { Select as stellar_select };
