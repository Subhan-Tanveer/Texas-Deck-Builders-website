# 🎨 AI Asset Prompt Library — Texas Deck Builders

Everything visual the site can use, with a copy-paste prompt for each one.
For every **hero** you get a **① starter-image prompt** and a **② image-to-video
prompt** (feed the starter image + the video prompt into an image-to-video model
to make the looping clip). For every other spot you get a single image prompt.

The site works **immediately** with on-brand gradient placeholders, so build &
preview first, then drop real files in one at a time — placeholders vanish
automatically as files appear. **No code changes needed.**

> **Where files go:** paths are relative to the `public/` folder.
> Images → `.webp` (or jpg/png). Videos → `.mp4` (H.264).

---

## 0. How the hero video system works

Every page hero checks for its video file. **If the `.mp4` exists it plays
(muted, looping, autoplay); if not, it shows the still image; if that's missing
too, a branded gradient.** So the workflow per hero is:

1. Generate the **starter image** (prompt ①) → save as the hero's `.webp`.
   The site immediately uses it as the hero still + the video poster.
2. Feed that image + the **video prompt** (prompt ②) into an image-to-video
   tool → export the `.mp4` to the path listed → the hero upgrades to video.

**Video specs (all heroes):** 8–12 s · seamless loop · **muted** · 1920×1080
(16:9) · H.264 MP4 · keep under ~6 MB · **no on-screen text, no hard cuts, no
camera shake.** All motion is disabled automatically for `prefers-reduced-motion`
users (they see the still), so you never need a "reduced" version.

---

## 1. GLOBAL STYLE GUIDE — paste into EVERY prompt

Appending this "house style" to each prompt keeps the whole site looking like a
single photo shoot.

```
STYLE: warm, natural, photorealistic editorial photography. Golden-hour Texas
Hill Country light, soft long shadows, warm cedar and deep forest-green tones,
creamy highlights. Full-frame DSLR look, 35mm lens, f/2.8, shallow depth of
field, gentle film grain. Inviting, family-oriented, hands-on craftsman feel —
NOT luxury, NOT corporate, NOT sterile stock photography. Crisp realistic
wood-grain texture. No text, no watermarks, no logos, no distorted hands/faces.
```

**Universal negative prompt** (for tools that support one):
```
text, watermark, logo, cartoon, 3d render, cgi, oversaturated, HDR halos,
fisheye, distorted proportions, extra fingers, plastic skin, cluttered frame,
underexposed, blurry, low-res, deformed
```

**Suggested tools** — Images: Midjourney v6+, Google Imagen/Gemini, Flux,
DALL·E 3, Firefly. Image-to-video: Runway Gen-3, Luma Dream Machine, Kling,
Google Veo, Pika (all accept a starter frame + motion prompt).

---

## 2. PAGE HERO FILE MAP

| Page | Starter image → | Video → |
|---|---|---|
| Home | `images/hero-poster.webp` | `videos/hero.mp4` (+ `videos/hero-mobile.mp4`) |
| Services | `images/services/services-hero.webp` | `videos/services-hero.mp4` |
| Portfolio | `images/portfolio-hero.webp` | `videos/portfolio-hero.mp4` |
| About | `images/about-hero.webp` | `videos/about-hero.mp4` |
| Reviews | `images/reviews-hero.webp` | `videos/reviews-hero.mp4` |
| Contact | `images/contact-hero.webp` | `videos/contact-hero.mp4` |

---

## 3. HERO PROMPTS (starter image ① + video ②) — one per page

