# Crossings page — `src/pages/sessions/`, `src/content/sessions/*.md`

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

Each of the first five Crossings also produces a 5–10s video clip of the
fieldwork. By the Legacy Crossing, each student has all five of their own
clips, edited together into one video — Legacy itself has no fieldwork and
adds no clip.

- Crossing 2 (The Exchange, weeks 3–4): swap something with a stranger — a
  tip, a favour, a small object, a skill, no money — and see what comes
  back.
- Crossing 3 (Presence at Scale, weeks 5–6): the task itself scales up —
  a bigger stall/event than the earlier solo Crossings — then a showcase
  presentation reporting on it.
- Crossing 6 (Legacy, weeks 11–12): no fieldwork of its own — each student
  presents individually, walking through the five Crossings that came
  before, then plays their five-clip video.

## Current state

2 of 12 exist, both `STARTER_CONTENT` placeholders
(`01-getting-started.md`, `02-first-review.md`) — need rewriting to match
the arc above (one entry per week, two weeks per Crossing).

## Open questions

- Exact `spec:`-checkable line per Crossing (CLAUDE.md wants something a
  marker could mechanically check, not "engage meaningfully").
- Where the video clips are assessed/weighted — likely an `assessments.md`
  question, not this block's.
