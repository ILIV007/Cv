/* ============================================================
   ui.js — Stars, scroll reveal, progress bar, back-to-top
   ============================================================ */

/* ----- Cosmic star field ----- */
function createStars() {
    const bg = document.getElementById('cosmicBg');
    if (!bg || bg.querySelector('.star')) return;

    const starCount = window.innerWidth < 768 ? 35 : 60;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.setAttribute('aria-hidden', 'true');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 5 + 's';
        star.style.animationDuration = (Math.random() * 4 + 2) + 's';
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        frag.appendChild(star);
    }
    bg.appendChild(frag);
}

/* ----- Scroll reveal (with unobserve — PERF-03 fix) ----- */
function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        // Graceful fallback: show everything
        reveals.forEach((el) => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target); // free memory
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach((el) => observer.observe(el));
}

/* ----- Scroll progress bar ----- */
function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;

    let ticking = false;
    const update = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });
    update();
}

/* ----- Back to top button ----- */
function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    let ticking = false;
    const onScroll = () => {
        btn.classList.toggle('visible', window.scrollY > 600);
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ----- Smooth anchor scroll with focus management (A11Y-03 fix) ----- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#' || href.length < 2) return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Move focus so screen readers announce the new section
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
        });
    });
}

/* ----- GitHub stars — live total across all repos ----- */
function initGitHubStars() {
    const el = document.getElementById('gh-stars');
    if (!el) return;

    fetch('https://api.github.com/users/ILIV007/repos?per_page=100')
        .then((r) => r.json())
        .then((repos) => {
            if (!Array.isArray(repos)) throw new Error('bad response');
            const total = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
            el.textContent = total;
        })
        .catch(() => {
            // API rate-limited or failed — keep showing 0
            el.textContent = '0';
        });
}

/* ----- Entry point ----- */
export function initUI() {
    createStars();
    initReveal();
    initScrollProgress();
    initBackToTop();
    initSmoothScroll();
    initGitHubStars();
}
