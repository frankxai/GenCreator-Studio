import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { StagePanel } from '@/components/hv/StagePanel'
import { StageRail } from '@/components/hv/StageRail'
import { ToolLinks } from '@/components/hv/ToolLinks'
import { getPost, nextStage, prevStage } from '@/lib/hv/load'
import { HV_STAGES, type HvStageId } from '@/lib/hv/types'

type Props = {
  params: Promise<{ postId: string }>
  searchParams: Promise<{ stage?: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postId } = await params
  const post = getPost(postId)
  return {
    title: post ? post.title : 'HV Post',
    robots: { index: false, follow: false },
  }
}

export function generateStaticParams() {
  // Soft-static paths from batch; runtime still works if more posts added later
  return [
    { postId: 'stop-renting-thinking' },
    { postId: 'six-pillars-45s' },
    { postId: 'agents-that-ship' },
    { postId: 'harmonic-batch' },
    { postId: 'studio-is-the-palace' },
  ]
}

function isStage(v: string | undefined): v is HvStageId {
  return !!v && HV_STAGES.some((s) => s.id === v)
}

export default async function HvPostPage({ params, searchParams }: Props) {
  const { postId } = await params
  const sp = await searchParams
  const post = getPost(postId)
  if (!post) notFound()

  const stage: HvStageId = isStage(sp.stage) ? sp.stage : 'ideas'
  const prev = prevStage(stage)
  const next = nextStage(stage)
  const winner = post.hooks.find((h) => h.winner)

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-12 md:py-16">
      <header className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
          <Link href="/hv" className="hover:text-ink">
            /hv board
          </Link>
          <span>/</span>
          <span className="text-tech-primary">{post.slug}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">{post.title}</h1>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted">{post.primaryIdea}</p>
          </div>
          <div className="rounded-2xl border border-border bg-space/50 px-4 py-3 text-right text-xs text-ink-muted">
            <div className="text-ink">charge {post.chargeOverall}/10</div>
            <div>
              {post.form} · {post.durationSec}s · {post.formatCode}
            </div>
            <div>
              score {post.score.average} · {post.score.recommendation}
            </div>
          </div>
        </div>
        {winner ? (
          <p className="rounded-xl border border-tech-primary/30 bg-tech-primary/10 px-4 py-2 text-sm text-ink">
            Hook winner: <span className="font-semibold">{winner.text}</span>
          </p>
        ) : null}
      </header>

      <StageRail post={post} active={stage} />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <StagePanel post={post} stage={stage} />
        <div className="flex flex-col gap-4">
          <ToolLinks tools={post.tools} />
          <section className="rounded-2xl border border-border bg-space/40 p-5">
            <h3 className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-subtle">Artifacts</h3>
            <ul className="space-y-1 text-sm text-ink-muted">
              {post.artifacts.map((a) => (
                <li key={a.path} className="font-mono text-xs">
                  {a.name}
                  <span className="block text-ink-subtle">{a.path}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-border bg-space/40 p-5 text-sm text-ink-muted">
            <h3 className="mb-2 text-xs uppercase tracking-[0.18em] text-ink-subtle">Platforms</h3>
            <p className="text-ink">{post.platforms.join(' · ')}</p>
            <p className="mt-2">Outcome: {post.outcome}</p>
            <p>Brand: {post.brand}</p>
          </section>
        </div>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        {prev ? (
          <Link
            href={`/hv/${post.slug}?stage=${prev}`}
            className="rounded-full border border-border px-4 py-2 text-sm text-ink-muted hover:border-border-strong hover:text-ink"
          >
            ← {HV_STAGES.find((s) => s.id === prev)?.label}
          </Link>
        ) : (
          <Link href="/hv" className="rounded-full border border-border px-4 py-2 text-sm text-ink-muted">
            ← Board
          </Link>
        )}
        {next ? (
          <Link
            href={`/hv/${post.slug}?stage=${next}`}
            className="rounded-full bg-tech-primary px-4 py-2 text-sm font-semibold text-void hover:bg-tech-secondary"
          >
            {HV_STAGES.find((s) => s.id === next)?.label} →
          </Link>
        ) : (
          <Link
            href="/hv"
            className="rounded-full bg-tech-primary px-4 py-2 text-sm font-semibold text-void hover:bg-tech-secondary"
          >
            Back to batch
          </Link>
        )}
      </footer>
    </main>
  )
}
