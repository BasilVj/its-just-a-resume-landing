"use client"

import { useState } from "react"

import { engineCopy } from "@/data/landing"
import { compiledResume, texSource } from "@/data/resumes"
import type { ExperienceBlock, SkillsBlock, TexIndent, TexLine } from "@/types/resumes"
import { MaterialIcon } from "@/components/ui/materialIcon"
import { cn } from "@/lib/utils"

type EditorMode = "raw" | "guided"

type TexEditorProps = {
  children: React.ReactNode
}

const indents = {
  none: "",
  "4": "pl-4",
  "6": "pl-6",
  "8": "pl-8",
} satisfies Record<TexIndent, string>

export function TexEditor({ children }: TexEditorProps) {
  const [mode, setMode] = useState<EditorMode>("raw")

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface-darker shadow-2xl md:rounded-3xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-neutral-900/90 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-full bg-red-400/80" />
            <span className="inline-block h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="inline-block h-3 w-3 rounded-full bg-brand-400/80" />
          </div>
          <span className="font-mono text-xs font-medium text-neutral-300">
            {mode === "guided" ? "Guided form" : engineCopy.filename}
          </span>
        </div>
        <div className="flex items-center rounded-xl border border-white/10 bg-white/5 p-1">
          {engineCopy.modes.map((item) => {
            const active = item.id === mode
            return (
              <button
                key={item.id}
                type="button"
                className={cn(
                  "rounded-lg px-3 py-1 font-mono text-xs font-medium transition-all",
                  active ? "bg-brand-500 text-white" : "text-neutral-400 hover:text-white",
                )}
                onClick={() => setMode(item.id)}
              >
                {item.label}
              </button>
            )
          })}
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-mono text-xs text-brand-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
            {engineCopy.syncLabel}
          </span>
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1 font-mono text-xs font-semibold text-white transition-colors hover:bg-white/20"
          >
            <MaterialIcon name="refresh" size={15} />
            {engineCopy.compileLabel}
          </button>
        </div>
      </div>
      <div className="grid min-h-[440px] grid-cols-1 lg:grid-cols-12">
        <div
          className={cn(
            "overflow-auto border-b border-white/10 bg-[#0b0d0f] p-6 lg:col-span-6 lg:border-r lg:border-b-0",
            mode === "raw" && "font-mono text-xs leading-relaxed text-neutral-300",
          )}
        >
          {mode === "raw" ? (
            texSource.map((line, index) => <TexLineView key={index} line={line} />)
          ) : (
            <GuidedForm />
          )}
        </div>
        <div className="flex flex-col justify-between bg-[#16191d] p-6 lg:col-span-6">{children}</div>
      </div>
      <div className="grid grid-cols-1 gap-3 border-t border-white/5 bg-neutral-900/60 px-6 py-3.5 font-mono text-xs text-neutral-400 sm:grid-cols-3">
        {engineCopy.highlights.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="font-bold text-brand-400">✦</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const experienceBlock = compiledResume.blocks.find(
  (block): block is ExperienceBlock => block.kind === "experience",
)
const skillsBlock = compiledResume.blocks.find(
  (block): block is SkillsBlock => block.kind === "skills",
)

type GuidedFields = {
  name: string
  contact: string
  title: string
  org: string
  dates: string
  bulletOne: string
  bulletTwo: string
  skills: string
}

function GuidedForm() {
  const [fields, setFields] = useState<GuidedFields>({
    name: compiledResume.name,
    contact: compiledResume.contact,
    title: experienceBlock?.title ?? "",
    org: experienceBlock?.org ?? "",
    dates: experienceBlock?.dates ?? "",
    bulletOne: experienceBlock?.bullets[0] ?? "",
    bulletTwo: experienceBlock?.bullets[1] ?? "",
    skills: skillsBlock?.value ?? "",
  })

  function update(key: keyof GuidedFields, value: string) {
    setFields((current) => ({ ...current, [key]: value }))
  }

  return (
    <form className="space-y-3" onSubmit={(event) => event.preventDefault()}>
      <Field label="Name" value={fields.name} onChange={(value) => update("name", value)} />
      <Field label="Contact" value={fields.contact} onChange={(value) => update("contact", value)} />
      <p className="pt-1 font-mono text-[11px] tracking-wide text-neutral-500 uppercase">
        {experienceBlock?.heading ?? "Experience"}
      </p>
      <Field label="Title" value={fields.title} onChange={(value) => update("title", value)} />
      <Field label="Organization" value={fields.org} onChange={(value) => update("org", value)} />
      <Field label="Dates" value={fields.dates} onChange={(value) => update("dates", value)} />
      <Field label="Bullet" value={fields.bulletOne} onChange={(value) => update("bulletOne", value)} />
      <Field label="Bullet" value={fields.bulletTwo} onChange={(value) => update("bulletTwo", value)} />
      <Field
        label={skillsBlock?.label ?? "Skills"}
        value={fields.skills}
        onChange={(value) => update("skills", value)}
      />
    </form>
  )
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-[11px] text-neutral-500">{label}</span>
      <input
        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-100 outline-none focus:border-brand-400"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

function TexLineView({ line }: { line: TexLine }) {
  switch (line.kind) {
    case "comment":
      return <div className="mb-2 text-neutral-500">{line.text}</div>
    case "gap":
      return <br />
    case "command":
      return (
        <p className={indents[line.indent]}>
          <span className="font-semibold text-brand-400">{line.command}</span>
          {line.text}
        </p>
      )
    case "muted":
      return <p className={cn(indents[line.indent], "text-neutral-400")}>{line.text}</p>
    case "body":
      return (
        <p className={indents[line.indent]}>
          <span className="text-neutral-200">{line.text}</span>
        </p>
      )
    default: {
      const exhaustive: never = line
      return exhaustive
    }
  }
}
