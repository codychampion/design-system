# design.md
> Personal design system — Cody Champion
> Living document. Start here for any UI built for or by me.

---

## 0. How to use this doc

Three audiences:
- **Claude / AI agents**: Read Layer 1 + Layer 2 + **Layer 5 (mandatory)** before writing any code. Pick a surface mode from Layer 3. Consult Layer 7 (emergent patterns) when building any indexed/temporal surface; consult Layer 8 (mobile honesty) when laying out any responsive view. Do not invent tokens outside this system. If you would produce anything matching Layer 5.1, stop and restart.
- **Me**: React to this, edit it, version it. It's wrong until it isn't.
- **Future tools**: This is the source of truth. CSS, Tailwind config, Figma tokens all derive from here. Field-level prefs and observed picks live in `cody-prefs.md`.

---

## Layer 1 — Philosophy

### Tufte-rooted principles (non-negotiable)

These apply to every surface, every mode, every medium. **1. Earn every pixel.**
If a visual element does not carry information, create structure, or aid navigation — remove it. Decoration that doesn't work is noise. **2. Data-ink ratio as a forcing function.**
Every interface has a signal it's trying to surface. Ask: what's the signal? Then ruthlessly subtract everything that competes with it. **3. Hierarchy through contrast, not chrome.**
Scale, weight, and whitespace establish reading order. Not borders, shadows, pills, or badges. If you're reaching for a card border to separate content, the spacing is wrong. **4. Small multiples over complexity.**
When comparison matters, repeat a simple form many times rather than building one complex form. Consistent structure lets the differences speak. **5. Typography is the UI.**
In the absence of strong typography, everything else is scaffolding. Type choices communicate before content is read. **6. Density is not clutter.**
Dense information, well organized, respects the user's intelligence. Sparse information, poorly organized, wastes it. Aim for appropriate density — not sparse-for-sparse's-sake. **7. The interface disappears when it's working.**
The user should think about the content or the task, not the UI. Friction is a design failure. **8. Don't clutter for the sake of clutter.**
Every addition has to earn its row. Default toward subtraction when iterating — before reaching for a new element, ask whether another element on the surface already carries what the new one would carry. If yes, cut. If no, the chrome is doing work. Run a subtraction pass periodically after additive rounds. *Context dependent: heavy subtraction works where another element already carries the same information; it is not a universal default.*

---

## Layer 2 — Shared Tokens

These are the invariants. Surface modes in Layer 3 remap *values* but never break *roles*.

### 2.1 Type Scale

Base: `16px`. Scale ratio: `1.25` (Major Third). | Token | Size | Usage |
|---|---|---|
| `--t-xs` | 10px | Labels, badges, meta |
| `--t-sm` | 12px | Captions, secondary text |
| `--t-base` | 16px | Body copy |
| `--t-md` | 20px | Lead text, emphasized body |
| `--t-lg` | 25px | Section headers |
| `--t-xl` | 31px | Page titles |
| `--t-2xl` | 39px | Hero / display |
| `--t-3xl` | 49px | Splash / statement | Line height: `1.5` for body, `1.15` for headings, `1.0` for display.
Max line length: `68ch` for body, unconstrained for display.

### 2.2 Spacing Scale

Base unit: `4px`. All spacing is a multiple. | Token | Value | Usage |
|---|---|---|
| `--s-1` | 4px | Intra-element gaps, tight pairs |
| `--s-2` | 8px | Icon-text gaps, tight padding |
| `--s-3` | 12px | Component internal padding |
| `--s-4` | 16px | Standard padding, list gaps |
| `--s-6` | 24px | Section gaps, card padding |
| `--s-8` | 32px | Block spacing |
| `--s-12` | 48px | Section breaks |
| `--s-16` | 64px | Major section breaks |
| `--s-24` | 96px | Page-level breathing room |

### 2.3 Semantic Color Roles

These roles exist in every mode. The hex values change; the names do not. | Role | Purpose |
|---|---|
| `--c-bg` | Primary background |
| `--c-bg-subtle` | Recessed surfaces, code blocks, inputs |
| `--c-bg-raised` | Elevated surfaces, modals, dropdowns |
| `--c-border` | Default dividers and outlines |
| `--c-border-strong` | Active states, focused inputs |
| `--c-text` | Primary readable text |
| `--c-text-subtle` | Secondary/muted text |
| `--c-text-disabled` | Disabled states |
| `--c-accent` | Primary interactive / brand color |
| `--c-accent-subtle` | Accent tint backgrounds |
| `--c-accent-text` | Text on accent backgrounds |
| `--c-success` | Positive states |
| `--c-warning` | Caution states |
| `--c-danger` | Error / destructive states |

### 2.4 Grid

- Base column unit: `8px`
- Content max-width: `1280px`
- Readable text max-width: `720px`
- Gutters: `--s-6` (24px) at mobile, `--s-8` (32px) at desktop
- Columns: 4 (mobile), 8 (tablet), 12 (desktop)

### 2.5 Elevation (shadow scale)

