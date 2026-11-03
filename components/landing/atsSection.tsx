import { atsCopy } from "@/data/landing"
import { InfoCard } from "@/components/ui/infoCard"
import { SectionKicker } from "@/components/ui/sectionKicker"

export function AtsSection() {
  const splitAt = atsCopy.headline.indexOf(". ")
  const lead = splitAt === -1 ? atsCopy.headline : atsCopy.headline.slice(0, splitAt + 1)
  const tail = splitAt === -1 ? null : atsCopy.headline.slice(splitAt + 2)

  return (
    <section className="relative w-full bg-brand-50/70 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3">
            <SectionKicker index={atsCopy.index} label={atsCopy.label} tone="ats" />
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            {lead}
            {tail ? (
              <>
                <br />
                {tail}
              </>
            ) : null}
          </h2>
          <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">{atsCopy.body}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {atsCopy.cards.map((card) => (
            <InfoCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
