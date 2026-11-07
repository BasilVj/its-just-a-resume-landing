export type StackChip = {
  label: string
  tone: "soft" | "green"
}

export type HeroResume = {
  eyebrow: string
  name: string
  role: string
  experienceLabel: string
  dates: string
  title: string
  company: string
  summary: string
  stackLabel: string
  stack: readonly StackChip[]
  compileLabel: string
  compileMeta: string
  atsTitle: string
  atsDetail: string
}

export type ExperienceBlock = {
  kind: "experience"
  heading: string
  title: string
  org: string
  dates: string
  bullets: readonly [string, ...string[]]
}

export type SkillsBlock = {
  kind: "skills"
  heading: string
  label: string
  value: string
}

export type ResumeBlock = ExperienceBlock | SkillsBlock

export type CompiledResume = {
  name: string
  contact: string
  blocks: readonly ResumeBlock[]
  renderedLabel: string
  fitLabel: string
}

export type TexIndent = "none" | "4" | "6" | "8"

export type TexLine =
  | { kind: "comment"; text: string }
  | { kind: "gap" }
  | { kind: "command"; indent: TexIndent; command: string; text: string }
  | { kind: "muted"; indent: TexIndent; text: string }
  | { kind: "body"; indent: TexIndent; text: string }