| Level | Usage | Rule |
|---|---|---|
| 0 | Flat — default | No shadow |
| 1 | Subtle lift — cards at rest | `0 1px 3px rgba(0,0,0,0.12)` |
| 2 | Interactive lift — hover states | `0 4px 12px rgba(0,0,0,0.16)` |
| 3 | Overlay — modals, drawers | `0 16px 48px rgba(0,0,0,0.24)` | Shadows get darker, not larger, in dark modes.

### 2.6 Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` — fast out, smooth deceleration
- Duration base: `150ms` (micro), `250ms` (standard), `400ms` (page-level)
- Principle: Motion reveals, it doesn't decorate. One orchestrated entrance beats ten scattered micro-interactions.
- No `bounce`, no `elastic`. Never.

### 2.7 Border Radius

| Token | Value | Usage |
|---|---|---|
| `--r-sm` | 3px | Inputs, tags, code |
| `--r-md` | 6px | Buttons, cards |
| `--r-lg` | 12px | Modals, panels |
| `--r-full` | 9999px | Pills, avatars | Default bias: low radius. Prefer `--r-sm` / `--r-md`. High radius reads as consumer/playful — not the default voice here.

### 2.8 Iconography

- Style: Outline-first. Stroke weight `1.5px`. Only fill on active/selected states.
- Size: 16px (inline), 20px (default UI), 24px (prominent), 32px (feature icons)
- Library preference: Lucide (consistent with NOX stack). Phosphor as fallback.
- Never mix styles within a surface.

### 2.9 Typography Stacks

Font selection follows the surface mode (Layer 3). But the structural rules are universal:

- Heading weight: 500–600. Never 700+ except display contexts.
- Body weight: 400. Lead text: 400 or 450.
- Don't use more than 2 typefaces on a single surface.
- Monospace is a voice, not a fallback. Use it deliberately.

---

## Layer 3 — Surface Variants

### Mode: `obsidian`
**When**: NOX dashboard, homelab UIs, ops tooling, Claude Artifacts built for personal use, anything where I am the user. **Voice**: Dense, precise, terminal-adjacent. Information is the UI. **Physical reference**: *A Bloomberg Terminal at 2am.* Working late on something that matters. Multi-pane density, status visible at all times, color coding carries meaning, monospace dominant, pure black behind the work. Nothing on screen that isn't earning its place. The warmth comes from the work, not the chrome. **Philosophy application**: Maximum data-ink ratio. Every surface should feel like it could render a log stream without looking broken.

