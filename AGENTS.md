# GenCreator Studio — cross-harness agent contract

> The portable agent card. Same contract in Claude Code, Codex, Cursor, Gemini CLI, or OpenCode.
> This repo also carries `CLAUDE.md`; **where the two disagree, `CLAUDE.md` wins.**

**Tier:** T1 — revenue surface. A deployable template; changes here ship to other people's Vercel projects.
**Company:** GenCreator · **Brand register:** `gencreator` (decision-first, no prestige language)
**Accountable seat:** `agent:starlight-ceo` (GenCreator scope) · **Copy gate:** `agent:starlight-cmo`
**Escalates to:** CEO, then Frank

Bands A (inherited DNA, guardrails, branch protocol) and B (company projection) are specified in
[`Starlight-Intelligence-System/docs/architecture/AGENTS-MD-CONTRACT.md`](https://github.com/frankxai/Starlight-Intelligence-System/blob/main/docs/architecture/AGENTS-MD-CONTRACT.md)
and will be generated into this file when `scripts/agents-md-project.mjs` ships. Everything below is Band C —
repo-local, hand-written, and **it outranks the generated bands on any conflict inside this repo.**

---

## What this repo is

A Next.js 16 + Tailwind **template**, MIT licensed. It is the public gallery, distributor, and attestation
surface for a Creator Intelligence System instance — the face a creator deploys while authoring stays in
whatever agent workspace they already use.

The protocol lives in `creator-intelligence-system`. **This repo is the surface, not the protocol.** Product
decisions about the CreatorPack contract, the Companion runtime, or entitlements belong upstream in
`gencreator.ai`, not here.

## Template discipline — the rule that shapes everything

Every change lands in a stranger's Vercel project via one-click deploy or `gh repo create --template`. So:

- **The default path must build with zero environment variables.** No server-side LLM key required for the
  subscription-first flow. Env vars unlock channels; they are never required to render.
- **No hardcoded Frank content.** Anything creator-specific is placeholder or config. A deployed fork that
  still says "Frank" is a bug.
- **No secret ever reaches the client.** `NEXT_PUBLIC_*` is browser-exposed — check the prefix before adding
  a variable, every time.
- **Breaking a deployed fork is a real cost.** Additive over breaking; if a change breaks existing forks, say
  so in the PR and in `DEPLOY.md`.

## Commands

```bash
pnpm dev         # next dev --turbopack
pnpm build       # next build — must pass before any PR is marked ready
pnpm lint        # eslint .
pnpm typecheck   # tsc --noEmit
```

pnpm with the committed lockfile. Do not introduce npm or yarn. Run `pnpm build && pnpm lint && pnpm typecheck`
before pushing — a template that fails to build fails for everyone who deploys it.

## Web design gate — load-bearing

Any UI or visual work goes through the `web-release-gate` skill **before** writing components, per `CLAUDE.md`.
Done requires audit findings plus before/after screenshots at 375 / 768 / 1440 — never a self-assigned score.
Any `design.md` / `taste.md` in this repo outranks every skill in that pack.

## Copy

Public copy passes the CMO gate: no unsourced numbers, no prestige language, no `unlock` / `supercharge` /
`revolutionary` / `in today's fast-paced world`. Sentence case for public labels. **Title is "AI Architect" —
never "AI Systems Architect". No Oracle references.**

## Do not

- Add a required environment variable to the default render path.
- Rename a working route. URLs in a deployed template are other people's links.
- Import from `gencreator.ai` or vendor its private product surface here — this repo is MIT.
- Commit `.env`, a credential, or a real creator's content.
- Claim the Companion alpha is available. It is not, and this repo does not gate it.

## Branch and PR

Work on `agent/<harness>/<scope>` or the branch you were assigned. Open a **draft** PR; mark ready only after
build, lint, and typecheck are green. Never push directly to `main`.

Built on SIP.
