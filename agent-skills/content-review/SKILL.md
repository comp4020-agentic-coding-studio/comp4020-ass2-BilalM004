---
name: content-review
description: Read every course page against CLAUDE.md, course-config, and the policies page; report contradictions, tone drift, policy mismatches, and thematic drift as findings. Run before shipping, not on every edit.
---

Read, in full, before saying anything:

- `CLAUDE.md` — the voice and thesis this course is meant to hold to
- `src/course-config.ts` — the single source of truth for course facts
- every file under `src/content/sessions/`, `src/content/assessments/`,
  `src/content/lectures/`, `src/content/people/`
- the policies page under `src/pages/policies/`

Then check across all of it together, not page by page in isolation. Look for:

- **contradiction** — two pages state the same fact (a weight, a date, a rule,
  what a student must submit) differently from each other.
- **tone-drift** — a page reads generic or corporate against CLAUDE.md's Voice
  section, or forces a joke where plain clarity was called for.
- **policy-mismatch** — a session or assessment claims something about
  grading, privacy, or process that the policies page doesn't back up, or the
  reverse.
- **thematic-drift** — a Crossing that doesn't distinctly explore the
  hallway-economics thesis — one that would be reachable from another
  Crossing by find-and-replace.

Report findings with the ReportFindings tool, most-severe first, using the
four category names above as `category`. An empty list is a real result, not
a failure to look — only report what you'd actually flag to the person about
to ship this.

This is a judgment pass, not a build gate: it belongs before a ship, not
wired into `pnpm check`.
