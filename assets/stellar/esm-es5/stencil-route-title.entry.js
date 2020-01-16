import { r as registerInstance, d as getElement } from './index-bcfb4a9f.js';
import './index-9ff8bd5c.js';
import { A as ActiveRouter } from './active-router-e331149e.js';
var RouteTitle = /** @class */ (function () {
    function RouteTitle(hostRef) {
        registerInstance(this, hostRef);
        this.titleSuffix = '';
        this.pageTitle = '';
    }
    RouteTitle.prototype.updateDocumentTitle = function () {
        var el = this.el;
        if (el.ownerDocument) {
            el.ownerDocument.title = "" + this.pageTitle + (this.titleSuffix || '');
        }
    };
    RouteTitle.prototype.componentWillLoad = function () {
        this.updateDocumentTitle();
    };
    Object.defineProperty(RouteTitle.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteTitle, "watchers", {
        get: function () {
            return {
                "pageTitle": ["updateDocumentTitle"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return RouteTitle;
}());
ActiveRouter.injectProps(RouteTitle, [
    'titleSuffix',
]);
export { RouteTitle as stencil_route_title };