### 🏠 HOME — `hero-poster.webp` / `hero.mp4`
**① Starter image**
```
A stunning custom cedar-and-composite backyard deck at golden hour in Austin,
Texas. Multi-level deck with warm cedar planks and sleek black cable railing,
a louvered pergola overhead. A relaxed family of four gathered around an outdoor
dining table under warm string lights — drinks and a cheese board on the table,
a firepit glowing nearby. Lush Hill Country landscaping and live-oak trees
behind, soft sun flare from the low evening sun on the left. Aspirational but
lived-in and real. Wide 16:9 cinematic composition, camera low and slightly
wide so the deck sweeps into frame.
STYLE: [Global Style Guide]
```
**② Video (image-to-video from the starter frame)**
```
Slow cinematic push-in gliding forward and slightly up across the deck at golden
hour, revealing its length as warm string lights twinkle and the firepit flames
flicker. A gentle breeze moves the live-oak leaves; the family laughs and relaxes
naturally. Soft lens flare drifts as the sun sinks. Dreamy, warm, unhurried,
seamless loop. 24fps, filmic, no camera shake, no cuts.
```
> Also export a vertical/cropped `videos/hero-mobile.mp4` for phones.

### 🛠️ SERVICES — `services/services-hero.webp` / `services-hero.mp4`
**① Starter image**
```
A wide, beautiful finished backyard that combines everything Texas Deck Builders
does: a cedar deck flowing into a stone paver patio, a pergola with café lights,
and a matching horizontal cedar fence in the background. Golden-hour light, a few
lounge chairs, potted plants. Elevated three-quarter angle showing the full
outdoor living space. 16:9.
STYLE: [Global Style Guide]
```
**② Video**
```
Slow smooth dolly from left to right revealing the full outdoor living space —
deck, patio, pergola, fence — as café lights glow and shadows lengthen. Subtle
leaf movement and warm light shift. Calm, premium, seamless loop. No cuts, no
shake, 24fps.
```

### 🖼️ PORTFOLIO — `portfolio-hero.webp` / `portfolio-hero.mp4`
**① Starter image**
```
A dramatic elevated multi-level hillside cedar deck overlooking the Texas Hill
Country at golden hour, dark steel cable railings, a lone Adirondack chair facing
the view. Sweeping vista, warm sun on the horizon, cinematic and aspirational.
16:9, wide.
STYLE: [Global Style Guide]
```
**② Video**
```
Slow aerial-style forward glide over the hillside deck toward the sunset vista,
the horizon glowing, Hill Country trees swaying gently below. Majestic, calm,
seamless loop. 24fps, no cuts, no shake.
```

### 👷 ABOUT — `about-hero.webp` / `about-hero.mp4`
**① Starter image**
```
A friendly crew of carpenters on a deck job site mid-build in warm morning
light, tool belts on, one kneeling to fasten a cedar board, another carrying
lumber, all authentic and hands-on, smiling. Fresh-cut wood and tools around
them. Documentary feel, 16:9.
STYLE: [Global Style Guide]
```
**② Video**
```
Handheld-smooth observational shot: a carpenter drives a screw, sawdust drifts
in the morning light, another crew member walks past carrying a board. Genuine,
warm, workmanlike. Slight natural motion, seamless loop, 24fps, no hard cuts.
```

### ⭐ REVIEWS — `reviews-hero.webp` / `reviews-hero.mp4`
**① Starter image**
```
A happy family relaxing together on their brand-new deck in soft morning light —
parents with coffee mugs, kids playing, genuine laughter, a golden-retriever
nearby. Warm, joyful, real. Cedar deck with string lights, plants, cozy outdoor
furniture. 16:9.
STYLE: [Global Style Guide]
```
**② Video**
```
Gentle slow push-in on the family enjoying the deck — steam rising from coffee,
kids laughing, dog wagging, leaves swaying. Heartwarming and candid. Soft light,
seamless loop, 24fps, no cuts, no shake.
```

### 📞 CONTACT — `contact-hero.webp` / `contact-hero.mp4`
**① Starter image**
```
A warm, close shot of a friendly contractor (Duke, 40s, casual work shirt)
shaking hands with homeowners on a freshly finished cedar deck, genuine smiles,
a rolled-up plan under his arm. Soft golden light, trust and partnership.
16:9, medium shot.
STYLE: [Global Style Guide]
```
**② Video**
```
Subtle slow push-in as the handshake completes and everyone smiles and nods,
warm light glowing behind them, leaves moving softly. Friendly, reassuring,
seamless loop. 24fps, no cuts, no shake.
```

