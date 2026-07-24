# 🎨 AI Asset Prompt Library — Texas Deck Builders

Every image and video the site expects, with a ready-to-paste generation prompt.
The site works **immediately** with tasteful gradient placeholders (via
`SmartImage`), so you can build and preview first, then drop real files in one
at a time — the placeholders disappear automatically as files appear.

> **Where files go:** all paths below are relative to the `public/` folder.
> Export images as **`.webp`** (or `.jpg`/`.png` — rename to `.webp`), keep
> mobile hero < 100 KB and desktop hero < 300 KB.

---

## 0. Global Style Guide (paste into EVERY prompt for consistency)

Append this "house style" to each image prompt so the whole site feels like one shoot:

```
STYLE: warm, natural, photorealistic editorial photography. Golden-hour Texas
Hill Country light, soft long shadows, warm cedar and forest-green tones,
creamy highlights. Shot on a full-frame DSLR, 35mm lens, f/2.8, shallow depth
of field. Inviting, family-oriented, hands-on craftsman feel — NOT luxury, NOT
corporate, NOT stock-photo sterile. Realistic textures on wood grain. No text,
no watermarks, no logos, no distorted hands or faces.
```

**Negative prompt (for tools that support it):**
```
text, watermark, logo, cartoon, cgi, oversaturated, HDR halos, fisheye,
distorted proportions, extra fingers, plastic skin, cluttered, dark/underexposed
```

**Recommended tools:** Midjourney v6+, Google Imagen / Gemini, Flux, DALL·E 3,
or Adobe Firefly for images. Runway Gen-3, Luma Dream Machine, Kling, or Google
Veo for the hero video (all support **image-to-video** from a starter frame).

---

## 1. ⭐ HERO — Starter Image + Video (the signature moment)

### 1a. Hero STARTER IMAGE → `public/images/hero-poster.webp`
This is both the hero poster and the first frame of the hero video.

```
A stunning custom cedar and composite backyard deck at golden hour in Austin,
Texas. Multi-level deck with warm cedar planks, sleek black cable railing, and
a louvered pergola. A relaxed family scene: two adults and two kids gathered
around an outdoor dining table with string lights glowing overhead, drinks and
a cheese board on the table, gentle steam from a firepit nearby. Lush Hill
Country landscaping and live oak trees in the background, soft sun flare from
the low evening sun on the left. Aspirational but real and lived-in.
Wide 16:9 cinematic composition, camera low and slightly wide to show the deck
sweeping into the frame.
STYLE: [paste Global Style Guide]
```
Aspect ratio: **16:9** · Resolution: 1920×1080 or higher.

### 1b. Hero VIDEO PROMPT (image-to-video, uses 1a as the starter frame)
Feed the `hero-poster.webp` image into an image-to-video model with this motion prompt →
export **`public/videos/hero.mp4`** (and a cropped 9:16 or square **`hero-mobile.mp4`**).

```
Slow, smooth cinematic push-in across the deck at golden hour. The camera
glides forward and slightly upward, revealing the length of the cedar deck as
warm string lights twinkle and the firepit flames flicker gently. Subtle
breeze moves the leaves of the live oaks; the family laughs and relaxes
naturally. Soft lens flare drifts as the sun sinks. Dreamy, warm, unhurried —
8–12 seconds, seamless loop, no camera shake, no fast cuts. 24fps, filmic.
```
- Duration: **8–12s**, muted, set to loop. Desktop autoplays; mobile falls back to the poster.
- Keep it under ~6 MB for fast LCP. Export H.264 MP4.

> If you don't make a video, that's fine — the site shows `hero-poster.webp`
> automatically. The video only swaps in if `videos/hero.mp4` exists.

---

## 2. Service Images (5) → `public/images/services/`

Use the same Global Style. Each is a 4:3 landscape hero for that service.

| File | Prompt subject |
|---|---|
| `deck-building.webp` | Freshly built multi-level cedar deck with hidden fasteners and cable railing, a carpenter's hand brushing sawdust off a board, tools resting nearby, golden light. |
| `deck-repair.webp` | Close-up of skilled hands replacing a weathered deck board with a bright new cedar plank, drill driver in frame, old vs new wood contrast, craftsmanship detail. |
| `patios.webp` | Natural flagstone paver patio with a gas firepit and built-in bench seating, cozy outdoor rug and lounge chairs, warm evening ambiance, deck steps leading down to it. |
| `pergolas.webp` | Elegant freestanding cedar pergola with adjustable louvers casting striped shadows, hanging café lights, potted plants, blue Texas sky turning gold. |
| `fencing.webp` | Modern horizontal cedar slat privacy fence with black steel posts, clean lines, manicured lawn, matching the deck stain, late-afternoon sun. |
| `services-hero.webp` | Wide overhead-ish view of a beautiful finished backyard combining a deck, pergola, and patio — the "everything we do" shot. |

---

## 3. Lifestyle Images (Services & About) → `public/images/`

Warm, inclusive, "real people's lives" — not luxury fantasy.

