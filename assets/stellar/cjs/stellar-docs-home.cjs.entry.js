'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

const DocsHome = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("stellar-docs-header", null), index.h("stellar-layout", { size: "large", type: "sidebar" }, index.h("aside", null, index.h("stellar-docs-navigation", null)), index.h("main", null, index.h("h1", null, "Home!")))));
    }
};

exports.stellar_docs_home = DocsHome;
