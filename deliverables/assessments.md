# Assessments page — `src/pages/assessments/`, `src/content/assessments/*.md`

## Voice

Per `VOICE.md`: contract register — precise, deadpan, "here's the brief,
here's what's checked." Only turns reflective where it's describing what a
student's own reflection sounds like; the page itself stays a contract, not
a reflection.

## Needs to satisfy

- Weights sum to exactly 100 (`assessment-weights.test.ts`).
- An `assessments/*crit-participation` entry whose `meta.weeks` covers 1–12
  (`schedule-coverage.test.ts`).

## Current state

Done — three real pieces, replacing both placeholders:

- **Crossing Participation** (`crit-participation.md`, 35) — weekly, weighted
  mode, `weeks: [1..12]`, links to `/sessions/`. Folds in what was
  originally going to be a separate reflection submission: the reflection
  is now presented live at the Crossing itself, so it's one criterion here
  rather than its own assessment. Criteria explicitly separate doing the
  thing (40) from reflecting on it (30) from reporting it well (30) — doing
  isn't just implied by the reflection. The schema requires a `due` date
  even for an ongoing weekly grade; body copy explains it marks the last
  Crossing the grade closes on, not a submission deadline.
- **Midsemester Checkpoint** (`midsem-checkpoint.md`, 25) — holistic, due
  week 6, presented live at Crossing 3's Hallway Showcase (not a separate
  written submission). Scoped to Crossing 3 specifically — "Set Up Shop" is
  the biggest, most exposed undertaking of the first half, so its Showcase
  presentation earns its own weight beyond the ordinary weekly
  participation grade every Crossing gets.
- **Legacy** (`legacy.md`, 40, renamed from `final-project.md`) — holistic,
  due the last week of teaching. Presentation-only: weeks 11–12 have no
  hallway fieldwork of their own, just the Hallway Finale presentations —
  an honest account across all five fieldwork Crossings. This forced
  follow-on fixes for consistency: the home page's "leave something behind
  in the hallway" line and `crossings.md`'s arc table both used to claim
  Legacy had a fieldwork action, so both were corrected to
  presentation-only, and every "six Crossings" / "six-clip video"
  reference (legacy.md, crossings.md) was corrected to five, since only
  Crossings 1–5 produce fieldwork and a clip — Legacy reviews those five,
  it doesn't add a sixth. `crit-participation.md`'s body now also notes
  that weeks 11–12 are graded on showing up/presenting at Legacy rather
  than on hallway fieldwork, since its `weeks` array (required by
  `schedule-coverage.test.ts`) still has to cover all of 1–12.

35 + 25 + 40 = 100. Two of three lecture/session placeholders that pointed at
the retired `assignment-1` id were repointed to `crit-participation`
(`lectures/week-02.md`, `sessions/02-first-review.md`) — both files are
themselves still starter placeholders, revisited in the `lectures.md`/
`crossings.md` blocks.

## Decisions made

- Reflection write-ups are **not** a separate graded piece — they're spoken
  at the Crossing and marked as part of participation. Simpler for students
  (one deadline model, not two) and matches the "reported back to a group"
  framing more directly than a written submission would.
- Weight split (35/25/40) chosen over an even split so the final Crossing
  reads as the biggest single bet without participation being an
  afterthought.
- Midsem and Legacy were converging on the same content (both "account for
  what the Crossings bought you"), so they're now split by scope rather
  than direction — midsem is scoped to Crossing 3 alone (the biggest,
  most-exposed project of the first half, "Set Up Shop"), presented live
  at its own Hallway Showcase; Legacy is scoped to the whole semester,
  presented at the Hallway Finale. Matches `crossings.md`'s arc directly:
  Crossing 3's "Back" beat is already a presentation (Hallway Showcase) —
  midsem is that presentation, not a separate written piece, and it's
  worth extra weight specifically because Crossing 3's brief is bigger in
  scale than an ordinary week's Crossing.

## Open questions

None blocking.
