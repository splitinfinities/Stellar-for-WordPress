import { r as registerInstance } from './index-cc4604b3.js';
import { a as commonjsGlobal } from './_commonjsHelpers-bccf23a2.js';

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to determine if values are of the language type Object */
var objectTypes = {
  'boolean': false,
  'function': true,
  'object': true,
  'number': false,
  'string': false,
  'undefined': false
};

var lodash__objecttypes = objectTypes;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Checks if `value` is the language type of Object.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // check if the value is the ECMAScript language type of Object
  // http://es5.github.io/#x8
  // and avoid a V8 bug
  // http://code.google.com/p/v8/issues/detail?id=2291
  return !!(value && lodash__objecttypes[typeof value]);
}

var lodash_isobject = isObject;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal [[Class]] of values */
var toString = objectProto.toString;

/** Used to detect if a method is native */
var reNative = RegExp('^' +
  String(toString)
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/toString| for [^\]]+/g, '.*?') + '$'
);

var lodash__renative = reNative;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/** Used for native method references */
var objectProto$1 = Object.prototype;

/** Native method shortcuts */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * A fallback implementation of `Object.keys` which produces an array of the
 * given object's own enumerable property names.
 *
 * @private
 * @type Function
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns an array of property names.
 */
var shimKeys = function(object) {
  var index, iterable = object, result = [];
  if (!iterable) return result;
  if (!(lodash__objecttypes[typeof object])) return result;
    for (index in iterable) {
      if (hasOwnProperty.call(iterable, index)) {
        result.push(index);
      }
    }
  return result
};

var lodash__shimkeys = shimKeys;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeKeys = lodash__renative.test(nativeKeys = Object.keys) && nativeKeys;

/**
 * Creates an array composed of the own enumerable property names of an object.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns an array of property names.
 * @example
 *
 * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
 * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
 */
var keys = !nativeKeys ? lodash__shimkeys : function(object) {
  if (!lodash_isobject(object)) {
    return [];
  }
  return nativeKeys(object);
};

var lodash_keys = keys;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * A no-operation function.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @example
 *
 * var object = { 'name': 'fred' };
 * _.noop(object) === undefined;
 * // => true
 */
function noop() {
  // no operation performed
}

var lodash_noop = noop;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeCreate = lodash__renative.test(nativeCreate = Object.create) && nativeCreate;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(prototype, properties) {
  return lodash_isobject(prototype) ? nativeCreate(prototype) : {};
}
// fallback for browsers without `Object.create`
if (!nativeCreate) {
  baseCreate = (function() {
    function Object() {}
    return function(prototype) {
      if (lodash_isobject(prototype)) {
        Object.prototype = prototype;
        var result = new Object;
        Object.prototype = null;
      }
      return result || commonjsGlobal.Object();
    };
  }());
}

var lodash__basecreate = baseCreate;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/** Used as the property descriptor for `__bindData__` */
var descriptor = {
  'configurable': false,
  'enumerable': false,
  'value': null,
  'writable': false
};

/** Used to set meta data on functions */
var defineProperty = (function() {
  // IE 8 only accepts DOM elements
  try {
    var o = {},
        func = lodash__renative.test(func = Object.defineProperty) && func,
        result = func(o, o, o) && func;
  } catch(e) { }
  return result;
}());

/**
 * Sets `this` binding data on a given function.
 *
 * @private
 * @param {Function} func The function to set data on.
 * @param {Array} value The data array to set.
 */
var setBindData = !defineProperty ? lodash_noop : function(func, value) {
  descriptor.value = value;
  defineProperty(func, '__bindData__', descriptor);
};

var lodash__setbinddata = setBindData;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Native method shortcuts */
var push = arrayRef.push;

/**
 * The base implementation of `_.bind` that creates the bound function and
 * sets its meta data.
 *
 * @private
 * @param {Array} bindData The bind data array.
 * @returns {Function} Returns the new bound function.
 */
function baseBind(bindData) {
  var func = bindData[0],
      partialArgs = bindData[2],
      thisArg = bindData[4];

  function bound() {
    // `Function#bind` spec
    // http://es5.github.io/#x15.3.4.5
    if (partialArgs) {
      var args = partialArgs.slice();
      push.apply(args, arguments);
    }
    // mimic the constructor's `return` behavior
    // http://es5.github.io/#x13.2.2
    if (this instanceof bound) {
      // ensure `new bound` is an instance of `func`
      var thisBinding = lodash__basecreate(func.prototype),
          result = func.apply(thisBinding, args || arguments);
      return lodash_isobject(result) ? result : thisBinding;
    }
    return func.apply(thisArg, args || arguments);
  }
  lodash__setbinddata(bound, bindData);
  return bound;
}

var lodash__basebind = baseBind;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Slices the `collection` from the `start` index up to, but not including,
 * the `end` index.
 *
 * Note: This function is used instead of `Array#slice` to support node lists
 * in IE < 9 and to ensure dense arrays are returned.
 *
 * @private
 * @param {Array|Object|string} collection The collection to slice.
 * @param {number} start The start index.
 * @param {number} end The end index.
 * @returns {Array} Returns the new array.
 */
function slice(array, start, end) {
  start || (start = 0);
  if (typeof end == 'undefined') {
    end = array ? array.length : 0;
  }
  var index = -1,
      length = end - start || 0,
      result = Array(length < 0 ? 0 : length);

  while (++index < length) {
    result[index] = array[start + index];
  }
  return result;
}

var lodash__slice = slice;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef$1 = [];

/** Native method shortcuts */
var push$1 = arrayRef$1.push;

/**
 * The base implementation of `createWrapper` that creates the wrapper and
 * sets its meta data.
 *
 * @private
 * @param {Array} bindData The bind data array.
 * @returns {Function} Returns the new function.
 */
function baseCreateWrapper(bindData) {
  var func = bindData[0],
      bitmask = bindData[1],
      partialArgs = bindData[2],
      partialRightArgs = bindData[3],
      thisArg = bindData[4],
      arity = bindData[5];

  var isBind = bitmask & 1,
      isBindKey = bitmask & 2,
      isCurry = bitmask & 4,
      isCurryBound = bitmask & 8,
      key = func;

  function bound() {
    var thisBinding = isBind ? thisArg : this;
    if (partialArgs) {
      var args = partialArgs.slice();
      push$1.apply(args, arguments);
    }
    if (partialRightArgs || isCurry) {
      args || (args = lodash__slice(arguments));
      if (partialRightArgs) {
        push$1.apply(args, partialRightArgs);
      }
      if (isCurry && args.length < arity) {
        bitmask |= 16 & ~32;
        return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
      }
    }
    args || (args = arguments);
    if (isBindKey) {
      func = thisBinding[key];
    }
    if (this instanceof bound) {
      thisBinding = lodash__basecreate(func.prototype);
      var result = func.apply(thisBinding, args);
      return lodash_isobject(result) ? result : thisBinding;
    }
    return func.apply(thisBinding, args);
  }
  lodash__setbinddata(bound, bindData);
  return bound;
}

var lodash__basecreatewrapper = baseCreateWrapper;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Checks if `value` is a function.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 */
function isFunction(value) {
  return typeof value == 'function';
}

var lodash_isfunction = isFunction;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef$2 = [];

/** Native method shortcuts */
var push$2 = arrayRef$2.push;

