# Deploy to Render - Complete Guide

Render is a perfect platform for hosting your portfolio for FREE with automatic deployments from GitHub!

## 🎯 What You'll Get

✅ Free hosting  
✅ HTTPS (SSL certificate included)  
✅ Auto-deploy on every GitHub push  
✅ Custom domain support  
✅ Fast, reliable servers globally  

## 📋 Prerequisites

1. GitHub account with your portfolio repository pushed
2. Render account (free signup at [render.com](https://render.com))
3. Portfolio code customized and tested locally

## 🚀 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

If you haven't already:

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `my-portfolio`
3. **DO NOT** initialize with README (you already have one)
4. Click "Create repository"

### Step 2: Push Your Code to GitHub

In your project folder, run:

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Entry-level developer portfolio"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Check:** Go to `github.com/YOUR_USERNAME/my-portfolio` and verify your code is there.

### Step 3: Create Render Account

1. Go to [render.com](https://render.com)
2. Click "Get Started" or "Sign Up"
3. Choose "Sign up with GitHub" (easiest option)
4. Authorize Render to access your GitHub account
5. Complete signup

### Step 4: Connect Your GitHub Repository to Render

1. Log into [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** button (top-right)
3. Select **"Web Service"**
4. Under "Connect a repository", click **"Connect"** or **"+ New"**
5. Authorize if needed
6. Select your `my-portfolio` repository
7. Click **"Connect"**

### Step 5: Configure Your Web Service

Fill in these settings:

| Setting | Value |
|---------|-------|
| **Name** | `my-portfolio` |
| **Environment** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run preview` |
| **Plan** | `Free` ✓ |

**Screenshot of filled form:**
- Name: `my-portfolio`
- Build CMD: `npm install && npm run build`  
- Start CMD: `npm run preview`

### Step 6: Create the Service

Click **"Create Web Service"** and wait...

**This will take 2-3 minutes on first deploy.** You should see:
- "Building..." → "Building Docker image..."
- Then "Deploying..."
- Finally "Live" ✅

### Step 7: Your Portfolio is Live! 🎉

Once it shows "Live", you can access your portfolio at:

```
https://my-portfolio.onrender.com
```

**Share this URL with anyone!**

---

## 🔄 Auto-Deploy on Code Changes

Now, whenever you push code to GitHub, Render automatically:
1. Pulls your latest code
2. Runs `npm run build`
3. Deploys the new version
4. Your portfolio updates automatically!

Test this:

```bash
# Make a small change to a component
# Example: Change text in src/components/HeroSection.jsx

# Commit and push to GitHub
git add .
git commit -m "Update hero section text"
git push

# Go to Render Dashboard
# Watch the new deploy start automatically
# Check your live URL - changes appear within 2-3 minutes!
```

---

## 🌐 Optional: Custom Domain

### Use Your Own Domain

If you have a domain (e.g., `johndoe.com`):

1. In Render Dashboard, go to your service
2. Click **"Settings"**
3. Scroll to **"Custom Domain"**
4. Enter your domain: `johndoe.com`
5. Follow the DNS setup instructions
6. Wait 24 hours for DNS propagation

Your portfolio will be at: `https://johndoe.com`

### Where to Buy a Domain

- [Namecheap](https://namecheap.com) - Cheap and reliable
- [GoDaddy](https://godaddy.com) - Popular and easy
- [Google Domains](https://domains.google) - Simple setup
- [Bluehost](https://bluehost.com) - Bundled hosting

Cost: $10-15/year typically

---

## 🆘 Troubleshooting

### Deploy Fails with Error

1. **Check Render Logs**: In Dashboard → Logs tab
2. **Common Issues**:
   - Missing `npm install` in build command ❌
   - Missing dependencies in `package.json` ❌
   - Node version too old ✅ Use Node 18+
   
3. **View Full Error**:
   - Click on the failed deploy
   - Scroll through the build logs
   - Look for the actual error message

### Portfolio Shows "Service Unavailable"

- Usually means the build is still in progress
- Wait 5 minutes and refresh
- Check the Render Dashboard → Logs tab

### Changes Don't Appear

1. Make sure you `git push` to GitHub
2. Wait for Render deploy to complete (watch Dashboard)
3. Hard refresh your browser: `Ctrl+Shift+Del` (Windows) or `Cmd+Shift+Del` (Mac)

### Build Too Large or Times Out

If build takes >30 minutes or exceeds 512MB:
1. Remove large `node_modules` locally: `rm -rf node_modules`
2. Add `.gitignore` entry (it's there by default)
3. Push clean version to GitHub
4. Retry deploy

---

## 📝 Environment Variables (Advanced)

If your portfolio needs environment variables in the future:

1. In Render Dashboard, go to **Settings**
2. Scroll to **"Environment Variables"**
3. Add variables (e.g., `REACT_APP_API_URL`)
4. Click "Save Changes"
5. Service auto-redeploys with new variables

For now, you probably don't need this!

---

## 🔐 Keep Your Repository Secure

Make sure your `.gitignore` file includes:

```
# Already in your .gitignore:
node_modules/
dist/
.env.local
```

**NEVER push:**
- `.env.local` with secrets
- `node_modules/`
- API keys or passwords

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Render account created
- [ ] Repository connected to Render
- [ ] Build Command: `npm install && npm run build`
- [ ] Start Command: `npm run preview`
- [ ] Service created and deployed
- [ ] Portfolio accessible at `https://my-portfolio.onrender.com`
- [ ] Can see "Live" status in Render Dashboard
- [ ] Test that changes auto-deploy

## 🚀 What's Next?

1. **Share Your Portfolio**: Send the link to friends, family, recruiters!
2. **Add to Resume**: Include link to your deployed portfolio
3. **Keep Updating**: Add new projects every month
4. **Connect Socials**: Make sure GitHub/LinkedIn links work
5. **Ask for Reviews**: Get feedback from other developers

---

## 📚 Helpful Resources

- [Render Documentation](https://render.com/docs)
- [Git & GitHub Basics](https://docs.github.com/en/get-started)
- [Your Portfolio Setup Guide](PORTFOLIO_SETUP.md)
- [Vite Documentation](https://vitejs.dev)

---

## 🎉 Congratulations!

Your portfolio is now live on the internet for the ENTIRE WORLD to see!

Next step: customize it with your projects, then start applying to jobs! 💼

---

**Questions?** Check the logs in Render Dashboard or revisit this guide!
