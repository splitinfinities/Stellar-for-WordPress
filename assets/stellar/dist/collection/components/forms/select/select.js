import delay from 'await-delay';
export class Select {
    constructor() {
        this.name = "select";
        this.placeholder = "Choose something...";
        this.required = false;
        this.open = false;
        this.verbiage = "selection";
        this.valueLabel = undefined;
        this.blur = 0;
        this.clear_confirm = false;
        this.values = [];
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
            options.forEach((element) => {
                element.multiple = true;
            });
        }
        if (this.default) {
            if (typeof this.default === "object" && this.default.constructor.name === "Array") {
                this.default.forEach((value) => {
                    this.element.querySelector(`stellar-item[value="${value}"]`).select_item();
                });
            }
            else {
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
        this.element.shadowRoot.querySelector('button.select-title').focus();
    }
    async handleMultipleChange(value) {
        const options = await this.option_elements();
        options.forEach((element) => {
            element.multiple = value;
        });
    }
    async mountedHandler(event) {
        const data = event.detail;
        if (this.multiple) {
            const option_elements = await this.option_elements();
            let values = [];
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
            if (!this.value) {
                status.valid = false;
                status.errors.push({ message: 'This field is required.' });
            }
            const options = await this.options();
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
        elements.forEach((element, index) => {
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
            return h("div", { class: "label-wrapper" },
                h("stellar-label", { onClick: () => { this.focusFirstItem(); } }, this.label),
                this.renderEmptyButton());
        }
    }
    renderErrors() {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("p", { class: "validation" }, this.status.errors.map(error => h("span", null, error.message))));
        }
    }
    renderEmptyButton() {
        return this.multiple && this.value && this.value.length > 0 && h("stellar-button", { tag: "button", size: "tiny", ghost: true, class: "theme-red", onClick: (e) => { e.stopPropagation(); this.clearValue(); } },
            h("stellar-asset", { name: "close", class: "fs4 mr1" }),
            this.clear_confirm ? `Clear ${this.value.length} selections?` : `Clear`);
    }
    render() {
        return (h("div", { class: "wrapper" },
            this.renderLabel(),
            h("div", { class: "select" },
                h("button", { type: "button", class: "select-title", onClick: () => this.handleTitleClick(), onFocus: () => this.handleTitleFocus(), onBlur: () => this.handleTitleBlur() },
                    h("stellar-item", { class: "current", type: "button", value: this.value ? this.value.toString() : "", tabindex: "-1", selectable: false, label: this.readable_value() }, this.readable_value()),
                    h("stellar-asset", { name: "arrow-down" }),
                    this.name && h("input", { type: "text", tabindex: "-1", value: this.value, name: this.name.toString(), required: this.required })),
                this.tooltip && h("stellar-tooltip", { align: "bottom-left", onClick: () => this.handleTitleClick() }, this.tooltip),
                h("stellar-blur", { vertical: this.blur, class: "select-list" },
                    h("div", { class: "select-list-header" },
                        h("slot", { name: "header" })),
                    h("div", { class: "select-list-body" },
                        h("slot", null)),
                    this.footer && h("div", { class: "select-list-footer" },
                        h("slot", { name: "footer" })))),
            h("stellar-label", { size: "small", underneath: true }, this.description),
            !this.novalidate && this.renderErrors()));
    }
    static get is() { return "stellar-select"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "blur": {
            "state": true
        },
        "clear_confirm": {
            "state": true
        },
        "current": {
            "state": true
        },
        "default": {
            "type": "Any",
            "attr": "default"
        },
        "description": {
            "type": String,
            "attr": "description",
            "mutable": true
        },
        "element": {
            "elementRef": true
        },
        "focused": {
            "type": Boolean,
            "attr": "focused",
            "reflectToAttr": true,
            "mutable": true
        },
        "footer": {
            "type": Boolean,
            "attr": "footer"
        },
        "inline": {
            "type": Boolean,
            "attr": "inline",
            "reflectToAttr": true,
            "mutable": true
        },
        "label": {
            "type": String,
            "attr": "label",
            "mutable": true
        },
        "multiple": {
            "type": Boolean,
            "attr": "multiple",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["handleMultipleChange"]
        },
        "name": {
            "type": "Any",
            "attr": "name",
            "reflectToAttr": true,
            "mutable": true
        },
        "novalidate": {
            "type": Boolean,
            "attr": "novalidate"
        },
        "observer": {
            "state": true
        },
        "open": {
            "type": Boolean,
            "attr": "open",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["handleOpenChange"]
        },
        "option_elements": {
            "method": true
        },
        "options": {
            "method": true
        },
        "other": {
            "type": Boolean,
            "attr": "other"
        },
        "overlay": {
            "type": Boolean,
            "attr": "overlay",
            "reflectToAttr": true
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder",
            "mutable": true
        },
        "placeholderInverted": {
            "type": Boolean,
            "attr": "placeholder-inverted"
        },
        "processing": {
            "type": Boolean,
            "attr": "processing"
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true,
            "mutable": true
        },
        "status": {
            "state": true
        },
        "tooltip": {
            "type": String,
            "attr": "tooltip",
            "mutable": true
        },
        "validate": {
            "method": true
        },
        "value": {
            "type": String,
            "attr": "value",
            "reflectToAttr": true,
            "mutable": true
        },
        "valueLabel": {
            "type": String,
            "attr": "value-label"
        },
        "values": {
            "state": true
        },
        "verbiage": {
            "type": String,
            "attr": "verbiage"
        },
        "verbiageAn": {
            "type": Boolean,
            "attr": "verbiage-an"
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "mounted",
            "method": "mountedHandler"
        }, {
            "name": "selectionChanged",
            "method": "selectionChangedHandler"
        }, {
            "name": "focusChanged",
            "method": "selectedFocusChangedHandler"
        }, {
            "name": "blurChanged",
            "method": "selectedBlurChangedHandler"
        }, {
            "name": "window:click",
            "method": "handleNotClick"
        }, {
            "name": "keydown",
            "method": "handleEscapeKey"
        }, {
            "name": "keydown",
            "method": "handleArrowKeys"
        }]; }
    static get style() { return "/**style-placeholder:stellar-select:**/"; }
}
