# portfolio

My personal portfolio site, written by hand in Nuxt 3 in February 2023, before I used AI coding tools.

The code is preserved exactly as I last committed it on 2023-02-17. The only later changes are this README and removing the Cloudflare zone ID from `wrangler.toml`.

## About this snapshot

- **Written:** 2023-02-06 to 2023-02-17 (58 commits)
- **Author:** Taylor Finklea. I wrote the source code (pages, components, content, and config) without AI coding tools. `package-lock.json` is generated.
- **Status:** Frozen. It isn't maintained, and its dependencies are from early 2023, so they have known vulnerabilities and may not install or build on current Node.js. It's here to read, not to deploy.

A later version of this site, updated with AI assistance from 2025 to 2026, is kept separately on the `archive/ai-assisted-2025-2026` branch so the two are easy to tell apart. The tag `pre-ai-2023` marks the last hand-written commit.

## What's in it

- **Stack:** Nuxt 3 (SSR), Vue 3 `<script setup>` with TypeScript, Tailwind CSS, Headless UI, VueUse, and Nuxt Content
- **Pages:** home, about, projects, talents, and uses, under `pages/`
- **Projects:** Markdown files in `content/projects/project/` that Nuxt Content renders through a catch-all route (`pages/projects/project/[...slug].vue`). The `useProjects` composable builds the project list from the content navigation tree.
- **Components:** a sticky nav bar with a Headless UI popover menu for mobile, a light/dark/auto theme toggle, hero and work-history cards, a talent list, and a uses section
- **Theming:** a Tailwind theme in `tailwind.config.js` that maps zinc, cyan, and teal to primary and accent color names, with class-based dark mode, plus page transitions set in `nuxt.config.ts`
- **Deployment:** The Nitro preset went from Cloudflare Pages to Cloudflare Workers, then Netlify, then Vercel. `nuxt.config.ts` ends on Vercel. `wrangler.toml` is left over from the Cloudflare Workers attempt.

## Running it (historical)

These are the commands I used at the time:

```bash
npm install
npm run dev
```

A fresh install today won't reproduce the 2023 build. The committed `package-lock.json` is out of sync with `package.json`, and `package.json` overrides Vue to `latest`, so npm resolves newer packages that the 2023 code doesn't support. The original dependencies required Node 16–19 (or Node 14.16 and later).
