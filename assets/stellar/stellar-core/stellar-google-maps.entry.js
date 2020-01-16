import { r as registerInstance, c as getAssetPath, h, H as Host, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import './css-custom-properties.min-d9d14253.js';
import { a as asyncForEach } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';

const MapCss = "stellar-google-maps {\n  display: grid;\n  padding-bottom: var(--aspect-ratio);\n  overflow: hidden;\n  max-width: var(--width);\n  max-height: var(--height);\n}\n\nstellar-google-maps[block],\nstellar-google-maps[block] skeleton-img,\nstellar-google-maps[block] #map {\n  max-width: 100%;\n  max-height: auto;\n}\n\nstellar-google-maps skeleton-img {\n  order: 1;\n  grid-row: 1;\n  grid-column: 1;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  z-index: 1;\n  max-width: var(--width);\n  max-height: var(--height);\n}\n\nstellar-google-maps #map {\n  order: 1;\n  grid-row: 1;\n  grid-column: 1;\n  display: block;\n  position: relative;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  contain: content;\n  max-width: var(--width);\n  max-height: var(--height);\n}";

const Map = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            } }, h("skeleton-img", { width: this.width, height: this.height, loading: true, style: { "opacity": `${this.loaded ? 0 : 1}` } }), h("div", { id: "map" }));
    }
    static get assetsDirs() { return ["themes"]; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "theme": ["handleTheme"]
    }; }
    static get style() { return MapCss; }
};

export { Map as stellar_google_maps };
