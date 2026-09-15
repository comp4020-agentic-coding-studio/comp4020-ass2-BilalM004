# Lectures page — `src/pages/lectures/`, `src/content/lectures/*.md`, `src/decks/*.deck.mdx`

## Voice

Per `VOICE.md`: explains motive, objective and outcomes, not just what was
covered. The linked slides pair sourced, practical information with
personality of their own — not a bare bullet outline.

## Needs to satisfy

- At least one lecture carries a real deck, linked from its page. Not one per
  week — a handful at natural curriculum beats is enough.

## Decided scope

**Two lectures, fortnightly, front-loaded.** Weeks 1 and 3 — Crossing 1 and
Crossing 2, each at the week its fieldwork opens. Both carry a real deck.
`week-02.md` is deleted (Crossing 1 gets one lecture, not one per week; no
other content references it).

Supersedes the earlier six-lecture scope (weeks 1/3/5/7/9/11, one deck).

### Six nominal, two published

The course runs a fortnightly lecture — one per Crossing, at the week its
fieldwork opens, so six across the semester. This deliverable writes and
publishes the first two. The other four aren't stubbed: CLAUDE.md forbids a
page that exists only to satisfy a schema, and `published: false` would still
mean committing four files with nothing real in them.

So the lectures index says what the cadence is and that weeks 1 and 3 are the
ones with pages so far — which is also just what a course site mid-semester
honestly looks like. Its current copy is template text about the platform
("Every lecture the course claims to run gets a dated page…") rather than
about this course, so it needs rewriting regardless.

### Division of labour between the two

Week 1 is orientation **plus** Crossing 1's content, because it is also the
first thing a student ever sees. Week 3 is pure content — no course
admin — and is deliberately shorter.

They form a series, not two standalone talks: week 1 teaches the walk-up and
the report-back; week 3 teaches the report-back **as craft**, and closes by
sending students back to look at the clip they already shot in Crossing 1.

## The co-teaching rule

**Every lecture is 50/50: the convenor and that Crossing's tutor.** George
Curious takes the first half — the idea, and why the Crossing is worth a
student's time. The Crossing's own tutor takes the second — how you actually
go and do it, and what you owe the room afterwards. Stated once on
`lectures/index.mdx`, so no lecture page has to restate it.

Made visible three ways, because a title slide can't be seen from slide
fourteen:

1. A **title slide** opening each deck, naming both presenters and their
   halves.
2. An **`impact divider` slide** at each handover — the presenter's name at
   heading size, their half's title under it.
3. A **persistent presenter tag** on every content slide, bottom left, via
   `DeckPresenter.astro` — which reads the name from the people collection
   rather than hardcoding it, and is hidden by CSS on title and divider
   slides where the name is already the subject.

`_class` passes its whole string through as the slide's class attribute
(unlike `_id`, which takes only the first token), so `_class: impact divider`
gives a slide both classes. That is what makes the divider treatment layer on
top of the brand fill.

## Lecture 1 — Week 1: Starting a Conversation

`src/content/lectures/week-01.md` · deck `/decks/week-01/` · 23 slides ·
George 2–10, Haskell 11–23

Restructured after a first draft opened on the Epley & Schroeder experiment
and then cut to the teaching team, which read as a non-sequitur. The
experiment is evidence for *how to do it*, not for *what this course is* —
so it moved into Haskell's half, where it is the hook into the protocol, and
George now opens on the idea instead.

| # | Slide | Class | Data / source |
| - | ----- | ----- | ------------- |
| 1 | Title — code, lecture, both presenters | `title` | `courseMeta` |
| 2 | George Curious — what you've signed up for | `impact divider` | — |
| 3 | Campus is an economy | — | the thesis, stated plainly |
| 4 | So the coursework is spending it | — | the goal |
| 5 | What this course is | — | `courseMeta` |
| 6 | What you walk out with | — | five interactions, five clips |
| 7 | A Crossing is two weeks | — | five run out/back; the sixth doesn't |
| 8 | Who's teaching it | — | `DeckPeople` |
| 9 | What it's worth | — | `DeckAssessments` |
| 10 | Two rules | `centered` | Policies register |
| 11 | Haskell Byte — how to actually do it | `impact divider` | — |
| 12 | Say something, or headphones in? | `impact` | wants artwork |
| 13 | Nearly everyone gets this wrong | — | Epley & Schroeder |
| 14 | A protocol, not a trait | `impact` | Atomic Habits (in notes) |
| 15 | Part 1 — Reason | — | `01-say-something` |
| 16 | Part 2 — Opener | — | — |
| 17 | Part 3 — Exit | — | — |
| 18 | The edge of the room | `quote` | quotes `01-say-something` |
| 19 | Half a Crossing | `impact` | CLAUDE.md's rule, out loud |
| 20 | What a report-back sounds like | — | `02-how-it-landed` |
| 21 | Someone will ask you a follow-up | — | `crit-participation` |
| 22 | Seek discomfort | `quote` | Yes Theory |
| 23 | This week | `action` | QR + three actions |

