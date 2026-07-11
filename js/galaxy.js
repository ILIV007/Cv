/* ============================================================
   galaxy.js — 3D spiral galaxy for the 404 page.
   External file so the strict CSP (script-src 'self') allows it.
   ============================================================ */

(function () {
    'use strict';

    const canvas = document.getElementById('galaxy');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0, H = 0, cx = 0, cy = 0, dpr = 1;
    let mouseX = 0, mouseY = 0, targetTiltX = 0, targetTiltY = 0;
    let tiltX = 0.5, tiltY = 0;
    let rot = 0;
    let particles = [];
    let nebulae = [];
    let bgStars = [];

    function buildGalaxy() {
        particles = [];
        const ARMS = 4;
        const COUNT = 6000;
        const RADIUS = 480;
        const TWIST = 3.4;

        for (let i = 0; i < COUNT; i++) {
            const t = Math.pow(Math.random(), 0.5);
            const r = t * RADIUS;
            const arm = Math.floor(Math.random() * ARMS);
            const armOffset = (arm / ARMS) * Math.PI * 2;
            const spiral = (r / RADIUS) * TWIST * Math.PI * 2;
            const angle = armOffset + spiral;
            const spread = (0.025 + 0.13 * t) * RADIUS;
            const offR = (Math.random() - 0.5) * spread * 2;
            const finalR = Math.max(0, r + offR);
            const tang = (Math.random() - 0.5) * 0.22;
            const heightSpread = 14 + 55 * t;
            const y = (Math.random() - 0.5) * heightSpread * 2;
            let color;
            const cr = Math.random();
            if (t < 0.15) {
                color = cr < 0.55 ? [255, 250, 235] : [255, 240, 210];
            } else if (t < 0.45) {
                color = cr < 0.45 ? [210, 230, 255] : [170, 200, 255];
            } else {
                color = cr < 0.35 ? [150, 180, 245] : [185, 165, 245];
            }
            const size = t < 0.18 ? (Math.random() * 1.8 + 1.0) : (Math.random() * 1.2 + 0.45);
            particles.push({
                r: finalR, a: angle + tang, y: y, size: size, color: color,
                speed: 0.0008 + (1 / (finalR + 40)) * 0.06,
                tw: Math.random() * Math.PI * 2, tws: 0.01 + Math.random() * 0.04
            });
        }

        nebulae = [];
        const NEB_COUNT = 14;
        for (let i = 0; i < NEB_COUNT; i++) {
            const nt = 0.2 + Math.random() * 0.75;
            const nr = nt * RADIUS;
            const nArm = Math.floor(Math.random() * ARMS);
            const nAngle = (nArm / ARMS) * Math.PI * 2 + (nr / RADIUS) * TWIST * Math.PI * 2;
            const hue = Math.random() < 0.5 ? [120, 80, 200] : [60, 120, 220];
            nebulae.push({
                r: nr, a: nAngle, size: 60 + Math.random() * 120, color: hue,
                tw: Math.random() * Math.PI * 2, tws: 0.003 + Math.random() * 0.008
            });
        }

        bgStars = [];
        const bgCount = Math.floor((W * H) / 6000);
        for (let i = 0; i < bgCount; i++) {
            bgStars.push({
                x: Math.random() * W, y: Math.random() * H,
                size: Math.random() * 1.2 + 0.2,
                base: Math.random() * 0.5 + 0.15,
                tw: Math.random() * Math.PI * 2, tws: 0.005 + Math.random() * 0.02
            });
        }
    }

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width = W + 'px';
        canvas.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        cx = W / 2;
        cy = H / 2;
        buildGalaxy();
    }

    const FOCAL = 620;
    const Z_OFFSET = 500;

    function frame() {
        targetTiltY = (mouseX - cx) / cx * 0.35;
        targetTiltX = (mouseY - cy) / cy * 0.35;
        tiltY += (targetTiltY - tiltY) * 0.04;
        tiltX += (targetTiltX - tiltX) * 0.04;
        if (!reducedMotion) rot += 0.0016;

        ctx.fillStyle = 'rgba(5, 6, 13, 0.18)';
        ctx.fillRect(0, 0, W, H);

        for (let i = 0; i < bgStars.length; i++) {
            const s = bgStars[i];
            s.tw += s.tws;
            const a = s.base + Math.sin(s.tw) * 0.3;
            ctx.globalAlpha = Math.max(0, a);
            ctx.fillStyle = '#cfe0ff';
            ctx.fillRect(s.x, s.y, s.size, s.size);
        }
        ctx.globalAlpha = 1;

        const cosY = Math.cos(tiltY), sinY = Math.sin(tiltY);
        const cosX = Math.cos(tiltX - 0.5), sinX = Math.sin(tiltX - 0.5);
        const scale = Math.min(W, H) / 620;

        ctx.globalCompositeOperation = 'lighter';

        // nebulae
        for (let i = 0; i < nebulae.length; i++) {
            const n = nebulae[i];
            n.tw += n.tws;
            const a = n.a + rot;
            let x = Math.cos(a) * n.r;
            let z = Math.sin(a) * n.r;
            let y = 0;
            let y1 = y * cosX - z * sinX;
            let z1 = y * sinX + z * cosX;
            let x2 = x * cosY + z1 * sinY;
            let z2 = -x * sinY + z1 * cosY;
            const persp = FOCAL / (FOCAL + z2 + Z_OFFSET);
            if (persp <= 0) continue;
            const sx = cx + x2 * persp * scale;
            const sy = cy + y1 * persp * scale;
            const radius = Math.max(2, n.size * persp * scale);
            const pulse = 0.5 + Math.sin(n.tw) * 0.2;
            const nr = n.color[0], ng = n.color[1], nb = n.color[2];
            const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, radius);
            grad.addColorStop(0, 'rgba(' + nr + ',' + ng + ',' + nb + ',' + (0.22 * pulse * persp) + ')');
            grad.addColorStop(0.5, 'rgba(' + nr + ',' + ng + ',' + nb + ',' + (0.08 * pulse * persp) + ')');
            grad.addColorStop(1, 'rgba(' + nr + ',' + ng + ',' + nb + ',0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(sx, sy, radius, 0, Math.PI * 2);
            ctx.fill();
        }

        // stars
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const a = p.a + rot * (1 + p.speed * 8);
            let x = Math.cos(a) * p.r;
            let z = Math.sin(a) * p.r;
            let y = p.y;
            let y1 = y * cosX - z * sinX;
            let z1 = y * sinX + z * cosX;
            let x2 = x * cosY + z1 * sinY;
            let z2 = -x * sinY + z1 * cosY;
            const persp = FOCAL / (FOCAL + z2 + Z_OFFSET);
            if (persp <= 0) continue;
            const sx = cx + x2 * persp * scale;
            const sy = cy + y1 * persp * scale;
            if (sx < -20 || sx > W + 20 || sy < -20 || sy > H + 20) continue;
            p.tw += p.tws;
            const twinkle = 0.7 + Math.sin(p.tw) * 0.3;
            const depth = Math.min(1, persp);
            const cr = p.color[0], cg = p.color[1], cb = p.color[2];
            const alpha = Math.min(1, depth * twinkle * 1.1);
            const size = Math.max(0.6, p.size * persp * scale);
            // glow halo
            ctx.fillStyle = 'rgba(' + cr + ',' + cg + ',' + cb + ',' + (alpha * 0.22) + ')';
            ctx.beginPath();
            ctx.arc(sx, sy, size * 2.6, 0, Math.PI * 2);
            ctx.fill();
            // bright core
            ctx.fillStyle = 'rgba(' + cr + ',' + cg + ',' + cb + ',' + alpha + ')';
            ctx.beginPath();
            ctx.arc(sx, sy, size, 0, Math.PI * 2);
            ctx.fill();
        }

        // core glow
        const coreR = 180 * scale;
        const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR);
        coreGrad.addColorStop(0, 'rgba(255, 248, 225, 0.85)');
        coreGrad.addColorStop(0.12, 'rgba(255, 235, 195, 0.55)');
        coreGrad.addColorStop(0.35, 'rgba(200, 215, 255, 0.22)');
        coreGrad.addColorStop(0.7, 'rgba(140, 170, 240, 0.08)');
        coreGrad.addColorStop(1, 'rgba(110, 164, 212, 0)');
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalCompositeOperation = 'source-over';
        requestAnimationFrame(frame);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    window.addEventListener('touchmove', function (e) {
        if (e.touches[0]) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }
    }, { passive: true });
    mouseX = window.innerWidth / 2;
    mouseY = window.innerHeight / 2;

    resize();
    frame();
})();
