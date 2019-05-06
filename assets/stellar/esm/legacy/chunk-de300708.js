var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var addEventListener = function (node, event, listener) { return (node.addEventListener
    ? node.addEventListener(event, listener, false)
    : node.attachEvent('on' + event, listener)); };
var removeEventListener = function (node, event, listener) { return (node.removeEventListener
    ? node.removeEventListener(event, listener, false)
    : node.detachEvent('on' + event, listener)); };
var getConfirmation = function (message, callback) { return (callback(window.confirm(message))); };
var isModifiedEvent = function (event) { return (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey); };
var supportsHistory = function () {
    var ua = window.navigator.userAgent;
    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
        ua.indexOf('Mobile Safari') !== -1 &&
        ua.indexOf('Chrome') === -1 &&
        ua.indexOf('Windows Phone') === -1) {
        return false;
    }
    return window.history && 'pushState' in window.history;
};
var supportsPopStateOnHashChange = function () { return (window.navigator.userAgent.indexOf('Trident') === -1); };
var supportsGoWithoutReloadUsingHash = function () { return (window.navigator.userAgent.indexOf('Firefox') === -1); };
var isExtraneousPopstateEvent = function (event) { return (event.state === undefined &&
    navigator.userAgent.indexOf('CriOS') === -1); };
var storageAvailable = function (type) {
    var storage = window[type], x = '__storage_test__';
    try {
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            storage.length !== 0;
    }
};
export { isModifiedEvent as a, storageAvailable as b, canUseDOM as c, supportsHistory as d, supportsPopStateOnHashChange as e, getConfirmation as f, addEventListener as g, removeEventListener as h, isExtraneousPopstateEvent as i, supportsGoWithoutReloadUsingHash as j };
