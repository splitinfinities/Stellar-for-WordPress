var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e,o){return e(o={exports:{}},o.exports),o.exports}const t=Object.freeze({commonjsGlobal:e,commonjsRequire:o,unwrapExports:n,createCommonjsModule:r,getCjsExportFromNamespace:function(e){return e&&e.default||e}});export{r as a,o as b,e as c,n as d,t as e};