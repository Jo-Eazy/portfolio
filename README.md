# Jose Pierre Dhlamini — Developer Portfolio

A single-page portfolio website built with **React + Vite + Tailwind CSS + Framer Motion**, based on a Base44 design template.

## 🚀 Quick Start (VS Code)

```bash
# 1. Clone your GitHub repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# 2. Install dependencies
npm install

# 3. Start the local dev server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/               ← Add your project/profile images here
│   │   └── README.md         ← Image naming guide
│   └── Jose_Pierre_Dhlamini_CV.pdf  ← Your CV (replace to update)
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    ← Top nav bar + full-screen menu
│   │   ├── HeroSection.jsx   ← Landing section (Download CV button here)
│   │   ├── AboutSection.jsx  ← About Me section
│   │   ├── ProjectGallery.jsx ← Projects/Work Samples section
│   │   ├── ServicesSection.jsx ← Skills section with tech icons
│   │   ├── ContactSection.jsx ← Contact Information section
│   │   ├── TestimonialsSection.jsx ← What My Peers Say section
│   │   ├── Footer.jsx        ← Footer with links
│   │   ├── ProjectCard.jsx   ← Individual project card
│   │   ├── MagneticButton.jsx ← Animated hover button
│   │   └── ScrollProgress.jsx ← Top scroll progress bar
│   ├── pages/Home.jsx        ← Main page (controls section order)
│   ├── index.css             ← Global styles & colour variables
│   └── main.jsx              ← App entry point
├── index.html                ← HTML template (browser tab title here)
├── vite.config.js            ← Vite bundler config
├── tailwind.config.js        ← Tailwind CSS config
└── render.yaml               ← Render deployment config
```

## ✏️ How to Customise

Every editable value is marked with a `// CUSTOMISE:` comment in the code. The key ones:

### Add your own images
1. Put your images in `/public/images/` (e.g. `project-1.jpg`)
2. In `ProjectGallery.jsx`, change the `image` value to `'/images/project-1.jpg'`

### Update the CV
Replace `/public/Jose_Pierre_Dhlamini_CV.pdf` with your updated PDF file.
Make sure the filename matches the one referenced in `HeroSection.jsx`.

### Change accent colour
In `src/index.css`, find `--primary: 265 89% 76%;` and change the HSL values.

### Add/remove projects
Edit the `projects` array at the top of `src/components/ProjectGallery.jsx`.

### Add/remove skills or tech icons
Edit the `services` and `skillIcons` arrays at the top of `src/components/ServicesSection.jsx`.

### Update testimonials
Edit the `testimonials` array in `src/components/TestimonialsSection.jsx`.

## 🌐 Deploying to Render

1. Push this project to a GitHub repository
2. Log in to [render.com](https://render.com) and connect your GitHub account
3. Click **New → Static Site**
4. Select your repository
5. Render reads `render.yaml` automatically — click **Create Static Site**
6. Your site will be live at `https://YOUR_SITE_NAME.onrender.com`

See `RENDER_DEPLOYMENT.md` for the full step-by-step guide.

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server at localhost:5173 |
| `npm run build` | Build production files into `/dist` |
| `npm run preview` | Preview the production build locally |
