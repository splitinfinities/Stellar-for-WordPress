import { Component, Prop, State, Element, Listen, Event, h, Method } from '@stencil/core';
import { properties, delay } from '../../../utils';
import Tunnel from '../../theme';
export class Tab {
    constructor() {
        this.disabled = false;
        this.open = false;
        this.dark = false;
        this.notifications = false;
        this.tag = "button";
        /**
        * Sets the href on the anchor tag if the button is a link.
        */
        this.href = '#';
        /**
         * Sets the target on the anchor tag if the button is a link.
         */
        this.target = '_self';
        this.vertical = false;
    }
    componentWillLoad() {
        this.parent = this.element.closest('stellar-tabs');
        if (window.location.hash && this.href.includes(window.location.hash)) {
            this.handleClick();
        }
    }
    handleResize() {
        this.handleIndicatorPosition();
    }
    componentDidLoad() {
        this.handleIndicatorPosition();
        document.addEventListener('pjax:send', () => {
            if (this.open && window.location.href.includes(this.href)) {
                this.open = false;
                this.removeIndicator();
            }
        });
        document.addEventListener('pjax:complete', () => {
            if (window.location.href.includes(this.href)) {
                this.open = true;
                this.handleIndicatorPosition();
            }
        });
    }
    async activate() {
        await this.handleClick();
    }
    async handleClick(e) {
        const tabs = await this.parent.tabs();
        tabs.forEach((element) => {
            element.open = false;
        });
        this.open = true;
        this.handleIndicatorPosition();
        if (!this.disabled) {
            e && e.preventDefault();
            if (this.tag === "button") {
                this.contentChange.emit({
                    parent: this.parent,
                    name: this.name.replace(/[#]/g, "")
                });
            }
            else if (this.tag === "link") {
                await delay(350);
                window.location.href = this.href;
            }
            else if (this.tag === "pjax") {
                document.querySelector('stellar-pjax').pjax.loadUrl(this.href);
            }
        }
    }
    handleIndicatorPosition() {
        if (this.open && this.parent && this.parent.nodeName === "STELLAR-TABS") {
            // this.parent.blurring()
            if (this.parent.vertical) {
                properties.set({
                    "--tab-top": `${this.element.offsetTop}px`,
                    "--tab-height": `${this.element.offsetHeight}px`,
                    "--indicator-opacity": `1`
                }, this.parent);
            }
            else {
                properties.set({
                    "--tab-left": `${this.element.offsetLeft}px`,
                    "--tab-width": `${this.element.offsetWidth}px`,
                    "--indicator-opacity": `1`
                }, this.parent);
            }
        }
    }
    removeIndicator() {
        if (this.parent && this.parent.nodeName === "STELLAR-TABS") {
            // this.parent.blurring()
            if (this.parent.vertical) {
                properties.set({
                    "--tab-height": `0px`,
                    "--indicator-opacity": `0`
                }, this.parent);
            }
            else {
                properties.set({
                    "--tab-width": `0px`,
                    "--indicator-opacity": `0`
                }, this.parent);
            }
        }
    }
    renderNotifications() {
        return this.notifications && h("stellar-tag", null, this.notifications);
    }
    renderTitle() {
        return h("span", { class: "title" },
            h("slot", null));
    }
    renderButton() {
        return (h("button", { role: "tab", type: "button", disabled: this.disabled, "aria-selected": this.open ? "true" : "false", "aria-setsize": this.tabCount, "aria-posinset": this.order, tabindex: "0", class: "tab-button", onClick: (e) => this.handleClick(e) },
            this.renderNotifications(),
            this.renderTitle()));
    }
    renderLink() {
        return (h("a", { role: "tab", href: this.href, target: this.target, class: "tab-button", "data-disabled": this.disabled, onClick: (e) => { this.handleClick(e); } },
            this.renderNotifications(),
            this.renderTitle()));
    }
    renderAppLink() {
        return (h("stencil-route-link", { role: "tab", url: this.href, anchorClass: "tab-button", "data-disabled": this.disabled, onClick: (e) => { this.handleClick(e); } },
            this.renderNotifications(),
            this.renderTitle()));
    }
    render() {
        return h("div", { class: "tab-wrap" },
            this.tag === "button" && this.renderButton(),
            this.tag === "link" && this.renderLink(),
            this.tag === "route-link" && this.renderAppLink(),
            this.tag === "pjax" && this.renderButton());
    }
    static get is() { return "stellar-tab"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tab.css"]
    }; }
    static get styleUrls() { return {
        "$": ["tab.css"]
    }; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": true
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "open": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "open",
            "reflect": true,
            "defaultValue": "false"
        },
        "dark": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "dark",
            "reflect": true,
            "defaultValue": "false"
        },
        "notifications": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "boolean | number",
                "resolved": "boolean | number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "notifications",
            "reflect": false,
            "defaultValue": "false"
        },
        "tag": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"button\" | \"link\" | \"route-link\" | \"pjax\"",
                "resolved": "\"button\" | \"link\" | \"pjax\" | \"route-link\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "tag",
            "reflect": false,
            "defaultValue": "\"button\""
        },
        "href": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the href on the anchor tag if the button is a link."
            },
            "attribute": "href",
            "reflect": false,
            "defaultValue": "'#'"
        },
        "target": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the target on the anchor tag if the button is a link."
            },
            "attribute": "target",
            "reflect": false,
            "defaultValue": "'_self'"
        },
        "order": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "order",
            "reflect": true
        },
        "tabCount": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "tab-count",
            "reflect": true
        },
        "vertical": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "vertical",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "parent": {}
    }; }
    static get events() { return [{
            "method": "contentChange",
            "name": "contentChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "activate": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "resize",
            "method": "handleResize",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
Tunnel.injectProps(Tab, ['dark']);
