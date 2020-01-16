'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

const NotFoundCss = "";

const DocsNotFound = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: 'app-profile' }, index.h("h1", null, "404")));
    }
    static get style() { return NotFoundCss; }
};

exports.stellar_docs_not_found = DocsNotFound;
