import { h } from './index-bcfb4a9f.js';
import { c as createProviderConsumer } from './index-9ff8bd5c.js';

const Tunnel = createProviderConsumer({
    dark: false,
    light: false
}, (subscribe, child) => h("context-consumer", { subscribe: subscribe, renderer: child }));

export { Tunnel as T };
