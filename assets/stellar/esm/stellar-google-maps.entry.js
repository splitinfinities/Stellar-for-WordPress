import { r as registerInstance, g as getAssetPath, h, H as Host, d as getElement } from './index-bcfb4a9f.js';
import { a as asyncForEach } from './index-320c6878.js';
import './_commonjsHelpers-ae1b5db5.js';
import './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';

const MapCss = "stellar-google-maps{display:grid;padding-bottom:var(--aspect-ratio);overflow:hidden;max-width:var(--width);max-height:var(--height)}stellar-google-maps[block],stellar-google-maps[block] skeleton-img,stellar-google-maps[block] #map{max-width:100%;max-height:auto}stellar-google-maps skeleton-img{-ms-flex-order:1;order:1;grid-row:1;grid-column:1;padding:0;margin:0;position:relative;z-index:1;max-width:var(--width);max-height:var(--height)}stellar-google-maps #map{-ms-flex-order:1;order:1;grid-row:1;grid-column:1;display:block;position:relative;z-index:3;width:100%;height:100%;contain:content;max-width:var(--width);max-height:var(--height)}";

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