#### Color Palette ```css
/* obsidian mode — Monokai Dusk */
--c-bg: #2D2A2E; /* Monokai Pro warm dark */
--c-bg-subtle: #221F22; /* darker recessed surfaces */
--c-bg-raised: #3a3739; /* elevated surfaces */
--c-border: #4a474b;
--c-border-strong: #6e6b70;
--c-text: #FCFCFA; /* Monokai Pro foreground */
--c-text-subtle: #939293;
--c-text-disabled: #5b5862;
--c-accent: #FC9867; /* Monokai Pro orange — the dusk */
--c-accent-subtle: #3d2f24;
--c-accent-text: #2D2A2E;
--c-success: #A9DC76; /* Monokai green */
--c-warning: #FFD866; /* Monokai yellow */
--c-danger: #FF6188; /* Monokai pink */
```

#### Typography

- Display / Headers: `"IBM Plex Mono"` — monospace commands authority here
- Body: `"IBM Plex Sans"` — technical without being cold
- Code/data: `"IBM Plex Mono"`
- Fallback stack: `ui-monospace, 'Cascadia Code', monospace`

#### Specifics

- Surface borders are `1px solid var(--c-border)` — no shadows at level 0
- Tables are preferred over cards for structured data
- Numbers align right, always
- Status indicators: colored dots (`6px`, `border-radius: 50%`), not badges
- Density setting: tight. Line height `1.4` for body copy, `1.2` for data
- Accent use: sparingly. One accent-colored element per visual group maximum
- Loading states: skeleton shimmer on `--c-bg-subtle`, not spinners

---

### Mode: `signal`
**When**: Portfolio, external-facing presence, anything a recruiter, client, or colleague might see. Formal deliverables. **Voice**: Authoritative, typographically rigorous. Hierarchy does the work. **Physical reference**: *A Stripe Press book on a clean desk.* Considered typography, generous margins, the confidence to use space, photography only when it earns its place. Serious without being stiff. The kind of document a peer hands you, not a marketing department. **Philosophy application**: Whitespace is emphasis, not emptiness. The type scale is the entire visual system — color only assists.

#### Color Palette ```css
/* signal mode */
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
--c-danger: #c8342e;
```

#### Typography

- Display / Headers: `"Fraunces"` — optical serif with personality
- Body: `"Lora"` — readable, serious, not stuffy
- UI elements (buttons, nav, labels): `"DM Sans"`
- Fallback stack: `'Georgia', 'Times New Roman', serif`

#### Specifics

- Body max-width strictly enforced at `68ch`
- Section spacing is generous — `--s-16` minimum between major sections
- No card shadows on light mode — borders only, or borderless with background differentiation
- Accent used for links, CTAs, and one visual anchor per page section only
- Images: full-bleed or carefully framed with `4:3` or `3:2` ratio preference
- Captions: `--t-sm`, `--c-text-subtle`, italic
- Print-readiness: all signal-mode layouts should be legible if printed

---

### Mode: `field`
**When**: Personal brand expression, long-form writing, anything that should feel distinctly human and earned. The mode that shouldn't look like any other engineer's work. **Voice**: Warm, distinctive, research-lab-meets-field-notes. Built by someone who reads papers and lifts heavy things. **Physical reference**: *A naturalist's field journal on the corner of a workbench.* Leather-bound, annotated in margins, technical diagrams alongside personal observations, weathered but considered. Tufte's *Beautiful Evidence* shelved next to Darwin's notebooks. The voice of someone who runs experiments and writes them up by hand. **Philosophy application**: Tufte's principles still hold, but the form is looser. Constraint relaxes slightly to let personality through. Still no decoration that doesn't carry meaning — but meaning here includes warmth and character.

#### Color Palette ```css
/* field mode */
--c-bg: #1a1a14; /* deep warm dark */
--c-bg-subtle: #242418;
--c-bg-raised: #2e2e22;
--c-border: #3c3c2e;
--c-border-strong: #6a6a52;
--c-text: #e8e6d8; /* warm white */
--c-text-subtle: #9c9a82;
--c-text-disabled: #505040;
--c-accent: #c8a84b; /* warm gold */
--c-accent-subtle: #2e2814;
--c-accent-text: #1a1a14;
--c-success: #7ab87a;
--c-warning: #d4844a;
--c-danger: #c85a5a;
```

#### Typography

- Display: `"Newsreader"` — bookish, confident
- Body: `"Literata"` — made for reading
- Accent / labels: `"Karla"` — utilitarian contrast to the serif
- Fallback stack: `'Palatino Linotype', 'Book Antiqua', serif`

#### Specifics

- Line height loosened to `1.65` for body — breathing room is correct here
- Accent (gold) used for: pull quotes, section markers, one CTA, highlights only
- Textures permitted: subtle grain overlay (`3–5% opacity noise`) on backgrounds only
- Images treated as documents: captioned, sourced, considered
- Long-form posts: dropcap on first paragraph, section rules (`1px solid var(--c-border)`)
- No hero images that don't carry content — imagery is evidence, not decoration

---

## Layer 3.5 — Data Visualization

Each mode has its own data viz register. The Tufte principles in Layer 1 apply universally; the surface treatment differs.

### `obsidian` mode — Technical / Scientific
**Reference**: matplotlib, ggplot2, scientific papers, terminal monitoring dashboards.
- Monospace labels and tick marks
- Visible axis tick marks (no hidden axes)
- Error bars, confidence intervals, and uncertainty shown explicitly when present
- Log scales acceptable and labeled clearly
- Gridlines: faint, only where they aid reading (`#2a2a35` at 30% opacity)
- Color: single accent (`--c-accent`) for primary signal, grayscale ramp (`--c-text-subtle` derivatives) for context series
- No chart titles inside the chart — titles live in the surrounding UI
- Tooltips: monospace, displaying exact values, no rounding
- Density: high. Multi-series, small fonts, dense legends are correct here
- Sparklines for time-series in tables, no axes

### `signal` mode — Editorial
**Reference**: Financial Times, The Pudding, NYT graphics, Reuters Graphics.
- Annotated directly on the chart — labels point to data, not floating in legends
- Captions are part of the chart, not below it
- Color used purposefully and sparingly — usually 1–2 colors that mean something
- Generous whitespace around the chart
- Serif chart titles (matching `signal` heading stack)
- Body sans (DM Sans) for axis labels and annotations
- Source line and methodology note in `--c-text-subtle` at `--t-sm`
- Narrative chart structure: setup, observation, implication
- Avoid 3D, exploded pies, dual-axis, or any chart type Tufte would object to

### `field` mode — Tufte-rigorous
**Reference**: *The Visual Display of Quantitative Information*, *Envisioning Information*, *Beautiful Evidence*.
- Sparklines wherever possible — inline with prose
- Small multiples over single complex charts
- Monochromatic with one accent (`--c-accent` warm gold)
- No gridlines unless absolutely essential
- No chart junk: no shadows, no gradients, no decoration
- Data-ink ratio as a hard constraint — if it doesn't carry data, it's gone
- Labels integrated into the data (line endings labeled directly, no legend)
- Microcharts inside text where they support the argument
- Tables and small numerical inserts are often better than charts — use them

### Universal data viz rules (all modes)

- Never use red and green as the only differentiators (colorblind safety)
- Always include the data source and last-updated timestamp when displaying live data
- Numbers right-align, units consistent within a chart
- Scales start at zero unless there's a documented reason not to (and the reason is shown)
- Never truncate the y-axis to manufacture drama

---

## Layer 3.6 — Voice and Copy

Each mode has its own voice. Same person, different registers.

### `obsidian` voice — System / Terminal

The voice of `htop`, of a well-written log line, of a status page that respects you.
**Terse, precise, structured. Time is a primary unit.**