| File | Prompt subject |
|---|---|
| `about-hero.webp` | A friendly crew of carpenters on a deck job site mid-build, smiling, tool belts on, morning light — authentic and hands-on. |
| `cta-deck-evening.webp` | A gorgeous finished deck at dusk with warm string lights and a firepit glowing, empty and inviting, wide cinematic 16:9 — used behind call-to-action banners. |
| `portfolio-hero.webp` | Elevated golden-hour shot of a dramatic multi-level hillside deck overlooking the Texas Hill Country. |
| `reviews-hero.webp` | A happy family relaxing together on their new deck, laughing, coffee mugs, morning light — the "customer happiness" shot. |
| `contact-hero.webp` | Close, warm shot of a friendly contractor (Duke) shaking hands with homeowners on a finished deck, genuine smiles. |

Optional extra lifestyle shots you can sprinkle in later: *morning coffee on a
finished deck*, *evening entertaining with family*, *kids playing on a deck*.

---

## 4. Before / After Project Pairs (16 projects) → `public/images/projects/`

Each project needs **two** files: `{slug}-before.webp` and `{slug}-after.webp`.
The BEFORE should look like a plain/empty/tired yard; the AFTER is the finished
build — **same camera angle and framing** so the slider comparison lands.

**Before template:**
```
A plain, unremarkable suburban Austin backyard BEFORE renovation: patchy grass
or bare dirt, [existing condition], no deck, overcast flat lighting, wide angle
from the back of the house looking out. Realistic, slightly dull.
STYLE: photorealistic real-estate photo (keep it plain and honest).
```
**After template:**
```
The SAME backyard AFTER renovation, identical camera angle and framing, now
featuring [project description]. Golden-hour light, beautifully landscaped,
inviting. STYLE: [paste Global Style Guide]
```

Fill `[…]` per project:

| slug | AFTER description | BEFORE condition |
|---|---|---|
| `circle-c` | 1,000 sq ft multi-level cedar deck with a louvered pergola and integrated lighting | sloped, unusable grassy yard |
| `westlake` | 820 sq ft grey composite deck with black cable railing | old cracked concrete patio |
| `lakeway` | dramatic 3-tier ipe hardwood hillside deck with steel substructure and lake views | steep bare hillside |
| `cedar-park` | flagstone paver patio with gas firepit and built-in bench seating | flat empty lawn |
| `dripping-springs` | freestanding 16x20 cedar pergola with fans over a seating area | open patch of yard with a couple chairs |
| `round-rock` | horizontal cedar slat privacy fence with steel posts and a custom gate | old leaning chain-link fence |
| `bee-cave` | composite deck with a stone outdoor kitchen and covered dining area | plain backyard with a small grill |
| `south-austin` | restored and re-stained cedar deck looking brand new | weathered grey deck with warped boards |
| `steiner-ranch` | wraparound composite pool deck, slip-resistant, around a pool | bare concrete pool surround |
| `mueller` | low modern floating ipe deck with hidden fasteners and a bench | small plain grass yard |
| `hutto` | covered cedar deck with a standing-seam metal roof and fans | uncovered small patio |
| `georgetown` | wraparound porch-style composite deck with turned railing | bare side yard along the house |
| `pflugerville` | paver patio with an attached cedar pergola and string lights at night | empty gravel area |
| `manor` | simple clean pressure-treated pine deck with stairs and railing | muddy back door step |
| `leander` | elevated second-story deck with steel stringers and dry space beneath | tall blank two-story back wall |
| `buda` | sleek steel-framed horizontal cedar fence with an automated gate | old wooden privacy fence, worn |

> Tip: generate the AFTER first, then use your tool's *edit / img2img* on that
> image with "remove the deck, restore to plain yard" to get a perfectly
> matched BEFORE frame.

---

## 5. Team Portraits (5) → `public/images/team/`

Authentic, friendly, natural light. Real headshots are ideal — use AI only as placeholder.

| File | Prompt subject |
|---|---|
| `duke.webp` | Friendly 40s male business owner in a casual work shirt on a deck job site, warm confident smile, arms crossed, tool belt. |
| `duke-portrait.webp` | Vertical 4:5 environmental portrait of the same owner kneeling on a half-built cedar deck, holding a level, golden light — hero portrait. |
| `carlos.webp` | Experienced male lead carpenter, 40s, tool belt, measuring tape, genuine smile on a deck. |
| `jesse.webp` | Approachable male project manager, 30s, clipboard/tablet, polo shirt, friendly. |
| `marta.webp` | Female design consultant, 30s, holding rolled-up plans, warm smile, deck backdrop. |

Format: vertical **4:5**. STYLE: natural portrait photography, soft golden light, real and unposed.

---

## 6. Google Review Avatars (optional) → `public/images/reviews/`

`amanda.webp`, `marcus.webp`, `sarah.webp`, `delgado.webp`, `bill.webp`,
`priya.webp`, `erica.webp`, `foster.webp` — friendly, diverse customer
headshots (square). These are optional; the widget shows tasteful initials if
missing. If you connect **live** Google reviews (see README), real reviewer
photos load automatically and these aren't needed.

---

## 7. Favicon / Logo (optional) → `app/icon.png`

```
A minimal, modern logo mark for "Texas Deck Builders": three horizontal deck
planks forming a subtle "T", deep forest green on a cream background, clean
geometric, flat vector, no text. 512x512, centered, generous padding.
```

---

## Production checklist for assets
- [ ] Compress everything (squoosh.app / TinyPNG) → WebP.
- [ ] Hero video < 6 MB, muted, looping, H.264 MP4.
- [ ] Before/after pairs use the **same** camera angle.
- [ ] Descriptive, human alt text is already wired in code — no action needed.
- [ ] Swap the AI team photos for real ones before launch (trust matters).
```
