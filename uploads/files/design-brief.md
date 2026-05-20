# design-brief.md
> Handoff brief for Claude.design (or any AI agent generating UI for me).
> This is the executive summary. Full system lives in `design.md` (v0.9).
> Read this in full before generating anything. Section 9 is mandatory.
> Field-level prefs and the running picks log live in `cody-prefs.md`.

---

## 1. Who this is for

Cody Champion — AI Decision Science practitioner. Senior IC / Director-track. Technical practitioner, builds in public, lives in Dublin. You are designing for someone who reads Tufte for fun, builds production ML systems, and can spot generic AI-generated UI from across a room.
**Do not produce generic AI UI.**

---

## 2. The three modes — pick one per project

| Mode | Use when building... | Reference |
|---|---|---|
| `obsidian` | NOX dashboards, homelab tools, ops UIs, personal Artifacts | Bloomberg Terminal at 2am |
| `signal` | Portfolio, external presence, formal deliverables, recruiter-facing | Stripe Press book on a clean desk |
| `field` | Long-form writing, personal brand, distinctive content | Naturalist's field journal on a workbench | Default if unsure: `signal`. Note the assumption inline.

---

## 3. Core philosophy (universal — never bend)

Tufte-rooted:
1. Every visual element earns its place or gets cut
2. Hierarchy through contrast (scale, weight, whitespace) — not chrome (borders, shadows, badges)
3. Data-ink ratio as a forcing function
4. Typography is the UI
5. Density is not clutter; sparseness is not clarity
6. One striking element per page, not five competing
7. The interface disappears when it's working
8. Don't clutter for the sake of clutter — default to subtraction when iterating. Before adding an element, ask whether another element on the surface already carries what the new one would carry. *Context dependent: heavy subtraction works when something else carries the same info; not a universal default.*

---

## 4. Read before generating (mandatory pre-flight)

Before writing any code, answer:
- Which mode am I in? (Section 2)
- What is the signal this UI is surfacing? (Section 3, principle 1)
- Have I checked Section 9 (anti-patterns)?
- Am I about to reach for a default that's in Section 9?
- If building a temporal/indexed surface: have I consulted `design.md` Layer 7 (Manifest, past wash, sentence lede, editorial peek, postscript)?
- If building any responsive layout: have I consulted Section 12.5 (mobile honesty)? If you skip these, the output will be wrong.

---

## 5. Design tokens (CSS-ready)

```css
/* === SHARED — all modes === */ /* Type scale (base 16px, ratio 1.25) */
--t-xs: 10px; --t-sm: 12px; --t-base: 16px;
--t-md: 20px; --t-lg: 25px; --t-xl: 31px;
--t-2xl: 39px; --t-3xl: 49px; /* Spacing (base 4px) */
--s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px;
--s-6: 24px; --s-8: 32px; --s-12: 48px; --s-16: 64px; --s-24: 96px; /* Radius — bias LOW. Do not exceed --r-md for non-pill elements. */
--r-sm: 3px; --r-md: 6px; --r-lg: 12px; --r-full: 9999px; /* Motion */
--easing: cubic-bezier(0.16, 1, 0.3, 1);
--dur-micro: 200ms;
--dur-component: 300-400ms;
--dur-page: 500-700ms; /* === OBSIDIAN — Monokai Dusk === */
--c-bg: #2D2A2E;
--c-bg-subtle: #221F22;
--c-bg-raised: #3a3739;
--c-border: #4a474b;
--c-border-strong: #6e6b70;
--c-text: #FCFCFA;
--c-text-subtle: #939293;
--c-text-disabled: #5b5862;
--c-accent: #FC9867; /* orange */
--c-accent-subtle: #3d2f24;
--c-accent-text: #2D2A2E;
--c-success: #A9DC76; /* green */
--c-warning: #FFD866; /* yellow */
--c-danger: #FF6188; /* pink */ /* === SIGNAL === */
--c-bg: #f8f7f4; /* warm off-white */
--c-bg-subtle: #eeecea;
--c-bg-raised: #ffffff;
--c-border: #d8d5cf;
--c-border-strong: #9c9890;
--c-text: #1a1916;
--c-text-subtle: #6b6760;
--c-text-disabled: #b8b4ae;
--c-accent: #1a4fd6; /* decisive blue */
--c-accent-subtle: #eef2fc;
--c-accent-text: #ffffff;
--c-success: #1a7f4b;
--c-warning: #a15f00;
--c-danger: #c8342e; /* === FIELD === */
--c-bg: #1a1a14; /* deep warm dark */
--c-bg-subtle: #242418;
--c-bg-raised: #2e2e22;
--c-border: #3c3c2e;
--c-border-strong: #6a6a52;
--c-text: #e8e6d8;
--c-text-subtle: #9c9a82;
--c-text-disabled: #505040;
--c-accent: #c8a84b; /* warm gold */
--c-accent-subtle: #2e2814;
--c-accent-text: #1a1a14;
--c-success: #7ab87a;
--c-warning: #d4844a;
--c-danger: #c85a5a;
```

