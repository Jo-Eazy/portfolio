# Portfolio Setup & Customization Guide

This guide will walk you through personalizing your portfolio with your own content and images.

## 📸 Step 1: Add Your Images

### Create the Images Folder

1. Navigate to your project folder
2. Create a new folder at: `public/images/`
3. Add your images with descriptive names

### Image Recommendations

| Image | Size | Format | Purpose |
|-------|------|--------|---------|
| profile.jpg | 400x400px | JPG/PNG | Your headshot for About section |
| project-1.jpg | 800x600px | JPG/PNG | First project screenshot |
| project-2.jpg | 800x600px | JPG/PNG | Second project screenshot |
| project-3.jpg | 800x600px | JPG/PNG | Third project screenshot |
| project-4.jpg | 800x600px | JPG/PNG | Fourth project screenshot |

### Optimize Your Images

Before uploading, optimize for web:
- **File Size**: Keep under 500KB per image
- **Dimensions**: Use the recommended sizes above
- **Format**: JPG for photos, PNG for graphics with transparency
- **Tools**: [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app)

## 🎯 Step 2: Customize the Hero Section

**File:** `src/components/HeroSection.jsx`

### Change the Main Headline

```javascript
// FIND THIS LINE (Line 7):
const headlineChars = "FULL STACK DEVELOPER".split('');

// CHANGE TO YOUR HEADLINE (examples):
const headlineChars = "REACT DEVELOPER".split('');
const headlineChars = "WEB DEVELOPER".split('');
const headlineChars = "SOFTWARE ENGINEER".split('');
```

### Update the Subtitle

```javascript
// FIND THIS COMMENT (around line 66):
{/* CUSTOMISE: The subtitle paragraph below the main headline */}

// Change the paragraph text to describe yourself and what you do
<p className="font-inter text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
  Your custom description here
</p>
```

### Update Location Coordinates (Optional)

```javascript
// FIND THIS COMMENT (around line 36):
{/* CUSTOMISE: The coordinates shown in the bottom-right corner */}

// Replace with your city's coordinates (find at latlong.net)
48.8566° N, 2.3522° E  // Currently shows Paris

// Examples:
40.7128° N, 74.0060° W  // New York
34.0522° N, 118.2437° W // Los Angeles
```

## 👤 Step 3: Customize About Section

**File:** `src/components/AboutSection.jsx`

### Update Your Bio

```javascript
// FIND (around line 56):
{/* CUSTOMISE: First paragraph (right column) — describes your background */}

// Update with your own story (2-3 sentences):
<p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
  I'm an entry-level developer passionate about building [your passion].
  My journey started when [your story], and now I focus on [what you focus on].
</p>

{/* CUSTOMISE: Second paragraph (right column) */}
<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
  I'm committed to [your commitment], eager to [your goals], and excited about [your interests].
</p>
```

### Customize Your Skills/Strengths

The four cards under "About Me" represent your core strengths. To change them:

```javascript
// FIND (around line 4-24):
const capabilities = [
  {
    icon: Code,                           // Choose icon from lucide.dev
    label: 'Problem Solving',             // Your strength
    desc: 'Your description of this strength...',  // What you do
  },
  // ... more cards
];
```

### Available Icons for Skills

