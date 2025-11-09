# Deployment Guide

This guide covers deploying the Livalance website to Cloudflare Pages.

## Prerequisites

- Node.js >= 20.0.0
- Cloudflare account
- GitHub repository connected to Cloudflare Pages

## Cloudflare Pages Deployment

### Build Configuration

Configure the following settings in Cloudflare Pages dashboard:

**Build Settings:**
- **Build command:** `npm run pages:build`
- **Build output directory:** `.vercel/output/static`
- **Root directory:** `/` (project root)

**Environment Variables:**
- `NODE_VERSION=20`
- `NEXT_PUBLIC_BASE_URL=https://www.livalance.com` (your production URL)
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=livalance.com` (if using Plausible Analytics)
- `NEXT_TELEMETRY_DISABLED=1` (optional)

### Local Testing

Before deploying, test the build locally:

```bash
# Install dependencies
npm install

# Build for Cloudflare Pages
npm run pages:build

# Preview locally with Wrangler
npm run preview
```

### Deployment Process

1. **Automatic Deployment:**
   - Push to `main` branch triggers automatic build and deployment
   - Cloudflare Pages will run `npm run pages:build`
   - Build output is served from `.vercel/output/static`

2. **Manual Deployment:**
   ```bash
   npm run deploy
   ```

### Build Scripts

- `npm run pages:build` - Builds Next.js app for Cloudflare Pages
- `npm run preview` - Builds and previews locally with Wrangler
- `npm run deploy` - Builds and deploys to Cloudflare Pages

### Troubleshooting

**Build Failures:**
- Ensure Node.js version is >= 20.0.0
- Check that all environment variables are set
- Verify `wrangler.toml` configuration is correct

**Runtime Errors:**
- Ensure API routes use `export const runtime = 'edge'`
- Check that all dynamic routes handle async params correctly
- Verify middleware compatibility with Edge runtime

### Post-Deployment

1. Verify all routes are accessible
2. Check that internationalization (i18n) routing works correctly
3. Test API endpoints (e.g., `/api/subscribe`)
4. Validate sitemap generation if using `npm run generate:sitemap`

## Alternative Deployment Options

### Vercel

The project can also be deployed to Vercel:

```bash
npm run build:next
```

Configure Vercel with:
- Framework Preset: Next.js
- Build Command: `npm run build:next`
- Output Directory: `.next`

### Static Export (Not Recommended)

Static export is deprecated in Next.js 15+. Use Cloudflare Pages with `@cloudflare/next-on-pages` instead.

