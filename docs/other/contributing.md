---
title: Contributing
description: Guidelines for proposing new resources, reporting dead links, and keeping BrokerLord accurate.
---

# Contributing to BrokerLord

<p class="bl-page-lead">BrokerLord stays useful because every resource is vetted for quality, safety, and openness.</p>

## Submit a Resource or Report a Link

You can send new resource suggestions, broken-link reports, or category ideas directly to BrokerLord:

- **Email:** [brokerlordmefoolhe@gmail.com](mailto:brokerlordmefoolhe@gmail.com)
- **Instagram DM:** [@brokerpratik](https://www.instagram.com/brokerpratik/?hl=en)

## Curation Standards

Before submitting a site, app, or tool to BrokerLord, please check that it meets our criteria:

1. **Genuinely Free or Open Source:** Must offer substantial free utility without deceptive paywalls, dark patterns, or adware installers.
2. **Legitimate & Safe:** Only official project domains, verified GitHub/Codeberg repositories, or reputable public institutions.
3. **Actively Maintained:** Projects should be working, accessible, and regularly maintained (or well-established public archives).
4. **Clear Description:** Every entry includes a concise, honest 1-line summary of what it does best.

## Entry Format

All directory pages are written in clean Markdown inside `docs/`. New entries follow this format:

```markdown
- **[Tool Name](https://example.org/)** — Short, clear description of what the tool does. <TagBadge type="foss">FOSS</TagBadge>
```

For standout, best-in-class picks, add the top-pick highlight span:

```markdown
- <span class="bl-star">★ Top Pick</span> **[Tool Name](https://example.org/)** — Best-in-class description. <TagBadge type="privacy">Privacy</TagBadge>
```

## Running Locally

To edit pages and preview changes locally with live reload:

```bash
npm install
npm run dev
```

To build the static production bundle into `docs/.vitepress/dist`:

```bash
npm run build
```
