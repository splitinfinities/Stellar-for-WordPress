import{r as t,h as e,H as s,g as r,e as a}from"./p-fd27e385.js";import"./p-dd50d686.js";import"./p-20de5b5b.js";import{T as i}from"./p-cd443245.js";import{b as o,c as n}from"./p-5c97c18e.js";import{c as h,a as l}from"./p-c428ff15.js";import"./p-c93f133f.js";import"./p-22e0cac7.js";import"./p-3a3a4911.js";const m=class{constructor(e){t(this,e),this.width=600,this.height=300,this.block=!1,this.loading=!1,this.icon=!1}in(){this.element.classList.add("visible")}out(){this.element.classList.remove("visible")}render(){return e(s,{style:!this.block&&{"--width":`${this.width}px`,"--height":`${this.height}px`}},this.loading&&this.icon&&e("ion-icon",{name:"spinning-bubbles",color:"gray25"}),e("svg",{width:this.width,height:this.height},e("rect",{width:this.width,height:this.height})),e("stellar-intersection",{element:this.element,multiple:!0,in:this.in.bind(this),out:this.out.bind(this)}))}get element(){return r(this)}static get style(){return'skeleton-img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;display:block;position:relative;margin-bottom:1rem;border-radius:4px;overflow:hidden;max-width:var(--width);max-height:var(--height);contain:content}skeleton-img svg{display:block;width:100%;height:auto;overflow:hidden}skeleton-img svg rect{fill:var(--theme-base5)}skeleton-img[loading]{position:relative}skeleton-img[loading]::before{content:"";display:block;position:absolute;top:0;right:0;bottom:0;left:-100%;background-color:var(--theme-base5);background-image:linear-gradient(45deg, var(--theme-base5) 0%, var(--theme-base5) 20%, var(--theme-base3) 40%, var(--theme-base4) 61%, var(--theme-base5) 80%, var(--theme-base5) 100%);width:300%;height:100%;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}skeleton-img[loading].visible::before{-webkit-animation:1.25s linear 0s shimmer infinite forwards;animation:1.25s linear 0s shimmer infinite forwards}skeleton-img ion-icon{position:absolute;top:50%;right:50%;bottom:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:var(--icon-width);height:var(--icon-height)}@-webkit-keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}100%{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}@keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}100%{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}'}},d=class{constructor(e){t(this,e),this.slender=!1,this.max=100,this.indeterminate=!1,this.dark=!1,this.editable=!1,this.noease=!1,this.rounded=!1,this.value=0,this.secondary=0,this.blurable=!0,this.wrapper="stellar-blur",this.blur=0,this.ease=o({end:20,start:-1,duration:200,tick:t=>{this.blur=t.value},complete:()=>{this.blur=0,this.ease.stop()}}),this.update=a(this,"update",7)}componentWillLoad(){this.blurable||(this.wrapper="div")}observeValue(){!this.indeterminate&&this.blurable&&this.ease.start()}handleClick(t){if(this.editable){var e=this.element.getBoundingClientRect(),s=Math.round((t.pageX-e.left)/e.width*this.max*100)/100;this.rounded&&(s=Math.ceil(s)),this.value=s,this.update.emit({value:this.value})}}progress(t){if(t){let t=this.secondary/this.max*100;return t=t<100?t:100,t=t>0?t:0,t}{let t=this.value/this.max*100;return t=t<100?t:100,t=t>0?t:0,t}}render(){return this.indeterminate?e("svg",{viewBox:"0 0 100 100"},e("circle",{cx:"50",cy:"50",r:"20","stroke-width":"4",fill:"none","stroke-linecap":"round"})):e(this.wrapper,{class:"progress",horizontal:this.blur,onClick:t=>{this.handleClick(t)}},e("div",{class:"status",style:{transform:`translate(${this.progress()}%, 0)`}}),this.secondary?e("div",{class:"secondary",style:{transform:`translate(${this.progress(!0)}%, 0)`}}):"")}get element(){return r(this)}static get watchers(){return{value:["observeValue"]}}static get style(){return":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block;position:relative;overflow:hidden;--border-radius:0.3rem;--time:124;--negative-time:-124}:host .blur-content{display:block;height:100%}:host([editable]){cursor:pointer}:host .progress{display:block;position:relative;-webkit-transition:all 0.25s var(--ease) 0ms;transition:all 0.25s var(--ease) 0ms;background:var(--gray0);width:100%;height:0.6rem;border-radius:var(--border-radius);overflow:hidden}:host([editable]:hover) .progress{height:2.4rem}:host .status,:host .secondary{position:absolute;top:0;right:0;bottom:0;left:-100%;-webkit-transition:all 0.35s var(--ease, ease-in-out) 0ms;transition:all 0.35s var(--ease, ease-in-out) 0ms;background:var(--theme-base5, var(--gray5));width:100%;z-index:2}:host .secondary{background:var(--theme-base3, var(--gray3));z-index:1}:host([slender]) .progress{border:0;height:0.2rem}:host([slender][editable]:hover) .progress{height:0.4rem}:host([noease]) .progress,:host([noease]) .status,:host([noease]) .secondary{-webkit-transition:none !important;transition:none !important}:host([indeterminate]){height:100px;width:100px}:host([indeterminate]) svg{-webkit-transform:rotate(0deg);transform:rotate(0deg);stroke:var(--theme-base5);-webkit-animation:rotate var(--ease) 9.2s infinite;animation:rotate var(--ease) 9.2s infinite}:host([indeterminate]) circle{stroke-dasharray:var(--time);stroke-dashoffset:var(--time);-webkit-animation:load var(--ease) 2.3s infinite;animation:load var(--ease) 2.3s infinite}:host([dark]) .progress{background:var(--theme-base9)}:host([dark]) .secondary{background:var(--theme-base7, var(--gray7));z-index:1}:host([dark]) circle{-webkit-animation:load-dark var(--ease) 2.3s infinite;animation:load-dark var(--ease) 2.3s infinite}@-webkit-keyframes load{0%{stroke:var(--theme-complement7)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}100%{stroke-dashoffset:var(--negative-time);stroke:var(--theme-base3)}}@keyframes load{0%{stroke:var(--theme-complement7)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}100%{stroke-dashoffset:var(--negative-time);stroke:var(--theme-base3)}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes load-dark{0%{stroke:var(--theme-complement5)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}75%{stroke:var(--theme-base7)}100%{stroke-dashoffset:var(--negative-time);stroke:var(--theme-complement7)}}@keyframes load-dark{0%{stroke:var(--theme-complement5)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}75%{stroke:var(--theme-base7)}100%{stroke-dashoffset:var(--negative-time);stroke:var(--theme-complement7)}}"}};i.injectProps(d,["dark"]);const c=250,v=100,b=15;var f=h((function(t){(function(){t.exports=function(t,e,s){var r,a,i,o,n,h;if(t/=255,e/=255,s/=255,a=0,h=0,i=((o=Math.max(t,e,s))+(n=Math.min(t,e,s)))/2,o===n)a=h=0;else{switch(r=o-n,h=i>.5?r/(2-o-n):r/(o+n),o){case t:a=(e-s)/r+(e<s?6:0);break;case e:a=(s-t)/r+2;break;case s:a=(t-e)/r+4}a/=6}return[a=Math.ceil(360*a),h=Math.ceil(100*h)+"%",i=Math.ceil(100*i)+"%"]}}).call(l)})),g=function(t){var e=f.apply(f,function(t){t.charAt&&"#"===t.charAt(0)&&(t=function(t){var e=t.split("");return e.shift(),e.join("")}(t)),3===t.length&&(t=function(t){return t.split("").reduce((function(t,e){return t.concat([e,e])}),[]).join("")}(t));var e=parseInt(t,16);return[e>>16&255,e>>8&255,255&e]}(t));return[e[0],parseInt(e[1],10),parseInt(e[2],10)]};const k=class{constructor(e){t(this,e),this.for="web_audio",this.type="wave",this.smoothing=.7,this.size=1024,this.color="white",this.width=1024,this.height=1024,this.clearBackground=()=>{this.canvasCTX.clearRect(0,0,this.canvas.width,this.canvas.height),this.canvasCTX.fillStyle="transparent",this.canvasCTX.fillRect(0,0,this.canvas.width,this.canvas.height)}}componentWillLoad(){this.handleColorChange()}componentDidLoad(){this.canvas=this.element.shadowRoot.querySelector("canvas")}handleColorChange(){this._color=["white","black","black-alt"].includes(this.color)?g(n[this.color]):g(n[this.color][5])}async connect(t,e){return this.context=t,this.analyser=this.context.createAnalyser(),e&&this.analyser.connect(e),this.freqs=new Uint8Array(this.analyser.frequencyBinCount),this.times=new Uint8Array(this.analyser.frequencyBinCount),this.canvasCTX=this.canvas.getContext("2d"),requestAnimationFrame(this.draw.bind(this)),this}draw(){this.analyser.smoothingTimeConstant=this.smoothing,this.analyser.fftSize=this.size,this.analyser.getByteFrequencyData(this.freqs),this.analyser.getByteTimeDomainData(this.times),this.canvas.width=this.width,this.canvas.height=this.height,this.clearBackground(),"wave"===this.type?(t=>{for(var e=0;e<t.analyser.frequencyBinCount;e++){var s=t.height-t.height*(t.times[e]/512)*1.25,r=t.width/t.analyser.frequencyBinCount+16;t.canvasCTX.fillStyle=`hsl(${t._color[0]}, ${t._color[1]}%, ${t._color[2]}%)`,t.canvasCTX.fillRect(e*r,s,24,24)}})(this):"bars"===this.type?(t=>{for(var e=0;e<t.analyser.frequencyBinCount;e++){var s=t.freqs[e]/256,r=t.height*s*.75,a=t.height-r+25,i=t.width/t.analyser.frequencyBinCount+24;t.canvasCTX.fillStyle=`hsl(${t._color[0]}, ${t._color[1]}%, ${100*s}%)`,t.canvasCTX.fillRect(e*i,a,i,r)}})(this):"bars2"===this.type?(t=>{const e=t.freqs,s=t.canvas,r=t.canvasCTX;for(var a=e.length-50*~~(e.length/70),i=t.size,o=~~(a/70),n=s.width/70,h=4,l=s.height-8,m=0;m<a;m+=o){var d=e[m]/i*l,c=l/2-d/2;r.beginPath(),r.shadowColor="rgba(24, 24, 24, 0.25)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,r.strokeStyle=`hsl(${t._color[0]}, ${t._color[1]}%, ${t._color[2]}%)`,r.lineWidth=4,r.lineCap="round",r.moveTo(h,c),r.lineTo(h,c+d),r.stroke(),h+=n}})(this):"circle"===this.type&&(t=>{const e=t.analyser.frequencyBinCount,s=(r=t.freqs).reduce((t,e)=>t+e)/r.length;var r;const a=s<b?b:s;let i=0,o=t.width/2,n=t.height/2,h=2*v*Math.PI/e;t.canvasCTX.beginPath(),t.canvasCTX.arc(o,n,v,0,2*Math.PI),t.canvasCTX.lineWidth=a,t.canvasCTX.strokeStyle=`hsl(${t._color[0]}, ${t._color[1]}%, ${t._color[2]}%)`,t.canvasCTX.closePath(),t.canvasCTX.stroke(),t.canvasCTX.save(),t.canvasCTX.translate(o,n);for(var l=0;l<t.analyser.frequencyBinCount;l++){const s=t.freqs[l],r=s>c?c:s;t.canvasCTX.rotate(i),t.canvasCTX.fillStyle=`hsl(${t._color[0]}, ${t._color[1]}%, ${t._color[2]}%)`,t.canvasCTX.fillRect(v+100,-1*h/2,r,h),i=i/(e+h)%360+1}})(this),requestAnimationFrame(this.draw.bind(this))}getFrequencyValue(t){var e=Math.round(t/(this.context.sampleRate/2)*this.freqs.length);return this.freqs[e]}render(){return e("canvas",{id:"canvas"})}get element(){return r(this)}static get watchers(){return{color:["handleColorChange"]}}static get style(){return":host{display:block}:host canvas{display:block;width:100%;height:100%}"}};export{m as skeleton_img,d as stellar_progress,k as web_audio_visualizer};