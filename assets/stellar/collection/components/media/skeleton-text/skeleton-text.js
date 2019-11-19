import { h } from '@stencil/core';
import properties from 'css-custom-properties';
export class SkeletonText {
    constructor() {
        this.as = 'p';
        this.width = 100;
        this.loading = false;
    }
    componentWillLoad() {
        properties.set({
            '--width': `${this.width}%`
        }, this.element);
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
        return h("span", null, "\u00A0");
    }
    static get is() { return "skeleton-text"; }
    static get originalStyleUrls() { return {
        "$": ["skeleton-text.css"]
    }; }
    static get styleUrls() { return {
        "$": ["skeleton-text.css"]
    }; }
    static get properties() { return {
        "as": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "as",
            "reflect": true,
            "defaultValue": "'p'"
        },
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
            "defaultValue": "100"
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
        }
    }; }
    static get states() { return {
        "observer": {}
    }; }
    static get elementRef() { return "element"; }
}
