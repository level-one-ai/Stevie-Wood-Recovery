# Website images

All the photos the website uses live in this folder.

| Folder | What goes in it | Used where |
|---|---|---|
| `brand/` | The logo (`logo.png`, see-through background) | Header, footer, call-to-action box, WhatsApp form |
| `hero/` | The big photo at the top of the page | Top of the homepage |
| `gallery/` | Photos of real jobs | "Recent jobs", Services and About |
| `uploads/` | Anything new you want on the site | Nowhere yet. Drop files here and ask for them to be added |

## To swap a photo for a new one

1. Find the photo you want to replace in the folders above.
2. Save your new photo with **exactly the same file name** (for example `03-range-rover-sport-recovery.webp`).
3. Put it in the same folder, replacing the old one.
4. Commit and push. The site updates by itself in a minute or two.

Tips:
- Landscape photos work best. About 1200px wide is plenty for gallery photos.
- Keep each file under about 300 KB so the site stays fast on phones (squash big photos at squoosh.app first).
- The hero photo has three versions (`.jpg`, `.webp` and `-mobile.webp`). If you change it, replace all three, or put the new one in `uploads/` and ask for it to be swapped in.

## To add a brand new photo

Put it in `uploads/` and ask for it to be added. A new photo also needs a caption and a short description (alt text) so Google and screen readers know what it shows.

## Browser tab icon (favicon)

The little logo in the browser tab comes from `favicon.ico` and `apple-touch-icon.png` in the main folder, plus `brand/favicon-32.png` and `brand/favicon-192.png`. If the logo changes, these need making again from the new logo.

The picture used when the site is shared on WhatsApp or Facebook is `social/og-image-1200x630.jpg`.