/**
 * Creates a function that, when called, either curries or invokes `func`
 * with an optional `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to reference.
 * @param {number} bitmask The bitmask of method flags to compose.
 *  The bitmask may be composed of the following flags:
 *  1 - `_.bind`
 *  2 - `_.bindKey`
 *  4 - `_.curry`
 *  8 - `_.curry` (bound)
 *  16 - `_.partial`
 *  32 - `_.partialRight`
 * @param {Array} [partialArgs] An array of arguments to prepend to those
 *  provided to the new function.
 * @param {Array} [partialRightArgs] An array of arguments to append to those
 *  provided to the new function.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new function.
 */
function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
  var isBind = bitmask & 1,
      isBindKey = bitmask & 2,
      isCurry = bitmask & 4,
      isCurryBound = bitmask & 8,
      isPartial = bitmask & 16,
      isPartialRight = bitmask & 32;

  if (!isBindKey && !lodash_isfunction(func)) {
    throw new TypeError;
  }
  if (isPartial && !partialArgs.length) {
    bitmask &= ~16;
    isPartial = partialArgs = false;
  }
  if (isPartialRight && !partialRightArgs.length) {
    bitmask &= ~32;
    isPartialRight = partialRightArgs = false;
  }
  var bindData = func && func.__bindData__;
  if (bindData && bindData !== true) {
    bindData = bindData.slice();

    // set `thisBinding` is not previously bound
    if (isBind && !(bindData[1] & 1)) {
      bindData[4] = thisArg;
    }
    // set if previously bound but not currently (subsequent curried functions)
    if (!isBind && bindData[1] & 1) {
      bitmask |= 8;
    }
    // set curried arity if not yet set
    if (isCurry && !(bindData[1] & 4)) {
      bindData[5] = arity;
    }
    // append partial left arguments
    if (isPartial) {
      push$2.apply(bindData[2] || (bindData[2] = []), partialArgs);
    }
    // append partial right arguments
    if (isPartialRight) {
      push$2.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
    }
    // merge flags
    bindData[1] |= bitmask;
    return createWrapper.apply(null, bindData);
  }
  // fast path for `_.bind`
  var creater = (bitmask == 1 || bitmask === 17) ? lodash__basebind : lodash__basecreatewrapper;
  return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
}

var lodash__createwrapper = createWrapper;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Creates a function that, when called, invokes `func` with the `this`
 * binding of `thisArg` and prepends any additional `bind` arguments to those
 * provided to the bound function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to bind.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {...*} [arg] Arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var func = function(greeting) {
 *   return greeting + ' ' + this.name;
 * };
 *
 * func = _.bind(func, { 'name': 'fred' }, 'hi');
 * func();
 * // => 'hi fred'
 */
function bind(func, thisArg) {
  return arguments.length > 2
    ? lodash__createwrapper(func, 17, lodash__slice(arguments, 2), null, thisArg)
    : lodash__createwrapper(func, 1, null, null, thisArg);
}

var lodash_bind = bind;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'name': 'fred' };
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

var lodash_identity = identity;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/** Used to detect functions containing a `this` reference */
var reThis = /\bthis\b/;

/**
 * An object used to flag environments features.
 *
 * @static
 * @memberOf _
 * @type Object
 */
var support = {};

/**
 * Detect if functions can be decompiled by `Function#toString`
 * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
 *
 * @memberOf _.support
 * @type boolean
 */
support.funcDecomp = !lodash__renative.test(commonjsGlobal.WinRTError) && reThis.test(function() { return this; });

/**
 * Detect if `Function#name` is supported (all but IE).
 *
 * @memberOf _.support
 * @type boolean
 */
support.funcNames = typeof Function.name == 'string';

var lodash_support = support;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/** Used to detected named functions */
var reFuncName = /^\s*function[ \n\r\t]+\w/;

/** Used to detect functions containing a `this` reference */
var reThis$1 = /\bthis\b/;

/** Native method shortcuts */
var fnToString = Function.prototype.toString;

/**
 * The base implementation of `_.createCallback` without support for creating
 * "_.pluck" or "_.where" style callbacks.
 *
 * @private
 * @param {*} [func=identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of the created callback.
 * @param {number} [argCount] The number of arguments the callback accepts.
 * @returns {Function} Returns a callback function.
 */
function baseCreateCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return lodash_identity;
  }
  // exit early for no `thisArg` or already bound by `Function#bind`
  if (typeof thisArg == 'undefined' || !('prototype' in func)) {
    return func;
  }
  var bindData = func.__bindData__;
  if (typeof bindData == 'undefined') {
    if (lodash_support.funcNames) {
      bindData = !func.name;
    }
    bindData = bindData || !lodash_support.funcDecomp;
    if (!bindData) {
      var source = fnToString.call(func);
      if (!lodash_support.funcNames) {
        bindData = !reFuncName.test(source);
      }
      if (!bindData) {
        // checks if `func` references the `this` keyword and stores the result
        bindData = reThis$1.test(source);
        lodash__setbinddata(func, bindData);
      }
    }
  }
  // exit early if there are no `this` references or `func` is bound
  if (bindData === false || (bindData !== true && bindData[1] & 1)) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 2: return function(a, b) {
      return func.call(thisArg, a, b);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
  }
  return lodash_bind(func, thisArg);
}

var lodash__basecreatecallback = baseCreateCallback;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Iterates over own enumerable properties of an object, executing the callback
 * for each property. The callback is bound to `thisArg` and invoked with three
 * arguments; (value, key, object). Callbacks may exit iteration early by
 * explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Objects
 * @param {Object} object The object to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
 *   console.log(key);
 * });
 * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
 */
var forOwn = function(collection, callback, thisArg) {
  var index, iterable = collection, result = iterable;
  if (!iterable) return result;
  if (!lodash__objecttypes[typeof iterable]) return result;
  callback = callback && typeof thisArg == 'undefined' ? callback : lodash__basecreatecallback(callback, thisArg, 3);
    var ownIndex = -1,
        ownProps = lodash__objecttypes[typeof iterable] && lodash_keys(iterable),
        length = ownProps ? ownProps.length : 0;

    while (++ownIndex < length) {
      index = ownProps[ownIndex];
      if (callback(iterable[index], index, collection) === false) return result;
    }
  return result
};

var lodash_forown = forOwn;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Iterates over elements of a collection, executing the callback for each
 * element. The callback is bound to `thisArg` and invoked with three arguments;
 * (value, index|key, collection). Callbacks may exit iteration early by
 * explicitly returning `false`.
 *
 * Note: As with other "Collections" methods, objects with a `length` property
 * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
 * may be used for object iteration.
 *
 * @static
 * @memberOf _
 * @alias each
 * @category Collections
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Array|Object|string} Returns `collection`.
 * @example
 *
 * _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
 * // => logs each number and returns '1,2,3'
 *
 * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });
 * // => logs each number and returns the object (property order is not guaranteed across environments)
 */
function forEach(collection, callback, thisArg) {
  var index = -1,
      length = collection ? collection.length : 0;

  callback = callback && typeof thisArg == 'undefined' ? callback : lodash__basecreatecallback(callback, thisArg, 3);
  if (typeof length == 'number') {
    while (++index < length) {
      if (callback(collection[index], index, collection) === false) {
        break;
      }
    }
  } else {
    lodash_forown(collection, callback);
  }
  return collection;
}

var lodash_foreach = forEach;

var metric,
imperial;

