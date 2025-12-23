// Nabin Ghimire Portfolio - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Page transition on load
    document.body.classList.add('page-loaded');

    // Enhanced navigation scroll shadow
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // Scroll-triggered fade-in for case study sections
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    // Observe case study sections and other key elements
    const fadeInElements = document.querySelectorAll('.case-study-section, .project-card, .competency-card, .timeline-item, .stats');
    fadeInElements.forEach(el => {
        el.classList.add('fade-in-element');
        fadeInObserver.observe(el);
    });

    // Smooth scroll for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#main') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add active state to navigation based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage.includes('case-study') && linkPage === 'work.html')) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle (for future enhancement)
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav-links');
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
            // Future: Add mobile menu toggle button
        }
    };

    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();
});
