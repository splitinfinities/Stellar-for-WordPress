import { c as registerInstance, f as getElement } from './stellar-core-3af17cd6.js';
import { a as ActiveRouter } from './chunk-75188364.js';

class RouteTitle {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.titleSuffix = '';
        this.pageTitle = '';
    }
    updateDocumentTitle() {
        document.title = `${this.pageTitle}${this.titleSuffix || ''}`;
    }
    componentWillLoad() {
        this.updateDocumentTitle();
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "pageTitle": ["updateDocumentTitle"]
    }; }
}
ActiveRouter.injectProps(RouteTitle, [
    'titleSuffix',
]);

export { RouteTitle as stencil_route_title };
