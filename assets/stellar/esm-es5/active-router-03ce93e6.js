import { h } from './index-36b06d19.js';
import { c as createProviderConsumer } from './index-9ff8bd5c.js';
var ActiveRouter = createProviderConsumer({
    historyType: 'browser',
    location: {
        pathname: '',
        query: {},
        key: ''
    },
    titleSuffix: '',
    root: '/',
    routeViewsUpdated: function () { }
}, function (subscribe, child) { return (h("context-consumer", { subscribe: subscribe, renderer: child })); });
export { ActiveRouter as A };
