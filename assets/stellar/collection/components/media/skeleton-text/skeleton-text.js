import properties from 'css-custom-properties';
export class SkeletonText {
    constructor() {
        this.as = 'p';
        this.width = 100;
        this.loading = false;
    }
    componentWillLoad() {
        properties.set({
            '--width': `${this.width}%`
        }, this.element);
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    this.element.classList.add('visible');
                }
                else {
                    this.element.classList.remove('visible');
                }
            });
        });
        this.observer.observe(this.element);
    }
    render() {
        return h("span", null, "\u00A0");
    }
    static get is() { return "skeleton-text"; }
    static get properties() { return {
        "as": {
            "type": String,
            "attr": "as",
            "reflectToAttr": true
        },
        "element": {
            "elementRef": true
        },
        "loading": {
            "type": Boolean,
            "attr": "loading",
            "reflectToAttr": true
        },
        "observer": {
            "state": true
        },
        "width": {
            "type": Number,
            "attr": "width"
        }
    }; }
    static get style() { return "/**style-placeholder:skeleton-text:**/"; }
}
