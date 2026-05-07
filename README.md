# Krauss Kuts — Self-Care Studio

A static website for Krauss Kuts, a modern self-care and grooming studio. Hosted for free on GitHub Pages.

## Live Site

- **Website:** https://krausshausy.github.io/krauss-kuts/
- **Brand Guide:** https://krausshausy.github.io/krauss-kuts/brand-guide.html

## What's Included

| File | Description |
|------|-------------|
| `index.html` | Main site — hero, about, services, products, newsletter, footer |
| `brand-guide.html` | Brand guide — logo, colors, typography, tone of voice, imagery guidelines |
| `css/style.css` | All styles, fully responsive (mobile, tablet, desktop) |
| `js/main.js` | Mobile nav toggle, scroll animations, newsletter form handler |
| `images/logo.svg` | Full logo — KK monogram + scissors |
| `images/logo-icon.svg` | Compact icon mark — favicon, social profiles |
| `images/product-*.svg` | SVG product illustrations (6 total) |

## Adding Third-Party Snippets

The site has clearly marked zones for pasting JS snippets from external platforms:

### In `<head>` (for tracking pixels, analytics):
```html
<!-- HEAD SNIPPETS — paste Klaviyo, Google Analytics, Meta Pixel, etc. here -->
```

### Before `</body>` (for widgets, popups, chat):
```html
<!-- BODY SNIPPETS — paste Boulevard SBO, Klaviyo popup, chat widgets here -->
```

### Newsletter form (for Klaviyo/Mailchimp embedded forms):
Look for the `klaviyo-form-PLACEHOLDER` div in the newsletter section and replace the fallback `<form>` with your provider's embed code.

## Product Catalog

All products include `data-sku`, `data-shopify-handle`, and `data-blvd-product-id` attributes for mapping to Boulevard and Shopify:

| Product | SKU | Shopify Handle | Price |
|---------|-----|----------------|-------|
| Matte Clay Pomade | PROD-POMADE-001 | matte-clay-pomade | $24 |
| Cedarwood Beard Oil | PROD-BEARDOIL-001 | cedarwood-beard-oil | $28 |
| Daily Reset Shampoo | PROD-SHAMPOO-001 | daily-reset-shampoo | $18 |
| Cooling Aftershave Balm | PROD-AFTERSHAVE-001 | cooling-aftershave-balm | $22 |
| Scalp Revival Serum | PROD-SCALP-001 | scalp-revival-serum | $32 |
| The Shop Candle | PROD-CANDLE-001 | krauss-kuts-candle | $34 |

## Services

| Service | SKU | Price | Duration |
|---------|-----|-------|----------|
| The Signature Cut | SVC-CUT-001 | $55 | 45 min |
| Clean Fade | SVC-FADE-001 | $45 | 35 min |
| Hot Towel Shave | SVC-SHAVE-001 | $40 | 30 min |
| Beard Sculpt & Condition | SVC-BEARD-001 | $35 | 25 min |
| Scalp Revival Treatment | SVC-SCALP-001 | $30 | 20 min |
| The Royal Treatment | SVC-ROYAL-001 | $120 | 90 min |

## How to Update the Site

1. Go to [github.com/KraussHausy/krauss-kuts](https://github.com/KraussHausy/krauss-kuts)
2. Click any file → pencil icon (edit)
3. Make your changes → commit
4. Site updates automatically in ~30 seconds

## Adding Your Own Images

Drop image files into the `images/` folder. To add an action photo to the About section, uncomment the `<img>` tag in `index.html` and update the `src` path.

## Hosting

Hosted free on GitHub Pages. No backend, no database, no monthly cost. The site is pure HTML/CSS/JS — all data collection (email signups, booking, analytics) is handled by the third-party snippets you embed.
