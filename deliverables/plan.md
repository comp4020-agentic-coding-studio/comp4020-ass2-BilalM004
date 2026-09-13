# Assignment 2 — deliverables plan

Tracking scaffolding for building the Hallway Economics course site, broken
into blocks by **page** — one file per section of the site. Not graded
content, not part of `src/`.

Marked on: Legibility of process (45%), Response to the brief (35%), Working
deployed artefact (20%). Due 2026-09-21 noon.

Decided: course level SLOP1744 (1000-level UG); sessions renamed **Crossings**
site-wide.

## Deliberately not tracked here

- `PROCESS.md` — already a required root file. Write it directly once content
  work is done, citing commits; don't duplicate it as a `deliverables/` file.
- `spec/` checks — verified by running `pnpm check`/`pnpm check:evidence`, not
  by planning them. Three tests already exist; revisit as content lands.

Both stay as checklist lines in `shipping.md`.

## Blocks (one per site page)

- `home.md` — home/course overview (`src/pages/index.astro`, driven by
  `course-config.ts` + `site-config.ts`)
- `crossings.md` — Crossings/sessions page
- `lectures.md` — lectures page + deck
- `assessments.md` — assessments page
- `people.md` — people page
- `policies.md` — policies page
- `shipping.md` — cross-cutting: checks, PROCESS.md, `/ship`

## Order of attack

1. `home.md` (unblocks real dates/labels everywhere else)
2. `assessments.md` (weights fixed early)
3. `crossings.md` (all twelve)
4. `lectures.md`
5. `people.md` + `policies.md`
6. Revisit `spec/`; run `content-review`
7. `shipping.md` checklist, then `/ship`

## Verification

- `pnpm check` green after each block.
- `pnpm check:evidence` green before shipping.
- Manual read-through at both marking viewports once deployed.
