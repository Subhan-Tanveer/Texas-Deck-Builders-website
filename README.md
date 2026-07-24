# Texas Deck Builders — Website

A high-conversion, fully-animated marketing site for **Texas Deck Builders LLC**
(Austin, TX). Built with Next.js App Router, GSAP scroll animation, and a warm
craftsman design system.

Rated 4.9★ · Handcrafted decks, patios, pergolas, fencing & repairs.

---

## Tech stack

| | |
|---|---|
| **Framework** | Next.js 16 (App Router, SSR, image optimization) |
| **UI** | React 19 |
| **Styling** | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| **Animation** | GSAP + ScrollTrigger + **ScrollSmoother** (inertia scroll, parallax) |
| **Email** | Nodemailer (quote form → Duke's inbox) |
| **Icons** | lucide-react |
| **Fonts** | Fraunces (display serif) + Inter (body) via `next/font` |
| **Deploy** | Vercel (recommended) |

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in values (optional for local dev)
npm run dev                  # http://localhost:3000
```

The site runs **immediately** — every image shows an on-brand gradient
placeholder until you add real files, so you can preview the full experience
before any assets exist.

```bash
npm run build && npm start   # production build
```

---

## Adding images & video

All the visuals and their exact filenames are documented — with ready-to-paste
AI generation prompts — in **[`AI_ASSET_PROMPTS.md`](./AI_ASSET_PROMPTS.md)**.

Drop files into `public/images/…` and `public/videos/…` using the filenames
listed there. Placeholders disappear automatically as real files appear. No
code changes needed.

- **Hero**: `public/images/hero-poster.webp` (+ optional `public/videos/hero.mp4`, `hero-mobile.mp4`)
- **Projects**: `public/images/projects/{slug}-before.webp` / `-after.webp`
- **Services / team / page heroes**: see the prompt library.

---

## Configuration

### Site details
Edit **`lib/site.ts`** — phone number, email, address, social links, rating,
service areas. Everything on the site reads from here.

> ⚠️ The phone number in `lib/site.ts` is a **placeholder** (`(512) 555-0142`).
> Replace it with Duke's real number before launch (it powers the click-to-call
> buttons site-wide).

### Content
- **Services** → `lib/services.ts`
- **Projects / portfolio** → `lib/projects.ts`
- **Testimonials** → `lib/testimonials.ts`

### Quote-form email (Nodemailer)
Set the SMTP vars in `.env.local` (see `.env.example`). Works with Gmail (app
password), SendGrid, Mailgun, SES, Resend, etc.

- **Not configured?** The form still works in dev — it logs the submission to
  the server console and returns success, so you can test the full flow.
- **Configured?** Each submission emails a formatted summary to `QUOTE_TO_EMAIL`
  with the customer's email as reply-to.

### Live Google reviews (optional)
The reviews widget shows curated reviews out of the box. To pull **live**
Google reviews:

1. Create a [Google Places API key](https://developers.google.com/maps/documentation/places/web-service/get-api-key) and enable **Places API**.
2. Find the **Place ID** for the Texas Deck Builders Google Business Profile
   ([Place ID finder](https://developers.google.com/maps/documentation/places/web-service/place-id)).
3. Add to `.env.local`:
   ```
   GOOGLE_PLACES_API_KEY=your_key
   GOOGLE_PLACE_ID=your_place_id
   ```
The `/api/reviews` route then returns live rating + latest reviews (cached 1h),
and the widget shows a "Live" badge.

> Note: Google's Places API returns up to 5 reviews. For a full, always-fresh
> wall of reviews with photos, a paid widget (Elfsight, Trustindex,
> Featurable) is a common drop-in alternative — embed it in `components/GoogleReviews.tsx`.

---

## Animation system (what's where)

Everything honors **`prefers-reduced-motion`** (all motion disabled cleanly).

| Effect | Component / mechanism |
|---|---|
| Site-wide inertia / smooth scroll | `SmoothScrollProvider` (ScrollSmoother, `smooth: 1.2`) |
| Parallax on hero & section backgrounds | `data-speed` attributes (ScrollSmoother `effects`) |
| Scroll-triggered section reveals | `Reveal` (IntersectionObserver) + `RevealStagger` (GSAP) |
| Headline word-by-word reveal | `SplitText` |
| Animated counters (0 → value) | `Counter` / `StatsBand` |
| Before/after slider | `BeforeAfterSlider` (drag/touch/keyboard, auto "peek") |
| Card hover lift | `ProjectCard`, `ServicesPreview`, `WhyUs` |
| Magnetic CTA buttons | `components/ui/Button` |
| Infinite marquee | `MarqueeStrip` |
| Mobile click-to-call | `ClickToCall` (pulsing, appears on scroll) |

---

## SEO & accessibility

- **Structured data** (`lib/schema.ts`): `GeneralContractor` + `AggregateRating`,
  `Service`, and `BreadcrumbList` JSON-LD injected per page.
- **Metadata**: unique title/description/OG per page; `sitemap.ts` + `robots.ts`.
- **Semantic HTML**, one `<h1>` per page, descriptive alt text throughout.
- **WCAG**: visible focus rings, keyboard-operable slider & nav, reduced-motion
  support, high-contrast forest/cream palette.
- Validate after adding real content: [Rich Results Test](https://search.google.com/test/rich-results).

---

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. Import into [Vercel](https://vercel.com/new) — it auto-detects Next.js.
3. Add the environment variables from `.env.local` in the Vercel dashboard.
4. Deploy. Every push to `main` redeploys automatically.

Set `NEXT_PUBLIC_SITE_URL` to the production domain so canonical tags,
`sitemap.xml`, and OpenGraph URLs are correct.

---

## Before-you-ship checklist

- [ ] Replace placeholder phone number in `lib/site.ts`
- [ ] Add real hero image/video + project before/after photos
- [ ] Swap AI team photos for real ones
- [ ] Configure SMTP and send a test quote → confirm Duke receives it
- [ ] (Optional) Wire live Google reviews
- [ ] Run `npm run build` — confirm no errors
- [ ] Lighthouse audit (Performance > 85, A11y 95+, SEO 100)
- [ ] Test on real mobile (click-to-call, slider touch, menu)
- [ ] Validate schema at search.google.com/test/rich-results
- [ ] Confirm `prefers-reduced-motion` disables animations

---

## Project structure

```
app/                # App Router pages + API routes
  page.tsx          # Homepage
  services/         # Services
  portfolio/        # Filterable before/after gallery
  about/            # Duke's story + team
  reviews/          # Google widget + case studies
  contact/          # Multi-step quote form + FAQ
  api/quote/        # Nodemailer email endpoint
  api/reviews/      # Google Places (live) / curated reviews
components/          # ~25 reusable animated components
lib/                # site config, content data, schema, hooks
public/             # images + videos (see AI_ASSET_PROMPTS.md)
```
