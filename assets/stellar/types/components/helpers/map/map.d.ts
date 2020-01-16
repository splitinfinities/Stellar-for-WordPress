/// <reference types="googlemaps" />
export declare class Map {
    el: HTMLElement;
    apikey: string;
    lat: number;
    lng: number;
    zoom: number;
    width: number;
    height: number;
    noUi: boolean;
    block: boolean;
    theme: string;
    gestureHandling: "greedy" | "cooperative" | "none" | "auto";
    zoomControls: boolean;
    streetView: boolean;
    mapType: boolean;
    fullscreenControl: boolean;
    loaded: boolean;
    mapRef: google.maps.Map;
    bounds: google.maps.LatLngBounds;
    latLng: google.maps.LatLng;
    map: google.maps.Map;
    infowindow: google.maps.InfoWindow;
    markers: any[];
    componentDidLoad(): void;
    handleTheme(): Promise<void>;
    loadGoogleMaps(): void;
    initMap(): Promise<void>;
    initMarkers(): Promise<void>;
    hideLoader(): void;
    render(): any;
}
