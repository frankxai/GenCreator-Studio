# GenCreator Studio

> **The Vercel template that turns a [Creator Intelligence System (CIS)](https://github.com/frankxai/creator-intelligence-system) instance into a living studio.**
> One-click deploy. Your palace, your voice, your channels. MIT licensed.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/frankxai/GenCreator-Studio)

---

## What it is

GenCreator Studio is a Next.js 16 + Tailwind + Vercel AI SDK template. It is the reference amplifier for CIS — the visible surface a creator interacts with day-to-day. The protocol lives in [creator-intelligence-system](https://github.com/frankxai/creator-intelligence-system); the Studio is what makes it tangible.

```
┌────────────────────────────────────────────────────┐
│  GenCreator Studio  (this repo)                    │
│  ┌──────────────────────────────────────────────┐  │
│  │  Capture · Calendar · Formats · Agents       │  │
│  │  Produce · Distribute · Learn                │  │
│  └──────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────┘
                       │
              uses CIP v0.1 protocol
                       │
┌────────────────────────────────────────────────────┐
│  Creator Intelligence System  (sibling repo)       │
│  L1 Substrate · L2 Capture · L3 Strategy           │
│  L4 Production · L5 Distribution · L6 Learning     │
└────────────────────────────────────────────────────┘
```

---

## Who it's for

- **Creators** who want a sovereign content brain instead of renting one from Buffer / Notion / HeyGen.
- **AI architects** who want a reference Vercel template for agent-orchestrated content workflows.
- **Independent operators** who want to ship a content business without a team but with team-grade rigor.

---

## What you get

- **One-click Vercel deploy** with sensible defaults
- **Studio dashboard** — Capture, Calendar, Formats, Agents, Produce, Distribute, Learn
- **CIS-typed everywhere** — every artifact conforms to the [CIP v0.1 protocol](https://github.com/frankxai/creator-intelligence-system/blob/main/SPEC.md)
- **Voice-first capture** (optional — Claude / ChatGPT / CC native dictation works too)
- **Attestation rendered** on every published piece (the moat)
- **Multi-channel distribution** — Bluesky, LinkedIn, Beehiiv (MV1) → 8+ channels (MV2)
- **Brand voice config** — single source via `@cis/voice`, banned-phrase + quarantine audit
- **MIT** — fork freely, sell what you build

---

## Quick start

```bash
# 1. Use as template
gh repo create my-studio --template frankxai/GenCreator-Studio --public
cd my-studio

# 2. Install
pnpm install

# 3. Configure
cp .env.example .env.local
# Edit .env.local — minimum viable: ANTHROPIC_API_KEY

# 4. Run
pnpm dev
```

Then open `http://localhost:3000`.

---

## Configuration

GenCreator Studio reads from environment variables. See [`.env.example`](./.env.example).

| Variable | Required | Description |
|---|---|---|
| `ANTHROPIC_API_KEY` | yes | Server-side LLM calls. Pay-per-token billing — Claude Max cannot power server apps |
| `AI_GATEWAY_TOKEN` | optional | Vercel AI Gateway for multi-provider routing + caching |
| `BLUESKY_HANDLE` | for distribution | App password from bsky.app — free, no API key |
| `BLUESKY_APP_PASSWORD` | for distribution | Generate at bsky.app/settings/app-passwords |
| `LINKEDIN_ACCESS_TOKEN` | for distribution | OAuth 2.0 token (60-day) — see DEPLOY.md |
| `BEEHIIV_API_KEY` | for distribution | From Beehiiv account settings |
| `CIS_PALACE_DIR` | optional | Path to your SIS palace (defaults to `./.palace/`) |
| `CIS_VOICE_PROFILE` | optional | Path to a custom voice profile JSON |

---

## Deploy

See [DEPLOY.md](./DEPLOY.md) for:

- One-click Vercel deploy walkthrough
- Custom domain setup
- LinkedIn OAuth setup
- Bluesky app password setup
- Cost estimation (API + Vercel)

---

## Customize your voice

```ts
// lib/voice.ts
import { extendProfile, DEFAULT_VOICE } from '@cis/voice'

export const myVoice = extendProfile(DEFAULT_VOICE, {
  id: 'my-brand',
  northStar: 'Bold. Specific. Earned.',
  attributes: {
    rigor: 'every claim has a source',
    warmth: 'professional without being cold',
  },
  bannedPhrases: ['journey', 'transformation'],
  quarantinedTerms: [],
})
```

The studio loads `myVoice` at startup and audits every L4 production output against it.

---

## What's NOT in this template

- **Voice capture is optional.** Not the moat. If you prefer to dictate via Claude Code or ChatGPT and paste briefs in, you can.
- **No SaaS infra.** This is a deployable template, not a managed service. You run it.
- **No AI provider lock-in.** Vercel AI SDK abstracts the model layer — swap providers without touching app code.
- **No auth out of the box.** Add `next-auth` or Clerk if you need multi-user. By default, the Studio is a single-creator surface.

---

## Roadmap

- **MV1 (this week):** Capture surface, Bluesky distribution, attestation rendering
- **MV2 (May):** All 7 dashboard surfaces, 8 distribution channels, format library
- **MV3 (June):** AgentDB learning loop, Farcaster Frames, MCP server bundled
- **v1.0 (October):** Tauri desktop wrapper, multi-creator briefs, music as content type

Full roadmap: [creator-intelligence-system/ROADMAP.md](https://github.com/frankxai/creator-intelligence-system/blob/main/ROADMAP.md).

---

## Contributing

This template tracks `creator-intelligence-system@latest`. PRs welcome for:

- New L5 distribution adapters (channel integrations)
- L4 production adapter implementations (image / video / audio providers)
- UI surfaces for the 7 dashboard areas
- Tauri / Electron wrappers
- i18n

See [creator-intelligence-system/CONTRIBUTING.md](https://github.com/frankxai/creator-intelligence-system/blob/main/CONTRIBUTING.md).

---

## License

MIT. See [LICENSE](./LICENSE).

---

## Sibling projects

- [Creator Intelligence System (CIS)](https://github.com/frankxai/creator-intelligence-system) — the substrate this Studio runs on
- [Starlight Intelligence System (SIS)](https://github.com/frankxai/Starlight-Intelligence-System) — L1 substrate (memory palace)
- [Library OS](https://github.com/frankxai/library-os) — sibling content substrate for books

---

## Status

**v0.1.0-alpha** · 2026-05-07

Foundation commit. Working flows land across MV1 (this week). Bookmark and watch for v0.1.0 tag.

---

> *Open the lid. Speak. Ship. Verify.*