metric = {
  mm: {
    name: {
      singular: 'Millimeter',
      plural: 'Millimeters'
    },
    to_anchor: 1/1000
  },
  cm: {
    name: {
      singular: 'Centimeter',
      plural: 'Centimeters'
    },
    to_anchor: 1/100
  },
  m: {
    name: {
      singular: 'Meter',
      plural: 'Meters'
    },
    to_anchor: 1
  },
  km: {
    name: {
      singular: 'Kilometer',
      plural: 'Kilometers'
    },
    to_anchor: 1000
  }
};

imperial = {
  'in': {
    name: {
      singular: 'Inch',
      plural: 'Inches'
    },
    to_anchor: 1/12
  },
  yd: {
    name: {
      singular: 'Yard',
      plural: 'Yards'
    },
    to_anchor: 3
  },
  'ft-us': {
    name: {
      singular: 'US Survey Foot',
      plural: 'US Survey Feet'
    },
    to_anchor: 1.000002
  },
  ft: {
    name: {
      singular: 'Foot',
      plural: 'Feet'
    },
    to_anchor: 1
  },
  mi: {
    name: {
      singular: 'Mile',
      plural: 'Miles'
    },
    to_anchor: 5280
  }
};

var length = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'm',
      ratio: 3.28084
    },
    imperial: {
      unit: 'ft',
      ratio: 1/3.28084
    }
  }
};
var length_1 = length.metric;
var length_2 = length.imperial;
var length_3 = length._anchors;

var metric$1
  , imperial$1;

metric$1 = {
  mm2: {
    name: {
      singular: 'Square Millimeter'
    , plural: 'Square Millimeters'
    }
  , to_anchor: 1/1000000
  }
, cm2: {
    name: {
      singular: 'Centimeter'
    , plural: 'Centimeters'
    }
  , to_anchor: 1/10000
  }
, m2: {
    name: {
      singular: 'Square Meter'
    , plural: 'Square Meters'
    }
  , to_anchor: 1
  }
, ha: {
    name: {
      singular: 'Hectare'
    , plural: 'Hectares'
    }
  , to_anchor: 10000
  }
, km2: {
    name: {
      singular: 'Square Kilometer'
    , plural: 'Square Kilometers'
    }
  , to_anchor: 1000000
  }
};

imperial$1 = {
  'in2': {
    name: {
      singular: 'Square Inch'
    , plural: 'Square Inches'
    }
  , to_anchor: 1/144
  }
, yd2: {
    name: {
      singular: 'Square Yard'
    , plural: 'Square Yards'  
    }
  , to_anchor: 9
  }
, ft2: {
    name: {
      singular: 'Square Foot'
    , plural: 'Square Feet'
    }
  , to_anchor: 1
  }
, ac: {
    name: {
      singular: 'Acre'
    , plural: 'Acres'
    }
  , to_anchor: 43560
  }
, mi2: {
    name: {
      singular: 'Square Mile'
    , plural: 'Square Miles'
    }
  , to_anchor: 27878400
  }
};

var area = {
  metric: metric$1
, imperial: imperial$1
, _anchors: {
    metric: {
      unit: 'm2'
    , ratio: 10.7639
    }
  , imperial: {
      unit: 'ft2'
    , ratio: 1/10.7639
    }
  }
};
var area_1 = area.metric;
var area_2 = area.imperial;
var area_3 = area._anchors;

var metric$2
  , imperial$2;

metric$2 = {
  mcg: {
    name: {
      singular: 'Microgram'
    , plural: 'Micrograms'
    }
  , to_anchor: 1/1000000
  }
, mg: {
    name: {
      singular: 'Milligram'
    , plural: 'Milligrams'
    }
  , to_anchor: 1/1000
  }
, g: {
    name: {
      singular: 'Gram'
    , plural: 'Grams'
    }
  , to_anchor: 1
  }
, kg: {
    name: {
      singular: 'Kilogram'
    , plural: 'Kilograms'
    }
  , to_anchor: 1000
}
, mt: {
    name: {
      singular: 'Metric Tonne'
    , plural: 'Metric Tonnes'
    }
  , to_anchor: 1000000
  }
};

imperial$2 = {
  oz: {
    name: {
      singular: 'Ounce'
    , plural: 'Ounces'
    }
  , to_anchor: 1/16
  }
, lb: {
    name: {
      singular: 'Pound'
    , plural: 'Pounds'
    }
  , to_anchor: 1
}, t: {
  name: {
    singular: 'Ton',
    plural: 'Tons',
  },
    to_anchor: 2000,
  },
};

var mass = {
  metric: metric$2
, imperial: imperial$2
, _anchors: {
    metric: {
      unit: 'g'
    , ratio: 1/453.592
    }
  , imperial: {
      unit: 'lb'
    , ratio: 453.592
    }
  }
};
var mass_1 = mass.metric;
var mass_2 = mass.imperial;
var mass_3 = mass._anchors;

var metric$3
  , imperial$3;

metric$3 = {
  mm3: {
      name: {
        singular: 'Cubic Millimeter'
      , plural: 'Cubic Millimeters'
      }
    , to_anchor: 1/1000000
  }
, cm3: {
    name: {
      singular: 'Cubic Centimeter'
    , plural: 'Cubic Centimeters'
    }
  , to_anchor: 1/1000
  }
, ml: {
    name: {
      singular: 'Millilitre'
    , plural: 'Millilitres'
    }
  , to_anchor: 1/1000
  }
, cl: {
    name: {
      singular: 'Centilitre'
    , plural: 'Centilitres'
    }
  , to_anchor: 1/100
  }
, dl: {
    name: {
      singular: 'Decilitre'
    , plural: 'Decilitres'
    }
  , to_anchor: 1/10
  }
, l: {
    name: {
      singular: 'Litre'
    , plural: 'Litres'
    }
  , to_anchor: 1
  }
, kl: {
    name: {
      singular: 'Kilolitre'
    , plural: 'Kilolitres'
    }
  , to_anchor: 1000
  }
, m3: {
    name: {
      singular: 'Cubic meter'
    , plural: 'Cubic meters'
    }
  , to_anchor: 1000
  }
, km3: {
    name: {
      singular: 'Cubic kilometer'
    , plural: 'Cubic kilometers'
    }
  , to_anchor: 1000000000000
  }

// Swedish units
, krm: {
  name: {
    singular: 'Matsked'
    , plural: 'Matskedar'
  }
  , to_anchor: 1/1000
}
, tsk: {
    name: {
      singular: 'Tesked'
    , plural: 'Teskedar'
    }
  , to_anchor: 5/1000
  }
, msk: {
    name: {
      singular: 'Matsked'
      , plural: 'Matskedar'
    }
    , to_anchor: 15/1000
  }
, kkp: {
    name: {
      singular: 'Kaffekopp'
      , plural: 'Kaffekoppar'
    }
    , to_anchor: 150/1000
  }
, glas: {
    name: {
      singular: 'Glas'
      , plural: 'Glas'
    }
    , to_anchor: 200/1000
  }
, kanna: {
    name: {
      singular: 'Kanna'
    , plural: 'Kannor'
    }
  , to_anchor: 2.617
  }
};

