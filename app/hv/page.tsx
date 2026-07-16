import Link from 'next/link'
import type { Metadata } from 'next'
import { PostCard } from '@/components/hv/PostCard'
import { getBatch } from '@/lib/hv/load'
import { HV_STAGES } from '@/lib/hv/types'

export const metadata: Metadata = {
  title: 'HV Workbench',
  description: 'Harmonic Virality multi-post studio — ideation through pack, human-gated.',
  robots: { index: false, follow: false },
}

export default function HvBoardPage() {
  const batch = getBatch()

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-16 md:py-20">
      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
          <Link href="/" className="hover:text-ink">
            GenCreator Studio
          </Link>
          <span>/</span>
          <span className="text-tech-primary">/hv workbench</span>
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Harmonic Virality
          <span className="block text-tech-primary">multi-post palace</span>
        </h1>
        <p className="max-w-2xl text-sm text-ink-muted md:text-base">
          {batch.title}. Theme: {batch.theme}. Author in Hermes/Claude — stage every artifact here.
          Walk ideation → pack together. No auto-publish.
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-ink-subtle">
          <span className="rounded-full border border-border px-3 py-1">brand {batch.brand}</span>
          <span className="rounded-full border border-border px-3 py-1">{batch.posts.length} posts</span>
          <span className="rounded-full border border-border px-3 py-1">form {batch.formFamily}</span>
          <span className="rounded-full border border-border px-3 py-1">skill {batch.hermesSkill}</span>
          <span className="rounded-full border border-border px-3 py-1">{batch.createdAt}</span>
        </div>
      </header>

      <section className="rounded-2xl border border-border bg-space/40 p-5">
        <h2 className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-subtle">8 stages</h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {HV_STAGES.map((s) => (
            <div key={s.id} className="rounded-xl border border-border bg-void/50 px-3 py-2">
              <div className="text-[10px] text-ink-subtle">{String(s.n).padStart(2, '0')}</div>
              <div className="text-sm font-semibold text-ink">{s.label}</div>
              <div className="text-[11px] text-ink-muted">{s.short}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {batch.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      <section className="rounded-2xl border border-dashed border-border bg-space/30 p-5 text-sm text-ink-muted">
        <h2 className="mb-2 font-semibold text-ink">Session notes</h2>
        <ul className="list-disc space-y-1 pl-5">
          {batch.sessionNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <p className="mt-4">
          Open a post to walk every stage. Record + edit tool links live on each post. Pack stays
          human-gated.
        </p>
      </section>

      <footer className="flex flex-wrap gap-4 border-t border-border pt-6 text-sm text-ink-muted">
        <Link href="/studio" className="hover:text-ink">
          Studio shell
        </Link>
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
      </footer>
    </main>
  )
}
