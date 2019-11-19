import { h } from '@stencil/core';
import properties from 'css-custom-properties';
export class SkeletonImg {
    constructor() {
        this.width = 600;
        this.height = 300;
        this.block = false;
        this.loading = false;
        this.icon = false;
    }
    componentWillLoad() {
        if (this.block) {
        }
        else {
            properties.set({
                '--width': `${this.width}px`,
                '--height': `${this.height}px`
            }, this.element);
        }
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    this.element.classList.add('visible');
                }
                else {
                    this.element.classList.remove('visible');
                }
            });
        });
        this.observer.observe(this.element);
    }
    render() {
        return [
            this.loading && this.icon && h("stellar-asset", { name: "spinning-bubbles", color: "gray25" }),
            h("svg", { width: this.width, height: this.height },
                h("rect", { width: this.width, height: this.height }))
        ];
    }
    static get is() { return "skeleton-img"; }
    static get originalStyleUrls() { return {
        "$": ["skeleton-img.css"]
    }; }
    static get styleUrls() { return {
        "$": ["skeleton-img.css"]
    }; }
    static get properties() { return {
        "width": {
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
            "attribute": "width",
            "reflect": true,
            "defaultValue": "600"
        },
        "height": {
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
            "attribute": "height",
            "reflect": true,
            "defaultValue": "300"
        },
        "block": {
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
            "attribute": "block",
            "reflect": true,
            "defaultValue": "false"
        },
        "loading": {
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
            "attribute": "loading",
            "reflect": true,
            "defaultValue": "false"
        },
        "icon": {
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
            "attribute": "icon",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "observer": {}
    }; }
    static get elementRef() { return "element"; }
}
