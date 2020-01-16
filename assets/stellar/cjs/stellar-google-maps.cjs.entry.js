'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
const index$1$1 = require('./index-d326a972.js');
require('./_commonjsHelpers-3fc1f64e.js');
require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');

const MapCss = "stellar-google-maps{display:grid;padding-bottom:var(--aspect-ratio);overflow:hidden;max-width:var(--width);max-height:var(--height)}stellar-google-maps[block],stellar-google-maps[block] skeleton-img,stellar-google-maps[block] #map{max-width:100%;max-height:auto}stellar-google-maps skeleton-img{-ms-flex-order:1;order:1;grid-row:1;grid-column:1;padding:0;margin:0;position:relative;z-index:1;max-width:var(--width);max-height:var(--height)}stellar-google-maps #map{-ms-flex-order:1;order:1;grid-row:1;grid-column:1;display:block;position:relative;z-index:3;width:100%;height:100%;contain:content;max-width:var(--width);max-height:var(--height)}";

const Map = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            styles = await (await fetch(index.getAssetPath(`./themes/${this.theme}.json`))).json();
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
                styles = await (await fetch(index.getAssetPath(`./themes/${this.theme}.json`))).json();
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
        await index$1$1.asyncForEach(markerEls, async (markerEl) => {
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
        return index.h(index.Host, { intrinsicsize: `${this.width} x ${this.height}`, style: {
                "--width": `${this.width}px`,
                "--height": `${this.height}px`,
                "--aspect-ratio": `${this.height / this.width}`
            } }, index.h("skeleton-img", { width: this.width, height: this.height, loading: true, style: { "opacity": `${this.loaded ? 0 : 1}` } }), index.h("div", { id: "map" }));
    }
    static get assetsDirs() { return ["themes"]; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "theme": ["handleTheme"]
    }; }
    static get style() { return MapCss; }
};

exports.stellar_google_maps = Map;
