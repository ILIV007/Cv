/* ============================================================
   main.js — Entry point. Wires up i18n + UI on DOM ready.
   ============================================================ */

import { initI18n } from './i18n.js';
import { initUI } from './ui.js';

function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
}

onReady(() => {
    // Mark JS as active so the no-JS fallback (always-visible reveal)
    // is replaced by the animated reveal behaviour.
    document.documentElement.classList.add('js');

    initI18n();
    initUI();
});
