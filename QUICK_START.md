# Quick Start Guide

Get your portfolio up and running in minutes!

## 🚀 View Your Portfolio Now

### Option 1: Direct Browser Opening
1. Navigate to the `portfolio_nabin` folder
2. Double-click `index.html`
3. Your portfolio opens in your default browser

### Option 2: Local Server (Recommended)
```bash
# Navigate to the folder
cd portfolio_nabin

# Start a local server (choose one):

# Python 3
python3 -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

---

## ✅ What You Have

### Complete Website
- ✅ **Homepage** - Hero, stats, featured work
- ✅ **Work** - Case studies landing
- ✅ **About** - Bio, timeline, credentials
- ✅ **Contact** - Form and links
- ✅ **4 Case Studies** - Fully written and structured

### Design System
- ✅ Professional color palette
- ✅ Typography (DM Sans + Inter)
- ✅ Responsive layouts
- ✅ Accessibility built-in
- ✅ Smooth interactions

### Production Ready
- ✅ Semantic HTML
- ✅ Clean CSS
- ✅ Optimized JavaScript
- ✅ Mobile responsive
- ✅ WCAG compliant

---

## 🎯 Next Steps (Priority Order)

### 1. Add Images (Most Important)
Your portfolio looks great, but needs project images to really shine.

**Start here:**
```
images/
├── design-system-hero.jpg       # Design System preview
├── eligibility-hero.jpg         # Employer portal
├── find-care-hero.jpg          # Provider search
└── docsink-hero.jpg            # Waiver builder
```

See `IMAGE_GUIDELINES.md` for complete specifications.

**Quick tip:** Even placeholder images with your brand colors look better than text. Use tools like:
- Figma mockups
- Screenshots with annotations
- Canva templates

### 2. Connect Contact Form
The form currently shows an alert. Make it functional:

**Easy options:**
- **Formspree** (5 mins): https://formspree.io
- **Netlify Forms** (automatic if deploying to Netlify)
- **EmailJS** (client-side email): https://www.emailjs.com

**Update `contact.html` line 68:**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### 3. Add Your Resume
1. Export your resume as PDF: `resume-nabin-ghimire.pdf`
2. Place in project root or `documents/` folder
3. Update link in `about.html` (line 136):
   ```html
   <a href="resume-nabin-ghimire.pdf" download>
   ```

### 4. Update LinkedIn URL
Replace placeholder if your URL is different:
- Check all footer links
- Update in `about.html`
- Update in `contact.html`

---

## 🌐 Deploy Your Portfolio

### Netlify (Easiest - 5 minutes)
1. Go to https://app.netlify.com/drop
2. Drag and drop your `portfolio_nabin` folder
3. Done! You get a URL like `yoursite.netlify.app`
4. Optional: Connect a custom domain

### GitHub Pages (Free hosting)
```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial portfolio"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repo settings
# Your site: https://yourusername.github.io/portfolio
```

### Vercel (Fast deployment)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts - done!
```

---

## 📝 Customization Checklist

### Essential Updates
- [ ] Add project images (see IMAGE_GUIDELINES.md)
- [ ] Connect contact form
- [ ] Add resume PDF
- [ ] Verify LinkedIn URL
- [ ] Add professional photo to About page

### Optional Enhancements
- [ ] Add favicon (32×32 and 180×180)
- [ ] Add Open Graph tags for social sharing
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Add testimonials section
- [ ] Create dark mode toggle
- [ ] Add case study filtering

---

## 🎨 Quick Customizations

### Change Colors
Edit `css/styles.css` lines 27-34:
```css
:root {
  --color-accent: #0077B6;  /* Change this! */
  /* ... other colors ... */
}
```

### Update Copy
All text is in the HTML files. Search and replace:
- Your name
- Email address
- Location
- Experience details

### Modify Spacing
Adjust the spacing scale in `css/styles.css` lines 42-50.

---

## 🐛 Troubleshooting

### Images Not Showing
- Check file path: `images/filename.jpg`
- File names are case-sensitive
- Use forward slashes: `images/file.jpg` not `images\file.jpg`

### Fonts Look Different
- Make sure you're viewing via http:// (local server)
- Google Fonts load over network, won't work with file://

### Contact Form Not Working
- This is expected! See "Connect Contact Form" above
- The placeholder JavaScript just shows an alert

### Styles Not Updating
- Hard refresh: `Cmd/Ctrl + Shift + R`
- Clear browser cache
- Check CSS file path in HTML

---

## 📊 Testing Before Launch

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

### Functionality Testing
- [ ] All navigation links work
- [ ] Case study navigation (previous/next)
- [ ] Contact form submits
- [ ] Resume downloads
- [ ] External links (LinkedIn, email) work
- [ ] Mobile menu works (if added)

### Accessibility Testing
- [ ] Tab through entire site with keyboard
- [ ] Test with screen reader (VoiceOver, NVDA)
- [ ] Zoom to 200% - still readable?
- [ ] Run WAVE accessibility checker: https://wave.webaim.org/

### Performance Testing
- [ ] Images optimized (under 500KB each)
- [ ] Page loads in under 3 seconds
- [ ] Lighthouse score above 90

---

## 🔗 Useful Resources

### Image Optimization
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app
- ImageOptim: https://imageoptim.com (Mac)

### Testing Tools
- HTML Validator: https://validator.w3.org
- Accessibility Checker: https://wave.webaim.org
- Lighthouse: Built into Chrome DevTools
- Mobile Testing: BrowserStack, LambdaTest

### Form Services
- Formspree: https://formspree.io
- EmailJS: https://www.emailjs.com
- Netlify Forms: https://www.netlify.com/products/forms

### Hosting
- Netlify: https://www.netlify.com
- Vercel: https://vercel.com
- GitHub Pages: https://pages.github.com

---

## 💡 Pro Tips

1. **Start with homepage images** - They're the first thing people see
2. **Test on real mobile devices** - Not just browser resize
3. **Get feedback early** - Share with trusted colleagues before going live
4. **Keep it updated** - Add new projects, refresh screenshots
5. **Monitor analytics** - See what people engage with most

---

## 📞 Need Help?

- Review `README.md` for complete documentation
- Check `IMAGE_GUIDELINES.md` for image specifications
- Review the CSS file - everything is commented
- All code is vanilla HTML/CSS/JS - easy to modify

---

**You're ready to launch! 🎉**

The hardest part is adding your project images. Everything else is polish.

Good luck with your portfolio!
