'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');
const __chunk_12 = require('./chunk-140cc5da.js');

class RouteTitle {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.titleSuffix = '';
        this.pageTitle = '';
    }
    updateDocumentTitle() {
        document.title = `${this.pageTitle}${this.titleSuffix || ''}`;
    }
    componentWillLoad() {
        this.updateDocumentTitle();
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "pageTitle": ["updateDocumentTitle"]
    }; }
}
__chunk_12.ActiveRouter.injectProps(RouteTitle, [
    'titleSuffix',
]);

exports.stencil_route_title = RouteTitle;