imperial$3 = {
  tsp: {
    name: {
      singular: 'Teaspoon'
    , plural: 'Teaspoons'
    }
  , to_anchor: 1/6
  }
, Tbs: {
    name: {
      singular: 'Tablespoon'
    , plural: 'Tablespoons'
    }
  , to_anchor: 1/2
  }
, in3: {
    name: {
      singular: 'Cubic inch'
    , plural: 'Cubic inches'
    }
  , to_anchor: 0.55411
  }
, 'fl-oz': {
    name: {
      singular: 'Fluid Ounce'
    , plural: 'Fluid Ounces'
    }
  , to_anchor: 1
  }
, cup: {
    name: {
      singular: 'Cup'
    , plural: 'Cups'
    }
  , to_anchor: 8
  }
, pnt: {
    name: {
      singular: 'Pint'
    , plural: 'Pints'
    }
  , to_anchor: 16
  }
, qt: {
    name: {
      singular: 'Quart'
    , plural: 'Quarts'
    }
  , to_anchor: 32
  }
, gal: {
    name: {
      singular: 'Gallon'
    , plural: 'Gallons'
    }
  , to_anchor: 128
  }
, ft3: {
    name: {
      singular: 'Cubic foot'
    , plural: 'Cubic feet'
    }
  , to_anchor: 957.506
  }
, yd3: {
    name: {
      singular: 'Cubic yard'
    , plural: 'Cubic yards'
    }
  , to_anchor: 25852.7
  }
};

var volume = {
  metric: metric$3
, imperial: imperial$3
, _anchors: {
    metric: {
      unit: 'l'
    , ratio: 33.8140226
    }
  , imperial: {
      unit: 'fl-oz'
    , ratio: 1/33.8140226
    }
  }
};
var volume_1 = volume.metric;
var volume_2 = volume.imperial;
var volume_3 = volume._anchors;

var metric$4
  , imperial$4;

metric$4 = {
  ea: {
    name: {
      singular: 'Each'
    , plural: 'Each'
    }
  , to_anchor: 1
  },
  dz: {
    name: {
      singular: 'Dozen'
    , plural: 'Dozens'
    }
  , to_anchor: 12
  }
};

var each = {
  metric: metric$4
, imperial: {}
, _anchors: {
    metric: {
      unit: 'ea'
    , ratio: 1
    }
  }
};
var each_1 = each.metric;
var each_2 = each.imperial;
var each_3 = each._anchors;

var metric$5
  , imperial$5;

metric$5 = {
  C: {
    name: {
      singular: 'degree Celsius'
    , plural: 'degrees Celsius'
    }
  , to_anchor: 1
  , anchor_shift: 0
  },
  K: {
    name: {
      singular: 'degree Kelvin'
    , plural: 'degrees Kelvin'
    }
  , to_anchor: 1
  , anchor_shift: 273.15
  }
};

imperial$5 = {
  F: {
    name: {
      singular: 'degree Fahrenheit'
    , plural: 'degrees Fahrenheit'
    }
  , to_anchor: 1
  },
  R: {
    name: {
      singular: 'degree Rankine'
    , plural: 'degrees Rankine'
    }
  , to_anchor: 1
  , anchor_shift: 459.67
  }
};

var temperature = {
  metric: metric$5
, imperial: imperial$5
, _anchors: {
    metric: {
      unit: 'C'
    , transform: function (C) { return C / (5/9) + 32 }
    }
  , imperial: {
      unit: 'F'
    , transform: function (F) { return (F - 32) * (5/9) }
    }
  }
};
var temperature_1 = temperature.metric;
var temperature_2 = temperature.imperial;
var temperature_3 = temperature._anchors;

var time;
var daysInYear = 365.25;

time = {
  ns: {
    name: {
      singular: 'Nanosecond'
    , plural: 'Nanoseconds'
    }
  , to_anchor: 1/1000000000
  }
, mu: {
    name: {
      singular: 'Microsecond'
    , plural: 'Microseconds'
    }
  , to_anchor: 1/1000000
  }
, ms: {
    name: {
      singular: 'Millisecond'
    , plural: 'Milliseconds'
    }
  , to_anchor: 1/1000
  }
, s: {
    name: {
      singular: 'Second'
    , plural: 'Seconds'
    }
  , to_anchor: 1
  }
, min: {
    name: {
      singular: 'Minute'
    , plural: 'Minutes'
    }
  , to_anchor: 60
  }
, h: {
    name: {
      singular: 'Hour'
    , plural: 'Hours'
    }
  , to_anchor: 60 * 60 
  }
, d: {
    name: {
      singular: 'Day'
    , plural: 'Days'
    }
  , to_anchor: 60 * 60 * 24
  }
, week: {
    name: {
      singular: 'Week'
    , plural: 'Weeks'
    }
  , to_anchor: 60 * 60 * 24 * 7
  }
, month: {
    name: {
      singular: 'Month'
    , plural: 'Months'
    }
  , to_anchor: 60 * 60 * 24 * daysInYear / 12
  }
, year: {
    name: {
      singular: 'Year'
    , plural: 'Years'
    }
  , to_anchor: 60 * 60 * 24 * daysInYear
  }
};


var time_1 = {
  metric: time 
, _anchors: {
    metric: {
      unit: 's'
    , ratio: 1
    }
  }
};
var time_2 = time_1.metric;
var time_3 = time_1._anchors;

var bits
  , bytes;

bits = {
  b: {
    name: {
      singular: 'Bit'
    , plural: 'Bits'
    }
  , to_anchor: 1
  }
, Kb: {
    name: {
      singular: 'Kilobit'
    , plural: 'Kilobits'
    }
  , to_anchor: 1024
  }
, Mb: {
    name: {
      singular: 'Megabit'
    , plural: 'Megabits'
    }
  , to_anchor: 1048576
  }
, Gb: {
    name: {
      singular: 'Gigabit'
    , plural: 'Gigabits'
    }
  , to_anchor: 1073741824
  }
, Tb: {
    name: {
      singular: 'Terabit'
    , plural: 'Terabits'
    }
  , to_anchor: 1099511627776
  }
};

bytes = {
  B: {
    name: {
      singular: 'Byte'
    , plural: 'Bytes'
    }
  , to_anchor: 1
  }
, KB: {
    name: {
      singular: 'Kilobyte'
    , plural: 'Kilobytes'
    }
  , to_anchor: 1024
  }
, MB: {
    name: {
      singular: 'Megabyte'
    , plural: 'Megabytes'
    }
  , to_anchor: 1048576
  }
, GB: {
    name: {
      singular: 'Gigabyte'
    , plural: 'Gigabytes'
    }
  , to_anchor: 1073741824
  }
, TB: {
    name: {
      singular: 'Terabyte'
    , plural: 'Terabytes'
    }
  , to_anchor: 1099511627776
  }
};

var digital = {
  bits: bits
, bytes: bytes
, _anchors: {
    bits: {
      unit: 'b'
    , ratio: 1/8
    }
  , bytes: {
      unit: 'B'
    , ratio: 8
    }
  }
};
var digital_1 = digital.bits;
var digital_2 = digital.bytes;
var digital_3 = digital._anchors;

var metric$6
  , imperial$6;

metric$6 = {
  ppm: {
    name: {
      singular: 'Part-per Million'
      , plural: 'Parts-per Million'
    }
    , to_anchor: 1
  }
  , ppb: {
    name: {
      singular: 'Part-per Billion'
      , plural: 'Parts-per Billion'
    }
    , to_anchor: .001
  }
  , ppt: {
    name: {
      singular: 'Part-per Trillion'
      , plural: 'Parts-per Trillion'
    }
    , to_anchor: .000001
  }
  , ppq: {
    name: {
      singular: 'Part-per Quadrillion'
      , plural: 'Parts-per Quadrillion'
    }
    , to_anchor: .000000001
  }
};

