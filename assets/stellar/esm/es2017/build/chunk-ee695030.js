import { h } from '../stellar-core.core.js';

const assert = function (condition, message) {
    if (!condition) {
        throw message || "Assertion failed!";
    }
    return (condition);
};
const delay = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export { delay as a, assert as b };
