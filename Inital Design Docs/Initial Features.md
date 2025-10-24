Content by Tilly - Simple Frontend-Only Feature Set
No Backend, No Database, Just Beautiful Code

✅ CORE FEATURES TO BUILD
1. Contact Form → EmailJS
Why: Captures enquiries without backend
How: Client-side email sending
javascript// EmailJS - 200 emails/month FREE
// Setup: 5 minutes
// No server needed

<form id="contact-form">
  <input name="name" required>
  <input name="email" type="email" required>
  <input name="wedding_date" type="date">
  <input name="venue">
  <select name="package">
    <option>Your Vows (£600)</option>
    <option>Your Celebration (£900)</option>
  </select>
  <textarea name="message" required></textarea>
  <button type="submit">Send Enquiry</button>
</form>

<script>
emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
            // Show success message
            alert('Thanks! I\'ll get back to you within 24 hours.');
        });
});
</script>
```

**Claude Code Prompt:**
```
"Create a contact form with EmailJS integration:
- Fields: name, email, wedding date, venue, package dropdown, message
- Validation: all required except venue
- Success message: 'Thanks! I'll get back to you within 24 hours'
- Error handling with user-friendly messages
- Uses our colors: #31150b and #e4dcd1
- Glorify Sans font, matching our design system"

2. Manual Video Portfolio Grid
Why: Full control, no APIs, always works
How: Simple JSON file + JavaScript
javascript// videos.json (you edit this file monthly)
const portfolioVideos = [
  {
    thumbnail: "images/wedding1-thumb.jpg",
    video: "https://www.youtube.com/embed/xxx", // or local .mp4
    title: "Sarah & Tom",
    date: "October 2024",
    type: "ceremony" // for filtering
  },
  // ... 9-12 videos
];

// portfolio.js
function renderPortfolio() {
  portfolioVideos.forEach(video => {
    // Create grid items
    // Add click handlers for lightbox
  });
}
```

**Claude Code Prompt:**
```
"Build a responsive video portfolio grid:
- 3 columns desktop, 2 tablet, 1 mobile
- Each item: thumbnail, title overlay on hover
- Click opens GLightbox modal with video
- Filter buttons: All / Ceremony / Reception / Getting Ready
- Smooth fade-in animation on scroll
- Uses videos.json data file
- Gap between items: 32px"

3. Video Lightbox Modal
Why: Professional video viewing experience
How: GLightbox library (7KB, free)
html<!-- Include GLightbox -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

<!-- Video thumbnails -->
<a href="video.mp4" class="glightbox">
  <img src="thumbnail.jpg" alt="Wedding video">
</a>

<script>
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true
});
</script>
```

**Claude Code Prompt:**
```
"Integrate GLightbox for video portfolio:
- Clicking thumbnail opens fullscreen video player
- Support for YouTube embeds and local .mp4 files
- Previous/next navigation
- Close button with X
- Keyboard shortcuts (ESC to close, arrows to navigate)
- Custom styling to match our #31150b color scheme"

4. FAQ Accordion
Why: Reduces repetitive questions, better UX
How: Pure CSS/JS, no libraries
html<div class="faq-item">
  <button class="faq-question">
    What if my photographer doesn't want you there?
    <span class="faq-icon">+</span>
  </button>
  <div class="faq-answer">
    <p>I work collaboratively with all vendors...</p>
  </div>
</div>

<style>
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-item.active .faq-answer {
  max-height: 500px;
}

.faq-item.active .faq-icon {
  transform: rotate(45deg);
}
</style>
```

**Claude Code Prompt:**
```
"Create an elegant FAQ accordion:
- 10-12 common questions about wedding content services
- Click question to expand/collapse answer
- + icon rotates to × when open
- Only one open at a time (closes others)
- Smooth height transition
- Abril Text for questions, Glorify Sans for answers
- Color: #31150b on #e4dcd1 background"

5. Package Comparison Interactive
Why: Helps couples understand differences
How: CSS + JavaScript toggle
html<div class="package-comparison">
  <div class="package-card">
    <h3>Your Vows</h3>
    <div class="price">From £600</div>
    <ul class="features">
      <li class="included">5-6 edited videos</li>
      <li class="included">Ceremony coverage</li>
      <li class="included">72hr delivery</li>
      <li class="not-included">Raw clips gallery</li>
      <li class="not-included">Reception coverage</li>
    </ul>
  </div>
  
  <div class="package-card featured">
    <span class="badge">Most Popular</span>
    <h3>Your Celebration</h3>
    <div class="price">From £900</div>
    <ul class="features">
      <li class="included">10-12 edited videos</li>
      <li class="included">Full day coverage</li>
      <li class="included">72hr delivery</li>
      <li class="included">Raw clips gallery</li>
      <li class="included">Reception coverage</li>
    </ul>
  </div>
</div>
```

**Claude Code Prompt:**
```
"Build side-by-side package comparison cards:
- Two cards: Your Vows vs Your Celebration
- 'Most Popular' badge on second card
- Checkmarks for included features
- Grayed out X for not included
- Hover effect: lifts card 4px
- Mobile: stack vertically
- Add 'View Full Details' button on each
- Colors: #f9f7f4 cards on #e4dcd1 background"

6. Smooth Scroll Navigation
Why: Elegant page navigation
How: One line CSS + small JS
csshtml {
  scroll-behavior: smooth;
}
javascript// Enhanced smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 80; // header height
    const targetPosition = target.offsetTop - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});
```

**Claude Code Prompt:**
```
"Add smooth scroll to all anchor links:
- Navigation links scroll to sections
- Account for 80px fixed header offset
- Smooth easing transition
- Update active nav item based on scroll position
- Underline animation on active section"

