import { r as registerInstance, h } from './index-cc4604b3.js';

const NotFoundCss = "";

const DocsNotFound = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: 'app-profile' }, h("h1", null, "404")));
    }
    static get style() { return NotFoundCss; }
};

export { DocsNotFound as stellar_docs_not_found };
