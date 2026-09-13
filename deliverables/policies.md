# Policies — `src/pages/policies/index.mdx`

## Needs to satisfy

- Course-wide rules: late work, extensions, academic integrity, getting
  help — one place assessment briefs can link to instead of restating.
- Given the "reported back to a group" thesis: what counts as a legitimate
  Crossing report.

## Current state

Done — real content, five sections, substance specified directly by the
convenor rather than assumed:

- **Missing a Crossing** — the live report/reflection has no substitute,
  but the hallway work itself can be done solo, in your own time, before
  the Crossing, with recorded evidence standing in for the group not
  having seen it happen. That fallback is solo-only: Building With Others
  (team-based) instead defers to the team to agree what works for everyone
  if someone can't make a session, on the condition it stays on campus and
  in person rather than moving online for convenience. Neither fallback is
  exhaustive — a genuinely unavoidable case outside both gets escalated to
  the teaching staff to work out directly, rather than left unaddressed.
- **Late work and extensions** — no such thing as a late submission:
  everything is graded live, in the room, so missing the Crossing (or the
  Showcase/Finale slot) misses that mark outright, no recovery after the
  fact.
- **Academic integrity** — reflections must be the student's own, with no
  AI tool drafting, rewriting, or generating any part of them; an
  AI-assisted reflection isn't graded lower, it's a different, ungradable
  thing, since the course's premise is that it's an account of something
  that actually happened to you.
- **What actually gets checked** — the spec-list transparency policy
  (unchanged from the first pass).
- **Getting help** — links to `/people/` (unchanged).

`crit-participation.md`'s spec/body, and the "missing the slot" lines in
`midsem-checkpoint.md`/`legacy.md`, were rewritten to link to `/policies/`
for the mechanism instead of restating an invented "arrange cover" /
"two scheduled times" version that didn't match this.

Tied into `spec/`: `spec-coverage.test.ts` asserts every `sessions` and
`assessments` node has a non-empty `spec` array — the mechanical backstop
for the "nothing graded against an unwritten rubric" claim in "What
actually gets checked." Passes today (all 3 assessments + both session
placeholders already carry spec bullets). The no-AI-reflections and
missed-Crossing rules stay prose-only — no `spec/` check, since neither is
mechanically verifiable from site content.

## Open questions

None blocking.
