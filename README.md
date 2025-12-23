# Nabin Ghimire - Portfolio Website

A clean, professional portfolio website for Nabin Ghimire, Senior Product Designer specializing in enterprise healthcare solutions.

## Overview

This portfolio showcases 9+ years of design experience across healthcare platforms, SaaS products, and enterprise applications. Built with a focus on accessibility, clean editorial design, and thoughtful user experience.

## Site Structure

```
portfolio_nabin/
│
├── index.html              # Homepage with hero and featured work
├── work.html               # Case studies landing page
├── about.html              # Professional bio, timeline, and credentials
├── contact.html            # Contact form and information
│
├── case-study-design-system.html    # Viveka Design System
├── case-study-eligibility.html      # Employer Eligibility Platform
├── case-study-find-care.html        # Find Care Provider Search
├── case-study-docsink.html          # DOCS.ink Digital Waiver Platform
│
├── css/
│   └── styles.css          # Complete design system and styling
│
├── js/
│   └── main.js             # Smooth interactions and animations
│
├── images/                 # Placeholder for project images
│
└── README.md              # This file
```

## Design System

### Color Palette
- **Primary Text:** `#1A1A2E` (Deep Navy)
- **Secondary Text:** `#4A5568` (Slate Gray)
- **Accent:** `#0077B6` (Healthcare Blue)
- **Background:** `#FAFAFA` (Off-white)
- **Surface:** `#FFFFFF` (White)
- **Success:** `#38A169` (Green)
- **Border:** `#E2E8F0` (Light Gray)

### Typography
- **Headlines:** DM Sans (600-700 weight)
- **Body:** Inter (400-500 weight)
- **Font sizes:** Responsive with clamp() for fluid typography

### Spacing
- **Base unit:** 8px
- **Section padding:** 80px-120px vertical
- **Card padding:** 32px
- **Element margins:** 16px-24px

### Layout
- **Max content width:** 1200px
- **Case study content:** 800px (for optimal readability)
- **Responsive breakpoints:** 768px, 480px

## Features

### Accessibility
- ✅ WCAG 2.1 AA color contrast ratios
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Focus states on all interactive elements
- ✅ Skip-to-content link
- ✅ Proper heading hierarchy
- ✅ Alt text placeholders for images
- ✅ Respects prefers-reduced-motion

### Responsive Design
- ✅ Mobile-first CSS approach
- ✅ Fluid typography with clamp()
- ✅ Flexible grid layouts
- ✅ Touch-friendly interactive elements
- ✅ Optimized for all screen sizes

### Performance
- ✅ Minimal dependencies (just Google Fonts)
- ✅ Optimized CSS with custom properties
- ✅ Lightweight JavaScript
- ✅ No framework overhead

### User Experience
- ✅ Smooth scroll behavior
- ✅ Subtle fade-in animations
- ✅ Hover states with transitions
- ✅ Clear visual hierarchy
- ✅ Consistent navigation
- ✅ Case study navigation (previous/next)

## Getting Started

### Local Development

1. **Clone or download the repository**
   ```bash
   cd portfolio_nabin
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (with http-server)
   npx http-server
   ```

3. **View the site**
   - Navigate to `http://localhost:8000` (or the port your server uses)

### Adding Images

Replace the placeholder image divs with actual images:

1. Add your images to the `images/` folder
2. Replace placeholder divs like `[Design System Components Preview]` with:
   ```html
   <img src="images/your-image.jpg" alt="Descriptive alt text">
   ```

### Customization

#### Update Content
- Edit HTML files directly to update copy, links, or structure
- All case study content is in the respective `case-study-*.html` files
- Bio and experience are in `about.html`

#### Modify Design
- Colors, spacing, and typography are defined as CSS custom properties in `css/styles.css`
- Change values in the `:root` selector to update the entire site
- All styles are documented with comments

#### Form Integration
The contact form in `contact.html` currently has placeholder JavaScript. To make it functional:

1. **Using a service like Formspree:**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using Netlify Forms:**
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

3. **Using a custom backend:**
   - Update the form action to your API endpoint
   - Modify `js/main.js` to handle the submission

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select main branch
4. Your site will be at `https://yourusername.github.io/portfolio_nabin/`

### Netlify
1. Drag and drop the folder to Netlify
2. Or connect your Git repository
3. No build configuration needed

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android)

## File Checklist

Before publishing:
- [ ] Replace all image placeholders with actual project images
- [ ] Update contact form with real submission handling
- [ ] Add resume PDF and link it from About page
- [ ] Test all links (internal and external)
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Check accessibility (https://wave.webaim.org/)
- [ ] Test on mobile devices
- [ ] Add favicon (recommended: 32×32 and 180×180)
- [ ] Add Open Graph meta tags for social sharing
- [ ] Configure analytics (if desired)

## Recommended Next Steps

### Images Needed
1. **Homepage & Work Page:**
   - Design System component library preview
   - Employer portal dashboard
   - Provider search interface
   - Waiver builder interface

2. **Case Study 1 (Design System):**
   - Component library overview
   - Button system with states
   - Form components
   - Color system with accessibility
   - Documentation site
   - Before/after comparison

3. **Case Study 2 (Eligibility Platform):**
   - User research findings
   - Task flow diagram
   - Multi-step form
   - Validation examples
   - Review screen
   - Bulk upload interface

4. **Case Study 3 (Find Care):**
   - User journey map
   - Search interface
   - Results with filters
   - Provider profile
   - Cost estimation
   - Booking flow
   - Mobile screens

5. **Case Study 4 (DOCS.ink):**
   - Competitive analysis
   - Waiver builder
   - Block customization
   - Template library
   - Admin dashboard
   - Signing experience
   - Design system docs

6. **About Page:**
   - Professional photo

### Optional Enhancements
- Add Google Analytics or privacy-focused alternative
- Implement dark mode toggle
- Add case study filtering on Work page
- Create downloadable PDF resume
- Add testimonials section
- Include blog/writing samples

## Credits

**Design & Development:** Nabin Ghimire
**Fonts:** DM Sans & Inter (Google Fonts)
**Icons:** (Add if you decide to use an icon library)

## License

All content and design © 2025 Nabin Ghimire. All rights reserved.

## Contact

For questions or collaboration:
- **Email:** ghinabin@gmail.com
- **LinkedIn:** [linkedin.com/in/nabin-ghimire](https://linkedin.com/in/nabin-ghimire)

---

Built with clean HTML, CSS, and vanilla JavaScript. No frameworks, just solid fundamentals.
