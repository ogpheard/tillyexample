# **Content by Tilly - Refined Design System**
## *Using Your Actual Brand Colors & Fonts*

---

## **🎨 YOUR COLOR PALETTE**

### **Core Colors**

```css
/* Primary Palette */
--text-primary:      #31150b   /* Deep chocolate brown - main text */
--text-secondary:    #f1ede7   /* Soft cream - text on dark backgrounds */
--background:        #e4dcd1   /* Warm beige - main background */

/* Extended Palette (derived for functionality) */
--text-muted:        #664833   /* Lighter brown for secondary text */
--background-dark:   #31150b   /* Dark sections use text color */
--background-light:  #f9f7f4   /* Lighter variant for contrast */
--accent:            #8b5a3c   /* Mid-tone brown for highlights */
```

### **Color Usage Map**

```
LIGHT SECTIONS (Main Body):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background:     #e4dcd1
Primary Text:   #31150b
Secondary Text: #664833 (60% opacity of #31150b)
Buttons:        #31150b background, #f1ede7 text
Links:          #31150b (underline on hover)

DARK SECTIONS (Impact Areas):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background:     #31150b
Primary Text:   #f1ede7
Secondary Text: rgba(241, 237, 231, 0.7)
Buttons:        #f1ede7 background, #31150b text
                OR
                Border: 2px solid #f1ede7, text #f1ede7

CONTRAST SECTIONS (Clean Palate):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background:     #f9f7f4 (almost white)
Primary Text:   #31150b
Secondary Text: #664833
Subtle borders: rgba(49, 21, 11, 0.1)
```

---

## **✍️ YOUR TYPOGRAPHY SYSTEM**

### **Font Stack**

```css
/* Signature/Handwritten - Emotional Headlines */
--font-signature: 'Gullathi', cursive;
/* Example: Hero headlines, section intros */

/* Serif - Authority & Elegance */
--font-serif: 'Abril Text', serif;
/* Example: Subheadings, quotes, emphasis */

/* Sans-Serif - Clarity & Body */
--font-sans: 'Glorify Sans', -apple-system, BlinkMacSystemFont, sans-serif;
/* Example: Body copy, navigation, buttons */
```

### **Type Scale & Usage**

```css
/* HERO & MAJOR HEADLINES */
.hero-title {
  font-family: 'Gullathi', cursive;
  font-size: 64px;
  line-height: 1.2;
  color: #f1ede7; /* On dark images */
  letter-spacing: 0.01em;
  font-weight: 400;
}

/* SECTION HEADLINES */
.section-title {
  font-family: 'Gullathi', cursive;
  font-size: 52px;
  line-height: 1.3;
  color: #31150b;
  letter-spacing: 0.01em;
  margin-bottom: 24px;
}

/* SUBHEADINGS */
.subheading {
  font-family: 'Abril Text', serif;
  font-size: 32px;
  line-height: 1.4;
  color: #31150b;
  font-weight: 400;
  margin-bottom: 16px;
}

/* EMPHASIS TEXT */
.emphasis {
  font-family: 'Abril Text', serif;
  font-size: 22px;
  line-height: 1.6;
  color: #31150b;
  font-weight: 400;
}

/* BODY COPY */
.body-text {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 18px;
  line-height: 1.8;
  color: #31150b;
  font-weight: 400;
  max-width: 650px;
}

/* SECONDARY BODY */
.body-secondary {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: #664833;
  font-weight: 400;
}

/* SMALL TEXT / CAPTIONS */
.caption {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #664833;
  letter-spacing: 0.02em;
}

/* BUTTONS & UI */
.button-text {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
}
```

### **Font Pairing Rules**

```
✓ Gullathi (script) + Glorify Sans (body)
✓ Abril Text (subhead) + Glorify Sans (body)
✓ Gullathi (headline) + Abril Text (sub) + Glorify Sans (body)

✗ Gullathi + Abril Text only (too formal)
✗ Multiple scripts
✗ Glorify Sans for emotional headlines
```

---

## **🎨 COMPLETE COLOR COMBINATIONS**

### **Section Color Schemes**

