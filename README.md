# Indian Wedding Website

A modern, elegant Indian wedding website with premium design and smooth animations.

## Features

✨ **Premium Design**
- Royal Indian wedding theme with gold and maroon colors
- Elegant typography using Cormorant Garamond and Montserrat fonts
- Floral accents and traditional elements

🎨 **Sections Included**
- **Hero Section**: Full-screen background with couple names and live countdown timer
- **About Couple**: Bride and groom descriptions with photo
- **Wedding Events**: Haldi, Mehendi, Wedding, and Reception details
- **Photo Gallery**: Responsive grid with hover zoom effects
- **Location**: Embedded Google Maps with venue details
- **Footer**: Contact information and thank you message

🎵 **Background Music**
- Romantic instrumental background music
- Play/pause toggle button
- User-controlled (no autoplay)

✨ **Animations & Effects**
- Smooth fade-in animations
- Scroll-triggered animations
- Parallax hero section
- Hover effects on gallery images
- Floating floral elements
- Confetti easter egg (click couple names 3 times!)

📱 **Fully Responsive**
- Mobile-first design
- Tablet and desktop optimized
- Sticky navigation bar

## Setup Instructions

### 1. Customize Content

**Update Wedding Details:**
- Open `index.html`
- Replace "Rutuja & Shreedhar" with your names
- Update wedding date in the countdown (line 47 and in `script.js` line 2)
- Modify event dates, times, and descriptions

**Update Photos:**
- Replace the Unsplash image URLs with your own photos
- Hero background: Line 88 in `index.html`
- Couple photo: Line 107 in `index.html`
- Gallery images: Lines 177-212 in `index.html`

**Update Location:**
- Replace venue name and address (lines 227-229)
- Update Google Maps embed URL (line 234)
- Update "Open in Google Maps" link (line 231)

### 2. Setup Background Music

**Option 1: Use the default Bensound music** (already included)

**Option 2: Use your own music:**
1. Add your music file (MP3 format) to the project folder
2. Update the audio source in `index.html` (line 283):
   ```html
   <source src="your-music-file.mp3" type="audio/mpeg">
   ```

**Note:** Make sure you have rights to use the music file.

### 3. Customize Colors (Optional)

Edit the CSS variables in `styles.css` (lines 9-16):
```css
:root {
    --primary-gold: #D4AF37;
    --dark-gold: #B8941E;
    --maroon: #800020;
    --dark-maroon: #5C0016;
    --cream: #FFF8E7;
    --white: #FFFFFF;
    --text-dark: #2C2C2C;
    --text-light: #666666;
}
```

## Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly

### Option 3: Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

## Browser Compatibility

✅ Chrome (recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers

## Performance Tips

- Images are lazy-loaded for faster initial load
- Optimized animations for smooth performance
- Debounced scroll events
- Minimal dependencies (no heavy frameworks)

## Customization Tips

1. **Add more gallery images**: Copy a `.gallery-item` div and update the image URL
2. **Add more events**: Copy an `.event-card` div and update the details
3. **Change fonts**: Update Google Fonts link in `index.html` and font-family in CSS
4. **Add social media links**: Add icons in the footer section

## Credits

- Fonts: Google Fonts (Cormorant Garamond, Montserrat)
- Images: Unsplash (replace with your own)
- Music: Bensound (replace with licensed music)

## Support

For any issues or questions, refer to the inline comments in the code files.

## License

Free to use for personal wedding websites. Please replace all placeholder content with your own.

---

**Made with ❤️ for your special day!**
