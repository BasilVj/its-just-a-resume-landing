import { pricingCopy } from "@/data/landing"
import { PricingCard } from "@/components/ui/pricingCard"
import { SectionKicker } from "@/components/ui/sectionKicker"

export function PricingSection() {
  return (
    <section className="relative w-full bg-surface-subtle py-20 md:py-28" id="pricing">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionKicker index={pricingCopy.index} label={pricingCopy.label} tone="pricing" />
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            {pricingCopy.headline}
          </h2>
          <p className="text-base text-neutral-600">{pricingCopy.body}</p>
        </div>
        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {pricingCopy.plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-sm sm:p-12 md:flex-row">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
              {pricingCopy.closing.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">{pricingCopy.closing.body}</p>
          </div>
          <a
            className="flex h-12 w-full shrink-0 items-center justify-center rounded-2xl bg-brand-500 px-8 text-sm font-medium text-white shadow-md shadow-brand-500/20 transition-all hover:bg-brand-600 md:w-auto"
            href="#"
          >
            {pricingCopy.closing.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