**Examples:**
- "Last sync: 4h ago" not "Synced four hours ago"
- "3 calendar events · 2 tasks due" not "You have a few things on your plate today"
- "Failed: connection timeout (10s)" not "Oops, something went wrong"
- "07:42 · briefing ready" not "Good morning! Your briefing is ready." **Rules:**
- Drop articles where the meaning survives (`view logs` not `view the logs`)
- Timestamps in 24-hour. Always.
- Status messages start with the state, not the subject (`Failed:` not `The job has failed.`)
- Imperatives for actions (`Open briefing`, `View logs`)
- No exclamation points. Ever.

### `signal` voice — Considered Editorial

The voice of a senior technical leader writing a memo for a smart colleague.
**Authoritative but unpretentious. Full sentences. No jargon for jargon's sake.**

**Examples:**
- "Building production ML systems at planetary scale requires more than engineering." Not: "Empower your workflow with AI."
- "Selected work from federal, commercial, and applied research." Not: "Innovative solutions across industries."
- "Available for senior IC and director-level roles in Dublin and Europe." Not: "Let's connect to discuss opportunities." **Rules:**
- Use first person where it serves clarity. Avoid where it serves ego.
- Specific claims with evidence. Never vague accomplishments.
- Technical vocabulary used precisely or not at all.
- One idea per paragraph.
- No "passionate about." No "excited to share." No "thrilled to announce."

### `field` voice — Field Notebook

The voice of a research notebook, a long-form essay, a thoughtful technical blog.
**Warm, observational, occasionally dry. First person is welcome. Specificity over abstraction.**

**Examples:**
- "Flapjack is asleep on the couch. Knuckles is somewhere he shouldn't be." Not: "Life with two dogs."
- "The problem with most knowledge management isn't storage — it's retrieval under pressure." Not: "Knowledge management can be challenging."
- "At 7am, with the baby crying and standup in eight minutes, search is the wrong primitive." Not: "Time-critical scenarios require fast information access." **Rules:**
- Concrete details over abstract claims. Always.
- Contractions are fine.
- Sentences can run long if they earn it. Or they can be short.
- Humor is permitted, never forced.
- The reader is a peer, not an audience.

### Universal voice rules (all modes)
**Never write:**
- "Empower," "leverage," "synergize," "seamless," "modern," "robust" (as filler)
- "Welcome to..." headers
- "We're excited to..." / "Thrilled to share..."
- "In today's fast-paced world..."
- "It's important to note that..."
- Em dashes as a sentence-juncture pattern (single em dash for emphasis is fine; cadenced em dashes are an AI tell) **Always:**
- Specific numbers over vague descriptors ("4h ago" not "recently")
- Active voice over passive
- Verbs over nominalizations ("decide" not "make a decision")

---

---

## Layer 3.7 — Personal Mark Architecture

The identity system is three-tiered. Each tier has a defined role; do not collapse them.

### Tier 1 — The Crest (universal)
**Asset**: `champion-crest` (gold-on-black, hexagonal frame containing fox, trident, and crystalline staff). The Champion family crest is the singular personal mark across all modes. Iconographic elements:
- **Hexagonal frame** — molecular/scientific structure (microbiology PhD heritage)
- **Fox head** — cunning, hunter, intelligence
- **Trident with three arrows** — Champion warrior energy (surname literal)
- **Staff with crystalline crown** — scholar, knowledge **Usage**: Favicons, browser tab icons, document watermarks, page headers, business cards, email signatures, footer signatures across all three modes. **Color treatment**:
- Native: gold-on-dark (the original asset) — preferred for `field` mode and personal documents
- Per-mode tint: render as silhouette mask, fill with the mode's accent color (`obsidian` → `#4B4EFA`, `signal` → `#1a4fd6`, `field` → `#c8a84b`)
- Monochrome: pure white or pure black for single-color contexts (print, deeply contextual placements) **Implementation**: Single SVG (preferred) or PNG with alpha channel. Recolor via CSS `mask-image` + `background-color` so one asset serves all modes. **Sizing rules**:
- Favicon: 16px, 32px (use crystalline crown silhouette only if 16px is too noisy)
- Inline: 20–24px
- Navigation/header: 32–40px
- Document header: 48–64px
- Hero / splash: 96–120px+
- Minimum legible size: 16px. Below that, use a per-mode symbol (Tier 3) instead.

### Tier 2 — Wordmark (per-mode operational signature)

How each mode "signs off" in operational use. Used in footers, captions, navigation, page sign-offs. - **`obsidian`**: `cody.champion` — domain-style monospace
- **`signal`**: `C·C` — center-dot monogram in Fraunces
- **`field`**: italic `cody champion` in Newsreader, or `— cc` for essay sign-offs

### Tier 3 — Symbol (per-mode decorative glyph)

Used as section breaks, list bullets, end-of-article marks, footnotes. Lightweight typographic punctuation that ties content to its mode. - **`obsidian`**: `∎` (Q.E.D., end-of-proof) — scholarly + technical
- **`signal`**: `◆` (solid diamond) — classic seal
- **`field`**: `⌬` (benzene ring) — molecular heritage, PhD encoded

### Why three tiers

Collapsing the crest into operational use cheapens it. Collapsing the wordmark or symbol into the crest's role overloads it. The crest is the family mark — heritage, structural. The wordmark is the operational signature — daily use. The symbol is typographic punctuation — content-level. A document might use all three: crest in the header, wordmark in the footer, symbol as a section divider.

