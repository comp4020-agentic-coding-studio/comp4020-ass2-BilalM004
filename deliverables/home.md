# Home / course overview — `src/pages/index.astro`

Driven by `src/course-config.ts` (course record) and `src/site-config.ts`
(nav, labels, artwork), so both live in this block.

## Voice

Per `VOICE.md`: pitch — sells the semester. The one place personality is
front and center.

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

Done: title "Hallway Economics", real description/tags, session labels
renamed Crossing/Crossings, dates 2026-07-27 to 2026-10-30 (Semester 2,
2026), hero image replaced with real artwork (`hero-home.jpg`),
`index.astro`'s "What you will do"/"Who it is for" copy written and
iterated on for accuracy and tone.

Still placeholder: `card.png` (site-wide social preview image) — real
imagery is being sourced separately; `pnpm check:evidence` will flag it by
hash until it's replaced (or deliberately deleted). The two people
portraits are also still flagged but belong to `people.md`, not this
block.

## Open questions

None blocking. Assignment brief doesn't mandate real-world dates (only
"twelve dated teaching weeks"), so 2026-07-27–2026-10-30 is a deliberate
choice, not a placeholder.

`card.png` left as the starter placeholder for now — deliberately deferred,
not forgotten. `pnpm check:evidence` will keep flagging it until it's
replaced or removed.
