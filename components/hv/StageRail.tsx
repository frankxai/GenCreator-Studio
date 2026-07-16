import Link from 'next/link'
import { HV_STAGES, type HvPost, type HvStageId } from '@/lib/hv/types'

export function StageRail({
  post,
  active,
}: {
  post: HvPost
  active: HvStageId
}) {
  return (
    <nav className="flex gap-2 overflow-x-auto pb-1" aria-label="HV stages">
      {HV_STAGES.map((s) => {
        const status = post.stageStatus[s.id]
        const isActive = s.id === active
        return (
          <Link
            key={s.id}
            href={`/hv/${post.slug}?stage=${s.id}`}
            className={`min-w-[5.5rem] shrink-0 rounded-xl border px-3 py-2 transition ${
              isActive
                ? 'border-tech-primary bg-tech-primary/10 text-ink'
                : 'border-border bg-space/50 text-ink-muted hover:border-border-strong'
            }`}
          >
            <div className="text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
              {String(s.n).padStart(2, '0')} · {status}
            </div>
            <div className="text-sm font-semibold">{s.label}</div>
            <div className="text-[11px] text-ink-subtle">{s.short}</div>
          </Link>
        )
      })}
    </nav>
  )
}