---

## 6. Typography per mode

Load fonts via Google Fonts (`<link>` tags, never `@import`). | Mode | Heading | Body | Mono | UI/labels |
|---|---|---|---|---|
| `obsidian` | IBM Plex Mono | IBM Plex Sans | IBM Plex Mono | IBM Plex Mono |
| `signal` | Fraunces | Lora | DM Mono | DM Sans |
| `field` | Newsreader | Literata | IBM Plex Mono | Karla | Rules:
- Heading weight 500–600. Never 700+ except true display.
- Body weight 400. Lead 400 or 450.
- Max 2 typefaces per surface.
- Body max-width: `60ch` for `signal` and `field`; `obsidian` is dense and ignores this.

---

## 7. Personal mark architecture (three tiers — do not collapse)

**Tier 1 — Crest (universal):** The Champion family crest. Gold hexagonal frame with fox, trident, and crystalline staff. Use as favicon, watermark, header logo, document signature. PNG asset attached. Recolor via CSS `mask-image: url(crest_white.png); background-color: var(--c-accent);` for per-mode tinting.
**Tier 2 — Wordmark (per-mode operational signature):**
- `obsidian`: `cody.champion` (IBM Plex Mono, weight 500)
- `signal`: `C·C` (Fraunces, weight 600, letter-spacing 0.05em)
- `field`: italic `cody champion` (Newsreader italic, weight 400) or `— cc` for essay sign-offs **Tier 3 — Symbol (per-mode decorative glyph):**
- `obsidian`: `∎` (Q.E.D.)
- `signal`: `◆` (solid diamond)
- `field`: `⌬` (benzene ring) Use Tier 3 for section breaks, list bullets, end-of-article marks.

---

## 8. Voice per mode — with examples

**obsidian (terminal/system register):**
- ✓ "Last sync: 4h ago" · "3 events · 2 tasks due" · "Failed: connection timeout (10s)"
- ✗ "Synced four hours ago" · "You have a few things on your plate" · "Oops, something went wrong"
- Drop articles where meaning survives. 24-hour timestamps. No exclamation points. Ever. **signal (considered editorial register):**
- ✓ "Building production ML at planetary scale requires more than engineering."
- ✗ "Empower your workflow with AI." · "We're thrilled to share..." · "Built for modern teams"
- Specific claims with evidence. Use first person where it serves clarity, not ego. **field (field-notebook register):**
- ✓ "The problem with most knowledge management isn't storage — it's retrieval under pressure."
- ✗ "Knowledge management can be challenging." · "Time-critical scenarios require fast info access."
- Concrete details over abstract claims. Contractions fine. Dry humor permitted, never forced.
**Universal bans (every mode):**
- "Empower," "leverage," "synergize," "seamless," "modern," "robust" (as filler)
- "Welcome to..." headers
- "Thrilled to share..." / "Excited to announce..."
- "In today's fast-paced world..."
- "It's important to note that..."
- Cadenced em dashes as a sentence-juncture pattern (single em dash for emphasis is fine)

---

## 9. UNIQUENESS MANDATE — the critical section

The single reason this design system exists. Most AI-generated UI looks the same.
**If your output could plausibly be a `v0.dev` or Lovable export, you have failed.**

### 9.1 Hard refusals (do not produce)

