/* =============================================================
   Muhammad Anees — Apple-caliber Portfolio
   script.js
   -------------------------------------------------------------
   Modules:
   01. Nav (scroll state + mobile menu + active link spy)
   02. Theme Toggle (persists in localStorage)
   03. Reveal On Scroll (IntersectionObserver, staggered)
   04. Skill Bars (animate width on in-view)
   05. Sticky Project Showcase (scroll-driven crossfade)
   06. Contact Form (validation + GA4 conversion)
   07. Back To Top
   08. Footer Year
   ============================================================= */

(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* =========================================================
       01. NAV — scroll state, mobile menu, active link spy
       ========================================================= */
    const Nav = {
        el: document.getElementById('nav'),
        toggle: document.getElementById('navToggle'),
        menu: document.getElementById('navMenu'),
        links: document.querySelectorAll('.nav__link'),

        init() {
            if (!this.el) return;

            window.addEventListener('scroll', () => this.onScroll(), { passive: true });
            this.onScroll();

            if (this.toggle && this.menu) {
                this.toggle.addEventListener('click', () => this.toggleMenu());
                this.menu.querySelectorAll('a').forEach((a) =>
                    a.addEventListener('click', () => this.closeMenu())
                );
                document.addEventListener('click', (e) => {
                    if (this.menu.classList.contains('active') &&
                        !this.menu.contains(e.target) &&
                        !this.toggle.contains(e.target)) {
                        this.closeMenu();
                    }
                });
            }

            // Active link spy
            if ('IntersectionObserver' in window) {
                const sectionIds = Array.from(this.links)
                    .map((l) => l.getAttribute('href'))
                    .filter((h) => h && h.startsWith('#'))
                    .map((h) => h.slice(1));

                const sections = sectionIds
                    .map((id) => document.getElementById(id))
                    .filter(Boolean);

                const obs = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const id = entry.target.id;
                            this.links.forEach((l) =>
                                l.classList.toggle('active', l.getAttribute('href') === '#' + id)
                            );
                        }
                    });
                }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

                sections.forEach((s) => obs.observe(s));
            }
        },

        onScroll() {
            this.el.classList.toggle('scrolled', window.scrollY > 8);
        },

        toggleMenu() {
            const open = this.menu.classList.toggle('active');
            this.toggle.classList.toggle('active', open);
            this.toggle.setAttribute('aria-expanded', String(open));
            document.body.style.overflow = open ? 'hidden' : '';
        },

        closeMenu() {
            this.menu.classList.remove('active');
            this.toggle.classList.remove('active');
            this.toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    };

    /* =========================================================
       02. THEME TOGGLE
       ========================================================= */
    const Theme = {
        toggle: document.getElementById('themeToggle'),
        root: document.documentElement,

        init() {
            if (!this.toggle) return;

            // Load saved theme
            const saved = localStorage.getItem('ma-apple-theme');
            if (saved) {
                this.root.setAttribute('data-theme', saved);
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.root.setAttribute('data-theme', 'dark');
            }

            this.toggle.addEventListener('click', () => this.switch());

            // Sync with OS preference if user hasn't chosen
            window.matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', (e) => {
                    if (!localStorage.getItem('ma-apple-theme')) {
                        this.root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
                    }
                });
        },

        switch() {
            const current = this.root.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            this.root.setAttribute('data-theme', next);
            localStorage.setItem('ma-apple-theme', next);
        }
    };

    /* =========================================================
       03. REVEAL ON SCROLL — fade + 24px rise, 600ms, staggered
       ========================================================= */
    const Reveal = {
        init() {
            const els = document.querySelectorAll('.reveal');
            if (!els.length) return;

            if (prefersReducedMotion || !('IntersectionObserver' in window)) {
                els.forEach((el) => el.classList.add('visible'));
                return;
            }

            const obs = new IntersectionObserver((entries, o) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        o.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

            els.forEach((el) => obs.observe(el));
        }
    };

    /* =========================================================
       04. SKILL BARS — animate width on in-view
       ========================================================= */
    const SkillBars = {
        init() {
            const rows = document.querySelectorAll('.skill-row');
            if (!rows.length) return;

            if (prefersReducedMotion || !('IntersectionObserver' in window)) {
                rows.forEach((r) => {
                    r.classList.add('in-view');
                    r.querySelector('.skill-row__bar').style.setProperty('--pct',
                        r.querySelector('.skill-row__pct').textContent);
                });
                return;
            }

            const obs = new IntersectionObserver((entries, o) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const row = entry.target;
                        const pct = row.querySelector('.skill-row__pct').textContent.trim();
                        row.querySelector('.skill-row__bar').style.setProperty('--pct', pct);
                        row.classList.add('in-view');
                        o.unobserve(row);
                    }
                });
            }, { threshold: 0.3 });

            rows.forEach((r) => obs.observe(r));
        }
    };

    /* =========================================================
       05. STICKY PROJECT SHOWCASE — scroll-driven crossfade
       Visual stays pinned; info panels crossfade as you scroll.
       ========================================================= */
    const Showcase = {
        panels: document.querySelectorAll('.showcase__panel'),
        items: document.querySelectorAll('.showcase__item'),
        info: document.querySelector('.showcase__info'),

        init() {
            if (!this.panels.length || !this.items.length) return;

            // Reduced motion / small screens: show all stacked
            if (prefersReducedMotion || window.matchMedia('(max-width: 600px)').matches) {
                this.panels.forEach((p) => p.classList.add('active'));
                this.items.forEach((i) => i.classList.add('active'));
                return;
            }

            if (!('IntersectionObserver' in window)) {
                this.panels[0].classList.add('active');
                this.items[0].classList.add('active');
                return;
            }

            // Set initial active state
            this.setActive(0);

            // Observer: detect which item is currently in view (center of viewport)
            const obs = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = Array.from(this.items).indexOf(entry.target);
                        if (idx >= 0) this.setActive(idx);
                    }
                });
            }, {
                rootMargin: '-45% 0px -45% 0px',
                threshold: 0
            });

            this.items.forEach((item) => obs.observe(item));

            // Re-init on resize (small → big transitions)
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => location.reload(), 300);
            });
        },

        setActive(idx) {
            this.panels.forEach((p, i) => p.classList.toggle('active', i === idx));
            this.items.forEach((item, i) => item.classList.toggle('active', i === idx));
        }
    };

    /* =========================================================
       06. CONTACT FORM — validation + simulated success + GA4
       ========================================================= */
    const ContactForm = {
        form: document.getElementById('contactForm'),
        status: document.getElementById('formStatus'),

        init() {
            if (!this.form) return;
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        },

        async handleSubmit(e) {
            e.preventDefault();

            const name = this.form.querySelector('#name');
            const email = this.form.querySelector('#email');
            const subject = this.form.querySelector('#subject');
            const budget = this.form.querySelector('#budget');
            const message = this.form.querySelector('#message');

            this.clearErrors();
            this.status.textContent = '';
            this.status.className = 'form-status';

            let valid = true;
            if (!name.value.trim()) { this.markError(name); valid = false; }
            if (!email.value.trim() || !this.isValidEmail(email.value.trim())) {
                this.markError(email); valid = false;
            }
            if (!message.value.trim() || message.value.trim().length < 10) {
                this.markError(message); valid = false;
            }

            if (!valid) {
                this.status.textContent = 'Please fill the form correctly.';
                this.status.classList.add('error');
                return;
            }

            // ===== Real email delivery via FormSubmit.co =====
            // NO signup required — submissions go straight to m.anees.dev0@gmail.com
            // First submission triggers a confirmation email — click the link to activate.
            // After that, all future submissions arrive in your inbox within seconds.
            const submitBtn = this.form.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            try {
                const res = await fetch('https://formsubmit.co/m.anees.dev0@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name.value,
                        email: email.value,
                        subject: subject.value || '(no subject)',
                        budget: budget.value || '(not specified)',
                        message: message.value,
                        _subject: `New Portfolio Lead from ${name.value}`,
                        _template: 'table',
                        _captcha: 'false',
                    }),
                });

                if (!res.ok) {
                    throw new Error(`Server responded ${res.status}`);
                }

                this.form.reset();
                this.status.textContent = '✅ Thank you! Your message has been sent. I will reply within 24 hours.';
                this.status.classList.add('success');

                // GA4 conversion event — fires the "generate_lead" event for analytics
                if (typeof window.gtag === 'function') {
                    window.gtag('event', 'generate_lead', {
                        currency: 'USD',
                        value: 1,
                        method: 'contact_form'
                    });
                }
            } catch (err) {
                console.error('Form submission error:', err);
                this.status.textContent = '❌ Could not send. Please email me directly at m.anees.dev0@gmail.com';
                this.status.classList.add('error');
            } finally {
                submitBtn.innerHTML = originalHTML;
                submitBtn.disabled = false;
            }
        },

        isValidEmail(v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },

        markError(field) {
            field.style.borderColor = '#ff3b30';
        },

        clearErrors() {
            this.form.querySelectorAll('input, textarea, select').forEach((f) => {
                f.style.borderColor = '';
            });
        }
    };

    /* =========================================================
       07. BACK TO TOP
       ========================================================= */
    const BackToTop = {
        btn: document.getElementById('backToTop'),
        init() {
            if (!this.btn) return;
            window.addEventListener('scroll', () => this.onScroll(), { passive: true });
            this.btn.addEventListener('click', () => this.scrollTop());
            this.onScroll();
        },
        onScroll() {
            this.btn.classList.toggle('show', window.scrollY > 600);
        },
        scrollTop() {
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
    };

    /* =========================================================
       08. FOOTER YEAR
       ========================================================= */
    const FooterYear = {
        init() {
            const el = document.getElementById('year');
            if (el) el.textContent = new Date().getFullYear();
        }
    };

    /* =========================================================
       INIT
       ========================================================= */
    function init() {
        Nav.init();
        Theme.init();
        Reveal.init();
        SkillBars.init();
        Showcase.init();
        ContactForm.init();
        BackToTop.init();
        FooterYear.init();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
