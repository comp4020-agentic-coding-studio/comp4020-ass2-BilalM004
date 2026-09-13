# Hallway Economics — harness

## What this site is

Hallway Economics treats the campus itself as an economy: attention, trust and
serendipity are the scarce goods, and the "coursework" is spending them —
noticing people, starting conversations, running a stall, asking for something
you might be refused, building with a stranger, leaving something behind. The
site is that course as students would actually experience it, not a pitch for
it. Every page should read like it belongs to a real semester someone is
currently living through, not like marketing copy for the concept.

Two things are always true and should shape every page, not just the ones
that state it:

- The work is done *out* in the hallway and *reported back* to a group. A page
  that only describes the doing, with no trace of the telling, is half a
  Crossing.
- Reflection is written close to the moment, not polished after the fact.
  Session and assessment copy should sound like it, especially anywhere it
  quotes or paraphrases what a student produced.

## Voice

Snappy and engaging, not rambling — but every page should leave a reader
clear on the what and the why: what a student actually does, and why it's
worth their semester. Sincere and deadpan is the default register; specific
campus detail beats an abstract claim, but don't force a joke where a plain
clear sentence does the job better.

Never ship a placeholder: no lorem ipsum, no "TBD", no page that exists only
to satisfy a schema. If a page isn't ready to say something real, it isn't
ready to commit.

## Working rules

- Every fact about the course (dates, weights, code, session label) has one
  source: `src/course-config.ts` and the content collections. Don't restate
  or re-derive it elsewhere — link or reference instead.
- Don't run `pnpm check` after every small edit. Run it before a commit, and
  ask me first if you think one's worth running mid-task. For a big change,
  run it yourself to verify before calling the change done.
- When a page's claim is something a marker could actually check (a weight,
  a pairing, a count), prefer writing that check into `spec/` over leaving it
  as prose alone.
- Judgment calls that `spec/` can't check mechanically — contradictions,
  tone drift, policy mismatches, thematic drift — live in the `content-review`
  skill. Run it before a commit that adds or edits session, assessment,
  lecture, or policy copy; not on every small edit.

## What's fixed, not mine to change

The platform — the four content collections, the Slop theme and branding, the
build pipeline, the generated API — is documented in `README.md` and is not
this course's design problem. Work inside it; don't restructure it.
