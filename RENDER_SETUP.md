# Render Setup Guide

## Why Render for Puppeteer?

Render provides full VMs with more memory and longer execution times, making it ideal for Puppeteer/Chromium workloads.

## Setup Steps

### 1. Create a Render Web Service

1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `pixelated-css` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `pnpm install && pnpm run build`
   - **Start Command**: `pnpm start`
   - **Plan**: Free tier is fine to start (512MB RAM, upgrade if needed)

### 2. Environment Variables

Add these in Render dashboard:

- `NODE_ENV=production`
- (Add any other env vars you need)

### 3. Update package.json for Render

The current setup should work, but you may want to add:

```json
{
  "scripts": {
    "start": "next start -p $PORT"
  }
}
```

### 4. Update API Route for Render

You'll need to update the Chromium configuration. Render uses standard Linux, so you can use regular Puppeteer or install Chromium via buildpack.

## Alternative: Use Regular Puppeteer on Render

Since Render gives you a full VM, you can use regular `puppeteer` instead of `puppeteer-core` + `@sparticuz/chromium`:

1. Install regular puppeteer:

```bash
pnpm add puppeteer
```

2. Update the API route to use standard Puppeteer (simpler config)

## Buildpack Option (Recommended for Render)

Render supports buildpacks. You can use a Chromium buildpack:

1. In Render, go to your service settings
2. Add buildpack: `heroku-buildpack-chromium` (or similar)
3. This will install Chromium system-wide

## Memory Considerations

- **Free tier**: 512MB RAM (may be tight for Chromium)
- **Starter**: $7/month - 512MB RAM
- **Standard**: $25/month - 2GB RAM (recommended for Puppeteer)

Start with free tier and upgrade if you hit memory issues.
