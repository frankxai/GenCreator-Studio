import type { HvPost, HvStageId } from '@/lib/hv/types'
import { HV_STAGES } from '@/lib/hv/types'

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-space/50 p-5">
      <h3 className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-subtle">{title}</h3>
      <div className="space-y-3 text-sm text-ink-muted">{children}</div>
    </section>
  )
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 shrink-0 text-xs text-ink-subtle">{label}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-subtle">
        <div
          className="h-full rounded-full bg-tech-primary"
          style={{ width: `${Math.min(100, value * 10)}%` }}
        />
      </div>
      <span className="w-6 text-right text-xs text-ink">{value}</span>
    </div>
  )
}

export function StagePanel({ post, stage }: { post: HvPost; stage: HvStageId }) {
  const meta = HV_STAGES.find((s) => s.id === stage)

  if (stage === 'ideas') {
    return (
      <Panel title={`01 · ${meta?.label}`}>
        <p className="text-ink">
          Primary: <span className="font-semibold text-tech-primary">{post.primaryIdea}</span>
        </p>
        <p>Seed: {post.seed}</p>
        <ul className="space-y-2">
          {post.ideas.map((idea) => (
            <li
              key={idea.title}
              className={`rounded-lg border px-3 py-2 ${
                idea.selected ? 'border-tech-primary/40 bg-tech-primary/5' : 'border-border'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-ink">{idea.title}</span>
                <span className="text-[11px] text-ink-subtle">
                  C{idea.charge} Cl{idea.clarity} P{idea.pain} S{idea.share} Pr{idea.proof}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    )
  }

  if (stage === 'script') {
    return (
      <Panel title={`02 · ${meta?.label}`}>
        <dl className="grid gap-2">
          <div>
            <dt className="text-ink-subtle">Claim</dt>
            <dd className="text-ink">{post.spine.claim}</dd>
          </div>
          <div>
            <dt className="text-ink-subtle">Stakes</dt>
            <dd>{post.spine.stakes}</dd>
          </div>
          <div>
            <dt className="text-ink-subtle">Proof</dt>
            <dd>{post.spine.proof}</dd>
          </div>
          <div>
            <dt className="text-ink-subtle">Mechanism</dt>
            <dd>
              <ol className="list-decimal space-y-1 pl-4">
                {post.spine.mechanism.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ol>
            </dd>
          </div>
          <div>
            <dt className="text-ink-subtle">Turn</dt>
            <dd className="text-ink">{post.spine.turn}</dd>
          </div>
          <div>
            <dt className="text-ink-subtle">CTA</dt>
            <dd>{post.spine.cta}</dd>
          </div>
        </dl>
        <div className="rounded-xl border border-border bg-void/60 p-4">
          <div className="mb-2 flex justify-between text-[11px] uppercase tracking-wide text-ink-subtle">
            <span>Spoken script</span>
            <span>
              {post.wordCount} words · ~{Math.round(post.wordCount / 3)}s @ 3wps
            </span>
          </div>
          <p className="whitespace-pre-wrap leading-relaxed text-ink">{post.spokenScript}</p>
        </div>
      </Panel>
    )
  }

  if (stage === 'hooks') {
    return (
      <Panel title={`03 · ${meta?.label}`}>
        <ul className="space-y-2">
          {post.hooks.map((h) => (
            <li
              key={h.text}
              className={`rounded-lg border px-3 py-2 ${
                h.winner
                  ? 'border-tech-primary/50 bg-tech-primary/10'
                  : h.alt
                    ? 'border-tech-secondary/40 bg-tech-secondary/5'
                    : 'border-border'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-ink">{h.text}</span>
                <span className="text-[11px] text-ink-subtle">
                  {h.winner ? 'WINNER · ' : h.alt ? 'ALT · ' : ''}
                  stop {h.stop} · promise {h.promise} · spec {h.specificity} · charge {h.charge}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    )
  }

  if (stage === 'format') {
    return (
      <Panel title={`04 · ${meta?.label}`}>
        <p>
          Format code: <span className="font-semibold text-ink">{post.formatCode}</span>
        </p>
        <p>{post.formatNotes}</p>
        <ul className="space-y-2">
          {post.visualBeats.map((b) => (
            <li key={b.t} className="grid grid-cols-[4.5rem_1fr] gap-3 rounded-lg border border-border px-3 py-2">
              <span className="font-mono text-xs text-tech-secondary">{b.t}</span>
              <div>
                <div className="text-ink">{b.visual}</div>
                {b.onScreen ? (
                  <div className="text-[12px] text-ink-subtle">On-screen: {b.onScreen}</div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    )
  }

  if (stage === 'template') {
    return (
      <Panel title={`05 · ${meta?.label}`}>
        <p className="text-lg font-semibold text-ink">{post.templateName}</p>
        <p>{post.templateFill}</p>
      </Panel>
    )
  }

  if (stage === 'actualize') {
    const r = post.record
    return (
      <Panel title={`06 · Record / Actualize`}>
        <p>
          <span className="text-ink-subtle">Framing:</span> {r.framing}
        </p>
        <p>
          <span className="text-ink-subtle">Lighting:</span> {r.lighting}
        </p>
        <p>
          <span className="text-ink-subtle">Audio:</span> {r.audio}
        </p>
        <p>
          <span className="text-ink-subtle">Wardrobe:</span> {r.wardrobe}
        </p>
        <p>
          <span className="text-ink-subtle">Teleprompter:</span> {r.teleprompter}
        </p>
        <p className="text-ink">
          <span className="text-ink-subtle">Energy:</span> {r.energyNote}
        </p>
        <div>
          <div className="mb-1 text-ink-subtle">Takes</div>
          <ul className="list-disc pl-5">
            {r.takes.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-1 text-ink-subtle">B-roll</div>
          <ul className="list-disc pl-5">
            {r.broll.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </Panel>
    )
  }

  if (stage === 'edit') {
    const e = post.edit
    return (
      <Panel title={`07 · Edit`}>
        <p>
          Stack: <span className="font-semibold text-ink">{e.primaryStack}</span> · Export:{' '}
          <span className="text-ink">{e.export}</span>
        </p>
        <ol className="list-decimal space-y-1 pl-5">
          {e.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        {e.mcp?.length ? (
          <div>
            <div className="mb-1 text-ink-subtle">CapCut MCP (if live)</div>
            <ul className="list-disc pl-5 font-mono text-xs text-tech-secondary">
              {e.mcp.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <div>
          <div className="mb-1 text-ink-subtle">Quality gates</div>
          <ul className="list-disc pl-5">
            {e.qualityGates.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </Panel>
    )
  }

  // post pack
  const p = post.pack
  return (
    <Panel title={`08 · Pack (human gate)`}>
      <p className="text-lg font-semibold text-ink">Cover: {p.coverText}</p>
      <p className="whitespace-pre-wrap text-ink">{p.captionPrimary}</p>
      <div>
        <div className="mb-1 text-ink-subtle">Alt captions</div>
        <ul className="list-disc pl-5">
          {p.captionAlts.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      <p className="text-ink">{p.hashtags.join(' ')}</p>
      <p>
        <span className="text-ink-subtle">First comment:</span> {p.firstComment}
      </p>
      <div className="grid gap-2 md:grid-cols-3">
        <div className="rounded-lg border border-border p-3">
          <div className="text-[11px] uppercase text-ink-subtle">TikTok</div>
          <p>{p.tiktok}</p>
        </div>
        <div className="rounded-lg border border-border p-3">
          <div className="text-[11px] uppercase text-ink-subtle">IG Reels</div>
          <p>{p.ig}</p>
        </div>
        <div className="rounded-lg border border-border p-3">
          <div className="text-[11px] uppercase text-ink-subtle">YT Shorts</div>
          <p>{p.yt}</p>
        </div>
      </div>
      <p className="rounded-lg border border-soul-primary/30 bg-soul-primary/10 px-3 py-2 text-soul-primary">
        {p.humanGate}
      </p>
      <div className="space-y-2 pt-2">
        <div className="text-xs uppercase tracking-wide text-ink-subtle">
          Score · avg {post.score.average} · {post.score.recommendation}
        </div>
        <ScoreBar label="Charge" value={post.score.charge} />
        <ScoreBar label="Hook" value={post.score.hookStop} />
        <ScoreBar label="Argument" value={post.score.argument} />
        <ScoreBar label="Emotion" value={post.score.emotion} />
        <ScoreBar label="Retention" value={post.score.retention} />
        <ScoreBar label="STEPPS" value={post.score.stepps} />
        <ScoreBar label="Platform" value={post.score.platform} />
        <ScoreBar label="CTA" value={post.score.cta} />
      </div>
    </Panel>
  )
}