Visit [lucide.dev](https://lucide.dev) and search for icons like:
- `Code` - Programming
- `Lightbulb` - Ideas/Innovation
- `Users` - Collaboration
- `Zap` - Speed/Energy
- `GitBranch` - Version Control
- `Palette` - Design
- `Database` - Databases

## 💼 Step 4: Add Your Projects

**File:** `src/components/ProjectGallery.jsx`

### Update Projects Array

```javascript
// FIND (around line 4):
const projects = [
  {
    title: 'Your Project Name',          // Project name
    category: 'Project Type',             // e.g., "E-Commerce", "SPA", "API"
    year: '2024',                         // Year completed
    tools: 'React, Node.js, MongoDB',     // Technologies used
    image: '/images/project-1.jpg',       // Path to your image
  },
  // ... more projects
];
```

### Project Setup Example

```javascript
const projects = [
  {
    title: 'Todo App',
    category: 'Full Stack',
    year: '2024',
    tools: 'React / Node.js / Express',
    image: '/images/project-1.jpg',  // Save your image as project-1.jpg in public/images/
  },
  {
    title: 'Weather Dashboard',
    category: 'Frontend',
    year: '2024',
    tools: 'React / Axios / OpenWeather API',
    image: '/images/project-2.jpg',
  },
  {
    title: 'Blog Platform',
    category: 'Full Stack',
    year: '2024',
    tools: 'React / Express / PostgreSQL',
    image: '/images/project-3.jpg',
  },
  {
    title: 'E-Commerce Site',
    category: 'Full Stack',
    year: '2024',
    tools: 'React / Stripe / Firebase',
    image: '/images/project-4.jpg',
  },
];
```

## 🛠️ Step 5: Update Your Skills

**File:** `src/components/ServicesSection.jsx`

### Customize Skills Categories

```javascript
// FIND (around line 4):
const services = [
  {
    number: '01',
    title: 'Frontend Development',        // Skill category
    description: 'Your description...',   // What you can do
    tags: ['React', 'JavaScript', 'HTML/CSS'],  // Specific technologies
  },
  // ... more skills
];
```

### Example Skills Configuration

```javascript
const services = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building responsive UIs with React and modern CSS frameworks.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    number: '02',
    title: 'Backend Development',
    description: 'Creating scalable APIs and server-side applications.',
    tags: ['Node.js', 'Express', 'MongoDB', 'SQL'],
  },
  {
    number: '03',
    title: 'Tools & Platforms',
    description: 'Proficient with modern development tools and deployment platforms.',
    tags: ['Git/GitHub', 'VS Code', 'Vite', 'npm'],
  },
  {
    number: '04',
    title: 'Soft Skills',
    description: 'Problem-solving, communication, and eager to learn.',
    tags: ['teamwork', 'Communication', 'Problem Solving', 'Adaptable'],
  },
];
```

## 📧 Step 6: Update Contact Information

**File:** `src/components/ContactSection.jsx`

### Update Your Email

```javascript
// FIND (around line 32):
href="mailto:your.email@example.com"

// CHANGE TO YOUR EMAIL:
href="mailto:your-actual-email@gmail.com"
```

Do this in TWO places:
1. The button href (around line 32)
2. The email display link (around line 60)

### Update Your Location

```javascript
// FIND (around line 80):
<span className="text-xl md:text-2xl font-inter font-light">
  Your City, State
</span>

// CHANGE TO YOUR LOCATION:
<span className="text-xl md:text-2xl font-inter font-light">
  New York, NY
</span>
```

## 🔤 Step 7: Update Your Name

**File:** `src/components/Navigation.jsx`

### Change Brand Name

```javascript
// TWO PLACES to update:

// 1. In the top navigation (around line 16):
JOSE.

// 2. In the full-screen menu (around line 59):
JOSE.

// CHANGE BOTH TO YOUR NAME:
JOHN D.
JD.
JANE.
```

### Update Social Links

```javascript
// FIND (around line 105):
<div className="px-6 md:px-12 py-8 flex flex-wrap gap-6...">
  <a href="https://github.com" target="_blank"...>GitHub</a>
  <a href="https://linkedin.com" target="_blank"...>LinkedIn</a>
  <a href="https://twitter.com" target="_blank"...>Twitter</a>
  <a href="https://email.com" target="_blank"...>Email</a>
</div>

// CHANGE THE URLS TO YOUR PROFILES:
<a href="https://github.com/yourusername" ...GitHub</a>
<a href="https://linkedin.com/in/yourprofile" ...LinkedIn</a>
<a href="https://twitter.com/yourhandle" ...Twitter</a>
<a href="mailto:your-email@gmail.com" ...Email</a>
```

## 🎨 Step 8: Customize Colors (Optional)

**File:** `src/index.css`

### Change the Primary Color

Look for the `:root` section and find:

```css
/* CUSTOMISE: PRIMARY/ACCENT COLOUR */
--primary: 265 89% 76%;  /* Currently purple */
```

Use these HSL color values (or find your own at [hslpicker.com](https://hslpicker.com)):

```css
--primary: 265 89% 76%;   /* Purple (default) */
--primary: 210 100% 56%;  /* Blue */
--primary: 142 71% 45%;   /* Green */
--primary: 14 90% 56%;    /* Orange */
--primary: 0 84% 60%;     /* Red */
```

## 📝 Step 9: Update Browser Tab Title

**File:** `index.html`

```html
<!-- Find: -->
<title>Studio — Portfolio</title>

<!-- Change to: -->
<title>John Doe — Full Stack Developer</title>

<!-- OR: -->
<title>Jane Smith — React Developer</title>
```

## ✅ Final Checklist

- [ ] Created `public/images/` folder
- [ ] Added project screenshots and profile image
- [ ] Updated Hero section headline
- [ ] Updated About section bio
- [ ] Customized skills cards
- [ ] Added your 4 project entries
- [ ] Updated contact email (2 places)
- [ ] Changed location
- [ ] Updated your name (2 places)
- [ ] Updated social profile links
- [ ] Updated browser tab title in index.html
- [ ] Tested locally with `npm run dev`

## 🚀 Ready to Deploy?

Once you've customized everything, follow [RENDER_DEPLOYMENT.md](RENDER_DEPLOYMENT.md) to deploy your portfolio!

## 💡 Tips

- **Images**: Use free stock photos from [Unsplash](https://unsplash.com), [Pexels](https://pexels.com), or screenshots of your projects
- **Test Locally**: Run `npm run dev` and review each section before deploying
- **Screenshot Projects**: If you don't have project images, take screenshots of your GitHub repos or deploy them first
- **Keep It Fresh**: Update your portfolio every 2-3 months with new projects
