export type HvForm =
  | 'short'
  | 'mid'
  | 'long'
  | 'thread'
  | 'carousel'
  | 'talk'
  | 'email'
  | 'multi'

export type HvStageId =
  | 'ideas'
  | 'script'
  | 'hooks'
  | 'format'
  | 'template'
  | 'actualize'
  | 'edit'
  | 'post'

export type StageStatus = 'locked' | 'ready' | 'in_progress' | 'done'

export interface RankedIdea {
  title: string
  charge: number
  clarity: number
  pain: number
  share: number
  proof: number
  selected?: boolean
}

export interface HookOption {
  text: string
  stop: number
  promise: number
  specificity: number
  charge: number
  winner?: boolean
  alt?: boolean
}

export interface ArgumentSpine {
  claim: string
  stakes: string
  proof: string
  mechanism: string[]
  turn: string
  cta: string
}

export interface VisualBeat {
  t: string
  visual: string
  onScreen?: string
}

export interface RecordCard {
  framing: string
  lighting: string
  audio: string
  takes: string[]
  broll: string[]
  wardrobe: string
  teleprompter: string
  energyNote: string
}

export interface EditPlan {
  primaryStack: 'descript' | 'capcut' | 'mixed' | 'copy'
  steps: string[]
  export: string
  mcp?: string[]
  qualityGates: string[]
}

export interface PlatformPack {
  coverText: string
  captionPrimary: string
  captionAlts: string[]
  hashtags: string[]
  firstComment: string
  tiktok?: string
  ig?: string
  yt?: string
  humanGate: string
}

export interface ToolLink {
  id: string
  label: string
  href?: string
  note: string
  kind: 'hermes' | 'edit' | 'record' | 'design' | 'publish' | 'repo'
}

export interface HvPost {
  id: string
  slug: string
  title: string
  brand: string
  form: HvForm
  platforms: string[]
  durationSec?: number
  outcome: string
  seed: string
  primaryIdea: string
  chargeOverall: number
  stageStatus: Record<HvStageId, StageStatus>
  ideas: RankedIdea[]
  spine: ArgumentSpine
  spokenScript: string
  wordCount: number
  hooks: HookOption[]
  formatCode: string
  formatNotes: string
  visualBeats: VisualBeat[]
  templateName: string
  templateFill: string
  record: RecordCard
  edit: EditPlan
  pack: PlatformPack
  tools: ToolLink[]
  artifacts: { name: string; path: string }[]
  score: {
    charge: number
    hookStop: number
    argument: number
    emotion: number
    retention: number
    stepps: number
    platform: number
    cta: number
    average: number
    recommendation: 'SHIP_CANDIDATE' | 'ITERATE'
  }
}

export interface HvBatch {
  id: string
  title: string
  brand: string
  createdAt: string
  theme: string
  formFamily: HvForm
  hermesSkill: string
  posts: HvPost[]
  sessionNotes: string[]
}

export const HV_STAGES: {
  id: HvStageId
  n: number
  label: string
  short: string
}[] = [
  { id: 'ideas', n: 1, label: 'Ideas', short: 'Receive charge' },
  { id: 'script', n: 2, label: 'Script', short: 'Argument spine' },
  { id: 'hooks', n: 3, label: 'Hooks', short: 'Boxing' },
  { id: 'format', n: 4, label: 'Format', short: 'Visual frame' },
  { id: 'template', n: 5, label: 'Template', short: 'Proven structure' },
  { id: 'actualize', n: 6, label: 'Record', short: 'Actualize' },
  { id: 'edit', n: 7, label: 'Edit', short: 'Cut noise' },
  { id: 'post', n: 8, label: 'Pack', short: 'Release gate' },
]
