# Process overview

## What I built

I am in my graduating semester, and looking back, the Computer Science student experience has felt quite independent, lacking the social nature other degrees seem to have had. *Hallway Economics* is built based on this gap - a structured way to nudge students into making the most of the campus experience, and building up their confidence. The tasks in this course are revolved around being present on campus, initiating conversation, putting yourself out there - with advice/teaching by people from various degrees and experiences, rather than one narrow perspective.

## How I got here

### Harness
Before writing the content, I decided what a 'good version/structure' of this course looks like and encoded it into the harness, so every session started already aligned on the goal (also helping me not drift). Two key choices here include the course's structure (engage in the hallway, report back to a group) and a single source of truth (`src/course-config.ts`) for course facts (dates, weightages, etc), rather than restating them and risking contradiction ([`3e21d22`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BilalM004/commit/3e21d22)). A small `CLAUDE.md` gave every session that context without eating into it.

I set up verification early on too, so the tests/checks could give backpressure and catch misalignment. What could be tested deterministically, was, i.e. the assessment weightages adding to 100. However, content and language choices cannot be checked with a simple truth value, thus, a skill, `content-review`, was created, comparing pages against `CLAUDE.md`, `course-config` and `policies`, reporting contradictions and tone and theme drifts, providing a signal to tweak the content into being consistent. ([`0a899dd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BilalM004/commit/0a899dd))

This judgement earned its keep - catching many contradictions, and allowing for fixes, early, with one such example being: finding the Week 3 lecture slide deck stating "*Two weeks ago you all stood up and reported*", which would not be true as the reporting part of the session happens on even weeks, thus would have been "*Last Week*" (thus the catch allowing for a correct push from the start [`24b7457`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BilalM004/commit/24b7457a51daca6487da1349ead09d44db7017fd#diff-7383b095c36ec2054d57d167c83fb00385c455af7100e38c674d5fe80f3496eeR25-R29))

### Content Generation
For content generation, I wanted the right tone per page and person. `VOICE.md` sets that out per page type - e.g. a contrast being the home page sells the semester, policies stays plain, no jokes, trust literally. I then had the agent wire each page's voice into its own `deliverables/*.md` tracker, so loading just that deliverable into a session was enough for it to know the tone to write in ([`8061d3b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BilalM004/commit/8061d3b0c407cb82d694fd7f5fe2f606cf8eaef6)).

I also wanted to give different people their own personalities which could be seen. I gave Claude content from [JCU's Personality And Personal Attributes](https://www.jcu.edu.au/employability-edge/you-and-your-career/personality-and-personal-attributes), and then described each staff member for the session, and it used this to create their personality traits and tone, to appear in content '*about, or authored by, them*'.  ([`81af923`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BilalM004/commit/81af9234597700c0f53496123786dadd5562890b))

When generating slide deck content, I wanted the content be to thought out, utilising other pages of the site, as well as sourcing external, relevant, content. Recognising this to be a heavier task, I switched to Opus 5 to utilise its thinking/researching abilities, as well graph generation to have some figures for the slides (e.g. [`8db8c76`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-BilalM004/commit/8db8c764132b6e418569b20be7f0ae3dffe6252a)). Though this worked well and achieved the goal, it burned tokens significantly quicker.

For image generation - the home hero, the people portraits, and their profile background images - I used Gemini, following the Slop University aesthetic. With few-shot prompting, I gave it reference material from the Slop University site plus my own descriptions. When left open-ended, or generating multiple images in one session, it drifted noticeably from the speficiation. Being specific about settings and aesthetics rather than letting it infer them fixed this straying.

### Model types and Subagents

Initially, I worked one deliverable at a time, deliberately, to focus on 'doing the task right'. But long generations wasted idle time, so I switched to running multiple sessions in parallel, moving between deliverables as each one worked, whilst still keeping the context of a specific session to its designated task. After generating and reviewing Weeks 1-2 slides and settling on a structure, I split the work into subagents, parallelising generation and content research, and returning to give feedback and fix issues, making the workflow far more efficient.
