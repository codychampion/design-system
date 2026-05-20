# cc — design preferences, observed

> A learning log. Updated as design decisions accumulate.
> Not a brief; a record. Things to keep applying without re-asking.

---

## Observed picks
**Source:** NOX morning briefing, A/B rounds 1–9.

### Structural premise
- Picked **time-as-spine** over masthead/columns (Daybook over Broadsheet).
- When offered unfamiliar shapes, picked the **visual/structural** one over prose-only (Score over Dispatch).
- Picked **parallel synced views** over one mixed stream (two rails over one log).

### Temporal logic
- **Fish-eye** over even axis. The system should emphasise what's *next*, not treat all hours equal.
- **Day-zones** (fixed regions: overnight · morning · midday · afternoon · after) over a lens that follows the clock. Predictable structure, stable muscle memory.
- **Past wash** over a vertical NOW line. What's done should *visibly* recede; the boundary glows.

### Hierarchy & weight
- **Tiered** over democratic staves. The system should have an opinion about what matters at 07:42 — calendar primary, ops secondary, ambient tertiary.
- Hierarchy is shown by **size and weight**, not by chrome.

### Mark & typography
- **Stems** over filled bars — labels rise *above* a hairline mark. Type breathes; the bar is restrained.
- Annotated-chart sensibility over Gantt-style filled rectangles.

### Voice
- **Opening sentence** over counts ribbon. Voice in the system, not just data tallies.
- "One thing is on fire, and four are nice to know" — a real read of the day, not a tally.

---

## Principles inferred
1. **The system should have a point of view.** Picks consistently chose opinionated treatments over neutral/democratic ones.
2. **Visceral signals over precise ones** (wash > line; sentence > tally; fish-eye > even-step).
3. **Type breathes** — labels free of containers (stems over filled bars; opening sentence over chip ribbon).
4. **Bias toward what's next.** Future gets the real estate; past compresses, then recedes.
5. **Predictable structure beats reactive.** Day-zones (fixed) over lens-follows-now (reactive).
6. **Unfamiliar over familiar.** When offered genuinely-new shapes, picks them.

---

### Situation-dependent surfaces
- Picked The Manifest (time-led work index) as the portfolio's frame but noted **"situation dependent"** — the right shape depends on the viewer. Reading: a portfolio that's *only* a manifest leaves voice on the floor; a portfolio that's *only* a profile leaves work on the floor. **Surfaces should make room for both audiences without splitting into two URLs.** Default: lead with a short voice/profile preamble, follow with the manifest. Voice frames the work; the work is the body.

### Engineering realism
- Picked the flat band over the time-of-day envelope but **asked if the more complex option was realistic at scale**. Reading: visual elegance loses to engineering realism if the latter is uncertain. **Always say out loud whether a proposed treatment is feasible to compute at production scale**, with the rough operation count and the failure modes (sparsity, staleness, deploy-invalidation). Don't propose treatments without that note.

### Hybrid signals
- Picked Audit Log (A) over Hospital Chart (B) as the *frame* for ops, but explicitly liked the **line-pulse / sparkline** treatment from B for **time-series sensitive data streams**. Reading: the *structure* should be evidence-trail (chronological), but **pulse-lines should appear wherever the underlying data is itself time-series.** Hybrids are welcome when they earn their place.

### Restraint as the test
- After picking the **editorial peek** for manifest rows (R7=B), reminded explicitly: **"don't clutter for the sake of clutter."** Reading: every addition has to earn its row. The peek won because it added a *register* (editorial voice in the index) without adding chrome. **Default future rounds toward subtraction — what can be removed without losing the system — before reaching for new elements.** A round of "what can the page lose without losing itself?" should run periodically after additive rounds.
- Subsequent test (R8) of an aggressive subtraction pass — brand-meta, eyebrow, housekeeping paragraph, year-strip labels, year-strip counts all cut — picked, but with the note **"context dependent."** Reading: heavy subtraction works *here*, on this portfolio, where the lede is a sentence and the postscript carries the status. It is not a universal default. **Before applying heavy subtraction to other surfaces, ask: does another element on this surface already carry what we're removing? If yes, cut. If no, the chrome is doing work.**

---

## Apply by default in future surfaces

- Lead with a sentence, not a label.
- Bias real estate toward whatever's coming next, not what's equal-everywhere.
- Pick a clear primary; demote secondaries; let tertiaries breathe at small size.
- Past states / read items / "done" states should *recede* visibly, not just lighten.
- Labels above marks, not inside them.
- The system should sound like a person who keeps track of your stuff, not a dashboard.

---

## Open questions (to ask before assuming)

- Density tolerance per mode (obsidian seems high; signal/field unconfirmed).
- Whether the same opinionated bias applies to signal/field surfaces, or only to obsidian-mode tooling.
- How aggressive the "past recedes" treatment should be in long-form content (field).

---

*Log started: 2026·05·15. Will append as we go. — cc, indirectly.*
