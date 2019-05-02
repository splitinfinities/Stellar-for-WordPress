import properties from 'css-custom-properties';
export class SkeletonImg {
    constructor() {
        this.width = 600;
        this.height = 300;
        this.loading = false;
        this.icon = false;
    }
    componentWillLoad() {
        properties.set({
            '--width': `${this.width}px`,
            '--height': `${this.height}px`
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
        return [
            this.loading && this.icon && h("stellar-asset", { name: "spinning-bubbles", color: "gray25" }),
            h("svg", { width: this.width, height: this.height },
                h("rect", { width: this.width, height: this.height }))
        ];
    }
    static get is() { return "skeleton-img"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "height": {
            "type": Number,
            "attr": "height"
        },
        "icon": {
            "type": Boolean,
            "attr": "icon"
        },
        "loading": {
            "type": Boolean,
            "attr": "loading"
        },
        "observer": {
            "state": true
        },
        "width": {
            "type": Number,
            "attr": "width"
        }
    }; }
    static get style() { return "/**style-placeholder:skeleton-img:**/"; }
}
