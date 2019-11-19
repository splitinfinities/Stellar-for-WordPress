'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-f620c3d3.js');

class AssetLibrary {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        return (__chunk_1.h("div", null, __chunk_1.h("stellar-grid", null, this.icons.map((icon) => {
            return (__chunk_1.h("stellar-documentation", { codeString: `<stellar-asset name="${icon.icons[this.kind]}" block></stellar-asset>` }));
        }))));
    }
    get element() { return __chunk_1.getElement(this); }
}

exports.stellar_asset_library = AssetLibrary;
