'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
require('./index-9d31ce96.js');
const activeRouter = require('./active-router-986d3a3b.js');

const RouteTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.titleSuffix = '';
        this.pageTitle = '';
    }
    updateDocumentTitle() {
        const el = this.el;
        if (el.ownerDocument) {
            el.ownerDocument.title = `${this.pageTitle}${this.titleSuffix || ''}`;
        }
    }
    componentWillLoad() {
        this.updateDocumentTitle();
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "pageTitle": ["updateDocumentTitle"]
    }; }
};
activeRouter.ActiveRouter.injectProps(RouteTitle, [
    'titleSuffix',
]);

exports.stencil_route_title = RouteTitle;
