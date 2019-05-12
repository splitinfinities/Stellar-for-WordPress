import properties from 'css-custom-properties';
export class SkeletonImg {
    constructor() {
        this.width = 600;
        this.height = 300;
        this.block = false;
        this.loading = false;
        this.icon = false;
    }
    componentWillLoad() {
        if (this.block) {
        }
        else {
            properties.set({
                '--width': `${this.width}px`,
                '--height': `${this.height}px`
            }, this.element);
        }
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
        return [
            this.loading && this.icon && h("stellar-asset", { name: "spinning-bubbles", color: "gray25" }),
            h("svg", { width: this.width, height: this.height },
                h("rect", { width: this.width, height: this.height }))
        ];
    }
    static get is() { return "skeleton-img"; }
    static get properties() { return {
        "block": {
            "type": Boolean,
            "attr": "block",
            "reflectToAttr": true
        },
        "element": {
            "elementRef": true
        },
        "height": {
            "type": Number,
            "attr": "height",
            "reflectToAttr": true
        },
        "icon": {
            "type": Boolean,
            "attr": "icon",
            "reflectToAttr": true
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
            "attr": "width",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "/**style-placeholder:skeleton-img:**/"; }
}