---

---

## Layer 3.8 — Imagery and Illustration

Visual content beyond the UI itself. Mixed per mode.

### `obsidian` — No imagery

Zero photographs, zero illustrations, zero decorative imagery. The only "visuals" permitted are data visualizations (Layer 3.5) and functional iconography. If a surface in `obsidian` mode feels like it needs an image, the spacing or hierarchy is wrong — fix that instead. The Bloomberg Terminal reference is absolute on this: no operator wants a stock photo on their dashboard.

### `signal` — Tasteful original photography

Photography is permitted and welcomed in this mode, but with hard constraints: -
**Portrait**: A single considered headshot — natural lighting, plain background, slight 3/4 angle, looking past camera or at camera with intent. Reference style: *The New Yorker* author portraits, FT Weekend Magazine, Stripe Press author photos.
- **Work imagery**: Documentary photographs of actual work — whiteboards mid-thought, geospatial map outputs, terminal screenshots framed as objects. Never staged "developer at laptop" stock.
- **Place imagery**: Dublin streetscapes, lab interiors, working spaces — only if specifically relevant to the content.
**Hard nos for `signal` imagery:**
- Stock photography of any kind
- AI-generated images of people, places, or "abstract concepts"
- Photos with motion blur as a stylistic effect
- Photos of computer screens showing fake code
- "Diverse team in meeting room"
- Anything that could appear on a SaaS landing page **Treatment**: Black and white preferred, or muted color with desaturated processing. 4:3 or 3:2 framing. Always captioned with photographer credit, date, or context.

### `field` — Editorial illustration

Illustration permitted and encouraged. Direction: -
**Technical diagrams**: Vintage scientific illustration sensibility — line-weight precision, labels in serif, exploded views, cross-sections. Reference: Diderot's *Encyclopédie*, anatomy plates, mid-century technical drawings.
- **Maps**: Hand-drawn or hand-feeling maps, especially for the spatial ML / geographic work. Reference: USGS topographic maps, John Snow's cholera map, vintage astronomical charts.
- **Hand-drawn elements**: Sketch-quality diagrams in margins, annotated charts, marginalia. Pen-and-paper aesthetic, not "designed to look hand-drawn."
- **Botanical/scientific illustration**: When relevant to content — the microbiology background, the natural-world references.
**Hard nos for `field` illustration:**
- Generic "tech illustration" (the floating laptop / abstract gradient blob style)
- Mascots or anthropomorphized objects
- Vector illustrations with the corporate-Memphis style
- Any illustration that looks generated rather than drawn **Treatment**: Single-color or duotone (gold accent + ink). Always integrated with text, never decorative.

### Universal imagery rules

- Every image carries a caption (or has an explicit reason not to)
- Sources, dates, and methodology shown when relevant
- No imagery exists purely for decoration in any mode
- Image alt text is real, descriptive content — not "image of [subject]"

---

## Layer 3.9 — Motion Philosophy
**Stance**: Deliberate. Motion is a design element, not decoration. When something moves, it's because that movement carries meaning.

### Principles
**One thing at a time.** No simultaneous animations across the page. When the system wants to draw attention somewhere, everything else stays still. This is the inverse of typical web UI (where everything subtly breathes at once); here, stillness is the default and motion is the signal. **Slower than reflex.** Standard easing durations are longer than typical web defaults:
- Micro-interactions: `200ms` (up from the 150ms token default for orchestrated cases)
- Component transitions: `300–400ms`
- Page-level transitions: `500–700ms` The duration tokens in Layer 2.6 still apply for utility cases (hover states, focus rings). But for orchestrated moments — opening a modal, transitioning a view, revealing data — slow it down. **Easing carries personality.** Default easing remains `cubic-bezier(0.16, 1, 0.3, 1)` — fast start, smooth deceleration. This is the system's voice in motion. Do not deviate to spring physics, bounces, or elastic curves. **Motion reveals information.** Animations should narrate state changes. When data arrives, it appears with intentional sequence (parent first, then children). When a panel opens, the motion shows where it came from. When a value changes, the old and new are perceivable. **Loading states are designed, not defaulted.** No spinning circles. Skeletons that match the eventual content shape, with a slow shimmer (`1.5s` cycle, low contrast). Progress bars where progress is actually known. **Respect user preference.** Always honor `prefers-reduced-motion: reduce`. Replace transitions with instant state changes; preserve only motion that conveys essential information (loading state, focus changes).

### Per-mode application

- **`obsidian`**: Motion is rare and operational. State changes happen with subtle fade-and-slide (200ms). Status indicators may pulse only when actively alerting. Otherwise: still.
- **`signal`**: Motion supports reading flow. Page-level transitions are intentional, slower (500–600ms). Scroll-driven reveals are permitted if used sparingly.
- **`field`**: Motion supports narrative. Long-form content may have subtle parallax on hero imagery (small displacement, < 50px). Section transitions can be slightly more expressive but never decorative.

### Anti-patterns (motion)

- Bouncy / elastic easing — ever
- Decorative looping animations (floating elements, pulsing borders, breathing logos)
- Hover states that scale by more than `1.02x` or translate by more than `2px`
- Parallax beyond subtle hero displacement
- Auto-playing carousels or rotating banners
- Scroll-jacking
- "Reveal on scroll" applied universally (use sparingly, intentionally)