## Lecture 2 — Week 3: The Exchange

`src/content/lectures/week-03.md` · deck `/decks/week-03/` · 18 slides ·
George 2–9, Yu 10–18

Originally planned as Yu solo; rebuilt against the 50/50 rule. The split
falls out cleanly along the two people's own registers — George is the
course philosopher whose question is "was it worth doing", so he takes
**value**: what a thing is worth with no price on it. Yu is the YouTuber, so
takes **telling**: making a trade that survives being reported, and the clip.

The sources divided the same way rather than being shared out arbitrarily:
Mauss and Ariely are conceptual and went to George; Coats' story spine is
craft and stayed with Yu.

| # | Slide | Class | Data / source |
| - | ----- | ----- | ------------- |
| 1 | Title — code, lecture, both presenters | `title` | `courseMeta` |
| 2 | George Curious — what's it worth? | `impact divider` | — |
| 3 | Crossing 1 was free | — | callback to week 1 |
| 4 | No cash. On purpose. | — | Ariely |
| 5 | What a gift obliges | — | Mauss |
| 6 | Pick your currency | — | campus-concrete |
| 7 | Name your price first | — | `03`'s spec |
| 8 | Every trade has a rate | — | `04-the-exchange-rate` |
| 9 | "Was it worth doing" | `impact` | George's signature question |
| 10 | Yu Tobe — make it worth telling | `impact divider` | — |
| 11 | Nobody watches a video where nothing happens | `impact` | wants artwork |
| 12 | Last week you all stood up and reported | — | callback to Crossing 1 |
| 13 | A boring report-back needed a better trade | — | Yu's thesis |
| 14 | What's actually checked | — | `DeckSpec` on `03-make-a-trade` |
| 15 | Storyboard it | — | Coats' story spine |
| 16 | The clip | — | `legacy.md` + the consent rule |
| 17 | You already have one | `impact` | closes the series |
| 18 | This week | `action` | QR + four actions |

### Balance

Week 3 lands at 8/9 slides. Week 1 is 9/13, because Haskell's half carries
the protocol, the report-back and the send-off while George's is orientation
— closer to 40/60 than 50/50 by slide count, though not by time, since the
orientation slides are denser. Worth a look when the decks are read at
presentation speed; padding George's half for symmetry would be the wrong
fix.

## Shared technical decisions

### Live data goes through `.astro` components, not top-level await

`courseMeta` is a plain synchronous export, so a deck can `import` it and
interpolate directly. `getCollection` cannot: it returns a promise, and
awaiting it at MDX module scope is top-level await, which is the actual
unverified risk (not the import, which astromotion's text export confirms
is expected).

Three small components under `src/components/`, imported into the decks:

- `DeckPeople.astro` — `getCollection("people")`, portraits + name + role +
  affiliation
- `DeckAssessments.astro` — `getCollection("assessments")`, title + weight +
  week
- `DeckSpec.astro` — takes a session id, renders its `spec:` lines

This is settled on the merits regardless of whether top-level await would
have worked, because slide 6 needs the portraits. Deck `![bg]` paths must be
relative to the deck file, so the five `.avif` files in `src/content/people/`
are unreachable from markdown; a component using Astro's image pipeline
reaches them. It also reuses the site's existing pattern
(`AssessmentsGrid.astro`, `PeopleGrid.astro`, `TeachingTeam.astro`) rather
than inventing a deck-only one.

### Assessment slide renders weight and week, never `due`

