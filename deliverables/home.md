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

All placeholder: title "Course Title Goes Here", description generic, tags
`["replace me"]`, dates 2027-02-22 to 2027-05-28 (arbitrary), starter
home/social artwork untouched.

## Open questions

- Exact course title (working name "Hallway Economics" — confirm final).
- Real teaching-period dates (which semester/year to model).
- Commission/generate new imagery, or go deliberately image-free (and say so
  in `PROCESS.md`)?
