import { Component, Method, Prop } from '@stencil/core';
export class Marker {
    constructor() {
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
    static get is() { return "stellar-google-maps-marker"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "markerTitle": {
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
            "attribute": "marker-title",
            "reflect": false,
            "defaultValue": "\"nice\""
        },
        "icon": {
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
            "attribute": "icon",
            "reflect": false,
            "defaultValue": "\"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png\""
        },
        "iconWidth": {
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
            "attribute": "icon-width",
            "reflect": false,
            "defaultValue": "50"
        },
        "iconHeight": {
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
            "attribute": "icon-height",
            "reflect": false,
            "defaultValue": "50"
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
            "reflect": false
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
            "reflect": false
        },
        "address": {
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
            "attribute": "address",
            "reflect": false
        }
    }; }
    static get methods() { return {
        "geocodeAddress": {
            "complexType": {
                "signature": "() => Promise<any>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "configuration": {
            "complexType": {
                "signature": "(map: any) => Promise<any>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
