import { h } from '@stencil/core';
import Rellax from 'rellax';
export class Parallax {
    componentWillLoad() {
        this.relax = new Rellax('stellar-parallax-section', {
            center: true
        });
    }
    componentDidLoad() {
        this.reload();
    }
    async reload() {
        this.relax.refresh();
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "stellar-parallax"; }
    static get originalStyleUrls() { return {
        "$": ["parallax.css"]
    }; }
    static get styleUrls() { return {
        "$": ["parallax.css"]
    }; }
    static get states() { return {
        "relax": {}
    }; }
    static get methods() { return {
        "reload": {
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
}
