import { r as registerInstance, h } from './index-bcfb4a9f.js';
var NotFoundCss = "";
var DocsNotFound = /** @class */ (function () {
    function DocsNotFound(hostRef) {
        registerInstance(this, hostRef);
    }
    DocsNotFound.prototype.render = function () {
        return (h("div", { class: 'app-profile' }, h("h1", null, "404")));
    };
    Object.defineProperty(DocsNotFound, "style", {
        get: function () { return NotFoundCss; },
        enumerable: true,
        configurable: true
    });
    return DocsNotFound;
}());
export { DocsNotFound as stellar_docs_not_found };
