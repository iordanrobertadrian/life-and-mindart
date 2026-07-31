<div align="center">

# lifeandmindart.com

**Ceciu L. Ramona — Cabinet Individual de Psihologie**

Bilingual (RO/EN), statically generated, no CMS subscription, no WordPress.

Built and maintained by **[iWeb Digital](https://www.iweb-digital.ro)**.

[![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-087EA4?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&logoColor=white)](https://life-and-mindart.vercel.app)

**Live preview → [life-and-mindart.vercel.app](https://life-and-mindart.vercel.app)**

</div>

---

## Quick start

```bash
npm install
cp .env.example .env.local     # fill in what you have; nothing is required to run locally
npm run dev                    # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload. |
| `npm run build` | Production build. Fails on any type error. |
| `npm start` | Serves the production build. |
| `npm run lint` | ESLint (Next core-web-vitals + TypeScript rules). |
| `npm run typecheck` | `tsc --noEmit`. |

Node 20.9 or later.

---

## What this is

A rebuild of a WordPress site that took 12.8 s to load, blocked 65 resources on every visit
and returned a 404 for its own sitemap. Everything here is static HTML generated at build
time: no database, no plugins, no monthly licence, nothing that can break on its own.

**The copy is the client's, word for word.** Every sentence on the Romanian side is
transcribed from the original lifeandmindart.com — nothing was rewritten, shortened or
invented. `src/content/en.ts` is a translation of that same source. If a page needs new
wording, it comes from the client.

### Measured against the old site

| | Old site | This build |
|---|---|---|
| Performance (Lighthouse, mobile) | 56 | **92 – 95** |
| Accessibility | 95 | **100** |
| Best practices | 71 | **100** |
| SEO | 100 | **100** |
| Largest Contentful Paint | 12.8 s | **2.9 – 3.4 s** |
| Network requests | 216 | **36** |
| Page weight | 1 002 KB | **454 KB** |
| Blocked resources (mixed content) | 65 | **0** |
| `sitemap.xml` | 404 | present, both languages |
| Favicon / share image / touch icon | missing | all present |

Lighthouse models a 455 ms TTFB from a local server; on a CDN the real figure lands well
under the 2.5 s target. The remaining performance points are the two web fonts — self-hosted,
subset and single-weight already.

---

## Architecture

```
content/                  Markdown the client can edit
  articles/{ro,en}/       Publications
  legal/{ro,en}/          Privacy policy
public/images/            Photographs, carried over from the old site
src/
  app/[locale]/           Every page. `[locale]` is the only root segment.
  components/
    brand/                Logo, signature
    layout/               Header, footer, language switcher
    sections/             Page sections (hero, training, testimonials, …)
    site/                 Stateful widgets (forms, cookie consent, analytics)
    ui/                   Primitives (Button, Section, Container, Reveal, …)
  content/                Typed copy: ro.ts, en.ts, services.ts, events.ts,
                          testimonials.ts, programmes.ts, site.ts
  lib/                    Routing, markdown, SEO, mail, consent
  proxy.ts                Legacy 301s + locale rewrite (Next 16's renamed middleware)
```

### URLs and languages

Romanian is the default and lives at the root; English is prefixed **and translated**:

| Romanian | English |
|---|---|
| `/` | `/en` |
| `/despre` | `/en/about` |
| `/servicii/hipnoterapie` | `/en/services/hypnotherapy` |
| `/evenimente/workshop-biorezonanta` | `/en/events/bioresonance-workshop` |

There is exactly **one** page component per route. `src/proxy.ts` rewrites the public English
path onto the canonical Romanian folder name, and `src/lib/i18n.ts` is the single source of
truth for both directions — add a section there and the nav, sitemap, `hreflang` and language
switcher all follow.

`ro.ts` and `en.ts` both implement the `Dictionary` interface, so **the build fails if a
translation goes missing**. The two languages cannot drift apart.

### Nothing is lost from the old site

`src/lib/legacy-redirects.ts` maps every URL the WordPress site ever had to its new home and
serves it as a **301**. Verify after deploy:

```bash
curl -sI https://lifeandmindart.com/psihoterapie | head -3   # → 301 → /servicii/psihoterapie
curl -sI https://lifeandmindart.com/about | head -3          # → 301 → /despre
```

---

## Deployment

Hosted on **Vercel**, deployed from `github.com/iordanrobertadrian/life-and-mindart`.
Push to `main` deploys production; every other branch gets a preview URL.

| | |
|---|---|
| Current deployment | <https://life-and-mindart.vercel.app> |
| Production domain (once DNS moves) | <https://lifeandmindart.com> |

The Vercel project must use the **Next.js** framework preset. With the preset left on *Other*,
Vercel serves `public/` as a plain static folder: the images answer 200 and every route 404s.

### Environment variables

Set these in *Project → Settings → Environment Variables* (see `.env.example`):

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical origin. Used for sitemap URLs, Open Graph and structured data. |
| `RESEND_API_KEY` | for the forms | Create at [resend.com](https://resend.com) and verify the domain. |
| `CONTACT_FROM_EMAIL` | for the forms | An address on the verified domain, e.g. `website@lifeandmindart.com`. |
| `CONTACT_TO_EMAIL` | no | Where messages land. Defaults to `psy.office8@gmail.com`. |
| `NEXT_PUBLIC_GA_ID` | no | Google Analytics 4. Loads **only** after explicit cookie consent. |

> Without `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` the site builds and runs, but the contact
> and workshop forms cannot send.

### DNS

Point the apex `lifeandmindart.com` at Vercel and set `www` as a **redirect to the apex**, not
as a second origin — the audit measured 3 seconds lost on every visitor arriving via `www`
because the old host chained the redirect.

### After launch

- Submit `https://lifeandmindart.com/sitemap.xml` in Google Search Console.
- Send the link to yourself on WhatsApp — the share card should render.
- Create the **Google Business Profile** with a real address. It is the one thing this
  codebase cannot do for the practice.

---

## Editing content

No admin panel, no password, no monthly fee — the text lives in ordinary files.

- **A new publication** → add a markdown file to `content/articles/ro/`. It appears in the
  listing, the sitemap and the "recent posts" list automatically.
- **Page text** → `src/content/ro.ts` and the matching entry in `en.ts`.
- **Services, events, testimonials** → `src/content/services.ts`, `events.ts`,
  `testimonials.ts`.
- **Phone, e-mail, address, social** → `src/content/site.ts`, the only place they are written.

Commit the change and Vercel rebuilds in about a minute.

---

## Known gaps

Three things could not be carried over, because the old site never published them:

1. **A third publication.** "NEUROCINEMA/TICS, THE (BRAIN)CHILD OF FILM AND NEUROSCIENCE"
   appears in the old sidebar but its body was never available. Drop the markdown into
   `content/articles/ro/` and it appears everywhere automatically.
2. **The workshop's four counters** (Evenimente, Ani de practică, Cursuri biorezonanță,
   Terapii). The original animates them up from zero and never states the targets, so the row
   is not rendered rather than shown as zeros.
3. **Dates.** The workshop date (10 Iunie, 19:00) and the course timetable (25–28 Mai) are
   carried over exactly as the old site had them. Both are past — refresh them in
   `src/content/ro.ts` / `en.ts`.

---

## Maintenance

Built and maintained by **iWeb Digital** — [www.iweb-digital.ro](https://www.iweb-digital.ro) ·
contact@iweb-digital.ro · 0739 663 005.

The footer credit is a single line: `credit` in `src/content/ro.ts` / `en.ts` for the wording,
`site.builder` in `src/content/site.ts` for the name and the link.

---

## Notes for whoever works on this next

- **Design tokens live in `src/app/globals.css`.** Colours, the fluid type scale, radii,
  shadows and easing are `@theme` variables. No component invents its own colour.
- **`Reveal` has an `immediate` prop.** Anything in the first viewport must use it. Animating
  content that is already on screen costs roughly 1.5 s of LCP — measured, not guessed.
- **Watch out for conflicting Tailwind `display` utilities.** There is no `tailwind-merge`
  here; passing `className="hidden sm:block"` to a component whose base class already sets
  `inline-flex` resolves by stylesheet order, not argument order. Wrap it in a `div` instead.
- **The forms use Server Actions**, not API routes. Validation messages come from the same
  dictionary as the rest of the UI, so they are translated automatically.
- **The publications are served in Romanian in both languages.** They quote the DSM-5, LeDoux
  and Spielberger from their Romanian editions; translating those passages back into English
  would misquote the sources. `src/lib/content.ts` falls back to the Romanian files when a
  language has none of its own.

---

<div align="center">
<sub>© Ceciu L. Ramona — Cabinet Individual de Psihologie. All rights reserved.<br>
Design and development by <a href="https://www.iweb-digital.ro">iWeb Digital</a>.</sub>
</div>
