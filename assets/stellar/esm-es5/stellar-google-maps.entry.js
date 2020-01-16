var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, g as getAssetPath, h, H as Host, d as getElement } from './index-bcfb4a9f.js';
import { a as asyncForEach } from './index-320c6878.js';
import './_commonjsHelpers-ae1b5db5.js';
import './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
var MapCss = "stellar-google-maps{display:grid;padding-bottom:var(--aspect-ratio);overflow:hidden;max-width:var(--width);max-height:var(--height)}stellar-google-maps[block],stellar-google-maps[block] skeleton-img,stellar-google-maps[block] #map{max-width:100%;max-height:auto}stellar-google-maps skeleton-img{-ms-flex-order:1;order:1;grid-row:1;grid-column:1;padding:0;margin:0;position:relative;z-index:1;max-width:var(--width);max-height:var(--height)}stellar-google-maps #map{-ms-flex-order:1;order:1;grid-row:1;grid-column:1;display:block;position:relative;z-index:3;width:100%;height:100%;contain:content;max-width:var(--width);max-height:var(--height)}";
var Map = /** @class */ (function () {
    function class_1(hostRef) {
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
    class_1.prototype.componentDidLoad = function () {
        this.loadGoogleMaps();
    };
    class_1.prototype.handleTheme = function () {
        return __awaiter(this, void 0, void 0, function () {
            var styles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        styles = [];
                        if (!this.theme) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch(getAssetPath("./themes/" + this.theme + ".json"))];
                    case 1: return [4 /*yield*/, (_a.sent()).json()];
                    case 2:
                        styles = _a.sent();
                        _a.label = 3;
                    case 3:
                        this.map.setOptions({ styles: styles });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.loadGoogleMaps = function () {
        var _this = this;
        var googleMapsUrl = "https://maps.google.com/maps/api/js?key=" + this.apikey + "&callback=initializeGoogleMap";
        window["initializeGoogleMap"] = function () { _this.initMap(); };
        if (!window["loadingGoogleMaps"] && (typeof google !== 'object' || typeof google.maps !== 'object')) {
            window["loadingGoogleMaps"] = true;
            document.body.appendChild(Object.assign(document.createElement('script'), {
                type: 'text/javascript',
                src: googleMapsUrl,
                onload: function () { return _this.initMap(); }
            }));
        }
        else if (typeof google === 'object' && typeof google.maps === 'object') {
            this.initMap();
        }
    };
    class_1.prototype.initMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var styles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.apikey) return [3 /*break*/, 4];
                        styles = [];
                        if (!this.theme) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch(getAssetPath("./themes/" + this.theme + ".json"))];
                    case 1: return [4 /*yield*/, (_a.sent()).json()];
                    case 2:
                        styles = _a.sent();
                        _a.label = 3;
                    case 3:
                        this.map = new google.maps.Map(this.el.querySelector('#map'), {
                            center: { lat: this.lat, lng: this.lng },
                            zoom: this.zoom,
                            disableDefaultUI: this.noUi,
                            gestureHandling: this.gestureHandling,
                            zoomControl: this.zoomControls,
                            streetViewControl: this.streetView,
                            mapTypeControl: this.mapType,
                            fullscreenControl: this.fullscreenControl,
                            styles: styles
                        });
                        this.infowindow = new google.maps.InfoWindow();
                        this.initMarkers();
                        this.hideLoader();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.initMarkers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var markerEls;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        markerEls = this.el.querySelectorAll('stellar-google-maps-marker');
                        return [4 /*yield*/, asyncForEach(markerEls, function (markerEl) { return __awaiter(_this, void 0, void 0, function () {
                                var marker, _a, _b;
                                var _this = this;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = google.maps.Marker).bind;
                                            return [4 /*yield*/, markerEl.configuration(this.map)];
                                        case 1:
                                            marker = new (_b.apply(_a, [void 0, _c.sent()]))();
                                            marker.addListener('click', function () {
                                                _this.infowindow.setContent(markerEl.innerHTML);
                                                _this.infowindow.open(_this.map, marker);
                                            });
                                            this.markers.push(marker);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.hideLoader = function () {
        this.loaded = true;
    };
    class_1.prototype.render = function () {
        return h(Host, { intrinsicsize: this.width + " x " + this.height, style: {
                "--width": this.width + "px",
                "--height": this.height + "px",
                "--aspect-ratio": "" + this.height / this.width
            } }, h("skeleton-img", { width: this.width, height: this.height, loading: true, style: { "opacity": "" + (this.loaded ? 0 : 1) } }), h("div", { id: "map" }));
    };
    Object.defineProperty(class_1, "assetsDirs", {
        get: function () { return ["themes"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "theme": ["handleTheme"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return MapCss; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Map as stellar_google_maps };
