// forEach method, could be shipped as part of an Object Literal/Module
// assert for testing
var assert = function (condition, message) {
    if (!condition) {
        throw message || "Assertion failed!";
    }
    return (condition);
};
var delay = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
export { delay as a, assert as b };
