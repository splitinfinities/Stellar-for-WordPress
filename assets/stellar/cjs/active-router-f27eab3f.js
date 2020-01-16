'use strict';

const index = require('./index-88c31836.js');
const index$2 = require('./index-9d31ce96.js');

const ActiveRouter = index$2.createProviderConsumer({
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
