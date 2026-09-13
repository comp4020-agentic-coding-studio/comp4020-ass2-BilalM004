# Home / course overview — `src/pages/index.astro`

Driven by `src/course-config.ts` (course record) and `src/site-config.ts`
(nav, labels, artwork), so both live in this block.

## Needs to satisfy

- SLOP code keeps its assigned digits: `SLOP1744`, level 1.
- 80–300 char description matching CLAUDE.md's thesis.
- `startDate`/`endDate` spanning 12 teaching weeks + the mid-semester break —
  every other page's dates must fall inside this window
  (`data-integrity.test.ts`).
- `sessionLabels` → Crossing/Crossings; site name/nav once the real title is
  set.
- Home/social placeholder images replaced, or a deliberate no-image call —
  `pnpm check:evidence` fails on the tracked placeholders either way.

## Current state

Done except imagery: title "Hallway Economics", real description/tags,
session labels renamed Crossing/Crossings, dates 2026-07-27 to 2026-10-30
(Semester 2, 2026), `index.astro`'s "What you will do"/"Who it is for"
copy written.

Still placeholder: `hero-home.avif`, `card.png`, and both people portraits
(`idris-fenn.avif`, `marisol-quaye.avif`) — real imagery is being sourced
separately; `pnpm check:evidence` will flag these four by hash until
they're replaced (or deliberately deleted).

## Open questions

None blocking. Assignment brief doesn't mandate real-world dates (only
"twelve dated teaching weeks"), so 2026-07-27–2026-10-30 is a deliberate
choice, not a placeholder.
