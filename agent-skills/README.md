# Agent skills

The tracked source for this repo's Claude Code skills — committed so they're
part of the process record, unlike `.claude/`, which is machine-local and
gitignored by the template.

To actually run one as a live skill, it has to exist under
`.claude/skills/<name>/SKILL.md` too: symlink or copy it there. A fresh clone
of this repo won't have that wired up automatically — that's expected, since
nothing under `.claude/` is committed.

- `content-review/` — reads every course page against `CLAUDE.md`, the course
  config, and the policies page; reports contradictions, tone drift, policy
  mismatches and thematic drift. Judgment-based, run on demand before
  shipping, not a `pnpm check` gate.
