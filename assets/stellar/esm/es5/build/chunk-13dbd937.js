import{a as createCommonjsModule,b as commonjsGlobal}from"./chunk-7646164d.js";for(var performanceNow=createCommonjsModule(function(e){(function(){var o,n,r,a,t,f;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(o()-t)/1e6},n=process.hrtime,a=(o=function(){var e;return 1e9*(e=n())[0]+e[1]})(),f=1e9*process.uptime(),t=a-f):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(commonjsGlobal)}),root="undefined"==typeof window?commonjsGlobal:window,vendors=["moz","webkit"],suffix="AnimationFrame",raf=root["request"+suffix],caf=root["cancel"+suffix]||root["cancelRequest"+suffix],i=0;!raf&&i<vendors.length;i++)raf=root[vendors[i]+"Request"+suffix],caf=root[vendors[i]+"Cancel"+suffix]||root[vendors[i]+"CancelRequest"+suffix];if(!raf||!caf){var last=0,id=0,queue=[],frameDuration=1e3/60;raf=function(e){if(0===queue.length){var o=performanceNow(),n=Math.max(0,frameDuration-(o-last));last=n+o,setTimeout(function(){var e=queue.slice(0);queue.length=0;for(var o=0;o<e.length;o++)if(!e[o].cancelled)try{e[o].callback(last)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return queue.push({handle:++id,callback:e,cancelled:!1}),id},caf=function(e){for(var o=0;o<queue.length;o++)queue[o].handle===e&&(queue[o].cancelled=!0)}}var raf_1=function(e){return raf.call(root,e)},cancel=function(){caf.apply(root,arguments)},polyfill=function(e){e||(e=root),e.requestAnimationFrame=raf,e.cancelAnimationFrame=caf};raf_1.cancel=cancel,raf_1.polyfill=polyfill;export{raf_1 as a,raf_1 as b};