import type { InfoCardData, InfoIconKind } from "@/data/landing"
import { MaterialIcon } from "@/components/ui/materialIcon"

const icons = {
  vault: "folder_special",
  shield: "verified_user",
  history: "history",
} satisfies Record<InfoIconKind, string>

type InfoCardProps = {
  card: InfoCardData
}

export function InfoCard({ card }: InfoCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-3xl border border-neutral-200/70 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div>
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
          <MaterialIcon name={icons[card.icon]} size={24} />
        </div>
        <div className="mb-2 font-mono text-xs font-semibold text-brand-600 uppercase">{card.kicker}</div>
        <h3 className="mb-2.5 text-xl font-bold text-neutral-900">{card.title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-neutral-600">{card.body}</p>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50 px-3.5 py-2.5 text-xs font-medium text-neutral-700">
        <span>{card.statLabel}</span>
        <span className="font-bold text-brand-600">{card.statValue}</span>
      </div>
    </article>
  )
}
