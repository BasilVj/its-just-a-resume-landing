import { cn } from "@/lib/utils"

type PillTone = "green" | "amber" | "dark" | "soft" | "ink"

const tones = {
  green: "bg-emerald-100 text-emerald-800",
  amber: "bg-amber-100 text-amber-800",
  dark: "bg-zinc-950 text-white",
  soft: "bg-stone-100 text-stone-700",
  ink: "bg-white/10 text-white",
} satisfies Record<PillTone, string>

type PillProps = {
  tone: PillTone
  children: React.ReactNode
  className?: string
}

export function Pill({ tone, children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