**SCHEME 1: Warm Welcome (Main)**
```
Background:        #e4dcd1
Headline:          #31150b (Gullathi, 52px)
Body:              #31150b (Glorify Sans, 18px)
Accent elements:   #664833
Button:            #31150b bg, #f1ede7 text
```

**SCHEME 2: Dark Drama (Impact)**
```
Background:        #31150b
Headline:          #f1ede7 (Gullathi, 52px)
Body:              #f1ede7 (Glorify Sans, 18px)
Secondary text:    rgba(241,237,231,0.7)
Button:            #f1ede7 bg, #31150b text
                   OR outlined: 2px solid #f1ede7
```

**SCHEME 3: Clean Canvas (Portfolio)**
```
Background:        #f9f7f4
Headline:          #31150b (Abril Text, 38px)
Body:              #31150b (Glorify Sans, 17px)
Borders:           rgba(49,21,11,0.08)
Button:            #31150b bg, #f1ede7 text
```

**SCHEME 4: Hero Over Image**
```
Background:        Image with dark gradient overlay
                   (gradient: rgba(49,21,11,0.4) to rgba(49,21,11,0.7))
Headline:          #f1ede7 (Gullathi, 64px)
Subtext:           #f1ede7 (Glorify Sans, 20px)
Button:            Outlined: 2px solid #f1ede7, text #f1ede7
                   Hover: fills with #f1ede7, text becomes #31150b
```

---

## **🔘 BUTTON SYSTEM**

### **Primary Button (Call to Action)**

```css
.btn-primary {
  /* Appearance */
  background: #31150b;
  color: #f1ede7;
  padding: 18px 44px;
  border-radius: 32px;
  border: none;
  
  /* Typography */
  font-family: 'Glorify Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  
  /* Effects */
  box-shadow: 0 4px 16px rgba(49, 21, 11, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  cursor: pointer;
}

.btn-primary:hover {
  background: #1f0d06; /* Darker brown */
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(49, 21, 11, 0.25);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(49, 21, 11, 0.2);
}
```

### **Secondary Button (Less Emphasis)**

```css
.btn-secondary {
  /* Appearance */
  background: transparent;
  color: #31150b;
  padding: 18px 44px;
  border-radius: 32px;
  border: 2px solid #31150b;
  
  /* Typography */
  font-family: 'Glorify Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  
  /* Effects */
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  cursor: pointer;
}

.btn-secondary:hover {
  background: #31150b;
  color: #f1ede7;
  transform: translateY(-2px);
}
```

### **Light Button (On Dark Backgrounds)**

```css
.btn-light {
  /* Appearance */
  background: transparent;
  color: #f1ede7;
  padding: 18px 44px;
  border-radius: 32px;
  border: 2px solid #f1ede7;
  
  /* Typography */
  font-family: 'Glorify Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  
  /* Effects */
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.btn-light:hover {
  background: #f1ede7;
  color: #31150b;
  transform: translateY(-2px);
}
```

### **Text Link (Minimal)**

```css
.text-link {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 16px;
  color: #31150b;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.text-link:hover {
  border-bottom: 1px solid #31150b;
}
```

---

## **📦 CARD COMPONENTS**

### **Package Card**

```css
.package-card {
  /* Layout */
  background: #f9f7f4;
  padding: 48px 40px;
  border-radius: 0; /* Keep it editorial/clean */
  
  /* Border */
  border: 1px solid rgba(49, 21, 11, 0.08);
  
  /* Shadow */
  box-shadow: 0 4px 20px rgba(49, 21, 11, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.package-card:hover {
  box-shadow: 0 12px 40px rgba(49, 21, 11, 0.12);
  transform: translateY(-4px);
  border-color: rgba(49, 21, 11, 0.12);
}

.package-card__title {
  font-family: 'Abril Text', serif;
  font-size: 32px;
  color: #31150b;
  margin-bottom: 12px;
}

.package-card__price {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 18px;
  color: #664833;
  margin-bottom: 32px;
}

.package-card__feature {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #31150b;
  margin-bottom: 12px;
}
```

### **Testimonial Card**

