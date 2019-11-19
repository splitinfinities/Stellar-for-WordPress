import { d as registerInstance, f as h, g as getElement } from './stellar-core-1e602ba1.js';

class AssetLibrary {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", null, h("stellar-grid", null, this.icons.map((icon) => {
            return (h("stellar-documentation", { codeString: `<stellar-asset name="${icon.icons[this.kind]}" block></stellar-asset>` }));
        }))));
    }
    get element() { return getElement(this); }
}

export { AssetLibrary as stellar_asset_library };
