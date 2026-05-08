# Deploy GenCreator Studio

> One-click Vercel deploy + walkthrough for distribution channel setup.

---

## Option 1 — One-click Vercel deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/frankxai/GenCreator-Studio)

This forks the repo into your GitHub and creates a Vercel project. No server-side LLM key is required for the default subscription-first flow. Environment variables unlock distribution channels and optional hosted automation.

---

## Option 2 — Manual deploy

```bash
# 1. Use this repo as a template
gh repo create my-studio --template frankxai/GenCreator-Studio --public --clone
cd my-studio

# 2. Install dependencies
pnpm install

# 3. Set up environment
cp .env.example .env.local
# Edit .env.local — see "Required env vars" below

# 4. Test locally
pnpm dev
# Open http://localhost:3000

# 5. Deploy to Vercel
pnpm dlx vercel --prod
```

---

## Environment variables

The Studio deploys with zero required secrets. Distribution channels and hosted automation are progressive enhancement.

### Minimum

```
# none
```

Author in Claude Code, Claude Projects, ChatGPT Projects/GPTs, Cursor, or another creator-owned agent workspace. Import the resulting CIP bundles into the Studio for review, distribution, and attestation.

### Optional hosted automation

```
AI_GATEWAY_TOKEN=...
ANTHROPIC_API_KEY=sk-ant-...
```

Use these only if you want the deployed app to run server-side model calls. Vercel AI Gateway adds caching, observability, and multi-provider fallback; configure it at [vercel.com/dashboard/ai/gateway](https://vercel.com/dashboard/ai/gateway). Anthropic API keys are pay-per-token.

Claude Pro/Max subscriptions do not bill server-side API calls. They work for Claude Code and Claude Projects, which is the default CIS authoring path.

---

## Distribution channel setup

### Bluesky (free, no API key, no rate limit)

```
BLUESKY_HANDLE=yourhandle.bsky.social
BLUESKY_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
```

1. Sign in at [bsky.app](https://bsky.app).
2. Settings → Privacy and security → App passwords → Add app password.
3. Copy the password (shown once).

Bluesky is the easiest channel to wire. The Studio defaults to Bluesky for MV1.

### LinkedIn (OAuth 2.0)

```
LINKEDIN_CLIENT_ID=...
LINKEDIN_CLIENT_SECRET=...
LINKEDIN_ACCESS_TOKEN=... # 60-day token; refresh per LinkedIn API
```

1. Create an app at [linkedin.com/developers](https://www.linkedin.com/developers/apps).
2. Add OAuth 2.0 scopes: `w_member_social` (personal posts), `w_organization_social` (company posts).
3. Generate access token via the OAuth flow (the Studio includes a `/api/linkedin/auth` endpoint that handles this).
4. Tokens last 60 days; the Studio refreshes automatically when the refresh token is set.

Rate limit: 100 calls per day per member. Plan posts accordingly.

### Beehiiv (newsletter)

```
BEEHIIV_API_KEY=...
BEEHIIV_PUBLICATION_ID=pub_...
```

1. Beehiiv settings → Integrations → API → Generate key.
2. Find publication ID at the top of the same page.
3. Beehiiv Scale plan ($99/mo) required for full API access.

### Farcaster (web3 social)

```
NEYNAR_API_KEY=...
FARCASTER_FID=...
```

Sign up at [neynar.com](https://neynar.com). Free tier covers development. Casts post programmatically; Frames v2 are an MV3 feature.

### Other channels

YouTube, TikTok, Instagram, Threads, X — wired in MV2 / MV3. See `creator-intelligence-system/ROADMAP.md`.

---

## Custom domain

```bash
pnpm dlx vercel domains add yourdomain.com
pnpm dlx vercel link  # link this project to the domain
```

Set DNS as Vercel instructs.

The attestation `well-known` endpoint becomes `https://yourdomain.com/.well-known/cis/attestations/{id}` once your custom domain is live.

---

## Cost estimation

For a single-creator Studio publishing 5 posts per week:

| Item | Estimate |
|---|---|
| Vercel Hobby (free) or Pro | $0 / $20/mo |
| Server-side model API | $0 by default; optional if hosted automation is enabled |
| Vercel AI Gateway | $0 by default; free tier usually sufficient if enabled |
| Bluesky | Free |
| LinkedIn API | Free (within 100 calls/day) |
| Beehiiv | $99/mo (Scale plan, only if newsletter is active) |
| Domain | ~$15/yr |

**Single-creator total:** $0-20/mo before newsletter/API automation, $100-120/mo with Beehiiv Scale.

These are direct costs only. Your time and your audience attention are the real costs.

---

## Operational concerns

### Backups

The Studio writes to your SIS palace at `CIS_PALACE_DIR` (defaults to `./.palace/`). Back this up to your preferred storage. The palace is the asset; the deployment is replaceable.

### Secrets

Never commit `.env.local`. Vercel project settings is the right home for production secrets. Rotate API keys quarterly.

### Observability

Vercel Logs ships with the platform. For deeper telemetry, wire OpenTelemetry to a collector (Honeycomb / Datadog / Vercel Observability Plus).

### Rate limits

Each L5 distribution adapter respects per-channel rate limits. The conductor refuses to publish if the rate limit would be hit; queue items spill to the next available window.

---

## Troubleshooting

### Hosted automation returns "ANTHROPIC_API_KEY not configured"

Only the optional hosted automation path needs this key. Either set it in Vercel project env vars and redeploy, or keep authoring inside Claude Code/Claude Project/ChatGPT and import the generated CIP bundle.

### Bluesky publish returns 401

App password is one-time-shown. If lost, revoke at bsky.app/settings/app-passwords and generate a new one.

### LinkedIn returns 403 on `/v2/posts`

Token expired (60-day life) or scope missing. Re-run the OAuth flow at `/api/linkedin/auth`.

### Vercel build fails on `@cis/core` resolution

This template references `@cis/core` and `@cis/voice` from npm. While CIS is in the v0.1.x alpha, the packages may not yet be on the npm registry. Use the workspace-fallback config at the top of `next.config.mjs` to point at a local checkout, OR wait for v0.1.0 publication (target: end of W20).

---

## Production checklist

- [ ] Custom domain configured + DNS verified
- [ ] At least one distribution channel wired and tested
- [ ] Voice profile loaded (`CIS_VOICE_PROFILE` or `lib/voice.ts`)
- [ ] Backup configured for `.palace/`
- [ ] First test publish completed end-to-end (agent workspace → CIP bundle → distribute → attest)
- [ ] Attestation `.well-known` endpoint resolves on the custom domain
- [ ] First publication's attestation verifies via `@cis/verify`

---

> *Deploy small. Verify the loop. Add channels one at a time.*