---

## 4. SERVICE IMAGES (5) → `public/images/services/`

4:3 landscape. Each is the feature image for that service.

| File | Prompt subject |
|---|---|
| `deck-building.webp` | Freshly built multi-level cedar deck with hidden fasteners and cable railing; a carpenter's hand brushing sawdust off a board, tools nearby, golden light. |
| `deck-repair.webp` | Close-up of skilled hands swapping a weathered grey deck board for a bright new cedar plank, drill-driver in frame, old-vs-new wood contrast. |
| `patios.webp` | Natural flagstone paver patio with a gas firepit and built-in bench seating, cozy rug and lounge chairs, warm evening ambiance, deck steps leading down. |
| `pergolas.webp` | Elegant freestanding cedar pergola with adjustable louvers casting striped shadows, hanging café lights, potted plants, sky turning gold. |
| `fencing.webp` | Modern horizontal cedar-slat privacy fence with black steel posts, clean lines, manicured lawn matching the deck stain, late-afternoon sun. |

Append the Global Style Guide to each.

---

## 5. LIFESTYLE & SECTION IMAGES → `public/images/`

| File | Prompt subject |
|---|---|
| `cta-deck-evening.webp` | A gorgeous finished deck at dusk with warm string lights and a glowing firepit, empty and inviting, wide 16:9 — sits behind call-to-action banners. |

Optional extras you can sprinkle in later (not referenced by code, but nice for
future blog/case-study pages): *morning coffee on a finished deck*, *evening
entertaining with family*, *kids playing on a deck*, *close-up of hands staining
cedar*.

---

## 6. PROJECT BEFORE/AFTER PAIRS (16) → `public/images/projects/`

Each project needs **two** files: `{slug}-before.webp` and `{slug}-after.webp`.
The BEFORE looks like a plain/empty/tired yard; the AFTER is the finished build —
**same camera angle & framing** so the drag-slider comparison lands.

**BEFORE template**
```
A plain, unremarkable suburban Austin backyard BEFORE renovation: [condition],
no deck, flat overcast lighting, wide shot from the back of the house looking
out. Realistic real-estate photo, slightly dull. No text, no watermark.
```
**AFTER template**
```
The SAME backyard AFTER renovation, identical camera angle and framing, now
featuring [after description]. Golden-hour light, beautifully landscaped,
inviting. STYLE: [Global Style Guide]
```

| slug | [after description] | [before condition] |
|---|---|---|
| `circle-c` | 1,000 sq ft multi-level cedar deck with louvered pergola & lighting | sloped, unusable grassy yard |
| `westlake` | 820 sq ft grey composite deck with black cable railing | old cracked concrete patio |
| `lakeway` | dramatic 3-tier ipe hillside deck with steel substructure & lake views | steep bare hillside |
| `cedar-park` | flagstone paver patio with gas firepit & built-in bench | flat empty lawn |
| `dripping-springs` | freestanding 16×20 cedar pergola with fans over a seating area | open patch of yard, a couple of chairs |
| `round-rock` | horizontal cedar-slat privacy fence with steel posts & custom gate | old leaning chain-link fence |
| `bee-cave` | composite deck with stone outdoor kitchen & covered dining | plain yard with a small grill |
| `south-austin` | restored & re-stained cedar deck looking brand new | weathered grey deck, warped boards |
| `steiner-ranch` | wraparound slip-resistant composite pool deck around a pool | bare concrete pool surround |
| `mueller` | low modern floating ipe deck with hidden fasteners & bench | small plain grass yard |
| `hutto` | covered cedar deck with standing-seam metal roof & fans | uncovered small patio |
| `georgetown` | wraparound porch-style composite deck with turned railing | bare side yard along the house |
| `pflugerville` | paver patio with attached cedar pergola & string lights at night | empty gravel area |
| `manor` | clean pressure-treated pine deck with stairs & railing | muddy back-door step |
| `leander` | elevated second-story deck with steel stringers, dry space beneath | tall blank two-story back wall |
| `buda` | sleek steel-framed horizontal cedar fence with automated gate | old worn wooden privacy fence |

