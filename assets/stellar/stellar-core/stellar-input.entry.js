import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import { c as createCommonjsModule, u as unwrapExports } from './_commonjsHelpers-bccf23a2.js';
import './css-custom-properties.min-d9d14253.js';
import { g as require$$0, i as isHexColor_1, T as TinyDatePicker } from './index-26976b63.js';
import { z as zxcvbn } from './main-e9832563.js';
import { m as moment } from './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const isTextArea = function (type) {
    return (type === "textarea");
};
const isFileUpload = function (type) {
    return (type === "file");
};
const isSearch = function (type) {
    return (type === "search");
};
const hasIncrements = function (type) {
    return (type === "number" || isDatePicker(type));
};
const shouldBeAnInput = function (type) {
    return !(isTextArea(type) || isFileUpload(type) || isDatePicker(type));
};
const isColorPicker = function (type) {
    return (type === "color");
};
const isDatePicker = function (type) {
    return (["date", "month"].includes(type));
};
const hasValue = function (value) {
    return (value && value !== "" && value.length >= 1);
};
const formatBytes = function (a, b = 2) { if (0 == a)
    return "0 Bytes"; var c = 1e3, e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], f = Math.floor(Math.log(a) / Math.log(c)); return parseFloat((a / Math.pow(c, f)).toFixed(b)) + " " + e[f]; };
const forEach = function (arr, cb) {
    let length = arr.length;
    for (var index = 0; index < length; index++) {
        let element = arr[index];
        cb(element, index);
    }
};

var toDate_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toDate(date) {
  (0, _assertString.default)(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const toDate = unwrapExports(toDate_1);

var toFloat_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFloat;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFloat(str) {
  (0, _assertString.default)(str);
  return parseFloat(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const toFloat = unwrapExports(toFloat_1);

var toInt_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(str, radix) {
  (0, _assertString.default)(str);
  return parseInt(str, radix || 10);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const toInt = unwrapExports(toInt_1);

var toBoolean_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBoolean(str, strict) {
  (0, _assertString.default)(str);

  if (strict) {
    return str === '1' || str === 'true';
  }

  return str !== '0' && str !== 'false' && str !== '';
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const toBoolean = unwrapExports(toBoolean_1);

var equals_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equals(str, comparison) {
  (0, _assertString.default)(str);
  return str === comparison;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const equals = unwrapExports(equals_1);

var toString_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toString;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function toString(input) {
  if (_typeof(input) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }

  return String(input);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const toString = unwrapExports(toString_1);

var contains_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _assertString = _interopRequireDefault(require$$0);

var _toString = _interopRequireDefault(toString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(str, elem) {
  (0, _assertString.default)(str);
  return str.indexOf((0, _toString.default)(elem)) >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const contains = unwrapExports(contains_1);

var matches_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matches(str, pattern, modifiers) {
  (0, _assertString.default)(str);

  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }

  return pattern.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const matches = unwrapExports(matches_1);

var merge_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }

  return obj;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const merge = unwrapExports(merge_1);

var isByteLength_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isByteLength;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }

  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isByteLength = unwrapExports(isByteLength_1);

var isFQDN_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = _interopRequireDefault(require$$0);

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_fqdn_options);
  /* Remove the optional trailing dot before checking validity */

  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }

  var parts = str.split('.');

  for (var i = 0; i < parts.length; i++) {
    if (parts[i].length > 63) {
      return false;
    }
  }

  if (options.require_tld) {
    var tld = parts.pop();

    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    } // disallow spaces


    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }

  for (var part, _i = 0; _i < parts.length; _i++) {
    part = parts[_i];

    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }

    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    } // disallow full-width chars


    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }

    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isFQDN = unwrapExports(isFQDN_1);

var isIP_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }

    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::
    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.

    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    } // initial or final ::


    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }

        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {// it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }

    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }

    return blocks.length === expectedNumberOfBlocks;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isIP = unwrapExports(isIP_1);

var isEmail_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = _interopRequireDefault(require$$0);

var _merge = _interopRequireDefault(merge_1);

var _isByteLength = _interopRequireDefault(isByteLength_1);

var _isFQDN = _interopRequireDefault(isFQDN_1);

var _isIP = _interopRequireDefault(isIP_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};
/* eslint-disable max-len */

/* eslint-disable no-control-regex */

var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */

/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);

    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');
  var lower_domain = domain.toLowerCase();

  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
    /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */
    user = user.toLowerCase(); // Removing sub-address from username before gmail validation

    var username = user.split('+')[0]; // Dots are not included in gmail length restriction

    if (!(0, _isByteLength.default)(username.replace('.', ''), {
      min: 6,
      max: 30
    })) {
      return false;
    }

    var _user_parts = username.split('.');

    for (var i = 0; i < _user_parts.length; i++) {
      if (!gmailUserPart.test(_user_parts[i])) {
        return false;
      }
    }
  }

  if (!(0, _isByteLength.default)(user, {
    max: 64
  }) || !(0, _isByteLength.default)(domain, {
    max: 254
  })) {
    return false;
  }

  if (!(0, _isFQDN.default)(domain, {
    require_tld: options.require_tld
  })) {
    if (!options.allow_ip_domain) {
      return false;
    }

    if (!(0, _isIP.default)(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) {
        return false;
      }

      var noBracketdomain = domain.substr(1, domain.length - 2);

      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
        return false;
      }
    }
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
  var user_parts = user.split('.');

  for (var _i = 0; _i < user_parts.length; _i++) {
    if (!pattern.test(user_parts[_i])) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isEmail = unwrapExports(isEmail_1);

var isURL_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = _interopRequireDefault(require$$0);

var _isFQDN = _interopRequireDefault(isFQDN_1);

var _isIP = _interopRequireDefault(isIP_1);

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];

    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }

  return false;
}

function isURL(url, options) {
  (0, _assertString.default)(url);

  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }

  if (url.indexOf('mailto:') === 0) {
    return false;
  }

  options = (0, _merge.default)(options, default_url_options);
  var protocol, auth, host, hostname, port, port_str, split, ipv6;
  split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();
  split = url.split('://');

  if (split.length > 1) {
    protocol = split.shift().toLowerCase();

    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (url.substr(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }

    split[0] = url.substr(2);
  }

  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');

  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }

    auth = split.shift();

    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }

  hostname = split.join('@');
  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);

  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();

    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);

    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }

  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isURL = unwrapExports(isURL_1);

var isMACAddress_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
var macAddressNoColons = /^([0-9a-fA-F]){12}$/;

function isMACAddress(str, options) {
  (0, _assertString.default)(str);

  if (options && options.no_colons) {
    return macAddressNoColons.test(str);
  }

  return macAddress.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isMACAddress = unwrapExports(isMACAddress_1);

var isIPRange_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIPRange;

var _assertString = _interopRequireDefault(require$$0);

var _isIP = _interopRequireDefault(isIP_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subnetMaybe = /^\d{1,2}$/;

function isIPRange(str) {
  (0, _assertString.default)(str);
  var parts = str.split('/'); // parts[0] -> ip, parts[1] -> subnet

  if (parts.length !== 2) {
    return false;
  }

  if (!subnetMaybe.test(parts[1])) {
    return false;
  } // Disallow preceding 0 i.e. 01, 02, ...


  if (parts[1].length > 1 && parts[1].startsWith('0')) {
    return false;
  }

  return (0, _isIP.default)(parts[0], 4) && parts[1] <= 32 && parts[1] >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isIPRange = unwrapExports(isIPRange_1);

var isBoolean_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBoolean(str) {
  (0, _assertString.default)(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isBoolean = unwrapExports(isBoolean_1);

var alpha_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commaDecimal = exports.dotDecimal = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
var alpha = {
  'en-US': /^[A-Z]+$/i,
  'bg-BG': /^[А-Я]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[A-ZÆØÅ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'el-GR': /^[Α-ω]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'nb-NO': /^[A-ZÆØÅ]+$/i,
  'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[A-ZÆØÅ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sl-SI': /^[A-ZČĆĐŠŽ]+$/i,
  'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[A-ZÅÄÖ]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};
exports.alpha = alpha;
var alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'bg-BG': /^[0-9А-Я]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[0-9A-ZÆØÅ]+$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'el-GR': /^[0-9Α-ω]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
  'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sl-SI': /^[0-9A-ZČĆĐŠŽ]+$/i,
  'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};
exports.alphanumeric = alphanumeric;
var decimal = {
  'en-US': '.',
  ar: '٫'
};
exports.decimal = decimal;
var englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];
exports.englishLocales = englishLocales;

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = "en-".concat(englishLocales[i]);
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
  decimal[locale] = decimal['en-US'];
} // Source: http://www.localeplanet.com/java/


var arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];
exports.arabicLocales = arabicLocales;

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = "ar-".concat(arabicLocales[_i]);
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
  decimal[_locale] = decimal.ar;
} // Source: https://en.wikipedia.org/wiki/Decimal_mark


var dotDecimal = [];
exports.dotDecimal = dotDecimal;
var commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'es-ES', 'fr-FR', 'it-IT', 'ku-IQ', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-PL', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA'];
exports.commaDecimal = commaDecimal;

for (var _i2 = 0; _i2 < dotDecimal.length; _i2++) {
  decimal[dotDecimal[_i2]] = decimal['en-US'];
}

for (var _i3 = 0; _i3 < commaDecimal.length; _i3++) {
  decimal[commaDecimal[_i3]] = ',';
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
decimal['pt-BR'] = decimal['pt-PT']; // see #862

alpha['pl-Pl'] = alpha['pl-PL'];
alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
decimal['pl-Pl'] = decimal['pl-PL'];
});

const alpha = unwrapExports(alpha_1);
var alpha_2 = alpha_1.commaDecimal;
var alpha_3 = alpha_1.dotDecimal;
var alpha_4 = alpha_1.arabicLocales;
var alpha_5 = alpha_1.englishLocales;
var alpha_6 = alpha_1.decimal;
var alpha_7 = alpha_1.alphanumeric;
var alpha_8 = alpha_1.alpha;

var isAlpha_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;
exports.locales = void 0;

var _assertString = _interopRequireDefault(require$$0);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlpha(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  (0, _assertString.default)(str);

  if (locale in alpha_1.alpha) {
    return alpha_1.alpha[locale].test(str);
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(alpha_1.alpha);
exports.locales = locales;
});

const isAlpha = unwrapExports(isAlpha_1);
var isAlpha_2 = isAlpha_1.locales;

var isAlphanumeric_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlphanumeric;
exports.locales = void 0;

var _assertString = _interopRequireDefault(require$$0);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlphanumeric(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  (0, _assertString.default)(str);

  if (locale in alpha_1.alphanumeric) {
    return alpha_1.alphanumeric[locale].test(str);
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(alpha_1.alphanumeric);
exports.locales = locales;
});

const isAlphanumeric = unwrapExports(isAlphanumeric_1);
var isAlphanumeric_2 = isAlphanumeric_1.locales;

var isNumeric_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
var numericNoSymbols = /^[0-9]+$/;

function isNumeric(str, options) {
  (0, _assertString.default)(str);

  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }

  return numeric.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isNumeric = unwrapExports(isNumeric_1);

var isInt_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  (0, _assertString.default)(str);
  options = options || {}; // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.

  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes; // Check min/max/lt/gt

  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;
  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isInt = unwrapExports(isInt_1);

var isPort_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPort;

var _isInt = _interopRequireDefault(isInt_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPort(str) {
  return (0, _isInt.default)(str, {
    min: 0,
    max: 65535
  });
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isPort = unwrapExports(isPort_1);

var isLowercase_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowercase;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLowercase(str) {
  (0, _assertString.default)(str);
  return str === str.toLowerCase();
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isLowercase = unwrapExports(isLowercase_1);

var isUppercase_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUppercase;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUppercase(str) {
  (0, _assertString.default)(str);
  return str === str.toUpperCase();
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isUppercase = unwrapExports(isUppercase_1);

var isAscii_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString.default)(str);
  return ascii.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isAscii = unwrapExports(isAscii_1);

var isFullWidth_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFullWidth;
exports.fullWidth = void 0;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.fullWidth = fullWidth;

function isFullWidth(str) {
  (0, _assertString.default)(str);
  return fullWidth.test(str);
}
});

const isFullWidth = unwrapExports(isFullWidth_1);
var isFullWidth_2 = isFullWidth_1.fullWidth;

var isHalfWidth_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHalfWidth;
exports.halfWidth = void 0;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.halfWidth = halfWidth;

function isHalfWidth(str) {
  (0, _assertString.default)(str);
  return halfWidth.test(str);
}
});

const isHalfWidth = unwrapExports(isHalfWidth_1);
var isHalfWidth_2 = isHalfWidth_1.halfWidth;

var isVariableWidth_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = _interopRequireDefault(require$$0);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVariableWidth(str) {
  (0, _assertString.default)(str);
  return isFullWidth_1.fullWidth.test(str) && isHalfWidth_1.halfWidth.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isVariableWidth = unwrapExports(isVariableWidth_1);

var isMultibyte_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMultibyte;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  (0, _assertString.default)(str);
  return multibyte.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isMultibyte = unwrapExports(isMultibyte_1);

var isSurrogatePair_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  (0, _assertString.default)(str);
  return surrogatePair.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isSurrogatePair = unwrapExports(isSurrogatePair_1);

var isFloat_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;
exports.locales = void 0;

var _assertString = _interopRequireDefault(require$$0);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isFloat(str, options) {
  (0, _assertString.default)(str);
  options = options || {};
  var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? alpha_1.decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));

  if (str === '' || str === '.' || str === '-' || str === '+') {
    return false;
  }

  var value = parseFloat(str.replace(',', '.'));
  return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
}

var locales = Object.keys(alpha_1.decimal);
exports.locales = locales;
});

const isFloat = unwrapExports(isFloat_1);
var isFloat_2 = isFloat_1.locales;

var includes_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var includes = function includes(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
};

var _default = includes;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
});

const includes = unwrapExports(includes_1);

var isDecimal_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;

var _merge = _interopRequireDefault(merge_1);

var _assertString = _interopRequireDefault(require$$0);

var _includes = _interopRequireDefault(includes_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decimalRegExp(options) {
  var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(alpha_1.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? '' : '?', "$"));
  return regExp;
}

var default_decimal_options = {
  force_decimal: false,
  decimal_digits: '1,',
  locale: 'en-US'
};
var blacklist = ['', '-', '+'];

function isDecimal(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_decimal_options);

  if (options.locale in alpha_1.decimal) {
    return !(0, _includes.default)(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);
  }

  throw new Error("Invalid locale '".concat(options.locale, "'"));
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isDecimal = unwrapExports(isDecimal_1);

var isHexadecimal_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexadecimal = /^[0-9A-F]+$/i;

