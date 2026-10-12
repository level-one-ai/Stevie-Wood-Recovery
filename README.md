# Stevie Wood Recovery - Website

One-page website for Stevie Wood Recovery, a family-run 24/7 car recovery and towing service in Edinburgh and the Lothians. Live at https://steviewoodrecovery.com (GitHub Pages).

## Project structure

```
index.html              The page (all sections)
css/
  base.css              Colours, fonts, buttons, shared styles
  header.css            Top bar and menus
  hero.css              Top section and the proof strip
  sections.css          Services, gallery, steps, about, reviews, areas, FAQ, call to action
  components.css        WhatsApp quote form, popups, phone call bar
  footer.css            Footer
  responsive.css        Tablet and phone layouts (must load last)
js/
  main.js               Menus, gallery, quote form, popups
  animations.js         Scroll animations, section by section
  scrollcraft.js        Animation engine (smooth scroll, device checks, reduced motion)
  vendor/               GSAP, ScrollTrigger and Lenis (hosted here, no CDN needed)
public/images/          All photos - see public/images/README.md
  brand/  hero/  gallery/  uploads/
.visibility/            SEO audit report (not part of the site)
CNAME                   Custom domain for GitHub Pages
```

## Changing things

- **Photos:** see `public/images/README.md`.
- **Colours:** edit the variables at the top of `css/base.css` (`--primary` is the purple).
- **Phone number:** search `index.html` and `js/main.js` for `07934015448` / `447934015448`.

There is no build step. Edit the files, commit and push.

## Layout and animation notes

- On computers and tablets each main section fills one screen (`.screen` in `css/base.css`). Short laptop screens are handled at the bottom of `css/responsive.css`.
- Tested from the 280px Galaxy Fold cover screen up to 1920px desktops.
- Animations switch off for visitors with "reduce motion" turned on, and the page works fully without JavaScript.

## Fonts and icons

- Barlow and Barlow Semi Condensed (Google Fonts)
- Font Awesome 6.4.0 (cdnjs)
- GSAP 3.12.5 + ScrollTrigger, Lenis 1.1.13 (in `js/vendor/`)

© 2026 Stevie Wood Recovery.
