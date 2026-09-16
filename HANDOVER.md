# Santa'lana Builders website

Next.js (App Router) static export, the same stack as Rankify's other client sites.
Converted 1:1 from the original static HTML on 17 Sep 2026: every page keeps the same
markup, classes, copy and stylesheet, and the homepage was checked pixel for pixel
against the old build.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export in out/
```

Every push to `main` deploys to https://rankify-ops.github.io/santalana-builders/ through
`.github/workflows/deploy.yml` (basePath `/santalana-builders`). At domain cutover, remove
`NEXT_PUBLIC_BASE_PATH` from the workflow and add `public/CNAME` in the same commit.

The client preview lock (`src/components/PreviewGate.tsx`) sits over the site. Staff view,
never locked: `/santalana-builders/staff-153de3/`. Remove the `<PreviewGate>` line in
`src/app/layout.tsx` once Stefan has signed off.

## Pages

| File | Purpose |
|---|---|
| `src/app/page.tsx` | Homepage. Hero with an inline enquiry form, trust bar, intro, six capability cards, featured projects, quote band, why-choose-us, five step process, credentials, service areas, closing CTA. |
| `src/app/projects/page.tsx` | Six project write ups with galleries, plus a list of builds still awaiting photography. |
| `src/app/services/page.tsx` | Six services with anchors so the homepage cards and footer can deep link into them. |
| `src/app/about/page.tsx` | Stefan and the company, safety, why choose us, capabilities, memberships. |
| `src/app/contact/page.tsx` | Contact details, a longer enquiry form that also asks for suburb and project stage, and a location card. |
| `src/app/site.css` | Whole design system. Tokens are at the top under `:root`. |
| `src/lib/site-behaviour.js` | Mobile nav, sticky header, dock, scroll reveal, form handling, footer year. Run once after hydration by `src/components/SiteScripts.tsx`. |
| `public/assets/img/` | All photography and brand images. |
| `PHOTO-LIBRARY.md` | Every photo, where it came from, and a written description of each one. |

## Where the content came from

* **Copy** is drawn from the capability statement PDF. Stefan's own wording has been kept
  as his voice wherever it worked on a web page.
* **Photos**, all 37 of them, were extracted from inside that same PDF. They are the
  original professional shots at 900 to 4000px. Details in `PHOTO-LIBRARY.md`.
* **Instagram** turned out not to be usable as an image source. The public profile only
  exposes 640px Reel cover thumbnails and the full resolution grid sits behind a login,
  so the PDF images are significantly better. What Instagram *did* give us is the project
  list: the story highlights name Moonee Ponds, Roseberry, Head St, St Leonards,
  Warranilla, Brunel, Combermere and Placadena. The last five have no photography here.
  If you want those images on the site, the quickest route is asking Stefan to send the
  original files or share the folder from his photographer.
* The four addresses Stefan listed map onto projects already in the PDF, except Moonee
  Ponds: 72 Head Street is the Brighton build, 15 Karella Crescent is Mornington,
  38 Warranilla Avenue is Rosebud, and 11 Park Crescent, Moonee Ponds is new.

## Before this goes live

**1. Confirm the registration numbers.** This is the one item I would not launch without
checking. The two sources disagree:

* Email signature: `DB-U 100456` / `CB-U 100040`
* Capability statement PDF: `CCB-U 100042` / `CDB-U 100495`

The site currently shows the email signature pair, on the assumption it is the more
recent, and it appears in the utility strip, the credentials list and the footer of every
page. Publishing a wrong builder registration number is a compliance problem, not a
typo, so please have Stefan confirm against the VBA register. Search for the strings
`DB-U 100456` and `CB-U 100040` to update them everywhere.

**2. Connect the forms.** There are five enquiry forms and none of them post anywhere
yet. Right now `site.js` validates the fields and then opens the visitor's mail client
with the enquiry pre-filled, so nothing is silently swallowed, but that is a stopgap
rather than the real thing. Pick a handler (Formspree, Netlify Forms, Basin, or a small
endpoint of your own), then in `site.js` replace the `mailto:` block inside
`handleSubmit` with a `fetch` POST. The forms already carry sensible `name` attributes
(`name`, `phone`, `email`, `interest`, `detail`, and on the contact page also `suburb`
and `stage`).

**3. There are no testimonials on the site.** Both reference sites lean heavily on
reviews, and it is the single biggest thing missing here. I deliberately left the section
out rather than filling it with invented quotes. Once Stefan sends real ones, a reviews
band between the projects grid and the quote band on the homepage is the right slot.

**4. Decide about the price guides.** The capability statement lists a price per square
for every project, from $30,000 to $60,000. I have left all of it off the public site,
since that is commercially sensitive and pins Stefan to numbers in front of competitors.
Worth a conversation before anyone adds it back.

**5. Master Builders logo.** The MBA marks in the PDF were JPEG 2000 files, which
browsers cannot decode, so the MBA credential is currently set as a text lockup beside
the HIA badge. Drop in a real PNG or SVG and swap the `.creds__logo-text` block for an
`<img>`.

## Smaller things worth knowing

* **The logo is white artwork on transparency.** There was no dark version in the PDF,
  so one was generated for the light theme (see Later additions). A proper dark master
  from Stefan's designer would still be better than a derived one.
* **Mornington is a render, not a photograph.** It is labelled "Under construction" on
  the homepage card, and the projects page notes it too. Swap in the finished
  photography and the walkthrough video when they land.
* **Service area lists** on the homepage, about and contact pages include suburbs beyond
  the six documented projects (Essendon, Hampton, Sandringham, Sorrento and others).
  Those are a reasonable read of where a South Melbourne builder works, but they are my
  inference, not something Stefan stated. Worth a quick confirm.
* **Images are already optimised.** Everything was capped at a 2000px long edge and
  re-encoded as progressive JPEG at quality 84, taking the library from 13.9MB to 5.1MB.
  If you want to go further, WebP versions with `<picture>` would roughly halve it again.
* **Accessibility.** Every image has real alt text, the forms have proper labels, there
  is a skip link, the mobile nav manages `aria-expanded` and closes on Escape, and the
  scroll reveal is disabled under `prefers-reduced-motion`. The reveal is also gated
  behind a `js-reveal` class so a failed script load cannot leave sections invisible.
* **No analytics or cookie banner** is installed. Nothing currently sets a cookie, so no
  banner is required as things stand. Adding GA4 changes that.
* `.claude/launch.json` is only there so the local preview server can start. It is not
  part of the site and does not need deploying.

---

## Later additions

**Typography.** Schibsted Grotesk throughout, one family. Hierarchy comes from weight
and tracking: headlines at 500 with tight negative tracking, small labels at 600 with
wide positive tracking. Nothing heavier than 600 on a heading. Montserrat at 800 was
replaced because heavy geometric type reads trade contractor rather than high end.

**Light and dark themes, dark by default.** The palette tokens carry a role rather
than a literal colour, so `--ink` always means strongest text and `--white` always means
raised surface, and both get redefined per theme. The dark palette sits on the base
`:root` and light is an explicit `[data-theme="light"]` override. The site opens dark
for every visitor regardless of their OS setting, since the brand itself is black. The
floating toggle writes the visitor's choice to `localStorage` under `slb-theme`, and a
tiny inline script in each `<head>` applies it before first paint so switching never
flashes. If you would rather follow the OS, the comment at the top of `site.css` has the
two-line change.

Two things to know if you extend the CSS:

* Bands that are dark in **both** themes (hero, page heroes, quote band, CTA, footer,
  stat bar, project tiles, the dark enquiry panel, the menu overlay) use `--band` and
  `--band-2`. Text on those must be a literal `#fff`, never `var(--white)`, or it goes
  dark on dark in dark mode. I hit exactly that bug and pinned 29 rules.
