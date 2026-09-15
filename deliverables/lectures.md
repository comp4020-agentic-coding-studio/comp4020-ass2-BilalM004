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

## Lecture 1 — Week 1: Starting a Conversation

`src/content/lectures/week-01.md` · deck `/decks/week-01/` · 20 slides

Two presenters, split by act, reflected in `teachers: [george-curious,
haskell-byte]`. George Curious (convenor) opens with course-wide
orientation; Haskell Byte (Crossing 1's tutor) takes the content. Each
section reuses an existing `VOICE.md` page-type register rather than
inventing new tone rules — the deck compresses several page types' voices
into one performance artefact, deliberately swinging across `VOICE.md`'s
stated "two poles" (Home → Policies) within a single deck instead of across
separate pages.

### Act 1 — George Curious: what you've signed up for

| #  | Slide | Register | Class | Data / source | Links out |
| -- | ----- | -------- | ----- | ------------- | --------- |
| 1  | Cold open: you're on a bus next to a stranger. Talk, or keep to yourself — which ride is better? | Home | `impact` | — | — |
| 2  | The answer: people forecast the reverse. The talkers had the best ride of all three conditions. | Home | — | sourced: Epley & Schroeder (2014) | — |
| 3  | What this course is | Home | — | `courseMeta` (title, description, tags) — plain import, no await | — |
| 4  | What you walk out with: five real interactions, one video, built one clip at a time | Home | — | prose; matches `index.astro` | `/sessions/` |
| 5  | The shape of a Crossing: two weeks — out, then back. Both halves are the Crossing. | Lectures | — | prose | `/sessions/` |
| 6  | Who's teaching it | People | — | `getCollection("people")` via `DeckPeople.astro` — portraits, name, role, affiliation | `/people/` |
| 7  | What it's worth | Assessments | — | `getCollection("assessments")` via `DeckAssessments.astro` — title, weight, week (**not** `due`) | `/assessments/` |
| 8  | Two rules: nothing is late, because nothing is submitted. Your reflections are yours — no AI. | Policies | `centered` | prose, near-empty slide — the flatness is the point | `/policies/` |
| 9  | Handoff | — | `banner` | one line, explicit tone-shift beat | — |

### Act 2 — Haskell Byte: the walk-up

| #  | Slide | Class | Data / source | Links out |
| -- | ----- | ----- | ------------- | --------- |
| 10 | Talking to strangers is a protocol, not a trait | `impact` | sourced: Atomic Habits — systems over goals | — |
| 11 | So you're not bad at this; you're running an inaccurate forecast | — | callback to slide 2 — *trim candidate if the deck runs long* | — |
| 12 | Part 1 — Reason. "Because my course told me to" isn't one. | — | `01-say-something` | `/sessions/01-say-something/` |
| 13 | Part 2 — Opener. Not "so, what do you do." | — | campus-concrete: library table, coffee-cart queue, edge of the room | — |
| 14 | Part 3 — Exit. Leaving without slamming the door. | — | craft, unsourced | — |
| 15 | Where it actually happens: the edge of the room | `quote` | full-bleed background | `/sessions/01-say-something/` |

### Act 3 — Haskell Byte: the telling

The act the earlier plan was missing. CLAUDE.md states it twice: the work is
done out in the hallway **and reported back**, and a page with no trace of
the telling is half a Crossing. Without this act the deck teaches the walk-up
and never mentions that 60% of `crit-participation`'s criteria are about
what you say afterwards.

| #  | Slide | Class | Data / source | Links out |
| -- | ----- | ----- | ------------- | --------- |
| 16 | Half a Crossing. Doing it isn't the Crossing. | `impact` | CLAUDE.md's rule, said out loud | — |
| 17 | What a report-back sounds like: the version you'd have given five minutes after, hesitations included | — | `02-how-it-landed` | `/sessions/02-how-it-landed/` |
| 18 | Someone will ask a follow-up. That's not a stress test bolted on — it's the other half. | — | `crit-participation` criterion 3 | `/assessments/crit-participation/` |
| 19 | Seek discomfort | `impact` | sourced: Yes Theory | — |
| 20 | This week: go do it · get the clip · report at How It Landed | `centered` | — | `/sessions/01-say-something/`, `/assessments/legacy/`, QR |

### Frontmatter

```yaml
teachers:
  - george-curious
  - haskell-byte
slides: /decks/week-01/
related:
  - sessions/01-say-something
  - sessions/02-how-it-landed
  - assessments/crit-participation
links:
  - label: 'Epley & Schroeder (2014), "Mistakenly Seeking Solitude"'
    url: https://www.chicagobooth.edu/media-relations-and-communications/press-releases/mom-was-wrong-you-should-talk-to-strangers
  - label: James Clear, Atomic Habits
    url: https://jamesclear.com/atomic-habits
  - label: Yes Theory — Seek Discomfort
    url: https://www.youtube.com/@YesTheory
```

`teachers` gains `haskell-byte`; `related` gains the report-back and the
assessment. Three `links:`, each doing a different job — evidence,
framework, motivation — and each now mapped to a specific slide (2, 10, 19).

Epley & Schroeder is safe to state qualitatively only: nine experiments,
three conditions (connection / solitude / control) on commuter trains and
buses, connection group most positive, participants forecast the reverse.
The release publishes no effect sizes, so the slide must not invent a number.

## Lecture 2 — Week 3: The Exchange

`src/content/lectures/week-03.md` · deck `/decks/week-03/` · 13 slides

One presenter — Yu Tobe, Crossing 2's tutor — a deliberate contrast with
week 1's two. Register is Lectures throughout: motive, objective, outcome,
no course admin.

**Angle: a trade is only worth making if it's worth telling afterwards.**
Straight out of Yu's bio, and a genuinely different lecture from week 1
rather than a reprise. Week 1 said: walk up, then account for it. Week 3
says: the account is the point, so make trades that survive being told.
It also gives the clip a teacher — Yu is the YouTuber, and nothing on the
site currently teaches clip craft.

Structured on Yu's own beats — cold open, complication, payoff — which is a
formal joke that is also just the right shape.

### Cold open

| #  | Slide | Class | Data / source | Links out |
| -- | ----- | ----- | ------------- | --------- |
| 1  | Nobody watches a video where nothing happens | `impact` | Yu's bio, verbatim | — |
| 2  | Two weeks ago you all reported. The room leaned in for some and not others. | — | callback to Crossing 1 | `/sessions/02-how-it-landed/` |
| 3  | A boring report-back isn't a bad grade waiting to happen. It's a sign the trade needs another pass. | — | Yu's bio, verbatim — the thesis | — |

### Complication — the trade

| #  | Slide | Class | Data / source | Links out |
| -- | ----- | ----- | ------------- | --------- |
| 4  | Conversation was free. This one has a price. | — | `03-make-a-trade`; spec lines rendered live via `DeckSpec.astro` | `/sessions/03-make-a-trade/` |
| 5  | No cash, on purpose | — | sourced: Ariely, social vs market norms — introducing money doesn't price the exchange, it destroys it | — |
| 6  | Name your price first, before you know what comes back | — | sourced: Mauss — give, receive, repay; `03`'s spec line 3 | — |
| 7  | Pick your currency: object · favour · tip · skill | — | campus-concrete: the busker's amp, the badge stall, a bike chain | — |
| 8  | Every trade has a rate, whether or not you did the arithmetic | — | `04-the-exchange-rate` | `/sessions/04-the-exchange-rate/` |
| 9  | A bad trade is still a good report. "Fair" isn't the only acceptable answer. | — | `04`'s body + `crit-participation` — marked on what it bought you, not on whether you won | `/assessments/crit-participation/` |

### Payoff — the telling, and the clip

| #  | Slide | Class | Data / source | Links out |
| -- | ----- | ----- | ------------- | --------- |
| 10 | Storyboard your trade: what you wanted, what you offered instead, the bit you'd cut at thirty seconds | — | Yu's bio + sourced: Pixar story spine (Coats #4) | — |
| 11 | The clip: one per Crossing, five by the end. Not documentation — the thirty seconds that prove it happened. | — | requirement lives in `legacy.md`; link, don't restate | `/assessments/legacy/` |
| 12 | You already have one. Go look at your Crossing 1 clip. Would you watch it? | `impact` | closes the series | — |
| 13 | This week: make the trade · name the price first · get the clip · report at The Exchange Rate | `centered` | — | `/sessions/03-make-a-trade/`, `/sessions/04-the-exchange-rate/`, QR |

### Frontmatter

```yaml
week: 3
date: 2026-08-10
teachers:
  - yu-tobe
slides: /decks/week-03/
related:
  - sessions/03-make-a-trade
  - sessions/04-the-exchange-rate
  - assessments/legacy
links:
  - label: "Marcel Mauss, The Gift (1925)"
    url: https://haubooks.org/the-gift/
  - label: "Dan Ariely, Predictably Irrational — the cost of social norms"
    url: https://www.npr.org/19216880
  - label: "Emma Coats, Pixar's 22 rules of storytelling"
    url: https://www.openculture.com/2013/03/pixars_22_rules_of_good_storytelling.html
```

`date` matches `03-make-a-trade`. Three `links:`, same three-job pattern as
week 1 — framework (Mauss), evidence (Ariely), craft (Coats) — each mapped
to a slide (6, 5, 10).

The `assessments/legacy` edge renders a "Week 3: The Exchange" link on the
Legacy page. That is correct — week 3 is where the video is actually
taught — but it is the one edge worth a second look when the page is read
whole.

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
3. **Week 1 slide 15** — the edge of the room. Could reuse
   `src/assets/images/hero-home-themed.jpg` (already on disk, unused since
   the home-hero trial on 2026-09-14), copied to `src/decks/assets/` because
   deck image paths must be deck-relative. **No generation needed.**
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