`crit-participation` and `legacy` both carry `due: 2026-10-30`, and
`crit-participation`'s own body says that date "is when Crossings run until,
not a single deadline." A slide rendering `due` live would state something
its source page explicitly disclaims.

### Base path inside a deck is unverified

Markdown links in content collections **are** base-prefixed — confirmed in
`dist/` (`/comp4020-ass2-BilalM004/sessions/...`). The current placeholder
deck contains no internal site links, so the same is unverified for
`.deck.mdx`. A root-absolute link that isn't rewritten works on localhost
and 404s live.

First thing to check when writing. Fallback if it doesn't hold: a
`DeckLink.astro` using the theme's `withBase`, exactly as
`src/pages/lectures/[slug].astro` already does for `slides`.

### QR codes point at the in-world canonical

**Decided.** Slides 20 and 13 each carry a QR pointing at
`https://courses.slop.university/SLOP1744/...`. `![qr](url)` is build-time
markdown, so no MDX expression can be interpolated into it and the URL must
be absolute and literal — which makes this a choice between two hardcodings.
The in-world canonical is already the single source as `canonicalUrl` in
`astro.config.ts`, survives the repo moving, and is the URL a Slop University
lecture would actually project. It does not resolve for a real scanner, which
is the cost; the rejected alternative resolves but pins into the deck the
thing `scripts/pages-base.ts` exists to derive.

The QR is the in-world affordance and the markdown links are the
functional ones: a marker reads the deck in Chrome, where a link works and a
QR is decoration. Every QR gets a plain link beside it so a browser reader
is never stranded.

### Speaker notes