```css
.testimonial {
  /* Layout */
  background: #f9f7f4;
  padding: 60px 48px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  
  /* Border */
  border-top: 2px solid #e4dcd1;
  border-bottom: 2px solid #e4dcd1;
}

.testimonial__quote {
  font-family: 'Abril Text', serif;
  font-size: 24px;
  font-style: italic;
  line-height: 1.6;
  color: #31150b;
  margin-bottom: 32px;
  
  /* Decorative quotes */
  &:before { content: '"'; }
  &:after { content: '"'; }
}

.testimonial__author {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 16px;
  color: #31150b;
  font-weight: 500;
}

.testimonial__details {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 14px;
  color: #664833;
  margin-top: 8px;
}
```

---

## **🎯 SECTION TREATMENTS**

### **Hero Section**

```css
.hero {
  /* Layout */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  /* Background */
  background: #31150b; /* Fallback */
  
  /* Overlay for text readability */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(49, 21, 11, 0.3) 0%,
      rgba(49, 21, 11, 0.6) 100%
    );
  }
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #f1ede7;
}

.hero__title {
  font-family: 'Gullathi', cursive;
  font-size: 68px;
  line-height: 1.2;
  margin-bottom: 24px;
  text-shadow: 0 2px 8px rgba(49, 21, 11, 0.3);
}

.hero__subtitle {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.95;
}
```

### **Standard Section (Light)**

```css
.section {
  padding: 120px 40px;
  background: #e4dcd1;
}

.section__title {
  font-family: 'Gullathi', cursive;
  font-size: 52px;
  color: #31150b;
  text-align: center;
  margin-bottom: 24px;
}

.section__subtitle {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 18px;
  color: #664833;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 64px;
  line-height: 1.8;
}
```

### **Dark Section (Impact)**

```css
.section--dark {
  padding: 120px 40px;
  background: #31150b;
}

.section--dark .section__title {
  color: #f1ede7;
}

.section--dark .section__subtitle {
  color: rgba(241, 237, 231, 0.8);
}

.section--dark .section__body {
  color: #f1ede7;
}
```

### **Clean Section (Portfolio/Gallery)**

```css
.section--clean {
  padding: 120px 40px;
  background: #f9f7f4;
}

.section--clean .section__title {
  font-family: 'Abril Text', serif; /* Use serif for variety */
  font-size: 42px;
  color: #31150b;
}
```

---

## **🖼️ IMAGE TREATMENTS**

### **Photo Overlays**

```css
/* For text over images */
.image-overlay {
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    /* Dark gradient */
    background: linear-gradient(
      to bottom,
      rgba(49, 21, 11, 0) 0%,
      rgba(49, 21, 11, 0.4) 50%,
      rgba(49, 21, 11, 0.7) 100%
    );
  }
}

/* Vignette effect */
.image-vignette {
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    background: radial-gradient(
      ellipse at center,
      rgba(49, 21, 11, 0) 0%,
      rgba(49, 21, 11, 0.2) 100%
    );
  }
}
```

### **Image Borders & Frames**

```css
/* Subtle border */
.image-framed {
  border: 1px solid rgba(49, 21, 11, 0.08);
  box-shadow: 0 8px 30px rgba(49, 21, 11, 0.06);
}

/* Polaroid-style */
.image-polaroid {
  background: #f9f7f4;
  padding: 16px 16px 48px 16px;
  box-shadow: 0 4px 20px rgba(49, 21, 11, 0.1);
}
```

---

## **🎭 FORM STYLING**

```css
.form-field {
  margin-bottom: 24px;
}

.form-label {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #31150b;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
  display: block;
}

.form-input,
.form-textarea {
  /* Appearance */
  width: 100%;
  padding: 16px 20px;
  background: #f9f7f4;
  border: 1px solid rgba(49, 21, 11, 0.12);
  border-radius: 0; /* Keep it clean */
  
  /* Typography */
  font-family: 'Glorify Sans', sans-serif;
  font-size: 16px;
  color: #31150b;
  
  /* Effects */
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #31150b;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(49, 21, 11, 0.05);
}

.form-textarea {
  min-height: 140px;
  resize: vertical;
}

::placeholder {
  color: #664833;
  opacity: 0.6;
}
```

