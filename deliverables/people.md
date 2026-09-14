# People page — `src/pages/people/`, `src/content/people/*.md`

## Voice

Per `VOICE.md`: a real bio with personality for each person, plus the
practical part a student actually needs — contact info and the escalation
path (who to ask first, who to ask when that doesn't work).

## Needs to satisfy

- Real bios: consultation hours, contact preference, escalation path (who to
  ask first, who to ask when that doesn't work).

## Decided cast

Five people, not two: four tutors, each owning one fieldwork-only Crossing
their own background actually maps onto, plus a convenor who owns both
holistically-marked presentation Crossings (3 and 6) — fitting for someone
whose job is judging what a semester's investment bought, not a checklist.

Escalation: your Crossing's tutor is first point of contact week to week;
the convenor is who you escalate to, and is in the room either way for both
big graded presentations.

| Name | Role | Crossing(s) | Background/lens |
| ---- | ---- | ----------- | ---------------- |
| Haskell Byte | Tutor — CS academic | 1, Starting a Conversation | A field that's barely social by nature; had to reverse-engineer how to even open a conversation, so can hand a beginner an actual reusable method instead of "just wing it" |
| Yu Tobe | Tutor — YouTuber | 2, The Exchange | Knows what makes a trade worth telling — the report-back half of the Crossing |
| Dora De Exploré | Tutor — Explorer | 4, Risk & Rejection | Used to a spontaneous ask abroad not landing — comfortable with a stranger's "no" |
| Moana Liza | Tutor — Creative arts | 5, Building With Others | Hands-on, makes-with-a-stranger instinct |
| George Curious | Convenor — Philosopher | 3 & 6, Showcase and Legacy | Judges value and meaning, not a rubric — a fitting read of the two biggest presentations |

## Personalities (design notes)

Not printed on the site as jargon — a bio that says "High Openness, low
Neuroticism" reads like a psych report, not a person. Used only to keep the
five voices genuinely distinct while writing: a Big Five leaning (JCU's
Employability Edge "Personality and Personal Attributes" module) and a
Belbin team role per person, translated into how they actually sound on the
page.

| Person | Big Five leaning | Belbin role | Voice on the page |
| ------ | ----------------- | ----------- | ------------------ |
| Haskell Byte | High Conscientiousness, naturally lower Extraversion | Monitor Evaluator (learned Shaper behaviour deliberately) | Helpful and systematic — treats "I don't know how to start" as a solvable problem |
| Yu Tobe | High Extraversion, high Openness | Teamworker | Thinks in beats/hooks, talks like a good raconteur |
| Dora De Exploré | High Openness, high Extraversion | Resource Investigator | Casual, present-tense, unbothered by a "no" |
| Moana Liza | High Openness, high Agreeableness | Plant | Tactile, materials-first, trails off into what could be built |
| George Curious | High Openness, high Conscientiousness | Co-ordinator | Answers with a further question, but lands a clear verdict at grading time |

Source: [JCU Employability Edge — Personality and Personal
Attributes](https://www.jcu.edu.au/employability-edge/you-and-your-career/personality-and-personal-attributes).

## Decided

- Names: Haskell Byte, Yu Tobe, Dora De Exploré, Moana Liza, George Curious.
- File naming follows the existing `first-last.md` pattern, ASCII-folded:
  `haskell-byte.md`, `yu-tobe.md`, `dora-de-explore.md`, `moana-liza.md`,
  `george-curious.md`. Replaces the two placeholders
  (`marisol-quaye.md`/`idris-fenn.md`) outright.
- Routing: email (or call, for the two below) reaches anyone all semester.
  A question about a specific Crossing's brief goes to that Crossing's
  tutor first; course-wide academic matters (exceptions, grading disputes,
  anything outside a single Crossing) go to George Curious, the convenor.

| Person | Consultation slot | Where | Contact |
| ------ | ------------------ | ----- | ------- |
| Haskell Byte | Tuesdays 2–3pm, booked in 15-min slots | CS building | Email |
| Yu Tobe | Thursdays 1–2pm, informal drop-in | wherever the light's good that day | Call or email |
| Dora De Exploré | Mondays 11am–12pm | the courtyard, weather permitting | Call or email |
| Moana Liza | Wednesdays 3–4pm | the Maker Space | Email |
| George Curious | Fridays 1–2pm, by appointment | office | Email |

## Open questions

None blocking — cast, names, file naming, consultation hours, contact
preference and escalation routing are all decided. Next: write the five
real `src/content/people/*.md` files.
