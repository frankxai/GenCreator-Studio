import Link from 'next/link'
import type { HvPost } from '@/lib/hv/types'
import { doneCount } from '@/lib/hv/load'

export function PostCard({ post }: { post: HvPost }) {
  const done = doneCount(post)
  const winner = post.hooks.find((h) => h.winner)?.text ?? post.hooks[0]?.text

  return (
    <Link
      href={`/hv/${post.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-space/60 p-5 transition hover:border-tech-primary/50 hover:bg-elevated/40"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
            {post.form} · {post.durationSec}s · charge {post.chargeOverall}/10
          </span>
          <h3 className="font-display text-lg font-semibold text-ink group-hover:text-tech-primary">
            {post.title}
          </h3>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
            post.score.recommendation === 'SHIP_CANDIDATE'
              ? 'bg-tech-primary/15 text-tech-primary'
              : 'bg-soul-primary/15 text-soul-primary'
          }`}
        >
          {post.score.recommendation === 'SHIP_CANDIDATE' ? 'ship' : 'iterate'}
        </span>
      </div>

      <p className="line-clamp-2 text-sm text-ink-muted">{winner}</p>

      <div className="flex flex-wrap gap-2 text-[11px] text-ink-subtle">
        <span className="rounded-md border border-border px-2 py-0.5">{post.formatCode}</span>
        <span className="rounded-md border border-border px-2 py-0.5">{post.templateName}</span>
        <span className="rounded-md border border-border px-2 py-0.5">
          score {post.score.average}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5">
          stages {done}/8
        </span>
      </div>
    </Link>
  )
}
