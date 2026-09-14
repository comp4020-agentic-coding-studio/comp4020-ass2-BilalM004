# Crossings page — `src/pages/sessions/`, `src/content/sessions/*.md`

## Voice

Per `VOICE.md`: states the objective and motive — why this Crossing
matters — and exactly what's required, so a student is never unsure of the
point or the task in front of them.

## Needs to satisfy

- One per week, 1 through 12 (`schedule-coverage.test.ts`).
- Each a real fieldwork brief: what a student does out in the hallway, and
  how it's reported back to the group (CLAUDE.md's "half a Crossing" rule).
- A checkable `spec:` line per Crossing, not "engage meaningfully."

## Decided arc

| Crossing                    | Weeks | Out (do)                   | Back (present)                                 |
| ---------------------------- | ----- | --------------------------- | ------------------------------------------------ |
| 1 — Starting a Conversation  | 1–2   | Say Something               | How It Landed                                     |
| 2 — The Exchange             | 3–4   | Make a Trade                | The Exchange Rate                                 |
| 3 — Presence at Scale        | 5–6   | Set Up Shop                 | Hallway Showcase _(Mid-Semester Presentation)_    |
| 4 — Risk & Rejection         | 7–8   | Ask Anyway                  | The Rejection Report                              |
| 5 — Building With Others     | 9–10  | Find a Partner in the Hall  | What We Made                                      |
| 6 — Legacy                   | 11–12 | _(none — presentation only)_ | The Hallway Finale _(Final Presentation)_         |

The five-clip video is assessment content (`legacy.md`'s brief), not
something this page needs to describe — the Crossings page stays about the
fieldwork brief and the report, not how Legacy grades it.

- Crossing 1 (Starting a Conversation, weeks 1–2): walk up to a stranger and
  strike up a real conversation — make a new friend. The opener can't be
  "because my course told me to"; the reason for saying hello has to be
  genuine, not the assignment itself.
- Crossing 2 (The Exchange, weeks 3–4): swap something with a stranger — a
  tip, a favour, a small object, a skill, no money — and see what comes
  back.
- Crossing 3 (Presence at Scale, weeks 5–6): run by a team assigned for
  the Crossing (not self-organised, not spontaneous) — the task itself
  scales up to a bigger stall/event than the earlier solo Crossings, then
  a showcase presentation where the team reports on it as one account.
  The Midsemester Checkpoint mark judges the stall as a whole, not each
  teammate's individual slice of it.
- Crossing 4 (Risk & Rejection, weeks 7–8): ask a stranger to join you on a
  mini quest — something spontaneous, decided on the spot. The risk is
  built into the ask itself (a real invitation can get a real no); there's
  no separate scale bar the way Crossing 3 has one.
- Crossing 5 (Building With Others, weeks 9–10): find a partner in the
  hallway — spontaneously, that week, not pre-arranged — and build
  something together on the spot: Lego, a mini song, whatever the two of
  you land on. The task isn't prescribed, only that it's made together, not
  split up and assembled separately. (Partner-finding stays in-person and
  in the moment, same as every other Crossing — flag if that's wrong.)
- Crossing 6 (Legacy, weeks 11–12): no fieldwork of its own — each student
  presents individually, walking through the five Crossings that came
  before, then plays their five-clip video.

## Calendar

Teaching weeks 1–6, then a two-week mid-semester break, then teaching weeks
7–12 — 14 calendar weeks total, matching `courseMeta.startDate`/`endDate`
(2026-07-27 to 2026-10-30) with no remainder. Crossing 3 (weeks 5–6) sits
right before the break, which is why its Showcase reads as the natural
halfway marker — `midsem-checkpoint.md`'s due date (2026-09-04) already
falls inside week 6 under this mapping.

| Teaching week | Calendar week starts |
| ------------- | --------------------- |
| 1             | 2026-07-27             |
| 2             | 2026-08-03             |
| 3             | 2026-08-10             |
| 4             | 2026-08-17             |
| 5             | 2026-08-24             |
| 6             | 2026-08-31             |
| _break_       | 2026-09-07, 2026-09-14 |
| 7             | 2026-09-21             |
| 8             | 2026-09-28             |
| 9             | 2026-10-05             |
| 10            | 2026-10-12             |
| 11            | 2026-10-19             |
| 12            | 2026-10-26             |

## Title convention

A session's displayed title (grid card heading, and the detail page's `<h1>`
and browser title) is its own task/beat name — e.g. "Say Something", "The
Exchange Rate" — never "Week N" or a session number. `[slug].astro` was
updated to stop leading the detail-page title with `Week N {sessionLabels}:`;
the week number, Crossing number (via `crossingNumber()`), and date now sit
in a `<small>` line at the bottom of the page instead, alongside the existing
spec/teaching-team/related blocks.

## Current state

All 12 written, one file per week, named `NN-task-name.md` (e.g.
`01-say-something.md`) — the displayed title matches the arc's Out/Back
beat name per Crossing, never "Week N". `pnpm check` green.

Teacher per week comes straight from each tutor's `affiliation` in
`src/content/people/*.md`: Haskell Byte (1–2), Yu Tobe (3–4), George
Curious (5–6 and, as convenor, 11–12), Dora De Exploré (7–8), Moana Liza
(9–10).

Weeks 11–12 (Crossing 6, no fieldwork) split into a Discussion Lab (11) —
talking through the five-Crossing account with peers in small groups, no
stage or run-through — and the Hallway Finale itself (12), the marked
presentation.

Writing these also surfaced two pre-existing breaks fixed in passing:
`lectures/week-01.md` and `week-02.md` still referenced the deleted
placeholder people (`marisol-quaye`, `idris-fenn`) and the old session
slugs, and still carried a placeholder `date:` outside the teaching
period — all now point at real people/slugs and real dates. The lecture
bodies themselves are still `STARTER_CONTENT`; that stays `lectures.md`'s
job.

`content-review` also caught a real policy-mismatch: `policies.md`'s
"team" fallback language was attached to Crossing 5 when it actually
described Crossing 3. Corrected on both sides: Crossing 5 keeps the
no-standing-partner fallback (contact us beforehand); the team fallback
(talk to your team) moved to Crossing 3, matching the team-assigned design
above. `05-set-up-shop.md`, `06-hallway-showcase.md` and
`midsem-checkpoint.md` were all updated to say the stall is run by an
assigned team and marked as one account, not five individual slices of it.

## Open questions

None outstanding — teacher assignment and file naming (above) are both
resolved. The partner-finding-stays-spontaneous flag from the arc below is
resolved too: it's the intended design, and `policies.md` now agrees with
it.
