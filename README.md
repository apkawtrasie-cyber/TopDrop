# TopDrop.ch — Premium Swiss Domain Landing

A fast, multilingual (DE/FR/IT/EN), single-file landing page for selling the **TopDrop.ch** domain.

## Features

- 100% static — single `index.html` (no build step)
- Multilingual: **DE / FR / IT / EN** with auto-detect (Swiss traffic defaults to DE)
- Manual language switch (persisted in `localStorage`)
- Dark, modern SaaS/e-commerce aesthetic
- Fully responsive & mobile-optimized
- SEO-optimized (meta, OG, JSON-LD Product schema, canonical, semantic HTML)
- Contact form via **Formspree** (with `mailto:` fallback)
- Secure escrow messaging (Sedo / Dan)
- Cross-sell section linking to [andrzejmich.ch](https://andrzejmich.ch)

## Quick Start

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Configure the Form

In `index.html` replace the Formspree action URL:

```html
<form id="offer-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

If the action is left as `your-id-here`, the form will fall back to opening the user's email client (`mailto:contact@andrzejmich.ch`).

## Deploy

### Vercel
```bash
vercel --prod
```
The included `vercel.json` serves the static site at the root.

### GitHub Pages
Just push to `main` and enable Pages → branch `main` / root.

## Files

- `index.html` — entire landing page (HTML + CSS + JS + i18n)
- `public/logo.svg` — brand logo
- `public/favicon.svg` — favicon
- `vercel.json` — deployment config