* `assets/img/brand/logo-dark.png` was generated from the supplied white artwork by
  flattening to luminance and remapping into a dark neutral ramp. It is what makes the
  light theme possible, since the original mark would vanish on a white header. A
  straight RGB inversion turns the silver gable brown, hence the luminance route.

**Contrast.** Checked by computing ratios from the token values rather than trusting
the browser. `--steel` moved from `#6e7479` to `#6a7075` because at 11 to 12px on the
alt section background it only reached 4.30 against the 4.5 AA threshold. The process
numerals got their own `--step-num` token: they were inheriting the hairline colour and
sat at 1.2:1 light and 1.4:1 dark, and are now 3:1, which is AA for text at that size.

**Full-screen menu.** The overlay unfolds with a `clip-path` inset and the links stagger
in on a per-item delay. The hamburger is two bars of unequal length with no frame, and
they even up and cross into an X when open. One catch worth remembering: the toggle
lives inside `.site-header`, whose `z-index: 100` trapped it under the overlay at 200,
so `body.nav-open` lifts the whole header to 210, strips it back to just the toggle and
pins it to the top to line up with the panel's own brand row.

**Floating dock.** Call and Consultation, plus the theme control. On a phone it becomes
a fixed bottom bar, which is what actually drives calls for a trade business, and the
body gets bottom padding so it never covers the end of the page.

**Licence strip.** The registration line stays in the desktop utility bar but is hidden
below 860px, where it reappears as its own strip under the hero.

**Navigation order** is Home, Projects, Services, About, Contact across the desktop nav,
the overlay and the footer.

One bug fixed along the way that is worth knowing about: `.btn { display: inline-flex }`
ties with the browser's `[hidden] { display: none }` on specificity and wins on source
order, so hiding a button with the `hidden` attribute did nothing. Three nowrap buttons
were sitting side by side and forcing the form 485px wide inside a 375px viewport, which
was the mobile layout break. There is now a global `[hidden] { display: none !important }`.