function isHexadecimal(str) {
  (0, _assertString.default)(str);
  return hexadecimal.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isHexadecimal = unwrapExports(isHexadecimal_1);

var isDivisibleBy_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDivisibleBy;

var _assertString = _interopRequireDefault(require$$0);

var _toFloat = _interopRequireDefault(toFloat_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDivisibleBy(str, num) {
  (0, _assertString.default)(str);
  return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isDivisibleBy = unwrapExports(isDivisibleBy_1);

var isISRC_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISRC;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

function isISRC(str) {
  (0, _assertString.default)(str);
  return isrc.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isISRC = unwrapExports(isISRC_1);

var isMD5_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMD5;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  (0, _assertString.default)(str);
  return md5.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isMD5 = unwrapExports(isMD5_1);

var isHash_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHash;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lengths = {
  md5: 32,
  md4: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8
};

function isHash(str, algorithm) {
  (0, _assertString.default)(str);
  var hash = new RegExp("^[a-f0-9]{".concat(lengths[algorithm], "}$"));
  return hash.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isHash = unwrapExports(isHash_1);

var isJWT_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJWT;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;

function isJWT(str) {
  (0, _assertString.default)(str);
  return jwt.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isJWT = unwrapExports(isJWT_1);

var isJSON_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJSON;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isJSON(str) {
  (0, _assertString.default)(str);

  try {
    var obj = JSON.parse(str);
    return !!obj && _typeof(obj) === 'object';
  } catch (e) {
    /* ignore */
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isJSON = unwrapExports(isJSON_1);

var isEmpty_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _assertString = _interopRequireDefault(require$$0);

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_is_empty_options = {
  ignore_whitespace: false
};

function isEmpty(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_is_empty_options);
  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isEmpty = unwrapExports(isEmpty_1);

var isLength_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLength;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }

  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isLength = unwrapExports(isLength_1);

var isUUID_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUUID;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
  (0, _assertString.default)(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isUUID = unwrapExports(isUUID_1);

var isMongoId_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMongoId;

var _assertString = _interopRequireDefault(require$$0);

var _isHexadecimal = _interopRequireDefault(isHexadecimal_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMongoId(str) {
  (0, _assertString.default)(str);
  return (0, _isHexadecimal.default)(str) && str.length === 24;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isMongoId = unwrapExports(isMongoId_1);

var isAfter_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _assertString = _interopRequireDefault(require$$0);

var _toDate = _interopRequireDefault(toDate_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAfter(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
  (0, _assertString.default)(str);
  var comparison = (0, _toDate.default)(date);
  var original = (0, _toDate.default)(str);
  return !!(original && comparison && original > comparison);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isAfter = unwrapExports(isAfter_1);

var isBefore_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _assertString = _interopRequireDefault(require$$0);

var _toDate = _interopRequireDefault(toDate_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
  (0, _assertString.default)(str);
  var comparison = (0, _toDate.default)(date);
  var original = (0, _toDate.default)(str);
  return !!(original && comparison && original < comparison);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isBefore = unwrapExports(isBefore_1);

var isIn_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIn;

var _assertString = _interopRequireDefault(require$$0);

var _toString = _interopRequireDefault(toString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isIn(str, options) {
  (0, _assertString.default)(str);
  var i;

  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];

    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = (0, _toString.default)(options[i]);
      }
    }

    return array.indexOf(str) >= 0;
  } else if (_typeof(options) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isIn = unwrapExports(isIn_1);

var isCreditCard_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');

  if (!creditCard.test(sanitized)) {
    return false;
  }

  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble;

  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return !!(sum % 10 === 0 ? sanitized : false);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isCreditCard = unwrapExports(isCreditCard_1);

var isIdentityCard_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIdentityCard;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validators = {
  ES: function ES(str) {
    (0, _assertString.default)(str);
    var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
    var charsValue = {
      X: 0,
      Y: 1,
      Z: 2
    };
    var controlDigits = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; // sanitize user input

    var sanitized = str.trim().toUpperCase(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    } // validate the control digit


    var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function (char) {
      return charsValue[char];
    });
    return sanitized.endsWith(controlDigits[number % 23]);
  }
};

function isIdentityCard(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'any';
  (0, _assertString.default)(str);

  if (locale in validators) {
    return validators[locale](str);
  } else if (locale === 'any') {
    for (var key in validators) {
      if (validators.hasOwnProperty(key)) {
        var validator = validators[key];

        if (validator(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isIdentityCard = unwrapExports(isIdentityCard_1);

var isISIN_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISIN;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  (0, _assertString.default)(str);

  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });
  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble = true;

  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isISIN = unwrapExports(isISIN_1);

var isISBN_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISBN;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }

  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i;

  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }

    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }

    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }

    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }

    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }

    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isISBN = unwrapExports(isISBN_1);

var isISSN_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISSN;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _assertString.default)(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');

  if (!testIssn.test(str)) {
    return false;
  }

  var digits = str.replace('-', '').toUpperCase();
  var checksum = 0;

  for (var i = 0; i < digits.length; i++) {
    var digit = digits[i];
    checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
  }

  return checksum % 11 === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isISSN = unwrapExports(isISSN_1);

var isMobilePhone_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;
exports.locales = void 0;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-EG': /^((\+?20)|0)?1[012]\d{8}$/,
  'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
  'ar-KW': /^(\+?965)[569]\d{7}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'ar-TN': /^(\+?216)?[2459]\d{7}$/,
  'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
  'bn-BD': /\+?(88)?0?1[356789][0-9]{8}\b/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'de-DE': /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
  'el-GR': /^(\+?30|0)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
  'en-HK': /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
  'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
  'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
  'en-KE': /^(\+?254|0)?[7]\d{8}$/,
  'en-MU': /^(\+?230|0)?\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-SG': /^(\+65)?[89]\d{7}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
  'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
  'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ja-JP': /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,
  'kk-KZ': /^(\+?7|8)?7\d{9}$/,
  'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'ms-MY': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
  'th-TH': /^(\+66|66|0)\d{9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'uk-UA': /^(\+?38|8)?0\d{9}$/,
  'vi-VN': /^(\+?84|0)((3([2-9]))|(5([689]))|(7([0|6-9]))|(8([1-5]))|(9([0-9])))([0-9]{7})$/,
  'zh-CN': /^((\+|00)86)?1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */
// aliases

phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str, locale, options) {
  (0, _assertString.default)(str);

  if (options && options.strictMode && !str.startsWith('+')) {
    return false;
  }

  if (Array.isArray(locale)) {
    return locale.some(function (key) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];

        if (phone.test(str)) {
          return true;
        }
      }

      return false;
    });
  } else if (locale in phones) {
    return phones[locale].test(str); // alias falsey locale as 'any'
  } else if (!locale || locale === 'any') {
    for (var key in phones) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];

        if (phone.test(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(phones);
exports.locales = locales;
});

const isMobilePhone = unwrapExports(isMobilePhone_1);
var isMobilePhone_2 = isMobilePhone_1.locales;

var isCurrency_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCurrency;

var _merge = _interopRequireDefault(merge_1);

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function currencyRegex(options) {
  var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
  options.digits_after_decimal.forEach(function (digit, index) {
    if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
  });
  var symbol = "(\\".concat(options.symbol.replace(/\./g, '\\.'), ")").concat(options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"),
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join('|'), ")?"),
      decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? '' : '?');
  var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : ''); // default is negative sign before symbol, but there are two other options (besides parens)

  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  } // South African Rand, for example, uses R 123 (space) and R-123 (no space)


  if (options.allow_negative_sign_placeholder) {
    pattern = "( (?!\\-))?".concat(pattern);
  } else if (options.allow_space_after_symbol) {
    pattern = " ?".concat(pattern);
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  } // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space


  return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_decimal: true,
  require_decimal: false,
  digits_after_decimal: [2],
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_currency_options);
  return currencyRegex(options).test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isCurrency = unwrapExports(isCurrency_1);

var isISO8601_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO8601;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

var isValidDate = function isValidDate(str) {
  // str must have passed the ISO8601 check
  // this check is meant to catch invalid dates
  // like 2009-02-31
  // first check for ordinal dates
  var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);

  if (ordinalMatch) {
    var oYear = Number(ordinalMatch[1]);
    var oDay = Number(ordinalMatch[2]); // if is leap year

    if (oYear % 4 === 0 && oYear % 100 !== 0) return oDay <= 366;
    return oDay <= 365;
  }

  var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
  var year = match[1];
  var month = match[2];
  var day = match[3];
  var monthString = month ? "0".concat(month).slice(-2) : month;
  var dayString = day ? "0".concat(day).slice(-2) : day; // create a date object and compare

  var d = new Date("".concat(year, "-").concat(monthString || '01', "-").concat(dayString || '01'));
  if (isNaN(d.getUTCFullYear())) return false;

  if (month && day) {
    return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
  }

  return true;
};

function isISO8601(str, options) {
  (0, _assertString.default)(str);
  var check = iso8601.test(str);
  if (!options) return check;
  if (check && options.strict) return isValidDate(str);
  return check;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isISO8601 = unwrapExports(isISO8601_1);

var isRFC3339_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRFC3339;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */
var dateFullYear = /[0-9]{4}/;
var dateMonth = /(0[1-9]|1[0-2])/;
var dateMDay = /([12]\d|0[1-9]|3[01])/;
var timeHour = /([01][0-9]|2[0-3])/;
var timeMinute = /[0-5][0-9]/;
var timeSecond = /([0-5][0-9]|60)/;
var timeSecFrac = /(\.[0-9]+)?/;
var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
var rfc3339 = new RegExp("".concat(fullDate.source, "[ tT]").concat(fullTime.source));

function isRFC3339(str) {
  (0, _assertString.default)(str);
  return rfc3339.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isRFC3339 = unwrapExports(isRFC3339_1);

var isISO31661Alpha2_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO31661Alpha2;

var _assertString = _interopRequireDefault(require$$0);

var _includes = _interopRequireDefault(includes_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];

function isISO31661Alpha2(str) {
  (0, _assertString.default)(str);
  return (0, _includes.default)(validISO31661Alpha2CountriesCodes, str.toUpperCase());
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isISO31661Alpha2 = unwrapExports(isISO31661Alpha2_1);

var isISO31661Alpha3_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO31661Alpha3;

var _assertString = _interopRequireDefault(require$$0);

var _includes = _interopRequireDefault(includes_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
var validISO31661Alpha3CountriesCodes = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'];

function isISO31661Alpha3(str) {
  (0, _assertString.default)(str);
  return (0, _includes.default)(validISO31661Alpha3CountriesCodes, str.toUpperCase());
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isISO31661Alpha3 = unwrapExports(isISO31661Alpha3_1);

var isBase64_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
  (0, _assertString.default)(str);
  var len = str.length;

  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }

  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isBase64 = unwrapExports(isBase64_1);

var isDataURI_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

function isDataURI(str) {
  (0, _assertString.default)(str);
  var data = str.split(',');

  if (data.length < 2) {
    return false;
  }

  var attributes = data.shift().trim().split(';');
  var schemeAndMediaType = attributes.shift();

  if (schemeAndMediaType.substr(0, 5) !== 'data:') {
    return false;
  }

  var mediaType = schemeAndMediaType.substr(5);

  if (mediaType !== '' && !validMediaType.test(mediaType)) {
    return false;
  }

  for (var i = 0; i < attributes.length; i++) {
    if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {// ok
    } else if (!validAttribute.test(attributes[i])) {
      return false;
    }
  }

  for (var _i = 0; _i < data.length; _i++) {
    if (!validData.test(data[_i])) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isDataURI = unwrapExports(isDataURI_1);

var isMagnetURI_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMagnetURI;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

function isMagnetURI(url) {
  (0, _assertString.default)(url);
  return magnetURI.test(url.trim());
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isMagnetURI = unwrapExports(isMagnetURI_1);

var isMimeType_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMimeType;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Checks if the provided string matches to a correct Media type format (MIME type)

  This function only checks is the string format follows the
  etablished rules by the according RFC specifications.
  This function supports 'charset' in textual media types
  (https://tools.ietf.org/html/rfc6657).

  This function does not check against all the media types listed
  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
  because of lightness purposes : it would require to include
  all these MIME types in this librairy, which would weigh it
  significantly. This kind of effort maybe is not worth for the use that
  this function has in this entire librairy.

  More informations in the RFC specifications :
  - https://tools.ietf.org/html/rfc2045
  - https://tools.ietf.org/html/rfc2046
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
*/
// Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).
var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len
// Handle "charset" in "text/*"

var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len
// Handle "boundary" in "multipart/*"

var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len

function isMimeType(str) {
  (0, _assertString.default)(str);
  return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isMimeType = unwrapExports(isMimeType_1);

var isLatLong = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

function _default(str) {
  (0, _assertString.default)(str);
  if (!str.includes(',')) return false;
  var pair = str.split(',');
  return lat.test(pair[0]) && long.test(pair[1]);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isLatLong$1 = unwrapExports(isLatLong);

var isPostalCode = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.locales = void 0;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;
var patterns = {
  AD: /^AD\d{3}$/,
  AT: fourDigit,
  AU: fourDigit,
  BE: fourDigit,
  BG: fourDigit,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: fourDigit,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: fiveDigit,
  DK: fourDigit,
  DZ: fiveDigit,
  EE: fiveDigit,
  ES: fiveDigit,
  FI: fiveDigit,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  HR: /^([1-5]\d{4}$)/,
  HU: fourDigit,
  IL: fiveDigit,
  IN: sixDigit,
  IS: threeDigit,
  IT: fiveDigit,
  JP: /^\d{3}\-\d{4}$/,
  KE: fiveDigit,
  LI: /^(948[5-9]|949[0-7])$/,
  LT: /^LT\-\d{5}$/,
  LU: fourDigit,
  LV: /^LV\-\d{4}$/,
  MX: fiveDigit,
  NL: /^\d{4}\s?[a-z]{2}$/i,
  NO: fourDigit,
  PL: /^\d{2}\-\d{3}$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: sixDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^\d{3}\s?\d{2}$/,
  SI: fourDigit,
  SK: /^\d{3}\s?\d{2}$/,
  TN: fourDigit,
  TW: /^\d{3}(\d{2})?$/,
  UA: fiveDigit,
  US: /^\d{5}(-\d{4})?$/,
  ZA: fourDigit,
  ZM: fiveDigit
};
var locales = Object.keys(patterns);
exports.locales = locales;

function _default(str, locale) {
  (0, _assertString.default)(str);

  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === 'any') {
    for (var key in patterns) {
      if (patterns.hasOwnProperty(key)) {
        var pattern = patterns[key];

        if (pattern.test(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}
});

const isPostalCode$1 = unwrapExports(isPostalCode);
var isPostalCode_1 = isPostalCode.locales;

var ltrim_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ltrim(str, chars) {
  (0, _assertString.default)(str);
  var pattern = chars ? new RegExp("^[".concat(chars, "]+"), 'g') : /^\s+/g;
  return str.replace(pattern, '');
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const ltrim = unwrapExports(ltrim_1);

var rtrim_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rtrim(str, chars) {
  (0, _assertString.default)(str);
  var pattern = chars ? new RegExp("[".concat(chars, "]")) : /\s/;
  var idx = str.length - 1;

  for (; idx >= 0 && pattern.test(str[idx]); idx--) {
    ;
  }

  return idx < str.length ? str.substr(0, idx + 1) : str;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const rtrim = unwrapExports(rtrim_1);

var trim_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = _interopRequireDefault(rtrim_1);

var _ltrim = _interopRequireDefault(ltrim_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(str, chars) {
  return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const trim = unwrapExports(trim_1);

var _escape = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(str) {
  (0, _assertString.default)(str);
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const _escape$1 = unwrapExports(_escape);

var _unescape = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unescape;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unescape(str) {
  (0, _assertString.default)(str);
  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const _unescape$1 = unwrapExports(_unescape);

var blacklist_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function blacklist(str, chars) {
  (0, _assertString.default)(str);
  return str.replace(new RegExp("[".concat(chars, "]+"), 'g'), '');
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const blacklist = unwrapExports(blacklist_1);

var stripLow_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = _interopRequireDefault(require$$0);

var _blacklist = _interopRequireDefault(blacklist_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripLow(str, keep_new_lines) {
  (0, _assertString.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist.default)(str, chars);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const stripLow = unwrapExports(stripLow_1);

var whitelist_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whitelist;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whitelist(str, chars) {
  (0, _assertString.default)(str);
  return str.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const whitelist = unwrapExports(whitelist_1);

var isWhitelisted_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhitelisted;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWhitelisted(str, chars) {
  (0, _assertString.default)(str);

  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const isWhitelisted = unwrapExports(isWhitelisted_1);

var normalizeEmail_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeEmail;

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_normalize_email_options = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  all_lowercase: true,
  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmail_lowercase: true,
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmail_remove_dots: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  gmail_remove_subaddress: true,
  // Conversts the googlemail.com domain to gmail.com
  gmail_convert_googlemaildotcom: true,
  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcom_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcom_remove_subaddress: true,
  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahoo_lowercase: true,
  // Removes the subaddress (e.g. "-foo") from the email address
  yahoo_remove_subaddress: true,
  // The following conversions are specific to Yandex
  // Lowercases the local part of the Yandex address (known to be case-insensitive)
  yandex_lowercase: true,
  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloud_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  icloud_remove_subaddress: true
}; // List of domains used by iCloud

var icloud_domains = ['icloud.com', 'me.com']; // List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/

var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com']; // List of domains used by Yahoo Mail
// This list is likely incomplete

var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com']; // List of domains used by yandex.ru

var yandex_domains = ['yandex.ru', 'yandex.ua', 'yandex.kz', 'yandex.com', 'yandex.by', 'ya.ru']; // replace single dots, but not multiple consecutive dots

function dotsReplacer(match) {
  if (match.length > 1) {
    return match;
  }

  return '';
}

function normalizeEmail(email, options) {
  options = (0, _merge.default)(options, default_normalize_email_options);
  var raw_parts = email.split('@');
  var domain = raw_parts.pop();
  var user = raw_parts.join('@');
  var parts = [user, domain]; // The domain is always lowercased, as it's case-insensitive per RFC 1035

  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmail_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (options.gmail_remove_dots) {
      // this does not replace consecutive dots like example..email@gmail.com
      parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.gmail_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }

    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
  } else if (icloud_domains.indexOf(parts[1]) >= 0) {
    // Address is iCloud
    if (options.icloud_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.icloud_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
    // Address is Outlook.com
    if (options.outlookdotcom_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.outlookdotcom_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
    // Address is Yahoo
    if (options.yahoo_remove_subaddress) {
      var components = parts[0].split('-');
      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.yahoo_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yandex_domains.indexOf(parts[1]) >= 0) {
    if (options.all_lowercase || options.yandex_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }

    parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preffered
  } else if (options.all_lowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }

  return parts.join('@');
}

module.exports = exports.default;
module.exports.default = exports.default;
});

const normalizeEmail = unwrapExports(normalizeEmail_1);

var validator_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toDate = _interopRequireDefault(toDate_1);

var _toFloat = _interopRequireDefault(toFloat_1);

var _toInt = _interopRequireDefault(toInt_1);

var _toBoolean = _interopRequireDefault(toBoolean_1);

var _equals = _interopRequireDefault(equals_1);

var _contains = _interopRequireDefault(contains_1);

var _matches = _interopRequireDefault(matches_1);

var _isEmail = _interopRequireDefault(isEmail_1);

var _isURL = _interopRequireDefault(isURL_1);

var _isMACAddress = _interopRequireDefault(isMACAddress_1);

var _isIP = _interopRequireDefault(isIP_1);

var _isIPRange = _interopRequireDefault(isIPRange_1);

var _isFQDN = _interopRequireDefault(isFQDN_1);

var _isBoolean = _interopRequireDefault(isBoolean_1);

var _isAlpha = _interopRequireWildcard(isAlpha_1);

var _isAlphanumeric = _interopRequireWildcard(isAlphanumeric_1);

var _isNumeric = _interopRequireDefault(isNumeric_1);

var _isPort = _interopRequireDefault(isPort_1);

var _isLowercase = _interopRequireDefault(isLowercase_1);

var _isUppercase = _interopRequireDefault(isUppercase_1);

var _isAscii = _interopRequireDefault(isAscii_1);

var _isFullWidth = _interopRequireDefault(isFullWidth_1);

var _isHalfWidth = _interopRequireDefault(isHalfWidth_1);

var _isVariableWidth = _interopRequireDefault(isVariableWidth_1);

var _isMultibyte = _interopRequireDefault(isMultibyte_1);

var _isSurrogatePair = _interopRequireDefault(isSurrogatePair_1);

var _isInt = _interopRequireDefault(isInt_1);

var _isFloat = _interopRequireWildcard(isFloat_1);

var _isDecimal = _interopRequireDefault(isDecimal_1);

var _isHexadecimal = _interopRequireDefault(isHexadecimal_1);

var _isDivisibleBy = _interopRequireDefault(isDivisibleBy_1);

var _isHexColor = _interopRequireDefault(isHexColor_1);

var _isISRC = _interopRequireDefault(isISRC_1);

var _isMD = _interopRequireDefault(isMD5_1);

var _isHash = _interopRequireDefault(isHash_1);

var _isJWT = _interopRequireDefault(isJWT_1);

var _isJSON = _interopRequireDefault(isJSON_1);

var _isEmpty = _interopRequireDefault(isEmpty_1);

var _isLength = _interopRequireDefault(isLength_1);

var _isByteLength = _interopRequireDefault(isByteLength_1);

var _isUUID = _interopRequireDefault(isUUID_1);

var _isMongoId = _interopRequireDefault(isMongoId_1);

var _isAfter = _interopRequireDefault(isAfter_1);

var _isBefore = _interopRequireDefault(isBefore_1);

var _isIn = _interopRequireDefault(isIn_1);

var _isCreditCard = _interopRequireDefault(isCreditCard_1);

var _isIdentityCard = _interopRequireDefault(isIdentityCard_1);

var _isISIN = _interopRequireDefault(isISIN_1);

var _isISBN = _interopRequireDefault(isISBN_1);

var _isISSN = _interopRequireDefault(isISSN_1);

var _isMobilePhone = _interopRequireWildcard(isMobilePhone_1);

var _isCurrency = _interopRequireDefault(isCurrency_1);

var _isISO = _interopRequireDefault(isISO8601_1);

var _isRFC = _interopRequireDefault(isRFC3339_1);

var _isISO31661Alpha = _interopRequireDefault(isISO31661Alpha2_1);

var _isISO31661Alpha2 = _interopRequireDefault(isISO31661Alpha3_1);

var _isBase = _interopRequireDefault(isBase64_1);

var _isDataURI = _interopRequireDefault(isDataURI_1);

var _isMagnetURI = _interopRequireDefault(isMagnetURI_1);

var _isMimeType = _interopRequireDefault(isMimeType_1);

var _isLatLong = _interopRequireDefault(isLatLong);

var _isPostalCode = _interopRequireWildcard(isPostalCode);

var _ltrim = _interopRequireDefault(ltrim_1);

var _rtrim = _interopRequireDefault(rtrim_1);

var _trim = _interopRequireDefault(trim_1);

var _escape$1 = _interopRequireDefault(_escape);

var _unescape$1 = _interopRequireDefault(_unescape);

var _stripLow = _interopRequireDefault(stripLow_1);

var _whitelist = _interopRequireDefault(whitelist_1);

var _blacklist = _interopRequireDefault(blacklist_1);

var _isWhitelisted = _interopRequireDefault(isWhitelisted_1);

var _normalizeEmail = _interopRequireDefault(normalizeEmail_1);

var _toString = _interopRequireDefault(toString_1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '10.11.0';
var validator = {
  version: version,
  toDate: _toDate.default,
  toFloat: _toFloat.default,
  toInt: _toInt.default,
  toBoolean: _toBoolean.default,
  equals: _equals.default,
  contains: _contains.default,
  matches: _matches.default,
  isEmail: _isEmail.default,
  isURL: _isURL.default,
  isMACAddress: _isMACAddress.default,
  isIP: _isIP.default,
  isIPRange: _isIPRange.default,
  isFQDN: _isFQDN.default,
  isBoolean: _isBoolean.default,
  isAlpha: _isAlpha.default,
  isAlphaLocales: _isAlpha.locales,
  isAlphanumeric: _isAlphanumeric.default,
  isAlphanumericLocales: _isAlphanumeric.locales,
  isNumeric: _isNumeric.default,
  isPort: _isPort.default,
  isLowercase: _isLowercase.default,
  isUppercase: _isUppercase.default,
  isAscii: _isAscii.default,
  isFullWidth: _isFullWidth.default,
  isHalfWidth: _isHalfWidth.default,
  isVariableWidth: _isVariableWidth.default,
  isMultibyte: _isMultibyte.default,
  isSurrogatePair: _isSurrogatePair.default,
  isInt: _isInt.default,
  isFloat: _isFloat.default,
  isFloatLocales: _isFloat.locales,
  isDecimal: _isDecimal.default,
  isHexadecimal: _isHexadecimal.default,
  isDivisibleBy: _isDivisibleBy.default,
  isHexColor: _isHexColor.default,
  isISRC: _isISRC.default,
  isMD5: _isMD.default,
  isHash: _isHash.default,
  isJWT: _isJWT.default,
  isJSON: _isJSON.default,
  isEmpty: _isEmpty.default,
  isLength: _isLength.default,
  isByteLength: _isByteLength.default,
  isUUID: _isUUID.default,
  isMongoId: _isMongoId.default,
  isAfter: _isAfter.default,
  isBefore: _isBefore.default,
  isIn: _isIn.default,
  isCreditCard: _isCreditCard.default,
  isIdentityCard: _isIdentityCard.default,
  isISIN: _isISIN.default,
  isISBN: _isISBN.default,
  isISSN: _isISSN.default,
  isMobilePhone: _isMobilePhone.default,
  isMobilePhoneLocales: _isMobilePhone.locales,
  isPostalCode: _isPostalCode.default,
  isPostalCodeLocales: _isPostalCode.locales,
  isCurrency: _isCurrency.default,
  isISO8601: _isISO.default,
  isRFC3339: _isRFC.default,
  isISO31661Alpha2: _isISO31661Alpha.default,
  isISO31661Alpha3: _isISO31661Alpha2.default,
  isBase64: _isBase.default,
  isDataURI: _isDataURI.default,
  isMagnetURI: _isMagnetURI.default,
  isMimeType: _isMimeType.default,
  isLatLong: _isLatLong.default,
  ltrim: _ltrim.default,
  rtrim: _rtrim.default,
  trim: _trim.default,
  escape: _escape$1.default,
  unescape: _unescape$1.default,
  stripLow: _stripLow.default,
  whitelist: _whitelist.default,
  blacklist: _blacklist.default,
  isWhitelisted: _isWhitelisted.default,
  normalizeEmail: _normalizeEmail.default,
  toString: _toString.default
};
var _default = validator;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
});

const check = unwrapExports(validator_1);

class Validator {
    constructor(element) {
        this.errors = [];
        this.element = element;
        this.prepare();
    }
    async validate(instance) {
        this.errors = [];
        this.element = instance;
        if (!this.element.novalidate) {
            await this.tests();
        }
        return this.results();
    }
    prepare() {
        this.methods = [];
        if (this.element.required) {
            this.methods.push("required");
        }
        if (this.element.match) {
            this.methods.push("match");
        }
        this.methods.push(this.element.type);
        if (this.element.validates) {
            const methods = this.element.validates.split(',');
            this.methods = [...this.methods, methods];
        }
    }
    results() {
        const valid = (this.errors.length === 0);
        return {
            name: this.element.name,
            value: this.element.value,
            valid: valid,
            errors: this.errors,
        };
    }
    async tests() {
        this.value = await this.element.val();
        this.strength = await this.element.getStrength();
        const result = await this.checkString();
        if (!result) {
            this.checkEmpty();
            this.checkEmail();
            this.checkColor();
            this.checkTelephone();
            this.checkIP();
            this.checkURL();
            this.checkPassword();
            this.checkMatches();
        }
    }
    addError(method, message) {
        this.errors.push({ method, message });
    }
    checkString() {
        const result = typeof this.value === "undefined";
        if (result) {
            this.addError("string", "This field is required.");
        }
        return result;
    }
    checkEmpty() {
        if (check.isIn("required", this.methods)) {
            const result = check.isEmpty(this.value);
            if (result) {
                this.addError("required", "This field is required.");
            }
        }
    }
    checkEmail() {
        if (check.isIn("email", this.methods)) {
            const result = check.isEmail(this.value);
            if (!result) {
                this.addError("email", "Please enter a valid email.");
            }
        }
    }
    checkColor() {
        if (check.isIn("color", this.methods)) {
            const result = check.isHexColor(this.value);
            if (!result) {
                this.addError("color", "Please enter a valid color.");
            }
        }
    }
    checkURL() {
        if (check.isIn("url", this.methods)) {
            const result = check.isURL(this.value);
            if (!result) {
                this.addError("url", "Please enter a valid URL.");
            }
        }
    }
    checkIP() {
        if (check.isIn("ipv4", this.methods)) {
            const result = check.isIP(this.value, 4);
            if (!result) {
                this.addError("ipv4", "Please enter a valid IP Address.");
            }
        }
        if (check.isIn("ipv6", this.methods)) {
            const result = check.isIP(this.value, 6);
            if (!result) {
                this.addError("ipv6", "Please enter a valid IP Address.");
            }
        }
    }
    checkTelephone() {
        if (check.isIn("tel", this.methods)) {
            const result = check.isMobilePhone(this.value, 'any');
            if (!result) {
                this.addError("tel", "Please enter a valid phone number.");
            }
        }
    }
    checkPassword() {
        if (check.isIn("password", this.methods)) {
            const result = this.strength;
            if (result.score < 3) {
                this.addError("password", "This password must be stonger.");
                if (result.feedback.warning) {
                    this.addError("password_warning", result.feedback.warning);
                }
            }
            if (check.isEmail(this.value)) {
                this.element.setStrength(0);
                this.addError("password_warning", "This password is an email.");
            }
        }
    }
    checkMatches() {
        if (check.isIn("match", this.methods)) {
            // @ts-ignore
            if (this.element.__match.value !== this.element.value) {
                this.addError("password_match_warning", "These passwords don't match");
            }
        }
    }
}

//@ts-nocheck
var Tokenfield = 
/******/ (function (modules) {
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/
        }
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
            /******/ Object.defineProperty(exports, name, {
                /******/ configurable: false,
                /******/ enumerable: true,
                /******/ get: getter
                /******/
            });
            /******/
        }
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
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__(__webpack_require__.s = 0);
    /******/
})([
    /* 0 */
    /***/ (function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(1).default;
        /***/
    }),
    /* 1 */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        } return target; };
        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        } } return function (Constructor, protoProps, staticProps) { if (protoProps)
            defineProperties(Constructor.prototype, protoProps); if (staticProps)
            defineProperties(Constructor, staticProps); return Constructor; }; }();
        var _events = __webpack_require__(2);
        var _events2 = _interopRequireDefault(_events);
        var _ajax = __webpack_require__(3);
        var _ajax2 = _interopRequireDefault(_ajax);
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        function _toConsumableArray(arr) { if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        }
        else {
            return Array.from(arr);
        } }
        function _defineProperty(obj, key, value) { if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
        }
        else {
            obj[key] = value;
        } return obj; }
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        } }
        function _possibleConstructorReturn(self, call) { if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Input field with tagging/token/chip capabilities written in raw JavaScript
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * tokenfield 1.3.0 <https://github.com/KaneCohen/tokenfield>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Copyright 2018 Kane Cohen <https://github.com/KaneCohen>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Available under BSD-3-Clause license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */
        var _tokenfields = {};
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
        var reHasRegExpChar = RegExp(reRegExpChar.source);
        var _factory = document.createElement('div');
        var _templates = {
            containerTokenfield: '<div class="tokenfield tokenfield-mode-tokens">\n      <input class="tokenfield-copy-helper"\n        style="display:none;position:fixed;top:-1000px;right:1000px;"\n        tabindex="-1"\n        type="text"\n      />\n      <div class="tokenfield-set">\n        <ul></ul>\n      </div>\n      <input class="tokenfield-input" />\n      <div class="tokenfield-suggest">\n        <ul class="tokenfield-suggest-list"></ul>\n      </div>\n    </div>',
            containerList: '<div class="tokenfield tokenfield-mode-list">\n      <input class="tokenfield-input" />\n      <div class="tokenfield-suggest">\n        <ul class="tokenfield-suggest-list"></ul>\n      </div>\n      <div class="tokenfield-set">\n        <ul></ul>\n      </div>\n    </div>',
            suggestItem: '<li class="tokenfield-suggest-item"></li>',
            setItem: '<li class="tokenfield-set-item">\n      <span class="item-label"></span>\n      <a href="#" class="item-remove" tabindex="-1">\xD7</a>\n      <input class="item-input" type="hidden" />\n    </li>'
        };
        function guid() {
            return ((1 + Math.random()) * 0x10000 | 0).toString(16) + ((1 + Math.random()) * 0x10000 | 0).toString(16);
        }
        function includes(arr, item) {
            return arr.indexOf(item) >= 0;
        }
        function getPath(node) {
            var nodes = [node];
            while (node.parentNode) {
                node = node.parentNode;
                nodes.push(node);
            }
            return nodes;
        }
        function findElement(input) {
            if (input.nodeName) {
                return input;
            }
            else if (typeof input === 'string') {
                return document.querySelector(input);
            }
            return null;
        }
        function build(html, all) {
            if (html.nodeName)
                return html;
            html = html.replace(/(\t|\n$)/g, '');
            _factory.innerHTML = '';
            _factory.innerHTML = html;
            if (all === true) {
                return _factory.childNodes;
            }
            else {
                return _factory.childNodes[0];
            }
        }
        function toString(value) {
            if (typeof value == 'string') {
                return value;
            }
            if (value === null) {
                return '';
            }
            var result = value + '';
            return result === '0' && 1 / value === -Infinity ? '-0' : result;
        }
        function keyToChar(e) {
            if (e.key || e.keyIdentifier) {
                return e.key || String.fromCharCode(parseInt(e.keyIdentifier.substr(2), 16));
            }
            return null;
        }
        function escapeRegex(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
        }
        function makeDefaultsAndOptions() {
            var _defaults = {
                focusedItem: null,
                cache: {},
                timer: null,
                xhr: null,
                suggested: false,
                suggestedItems: [],
                setItems: [],
                events: {},
                delimiters: {}
            };
            var _options = {
                el: null,
                form: true,
                // immediate parent form. Also accepts selectors or elements.
                mode: 'tokenfield',
                addItemOnBlur: false,
                addItemsOnPaste: false,
                keepItemsOrder: true,
                // in the list so that you can retreive correct position on the backend.
                setItems: [],
                items: [],
                // Example: [{id: 143, value: 'Hello World'}, {id: 144, value: 'Foo Bar'}].
                newItems: true,
                multiple: true,
                maxItems: 0,
                minLength: 0,
                keys: {
                    17: 'ctrl',
                    16: 'shift',
                    91: 'meta',
                    8: 'delete',
                    27: 'esc',
                    37: 'left',
                    38: 'up',
                    39: 'right',
                    40: 'down',
                    46: 'delete',
                    65: 'select',
                    67: 'copy',
                    88: 'cut',
                    9: 'delimiter',
                    13: 'delimiter',
                    108: 'delimiter' // Numpad Enter
                },
                matchRegex: '{value}',
                matchFlags: 'i',
                matchStart: false,
                matchEnd: false,
                delimiters: [],
                copyProperty: 'name',
                copyDelimiter: ', ',
                remote: {
                    type: 'GET',
                    url: null,
                    queryParam: 'q',
                    delay: 300,
                    timestampParam: 't',
                    params: {},
                    headers: {}
                },
                placeholder: null,
                inputType: 'text',
                // Accepts text, email, url, and others.
                minChars: 2,
                maxSuggest: 10,
                maxSuggestWindow: 10,
                filterSetItems: true,
                filterMatchCase: false,
                singleInput: false,
                // When set to true - would use tokenfield target element as an input to fill.
                singleInputValue: 'id',
                singleInputDelimiter: ', ',
                itemLabel: 'name',
                itemName: 'items',
                // input field with array property name:
                // name="items[]".
                newItemName: 'items_new',
                // case it was not available from the server:
                // name="items_new[]".
                itemValue: 'id',
                newItemValue: 'name',
                itemData: 'name' // Which property to search for.
            };
            return { _defaults: _defaults, _options: _options };
        }
        var Tokenfield = function (_EventEmitter) {
            _inherits(Tokenfield, _EventEmitter);
            function Tokenfield() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                _classCallCheck(this, Tokenfield);
                var _this = _possibleConstructorReturn(this, (Tokenfield.__proto__ || Object.getPrototypeOf(Tokenfield)).call(this));
                var _makeDefaultsAndOptio = makeDefaultsAndOptions(), _defaults = _makeDefaultsAndOptio._defaults, _options = _makeDefaultsAndOptio._options;
                _this.id = guid();
                _this.key = 'key_' + _this.id;
                _this._vars = _extends({}, _defaults);
                _this._options = _extends({}, _options, options);
                _this._options.keys = _extends({}, _options.keys, options.keys);
                _this._options.remote = _extends({}, _options.remote, options.remote);
                _this._templates = _extends({}, _templates, options.templates);
                _this._vars.setItems = _this._prepareData(_this.remapData(_this._options.setItems || []));
                _this._focused = false;
                _this._input = null;
                _this._form = false;
                _this._html = {};
                var o = _this._options;
                // Make a hash map to simplify filtering later.
                o.delimiters.forEach(function (delimiter) {
                    _this._vars.delimiters[delimiter] = true;
                });
                var el = findElement(o.el);
                if (el) {
                    _this.el = el;
                }
                else {
                    throw new Error('Selector: DOM Element ' + o.el + ' not found.');
                }
                if (o.singleInput) {
                    var _el = findElement(o.singleInput);
                    if (_el) {
                        _this._input = _el;
                    }
                    else {
                        _this._input = _this.el;
                    }
                }
                _this.el.tokenfield = _this;
                if (o.placeholder === null) {
                    o.placeholder = o.el.placeholder || '';
                }
                if (o.form) {
                    var form = false;
                    if (o.form.nodeName) {
                        form = o.form;
                    }
                    else if (o.form === true) {
                        var node = _this.el;
                        while (node.parentNode) {
                            if (node.nodeName === 'FORM') {
                                form = node;
                                break;
                            }
                            node = node.parentNode;
                        }
                    }
                    else if (typeof form == 'string') {
                        form = document.querySelector(form);
                        if (!form) {
                            throw new Error('Selector: DOM Element ' + o.form + ' not found.');
                        }
                    }
                    _this._form = form;
                }
                else {
                    throw new Error('Cannot create tokenfield without DOM Element.');
                }
                _tokenfields[_this.id] = _this;
                _this._render();
                return _this;
            }
            _createClass(Tokenfield, [{
                    key: '_render',
                    value: function _render() {
                        var o = this._options;
                        var html = this._html;
                        if (o.mode === 'tokenfield') {
                            html.container = build(this._templates.containerTokenfield);
                        }
                        else {
                            html.container = build(this._templates.containerList);
                        }
                        html.suggest = html.container.querySelector('.tokenfield-suggest');
                        html.suggestList = html.container.querySelector('.tokenfield-suggest-list');
                        html.items = html.container.querySelector('.tokenfield-set > ul');
                        html.input = html.container.querySelector('.tokenfield-input');
                        html.input.setAttribute('type', o.inputType);
                        html.input.placeholder = this._vars.setItems.length ? '' : o.placeholder;
                        html.copyHelper = html.container.querySelector('.tokenfield-copy-helper');
                        o.el.style.display = 'none';
                        html.suggest.style.display = 'none';
                        this._renderSizer();
                        // Set tokenfield in DOM.
                        html.container.tokenfield = this;
                        o.el.parentElement.insertBefore(html.container, o.el);
                        html.container.insertBefore(o.el, html.container.firstChild);
                        this._setEvents();
                        this._renderItems();
                        if (o.mode === 'tokenfield') {
                            this._resizeInput();
                        }
                        return this;
                    }
                }, {
                    key: '_renderSizer',
                    value: function _renderSizer() {
                        var html = this._html;
                        var b = this._getBounds();
                        var style = window.getComputedStyle(html.container);
                        var compensate = parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);
                        var styles = {
                            width: 'auto',
                            height: 'auto',
                            overflow: 'hidden',
                            whiteSpace: 'pre',
                            maxWidth: b.width - compensate + 'px',
                            position: 'fixed',
                            top: -10000 + 'px',
                            left: 10000 + 'px',
                            fontSize: style.fontSize,
                            paddingLeft: style.paddingLeft,
                            paddingRight: style.paddingRight
                        };
                        html.sizer = document.createElement('div');
                        html.sizer.id = 'tokenfield-sizer-' + this.id;
                        for (var key in styles) {
                            html.sizer.style[key] = styles[key];
                        }
                        html.container.appendChild(html.sizer);
                    }
                }, {
                    key: '_refreshInput',
                    value: function _refreshInput() {
                        var empty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                        var v = this._vars;
                        var html = this._html;
                        if (empty)
                            html.input.value = '';
                        if (this._options.mode === 'tokenfield') {
                            this._resizeInput();
                            var placeholder = v.setItems.length ? '' : this._options.placeholder;
                            html.input.setAttribute('placeholder', placeholder);
                        }
                        return this;
                    }
                }, {
                    key: '_resizeInput',
                    value: function _resizeInput() {
                        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                        var html = this._html;
                        var b = this._getBounds();
                        var style = window.getComputedStyle(html.container);
                        var compensate = parseInt(style.paddingRight, 10) + parseInt(style.borderRightWidth, 10);
                        var fullCompensate = compensate + parseInt(style.paddingLeft, 10) + parseInt(style.borderLeftWidth, 10);
                        html.sizer.innerHTML = val;
                        html.sizer.style.maxWidth = b.width - compensate + 'px';
                        if (b.width === 0) {
                            html.input.style.width = '100%';
                            return;
                        }
                        else {
                            html.input.style.width = '20px';
                        }
                        var sb = html.sizer.getBoundingClientRect();
                        var ib = html.input.getBoundingClientRect();
                        var rw = b.width - (ib.left - b.left) - compensate;
                        if (sb.width > rw) {
                            html.input.style.width = b.width - fullCompensate + 'px';
                        }
                        else {
                            html.input.style.width = rw + 'px';
                        }
                    }
                }, {
                    key: '_fetchData',
                    value: function _fetchData(val) {
                        var _this2 = this;
                        var v = this._vars;
                        var o = this._options;
                        var r = o.remote;
                        var reqData = _extends({}, o.params);
                        for (var key in r.params) {
                            reqData[key] = r.params[key];
                        }
                        if (r.limit) {
                            reqData[r.limit] = o.remote.limit;
                        }
                        reqData[r.queryParam] = val;
                        reqData[r.timestampParam] = Math.round(new Date().getTime() / 1000);
                        v.xhr = (0, _ajax2.default)(reqData, o.remote, function () {
                            if (v.xhr && v.xhr.readyState == 4) {
                                if (v.xhr.status == 200) {
                                    var response = JSON.parse(v.xhr.responseText);
                                    v.cache[val] = response;
                                    var data = _this2._prepareData(_this2.remapData(response));
                                    var items = _this2._filterData(val, data);
                                    v.suggestedItems = o.filterSetItems ? _this2._filterSetItems(items) : items;
                                    _this2.showSuggestions();
                                }
                                else if (v.xhr.status > 0) {
                                    throw new Error('Error while loading remote data.');
                                }
                                _this2._abortXhr();
                            }
                        });
                    }
                    // Overwriteable method where you can change given data to appropriate format.
                }, {
                    key: 'remapData',
                    value: function remapData(data) {
                        return data;
                    }
                }, {
                    key: '_prepareData',
                    value: function _prepareData(data) {
                        var _this3 = this;
                        return data.map(function (item) {
                            return _extends({}, item, _defineProperty({}, _this3.key, guid()));
                        });
                    }
                }, {
                    key: '_filterData',
                    value: function _filterData(val, data) {
                        var o = this._options;
                        var regex = o.matchRegex.replace('{value}', escapeRegex(val));
                        if (o.matchStart) {
                            regex = '^' + regex;
                        }
                        else if (o.matchEnd) {
                            regex = regex + '$';
                        }
                        var pattern = new RegExp(regex, o.matchFlags);
                        return data.filter(function (item) {
                            return pattern.test(item[o.itemData]);
                        });
                    }
                }, {
                    key: '_abortXhr',
                    value: function _abortXhr() {
                        var v = this._vars;
                        if (v.xhr !== null) {
                            v.xhr.abort();
                            v.xhr = null;
                        }
                    }
                }, {
                    key: '_filterSetItems',
                    value: function _filterSetItems(items) {
                        var key = this._options.itemValue;
                        var v = this._vars;
                        if (!v.setItems.length)
                            return items;
                        var setKeys = v.setItems.map(function (item) {
                            return item[key];
                        });
                        return items.filter(function (item) {
                            if (setKeys.indexOf(item[key]) === -1) {
                                return true;
                            }
                            return false;
                        });
                    }
                }, {
                    key: '_setEvents',
                    value: function _setEvents() {
                        var v = this._vars;
                        var html = this._html;
                        v.events.onClick = this._onClick.bind(this);
                        v.events.onMouseDown = this._onMouseDown.bind(this);
                        v.events.onMouseOver = this._onMouseOver.bind(this);
                        v.events.onFocus = this._onFocus.bind(this);
                        v.events.onResize = this._onResize.bind(this);
                        v.events.onReset = this._onReset.bind(this);
                        v.events.onKeyDown = this._onKeyDown.bind(this);
                        v.events.onFocusOut = this._onFocusOut.bind(this);
                        html.container.addEventListener('click', v.events.onClick);
                        // Attach document event only once.
                        if (Object.keys(_tokenfields).length === 1) {
                            document.addEventListener('mousedown', v.events.onMouseDown);
                            window.addEventListener('resize', v.events.onResize);
                        }
                        if (this._form && this._form.nodeName) {
                            this._form.addEventListener('reset', v.events.onReset);
                        }
                        html.suggestList.addEventListener('mouseover', v.events.onMouseOver);
                        html.input.addEventListener('focus', v.events.onFocus);
                    }
                }, {
                    key: '_onMouseOver',
                    value: function _onMouseOver(e) {
                        var target = e.target;
                        if (target.classList.contains('tokenfield-suggest-item')) {
                            var selected = [].slice.call(this._html.suggestList.querySelectorAll('.selected'));
                            selected.forEach(function (item) {
                                if (item !== target)
                                    item.classList.remove('selected');
                            });
                            target.classList.add('selected');
                            this._selectItem(target.key, false);
                            this._refreshItemsSelection();
                        }
                    }
                }, {
                    key: '_onReset',
                    value: function _onReset() {
                        this.setItems(this._options.setItems);
                    }
                }, {
                    key: '_onFocus',
                    value: function _onFocus() {
                        var v = this._vars;
                        var html = this._html;
                        var o = this._options;
                        html.input.removeEventListener('keydown', v.events.onKeyDown);
                        html.input.addEventListener('keydown', v.events.onKeyDown);
                        html.input.addEventListener('focusout', v.events.onFocusOut);
                        if (o.addItemsOnPaste) {
                            v.events.onPaste = this._onPaste.bind(this);
                            html.input.addEventListener('paste', v.events.onPaste);
                        }
                        this._focused = true;
                        this._html.container.classList.add('focused');
                        this._resizeInput();
                        if (html.input.value.trim().length >= o.minChars) {
                            this.showSuggestions();
                        }
                    }
                }, {
                    key: '_onFocusOut',
                    value: function _onFocusOut(e) {
                        var v = this._vars;
                        var o = this._options;
                        var html = this._html;
                        html.input.removeEventListener('keydown', v.events.onKeyDown);
                        html.input.removeEventListener('focusout', v.events.onFocusOut);
                        if (typeof v.events.onPaste !== 'undefined') {
                            html.input.removeEventListener('paste', v.events.onPaste);
                        }
                        if (e.relatedTarget && e.relatedTarget === html.copyHelper) {
                            return;
                        }
                        var canAddItem = o.multiple && !o.maxItems || !o.multiple && !v.setItems.length || o.multiple && o.maxItems && v.setItems.length < o.maxItems;
                        if (this._focused && o.addItemOnBlur && canAddItem && this._newItem(html.input.value)) {
                            this._renderItems()._refreshInput();
                        }
                        else {
                            this._defocusItems()._renderItems();
                        }
                        this._focused = false;
                        this._html.container.classList.remove('focused');
                    }
                }, {
                    key: '_onMouseDown',
                    value: function _onMouseDown(e) {
                        var tokenfield = null;
                        for (var key in _tokenfields) {
                            if (_tokenfields[key]._html.container.contains(e.target)) {
                                tokenfield = _tokenfields[key];
                                break;
                            }
                        }
                        if (tokenfield) {
                            for (var _key in _tokenfields) {
                                if (_key !== tokenfield.id) {
                                    _tokenfields[_key].hideSuggestions();
                                    _tokenfields[_key].blur();
                                }
                            }
                            // Prevent input blur.
                            if (e.target !== tokenfield._html.input) {
                                e.preventDefault();
                            }
                        }
                        else {
                            for (var _key2 in _tokenfields) {
                                _tokenfields[_key2].hideSuggestions();
                                _tokenfields[_key2].blur();
                            }
                        }
                    }
                }, {
                    key: '_onResize',
                    value: function _onResize() {
                        for (var key in _tokenfields) {
                            _tokenfields[key]._resizeInput(_tokenfields[key]._html.input.value);
                        }
                    }
                }, {
                    key: '_onPaste',
                    value: function _onPaste(e) {
                        var _this4 = this;
                        var v = this._vars;
                        var o = this._options;
                        var val = e.clipboardData.getData('text');
                        var tokens = [val];
                        // Break input using delimiters option.
                        if (o.delimiters.length) {
                            var search = o.delimiters.join('|');
                            var splitRegex = new RegExp('(' + search + ')', 'ig');
                            tokens = val.split(splitRegex);
                        }
                        var items = tokens.map(function (token) {
                            return token.trim();
                        }).filter(function (token) {
                            return token.length > 0 && token.length >= o.minLength && typeof v.delimiters[token] === 'undefined';
                        }).map(function (token) {
                            return _this4._newItem(token);
                        });
                        if (items.length) {
                            setTimeout(function () {
                                _this4._renderItems()._refreshInput()._deselectItems().hideSuggestions();
                            }, 1);
                            e.preventDefault();
                        }
                    }
                }, {
                    key: '_onKeyDown',
                    value: function _onKeyDown(e) {
                        var _this5 = this;
                        var v = this._vars;
                        var o = this._options;
                        var html = this._html;
                        if (o.maxItems && v.setItems.length >= o.maxItems) {
                            e.preventDefault();
                        }
                        if (o.mode === 'tokenfield') {
                            setTimeout(function () {
                                _this5._resizeInput(html.input.value);
                            }, 1);
                        }
                        var key = keyToChar(e);
                        if (typeof o.keys[e.keyCode] !== 'undefined' || includes(o.delimiters, key)) {
                            if (this._keyAction(e))
                                return true;
                        }
                        else {
                            this._defocusItems()._refreshItems();
                        }
                        clearTimeout(v.timer);
                        this._abortXhr();
                        if (!o.maxItems || v.setItems.length < o.maxItems) {
                            setTimeout(function () {
                                _this5._keyInput(e);
                            }, 1);
                        }
                    }
                }, {
                    key: '_keyAction',
                    value: function _keyAction(e) {
                        var _this6 = this;
                        var key = this.key;
                        var item = null;
                        var v = this._vars;
                        var o = this._options;
                        var html = this._html;
                        var keyName = o.keys[e.keyCode];
                        var val = html.input.value.trim();
                        var keyChar = keyToChar(e);
                        if (includes(o.delimiters, keyChar) && typeof keyName === 'undefined') {
                            keyName = 'delimiter';
                        }
                        var selected = this._getSelectedItems();
                        if (selected.length) {
                            item = selected[0];
                        }
                        switch (keyName) {
                            case 'esc':
                                this._deselectItems()._defocusItems()._renderItems().hideSuggestions();
                                break;
                            case 'up':
                                if (this._vars.suggested) {
                                    this._selectPrevItem()._refreshItemsSelection();
                                    e.preventDefault();
                                }
                                this._defocusItems()._renderItems();
                                break;
                            case 'down':
                                if (this._vars.suggested) {
                                    this._selectNextItem()._refreshItemsSelection();
                                    e.preventDefault();
                                }
                                this._defocusItems()._renderItems();
                                break;
                            case 'left':
                                if (this.getFocusedItems().length || !html.input.selectionStart && !html.input.selectionEnd) {
                                    this._focusPrevItem(e.shiftKey);
                                    e.preventDefault();
                                }
                                break;
                            case 'right':
                                if (this.getFocusedItems().length || html.input.selectionStart === val.length) {
                                    this._focusNextItem(e.shiftKey);
                                    e.preventDefault();
                                }
                                break;
                            case 'delimiter':
                                this._abortXhr();
                                this._defocusItems();
                                if (!o.multiple && v.setItems.length >= 1) {
                                    return false;
                                }
                                val = this.onInput(val, e);
                                if (item) {
                                    this._addItem(item);
                                }
                                else if (val.length) {
                                    item = this._newItem(val);
                                }
                                if (item) {
                                    this._renderItems().focus()._refreshInput()._refreshSuggestions()._deselectItems();
                                }
                                e.preventDefault();
                                break;
                            case 'select':
                                if (!val.length && (e.ctrlKey || e.metaKey)) {
                                    this._vars.setItems.forEach(function (item) {
                                        item.focused = true;
                                    });
                                    this._refreshItems();
                                }
                                else {
                                    return false;
                                }
                                break;
                            case 'cut':
                                {
                                    var focusedItems = this.getFocusedItems();
                                    if (focusedItems.length && (e.ctrlKey || e.metaKey)) {
                                        this._copy()._delete(e);
                                    }
                                    else {
                                        return false;
                                    }
                                    break;
                                }
                            case 'copy':
                                {
                                    var _focusedItems = this.getFocusedItems();
                                    if (_focusedItems.length && (e.ctrlKey || e.metaKey)) {
                                        this._copy();
                                    }
                                    else {
                                        return false;
                                    }
                                    break;
                                }
                            case 'delete':
                                {
                                    this._abortXhr();
                                    var _focusedItems2 = this.getFocusedItems();
                                    if (!html.input.selectionEnd && e.keyCode === 8 || html.input.selectionStart === val.length && e.keyCode === 46 || _focusedItems2.length) {
                                        this._delete(e);
                                    }
                                    else {
                                        v.timer = setTimeout(function () {
                                            _this6._keyInput(e);
                                        }, o.delay);
                                    }
                                    break;
                                }
                            default:
                                break;
                        }
                        return true;
                    }
                }, {
                    key: '_copy',
                    value: function _copy() {
                        var o = this._options;
                        var html = this._html;
                        var copyString = this.getFocusedItems().map(function (item) {
                            return item[o.copyProperty];
                        }).join(o.copyDelimiter);
                        html.copyHelper.style.display = 'block';
                        html.copyHelper.value = copyString;
                        html.copyHelper.focus();
                        html.copyHelper.select();
                        document.execCommand('copy');
                        html.copyHelper.style.display = 'none';
                        html.copyHelper.value = '';
                        html.input.focus();
                        return this;
                    }
                }, {
                    key: '_delete',
                    value: function _delete(e) {
                        var _this7 = this;
                        var v = this._vars;
                        var o = this._options;
                        var key = this.key;
                        var html = this._html;
                        var focusedItems = this.getFocusedItems();
                        if (o.mode === 'tokenfield' && v.setItems.length) {
                            if (focusedItems.length) {
                                focusedItems.forEach(function (item) {
                                    _this7._removeItem(item[key]);
                                });
                                this._refreshSuggestions()._keyInput(e);
                            }
                            else if (!html.input.selectionStart) {
                                this._focusItem(v.setItems[v.setItems.length - 1][key]);
                            }
                        }
                        else if (focusedItems.length) {
                            focusedItems.forEach(function (item) {
                                _this7._removeItem(item[key]);
                            });
                            this._refreshSuggestions()._keyInput(e);
                        }
                        this._renderItems()._refreshInput(false);
                        return this;
                    }
                }, {
                    key: '_keyInput',
                    value: function _keyInput(e) {
                        var _this8 = this;
                        var v = this._vars;
                        var o = this._options;
                        var html = this._html;
                        this._defocusItems()._refreshItems();
                        var val = this.onInput(html.input.value.trim(), e);
                        if (e.type === 'keydown') {
                            this.emit('input', this, val, e);
                        }
                        if (val.length < o.minChars) {
                            this.hideSuggestions();
                            return false;
                        }
                        if (!o.multiple && v.setItems.length >= 1) {
                            return false;
                        }
                        // Check if we have cache with this val.
                        if (typeof v.cache[val] === 'undefined') {
                            // Get new data.
                            if (o.remote.url) {
                                v.timer = setTimeout(function () {
                                    _this8._fetchData(val);
                                }, o.delay);
                            }
                            else if (!o.remote.url && o.items.length) {
                                var data = this._prepareData(o.items);
                                var items = this._filterData(val, data);
                                v.suggestedItems = o.filterSetItems ? this._filterSetItems(items) : items;
                                this.showSuggestions();
                            }
                        }
                        else {
                            // Work with cached data.
                            var _data = this._prepareData(this.remapData(v.cache[val]));
                            var _items = this._filterData(val, _data);
                            v.suggestedItems = o.filterSetItems ? this._filterSetItems(_items) : _items;
                            this.showSuggestions();
                        }
                        return this;
                    }
                }, {
                    key: '_onClick',
                    value: function _onClick(e) {
                        var target = e.target;
                        if (target.classList.contains('item-remove')) {
                            e.preventDefault();
                            this._removeItem(target.key)._defocusItems()._renderItems()._refreshInput(false)._keyInput(e);
                        }
                        else if (target.classList.contains('tokenfield-suggest-item')) {
                            var item = this._getSuggestedItem(target.key);
                            this._addItem(item)._renderItems()._refreshInput()._refreshSuggestions();
                        }
                        else {
                            var setItem = getPath(target).filter(function (node) {
                                return node.classList && node.classList.contains('tokenfield-set-item');
                            })[0];
                            if (setItem) {
                                this._focusItem(setItem.key, e.shiftKey, e.ctrlKey || e.metaKey, true);
                                this._refreshItems();
                            }
                            else {
                                this._keyInput(e);
                            }
                        }
                        this.focus();
                    }
                }, {
                    key: '_selectPrevItem',
                    value: function _selectPrevItem() {
                        var key = this.key;
                        var o = this._options;
                        var items = this._vars.suggestedItems;
                        var index = this._getSelectedItemIndex();
                        if (!items.length) {
                            return this;
                        }
                        if (index !== null) {
                            if (index === 0) {
                                if (o.newItems) {
                                    this._deselectItems();
                                }
                                else {
                                    this._selectItem(items[items.length - 1][key]);
                                }
                            }
                            else {
                                this._selectItem(items[index - 1][key]);
                            }
                        }
                        else {
                            this._selectItem(items[items.length - 1][key]);
                        }
                        return this;
                    }
                }, {
                    key: '_selectNextItem',
                    value: function _selectNextItem() {
                        var key = this.key;
                        var o = this._options;
                        var items = this._vars.suggestedItems;
                        var index = this._getSelectedItemIndex();
                        if (!items.length) {
                            return this;
                        }
                        if (index !== null) {
                            if (index === items.length - 1) {
                                if (o.newItems) {
                                    this._deselectItems();
                                }
                                else {
                                    this._selectItem(items[0][key]);
                                }
                            }
                            else {
                                this._selectItem(items[index + 1][key]);
                            }
                        }
                        else {
                            this._selectItem(items[0][key]);
                        }
                        return this;
                    }
                }, {
                    key: '_focusPrevItem',
                    value: function _focusPrevItem() {
                        var multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                        var key = this.key;
                        var items = this._vars.setItems;
                        var index = this._getFocusedItemIndex();
                        if (!items.length) {
                            return this;
                        }
                        if (index !== null) {
                            if (index === 0 && !multiple) {
                                this._defocusItems();
                            }
                            else if (index === 0 && multiple) {
                                var lastFocused = this._getFocusedItemIndex(true);
                                this._defocusItem(items[lastFocused][key]);
                            }
                            else {
                                this._focusItem(items[index - 1][key], multiple, false, true);
                            }
                        }
                        else {
                            this._focusItem(items[items.length - 1][key], false, false, true);
                        }
                        this._refreshItems();
                        return this;
                    }
                }, {
                    key: '_focusNextItem',
                    value: function _focusNextItem() {
                        var multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                        var key = this.key;
                        var items = this._vars.setItems;
                        var index = this._getFocusedItemIndex(true);
                        if (!items.length) {
                            return this;
                        }
                        if (index !== null) {
                            if (index === items.length - 1 && !multiple) {
                                this._defocusItems();
                            }
                            else if (index === items.length - 1 && multiple) {
                                this._focusItem(items[0][key], multiple);
                            }
                            else {
                                this._focusItem(items[index + 1][key], multiple);
                            }
                        }
                        else {
                            this._focusItem(items[0][key], false);
                        }
                        this._refreshItems();
                        return this;
                    }
                }, {
                    key: '_getSelectedItems',
                    value: function _getSelectedItems() {
                        var key = this.key;
                        var setIds = this._vars.setItems.map(function (item) {
                            return item[key];
                        });
                        return this._vars.suggestedItems.filter(function (v) {
                            return v.selected && setIds.indexOf(v[key]) < 0;
                        });
                    }
                }, {
                    key: '_selectItem',
                    value: function _selectItem(key) {
                        var _this9 = this;
                        var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        this._vars.suggestedItems.forEach(function (v) {
                            v.selected = v[_this9.key] === key;
                            if (v.selected && scroll) {
                                var height = parseInt(_this9._html.suggest.style.maxHeight, 10);
                                if (height) {
                                    var listBounds = _this9._html.suggestList.getBoundingClientRect();
                                    var elBounds = v.el.getBoundingClientRect();
                                    var top = elBounds.top - listBounds.top;
                                    var bottom = top + elBounds.height;
                                    if (bottom >= height + _this9._html.suggest.scrollTop) {
                                        _this9._html.suggest.scrollTop = bottom - height;
                                    }
                                    else if (top < _this9._html.suggest.scrollTop) {
                                        _this9._html.suggest.scrollTop = top;
                                    }
                                }
                            }
                        });
                    }
                }, {
                    key: '_deselectItem',
                    value: function _deselectItem(key) {
                        var _this10 = this;
                        this._vars.suggestedItems.every(function (v) {
                            if (v[_this10.key] === key) {
                                v.selected = false;
                                return false;
                            }
                            return true;
                        });
                        return this;
                    }
                }, {
                    key: '_deselectItems',
                    value: function _deselectItems() {
                        this._vars.suggestedItems.forEach(function (v) {
                            v.selected = false;
                        });
                        return this;
                    }
                }, {
                    key: '_refreshItemsSelection',
                    value: function _refreshItemsSelection() {
                        this._vars.suggestedItems.forEach(function (v) {
                            if (v.selected && v.el) {
                                v.el.classList.add('selected');
                            }
                            else if (v.el) {
                                v.el.classList.remove('selected');
                            }
                        });
                    }
                }, {
                    key: '_getSelectedItemIndex',
                    value: function _getSelectedItemIndex() {
                        var index = null;
                        this._vars.suggestedItems.every(function (v, k) {
                            if (v.selected) {
                                index = k;
                                return false;
                            }
                            return true;
                        });
                        return index;
                    }
                }, {
                    key: '_getFocusedItemIndex',
                    value: function _getFocusedItemIndex() {
                        var last = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                        var index = null;
                        this._vars.setItems.every(function (v, k) {
                            if (v.focused) {
                                index = k;
                                if (!last) {
                                    return false;
                                }
                            }
                            return true;
                        });
                        return index;
                    }
                }, {
                    key: '_getItem',
                    value: function _getItem(val) {
                        var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                        if (prop === null)
                            prop = this.key;
                        var items = this._filterItems(this._vars.setItems, val, prop);
                        return items.length ? items[0] : null;
                    }
                }, {
                    key: '_getSuggestedItem',
                    value: function _getSuggestedItem(val) {
                        var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                        if (prop === null)
                            prop = this.key;
                        var items = this._filterItems(this._vars.suggestedItems, val, prop);
                        return items.length ? items[0] : null;
                    }
                }, {
                    key: '_getAvailableItem',
                    value: function _getAvailableItem(val) {
                        var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                        if (prop === null)
                            prop = this.key;
                        var items = this._filterItems(this._options.items, val, prop);
                        return items.length ? items[0] : null;
                    }
                }, {
                    key: '_filterItems',
                    value: function _filterItems(items, val, prop) {
                        var matchCase = this._options.filterMatchCase;
                        return items.filter(function (v) {
                            if (typeof v[prop] === 'string' && typeof val === 'string') {
                                if (matchCase)
                                    return v[prop] === val;
                                return v[prop].toLowerCase() == val.toLowerCase();
                            }
                            return v[prop] == val;
                        });
                    }
                }, {
                    key: '_removeItem',
                    value: function _removeItem(key) {
                        var _this11 = this;
                        this._vars.setItems.every(function (item, k) {
                            if (item[_this11.key] === key) {
                                _this11.emit('removeToken', _this11, item);
                                _this11._vars.setItems.splice(k, 1);
                                _this11.emit('removedToken', _this11, item);
                                _this11.emit('change', _this11);
                                return false;
                            }
                            return true;
                        });
                        return this;
                    }
                }, {
                    key: '_addItem',
                    value: function _addItem(item) {
                        item.focused = false;
                        var o = this._options;
                        // Check if item already exists in a given list.
                        if (item.isNew && !this._getItem(item[o.itemData], o.itemData) || !this._getItem(item[o.itemValue], o.itemValue)) {
                            this.emit('addToken', this, item);
                            if (!this._options.maxItems || this._options.maxItems && this._vars.setItems.length < this._options.maxItems) {
                                item.selected = false;
                                var clonedItem = _extends({}, item);
                                this._vars.setItems.push(clonedItem);
                                this.emit('addedToken', this, clonedItem);
                                this.emit('change', this);
                            }
                        }
                        return this;
                    }
                }, {
                    key: 'getFocusedItem',
                    value: function getFocusedItem() {
                        var items = this._vars.setItems.filter(function (item) {
                            return item.focused;
                        })[0];
                        if (items.length)
                            return items[0];
                        return null;
                    }
                }, {
                    key: 'getFocusedItems',
                    value: function getFocusedItems() {
                        return this._vars.setItems.filter(function (item) {
                            return item.focused;
                        });
                    }
                }, {
                    key: '_focusItem',
                    value: function _focusItem(key) {
                        var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        var _this12 = this;
                        var ctrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                        var add = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                        if (shift) {
                            var first = null;
                            var last = null;
                            var target = null;
                            var length = this._vars.setItems.length;
                            this._vars.setItems.forEach(function (item, k) {
                                if (item[_this12.key] === key) {
                                    target = k;
                                }
                                if (first === null && item.focused) {
                                    first = k;
                                }
                                if (item.focused) {
                                    last = k;
                                }
                            });
                            if ((target === 0 || target === length - 1) && first === null && last === null) {
                                return;
                            }
                            else if (first === null && last === null) {
                                this._vars.setItems[target].focused = true;
                            }
                            else if (target === 0 && last === length - 1 && !add) {
                                this._vars.setItems[first].focused = false;
                            }
                            else {
                                first = Math.min(target, first);
                                last = Math.max(target, last);
                                this._vars.setItems.forEach(function (item, k) {
                                    item.focused = target === k || k >= first && k <= last;
                                });
                            }
                        }
                        else {
                            this._vars.setItems.forEach(function (item) {
                                if (ctrl) {
                                    item.focused = item[_this12.key] === key ? !item.focused : item.focused;
                                }
                                else {
                                    item.focused = item[_this12.key] === key;
                                }
                            });
                        }
                        return this;
                    }
                }, {
                    key: '_defocusItem',
                    value: function _defocusItem(key) {
                        var _this13 = this;
                        return this._vars.setItems.filter(function (item) {
                            if (item[_this13.key] === key) {
                                item.focused = false;
                            }
                        });
                    }
                }, {
                    key: '_defocusItems',
                    value: function _defocusItems() {
                        this._vars.setItems.forEach(function (item) {
                            item.focused = false;
                        });
                        return this;
                    }
                }, {
                    key: '_newItem',
                    value: function _newItem(value) {
                        var o = this._options;
                        if (typeof value === 'string' && (!value.length || value.length < o.minLength))
                            return null;
                        var item = this._getItem(value, o.itemData) || this._getSuggestedItem(value, o.itemData) || this._getAvailableItem(value, o.itemData);
                        if (!item && o.newItems) {
                            var _item;
                            item = (_item = {
                                isNew: true
                            }, _defineProperty(_item, this.key, guid()), _defineProperty(_item, o.itemData, value), _item);
                            this.emit('newToken', this, item);
                        }
                        if (item) {
                            this._addItem(item);
                            return item;
                        }
                        return null;
                    }
                    // Wrapper for build function in case some of the functions are overwritten.
                }, {
                    key: '_buildEl',
                    value: function _buildEl(html) {
                        return build(html);
                    }
                }, {
                    key: '_getBounds',
                    value: function _getBounds() {
                        return this._html.container.getBoundingClientRect();
                    }
                }, {
                    key: '_renderItems',
                    value: function _renderItems() {
                        var _this14 = this;
                        var v = this._vars;
                        var o = this._options;
                        var html = this._html;
                        html.items.innerHTML = '';
                        v.setItems.forEach(function (item, k) {
                            var itemEl = _this14._renderItem(item, k);
                            html.items.appendChild(itemEl);
                            item.el = itemEl;
                            if (item.focused) {
                                item.el.classList.add('focused');
                            }
                            else {
                                item.el.classList.remove('focused');
                            }
                        });
                        if (v.setItems.length > 1 && o.mode === 'tokenfield') {
                            html.input.setAttribute('placeholder', '');
                        }
                        if (this._input) {
                            this._input.value = v.setItems.map(function (item) {
                                return item[o.singleInputValue];
                            }).join(o.singleInputDelimiter);
                        }
                        return this;
                    }
                }, {
                    key: '_refreshItems',
                    value: function _refreshItems() {
                        var v = this._vars;
                        v.setItems.forEach(function (item) {
                            if (item.el) {
                                if (item.focused) {
                                    item.el.classList.add('focused');
                                }
                                else {
                                    item.el.classList.remove('focused');
                                }
                            }
                        });
                    }
                }, {
                    key: '_renderItem',
                    value: function _renderItem(item, k) {
                        var o = this._options;
                        var itemHtml = this.renderSetItemHtml(item);
                        var label = itemHtml.querySelector('.item-label');
                        var input = itemHtml.querySelector('.item-input');
                        var remove = itemHtml.querySelector('.item-remove');
                        var position = o.keepItemsOrder ? '[' + k + ']' : '[]';
                        itemHtml.key = item[this.key];
                        remove.key = item[this.key];
                        input.setAttribute('name', (item.isNew ? o.newItemName : o.itemName) + position);
                        input.value = item[item.isNew ? o.newItemValue : o.itemValue] || null;
                        label.textContent = this.renderSetItemLabel(item);
                        if (item.focused) {
                            itemHtml.classList.add('focused');
                        }
                        return itemHtml;
                    }
                }, {
                    key: 'onInput',
                    value: function onInput(value, e) {
                        return value;
                    }
                }, {
                    key: 'renderSetItemHtml',
                    value: function renderSetItemHtml() {
                        return this._buildEl(this._templates.setItem);
                    }
                }, {
                    key: 'renderSetItemLabel',
                    value: function renderSetItemLabel(item) {
                        return item[this._options.itemLabel];
                    }
                }, {
                    key: 'renderSuggestions',
                    value: function renderSuggestions(items) {
                        var _this15 = this;
                        var v = this._vars;
                        var o = this._options;
                        var html = this._html;
                        var index = this._getSelectedItemIndex();
                        if (!items.length) {
                            return this;
                        }
                        if (o.maxSuggestWindow === 0) {
                            html.suggest.style.maxHeight = null;
                        }
                        if (!v.suggestedItems.length) {
                            return this;
                        }
                        if (!o.newItems && index === null) {
                            items[0].selected = true;
                        }
                        var maxHeight = 0;
                        items.every(function (item, k) {
                            if (k >= o.maxSuggest)
                                return false;
                            var child = html.suggestList.childNodes[k];
                            var el = item.el = _this15.renderSuggestedItem(item);
                            if (child) {
                                if (child.itemValue === item[o.itemValue]) {
                                    child.key = item[_this15.key];
                                    item.el = child;
                                }
                                else {
                                    html.suggestList.replaceChild(el, child);
                                }
                            }
                            else if (!child) {
                                html.suggestList.appendChild(el);
                            }
                            if (o.maxSuggestWindow > 0 && k < o.maxSuggestWindow) {
                                maxHeight += html.suggestList.childNodes[k].getBoundingClientRect().height;
                            }
                            if (o.maxSuggestWindow > 0 && k === o.maxSuggestWindow) {
                                html.suggest.style.maxHeight = maxHeight + 'px';
                            }
                            return true;
                        });
                        var overflow = html.suggestList.childElementCount - items.length;
                        if (overflow > 0) {
                            for (var i = overflow - 1; i >= 0; i--) {
                                html.suggestList.removeChild(html.suggestList.childNodes[items.length + i]);
                            }
                        }
                        return this;
                    }
                }, {
                    key: 'renderSuggestedItem',
                    value: function renderSuggestedItem(item) {
                        var o = this._options;
                        var el = this._buildEl(this._templates.suggestItem);
                        el.key = item[this.key];
                        el.itemValue = item[o.itemValue];
                        el.innerHTML = this.renderSuggestedItemContent(item);
                        el.setAttribute('title', item[o.itemData]);
                        if (item.selected) {
                            el.classList.add('selected');
                        }
                        if (!o.filterSetItems) {
                            var setItem = this._getItem(item[o.itemValue], o.itemValue) || this._getItem(item[o.itemData], o.itemData);
                            if (setItem) {
                                el.classList.add('set');
                            }
                        }
                        return el;
                    }
                }, {
                    key: 'renderSuggestedItemContent',
                    value: function renderSuggestedItemContent(item) {
                        return item[this._options.itemData];
                    }
                }, {
                    key: '_refreshSuggestions',
                    value: function _refreshSuggestions() {
                        var v = this._vars;
                        var o = this._options;
                        if (this._html.input.value.length < o.minChars) {
                            this.hideSuggestions();
                            return this;
                        }
                        var data = this._prepareData(o.items);
                        var items = this._filterData(this._html.input.value, data);
                        v.suggestedItems = o.filterSetItems ? this._filterSetItems(items) : items;
                        if (v.suggestedItems.length) {
                            if (!o.maxItems || o.maxItems && v.setItems.length < o.maxItems) {
                                this.renderSuggestions(v.suggestedItems);
                                return this;
                            }
                        }
                        this.hideSuggestions();
                        return this;
                    }
                }, {
                    key: 'showSuggestions',
                    value: function showSuggestions() {
                        var v = this._vars;
                        var o = this._options;
                        if (v.suggestedItems.length) {
                            this.emit('showSuggestions', this);
                            if (!o.maxItems || o.maxItems && v.setItems.length < o.maxItems) {
                                this._html.suggest.style.display = 'block';
                                v.suggested = true;
                                this.renderSuggestions(v.suggestedItems);
                            }
                            this.emit('shownSuggestions', this);
                        }
                        else {
                            this.hideSuggestions();
                        }
                        return this;
                    }
                }, {
                    key: 'hideSuggestions',
                    value: function hideSuggestions() {
                        this.emit('hideSuggestions', this);
                        this._vars.suggested = false;
                        this._html.suggest.style.display = 'none';
                        this._html.suggestList.innerHTML = '';
                        this.emit('hiddenSuggestions', this);
                        return this;
                    }
                }, {
                    key: 'setSuggestedItems',
                    value: function setSuggestedItems(items) {
                        if (!Array.isArray(items)) {
                            throw new Error('Argument must be an array of objects.');
                        }
                        this._options.items = items;
                        this._refreshSuggestions();
                    }
                }, {
                    key: 'getItems',
                    value: function getItems() {
                        return this._vars.setItems.map(function (item) {
                            return _extends({}, item);
                        });
                    }
                }, {
                    key: 'setItems',
                    value: function setItems() {
                        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        this._vars.setItems = [];
                        this.addItems(items);
                        return this;
                    }
                }, {
                    key: 'addItems',
                    value: function addItems() {
                        var _this16 = this;
                        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        var key = this._options.itemValue;
                        if (!Array.isArray(items)) {
                            items = [items];
                        }
                        this._prepareData(items).forEach(function (item) {
                            if (item.isNew || typeof item[key] !== 'undefined') {
                                _this16._addItem(item);
                            }
                        });
                        this._renderItems()._refreshInput().hideSuggestions();
                        return this;
                    }
                }, {
                    key: 'sortItems',
                    value: function sortItems() {
                        var _this17 = this;
                        var items = [];
                        [].concat(_toConsumableArray(this._html.items.childNodes)).forEach(function (el) {
                            var item = _this17._getItem(el.key);
                            if (item) {
                                items.push(item);
                            }
                        });
                        this.setItems(items);
                    }
                }, {
                    key: 'removeItem',
                    value: function removeItem(value) {
                        var o = this._options;
                        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && (value[o.itemValue] || value[o.newItemValue])) {
                            value = value[o.itemValue] || value[o.newItemValue];
                        }
                        var item = this._getItem(value, o.itemValue) || this._getItem(value, o.newItemValue);
                        if (!item) {
                            return this;
                        }
                        this._removeItem(item[this.key])._renderItems();
                        return this;
                    }
                }, {
                    key: 'emptyItems',
                    value: function emptyItems() {
                        this._vars.setItems = [];
                        this._renderItems()._refreshInput().hideSuggestions();
                        this.emit('change', this);
                        return this;
                    }
                }, {
                    key: 'getSuggestedItems',
                    value: function getSuggestedItems() {
                        return this._vars.suggestedItems.map(function (item) {
                            return _extends({}, item);
                        });
                    }
                }, {
                    key: 'focus',
                    value: function focus() {
                        this._html.container.classList.add('focused');
                        if (!this._focused)
                            this._html.input.focus();
                        return this;
                    }
                }, {
                    key: 'blur',
                    value: function blur() {
                        this._html.container.classList.remove('focused');
                        if (this._focused)
                            this._html.input.blur();
                        return this;
                    }
                }, {
                    key: 'remove',
                    value: function remove() {
                        var html = this._html;
                        html.container.parentElement.insertBefore(this.el, html.container);
                        html.container.remove();
                        this.el.style.display = 'block';
                        if (Object.keys(_tokenfields).length === 1) {
                            document.removeEventListener('mousedown', this._vars.events.onMouseDown);
                            window.removeEventListener('resize', this._vars.events.onResize);
                        }
                        if (this._form && this._form.nodeName) {
                            this._form.removeEventListener('reset', this._vars.events.onReset);
                        }
                        delete _tokenfields[this.id];
                        delete this.el.tokenfield;
                    }
                }]);
            return Tokenfield;
        }(_events2.default);
        exports.default = Tokenfield;
        /***/
    }),
    /* 2 */
    /***/ (function (module, exports) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.
        function EventEmitter() {
            this._events = this._events || {};
            this._maxListeners = this._maxListeners || undefined;
        }
        module.exports = EventEmitter;
        // Backwards-compat with node 0.10.x
        EventEmitter.EventEmitter = EventEmitter;
        EventEmitter.prototype._events = undefined;
        EventEmitter.prototype._maxListeners = undefined;
        // By default EventEmitters will print a warning if more than 10 listeners are
        // added to it. This is a useful default which helps finding memory leaks.
        EventEmitter.defaultMaxListeners = 10;
        // Obviously not all Emitters should be limited to 10. This function allows
        // that to be increased. Set to zero for unlimited.
        EventEmitter.prototype.setMaxListeners = function (n) {
            if (!isNumber(n) || n < 0 || isNaN(n))
                throw TypeError('n must be a positive number');
            this._maxListeners = n;
            return this;
        };
        EventEmitter.prototype.emit = function (type) {
            var er, handler, len, args, i, listeners;
            if (!this._events)
                this._events = {};
            // If there is no 'error' event listener then throw.
            if (type === 'error') {
                if (!this._events.error ||
                    (isObject(this._events.error) && !this._events.error.length)) {
                    er = arguments[1];
                    if (er instanceof Error) {
                        throw er; // Unhandled 'error' event
                    }
                    else {
                        // At least give some kind of context to the user
                        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
                        err.context = er;
                        throw err;
                    }
                }
            }
            handler = this._events[type];
            if (isUndefined(handler))
                return false;
            if (isFunction(handler)) {
                switch (arguments.length) {
                    // fast cases
                    case 1:
                        handler.call(this);
                        break;
                    case 2:
                        handler.call(this, arguments[1]);
                        break;
                    case 3:
                        handler.call(this, arguments[1], arguments[2]);
                        break;
                    // slower
                    default:
                        args = Array.prototype.slice.call(arguments, 1);
                        handler.apply(this, args);
                }
            }
            else if (isObject(handler)) {
                args = Array.prototype.slice.call(arguments, 1);
                listeners = handler.slice();
                len = listeners.length;
                for (i = 0; i < len; i++)
                    listeners[i].apply(this, args);
            }
            return true;
        };
        EventEmitter.prototype.addListener = function (type, listener) {
            var m;
            if (!isFunction(listener))
                throw TypeError('listener must be a function');
            if (!this._events)
                this._events = {};
            // To avoid recursion in the case that type === "newListener"! Before
            // adding it to the listeners, first emit "newListener".
            if (this._events.newListener)
                this.emit('newListener', type, isFunction(listener.listener) ?
                    listener.listener : listener);
            if (!this._events[type])
                // Optimize the case of one listener. Don't need the extra array object.
                this._events[type] = listener;
            else if (isObject(this._events[type]))
                // If we've already got an array, just append.
                this._events[type].push(listener);
            else
                // Adding the second element, need to change to array.
                this._events[type] = [this._events[type], listener];
            // Check for listener leak
            if (isObject(this._events[type]) && !this._events[type].warned) {
                if (!isUndefined(this._maxListeners)) {
                    m = this._maxListeners;
                }
                else {
                    m = EventEmitter.defaultMaxListeners;
                }
                if (m && m > 0 && this._events[type].length > m) {
                    this._events[type].warned = true;
                    console.error('(node) warning: possible EventEmitter memory ' +
                        'leak detected. %d listeners added. ' +
                        'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
                    if (typeof console.trace === 'function') {
                        // not supported in IE 10
                        console.trace();
                    }
                }
            }
            return this;
        };
        EventEmitter.prototype.on = EventEmitter.prototype.addListener;
        EventEmitter.prototype.once = function (type, listener) {
            if (!isFunction(listener))
                throw TypeError('listener must be a function');
            var fired = false;
            function g() {
                this.removeListener(type, g);
                if (!fired) {
                    fired = true;
                    listener.apply(this, arguments);
                }
            }
            g.listener = listener;
            this.on(type, g);
            return this;
        };
        // emits a 'removeListener' event iff the listener was removed
        EventEmitter.prototype.removeListener = function (type, listener) {
            var list, position, length, i;
            if (!isFunction(listener))
                throw TypeError('listener must be a function');
            if (!this._events || !this._events[type])
                return this;
            list = this._events[type];
            length = list.length;
            position = -1;
            if (list === listener ||
                (isFunction(list.listener) && list.listener === listener)) {
                delete this._events[type];
                if (this._events.removeListener)
                    this.emit('removeListener', type, listener);
            }
            else if (isObject(list)) {
                for (i = length; i-- > 0;) {
                    if (list[i] === listener ||
                        (list[i].listener && list[i].listener === listener)) {
                        position = i;
                        break;
                    }
                }
                if (position < 0)
                    return this;
                if (list.length === 1) {
                    list.length = 0;
                    delete this._events[type];
                }
                else {
                    list.splice(position, 1);
                }
                if (this._events.removeListener)
                    this.emit('removeListener', type, listener);
            }
            return this;
        };
        EventEmitter.prototype.removeAllListeners = function (type) {
            var key, listeners;
            if (!this._events)
                return this;
            // not listening for removeListener, no need to emit
            if (!this._events.removeListener) {
                if (arguments.length === 0)
                    this._events = {};
                else if (this._events[type])
                    delete this._events[type];
                return this;
            }
            // emit removeListener for all listeners on all events
            if (arguments.length === 0) {
                for (key in this._events) {
                    if (key === 'removeListener')
                        continue;
                    this.removeAllListeners(key);
                }
                this.removeAllListeners('removeListener');
                this._events = {};
                return this;
            }
            listeners = this._events[type];
            if (isFunction(listeners)) {
                this.removeListener(type, listeners);
            }
            else if (listeners) {
                // LIFO order
                while (listeners.length)
                    this.removeListener(type, listeners[listeners.length - 1]);
            }
            delete this._events[type];
            return this;
        };
        EventEmitter.prototype.listeners = function (type) {
            var ret;
            if (!this._events || !this._events[type])
                ret = [];
            else if (isFunction(this._events[type]))
                ret = [this._events[type]];
            else
                ret = this._events[type].slice();
            return ret;
        };
        EventEmitter.prototype.listenerCount = function (type) {
            if (this._events) {
                var evlistener = this._events[type];
                if (isFunction(evlistener))
                    return 1;
                else if (evlistener)
                    return evlistener.length;
            }
            return 0;
        };
        EventEmitter.listenerCount = function (emitter, type) {
            return emitter.listenerCount(type);
        };
        function isFunction(arg) {
            return typeof arg === 'function';
        }
        function isNumber(arg) {
            return typeof arg === 'number';
        }
        function isObject(arg) {
            return typeof arg === 'object' && arg !== null;
        }
        function isUndefined(arg) {
            return arg === void 0;
        }
        /***/
    }),
    /* 3 */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = ajax;
        /**
         * Simple AJAX handling module.
         * tokenfield 1.3.0 <https://github.com/KaneCohen/tokenfield>
         * Copyright 2018 Kane Cohen <https://github.com/KaneCohen>
         * Available under BSD-3-Clause license
         */
        function ajax(params) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var xhr = new XMLHttpRequest();
            var url = options.url;
            var paramsArr = [];
            for (var key in params) {
                paramsArr.push(key + '=' + encodeURIComponent(params[key]));
            }
            var paramsString = paramsArr.join('&');
            if (options.type.toLowerCase() === 'get') {
                url += '?' + paramsString;
            }
            xhr.open(options.type, url, true);
            for (var header in options.headers) {
                var value = options.headers[header];
                if (typeof value === 'function') {
                    value = value(params, options);
                }
                xhr.setRequestHeader(header, value);
            }
            if (callback) {
                xhr.onreadystatechange = callback;
            }
            xhr.send(params);
            return xhr;
        }
        /***/
    })
    /******/ 
]);

const InputCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  contain: content;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  width: auto;\n  max-width: 100%;\n\n  --font-size: var(--ms0);\n  --complementing-font-size: var(--ms-1);\n  --height: 3em;\n  --padding: 0 1em;\n  --background: var(--white);\n  --color: var(--black);\n  --icon-color: var(--gray4);\n  --border-color: var(--gray2);\n  --border: 1px solid var(--border-color);\n  --line-height: var(--ms6);\n  --border-radius: 0.3rem;\n  --validation-spacing: var(--ms-2)\n}\n\n:host([type=\"hidden\"]) {\n  display: none;\n}\n\n:host([icon]) {\n  --padding: 0 1em 0 3em;\n}\n\n:host([size=\"tiny\"]) {\n  --font-size: var(--ms-2);\n  --complementing-font-size: var(--ms-3);\n  --line-height: var(--ms4);\n  --padding: 0 var(--ms-2);\n  --validation-spacing: var(--ms-8);\n}\n\n:host([size=\"small\"]) {\n  --font-size: var(--ms-1);\n  --complementing-font-size: var(--ms-2);\n  --line-height: var(--ms5);\n  --padding: 0 var(--ms-1);\n  --validation-spacing: var(--ms-5);\n}\n\n:host([size=\"medium\"]) {\n  --font-size: var(--ms1);\n  --complementing-font-size: var(--ms0);\n  --line-height: var(--ms7);\n  --padding: 0 var(--ms1);\n  --validation-spacing: var(--ms-1);\n}\n\n:host([size=\"large\"]) {\n  --font-size: var(--ms2);\n  --complementing-font-size: var(--ms1);\n  --line-height: calc(var(--ms8) - 0.5em);\n  --padding: 0 var(--ms2);\n  --validation-spacing: var(--ms0);\n}\n\n:host ::selection,\n:host *::selection {\n  background: var(--theme-base2) !important;\n}\n\n:host([type=\"textarea\"]) .wrapper {\n  max-width: 100%;\n}\n\n:host .content {\n  position: relative;\n}\n\n:host stellar-tooltip {\n  width: calc(100% - 1.5em);\n}\n\n:host .caps-lock {\n  position: absolute;\n  height: calc(100% - 4px);\n  border-radius: var(--border-radius);\n  right: 2px;\n  top: 2px;\n  background: white;\n  display: inline-grid;\n  grid-gap: calc(var(--font-size) / 2);\n  grid-template-columns: auto auto;\n  align-items: center;\n  align-items: center;\n  padding: 0 calc(var(--font-size) / 2);\n}\n\n:host .caps-lock ion-icon {\n  font-size: calc(var(--font-size) * 1.75)\n}\n\n:host .caps-lock * {\n  margin: 0;\n  color: var(--red5);\n}\n\n:host input,\n:host textarea,\n:host .tags-input,\n:host .fake-input {\n  appearance: none;\n  -webkit-appearance: none;\n  display: flex;\n  outline: 0;\n  border: var(--border);\n  border-radius: var(--border-radius);\n  width: 100%;\n  color: var(--color);\n  font-weight: 500;\n  -moz-appearance: none;\n}\n\n:host .fake-input {\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  height: calc(100% - 4px);\n  width: calc(100% - 4px);\n  background: var(--background);\n  border-radius: var(--border-radius);\n  font-size: var(--font-size);\n  display: flex;\n  align-items: center;\n  padding: var(--padding);\n  color: var(--color);\n  font-weight: 500;\n  pointer-events: none;\n  border: none;\n}\n\n:host(.db) input,\n:host(.db) textarea,\n:host(.db) .tags-input,\n:host(.db) .fake-input,\n:host(.dib) input,\n:host(.dib) textarea,\n:host(.dib) .tags-input,\n:host(.dib) .fake-input,\n:host(.di) input,\n:host(.di) textarea,\n:host(.di) .tags-input,\n:host(.di) .fake-input {\n  width: auto;\n}\n\n:host input::-moz-focus-inner,\n:host textarea::-moz-focus-inner,\n:host .tags-input::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n:host input::-webkit-inner-spin-button,\n:host input::-webkit-outer-spin-button,\n:host textarea::-webkit-inner-spin-button,\n:host textarea::-webkit-outer-spin-button,\n:host .tags-input::-webkit-inner-spin-button,\n:host .tags-input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n:host input {\n  box-sizing: inherit;\n  background: var(--background);\n  outline: 0;\n  padding: var(--padding);\n  height: var(--height);\n  overflow: hidden;\n  line-height: calc(var(--line-height) - 0.2em);\n  font-size: var(--font-size);\n}\n\n:host input[disabled] {\n  background: var(--gray0);\n}\n\n:host input[type=\"file\"] {\n  position: absolute;\n  opacity: 0;\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n:host textarea {\n  resize: vertical;\n  outline: 0;\n  background: var(--background);\n  padding: var(--padding);\n  padding-top: .5em;\n  padding-bottom: .5em;\n  min-height: calc(var(--height) * 2);\n  max-height: 10em;\n  line-height: 1.47;\n  font-size: var(--font-size);\n}\n\n:host label {\n  display: block;\n}\n\n:host([focused]) .input {\n  --border: 1px solid var(--theme-base5);\n  box-shadow: inset 0 0 0 1px var(--theme-base5);\n}\n\n:host .search {\n  cursor: pointer;\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0.25em;\n  font-size: calc(var(--font-size) + var(--complementing-font-size));\n}\n\n:host .smile {\n  position: absolute;\n  top: 50%;\n  right: 0.5rem;\n  transition: background 100ms ease 0s, transform 500ms ease 0s;\n  transform: scale(0) translateY(-50%);\n  transform-origin: 50% 0;\n  opacity: 0;\n  color: var(--icon-color);\n  font-size: calc(var(--font-size) * 2);\n  line-height: 0;\n  background: var(--background)\n}\n\n:host([type=\"password\"]) input {\n  padding-right: 4rem;\n}\n\n:host .icon {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: calc(var(--font-size) * 2);\n  width: calc(var(--font-size) * 2);\n  height: calc(var(--font-size) * 2);\n  margin-left: 0.5rem;\n  color: var(--icon-color);\n}\n\n:host ::slotted(ion-icon[slot=\"icon\"]) {\n  font-size: calc(var(--font-size) * 2);\n  width: calc(var(--font-size) * 2);\n  height: calc(var(--font-size) * 2);\n}\n\n:host .smile[data-level=\"0\"] {\n  transform: scale(0.7) translateY(-50%);\n  opacity: 1;\n  color: var(--red5);\n}\n\n:host .smile[data-level=\"1\"] {\n  transform: scale(0.85) translateY(-50%);\n  opacity: 1;\n  color: var(--orange5);\n}\n\n:host .smile[data-level=\"2\"] {\n  transform: scale(0.9) translateY(-50%);\n  opacity: 1;\n  color: var(--yellow5);\n}\n\n:host .smile[data-level=\"3\"] {\n  transform: scale(0.95) translateY(-50%);\n  opacity: 1;\n  color: var(--green5);\n}\n\n:host .smile[data-level=\"4\"] {\n  transform: scale(1) translateY(-50%);\n  opacity: 1;\n  color: var(--blue5);\n}\n\n:host .validation {\n  text-align: left;\n  margin-bottom: 0;\n  color: var(--red5);\n  font-weight: 500;\n}\n\n:host .validation span {\n  display: block;\n  padding: var(--validation-spacing) 0 0;\n  line-height: 1.4;\n}\n\n:host .validation span + span {\n  border-top: 1px solid var(--theme-base1);\n}\n\n:host .incrementing {\n  display: flex;\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border-radius: 0 var(--border-radius) var(--border-radius) 0;\n  overflow: hidden;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, var(--background) 50%);\n  width: 1.5rem;\n  height: calc(100% - 2px);\n  border-left: 1px solid var(--border-color);\n}\n\n:host([focused]) .incrementing {\n  border-left: 2px solid var(--theme-base5);\n}\n\n:host([focused]) .incrementing a {\n  border: 1px solid var(--theme-base5);\n  border-width: 1px 1px 1px 0;\n}\n\n:host .incrementing::after {\n  content: \"\";\n  background: var(--border-color);\n  height: 1px;\n  width: 100%;\n  position: absolute;\n  top: calc(50% - .5px);\n}\n\n:host([focused]) .incrementing::after {\n  height: 2px;\n  top: calc(50% - 1px);\n  background: var(--theme-base5);\n}\n\n:host .incrementing a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 50%;\n  color: var(--theme-base5);\n  outline: 0;\n}\n\n:host .incrementing a:hover,\n:host .incrementing a:focus {\n  background: var(--theme-base1);\n  color: var(--theme-base7);\n}\n\n:host([size=\"small\"]) :host .incrementing {\n  width: 1rem;\n}\n\n:host([size=\"small\"]) :host .incrementing a:first-child {\n  padding-top: .25rem;\n}\n\n:host([size=\"small\"]) :host .incrementing a:last-child {\n  padding-bottom: .25rem;\n}\n\n:host([type=\"search\"]) .input {\n  padding-left: 3em !important;\n}\n\n:host([size=\"small\"][type=\"search\"]) .input {\n  padding-left: 2.5em !important;\n}\n\n:host([type=\"search\"]) .input::-webkit-search-cancel-button {\n  display: none;\n}\n\n:host([type=\"search\"]) ion-icon {\n  color: var(--theme-base5);\n}\n\n:host([type=\"search\"]) ion-icon.search {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  height: calc(var(--font-size) * 2);\n}\n\n:host([size=\"small\"][type=\"search\"]) ion-icon.search {\n  top: calc(50% - .125em);\n  left: 0.25em;\n}\n\n:host([type=\"search\"]) ion-icon.close {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  right: 0.25em;\n  transform: translateY(-50%);\n  outline: 0;\n  color: var(--red5);\n  font-size: calc(var(--font-size) * 2);\n  width: calc(var(--font-size) * 2);\n  height: calc(var(--font-size) * 2);\n}\n\n:host([type=\"search\"]) ion-icon.close:hover,\n:host([type=\"search\"]) ion-icon.close:focus {\n  color: var(--red5);\n}\n\n:host([type=\"search\"]) label[focused=\"true\"] ion-icon.search {\n  color: var(--theme-base2);\n}\n\n:host([size=\"small\"][type=\"search\"]) input {\n  padding-left: 25px;\n}\n\n:host .title {\n  margin-top: 10px;\n}\n\n:host .tokenfield {\n  position: relative;\n}\n\n:host .tokenfield::before,\n:host .tokenfield::after {\n  content: \" \";\n  display: table;\n}\n\n:host .tokenfield::after {\n  clear: both;\n}\n\n:host .tokenfield.tokenfield-mode-tokens {\n  display: block;\n  border: var(--border);\n  border-radius: var(--border-radius);\n  background-color: var(--background);\n  background-image: none;\n  padding: 0 1rem;\n  width: 100%;\n  min-height: var(--height);\n  line-height: 1.42857;\n  color: var(--theme-base9);\n  font-size: var(--complementing-font-size);\n}\n\n:host .tokenfield.tokenfield-mode-tokens[disabled],\n:host .tokenfield.tokenfield-mode-tokens[readonly],\n:host fieldset[disabled] .tokenfield.tokenfield-mode-tokens {\n  opacity: 1;\n  background-color: var(--theme-base2);\n}\n\n:host .tokenfield.tokenfield-mode-tokens[disabled],\n:host fieldset[disabled] .tokenfield.tokenfield-mode-tokens {\n  cursor: not-allowed;\n}\n\n:host .tokenfield.tokenfield-mode-tokens .focused {\n  background: var(--theme-base7);\n  color: var(--background);\n}\n\n:host .tokenfield.tokenfield-mode-tokens .focused .item-remove {\n  color: var(--background);\n}\n\n:host .tokenfield.tokenfield-mode-tokens .selected {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n:host .tokenfield .tokenfield-set > ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n:host .tokenfield .tokenfield-set > ul > li {\n  cursor: pointer;\n  float: left;\n  display: flex;\n  align-items: center;\n  margin-right: .5em;\n  margin-top: .5em;\n  border-radius: 100em;\n  background: var(--theme-base5);\n  padding: .125em 1em;\n  height: 1.75rem;\n  line-height: 1;\n  color: var(--white);\n}\n\n:host .tokenfield .tokenfield-set > ul > li:hover {\n  background: var(--theme-base7);\n  color: var(--theme-base0);\n}\n\n:host .tokenfield .tokenfield-set > ul > li .item-remove {\n  cursor: pointer;\n  display: inline-block;\n  margin-left: 0.4em;\n  height: 0;\n  text-decoration: none;\n  line-height: 0;\n  color: var(--white);\n  font-size: var(--complementing-font-size);\n  top: -2px;\n  position: relative;\n}\n\n:host .tokenfield .tokenfield-input {\n  outline: none;\n  border: none;\n  padding: 1rem 0;\n  max-width: 100%;\n  width: 100% !important;\n  height: auto;\n}\n\n:host .tokenfield .tokenfield-suggest {\n  box-sizing: content-box;\n  position: absolute;\n  top: 100%;\n  left: -1px;\n  z-index: 10;\n  border: 1px solid var(--theme-base0);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px var(--theme-base1);\n  background-color: var(--background);\n  width: 100%;\n  overflow: auto;\n}\n\n:host .tokenfield .tokenfield-suggest > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n:host .tokenfield .tokenfield-suggest > ul > li {\n  cursor: pointer;\n  padding: 6px 10px;\n}\n\n:host .file-wrapper,\n:host .file-wrapper input {\n  cursor: pointer;\n}\n\n:host .file-wrapper h3,\n:host .file-wrapper h4 {\n  margin: 0;\n  width: 100%;\n  text-align: center;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  white-space: wrap;\n  color: inherit;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n:host .file-wrapper h3 {\n  font-size: 1.6rem;\n  margin-bottom: .4em;\n}\n\n:host .file-wrapper h4 ion-icon {\n  display: inline-block;\n  top: 3px;\n  left: -3px;\n  position: relative;\n}\n\n:host .file-wrapper .upload-card {\n  background: var(--theme-base5);\n  min-height: auto;\n  color: var(--background);\n  padding: 2rem;\n}\n\n:host .file-list {\n  margin: 3rem 0 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n:host .file-list li {\n  display: flex;\n  justify-content: space-between;\n}\n\n:host .file-list li:nth-of-type(odd) {\n  background: var(--icon-color);\n}\n\n:host .file-list li p,\n:host .file-list li a {\n  margin: 0;\n  padding: 1rem;\n  font-size: 1.4rem;\n  font-weight: 400;\n}\n\n:host .file-list li a {\n  min-width: 3.2rem;\n  color: var(--black);\n}\n\n:host .file-list li a :hover,\n:host .file-list li a :focus {\n  color: var(--theme-base5);\n}\n\n:host([dark]) {\n  --border-color: var(--gray9);\n  --background: var(--black-alt);\n  --color: var(--white);\n  --icon-color: var(--gray6)\n}\n\n:host([dark]) .tokenfield.tokenfield-mode-tokens .focused {\n  background: var(--theme-base7);\n}\n\n:host([dark]) .tokenfield .tokenfield-set > ul > li {\n  background: var(--theme-base9);\n}\n";

const Input = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The kind of element that the Input should be rendered as
         */
        this.type = "text";
        /**
         * The pre-set value to pass to the input element
         */
        this.requirements = false;
        this.color = "theme";
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.placeholder = "Enter a value";
        this.readonly = false;
        this.autofocus = false;
        this.focused = false;
        this.spellcheck = true;
        this.maxlength = 1000;
        this.cols = 30;
        this.rows = 2;
        this.wrap = "soft";
        this.dateType = "month";
        this.step = 1;
        // Files
        this.multipleFileCaption = '{count} files';
        this.replace_placeholder = "Replace file";
        this.files = [];
        this.multiple = false;
        this.droppable = false;
        // Validation
        this.required = false;
        this.novalidate = false;
        this.icon = false;
        this.capsLock = false;
        this.showCapsLock = false;
        this.update = createEvent(this, "update", 7);
        this.focusing = createEvent(this, "focusing", 7);
        this.bluring = createEvent(this, "bluring", 7);
    }
    componentWillLoad() {
        if (this.default) {
            this.value = this.default;
        }
        if (this.type === "password") {
            this.showCapsLock = true;
        }
        if (this.match) {
            this.__match = document.querySelector(`stellar-input${this.match}`);
            if (!this.__match) {
                console.error(`Uh oh! Couldn't find element in DOM matching stellar-input${this.match}`);
            }
        }
        this.checkForIcon();
        if (this.type === "file") {
            this._prepareFileLabels();
        }
        this.validator = new Validator(this);
        if (this.type === "password" && this.value) {
            this.getStrongLevel();
        }
        if (this.type === "email" || this.type === "password") {
            this.addLightDomInput();
        }
    }
    componentDidLoad() {
        if (this.type === "tags") {
            this.tokenField = new Tokenfield({
                el: this.input,
                delimiters: [","],
                addItemsOnPaste: true
            });
            this.tokenField.setItems(this.value);
        }
        if (this.is_date_type) {
            this.datepicker = TinyDatePicker(this.input, {
                type: this.dateType,
                mode: 'dp-below',
                format: (date) => { return moment(date).format(this.dateFormat); },
                parse: (date) => { return date ? moment(date).toDate() : moment().toDate(); }
            });
            this.datepicker.on('select', (_, dp) => {
                this.value = moment(dp.state.selectedDate).format(this.dateFormat);
            });
        }
    }
    addLightDomInput() {
        if (!this.lightDom) {
            this.lightDom = document.createElement('input');
            this.lightDom.setAttribute("type", this.type);
            this.lightDom.tabIndex = -1;
            this.lightDom.classList.add("clip");
            this.lightDom.onchange = (e) => {
                // @ts-ignore
                this.value = e.target.value;
            };
            this.element.parentNode.insertBefore(this.lightDom, this.element);
        }
    }
    get dateFormat() {
        if (this.dateType === "day") {
            return 'YYYY-MM-DD';
        }
        else if (this.dateType === "month") {
            return 'YYYY-MM';
        }
        else if (this.dateType === "year") {
            return 'YYYY';
        }
    }
    get visualDateFormat() {
        if (this.dateType === "day") {
            return 'MMMM D, YYYY';
        }
        else if (this.dateType === "month") {
            return 'MMMM, YYYY';
        }
        else if (this.dateType === "year") {
            return 'YYYY';
        }
    }
    async getDatePicker() {
        return this.datepicker;
    }
    get is_date_type() {
        return ["month", "date"].includes(this.type);
    }
    handleValueChange() {
        this.update.emit(this.value);
        if (this.lightDom) {
            this.lightDom.value = this.value;
        }
    }
    handleChange() {
        if (this.type === "file") {
            this.updateFilesArray();
            this.updateFileLabel();
        }
        this.update.emit(this.value);
    }
    handleFocus() {
        this.focused = true;
        this.focusing.emit({});
    }
    handleBlur() {
        this.focused = false;
        this.validate();
        this.bluring.emit({});
    }
    handleInput() {
        if (this.type === "textarea") {
            this.input.style.height = "1px";
            this.input.style.height = `${this.input.scrollHeight}px`;
        }
        if (this.type !== "file") {
            if (this.type === "tags") {
                this.value = this.tokenField.getItems();
            }
            else {
                this.value = this.input.value;
            }
        }
        if (this.type === "password") {
            this.getStrongLevel();
        }
    }
    handleIncrement(event) {
        event.preventDefault();
        if (this.is_date_type) {
            // @ts-ignore
            this.value = moment(this.value).add(1, `${this.dateType}s`).format(this.dateFormat);
            this.datepicker.close();
        }
        else {
            // @ts-ignore
            this.input.stepUp();
            this.value = this.input.value;
        }
    }
    handleDecrement(event) {
        event.preventDefault();
        if (this.is_date_type) {
            // @ts-ignore
            this.value = moment(this.value).subtract(1, `${this.dateType}s`).format(this.dateFormat);
            this.datepicker.close();
        }
        else {
            // @ts-ignore
            this.input.stepDown();
            this.value = this.input.value;
        }
    }
    handleKeyDownIncrement(event) {
        if (event.keyCode === 13 || event.keyCode === 38) {
            event.preventDefault();
            if (this.is_date_type) {
                // @ts-ignore
                this.value = moment(this.value).add(1, `${this.dateType}s`).format(this.dateFormat);
                this.datepicker.close();
            }
            else {
                // @ts-ignore
                this.input.stepUp();
                this.value = this.input.value;
            }
        }
    }
    handleKeyDownDecrement(event) {
        if (event.keyCode === 13 || event.keyCode === 40) {
            event.preventDefault();
            if (this.is_date_type) {
                // @ts-ignore
                this.value = moment(this.value).subtract(1, `${this.dateType}s`).format(this.dateFormat);
                this.datepicker.close();
            }
            else {
                // @ts-ignore
                this.input.stepDown();
                this.value = this.input.value;
            }
        }
    }
    handleReset(event) {
        event.preventDefault();
        this.resetValue();
    }
    handleKeyDownEnter(event) {
        if (event.keyCode === 13) {
            const form = this.element.closest('stellar-form');
            form.submit_form();
        }
    }
    handleInputKeyDown(event) {
        this.handleKeyDownEnter(event);
    }
    handleKeyDownReset(event) {
        if (event.keyCode === 13) {
            this.resetValue();
        }
    }
    checkForIcon() {
        var element = this.element.querySelector('*[slot="icon"]');
        if (element) {
            this.icon = true;
        }
    }
    _prepareFileLabels() {
        if (this.type === "file" && this.multiple) {
            this.replace_placeholder = (this.replace_placeholder === "Replace file") ? "Replace files" : this.replace_placeholder;
        }
        this.placeholder = (!this.value) ? this.placeholder : this.replace_placeholder;
    }
    updateFileLabel() {
        var fileName = '';
        if (this.files && this.files.length > 1) {
            fileName = this.multipleFileCaption.replace('{count}', this.files.length.toString());
        }
        else {
            fileName = this.input.value.split('\\').pop();
        }
        if (fileName) {
            this._fileLabel = fileName;
        }
        else {
            this._fileLabel = undefined;
        }
        this.value = this.input.value;
        this._prepareFileLabels();
        this.validate();
    }
    updateFilesArray() {
        var files = [];
        if (this.type === "file" && this.multiple) {
            // @ts-ignore
            Array.from(this.input.files).forEach((file) => {
                var item = {
                    'name': file.name,
                    'size': file.size
                };
                files.push(item);
            });
        }
        else {
            // @ts-ignore
            files = this.input.files[0];
        }
        this.files = files;
    }
    async val() {
        return this.value;
    }
    async getStrength() {
        return this.strength;
    }
    async setStrength(value) {
        this.level = value;
    }
    async invalid(message, valid, level) {
        if (message) {
            this.status = { errors: [{ message: `${message}` }], valid: valid, level: level, value: this.value, name: this.name };
            this.level = level;
        }
        else {
            this.status = undefined;
        }
    }
    async validate() {
        if (this.novalidate) {
            return await this.validator.validate(this);
        }
        else {
            this.status = await this.validator.validate(this);
            return this.status;
        }
    }
    getStrongLevel() {
        const result = zxcvbn(this.value);
        this.strength = result;
        this.level = result.score;
        if (this.value.length === 0) {
            this.level = -1;
        }
    }
    resetValue() {
        this.__previousValue = this.value;
        this.value = undefined;
        this.input.focus();
    }
    handleKeyDown(event) {
        if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
            if (this.value === "") {
                this.value = this.__previousValue;
            }
        }
        this.capsLock = event.getModifierState('CapsLock');
    }
    handleMouseDown(event) {
        this.capsLock = event.getModifierState('CapsLock');
    }
    validateDarkColor() {
        const hexcolor = this.value;
        var r = parseInt(hexcolor.substr(1, 2), 16);
        var g = parseInt(hexcolor.substr(3, 2), 16);
        var b = parseInt(hexcolor.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        // Return new color if to dark, else return the original
        return (yiq > 150);
    }
    renderLabel() {
        if (this.label) {
            return (h("stellar-label", { for: "input", size: this.size }, this.label));
        }
    }
    renderColorPicker() {
        if (this.type === "color") {
            return (h("copy-wrap", { class: "color-picker", align: "center", "data-invert": this.validateDarkColor() }, h("stellar-label", { for: "input", size: this.size }, this.value)));
        }
    }
    renderSearch() {
        if (this.type === "search") {
            return (h("ion-icon", { name: "search", class: "search" }));
        }
    }
    renderIncrements() {
        if (hasIncrements(this.type)) {
            return (h("div", { class: "incrementing" }, h("a", { href: "#", onClick: (event) => this.handleIncrement(event), onKeyDown: (event) => this.handleKeyDownIncrement(event), onFocus: () => { this.handleFocus(); }, onBlur: () => { this.handleBlur(); } }, h("ion-icon", { name: "arrow-up" })), h("a", { href: "#", onClick: (event) => this.handleDecrement(event), onKeyDown: (event) => this.handleKeyDownDecrement(event), onFocus: () => { this.handleFocus(); }, onBlur: () => { this.handleBlur(); } }, h("ion-icon", { name: "arrow-down" }))));
        }
    }
    renderPasswordStrength() {
        if (this.type === "password") {
            return this.renderPasswordStrengthSmile();
        }
    }
    renderPasswordStrengthSmile() {
        if (this.level === 5 || this.level === 4 || this.level === 3) {
            return h("ion-icon", { class: "smile", name: "happy", "data-level": this.level });
        }
        else if (this.level === 2 || this.level === 1 || this.level === 0) {
            return h("ion-icon", { class: "smile", name: "sad", "data-level": this.level });
        }
        else {
            return h("ion-icon", { class: "smile", name: "sad", "data-level": "-1" });
        }
    }
    renderSearchClearButton() {
        if (this.type === "search" && hasValue(this.value)) {
            return (h("ion-icon", { name: "close", class: "close", onClick: (event) => this.handleReset(event), onKeyDown: (event) => this.handleKeyDownReset(event), tabindex: "0", title: "Reset" }));
        }
    }
    renderDatePicker() {
        if (isDatePicker(this.type)) {
            return (h("div", { class: "relative" }, h("div", { class: "fake-input absolute" }, moment(this.value).format(this.visualDateFormat)), h("input", { class: "input", ref: (el) => this.input = el, id: "input", type: "text", name: this.name, placeholder: this.placeholder, required: this.required, maxlength: this.maxlength, autofocus: this.autofocus, readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, autocomplete: this.autocomplete || this.type, value: this.value, onInput: () => this.handleInput(), onChange: () => this.handleChange(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur(), onKeyDown: (event) => { this.handleKeyDownIncrement(event); this.handleKeyDownDecrement(event); } })));
        }
    }
    renderInput() {
        if (shouldBeAnInput(this.type)) {
            return (h("input", { class: "input", ref: (el) => this.input = el, id: "input", type: this.type, name: this.name, placeholder: this.placeholder, required: this.required, maxlength: this.maxlength, autofocus: this.autofocus, readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, autocomplete: this.autocomplete || this.type, value: this.value, onInput: () => this.handleInput(), onChange: () => this.handleChange(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur(), onKeyDown: (event) => { this.handleInputKeyDown(event); } }));
        }
    }
    renderTextArea() {
        if (this.type === "textarea") {
            return (h("textarea", { class: "input", ref: (el) => this.input = el, id: "input", placeholder: this.placeholder, name: this.name, cols: this.cols, maxlength: this.maxlength, rows: this.rows, disabled: this.disabled, readonly: this.readonly, autofocus: this.autofocus, spellcheck: this.spellcheck, required: this.required, onInput: () => this.handleInput(), onChange: () => this.handleChange(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() }, this.value));
        }
    }
    renderFileUpload() {
        if (this.type === "file") {
            return (h("div", { class: "file-wrapper" }, h("div", { class: "upload-card" }, h("section", null, h("input", { class: "input", ref: (el) => this.input = el, id: "input", type: this.type, name: this.name, placeholder: this.placeholder, required: this.required, maxlength: this.maxlength, autofocus: this.autofocus, readonly: this.readonly, disabled: this.disabled, onClick: (e) => { e.stopPropagation(); }, onInput: () => this.handleInput(), onChange: () => this.handleChange(), multiple: this.multiple, accept: this.accept, onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() }), this._fileLabel && h("h3", null, this._fileLabel), h("h4", null, h("ion-icon", { name: this._fileLabel ? "create" : "add-circle", class: "" }), this.placeholder), this.renderMultipleFileUploads()))));
        }
    }
    renderMultipleFileUploads() {
        if (this.multiple && this.files && this.files.length > 1) {
            return (h("ul", { class: "file-list" }, this.files.map((file) => h("li", null, h("p", null, file.name, " | ", h("stellar-unit", { value: file.size }))))));
        }
    }
    renderErrors() {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("stellar-label", { size: this.size, class: "validation" }, h("span", null, this.status.errors[this.status.errors.length - 1].message)));
        }
    }
    render() {
        return (h("div", { class: "wrapper" }, h("label", null, this.renderLabel(), h("div", { class: "content" }, h("div", { class: "icon" }, h("slot", { name: "icon" })), this.renderDatePicker(), this.renderColorPicker(), this.renderSearch(), this.renderInput(), this.renderTextArea(), this.renderFileUpload(), this.renderIncrements(), this.renderSearchClearButton(), this.renderPasswordStrength(), this.showCapsLock && this.capsLock && h("div", { class: "caps-lock" }, h("stellar-label", { size: this.size }, "Caps Lock"), h("ion-icon", { name: "arrow-dropup-circle" })), this.tooltip && h("stellar-tooltip", { align: "bottom-left" }, this.tooltip)), this.description && h("stellar-label", { size: "small", underneath: true }, this.description)), this.renderErrors()));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
    static get style() { return InputCss; }
};
Tunnel.injectProps(Input, ['dark']);

export { Input as stellar_input };
