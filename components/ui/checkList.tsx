import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

type CheckListTone = "onLight" | "onDark"

const tones = {
  onLight: "text-stone-600",
  onDark: "text-stone-300",
} satisfies Record<CheckListTone, string>

type CheckListProps = {
  items: readonly string[]
  layout: "row" | "stack"
  tone: CheckListTone
}

export function CheckList({ items, layout, tone }: CheckListProps) {
  return (
    <ul
      className={cn(
        "gap-x-6 gap-y-2 text-sm",
        layout === "row" ? "flex flex-col sm:flex-row sm:flex-wrap" : "flex flex-col",
        tones[tone],
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