> **Pro tip:** generate the AFTER first, then use your tool's *edit / inpaint /
> img2img* on that exact image with "remove the deck, restore to plain empty
> yard, keep same camera angle" to get a perfectly matched BEFORE frame.

---

## 7. TEAM PORTRAITS (5) → `public/images/team/`

Vertical **4:5**. Real photos are best for trust — use AI only as placeholder.

| File | Prompt subject |
|---|---|
| `duke.webp` | Friendly 40s male business owner in a casual work shirt on a deck job site, warm confident smile, arms crossed, tool belt. |
| `duke-portrait.webp` | Environmental 4:5 portrait of the same owner kneeling on a half-built cedar deck holding a level, golden light — used large on the About page. |
| `carlos.webp` | Experienced male lead carpenter, 40s, tool belt & measuring tape, genuine smile, deck backdrop. |
| `jesse.webp` | Approachable male project manager, 30s, holding a tablet/clipboard, polo shirt. |
| `marta.webp` | Female design consultant, 30s, holding rolled-up plans, warm smile, deck backdrop. |

STYLE: natural portrait photography, soft golden light, real and unposed.

---

## 8. REVIEW AVATARS (optional) → `public/images/reviews/`

`amanda.webp`, `marcus.webp`, `sarah.webp`, `delgado.webp`, `bill.webp`,
`priya.webp`, `erica.webp`, `foster.webp` — friendly, diverse square customer
headshots. **Optional** — the widget shows tasteful initials if missing, and
connecting **live** Google reviews (see README) loads real reviewer photos
automatically.

---

## 9. OTHER OPTIONAL VIDEO SPOTS

Beyond the 6 page heroes, two more places benefit from a looping clip. The code
uses images there today; to use video, tell me and I'll wire a `<video>` in (same
pattern as the heroes). Prompts if you want to prep them:

**Closing CTA background** (behind "Ready to transform your backyard?") →
`videos/cta-deck-evening.mp4`
```
① Image: gorgeous finished deck at dusk, warm string lights & glowing firepit,
empty & inviting, wide 16:9. STYLE: [Global Style Guide]
② Video: near-still ambient loop — string lights gently sway, firepit flickers,
a moth or leaf drifts, faint warm glow pulse. 10s seamless loop, minimal motion,
no cuts. (Ambient = keeps text readable on top.)
```

**Homepage "build process" strip** (optional future section) →
`videos/build-timelapse.mp4`
```
① Image: a deck mid-construction, joists and a few cedar boards down, tools out.
② Video: satisfying construction time-lapse — a bare frame becomes a finished
cedar deck as the sun arcs overhead, crew moving quickly. 12–15s, smooth, loops
back to the start frame.
```

---

## 10. FAVICON / LOGO (optional) → `app/icon.png`
```
A minimal modern logo mark for "Texas Deck Builders": three horizontal deck
planks forming a subtle "T", deep forest green (#14351f) on a cream (#f7f2e8)
background, clean flat vector, no text, 512×512, centered with generous padding.
```

---

## ✅ Asset production checklist
- [ ] Generate all 6 hero **starter images** → save as the `.webp` paths in §2.
- [ ] Turn each starter image into its hero `.mp4` (§3) → drop in `public/videos/`.
- [ ] 5 service images, 16 before/after pairs (same angle!), team portraits.
- [ ] Compress everything (squoosh.app / TinyPNG). Hero video < 6 MB. Mobile hero image < 100 KB, desktop hero image < 300 KB.
- [ ] Swap AI team photos for real ones before launch (trust matters).
- [ ] Descriptive alt text is already wired in code — nothing to do.
```
