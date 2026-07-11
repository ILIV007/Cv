/* ============================================================
   i18n.js — Bilingual switching with persistence (BUG-03 fix)
   ============================================================ */

const STORAGE_KEY = 'iliv007-lang';

/**
 * Apply a language to the document.
 * @param {'en'|'fa'} lang
 */
export function switchLang(lang) {
    const doc = document.documentElement;
    doc.lang = lang;
    doc.dir = lang === 'fa' ? 'rtl' : 'ltr';

    // Toggle active button state
    document.querySelectorAll('.lang-btn').forEach((btn) => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });

    // Swap all bilingual text
    document.querySelectorAll('[data-en][data-fa]').forEach((el) => {
        const text = el.getAttribute('data-' + lang);
        if (text !== null) el.textContent = text;
    });

    // Swap font mode
    document.body.classList.toggle('fa-mode', lang === 'fa');
    document.body.classList.toggle('en-mode', lang === 'en');

    // Persist preference
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
        /* storage may be unavailable (private mode) — ignore */
    }
}

/**
 * Initialise language: read saved preference, otherwise detect from
 * the browser, defaulting to English.
 */
export function initI18n() {
    let lang = 'en';
    try {
        lang = localStorage.getItem(STORAGE_KEY) || 'en';
    } catch (e) { /* ignore */ }

    // First-time visitors with Persian browser get Persian
    if (!lang) {
        const browserLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
        lang = browserLang === 'fa' ? 'fa' : 'en';
    }

    switchLang(lang);

    // Wire up the language buttons (no inline onclick — A11Y-06 fix)
    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => switchLang(btn.dataset.lang));
    });
}
