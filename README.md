# Champion Design System

![Status](https://img.shields.io/badge/status-active-16a34a)
![Design System](https://img.shields.io/badge/design%20system-personal-111827)
![CSS](https://img.shields.io/badge/CSS-tokenized-264de4)
![HTML](https://img.shields.io/badge/HTML-surfaces-e34f26)
![AI Agents](https://img.shields.io/badge/AI%20agents-ready-7c3aed)

A personal design system for building surfaces that feel intentional, opinionated, and recognizably mine.

This repo is part visual language, part operating manual, part taste archive. It defines tokens, modes, surfaces, anti-patterns, and handoff instructions so both humans and AI agents can build pages, dashboards, briefs, case studies, and portfolio artifacts without drifting into generic SaaS gray.

## Why this exists

Most personal sites and AI-generated interfaces collapse toward the same defaults: glass cards, vague gradients, ungrounded spacing, and interchangeable typography. This system is a refusal of that drift.

The goal is to make design choices portable. Instead of relying on memory or vibes, the system captures the rules: what a surface should feel like, which tokens to use, when to use each mode, what to avoid, and how to test whether the result belongs.

## The three voices

| Mode | Use when | Physical reference | Energy |
|---|---|---|---|
| `signal` | Portfolio, external presence, formal deliverables | A Stripe Press book on a clean desk | precise, credible, editorial |
| `obsidian` | Dashboards, ops tooling, personal command surfaces | A Bloomberg Terminal at 2am | dense, alert, operational |
| `field` | Long-form writing, notes, reflective artifacts | A naturalist's field journal on a workbench | tactile, warm, archival |

Each mode has a light/dark sibling: `signal` to `signal-dark`, `obsidian` to `obsidian-light`, and `field` to `field-light`. Surfaces can toggle theme directly or accept `?theme=light|dark`.

## Start here

| Path | Why it matters |
|---|---|
| [`index.html`](index.html) | The canonical entry point: the system presented as the interior of a printed volume. |
| [`tokens.css`](tokens.css) | Source of truth for visual tokens, scoped by mode. |
| [`uploads/files/design.md`](uploads/files/design.md) | Full design spec: philosophy, tokens, variants, uniqueness, anti-patterns, surface patterns, mobile rules. |
| [`uploads/files/design-brief.md`](uploads/files/design-brief.md) | Short handoff brief for AI agents. Start here when generating a new surface. |
| [`surfaces/gallery.html`](surfaces/gallery.html) | All three modes across light/dark and desktop/mobile contexts. |
| [`surfaces/`](surfaces/) | Canonical surfaces: portfolio, case study, field journal, commonplace book, NOX briefing, and status views. |
| [`experiments/`](experiments/) | A/B lab preserving each design iteration. |
| [`cody-prefs.md`](cody-prefs.md) | Running log of taste decisions and the reasoning behind them. |

## Design principles

1. **No generic polish.** A page can be clean without becoming anonymous.
2. **Tokens over improvisation.** If a choice matters, it belongs in the system.
3. **Surfaces have jobs.** A dashboard, case study, and field note should not share the same rhythm.
4. **AI agents need constraints.** Good generated interfaces come from strong boundaries, not vague prompts.
5. **Mobile honesty.** Small screens are not miniature desktops; they need their own rhythm.

## How to use this as an AI agent

1. Read [`uploads/files/design-brief.md`](uploads/files/design-brief.md) first.
2. Read the uniqueness mandate before generating anything.
3. Choose a mode based on the surface purpose. Default to `signal` for public-facing work.
4. Use tokens from [`tokens.css`](tokens.css). Do not invent parallel palettes, spacing scales, or component styles.
5. Run the smell test: if the result could belong to any startup, it is not done.

## How to use this as a human

Start with the gallery, pick the closest canonical surface, then modify through experiments rather than editing the final surface directly. Preserve alternate rounds when the choice is meaningful. Log final decisions in [`cody-prefs.md`](cody-prefs.md) so the system keeps learning.

Suggested workflow:

```text
choose surface -> create experiment -> compare variants -> log decision -> update canonical surface
```

## Maintenance

The source of truth lives in `satellites/design-system` in the private monorepo. The mirror workflow subtree-splits that directory and publishes this public repo.

Do not use this repo as the canonical editing location, and do not store secrets, tokens, private notes, or unreleased personal material here.

## What this is not

This is not a general-purpose component library. It is not meant to be neutral, endlessly reusable, or brand-agnostic. It is a personal design language with enough structure to be reused and enough opinion to stay recognizable.

## License

This is a personal design system. The taste is mine. The tokens, surface patterns, and refusal lists are free to learn from; copy with attribution if you find them useful.

cc - Dublin - MMXXVI
