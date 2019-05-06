var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { c as registerInstance, h as createEvent, d as h, f as getElement } from './stellar-core-3af17cd6.js';
import { a as createCommonjsModule, e as unwrapExports } from './chunk-c16f1b5d.js';
import { a as eqjs } from './chunk-5d719a7a.js';
var sortable = createCommonjsModule(function (module, exports) {
    (function webpackUniversalModuleDefinition(root, factory) {
        module.exports = factory();
    })(window, function () {
        return /******/ (function (modules) {
            /******/ // The module cache
            /******/ var installedModules = {};
            /******/
            /******/ // The require function
            /******/ function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/ if (installedModules[moduleId]) {
                    /******/ return installedModules[moduleId].exports;
                    /******/ }
                /******/ // Create a new module (and put it into the cache)
                /******/ var module = installedModules[moduleId] = {
                    /******/ i: moduleId,
                    /******/ l: false,
                    /******/ exports: {}
                    /******/ 
                };
                /******/
                /******/ // Execute the module function
                /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/ module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/ return module.exports;
                /******/ 
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/ __webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/ __webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/ __webpack_require__.d = function (exports, name, getter) {
                /******/ if (!__webpack_require__.o(exports, name)) {
                    /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/ }
                /******/ 
            };
            /******/
            /******/ // define __esModule on exports
            /******/ __webpack_require__.r = function (exports) {
                /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/ }
                /******/ Object.defineProperty(exports, '__esModule', { value: true });
                /******/ 
            };
            /******/
            /******/ // create a fake namespace object
            /******/ // mode & 1: value is a module id, require it
            /******/ // mode & 2: merge all properties of value into the ns
            /******/ // mode & 4: return value when already ns object
            /******/ // mode & 8|1: behave like require
            /******/ __webpack_require__.t = function (value, mode) {
                /******/ if (mode & 1)
                    value = __webpack_require__(value);
                /******/ if (mode & 8)
                    return value;
                /******/ if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                    return value;
                /******/ var ns = Object.create(null);
                /******/ __webpack_require__.r(ns);
                /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                /******/ if (mode & 2 && typeof value != 'string')
                    for (var key in value)
                        __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
                /******/ return ns;
                /******/ 
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/ __webpack_require__.n = function (module) {
                /******/ var getter = module && module.__esModule ?
                    /******/ function getDefault() { return module['default']; } :
                    /******/ function getModuleExports() { return module; };
                /******/ __webpack_require__.d(getter, 'a', getter);
                /******/ return getter;
                /******/ 
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
            /******/
            /******/ // __webpack_public_path__
            /******/ __webpack_require__.p = "";
            /******/
            /******/
            /******/ // Load entry module and return exports
            /******/ return __webpack_require__(__webpack_require__.s = 44);
            /******/ 
        })([
            /* 0 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _SensorEvent = __webpack_require__(19);
                Object.keys(_SensorEvent).forEach(function (key) {
                    if (key === "default" || key === "__esModule")
                        return;
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: function () {
                            return _SensorEvent[key];
                        }
                    });
                });
                /***/ 
            }),
            /* 1 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _Sensor = __webpack_require__(22);
                var _Sensor2 = _interopRequireDefault(_Sensor);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _Sensor2.default;
                /***/ 
            }),
            /* 2 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _closest = __webpack_require__(26);
                Object.defineProperty(exports, 'closest', {
                    enumerable: true,
                    get: function () {
                        return _interopRequireDefault(_closest).default;
                    }
                });
                var _requestNextAnimationFrame = __webpack_require__(24);
                Object.defineProperty(exports, 'requestNextAnimationFrame', {
                    enumerable: true,
                    get: function () {
                        return _interopRequireDefault(_requestNextAnimationFrame).default;
                    }
                });
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                /***/ 
            }),
            /* 3 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _AbstractEvent = __webpack_require__(42);
                var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _AbstractEvent2.default;
                /***/ 
            }),
            /* 4 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _AbstractPlugin = __webpack_require__(35);
                var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _AbstractPlugin2.default;
                /***/ 
            }),
            /* 5 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _Sensor = __webpack_require__(1);
                Object.defineProperty(exports, 'Sensor', {
                    enumerable: true,
                    get: function () {
                        return _interopRequireDefault(_Sensor).default;
                    }
                });
                var _MouseSensor = __webpack_require__(21);
                Object.defineProperty(exports, 'MouseSensor', {
                    enumerable: true,
                    get: function () {
                        return _interopRequireDefault(_MouseSensor).default;
                    }
                });
                var _TouchSensor = __webpack_require__(18);
                Object.defineProperty(exports, 'TouchSensor', {
                    enumerable: true,
                    get: function () {
                        return _interopRequireDefault(_TouchSensor).default;
                    }
                });
                var _DragSensor = __webpack_require__(16);
                Object.defineProperty(exports, 'DragSensor', {
                    enumerable: true,
                    get: function () {
                        return _interopRequireDefault(_DragSensor).default;
                    }
                });
                var _ForceTouchSensor = __webpack_require__(14);
                Object.defineProperty(exports, 'ForceTouchSensor', {
                    enumerable: true,
                    get: function () {
                        return _interopRequireDefault(_ForceTouchSensor).default;
                    }
                });
                var _SensorEvent = __webpack_require__(0);
                Object.keys(_SensorEvent).forEach(function (key) {
                    if (key === "default" || key === "__esModule")
                        return;
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: function () {
                            return _SensorEvent[key];
                        }
                    });
                });
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                /***/ 
            }),
            /* 6 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _Announcement = __webpack_require__(37);
                Object.defineProperty(exports, 'Announcement', {
                    enumerable: true,
                    get: function () {
                        return _interopRequireDefault(_Announcement).default;
                    }
                });
                Object.defineProperty(exports, 'defaultAnnouncementOptions', {
                    enumerable: true,
                    get: function () {
                        return _Announcement.defaultOptions;
                    }
                });
                var _Focusable = __webpack_require__(34);
                Object.defineProperty(exports, 'Focusable', {
                    enumerable: true,
                    get: function () {
                        return _interopRequireDefault(_Focusable).default;
                    }
                });
                var _Mirror = __webpack_require__(32);
                Object.defineProperty(exports, 'Mirror', {
                    enumerable: true,
                    get: function () {
                        return _interopRequireDefault(_Mirror).default;
                    }
                });
                Object.defineProperty(exports, 'defaultMirrorOptions', {
                    enumerable: true,
                    get: function () {
                        return _Mirror.defaultOptions;
                    }
                });
                var _Scrollable = __webpack_require__(28);
                Object.defineProperty(exports, 'Scrollable', {
                    enumerable: true,
                    get: function () {
                        return _interopRequireDefault(_Scrollable).default;
                    }
                });
                Object.defineProperty(exports, 'defaultScrollableOptions', {
                    enumerable: true,
                    get: function () {
                        return _Scrollable.defaultOptions;
                    }
                });
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                /***/ 
            }),
            /* 7 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _DraggableEvent = __webpack_require__(38);
                Object.keys(_DraggableEvent).forEach(function (key) {
                    if (key === "default" || key === "__esModule")
                        return;
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: function () {
                            return _DraggableEvent[key];
                        }
                    });
                });
                /***/ 
            }),
            /* 8 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _DragEvent = __webpack_require__(39);
                Object.keys(_DragEvent).forEach(function (key) {
                    if (key === "default" || key === "__esModule")
                        return;
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: function () {
                            return _DragEvent[key];
                        }
                    });
                });
                /***/ 
            }),
            /* 9 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _SortableEvent = __webpack_require__(43);
                Object.keys(_SortableEvent).forEach(function (key) {
                    if (key === "default" || key === "__esModule")
                        return;
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: function () {
                            return _SortableEvent[key];
                        }
                    });
                });
                /***/ 
            }),
            /* 10 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                /**
                 * The Emitter is a simple emitter class that provides you with `on()`, `off()` and `trigger()` methods
                 * @class Emitter
                 * @module Emitter
                 */
                var Emitter = /** @class */ (function () {
                    function Emitter() {
                        this.callbacks = {};
                    }
                    /**
                     * Registers callbacks by event name
                     * @param {String} type
                     * @param {...Function} callbacks
                     */
                    Emitter.prototype.on = function (type) {
                        var _a;
                        var callbacks = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            callbacks[_i - 1] = arguments[_i];
                        }
                        if (!this.callbacks[type]) {
                            this.callbacks[type] = [];
                        }
                        (_a = this.callbacks[type]).push.apply(_a, callbacks);
                        return this;
                    };
                    /**
                     * Unregisters callbacks by event name
                     * @param {String} type
                     * @param {Function} callback
                     */
                    Emitter.prototype.off = function (type, callback) {
                        if (!this.callbacks[type]) {
                            return null;
                        }
                        var copy = this.callbacks[type].slice(0);
                        for (var i = 0; i < copy.length; i++) {
                            if (callback === copy[i]) {
                                this.callbacks[type].splice(i, 1);
                            }
                        }
                        return this;
                    };
                    /**
                     * Triggers event callbacks by event object
                     * @param {AbstractEvent} event
                     */
                    Emitter.prototype.trigger = function (event) {
                        if (!this.callbacks[event.type]) {
                            return null;
                        }
                        var callbacks = this.callbacks[event.type].slice();
                        var caughtErrors = [];
                        for (var i = callbacks.length - 1; i >= 0; i--) {
                            var callback = callbacks[i];
                            try {
                                callback(event);
                            }
                            catch (error) {
                                caughtErrors.push(error);
                            }
                        }
                        if (caughtErrors.length) {
                            /* eslint-disable no-console */
                            console.error("Draggable caught errors while triggering '" + event.type + "'", caughtErrors);
                            /* eslint-disable no-console */
                        }
                        return this;
                    };
                    return Emitter;
                }());
                exports.default = Emitter;
                /***/ 
            }),
            /* 11 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _Emitter = __webpack_require__(10);
                var _Emitter2 = _interopRequireDefault(_Emitter);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _Emitter2.default;
                /***/ 
            }),
            /* 12 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultOptions = undefined;
                var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                } return target; };
                var _utils = __webpack_require__(2);
                var _Plugins = __webpack_require__(6);
                var _Emitter = __webpack_require__(11);
                var _Emitter2 = _interopRequireDefault(_Emitter);
                var _Sensors = __webpack_require__(5);
                var _DraggableEvent = __webpack_require__(7);
                var _DragEvent = __webpack_require__(8);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                var onDragStart = Symbol('onDragStart');
                var onDragMove = Symbol('onDragMove');
                var onDragStop = Symbol('onDragStop');
                var onDragPressure = Symbol('onDragPressure');
                /**
                 * @const {Object} defaultAnnouncements
                 * @const {Function} defaultAnnouncements['drag:start']
                 * @const {Function} defaultAnnouncements['drag:stop']
                 */
                var defaultAnnouncements = {
                    'drag:start': function (event) { return "Picked up " + (event.source.textContent.trim() || event.source.id || 'draggable element'); },
                    'drag:stop': function (event) { return "Released " + (event.source.textContent.trim() || event.source.id || 'draggable element'); }
                };
                var defaultClasses = {
                    'container:dragging': 'draggable-container--is-dragging',
                    'source:dragging': 'draggable-source--is-dragging',
                    'source:placed': 'draggable-source--placed',
                    'container:placed': 'draggable-container--placed',
                    'body:dragging': 'draggable--is-dragging',
                    'draggable:over': 'draggable--over',
                    'container:over': 'draggable-container--over',
                    'source:original': 'draggable--original',
                    mirror: 'draggable-mirror'
                };
                var defaultOptions = exports.defaultOptions = {
                    draggable: '.draggable-source',
                    handle: null,
                    delay: 100,
                    placedTimeout: 800,
                    plugins: [],
                    sensors: []
                };
                /**
                 * This is the core draggable library that does the heavy lifting
                 * @class Draggable
                 * @module Draggable
                 */
                var Draggable = /** @class */ (function () {
                    /**
                     * Draggable constructor.
                     * @constructs Draggable
                     * @param {HTMLElement[]|NodeList|HTMLElement} containers - Draggable containers
                     * @param {Object} options - Options for draggable
                     */
                    function Draggable(containers, options) {
                        var _this = this;
                        if (containers === void 0) { containers = [document.body]; }
                        if (options === void 0) { options = {}; }
                        /**
                         * Draggable containers
                         * @property containers
                         * @type {HTMLElement[]}
                         */
                        if (containers instanceof NodeList || containers instanceof Array) {
                            this.containers = containers.slice();
                        }
                        else if (containers instanceof HTMLElement) {
                            this.containers = [containers];
                        }
                        else {
                            throw new Error('Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`');
                        }
                        this.options = _extends({}, defaultOptions, options, {
                            classes: _extends({}, defaultClasses, options.classes || {}),
                            announcements: _extends({}, defaultAnnouncements, options.announcements || {})
                        });
                        /**
                         * Draggables event emitter
                         * @property emitter
                         * @type {Emitter}
                         */
                        this.emitter = new _Emitter2.default();
                        /**
                         * Current drag state
                         * @property dragging
                         * @type {Boolean}
                         */
                        this.dragging = false;
                        /**
                         * Active plugins
                         * @property plugins
                         * @type {Plugin[]}
                         */
                        this.plugins = [];
                        /**
                         * Active sensors
                         * @property sensors
                         * @type {Sensor[]}
                         */
                        this.sensors = [];
                        this[onDragStart] = this[onDragStart].bind(this);
                        this[onDragMove] = this[onDragMove].bind(this);
                        this[onDragStop] = this[onDragStop].bind(this);
                        this[onDragPressure] = this[onDragPressure].bind(this);
                        document.addEventListener('drag:start', this[onDragStart], true);
                        document.addEventListener('drag:move', this[onDragMove], true);
                        document.addEventListener('drag:stop', this[onDragStop], true);
                        document.addEventListener('drag:pressure', this[onDragPressure], true);
                        var defaultPlugins = Object.values(Draggable.Plugins).map(function (Plugin) { return Plugin; });
                        var defaultSensors = [_Sensors.MouseSensor, _Sensors.TouchSensor];
                        this.addPlugin.apply(this, defaultPlugins.concat(this.options.plugins));
                        this.addSensor.apply(this, defaultSensors.concat(this.options.sensors));
                        var draggableInitializedEvent = new _DraggableEvent.DraggableInitializedEvent({
                            draggable: this
                        });
                        this.on('mirror:created', function (_a) {
                            var mirror = _a.mirror;
                            return _this.mirror = mirror;
                        });
                        this.on('mirror:destroy', function () { return _this.mirror = null; });
                        this.trigger(draggableInitializedEvent);
                    }
                    /**
                     * Destroys Draggable instance. This removes all internal event listeners and
                     * deactivates sensors and plugins
                     */
                    /**
                     * Default plugins draggable uses
                     * @static
                     * @property {Object} Plugins
                     * @property {Announcement} Plugins.Announcement
                     * @property {Focusable} Plugins.Focusable
                     * @property {Mirror} Plugins.Mirror
                     * @property {Scrollable} Plugins.Scrollable
                     * @type {Object}
                     */
                    Draggable.prototype.destroy = function () {
                        document.removeEventListener('drag:start', this[onDragStart], true);
                        document.removeEventListener('drag:move', this[onDragMove], true);
                        document.removeEventListener('drag:stop', this[onDragStop], true);
                        document.removeEventListener('drag:pressure', this[onDragPressure], true);
                        var draggableDestroyEvent = new _DraggableEvent.DraggableDestroyEvent({
                            draggable: this
                        });
                        this.trigger(draggableDestroyEvent);
                        this.removePlugin.apply(this, this.plugins.map(function (plugin) { return plugin.constructor; }));
                        this.removeSensor.apply(this, this.sensors.map(function (sensor) { return sensor.constructor; }));
                    };
                    /**
                     * Adds plugin to this draggable instance. This will end up calling the attach method of the plugin
                     * @param {...typeof Plugin} plugins - Plugins that you want attached to draggable
                     * @return {Draggable}
                     * @example draggable.addPlugin(CustomA11yPlugin, CustomMirrorPlugin)
                     */
                    Draggable.prototype.addPlugin = function () {
                        var _this = this;
                        var plugins = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            plugins[_i] = arguments[_i];
                        }
                        var activePlugins = plugins.map(function (Plugin) { return new Plugin(_this); });
                        activePlugins.forEach(function (plugin) { return plugin.attach(); });
                        this.plugins = this.plugins.concat(activePlugins);
                        return this;
                    };
                    /**
                     * Removes plugins that are already attached to this draggable instance. This will end up calling
                     * the detach method of the plugin
                     * @param {...typeof Plugin} plugins - Plugins that you want detached from draggable
                     * @return {Draggable}
                     * @example draggable.removePlugin(MirrorPlugin, CustomMirrorPlugin)
                     */
                    Draggable.prototype.removePlugin = function () {
                        var plugins = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            plugins[_i] = arguments[_i];
                        }
                        var removedPlugins = this.plugins.filter(function (plugin) { return plugins.includes(plugin.constructor); });
                        removedPlugins.forEach(function (plugin) { return plugin.detach(); });
                        this.plugins = this.plugins.filter(function (plugin) { return !plugins.includes(plugin.constructor); });
                        return this;
                    };
                    /**
                     * Adds sensors to this draggable instance. This will end up calling the attach method of the sensor
                     * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
                     * @return {Draggable}
                     * @example draggable.addSensor(ForceTouchSensor, CustomSensor)
                     */
                    Draggable.prototype.addSensor = function () {
                        var _this = this;
                        var sensors = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            sensors[_i] = arguments[_i];
                        }
                        var activeSensors = sensors.map(function (Sensor) { return new Sensor(_this.containers, _this.options); });
                        activeSensors.forEach(function (sensor) { return sensor.attach(); });
                        this.sensors = this.sensors.concat(activeSensors);
                        return this;
                    };
                    /**
                     * Removes sensors that are already attached to this draggable instance. This will end up calling
                     * the detach method of the sensor
                     * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
                     * @return {Draggable}
                     * @example draggable.removeSensor(TouchSensor, DragSensor)
                     */
                    Draggable.prototype.removeSensor = function () {
                        var sensors = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            sensors[_i] = arguments[_i];
                        }
                        var removedSensors = this.sensors.filter(function (sensor) { return sensors.includes(sensor.constructor); });
                        removedSensors.forEach(function (sensor) { return sensor.detach(); });
                        this.sensors = this.sensors.filter(function (sensor) { return !sensors.includes(sensor.constructor); });
                        return this;
                    };
                    /**
                     * Adds container to this draggable instance
                     * @param {...HTMLElement} containers - Containers you want to add to draggable
                     * @return {Draggable}
                     * @example draggable.addContainer(document.body)
                     */
                    Draggable.prototype.addContainer = function () {
                        var containers = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            containers[_i] = arguments[_i];
                        }
                        this.containers = this.containers.concat(containers);
                        this.sensors.forEach(function (sensor) { return sensor.addContainer.apply(sensor, containers); });
                        return this;
                    };
                    /**
                     * Removes container from this draggable instance
                     * @param {...HTMLElement} containers - Containers you want to remove from draggable
                     * @return {Draggable}
                     * @example draggable.removeContainer(document.body)
                     */
                    Draggable.prototype.removeContainer = function () {
                        var containers = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            containers[_i] = arguments[_i];
                        }
                        this.containers = this.containers.filter(function (container) { return !containers.includes(container); });
                        this.sensors.forEach(function (sensor) { return sensor.removeContainer.apply(sensor, containers); });
                        return this;
                    };
                    /**
                     * Adds listener for draggable events
                     * @param {String} type - Event name
                     * @param {...Function} callbacks - Event callbacks
                     * @return {Draggable}
                     * @example draggable.on('drag:start', (dragEvent) => dragEvent.cancel());
                     */
                    Draggable.prototype.on = function (type) {
                        var _a;
                        var callbacks = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            callbacks[_i - 1] = arguments[_i];
                        }
                        (_a = this.emitter).on.apply(_a, [type].concat(callbacks));
                        return this;
                    };
                    /**
                     * Removes listener from draggable
                     * @param {String} type - Event name
                     * @param {Function} callback - Event callback
                     * @return {Draggable}
                     * @example draggable.off('drag:start', handlerFunction);
                     */
                    Draggable.prototype.off = function (type, callback) {
                        this.emitter.off(type, callback);
                        return this;
                    };
                    /**
                     * Triggers draggable event
                     * @param {AbstractEvent} event - Event instance
                     * @return {Draggable}
                     * @example draggable.trigger(event);
                     */
                    Draggable.prototype.trigger = function (event) {
                        this.emitter.trigger(event);
                        return this;
                    };
                    /**
                     * Returns class name for class identifier
                     * @param {String} name - Name of class identifier
                     * @return {String|null}
                     */
                    Draggable.prototype.getClassNameFor = function (name) {
                        return this.options.classes[name];
                    };
                    /**
                     * Returns true if this draggable instance is currently dragging
                     * @return {Boolean}
                     */
                    Draggable.prototype.isDragging = function () {
                        return Boolean(this.dragging);
                    };
                    /**
                     * Returns all draggable elements
                     * @return {HTMLElement[]}
                     */
                    Draggable.prototype.getDraggableElements = function () {
                        var _this = this;
                        return this.containers.reduce(function (current, container) {
                            return current.concat(_this.getDraggableElementsForContainer(container));
                        }, []);
                    };
                    /**
                     * Returns draggable elements for a given container, excluding the mirror and
                     * original source element if present
                     * @param {HTMLElement} container
                     * @return {HTMLElement[]}
                     */
                    Draggable.prototype.getDraggableElementsForContainer = function (container) {
                        var _this = this;
                        var allDraggableElements = container.querySelectorAll(this.options.draggable);
                        return allDraggableElements.slice().filter(function (childElement) {
                            return childElement !== _this.originalSource && childElement !== _this.mirror;
                        });
                    };
                    /**
                     * Drag start handler
                     * @private
                     * @param {Event} event - DOM Drag event
                     */
                    Draggable.prototype[onDragStart] = function (event) {
                        var _this = this;
                        var sensorEvent = getSensorEvent(event);
                        var target = sensorEvent.target, container = sensorEvent.container;
                        if (!this.containers.includes(container)) {
                            return;
                        }
                        if (this.options.handle && target && !(0, _utils.closest)(target, this.options.handle)) {
                            sensorEvent.cancel();
                            return;
                        }
                        // Find draggable source element
                        this.originalSource = (0, _utils.closest)(target, this.options.draggable);
                        this.sourceContainer = container;
                        if (!this.originalSource) {
                            sensorEvent.cancel();
                            return;
                        }
                        if (this.lastPlacedSource && this.lastPlacedContainer) {
                            clearTimeout(this.placedTimeoutID);
                            this.lastPlacedSource.classList.remove(this.getClassNameFor('source:placed'));
                            this.lastPlacedContainer.classList.remove(this.getClassNameFor('container:placed'));
                        }
                        this.source = this.originalSource.cloneNode(true);
                        this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
                        this.originalSource.style.display = 'none';
                        var dragEvent = new _DragEvent.DragStartEvent({
                            source: this.source,
                            originalSource: this.originalSource,
                            sourceContainer: container,
                            sensorEvent: sensorEvent
                        });
                        this.trigger(dragEvent);
                        this.dragging = !dragEvent.canceled();
                        if (dragEvent.canceled()) {
                            this.source.parentNode.removeChild(this.source);
                            this.originalSource.style.display = null;
                            return;
                        }
                        this.originalSource.classList.add(this.getClassNameFor('source:original'));
                        this.source.classList.add(this.getClassNameFor('source:dragging'));
                        this.sourceContainer.classList.add(this.getClassNameFor('container:dragging'));
                        document.body.classList.add(this.getClassNameFor('body:dragging'));
                        applyUserSelect(document.body, 'none');
                        requestAnimationFrame(function () {
                            var oldSensorEvent = getSensorEvent(event);
                            var newSensorEvent = oldSensorEvent.clone({ target: _this.source });
                            _this[onDragMove](_extends({}, event, {
                                detail: newSensorEvent
                            }));
                        });
                    };
                    /**
                     * Drag move handler
                     * @private
                     * @param {Event} event - DOM Drag event
                     */
                    Draggable.prototype[onDragMove] = function (event) {
                        if (!this.dragging) {
                            return;
                        }
                        var sensorEvent = getSensorEvent(event);
                        var container = sensorEvent.container;
                        var target = sensorEvent.target;
                        var dragMoveEvent = new _DragEvent.DragMoveEvent({
                            source: this.source,
                            originalSource: this.originalSource,
                            sourceContainer: container,
                            sensorEvent: sensorEvent
                        });
                        this.trigger(dragMoveEvent);
                        if (dragMoveEvent.canceled()) {
                            sensorEvent.cancel();
                        }
                        target = (0, _utils.closest)(target, this.options.draggable);
                        var withinCorrectContainer = (0, _utils.closest)(sensorEvent.target, this.containers);
                        var overContainer = sensorEvent.overContainer || withinCorrectContainer;
                        var isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
                        var isLeavingDraggable = this.currentOver && target !== this.currentOver;
                        var isOverContainer = overContainer && this.currentOverContainer !== overContainer;
                        var isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;
                        if (isLeavingDraggable) {
                            var dragOutEvent = new _DragEvent.DragOutEvent({
                                source: this.source,
                                originalSource: this.originalSource,
                                sourceContainer: container,
                                sensorEvent: sensorEvent,
                                over: this.currentOver
                            });
                            this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));
                            this.currentOver = null;
                            this.trigger(dragOutEvent);
                        }
                        if (isLeavingContainer) {
                            var dragOutContainerEvent = new _DragEvent.DragOutContainerEvent({
                                source: this.source,
                                originalSource: this.originalSource,
                                sourceContainer: container,
                                sensorEvent: sensorEvent,
                                overContainer: this.currentOverContainer
                            });
                            this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));
                            this.currentOverContainer = null;
                            this.trigger(dragOutContainerEvent);
                        }
                        if (isOverContainer) {
                            overContainer.classList.add(this.getClassNameFor('container:over'));
                            var dragOverContainerEvent = new _DragEvent.DragOverContainerEvent({
                                source: this.source,
                                originalSource: this.originalSource,
                                sourceContainer: container,
                                sensorEvent: sensorEvent,
                                overContainer: overContainer
                            });
                            this.currentOverContainer = overContainer;
                            this.trigger(dragOverContainerEvent);
                        }
                        if (isOverDraggable) {
                            target.classList.add(this.getClassNameFor('draggable:over'));
                            var dragOverEvent = new _DragEvent.DragOverEvent({
                                source: this.source,
                                originalSource: this.originalSource,
                                sourceContainer: container,
                                sensorEvent: sensorEvent,
                                overContainer: overContainer,
                                over: target
                            });
                            this.currentOver = target;
                            this.trigger(dragOverEvent);
                        }
                    };
                    /**
                     * Drag stop handler
                     * @private
                     * @param {Event} event - DOM Drag event
                     */
                    Draggable.prototype[onDragStop] = function (event) {
                        var _this = this;
                        if (!this.dragging) {
                            return;
                        }
                        this.dragging = false;
                        var dragStopEvent = new _DragEvent.DragStopEvent({
                            source: this.source,
                            originalSource: this.originalSource,
                            sensorEvent: event.sensorEvent,
                            sourceContainer: this.sourceContainer
                        });
                        this.trigger(dragStopEvent);
                        this.source.parentNode.insertBefore(this.originalSource, this.source);
                        this.source.parentNode.removeChild(this.source);
                        this.originalSource.style.display = '';
                        this.source.classList.remove(this.getClassNameFor('source:dragging'));
                        this.originalSource.classList.remove(this.getClassNameFor('source:original'));
                        this.originalSource.classList.add(this.getClassNameFor('source:placed'));
                        this.sourceContainer.classList.add(this.getClassNameFor('container:placed'));
                        this.sourceContainer.classList.remove(this.getClassNameFor('container:dragging'));
                        document.body.classList.remove(this.getClassNameFor('body:dragging'));
                        applyUserSelect(document.body, '');
                        if (this.currentOver) {
                            this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));
                        }
                        if (this.currentOverContainer) {
                            this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));
                        }
                        this.lastPlacedSource = this.originalSource;
                        this.lastPlacedContainer = this.sourceContainer;
                        this.placedTimeoutID = setTimeout(function () {
                            if (_this.lastPlacedSource) {
                                _this.lastPlacedSource.classList.remove(_this.getClassNameFor('source:placed'));
                            }
                            if (_this.lastPlacedContainer) {
                                _this.lastPlacedContainer.classList.remove(_this.getClassNameFor('container:placed'));
                            }
                            _this.lastPlacedSource = null;
                            _this.lastPlacedContainer = null;
                        }, this.options.placedTimeout);
                        this.source = null;
                        this.originalSource = null;
                        this.currentOverContainer = null;
                        this.currentOver = null;
                        this.sourceContainer = null;
                    };
                    /**
                     * Drag pressure handler
                     * @private
                     * @param {Event} event - DOM Drag event
                     */
                    Draggable.prototype[onDragPressure] = function (event) {
                        if (!this.dragging) {
                            return;
                        }
                        var sensorEvent = getSensorEvent(event);
                        var source = this.source || (0, _utils.closest)(sensorEvent.originalEvent.target, this.options.draggable);
                        var dragPressureEvent = new _DragEvent.DragPressureEvent({
                            sensorEvent: sensorEvent,
                            source: source,
                            pressure: sensorEvent.pressure
                        });
                        this.trigger(dragPressureEvent);
                    };
                    return Draggable;
                }());
                exports.default = Draggable;
                Draggable.Plugins = { Announcement: _Plugins.Announcement, Focusable: _Plugins.Focusable, Mirror: _Plugins.Mirror, Scrollable: _Plugins.Scrollable };
                function getSensorEvent(event) {
                    return event.detail;
                }
                function applyUserSelect(element, value) {
                    element.style.webkitUserSelect = value;
                    element.style.mozUserSelect = value;
                    element.style.msUserSelect = value;
                    element.style.oUserSelect = value;
                    element.style.userSelect = value;
                }
                /***/ 
            }),
            /* 13 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _Sensor = __webpack_require__(1);
                var _Sensor2 = _interopRequireDefault(_Sensor);
                var _SensorEvent = __webpack_require__(0);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                var onMouseForceWillBegin = Symbol('onMouseForceWillBegin');
                var onMouseForceDown = Symbol('onMouseForceDown');
                var onMouseDown = Symbol('onMouseDown');
                var onMouseForceChange = Symbol('onMouseForceChange');
                var onMouseMove = Symbol('onMouseMove');
                var onMouseUp = Symbol('onMouseUp');
                var onMouseForceGlobalChange = Symbol('onMouseForceGlobalChange');
                /**
                 * This sensor picks up native force touch events and dictates drag operations
                 * @class ForceTouchSensor
                 * @module ForceTouchSensor
                 * @extends Sensor
                 */
                var ForceTouchSensor = /** @class */ (function (_super) {
                    __extends(ForceTouchSensor, _super);
                    /**
                     * ForceTouchSensor constructor.
                     * @constructs ForceTouchSensor
                     * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
                     * @param {Object} options - Options
                     */
                    function ForceTouchSensor(containers, options) {
                        if (containers === void 0) { containers = []; }
                        if (options === void 0) { options = {}; }
                        var _this = _super.call(this, containers, options) || this;
                        /**
                         * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed
                         * @property mightDrag
                         * @type {Boolean}
                         */
                        _this.mightDrag = false;
                        _this[onMouseForceWillBegin] = _this[onMouseForceWillBegin].bind(_this);
                        _this[onMouseForceDown] = _this[onMouseForceDown].bind(_this);
                        _this[onMouseDown] = _this[onMouseDown].bind(_this);
                        _this[onMouseForceChange] = _this[onMouseForceChange].bind(_this);
                        _this[onMouseMove] = _this[onMouseMove].bind(_this);
                        _this[onMouseUp] = _this[onMouseUp].bind(_this);
                        return _this;
                    }
                    /**
                     * Attaches sensors event listeners to the DOM
                     */
                    ForceTouchSensor.prototype.attach = function () {
                        for (var _i = 0, _a = this.containers; _i < _a.length; _i++) {
                            var container = _a[_i];
                            container.addEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
                            container.addEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
                            container.addEventListener('mousedown', this[onMouseDown], true);
                            container.addEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
                        }
                        document.addEventListener('mousemove', this[onMouseMove]);
                        document.addEventListener('mouseup', this[onMouseUp]);
                    };
                    /**
                     * Detaches sensors event listeners to the DOM
                     */
                    ForceTouchSensor.prototype.detach = function () {
                        for (var _i = 0, _a = this.containers; _i < _a.length; _i++) {
                            var container = _a[_i];
                            container.removeEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
                            container.removeEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
                            container.removeEventListener('mousedown', this[onMouseDown], true);
                            container.removeEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
                        }
                        document.removeEventListener('mousemove', this[onMouseMove]);
                        document.removeEventListener('mouseup', this[onMouseUp]);
                    };
                    /**
                     * Mouse force will begin handler
                     * @private
                     * @param {Event} event - Mouse force will begin event
                     */
                    ForceTouchSensor.prototype[onMouseForceWillBegin] = function (event) {
                        event.preventDefault();
                        this.mightDrag = true;
                    };
                    /**
                     * Mouse force down handler
                     * @private
                     * @param {Event} event - Mouse force down event
                     */
                    ForceTouchSensor.prototype[onMouseForceDown] = function (event) {
                        if (this.dragging) {
                            return;
                        }
                        var target = document.elementFromPoint(event.clientX, event.clientY);
                        var container = event.currentTarget;
                        var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                            clientX: event.clientX,
                            clientY: event.clientY,
                            target: target,
                            container: container,
                            originalEvent: event
                        });
                        this.trigger(container, dragStartEvent);
                        this.currentContainer = container;
                        this.dragging = !dragStartEvent.canceled();
                        this.mightDrag = false;
                    };
                    /**
                     * Mouse up handler
                     * @private
                     * @param {Event} event - Mouse up event
                     */
                    ForceTouchSensor.prototype[onMouseUp] = function (event) {
                        if (!this.dragging) {
                            return;
                        }
                        var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                            clientX: event.clientX,
                            clientY: event.clientY,
                            target: null,
                            container: this.currentContainer,
                            originalEvent: event
                        });
                        this.trigger(this.currentContainer, dragStopEvent);
                        this.currentContainer = null;
                        this.dragging = false;
                        this.mightDrag = false;
                    };
                    /**
                     * Mouse down handler
                     * @private
                     * @param {Event} event - Mouse down event
                     */
                    ForceTouchSensor.prototype[onMouseDown] = function (event) {
                        if (!this.mightDrag) {
                            return;
                        }
                        // Need workaround for real click
                        // Cancel potential drag events
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                        event.preventDefault();
                    };
                    /**
                     * Mouse move handler
                     * @private
                     * @param {Event} event - Mouse force will begin event
                     */
                    ForceTouchSensor.prototype[onMouseMove] = function (event) {
                        if (!this.dragging) {
                            return;
                        }
                        var target = document.elementFromPoint(event.clientX, event.clientY);
                        var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                            clientX: event.clientX,
                            clientY: event.clientY,
                            target: target,
                            container: this.currentContainer,
                            originalEvent: event
                        });
                        this.trigger(this.currentContainer, dragMoveEvent);
                    };
                    /**
                     * Mouse force change handler
                     * @private
                     * @param {Event} event - Mouse force change event
                     */
                    ForceTouchSensor.prototype[onMouseForceChange] = function (event) {
                        if (this.dragging) {
                            return;
                        }
                        var target = event.target;
                        var container = event.currentTarget;
                        var dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
                            pressure: event.webkitForce,
                            clientX: event.clientX,
                            clientY: event.clientY,
                            target: target,
                            container: container,
                            originalEvent: event
                        });
                        this.trigger(container, dragPressureEvent);
                    };
                    /**
                     * Mouse force global change handler
                     * @private
                     * @param {Event} event - Mouse force global change event
                     */
                    ForceTouchSensor.prototype[onMouseForceGlobalChange] = function (event) {
                        if (!this.dragging) {
                            return;
                        }
                        var target = event.target;
                        var dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
                            pressure: event.webkitForce,
                            clientX: event.clientX,
                            clientY: event.clientY,
                            target: target,
                            container: this.currentContainer,
                            originalEvent: event
                        });
                        this.trigger(this.currentContainer, dragPressureEvent);
                    };
                    return ForceTouchSensor;
                }(_Sensor2.default));
                exports.default = ForceTouchSensor;
                /***/ 
            }),
            /* 14 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _ForceTouchSensor = __webpack_require__(13);
                var _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _ForceTouchSensor2.default;
                /***/ 
            }),
            /* 15 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _utils = __webpack_require__(2);
                var _Sensor = __webpack_require__(1);
                var _Sensor2 = _interopRequireDefault(_Sensor);
                var _SensorEvent = __webpack_require__(0);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                var onMouseDown = Symbol('onMouseDown');
                var onMouseUp = Symbol('onMouseUp');
                var onDragStart = Symbol('onDragStart');
                var onDragOver = Symbol('onDragOver');
                var onDragEnd = Symbol('onDragEnd');
                var onDrop = Symbol('onDrop');
                var reset = Symbol('reset');
                /**
                 * This sensor picks up native browser drag events and dictates drag operations
                 * @class DragSensor
                 * @module DragSensor
                 * @extends Sensor
                 */
                var DragSensor = /** @class */ (function (_super) {
                    __extends(DragSensor, _super);
                    /**
                     * DragSensor constructor.
                     * @constructs DragSensor
                     * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
                     * @param {Object} options - Options
                     */
                    function DragSensor(containers, options) {
                        if (containers === void 0) { containers = []; }
                        if (options === void 0) { options = {}; }
                        var _this = _super.call(this, containers, options) || this;
                        /**
                         * Mouse down timer which will end up setting the draggable attribute, unless canceled
                         * @property mouseDownTimeout
                         * @type {Number}
                         */
                        _this.mouseDownTimeout = null;
                        /**
                         * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed
                         * @property draggableElement
                         * @type {HTMLElement}
                         */
                        _this.draggableElement = null;
                        /**
                         * Native draggable element could be links or images, their draggable state will be disabled during drag operation
                         * @property nativeDraggableElement
                         * @type {HTMLElement}
                         */
                        _this.nativeDraggableElement = null;
                        _this[onMouseDown] = _this[onMouseDown].bind(_this);
                        _this[onMouseUp] = _this[onMouseUp].bind(_this);
                        _this[onDragStart] = _this[onDragStart].bind(_this);
                        _this[onDragOver] = _this[onDragOver].bind(_this);
                        _this[onDragEnd] = _this[onDragEnd].bind(_this);
                        _this[onDrop] = _this[onDrop].bind(_this);
                        return _this;
                    }
                    /**
                     * Attaches sensors event listeners to the DOM
                     */
                    DragSensor.prototype.attach = function () {
                        document.addEventListener('mousedown', this[onMouseDown], true);
                    };
                    /**
                     * Detaches sensors event listeners to the DOM
                     */
                    DragSensor.prototype.detach = function () {
                        document.removeEventListener('mousedown', this[onMouseDown], true);
                    };
                    /**
                     * Drag start handler
                     * @private
                     * @param {Event} event - Drag start event
                     */
                    DragSensor.prototype[onDragStart] = function (event) {
                        var _this = this;
                        // Need for firefox. "text" key is needed for IE
                        event.dataTransfer.setData('text', '');
                        event.dataTransfer.effectAllowed = this.options.type;
                        var target = document.elementFromPoint(event.clientX, event.clientY);
                        this.currentContainer = (0, _utils.closest)(event.target, this.containers);
                        if (!this.currentContainer) {
                            return;
                        }
                        var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                            clientX: event.clientX,
                            clientY: event.clientY,
                            target: target,
                            container: this.currentContainer,
                            originalEvent: event
                        });
                        // Workaround
                        setTimeout(function () {
                            _this.trigger(_this.currentContainer, dragStartEvent);
                            if (dragStartEvent.canceled()) {
                                _this.dragging = false;
                            }
                            else {
                                _this.dragging = true;
                            }
                        }, 0);
                    };
                    /**
                     * Drag over handler
                     * @private
                     * @param {Event} event - Drag over event
                     */
                    DragSensor.prototype[onDragOver] = function (event) {
                        if (!this.dragging) {
                            return;
                        }
                        var target = document.elementFromPoint(event.clientX, event.clientY);
                        var container = this.currentContainer;
                        var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                            clientX: event.clientX,
                            clientY: event.clientY,
                            target: target,
                            container: container,
                            originalEvent: event
                        });
                        this.trigger(container, dragMoveEvent);
                        if (!dragMoveEvent.canceled()) {
                            event.preventDefault();
                            event.dataTransfer.dropEffect = this.options.type;
                        }
                    };
                    /**
                     * Drag end handler
                     * @private
                     * @param {Event} event - Drag end event
                     */
                    DragSensor.prototype[onDragEnd] = function (event) {
                        if (!this.dragging) {
                            return;
                        }
                        document.removeEventListener('mouseup', this[onMouseUp], true);
                        var target = document.elementFromPoint(event.clientX, event.clientY);
                        var container = this.currentContainer;
                        var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                            clientX: event.clientX,
                            clientY: event.clientY,
                            target: target,
                            container: container,
                            originalEvent: event
                        });
                        this.trigger(container, dragStopEvent);
                        this.dragging = false;
                        this[reset]();
                    };
                    /**
                     * Drop handler
                     * @private
                     * @param {Event} event - Drop event
                     */
                    DragSensor.prototype[onDrop] = function (event) {
                        // eslint-disable-line class-methods-use-this
                        event.preventDefault();
                    };
                    /**
                     * Mouse down handler
                     * @private
                     * @param {Event} event - Mouse down event
                     */
                    DragSensor.prototype[onMouseDown] = function (event) {
                        var _this = this;
                        // Firefox bug for inputs within draggables https://bugzilla.mozilla.org/show_bug.cgi?id=739071
                        if (event.target && (event.target.form || event.target.contenteditable)) {
                            return;
                        }
                        var nativeDraggableElement = (0, _utils.closest)(event.target, function (element) { return element.draggable; });
                        if (nativeDraggableElement) {
                            nativeDraggableElement.draggable = false;
                            this.nativeDraggableElement = nativeDraggableElement;
                        }
                        document.addEventListener('mouseup', this[onMouseUp], true);
                        document.addEventListener('dragstart', this[onDragStart], false);
                        document.addEventListener('dragover', this[onDragOver], false);
                        document.addEventListener('dragend', this[onDragEnd], false);
                        document.addEventListener('drop', this[onDrop], false);
                        var target = (0, _utils.closest)(event.target, this.options.draggable);
                        if (!target) {
                            return;
                        }
                        this.mouseDownTimeout = setTimeout(function () {
                            target.draggable = true;
                            _this.draggableElement = target;
                        }, this.options.delay);
                    };
                    /**
                     * Mouse up handler
                     * @private
                     * @param {Event} event - Mouse up event
                     */
                    DragSensor.prototype[onMouseUp] = function () {
                        this[reset]();
                    };
                    /**
                     * Mouse up handler
                     * @private
                     * @param {Event} event - Mouse up event
                     */
                    DragSensor.prototype[reset] = function () {
                        clearTimeout(this.mouseDownTimeout);
                        document.removeEventListener('mouseup', this[onMouseUp], true);
                        document.removeEventListener('dragstart', this[onDragStart], false);
                        document.removeEventListener('dragover', this[onDragOver], false);
                        document.removeEventListener('dragend', this[onDragEnd], false);
                        document.removeEventListener('drop', this[onDrop], false);
                        if (this.nativeDraggableElement) {
                            this.nativeDraggableElement.draggable = true;
                            this.nativeDraggableElement = null;
                        }
                        if (this.draggableElement) {
                            this.draggableElement.draggable = false;
                            this.draggableElement = null;
                        }
                    };
                    return DragSensor;
                }(_Sensor2.default));
                exports.default = DragSensor;
                /***/ 
            }),
            /* 16 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _DragSensor = __webpack_require__(15);
                var _DragSensor2 = _interopRequireDefault(_DragSensor);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _DragSensor2.default;
                /***/ 
            }),
            /* 17 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _utils = __webpack_require__(2);
                var _Sensor = __webpack_require__(1);
                var _Sensor2 = _interopRequireDefault(_Sensor);
                var _SensorEvent = __webpack_require__(0);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                var onTouchStart = Symbol('onTouchStart');
                var onTouchHold = Symbol('onTouchHold');
                var onTouchEnd = Symbol('onTouchEnd');
                var onTouchMove = Symbol('onTouchMove');
                /**
                 * Prevents scrolling when set to true
                 * @var {Boolean} preventScrolling
                 */
                var preventScrolling = false;
                // WebKit requires cancelable `touchmove` events to be added as early as possible
                window.addEventListener('touchmove', function (event) {
                    if (!preventScrolling) {
                        return;
                    }
                    // Prevent scrolling
                    event.preventDefault();
                }, { passive: false });
                /**
                 * This sensor picks up native browser touch events and dictates drag operations
                 * @class TouchSensor
                 * @module TouchSensor
                 * @extends Sensor
                 */
                var TouchSensor = /** @class */ (function (_super) {
                    __extends(TouchSensor, _super);
                    /**
                     * TouchSensor constructor.
                     * @constructs TouchSensor
                     * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
                     * @param {Object} options - Options
                     */
                    function TouchSensor(containers, options) {
                        if (containers === void 0) { containers = []; }
                        if (options === void 0) { options = {}; }
                        var _this = _super.call(this, containers, options) || this;
                        /**
                         * Closest scrollable container so accidental scroll can cancel long touch
                         * @property currentScrollableParent
                         * @type {HTMLElement}
                         */
                        _this.currentScrollableParent = null;
                        /**
                         * TimeoutID for long touch
                         * @property tapTimeout
                         * @type {Number}
                         */
                        _this.tapTimeout = null;
                        /**
                         * touchMoved indicates if touch has moved during tapTimeout
                         * @property touchMoved
                         * @type {Boolean}
                         */
                        _this.touchMoved = false;
                        _this[onTouchStart] = _this[onTouchStart].bind(_this);
                        _this[onTouchHold] = _this[onTouchHold].bind(_this);
                        _this[onTouchEnd] = _this[onTouchEnd].bind(_this);
                        _this[onTouchMove] = _this[onTouchMove].bind(_this);
                        return _this;
                    }
                    /**
                     * Attaches sensors event listeners to the DOM
                     */
                    TouchSensor.prototype.attach = function () {
                        document.addEventListener('touchstart', this[onTouchStart]);
                    };
                    /**
                     * Detaches sensors event listeners to the DOM
                     */
                    TouchSensor.prototype.detach = function () {
                        document.removeEventListener('touchstart', this[onTouchStart]);
                    };
                    /**
                     * Touch start handler
                     * @private
                     * @param {Event} event - Touch start event
                     */
                    TouchSensor.prototype[onTouchStart] = function (event) {
                        var container = (0, _utils.closest)(event.target, this.containers);
                        if (!container) {
                            return;
                        }
                        document.addEventListener('touchmove', this[onTouchMove]);
                        document.addEventListener('touchend', this[onTouchEnd]);
                        document.addEventListener('touchcancel', this[onTouchEnd]);
                        container.addEventListener('contextmenu', onContextMenu);
                        this.currentContainer = container;
                        this.tapTimeout = setTimeout(this[onTouchHold](event, container), this.options.delay);
                    };
                    /**
                     * Touch hold handler
                     * @private
                     * @param {Event} event - Touch start event
                     * @param {HTMLElement} container - Container element
                     */
                    TouchSensor.prototype[onTouchHold] = function (event, container) {
                        var _this = this;
                        return function () {
                            if (_this.touchMoved) {
                                return;
                            }
                            var touch = event.touches[0] || event.changedTouches[0];
                            var target = event.target;
                            var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                                clientX: touch.pageX,
                                clientY: touch.pageY,
                                target: target,
                                container: container,
                                originalEvent: event
                            });
                            _this.trigger(container, dragStartEvent);
                            _this.dragging = !dragStartEvent.canceled();
                            preventScrolling = _this.dragging;
                        };
                    };
                    /**
                     * Touch move handler
                     * @private
                     * @param {Event} event - Touch move event
                     */
                    TouchSensor.prototype[onTouchMove] = function (event) {
                        this.touchMoved = true;
                        if (!this.dragging) {
                            return;
                        }
                        var touch = event.touches[0] || event.changedTouches[0];
                        var target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);
                        var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                            clientX: touch.pageX,
                            clientY: touch.pageY,
                            target: target,
                            container: this.currentContainer,
                            originalEvent: event
                        });
                        this.trigger(this.currentContainer, dragMoveEvent);
                    };
                    /**
                     * Touch end handler
                     * @private
                     * @param {Event} event - Touch end event
                     */
                    TouchSensor.prototype[onTouchEnd] = function (event) {
                        this.touchMoved = false;
                        preventScrolling = false;
                        document.removeEventListener('touchend', this[onTouchEnd]);
                        document.removeEventListener('touchcancel', this[onTouchEnd]);
                        document.removeEventListener('touchmove', this[onTouchMove]);
                        if (this.currentContainer) {
                            this.currentContainer.removeEventListener('contextmenu', onContextMenu);
                        }
                        clearTimeout(this.tapTimeout);
                        if (!this.dragging) {
                            return;
                        }
                        var touch = event.touches[0] || event.changedTouches[0];
                        var target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);
                        event.preventDefault();
                        var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                            clientX: touch.pageX,
                            clientY: touch.pageY,
                            target: target,
                            container: this.currentContainer,
                            originalEvent: event
                        });
                        this.trigger(this.currentContainer, dragStopEvent);
                        this.currentContainer = null;
                        this.dragging = false;
                    };
                    return TouchSensor;
                }(_Sensor2.default));
                exports.default = TouchSensor;
                function onContextMenu(event) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                /***/ 
            }),
            /* 18 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _TouchSensor = __webpack_require__(17);
                var _TouchSensor2 = _interopRequireDefault(_TouchSensor);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _TouchSensor2.default;
                /***/ 
            }),
            /* 19 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.DragPressureSensorEvent = exports.DragStopSensorEvent = exports.DragMoveSensorEvent = exports.DragStartSensorEvent = exports.SensorEvent = undefined;
                var _AbstractEvent = __webpack_require__(3);
                var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                /**
                 * Base sensor event
                 * @class SensorEvent
                 * @module SensorEvent
                 * @extends AbstractEvent
                 */
                var SensorEvent = /** @class */ (function (_super) {
                    __extends(SensorEvent, _super);
                    function SensorEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(SensorEvent.prototype, "originalEvent", {
                        /**
                         * Original browser event that triggered a sensor
                         * @property originalEvent
                         * @type {Event}
                         * @readonly
                         */
                        get: function () {
                            return this.data.originalEvent;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SensorEvent.prototype, "clientX", {
                        /**
                         * Normalized clientX for both touch and mouse events
                         * @property clientX
                         * @type {Number}
                         * @readonly
                         */
                        get: function () {
                            return this.data.clientX;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SensorEvent.prototype, "clientY", {
                        /**
                         * Normalized clientY for both touch and mouse events
                         * @property clientY
                         * @type {Number}
                         * @readonly
                         */
                        get: function () {
                            return this.data.clientY;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SensorEvent.prototype, "target", {
                        /**
                         * Normalized target for both touch and mouse events
                         * Returns the element that is behind cursor or touch pointer
                         * @property target
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.target;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SensorEvent.prototype, "container", {
                        /**
                         * Container that initiated the sensor
                         * @property container
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.container;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SensorEvent.prototype, "pressure", {
                        /**
                         * Trackpad pressure
                         * @property pressure
                         * @type {Number}
                         * @readonly
                         */
                        get: function () {
                            return this.data.pressure;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return SensorEvent;
                }(_AbstractEvent2.default));
                exports.SensorEvent = SensorEvent; /**
                                                    * Drag start sensor event
                                                    * @class DragStartSensorEvent
                                                    * @module DragStartSensorEvent
                                                    * @extends SensorEvent
                                                    */
                var DragStartSensorEvent = /** @class */ (function (_super) {
                    __extends(DragStartSensorEvent, _super);
                    function DragStartSensorEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DragStartSensorEvent;
                }(SensorEvent));
                exports.DragStartSensorEvent = DragStartSensorEvent; /**
                                                                      * Drag move sensor event
                                                                      * @class DragMoveSensorEvent
                                                                      * @module DragMoveSensorEvent
                                                                      * @extends SensorEvent
                                                                      */
                DragStartSensorEvent.type = 'drag:start';
                var DragMoveSensorEvent = /** @class */ (function (_super) {
                    __extends(DragMoveSensorEvent, _super);
                    function DragMoveSensorEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DragMoveSensorEvent;
                }(SensorEvent));
                exports.DragMoveSensorEvent = DragMoveSensorEvent; /**
                                                                    * Drag stop sensor event
                                                                    * @class DragStopSensorEvent
                                                                    * @module DragStopSensorEvent
                                                                    * @extends SensorEvent
                                                                    */
                DragMoveSensorEvent.type = 'drag:move';
                var DragStopSensorEvent = /** @class */ (function (_super) {
                    __extends(DragStopSensorEvent, _super);
                    function DragStopSensorEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DragStopSensorEvent;
                }(SensorEvent));
                exports.DragStopSensorEvent = DragStopSensorEvent; /**
                                                                    * Drag pressure sensor event
                                                                    * @class DragPressureSensorEvent
                                                                    * @module DragPressureSensorEvent
                                                                    * @extends SensorEvent
                                                                    */
                DragStopSensorEvent.type = 'drag:stop';
                var DragPressureSensorEvent = /** @class */ (function (_super) {
                    __extends(DragPressureSensorEvent, _super);
                    function DragPressureSensorEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DragPressureSensorEvent;
                }(SensorEvent));
                exports.DragPressureSensorEvent = DragPressureSensorEvent;
                DragPressureSensorEvent.type = 'drag:pressure';
                /***/ 
            }),
            /* 20 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _utils = __webpack_require__(2);
                var _Sensor = __webpack_require__(1);
                var _Sensor2 = _interopRequireDefault(_Sensor);
                var _SensorEvent = __webpack_require__(0);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                var onContextMenuWhileDragging = Symbol('onContextMenuWhileDragging');
                var onMouseDown = Symbol('onMouseDown');
                var onMouseMove = Symbol('onMouseMove');
                var onMouseUp = Symbol('onMouseUp');
                /**
                 * This sensor picks up native browser mouse events and dictates drag operations
                 * @class MouseSensor
                 * @module MouseSensor
                 * @extends Sensor
                 */
                var MouseSensor = /** @class */ (function (_super) {
                    __extends(MouseSensor, _super);
                    /**
                     * MouseSensor constructor.
                     * @constructs MouseSensor
                     * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
                     * @param {Object} options - Options
                     */
                    function MouseSensor(containers, options) {
                        if (containers === void 0) { containers = []; }
                        if (options === void 0) { options = {}; }
                        var _this = _super.call(this, containers, options) || this;
                        /**
                         * Indicates if mouse button is still down
                         * @property mouseDown
                         * @type {Boolean}
                         */
                        _this.mouseDown = false;
                        /**
                         * Mouse down timer which will end up triggering the drag start operation
                         * @property mouseDownTimeout
                         * @type {Number}
                         */
                        _this.mouseDownTimeout = null;
                        /**
                         * Indicates if context menu has been opened during drag operation
                         * @property openedContextMenu
                         * @type {Boolean}
                         */
                        _this.openedContextMenu = false;
                        _this[onContextMenuWhileDragging] = _this[onContextMenuWhileDragging].bind(_this);
                        _this[onMouseDown] = _this[onMouseDown].bind(_this);
                        _this[onMouseMove] = _this[onMouseMove].bind(_this);
                        _this[onMouseUp] = _this[onMouseUp].bind(_this);
                        return _this;
                    }
                    /**
                     * Attaches sensors event listeners to the DOM
                     */
                    MouseSensor.prototype.attach = function () {
                        document.addEventListener('mousedown', this[onMouseDown], true);
                    };
                    /**
                     * Detaches sensors event listeners to the DOM
                     */
                    MouseSensor.prototype.detach = function () {
                        document.removeEventListener('mousedown', this[onMouseDown], true);
                    };
                    /**
                     * Mouse down handler
                     * @private
                     * @param {Event} event - Mouse down event
                     */
                    MouseSensor.prototype[onMouseDown] = function (event) {
                        var _this = this;
                        if (event.button !== 0 || event.ctrlKey || event.metaKey) {
                            return;
                        }
                        document.addEventListener('mouseup', this[onMouseUp]);
                        var target = document.elementFromPoint(event.clientX, event.clientY);
                        var container = (0, _utils.closest)(target, this.containers);
                        if (!container) {
                            return;
                        }
                        document.addEventListener('dragstart', preventNativeDragStart);
                        this.mouseDown = true;
                        clearTimeout(this.mouseDownTimeout);
                        this.mouseDownTimeout = setTimeout(function () {
                            if (!_this.mouseDown) {
                                return;
                            }
                            var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                                clientX: event.clientX,
                                clientY: event.clientY,
                                target: target,
                                container: container,
                                originalEvent: event
                            });
                            _this.trigger(container, dragStartEvent);
                            _this.currentContainer = container;
                            _this.dragging = !dragStartEvent.canceled();
                            if (_this.dragging) {
                                document.addEventListener('contextmenu', _this[onContextMenuWhileDragging]);
                                document.addEventListener('mousemove', _this[onMouseMove]);
                            }
                        }, this.options.delay);
                    };
                    /**
                     * Mouse move handler
                     * @private
                     * @param {Event} event - Mouse move event
                     */
                    MouseSensor.prototype[onMouseMove] = function (event) {
                        if (!this.dragging) {
                            return;
                        }
                        var target = document.elementFromPoint(event.clientX, event.clientY);
                        var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                            clientX: event.clientX,
                            clientY: event.clientY,
                            target: target,
                            container: this.currentContainer,
                            originalEvent: event
                        });
                        this.trigger(this.currentContainer, dragMoveEvent);
                    };
                    /**
                     * Mouse up handler
                     * @private
                     * @param {Event} event - Mouse up event
                     */
                    MouseSensor.prototype[onMouseUp] = function (event) {
                        this.mouseDown = Boolean(this.openedContextMenu);
                        if (this.openedContextMenu) {
                            this.openedContextMenu = false;
                            return;
                        }
                        document.removeEventListener('mouseup', this[onMouseUp]);
                        document.removeEventListener('dragstart', preventNativeDragStart);
                        if (!this.dragging) {
                            return;
                        }
                        var target = document.elementFromPoint(event.clientX, event.clientY);
                        var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                            clientX: event.clientX,
                            clientY: event.clientY,
                            target: target,
                            container: this.currentContainer,
                            originalEvent: event
                        });
                        this.trigger(this.currentContainer, dragStopEvent);
                        document.removeEventListener('contextmenu', this[onContextMenuWhileDragging]);
                        document.removeEventListener('mousemove', this[onMouseMove]);
                        this.currentContainer = null;
                        this.dragging = false;
                    };
                    /**
                     * Context menu handler
                     * @private
                     * @param {Event} event - Context menu event
                     */
                    MouseSensor.prototype[onContextMenuWhileDragging] = function (event) {
                        event.preventDefault();
                        this.openedContextMenu = true;
                    };
                    return MouseSensor;
                }(_Sensor2.default));
                exports.default = MouseSensor;
                function preventNativeDragStart(event) {
                    event.preventDefault();
                }
                /***/ 
            }),
            /* 21 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _MouseSensor = __webpack_require__(20);
                var _MouseSensor2 = _interopRequireDefault(_MouseSensor);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _MouseSensor2.default;
                /***/ 
            }),
            /* 22 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                } return target; };
                /**
                 * Base sensor class. Extend from this class to create a new or custom sensor
                 * @class Sensor
                 * @module Sensor
                 */
                var Sensor = /** @class */ (function () {
                    /**
                     * Sensor constructor.
                     * @constructs Sensor
                     * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
                     * @param {Object} options - Options
                     */
                    function Sensor(containers, options) {
                        if (containers === void 0) { containers = []; }
                        if (options === void 0) { options = {}; }
                        /**
                         * Current containers
                         * @property containers
                         * @type {HTMLElement[]}
                         */
                        this.containers = containers.slice();
                        /**
                         * Current options
                         * @property options
                         * @type {Object}
                         */
                        this.options = _extends({}, options);
                        /**
                         * Current drag state
                         * @property dragging
                         * @type {Boolean}
                         */
                        this.dragging = false;
                        /**
                         * Current container
                         * @property currentContainer
                         * @type {HTMLElement}
                         */
                        this.currentContainer = null;
                    }
                    /**
                     * Attaches sensors event listeners to the DOM
                     * @return {Sensor}
                     */
                    Sensor.prototype.attach = function () {
                        return this;
                    };
                    /**
                     * Detaches sensors event listeners to the DOM
                     * @return {Sensor}
                     */
                    Sensor.prototype.detach = function () {
                        return this;
                    };
                    /**
                     * Adds container to this sensor instance
                     * @param {...HTMLElement} containers - Containers you want to add to this sensor
                     * @example draggable.addContainer(document.body)
                     */
                    Sensor.prototype.addContainer = function () {
                        var containers = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            containers[_i] = arguments[_i];
                        }
                        this.containers = this.containers.concat(containers);
                    };
                    /**
                     * Removes container from this sensor instance
                     * @param {...HTMLElement} containers - Containers you want to remove from this sensor
                     * @example draggable.removeContainer(document.body)
                     */
                    Sensor.prototype.removeContainer = function () {
                        var containers = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            containers[_i] = arguments[_i];
                        }
                        this.containers = this.containers.filter(function (container) { return !containers.includes(container); });
                    };
                    /**
                     * Triggers event on target element
                     * @param {HTMLElement} element - Element to trigger event on
                     * @param {SensorEvent} sensorEvent - Sensor event to trigger
                     */
                    Sensor.prototype.trigger = function (element, sensorEvent) {
                        var event = document.createEvent('Event');
                        event.detail = sensorEvent;
                        event.initEvent(sensorEvent.type, true, true);
                        element.dispatchEvent(event);
                        this.lastEvent = sensorEvent;
                        return sensorEvent;
                    };
                    return Sensor;
                }());
                exports.default = Sensor;
                /***/ 
            }),
            /* 23 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = requestNextAnimationFrame;
                function requestNextAnimationFrame(callback) {
                    return requestAnimationFrame(function () {
                        requestAnimationFrame(callback);
                    });
                }
                /***/ 
            }),
            /* 24 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _requestNextAnimationFrame = __webpack_require__(23);
                var _requestNextAnimationFrame2 = _interopRequireDefault(_requestNextAnimationFrame);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _requestNextAnimationFrame2.default;
                /***/ 
            }),
            /* 25 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = closest;
                var matchFunction = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
                /**
                 * Get the closest parent element of a given element that matches the given
                 * selector string or matching function
                 *
                 * @param {Element} element The child element to find a parent of
                 * @param {String|Function} selector The string or function to use to match
                 *     the parent element
                 * @return {Element|null}
                 */
                function closest(element, value) {
                    if (!element) {
                        return null;
                    }
                    var selector = value;
                    var callback = value;
                    var nodeList = value;
                    var singleElement = value;
                    var isSelector = Boolean(typeof value === 'string');
                    var isFunction = Boolean(typeof value === 'function');
                    var isNodeList = Boolean(value instanceof NodeList || value instanceof Array);
                    var isElement = Boolean(value instanceof HTMLElement);
                    function conditionFn(currentElement) {
                        if (!currentElement) {
                            return currentElement;
                        }
                        else if (isSelector) {
                            return matchFunction.call(currentElement, selector);
                        }
                        else if (isNodeList) {
                            return nodeList.slice().includes(currentElement);
                        }
                        else if (isElement) {
                            return singleElement === currentElement;
                        }
                        else if (isFunction) {
                            return callback(currentElement);
                        }
                        else {
                            return null;
                        }
                    }
                    var current = element;
                    do {
                        current = current.correspondingUseElement || current.correspondingElement || current;
                        if (conditionFn(current)) {
                            return current;
                        }
                        current = current.parentNode;
                    } while (current && current !== document.body && current !== document);
                    return null;
                }
                /***/ 
            }),
            /* 26 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _closest = __webpack_require__(25);
                var _closest2 = _interopRequireDefault(_closest);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _closest2.default;
                /***/ 
            }),
            /* 27 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultOptions = exports.scroll = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;
                var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                } return target; };
                var _AbstractPlugin = __webpack_require__(4);
                var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
                var _utils = __webpack_require__(2);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                var onDragStart = exports.onDragStart = Symbol('onDragStart');
                var onDragMove = exports.onDragMove = Symbol('onDragMove');
                var onDragStop = exports.onDragStop = Symbol('onDragStop');
                var scroll = exports.scroll = Symbol('scroll');
                /**
                 * Scrollable default options
                 * @property {Object} defaultOptions
                 * @property {Number} defaultOptions.speed
                 * @property {Number} defaultOptions.sensitivity
                 * @property {HTMLElement[]} defaultOptions.scrollableElements
                 * @type {Object}
                 */
                var defaultOptions = exports.defaultOptions = {
                    speed: 6,
                    sensitivity: 50,
                    scrollableElements: []
                };
                /**
                 * Scrollable plugin which scrolls the closest scrollable parent
                 * @class Scrollable
                 * @module Scrollable
                 * @extends AbstractPlugin
                 */
                var Scrollable = /** @class */ (function (_super) {
                    __extends(Scrollable, _super);
                    /**
                     * Scrollable constructor.
                     * @constructs Scrollable
                     * @param {Draggable} draggable - Draggable instance
                     */
                    function Scrollable(draggable) {
                        var _this = _super.call(this, draggable) || this;
                        /**
                         * Scrollable options
                         * @property {Object} options
                         * @property {Number} options.speed
                         * @property {Number} options.sensitivity
                         * @property {HTMLElement[]} options.scrollableElements
                         * @type {Object}
                         */
                        _this.options = _extends({}, defaultOptions, _this.getOptions());
                        /**
                         * Keeps current mouse position
                         * @property {Object} currentMousePosition
                         * @property {Number} currentMousePosition.clientX
                         * @property {Number} currentMousePosition.clientY
                         * @type {Object|null}
                         */
                        _this.currentMousePosition = null;
                        /**
                         * Scroll animation frame
                         * @property scrollAnimationFrame
                         * @type {Number|null}
                         */
                        _this.scrollAnimationFrame = null;
                        /**
                         * Closest scrollable element
                         * @property scrollableElement
                         * @type {HTMLElement|null}
                         */
                        _this.scrollableElement = null;
                        /**
                         * Animation frame looking for the closest scrollable element
                         * @property findScrollableElementFrame
                         * @type {Number|null}
                         */
                        _this.findScrollableElementFrame = null;
                        _this[onDragStart] = _this[onDragStart].bind(_this);
                        _this[onDragMove] = _this[onDragMove].bind(_this);
                        _this[onDragStop] = _this[onDragStop].bind(_this);
                        _this[scroll] = _this[scroll].bind(_this);
                        return _this;
                    }
                    /**
                     * Attaches plugins event listeners
                     */
                    Scrollable.prototype.attach = function () {
                        this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
                    };
                    /**
                     * Detaches plugins event listeners
                     */
                    Scrollable.prototype.detach = function () {
                        this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
                    };
                    /**
                     * Returns options passed through draggable
                     * @return {Object}
                     */
                    Scrollable.prototype.getOptions = function () {
                        return this.draggable.options.scrollable || {};
                    };
                    /**
                     * Returns closest scrollable elements by element
                     * @param {HTMLElement} target
                     * @return {HTMLElement}
                     */
                    Scrollable.prototype.getScrollableElement = function (target) {
                        if (this.hasDefinedScrollableElements()) {
                            return (0, _utils.closest)(target, this.options.scrollableElements) || document.documentElement;
                        }
                        else {
                            return closestScrollableElement(target);
                        }
                    };
                    /**
                     * Returns true if at least one scrollable element have been defined via options
                     * @param {HTMLElement} target
                     * @return {Boolean}
                     */
                    Scrollable.prototype.hasDefinedScrollableElements = function () {
                        return Boolean(this.options.scrollableElements.length !== 0);
                    };
                    /**
                     * Drag start handler. Finds closest scrollable parent in separate frame
                     * @param {DragStartEvent} dragEvent
                     * @private
                     */
                    Scrollable.prototype[onDragStart] = function (dragEvent) {
                        var _this = this;
                        this.findScrollableElementFrame = requestAnimationFrame(function () {
                            _this.scrollableElement = _this.getScrollableElement(dragEvent.source);
                        });
                    };
                    /**
                     * Drag move handler. Remembers mouse position and initiates scrolling
                     * @param {DragMoveEvent} dragEvent
                     * @private
                     */
                    Scrollable.prototype[onDragMove] = function (dragEvent) {
                        var _this = this;
                        this.findScrollableElementFrame = requestAnimationFrame(function () {
                            _this.scrollableElement = _this.getScrollableElement(dragEvent.sensorEvent.target);
                        });
                        if (!this.scrollableElement) {
                            return;
                        }
                        var sensorEvent = dragEvent.sensorEvent;
                        var scrollOffset = { x: 0, y: 0 };
                        if ('ontouchstart' in window) {
                            scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                            scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
                        }
                        this.currentMousePosition = {
                            clientX: sensorEvent.clientX - scrollOffset.x,
                            clientY: sensorEvent.clientY - scrollOffset.y
                        };
                        this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
                    };
                    /**
                     * Drag stop handler. Cancels scroll animations and resets state
                     * @private
                     */
                    Scrollable.prototype[onDragStop] = function () {
                        cancelAnimationFrame(this.scrollAnimationFrame);
                        cancelAnimationFrame(this.findScrollableElementFrame);
                        this.scrollableElement = null;
                        this.scrollAnimationFrame = null;
                        this.findScrollableElementFrame = null;
                        this.currentMousePosition = null;
                    };
                    /**
                     * Scroll function that does the heavylifting
                     * @private
                     */
                    Scrollable.prototype[scroll] = function () {
                        if (!this.scrollableElement || !this.currentMousePosition) {
                            return;
                        }
                        cancelAnimationFrame(this.scrollAnimationFrame);
                        var _a = this.options, speed = _a.speed, sensitivity = _a.sensitivity;
                        var rect = this.scrollableElement.getBoundingClientRect();
                        var bottomCutOff = rect.bottom > window.innerHeight;
                        var topCutOff = rect.top < 0;
                        var cutOff = topCutOff || bottomCutOff;
                        var documentScrollingElement = getDocumentScrollingElement();
                        var scrollableElement = this.scrollableElement;
                        var clientX = this.currentMousePosition.clientX;
                        var clientY = this.currentMousePosition.clientY;
                        if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
                            var offsetHeight = scrollableElement.offsetHeight, offsetWidth = scrollableElement.offsetWidth;
                            if (rect.top + offsetHeight - clientY < sensitivity) {
                                scrollableElement.scrollTop += speed;
                            }
                            else if (clientY - rect.top < sensitivity) {
                                scrollableElement.scrollTop -= speed;
                            }
                            if (rect.left + offsetWidth - clientX < sensitivity) {
                                scrollableElement.scrollLeft += speed;
                            }
                            else if (clientX - rect.left < sensitivity) {
                                scrollableElement.scrollLeft -= speed;
                            }
                        }
                        else {
                            var innerHeight = window.innerHeight, innerWidth = window.innerWidth;
                            if (clientY < sensitivity) {
                                documentScrollingElement.scrollTop -= speed;
                            }
                            else if (innerHeight - clientY < sensitivity) {
                                documentScrollingElement.scrollTop += speed;
                            }
                            if (clientX < sensitivity) {
                                documentScrollingElement.scrollLeft -= speed;
                            }
                            else if (innerWidth - clientX < sensitivity) {
                                documentScrollingElement.scrollLeft += speed;
                            }
                        }
                        this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
                    };
                    return Scrollable;
                }(_AbstractPlugin2.default));
                exports.default = Scrollable; /**
                                               * Returns true if the passed element has overflow
                                               * @param {HTMLElement} element
                                               * @return {Boolean}
                                               * @private
                                               */
                function hasOverflow(element) {
                    var overflowRegex = /(auto|scroll)/;
                    var computedStyles = getComputedStyle(element, null);
                    var overflow = computedStyles.getPropertyValue('overflow') + computedStyles.getPropertyValue('overflow-y') + computedStyles.getPropertyValue('overflow-x');
                    return overflowRegex.test(overflow);
                }
                /**
                 * Returns true if the passed element is statically positioned
                 * @param {HTMLElement} element
                 * @return {Boolean}
                 * @private
                 */
                function isStaticallyPositioned(element) {
                    var position = getComputedStyle(element).getPropertyValue('position');
                    return position === 'static';
                }
                /**
                 * Finds closest scrollable element
                 * @param {HTMLElement} element
                 * @return {HTMLElement}
                 * @private
                 */
                function closestScrollableElement(element) {
                    if (!element) {
                        return getDocumentScrollingElement();
                    }
                    var position = getComputedStyle(element).getPropertyValue('position');
                    var excludeStaticParents = position === 'absolute';
                    var scrollableElement = (0, _utils.closest)(element, function (parent) {
                        if (excludeStaticParents && isStaticallyPositioned(parent)) {
                            return false;
                        }
                        return hasOverflow(parent);
                    });
                    if (position === 'fixed' || !scrollableElement) {
                        return getDocumentScrollingElement();
                    }
                    else {
                        return scrollableElement;
                    }
                }
                /**
                 * Returns element that scrolls document
                 * @return {HTMLElement}
                 * @private
                 */
                function getDocumentScrollingElement() {
                    return document.scrollingElement || document.documentElement;
                }
                /***/ 
            }),
            /* 28 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultOptions = undefined;
                var _Scrollable = __webpack_require__(27);
                var _Scrollable2 = _interopRequireDefault(_Scrollable);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _Scrollable2.default;
                exports.defaultOptions = _Scrollable.defaultOptions;
                /***/ 
            }),
            /* 29 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.MirrorDestroyEvent = exports.MirrorMoveEvent = exports.MirrorAttachedEvent = exports.MirrorCreatedEvent = exports.MirrorCreateEvent = exports.MirrorEvent = undefined;
                var _AbstractEvent = __webpack_require__(3);
                var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                /**
                 * Base mirror event
                 * @class MirrorEvent
                 * @module MirrorEvent
                 * @extends AbstractEvent
                 */
                var MirrorEvent = /** @class */ (function (_super) {
                    __extends(MirrorEvent, _super);
                    function MirrorEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(MirrorEvent.prototype, "source", {
                        /**
                         * Draggables source element
                         * @property source
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.source;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MirrorEvent.prototype, "originalSource", {
                        /**
                         * Draggables original source element
                         * @property originalSource
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.originalSource;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MirrorEvent.prototype, "sourceContainer", {
                        /**
                         * Draggables source container element
                         * @property sourceContainer
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.sourceContainer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MirrorEvent.prototype, "sensorEvent", {
                        /**
                         * Sensor event
                         * @property sensorEvent
                         * @type {SensorEvent}
                         * @readonly
                         */
                        get: function () {
                            return this.data.sensorEvent;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MirrorEvent.prototype, "dragEvent", {
                        /**
                         * Drag event
                         * @property dragEvent
                         * @type {DragEvent}
                         * @readonly
                         */
                        get: function () {
                            return this.data.dragEvent;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MirrorEvent.prototype, "originalEvent", {
                        /**
                         * Original event that triggered sensor event
                         * @property originalEvent
                         * @type {Event}
                         * @readonly
                         */
                        get: function () {
                            if (this.sensorEvent) {
                                return this.sensorEvent.originalEvent;
                            }
                            return null;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return MirrorEvent;
                }(_AbstractEvent2.default));
                exports.MirrorEvent = MirrorEvent; /**
                                                    * Mirror create event
                                                    * @class MirrorCreateEvent
                                                    * @module MirrorCreateEvent
                                                    * @extends MirrorEvent
                                                    */
                var MirrorCreateEvent = /** @class */ (function (_super) {
                    __extends(MirrorCreateEvent, _super);
                    function MirrorCreateEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return MirrorCreateEvent;
                }(MirrorEvent));
                exports.MirrorCreateEvent = MirrorCreateEvent; /**
                                                                * Mirror created event
                                                                * @class MirrorCreatedEvent
                                                                * @module MirrorCreatedEvent
                                                                * @extends MirrorEvent
                                                                */
                MirrorCreateEvent.type = 'mirror:create';
                var MirrorCreatedEvent = /** @class */ (function (_super) {
                    __extends(MirrorCreatedEvent, _super);
                    function MirrorCreatedEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(MirrorCreatedEvent.prototype, "mirror", {
                        /**
                         * Draggables mirror element
                         * @property mirror
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.mirror;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return MirrorCreatedEvent;
                }(MirrorEvent));
                exports.MirrorCreatedEvent = MirrorCreatedEvent; /**
                                                                  * Mirror attached event
                                                                  * @class MirrorAttachedEvent
                                                                  * @module MirrorAttachedEvent
                                                                  * @extends MirrorEvent
                                                                  */
                MirrorCreatedEvent.type = 'mirror:created';
                var MirrorAttachedEvent = /** @class */ (function (_super) {
                    __extends(MirrorAttachedEvent, _super);
                    function MirrorAttachedEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(MirrorAttachedEvent.prototype, "mirror", {
                        /**
                         * Draggables mirror element
                         * @property mirror
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.mirror;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return MirrorAttachedEvent;
                }(MirrorEvent));
                exports.MirrorAttachedEvent = MirrorAttachedEvent; /**
                                                                    * Mirror move event
                                                                    * @class MirrorMoveEvent
                                                                    * @module MirrorMoveEvent
                                                                    * @extends MirrorEvent
                                                                    */
                MirrorAttachedEvent.type = 'mirror:attached';
                var MirrorMoveEvent = /** @class */ (function (_super) {
                    __extends(MirrorMoveEvent, _super);
                    function MirrorMoveEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(MirrorMoveEvent.prototype, "mirror", {
                        /**
                         * Draggables mirror element
                         * @property mirror
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.mirror;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return MirrorMoveEvent;
                }(MirrorEvent));
                exports.MirrorMoveEvent = MirrorMoveEvent; /**
                                                            * Mirror destroy event
                                                            * @class MirrorDestroyEvent
                                                            * @module MirrorDestroyEvent
                                                            * @extends MirrorEvent
                                                            */
                MirrorMoveEvent.type = 'mirror:move';
                MirrorMoveEvent.cancelable = true;
                var MirrorDestroyEvent = /** @class */ (function (_super) {
                    __extends(MirrorDestroyEvent, _super);
                    function MirrorDestroyEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(MirrorDestroyEvent.prototype, "mirror", {
                        /**
                         * Draggables mirror element
                         * @property mirror
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.mirror;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return MirrorDestroyEvent;
                }(MirrorEvent));
                exports.MirrorDestroyEvent = MirrorDestroyEvent;
                MirrorDestroyEvent.type = 'mirror:destroy';
                MirrorDestroyEvent.cancelable = true;
                /***/ 
            }),
            /* 30 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _MirrorEvent = __webpack_require__(29);
                Object.keys(_MirrorEvent).forEach(function (key) {
                    if (key === "default" || key === "__esModule")
                        return;
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: function () {
                            return _MirrorEvent[key];
                        }
                    });
                });
                /***/ 
            }),
            /* 31 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultOptions = exports.getAppendableContainer = exports.onScroll = exports.onMirrorMove = exports.onMirrorCreated = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;
                var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                } return target; };
                var _AbstractPlugin = __webpack_require__(4);
                var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
                var _MirrorEvent = __webpack_require__(30);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) {
                    if (keys.indexOf(i) >= 0)
                        continue;
                    if (!Object.prototype.hasOwnProperty.call(obj, i))
                        continue;
                    target[i] = obj[i];
                } return target; }
                var onDragStart = exports.onDragStart = Symbol('onDragStart');
                var onDragMove = exports.onDragMove = Symbol('onDragMove');
                var onDragStop = exports.onDragStop = Symbol('onDragStop');
                var onMirrorCreated = exports.onMirrorCreated = Symbol('onMirrorCreated');
                var onMirrorMove = exports.onMirrorMove = Symbol('onMirrorMove');
                var onScroll = exports.onScroll = Symbol('onScroll');
                var getAppendableContainer = exports.getAppendableContainer = Symbol('getAppendableContainer');
                /**
                 * Mirror default options
                 * @property {Object} defaultOptions
                 * @property {Boolean} defaultOptions.constrainDimensions
                 * @property {Boolean} defaultOptions.xAxis
                 * @property {Boolean} defaultOptions.yAxis
                 * @property {null} defaultOptions.cursorOffsetX
                 * @property {null} defaultOptions.cursorOffsetY
                 * @type {Object}
                 */
                var defaultOptions = exports.defaultOptions = {
                    constrainDimensions: false,
                    xAxis: true,
                    yAxis: true,
                    cursorOffsetX: null,
                    cursorOffsetY: null
                };
                /**
                 * Mirror plugin which controls the mirror positioning while dragging
                 * @class Mirror
                 * @module Mirror
                 * @extends AbstractPlugin
                 */
                var Mirror = /** @class */ (function (_super) {
                    __extends(Mirror, _super);
                    /**
                     * Mirror constructor.
                     * @constructs Mirror
                     * @param {Draggable} draggable - Draggable instance
                     */
                    function Mirror(draggable) {
                        var _this = _super.call(this, draggable) || this;
                        /**
                         * Mirror options
                         * @property {Object} options
                         * @property {Boolean} options.constrainDimensions
                         * @property {Boolean} options.xAxis
                         * @property {Boolean} options.yAxis
                         * @property {Number|null} options.cursorOffsetX
                         * @property {Number|null} options.cursorOffsetY
                         * @property {String|HTMLElement|Function} options.appendTo
                         * @type {Object}
                         */
                        _this.options = _extends({}, defaultOptions, _this.getOptions());
                        /**
                         * Scroll offset for touch devices because the mirror is positioned fixed
                         * @property {Object} scrollOffset
                         * @property {Number} scrollOffset.x
                         * @property {Number} scrollOffset.y
                         */
                        _this.scrollOffset = { x: 0, y: 0 };
                        /**
                         * Initial scroll offset for touch devices because the mirror is positioned fixed
                         * @property {Object} scrollOffset
                         * @property {Number} scrollOffset.x
                         * @property {Number} scrollOffset.y
                         */
                        _this.initialScrollOffset = {
                            x: window.scrollX,
                            y: window.scrollY
                        };
                        _this[onDragStart] = _this[onDragStart].bind(_this);
                        _this[onDragMove] = _this[onDragMove].bind(_this);
                        _this[onDragStop] = _this[onDragStop].bind(_this);
                        _this[onMirrorCreated] = _this[onMirrorCreated].bind(_this);
                        _this[onMirrorMove] = _this[onMirrorMove].bind(_this);
                        _this[onScroll] = _this[onScroll].bind(_this);
                        return _this;
                    }
                    /**
                     * Attaches plugins event listeners
                     */
                    Mirror.prototype.attach = function () {
                        this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]).on('mirror:created', this[onMirrorCreated]).on('mirror:move', this[onMirrorMove]);
                    };
                    /**
                     * Detaches plugins event listeners
                     */
                    Mirror.prototype.detach = function () {
                        this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]).off('mirror:created', this[onMirrorCreated]).off('mirror:move', this[onMirrorMove]);
                    };
                    /**
                     * Returns options passed through draggable
                     * @return {Object}
                     */
                    Mirror.prototype.getOptions = function () {
                        return this.draggable.options.mirror || {};
                    };
                    Mirror.prototype[onDragStart] = function (dragEvent) {
                        if (dragEvent.canceled()) {
                            return;
                        }
                        if ('ontouchstart' in window) {
                            document.addEventListener('scroll', this[onScroll], true);
                        }
                        this.initialScrollOffset = {
                            x: window.scrollX,
                            y: window.scrollY
                        };
                        var source = dragEvent.source, originalSource = dragEvent.originalSource, sourceContainer = dragEvent.sourceContainer, sensorEvent = dragEvent.sensorEvent;
                        var mirrorCreateEvent = new _MirrorEvent.MirrorCreateEvent({
                            source: source,
                            originalSource: originalSource,
                            sourceContainer: sourceContainer,
                            sensorEvent: sensorEvent,
                            dragEvent: dragEvent
                        });
                        this.draggable.trigger(mirrorCreateEvent);
                        if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {
                            return;
                        }
                        var appendableContainer = this[getAppendableContainer](source) || sourceContainer;
                        this.mirror = source.cloneNode(true);
                        var mirrorCreatedEvent = new _MirrorEvent.MirrorCreatedEvent({
                            source: source,
                            originalSource: originalSource,
                            sourceContainer: sourceContainer,
                            sensorEvent: sensorEvent,
                            dragEvent: dragEvent,
                            mirror: this.mirror
                        });
                        var mirrorAttachedEvent = new _MirrorEvent.MirrorAttachedEvent({
                            source: source,
                            originalSource: originalSource,
                            sourceContainer: sourceContainer,
                            sensorEvent: sensorEvent,
                            dragEvent: dragEvent,
                            mirror: this.mirror
                        });
                        this.draggable.trigger(mirrorCreatedEvent);
                        appendableContainer.appendChild(this.mirror);
                        this.draggable.trigger(mirrorAttachedEvent);
                    };
                    Mirror.prototype[onDragMove] = function (dragEvent) {
                        if (!this.mirror || dragEvent.canceled()) {
                            return;
                        }
                        var source = dragEvent.source, originalSource = dragEvent.originalSource, sourceContainer = dragEvent.sourceContainer, sensorEvent = dragEvent.sensorEvent;
                        var mirrorMoveEvent = new _MirrorEvent.MirrorMoveEvent({
                            source: source,
                            originalSource: originalSource,
                            sourceContainer: sourceContainer,
                            sensorEvent: sensorEvent,
                            dragEvent: dragEvent,
                            mirror: this.mirror
                        });
                        this.draggable.trigger(mirrorMoveEvent);
                    };
                    Mirror.prototype[onDragStop] = function (dragEvent) {
                        if ('ontouchstart' in window) {
                            document.removeEventListener('scroll', this[onScroll], true);
                        }
                        this.initialScrollOffset = { x: 0, y: 0 };
                        this.scrollOffset = { x: 0, y: 0 };
                        if (!this.mirror) {
                            return;
                        }
                        var source = dragEvent.source, sourceContainer = dragEvent.sourceContainer, sensorEvent = dragEvent.sensorEvent;
                        var mirrorDestroyEvent = new _MirrorEvent.MirrorDestroyEvent({
                            source: source,
                            mirror: this.mirror,
                            sourceContainer: sourceContainer,
                            sensorEvent: sensorEvent,
                            dragEvent: dragEvent
                        });
                        this.draggable.trigger(mirrorDestroyEvent);
                        if (!mirrorDestroyEvent.canceled()) {
                            this.mirror.parentNode.removeChild(this.mirror);
                        }
                    };
                    Mirror.prototype[onScroll] = function () {
                        this.scrollOffset = {
                            x: window.scrollX - this.initialScrollOffset.x,
                            y: window.scrollY - this.initialScrollOffset.y
                        };
                    };
                    /**
                     * Mirror created handler
                     * @param {MirrorCreatedEvent} mirrorEvent
                     * @return {Promise}
                     * @private
                     */
                    Mirror.prototype[onMirrorCreated] = function (_a) {
                        var _this = this;
                        var mirror = _a.mirror, source = _a.source, sensorEvent = _a.sensorEvent;
                        var mirrorClass = this.draggable.getClassNameFor('mirror');
                        var setState = function (_ref) {
                            var mirrorOffset = _ref.mirrorOffset, initialX = _ref.initialX, initialY = _ref.initialY, args = _objectWithoutProperties(_ref, ['mirrorOffset', 'initialX', 'initialY']);
                            _this.mirrorOffset = mirrorOffset;
                            _this.initialX = initialX;
                            _this.initialY = initialY;
                            return _extends({ mirrorOffset: mirrorOffset, initialX: initialX, initialY: initialY }, args);
                        };
                        var initialState = {
                            mirror: mirror,
                            source: source,
                            sensorEvent: sensorEvent,
                            mirrorClass: mirrorClass,
                            scrollOffset: this.scrollOffset,
                            options: this.options
                        };
                        return Promise.resolve(initialState)
                            // Fix reflow here
                            .then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({ initial: true })).then(removeMirrorID).then(setState);
                    };
                    /**
                     * Mirror move handler
                     * @param {MirrorMoveEvent} mirrorEvent
                     * @return {Promise|null}
                     * @private
                     */
                    Mirror.prototype[onMirrorMove] = function (mirrorEvent) {
                        if (mirrorEvent.canceled()) {
                            return null;
                        }
                        var initialState = {
                            mirror: mirrorEvent.mirror,
                            sensorEvent: mirrorEvent.sensorEvent,
                            mirrorOffset: this.mirrorOffset,
                            options: this.options,
                            initialX: this.initialX,
                            initialY: this.initialY,
                            scrollOffset: this.scrollOffset
                        };
                        return Promise.resolve(initialState).then(positionMirror({ raf: true }));
                    };
                    /**
                     * Returns appendable container for mirror based on the appendTo option
                     * @private
                     * @param {Object} options
                     * @param {HTMLElement} options.source - Current source
                     * @return {HTMLElement}
                     */
                    Mirror.prototype[getAppendableContainer] = function (source) {
                        var appendTo = this.options.appendTo;
                        if (typeof appendTo === 'string') {
                            return document.querySelector(appendTo);
                        }
                        else if (appendTo instanceof HTMLElement) {
                            return appendTo;
                        }
                        else if (typeof appendTo === 'function') {
                            return appendTo(source);
                        }
                        else {
                            return source.parentNode;
                        }
                    };
                    return Mirror;
                }(_AbstractPlugin2.default));
                exports.default = Mirror; /**
                                           * Computes mirror dimensions based on the source element
                                           * Adds sourceRect to state
                                           * @param {Object} state
                                           * @param {HTMLElement} state.source
                                           * @return {Promise}
                                           * @private
                                           */
                function computeMirrorDimensions(_ref2) {
                    var source = _ref2.source, args = _objectWithoutProperties(_ref2, ['source']);
                    return withPromise(function (resolve) {
                        var sourceRect = source.getBoundingClientRect();
                        resolve(_extends({ source: source, sourceRect: sourceRect }, args));
                    });
                }
                /**
                 * Calculates mirror offset
                 * Adds mirrorOffset to state
                 * @param {Object} state
                 * @param {SensorEvent} state.sensorEvent
                 * @param {DOMRect} state.sourceRect
                 * @return {Promise}
                 * @private
                 */
                function calculateMirrorOffset(_ref3) {
                    var sensorEvent = _ref3.sensorEvent, sourceRect = _ref3.sourceRect, options = _ref3.options, args = _objectWithoutProperties(_ref3, ['sensorEvent', 'sourceRect', 'options']);
                    return withPromise(function (resolve) {
                        var top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;
                        var left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;
                        var mirrorOffset = { top: top, left: left };
                        resolve(_extends({ sensorEvent: sensorEvent, sourceRect: sourceRect, mirrorOffset: mirrorOffset, options: options }, args));
                    });
                }
                /**
                 * Applys mirror styles
                 * @param {Object} state
                 * @param {HTMLElement} state.mirror
                 * @param {HTMLElement} state.source
                 * @param {Object} state.options
                 * @return {Promise}
                 * @private
                 */
                function resetMirror(_ref4) {
                    var mirror = _ref4.mirror, source = _ref4.source, options = _ref4.options, args = _objectWithoutProperties(_ref4, ['mirror', 'source', 'options']);
                    return withPromise(function (resolve) {
                        var offsetHeight;
                        var offsetWidth;
                        if (options.constrainDimensions) {
                            var computedSourceStyles = getComputedStyle(source);
                            offsetHeight = computedSourceStyles.getPropertyValue('height');
                            offsetWidth = computedSourceStyles.getPropertyValue('width');
                        }
                        mirror.style.position = 'fixed';
                        mirror.style.pointerEvents = 'none';
                        mirror.style.top = 0;
                        mirror.style.left = 0;
                        mirror.style.margin = 0;
                        if (options.constrainDimensions) {
                            mirror.style.height = offsetHeight;
                            mirror.style.width = offsetWidth;
                        }
                        resolve(_extends({ mirror: mirror, source: source, options: options }, args));
                    });
                }
                /**
                 * Applys mirror class on mirror element
                 * @param {Object} state
                 * @param {HTMLElement} state.mirror
                 * @param {String} state.mirrorClass
                 * @return {Promise}
                 * @private
                 */
                function addMirrorClasses(_ref5) {
                    var mirror = _ref5.mirror, mirrorClass = _ref5.mirrorClass, args = _objectWithoutProperties(_ref5, ['mirror', 'mirrorClass']);
                    return withPromise(function (resolve) {
                        mirror.classList.add(mirrorClass);
                        resolve(_extends({ mirror: mirror, mirrorClass: mirrorClass }, args));
                    });
                }
                /**
                 * Removes source ID from cloned mirror element
                 * @param {Object} state
                 * @param {HTMLElement} state.mirror
                 * @return {Promise}
                 * @private
                 */
                function removeMirrorID(_ref6) {
                    var mirror = _ref6.mirror, args = _objectWithoutProperties(_ref6, ['mirror']);
                    return withPromise(function (resolve) {
                        mirror.removeAttribute('id');
                        delete mirror.id;
                        resolve(_extends({ mirror: mirror }, args));
                    });
                }
                /**
                 * Positions mirror with translate3d
                 * @param {Object} state
                 * @param {HTMLElement} state.mirror
                 * @param {SensorEvent} state.sensorEvent
                 * @param {Object} state.mirrorOffset
                 * @param {Number} state.initialY
                 * @param {Number} state.initialX
                 * @param {Object} state.options
                 * @return {Promise}
                 * @private
                 */
                function positionMirror(_a) {
                    var _b = _a === void 0 ? {} : _a, _c = _b.withFrame, withFrame = _c === void 0 ? false : _c, _d = _b.initial, initial = _d === void 0 ? false : _d;
                    return function (_ref7) {
                        var mirror = _ref7.mirror, sensorEvent = _ref7.sensorEvent, mirrorOffset = _ref7.mirrorOffset, initialY = _ref7.initialY, initialX = _ref7.initialX, scrollOffset = _ref7.scrollOffset, options = _ref7.options, args = _objectWithoutProperties(_ref7, ['mirror', 'sensorEvent', 'mirrorOffset', 'initialY', 'initialX', 'scrollOffset', 'options']);
                        return withPromise(function (resolve) {
                            var result = _extends({
                                mirror: mirror,
                                sensorEvent: sensorEvent,
                                mirrorOffset: mirrorOffset,
                                options: options
                            }, args);
                            if (mirrorOffset) {
                                var x = sensorEvent.clientX - mirrorOffset.left - scrollOffset.x;
                                var y = sensorEvent.clientY - mirrorOffset.top - scrollOffset.y;
                                if (options.xAxis && options.yAxis || initial) {
                                    mirror.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
                                }
                                else if (options.xAxis && !options.yAxis) {
                                    mirror.style.transform = "translate3d(" + x + "px, " + initialY + "px, 0)";
                                }
                                else if (options.yAxis && !options.xAxis) {
                                    mirror.style.transform = "translate3d(" + initialX + "px, " + y + "px, 0)";
                                }
                                if (initial) {
                                    result.initialX = x;
                                    result.initialY = y;
                                }
                            }
                            resolve(result);
                        }, { frame: withFrame });
                    };
                }
                /**
                 * Wraps functions in promise with potential animation frame option
                 * @param {Function} callback
                 * @param {Object} options
                 * @param {Boolean} options.raf
                 * @return {Promise}
                 * @private
                 */
                function withPromise(callback, _a) {
                    var _b = (_a === void 0 ? {} : _a).raf, raf = _b === void 0 ? false : _b;
                    return new Promise(function (resolve, reject) {
                        if (raf) {
                            requestAnimationFrame(function () {
                                callback(resolve, reject);
                            });
                        }
                        else {
                            callback(resolve, reject);
                        }
                    });
                }
                /**
                 * Returns true if the sensor event was triggered by a native browser drag event
                 * @param {SensorEvent} sensorEvent
                 */
                function isNativeDragEvent(sensorEvent) {
                    return (/^drag/.test(sensorEvent.originalEvent.type));
                }
                /***/ 
            }),
            /* 32 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultOptions = undefined;
                var _Mirror = __webpack_require__(31);
                var _Mirror2 = _interopRequireDefault(_Mirror);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _Mirror2.default;
                exports.defaultOptions = _Mirror.defaultOptions;
                /***/ 
            }),
            /* 33 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                } return target; };
                var _AbstractPlugin = __webpack_require__(4);
                var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                var onInitialize = Symbol('onInitialize');
                var onDestroy = Symbol('onDestroy');
                /**
                 * Focusable default options
                 * @property {Object} defaultOptions
                 * @type {Object}
                 */
                var defaultOptions = {};
                /**
                 * Focusable plugin
                 * @class Focusable
                 * @module Focusable
                 * @extends AbstractPlugin
                 */
                var Focusable = /** @class */ (function (_super) {
                    __extends(Focusable, _super);
                    /**
                     * Focusable constructor.
                     * @constructs Focusable
                     * @param {Draggable} draggable - Draggable instance
                     */
                    function Focusable(draggable) {
                        var _this = _super.call(this, draggable) || this;
                        /**
                         * Focusable options
                         * @property {Object} options
                         * @type {Object}
                         */
                        _this.options = _extends({}, defaultOptions, _this.getOptions());
                        _this[onInitialize] = _this[onInitialize].bind(_this);
                        _this[onDestroy] = _this[onDestroy].bind(_this);
                        return _this;
                    }
                    /**
                     * Attaches listeners to draggable
                     */
                    Focusable.prototype.attach = function () {
                        this.draggable.on('draggable:initialize', this[onInitialize]).on('draggable:destroy', this[onDestroy]);
                    };
                    /**
                     * Detaches listeners from draggable
                     */
                    Focusable.prototype.detach = function () {
                        this.draggable.off('draggable:initialize', this[onInitialize]).off('draggable:destroy', this[onDestroy]);
                    };
                    /**
                     * Returns options passed through draggable
                     * @return {Object}
                     */
                    Focusable.prototype.getOptions = function () {
                        return this.draggable.options.focusable || {};
                    };
                    /**
                     * Returns draggable containers and elements
                     * @return {HTMLElement[]}
                     */
                    Focusable.prototype.getElements = function () {
                        return this.draggable.containers.concat(this.draggable.getDraggableElements());
                    };
                    /**
                     * Intialize handler
                     * @private
                     */
                    Focusable.prototype[onInitialize] = function () {
                        var _this = this;
                        // Can wait until the next best frame is available
                        requestAnimationFrame(function () {
                            _this.getElements().forEach(function (element) { return decorateElement(element); });
                        });
                    };
                    /**
                     * Destroy handler
                     * @private
                     */
                    Focusable.prototype[onDestroy] = function () {
                        var _this = this;
                        // Can wait until the next best frame is available
                        requestAnimationFrame(function () {
                            _this.getElements().forEach(function (element) { return stripElement(element); });
                        });
                    };
                    return Focusable;
                }(_AbstractPlugin2.default));
                exports.default = Focusable; /**
                                              * Keeps track of all the elements that are missing tabindex attributes
                                              * so they can be reset when draggable gets destroyed
                                              * @const {HTMLElement[]} elementsWithMissingTabIndex
                                              */
                var elementsWithMissingTabIndex = [];
                /**
                 * Decorates element with tabindex attributes
                 * @param {HTMLElement} element
                 * @return {Object}
                 * @private
                 */
                function decorateElement(element) {
                    var hasMissingTabIndex = Boolean(!element.getAttribute('tabindex') && element.tabIndex === -1);
                    if (hasMissingTabIndex) {
                        elementsWithMissingTabIndex.push(element);
                        element.tabIndex = 0;
                    }
                }
                /**
                 * Removes elements tabindex attributes
                 * @param {HTMLElement} element
                 * @private
                 */
                function stripElement(element) {
                    var tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);
                    if (tabIndexElementPosition !== -1) {
                        element.tabIndex = -1;
                        elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
                    }
                }
                /***/ 
            }),
            /* 34 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _Focusable = __webpack_require__(33);
                var _Focusable2 = _interopRequireDefault(_Focusable);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _Focusable2.default;
                /***/ 
            }),
            /* 35 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                /**
                 * All draggable plugins inherit from this class.
                 * @abstract
                 * @class AbstractPlugin
                 * @module AbstractPlugin
                 */
                var AbstractPlugin = /** @class */ (function () {
                    /**
                     * AbstractPlugin constructor.
                     * @constructs AbstractPlugin
                     * @param {Draggable} draggable - Draggable instance
                     */
                    function AbstractPlugin(draggable) {
                        /**
                         * Draggable instance
                         * @property draggable
                         * @type {Draggable}
                         */
                        this.draggable = draggable;
                    }
                    /**
                     * Override to add listeners
                     * @abstract
                     */
                    AbstractPlugin.prototype.attach = function () {
                        throw new Error('Not Implemented');
                    };
                    /**
                     * Override to remove listeners
                     * @abstract
                     */
                    AbstractPlugin.prototype.detach = function () {
                        throw new Error('Not Implemented');
                    };
                    return AbstractPlugin;
                }());
                exports.default = AbstractPlugin;
                /***/ 
            }),
            /* 36 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultOptions = undefined;
                var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                } return target; };
                var _AbstractPlugin = __webpack_require__(4);
                var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                var onInitialize = Symbol('onInitialize');
                var onDestroy = Symbol('onDestroy');
                var announceEvent = Symbol('announceEvent');
                var announceMessage = Symbol('announceMessage');
                var ARIA_RELEVANT = 'aria-relevant';
                var ARIA_ATOMIC = 'aria-atomic';
                var ARIA_LIVE = 'aria-live';
                var ROLE = 'role';
                /**
                 * Announcement default options
                 * @property {Object} defaultOptions
                 * @property {Number} defaultOptions.expire
                 * @type {Object}
                 */
                var defaultOptions = exports.defaultOptions = {
                    expire: 7000
                };
                /**
                 * Announcement plugin
                 * @class Announcement
                 * @module Announcement
                 * @extends AbstractPlugin
                 */
                var Announcement = /** @class */ (function (_super) {
                    __extends(Announcement, _super);
                    /**
                     * Announcement constructor.
                     * @constructs Announcement
                     * @param {Draggable} draggable - Draggable instance
                     */
                    function Announcement(draggable) {
                        var _this = _super.call(this, draggable) || this;
                        /**
                         * Plugin options
                         * @property options
                         * @type {Object}
                         */
                        _this.options = _extends({}, defaultOptions, _this.getOptions());
                        /**
                         * Original draggable trigger method. Hack until we have onAll or on('all')
                         * @property originalTriggerMethod
                         * @type {Function}
                         */
                        _this.originalTriggerMethod = _this.draggable.trigger;
                        _this[onInitialize] = _this[onInitialize].bind(_this);
                        _this[onDestroy] = _this[onDestroy].bind(_this);
                        return _this;
                    }
                    /**
                     * Attaches listeners to draggable
                     */
                    Announcement.prototype.attach = function () {
                        this.draggable.on('draggable:initialize', this[onInitialize]);
                    };
                    /**
                     * Detaches listeners from draggable
                     */
                    Announcement.prototype.detach = function () {
                        this.draggable.off('draggable:destroy', this[onDestroy]);
                    };
                    /**
                     * Returns passed in options
                     */
                    Announcement.prototype.getOptions = function () {
                        return this.draggable.options.announcements || {};
                    };
                    /**
                     * Announces event
                     * @private
                     * @param {AbstractEvent} event
                     */
                    Announcement.prototype[announceEvent] = function (event) {
                        var message = this.options[event.type];
                        if (message && typeof message === 'string') {
                            this[announceMessage](message);
                        }
                        if (message && typeof message === 'function') {
                            this[announceMessage](message(event));
                        }
                    };
                    /**
                     * Announces message to screen reader
                     * @private
                     * @param {String} message
                     */
                    Announcement.prototype[announceMessage] = function (message) {
                        announce(message, { expire: this.options.expire });
                    };
                    /**
                     * Initialize hander
                     * @private
                     */
                    Announcement.prototype[onInitialize] = function () {
                        var _this = this;
                        // Hack until there is an api for listening for all events
                        this.draggable.trigger = function (event) {
                            try {
                                _this[announceEvent](event);
                            }
                            finally {
                                // Ensure that original trigger is called
                                _this.originalTriggerMethod.call(_this.draggable, event);
                            }
                        };
                    };
                    /**
                     * Destroy hander
                     * @private
                     */
                    Announcement.prototype[onDestroy] = function () {
                        this.draggable.trigger = this.originalTriggerMethod;
                    };
                    return Announcement;
                }(_AbstractPlugin2.default));
                exports.default = Announcement; /**
                                                 * @const {HTMLElement} liveRegion
                                                 */
                var liveRegion = createRegion();
                /**
                 * Announces message via live region
                 * @param {String} message
                 * @param {Object} options
                 * @param {Number} options.expire
                 */
                function announce(message, _a) {
                    var expire = _a.expire;
                    var element = document.createElement('div');
                    element.textContent = message;
                    liveRegion.appendChild(element);
                    return setTimeout(function () {
                        liveRegion.removeChild(element);
                    }, expire);
                }
                /**
                 * Creates region element
                 * @return {HTMLElement}
                 */
                function createRegion() {
                    var element = document.createElement('div');
                    element.setAttribute('id', 'draggable-live-region');
                    element.setAttribute(ARIA_RELEVANT, 'additions');
                    element.setAttribute(ARIA_ATOMIC, 'true');
                    element.setAttribute(ARIA_LIVE, 'assertive');
                    element.setAttribute(ROLE, 'log');
                    element.style.position = 'fixed';
                    element.style.width = '1px';
                    element.style.height = '1px';
                    element.style.top = '-1px';
                    element.style.overflow = 'hidden';
                    return element;
                }
                // Append live region element as early as possible
                document.addEventListener('DOMContentLoaded', function () {
                    document.body.appendChild(liveRegion);
                });
                /***/ 
            }),
            /* 37 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultOptions = undefined;
                var _Announcement = __webpack_require__(36);
                var _Announcement2 = _interopRequireDefault(_Announcement);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _Announcement2.default;
                exports.defaultOptions = _Announcement.defaultOptions;
                /***/ 
            }),
            /* 38 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.DraggableDestroyEvent = exports.DraggableInitializedEvent = exports.DraggableEvent = undefined;
                var _AbstractEvent = __webpack_require__(3);
                var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                /**
                 * Base draggable event
                 * @class DraggableEvent
                 * @module DraggableEvent
                 * @extends AbstractEvent
                 */
                var DraggableEvent = /** @class */ (function (_super) {
                    __extends(DraggableEvent, _super);
                    function DraggableEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(DraggableEvent.prototype, "draggable", {
                        /**
                         * Draggable instance
                         * @property draggable
                         * @type {Draggable}
                         * @readonly
                         */
                        get: function () {
                            return this.data.draggable;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return DraggableEvent;
                }(_AbstractEvent2.default));
                exports.DraggableEvent = DraggableEvent; /**
                                                          * Draggable initialized event
                                                          * @class DraggableInitializedEvent
                                                          * @module DraggableInitializedEvent
                                                          * @extends DraggableEvent
                                                          */
                DraggableEvent.type = 'draggable';
                var DraggableInitializedEvent = /** @class */ (function (_super) {
                    __extends(DraggableInitializedEvent, _super);
                    function DraggableInitializedEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DraggableInitializedEvent;
                }(DraggableEvent));
                exports.DraggableInitializedEvent = DraggableInitializedEvent; /**
                                                                                * Draggable destory event
                                                                                * @class DraggableInitializedEvent
                                                                                * @module DraggableDestroyEvent
                                                                                * @extends DraggableDestroyEvent
                                                                                */
                DraggableInitializedEvent.type = 'draggable:initialize';
                var DraggableDestroyEvent = /** @class */ (function (_super) {
                    __extends(DraggableDestroyEvent, _super);
                    function DraggableDestroyEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DraggableDestroyEvent;
                }(DraggableEvent));
                exports.DraggableDestroyEvent = DraggableDestroyEvent;
                DraggableDestroyEvent.type = 'draggable:destroy';
                /***/ 
            }),
            /* 39 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.DragStopEvent = exports.DragPressureEvent = exports.DragOutContainerEvent = exports.DragOverContainerEvent = exports.DragOutEvent = exports.DragOverEvent = exports.DragMoveEvent = exports.DragStartEvent = exports.DragEvent = undefined;
                var _AbstractEvent = __webpack_require__(3);
                var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                /**
                 * Base drag event
                 * @class DragEvent
                 * @module DragEvent
                 * @extends AbstractEvent
                 */
                var DragEvent = /** @class */ (function (_super) {
                    __extends(DragEvent, _super);
                    function DragEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(DragEvent.prototype, "source", {
                        /**
                         * Draggables source element
                         * @property source
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.source;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(DragEvent.prototype, "originalSource", {
                        /**
                         * Draggables original source element
                         * @property originalSource
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.originalSource;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(DragEvent.prototype, "mirror", {
                        /**
                         * Draggables mirror element
                         * @property mirror
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.mirror;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(DragEvent.prototype, "sourceContainer", {
                        /**
                         * Draggables source container element
                         * @property sourceContainer
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.sourceContainer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(DragEvent.prototype, "sensorEvent", {
                        /**
                         * Sensor event
                         * @property sensorEvent
                         * @type {SensorEvent}
                         * @readonly
                         */
                        get: function () {
                            return this.data.sensorEvent;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(DragEvent.prototype, "originalEvent", {
                        /**
                         * Original event that triggered sensor event
                         * @property originalEvent
                         * @type {Event}
                         * @readonly
                         */
                        get: function () {
                            if (this.sensorEvent) {
                                return this.sensorEvent.originalEvent;
                            }
                            return null;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return DragEvent;
                }(_AbstractEvent2.default));
                exports.DragEvent = DragEvent; /**
                                                * Drag start event
                                                * @class DragStartEvent
                                                * @module DragStartEvent
                                                * @extends DragEvent
                                                */
                DragEvent.type = 'drag';
                var DragStartEvent = /** @class */ (function (_super) {
                    __extends(DragStartEvent, _super);
                    function DragStartEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DragStartEvent;
                }(DragEvent));
                exports.DragStartEvent = DragStartEvent; /**
                                                          * Drag move event
                                                          * @class DragMoveEvent
                                                          * @module DragMoveEvent
                                                          * @extends DragEvent
                                                          */
                DragStartEvent.type = 'drag:start';
                DragStartEvent.cancelable = true;
                var DragMoveEvent = /** @class */ (function (_super) {
                    __extends(DragMoveEvent, _super);
                    function DragMoveEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DragMoveEvent;
                }(DragEvent));
                exports.DragMoveEvent = DragMoveEvent; /**
                                                        * Drag over event
                                                        * @class DragOverEvent
                                                        * @module DragOverEvent
                                                        * @extends DragEvent
                                                        */
                DragMoveEvent.type = 'drag:move';
                var DragOverEvent = /** @class */ (function (_super) {
                    __extends(DragOverEvent, _super);
                    function DragOverEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(DragOverEvent.prototype, "overContainer", {
                        /**
                         * Draggable container you are over
                         * @property overContainer
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.overContainer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(DragOverEvent.prototype, "over", {
                        /**
                         * Draggable element you are over
                         * @property over
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.over;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return DragOverEvent;
                }(DragEvent));
                exports.DragOverEvent = DragOverEvent; /**
                                                        * Drag out event
                                                        * @class DragOutEvent
                                                        * @module DragOutEvent
                                                        * @extends DragEvent
                                                        */
                DragOverEvent.type = 'drag:over';
                DragOverEvent.cancelable = true;
                var DragOutEvent = /** @class */ (function (_super) {
                    __extends(DragOutEvent, _super);
                    function DragOutEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(DragOutEvent.prototype, "overContainer", {
                        /**
                         * Draggable container you are over
                         * @property overContainer
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.overContainer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(DragOutEvent.prototype, "over", {
                        /**
                         * Draggable element you left
                         * @property over
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.over;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return DragOutEvent;
                }(DragEvent));
                exports.DragOutEvent = DragOutEvent; /**
                                                      * Drag over container event
                                                      * @class DragOverContainerEvent
                                                      * @module DragOverContainerEvent
                                                      * @extends DragEvent
                                                      */
                DragOutEvent.type = 'drag:out';
                var DragOverContainerEvent = /** @class */ (function (_super) {
                    __extends(DragOverContainerEvent, _super);
                    function DragOverContainerEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(DragOverContainerEvent.prototype, "overContainer", {
                        /**
                         * Draggable container you are over
                         * @property overContainer
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.overContainer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return DragOverContainerEvent;
                }(DragEvent));
                exports.DragOverContainerEvent = DragOverContainerEvent; /**
                                                                          * Drag out container event
                                                                          * @class DragOutContainerEvent
                                                                          * @module DragOutContainerEvent
                                                                          * @extends DragEvent
                                                                          */
                DragOverContainerEvent.type = 'drag:over:container';
                var DragOutContainerEvent = /** @class */ (function (_super) {
                    __extends(DragOutContainerEvent, _super);
                    function DragOutContainerEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(DragOutContainerEvent.prototype, "overContainer", {
                        /**
                         * Draggable container you left
                         * @property overContainer
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.overContainer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return DragOutContainerEvent;
                }(DragEvent));
                exports.DragOutContainerEvent = DragOutContainerEvent; /**
                                                                        * Drag pressure event
                                                                        * @class DragPressureEvent
                                                                        * @module DragPressureEvent
                                                                        * @extends DragEvent
                                                                        */
                DragOutContainerEvent.type = 'drag:out:container';
                var DragPressureEvent = /** @class */ (function (_super) {
                    __extends(DragPressureEvent, _super);
                    function DragPressureEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(DragPressureEvent.prototype, "pressure", {
                        /**
                         * Pressure applied on draggable element
                         * @property pressure
                         * @type {Number}
                         * @readonly
                         */
                        get: function () {
                            return this.data.pressure;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return DragPressureEvent;
                }(DragEvent));
                exports.DragPressureEvent = DragPressureEvent; /**
                                                                * Drag stop event
                                                                * @class DragStopEvent
                                                                * @module DragStopEvent
                                                                * @extends DragEvent
                                                                */
                DragPressureEvent.type = 'drag:pressure';
                var DragStopEvent = /** @class */ (function (_super) {
                    __extends(DragStopEvent, _super);
                    function DragStopEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DragStopEvent;
                }(DragEvent));
                exports.DragStopEvent = DragStopEvent;
                DragStopEvent.type = 'drag:stop';
                /***/ 
            }),
            /* 40 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _DragEvent = __webpack_require__(8);
                Object.keys(_DragEvent).forEach(function (key) {
                    if (key === "default" || key === "__esModule")
                        return;
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: function () {
                            return _DragEvent[key];
                        }
                    });
                });
                var _DraggableEvent = __webpack_require__(7);
                Object.keys(_DraggableEvent).forEach(function (key) {
                    if (key === "default" || key === "__esModule")
                        return;
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: function () {
                            return _DraggableEvent[key];
                        }
                    });
                });
                var _Plugins = __webpack_require__(6);
                Object.keys(_Plugins).forEach(function (key) {
                    if (key === "default" || key === "__esModule")
                        return;
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: function () {
                            return _Plugins[key];
                        }
                    });
                });
                var _Sensors = __webpack_require__(5);
                Object.keys(_Sensors).forEach(function (key) {
                    if (key === "default" || key === "__esModule")
                        return;
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: function () {
                            return _Sensors[key];
                        }
                    });
                });
                var _Draggable = __webpack_require__(12);
                var _Draggable2 = _interopRequireDefault(_Draggable);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _Draggable2.default;
                /***/ 
            }),
            /* 41 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                } return target; };
                var _Draggable = __webpack_require__(40);
                var _Draggable2 = _interopRequireDefault(_Draggable);
                var _SortableEvent = __webpack_require__(9);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                var onDragStart = Symbol('onDragStart');
                var onDragOverContainer = Symbol('onDragOverContainer');
                var onDragOver = Symbol('onDragOver');
                var onDragStop = Symbol('onDragStop');
                /**
                 * Returns announcement message when a Draggable element has been sorted with another Draggable element
                 * or moved into a new container
                 * @param {SortableSortedEvent} sortableEvent
                 * @return {String}
                 */
                function onSortableSortedDefaultAnnouncement(_a) {
                    var dragEvent = _a.dragEvent;
                    var sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'sortable element';
                    if (dragEvent.over) {
                        var overText = dragEvent.over.textContent.trim() || dragEvent.over.id || 'sortable element';
                        var isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;
                        if (isFollowing) {
                            return "Placed " + sourceText + " after " + overText;
                        }
                        else {
                            return "Placed " + sourceText + " before " + overText;
                        }
                    }
                    else {
                        // need to figure out how to compute container name
                        return "Placed " + sourceText + " into a different container";
                    }
                }
                /**
                 * @const {Object} defaultAnnouncements
                 * @const {Function} defaultAnnouncements['sortable:sorted']
                 */
                var defaultAnnouncements = {
                    'sortable:sorted': onSortableSortedDefaultAnnouncement
                };
                /**
                 * Sortable is built on top of Draggable and allows sorting of draggable elements. Sortable will keep
                 * track of the original index and emits the new index as you drag over draggable elements.
                 * @class Sortable
                 * @module Sortable
                 * @extends Draggable
                 */
                var Sortable = /** @class */ (function (_super) {
                    __extends(Sortable, _super);
                    /**
                     * Sortable constructor.
                     * @constructs Sortable
                     * @param {HTMLElement[]|NodeList|HTMLElement} containers - Sortable containers
                     * @param {Object} options - Options for Sortable
                     */
                    function Sortable(containers, options) {
                        if (containers === void 0) { containers = []; }
                        if (options === void 0) { options = {}; }
                        var _this = _super.call(this, containers, _extends({}, options, {
                            announcements: _extends({}, defaultAnnouncements, options.announcements || {})
                        })) || this;
                        /**
                         * start index of source on drag start
                         * @property startIndex
                         * @type {Number}
                         */
                        _this.startIndex = null;
                        /**
                         * start container on drag start
                         * @property startContainer
                         * @type {HTMLElement}
                         * @default null
                         */
                        _this.startContainer = null;
                        _this[onDragStart] = _this[onDragStart].bind(_this);
                        _this[onDragOverContainer] = _this[onDragOverContainer].bind(_this);
                        _this[onDragOver] = _this[onDragOver].bind(_this);
                        _this[onDragStop] = _this[onDragStop].bind(_this);
                        _this.on('drag:start', _this[onDragStart]).on('drag:over:container', _this[onDragOverContainer]).on('drag:over', _this[onDragOver]).on('drag:stop', _this[onDragStop]);
                        return _this;
                    }
                    /**
                     * Destroys Sortable instance.
                     */
                    Sortable.prototype.destroy = function () {
                        _super.prototype.destroy.call(this);
                        this.off('drag:start', this[onDragStart]).off('drag:over:container', this[onDragOverContainer]).off('drag:over', this[onDragOver]).off('drag:stop', this[onDragStop]);
                    };
                    /**
                     * Returns true index of element within its container during drag operation, i.e. excluding mirror and original source
                     * @param {HTMLElement} element - An element
                     * @return {Number}
                     */
                    Sortable.prototype.index = function (element) {
                        return this.getDraggableElementsForContainer(element.parentNode).indexOf(element);
                    };
                    /**
                     * Drag start handler
                     * @private
                     * @param {DragStartEvent} event - Drag start event
                     */
                    Sortable.prototype[onDragStart] = function (event) {
                        this.startContainer = event.source.parentNode;
                        this.startIndex = this.index(event.source);
                        var sortableStartEvent = new _SortableEvent.SortableStartEvent({
                            dragEvent: event,
                            startIndex: this.startIndex,
                            startContainer: this.startContainer
                        });
                        this.trigger(sortableStartEvent);
                        if (sortableStartEvent.canceled()) {
                            event.cancel();
                        }
                    };
                    /**
                     * Drag over container handler
                     * @private
                     * @param {DragOverContainerEvent} event - Drag over container event
                     */
                    Sortable.prototype[onDragOverContainer] = function (event) {
                        if (event.canceled()) {
                            return;
                        }
                        var source = event.source, over = event.over, overContainer = event.overContainer;
                        var oldIndex = this.index(source);
                        var sortableSortEvent = new _SortableEvent.SortableSortEvent({
                            dragEvent: event,
                            currentIndex: oldIndex,
                            source: source,
                            over: over
                        });
                        this.trigger(sortableSortEvent);
                        if (sortableSortEvent.canceled()) {
                            return;
                        }
                        var children = this.getDraggableElementsForContainer(overContainer);
                        var moves = move({ source: source, over: over, overContainer: overContainer, children: children });
                        if (!moves) {
                            return;
                        }
                        var oldContainer = moves.oldContainer, newContainer = moves.newContainer;
                        var newIndex = this.index(event.source);
                        var sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
                            dragEvent: event,
                            oldIndex: oldIndex,
                            newIndex: newIndex,
                            oldContainer: oldContainer,
                            newContainer: newContainer
                        });
                        this.trigger(sortableSortedEvent);
                    };
                    /**
                     * Drag over handler
                     * @private
                     * @param {DragOverEvent} event - Drag over event
                     */
                    Sortable.prototype[onDragOver] = function (event) {
                        if (event.over === event.originalSource || event.over === event.source) {
                            return;
                        }
                        var source = event.source, over = event.over, overContainer = event.overContainer;
                        var oldIndex = this.index(source);
                        var sortableSortEvent = new _SortableEvent.SortableSortEvent({
                            dragEvent: event,
                            currentIndex: oldIndex,
                            source: source,
                            over: over
                        });
                        this.trigger(sortableSortEvent);
                        if (sortableSortEvent.canceled()) {
                            return;
                        }
                        var children = this.getDraggableElementsForContainer(overContainer);
                        var moves = move({ source: source, over: over, overContainer: overContainer, children: children });
                        if (!moves) {
                            return;
                        }
                        var oldContainer = moves.oldContainer, newContainer = moves.newContainer;
                        var newIndex = this.index(source);
                        var sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
                            dragEvent: event,
                            oldIndex: oldIndex,
                            newIndex: newIndex,
                            oldContainer: oldContainer,
                            newContainer: newContainer
                        });
                        this.trigger(sortableSortedEvent);
                    };
                    /**
                     * Drag stop handler
                     * @private
                     * @param {DragStopEvent} event - Drag stop event
                     */
                    Sortable.prototype[onDragStop] = function (event) {
                        var sortableStopEvent = new _SortableEvent.SortableStopEvent({
                            dragEvent: event,
                            oldIndex: this.startIndex,
                            newIndex: this.index(event.source),
                            oldContainer: this.startContainer,
                            newContainer: event.source.parentNode
                        });
                        this.trigger(sortableStopEvent);
                        this.startIndex = null;
                        this.startContainer = null;
                    };
                    return Sortable;
                }(_Draggable2.default));
                exports.default = Sortable;
                function index(element) {
                    return Array.prototype.indexOf.call(element.parentNode.children, element);
                }
                function move(_a) {
                    var source = _a.source, over = _a.over, overContainer = _a.overContainer, children = _a.children;
                    var emptyOverContainer = !children.length;
                    var differentContainer = source.parentNode !== overContainer;
                    var sameContainer = over && !differentContainer;
                    if (emptyOverContainer) {
                        return moveInsideEmptyContainer(source, overContainer);
                    }
                    else if (sameContainer) {
                        return moveWithinContainer(source, over);
                    }
                    else if (differentContainer) {
                        return moveOutsideContainer(source, over, overContainer);
                    }
                    else {
                        return null;
                    }
                }
                function moveInsideEmptyContainer(source, overContainer) {
                    var oldContainer = source.parentNode;
                    overContainer.appendChild(source);
                    return { oldContainer: oldContainer, newContainer: overContainer };
                }
                function moveWithinContainer(source, over) {
                    var oldIndex = index(source);
                    var newIndex = index(over);
                    if (oldIndex < newIndex) {
                        source.parentNode.insertBefore(source, over.nextElementSibling);
                    }
                    else {
                        source.parentNode.insertBefore(source, over);
                    }
                    return { oldContainer: source.parentNode, newContainer: source.parentNode };
                }
                function moveOutsideContainer(source, over, overContainer) {
                    var oldContainer = source.parentNode;
                    if (over) {
                        over.parentNode.insertBefore(source, over);
                    }
                    else {
                        // need to figure out proper position
                        overContainer.appendChild(source);
                    }
                    return { oldContainer: oldContainer, newContainer: source.parentNode };
                }
                /***/ 
            }),
            /* 42 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                } return target; };
                var canceled = Symbol('canceled');
                /**
                 * All events fired by draggable inherit this class. You can call `cancel()` to
                 * cancel a specific event or you can check if an event has been canceled by
                 * calling `canceled()`.
                 * @abstract
                 * @class AbstractEvent
                 * @module AbstractEvent
                 */
                var AbstractEvent = /** @class */ (function () {
                    /**
                     * AbstractEvent constructor.
                     * @constructs AbstractEvent
                     * @param {object} data - Event data
                     */
                    /**
                     * Event type
                     * @static
                     * @abstract
                     * @property type
                     * @type {String}
                     */
                    function AbstractEvent(data) {
                        this[canceled] = false;
                        this.data = data;
                    }
                    Object.defineProperty(AbstractEvent.prototype, "type", {
                        /**
                         * Read-only type
                         * @abstract
                         * @return {String}
                         */
                        /**
                         * Event cancelable
                         * @static
                         * @abstract
                         * @property cancelable
                         * @type {Boolean}
                         */
                        get: function () {
                            return this.constructor.type;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(AbstractEvent.prototype, "cancelable", {
                        /**
                         * Read-only cancelable
                         * @abstract
                         * @return {Boolean}
                         */
                        get: function () {
                            return this.constructor.cancelable;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    /**
                     * Cancels the event instance
                     * @abstract
                     */
                    AbstractEvent.prototype.cancel = function () {
                        this[canceled] = true;
                    };
                    /**
                     * Check if event has been canceled
                     * @abstract
                     * @return {Boolean}
                     */
                    AbstractEvent.prototype.canceled = function () {
                        return Boolean(this[canceled]);
                    };
                    /**
                     * Returns new event instance with existing event data.
                     * This method allows for overriding of event data.
                     * @param {Object} data
                     * @return {AbstractEvent}
                     */
                    AbstractEvent.prototype.clone = function (data) {
                        return new this.constructor(_extends({}, this.data, data));
                    };
                    return AbstractEvent;
                }());
                exports.default = AbstractEvent;
                AbstractEvent.type = 'event';
                AbstractEvent.cancelable = false;
                /***/ 
            }),
            /* 43 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.SortableStopEvent = exports.SortableSortedEvent = exports.SortableSortEvent = exports.SortableStartEvent = exports.SortableEvent = undefined;
                var _AbstractEvent = __webpack_require__(3);
                var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                /**
                 * Base sortable event
                 * @class SortableEvent
                 * @module SortableEvent
                 * @extends AbstractEvent
                 */
                var SortableEvent = /** @class */ (function (_super) {
                    __extends(SortableEvent, _super);
                    function SortableEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(SortableEvent.prototype, "dragEvent", {
                        /**
                         * Original drag event that triggered this sortable event
                         * @property dragEvent
                         * @type {DragEvent}
                         * @readonly
                         */
                        get: function () {
                            return this.data.dragEvent;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return SortableEvent;
                }(_AbstractEvent2.default));
                exports.SortableEvent = SortableEvent; /**
                                                        * Sortable start event
                                                        * @class SortableStartEvent
                                                        * @module SortableStartEvent
                                                        * @extends SortableEvent
                                                        */
                SortableEvent.type = 'sortable';
                var SortableStartEvent = /** @class */ (function (_super) {
                    __extends(SortableStartEvent, _super);
                    function SortableStartEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(SortableStartEvent.prototype, "startIndex", {
                        /**
                         * Start index of source on sortable start
                         * @property startIndex
                         * @type {Number}
                         * @readonly
                         */
                        get: function () {
                            return this.data.startIndex;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SortableStartEvent.prototype, "startContainer", {
                        /**
                         * Start container on sortable start
                         * @property startContainer
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.startContainer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return SortableStartEvent;
                }(SortableEvent));
                exports.SortableStartEvent = SortableStartEvent; /**
                                                                  * Sortable sort event
                                                                  * @class SortableSortEvent
                                                                  * @module SortableSortEvent
                                                                  * @extends SortableEvent
                                                                  */
                SortableStartEvent.type = 'sortable:start';
                SortableStartEvent.cancelable = true;
                var SortableSortEvent = /** @class */ (function (_super) {
                    __extends(SortableSortEvent, _super);
                    function SortableSortEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(SortableSortEvent.prototype, "currentIndex", {
                        /**
                         * Index of current draggable element
                         * @property currentIndex
                         * @type {Number}
                         * @readonly
                         */
                        get: function () {
                            return this.data.currentIndex;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SortableSortEvent.prototype, "over", {
                        /**
                         * Draggable element you are hovering over
                         * @property over
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.oldIndex;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SortableSortEvent.prototype, "overContainer", {
                        /**
                         * Draggable container element you are hovering over
                         * @property overContainer
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.newIndex;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return SortableSortEvent;
                }(SortableEvent));
                exports.SortableSortEvent = SortableSortEvent; /**
                                                                * Sortable sorted event
                                                                * @class SortableSortedEvent
                                                                * @module SortableSortedEvent
                                                                * @extends SortableEvent
                                                                */
                SortableSortEvent.type = 'sortable:sort';
                SortableSortEvent.cancelable = true;
                var SortableSortedEvent = /** @class */ (function (_super) {
                    __extends(SortableSortedEvent, _super);
                    function SortableSortedEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(SortableSortedEvent.prototype, "oldIndex", {
                        /**
                         * Index of last sorted event
                         * @property oldIndex
                         * @type {Number}
                         * @readonly
                         */
                        get: function () {
                            return this.data.oldIndex;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SortableSortedEvent.prototype, "newIndex", {
                        /**
                         * New index of this sorted event
                         * @property newIndex
                         * @type {Number}
                         * @readonly
                         */
                        get: function () {
                            return this.data.newIndex;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SortableSortedEvent.prototype, "oldContainer", {
                        /**
                         * Old container of draggable element
                         * @property oldContainer
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.oldContainer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SortableSortedEvent.prototype, "newContainer", {
                        /**
                         * New container of draggable element
                         * @property newContainer
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.newContainer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return SortableSortedEvent;
                }(SortableEvent));
                exports.SortableSortedEvent = SortableSortedEvent; /**
                                                                    * Sortable stop event
                                                                    * @class SortableStopEvent
                                                                    * @module SortableStopEvent
                                                                    * @extends SortableEvent
                                                                    */
                SortableSortedEvent.type = 'sortable:sorted';
                var SortableStopEvent = /** @class */ (function (_super) {
                    __extends(SortableStopEvent, _super);
                    function SortableStopEvent() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Object.defineProperty(SortableStopEvent.prototype, "oldIndex", {
                        /**
                         * Original index on sortable start
                         * @property oldIndex
                         * @type {Number}
                         * @readonly
                         */
                        get: function () {
                            return this.data.oldIndex;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SortableStopEvent.prototype, "newIndex", {
                        /**
                         * New index of draggable element
                         * @property newIndex
                         * @type {Number}
                         * @readonly
                         */
                        get: function () {
                            return this.data.newIndex;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SortableStopEvent.prototype, "oldContainer", {
                        /**
                         * Original container of draggable element
                         * @property oldContainer
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.oldContainer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SortableStopEvent.prototype, "newContainer", {
                        /**
                         * New container of draggable element
                         * @property newContainer
                         * @type {HTMLElement}
                         * @readonly
                         */
                        get: function () {
                            return this.data.newContainer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return SortableStopEvent;
                }(SortableEvent));
                exports.SortableStopEvent = SortableStopEvent;
                SortableStopEvent.type = 'sortable:stop';
                /***/ 
            }),
            /* 44 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _SortableEvent = __webpack_require__(9);
                Object.keys(_SortableEvent).forEach(function (key) {
                    if (key === "default" || key === "__esModule")
                        return;
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: function () {
                            return _SortableEvent[key];
                        }
                    });
                });
                var _Sortable = __webpack_require__(41);
                var _Sortable2 = _interopRequireDefault(_Sortable);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _Sortable2.default;
                /***/ 
            })
            /******/ 
        ]);
    });
});
var Sortable = unwrapExports(sortable);
var swapAnimation = createCommonjsModule(function (module, exports) {
    (function webpackUniversalModuleDefinition(root, factory) {
        module.exports = factory();
    })(window, function () {
        return /******/ (function (modules) {
            /******/ // The module cache
            /******/ var installedModules = {};
            /******/
            /******/ // The require function
            /******/ function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/ if (installedModules[moduleId]) {
                    /******/ return installedModules[moduleId].exports;
                    /******/ }
                /******/ // Create a new module (and put it into the cache)
                /******/ var module = installedModules[moduleId] = {
                    /******/ i: moduleId,
                    /******/ l: false,
                    /******/ exports: {}
                    /******/ 
                };
                /******/
                /******/ // Execute the module function
                /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/ module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/ return module.exports;
                /******/ 
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/ __webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/ __webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/ __webpack_require__.d = function (exports, name, getter) {
                /******/ if (!__webpack_require__.o(exports, name)) {
                    /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/ }
                /******/ 
            };
            /******/
            /******/ // define __esModule on exports
            /******/ __webpack_require__.r = function (exports) {
                /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/ }
                /******/ Object.defineProperty(exports, '__esModule', { value: true });
                /******/ 
            };
            /******/
            /******/ // create a fake namespace object
            /******/ // mode & 1: value is a module id, require it
            /******/ // mode & 2: merge all properties of value into the ns
            /******/ // mode & 4: return value when already ns object
            /******/ // mode & 8|1: behave like require
            /******/ __webpack_require__.t = function (value, mode) {
                /******/ if (mode & 1)
                    value = __webpack_require__(value);
                /******/ if (mode & 8)
                    return value;
                /******/ if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                    return value;
                /******/ var ns = Object.create(null);
                /******/ __webpack_require__.r(ns);
                /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                /******/ if (mode & 2 && typeof value != 'string')
                    for (var key in value)
                        __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
                /******/ return ns;
                /******/ 
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/ __webpack_require__.n = function (module) {
                /******/ var getter = module && module.__esModule ?
                    /******/ function getDefault() { return module['default']; } :
                    /******/ function getModuleExports() { return module; };
                /******/ __webpack_require__.d(getter, 'a', getter);
                /******/ return getter;
                /******/ 
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
            /******/
            /******/ // __webpack_public_path__
            /******/ __webpack_require__.p = "";
            /******/
            /******/
            /******/ // Load entry module and return exports
            /******/ return __webpack_require__(__webpack_require__.s = 3);
            /******/ 
        })([
            /* 0 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                /**
                 * All draggable plugins inherit from this class.
                 * @abstract
                 * @class AbstractPlugin
                 * @module AbstractPlugin
                 */
                var AbstractPlugin = /** @class */ (function () {
                    /**
                     * AbstractPlugin constructor.
                     * @constructs AbstractPlugin
                     * @param {Draggable} draggable - Draggable instance
                     */
                    function AbstractPlugin(draggable) {
                        /**
                         * Draggable instance
                         * @property draggable
                         * @type {Draggable}
                         */
                        this.draggable = draggable;
                    }
                    /**
                     * Override to add listeners
                     * @abstract
                     */
                    AbstractPlugin.prototype.attach = function () {
                        throw new Error('Not Implemented');
                    };
                    /**
                     * Override to remove listeners
                     * @abstract
                     */
                    AbstractPlugin.prototype.detach = function () {
                        throw new Error('Not Implemented');
                    };
                    return AbstractPlugin;
                }());
                exports.default = AbstractPlugin;
                /***/ 
            }),
            /* 1 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _AbstractPlugin = __webpack_require__(0);
                var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _AbstractPlugin2.default;
                /***/ 
            }),
            /* 2 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultOptions = undefined;
                var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                } return target; };
                var _AbstractPlugin = __webpack_require__(1);
                var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                var onSortableSorted = Symbol('onSortableSorted');
                /**
                 * SwapAnimation default options
                 * @property {Object} defaultOptions
                 * @property {Number} defaultOptions.duration
                 * @property {String} defaultOptions.easingFunction
                 * @property {Boolean} defaultOptions.horizontal
                 * @type {Object}
                 */
                var defaultOptions = exports.defaultOptions = {
                    duration: 150,
                    easingFunction: 'ease-in-out',
                    horizontal: false
                };
                /**
                 * SwapAnimation plugin adds swap animations for sortable
                 * @class SwapAnimation
                 * @module SwapAnimation
                 * @extends AbstractPlugin
                 */
                var SwapAnimation = /** @class */ (function (_super) {
                    __extends(SwapAnimation, _super);
                    /**
                     * SwapAnimation constructor.
                     * @constructs SwapAnimation
                     * @param {Draggable} draggable - Draggable instance
                     */
                    function SwapAnimation(draggable) {
                        var _this = _super.call(this, draggable) || this;
                        /**
                         * SwapAnimation options
                         * @property {Object} options
                         * @property {Number} defaultOptions.duration
                         * @property {String} defaultOptions.easingFunction
                         * @type {Object}
                         */
                        _this.options = _extends({}, defaultOptions, _this.getOptions());
                        /**
                         * Last animation frame
                         * @property {Number} lastAnimationFrame
                         * @type {Number}
                         */
                        _this.lastAnimationFrame = null;
                        _this[onSortableSorted] = _this[onSortableSorted].bind(_this);
                        return _this;
                    }
                    /**
                     * Attaches plugins event listeners
                     */
                    SwapAnimation.prototype.attach = function () {
                        this.draggable.on('sortable:sorted', this[onSortableSorted]);
                    };
                    /**
                     * Detaches plugins event listeners
                     */
                    SwapAnimation.prototype.detach = function () {
                        this.draggable.off('sortable:sorted', this[onSortableSorted]);
                    };
                    /**
                     * Returns options passed through draggable
                     * @return {Object}
                     */
                    SwapAnimation.prototype.getOptions = function () {
                        return this.draggable.options.swapAnimation || {};
                    };
                    /**
                     * Sortable sorted handler
                     * @param {SortableSortedEvent} sortableEvent
                     * @private
                     */
                    SwapAnimation.prototype[onSortableSorted] = function (_a) {
                        var _this = this;
                        var oldIndex = _a.oldIndex, newIndex = _a.newIndex, dragEvent = _a.dragEvent;
                        var source = dragEvent.source, over = dragEvent.over;
                        cancelAnimationFrame(this.lastAnimationFrame);
                        // Can be done in a separate frame
                        this.lastAnimationFrame = requestAnimationFrame(function () {
                            if (oldIndex >= newIndex) {
                                animate(source, over, _this.options);
                            }
                            else {
                                animate(over, source, _this.options);
                            }
                        });
                    };
                    return SwapAnimation;
                }(_AbstractPlugin2.default));
                exports.default = SwapAnimation; /**
                                                  * Animates two elements
                                                  * @param {HTMLElement} from
                                                  * @param {HTMLElement} to
                                                  * @param {Object} options
                                                  * @param {Number} options.duration
                                                  * @param {String} options.easingFunction
                                                  * @param {String} options.horizontal
                                                  * @private
                                                  */
                function animate(from, to, _a) {
                    var duration = _a.duration, easingFunction = _a.easingFunction, horizontal = _a.horizontal;
                    for (var _i = 0, _b = [from, to]; _i < _b.length; _i++) {
                        var element = _b[_i];
                        element.style.pointerEvents = 'none';
                    }
                    if (horizontal) {
                        var width = from.offsetWidth;
                        from.style.transform = "translate3d(" + width + "px, 0, 0)";
                        to.style.transform = "translate3d(-" + width + "px, 0, 0)";
                    }
                    else {
                        var height = from.offsetHeight;
                        from.style.transform = "translate3d(0, " + height + "px, 0)";
                        to.style.transform = "translate3d(0, -" + height + "px, 0)";
                    }
                    requestAnimationFrame(function () {
                        for (var _i = 0, _a = [from, to]; _i < _a.length; _i++) {
                            var element = _a[_i];
                            element.addEventListener('transitionend', resetElementOnTransitionEnd);
                            element.style.transition = "transform " + duration + "ms " + easingFunction;
                            element.style.transform = '';
                        }
                    });
                }
                /**
                 * Resets animation style properties after animation has completed
                 * @param {Event} event
                 * @private
                 */
                function resetElementOnTransitionEnd(event) {
                    event.target.style.transition = '';
                    event.target.style.pointerEvents = '';
                    event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
                }
                /***/ 
            }),
            /* 3 */
            /***/ (function (module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultOptions = undefined;
                var _SwapAnimation = __webpack_require__(2);
                var _SwapAnimation2 = _interopRequireDefault(_SwapAnimation);
                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
                exports.default = _SwapAnimation2.default;
                exports.defaultOptions = _SwapAnimation.defaultOptions;
                /***/ 
            })
            /******/ 
        ]);
    });
});
var SwapAnimation = unwrapExports(swapAnimation);
var Grid = /** @class */ (function () {
    function Grid(hostRef) {
        registerInstance(this, hostRef);
        this.cols = "auto";
        this.compact = false;
        this.padding = false;
        this.align = "items-start";
        this.responsive = true;
        this.swappable = false;
        this.swappableSelector = "stellar-card";
        this.orderChanged = createEvent(this, "orderChanged", 7);
    }
    Grid.prototype.makeResponsive = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.responsive && this.responsive !== "false") {
                    eqjs.definePts(this.element, {
                        "tiny": 320,
                        "small": 480,
                        "medium": 640,
                        "large": 800,
                        "massive": 1024
                    });
                    this.refresh();
                }
                return [2 /*return*/];
            });
        });
    };
    Grid.prototype.makeSwappable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.swappable) {
                    this.__swappable = new Sortable(this.element.querySelectorAll('.grid'), {
                        draggable: this.swappableSelector,
                        delay: 350,
                        swapAnimation: {
                            duration: 200,
                            easingFunction: 'ease-in-out',
                            horizontal: true,
                            vertical: true
                        },
                        plugins: [SwapAnimation]
                    });
                    this.__swappable.on('swappable:start', function () { _this.refresh(); });
                    this.__swappable.on('swappable:stop', function () { _this.updateOrder(); });
                }
                return [2 /*return*/];
            });
        });
    };
    Grid.prototype.updateOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elements, order;
            return __generator(this, function (_a) {
                elements = this.element.querySelectorAll(this.swappableSelector);
                order = [];
                Array.from(elements).forEach(function (element) {
                    order.push(element.id);
                });
                this.order = order;
                this.orderChanged.emit(this.order);
                return [2 /*return*/];
            });
        });
    };
    Grid.prototype.componentWillLoad = function () {
        this.makeResponsive();
        this.makeSwappable();
    };
    Grid.prototype.componentDidLoad = function () {
        this.makeResponsive();
        this.makeSwappable();
    };
    Grid.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resizeEvent;
            return __generator(this, function (_a) {
                resizeEvent = window.document.createEvent('UIEvents');
                resizeEvent.initUIEvent('resize', true, false, window, 0);
                window.dispatchEvent(resizeEvent);
                return [2 /*return*/];
            });
        });
    };
    Grid.prototype.render = function () {
        return h("div", { class: "grid " + this.align }, h("slot", null));
    };
    Object.defineProperty(Grid.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid, "style", {
        get: function () { return "stellar-grid,stellar-grid *,stellar-grid :after,stellar-grid :before{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-grid{display:block;--grid-width:200px;--grid-gap:2rem}stellar-grid .grid{position:relative;display:-ms-flexbox;display:flex;display:grid;-ms-flex-wrap:wrap;flex-wrap:wrap;grid-gap:var(--grid-gap);grid-template-columns:repeat(auto-fit,minmax(var(--grid-width),1fr))}stellar-grid[padding] .grid{padding:var(--grid-gap)}stellar-grid[responsive=false] .grid{grid-template-columns:repeat(auto-fit,minmax(var(--grid-width),1fr))}stellar-grid[responsive=false][cols=\"1\"] .grid{grid-template-columns:1fr}stellar-grid[responsive=false][cols=\"2\"] .grid{grid-template-columns:repeat(2,1fr)}stellar-grid[responsive=false][cols=\"3\"] .grid{grid-template-columns:repeat(3,1fr)}stellar-grid[responsive=false][cols=\"4\"] .grid{grid-template-columns:repeat(4,1fr)}stellar-grid[responsive=false][cols=\"5\"] .grid{grid-template-columns:repeat(5,1fr)}stellar-grid[responsive=false][cols=\"6\"] .grid{grid-template-columns:repeat(6,1fr)}stellar-grid .grid .size-2{grid-column:auto/span 2}stellar-grid .grid .size-3{grid-column:auto/span 3}stellar-grid .grid .size-4{grid-column:auto/span 4}stellar-grid .grid .size-5{grid-column:auto/span 5}stellar-grid .grid .size-6{grid-column:auto/span 6}stellar-grid .grid .height-2{grid-row:auto/span 2}stellar-grid .grid .height-3{grid-row:auto/span 3}stellar-grid .grid .height-4{grid-row:auto/span 4}stellar-grid .grid .height-5{grid-row:auto/span 5}stellar-grid .grid .height-6{grid-row:auto/span 6}stellar-grid .sortableCards-move{-webkit-transition:-webkit-transform .5s cubic-bezier(.22,.61,.36,1);transition:-webkit-transform .5s cubic-bezier(.22,.61,.36,1);transition:transform .5s cubic-bezier(.22,.61,.36,1);transition:transform .5s cubic-bezier(.22,.61,.36,1),-webkit-transform .5s cubic-bezier(.22,.61,.36,1);background-color:red}stellar-grid .sortableCards-enter,stellar-grid .sortableCards-leave-to{-webkit-transition:5s;transition:5s;opacity:0}stellar-grid .draggable-source--is-dragging{opacity:.6;-webkit-transform:scale(1.2);transform:scale(1.2)}stellar-grid .draggable-container--over{-webkit-animation:draggablePulseBg 1.5s cubic-bezier(.22,.61,.36,1) infinite;animation:draggablePulseBg 1.5s cubic-bezier(.22,.61,.36,1) infinite}stellar-grid .draggable-mirror{display:none}stellar-grid .draggable-source--placed{-webkit-animation:placedItem .5s cubic-bezier(.22,.61,.36,1);animation:placedItem .5s cubic-bezier(.22,.61,.36,1)}stellar-grid .sortableCards-enter-active,stellar-grid .sortableCards-leave-to{opacity:0}stellar-grid .sortableCards-leave-active{position:absolute}\@-webkit-keyframes draggablePulseBg{0%{background-color:transparent;outline:.1rem solid transparent}35%{background-color:rgba(0,0,0,.05);outline:.1rem solid rgba(0,0,0,.1)}to{background-color:transparent;outline:.1rem solid transparent}}\@keyframes draggablePulseBg{0%{background-color:transparent;outline:.1rem solid transparent}35%{background-color:rgba(0,0,0,.05);outline:.1rem solid rgba(0,0,0,.1)}to{background-color:transparent;outline:.1rem solid transparent}}\@-webkit-keyframes placedItem{0%{-webkit-transform:scale(1.065);transform:scale(1.065);-webkit-box-shadow:0 .25rem 2rem rgba(0,0,0,.25),0 .1rem .5rem rgba(0,0,0,.15);box-shadow:0 .25rem 2rem rgba(0,0,0,.25),0 .1rem .5rem rgba(0,0,0,.15)}to{-webkit-transform:scale(1);transform:scale(1);-webkit-box-shadow:0 .4rem 3rem rgba(0,0,0,.35),0 .1rem .5rem rgba(0,0,0,.2);box-shadow:0 .4rem 3rem rgba(0,0,0,.35),0 .1rem .5rem rgba(0,0,0,.2)}}\@keyframes placedItem{0%{-webkit-transform:scale(1.065);transform:scale(1.065);-webkit-box-shadow:0 .25rem 2rem rgba(0,0,0,.25),0 .1rem .5rem rgba(0,0,0,.15);box-shadow:0 .25rem 2rem rgba(0,0,0,.25),0 .1rem .5rem rgba(0,0,0,.15)}to{-webkit-transform:scale(1);transform:scale(1);-webkit-box-shadow:0 .4rem 3rem rgba(0,0,0,.35),0 .1rem .5rem rgba(0,0,0,.2);box-shadow:0 .4rem 3rem rgba(0,0,0,.35),0 .1rem .5rem rgba(0,0,0,.2)}}"; },
        enumerable: true,
        configurable: true
    });
    return Grid;
}());
export { Grid as stellar_grid };
