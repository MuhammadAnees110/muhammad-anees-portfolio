/* =============================================================
   Muhammad Anees — WordPress Developer Portfolio
   script.js
   -------------------------------------------------------------
   Modular vanilla JS. No frameworks, no dependencies.
   Modules:
   01. Loader
   02. Custom Cursor (desktop only)
   03. Navbar (scroll state + mobile menu + active link)
   04. Scroll Progress Bar
   05. Smooth Scroll & Active Section Spy
   06. Hero Typing Effect
   07. Reveal On Scroll (IntersectionObserver)
   08. Animated Counters
   09. Skill Progress Bars
   10. Project Filtering
   11. Dark / Light Theme Toggle
   12. Contact Form Validation
   13. Back To Top
   14. Footer Year
   15. Init
   ============================================================= */

(function () {
    'use strict';

    /* =========================================================
       01. LOADER
       Hide the loading screen once everything is ready.
       ========================================================= */
    const Loader = {
        el: document.getElementById('loader'),
        hide() {
            if (!this.el) return;
            this.el.classList.add('hidden');
            // Remove from DOM after the fade-out transition
            setTimeout(() => this.el && this.el.remove(), 600);
        },
        init() {
            // Hide as soon as the window is fully loaded.
            window.addEventListener('load', () => this.hide());
            // Safety fallback in case 'load' takes too long.
            setTimeout(() => this.hide(), 3500);
        }
    };

    /* =========================================================
       02. CUSTOM CURSOR (desktop only)
       Renders a small dot + a larger follower that catches
       up with a slight delay. Hover state on interactive els.
       ========================================================= */
    const Cursor = {
        dot: document.getElementById('cursor'),
        follower: document.getElementById('cursorFollower'),
        enabled: false,
        mouseX: 0, mouseY: 0,
        followerX: 0, followerY: 0,

        init() {
            // Skip on touch devices and small screens
            const canHover = window.matchMedia('(hover: hover) and (min-width: 1025px)').matches;
            if (!canHover || !this.dot || !this.follower) return;
            this.enabled = true;
            document.body.classList.add('has-custom-cursor');

            window.addEventListener('mousemove', (e) => {
                this.mouseX = e.clientX;
                this.mouseY = e.clientY;
                this.dot.style.transform = `translate(${this.mouseX}px, ${this.mouseY}px) translate(-50%, -50%)`;
            }, { passive: true });

            this.animateFollower();
            this.bindHover();
        },

        animateFollower() {
            // Smooth lag effect on the larger follower
            this.followerX += (this.mouseX - this.followerX) * 0.18;
            this.followerY += (this.mouseY - this.followerY) * 0.18;
            this.follower.style.transform = `translate(${this.followerX}px, ${this.followerY}px) translate(-50%, -50%)`;
            requestAnimationFrame(() => this.animateFollower());
        },

        bindHover() {
            const hoverSelector = 'a, button, .project-card, .service-card, .why-card, .chip, .skill-bar, input, textarea, select';
            document.querySelectorAll(hoverSelector).forEach((el) => {
                el.addEventListener('mouseenter', () => {
                    this.dot.classList.add('is-hover');
                    this.follower.classList.add('is-hover');
                });
                el.addEventListener('mouseleave', () => {
                    this.dot.classList.remove('is-hover');
                    this.follower.classList.remove('is-hover');
                });
            });
        }
    };

    /* =========================================================
       03. NAVBAR
       - Adds 'scrolled' class on scroll
       - Mobile hamburger toggle
       ========================================================= */
    const Navbar = {
        nav: document.getElementById('navbar'),
        toggle: document.getElementById('navToggle'),
        menu: document.getElementById('navMenu'),

        init() {
            if (!this.nav) return;
            this.onScroll();
            window.addEventListener('scroll', () => this.onScroll(), { passive: true });

            if (this.toggle && this.menu) {
                this.toggle.addEventListener('click', () => this.toggleMenu());
                // Close menu when a link is clicked
                this.menu.querySelectorAll('a').forEach((link) => {
                    link.addEventListener('click', () => this.closeMenu());
                });
                // Close on outside click
                document.addEventListener('click', (e) => {
                    if (this.menu.classList.contains('active') &&
                        !this.menu.contains(e.target) &&
                        !this.toggle.contains(e.target)) {
                        this.closeMenu();
                    }
                });
            }
        },

        onScroll() {
            if (window.scrollY > 30) {
                this.nav.classList.add('scrolled');
            } else {
                this.nav.classList.remove('scrolled');
            }
        },

        toggleMenu() {
            const isOpen = this.menu.classList.toggle('active');
            this.toggle.classList.toggle('active', isOpen);
            this.toggle.setAttribute('aria-expanded', String(isOpen));
            document.body.style.overflow = isOpen ? 'hidden' : '';
        },

        closeMenu() {
            this.menu.classList.remove('active');
            this.toggle.classList.remove('active');
            this.toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    };

    /* =========================================================
       04. SCROLL PROGRESS BAR
       ========================================================= */
    const ScrollProgress = {
        bar: document.getElementById('scrollProgress'),
        init() {
            if (!this.bar) return;
            window.addEventListener('scroll', () => this.update(), { passive: true });
            this.update();
        },
        update() {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled  = window.scrollY;
            const pct = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
            this.bar.style.width = pct + '%';
        }
    };

    /* =========================================================
       05. ACTIVE SECTION SPY
       Highlights the navbar link of the section currently
       in view, using IntersectionObserver.
       ========================================================= */
    const SectionSpy = {
        init() {
            const links = document.querySelectorAll('.nav__link');
            if (!links.length) return;

            const sections = Array.from(links)
                .map((link) => document.querySelector(link.getAttribute('href')))
                .filter(Boolean);

            if (!sections.length) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        links.forEach((link) => {
                            link.classList.toggle('active',
                                link.getAttribute('href') === '#' + id);
                        });
                    }
                });
            }, {
                rootMargin: '-45% 0px -50% 0px',
                threshold: 0
            });

            sections.forEach((sec) => observer.observe(sec));
        }
    };

    /* =========================================================
       06. HERO TYPING EFFECT
       Cycles through role phrases with type / delete animation.
       ========================================================= */
    const Typing = {
        el: document.getElementById('typing'),
        phrases: [
            'WordPress Developer',
            'WooCommerce Expert',
            'Elementor Specialist',
            'Front-End Developer',
            'SEO Optimizer',
            'Performance Geek'
        ],
        phraseIndex: 0,
        charIndex: 0,
        deleting: false,

        init() {
            if (!this.el) return;
            // Wait a moment after load before starting
            setTimeout(() => this.tick(), 800);
        },

        tick() {
            const current = this.phrases[this.phraseIndex];

            if (this.deleting) {
                this.charIndex--;
            } else {
                this.charIndex++;
            }

            this.el.textContent = current.substring(0, this.charIndex);

            let delay = this.deleting ? 45 : 90;

            if (!this.deleting && this.charIndex === current.length) {
                delay = 1800; // pause at end of word
                this.deleting = true;
            } else if (this.deleting && this.charIndex === 0) {
                this.deleting = false;
                this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
                delay = 300;
            }

            setTimeout(() => this.tick(), delay);
        }
    };

    /* =========================================================
       07. REVEAL ON SCROLL
       Adds 'visible' class to .reveal elements when they
       enter the viewport. Uses IntersectionObserver.
       ========================================================= */
    const Reveal = {
        init() {
            const els = document.querySelectorAll('.reveal');
            if (!els.length) return;

            if (!('IntersectionObserver' in window)) {
                els.forEach((el) => el.classList.add('visible'));
                return;
            }

            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.1
            });

            els.forEach((el) => observer.observe(el));
        }
    };

    /* =========================================================
       08. ANIMATED COUNTERS
       Counts from 0 to data-target when the element enters
       the viewport.
       ========================================================= */
    const Counters = {
        init() {
            const counters = document.querySelectorAll('.counter');
            if (!counters.length) return;

            const animate = (el) => {
                const target = parseInt(el.dataset.target, 10) || 0;
                const duration = 1800;
                const startTime = performance.now();

                const step = (now) => {
                    const progress = Math.min((now - startTime) / duration, 1);
                    // easeOutExpo for a satisfying finish
                    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    el.textContent = Math.floor(eased * target);
                    if (progress < 1) requestAnimationFrame(step);
                    else el.textContent = target;
                };
                requestAnimationFrame(step);
            };

            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animate(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.4 });

            counters.forEach((c) => observer.observe(c));
        }
    };

    /* =========================================================
       09. SKILL PROGRESS BARS
       Sets the width of each .skill-bar__fill to its
       data-progress value when scrolled into view.
       ========================================================= */
    const SkillBars = {
        init() {
            const bars = document.querySelectorAll('.skill-bar__fill');
            if (!bars.length) return;

            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const pct = entry.target.dataset.progress || 0;
                        entry.target.style.width = pct + '%';
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            bars.forEach((b) => observer.observe(b));
        }
    };

    /* =========================================================
       10. PROJECT FILTERING
       Filters project cards by their data-category attribute.
       ========================================================= */
    const ProjectFilter = {
        init() {
            const buttons = document.querySelectorAll('.filter-btn');
            const cards = document.querySelectorAll('.project-card');
            if (!buttons.length || !cards.length) return;

            buttons.forEach((btn) => {
                btn.addEventListener('click', () => {
                    const filter = btn.dataset.filter;

                    buttons.forEach((b) => b.classList.remove('active'));
                    btn.classList.add('active');

                    cards.forEach((card) => {
                        const cat = card.dataset.category;
                        const show = filter === 'all' || cat === filter;

                        if (show) {
                            card.classList.remove('hide');
                            // Re-trigger entrance animation
                            card.classList.remove('visible');
                            void card.offsetWidth; // force reflow
                            card.classList.add('visible');
                        } else {
                            card.classList.add('hide');
                        }
                    });
                });
            });
        }
    };

    /* =========================================================
       11. DARK / LIGHT THEME TOGGLE
       Persists preference in localStorage.
       ========================================================= */
    const Theme = {
        toggle: document.getElementById('themeToggle'),
        root: document.documentElement,

        init() {
            if (!this.toggle) return;

            // Load saved theme, else default to dark
            const saved = localStorage.getItem('ma-theme');
            if (saved) {
                this.root.setAttribute('data-theme', saved);
            } else {
                this.root.setAttribute('data-theme', 'dark');
            }

            this.toggle.addEventListener('click', () => this.switch());
        },

        switch() {
            const current = this.root.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            this.root.setAttribute('data-theme', next);
            localStorage.setItem('ma-theme', next);
        }
    };

    /* =========================================================
       12. CONTACT FORM VALIDATION
       Client-side validation + simulated success message.
       (Hook up to a real backend / Formspree / WP REST API later.)
       ========================================================= */
    const ContactForm = {
        form: document.getElementById('contactForm'),
        status: document.getElementById('formStatus'),

        init() {
            if (!this.form) return;
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        },

        handleSubmit(e) {
            e.preventDefault();

            const name    = this.form.querySelector('#name');
            const email   = this.form.querySelector('#email');
            const message = this.form.querySelector('#message');

            // Reset
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

            // ===== Real email delivery via FormSubmit.co (free, no signup) =====
            const submitBtn = this.form.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            const subject = this.form.querySelector('#subject');
            const budget = this.form.querySelector('#budget');

            fetch('https://formsubmit.co/m.anees.dev0@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    subject: subject ? subject.value : '(no subject)',
                    budget: budget ? budget.value : '(not specified)',
                    message: message.value,
                    _subject: 'New Portfolio Lead from ' + name.value,
                    _template: 'table',
                    _captcha: 'false',
                }),
            })
            .then(res => {
                if (!res.ok) throw new Error('Server responded ' + res.status);
                this.form.reset();
                submitBtn.innerHTML = originalHTML;
                submitBtn.disabled = false;
                this.status.textContent = '✅ Thank you! Your message has been sent. I will reply within 24 hours.';
                this.status.classList.add('success');

                // GA4 conversion event
                if (typeof window.gtag === 'function') {
                    window.gtag('event', 'generate_lead', {
                        currency: 'USD',
                        value: 1,
                        method: 'contact_form'
                    });
                }
            })
            .catch(err => {
                console.error('Form submission error:', err);
                submitBtn.innerHTML = originalHTML;
                submitBtn.disabled = false;
                this.status.textContent = '❌ Could not send. Please email me directly at m.anees.dev0@gmail.com';
                this.status.classList.add('error');
            });
        },

        isValidEmail(value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },

        markError(field) {
            field.style.borderColor = '#EF4444';
            field.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.18)';
        },

        clearErrors() {
            this.form.querySelectorAll('input, textarea, select').forEach((field) => {
                field.style.borderColor = '';
                field.style.boxShadow = '';
            });
        }
    };

    /* =========================================================
       13. BACK TO TOP
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
            this.btn.classList.toggle('show', window.scrollY > 500);
        },
        scrollTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    /* =========================================================
       14. FOOTER YEAR
       ========================================================= */
    const FooterYear = {
        init() {
            const el = document.getElementById('year');
            if (el) el.textContent = new Date().getFullYear();
        }
    };

    /* =========================================================
       15. INIT
       ========================================================= */
    function init() {
        Loader.init();
        Cursor.init();
        Navbar.init();
        ScrollProgress.init();
        SectionSpy.init();
        Typing.init();
        Reveal.init();
        Counters.init();
        SkillBars.init();
        ProjectFilter.init();
        Theme.init();
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