var partsPer = {
  metric: metric$6
  , imperial: {}
  , _anchors: {
    metric: {
      unit: 'ppm'
      , ratio: .000001
    }
  }
};
var partsPer_1 = partsPer.metric;
var partsPer_2 = partsPer.imperial;
var partsPer_3 = partsPer._anchors;

var metric$7
  , imperial$7;

metric$7 = {
  'm/s': {
    name: {
      singular: 'Metre per second'
    , plural: 'Metres per second'
    }
  , to_anchor: 3.6
  }
, 'km/h': {
    name: {
      singular: 'Kilometre per hour'
    , plural: 'Kilometres per hour'
    }
  , to_anchor: 1
  }
};

  imperial$7 = {
    'm/h': {
      name: {
        singular: 'Mile per hour'
      , plural: 'Miles per hour'
      }
    , to_anchor: 1
    }
  , knot: {
      name: {
        singular: 'Knot'
      , plural: 'Knots'
      }
    , to_anchor: 1.150779
    }
  , 'ft/s': {
      name: {
        singular: 'Foot per second'
      , plural: 'Feet per second'
      }
    , to_anchor: 0.681818
      }
};

var speed = {
  metric: metric$7
, imperial: imperial$7
, _anchors: {
    metric: {
      unit: 'km/h'
    , ratio: 1/1.609344
    }
  , imperial: {
      unit: 'm/h'
    , ratio: 1.609344
    }
  }
};
var speed_1 = speed.metric;
var speed_2 = speed.imperial;
var speed_3 = speed._anchors;

var metric$8
  , imperial$8;

metric$8 = {
  'min/km': {
    name: {
      singular: 'Minute per kilometre'
    , plural: 'Minutes per kilometre'
    }
  , to_anchor: 0.06
  }
  ,'s/m': {
    name: {
      singular: 'Second per metre'
    , plural: 'Seconds per metre'
    }
  , to_anchor: 1
  }
};

imperial$8 = {
    'min/mi': {
      name: {
        singular: 'Minute per mile'
      , plural: 'Minutes per mile'
      }
    , to_anchor: 0.0113636
   }
   , 's/ft': {
      name: {
        singular: 'Second per foot'
      , plural: 'Seconds per foot'
      }
    , to_anchor: 1
   }
};

var pace = {
  metric: metric$8
, imperial: imperial$8
, _anchors: {
    metric: {
      unit: 's/m'
    , ratio: 0.3048
    }
  , imperial: {
      unit: 's/ft'
    , ratio: 1/0.3048
    }
  }
};
var pace_1 = pace.metric;
var pace_2 = pace.imperial;
var pace_3 = pace._anchors;

var metric$9
  , imperial$9;

metric$9 = {
  Pa: {
    name: {
      singular: 'pascal'
    , plural: 'pascals'
    }
  , to_anchor: 1/1000
  }
, kPa: {
    name: {
      singular: 'kilopascal'
    , plural: 'kilopascals'
    }
  , to_anchor: 1
  }
, MPa: {
    name: {
      singular: 'megapascal'
    , plural: 'megapascals'
    }
  , to_anchor: 1000
  }
, hPa: {
    name: {
      singular: 'hectopascal'
    , plural: 'hectopascals'
    }
  , to_anchor: 1/10
  }
, bar: {
    name: {
      singular: 'bar'
    , plural: 'bar'
    }
  , to_anchor: 100
  }
, torr: {
    name: {
      singular: 'torr'
    , plural: 'torr'
    }
  , to_anchor: 101325/760000
  }
};

imperial$9 = {
  psi: {
    name: {
      singular: 'pound per square inch'
    , plural: 'pounds per square inch'
    }
  , to_anchor: 1/1000
  }
, ksi: {
    name: {
      singular: 'kilopound per square inch'
    , plural: 'kilopound per square inch'
    }
  , to_anchor: 1
  }
};

var pressure = {
  metric: metric$9
, imperial: imperial$9
, _anchors: {
    metric: {
      unit: 'kPa'
    , ratio: 0.00014503768078
    }
  , imperial: {
      unit: 'psi'
    , ratio: 1/0.00014503768078
    }
  }
};
var pressure_1 = pressure.metric;
var pressure_2 = pressure.imperial;
var pressure_3 = pressure._anchors;

var current;

current = {
  A: {
    name: {
      singular: 'Ampere'
    , plural: 'Amperes'
    }
  , to_anchor: 1
  }
, mA: {
    name: {
      singular: 'Milliampere'
      , plural: 'Milliamperes'
    }
    , to_anchor: .001
  }
, kA: {
    name: {
      singular: 'Kiloampere'
    , plural: 'Kiloamperes'
    }
  , to_anchor: 1000
  }
};

var current_1 = {
  metric: current
, _anchors: {
    metric: {
      unit: 'A'
    , ratio: 1
    }
  }
};
var current_2 = current_1.metric;
var current_3 = current_1._anchors;

var voltage;

voltage = {
  V: {
    name: {
      singular: 'Volt'
    , plural: 'Volts'
    }
  , to_anchor: 1
  }
, mV: {
    name: {
      singular: 'Millivolt'
      , plural: 'Millivolts'
    }
    , to_anchor: .001
  }
, kV: {
    name: {
      singular: 'Kilovolt'
    , plural: 'Kilovolts'
    }
  , to_anchor: 1000
  }
};

var voltage_1 = {
  metric: voltage
, _anchors: {
    metric: {
      unit: 'V'
    , ratio: 1
    }
  }
};
var voltage_2 = voltage_1.metric;
var voltage_3 = voltage_1._anchors;

var power;

power = {
  W: {
    name: {
      singular: 'Watt'
    , plural: 'Watts'
    }
  , to_anchor: 1
  }
, mW: {
    name: {
      singular: 'Milliwatt'
      , plural: 'Milliwatts'
    }
    , to_anchor: .001
  }
, kW: {
    name: {
      singular: 'Kilowatt'
    , plural: 'Kilowatts'
    }
  , to_anchor: 1000
  }
, MW: {
    name: {
      singular: 'Megawatt'
    , plural: 'Megawatts'
    }
  , to_anchor: 1000000
  }
, GW: {
    name: {
      singular: 'Gigawatt'
    , plural: 'Gigawatts'
    }
  , to_anchor: 1000000000
  }
};

var power_1 = {
  metric: power
, _anchors: {
    metric: {
      unit: 'W'
    , ratio: 1
    }
  }
};
var power_2 = power_1.metric;
var power_3 = power_1._anchors;

var reactivePower;

reactivePower = {
  VAR: {
    name: {
      singular: 'Volt-Ampere Reactive'
    , plural: 'Volt-Amperes Reactive'
    }
  , to_anchor: 1
  }
, mVAR: {
    name: {
      singular: 'Millivolt-Ampere Reactive'
      , plural: 'Millivolt-Amperes Reactive'
    }
    , to_anchor: .001
  }
, kVAR: {
    name: {
      singular: 'Kilovolt-Ampere Reactive'
    , plural: 'Kilovolt-Amperes Reactive'
    }
  , to_anchor: 1000
  }
, MVAR: {
    name: {
      singular: 'Megavolt-Ampere Reactive'
    , plural: 'Megavolt-Amperes Reactive'
    }
  , to_anchor: 1000000
  }
, GVAR: {
    name: {
      singular: 'Gigavolt-Ampere Reactive'
    , plural: 'Gigavolt-Amperes Reactive'
    }
  , to_anchor: 1000000000
  }
};