---

## **🎨 ACCENT TREATMENTS**

### **Decorative Elements**

```css
/* Subtle divider lines */
.divider {
  width: 60px;
  height: 1px;
  background: rgba(49, 21, 11, 0.2);
  margin: 40px auto;
}

.divider--thick {
  height: 2px;
  background: #31150b;
}

/* Pull quote styling */
.pull-quote {
  font-family: 'Abril Text', serif;
  font-size: 28px;
  font-style: italic;
  color: #31150b;
  padding: 40px 0;
  border-top: 2px solid rgba(49, 21, 11, 0.15);
  border-bottom: 2px solid rgba(49, 21, 11, 0.15);
  text-align: center;
  max-width: 700px;
  margin: 60px auto;
}

/* Badge/Label */
.badge {
  display: inline-block;
  padding: 8px 20px;
  background: #31150b;
  color: #f1ede7;
  font-family: 'Glorify Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 20px;
}

.badge--outline {
  background: transparent;
  border: 1px solid #31150b;
  color: #31150b;
}
```

---

## **📱 NAVIGATION**

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* Starts transparent */
  background: transparent;
  transition: all 0.3s ease;
}

/* On scroll */
.nav--scrolled {
  background: rgba(228, 220, 209, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(49, 21, 11, 0.05);
}

.nav__logo {
  font-family: 'Gullathi', cursive;
  font-size: 28px;
  color: #31150b;
  text-decoration: none;
}

.nav__links {
  display: flex;
  gap: 40px;
  align-items: center;
}

.nav__link {
  font-family: 'Glorify Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #31150b;
  text-decoration: none;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  
  /* Underline effect */
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 1px;
    background: #31150b;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover:after {
    transform: scaleX(1);
  }
}

.nav__cta {
  /* Use btn-primary styles */
  padding: 12px 28px;
  font-size: 13px;
}
```

---

## **🎬 ANIMATION SPECIFICATIONS**

### **Scroll Reveal Animations**

```css
/* Fade up */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  animation: fadeUp 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
}

/* Stagger children */
.stagger-children > * {
  opacity: 0;
  animation: fadeUp 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
}

.stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
.stagger-children > *:nth-child(4) { animation-delay: 0.4s; }
```

### **Hover Effects**

```css
/* Gentle lift */
.hover-lift {
  transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
}

/* Subtle zoom (for images) */
.hover-zoom {
  overflow: hidden;
}

.hover-zoom img {
  transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.hover-zoom:hover img {
  transform: scale(1.05);
}
```

---

## **💫 FINAL POLISH DETAILS**

### **Selection Color**

```css
::selection {
  background: #31150b;
  color: #f1ede7;
}

::-moz-selection {
  background: #31150b;
  color: #f1ede7;
}
```

### **Scrollbar Styling**

```css
/* Webkit browsers (Chrome, Safari) */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #e4dcd1;
}

::-webkit-scrollbar-thumb {
  background: #664833;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #31150b;
}
```

### **Focus States (Accessibility)**

```css
:focus-visible {
  outline: 2px solid #31150b;
  outline-offset: 4px;
}
```

---

## **✅ DESIGN CHECKLIST**

**Before launching, verify:**

- [ ] All text is #31150b on light backgrounds
- [ ] All text is #f1ede7 on dark backgrounds  
- [ ] Background is #e4dcd1 for main sections
- [ ] Gullathi is used only for emotional headlines
- [ ] Abril Text is used for subheadings and quotes
- [ ] Glorify Sans is used for all body copy
- [ ] Buttons use uppercase Glorify Sans at 14px
- [ ] All buttons have 32px border radius
- [ ] Hover states lift 2-4px
- [ ] Color contrast ratio meets WCAG AA (4.5:1 minimum)
- [ ] Line height is 1.8+ for body text
- [ ] Section padding is 120px on desktop

---

**This is your complete design system. Every element on your website should reference these exact values. Consistency is elegance.**