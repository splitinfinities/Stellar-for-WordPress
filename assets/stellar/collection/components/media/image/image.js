import { delay, properties, mediumZoom } from '../../../utils';
import { ColorThief } from './vendor/colorThief.js';
export class Picture {
    constructor() {
        this.type = "picture";
        this.nozoom = false;
        this.bg = "auto";
        this.sources = [];
        this.active = false;
    }
    componentWillLoad() {
        this.prepareSources();
        this.setBG();
        this.updateAspectRatio();
    }
    componentDidLoad() {
        this.addIntersectionObserver();
        this.figure = this.element.shadowRoot.querySelector('figure');
    }
    mountZoom() {
        let zoomable = this.element.shadowRoot.querySelector('img');
        this.zoom = mediumZoom(zoomable, {
            background: `${this.bg}`,
            scrollOffset: 1,
            margin: 30
        });
    }
    handlePosterChange() {
        this.setBG();
    }
    handleActive() {
        this.setBackgroundImage();
    }
    async medium() {
        return this.zoom;
    }
    async handleImage() {
        this.active = true;
        if (!this.nozoom) {
            await delay(200);
            this.mountZoom();
        }
    }
    addIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    this.handleImage();
                    this.removeIntersectionObserver();
                }
            }, {
                rootMargin: '50%',
                threshold: [0]
            });
            this.io.observe(this.element);
        }
        else {
            setTimeout(() => {
                this.handleImage();
            }, 300);
        }
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    getPictureColor() {
        const img = new Image(80, 80);
        img.addEventListener('load', () => {
            const cf = new ColorThief();
            this.palette = cf.getColor(img);
            properties.set({
                "--background-color": `rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`
            }, this.element);
            this.bg = `rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`;
            if (this.zoom) {
                this.zoom.update({
                    background: this.bg
                });
            }
        }, false);
        img.src = this.poster;
        img.crossOrigin = "Anonymous";
    }
    setBG() {
        if (this.bg === "auto") {
            this.getPictureColor();
        }
        else {
            properties.set({
                "--background-color": `${this.bg}`
            }, this.element);
        }
    }
    prepareSources() {
        const sources = this.element.querySelectorAll("source");
        let sourcesArray = [];
        [].forEach.call(sources, (source) => {
            sourcesArray = [...sourcesArray, source];
            source.hidden = true;
        });
        this.sources = sourcesArray;
        this.poster = this.poster ? this.poster : this.sources[this.sources.length - 1].srcset;
        this.large = this.sources[0].srcset;
        this.setBackgroundImage();
    }
    setBackgroundImage() {
        properties.set({
            "--background-image": `url('${this.active ? this.large : this.poster}')`
        }, this.element);
    }
    updateAspectRatio() {
        this.aspectRatio = (this.height / this.width) * 100;
        properties.set({
            "--aspect_ratio": `${this.aspectRatio}%`,
            "--width": `${this.width}px`,
            "--height": `${this.height}px`,
        }, this.element);
    }
    renderPicture() {
        if (this.active) {
            return [
                this.sources.map((source) => h("source", { srcSet: source.srcset, media: source.media ? source.media : false })),
                h("img", { src: this.large, class: "final_image" })
            ];
        }
    }
    render() {
        if (this.type === "picture") {
            return h("figure", { itemtype: "http://schema.org/ImageObject", class: this.active ? 'loaded' : '', onClick: () => { this.zoom && this.zoom.open(); } },
                h("div", { class: "overlay" }),
                h("picture", null, this.renderPicture()),
                h("div", { class: "placeholder", style: { "background-image": `url(${this.poster})` } }));
        }
    }
    static get is() { return "stellar-image"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "state": true,
            "watchCallbacks": ["handleActive"]
        },
        "aspectRatio": {
            "state": true
        },
        "bg": {
            "type": String,
            "attr": "bg",
            "mutable": true
        },
        "element": {
            "elementRef": true
        },
        "figure": {
            "state": true
        },
        "height": {
            "type": Number,
            "attr": "height"
        },
        "io": {
            "state": true
        },
        "large": {
            "type": String,
            "attr": "large",
            "mutable": true
        },
        "medium": {
            "method": true
        },
        "nozoom": {
            "type": Boolean,
            "attr": "nozoom",
            "reflectToAttr": true
        },
        "palette": {
            "state": true
        },
        "poster": {
            "type": String,
            "attr": "poster",
            "mutable": true,
            "watchCallbacks": ["handlePosterChange"]
        },
        "sources": {
            "state": true
        },
        "type": {
            "type": String,
            "attr": "type",
            "reflectToAttr": true,
            "mutable": true
        },
        "width": {
            "type": Number,
            "attr": "width"
        },
        "zoom": {
            "state": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-image:**/"; }
}
