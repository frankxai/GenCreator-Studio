import Link from 'next/link'

export const metadata = {
  title: 'Studio',
  description: 'Gallery, HV workbench, distributor, and attestation surface.',
  robots: { index: false, follow: false },
}

export default function StudioPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-12 px-6 py-20">
      <header className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-ink-subtle">Studio · v0.2.0-hv</span>
        <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">Studio surface</h1>
        <p className="max-w-2xl text-sm text-ink-muted md:text-base">
          Authoring stays in Hermes / Claude / Cursor. Studio stages the batch, showcases generated
          artifacts, and links record/edit tooling. Publish stays human-gated.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <Link
          href="/hv"
          className="rounded-2xl border border-tech-primary/40 bg-tech-primary/10 p-6 transition hover:border-tech-primary"
        >
          <div className="text-xs uppercase tracking-[0.16em] text-tech-primary">Active</div>
          <h2 className="mt-2 font-display text-xl font-semibold text-ink">HV Workbench</h2>
          <p className="mt-2 text-sm text-ink-muted">
            5 GenCreator short-form posts · full 8-stage Harmonic Virality walkthrough.
          </p>
        </Link>
        <div className="rounded-2xl border border-dashed border-border bg-space/40 p-6">
          <div className="text-xs uppercase tracking-[0.16em] text-ink-subtle">Next</div>
          <h2 className="mt-2 font-display text-xl font-semibold text-ink">Gallery · Attest · Distribute</h2>
          <p className="mt-2 text-sm text-ink-muted">
            CIP gallery and attestation ship in a later MV. HV stages are the daily creation path now.
          </p>
        </div>
      </section>

      <Link href="/" className="self-start text-sm text-ink-muted transition hover:text-ink">
        ← back to home
      </Link>
    </main>
  )
}
