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

## Division of labour with the Crossings pages

Midsem Checkpoint and Legacy each describe an event that also has its own
Crossing page — the Hallway Showcase (`06`) and the Hallway Finale (`12`).
Both pairs had drifted into describing the same event twice.

Measured before fixing:

| Midsem Checkpoint | Hallway Showcase (`06`) |
| ----------------- | ----------------------- |
| presented at the Hallway Showcase, by the team as one account | the team presents the stall as one account… |
| a real step up in scale… *more people, more time invested, more that could go wrong* | a real step up in scale… *not a repeat at the same size* |
| …not a *tidied-up version* for a bigger audience | …not a *version tidied up* for a bigger audience |

All three spec lines duplicated, and row 2 had already drifted into two
different bars for one requirement. "Step up in scale" appeared a third
time on `05-set-up-shop`. Legacy and `12-the-hallway-finale` duplicated two
of three lines the same way.

### The rule

**The assessment page owns the deliverable; the Crossing page owns the
session.**

- **Assessment** — what you present, what's in it, what it's judged on.
- **Crossing** — what that session looks like: the shape of the room, who
  does what, what gets asked. It links to the assessment for the content
  rather than restating it.

Deleting one side was never available: `spec-coverage.test.ts` requires
every session *and* every assessment to declare a non-empty spec. So the
fix is to make each spec answer its own page's question, not to empty one.

### What each page holds now

| | Midsem Checkpoint / Legacy | Hallway Showcase (`06`) / Finale (`12`) |
| - | ------------------------- | --------------------------------------- |
| Owns | the presentation: what's in it, what it's judged on | the session: when it runs, what the room looks like, how it's ordered |
| `spec` | the deliverable and its criteria | what has to happen on the day |
| Links to | the fieldwork Crossing for the task | the assessment for the content, once |

The Crossing pages were half-converted on the first pass and needed a
second: `06` still carried judgement language ("the Showcase is judged
against that", "whether the version being presented matches what the team
reported living through it" — that last one lifted straight off the
assessment's spec), said "a fuller room than the usual weekly circle" twice
in the same body, and linked to Midsem Checkpoint twice to say much the
same thing. `12` restated Legacy's whole marking model under "What leaves
the room". Both now read as what the session is like to sit in.

### Deliberately not changed

The report-back Crossings (`02`, `04`, `08`, `10`) look similar against
Crossing Participation but are not the same problem — each *specialises*
the generic criterion to its own Crossing ("whether the exchange rate was
fair, and why"). That is instantiation, not duplication, and it stays.

### A guard test, tried and removed

A `spec/spec-uniqueness.test.ts` was written to flag spec lines repeated
across pages above a token-overlap threshold, then deleted. Recorded
because the reasoning matters more than the artefact.

It failed on its first run against six pairs, which looked like a win until
you read them. The real defect here was never repetition — it was **drift**:
Midsem said the scale bar was "more people, more time invested, more that
could go wrong" while the Showcase said "not a repeat at the same size",
two different bars for one requirement. A similarity threshold cannot tell
drift from healthy repetition. It flags two identical sentences, which harm
nobody, and sails past "no money changed hands" versus "small payments are
fine", which share almost no words and genuinely contradict.

Repetition is also often correct: a student reading only the Crossing page
needs the requirement, and so does one reading only the assessment page.
Forcing them to visit both to assemble one sentence is worse for students.
And the standing risk of a lint like this is that whoever trips it later
paraphrases a line to get under the threshold — writing bent to satisfy a
tool.

CLAUDE.md asks for a check where a claim has a right answer: a weight, a
pairing, a count. Sentence similarity is a style heuristic wearing a spec
check's clothes, and it was a misreading of that rule.

Two content changes it surfaced were kept, on their own merits rather than
because a test demanded them:

- The five per-Crossing clip lines were one generic sentence with the
  ordinal swapped. They are now specific — *whatever changed hands*, *the
  ask or wherever the quest went*, *what got built* — which the bodies
  already were. A generic line tells a student nothing about what to point
  the camera at.
- Midsem's scale line was 05's task restated. It now reads "the stall is
  weighed against what one of you managed solo in an earlier Crossing, not
  against the other teams", which states the comparison class — something
  no page said before. The scale bar itself still lives on `05` and in
  `marking.description`.

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
