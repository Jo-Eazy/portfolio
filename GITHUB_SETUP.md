# Deploying Your Portfolio to GitHub + Render

Follow these steps exactly, in order.

---

## Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in as **Jo-Eazy**
2. Click the **+** icon (top-right) → **New repository**
3. Fill in:
   - **Repository name**: `portfolio` (or any name you like)
   - **Visibility**: Public ✅ (required for free Render static hosting)
   - **Do NOT** check "Add a README" (we already have one)
4. Click **Create repository**

---

## Step 2 — Push Your Code to GitHub

Open a terminal inside your project folder and run these commands **one by one**:

```bash
# Initialise git (only needed once)
git init

# Add all files
git add .

# Commit with a message
git commit -m "Initial portfolio commit"

# Link to your GitHub repo — replace YOUR_REPO_NAME with the name you chose
git remote add origin https://github.com/Jo-Eazy/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

After this, refresh your GitHub repo page — all your files should appear there.

---

## Step 3 — Connect to Render

1. Go to [render.com](https://render.com) → **Sign in with GitHub**
2. Click **New +** → **Static Site**
3. Select your portfolio repository from the list
4. Render will auto-detect your `render.yaml` file
5. Click **Create Static Site**
6. Wait ~2 minutes for the first build to complete
7. Your portfolio is live! 🎉

Your URL will look like: `https://portfolio-xxxx.onrender.com`

---

## Making Future Updates

Whenever you edit your portfolio in VS Code:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Update project descriptions"

# Push to GitHub
git push
```

Render automatically detects the push and rebuilds your site within ~1–2 minutes.

---

## Replacing the CV

1. Replace `/public/Jose_Pierre_Dhlamini_CV.pdf` with your new PDF
2. Make sure the filename stays exactly `Jose_Pierre_Dhlamini_CV.pdf`
3. Run the three git commands above to push the update

If you rename the file, also update the filename inside `src/components/HeroSection.jsx`
(search for `Jose_Pierre_Dhlamini_CV.pdf` in that file).
