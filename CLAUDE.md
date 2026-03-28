# CLAUDE.md

## Project

Conspiracy-style presentation about Shakespeare's marriage to Anne Hathaway, built with Marp.

## Key Files

- `hathaway_dossier.md` — Marp source deck (edit this to update the presentation)
- `hathaway_dossier.html` — Exported HTML for GitHub Pages (regenerate from the .md)
- `research/` — Source research; treat as read-only reference material

## Regenerating the HTML

```bash
npx @marp-team/marp-cli hathaway_dossier.md --html -o index.html
```

The `index.html` at the repo root is what GitHub Pages serves — keep it up to date when the deck changes.

## Hosting

GitHub Pages serves from the `main` branch root. The entry point is `index.html`.
To update the live site: edit the `.md`, regenerate the `.html`, commit, and push.

## Skills

The `/create-marp-deck` skill (from [Omerr/claude-skills](https://github.com/Omerr/claude-skills)) was used to build the initial deck. It lives in `.agents/skills/create-marp-deck/`.
