# Blue Sail Solutions - Company Website

A modern, responsive website for Blue Sail Solutions, showcasing operations optimization and data analytics services for pharmaceutical, healthcare, and finance industries. Founded and led by Dr. Amar Ramudhin.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Service Showcase**: Detailed information about services offered
- **Project Portfolio**: Previous projects and success stories
- **About Section**: Professional background and expertise
- **Contact Form**: Easy inquiry form for potential clients
- **Low Maintenance**: Static HTML/CSS/JS - no backend required

## File Structure

```
Website Professor/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Setup Instructions

### Option 1: Local Development (Free)

1. Simply open `index.html` in a web browser
2. No installation or setup required!

### Option 2: Deploy to GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 3: Deploy to Netlify (Free)

1. Go to [Netlify](https://www.netlify.com)
2. Drag and drop the project folder
3. Your site will be live instantly with a free `.netlify.app` domain

### Option 4: Deploy to Vercel (Free)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Contact Form Setup

The contact form is currently configured to use Formspree (free tier available). To enable email functionality:

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form ID
4. In `index.html`, replace `YOUR_FORM_ID` in the form action URL with your actual Formspree form ID:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Alternative: Use EmailJS (Free)

1. Sign up at [EmailJS](https://www.emailjs.com)
2. Set up an email service
3. Replace the form submission code in `script.js` with EmailJS integration

## Customization

### Update Content

- **Services**: Edit the services section in `index.html`
- **Projects**: Update project cards with real project details
- **About**: Modify the about section with actual professor information
- **Contact**: Update contact information in the contact section

### Change Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --primary-dark: #1e40af;     /* Darker shade */
    --secondary-color: #64748b;  /* Secondary color */
    /* ... */
}
```

### Add Profile Photo

Replace the profile placeholder in the About section:
1. Add an image file (e.g., `profile.jpg`) to the project folder
2. In `index.html`, replace:
   ```html
   <div class="profile-placeholder">
       <span>Profile Photo</span>
   </div>
   ```
   With:
   ```html
   <img src="profile.jpg" alt="Dr. Amar Ramudhin" class="profile-image">
   ```
3. Add CSS for `.profile-image` in `styles.css`:
   ```css
   .profile-image {
       width: 250px;
       height: 250px;
       border-radius: 10px;
       object-fit: cover;
       box-shadow: var(--shadow-lg);
   }
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Maintenance

This is a static website with minimal maintenance requirements:

- **No database**: All content is in HTML
- **No server**: Can be hosted on any static hosting service
- **No dependencies**: Pure HTML, CSS, and JavaScript
- **Easy updates**: Simply edit HTML/CSS files and re-upload

## Cost Breakdown

- **Hosting**: Free (GitHub Pages, Netlify, or Vercel)
- **Domain**: Optional (~$10-15/year if desired)
- **Email Form**: Free (Formspree free tier: 50 submissions/month)
- **Total**: $0-15/year

## Future Enhancements (Optional)

- Add a blog section
- Integrate Google Analytics
- Add more project case studies
- Include client testimonials
- Add a downloadable CV/resume section
- Implement dark mode toggle

## License

This website is created for Blue Sail Solutions. Customize as needed for your use case.

## Support

For questions or issues, please refer to the documentation or contact the developer.