7. Sticky Header with Scroll Effect
Why: Always accessible navigation
How: CSS + scroll listener
javascriptconst header = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add('nav--scrolled');
  } else {
    header.classList.remove('nav--scrolled');
  }
});
css.nav {
  position: fixed;
  top: 0;
  background: transparent;
  transition: all 0.3s ease;
}

.nav--scrolled {
  background: rgba(228, 220, 209, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(49, 21, 11, 0.05);
}
```

**Claude Code Prompt:**
```
"Create sticky navigation header:
- Transparent initially
- After scrolling 100px: background #e4dcd1 with 95% opacity
- Add subtle shadow and backdrop blur
- Smooth transition (0.3s)
- Logo left, nav links center, 'Book Now' button right
- Mobile: hamburger menu"

8. Testimonial Carousel
Why: Social proof in elegant format
How: Swiper.js (free, 40KB)
html<div class="swiper testimonial-carousel">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <blockquote>
        "Tilly made us feel so comfortable all day..."
      </blockquote>
      <cite>Emma & James • September 2024</cite>
    </div>
    <!-- more slides -->
  </div>
  <div class="swiper-pagination"></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
const swiper = new Swiper('.testimonial-carousel', {
  autoplay: { delay: 5000 },
  loop: true,
  pagination: { el: '.swiper-pagination' }
});
</script>
```

**Claude Code Prompt:**
```
"Build testimonial carousel with Swiper.js:
- 3-4 testimonials with quotes
- Auto-rotate every 5 seconds
- Dot pagination
- Swipe on mobile
- Large quote marks as design element
- Abril Text italic for quote, Glorify Sans for attribution
- Center-aligned on #f9f7f4 background"

9. Scroll-Triggered Animations
Why: Adds elegance and engagement
How: Intersection Observer API
javascriptconst observerOptions = {
  threshold: 0.2,
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

// Observe all elements with .animate-on-scroll
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
css.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}
```

**Claude Code Prompt:**
```
"Add scroll animations to sections:
- Elements fade up as they enter viewport
- Use Intersection Observer (no libraries)
- Stagger children with delays (0.1s, 0.2s, 0.3s)
- Apply to: section titles, images, cards
- Smooth cubic-bezier easing
- Only animate once (not on scroll up)"

10. Mobile Hamburger Menu
Why: Mobile-friendly navigation
How: Pure CSS/JS, no libraries
html<nav class="nav">
  <div class="nav__logo">By Tilly</div>
  
  <button class="nav__toggle" aria-label="Toggle menu">
    <span></span>
    <span></span>
    <span></span>
  </button>
  
  <div class="nav__menu">
    <a href="#packages">Packages</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#about">About</a>
    <a href="#faq">FAQ</a>
    <a href="#contact" class="btn-primary">Get in Touch</a>
  </div>
</nav>
```

**Claude Code Prompt:**
```
"Create responsive hamburger menu:
- Desktop: horizontal nav links
- Mobile (<768px): hamburger icon
- Click toggles slide-in menu from right
- Smooth animation with backdrop overlay
- Close on link click or backdrop click
- Animated hamburger to X transformation
- Menu background: #e4dcd1"

11. Instagram Feed (Manual)
Why: Show recent work without API
How: Simple grid with links
javascript// instagram-feed.json
const instagramPosts = [
  {
    image: "images/instagram/post1.jpg",
    url: "https://instagram.com/p/xyz",
    alt: "Wedding getting ready moments"
  },
  // ... 6-9 posts
];

// Renders 3x3 grid with Instagram links
function renderInstagramFeed() {
  const container = document.querySelector('.instagram-grid');
  
  instagramPosts.forEach(post => {
    const item = document.createElement('a');
    item.href = post.url;
    item.target = '_blank';
    item.innerHTML = `
      <img src="${post.image}" alt="${post.alt}">
      <div class="instagram-overlay">
        <svg><!-- Instagram icon --></svg>
      </div>
    `;
    container.appendChild(item);
  });
}
```

**Claude Code Prompt:**
```
"Create Instagram feed section:
- 3x3 grid of images (2x3 on tablet, 1 column mobile)
- Each image links to actual Instagram post
- Hover: overlay with Instagram icon appears
- Below grid: 'Follow @contentby.tilly for more' button
- Images: square aspect ratio (1:1)
- Loads from instagram-feed.json
- Section title in Gullathi: 'recent love stories'"

12. "Back to Top" Button
Why: Better UX on long page
How: Simple show/hide on scroll
javascriptconst backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

**Claude Code Prompt:**
```
"Add back to top button:
- Fixed position bottom right
- Appears after scrolling 500px
- Fade in/out transition
- Circular button with up arrow
- Color: #31150b
- Smooth scroll to top on click
- Hidden on mobile (<768px)"

📦 ADDITIONAL POLISH FEATURES
13. Loading Animation
Simple fade-in for images as they load
javascriptdocument.querySelectorAll('img').forEach(img => {
  img.style.opacity = '0';
  img.addEventListener('load', function() {
    this.style.transition = 'opacity 0.5s';
    this.style.opacity = '1';
  });
});

14. Form Validation (Enhanced)
Real-time feedback before submission
javascriptconst emailInput = document.querySelector('input[type="email"]');

emailInput.addEventListener('blur', function() {
  if (!this.value.includes('@')) {
    this.classList.add('error');
    showError('Please enter a valid email');
  } else {
    this.classList.remove('error');
  }
});

15. Image Lazy Loading
Faster initial page load
html<img src="placeholder.jpg" 
     data-src="actual-image.jpg" 
     loading="lazy" 
     alt="Wedding photo">