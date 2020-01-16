import { r as registerInstance } from './index-cc4604b3.js';

const Marker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.markerTitle = "nice";
        this.icon = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
        this.iconWidth = 50;
        this.iconHeight = 50;
    }
    async geocodeAddress() {
        const geocoder = new google.maps.Geocoder();
        const result = await new Promise((resolve, reject) => {
            geocoder.geocode({ 'address': this.address }, (results, status) => {
                if (status === 'OK') {
                    resolve(results[0]);
                }
                else {
                    reject('cannot find that address');
                }
            });
        });
        return result;
    }
    async configuration(map) {
        let latlng;
        if (this.address && (!this.lat && !this.lng)) {
            latlng = (await this.geocodeAddress()).geometry.location;
        }
        else if (!this.address && (this.lat && this.lng)) {
            latlng = new google.maps.LatLng(this.lat, this.lng);
        }
        return {
            position: latlng,
            map: map,
            title: this.markerTitle,
            clickable: true,
            icon: {
                url: this.icon,
                scaledSize: new google.maps.Size(this.iconWidth, this.iconHeight),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 0)
            },
            type: 'info',
            animation: google.maps.Animation.DROP
        };
    }
};

export { Marker as stellar_google_maps_marker };
