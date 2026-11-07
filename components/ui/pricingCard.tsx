import type { PricingPlanData, PricingTone } from "@/types/landing"
import { cn } from "@/lib/utils"

const shells = {
  light:
    "bg-white shadow-sm border border-neutral-200/80 hover:shadow-md transition-shadow",
  dark: "bg-surface-dark text-white shadow-xl border border-neutral-800 relative overflow-hidden",
} satisfies Record<PricingTone, string>

const names = {
  light: "text-brand-600",
  dark: "text-brand-400",
} satisfies Record<PricingTone, string>

const badges = {
  light: "bg-brand-100 text-brand-800",
  dark: "bg-brand-500 text-white shadow-sm",
} satisfies Record<PricingTone, string>

const periods = {
  light: "text-neutral-500",
  dark: "text-neutral-400",
} satisfies Record<PricingTone, string>

const prices = {
  light: "text-neutral-900",
  dark: "text-white",
} satisfies Record<PricingTone, string>

const descriptions = {
  light: "text-neutral-600",
  dark: "text-neutral-400",
} satisfies Record<PricingTone, string>

const lists = {
  light: "text-neutral-700",
  dark: "text-neutral-300",
} satisfies Record<PricingTone, string>

const checks = {
  light: "text-brand-600",
  dark: "text-brand-400",
} satisfies Record<PricingTone, string>

const buttons = {
  light: "bg-neutral-900 hover:bg-neutral-800 text-white shadow-sm",
  dark: "bg-brand-500 hover:bg-brand-600 text-white shadow-md shadow-brand-500/20",
} satisfies Record<PricingTone, string>

type PricingCardProps = {
  plan: PricingPlanData
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article className={cn("flex flex-col justify-between rounded-3xl p-8 sm:p-9", shells[plan.tone])}>
      {plan.tone === "dark" ? (
        <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-500/20 blur-3xl" />
      ) : null}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span
            className={cn(
              "font-mono text-xs font-bold tracking-wider uppercase",
              names[plan.tone],
            )}
          >
            {plan.name}
          </span>
          <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-semibold", badges[plan.tone])}>
            {plan.badge}
          </span>
        </div>
        <div className="mb-4 flex items-baseline gap-1">
          <span className={cn("text-4xl font-extrabold sm:text-5xl", prices[plan.tone])}>{plan.price}</span>
          <span className={cn("text-sm", periods[plan.tone])}>{plan.period}</span>
        </div>
        <p className={cn("mb-6 text-sm", descriptions[plan.tone])}>{plan.description}</p>
        <ul className={cn("mb-8 space-y-3.5 text-sm", lists[plan.tone])}>
          {plan.features.map((feature, index) => (
            <li key={feature} className="flex items-center gap-3">
              <span className={cn("font-bold", checks[plan.tone])}>✓</span>
              <span className={featureClass(plan.tone, index)}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        className={cn(
          "flex h-12 w-full items-center justify-center rounded-2xl text-sm font-medium transition-all",
          buttons[plan.tone],
        )}
        href="#"
      >
        {plan.cta}
      </a>
    </article>
  )
}

function featureClass(tone: PricingTone, index: number): string {
  if (index > 1) return ""
  if (tone === "light") return "font-medium text-neutral-900"
  return "font-semibold text-white"
}