var reactivePower_1 = {
  metric: reactivePower
, _anchors: {
    metric: {
      unit: 'VAR'
    , ratio: 1
    }
  }
};
var reactivePower_2 = reactivePower_1.metric;
var reactivePower_3 = reactivePower_1._anchors;

var apparentPower;

apparentPower = {
  VA: {
    name: {
      singular: 'Volt-Ampere'
    , plural: 'Volt-Amperes'
    }
  , to_anchor: 1
  }
, mVA: {
    name: {
      singular: 'Millivolt-Ampere'
      , plural: 'Millivolt-Amperes'
    }
    , to_anchor: .001
  }
, kVA: {
    name: {
      singular: 'Kilovolt-Ampere'
    , plural: 'Kilovolt-Amperes'
    }
  , to_anchor: 1000
  }
, MVA: {
    name: {
      singular: 'Megavolt-Ampere'
    , plural: 'Megavolt-Amperes'
    }
  , to_anchor: 1000000
  }
, GVA: {
    name: {
      singular: 'Gigavolt-Ampere'
    , plural: 'Gigavolt-Amperes'
    }
  , to_anchor: 1000000000
  }
};

var apparentPower_1 = {
  metric: apparentPower
, _anchors: {
    metric: {
      unit: 'VA'
    , ratio: 1
    }
  }
};
var apparentPower_2 = apparentPower_1.metric;
var apparentPower_3 = apparentPower_1._anchors;

var energy;

energy = {
  Wh: {
    name: {
      singular: 'Watt-hour'
    , plural: 'Watt-hours'
    }
  , to_anchor: 3600
  }
, mWh: {
    name: {
      singular: 'Milliwatt-hour'
      , plural: 'Milliwatt-hours'
    }
    , to_anchor: 3.6
  }
, kWh: {
    name: {
      singular: 'Kilowatt-hour'
    , plural: 'Kilowatt-hours'
    }
  , to_anchor: 3600000
  }
, MWh: {
    name: {
      singular: 'Megawatt-hour'
    , plural: 'Megawatt-hours'
    }
  , to_anchor: 3600000000
  }
, GWh: {
    name: {
      singular: 'Gigawatt-hour'
    , plural: 'Gigawatt-hours'
    }
  , to_anchor: 3600000000000
  }
, J: {
    name: {
      singular: 'Joule'
    , plural: 'Joules'
    }
  , to_anchor: 1
  }
, kJ: {
    name: {
      singular: 'Kilojoule'
    , plural: 'Kilojoules'
    }
  , to_anchor: 1000
  }
};

var energy_1 = {
  metric: energy
, _anchors: {
    metric: {
      unit: 'J'
    , ratio: 1
    }
  }
};
var energy_2 = energy_1.metric;
var energy_3 = energy_1._anchors;

var reactiveEnergy;

reactiveEnergy = {
  VARh: {
    name: {
      singular: 'Volt-Ampere Reactive Hour'
    , plural: 'Volt-Amperes Reactive Hour'
    }
  , to_anchor: 1
  }
, mVARh: {
    name: {
      singular: 'Millivolt-Ampere Reactive Hour'
      , plural: 'Millivolt-Amperes Reactive Hour'
    }
    , to_anchor: .001
  }
, kVARh: {
    name: {
      singular: 'Kilovolt-Ampere Reactive Hour'
    , plural: 'Kilovolt-Amperes Reactive Hour'
    }
  , to_anchor: 1000
  }
, MVARh: {
    name: {
      singular: 'Megavolt-Ampere Reactive Hour'
    , plural: 'Megavolt-Amperes Reactive Hour'
    }
  , to_anchor: 1000000
  }
, GVARh: {
    name: {
      singular: 'Gigavolt-Ampere Reactive Hour'
    , plural: 'Gigavolt-Amperes Reactive Hour'
    }
  , to_anchor: 1000000000
  }
};

var reactiveEnergy_1 = {
  metric: reactiveEnergy
, _anchors: {
    metric: {
      unit: 'VARh'
    , ratio: 1
    }
  }
};
var reactiveEnergy_2 = reactiveEnergy_1.metric;
var reactiveEnergy_3 = reactiveEnergy_1._anchors;

var metric$a
  , imperial$a;

metric$a = {
  'mm3/s': {
      name: {
        singular: 'Cubic Millimeter per second'
      , plural: 'Cubic Millimeters per second'
      }
    , to_anchor: 1/1000000
  }
, 'cm3/s': {
    name: {
      singular: 'Cubic Centimeter per second'
    , plural: 'Cubic Centimeters per second'
    }
  , to_anchor: 1/1000
  }
, 'ml/s': {
    name: {
      singular: 'Millilitre per second'
    , plural: 'Millilitres per second'
    }
  , to_anchor: 1/1000
  }
, 'cl/s': {
    name: {
      singular: 'Centilitre per second'
    , plural: 'Centilitres per second'
    }
  , to_anchor: 1/100
  }
, 'dl/s': {
    name: {
      singular: 'Decilitre per second'
    , plural: 'Decilitres per second'
    }
  , to_anchor: 1/10
  }
, 'l/s': {
    name: {
      singular: 'Litre per second'
    , plural: 'Litres per second'
    }
  , to_anchor: 1
  }
, 'l/min': {
    name: {
      singular: 'Litre per minute'
    , plural: 'Litres per minute'
    }
  , to_anchor: 1/60
  }
, 'l/h': {
    name: {
      singular: 'Litre per hour'
    , plural: 'Litres per hour'
    }
  , to_anchor: 1/3600
  }
, 'kl/s': {
    name: {
      singular: 'Kilolitre per second'
    , plural: 'Kilolitres per second'
    }
  , to_anchor: 1000
  }
, 'kl/min': {
    name: {
      singular: 'Kilolitre per minute'
    , plural: 'Kilolitres per minute'
    }
  , to_anchor: 50/3
  }
, 'kl/h': {
    name: {
      singular: 'Kilolitre per hour'
    , plural: 'Kilolitres per hour'
    }
  , to_anchor: 5/18
  }
, 'm3/s': {
    name: {
      singular: 'Cubic meter per second'
    , plural: 'Cubic meters per second'
    }
  , to_anchor: 1000
  }
, 'm3/min': {
    name: {
      singular: 'Cubic meter per minute'
    , plural: 'Cubic meters per minute'
    }
  , to_anchor: 50/3
  }
, 'm3/h': {
    name: {
      singular: 'Cubic meter per hour'
    , plural: 'Cubic meters per hour'
    }
  , to_anchor: 5/18
  }
, 'km3/s': {
    name: {
      singular: 'Cubic kilometer per second'
    , plural: 'Cubic kilometers per second'
    }
  , to_anchor: 1000000000000
  }
};

