'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
require('./index-9b3c8604.js');
const index$1$1 = require('./index-d326a972.js');
require('./_commonjsHelpers-3fc1f64e.js');
require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');
require('./index-9d31ce96.js');
const theme = require('./theme-1038bd3c.js');

const ToggleOptionCss = "stellar-toggle-option{contain:content;--background:var(--gray0);--hover-background:var(--gray1);--border:var(--gray1);--focus:var(--gray5);--check-bg:var(--white);--check-subject-bg:var(--theme-base5);-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;font-family:inherit;position:relative}stellar-toggle-option[type*=\"block\"]{overflow:hidden}stellar-toggle-option *{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-toggle-option+stellar-toggle-option{margin-top:10px}stellar-toggle-option[type=\"radio-block\"]+stellar-toggle-option[type=\"radio-block\"],stellar-toggle-option[type=\"checkbox-block\"]+stellar-toggle-option[type=\"checkbox-block\"]{margin-top:0}stellar-toggle-option ion-icon{--icon-color:white}stellar-toggle-option input{display:block;position:relative;overflow:hidden;width:0;height:0;opacity:0}stellar-toggle-option span{color:var(--gray9);font-weight:300}stellar-toggle-option .box{display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex:0 0 2rem;flex:0 0 2rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all 150ms var(--ease) 0s;transition:all 150ms var(--ease) 0s;margin:0 7.5px 0 0.2px;border:1px solid var(--background);-webkit-box-shadow:0 0 0 1px var(--border);box-shadow:0 0 0 1px var(--border);background:var(--check-bg) 50% 50% / 5px 4px no-repeat;width:2rem;height:2rem;border-radius:100%;overflow:hidden}stellar-toggle-option:focus-within .box,stellar-toggle-option[checked] .box,stellar-toggle-option:hover .box{border:1px solid var(--background);-webkit-box-shadow:0 0 0 1px var(--focus), 0 0 0 3px rgba(0, 0, 0, .125);box-shadow:0 0 0 1px var(--focus), 0 0 0 3px rgba(0, 0, 0, .125)}stellar-toggle-option .box .indicator{position:absolute;top:50%;left:50%;height:100%;width:100%;-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all 150ms var(--ease) 0s;transition:all 150ms var(--ease) 0s}stellar-toggle-option img{min-width:4rem}stellar-toggle-option .box .indicator *{height:100%;width:100%;display:-ms-flexbox;display:flex}stellar-toggle-option .box.focus{border:1px solid black;-webkit-box-shadow:0 0 0 2px var(--theme-base3);box-shadow:0 0 0 2px var(--theme-base3)}stellar-toggle-option button{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;outline:0}stellar-toggle-option[type=\"radio\"] .box .bg,stellar-toggle-option[type*=\"checkbox\"] .box .bg{background:var(--check-subject-bg);color:var(--background)}stellar-toggle-option[type=\"radio\"] .box .active,stellar-toggle-option[type*=\"checkbox\"] .box .active{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1);background:var(--check-subject-bg);color:var(--background);width:calc(100% - 0.5rem);height:calc(100% - 0.5rem);border-radius:100%}stellar-toggle-option[type*=\"checkbox\"] .box .active{border-radius:2px;width:calc(100% + 2px);height:calc(100% + 2px)}stellar-toggle-option[type*=\"checkbox\"] .box{-ms-flex:0 0 2rem;flex:0 0 2rem;width:2rem;height:2rem;font-size:2rem;color:var(--check-bg);border-radius:0.3rem}stellar-toggle-option[type*=\"checkbox\"] .box ion-icon{-webkit-transition:-webkit-transform 350ms var(--ease) 0ms;transition:-webkit-transform 350ms var(--ease) 0ms;transition:transform 350ms var(--ease) 0ms;transition:transform 350ms var(--ease) 0ms, -webkit-transform 350ms var(--ease) 0ms;-webkit-transform:scale(0);transform:scale(0)}stellar-toggle-option[type=\"checkbox-block\"] .box ion-icon{height:3rem;width:3rem;font-size:3rem;-ms-flex-item-align:center;align-self:center;margin:auto;display:-ms-flexbox;display:flex}stellar-toggle-option .status stellar-tag{display:block}stellar-toggle-option .status{position:absolute;right:0;top:0;-webkit-transform:translate(calc(100% + 1rem), 0%);transform:translate(calc(100% + 1rem), 0%);-webkit-transition:all 125ms var(--ease) 0ms;transition:all 125ms var(--ease) 0ms}stellar-toggle-option .status.active{-webkit-transform:translate(0%, 0%);transform:translate(0%, 0%)}stellar-toggle-option[type=\"checkbox\"] .box .active{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}stellar-toggle-option[type*=\"checkbox\"] .box .active ion-icon{-webkit-transform:scale(1);transform:scale(1)}stellar-toggle-option[type*=\"block\"] button{position:relative;border:1px solid var(--border);-webkit-transition:all 200ms var(--ease) 0s;transition:all 200ms var(--ease) 0s;width:100%;height:100%}stellar-toggle-option[type*=\"block\"] button .wrapper{-webkit-transition:all 200ms var(--ease) 0s;transition:all 200ms var(--ease) 0s}stellar-toggle-option[type*=\"block\"]:hover,stellar-toggle-option[type*=\"block\"]:focus{-webkit-box-shadow:0 2px 6px 0 rgba(72, 72, 73, 0.15);box-shadow:0 2px 6px 0 rgba(72, 72, 73, 0.15)}stellar-toggle-option[type*=\"block\"]:focus-within .wrapper,stellar-toggle-option[type*=\"block\"] button:hover .wrapper,stellar-toggle-option[type*=\"block\"] button:focus .wrapper{background:var(--hover-background)}stellar-toggle-option[type*=\"block\"] button:active{border-color:var(--gray2)}stellar-toggle-option[type*=\"block\"] .wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;background:var(--background);padding:1.5rem;width:100%;height:100%}stellar-toggle-option[type*=\"block\"] .block-content{display:grid;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-right:10px;grid-template-columns:1fr;grid-gap:1rem}stellar-toggle-option[type*=\"block\"] .box{-ms-flex:0 0 3rem;flex:0 0 3rem;-ms-flex-order:-1;order:-1;margin-right:1.5rem;width:3rem;height:3rem;color:var(--theme-base5);background:var(--check-bg)}stellar-toggle-option[type*=\"block\"] .box .active{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}stellar-toggle-option[type*=\"block\"][icon] .wrapper{-ms-flex-pack:justify;justify-content:space-between}stellar-toggle-option[type*=\"block\"][icon] .block-content{-ms-flex-pack:justify;justify-content:space-between;grid-template-columns:1fr 4fr}stellar-toggle-option[type*=\"block\"][icon] .box{-ms-flex-order:3;order:3;margin-right:0;margin-left:1.5rem}stellar-toggle-option[type*=\"block\"] copy-wrap{position:relative;z-index:2}stellar-toggle-option[type*=\"block\"][inline]{margin:0}stellar-toggle-option[type*=\"block\"][inline] button{padding-top:3rem;padding-bottom:3rem}stellar-toggle-option[type*=\"block\"][size=\"small\"] button{padding-top:2rem;padding-bottom:2rem}stellar-toggle-option[type*=\"block\"][checked]{z-index:3;border-color:var(--background)}stellar-toggle-option[type*=\"block\"][checked] .box{border:0;-webkit-box-shadow:0 0 0 1px var(--border);box-shadow:0 0 0 1px var(--border);background:var(--background);color:white}stellar-toggle-option[type=\"radio-block\"] .box .active{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1);background:var(--theme-base5);width:calc(100% - 0.5rem);height:calc(100% - 0.5rem);border-radius:100%}stellar-toggle-option[type=\"radio-block\"][checked] .box .indicator{background:white}stellar-toggle-option[inline]{margin-top:0;margin-right:3rem}stellar-toggle-option[single]{margin:0}stellar-toggle-option[inline] button{display:-ms-inline-flexbox;display:inline-flex}stellar-toggle-option[single] .box{margin:0}stellar-toggle-option[disabled]{opacity:0.75;-webkit-filter:grayscale(100%);filter:grayscale(100%);pointer-events:none}stellar-toggle-option copy-wrap *{color:var(--black)}stellar-toggle-option[dark]{--background:var(--black-alt);--hover-background:var(--black-alt);--border:var(--gray9)}stellar-toggle-option[dark] copy-wrap *{color:white}stellar-toggle-option[dark] .box{background:var(--black)}stellar-toggle-option[dark][type*=\"checkbox\"] .box .active ion-icon{color:var(--black)}";

const ToggleOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.type = "checkbox";
        this.checked = false;
        this.checkedDefault = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.for = "";
        this.default = "";
        this.selectedCopy = "Selected!";
        this._type = "checkbox";
        this.focused = false;
        this.blur = 0;
        this.ease = index$1$1.blurringEase({
            end: 10,
            start: -1,
            duration: 250,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
            },
        });
        this.changeToggle = index.createEvent(this, "changeToggle", 7);
    }
    componentWillLoad() {
        this.updateRealType();
    }
    componentDidLoad() {
        this.input = this.element.querySelector('input.input');
        if (this.checkedDefault) {
            this.checked = this.checkedDefault;
            this.changeToggle.emit({ element: this.element, value: this.value, checked: this.checked });
        }
    }
    updateRealType() {
        if (this.type === "radio-block") {
            this._type = "radio";
        }
        else if (this.type === "checkbox-block") {
            this._type = "checkbox";
        }
        else {
            this._type = this.type;
        }
    }
    async confirm() {
        if (this.input.checked !== this.checked) {
            this.checked = this.input.checked;
        }
    }
    async updateSelected(value) {
        this.input.checked = value;
        this.onToggleChange();
    }
    onToggleChange() {
        this.checked = this.input.checked;
        this.ease.start();
        this.changeToggle.emit({ element: this.element, value: this.checked ? this.value : undefined, checked: this.checked });
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
    }
    onClick() {
        this.input.checked = !this.input.checked;
        this.onToggleChange();
    }
    onKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            this.input.checked = !this.input.checked;
            this.onToggleChange();
        }
    }
    renderCheckbox() {
        if (this.type === "checkbox" || this.type === "radio") {
            return (index.h("div", { class: this.focused ? "box focused" : "box" }, index.h("div", { class: this.checked ? "indicator active" : "indicator" }, this.type === "checkbox" && index.h("ion-icon", { name: "checkmark" }))));
        }
    }
    renderRadioBlock() {
        if (this.type === "radio-block") {
            return (index.h("div", { class: "wrapper" }, index.h("div", { class: this.focused ? "box focused" : "box" }, index.h("div", { class: this.checked ? "indicator active" : "indicator" })), index.h("div", { class: "block-content" }, index.h("slot", null))));
        }
    }
    renderCheckBlock() {
        if (this.type === "checkbox-block") {
            return (index.h("div", { class: "wrapper" }, index.h("div", { class: this.focused ? "box focused" : "box" }, index.h("div", { class: this.checked ? "indicator active" : "indicator" }, index.h("ion-icon", { name: "checkmark" }))), index.h("div", { class: "block-content" }, index.h("slot", null))));
        }
    }
    render() {
        // @ts-ignore
        return index.h("button", { type: "button", onClick: () => this.onClick(), onKeyDown: e => this.onKeyDown(e) }, index.h("input", { type: "hidden", name: `${this.for}[${this.name}]`, value: this.default }), index.h("input", { class: "input", type: this._type, id: `${this.for}_${this.name}_${this.value}`, name: `${this.for}[${this.name}]`, checked: this.checked, value: this.value, required: this.required, onChange: (e) => { e.stopPropagation(); e.preventDefault(); }, onKeyDown: e => this.onKeyDown(e) }), this.renderCheckbox(), ["radio", "checkbox"].indexOf(this.type) !== -1 && index.h("p", null, index.h("slot", null)), this.renderRadioBlock(), this.renderCheckBlock(), ["radio", "checkbox"].indexOf(this.type) === -1 &&
            index.h("stellar-blur", { horizontal: this.blur, class: this.checked ? "status active" : "status" }, index.h("stellar-tag", { size: "small", color: "theme-base5" }, this.selectedCopy)), this.tooltip && index.h("stellar-tooltip", { align: "bottom-left" }, this.tooltip));
    }
    get element() { return index.getElement(this); }
    static get style() { return ToggleOptionCss; }
};
theme.Tunnel.injectProps(ToggleOption, ['dark']);

exports.stellar_toggle_option = ToggleOption;
