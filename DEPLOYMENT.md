# GitHub Pages Deployment Guide

## Quick Start

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**

   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **"GitHub Actions"**
   - The workflow will automatically build and deploy your site

3. **Access your site**
   - Your site will be available at: `https://[your-username].github.io/Spindown-ID-App-Store-Profile/`

## Alternative: Manual Deployment

If you prefer manual deployment:

```bash
npm run deploy
```

Then configure GitHub Pages to deploy from the `gh-pages` branch.

## Troubleshooting

### Site not loading?

- Check that the base path in `vite.config.ts` matches your repository name
- Ensure GitHub Pages is enabled in repository settings
- Wait a few minutes for the deployment to complete

### Assets not loading?

- Verify the `base` configuration in `vite.config.ts`
- Check that the `.nojekyll` file exists in the `public` folder

### Custom domain?

- Uncomment and update the `cname` field in `.github/workflows/deploy.yml`
- Add your domain to the `CNAME` file in the `public` folder
- Configure DNS settings to point to GitHub Pages
