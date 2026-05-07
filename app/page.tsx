import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 py-20 md:py-28">
      <header className="flex flex-col gap-4">
        <span className="text-xs uppercase tracking-[0.18em] text-ink-subtle">
          GenCreator Studio · v0.1.0-alpha
        </span>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-6xl">
          The sovereign studio
          <br />
          for AI-first creators.
        </h1>
        <p className="max-w-2xl text-base text-ink-muted md:text-lg">
          Capture what you mean. Make what you intend. Ship it everywhere — with cryptographic
          attestation on every output. Open-source, MIT, bootable.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card
          step="01"
          title="Capture"
          body="Voice, web clip, file drop, or paste. Whatever the medium, the brief enters the system."
        />
        <Card
          step="02"
          title="Produce"
          body="Multi-agent chain runs the brief through brand-voice audit, model orchestration, and asset rendering."
        />
        <Card
          step="03"
          title="Ship + Attest"
          body="Atomic publish across channels. Every post carries a verifiable record of human idea, models, and reviewers."
        />
      </section>

      <section className="rounded-2xl border border-border bg-space/60 p-8">
        <h2 className="mb-3 font-display text-xl font-semibold text-ink">
          Built on the Creator Intelligence System
        </h2>
        <p className="mb-6 max-w-3xl text-sm text-ink-muted md:text-base">
          GenCreator Studio is the reference Vercel template for{' '}
          <Link
            className="text-tech-primary underline-offset-4 hover:underline"
            href="https://github.com/frankxai/creator-intelligence-system"
            target="_blank"
            rel="noreferrer"
          >
            CIS
          </Link>{' '}
          — a six-layer sovereign substrate with a typed protocol, an attestation moat, and a
          multi-mode distribution model. The studio is what you see; the substrate is what
          compounds.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="https://github.com/frankxai/GenCreator-Studio"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border-strong bg-elevated px-4 py-2 text-ink hover:border-tech-primary hover:text-tech-primary"
          >
            View source on GitHub →
          </Link>
          <Link
            href="https://github.com/frankxai/GenCreator-Studio/blob/main/DEPLOY.md"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-tech-primary px-4 py-2 font-semibold text-void hover:bg-tech-secondary"
          >
            Deploy your own
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 text-sm text-ink-muted md:grid-cols-2">
        <Bullet
          title="Voice-first capture (optional)"
          body="Hold to record, or rely on Claude Code / ChatGPT native dictation. The mic is convenience, not the moat."
        />
        <Bullet
          title="Brand voice as a single source"
          body="@cis/voice is the contract. Banned-phrase + quarantined-term audit at every L4 boundary."
        />
        <Bullet
          title="Multi-channel distribution"
          body="Bluesky (free), LinkedIn, Beehiiv, Farcaster Frames, YouTube, X, Threads, IG, TikTok — adapter pattern."
        />
        <Bullet
          title="Cryptographic attestation"
          body="Every publication carries a signed record of human idea, agent chain, models, and reviewers. Verify with @cis/verify."
        />
      </section>

      <footer className="flex flex-col gap-2 border-t border-border pt-8 text-xs text-ink-subtle">
        <p>
          MIT licensed · Built by{' '}
          <Link
            href="https://frankx.ai"
            target="_blank"
            rel="noreferrer"
            className="text-tech-primary underline-offset-4 hover:underline"
          >
            Frank Riemer
          </Link>{' '}
          · Sibling to{' '}
          <Link
            href="https://github.com/frankxai/Starlight-Intelligence-System"
            target="_blank"
            rel="noreferrer"
            className="text-tech-primary underline-offset-4 hover:underline"
          >
            SIS
          </Link>{' '}
          ·{' '}
          <Link
            href="https://github.com/frankxai/iis"
            target="_blank"
            rel="noreferrer"
            className="text-tech-primary underline-offset-4 hover:underline"
          >
            IIS
          </Link>{' '}
          ·{' '}
          <Link
            href="https://github.com/frankxai/library-os"
            target="_blank"
            rel="noreferrer"
            className="text-tech-primary underline-offset-4 hover:underline"
          >
            Library OS
          </Link>
        </p>
      </footer>
    </main>
  )
}

function Card({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-border bg-space/60 p-6">
      <span className="text-xs uppercase tracking-[0.18em] text-ink-subtle">{step}</span>
      <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="text-sm text-ink-muted">{body}</p>
    </article>
  )
}

function Bullet({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-border bg-space/40 p-4">
      <h4 className="mb-1 font-semibold text-ink">{title}</h4>
      <p className="text-sm text-ink-muted">{body}</p>
    </div>
  )
}
