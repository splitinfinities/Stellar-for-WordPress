
// StellarCore: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './stellar-core.core.js';
import { COMPONENTS } from './stellar-core.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
