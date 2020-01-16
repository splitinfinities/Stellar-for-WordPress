'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
require('./index-9d31ce96.js');
const dependencies = require('./dependencies-2b13873c.js');

const DocsComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        const tag = this.match.params.name;
        this.data = await this.loader.getAllForTag(tag);
    }
    async componentDidUpdate() {
        const tag = this.match.params.name;
        this.data = await this.loader.getAllForTag(tag);
    }
    renderUsage() {
        return (index.h("div", null, index.h("stellar-tabs", { name: "stellar-code-examples" }, this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map((name, index$1) => {
            return (index.h("stellar-tab", { name: `#${this.data.tag}-${name}`, open: index$1 === 0 }, name));
        }), index.h("stellar-tab", null)), this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map((name, index$1) => {
            return (index.h("stellar-content", { for: "stellar-code-examples", id: `${this.data.tag}-${name}`, open: index$1 === 0 }, index.h("stellar-code", { codeString: this.data.documentation.usage[name], preview: true })));
        })));
    }
    render() {
        if (this.match && this.match.params.name && this.data) {
            return (index.h("div", null, index.h("stellar-docs-header", null), index.h("stellar-layout", { size: "large", type: "sidebar", align: "top" }, index.h("aside", null, index.h("stellar-docs-navigation", null)), index.h("main", { class: "min-vh-100" }, index.h("stellar-markdown", { codeString: this.data.documentation && this.data.documentation.readme || "Readme to come..." }), index.h("stellar-tabs", { name: "stellar-docs", block: true }, index.h("stellar-tab", { name: "design" }, "Design"), index.h("stellar-tab", { name: "code", open: true }, "Code"), index.h("stellar-tab", { name: "details" }, "Details")), index.h("stellar-content", { for: "stellar-docs", id: "details" }, index.h("stellar-layout", { size: "flush" }, index.h("stellar-markdown", { src: `/components/${this.data.tag}/readme.md` }))), index.h("stellar-content", { for: "stellar-docs", id: "design" }, index.h("stellar-layout", { size: "flush" }, index.h("h1", null, "Design"))), index.h("stellar-content", { for: "stellar-docs", id: "code", open: true }, index.h("stellar-layout", { size: "flush", align: "top" }, index.h("article", null, this.renderUsage())), index.h("stellar-layout", { size: "flush", align: "top" }, index.h("aside", null, index.h("stellar-card", { padding: "none" }, index.h("div", null, index.h("p", { class: "fw6 fs7 pa3 tc" }, "Bundles"), index.h("hr", { class: "mv0" }), index.h("stellar-accordion", { tight: true }, index.h("stellar-item", { slot: "label" }, "Uses ", this.data.stats && this.data.stats.dependencies && this.data.stats.dependencies.length || "0"), this.data.stats && this.data.stats.dependencies && this.data.stats.dependencies.map(component => index.h("stellar-item", { type: "a", href: `/component/${component}`, route: true }, component))), index.h("stellar-accordion", { tight: true }, index.h("stellar-item", { slot: "label" }, "Used by ", this.data.stats && this.data.stats.dependencyOf && this.data.stats.dependencyOf.length || "0"), this.data.stats && this.data.stats.dependencyOf && this.data.stats.dependencyOf.map(component => index.h("stellar-item", { type: "a", href: `/component/${component}`, route: true }, component))))))))))));
        }
    }
};
dependencies.Tunnel.injectProps(DocsComponent, ['loader', 'ready']);

exports.stellar_docs_component = DocsComponent;
