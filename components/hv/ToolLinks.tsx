import type { ToolLink } from '@/lib/hv/types'

export function ToolLinks({ tools }: { tools: ToolLink[] }) {
  return (
    <section className="rounded-2xl border border-border bg-space/40 p-5">
      <h3 className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-subtle">Linked tooling</h3>
      <ul className="grid gap-2 md:grid-cols-2">
        {tools.map((t) => {
          const body = (
            <>
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-ink">{t.label}</span>
                <span className="text-[10px] uppercase tracking-wide text-ink-subtle">{t.kind}</span>
              </div>
              <p className="text-xs text-ink-muted">{t.note}</p>
            </>
          )
          return (
            <li key={t.id} className="rounded-xl border border-border bg-void/40 px-3 py-2">
              {t.href ? (
                <a href={t.href} target="_blank" rel="noreferrer" className="block hover:opacity-90">
                  {body}
                </a>
              ) : (
                body
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
