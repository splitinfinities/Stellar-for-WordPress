import { r as registerInstance, h } from './index-cc4604b3.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './dependencies-4783cb9f.js';

const DocsNavigation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    renderItem(tag_name) {
        const name = tag_name.replace("stellar-", "");
        return h("stellar-item", { fit: true, wrap: true, type: "stencil-route-link", route: true, href: `/component/${tag_name}` }, name, h("small", { class: "db theme-base5" }, `<${tag_name}>`));
    }
    render() {
        return this.ready && h("stellar-card", { padding: "tiny" }, h("div", null, h("stellar-item", { type: "stencil-route-link", route: true, href: "/" }, "Home"), h("stellar-accordion", { tight: true }, h("stellar-item", { type: "button", slot: "label" }, "Introduction"), h("stellar-item", { type: "stencil-route-link", route: true, href: "/design-principles" }, "Design Principles"), h("stellar-item", { type: "stencil-route-link", route: true, href: "/installation" }, "Installation"), h("stellar-item", { type: "stencil-route-link", route: true, href: "/tutorial" }, "Tutorial"), h("stellar-item", { type: "stencil-route-link", route: true, href: "/deploying" }, "Deploying"), h("stellar-item", { type: "stencil-route-link", route: true, href: "/browser-support" }, "Browser Support")), h("stellar-accordion", { tight: true }, h("stellar-item", { slot: "label" }, "Components ", h("stellar-tag", { size: "small", color: "theme-complement8", class: "self-end maa mr0", pill: true }, this.loader.components.length)), this.loader.components.map((component) => this.renderItem(component)))));
    }
};
Tunnel.injectProps(DocsNavigation, ['loader', 'collection', 'documentation', 'ready']);

export { DocsNavigation as stellar_docs_navigation };
