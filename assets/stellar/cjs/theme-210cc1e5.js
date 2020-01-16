'use strict';

const index = require('./index-ec8a1da4.js');
const index$1 = require('./index-9d31ce96.js');

const Tunnel = index$1.createProviderConsumer({
    dark: false,
    light: false
}, (subscribe, child) => index.h("context-consumer", { subscribe: subscribe, renderer: child }));

exports.Tunnel = Tunnel;
