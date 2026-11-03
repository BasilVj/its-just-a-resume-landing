import { templatesCopy } from "@/data/landing"
import { NotifyForm } from "@/components/ui/notifyForm"
import { SectionKicker } from "@/components/ui/sectionKicker"
import { TemplateCard } from "@/components/ui/templateCard"

export function TemplatesSection() {
  return (
    <section className="relative w-full bg-white py-20 md:py-28" id="templates">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <SectionKicker index={templatesCopy.index} label={templatesCopy.label} tone="templates" />
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                ✨ {templatesCopy.droppingSoon}
              </span>
            </div>
            <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              {templatesCopy.headline}
            </h2>
            <p className="max-w-xl text-base text-neutral-600">{templatesCopy.body}</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-4 py-2.5 text-xs font-medium text-white shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
            <span>{templatesCopy.testingNote}</span>
          </div>
        </div>
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {templatesCopy.cards.map((card) => (
            <TemplateCard key={card.title} card={card} />
          ))}
        </div>
        <NotifyForm />
      </div>
    </section>
  )
}
