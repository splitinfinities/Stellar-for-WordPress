StellarCore.loadBundle("chunk-841f0e81.js",["exports","./chunk-a218a313.js"],function(t,e){window;var r=e.createCommonjsModule(function(t,e){t.exports=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=(e.isArray=function(t){return t&&Array.isArray(t)},e.isString=function(t){return t&&"string"==typeof t}),o=e.isObject=function(t){return t&&"object"===(void 0===t?"undefined":n(t))},u=(e.forEach=function(t,e){if(o(t))for(var r in t)t.hasOwnProperty(r)&&e(r,t[r])},e.set=function(t,e,r){return o(t)?(t[e]=r,t):t},e.startsWith=function(t,e){return i(t)&&t.startsWith(e)},e.isNumber=function(t){return!isNaN(t)&&"Infinity"!==t});e.formatResult=function(t){return u(t)?parseFloat(t,10):t},e.unprefixString=function(t,e){return t.startsWith(e)?t.slice(e.length):t},e.prefixString=function(t,e){return t.startsWith(e)?t:""+e+t}},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=r(0),o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,null,[{key:"get",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.root;if(r&&t.isValidName(e)){var n=getComputedStyle(r).getPropertyValue(t.prefix(e)),o=n&&n.trim();return o&&""!==o?(0,i.formatResult)(o):void 0}}},{key:"getAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.root;if(e){var r={};return(0,i.forEach)(e.style,function(n,o){if((0,i.startsWith)(o,"--")){var u=o;(0,i.set)(r,t.unprefix(u),t.get(u,e))}}),r}}},{key:"getAllPrefixed",value:function(){return t.prefix(t.getAll(arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.root))}},{key:"has",value:function(e){return!!t.get(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.root)}},{key:"set",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.root;if(r){if(!e)return{};var n={};return(0,i.forEach)(e,function(e,o){t.setProperty(e,o,r),(0,i.set)(n,t.unprefix(e),t.get(e,r))}),n}}},{key:"setProperty",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.root;if(n&&t.isValidName(e))return n.style.setProperty(t.prefix(e),r),r}},{key:"unset",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.root;if(r&&t.isValidName(e)){var n=t.get(e,r);return t.set(function(t,e,r){return e in t?Object.defineProperty(t,e,{value:null,enumerable:!0,configurable:!0,writable:!0}):t[e]=null,t}({},e),r),n}}},{key:"unsetAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.root;if(e){var r=t.getAll(e);return(0,i.forEach)(r,function(r,n){t.unset(r,e)}),r}}},{key:"getElement",value:function(t){return document.querySelector(t)}},{key:"prefix",value:function(t){if((0,i.isString)(t))return(0,i.prefixString)(t,"--");if((0,i.isArray)(t))return t.map(function(t){return(0,i.prefixString)(t,"--")});if((0,i.isObject)(t)){var e={};return(0,i.forEach)(t,function(t,r){(0,i.set)(e,(0,i.prefixString)(t,"--"),r)}),e}}},{key:"unprefix",value:function(t){if((0,i.isString)(t))return(0,i.unprefixString)(t,"--");if((0,i.isArray)(t))return t.map(function(t){return(0,i.unprefixString)(t,"--")});if((0,i.isObject)(t)){var e={};return(0,i.forEach)(t,function(t,r){(0,i.set)(e,(0,i.unprefixString)(t,"--"),r)}),e}}},{key:"isValidName",value:function(t){return(0,i.isString)(t)}},{key:"root",get:function(){return t.getElement(":root")}}]),t}();e.default=o,t.exports=e.default}])}),n=e.unwrapExports(r);t.properties=n});