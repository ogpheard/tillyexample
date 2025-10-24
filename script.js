// ===========================
// Content By Tilly - Main JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {

    // Initialize EmailJS (Replace with your actual public key)
    // emailjs.init("YOUR_PUBLIC_KEY");

    // ===========================
    // Navigation Scroll Effect
    // ===========================
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }

        lastScroll = currentScroll;
    });

    // ===========================
    // Smooth Scroll for Navigation Links
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80; // header height
                const targetPosition = target.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navMenu = document.querySelector('.nav__menu');
                const navToggle = document.querySelector('.nav__toggle');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });

    // ===========================
    // Active Navigation Link
    // ===========================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    function setActiveNav() {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);

    // ===========================
    // Mobile Menu Toggle
    // ===========================
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // ===========================
    // Portfolio 2-Row Carousel
    // ===========================
    const portfolioCarousel = document.getElementById('portfolio-carousel');

    // Load portfolio items
    if (typeof portfolioVideos !== 'undefined' && portfolioCarousel) {
        renderPortfolioCarousel();
    }

    function renderPortfolioCarousel() {
        portfolioCarousel.innerHTML = '';

        // Create 2 rows
        const row1 = document.createElement('div');
        row1.className = 'portfolio-row portfolio-row--1';

        const row2 = document.createElement('div');
        row2.className = 'portfolio-row portfolio-row--2';

        // Duplicate videos for infinite scroll effect
        const allVideos = [...portfolioVideos, ...portfolioVideos, ...portfolioVideos];

        allVideos.forEach((video, index) => {
            const item = document.createElement('a');
            item.href = video.video;
            item.className = 'portfolio__item glightbox';
            item.setAttribute('data-gallery', 'portfolio');

            item.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                <div class="portfolio__overlay">
                    <h3 class="portfolio__title">${video.title}</h3>
                    <p class="portfolio__date">${video.date}</p>
                </div>
            `;

            // Alternate between rows
            if (index % 2 === 0) {
                row1.appendChild(item);
            } else {
                row2.appendChild(item);
            }
        });

        portfolioCarousel.appendChild(row1);
        portfolioCarousel.appendChild(row2);

        // Initialize GLightbox
        if (typeof GLightbox !== 'undefined') {
            const lightbox = GLightbox({
                selector: '.glightbox',
                touchNavigation: true,
                loop: true,
                autoplayVideos: true
            });
        }
    }

    // ===========================
    // FAQ Accordion
    // ===========================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // ===========================
    // Testimonial Carousel
    // ===========================
    if (typeof Swiper !== 'undefined') {
        const testimonialSwiper = new Swiper('.testimonial-carousel', {
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            speed: 600,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    }

    // ===========================
    // Instagram Grid
    // ===========================
    const instagramGrid = document.getElementById('instagram-grid');

    // Instagram posts - using unique images
    const instagramPosts = [
        {
            image: 'Video and Picture/WhatsApp Image 2025-10-24 at 18.23.54.jpeg',
            url: 'https://instagram.com/contentby.tilly',
            alt: 'Behind the scenes wedding content'
        },
        {
            image: 'Video and Picture/WhatsApp Image 2025-10-24 at 18.23.54 (1).jpeg',
            url: 'https://instagram.com/contentby.tilly',
            alt: 'Wedding day moments'
        },
        {
            image: 'Video and Picture/WhatsApp Image 2025-10-24 at 18.23.54 (2).jpeg',
            url: 'https://instagram.com/contentby.tilly',
            alt: 'Capturing love stories'
        },
        {
            image: 'Video and Picture/WhatsApp Image 2025-10-24 at 18.23.54 (3).jpeg',
            url: 'https://instagram.com/contentby.tilly',
            alt: 'Wedding content creation'
        },
        {
            image: 'Video and Picture/WhatsApp Image 2025-10-24 at 18.23.54.jpeg',
            url: 'https://instagram.com/contentby.tilly',
            alt: 'Real wedding moments'
        },
        {
            image: 'Video and Picture/WhatsApp Image 2025-10-24 at 18.23.54 (1).jpeg',
            url: 'https://instagram.com/contentby.tilly',
            alt: 'Wedding videography'
        }
    ];

    if (instagramGrid) {
        instagramPosts.forEach(post => {
            const item = document.createElement('a');
            item.href = post.url;
            item.target = '_blank';
            item.className = 'instagram-item';
            item.innerHTML = `
                <img src="${post.image}" alt="${post.alt}" loading="lazy">
                <div class="instagram-overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </div>
            `;
            instagramGrid.appendChild(item);
        });
    }

    // ===========================
    // Contact Form
    // ===========================
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Simulate form submission (replace with actual EmailJS integration)
            setTimeout(() => {
                // Show success message
                formMessage.className = 'form-message success';
                formMessage.textContent = "Thanks for your enquiry! I'll get back to you within 24 hours.";
                formMessage.style.display = 'block';

                // Reset form
                contactForm.reset();

                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;

                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 1500);

            // Actual EmailJS integration (uncomment and configure)
            /*
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(() => {
                    formMessage.className = 'form-message success';
                    formMessage.textContent = "Thanks for your enquiry! I'll get back to you within 24 hours.";
                    formMessage.style.display = 'block';
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                })
                .catch((error) => {
                    formMessage.className = 'form-message error';
                    formMessage.textContent = 'Oops! Something went wrong. Please try again or email directly.';
                    formMessage.style.display = 'block';
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                });
            */
        });
    }

    // ===========================
    // Back to Top Button
    // ===========================
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===========================
    // Scroll-Triggered Animations
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // ===========================
    // Image Loading Animation
    // ===========================
    document.querySelectorAll('img').forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });

    // ===========================
    // Form Validation Enhancement
    // ===========================
    const emailInput = document.querySelector('input[type="email"]');

    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.classList.add('error');
                this.setCustomValidity('Please enter a valid email address');
            } else {
                this.classList.remove('error');
                this.setCustomValidity('');
            }
        });
    }

    // ===========================
    // Video Hero Optimization
    // ===========================
    const heroVideos = document.querySelectorAll('.hero__video');

    heroVideos.forEach(heroVideo => {
        if (heroVideo) {
            // Pause video when not in viewport to save resources
            const videoObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            heroVideo.play();
                        } else {
                            heroVideo.pause();
                        }
                    });
                },
                { threshold: 0.25 }
            );

            videoObserver.observe(heroVideo);
        }
    });

    // ===========================
    // Preloader (Optional)
    // ===========================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

});

// ===========================
// Utility Functions
// ===========================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}