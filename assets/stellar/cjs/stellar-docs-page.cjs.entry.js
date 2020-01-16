'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

const DocsPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        if (this.match && this.match.params.name) {
            return (index.h("div", null, index.h("stellar-docs-header", null), index.h("stellar-layout", { size: "large", type: "sidebar", align: "top" }, index.h("aside", null, index.h("stellar-docs-navigation", null)), index.h("main", null, index.h("stellar-markdown", { src: `/build/data/markdown/${this.match.params.name}.md` })))));
        }
    }
};

exports.stellar_docs_page = DocsPage;
