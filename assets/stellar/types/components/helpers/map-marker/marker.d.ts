export declare class Marker {
    markerTitle: string;
    icon: string;
    iconWidth: number;
    iconHeight: number;
    lat: number;
    lng: number;
    address: string;
    geocodeAddress(): Promise<any>;
    configuration(map: any): Promise<any>;
}
