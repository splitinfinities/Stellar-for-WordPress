var __awaiter=this&&this.__awaiter||function(t,e,r,n){function o(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function a(t){try{u(n.next(t))}catch(e){i(e)}}function s(t){try{u(n["throw"](t))}catch(e){i(e)}}function u(t){t.done?r(t.value):o(t.value).then(a,s)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(s){a=[6,s];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),o=0,e=0;e<r;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n};System.register(["./p-de1c7c63.system.js","./p-8d6d3b24.system.js","./p-752b9e3e.system.js","./p-fdba8b89.system.js","./p-bd9c4de0.system.js","./p-49be6f75.system.js"],(function(t){"use strict";var e,r,n,o,i,a;return{setters:[function(t){e=t.r;r=t.h;n=t.g},function(t){o=t.m;i=t.d},function(){},function(t){a=t.p},function(){},function(){}],execute:function(){
/*
             * Color Thief v2.0
             * by Lokesh Dhakar - http://www.lokeshdhakar.com
             *
             * Thanks
             * ------
             * Nick Rabinowitz - For creating quantize.js.
             * John Schulz - For clean up and optimization. @JFSIII
             * Nathan Spady - For adding drag and drop support to the demo page.
             *
             * License
             * -------
             * Copyright 2011, 2015 Lokesh Dhakar
             * Released under the MIT license
             * https://raw.githubusercontent.com/lokesh/color-thief/master/LICENSE
             *
             * @license
             */
var s=function(t){this.canvas=document.createElement("canvas");this.context=this.canvas.getContext("2d");document.body.appendChild(this.canvas);this.width=this.canvas.width=t.width;this.height=this.canvas.height=t.height;this.context.drawImage(t,0,0,this.width,this.height)};s.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)};s.prototype.update=function(t){this.context.putImageData(t,0,0)};s.prototype.getPixelCount=function(){return this.width*this.height};s.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};s.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var u=function(){};u.prototype.getColor=function(t,e){var r=this.getPalette(t,5,e);var n=r[0];return n};u.prototype.getPalette=function(t,e,r){if(typeof e==="undefined"||e<2||e>256){e=10}if(typeof r==="undefined"||r<1){r=10}var n=new s(t);var o=n.getImageData();var i=o.data;var a=n.getPixelCount();var u=[];for(var c=0,h,f,p,g,d;c<a;c=c+r){h=c*4;f=i[h+0];p=i[h+1];g=i[h+2];d=i[h+3];if(d>=125){if(!(f>250&&p>250&&g>250)){u.push([f,p,g])}}}var v=l.quantize(u,e);var b=v?v.palette():null;n.removeCanvas();return b};u.prototype.getColorFromUrl=function(t,e,r){sourceImage=document.createElement("img");var n=this;sourceImage.addEventListener("load",(function(){var o=n.getPalette(sourceImage,5,r);var i=o[0];e(i,t)}));sourceImage.src=t};u.prototype.getImageData=function(t,e){xhr=new XMLHttpRequest;xhr.open("GET",t,true);xhr.responseType="arraybuffer";xhr.onload=function(t){if(this.status==200){uInt8Array=new Uint8Array(this.response);r=uInt8Array.length;binaryString=new Array(r);for(var r=0;r<uInt8Array.length;r++){binaryString[r]=String.fromCharCode(uInt8Array[r])}data=binaryString.join("");base64=window.btoa(data);e("data:image/png;base64,"+base64)}};xhr.send()};u.prototype.getColorAsync=function(t,e,r){var n=this;this.getImageData(t,(function(t){sourceImage=document.createElement("img");sourceImage.addEventListener("load",(function(){var t=n.getPalette(sourceImage,5,r);var o=t[0];e(o,this)}));sourceImage.src=t}))};
/*!
             * quantize.js Copyright 2008 Nick Rabinowitz.
             * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
             * @license
             */
/*!
             * Block below copied from Protovis: http://mbostock.github.com/protovis/
             * Copyright 2010 Stanford Visualization Group
             * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
             * @license
             */if(!c){var c={map:function(t,e){var r={};return e?t.map((function(t,n){r.index=n;return e.call(r,t)})):t.slice()},naturalOrder:function(t,e){return t<e?-1:t>e?1:0},sum:function(t,e){var r={};return t.reduce(e?function(t,n,o){r.index=o;return t+e.call(r,n)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?c.map(t,e):t)}}}var l=function(){var t=5,e=8-t,r=1e3,n=.75;function o(e,r,n){return(e<<2*t)+(r<<t)+n}function i(t){var e=[],r=false;function n(){e.sort(t);r=true}return{push:function(t){e.push(t);r=false},peek:function(t){if(!r)n();if(t===undefined)t=e.length-1;return e[t]},pop:function(){if(!r)n();return e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){if(!r)n();return e}}}function a(t,e,r,n,o,i,a){var s=this;s.r1=t;s.r2=e;s.g1=r;s.g2=n;s.b1=o;s.b2=i;s.histo=a}a.prototype={volume:function(t){var e=this;if(!e._volume||t){e._volume=(e.r2-e.r1+1)*(e.g2-e.g1+1)*(e.b2-e.b1+1)}return e._volume},count:function(t){var e=this,r=e.histo;if(!e._count_set||t){var n=0,i,a,s,u;for(a=e.r1;a<=e.r2;a++){for(s=e.g1;s<=e.g2;s++){for(u=e.b1;u<=e.b2;u++){i=o(a,s,u);n+=r[i]||0}}}e._count=n;e._count_set=true}return e._count},copy:function(){var t=this;return new a(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(e){var r=this,n=r.histo;if(!r._avg||e){var i=0,a=1<<8-t,s=0,u=0,c=0,l,h,f,p,g;for(h=r.r1;h<=r.r2;h++){for(f=r.g1;f<=r.g2;f++){for(p=r.b1;p<=r.b2;p++){g=o(h,f,p);l=n[g]||0;i+=l;s+=l*(h+.5)*a;u+=l*(f+.5)*a;c+=l*(p+.5)*a}}}if(i){r._avg=[~~(s/i),~~(u/i),~~(c/i)]}else{r._avg=[~~(a*(r.r1+r.r2+1)/2),~~(a*(r.g1+r.g2+1)/2),~~(a*(r.b1+r.b2+1)/2)]}}return r._avg},contains:function(t){var r=this,n=t[0]>>e;gval=t[1]>>e;bval=t[2]>>e;return n>=r.r1&&n<=r.r2&&gval>=r.g1&&gval<=r.g2&&bval>=r.b1&&bval<=r.b2}};function s(){this.vboxes=new i((function(t,e){return c.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())}))}s.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){var e=this.vboxes;for(var r=0;r<e.size();r++){if(e.peek(r).vbox.contains(t)){return e.peek(r).color}}return this.nearest(t)},nearest:function(t){var e=this.vboxes,r,n,o;for(var i=0;i<e.size();i++){n=Math.sqrt(Math.pow(t[0]-e.peek(i).color[0],2)+Math.pow(t[1]-e.peek(i).color[1],2)+Math.pow(t[2]-e.peek(i).color[2],2));if(n<r||r===undefined){r=n;o=e.peek(i).color}}return o},forcebw:function(){var t=this.vboxes;t.sort((function(t,e){return c.naturalOrder(c.sum(t.color),c.sum(e.color))}));var e=t[0].color;if(e[0]<5&&e[1]<5&&e[2]<5)t[0].color=[0,0,0];var r=t.length-1,n=t[r].color;if(n[0]>251&&n[1]>251&&n[2]>251)t[r].color=[255,255,255]}};function u(r){var n=1<<3*t,i=new Array(n),a,s,u,c;r.forEach((function(t){s=t[0]>>e;u=t[1]>>e;c=t[2]>>e;a=o(s,u,c);i[a]=(i[a]||0)+1}));return i}function l(t,r){var n=1e6,o=0,i=1e6,s=0,u=1e6,c=0,l,h,f;t.forEach((function(t){l=t[0]>>e;h=t[1]>>e;f=t[2]>>e;if(l<n)n=l;else if(l>o)o=l;if(h<i)i=h;else if(h>s)s=h;if(f<u)u=f;else if(f>c)c=f}));return new a(n,o,i,s,u,c,r)}function h(t,e){if(!e.count())return;var r=e.r2-e.r1+1,n=e.g2-e.g1+1,i=e.b2-e.b1+1,a=c.max([r,n,i]);if(e.count()==1){return[e.copy()]}var s=0,u=[],l=[],h,f,p,g,d;if(a==r){for(h=e.r1;h<=e.r2;h++){g=0;for(f=e.g1;f<=e.g2;f++){for(p=e.b1;p<=e.b2;p++){d=o(h,f,p);g+=t[d]||0}}s+=g;u[h]=s}}else if(a==n){for(h=e.g1;h<=e.g2;h++){g=0;for(f=e.r1;f<=e.r2;f++){for(p=e.b1;p<=e.b2;p++){d=o(f,h,p);g+=t[d]||0}}s+=g;u[h]=s}}else{for(h=e.b1;h<=e.b2;h++){g=0;for(f=e.r1;f<=e.r2;f++){for(p=e.g1;p<=e.g2;p++){d=o(f,p,h);g+=t[d]||0}}s+=g;u[h]=s}}u.forEach((function(t,e){l[e]=s-t}));function v(t){var r=t+"1",n=t+"2",o,i,a,c,f,p=0;for(h=e[r];h<=e[n];h++){if(u[h]>s/2){a=e.copy();c=e.copy();o=h-e[r];i=e[n]-h;if(o<=i)f=Math.min(e[n]-1,~~(h+i/2));else f=Math.max(e[r],~~(h-1-o/2));while(!u[f])f++;p=l[f];while(!p&&u[f-1])p=l[--f];a[n]=f;c[r]=a[n]+1;return[a,c]}}}return a==r?v("r"):a==n?v("g"):v("b")}function f(t,e){if(!t.length||e<2||e>256){return false}var o=u(t);o.forEach((function(){}));var a=l(t,o),f=new i((function(t,e){return c.naturalOrder(t.count(),e.count())}));f.push(a);function p(t,e){var n=1,i=0,a;while(i<r){a=t.pop();if(!a.count()){t.push(a);i++;continue}var s=h(o,a),u=s[0],c=s[1];if(!u){return}t.push(u);if(c){t.push(c);n++}if(n>=e)return;if(i++>r){return}}}p(f,n*e);var g=new i((function(t,e){return c.naturalOrder(t.count()*t.volume(),e.count()*e.volume())}));while(f.size()){g.push(f.pop())}p(g,e-g.size());var d=new s;while(g.size()){d.push(g.pop())}return d}return{quantize:f}}();var h=':host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--filter:blur(10px);--background-color:transparent;--aspect-ratio:100%;--ease:ease-in-out;--gradient:none;--blend:multiply;--initial-opacity:1;--speed:0.85s;--figure-height:0;contain:content;display:-ms-inline-flexbox;display:inline-flex;background:var(--background-color);width:100%;max-width:var(--width, 300px);max-height:var(--height, 300px);-ms-flex-align:center;align-items:center}:host([type="background"]){background-color:var(--background-color);background-image:var(--background-image);background-size:cover;background-repeat:no-repeat;height:100%;width:100%}:host([block]){display:-ms-flexbox;display:flex;--width:100% !important;--height:100% !important}:host figure{display:block;position:relative;margin:0;padding-bottom:var(--aspect-ratio);width:100%;height:var(--figure-height);cursor:-webkit-zoom-in;cursor:zoom-in;-webkit-transition:all 200ms var(--ease) 0s;transition:all 200ms var(--ease) 0s}:host figure:hover,:host figure:focus{-webkit-transform:scale(1.025);transform:scale(1.025)}:host([nozoom]) figure{-webkit-transform:none !important;transform:none !important;cursor:inherit !important}:host figure:active{-webkit-transform:scale(0.975);transform:scale(0.975)}:host picture,:host img.placeholder,:host .overlay{position:absolute;top:0;left:0;-webkit-transition:all var(--speed) cubic-bezier(0.2, 0.3, 0.25, 0.9) 1s;transition:all var(--speed) cubic-bezier(0.2, 0.3, 0.25, 0.9) 1s;width:100%;height:100%;overflow:hidden}:host .overlay{opacity:0.5;z-index:3;pointer-events:none;background:var(--gradient);mix-blend-mode:var(--blend)}:host picture{-webkit-transition:all var(--speed) cubic-bezier(0.2, 0.3, 0.25, 0.9) 1s;transition:all var(--speed) cubic-bezier(0.2, 0.3, 0.25, 0.9) 1s;opacity:0;z-index:2}:host picture img.final_image{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}:host .placeholder{position:absolute;width:100%;height:100%;pointer-events:none;opacity:var(--initial-opacity);z-index:1;background:var(--background-color) 50% 50% / cover no-repeat;-webkit-filter:var(--filter);filter:var(--filter);image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges;-ms-interpolation-mode:nearest-neighbor;-webkit-transition:all var(--speed) cubic-bezier(0.2, 0.3, 0.25, 0.9) 1s;transition:all var(--speed) cubic-bezier(0.2, 0.3, 0.25, 0.9) 1s}:host figure.loaded picture{opacity:1}:host figure.loaded .placeholder{-webkit-filter:none;filter:none;opacity:0}:host figure.loaded .overlay{opacity:0.3}';var f=t("stellar_image",function(){function t(t){e(this,t);this.type="picture";this.nozoom=false;this.block=false;this.bg="auto";this.alt="";this.sources=[];this.active=false}t.prototype.componentWillLoad=function(){this.prepareSources();this.setBG();this.updateAspectRatio()};t.prototype.componentDidLoad=function(){this.figure=this.element.shadowRoot.querySelector("figure")};t.prototype.mountZoom=function(){var t=this.element.shadowRoot.querySelector("img");this.zoom=o(t,{background:""+this.bg,scrollOffset:1,margin:30})};t.prototype.handlePosterChange=function(){this.setBG()};t.prototype.handleActive=function(){this.setBackgroundImage()};t.prototype.medium=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.zoom]}))}))};t.prototype.in=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this.active=true;if(!!this.nozoom)return[3,2];return[4,i(200)];case 1:t.sent();this.mountZoom();t.label=2;case 2:return[2]}}))}))};t.prototype.getPictureColor=function(){var t=this;if(window.Image){var e=new Image(80,80);e.addEventListener("load",(function(){var r=new u;t.palette=r.getColor(e);a.set({"--background-color":"rgb("+t.palette[0]+", "+t.palette[1]+", "+t.palette[2]+")"},t.element);t.bg="rgb("+t.palette[0]+", "+t.palette[1]+", "+t.palette[2]+")";if(t.zoom){t.zoom.update({background:t.bg})}}),false);e.src=this.poster;e.crossOrigin="Anonymous"}};t.prototype.setBG=function(){if(this.bg==="auto"){this.getPictureColor()}else{a.set({"--background-color":""+this.bg},this.element)}};t.prototype.prepareSources=function(){var t=this.element.querySelectorAll("source");var e=[];[].forEach.call(t,(function(t){e=__spreadArrays(e,[t]);t.hidden=true}));this.sources=e;this.poster=this.poster?this.poster:this.sources[this.sources.length-1].srcset;this.large=this.sources[0].srcset;this.setBackgroundImage()};t.prototype.setBackgroundImage=function(){a.set({"--background-image":"url('"+(this.active?this.large:this.poster)+"')"},this.element)};t.prototype.updateAspectRatio=function(){this.aspectRatio=this.height/this.width*100;a.set({"--aspect-ratio":this.aspectRatio+"%","--width":this.width+"px","--height":this.height+"px"},this.element)};t.prototype.renderPicture=function(){if(this.active){return[this.sources.map((function(t){return r("source",{srcSet:t.srcset,media:t.media?t.media:false})})),r("img",{src:this.large,class:"final_image",alt:this.alt})]}};t.prototype.render=function(){var t=this;if(this.type==="picture"){return r("figure",{itemtype:"http://schema.org/ImageObject",class:this.active?"loaded":"",onClick:function(){t.zoom&&t.zoom.open()}},r("div",{class:"overlay"}),r("picture",null,this.renderPicture()),r("div",{class:"placeholder",style:{"background-image":"url("+this.poster+")"}}),r("stellar-intersection",{element:this.element,in:this.in.bind(this)}))}else{return r("stellar-intersection",{element:this.element,in:this.in.bind(this)})}};Object.defineProperty(t,"assetsDirs",{get:function(){return["./vendor"]},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{poster:["handlePosterChange"],active:["handleActive"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return h},enumerable:true,configurable:true});return t}())}}}));