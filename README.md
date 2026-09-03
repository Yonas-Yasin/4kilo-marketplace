# 4KILO Marketplace

A complete, production-quality marketplace front-end. Zero dependencies, zero build
step, no stock photography — **every image on the site is hand-authored SVG** generated
by `assets/js/art.js`.

## Run it

No install required. Any static server works:

```bash
python -m http.server 8420
```

Then open <http://localhost:8420>. You can also just double-click `index.html` —
everything works from `file://` too.

## Pages

| File | What it does |
|---|---|
| `index.html` | Storefront — hero, departments, curated grid with live tabs, buyer-protection explainer, maker story, testimonials, FAQ |
| `browse.html` | Catalogue with live filtering: department, maker, price slider, attributes, rating, six sort orders, removable filter chips, load-more, saved-items view, recently viewed |
| `product.html` | Detail page — colourway gallery, size picker, quantity, add-to-basket, seller card, spec accordion, rating distribution, reviews, related items |
| `checkout.html` | Four-step flow: delivery → payment → review → confirmation. Shipping methods, five payment methods, promo code (`4KILOWELCOME`), live order summary |
| `sell.html` | Seller acquisition — interactive fee comparison, payout calculator, application form, seller FAQ |
| `dashboard.html` | Seller dashboard — KPI tiles, revenue chart, orders-by-department chart, payout timeline, order and listing tables |

## Architecture

```
assets/
  css/styles.css   Design system: tokens, light + dark themes, all components
  js/art.js        Original artwork — 21 product illustrations, brand mark,
                   hero scene, generative avatars, empty/success states,
                   payment wordmarks
  js/data.js       Catalogue: 27 products, 10 sellers, 8 departments, reviews,
                   editorial copy
  js/app.js        Shell: header/footer injection, basket, wishlist, search
                   with keyboard navigation, theme toggle, toasts, scroll reveal
  img/favicon.svg
```

`app.js` injects the header, footer and basket drawer into every page, so those
exist in one place only. Each page then runs a small inline script for its own
content.

### The artwork

`art.js` is the piece worth reading. Each product illustration is a function that
receives a palette and returns SVG — so one shape renders in twelve colourways,
and the swatches on a product page redraw the illustration rather than swapping a
file. Avatars are generated deterministically from a seed string (skin, hair,
shirt and hairstyle all derived from an FNV hash of the name), so the same person
looks the same everywhere on the site.

### State

Basket, wishlist, theme and recently-viewed all persist to `localStorage` under the
`4kilo:` prefix. Nothing leaves the browser.

### Charts

The dashboard charts follow the `dataviz` skill: validated categorical slots 1 and 2
(blue `#2a78d6` / orange `#eb6834`, re-stepped for dark mode), one y-axis, a legend
plus selective endpoint labels, hairline solid gridlines, crosshair tooltips, and a
table view for every chart. One filter row above the charts scopes all of them.

## Things worth knowing

- **Currency is ETB (Birr)** and the setting is Addis Ababa, on the assumption that
  "4 Kilo" refers to the Arat Kilo district. Change `CURRENCY` at the top of
  `data.js` and the whole site follows.
- **Dark mode** follows the OS by default and the header toggle overrides it.
- The site is responsive down to ~360px; the filter rail collapses behind a button
  and the primary nav moves into a slide-in drawer below 1040px.
- Copy, sellers, products and reviews are fictional.
