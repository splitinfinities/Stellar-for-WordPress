import { h } from '@stencil/core';
import { properties, ResizeObserver } from '../../../utils';
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
         * Sets the href on the anchor tag if the button is a link.
         */
        this.flip_icon = "cog";
        this.rotationLimit = 0.75;
        this.transition = false;
    }
    refresh() {
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.middleX = this.width / 2;
        this.middleY = this.height / 2;
    }
    componentDidLoad() {
        if (this.tag === "a") {
            setTimeout(() => { this.refresh(); }, 10);
            this.element.addEventListener('mouseenter', this.addRotation.bind(this));
            this.element.addEventListener('mousemove', this.animateRotation.bind(this));
            this.element.addEventListener('mouseleave', this.removeRotation.bind(this));
        }
        this.updateFlippableCardHeight();
        this.addResizeObserver();
    }
    addResizeObserver() {
        this.ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width } = entry.contentRect;
                properties.set({ '--card-width': `${width}px` }, entry.target);
            }
        });
        this.ro.observe(this.element);
    }
    updateFlippableCardHeight() {
        if (this.flippable) {
            const front = this.element.shadowRoot.querySelector('.front');
            const front_height = front.offsetHeight;
            properties.set({ '--min-height': `${front_height}px` }, this.element);
            const back = this.element.shadowRoot.querySelector('.back');
            const back_height = back.scrollHeight;
            properties.set({ '--flipped-min-height': `${back_height + 50}px` }, this.element);
        }
    }
    addRotation() {
        this.refresh();
        this.transition = true;
        setTimeout(() => {
            this.transition = false;
        }, 250);
    }
    async animateRotation(event) {
        const x = event.offsetX;
        const y = event.offsetY;
        const rotateX = (x - this.middleX) * (this.rotationLimit / this.middleX);
        const rotateY = (this.middleY - y) * (this.rotationLimit / this.middleY);
        properties.set({
            "--card-transform": `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`,
            "--card-hover-top": `${(rotateY / this.rotationLimit)}rem`,
            "--card-hover-right": `${((rotateX / this.rotationLimit) * -1)}rem`
        }, this.element);
    }
    async removeRotation() {
        this.refresh();
        this.transition = true;
        setTimeout(() => {
            this.transition = false;
            properties.set({
                "--card-transform": `rotateX(0deg) rotateY(0deg)`,
                "--card-hover-top": `0px`,
                "--card-hover-right": `0px`
            }, this.element);
        }, 250);
    }
    async click(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
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
    async flip_card(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.flippable) {
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
                h("stellar-button", { tag: "button", ghost: true, class: "flip-button", onClick: (e) => { e.stopPropagation(); e.preventDefault(); this.flip_card(e); } },
                    h("stellar-asset", { name: this.flipped ? "close" : this.flip_icon, class: "ma0" })),
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
                "original": "string|\"light\"|\"medium\"|\"heavy\"",
                "resolved": "string",
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
                "original": "string|\"small\"|\"medium\"|\"large\"",
                "resolved": "string",
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
                "original": "\"stencil-route-link\"|\"a\"|\"button\"|\"div\"",
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
                "text": "Sets the element to render the card as - an anchor tag, a button, or a div."
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
        "flip_icon": {
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
            "attribute": "flip_icon",
            "reflect": false,
            "defaultValue": "\"cog\""
        },
        "transition": {
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
            "attribute": "transition",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "width": {},
        "height": {},
        "middleX": {},
        "middleY": {},
        "rotationLimit": {},
        "ro": {}
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
}