---

## Layer 4 — Interoperability Rules

### Combining modes

Modes can coexist on one page (e.g., a portfolio page with an embedded NOX status widget), but:
- Never mix type stacks within a single component
- Accent colors must not bleed across mode boundaries
- Borders and spacing tokens are shared — use them to create visual continuity at seams

### Mode switching

If a UI needs a light/dark toggle, `signal` (light) and `obsidian` (dark) are the paired defaults. `field` is not a dark-mode swap — it is its own context.

### Component portability

Any component built in `obsidian` mode should be portable to `signal` mode by:
1. Swapping the CSS variable file
2. Swapping the font stack declaration
3. No structural changes required This is the test of whether a component was built correctly. If it requires structural changes to re-skin, the component has hardcoded visual logic — fix it.

---

---

## Layer 5 — Uniqueness Mandate

> The single most important section of this document. Read this before generating anything. This system exists because most AI-generated UI looks the same. If your output could plausibly be a `v0.dev` export or a generic shadcn template demo, **you have failed this brief regardless of how clean the code is.**

### 5.1 The Sonnet/Claude House Style — Recognize and Refuse

These patterns are the default reach of large language models when generating UI.
**Do not produce them:** - Purple-to-pink (or any) gradient text on hero headers
- Glassmorphism / `backdrop-blur` as a primary surface treatment
- Lucide icons inside colored gradient squares with `rounded-2xl`
- Bento grid layouts as a reflex (only use when comparison genuinely benefits)
- The `Inter + gray-900 + rounded-xl + shadow-2xl` stack
- "Trusted by" logo strips
- Huge stat numbers (`12,847+`) paired with tiny gray labels
- Twin-column hero: bold left heading + abstract gradient blob right
- Floating cards with subtle gradient borders
- Three-column feature grids with identical card heights
- shadcn defaults left untouched
- "Empower your workflow" / "Built for modern teams" copy register
- Hero sections with a dot-grid background pattern
- "Get started for free" green-pill CTA
- Generic abstract 3D blob illustrations
- AI-generated mesh gradients as backgrounds
- Cards-everywhere reflex (when prose or tables would be better)

### 5.2 Positive Directives — What to Reach for Instead

When you would reach for a default pattern, reach for these instead:
**Asymmetry over balance.** Most AI UI is symmetrical. Mine isn't. Off-center compositions, intentional weight on one side, deliberate negative space. Don't center everything by default. **Editorial typography over UI typography.** Reach for a magazine or scientific journal as a reference point, not Linear or Vercel. Mixed type sizes, dropcaps where warranted, marginalia, footnotes as a feature, large display headlines paired with small body. **Physical-world references over screen-world references.** Terminal, notebook, archive, lab logbook, technical drawing, periodical, telegram. Not "modern SaaS." **Density over emptiness.** Most AI UI is sparse to look "clean." Real interfaces I love are dense with information well-organized. Default to higher density and back off only if a specific element needs breathing room. **One striking element per page, not five competing.** A single unexpected choice — an oversized number, a rotated label, a hand-drawn line, a single line of monospace in a serif page — does more than five "design touches" combined. **Real copy over placeholder voice.** "Morning Briefing — 07:42" beats "Welcome to your dashboard." "Last sync: 4h ago" beats "Up to date." Specificity is a design choice. **Restraint as a feature.** When in doubt, remove. The interface that does less, better, beats the interface that does more.

### 5.3 The Smell Test

Before shipping any UI, answer these questions. If any answer is "yes" or "I'm not sure," redesign: 1. Could this be mistaken for a v0.dev or Lovable export?
2. Does this rely on a Lucide icon to do design work a layout choice should be doing?
3. Are there gradients carrying decorative (not informational) weight?
4. Does the hero look like every other AI startup hero from 2024–2026?
5. Did you reach for a card border because you couldn't figure out spacing?
6. Is there a feature grid with three identical-looking cards?
7. Is the copy generic ("workflow," "empower," "seamless," "modern")?
8. Would removing 20% of the visual elements make it stronger? (If yes, remove them.)

### 5.4 References for Direction

When unsure of aesthetic direction, study these as influence (do not copy): -
**For obsidian**: Bloomberg Terminal, Foobar2000, htop, the IBM Plex specimen site
- **For signal**: The Browser Company "Welcome to Arc" pages, Stripe Press book pages, Frank Chimero's site, The Pudding articles
- **For field**: Edward Tufte's books (set in Bembo), Robin Sloan's newsletter, Craig Mod's essays, MIT Press monographs, field guides and ornithology references Do **not** reference: Linear, Vercel, generic Tailwind UI templates, anything ending in `.design` that launched after 2023, AI tool landing pages.

### 5.5 The Hard Stop

If a generated UI matches three or more items in 5.1, the only correct action is to discard and start over with a different structural premise. Iterating on the surface won't fix it — the foundation is the problem.

---

## Layer 6 — Anti-Patterns

