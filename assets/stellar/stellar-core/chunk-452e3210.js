var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

const commonjsHelpers = /*#__PURE__*/Object.freeze({
	commonjsGlobal: commonjsGlobal,
	commonjsRequire: commonjsRequire,
	unwrapExports: unwrapExports,
	createCommonjsModule: createCommonjsModule,
	getCjsExportFromNamespace: getCjsExportFromNamespace
});

export { createCommonjsModule as a, commonjsGlobal as b, unwrapExports as c, commonjsRequire as d, commonjsHelpers as e };