imperial$a = {
  'tsp/s': {
    name: {
      singular: 'Teaspoon per second'
    , plural: 'Teaspoons per second'
    }
  , to_anchor: 1/6
  }
, 'Tbs/s': {
    name: {
      singular: 'Tablespoon per second'
    , plural: 'Tablespoons per second'
    }
  , to_anchor: 1/2
  }
, 'in3/s': {
    name: {
      singular: 'Cubic inch per second'
    , plural: 'Cubic inches per second'
    }
  , to_anchor: 0.55411
  }
, 'in3/min': {
    name: {
      singular: 'Cubic inch per minute'
    , plural: 'Cubic inches per minute'
    }
  , to_anchor: 0.55411/60
  }
, 'in3/h': {
    name: {
      singular: 'Cubic inch per hour'
    , plural: 'Cubic inches per hour'
    }
  , to_anchor: 0.55411/3600
  }
, 'fl-oz/s': {
    name: {
      singular: 'Fluid Ounce per second'
    , plural: 'Fluid Ounces per second'
    }
  , to_anchor: 1
  }
, 'fl-oz/min': {
    name: {
      singular: 'Fluid Ounce per minute'
    , plural: 'Fluid Ounces per minute'
    }
  , to_anchor: 1/60
  }
, 'fl-oz/h': {
    name: {
      singular: 'Fluid Ounce per hour'
    , plural: 'Fluid Ounces per hour'
    }
  , to_anchor: 1/3600
  }
, 'cup/s': {
    name: {
      singular: 'Cup per second'
    , plural: 'Cups per second'
    }
  , to_anchor: 8
  }
, 'pnt/s': {
    name: {
      singular: 'Pint per second'
    , plural: 'Pints per second'
    }
  , to_anchor: 16
  }
, 'pnt/min': {
    name: {
      singular: 'Pint per minute'
    , plural: 'Pints per minute'
    }
  , to_anchor: 4/15
  }
, 'pnt/h': {
    name: {
      singular: 'Pint per hour'
    , plural: 'Pints per hour'
    }
  , to_anchor: 1/225
  }
, 'qt/s': {
    name: {
      singular: 'Quart per second'
    , plural: 'Quarts per second'
    }
  , to_anchor: 32
  }
, 'gal/s': {
    name: {
      singular: 'Gallon per second'
    , plural: 'Gallons per second'
    }
  , to_anchor: 128
  }
, 'gal/min': {
    name: {
      singular: 'Gallon per minute'
    , plural: 'Gallons per minute'
    }
  , to_anchor: 32/15
  }
, 'gal/h': {
    name: {
      singular: 'Gallon per hour'
    , plural: 'Gallons per hour'
    }
  , to_anchor: 8/225
  }
, 'ft3/s': {
    name: {
      singular: 'Cubic foot per second'
    , plural: 'Cubic feet per second'
    }
  , to_anchor: 957.506
  }
, 'ft3/min': {
    name: {
      singular: 'Cubic foot per minute'
    , plural: 'Cubic feet per minute'
    }
  , to_anchor: 957.506/60
  }
, 'ft3/h': {
    name: {
      singular: 'Cubic foot per hour'
    , plural: 'Cubic feet per hour'
    }
  , to_anchor: 957.506/3600
  }
, 'yd3/s': {
    name: {
      singular: 'Cubic yard per second'
    , plural: 'Cubic yards per second'
    }
  , to_anchor: 25852.7
  }
, 'yd3/min': {
    name: {
      singular: 'Cubic yard per minute'
    , plural: 'Cubic yards per minute'
    }
  , to_anchor: 25852.7/60
  }
, 'yd3/h': {
    name: {
      singular: 'Cubic yard per hour'
    , plural: 'Cubic yards per hour'
    }
  , to_anchor: 25852.7/3600
  }
};

var volumeFlowRate = {
  metric: metric$a
, imperial: imperial$a
, _anchors: {
    metric: {
      unit: 'l/s'
    , ratio: 33.8140227
    }
  , imperial: {
      unit: 'fl-oz/s'
    , ratio: 1/33.8140227
    }
  }
};
var volumeFlowRate_1 = volumeFlowRate.metric;
var volumeFlowRate_2 = volumeFlowRate.imperial;
var volumeFlowRate_3 = volumeFlowRate._anchors;

var metric$b,
imperial$b;

metric$b = {
  'lx': {
    name: {
      singular: 'Lux',
      plural: 'Lux'
    },
    to_anchor: 1
  }
};

imperial$b = {
  'ft-cd': {
    name: {
      singular: 'Foot-candle',
      plural: 'Foot-candles'
    },
    to_anchor: 1
  }
};

var illuminance = {
  metric: metric$b,
  imperial: imperial$b,
  _anchors: {
    metric: {
      unit: 'lx',
      ratio: 1/10.76391
    },
    imperial: {
      unit: 'ft-cd',      
	  ratio: 10.76391
    }
  }
};
var illuminance_1 = illuminance.metric;
var illuminance_2 = illuminance.imperial;
var illuminance_3 = illuminance._anchors;

var frequency;

frequency = {
  mHz: {
    name: {
      singular: 'millihertz'
    , plural: 'millihertz'
    }
  , to_anchor: 1/1000
  }
, Hz: {
    name: {
      singular: 'hertz'
    , plural: 'hertz'
    }
  , to_anchor: 1
  }
, kHz: {
    name: {
      singular: 'kilohertz'
    , plural: 'kilohertz'
    }
  , to_anchor: 1000
  }
, MHz: {
    name: {
      singular: 'megahertz'
    , plural: 'megahertz'
    }
  , to_anchor: 1000 * 1000
  }
, GHz: {
    name: {
      singular: 'gigahertz'
    , plural: 'gigahertz'
    }
  , to_anchor: 1000 * 1000 * 1000
  }
, THz: {
    name: {
      singular: 'terahertz'
    , plural: 'terahertz'
    }
  , to_anchor: 1000 * 1000 * 1000 * 1000
  }
, rpm: {
    name: {
      singular: 'rotation per minute'
    , plural: 'rotations per minute'
    }
  , to_anchor: 1/60
  }
, "deg/s": {
    name: {
      singular: 'degree per second'
    , plural: 'degrees per second'
    }
  , to_anchor: 1/360
  }
, "rad/s": {
    name: {
      singular: 'radian per second'
    , plural: 'radians per second'
    }
  , to_anchor: 1/(Math.PI * 2)
  }
};


var frequency_1 = {
  metric: frequency
, _anchors: {
    frequency: {
      unit: 'hz'
    , ratio: 1
    }
  }
};
var frequency_2 = frequency_1.metric;
var frequency_3 = frequency_1._anchors;

var angle;

angle = {
  rad: {
    name: {
      singular: 'radian'
    , plural: 'radians'
    }
  , to_anchor: 180/Math.PI
  }
, deg: {
    name: {
      singular: 'degree'
    , plural: 'degrees'
    }
  , to_anchor: 1
  }
, grad: {
    name: {
      singular: 'gradian'
    , plural: 'gradians'
    }
  , to_anchor: 9/10
  }
, arcmin: {
    name: {
      singular: 'arcminute'
    , plural: 'arcminutes'
    }
  , to_anchor: 1/60
  }
, arcsec: {
    name: {
      singular: 'arcsecond'
    , plural: 'arcseconds'
    }
  , to_anchor: 1/3600
  }
};

var angle_1 = {
  metric: angle
, _anchors: {
    metric: {
      unit: 'deg'
    , ratio: 1
    }
  }
};
var angle_2 = angle_1.metric;
var angle_3 = angle_1._anchors;

var convert
  , measures = {
      length: length
    , area: area
    , mass: mass
    , volume: volume
    , each: each
    , temperature: temperature
    , time: time_1
    , digital: digital
    , partsPer: partsPer
    , speed: speed
    , pace: pace
    , pressure: pressure
    , current: current_1
    , voltage: voltage_1
    , power: power_1
    , reactivePower: reactivePower_1
    , apparentPower: apparentPower_1
    , energy: energy_1
    , reactiveEnergy: reactiveEnergy_1
    , volumeFlowRate: volumeFlowRate
    , illuminance: illuminance
    , frequency: frequency_1
    , angle : angle_1
    }
  , Converter;

