import { d as registerInstance, g as getElement } from './stellar-core-1e602ba1.js';
import { a as ActiveRouter } from './chunk-8013bf55.js';

/**
  * Updates the document title when found.
  *
  * @name RouteTitle
  * @description
 */
class RouteTitle {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "pageTitle": ["updateDocumentTitle"]
    }; }
}
ActiveRouter.injectProps(RouteTitle, [
    'titleSuffix',
]);

export { RouteTitle as stencil_route_title };
