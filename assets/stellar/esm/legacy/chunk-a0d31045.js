import { a as valueEqual } from './chunk-2c7f64d5.js';
var DEFAULT_DELIMITER = '/';
var DEFAULT_DELIMITERS = './';
var PATH_REGEXP = new RegExp([
    '(\\\\.)',
    '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g');
function parse(str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
    var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS;
    var pathEscaped = false;
    var res;
    while ((res = PATH_REGEXP.exec(str)) !== null) {
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        if (escaped) {
            path += escaped[1];
            pathEscaped = true;
            continue;
        }
        var prev = '';
        var next = str[index];
        var name = res[2];
        var capture = res[3];
        var group = res[4];
        var modifier = res[5];
        if (!pathEscaped && path.length) {
            var k = path.length - 1;
            if (delimiters.indexOf(path[k]) > -1) {
                prev = path[k];
                path = path.slice(0, k);
            }
        }
        if (path) {
            tokens.push(path);
            path = '';
            pathEscaped = false;
        }
        var partial = prev !== '' && next !== undefined && next !== prev;
        var repeat = modifier === '+' || modifier === '*';
        var optional = modifier === '?' || modifier === '*';
        var delimiter = prev || defaultDelimiter;
        var pattern = capture || group;
        tokens.push({
            name: name || key++,
            prefix: prev,
            delimiter: delimiter,
            optional: optional,
            repeat: repeat,
            partial: partial,
            pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
        });
    }
    if (path || index < str.length) {
        tokens.push(path + str.substr(index));
    }
    return tokens;
}
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
function escapeGroup(group) {
    return group.replace(/([=!:$/()])/g, '\\$1');
}
function flags(options) {
    return options && options.sensitive ? '' : 'i';
}
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: false,
                repeat: false,
                partial: false,
                pattern: null
            });
        }
    }
    return path;
}
function arrayToRegexp(path, keys, options) {
    var parts = [];
    for (var i = 0; i < path.length; i++) {
        parts.push(pathToRegexp(path[i], keys, options).source);
    }
    return new RegExp('(?:' + parts.join('|') + ')', flags(options));
}
function stringToRegexp(path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options);
}
function tokensToRegExp(tokens, keys, options) {
    options = options || {};
    var strict = options.strict;
    var end = options.end !== false;
    var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
    var delimiters = options.delimiters || DEFAULT_DELIMITERS;
    var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
    var route = '';
    var isEndDelimited = false;
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (typeof token === 'string') {
            route += escapeString(token);
            isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
        }
        else {
            var prefix = escapeString(token.prefix || '');
            var capture = token.repeat
                ? '(?:' + token.pattern + ')(?:' + prefix + '(?:' + token.pattern + '))*'
                : token.pattern;
            if (keys)
                keys.push(token);
            if (token.optional) {
                if (token.partial) {
                    route += prefix + '(' + capture + ')?';
                }
                else {
                    route += '(?:' + prefix + '(' + capture + '))?';
                }
            }
            else {
                route += prefix + '(' + capture + ')';
            }
        }
    }
    if (end) {
        if (!strict)
            route += '(?:' + delimiter + ')?';
        route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
    }
    else {
        if (!strict)
            route += '(?:' + delimiter + '(?=' + endsWith + '))?';
        if (!isEndDelimited)
            route += '(?=' + delimiter + '|' + endsWith + ')';
    }
    return new RegExp('^' + route, flags(options));
}
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) {
        return regexpToRegexp(path, keys);
    }
    if (Array.isArray(path)) {
        return arrayToRegexp(path, keys, options);
    }
    return stringToRegexp(path, keys, options);
}
var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;
function compilePath(pattern, options) {
    var cacheKey = "" + options.end + options.strict;
    var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
    var cachePattern = JSON.stringify(pattern);
    if (cache[cachePattern]) {
        return cache[cachePattern];
    }
    var keys = [];
    var re = pathToRegexp(pattern, keys, options);
    var compiledPattern = { re: re, keys: keys };
    if (cacheCount < cacheLimit) {
        cache[cachePattern] = compiledPattern;
        cacheCount += 1;
    }
    return compiledPattern;
}
function matchPath(pathname, options) {
    if (options === void 0) { options = {}; }
    if (typeof options === 'string') {
        options = { path: options };
    }
    var _a = options.path, path = _a === void 0 ? '/' : _a, _b = options.exact, exact = _b === void 0 ? false : _b, _c = options.strict, strict = _c === void 0 ? false : _c;
    var _d = compilePath(path, { end: exact, strict: strict }), re = _d.re, keys = _d.keys;
    var match = re.exec(pathname);
    if (!match) {
        return null;
    }
    var url = match[0], values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) {
        return null;
    }
    return {
        path: path,
        url: path === '/' && url === '' ? '/' : url,
        isExact: isExact,
        params: keys.reduce(function (memo, key, index) {
            memo[key.name] = values[index];
            return memo;
        }, {})
    };
}
function matchesAreEqual(a, b) {
    if (a == null && b == null) {
        return true;
    }
    if (b == null) {
        return false;
    }
    return a && b &&
        a.path === b.path &&
        a.url === b.url &&
        valueEqual(a.params, b.params);
}
export { matchPath as a, matchesAreEqual as b };
