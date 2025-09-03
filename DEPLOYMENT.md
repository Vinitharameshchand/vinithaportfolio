# Portfolio Deployment Guide

## Quick Start - Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your React portfolio for free.

### Option 1: Deploy via Vercel Website (Easiest)

1. **Go to [vercel.com](https://vercel.com)** and sign up with your GitHub account
2. **Push your code to GitHub** (see Git commands below)
3. **Import your project** on Vercel by connecting your GitHub repository
4. **Deploy** - Vercel will automatically build and deploy your site

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   npx vercel
   ```

3. **Follow the prompts** and your site will be live!

## Git Setup (Required for GitHub/Vercel)

If you haven't set up Git yet:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial portfolio commit"

# Add GitHub remote (create a repo on GitHub first)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Alternative Hosting Options

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder (after running `npm run build`)
3. Your site is live!

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

## Before Deploying

1. **Test locally:** Run `npm run dev` to test your site
2. **Build successfully:** Run `npm run build` to ensure no errors
3. **Add your images:** Place your images in the `public/assets/` folders
4. **Update project URLs:** Add real demo and source URLs in `src/data/project.json`

## Custom Domain (Optional)

Once deployed, you can add a custom domain:
- Buy a domain (GoDaddy, Namecheap, etc.)
- Add it in your hosting platform's settings
- Update DNS records as instructed

## Need Help?

- Check the deployment platform's documentation
- Ensure all images are in the correct `public/assets/` folders
- Make sure `npm run build` works without errors
