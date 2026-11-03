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

export const heroResume = {
  eyebrow: "Typeset perfection",
  name: "Daniel Carter",
  role: "Staff Infrastructure Engineer",
  experienceLabel: "Experience",
  dates: "2021 — PRESENT",
  title: "Principal Systems Architect",
  company: "ScaleFlow",
  summary:
    "Orchestrated distributed consensus layer migration serving 4.8M ops/sec. Optimized kernel network drivers reducing latency by 41%.",
  stackLabel: "Systems stack",
  stack: [
    { label: "Rust", tone: "soft" },
    { label: "Linux eBPF", tone: "soft" },
    { label: "Kubernetes", tone: "soft" },
    { label: "TeX 3.14159", tone: "green" },
  ],
  compileLabel: "Clean compile",
  compileMeta: "380ms • 0 warnings",
  atsTitle: "100% ATS Readable",
  atsDetail: "Every single character streamable",
} satisfies HeroResume

export type TexIndent = "none" | "4" | "6" | "8"

export type TexLine =
  | { kind: "comment"; text: string }
  | { kind: "gap" }
  | { kind: "command"; indent: TexIndent; command: string; text: string }
  | { kind: "muted"; indent: TexIndent; text: string }
  | { kind: "body"; indent: TexIndent; text: string }

export const texSource = [
  {
    kind: "comment",
    text: "// it's just a resume • free tier (5 custom .tex imports)",
  },
  {
    kind: "command",
    indent: "none",
    command: "\\documentclass",
    text: "[letterpaper,11pt]{article}",
  },
  {
    kind: "command",
    indent: "none",
    command: "\\usepackage",
    text: "{latexsym, fullpage, xcolor, hyperref}",
  },
  {
    kind: "command",
    indent: "none",
    command: "\\usepackage",
    text: "{titlesec, enumitem}",
  },
  { kind: "gap" },
  { kind: "command", indent: "none", command: "\\begin", text: "{document}" },
  {
    kind: "command",
    indent: "4",
    command: "\\textbf",
    text: "{\\Huge David K. Vance}",
  },
  {
    kind: "muted",
    indent: "4",
    text: "\\small San Francisco, CA • d.vance@mit.edu • github.com/dvance",
  },
  { kind: "gap" },
  { kind: "command", indent: "4", command: "\\section*", text: "{Experience}" },
  {
    kind: "command",
    indent: "4",
    command: "\\textbf",
    text: "{Lead Distributed Architect} $|$ \\textit{Apex Infrastructure} \\hfill 2022 -- 2024",
  },
  {
    kind: "muted",
    indent: "6",
    text: "\\begin{itemize}[noitemsep,topsep=0pt]",
  },
  {
    kind: "body",
    indent: "8",
    text: "\\item Built multi-region consensus cluster handling 14M persistent RPC operations daily.",
  },
  {
    kind: "body",
    indent: "8",
    text: "\\item Automated rolling node upgrades with zero user-facing downtime across 1,200 nodes.",
  },
  { kind: "muted", indent: "6", text: "\\end{itemize}" },
  { kind: "gap" },
  {
    kind: "command",
    indent: "4",
    command: "\\section*",
    text: "{Technical Skills}",
  },
  {
    kind: "body",
    indent: "4",
    text: "Go, Rust, Distributed Systems, Linux Kernels, TeX",
  },
  { kind: "command", indent: "none", command: "\\end", text: "{document}" },
] as const satisfies readonly TexLine[]

export const compiledResume = {
  name: "David K. Vance",
  contact: "San Francisco, CA • d.vance@mit.edu • github.com/dvance",
  blocks: [
    {
      kind: "experience",
      heading: "Experience",
      title: "Lead Distributed Architect",
      org: "Apex Infrastructure — San Francisco, CA",
      dates: "2022 – 2024",
      bullets: [
        "Built multi-region consensus cluster handling 14M persistent RPC operations daily.",
        "Automated rolling node upgrades with zero user-facing downtime across 1,200 nodes.",
      ],
    },
    {
      kind: "skills",
      heading: "Technical Skills",
      label: "Languages & Platforms",
      value: "Go, Rust, Distributed Systems, Linux Kernels, TeX",
    },
  ],
  renderedLabel: "Rendered in 388ms",
  fitLabel: "100% 1-Page Fit",
} satisfies CompiledResume
