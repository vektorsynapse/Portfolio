# AI Agent & Model Instructions (AGENTS.md)

> [!IMPORTANT]
> **MANDATORY DIRECTIVE FOR ALL AI MODELS, ASSISTANTS, AND AGENTS**
> Every AI agent, model, or tool MUST read, strictly respect, and follow all instructions in this file before proposing or making ANY changes to the codebase. No exceptions.

---

## 1. Strictly NO Git Operations
- **NEVER** run `git commit`, `git push`, `git add`, `git checkout`, `git branch`, `git reset`, `git rebase`, or any git management commands.
- The developer manages version control exclusively. Never attempt to automate git workflows or manipulate git history.

## 2. Strictly Scoped Changes ("Do Only What Was Asked")
- **Touch ONLY what was explicitly requested**: Never modify unrelated files, components, lines, styles, or configuration.
- **Do not refactor or reformat unrelated code**: Do not "clean up", rename, or reorganize code that is outside the scope of the user request.
- **Zero side-effects on existing functionality**: Ensure any change made does not break, degrade, or unexpectedly alter other sections, pages, or features.

## 3. No Hardcoded Values or URLs (Use Environment Variables)
- **NEVER hardcode**:
  - API URLs, domain names, site links, or endpoint paths.
  - Secret keys, access tokens, credentials, or email IDs meant to be configurable.
- **Always use environment variables** (e.g., `process.env.NEXT_PUBLIC_*` for client-safe values, or server-only env vars).
- If a new environment variable is introduced, document it clearly in `.env.example`.

## 4. Senior Production-Grade Architecture & Clean Code
- **Code standards**: Write robust, scalable, modular, and strictly type-safe TypeScript code.
- **Folder structure**: Respect the existing project architecture (`app/`, `components/`, `lib/`, `public/`). Do not introduce arbitrary or redundant folder patterns.
- **Cleanliness & readability**: Write clean, self-explanatory code with proper semantics, accessibility attributes (ARIA), and zero clutter or dead code.

## 5. Comprehensive Mobile & Cross-Device Responsiveness
- **All screen heights & widths**: Every UI component must look polished and well-proportioned across all devices:
  - Small-height mobiles (e.g., iPhone SE at 375x667, 360x640).
  - Modern tall mobiles (e.g., Pixel 8 at 412x915, iPhone Pro Max at 430x932).
  - Tablets and desktop screens.
- **Avoid empty space bugs**: Never apply full-screen vertical centering (`min-h-[100dvh]` with `justify-center`) on mobile without appropriate responsive overrides (`md:`), avoiding heavy dead space at the top or bottom of tall mobile viewports.

## 6. Do NOT Run Builds or Tests for Small Changes
- **NO automatic builds or tests**: Do NOT run `npm run build`, `bun run build`, `npm test`, `bun test`, or heavy verification pipelines for small tweaks, styling fixes, or minor component edits.
- **Run only when explicitly asked**: Only execute builds or tests if the user directly asks for it, or when a massive, complex feature rewrite strictly warrants it and the user has agreed.

## 7. NO Puppeteer or Headless Browser Automation
- **NEVER** launch Puppeteer, Chrome DevTools automation, or headless browser scripts to inspect, screenshot, or navigate the site.
- The developer tests and visually inspects changes directly in their own browser and developer tools.

## 8. No Overthinking, Infinite Loops, or Unnecessary Tool Calls
- **Stay direct and focused**: Provide concise, targeted solutions without unnecessary complexity, over-engineering, or speculative refactoring.
- **No polling loops**: Never run background checks, timers, or sleep loops waiting for unwanted events.
- **Execute cleanly**: Complete the requested task accurately in minimal, confident steps.
