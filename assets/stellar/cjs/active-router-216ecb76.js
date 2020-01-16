'use strict';

const index = require('./index-ec8a1da4.js');
const index$1$1 = require('./index-9d31ce96.js');

const ActiveRouter = index$1$1.createProviderConsumer({
    historyType: 'browser',
    location: {
        pathname: '',
        query: {},
        key: ''
    },
    titleSuffix: '',
    root: '/',
    routeViewsUpdated: () => { }
}, (subscribe, child) => (index.h("context-consumer", { subscribe: subscribe, renderer: child })));

exports.ActiveRouter = ActiveRouter;
