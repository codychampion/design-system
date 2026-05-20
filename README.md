# Champion design system

A personal design system in three voices. Built for one user — me — but documented in enough detail that anyone (including any AI agent) can use it to build surfaces that fit.

## What's here

| Path | What it is |
|---|---|
| [`index.html`](index.html) | **Start here.** The system, set as the interior of a printed volume — eight chapters, three plates, an appendix, a colophon. |
| [`tokens.css`](tokens.css) | Source of truth for all visual tokens. Mode-scoped. |
| [`uploads/files/design.md`](uploads/files/design.md) | The full spec, v0.9. Eight layers: philosophy, tokens, surface variants, interoperability, uniqueness mandate, anti-patterns, surface patterns, mobile honesty. |
| [`uploads/files/design-brief.md`](uploads/files/design-brief.md) | Executive summary handoff brief for AI agents. Read Section 9 (Uniqueness Mandate). |
| [`cody-prefs.md`](cody-prefs.md) | Running log of design picks made across A/B iterations. The "why" behind the rules. |
| [`surfaces/`](surfaces/) | Canonical surfaces — portfolio, case study, field journal, commonplace book, NOX briefing & status. |
| [`surfaces/gallery.html`](surfaces/gallery.html) | All three modes, light + dark, desktop + mobile, side by side. |
| [`experiments/`](experiments/) | A/B lab — every round of every decision is preserved as its own file. |
| [`assets/`](assets/) | The crest (recolorable PNG mask), shared theme-toggle script. |

## The three modes

| Mode | Use when… | Physical reference |
|---|---|---|
| `signal` | Portfolio, external presence, formal deliverables | A Stripe Press book on a clean desk |
| `obsidian` | Dashboards, ops tooling, personal artifacts | A Bloomberg Terminal at 2am |
| `field` | Long-form writing, personal brand | A naturalist's field journal on a workbench |

Each mode pairs with a sibling theme: `signal` (light) ↔ `signal-dark`, `obsidian` (dark) ↔ `obsidian-light`, `field` (dark) ↔ `field-light`. Toggle via the ☼/☾ button on every surface, or pass `?theme=light|dark` as a query param.

## How to use this if you're an AI agent

1. Read [`design-brief.md`](uploads/files/design-brief.md) in full. Section 9 (Uniqueness Mandate) is mandatory before generating anything.
2. Read [`design.md`](uploads/files/design.md) Layer 5 (Uniqueness), Layer 7 (Surface Patterns), Layer 8 (Mobile Honesty).
3. Pick a mode from Layer 3. Default to `signal` if unsure.
4. Don't invent tokens — use the ones in [`tokens.css`](tokens.css).
5. Run the smell tests (§5.3 design, §12.5 mobile) before delivering.

## How to use this if you're me

Add a new round to an existing surface as `experiments/<surface>-ab-r<n>.html`. Log the pick to [`cody-prefs.md`](cody-prefs.md). Once a surface is settled, rebuild its canonical form in [`surfaces/`](surfaces/).

## License

This is a personal design system. The taste is mine. The tokens, surface patterns, and refusal lists are free to learn from — copy with attribution if you find them useful.

— cc · Dublin · MMXXVI · ◆