Both decks carry ` ```notes ` fences — at minimum on the handoff (week 1
slide 9), on each `impact` slide, and wherever the register shifts. They are
where the two-presenter performance instruction lives, they are exported by
`astromotion-text`, and they are what makes the deck read as a performance
artefact rather than a bullet outline, which is what `VOICE.md` asks for.

### Slide fit is unchecked

`pnpm check` compiles a deck but says nothing about whether a slide fits
1280×720. `astromotion-check` catches overflow and the quiet clipped case,
but needs `puppeteer-core`, which is not in `devDependencies`. Either add it
or accept eyeball-only verification at the two marking viewports.

## Imagery

Needed, in priority order:

1. **Week 1 slide 1** — full-bleed cold-open background: the bus/train seat
   beside a stranger, or the edge of a room where everyone already knows
   each other. **To generate.**
2. **Week 3 slide 1** — full-bleed: something changing hands, no money in
   frame. **To generate.**
3. **Week 1 slide 18** — the edge of the room. Best spare is
   `src/assets/images/home-hero-slopuni.jpg`, copied to `src/decks/assets/`
   because deck image paths must be deck-relative. **No generation needed**,
   with one caveat: it is a near-twin of `home-hero-slopuni-revised.jpg`,
   which is the home page's current hero, so it may read as a repeat.

   Reviewed all four home-hero files for this. `home-hero-colourful.jpg` is
   off-palette for a dark deck (blues and teals against the deck's gold);
   `home-hero-themed.jpg` is the same illustration gold-washed, but busy in
   the mid-tones and letterboxed at 1024×430; `home-hero-slopuni.jpg` is the
   bold gold/black/cream woodcut and the only one that matches the deck
   surface.

   None of the three substitutes for the two cold opens below — they are all
   one idea (a busy campus hallway), already spent on the home page.

   Note for any new deck artwork: all existing images are 1024px wide, and a
   deck canvas is 1280×720, so a full-bleed background upscales about 25%.
   Ask for 1280×720 or larger, 16:9.
4. **Week 1 slide 6** — the five portraits, already in `src/content/people/`,
   reached via `DeckPeople.astro`. **No generation needed.**
5. **Week 3 slide 7** — optional four-up of campus trade objects.
6. **Week 1 slide 2** — optional: Epley & Schroeder's predicted-vs-actual
   comparison, redrawn small and inline rather than hotlinked. Open question
   whether the deck wants a chart at all.

Deck backgrounds go in `src/decks/assets/` and are referenced as
`![bg](./assets/name.avif)`.

## Cross-block issue: the clip is barely on the site

Both decks tell students to capture a clip per Crossing. That fact currently
lives on `index.astro` (a pitch page) and in `legacy.md`'s five-clip
requirement. **No Crossing page and no `spec:` line anywhere mentions
capturing a clip** — so a student reading only the Crossing pages would
never know to film anything, and arrives at Legacy owing five clips they
don't have.

**Being fixed as part of this work.** A lecture is not a source of truth, so
the decks can only report the clip requirement if a Crossing page states it.
Each of the five fieldwork Crossings (`01`, `03`, `05`, `07`, `09`) gains a
`spec:` line naming the clip, pointing at `legacy.md` for what the five are
ultimately for. Tracked in `crossings.md`; done here because the lectures
surfaced it and both decks depend on it.

## Work items

- [ ] Delete `src/content/lectures/week-02.md`
- [ ] Rewrite `src/content/lectures/week-01.md` — body prose (motive,
      objective, outcomes per `VOICE.md`) plus the frontmatter above
- [ ] New `src/content/lectures/week-03.md`
- [ ] Rewrite `src/decks/week-01.deck.mdx` (20 slides)
- [ ] New `src/decks/week-03.deck.mdx` (13 slides)
- [ ] `DeckPeople.astro`, `DeckAssessments.astro`, `DeckSpec.astro`
- [ ] Rewrite `src/pages/lectures/index.mdx` — replace template copy with
      the front-loaded rationale
- [ ] Deck backgrounds into `src/decks/assets/`
- [ ] `spec/` check: one lecture per taught Crossing, at the week its
      fieldwork opens, each with a deck — CLAUDE.md prefers a check over
      prose for a claim this checkable, and nothing in `spec/` touches the
      lectures collection today

## Current state

**Written and green.** `pnpm check` passes: 31 pages, 2 decks, no
accessibility violations, no broken links, all internal links respect base,
5 spec tests pass.

Shipped: `week-01.md` (20-slide deck), `week-03.md` (13-slide deck),
`week-02.md` deleted, `lectures/index.mdx` rewritten, three deck components,
two new rules in `src/decks/theme.css`, and the clip `spec:` lines across the
five fieldwork Crossings.

Verified in `dist/` rather than assumed:

- **Markdown links inside a deck are base-prefixed.** Both decks' internal
  links come out as `/comp4020-ass2-BilalM004/...`. No `DeckLink` component
  needed; the fallback in the plan above is moot.
- **`getCollection` reaches a slide** through the `.astro` components — the
  people slide renders five portraits through the image pipeline, the
  assessment slide renders 35/25/40 with "every week" and "Crossing N,
  week N", and week 3's spec slide renders Crossing 2's four spec lines
  including the new clip one.
- **QR codes only work at the top level of a slide.** Nested inside a
  `<div class="columns">`, astromotion's remark plugin doesn't descend into
  the JSX element and `![qr](url)` degraded silently to a plain `<img>`
  pointing at the URL — a broken image that the build, the structure check
  and the link checker all passed. Fixed by putting the QR at slide top
  level and building the two columns in `theme.css` by placing the slide's
  own children on a grid.

### Not verified: slide fit

`astromotion-check` needs `puppeteer-core` and a Linux Chrome. This machine
has only the Windows Chrome, which a Linux puppeteer can't drive, so the
check can't run here at all — adding the dependency would not help. Slide
fit is therefore eyeball-only: `pnpm dev` and read both decks at the two
marking viewports.

The tightest slides, if something does overflow: week 1 slides 2, 11, 12 and
17, and week 3 slides 5 and 10 — each is a two-line heading plus three
paragraphs of body copy.

## Open questions

- Two deck backgrounds still to generate (see Imagery). Both cold-open
  slides currently carry `_class: impact` and read as deliberate flat gold
  slides without artwork; each has a `comment` fence saying what it wants
  and to switch to `_class: hero` when it arrives.
- Whether week 1 slide 2 wants a redrawn chart.
- **`index.astro` promises "a written record of five real interactions",
  but no assessment produces a written record** — `crit-participation` says
  "nothing written ahead of time… the report and reflection are spoken,
  live", and `legacy` says "no written report is due separately". The decks
  were written to the assessment pages (five interactions, five clips) and
  deliberately don't repeat the home page's phrasing. Belongs to `home.md`.
- Slide fit at both viewports (see above) — the one thing `pnpm check`
  cannot tell us.
