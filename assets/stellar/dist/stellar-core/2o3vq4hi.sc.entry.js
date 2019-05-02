const t=window.StellarCore.h;import"./chunk-7646164d.js";import{a as e}from"./chunk-340b8099.js";import"./chunk-9f751763.js";import{i as r,j as o}from"./chunk-a955a305.js";import"./chunk-5ce278cb.js";var i=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)};i.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},i.prototype.update=function(t){this.context.putImageData(t,0,0)},i.prototype.getPixelCount=function(){return this.width*this.height},i.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},i.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var s=function(){};if(s.prototype.getColor=function(t,e){return this.getPalette(t,5,e)[0]},s.prototype.getPalette=function(t,e,r){(void 0===e||e<2||e>256)&&(e=10),(void 0===r||r<1)&&(r=10);for(var o,s,n,h,u=new i(t),c=u.getImageData().data,l=u.getPixelCount(),g=[],p=0;p<l;p+=r)s=c[0+(o=4*p)],n=c[o+1],h=c[o+2],c[o+3]>=125&&(s>250&&n>250&&h>250||g.push([s,n,h]));var f=a.quantize(g,e),m=f?f.palette():null;return u.removeCanvas(),m},s.prototype.getColorFromUrl=function(t,e,r){sourceImage=document.createElement("img");var o=this;sourceImage.addEventListener("load",function(){var i=o.getPalette(sourceImage,5,r);e(i[0],t)}),sourceImage.src=t},s.prototype.getImageData=function(t,e){xhr=new XMLHttpRequest,xhr.open("GET",t,!0),xhr.responseType="arraybuffer",xhr.onload=function(t){if(200==this.status){uInt8Array=new Uint8Array(this.response),r=uInt8Array.length,binaryString=new Array(r);for(var r=0;r<uInt8Array.length;r++)binaryString[r]=String.fromCharCode(uInt8Array[r]);data=binaryString.join(""),base64=window.btoa(data),e("data:image/png;base64,"+base64)}},xhr.send()},s.prototype.getColorAsync=function(t,e,r){var o=this;this.getImageData(t,function(t){sourceImage=document.createElement("img"),sourceImage.addEventListener("load",function(){var t=o.getPalette(sourceImage,5,r);e(t[0],this)}),sourceImage.src=t})},!n)var n={map:function(t,e){var r={};return e?t.map(function(t,o){return r.index=o,e.call(r,t)}):t.slice()},naturalOrder:function(t,e){return t<e?-1:t>e?1:0},sum:function(t,e){var r={};return t.reduce(e?function(t,o,i){return r.index=i,t+e.call(r,o)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?n.map(t,e):t)}};var a=function(){var t=5,e=8-t,r=1e3;function o(e,r,o){return(e<<2*t)+(r<<t)+o}function i(t){var e=[],r=!1;function o(){e.sort(t),r=!0}return{push:function(t){e.push(t),r=!1},peek:function(t){return r||o(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return r||o(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return r||o(),e}}}function s(t,e,r,o,i,s,n){this.r1=t,this.r2=e,this.g1=r,this.g2=o,this.b1=i,this.b2=s,this.histo=n}function a(){this.vboxes=new i(function(t,e){return n.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())})}function h(t,e){if(e.count()){var r=e.r2-e.r1+1,i=e.g2-e.g1+1,s=n.max([r,i,e.b2-e.b1+1]);if(1==e.count())return[e.copy()];var a,h,u,c,l=0,g=[],p=[];if(s==r)for(a=e.r1;a<=e.r2;a++){for(c=0,h=e.g1;h<=e.g2;h++)for(u=e.b1;u<=e.b2;u++)c+=t[o(a,h,u)]||0;g[a]=l+=c}else if(s==i)for(a=e.g1;a<=e.g2;a++){for(c=0,h=e.r1;h<=e.r2;h++)for(u=e.b1;u<=e.b2;u++)c+=t[o(h,a,u)]||0;g[a]=l+=c}else for(a=e.b1;a<=e.b2;a++){for(c=0,h=e.r1;h<=e.r2;h++)for(u=e.g1;u<=e.g2;u++)c+=t[o(h,u,a)]||0;g[a]=l+=c}return g.forEach(function(t,e){p[e]=l-t}),function(t){var r,o,i,s,n,h=t+"1",u=t+"2",c=0;for(a=e[h];a<=e[u];a++)if(g[a]>l/2){for(i=e.copy(),s=e.copy(),n=(r=a-e[h])<=(o=e[u]-a)?Math.min(e[u]-1,~~(a+o/2)):Math.max(e[h],~~(a-1-r/2));!g[n];)n++;for(c=p[n];!c&&g[n-1];)c=p[--n];return i[u]=n,s[h]=i[u]+1,[i,s]}}(s==r?"r":s==i?"g":"b")}}return s.prototype={volume:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(t){var e=this.histo;if(!this._count_set||t){var r,i,s,n=0;for(r=this.r1;r<=this.r2;r++)for(i=this.g1;i<=this.g2;i++)for(s=this.b1;s<=this.b2;s++)n+=e[o(r,i,s)]||0;this._count=n,this._count_set=!0}return this._count},copy:function(){return new s(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(e){var r=this.histo;if(!this._avg||e){var i,s,n,a,h=0,u=1<<8-t,c=0,l=0,g=0;for(s=this.r1;s<=this.r2;s++)for(n=this.g1;n<=this.g2;n++)for(a=this.b1;a<=this.b2;a++)h+=i=r[o(s,n,a)]||0,c+=i*(s+.5)*u,l+=i*(n+.5)*u,g+=i*(a+.5)*u;this._avg=h?[~~(c/h),~~(l/h),~~(g/h)]:[~~(u*(this.r1+this.r2+1)/2),~~(u*(this.g1+this.g2+1)/2),~~(u*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var r=t[0]>>e;return gval=t[1]>>e,bval=t[2]>>e,r>=this.r1&&r<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},a.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,r=0;r<e.size();r++)if(e.peek(r).vbox.contains(t))return e.peek(r).color;return this.nearest(t)},nearest:function(t){for(var e,r,o,i=this.vboxes,s=0;s<i.size();s++)((r=Math.sqrt(Math.pow(t[0]-i.peek(s).color[0],2)+Math.pow(t[1]-i.peek(s).color[1],2)+Math.pow(t[2]-i.peek(s).color[2],2)))<e||void 0===e)&&(e=r,o=i.peek(s).color);return o},forcebw:function(){var t=this.vboxes;t.sort(function(t,e){return n.naturalOrder(n.sum(t.color),n.sum(e.color))});var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var r=t.length-1,o=t[r].color;o[0]>251&&o[1]>251&&o[2]>251&&(t[r].color=[255,255,255])}},{quantize:function(u,c){if(!u.length||c<2||c>256)return!1;var l=function(r){var i,s=new Array(1<<3*t);return r.forEach(function(t){i=o(t[0]>>e,t[1]>>e,t[2]>>e),s[i]=(s[i]||0)+1}),s}(u);l.forEach(function(){});var g=function(t,r){var o,i,n,a=1e6,h=0,u=1e6,c=0,l=1e6,g=0;return t.forEach(function(t){(o=t[0]>>e)<a?a=o:o>h&&(h=o),(i=t[1]>>e)<u?u=i:i>c&&(c=i),(n=t[2]>>e)<l?l=n:n>g&&(g=n)}),new s(a,h,u,c,l,g,r)}(u,l),p=new i(function(t,e){return n.naturalOrder(t.count(),e.count())});function f(t,e){for(var o,i=1,s=0;s<r;)if((o=t.pop()).count()){var n=h(l,o),a=n[0],u=n[1];if(!a)return;if(t.push(a),u&&(t.push(u),i++),i>=e)return;if(s++>r)return}else t.push(o),s++}p.push(g),f(p,.75*c);for(var m=new i(function(t,e){return n.naturalOrder(t.count()*t.volume(),e.count()*e.volume())});p.size();)m.push(p.pop());f(m,c-m.size());for(var v=new a;m.size();)v.push(m.pop());return v}}}();class h{constructor(){this.nozoom=!1,this.bg="auto",this.sources=[],this.active=!1}componentWillLoad(){this.prepareSources(),this.setBG(),this.updateAspectRatio()}componentDidLoad(){this.addIntersectionObserver(),this.figure=this.element.shadowRoot.querySelector("figure")}mountZoom(){let t=this.element.shadowRoot.querySelector("img");this.zoom=r(t,{background:`${this.bg}`,scrollOffset:1,margin:30})}handlePosterChange(){this.setBG()}async medium(){return this.zoom}async handleImage(){this.active=!0,this.nozoom||(await o(200),this.mountZoom())}addIntersectionObserver(){"IntersectionObserver"in window?(this.io=new IntersectionObserver(t=>{t[0].isIntersecting&&(this.handleImage(),this.removeIntersectionObserver())}),this.io.observe(this.element.shadowRoot.querySelector("figure"))):setTimeout(()=>{this.handleImage()},300)}removeIntersectionObserver(){this.io&&(this.io.disconnect(),this.io=null)}getPictureColor(){const t=new Image(80,80);t.addEventListener("load",()=>{const r=new s;this.palette=r.getColor(t),e.set({"--bg":`rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`},this.element),this.bg=`rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`,this.zoom&&this.zoom.update({background:this.bg})},!1),t.src=this.poster,t.crossOrigin="Anonymous"}setBG(){"auto"===this.bg?this.getPictureColor():e.set({"--bg":`${this.bg}`},this.element)}prepareSources(){const t=this.element.querySelectorAll("source");let e=[];[].forEach.call(t,t=>{e=[...e,t],t.hidden=!0}),this.sources=e,this.poster=this.poster?this.poster:this.sources[this.sources.length-1].srcset}updateAspectRatio(){this.aspectRatio=this.height/this.width*100,e.set({"--aspect_ratio":`${this.aspectRatio}%`,"--width":`${this.width}px`,"--height":`${this.height}px`},this.element)}renderPicture(){if(this.active)return[this.sources.map(e=>t("source",{srcSet:e.srcset,media:!!e.media&&e.media})),t("img",{src:this.sources[0].srcset,class:"final_image"})]}render(){return t("figure",{itemtype:"http://schema.org/ImageObject",class:this.active?"loaded":"",onClick:()=>{this.zoom&&this.zoom.open()}},t("div",{class:"overlay"}),t("picture",null,this.renderPicture()),t("div",{class:"placeholder",style:{"background-image":`url(${this.poster})`}}))}static get is(){return"stellar-image"}static get encapsulation(){return"shadow"}static get properties(){return{active:{state:!0},aspectRatio:{state:!0},bg:{type:String,attr:"bg",mutable:!0},element:{elementRef:!0},figure:{state:!0},height:{type:Number,attr:"height"},io:{state:!0},medium:{method:!0},nozoom:{type:Boolean,attr:"nozoom",reflectToAttr:!0},palette:{state:!0},poster:{type:String,attr:"poster",mutable:!0,watchCallbacks:["handlePosterChange"]},sources:{state:!0},width:{type:Number,attr:"width"},zoom:{state:!0}}}static get style(){return".sc-stellar-image-h, .sc-stellar-image-h   *.sc-stellar-image, .sc-stellar-image-h   .sc-stellar-image:after, .sc-stellar-image-h   .sc-stellar-image:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-image-h{display:inline-block;background:var(--bg,transparent);width:100%;max-width:var(--width,300px);max-height:var(--height,300px)}[block].sc-stellar-image-h{--width:100%!important;--height:100%!important}.sc-stellar-image-h   figure.sc-stellar-image{display:block;position:relative;margin:0;padding-bottom:var(--aspect_ratio,100%);width:100%;height:0;cursor:-webkit-zoom-in;cursor:zoom-in;-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s}.sc-stellar-image-h   figure.sc-stellar-image:focus, .sc-stellar-image-h   figure.sc-stellar-image:hover{-webkit-transform:scale(1.025);transform:scale(1.025)}[nozoom].sc-stellar-image-h   figure.sc-stellar-image{-webkit-transform:none!important;transform:none!important;cursor:default!important}.sc-stellar-image-h   figure.sc-stellar-image:active{-webkit-transform:scale(.975);transform:scale(.975)}.sc-stellar-image-h   .overlay.sc-stellar-image, .sc-stellar-image-h   img.placeholder.sc-stellar-image, .sc-stellar-image-h   picture.sc-stellar-image{position:absolute;top:0;left:0;-webkit-transition:all .85s cubic-bezier(.2,.3,.25,.9) 1s;transition:all .85s cubic-bezier(.2,.3,.25,.9) 1s;width:100%;height:100%;overflow:hidden;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges}.sc-stellar-image-h   .overlay.sc-stellar-image{opacity:.5;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply)}.sc-stellar-image-h   picture.sc-stellar-image{-webkit-transition:all .85s cubic-bezier(.2,.3,.25,.9) 1s;transition:all .85s cubic-bezier(.2,.3,.25,.9) 1s;opacity:0;z-index:2}.sc-stellar-image-h   picture.sc-stellar-image   img.final_image.sc-stellar-image{display:block;width:100%;height:100%}.sc-stellar-image-h   .placeholder.sc-stellar-image{position:absolute;width:100%;height:100%;pointer-events:none;opacity:1;z-index:1;background:var(--bg,transparent) 50% 50%/cover no-repeat;-webkit-filter:blur(10px);filter:blur(10px);image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges;-ms-interpolation-mode:nearest-neighbor;-webkit-transition:all .85s cubic-bezier(.2,.3,.25,.9) 1s;transition:all .85s cubic-bezier(.2,.3,.25,.9) 1s}.sc-stellar-image-h   figure.loaded.sc-stellar-image   picture.sc-stellar-image{opacity:1}.sc-stellar-image-h   figure.loaded.sc-stellar-image   .placeholder.sc-stellar-image{-webkit-filter:blur(0);filter:blur(0);opacity:0}.sc-stellar-image-h   figure.loaded.sc-stellar-image   .overlay.sc-stellar-image{opacity:.3}"}}export{h as StellarImage};