Hard no. These are wrong regardless of mode.
- Purple gradients on white backgrounds
- `Inter` as a default font choice without deliberate justification
- `border-radius: 16px` or higher on non-pill elements
- Shadows as primary separators (spacing and borders first)
- Emoji in navigation or headings
- Full-opacity black text (`#000000`) — always use near-black with warmth or coolness
- Spinners for loading states that could use skeletons
- Tooltips as primary information delivery — if it needs a tooltip, reconsider the label
- More than 3 type sizes in a single component
- Centered body text beyond `2–3` line callouts
- Hover animations that move layout (no `layout shift` on hover)
- Decorative dividers between items that have sufficient whitespace
- `!important` in component stylesheets
- Absolute pixel values in component internals — use tokens

---

## Layer 7 — Surface Patterns (emergent)

> Patterns codified after iterating on real surfaces (portfolio A/B series R1–R8, NOX briefing/status A/B series). Each one earned its place by being picked against a credible alternative.

### 7.1 The Manifest

A flat, reverse-chronological index of work, grouped by year. Time is the only structural spine. No tabs, no filters, no categories — the year header is the only grouping mechanism.
**Use when**: presenting a body of work (portfolio, archive, log) where the reader's question is "is this person currently shipping?" not "what categories does this work fall into?" **Structure**:
- Year tick (mono, uppercase, hairline rule) — quiet, just a section break
- Row: `when · title · summary · tag · arrow`
- Rows are clickable and link directly to deeper content
- Apply past wash (7.2) so the present sits loudest **Refuse**: card grids, category tabs, filter bars, "featured" callouts. The manifest is the index; it shouldn't pitch the trip.

### 7.2 Temporal Weight (past wash)

