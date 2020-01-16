import { Component, Prop, State, Element, Event, Method, h, Watch, Listen } from '@stencil/core';
import { properties, ResizeObserver, delay } from '../../../utils';
import Tunnel from '../../theme';
import "ionicons";
export class Card {
    constructor() {
        /**
         * Renders a shadow on the card
         */
        this.shadow = "medium";
        /**
         * Let's a card be flippable
         */
        this.flippable = false;
        /**
         * Let's a card be flippable
         */
        this.flipReady = false;
        /**
         * Renders a flipped card
         */
        this.flipped = false;
        /**
         * Sets the padding inside of the button. Can be small, medium, or large.
         */
        this.padding = "medium";
        /**
         * Sets the element to render the card as - an anchor tag, a button, or a div.
         */
        this.tag = "div";
        /**
         * Sets the href if the card is a link.
         */
        this.href = "#";
        /**
         * Sets the name if the card is a button.
         */
        this.name = "";
        /**
         * Sets the value if the card is a button.
         */
        this.value = "#";
        /**
         * Removes the resize observer
         */
        this.noresize = false;
        /**
         * Sets the href on the anchor tag if the button is a link.
         */
        this.flipIcon = "cog";
        this.dark = false;
    }
    componentDidLoad() {
        this.updateFlippableCardHeight();
        this.addResizeObserver();
    }
    addResizeObserver() {
        if (!this.noresize) {
            this.ro = new ResizeObserver(async (entries) => {
                for (const entry of entries) {
                    const { width } = entry.contentRect;
                    properties.set({ '--card-width': `${width}px` }, entry.target);
                }
            });
            this.ro.observe(this.element);
        }
    }
    async updateFlippableCardHeight() {
        await delay(100);
        if (this.flippable) {
            const front = this.element.shadowRoot.querySelector('.front');
            const back = this.element.shadowRoot.querySelector('.back');
            const front_height = front.offsetHeight;
            const back_height = back.scrollHeight;
            if (!this.originalHeight) {
                this.originalHeight = back_height;
            }
            properties.set({ '--min-height': `${front_height}px` }, this.element);
            properties.set({ '--flipped-min-height': `${back_height}px` }, this.element);
        }
        else {
            properties.unset('--flipped-min-height', this.element);
            properties.unset('--min-height', this.element);
            this.originalHeight = undefined;
        }
    }
    async updateBackCardHeight() {
        if (this.flippable) {
            const back = this.element.shadowRoot.querySelector('.back');
            const back_height = back.scrollHeight;
            properties.set({ '--flipped-min-height': `${back_height}px` }, this.element);
        }
        return true;
    }
    async handleKeyUp() {
        this.flipReady = false;
        properties.set({ '--flipped-min-height': `${this.originalHeight}px` }, this.element);
        await this.updateBackCardHeight();
    }
    async click() {
        if (this.for) {
            const target = this.for.split(":");
            if (target[0] === "modal") {
                // @ts-ignore
                const modal = document.querySelector(`stellar-modal[name="${target[1]}"]`);
                modal.open();
            }
        }
        return true;
    }
    async handleFlipped() {
        await delay(350);
        this.flipReady = false;
        properties.set({ '--flipped-min-height': `${this.originalHeight}px` }, this.element);
        await delay(100);
        await this.updateBackCardHeight();
    }
    async flip_card(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.flippable) {
            this.flipReady = true;
            this.flipped = !this.flipped;
            this.flip.emit();
        }
    }
    render() {
        const childProps = {
            href: this.href,
            url: this.href,
            name: this.name,
            value: this.value,
            type: this.type
        };
        // @ts-ignore
        return (h(this.tag, Object.assign({}, childProps, { class: "stencil-route-link" !== this.tag ? "wrap" : "", anchorClass: "stencil-route-link" === this.tag ? "wrap" : "", onClick: (e) => { this.click(e); } }),
            this.flippable && [
                this.flipIcon && this.flipIcon !== "false" && h("stellar-button", { tag: "button", ghost: true, class: "flip-button", onClick: (e) => { e.stopPropagation(); e.preventDefault(); this.flip_card(e); } },
                    h("ion-icon", { name: this.flipped ? "close" : this.flipIcon, class: "ma0" })),
                h("div", { class: "front" },
                    h("slot", null)),
                h("div", { class: "back" },
                    h("slot", { name: "back" }))
            ],
            !this.flippable && h("slot", null)));
    }
    static get is() { return "stellar-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["card.css"]
    }; }
    static get properties() { return {
        "shadow": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"light\" | \"medium\" | \"heavy\"",
                "resolved": "\"heavy\" | \"light\" | \"medium\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Renders a shadow on the card"
            },
            "attribute": "shadow",
            "reflect": false,
            "defaultValue": "\"medium\""
        },
        "flippable": {
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
                "text": "Let's a card be flippable"
            },
            "attribute": "flippable",
            "reflect": true,
            "defaultValue": "false"
        },
        "flipReady": {
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
                "text": "Let's a card be flippable"
            },
            "attribute": "flip-ready",
            "reflect": true,
            "defaultValue": "false"
        },
        "flipped": {
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
                "text": "Renders a flipped card"
            },
            "attribute": "flipped",
            "reflect": true,
            "defaultValue": "false"
        },
        "padding": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"none\" | \"tiny\" | \"small\" | \"medium\" | \"large\"",
                "resolved": "\"large\" | \"medium\" | \"none\" | \"small\" | \"tiny\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the padding inside of the button. Can be small, medium, or large."
            },
            "attribute": "padding",
            "reflect": true,
            "defaultValue": "\"medium\""
        },
        "tag": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"stencil-route-link\" | \"a\" | \"button\" | \"div\"",
                "resolved": "\"a\" | \"button\" | \"div\" | \"stencil-route-link\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the element to render the card as - an anchor tag, a button, or a div."
            },
            "attribute": "tag",
            "reflect": false,
            "defaultValue": "\"div\""
        },
        "type": {
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
                "text": "Sets the type on a button"
            },
            "attribute": "type",
            "reflect": false
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
                "text": "Sets the href if the card is a link."
            },
            "attribute": "href",
            "reflect": false,
            "defaultValue": "\"#\""
        },
        "name": {
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
                "text": "Sets the name if the card is a button."
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "value": {
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
                "text": "Sets the value if the card is a button."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "\"#\""
        },
        "for": {
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
            "attribute": "for",
            "reflect": false
        },
        "noresize": {
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
                "text": "Removes the resize observer"
            },
            "attribute": "noresize",
            "reflect": false,
            "defaultValue": "false"
        },
        "flipIcon": {
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
            "attribute": "flip-icon",
            "reflect": false,
            "defaultValue": "\"cog\""
        },
        "dark": {
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
            "attribute": "dark",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "flipTimeout": {}
    }; }
    static get events() { return [{
            "method": "flip",
            "name": "flip",
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
        "flip_card": {
            "complexType": {
                "signature": "(e?: UIEvent) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "UIEvent": {
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
    static get watchers() { return [{
            "propName": "flippable",
            "methodName": "updateFlippableCardHeight"
        }, {
            "propName": "flipped",
            "methodName": "handleFlipped"
        }]; }
    static get listeners() { return [{
            "name": "keyup",
            "method": "handleKeyUp",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
Tunnel.injectProps(Card, ['dark']);
