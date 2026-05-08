import Link from 'next/link'

export const metadata = {
  title: 'Studio',
  description: 'The gallery, distributor, and attestation surface.',
  robots: { index: false, follow: false },
}

export default function StudioPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-12 px-6 py-20">
      <header className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-ink-subtle">Studio · v0.1.0-alpha</span>
        <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">Studio surface</h1>
        <p className="max-w-2xl text-sm text-ink-muted md:text-base">
          The single dashboard surface for reviewing CIP bundles, distributing finished work,
          and exposing verifiable attestations. Authoring stays in the agent workspace you already use.
        </p>
      </header>

      <section className="rounded-2xl border border-dashed border-border bg-space/40 p-8 text-center">
        <p className="text-sm text-ink-muted">
          The full studio dashboard ships in MV1 (Friday May 9 2026). Track progress in{' '}
          <Link
            href="https://github.com/frankxai/creator-intelligence-system/blob/main/ROADMAP.md"
            className="text-tech-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            ROADMAP.md
          </Link>
          .
        </p>
      </section>

      <Link
        href="/"
        className="self-start text-sm text-ink-muted transition hover:text-ink"
      >
        ← back to home
      </Link>
    </main>
  )
}
