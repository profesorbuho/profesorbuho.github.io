# AGENTS.md

This document provides guidelines for agentic coding agents working in the Profesor Búho educational website repository.

## Project Overview

This is a static educational website for "Profesor Búho" - an educational service offering personalized tutoring in mathematics, physics, chemistry, programming, and other subjects. The site is built with vanilla HTML, CSS, and JavaScript, optimized for GitHub Pages deployment.

### Key Technologies
- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Mobile-first responsive design using CSS custom properties and Flexbox
- **Vanilla JavaScript**: ES6+ features for mobile menu functionality
- **WebP images**: Optimized image format for better performance
- **Font Awesome**: Icon library for UI elements

## Development Workflow

### No Build Process
This is a **static site** with no build tools, package managers, or compilation steps. All changes are made directly to source files.

### Testing
- No automated testing framework is configured
- Manual testing required:
  - Test responsiveness at mobile (320px+), tablet (768px+), and desktop (1024px+)
  - Verify mobile menu functionality
  - Check all external links and social media integration
  - Validate HTML structure and semantic markup
  - Test image loading and alt text accessibility

### Deployment
- Site is deployed via GitHub Pages
- The \`main\` branch is automatically deployed to \`https://profesorbuho.github.io/\`
- No build commands required - files are served directly

## Code Style Guidelines

### HTML Structure
- Use semantic HTML5 elements (\`<header>\`, \`<main>\`, \`<section>\`, \`<article>\`, \`<nav>\`, \`<footer>\`)
- Follow logical document outline with proper heading hierarchy (h1 → h2 → h3)
- Include proper meta tags for SEO and social sharing
- Use \`loading="lazy"\` for all images below the fold
- Validate all links and ensure proper accessibility attributes

### CSS Architecture
- **Mobile-first approach**: Base styles target mobile, then enhance with media queries
- **CSS Custom Properties**: Define colors, fonts, and spacing in \`:root\` 
- **Responsive breakpoints**: 768px (tablet), 1024px (desktop), 1200px (large desktop)
- **BEM-like naming**: Use kebab-case for class names (\`.materia-item\`, \`.curso-card\`)
- **Flexbox layout**: Primary layout method for responsive design
- **Component organization**: Group related styles with clear section comments

### Color Scheme (CSS Custom Properties)
\`\`\`css
--color1: #003366;  /* Headers and navigation */
--color2: #66CC99;  /* Secondary backgrounds */
--color3: #F7971E;  /* Call-to-action buttons */
--color4: #FFD200;  /* Highlights */
--color5: #EEEEEE;  /* Light backgrounds */
--color6: #CCCCCC;  /* Medium backgrounds */
--color7: #222222;  /* Text on light backgrounds */
\`\`\`

### Typography
- **Titles**: "Noto Sans" font family
- **Body text**: "Raleway" font family
- Load fonts from Google Fonts with proper preconnect
- Use relative units (rem) for scalable typography

### JavaScript Guidelines
- **ES6+ syntax**: Use modern JavaScript features (arrow functions, const/let, template literals)
- **DOM manipulation**: Use \`querySelector\` and \`querySelectorAll\`
- **Event handling**: Add event listeners for user interactions
- **No dependencies**: Keep JavaScript vanilla and dependency-free
- **Performance**: Use event delegation when appropriate, avoid excessive DOM queries

### File Organization
\`\`\`
/
├── index.html          # Main page
├── css/
│   ├── normalize.css   # CSS reset
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   ├── images/         # Optimized WebP images
│   └── favicons/       # Various favicon sizes
└── CNAME               # Custom domain configuration
\`\`\`

### Image Optimization
- Use WebP format for all images (smaller file sizes, better quality)
- Include proper alt text for accessibility
- Use responsive images with \`loading="lazy"\`
- Organize images in logical folders: \`materias/\`, \`cursos/\`, \`hero/\`, \`logo/\`

### Accessibility Best Practices
- Semantic HTML structure for screen readers
- Proper heading hierarchy (single h1 per page)
- Descriptive alt text for all images
- Color contrast compliance (WCAG AA standards)
- Keyboard navigation support
- Focus states for interactive elements

### SEO Considerations
- Comprehensive meta tags (title, description, keywords)
- Open Graph protocol for social sharing
- Structured data where appropriate
- Clean, semantic HTML structure
- Optimized page load performance

## Common Tasks

### Adding New Subject Matter
1. Add new subject image to \`assets/images/materias/\`
2. Create new \`.materia-item\` in HTML 
3. Add corresponding CSS class for background image
4. Ensure responsive behavior across all breakpoints

### Adding New Course
1. Add course image to \`assets/images/cursos/\`
2. Create new \`.curso-card\` in HTML
3. Add CSS class for background image
4. Update YouTube playlist link

### Content Updates
- Update meta descriptions and keywords for SEO
- Maintain consistent Spanish language throughout
- Test all external links regularly
- Update copyright year in footer annually

### Performance Optimization
- Continue using WebP images
- Leverage browser caching with proper cache headers
- Minimize CSS and JavaScript where possible
- Use efficient selectors and avoid excessive nesting

## Git Workflow

### Branch Strategy
- \`main\`: Production branch (auto-deployed to GitHub Pages)
- \`dev\`: Development branch for testing changes
- Feature branches: Use descriptive names for new features

### Commit Convention
- Use clear, descriptive commit messages in Spanish or English
- Focus on "what" and "why" rather than "how"
- Example: "Add new mathematics subject with responsive design"

### Deployment Process
1. Merge changes to \`main\` branch
2. GitHub Pages automatically rebuilds and deploys
3. Verify deployment at \`https://profesorbuho.github.io/\`
4. Test functionality across devices

## Important Notes

- **No build tools**: Direct file editing only
- **GitHub Pages hosting**: Static site deployment
- **Spanish language**: Primary content is in Spanish
- **Mobile priority**: Most users access via mobile devices
- **Performance critical**: Optimize for fast loading in Ecuador
- **WhatsApp integration**: Primary contact method via WhatsApp links
- **Social media presence**: Maintain consistent branding across platforms
