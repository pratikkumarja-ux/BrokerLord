# BrokerLord Directory

A static curated web directory built with **VitePress**, inspired by [fmhy.net](https://fmhy.net/).

## Features

- **Light / Dark / AMOLED (`#000000`) Display Mode Toggle** — 1-click mode switcher in the navbar plus an FMHY-style theme popover with **7 live accent color palettes**, persisted in `localStorage` with zero FOUC.
- **Category Sidebar** — Color-coded icon sidebar organizing 13 curated directory categories, Beginners Guide, and Monthly Updates.
- **Instant Local Search** — Powered by VitePress MiniSearch with fuzzy matching, detailed previews, and `/` or `Ctrl + K` keyboard shortcuts.
- **Homepage Category Grid** — Responsive FMHY-style card grid with group filter pills (`All`, `Privacy, AI & Web`, `Media & Reading`, `Apps & OS`).
- **Wiki Polish** — Starred `★ Top Pick` highlights, inline `FOSS` / `Privacy` / `Web` badges, right-hand table of contents, and interactive page feedback widget.

## Commands

```bash
# Install dependencies
npm install

# Start live development server
npm run dev

# Build static production site (outputs to docs/.vitepress/dist)
npm run build

# Preview built static site locally
npm run preview
```
