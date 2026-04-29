// Cleaned site scripts: theme, menu, reveals, lazy-load, navbar
document.addEventListener('DOMContentLoaded', () => {
    const htmlEl = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');

    // Theme initialization: saved > system preference > light
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved) htmlEl.classList.toggle('dark', saved === 'dark');
    else htmlEl.classList.toggle('dark', prefersDark);

    function updateIcons() {
        if (!themeToggle) return;
        const sun = themeToggle.querySelector('.sun-icon');
        const moon = themeToggle.querySelector('.moon-icon');
        if (htmlEl.classList.contains('dark')) {
            if (moon) moon.classList.remove('opacity-0');
            if (moon) moon.classList.add('opacity-100');
            if (sun) sun.classList.remove('opacity-100');
            if (sun) sun.classList.add('opacity-0');
        } else {
            if (sun) sun.classList.remove('opacity-0');
            if (sun) sun.classList.add('opacity-100');
            if (moon) moon.classList.remove('opacity-100');
            if (moon) moon.classList.add('opacity-0');
        }
    }

    updateIcons();
    themeToggle?.addEventListener('click', () => {
        htmlEl.classList.toggle('dark');
        localStorage.setItem('theme', htmlEl.classList.contains('dark') ? 'dark' : 'light');
        updateIcons();
        updateNavbarStyle();
    });

    // Mobile menu toggle (defensive)
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle?.addEventListener('click', () => {
        navLinks?.classList.toggle('hidden');
        navLinks?.classList.toggle('flex');
    });
    document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => { navLinks?.classList.add('hidden'); navLinks?.classList.remove('flex'); }));

    // Reveal animations for cards
    const revealTargets = document.querySelectorAll('.service-card, .project-card, .contact-card');
    if (revealTargets.length && 'IntersectionObserver' in window) {
        revealTargets.forEach(el => el.classList.add('opacity-0', 'translate-y-4', 'transition', 'duration-700', 'ease-out'));
        const revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                    entry.target.classList.add('opacity-100');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealTargets.forEach(el => revealObserver.observe(el));
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar-wrapper');
    function updateNavbarStyle() {
        if (!navbar) return;
        const sc = window.scrollY;
        const isDark = htmlEl.classList.contains('dark');
        if (sc > 50) {
            navbar.style.backgroundColor = isDark ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.75)';
            navbar.style.backdropFilter = isDark ? 'blur(12px)' : 'blur(8px)';
        } else {
            navbar.style.backgroundColor = '';
            navbar.style.backdropFilter = '';
        }
    }
    window.addEventListener('scroll', updateNavbarStyle);
    updateNavbarStyle();

    // Smooth scroll for internal anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href !== '#' && document.querySelector(href)) { e.preventDefault(); document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }));

    // Lazy-loading images (data-src)
    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries, io) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; if (img.dataset && img.dataset.src) { img.src = img.dataset.src; img.removeAttribute('data-src'); } io.unobserve(img); } }); });
        document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
    }

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => { const top = s.offsetTop; if (pageYOffset >= top - 200) current = s.getAttribute('id'); });
        navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
    });

    // Accessibility: Escape hides mobile nav
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') navLinks?.classList.add('hidden'); });

    // Analytics placeholder
    if (typeof gtag !== 'undefined') gtag('config', 'GA_ID', { page_path: window.location.pathname, page_title: document.title });
    console.log('Site scripts initialized');
});