Converter = function (numerator, denominator) {
  if(denominator)
    this.val = numerator / denominator;
  else
    this.val = numerator;
};

/**
* Lets the converter know the source unit abbreviation
*/
Converter.prototype.from = function (from) {
  if(this.destination)
    throw new Error('.from must be called before .to');

  this.origin = this.getUnit(from);

  if(!this.origin) {
    this.throwUnsupportedUnitError(from);
  }

  return this;
};

/**
* Converts the unit and returns the value
*/
Converter.prototype.to = function (to) {
  if(!this.origin)
    throw new Error('.to must be called after .from');

  this.destination = this.getUnit(to);

  var result
    , transform;

  if(!this.destination) {
    this.throwUnsupportedUnitError(to);
  }

  // Don't change the value if origin and destination are the same
  if (this.origin.abbr === this.destination.abbr) {
    return this.val;
  }

  // You can't go from liquid to mass, for example
  if(this.destination.measure != this.origin.measure) {
    throw new Error('Cannot convert incompatible measures of '
      + this.destination.measure + ' and ' + this.origin.measure);
  }

  /**
  * Convert from the source value to its anchor inside the system
  */
  result = this.val * this.origin.unit.to_anchor;

  /**
  * For some changes it's a simple shift (C to K)
  * So we'll add it when convering into the unit (later)
  * and subtract it when converting from the unit
  */
  if (this.origin.unit.anchor_shift) {
    result -= this.origin.unit.anchor_shift;
  }

  /**
  * Convert from one system to another through the anchor ratio. Some conversions
  * aren't ratio based or require more than a simple shift. We can provide a custom
  * transform here to provide the direct result
  */
  if(this.origin.system != this.destination.system) {
    transform = measures[this.origin.measure]._anchors[this.origin.system].transform;
    if (typeof transform === 'function') {
      result = transform(result);
    }
    else {
      result *= measures[this.origin.measure]._anchors[this.origin.system].ratio;
    }
  }

  /**
  * This shift has to be done after the system conversion business
  */
  if (this.destination.unit.anchor_shift) {
    result += this.destination.unit.anchor_shift;
  }

  /**
  * Convert to another unit inside the destination system
  */
  return result / this.destination.unit.to_anchor;
};

/**
* Converts the unit to the best available unit.
*/
Converter.prototype.toBest = function(options) {
  if(!this.origin)
    throw new Error('.toBest must be called after .from');

  var options = Object.assign({
    exclude: [],
    cutOffNumber: 1,
  }, options);

  var best;
  /**
    Looks through every possibility for the 'best' available unit.
    i.e. Where the value has the fewest numbers before the decimal point,
    but is still higher than 1.
  */
  lodash_foreach(this.possibilities(), function(possibility) {
    var unit = this.describe(possibility);
    var isIncluded = options.exclude.indexOf(possibility) === -1;

    if (isIncluded && unit.system === this.origin.system) {
      var result = this.to(possibility);
      if (!best || (result >= options.cutOffNumber && result < best.val)) {
        best = {
          val: result,
          unit: possibility,
          singular: unit.singular,
          plural: unit.plural
        };
      }
    }
  }.bind(this));

  return best;
};

/**
* Finds the unit
*/
Converter.prototype.getUnit = function (abbr) {
  var found;

  lodash_foreach(measures, function (systems, measure) {
    lodash_foreach(systems, function (units, system) {
      if(system == '_anchors')
        return false;

      lodash_foreach(units, function (unit, testAbbr) {
        if(testAbbr == abbr) {
          found = {
            abbr: abbr
          , measure: measure
          , system: system
          , unit: unit
          };
          return false;
        }
      });

      if(found)
        return false;
    });

    if(found)
      return false;
  });

  return found;
};

var describe = function(resp) {
  return {
    abbr: resp.abbr
  , measure: resp.measure
  , system: resp.system
  , singular: resp.unit.name.singular
  , plural: resp.unit.name.plural
  };
};

/**
* An alias for getUnit
*/
Converter.prototype.describe = function (abbr) {
  var resp = Converter.prototype.getUnit(abbr);
  var desc = null;

  try {
    desc = describe(resp);
  } catch(err) {
    this.throwUnsupportedUnitError(abbr);
  }

  return desc;
};

/**
* Detailed list of all supported units
*/
Converter.prototype.list = function (measure) {
  var list = [];

  lodash_foreach(measures, function (systems, testMeasure) {
    if(measure && measure !== testMeasure)
      return;

    lodash_foreach(systems, function (units, system) {
      if(system == '_anchors')
        return false;

      lodash_foreach(units, function (unit, abbr) {
        list = list.concat(describe({
          abbr: abbr,
          measure: testMeasure
        , system: system
        , unit: unit
        }));
      });
    });
  });

  return list;
};

Converter.prototype.throwUnsupportedUnitError = function (what) {
  var validUnits = [];

  lodash_foreach(measures, function (systems, measure) {
    lodash_foreach(systems, function (units, system) {
      if(system == '_anchors')
        return false;

      validUnits = validUnits.concat(lodash_keys(units));
    });
  });

  throw new Error('Unsupported unit ' + what + ', use one of: ' + validUnits.join(', '));
};

/**
* Returns the abbreviated measures that the value can be
* converted to.
*/
Converter.prototype.possibilities = function (measure) {
  var possibilities = [];
  if(!this.origin && !measure) {
	  lodash_foreach(lodash_keys(measures), function (measure){
		  lodash_foreach(measures[measure], function (units, system) {
		    if(system == '_anchors')
		      return false;

		    possibilities = possibilities.concat(lodash_keys(units));
		  });
	  });
  } else {
	  measure = measure || this.origin.measure;
	  lodash_foreach(measures[measure], function (units, system) {
	    if(system == '_anchors')
	      return false;

	    possibilities = possibilities.concat(lodash_keys(units));
	  });
  }

  return possibilities;
};

/**
* Returns the abbreviated measures that the value can be
* converted to.
*/
Converter.prototype.measures = function () {
  return lodash_keys(measures);
};

convert = function (value) {
  return new Converter(value);
};

var lib = convert;

'use strict';

function round(method, input, precision) {
	if (typeof input !== 'number') {
		throw new TypeError('Expected value to be a number');
	}

	if (!Number.isInteger(precision)) {
		throw new TypeError('Expected precision to be an integer');
	}

	const isRoundingAndNegative = method === 'round' && input < 0;
	if (isRoundingAndNegative) {
		input = Math.abs(input);
	}

	let [number, exponent] = `${input}e`.split('e');
	let ret = Math[method](`${number}e${Number(exponent) + precision}`);

	[number, exponent] = `${ret}e`.split('e');
	ret = Number(`${number}e${Number(exponent) - precision}`);

	if (isRoundingAndNegative) {
		ret = -ret;
	}

	return ret;
}

var roundTo = round.bind(null, 'round');
var up = round.bind(null, 'ceil');
var down = round.bind(null, 'floor');
roundTo.up = up;
roundTo.down = down;

const UnitCss = "stellar-unit {\n\tcontain: content;\n\tdisplay: inline-block;\n}\n";

const Unit = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = 1000;
        this.from = "B";
        this.to = "KB";
        this.money = false;
        this.round = false;
        this.decimals = 2;
    }
    render() {
        if (!this.money) {
            return roundTo(lib(this.value).from(this.from).to(this.to), this.decimals) + " " + this.to;
        }
        else {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: this.to }).format(this.value);
        }
    }
    static get style() { return UnitCss; }
};

export { Unit as stellar_unit };
