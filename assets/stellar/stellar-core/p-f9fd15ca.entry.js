import{r as t,g as i,h as s,H as e,d as o}from"./p-ea8e8140.js";import{a}from"./p-5c97c18e.js";import"./p-c428ff15.js";import"./p-c93f133f.js";import"./p-22e0cac7.js";import"./p-3a3a4911.js";const h=class{constructor(i){t(this,i),this.lat=-34.397,this.lng=150.644,this.zoom=8,this.width=1600,this.height=900,this.noUi=!1,this.block=!1,this.gestureHandling="auto",this.zoomControls=!1,this.streetView=!1,this.mapType=!1,this.fullscreenControl=!1,this.loaded=!1,this.markers=[]}componentDidLoad(){this.loadGoogleMaps()}async handleTheme(){let t=[];this.theme&&(t=await(await fetch(i(`./themes/${this.theme}.json`))).json()),this.map.setOptions({styles:t})}loadGoogleMaps(){const t=`https://maps.google.com/maps/api/js?key=${this.apikey}&callback=initializeGoogleMap`;window.initializeGoogleMap=()=>{this.initMap()},window.loadingGoogleMaps||"object"==typeof google&&"object"==typeof google.maps?"object"==typeof google&&"object"==typeof google.maps&&this.initMap():(window.loadingGoogleMaps=!0,document.body.appendChild(Object.assign(document.createElement("script"),{type:"text/javascript",src:t,onload:()=>this.initMap()})))}async initMap(){if(this.apikey){let t=[];this.theme&&(t=await(await fetch(i(`./themes/${this.theme}.json`))).json()),this.map=new google.maps.Map(this.el.querySelector("#map"),{center:{lat:this.lat,lng:this.lng},zoom:this.zoom,disableDefaultUI:this.noUi,gestureHandling:this.gestureHandling,zoomControl:this.zoomControls,streetViewControl:this.streetView,mapTypeControl:this.mapType,fullscreenControl:this.fullscreenControl,styles:t}),this.infowindow=new google.maps.InfoWindow,this.initMarkers(),this.hideLoader()}}async initMarkers(){const t=this.el.querySelectorAll("stellar-google-maps-marker");await a(t,async t=>{const i=new google.maps.Marker(await t.configuration(this.map));i.addListener("click",()=>{this.infowindow.setContent(t.innerHTML),this.infowindow.open(this.map,i)}),this.markers.push(i)})}hideLoader(){this.loaded=!0}render(){return s(e,{intrinsicsize:`${this.width} x ${this.height}`,style:{"--width":`${this.width}px`,"--height":`${this.height}px`,"--aspect-ratio":`${this.height/this.width}`}},s("skeleton-img",{width:this.width,height:this.height,loading:!0,style:{opacity:`${this.loaded?0:1}`}}),s("div",{id:"map"}))}static get assetsDirs(){return["themes"]}get el(){return o(this)}static get watchers(){return{theme:["handleTheme"]}}static get style(){return"stellar-google-maps{display:grid;padding-bottom:var(--aspect-ratio);overflow:hidden;max-width:var(--width);max-height:var(--height)}stellar-google-maps[block],stellar-google-maps[block] skeleton-img,stellar-google-maps[block] #map{max-width:100%;max-height:auto}stellar-google-maps skeleton-img{-ms-flex-order:1;order:1;grid-row:1;grid-column:1;padding:0;margin:0;position:relative;z-index:1;max-width:var(--width);max-height:var(--height)}stellar-google-maps #map{-ms-flex-order:1;order:1;grid-row:1;grid-column:1;display:block;position:relative;z-index:3;width:100%;height:100%;contain:content;max-width:var(--width);max-height:var(--height)}"}};export{h as stellar_google_maps};