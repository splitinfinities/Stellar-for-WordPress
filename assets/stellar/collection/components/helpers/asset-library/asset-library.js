import { h } from '@stencil/core';
export class AssetLibrary {
    constructor() {
        this.icons = [];
        this.kind = 0;
    }
    componentWillLoad() {
        this.fetchIcons();
    }
    async fetchIcons() {
        const response = await fetch("https://unpkg.com/ionicons@4.2.0/dist/ionicons/data.json");
        const data = await response.json();
        this.icons = data.icons;
    }
    render() {
        return (h("div", null,
            h("stellar-grid", null, this.icons.map((icon) => {
                return (h("stellar-documentation", { codeString: `<stellar-asset name="${icon.icons[this.kind]}" block></stellar-asset>` }));
            }))));
    }
    static get is() { return "stellar-asset-library"; }
    static get states() { return {
        "icons": {},
        "kind": {}
    }; }
    static get elementRef() { return "element"; }
}