- Purple-to-pink gradient text on hero headers
- Glassmorphism / `backdrop-blur` as a primary surface treatment
- Lucide icons inside colored gradient squares with `rounded-2xl`
- Bento grid as a reflex
- `Inter + gray-900 + rounded-xl + shadow-2xl` stack
- "Trusted by" logo strips
- Huge stat numbers (`12,847+`) paired with tiny gray labels
- Twin-column hero: bold left heading + abstract gradient blob right
- Three-column feature grids with identical card heights
- shadcn defaults left untouched
- Hero sections with dot-grid backgrounds
- "Get started for free" green-pill CTAs
- AI-generated mesh gradients as backgrounds
- Generic abstract 3D blob illustrations
- Cards-everywhere reflex (when prose or tables would be better)

### 9.2 Reach for these instead -
**Asymmetry over balance.** Don't center by default. Intentional weight on one side.
- **Editorial typography over UI typography.** Reach for magazines and journals as reference, not Linear/Vercel.
- **Physical-world references over screen-world references.** Terminal, notebook, lab logbook, technical drawing, periodical. Not "modern SaaS."
- **Density over emptiness.** Default higher than your instinct says. Back off only where a specific element needs breathing room.
- **One striking element per page, not five.** A single unexpected choice does more than five "design touches."
- **Real copy.** "Morning Briefing — 07:42" beats "Welcome to your dashboard."
- **Restraint as a feature.** When in doubt, remove.

### 9.3 The smell test (run before shipping)

Answer yes to ANY of these → redesign:
1. Could this be mistaken for a v0.dev or Lovable export?
2. Does this rely on a Lucide icon to do work that a layout choice should be doing?
3. Are there gradients carrying decorative (not informational) weight?
4. Does the hero look like every other AI startup hero from 2024–2026?
5. Did I reach for a card border because I couldn't figure out spacing?
6. Is there a feature grid with three identical-looking cards?
7. Is the copy generic ("workflow," "empower," "seamless")?
8. Would removing 20% of the visual elements make it stronger?

### 9.4 Hard stop

If output matches **three or more** items in 9.1, discard and restart with a different structural premise. Iterating on the surface won't fix it.

---

## 10. Data viz per mode

- **obsidian**: matplotlib/scientific. Monospace labels, visible ticks, error bars, log scales acceptable, single accent + grayscale ramp, dense legends, sparklines in tables.
- **signal**: editorial (FT/Pudding style). Direct annotation, captions inside chart, 1–2 purposeful colors, generous whitespace, source line in `--c-text-subtle`.
- **field**: Tufte-rigorous. Sparklines, small multiples, monochromatic with one accent, no gridlines unless essential, labels integrated into data, tables often better than charts. Universal: never red/green only (colorblind safety). Always show source + last-updated. Start scales at zero unless documented otherwise. Never truncate y-axis to manufacture drama.

---

## 11. Imagery per mode

- **obsidian**: ZERO imagery. No photos, no illustrations. Type and data only.
- **signal**: Tasteful documentary photography. B&W or muted color. 4:3 or 3:2. Always captioned. NO stock, NO AI-generated, NO "diverse team in meeting room."
- **field**: Editorial illustration. Vintage scientific (Diderot/anatomy plates), hand-drawn diagrams, maps. Single-color or duotone (gold + ink). NO corporate-Memphis, NO generic tech illustration.

---

