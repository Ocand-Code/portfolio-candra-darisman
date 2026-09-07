// ============================================
// CANDRA DARISMAN — PORTFOLIO SCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- NAV SCROLL ----
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ---- MOBILE NAV TOGGLE ----
    const toggle = document.getElementById('navToggle');
    const links = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
        links.classList.toggle('active');
    });
    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', () => links.classList.remove('active'));
    });

    // ---- SCROLL ANIMATIONS ----
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));

    // ---- COUNTER ANIMATION ----
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                animateCounter(el, target);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

    function animateCounter(el, target) {
        let current = 0;
        const duration = 1500;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = Math.floor(current);
        }, 16);
    }

    // ---- SMOOTH SCROLL FOR ANCHOR LINKS ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
