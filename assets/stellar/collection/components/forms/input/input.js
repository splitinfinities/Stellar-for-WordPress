import { shouldBeAnInput, hasIncrements, hasValue, isDatePicker, Validator, Tokenfield } from "./lib";
import { zxcvbn, TinyDatePicker, moment } from '../../../utils';
export class Input {
    constructor() {
        this.type = "text";
        this.requirements = false;
        this.color = "theme";
        this.placeholder = "Enter a value";
        this.readonly = false;
        this.autofocus = false;
        this.focused = false;
        this.spellcheck = true;
        this.maxlength = 1000;
        this.cols = 30;
        this.rows = 5;
        this.wrap = "soft";
        this.dateType = "day";
        this.step = 1;
        this.multipleFileCaption = '{count} files';
        this.replace_placeholder = "Replace file";
        this.files = [];
        this.multiple = false;
        this.droppable = false;
        this.required = false;
        this.novalidate = false;
        this.icon = false;
    }
    componentWillLoad() {
        if (this.default) {
            this.value = this.default;
        }
        if (this.match) {
            this.__match = document.querySelector(`stellar-input${this.match}`);
            if (!this.__match) {
                console.error(`Uh oh! Couldn't find element in DOM matching stellar-input${this.match}`);
            }
        }
        this.checkForIcon();
        if (this.type === "file") {
            this._prepareFileLabels();
        }
        this.validator = new Validator(this);
        if (this.type === "password" && this.value) {
            this.getStrongLevel();
        }
        this.generatedId = this.generateId();
    }
    componentDidLoad() {
        this.input = this.element.shadowRoot.querySelector('.input');
        if (this.type === "tags") {
            this.tokenField = new Tokenfield({
                el: this.input,
                delimiters: [","],
                addItemsOnPaste: true
            });
            this.tokenField.setItems(this.value);
        }
        if (this.is_date_type) {
            this.datepicker = TinyDatePicker(this.input, {
                type: this.dateType,
                mode: 'dp-below',
                format: (date) => { return moment(date).format('YYYY-MM-DD'); },
                parse: (date) => { return date ? moment(date).toDate() : moment().toDate(); }
            });
            this.datepicker.on('select', (_, dp) => {
                this.value = moment(dp.state.selectedDate).format('YYYY-MM-DD');
                this.value = moment(dp.state.selectedDate).format('YYYY-MM-DD');
            });
        }
    }
    async getDatePicker() {
        return this.datepicker;
    }
    get is_date_type() {
        return ["month", "date"].includes(this.type);
    }
    handleValueChange() {
        this.change.emit(this.value);
    }
    handleChange() {
        if (this.type === "file") {
            this.updateFilesArray();
            this.updateFileLabel();
        }
        this.change.emit(this.value);
    }
    handleFocus() {
        this.focused = true;
        this.focusing.emit({});
    }
    handleBlur() {
        this.focused = false;
        this.validate();
        this.bluring.emit({});
    }
    handleInput() {
        if (this.type === "textarea") {
            this.input.style.height = "1px";
            this.input.style.height = `${this.input.scrollHeight + 2}px`;
        }
        if (this.type !== "file") {
            if (this.type === "tags") {
                this.value = this.tokenField.getItems();
            }
            else {
                this.value = this.input.value;
            }
        }
        if (this.type === "password") {
            this.getStrongLevel();
        }
    }
    handleIncrement(event) {
        event.preventDefault();
        if (this.is_date_type) {
            this.value = moment(this.value).add(1, `${this.dateType}s`).format('YYYY-MM-DD');
            this.datepicker.close();
        }
        else {
            this.input.stepUp();
            this.value = this.input.value;
        }
    }
    handleDecrement(event) {
        event.preventDefault();
        if (this.is_date_type) {
            this.value = moment(this.value).subtract(1, `${this.dateType}s`).format('YYYY-MM-DD');
            this.datepicker.close();
        }
        else {
            this.input.stepDown();
            this.value = this.input.value;
        }
    }
    handleKeyDownIncrement(event) {
        if (event.keyCode === 13 || event.keyCode === 38) {
            event.preventDefault();
            if (this.is_date_type) {
                this.value = moment(this.value).add(1, `${this.dateType}s`).format('YYYY-MM-DD');
                this.datepicker.close();
            }
            else {
                this.input.stepUp();
                this.value = this.input.value;
            }
        }
    }
    handleKeyDownDecrement(event) {
        if (event.keyCode === 13 || event.keyCode === 40) {
            event.preventDefault();
            if (this.is_date_type) {
                this.value = moment(this.value).subtract(1, `${this.dateType}s`).format('YYYY-MM-DD');
                this.datepicker.close();
            }
            else {
                this.input.stepDown();
                this.value = this.input.value;
            }
        }
    }
    handleReset(event) {
        event.preventDefault();
        this.resetValue();
    }
    handleKeyDownReset(event) {
        if (event.keyCode === 13) {
            this.resetValue();
        }
    }
    checkForIcon() {
        var element = this.element.querySelector('*[slot="icon"]');
        if (element) {
            this.icon = true;
        }
    }
    _prepareFileLabels() {
        if (this.type === "file" && this.multiple) {
            this.replace_placeholder = (this.replace_placeholder === "Replace file") ? "Replace files" : this.replace_placeholder;
        }
        this.placeholder = (!this.value) ? this.placeholder : this.replace_placeholder;
    }
    updateFileLabel() {
        var fileName = '';
        if (this.files && this.files.length > 1) {
            fileName = this.multipleFileCaption.replace('{count}', this.files.length.toString());
        }
        else {
            fileName = this.input.value.split('\\').pop();
        }
        if (fileName) {
            this._fileLabel = fileName;
        }
        else {
            this._fileLabel = undefined;
        }
        this.value = this.input.value;
        this._prepareFileLabels();
        this.validate();
    }
    updateFilesArray() {
        var files = [];
        if (this.type === "file" && this.multiple) {
            Array.from(this.input.files).forEach((file) => {
                var item = {
                    'name': file.name,
                    'size': file.size
                };
                files.push(item);
            });
        }
        else {
            files = this.input.files[0];
        }
        this.files = files;
    }
    generateId() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return `input-${getRandomInt(0, 1000)}`;
    }
    async getId() {
        return this.generatedId;
    }
    async val() {
        return this.value;
    }
    async getStrength() {
        return this.strength;
    }
    async setStrength(value) {
        this.level = value;
    }
    async invalid(message, valid, level) {
        if (message) {
            this.status = { errors: [{ message: `${message}` }], valid: valid, level: level, value: this.value, name: this.name };
            this.level = level;
        }
        else {
            this.status = undefined;
        }
    }
    async validate() {
        if (this.novalidate) {
            return this.validator.validate(this);
        }
        else {
            this.status = this.validator.validate(this);
            return this.status;
        }
    }
    getStrongLevel() {
        const result = zxcvbn(this.value);
        this.strength = result;
        this.level = result.score;
        if (this.value.length === 0) {
            this.level = -1;
        }
    }
    resetValue() {
        this.__previousValue = this.value;
        this.value = undefined;
        this.input.focus();
    }
    handleKeyDown(event) {
        if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
            if (this.value === "") {
                this.value = this.__previousValue;
            }
        }
    }
    validateDarkColor() {
        const hexcolor = this.value;
        var r = parseInt(hexcolor.substr(1, 2), 16);
        var g = parseInt(hexcolor.substr(3, 2), 16);
        var b = parseInt(hexcolor.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq > 150);
    }
    renderLabel() {
        if (this.label) {
            return (h("stellar-label", { for: this.generatedId, size: this.size }, this.label));
        }
    }
    renderColorPicker() {
        if (this.type === "color") {
            return (h("copy-wrap", { class: "color-picker", align: "center", "data-invert": this.validateDarkColor() },
                h("stellar-label", { for: this.generatedId, size: this.size }, this.value)));
        }
    }
    renderSearch() {
        if (this.type === "search") {
            return (h("stellar-asset", { name: "search", class: "search", block: true }));
        }
    }
    renderIncrements() {
        if (hasIncrements(this.type)) {
            return (h("div", { class: "incrementing" },
                h("a", { href: "#", onClick: (event) => this.handleIncrement(event), onKeyDown: (event) => this.handleKeyDownIncrement(event), onFocus: () => { this.handleFocus(); }, onBlur: () => { this.handleBlur(); } },
                    h("stellar-asset", { name: "arrow-up", block: true })),
                h("a", { href: "#", onClick: (event) => this.handleDecrement(event), onKeyDown: (event) => this.handleKeyDownDecrement(event), onFocus: () => { this.handleFocus(); }, onBlur: () => { this.handleBlur(); } },
                    h("stellar-asset", { name: "arrow-down", block: true }))));
        }
    }
    renderPasswordStrength() {
        if (this.type === "password") {
            return this.renderPasswordStrengthSmile();
        }
    }
    renderPasswordStrengthSmile() {
        if (this.level === 5 || this.level === 4 || this.level === 3) {
            return h("stellar-asset", { class: "smile", name: "happy", "data-level": this.level });
        }
        else if (this.level === 2 || this.level === 1 || this.level === 0) {
            return h("stellar-asset", { class: "smile", name: "sad", "data-level": this.level });
        }
        else {
            return h("stellar-asset", { class: "smile", name: "sad", "data-level": "-1" });
        }
    }
    renderSearchClearButton() {
        if (this.type === "search" && hasValue(this.value)) {
            return (h("stellar-asset", { src: this.size === "small" ? "CloseSmall" : "Close", class: "close", onClick: (event) => this.handleReset(event), onKeyDown: (event) => this.handleKeyDownReset(event), tabindex: "0", title: "Reset", block: true }));
        }
    }
    renderDatePicker() {
        if (isDatePicker(this.type)) {
            return (h("div", { class: "relative" },
                h("div", { class: "fake-input absolute" }, moment(this.value).format('MMMM D, YYYY')),
                h("input", { class: "input", id: this.generatedId, type: "text", value: this.value, name: this.name, placeholder: this.placeholder, required: this.required, maxlength: this.maxlength, autofocus: this.autofocus, readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, autocomplete: this.autocomplete || this.type, onInput: () => this.handleInput(), onChange: () => this.handleChange(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur(), onKeyDown: (event) => { this.handleKeyDownIncrement(event); this.handleKeyDownDecrement(event); } })));
        }
    }
    renderInput() {
        if (shouldBeAnInput(this.type)) {
            return (h("input", { class: "input", id: this.generatedId, type: this.type, value: this.value, name: this.name, placeholder: this.placeholder, required: this.required, maxlength: this.maxlength, autofocus: this.autofocus, readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, autocomplete: this.autocomplete || this.type, onInput: () => this.handleInput(), onChange: () => this.handleChange(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() }));
        }
    }
    renderTextArea() {
        if (this.type === "textarea") {
            return (h("textarea", { class: "input", id: this.generatedId, placeholder: this.placeholder, name: this.name, cols: this.cols, maxlength: this.maxlength, rows: this.rows, disabled: this.disabled, readonly: this.readonly, autofocus: this.autofocus, spellcheck: this.spellcheck, required: this.required, onInput: () => this.handleInput(), onChange: () => this.handleChange(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() }, this.value));
        }
    }
    renderFileUpload() {
        if (this.type === "file") {
            return (h("div", { class: "file-wrapper" },
                h("div", { class: "upload-card" },
                    h("section", null,
                        h("input", { class: "input", id: this.generatedId, type: this.type, name: this.name, placeholder: this.placeholder, required: this.required, maxlength: this.maxlength, autofocus: this.autofocus, readonly: this.readonly, disabled: this.disabled, onClick: (e) => { e.stopPropagation(); }, onInput: () => this.handleInput(), onChange: () => this.handleChange(), multiple: this.multiple, accept: this.accept, onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() }),
                        this._fileLabel && h("h3", null, this._fileLabel),
                        h("h4", null,
                            h("stellar-asset", { name: this._fileLabel ? "create" : "add-circle", class: "" }),
                            this.placeholder),
                        this.renderMultipleFileUploads()))));
        }
    }
    renderMultipleFileUploads() {
        if (this.multiple && this.files && this.files.length > 1) {
            return (h("ul", { class: "file-list" }, this.files.map((file) => h("li", null,
                h("p", null,
                    file.name,
                    " | ",
                    h("stellar-unit", { value: file.size }))))));
        }
    }
    renderErrors() {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("stellar-label", { size: this.size, class: "validation" },
                h("span", null, this.status.errors[this.status.errors.length - 1].message)));
        }
    }
    render() {
        return (h("div", { class: "wrapper" },
            h("label", null,
                this.renderLabel(),
                h("div", { class: "content" },
                    h("div", { class: "icon" },
                        h("slot", { name: "icon" })),
                    this.renderDatePicker(),
                    this.renderColorPicker(),
                    this.renderSearch(),
                    this.renderInput(),
                    this.renderTextArea(),
                    this.renderFileUpload(),
                    this.renderIncrements(),
                    this.renderSearchClearButton(),
                    this.renderPasswordStrength(),
                    this.tooltip && h("stellar-tooltip", { align: "bottom-left" }, this.tooltip)),
                this.description && h("stellar-label", { size: "small", underneath: true }, this.description)),
            this.renderErrors()));
    }
    static get is() { return "stellar-input"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "__match": {
            "state": true
        },
        "__previousValue": {
            "state": true
        },
        "_fileLabel": {
            "state": true
        },
        "_multipleFileUploadsLabel": {
            "state": true
        },
        "accept": {
            "type": String,
            "attr": "accept"
        },
        "autocomplete": {
            "type": String,
            "attr": "autocomplete"
        },
        "autofocus": {
            "type": Boolean,
            "attr": "autofocus"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "cols": {
            "type": Number,
            "attr": "cols"
        },
        "datepicker": {
            "state": true
        },
        "dateType": {
            "type": String,
            "attr": "date-type"
        },
        "default": {
            "type": "Any",
            "attr": "default",
            "reflectToAttr": true,
            "mutable": true
        },
        "description": {
            "type": String,
            "attr": "description"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "droppable": {
            "type": Boolean,
            "attr": "droppable"
        },
        "element": {
            "elementRef": true
        },
        "files": {
            "type": "Any",
            "attr": "files",
            "mutable": true
        },
        "focused": {
            "type": Boolean,
            "attr": "focused",
            "reflectToAttr": true,
            "mutable": true
        },
        "generatedId": {
            "state": true
        },
        "getDatePicker": {
            "method": true
        },
        "getId": {
            "method": true
        },
        "getStrength": {
            "method": true
        },
        "icon": {
            "type": Boolean,
            "attr": "icon",
            "reflectToAttr": true,
            "mutable": true
        },
        "input": {
            "state": true
        },
        "invalid": {
            "method": true
        },
        "label": {
            "type": String,
            "attr": "label",
            "reflectToAttr": true,
            "mutable": true
        },
        "level": {
            "state": true
        },
        "match": {
            "type": String,
            "attr": "match"
        },
        "max": {
            "type": Number,
            "attr": "max"
        },
        "maxlength": {
            "type": Number,
            "attr": "maxlength"
        },
        "min": {
            "type": Number,
            "attr": "min"
        },
        "multiple": {
            "type": Boolean,
            "attr": "multiple"
        },
        "multipleFileCaption": {
            "type": String,
            "attr": "multiple-file-caption"
        },
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true
        },
        "novalidate": {
            "type": Boolean,
            "attr": "novalidate"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder",
            "reflectToAttr": true,
            "mutable": true
        },
        "readonly": {
            "type": Boolean,
            "attr": "readonly"
        },
        "replace_placeholder": {
            "type": String,
            "attr": "replace_placeholder"
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "requirements": {
            "type": Boolean,
            "attr": "requirements",
            "reflectToAttr": true,
            "mutable": true
        },
        "rows": {
            "type": Number,
            "attr": "rows"
        },
        "setStrength": {
            "method": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true,
            "mutable": true
        },
        "spellcheck": {
            "type": Boolean,
            "attr": "spellcheck"
        },
        "status": {
            "state": true
        },
        "step": {
            "type": Number,
            "attr": "step"
        },
        "strength": {
            "state": true
        },
        "tokenField": {
            "type": "Any",
            "attr": "token-field",
            "mutable": true
        },
        "tooltip": {
            "type": String,
            "attr": "tooltip"
        },
        "type": {
            "type": String,
            "attr": "type",
            "reflectToAttr": true
        },
        "val": {
            "method": true
        },
        "validate": {
            "method": true
        },
        "validates": {
            "type": String,
            "attr": "validates"
        },
        "validator": {
            "state": true
        },
        "value": {
            "type": "Any",
            "attr": "value",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["handleValueChange"]
        },
        "wrap": {
            "type": String,
            "attr": "wrap"
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "focusing",
            "method": "focusing",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "bluring",
            "method": "bluring",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeyDown"
        }]; }
    static get style() { return "/**style-placeholder:stellar-input:**/"; }
}