## 12. Motion philosophy
**Deliberate.** Motion is a design element, not decoration.
- One thing at a time. Stillness is the default; motion is the signal.
- Slower than reflex: 200ms micro, 300–400ms component, 500–700ms page-level.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` — never bounce or elastic.
- Loading states are designed (skeleton matching content shape with slow shimmer), never spinners.
- Always honor `prefers-reduced-motion`.
- No decorative looping animations. No scroll-jacking. No "reveal on scroll" applied universally. Per-mode:
- `obsidian`: rare and operational
- `signal`: supports reading flow
- `field`: supports narrative (subtle hero parallax < 50px permitted)

---

## 12.5 Mobile honesty

Mobile isn't a squeeze. The desktop grid genuinely collapses; it doesn't shrink uniformly.
**Breakpoint ladder (use all three):**
- `max-width: 720px` — multi-column grids → block flow. Padding `--s-8`/`--s-6` → `--s-6`/`--s-4`. Type clamps reduce one notch.
- `max-width: 480px` — drop secondary nav links. Tighten type one more notch. Cells stack within already-collapsed grids.
- `max-width: 360px` — nav drops entirely. Padding `--s-4`/`--s-3`. Inline labels collapse.
**Three rules:**
1. **Block flow over grid-squeeze.** A 4-column grid at 380px wide is a stack. Don't preserve column structure by shrinking cells — collapse honestly. Use `position: absolute` for elements that belonged in a side slot (arrow, badge).
2. **Hover doesn't exist on touch.** Every hover-revealed element needs an `@media (hover: none)` fallback. Default: always-visible at ~0.8 opacity, no animation.
3. **Tighten, don't shrink.** Type clamps lower the max, leave the min alone. Padding scales down per breakpoint, not proportionally. Lab chrome (fidelity toggles, etc.) becomes compact and unobtrusive.
**Smell test (mobile):**
- Does anything touch the viewport edge at 360px? → fix
- Does text wrap into single-word orphans? → shorten labels or hide them
- Does a grid still try to be a grid below 480px? → collapse
- Does a hover-only element have no touch equivalent? → add one Full spec: `design.md` Layer 8.

---

## 13. Anti-patterns (universal hard nos)

- `border-radius: 16px` or higher on non-pill elements
- Shadows as primary separators (use spacing and borders first)
- Emoji in navigation or headings
- Full-opacity black `#000000` text — always near-black with warmth or coolness
- Tooltips as primary information delivery
- More than 3 type sizes in a single component
- Centered body text beyond 2–3 line callouts
- Hover animations that cause layout shift
- Absolute pixel values in component internals — use tokens
- `!important` in component stylesheets

---

## 14. Format checklist before delivery

- [ ] Mode chosen and stated in code comments
- [ ] All colors via CSS variables, none hardcoded
- [ ] All spacing via `--s-*` tokens
- [ ] All radii via `--r-*` tokens (max `--r-md` for non-pills)
- [ ] Font stack matches mode (Section 6)
- [ ] Voice matches mode (Section 8)
- [ ] Crest used appropriately (favicon, header, signature)
- [ ] Smell test (Section 9.3) run
- [ ] Zero matches in Section 9.1 hard refusals
- [ ] Zero matches in Section 13 universal anti-patterns
- [ ] `prefers-reduced-motion` honored
- [ ] Real copy, no placeholder voice
- [ ] Breakpoints at 720 / 480 / 360 implemented (Section 12.5)
- [ ] Grids collapse to block flow, not shrunk columns
- [ ] Hover-only elements have a touch (no-hover) fallback
- [ ] Mobile smell test (Section 12.5) run

---

## 15. Reference materials (for direction only)
**For obsidian — study, do not copy:**
- Bloomberg Terminal
- htop, btop
- Foobar2000
- IBM Plex specimen page **For signal — study, do not copy:**
- Stripe Press
- Frank Chimero's site
- The Pudding articles
- Monocle, FT Weekend Magazine layouts **For field — study, do not copy:**
- Tufte's books (Bembo typeset)
- Robin Sloan's newsletter
- Craig Mod's essays
- USGS topo maps, Diderot's *Encyclopédie*, field guides **Explicitly do NOT reference:**
- Linear, Vercel
- Generic Tailwind UI templates
- v0.dev or Lovable outputs
- AI tool landing pages from 2024–2026

---

## 16. When uncertain

Pick the choice that is **more restrained, more specific, more honest, less decorative.** Most design failures are over-design failures. When in doubt: read Tufte's *The Visual Display of Quantitative Information* page 105 ("The Smallest Effective Difference") and apply. When genuinely torn between two design directions: don't pick prematurely. Build an A/B — see `design.md` Layer 7.6 (The Decisions Log). Lab files live in `experiments/`, canonical surfaces in `surfaces/`. Picks accumulate in `cody-prefs.md`.

---

*End of brief. Full system: `design.md` (v0.9). Picks log: `cody-prefs.md`. Crest asset: `crest_white.png` (recolorable via `mask-image`).*