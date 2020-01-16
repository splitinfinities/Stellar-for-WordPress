import { Component, Host, h, Prop, Element, getAssetPath, Watch } from '@stencil/core';
import { asyncForEach } from '../../../utils';
export class Map {
    constructor() {
        this.lat = -34.397;
        this.lng = 150.644;
        this.zoom = 8;
        this.width = 1600;
        this.height = 900;
        this.noUi = false;
        this.block = false;
        this.gestureHandling = "auto";
        this.zoomControls = false;
        this.streetView = false;
        this.mapType = false;
        this.fullscreenControl = false;
        this.loaded = false;
        this.markers = [];
    }
    componentDidLoad() {
        this.loadGoogleMaps();
    }
    async handleTheme() {
        let styles = [];
        if (this.theme) {
            styles = await (await fetch(getAssetPath(`./themes/${this.theme}.json`))).json();
        }
        this.map.setOptions({ styles });
    }
    loadGoogleMaps() {
        const googleMapsUrl = `https://maps.google.com/maps/api/js?key=${this.apikey}&callback=initializeGoogleMap`;
        window["initializeGoogleMap"] = () => { this.initMap(); };
        if (!window["loadingGoogleMaps"] && (typeof google !== 'object' || typeof google.maps !== 'object')) {
            window["loadingGoogleMaps"] = true;
            document.body.appendChild(Object.assign(document.createElement('script'), {
                type: 'text/javascript',
                src: googleMapsUrl,
                onload: () => this.initMap()
            }));
        }
        else if (typeof google === 'object' && typeof google.maps === 'object') {
            this.initMap();
        }
    }
    async initMap() {
        if (this.apikey) {
            let styles = [];
            if (this.theme) {
                styles = await (await fetch(getAssetPath(`./themes/${this.theme}.json`))).json();
            }
            this.map = new google.maps.Map(this.el.querySelector('#map'), {
                center: { lat: this.lat, lng: this.lng },
                zoom: this.zoom,
                disableDefaultUI: this.noUi,
                gestureHandling: this.gestureHandling,
                zoomControl: this.zoomControls,
                streetViewControl: this.streetView,
                mapTypeControl: this.mapType,
                fullscreenControl: this.fullscreenControl,
                styles
            });
            this.infowindow = new google.maps.InfoWindow();
            this.initMarkers();
            this.hideLoader();
        }
    }
    async initMarkers() {
        const markerEls = this.el.querySelectorAll('stellar-google-maps-marker');
        await asyncForEach(markerEls, async (markerEl) => {
            const marker = new google.maps.Marker(await markerEl.configuration(this.map));
            marker.addListener('click', () => {
                this.infowindow.setContent(markerEl.innerHTML);
                this.infowindow.open(this.map, marker);
            });
            this.markers.push(marker);
        });
    }
    hideLoader() {
        this.loaded = true;
    }
    render() {
        return h(Host, { intrinsicsize: `${this.width} x ${this.height}`, style: {
                "--width": `${this.width}px`,
                "--height": `${this.height}px`,
                "--aspect-ratio": `${this.height / this.width}`
            } },
            h("skeleton-img", { width: this.width, height: this.height, loading: true, style: { "opacity": `${this.loaded ? 0 : 1}` } }),
            h("div", { id: "map" }));
    }
    static get is() { return "stellar-google-maps"; }
    static get originalStyleUrls() { return {
        "$": ["map.css"]
    }; }
    static get styleUrls() { return {
        "$": ["map.css"]
    }; }
    static get assetsDirs() { return ["themes"]; }
    static get properties() { return {
        "apikey": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "apikey",
            "reflect": false
        },
        "lat": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "lat",
            "reflect": false,
            "defaultValue": "-34.397"
        },
        "lng": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "lng",
            "reflect": false,
            "defaultValue": "150.644"
        },
        "zoom": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "zoom",
            "reflect": false,
            "defaultValue": "8"
        },
        "width": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "width",
            "reflect": false,
            "defaultValue": "1600"
        },
        "height": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "height",
            "reflect": false,
            "defaultValue": "900"
        },
        "noUi": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "no-ui",
            "reflect": false,
            "defaultValue": "false"
        },
        "block": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "block",
            "reflect": false,
            "defaultValue": "false"
        },
        "theme": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "theme",
            "reflect": false
        },
        "gestureHandling": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"greedy\" | \"cooperative\" | \"none\" | \"auto\"",
                "resolved": "\"auto\" | \"cooperative\" | \"greedy\" | \"none\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "gesture-handling",
            "reflect": false,
            "defaultValue": "\"auto\""
        },
        "zoomControls": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "zoom-controls",
            "reflect": false,
            "defaultValue": "false"
        },
        "streetView": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "street-view",
            "reflect": false,
            "defaultValue": "false"
        },
        "mapType": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "map-type",
            "reflect": false,
            "defaultValue": "false"
        },
        "fullscreenControl": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "fullscreen-control",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "theme",
            "methodName": "handleTheme"
        }]; }
}
