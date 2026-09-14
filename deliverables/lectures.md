# Lectures page — `src/pages/lectures/`, `src/content/lectures/*.md`, `src/decks/*.deck.mdx`

## Voice

Per `VOICE.md`: explains motive, objective and outcomes, not just what was
covered. The linked slides pair sourced, practical information with
personality of their own — not a bare bullet outline.

## Needs to satisfy

- At least one lecture carries a real deck, linked from its page. Not one per
  week — a handful at natural curriculum beats is enough.

## Decided scope

- 6 lectures, one per Crossing, at the week each Crossing's fieldwork opens:
  weeks 1, 3, 5, 7, 9, 11 (not the "Back" week — that's the session page's
  job). `week-02.md` is removed: Crossing 1 gets one lecture, at week 1, not
  one per week. No other content references `week-02` as a `related:`
  target, so removing it is safe.
- Only week 1 carries a real deck (`week-01.deck.mdx`) — satisfies "at least
  one lecture carries a real deck" without forcing a deck onto every week.
  Weeks 3/5/7/9/11 are prose-only lecture pages: no `slides:` field.
- Content angle is decided per lecture, not locked to one rule across all
  six (framework/skill vs. expectations/logistics vs. case-study) — week
  1's angle below; weeks 3/5/7/9/11 still open.

## Week 1 — plan (not yet written)

Two presenters, split by section, reflected in `teachers: [george-curious,
haskell-byte]`: George Curious (convenor) opens with course-wide
orientation; Haskell Byte (Crossing 1's tutor) takes the actual content.
Each section reuses an existing `VOICE.md` page-type register rather than
inventing new tone rules — the deck compresses several page types' voices
into one performance artefact, deliberately swinging across `VOICE.md`'s
stated "two poles" (Home → Policies) within a single deck instead of
across separate pages.

| # | Section | Presenter | Register | Data source |
| - | ------- | --------- | -------- | ------------ |
| 1 | Cold open / hook | George Curious | Home — inspiring | none; hook is the Epley & Schroeder finding or an Atomic Habits line |
| 2 | What this course is | George Curious | Home — pitch | `import { courseMeta } from "../../course-config"` (title/description/tags) |
| 3 | What you walk out with | George Curious | Home — pitch | prose, matches home.md's "record of five real interactions + one video" |
| 4 | Teaching staff | George Curious | People — personality + practical | `getCollection("people")`, name/role/affiliation rendered live; links to `/people/` for contact/consultation specifics rather than restating them |
| 5 | Assessment structure & timeline | George Curious | Assessments — contract, precise | `getCollection("assessments")`, title/weight/due per entry rendered live so 35/25/40 can never drift from `crit-participation.md`/`midsem-checkpoint.md`/`legacy.md` |
| 6 | Policies | George Curious | Policies — flat, no colour | none — `/policies/index.mdx` is prose, not structured entries, so nothing to fetch; stays a pointer link |
| 7 | Handoff | both | — | one line, explicit tone-shift beat |
| 8 | Reframe: talking to strangers is a protocol, not a trait | Haskell Byte | Lectures/Sessions — motive+objective+outcome | sourced via `links:`: Epley & Schroeder (2014) |
| 9 | The protocol, part 1: Reason | Haskell Byte | same | — |
| 10 | The protocol, part 2: Opener | Haskell Byte | same | — |
| 11 | The protocol, part 3: Exit | Haskell Byte | same | sourced: Atomic Habits (systems > goals framing) |
| 12 | Motivation close / bridge to Say Something | Haskell Byte | same | sourced: Yes Theory (YouTube channel) |

`week-01.md`'s `links:` (three sourced entries, each doing a different
job — evidence, motivation, framework):

```yaml
links:
  - label: "Epley & Schroeder (2014), \"Mistakenly Seeking Solitude\""
    url: https://www.chicagobooth.edu/media-relations-and-communications/press-releases/mom-was-wrong-you-should-talk-to-strangers
  - label: Yes Theory — Seek Discomfort
    url: https://www.youtube.com/@YesTheory
  - label: "James Clear, Atomic Habits"
    url: https://jamesclear.com/atomic-habits
```

`related:` stays `sessions/01-say-something` — already correct, no change.

### Verification note

`pnpm check` needs to confirm a `getCollection` data-fetch inside a
`.deck.mdx` actually compiles — this is the first time this site fetches
collection data inside a deck rather than a plain `.astro` page.
Astromotion's own docs treat top-level `import`s in decks as a supported,
expected pattern (its text-export tooling explicitly strips them for the
plain-text/PDF path), so this isn't expected to break, but it's unverified
until week 1 is actually written.

## Current state

Planning only — no content written yet. Week 1's slide-by-slide plan above
is agreed; weeks 3/5/7/9/11 are scoped (week, teacher, prose-only) but have
no content angle or outline yet.

## Open questions

- Content angle + outline for weeks 3 (Yu Tobe), 5 (George Curious), 7
  (Dora De Exploré), 9 (Moana Liza), 11 (George Curious) — each on its own,
  same process as week 1.
- Confirm `getCollection` inside `.deck.mdx` compiles cleanly once week 1
  is actually written (see verification note above).
