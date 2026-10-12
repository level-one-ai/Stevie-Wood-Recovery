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

## Fonts and icons

- Barlow and Barlow Semi Condensed (Google Fonts)
- Font Awesome 6.4.0 (cdnjs)

© 2026 Stevie Wood Recovery.
