import { s as setMode } from './index-cc4604b3.js';

const appGlobalScript = () => {
    setMode((el) => el.tagName === 'ION-ICON' ? el.mode || el.getAttribute('mode') : null);
};

const globalScripts = appGlobalScript;

export { globalScripts as g };
