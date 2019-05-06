var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(s,a)}u((n=n.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};System.register(["./p-afdfa3ab.system.js","./p-2ddf37dd.system.js","./p-ddf33e94.system.js","./p-da4cf384.system.js","./p-92ab9c5e.system.js"],function(r){"use strict";var n,o,i,s,a,u;return{setters:[function(t){n=t.c,o=t.d,i=t.f},function(){},function(t){s=t.a},function(t){a=t.j,u=t.b},function(){}],execute:function(){var c=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)};c.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},c.prototype.update=function(t){this.context.putImageData(t,0,0)},c.prototype.getPixelCount=function(){return this.width*this.height},c.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},c.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var h=function(){};if(h.prototype.getColor=function(t,e){return this.getPalette(t,5,e)[0]},h.prototype.getPalette=function(t,e,r){(void 0===e||e<2||e>256)&&(e=10),(void 0===r||r<1)&&(r=10);for(var n,o,i,s,a=new c(t),u=a.getImageData().data,h=a.getPixelCount(),f=[],p=0;p<h;p+=r)o=u[0+(n=4*p)],i=u[n+1],s=u[n+2],u[n+3]>=125&&(o>250&&i>250&&s>250||f.push([o,i,s]));var g=l.quantize(f,e),v=g?g.palette():null;return a.removeCanvas(),v},h.prototype.getColorFromUrl=function(t,e,r){sourceImage=document.createElement("img");var n=this;sourceImage.addEventListener("load",function(){var o=n.getPalette(sourceImage,5,r);e(o[0],t)}),sourceImage.src=t},h.prototype.getImageData=function(t,e){xhr=new XMLHttpRequest,xhr.open("GET",t,!0),xhr.responseType="arraybuffer",xhr.onload=function(){if(200==this.status){uInt8Array=new Uint8Array(this.response),t=uInt8Array.length,binaryString=new Array(t);for(var t=0;t<uInt8Array.length;t++)binaryString[t]=String.fromCharCode(uInt8Array[t]);data=binaryString.join(""),base64=window.btoa(data),e("data:image/png;base64,"+base64)}},xhr.send()},h.prototype.getColorAsync=function(t,e,r){var n=this;this.getImageData(t,function(t){sourceImage=document.createElement("img"),sourceImage.addEventListener("load",function(){var t=n.getPalette(sourceImage,5,r);e(t[0],this)}),sourceImage.src=t})},!f)var f={map:function(t,e){var r={};return e?t.map(function(t,n){return r.index=n,e.call(r,t)}):t.slice()},naturalOrder:function(t,e){return t<e?-1:t>e?1:0},sum:function(t,e){var r={};return t.reduce(e?function(t,n,o){return r.index=o,t+e.call(r,n)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?f.map(t,e):t)}};var l=function(){var t=5,e=8-t,r=1e3;function n(e,r,n){return(e<<2*t)+(r<<t)+n}function o(t){var e=[],r=!1;function n(){e.sort(t),r=!0}return{push:function(t){e.push(t),r=!1},peek:function(t){return r||n(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return r||n(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return r||n(),e}}}function i(t,e,r,n,o,i,s){this.r1=t,this.r2=e,this.g1=r,this.g2=n,this.b1=o,this.b2=i,this.histo=s}function s(){this.vboxes=new o(function(t,e){return f.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())})}function a(t,e){if(e.count()){var r=e.r2-e.r1+1,o=e.g2-e.g1+1,i=f.max([r,o,e.b2-e.b1+1]);if(1==e.count())return[e.copy()];var s,a,u,c,h=0,l=[],p=[];if(i==r)for(s=e.r1;s<=e.r2;s++){for(c=0,a=e.g1;a<=e.g2;a++)for(u=e.b1;u<=e.b2;u++)c+=t[n(s,a,u)]||0;l[s]=h+=c}else if(i==o)for(s=e.g1;s<=e.g2;s++){for(c=0,a=e.r1;a<=e.r2;a++)for(u=e.b1;u<=e.b2;u++)c+=t[n(a,s,u)]||0;l[s]=h+=c}else for(s=e.b1;s<=e.b2;s++){for(c=0,a=e.r1;a<=e.r2;a++)for(u=e.g1;u<=e.g2;u++)c+=t[n(a,u,s)]||0;l[s]=h+=c}return l.forEach(function(t,e){p[e]=h-t}),function(t){var r,n,o,i,a,u=t+"1",c=t+"2",f=0;for(s=e[u];s<=e[c];s++)if(l[s]>h/2){for(o=e.copy(),i=e.copy(),a=(r=s-e[u])<=(n=e[c]-s)?Math.min(e[c]-1,~~(s+n/2)):Math.max(e[u],~~(s-1-r/2));!l[a];)a++;for(f=p[a];!f&&l[a-1];)f=p[--a];return o[c]=a,i[u]=o[c]+1,[o,i]}}(i==r?"r":i==o?"g":"b")}}return i.prototype={volume:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(t){var e=this.histo;if(!this._count_set||t){var r,o,i,s=0;for(r=this.r1;r<=this.r2;r++)for(o=this.g1;o<=this.g2;o++)for(i=this.b1;i<=this.b2;i++)s+=e[n(r,o,i)]||0;this._count=s,this._count_set=!0}return this._count},copy:function(){return new i(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(e){var r=this.histo;if(!this._avg||e){var o,i,s,a,u=0,c=1<<8-t,h=0,f=0,l=0;for(i=this.r1;i<=this.r2;i++)for(s=this.g1;s<=this.g2;s++)for(a=this.b1;a<=this.b2;a++)u+=o=r[n(i,s,a)]||0,h+=o*(i+.5)*c,f+=o*(s+.5)*c,l+=o*(a+.5)*c;this._avg=u?[~~(h/u),~~(f/u),~~(l/u)]:[~~(c*(this.r1+this.r2+1)/2),~~(c*(this.g1+this.g2+1)/2),~~(c*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var r=t[0]>>e;return gval=t[1]>>e,bval=t[2]>>e,r>=this.r1&&r<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},s.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,r=0;r<e.size();r++)if(e.peek(r).vbox.contains(t))return e.peek(r).color;return this.nearest(t)},nearest:function(t){for(var e,r,n,o=this.vboxes,i=0;i<o.size();i++)((r=Math.sqrt(Math.pow(t[0]-o.peek(i).color[0],2)+Math.pow(t[1]-o.peek(i).color[1],2)+Math.pow(t[2]-o.peek(i).color[2],2)))<e||void 0===e)&&(e=r,n=o.peek(i).color);return n},forcebw:function(){var t=this.vboxes;t.sort(function(t,e){return f.naturalOrder(f.sum(t.color),f.sum(e.color))});var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var r=t.length-1,n=t[r].color;n[0]>251&&n[1]>251&&n[2]>251&&(t[r].color=[255,255,255])}},{quantize:function(u,c){if(!u.length||c<2||c>256)return!1;var h=function(r){var o,i=new Array(1<<3*t);return r.forEach(function(t){o=n(t[0]>>e,t[1]>>e,t[2]>>e),i[o]=(i[o]||0)+1}),i}(u);h.forEach(function(){});var l=function(t,r){var n,o,s,a=1e6,u=0,c=1e6,h=0,f=1e6,l=0;return t.forEach(function(t){(n=t[0]>>e)<a?a=n:n>u&&(u=n),(o=t[1]>>e)<c?c=o:o>h&&(h=o),(s=t[2]>>e)<f?f=s:s>l&&(l=s)}),new i(a,u,c,h,f,l,r)}(u,h),p=new o(function(t,e){return f.naturalOrder(t.count(),e.count())});function g(t,e){for(var n,o=1,i=0;i<r;)if((n=t.pop()).count()){var s=a(h,n),u=s[0],c=s[1];if(!u)return;if(t.push(u),c&&(t.push(c),o++),o>=e)return;if(i++>r)return}else t.push(n),i++}p.push(l),g(p,.75*c);for(var v=new o(function(t,e){return f.naturalOrder(t.count()*t.volume(),e.count()*e.volume())});p.size();)v.push(p.pop());g(v,c-v.size());for(var d=new s;v.size();)d.push(v.pop());return d}}}(),p=function(){function r(t){n(this,t),this.nozoom=!1,this.bg="auto",this.sources=[],this.active=!1}return r.prototype.componentWillLoad=function(){this.prepareSources(),this.setBG(),this.updateAspectRatio()},r.prototype.componentDidLoad=function(){this.addIntersectionObserver(),this.figure=this.element.shadowRoot.querySelector("figure")},r.prototype.mountZoom=function(){var t=this.element.shadowRoot.querySelector("img");this.zoom=a(t,{background:""+this.bg,scrollOffset:1,margin:30})},r.prototype.handlePosterChange=function(){this.setBG()},r.prototype.medium=function(){return t(this,void 0,void 0,function(){return e(this,function(){return[2,this.zoom]})})},r.prototype.handleImage=function(){return t(this,void 0,void 0,function(){return e(this,function(t){switch(t.label){case 0:return this.active=!0,this.nozoom?[3,2]:[4,u(200)];case 1:t.sent(),this.mountZoom(),t.label=2;case 2:return[2]}})})},r.prototype.addIntersectionObserver=function(){var t=this;"IntersectionObserver"in window?(this.io=new IntersectionObserver(function(e){e[0].isIntersecting&&(t.handleImage(),t.removeIntersectionObserver())},{rootMargin:"50%",threshold:[0]}),this.io.observe(this.element.shadowRoot.querySelector("figure"))):setTimeout(function(){t.handleImage()},300)},r.prototype.removeIntersectionObserver=function(){this.io&&(this.io.disconnect(),this.io=null)},r.prototype.getPictureColor=function(){var t=this,e=new Image(80,80);e.addEventListener("load",function(){var r=new h;t.palette=r.getColor(e),s.set({"--bg":"rgb("+t.palette[0]+", "+t.palette[1]+", "+t.palette[2]+")"},t.element),t.bg="rgb("+t.palette[0]+", "+t.palette[1]+", "+t.palette[2]+")",t.zoom&&t.zoom.update({background:t.bg})},!1),e.src=this.poster,e.crossOrigin="Anonymous"},r.prototype.setBG=function(){"auto"===this.bg?this.getPictureColor():s.set({"--bg":""+this.bg},this.element)},r.prototype.prepareSources=function(){var t=this.element.querySelectorAll("source"),e=[];[].forEach.call(t,function(t){e=e.concat([t]),t.hidden=!0}),this.sources=e,this.poster=this.poster?this.poster:this.sources[this.sources.length-1].srcset},r.prototype.updateAspectRatio=function(){this.aspectRatio=this.height/this.width*100,s.set({"--aspect_ratio":this.aspectRatio+"%","--width":this.width+"px","--height":this.height+"px"},this.element)},r.prototype.renderPicture=function(){if(this.active)return[this.sources.map(function(t){return o("source",{srcSet:t.srcset,media:!!t.media&&t.media})}),o("img",{src:this.sources[0].srcset,class:"final_image"})]},r.prototype.render=function(){var t=this;return o("figure",{itemtype:"http://schema.org/ImageObject",class:this.active?"loaded":"",onClick:function(){t.zoom&&t.zoom.open()}},o("div",{class:"overlay"}),o("picture",null,this.renderPicture()),o("div",{class:"placeholder",style:{"background-image":"url("+this.poster+")"}}))},Object.defineProperty(r.prototype,"element",{get:function(){return i(this)},enumerable:!0,configurable:!0}),Object.defineProperty(r,"watchers",{get:function(){return{poster:["handlePosterChange"]}},enumerable:!0,configurable:!0}),Object.defineProperty(r,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;background:var(--bg,transparent);width:100%;max-width:var(--width,300px);max-height:var(--height,300px)}:host([block]){--width:100%!important;--height:100%!important}:host figure{display:block;position:relative;margin:0;padding-bottom:var(--aspect_ratio,100%);width:100%;height:0;cursor:-webkit-zoom-in;cursor:zoom-in;-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s}:host figure:focus,:host figure:hover{-webkit-transform:scale(1.025);transform:scale(1.025)}:host([nozoom]) figure{-webkit-transform:none!important;transform:none!important;cursor:default!important}:host figure:active{-webkit-transform:scale(.975);transform:scale(.975)}:host .overlay,:host img.placeholder,:host picture{position:absolute;top:0;left:0;-webkit-transition:all .85s cubic-bezier(.2,.3,.25,.9) 1s;transition:all .85s cubic-bezier(.2,.3,.25,.9) 1s;width:100%;height:100%;overflow:hidden;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges}:host .overlay{opacity:.5;z-index:3;pointer-events:none;background:var(--gradient,none);mix-blend-mode:var(--blend,multiply)}:host picture{-webkit-transition:all .85s cubic-bezier(.2,.3,.25,.9) 1s;transition:all .85s cubic-bezier(.2,.3,.25,.9) 1s;opacity:0;z-index:2}:host picture img.final_image{display:block;width:100%;height:100%}:host .placeholder{position:absolute;width:100%;height:100%;pointer-events:none;opacity:1;z-index:1;background:var(--bg,transparent) 50% 50%/cover no-repeat;-webkit-filter:blur(10px);filter:blur(10px);image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges;-ms-interpolation-mode:nearest-neighbor;-webkit-transition:all .85s cubic-bezier(.2,.3,.25,.9) 1s;transition:all .85s cubic-bezier(.2,.3,.25,.9) 1s}:host figure.loaded picture{opacity:1}:host figure.loaded .placeholder{-webkit-filter:blur(0);filter:blur(0);opacity:0}:host figure.loaded .overlay{opacity:.3}"},enumerable:!0,configurable:!0}),r}();r("stellar_image",p)}}});