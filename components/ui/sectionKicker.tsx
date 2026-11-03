import { cn } from "@/lib/utils"

type KickerTone = "pitch" | "engine" | "ats" | "templates" | "pricing"

const tones = {
  pitch: "bg-brand-50 text-brand-700 border border-brand-200",
  engine: "bg-white/10 text-brand-300 border border-white/10",
  ats: "bg-brand-100 text-brand-800 border border-brand-200",
  templates: "bg-neutral-100 text-neutral-700 border border-neutral-200",
  pricing: "bg-neutral-200/60 text-neutral-800",
} satisfies Record<KickerTone, string>

type SectionKickerProps = {
  index: string
  label: string
  note?: string
  tone: KickerTone
}

export function SectionKicker({ index, label, note, tone }: SectionKickerProps) {
  return (
    <div className={cn("flex items-center gap-2", tone === "pricing" && "justify-center")}>
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
          tones[tone],
          tone === "pricing" && "mb-3",
        )}
      >
        {tone === "pitch" ? (
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
        ) : null}
        {index} — {label}
      </span>
      {note ? <span className="font-mono text-xs text-neutral-400">{note}</span> : null}
    </div>
  )
}