Past states recede **visibly**, not just lighter. Default treatments:
- **Now** (current year): ink-coloured type, full weight, accent on `when` field, full row geometry
- **Recent** (last year): body weight, muted colour, slightly smaller title
- **Prior** (older): caption-quiet, dotted underline rather than solid, smallest type
- **Hover**: restores past to full legibility (the work isn't hidden, just demoted) The accent (mode-specific) belongs only to the present. Once it crosses into past territory, the accent comes off. **On touch devices**: same hierarchy without the hover-restore — past rows stay quiet. If a reader needs to surface them, the row link still works.

### 7.3 The Sentence Lede

The loudest type on the page is a sentence — not a slogan, not a label, not a tagline. It says what the person/product does, in plain prose, with the optional italic carrying secondary voice within the sentence itself.
**Refuse**: "A decade of [X], [Y]." pattern. "Crafting [X]." pattern. Anything that reads as a chapter epigraph instead of a lede. The lede is what answers "what do you do?" — answer it in the loudest type.

### 7.4 The Editorial Peek

A single italic body-type line per index row, hidden until hover, that says **why that work mattered** in a magazine-editor voice. Sits inside the title column; doesn't reflow the grid. **Use sparingly**: voice-loaded. Every row needs a peek worth reading. If the copy isn't there, the silence is better. **Touch adaptation**: `@media (hover: none)` — peek is always visible at reduced opacity, no animation. The reveal is a hover affordance, not the substance.

### 7.5 The Postscript (cross-mode foot)

A small monospace block at the foot of a signal-mode page that carries **live, time-of-day status** in obsidian-mode voice. Three cells: shipping this week · currently reading · availability. Plus a sign-off and contact line. **Why**: a signal-mode page is a considered editorial document; it can't easily say "I shipped X this Friday." The postscript is the author momentarily writing in obsidian — the working terminal showing through the foot of the book. **Rule**: bridges welcome when they earn their place. The postscript earns it by carrying live information the rest of the page can't.

### 7.6 The Decisions Log

For iterative A/B design work, keep a running record of picks. Files follow `surface-ab-r1.html`, `surface-ab-r2.html`, etc. Each round is one pick (A vs B) with versus mockups, pick buttons, and a "Notice" line per option. A small **decisions strip** at the top of each round shows the running record: R1 pick · R2 pick · ... · current round pending. Each round carries forward the previous round's pick into both mockups; only the current question differs. The pick log accumulates in `cody-prefs.md` — observed picks become principles. **When to use**: any time the right call between two design directions isn't obvious from first principles. Lab work belongs in `experiments/`; canonical surfaces in `surfaces/` only get rebuilt once the lab work has settled.

---

## Layer 8 — Mobile Honesty

> Mobile isn't a squeeze — it's a different reading. The desktop grid genuinely collapses; it doesn't shrink uniformly.

### 8.1 Breakpoint ladder

Three honest breakpoints, descending:

- **`max-width: 720px`** — tablet → phone. The main collapse: multi-column grids become block flow. Padding drops from `--s-8`/`--s-6` to `--s-6`/`--s-4`. Type clamps reduce one notch.
- **`max-width: 480px`** — phones. Secondary nav links drop (keep highest-value 1–2). Type tightens another notch. Cells stack within already-collapsed grids.
- **`max-width: 360px`** — narrow phones. Nav drops entirely. Padding goes to `--s-4`/`--s-3`. Inline labels collapse. Don't add intermediate breakpoints unless you can show a layout fault at that width.

### 8.2 Block flow over grid-squeeze

A 4-column grid at 380px wide isn't a 4-column grid — it's a stack. Don't preserve column structure by shrinking cells. Collapse honestly: ```css
@media (max-width: 720px) { .ship { display: block; position: relative; padding-right: 22px; } .ship > * { display: block; } .ship .arrow { position: absolute; top: var(--s-3); right: 0; }
}
``` Elements that belonged in a side column (arrow, badge, ticker) get absolutely positioned out of the flow. Everything else stacks in source order.

### 8.3 Hover doesn't exist on touch

If a desktop pattern reveals on hover (peek, tooltip, hidden detail), it needs a touch fallback. Two acceptable approaches: -
**Always-visible at reduced opacity**: `@media (hover: none)` → element shown at ~0.8 opacity, no transition. Honest, no interaction needed.
- **Focus/tap to reveal**: only when the always-visible version would crowd the layout. Never leave a hover-only element with no touch equivalent.

### 8.4 Tighten, don't shrink uniformly

- Padding: `--s-8`/`--s-6` → `--s-6`/`--s-4` → `--s-4`/`--s-3`
- Type clamps: lower the max, leave the min alone (preserves readability)
- Fidelity toggle (and similar lab chrome): smaller font, tighter padding, less prominent
- Year ticks / section dividers: reduce top margin (`--s-8` → `--s-4`)
- Postscript cells: stack 1-column with dotted dividers between

### 8.5 The smell test (mobile)

Before considering mobile done: 1. Does any element touch the viewport edge at 360px?
2. Does any text wrap awkwardly (single-word orphans, broken multi-word labels)?
3. Does any grid still try to be a grid?
4. Does a hover-only element have no touch equivalent?
5. Does the fidelity toggle (or any fixed chrome) overlap content?
6. Did you preserve a 3+ column grid below 480px? If any answer is "yes," the mobile is shrunk, not collapsed. Fix the breakpoint rules.

---

## Appendix A — Quick Reference: Mode Selector

| I am building... | Mode |
|---|---|
| NOX dashboard, ops UI, homelab tool | `obsidian` |
| Personal site, portfolio page | `signal` |
| Blog post, long-form writing, personal brand | `field` |
| Claude Artifact for personal use | `obsidian` |
| Claude Artifact for external sharing | `signal` |
| Anything Camilla or a recruiter will see | `signal` |
| Something that should be distinctly mine | `field` |
| Unsure | Default to `signal`, note the uncertainty |

---

## Appendix B — Fonts to Load

All fonts available via Google Fonts or Bunny Fonts (privacy-respecting CDN alternative). ```html
<!-- obsidian: IBM Plex -->
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet"> <!-- signal: Fraunces + DM Sans -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet"> <!-- field: Newsreader + Karla -->
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&family=Karla:wght@400;500&display=swap" rel="stylesheet">
```

---

## Changelog

| Date | Change |
|---|---|
| 2026-05-12 | v0.1 — initial draft. Three modes established: obsidian, signal, field. Token schema defined. Tufte principles codified. |
| 2026-05-12 | v0.2 — obsidian accent updated to `#4B4EFA` (Hyper). |
| 2026-05-12 | v0.3 — typography locked: IBM Plex stack (obsidian), Fraunces/Lora/DM Sans (signal), Newsreader/Literata/Karla (field). |
| 2026-05-12 | v0.4 — added Layer 5 Uniqueness Mandate. Codified Claude house-style refusals, positive directives, smell test, reference list, and hard-stop rule. Anti-patterns moved to Layer 6. |
| 2026-05-12 | v0.5 — added Layer 3.5 (Data Visualization per mode) and Layer 3.6 (Voice and Copy per mode). Universal viz and voice rules codified. Personal mark TBD — see mark-explorer artifact. |
| 2026-05-12 | v0.6 — adopted Champion family crest as Tier 1 universal mark. Established three-tier mark architecture: crest (universal) → wordmark (per-mode operational) → symbol (per-mode decorative). Per-mode tier 2 and 3 selections locked. |
| 2026-05-12 | v0.7 — locked physical references per mode (obsidian = Bloomberg Terminal at 2am, signal = Stripe Press book, field = naturalist's journal). Added Layer 3.8 (Imagery and Illustration) and Layer 3.9 (Motion Philosophy). |
| 2026-05-12 | v0.8 — obsidian palette migrated to **Monokai Dusk**. Background `#2D2A2E` (warm dark), accent `#FC9867` (Monokai Pro orange), status colors mapped to Monokai green/yellow/pink. Hyper indigo retired from obsidian. |
| 2026-05-18 | v0.9 — fixed Layer 5 subsection numbering (5.1–5.5; was incorrectly 6.x). Added principle #8 to Layer 1 ("Don't clutter for the sake of clutter"). New Layer 7 — Surface Patterns (emergent): The Manifest, Temporal Weight / past wash, The Sentence Lede, The Editorial Peek, The Postscript (cross-mode foot), The Decisions Log. New Layer 8 — Mobile Honesty: 720/480/360 breakpoint ladder, block-flow over grid-squeeze, hover-doesn't-exist-on-touch adaptations, mobile smell test. All derived from the portfolio A/B series R1–R8 and the prefs log in `cody-prefs.md`. |

---

*This document is a living system, not a finished artifact. It is correct until it is wrong, then it gets updated.*
