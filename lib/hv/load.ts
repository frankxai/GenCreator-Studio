import batch from '@/content/hv/batch-2026-07-16.json'
import type { HvBatch, HvPost, HvStageId } from './types'
import { HV_STAGES } from './types'

export function getBatch(): HvBatch {
  return batch as HvBatch
}

export function getPosts(): HvPost[] {
  return getBatch().posts
}

export function getPost(id: string): HvPost | undefined {
  return getPosts().find((p) => p.id === id || p.slug === id)
}

export function stageIndex(id: HvStageId): number {
  return HV_STAGES.findIndex((s) => s.id === id)
}

export function nextStage(id: HvStageId): HvStageId | null {
  const i = stageIndex(id)
  if (i < 0 || i >= HV_STAGES.length - 1) return null
  return HV_STAGES[i + 1]?.id ?? null
}

export function prevStage(id: HvStageId): HvStageId | null {
  const i = stageIndex(id)
  if (i <= 0) return null
  return HV_STAGES[i - 1]?.id ?? null
}

export function doneCount(post: HvPost): number {
  return HV_STAGES.filter((s) => post.stageStatus[s.id] === 'done').length
}
