# Visibility Audit: steviewoodrecovery.com

12 October 2026 · 1 page (the whole site is one page) · Report only, nothing on the site has been changed.

**Data used:** the site code, the live site, Google Search Console (connected), PageSpeed (connected), Bing Webmaster (connected), the Search Console export and the Ahrefs CSV you sent.
**Not available:** CrUX (the site doesn't get enough visits yet), GA4 (no tracking code on the site, and the GA4 API is switched off in the Google Cloud project), and real UK Google results and map results (that needs a paid tool, so I used a US web search instead).
**⚠ Low-confidence:** Search Console only has about 24 hours of data and Ahrefs has 6 keywords. Anything marked ⚠ is based on that thin data and could change.

---

## 1. Summary

Google has found the site and indexed it, and it already appears for "car recovery edinburgh" (around position 24 ⚠) and "vehicle recovery edinburgh" (around 13 ⚠). The biggest problems aren't about keywords. On phones the page is broken (two sections spill off the side of the screen), the main photo takes 11.5 seconds to load on mobile, and the email address points at the wrong domain (.co.uk). There is no sitemap, no FAQ, no prices and no links to the Business Profile or social pages, so Google and answer engines have very little to go on. Most competitors are national call centres pretending to be local, and Stevie's real photos and real local base are a genuine advantage the site doesn't use yet.

## 2. Scores

| Area | Band | Biggest problem 1 | Biggest problem 2 |
|---|---|---|---|
| **SEO** (normal Google ranking) | **Fair** | Mobile layout broken + 11.5s mobile load | Main phrase not in H1 or opening text; no sitemap |
| **GEO** (being picked up by ChatGPT, Gemini etc.) | **Weak** | No links tying the site to the Business Profile / socials (`sameAs`), almost no mentions of the business elsewhere online | Thin page: no prices, no FAQ, no facts like years trading or truck types |
| **AEO** (direct answers in Google / voice) | **Poor** | No questions answered anywhere on the page | Key facts (cost, payment, vehicles covered) missing |

## 3. Do these first

1. Fix the wrong email address (.co.uk) in the schema, privacy policy and terms.
2. Fix the phone layout: move the inline styles so the mobile CSS actually works, and stop the big heading running off the screen.
3. Make the hero photo load fast: shrink the 1.2 MB photo, serve it from the site itself (not from github.com), and preload it.
4. Put "Car Recovery Edinburgh" in the H1, page title, description and opening paragraph (the plan is in section 5).
5. Add a sitemap and robots.txt, then submit the sitemap in Search Console and Bing.

---

## 4. Client request: "24/7 vehicle" → "Car Recovery Edinburgh"

The exact wording "24/7 Vehicle" appears **5 times** on the site (plus once in the README, which isn't site copy). It is **not** in any H1 or alt text.

**Warning:** "24/7" is the main selling point. A recovery customer is usually stuck *right now*, often at night. If we just swap the words, "24/7" disappears from the title, the hero and the footer. So every suggestion below keeps "24/7" (or "24 hours") right next to the new phrase.

| # | Where | Current text | New text |
|---|---|---|---|
| R1 | Page title (`index.html` line 6) | `24/7 Vehicle Recovery Edinburgh \| Breakdown Recovery & Towing \| Stevie Wood Recovery` (84 chars, gets cut off in Google) | `Car Recovery Edinburgh \| 24/7 Towing & Breakdown \| Stevie Wood` (62 chars) |
| R2 | Social share title, og:title (line 15) | `24/7 Vehicle Recovery Edinburgh \| Stevie Wood Recovery` | `Car Recovery Edinburgh, 24/7 \| Stevie Wood Recovery` |
| R3 | Schema description (line 25) | `24/7 vehicle recovery and breakdown assistance in Edinburgh` | `Family-run car recovery in Edinburgh and the Lothians, 24 hours a day. Breakdowns, towing, jump starts, accidents and wrong fuel.` |
| R4 | Hero badge above the name (line 770) | `24/7 Vehicle Recovery Edinburgh` | `Car Recovery Edinburgh · 24/7` (see item C5: this also becomes the H1) |
| R5 | Footer tagline (line 1147) | `24/7 Vehicle Recovery Edinburgh` | `Car Recovery Edinburgh, 24 hours a day` |

Related, same idea, not exact matches. Change only if you want:

| Where | Current text | New text |
|---|---|---|
| Meta description (line 7) | `Fast 24/7 breakdown recovery in Edinburgh. Local vehicle recovery, towing, jump starts & accident recovery. Average 40-minute response. Call 07934 015448 now.` | `Car recovery in Edinburgh and the Lothians, 24 hours a day. Family-run, around 40 minutes to reach you, 65+ five-star Google reviews. Call 07934 015448.` (152 chars) |
| og:description (line 16) | `Fast 24/7 breakdown recovery in Edinburgh. Local vehicle recovery, towing, jump starts & accident recovery. Average 40-minute response.` | `Family-run car recovery in Edinburgh and the Lothians, 24 hours a day. Average arrival around 40 minutes.` |
| Footer copyright (line 1157) | `… All rights reserved. Vehicle Recovery Edinburgh.` | `… All rights reserved. Car Recovery Edinburgh.` |

---

## 5. "Car Recovery Edinburgh" plan

**Where the site ranks now ⚠ (Search Console, last 24h, 1–2 impressions each):**

| Search | Position | Note |
|---|---|---|
| car recovery edinburgh | ~24 | page 3 |
| vehicle recovery edinburgh | ~13 | page 2 |
| car towing | ~13 | |
| towing services near me | ~24 | |
| car towing edinburgh / breakdown recovery edinburgh | no data yet | |

Ahrefs agrees things are moving in the right direction: 5 keywords in positions 4–10 now, up from 4 a month ago ⚠. In a US web search for "car recovery edinburgh" the site came 9th.

**What's ranking at the top (from that web search, not true UK Google ⚠):**

| Site | Page type | What it has that Stevie's page doesn't |
|---|---|---|
| fast-car-recovery.co.uk/edinburgh | National lead site, Edinburgh page | "From £79" prices, 12 areas named |
| balochrecoveryservices.co.uk/car-recovery-edinburgh | Broker based in Yorkshire, Edinburgh page | ~3,000 words, 12-question FAQ, roads (A720, M8, A1), EH postcodes, "5.0 from 217 Google reviews" |
| roadwayassist.uk/car-recovery-edinburgh | National site with hundreds of city pages | FAQ, "£0 call-out" and "fixed quote" pricing, area-by-area arrival times |
| mkautorecovery.co.uk | Local firm (Leith), homepage | FAQ, phone everywhere |
| edinburghrecovery.com | Exact-match domain, homepage | 20+ neighbourhood pages, local 0131 number |

What they all share: "Edinburgh" in the URL or title and H1, a FAQ, lots of named areas and roads, and a price or "quote before we send the truck" message. **What none of them have:** real photos of their own trucks (only one does), a real local base, and a real person's name. Stevie has all three.

**Map results:** I can't see the live Google map pack without a paid tool. Please do the manual check in section 7, step G1.

**The plan:**

| Where | Current | Change to | Why |
|---|---|---|---|
| Page title | `24/7 Vehicle Recovery Edinburgh \| …` | `Car Recovery Edinburgh \| 24/7 Towing & Breakdown \| Stevie Wood` | Phrase first, 24/7 kept, fits in Google without being cut off |
| H1 | `Stevie Wood Recovery` | `Car Recovery Edinburgh · 24/7` as the H1 (in the hero badge spot). The big "Stevie Wood Recovery" stays exactly as it looks but becomes a styled paragraph | The H1 is the strongest on-page signal. The page looks the same |
| Meta description | see section 4 | `Car recovery in Edinburgh and the Lothians, 24 hours a day. Family-run, around 40 minutes to reach you, 65+ five-star Google reviews. Call 07934 015448.` | Wins the click, includes the phrase once |
| URL | `https://steviewoodrecovery.com/` | **Keep as is** | The homepage is the right page for this phrase. A second "car recovery edinburgh" page would compete with it |
| Opening paragraph (services intro, line 798) | `Professional vehicle recovery solutions available around the clock throughout Edinburgh and the Lothians.` | `Broken down? Stevie Wood Recovery is a family-run car recovery service in Edinburgh, out day and night across the city and the Lothians. Cars, vans and 4x4s, usually with you in about 40 minutes.` | Phrase in the first words Google reads. Says who, where, what and how fast |
| Image alt text | Logo: `Stevie Wood Recovery - Edinburgh Vehicle Recovery Service`. Gallery: `24/7 Breakdown Recovery`, `Professional Towing`, etc. | Logo: `Stevie Wood Recovery logo`. Hero/gallery: describe the real photo, e.g. `Porsche 911 strapped onto a Stevie Wood recovery truck on an Edinburgh cobbled street` and `Orange Ford Ranger on the back of our recovery truck after a breakdown in Edinburgh`. Use the phrase **once**, on the best photo | Alt text is for describing the photo. Stuffing every image with the phrase looks spammy |
| Schema `areaServed` | `{"@type":"City","name":"Edinburgh"}` | A list: Edinburgh, Midlothian, East Lothian, West Lothian, plus the towns already named on the page (see item H4) | Tells Google exactly where Stevie works |
| Schema type | `LocalBusiness` | `AutomotiveBusiness` with `"name":"Stevie Wood Recovery"` and `"description"` from R3 | More specific than the generic type |
| Google Business Profile | Unknown | Primary category **Towing service**, secondary **Auto towing / Vehicle recovery service** if offered. Description starts: `Family-run car recovery in Edinburgh, 24 hours a day…`. Add services named "Car recovery Edinburgh", "Breakdown recovery", "Accident recovery". Website link = `https://steviewoodrecovery.com/` | The map pack is decided mostly here, not on the website |
| New FAQ section | None | 5–6 real questions (cost, how fast, payment, vans/4x4s, accident and insurance, wrong fuel). Answers need the client's answers in section 8 | What competitors have and Stevie lacks; feeds answer engines |

**How long it will take (honest answer):**
- **2–6 weeks:** the title, H1 and description changes get picked up. Small movements.
- **3–6 months:** realistic time to reach the top 5 in normal results for "car recovery edinburgh", *if* the FAQ and area content go in and a handful of local links are earned (Yell, FreeIndex, Checkatrade, local garages).
- **The map pack is the bigger prize, and it depends mostly on things off the website:** the number of Google reviews and how often new ones come in, the Business Profile category and photos, and distance. The EH17 base helps for south Edinburgh but will be weaker in Leith or the west side.
- Several competitors are big national sites with hundreds of pages. Beating them on content alone is slow. Reviews and real local proof are the shortcut.

---

## 6. Full list of changes

### Critical

| # | Page or file | What's wrong | Change to (exact text or code) | Why it matters | Effort |
|---|---|---|---|---|---|
| C1 | `index.html` lines 28, 1223, 1287 | Email is `info@steviewoodrecovery.co.uk`. The .co.uk domain doesn't respond at all, so emails may bounce | `info@steviewoodrecovery.com`, **only after the client confirms that inbox works** (Q3) | Lost customers, and Google sees two different domains for one business | S |
| C2 | `index.html` inline `<style>` (lines 69–723) | It loads **after** `responsive.css`, so it overrides the phone layout. On a 375px phone the page is 586px wide and the stats text runs off-screen (`raw/mobile_375_*.png`) | Move the whole inline `<style>` block into a new `css/components.css`, linked **before** `css/responsive.css`. No style values change | Google ranks using the phone version. Customers in a breakdown are on phones | S |
| C3 | `css/hero.css` line ~83 | H1 has `white-space: nowrap`, so "STEVIE WOOD RECOVERY" is cut off on phones | In `responsive.css` at `max-width:768px`, add `.hero-content-centered h1 { white-space: normal; }` | The business name is cut in half on mobile | S |
| C4 | `css/hero.css` line 11 | Hero photo is a 1.2 MB, 4400px JPG loaded from `github.com/.../blob/...?raw=true` (an extra redirect). Mobile LCP **11.5s** (`raw/psi_mobile.json`) | Save as `public/images/hero/hero-porsche-on-recovery-truck.webp` (~1920px wide, ~150 KB) plus a ~900px mobile version. Use a relative path, and add `<link rel="preload" as="image" href="public/images/hero/hero-porsche-on-recovery-truck.webp" fetchpriority="high">` in `<head>` | Speed is a ranking factor, and a slow page loses stressed callers | M |

### High

| # | Page or file | What's wrong | Change to (exact text or code) | Why it matters | Effort |
|---|---|---|---|---|---|
| H1 | Site root | No `sitemap.xml` (404). Search Console has no sitemap submitted | New `sitemap.xml` listing `https://steviewoodrecovery.com/` with `<lastmod>` | Faster discovery, especially once more pages exist | S |
| H2 | Site root | No `robots.txt` (404) | `User-agent: *` / `Allow: /` / `Sitemap: https://steviewoodrecovery.com/sitemap.xml` | Points crawlers (including ChatGPT, Bing, Perplexity) at the sitemap | S |
| H3 | `index.html` H1 and hero | H1 is only the brand name | Items R4 + section 5 H1 row: `<h1 class="hero-bubble">Car Recovery Edinburgh · 24/7</h1>`, and `<p class="hero-title">Stevie Wood Recovery</p>` keeping the current look (copy the same CSS rules to the new class) | Strongest on-page signal for the main phrase | M |
| H4 | `index.html` schema | Generic type, a single city, no `sameAs`, `logo`, `image`, or `hasMap`. Phone isn't in +44 format | `"@type":"AutomotiveBusiness"`, `"telephone":"+447934015448"`, `"areaServed":["Edinburgh","Midlothian","East Lothian","West Lothian","Musselburgh","Dalkeith","Bonnyrigg","Loanhead","Penicuik"]`, `"logo"` + `"image"` (real truck photo), `"sameAs"`: [GBP link, Facebook, Instagram] **once the client sends them**, `"hasMap"`: GBP map link | Ties the website to the Business Profile, which is the main GEO fix | S |
| H5 | `index.html` schema | `aggregateRating` (5 stars, 65 reviews) on your own business. Google doesn't allow self-made review stars for LocalBusiness, and the count must match the real Google figure | Remove the `aggregateRating` block. Keep "65+ five-star Google reviews" as visible text, with a link to the Google reviews | Avoids a manual penalty for review markup. Search Console is currently picking it up as "Review snippets" | S |
| H6 | `index.html` reviews (lines 962–1005) | Four testimonials ("James M." etc.). Real or written as examples? | If real: keep them and add a "Read all reviews on Google" link. If not: replace them with real Google reviews (with the reviewers' permission). **Q6** | Fake reviews have been illegal in the UK since April 2025 (DMCC Act) | S |
| H7 | `index.html` footer lines 1151–1153 | Facebook, Instagram and Google icons link to `#` (nowhere) | Real profile URLs (Q4), or remove the icons until they exist | Dead links, and a missed chance to connect the business across sites | S |
| H8 | `index.html` new section after Services | No FAQ. Competitors have 7–12 questions | 5–6 Q&As drafted from the client's answers (Q7–Q12), plus `FAQPage` schema. I'll draft the copy after the questionnaire comes back, so it's based on facts and not guesses | Main AEO/GEO gap, and where people ask "how much / how fast" | M |
| H9 | Fonts and icons in `<head>` | Google Fonts + full Font Awesome CSS block the page from showing (~3.1s on mobile) | Add `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`. Load Font Awesome with `media="print" onload="this.media='all'"`, or swap the ~15 icons used for inline SVGs | Faster first paint | M |
| H10 | Gallery `<img>` lines 1032–1102 | Images load from `github.com/.../blob/...?raw=true`. Captions don't match the photos (slide 3 says "Battery & Jump Start" but shows a Range Rover on the truck; slide 5 says "Wrong Fuel" but shows an accident-damaged Discovery) | Relative paths `public/images/gallery/…` (see section 11). Match captions to photos, e.g. slide 5: `Accident Recovery` / `A damaged Land Rover Discovery loaded and strapped for the trip to the body shop.` Add `loading="lazy" width="680" height="510"` | Speed, honesty, and photos Google can index properly | S |

### Medium

| # | Page or file | What's wrong | Change to (exact text or code) | Why it matters | Effort |
|---|---|---|---|---|---|
| M1 | Services intro line 798 | Vague opening | See section 5, opening paragraph | Phrase plus key facts up front | S |
| M2 | About section line 903 | No roads, no postcodes. Competitors name the A720, A1, A7 and M8 | `We know the A720 City Bypass, the A7 through Gilmerton and the A1 out to Musselburgh as well as we know our own street. We cover Gilmerton, Liberton, Morningside, Leith, Portobello, Musselburgh, Dalkeith, Bonnyrigg, Loanhead, Penicuik and everywhere in between.` (**confirm roads with client, Q9**) | Local relevance | S |
| M3 | Heading levels | `h2` jumps to `h4` in the features list (PageSpeed "heading-order") | Change the three `<h4>` (Rapid Response, Competitive Pricing, Fully Insured) to `<h3>` with the same class/styles | Accessibility and a clean outline | S |
| M4 | Colour contrast | PageSpeed flags low-contrast text (grey `#64748b` labels on dark navy) | Lift those labels to the existing `#94a3b8` token. That's already in the palette, so the scheme doesn't change | Readability outdoors on a phone | S |
| M5 | Missing social image | No `og:image`, so shared links have no picture | `<meta property="og:image" content="https://steviewoodrecovery.com/public/images/social/og-image-1200x630.jpg">` made from the hero photo | Better WhatsApp / Facebook shares | S |
| M6 | Tracking | No GA4 and no call tracking | Add GA4 with a `click_to_call` event on every `tel:` link (needs a GA4 property, see section 7) | Without it you can't prove the audit worked | S |
| M7 | Prices | No price signal at all. Competitors show "from £79" or "£0 call-out" | One line under the services: `No call-out fee. We give you a fixed price on the phone before the truck leaves.` (**only if true, Q7**) | Biggest worry for a stranded driver, and a common AI-answer question | S |
| M8 | Legal popups | "Last updated January 2024", © 2024 | Update the dates when the email fix goes in. Footer: `© 2026` | Freshness and trust | S |

### Low

| # | Page or file | What's wrong | Change to (exact text or code) | Why it matters | Effort |
|---|---|---|---|---|---|
| L1 | `<head>` line 8 | `meta keywords` (Google ignores it) | Remove | Tidy, and it shows the keyword list to competitors | S |
| L2 | Site root | No `llms.txt` | Short plain-text summary: business, area, services, phone, hours | Cheap extra for answer engines | S |
| L3 | Gallery dots | 12px tap targets (Google suggests 24px or more) | Pad the dot buttons to 24×24 and keep the 12px visual dot | Easier to tap | S |
| L4 | Carousels | Auto-rotate never stops, no reduced-motion support | Pause on hover/focus, and respect `prefers-reduced-motion` | Accessibility | S |
| L5 | Area pages (later) | One page only | After the FAQ is done, consider 2–3 real area pages (e.g. Midlothian, Musselburgh/East Lothian) **only with unique content** (real jobs, local roads). No copy-paste city pages | Reach beyond the city without spam | L |
| L6 | `README.md` | Describes a layout that doesn't exist (`logo.svg`, contact form) | Rewrite to match the real repo and the new image folders | Easier for whoever edits next | S |

### Checked and fine (no change needed)
- `http://` and `www.` both redirect (301) to `https://steviewoodrecovery.com/` ✓
- Canonical is `https://steviewoodrecovery.com/` and Google agrees ✓
- No `noindex` anywhere. Search Console says **"Submitted and indexed"**, last crawled 11 Oct 2026, crawled as mobile ✓
- All text is in the HTML, so it shows without JavaScript ✓
- Google verification file present. Bing site verified ✓
- `/index.html` is a duplicate but points its canonical at `/`, and Google hasn't picked it up ✓

### Not recommended
- **A separate `/car-recovery-edinburgh/` page.** With one homepage, it would compete with itself.
- **Dozens of auto-generated suburb pages** like the national sites. Google's spam rules target exactly that.
- **Changing the hero gradient text or colours.** You asked to keep the look.

---

## 7. Things I must do by hand

**Google Search Console** (search.google.com/search-console, property `https://steviewoodrecovery.com/`)
- [ ] After the sitemap (H1) goes live: **Sitemaps** → enter `sitemap.xml` → Submit.
- [ ] After the title/H1 changes go live: **URL Inspection** → paste `https://steviewoodrecovery.com/` → **Request indexing**.
- [ ] Add a **Domain property** too (`sc-domain:steviewoodrecovery.com`, verified by a DNS TXT record). It catches www/http versions in one report.
- [ ] Check **Settings → Users** and add the client as Owner (it's his business).
- [ ] Check **Enhancements / Review snippets** after H5. The warning should clear.

**Bing Webmaster Tools** (bing.com/webmasters)
- [ ] **Sitemaps** → Submit `https://steviewoodrecovery.com/sitemap.xml`.
- [ ] **URL Submission** → submit the homepage after changes.
- [ ] Turn on **IndexNow** (Settings), so changes reach Bing (and ChatGPT search, which uses Bing) faster.
- [ ] Claim **Bing Places for Business** and import from the Google Business Profile.

**Google Business Profile** (business.google.com)
- [ ] **G1, map check:** on a phone, in Edinburgh, signed out (or in a private tab), search "car recovery edinburgh", "car recovery near me" and "breakdown recovery edinburgh". Screenshot the top 3 map results and where Stevie appears. Do this from Gilmerton, the city centre and Leith if you can.
- [ ] Primary category: **Towing service**. Check whether "Vehicle recovery service" or similar is offered as a secondary category.
- [ ] Business name exactly `Stevie Wood Recovery` (no keywords added, which breaks Google's rules).
- [ ] Hours: Open 24 hours, every day.
- [ ] Description: starts with `Family-run car recovery in Edinburgh, 24 hours a day.` then the services and areas.
- [ ] Services list: Car recovery, Breakdown recovery, Towing, Jump start, Accident recovery, Wrong fuel recovery.
- [ ] Service areas: Edinburgh, Midlothian, East Lothian, West Lothian.
- [ ] Website: `https://steviewoodrecovery.com/`. Phone: 07934 015448.
- [ ] Upload the 7 real truck photos from the site, then add 1–2 new ones a week.
- [ ] Set up a review link (Ask for reviews) and send it to every customer by WhatsApp after each job. Aim for 4+ new reviews a month. Reply to every review.
- [ ] Post a weekly update (a job photo plus one line).
- [ ] Send me the profile's share link (for schema `sameAs` / `hasMap`).

**Google Cloud / GA4 (for future measurement)**
- [ ] Create a GA4 property, add the service account `…@level-one-seo.iam.gserviceaccount.com` as Viewer, and enable the "Google Analytics Admin API" and "Google Analytics Data API" in the Cloud project.

---

## 8. Questions for the client

*Hi Stevie, a few quick questions so we can get the website to the top of Google. Short answers are fine.*

1. How many years have you been doing recovery? Roughly how many jobs a year?
2. What trucks do you run (e.g. 3.5t flatbed, 7.5t)? Do you do vans, 4x4s, motorbikes, classic cars, or anything that can't roll (e.g. no wheels, locked)?
3. What is the right email address for customers? Does `info@steviewoodrecovery.co.uk` still work? Do you own the .co.uk web address?
4. Please send links to your Facebook, Instagram and Google Business Profile.
5. Is the 40-minute average arrival time still accurate? Is it faster in some areas?
6. Are the 4 reviews on the website real customer reviews? Can we use real ones from Google with first name and area?
7. How do you price? (Call-out fee? Fixed quote on the phone? Rough starting price for a local tow?) Is it OK to show a "from £…" price?
8. How can people pay? (Card on the spot, cash, bank transfer?)
9. Which roads do you cover most (A720 bypass, A1, A7, M8, M9…)? Any areas you *don't* go to?
10. Do you work with insurance companies or accident management firms?
11. Do you hold any accreditations or memberships (e.g. IVR, RoSPA, PAS 43, trade association)? How much public liability / goods-in-transit cover do you have?
12. Do you do planned moves too (garage runs, auction collections, car transport), or mostly emergencies?
13. Is it just you, or do others drive too? Can we name them on the site?
14. A good recent job story we could tell (with permission), e.g. a 3am rescue on the bypass?

---

## 9. Check again in 4 to 6 weeks

| What to measure | Where | What "better" looks like |
|---|---|---|
| Position for "car recovery edinburgh", "vehicle recovery edinburgh", "car towing edinburgh", "breakdown recovery edinburgh" | Search Console → Performance → Queries (last 28 days) | "car recovery edinburgh" moves from ~24 into the top 10 |
| Impressions and clicks to the homepage | Search Console → Performance | Steady rise (only ~29 a day now ⚠) |
| Indexing and sitemap status | Search Console → Pages, Sitemaps | Sitemap "Success", page "Indexed" |
| Mobile speed (LCP) | pagespeed.web.dev, mobile | LCP under 2.5s (now 11.5s) |
| Phone layout | Your own phone + PageSpeed screenshot | No sideways scrolling |
| Map pack position | Repeat check G1 | Stevie in the top 3 for south Edinburgh |
| Calls and website clicks from the Business Profile | GBP → Performance | Rising month on month |
| Number of Google reviews | GBP | +4 or more a month |
| Bing queries | Bing Webmaster → Search Performance | First data appears (none yet) |
| Calls from the site | GA4 `click_to_call` event (once M6 is done) | A real number to report to the client |

---

## 10. Extra: design review (Awwwards skill, "preserve" mode)

You asked to keep the colours and overall look. The Awwwards skill calls this **preserve mode**: fix what's broken and polish, without a redesign. Nothing here changes the colour scheme, the logo, the section order or the copy voice.

**Fix first (broken on real devices):**

| # | What | Fix | Devices |
|---|---|---|---|
| D1 | Stats + gallery sections overflow on phones (same cause as C2) | C2 | Every phone, and tablets under 992px |
| D2 | Hero name cut off (C3) | C3 | Phones |
| D3 | Gallery circle images are fixed at 450/600px in the inline styles | Fixed by C2. Also set `max-width: 100%` and `aspect-ratio: 1` on `.gallery-image-container` | Phones, small tablets |
| D4 | `background-attachment: fixed` on the hero | Already turned off under 768px. Also turn it off for `(hover: none)`, because iPads stutter with it | iPad |
| D5 | Header container 586px wide on phones | Fixed by C2. Re-test at 320/375/390/768/1024/1440 | Phones |

**Polish (same look, more finished):**

| # | What | Change |
|---|---|---|
| P1 | Spacing rhythm | Sections use mixed padding (80, 100 and 120px). Put them on one scale (e.g. 96px desktop, 64px mobile) so the page feels calmer |
| P2 | Hero on mobile | Make "Call Now" full-width and sticky at the bottom of the screen on phones (same purple button). A stranded driver should never have to scroll to call |
| P3 | Motion | Keep the ring pulse and laser line, but add `prefers-reduced-motion` support and pause the carousels when they're off-screen. Lighter and kinder |
| P4 | Images | Fixed width/height on every image so nothing jumps while loading. Lazy-load everything below the hero |
| P5 | Gallery | On phones, show the real photos as swipeable cards instead of a fading 300px circle. On desktop, keep the circle |
| P6 | Focus states | Visible focus outline (accent colour) on buttons and links for keyboard users |
| P7 | Assets | Don't generate new pictures. The real truck photos are better than anything generated. If you want more, here's a shot list for Stevie's phone: the truck at night with lights on, Stevie loading a car (face or hands), the truck on the bypass, a van on the bed |

**Before any design work starts**, the Awwwards process needs 2–3 reference sites or screenshots you (or Stevie) like, and *what* you like about them. If you'd rather skip that, tell me to carry on without references and I'll stick strictly to D1–D5 and P1–P7.

---

## 11. Extra: image folder restructure

Today all images sit in one `images/` folder, the hero photo has a random name (`b0gd6vme9drmy0cw14w8eqw7t8_result_0.jpg`), and the gallery is loaded from github.com links instead of the site itself.

**Proposed:**

```
public/
  images/
    README.md                       ← "how to swap a photo" in 5 steps
    brand/
      logo.jpg
    hero/
      hero-porsche-on-recovery-truck.webp        (desktop, ~1920px)
      hero-porsche-on-recovery-truck-mobile.webp (~900px)
    gallery/
      01-ford-ranger-breakdown-recovery.webp
      02-mercedes-vito-van-recovery.webp
      03-range-rover-sport-transport.webp
      04-iveco-daily-van-recovery.webp
      05-land-rover-discovery-accident-recovery.webp
      06-luton-box-van-recovery.webp
    social/
      og-image-1200x630.jpg
css/            (unchanged, plus new components.css from C2)
index.html
```

- **To change a photo:** drop a new file into the right folder with the **same name**, and the site picks it up. No code changes.
- Every path in `index.html` and `hero.css` becomes relative (`public/images/...`), so nothing depends on github.com.
- The old `images/` folder is removed in the same change. Nothing outside this repo links to it (only the site itself, via github.com URLs that this change replaces).
- Risk: low. Rollback: revert the commit.

---

## How do you want to handle these?

I can **apply everything approved**, do **critical and high only**, **walk through them one at a time**, or **just hand you this report**. Tell me the item numbers (e.g. "C1–C4, H1–H5, R1–R5, section 11") and I'll change only those, test the site on phone, tablet and desktop, show you the changes, and wait for your OK before pushing.

*Note: this site has no build step (it's plain HTML/CSS), so "run the build" will mean: check the HTML, then re-test with PageSpeed and phone/tablet/desktop screenshots.*
