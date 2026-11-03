import type { TemplateCardData, TemplatePreview } from "@/data/landing"

type TemplateCardProps = {
  card: TemplateCardData
}

export function TemplateCard({ card }: TemplateCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-surface-subtle p-6 shadow-sm transition-all hover:shadow-md">
      <div className="absolute top-4 right-4 z-20">
        <span className="rounded-full bg-neutral-900 px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-white uppercase shadow-sm">
          {card.comingSoon}
        </span>
      </div>
      <div className="mb-5">
        <span className="rounded-md bg-brand-100/70 px-2.5 py-0.5 font-mono text-xs font-medium text-brand-700">
          {card.badge}
        </span>
        <h3 className="mt-2 mb-1 text-xl font-bold text-neutral-900">{card.title}</h3>
        <p className="text-xs text-neutral-500">{card.body}</p>
      </div>
      <div className="relative flex h-56 w-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-inner">
        <TemplatePreviewSkeleton preview={card.preview} />
        <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[1.5px]">
          <span className="rounded-xl bg-neutral-900/90 px-3 py-1.5 font-mono text-xs font-bold text-white shadow-lg">
            🔒 {card.lockLabel}
          </span>
        </div>
      </div>
    </article>
  )
}

function TemplatePreviewSkeleton({ preview }: { preview: TemplatePreview }) {
  switch (preview) {
    case "academic":
      return (
        <div className="space-y-3 opacity-60 blur-[0.5px] filter">
          <div className="h-3 w-2/5 rounded bg-neutral-300" />
          <div className="space-y-1.5 pt-2">
            <div className="h-2 w-full rounded bg-neutral-200" />
            <div className="h-2 w-5/6 rounded bg-neutral-200" />
            <div className="h-2 w-4/6 rounded bg-neutral-200" />
          </div>
          <div className="space-y-1.5 pt-2">
            <div className="h-2 w-full rounded bg-neutral-200" />
            <div className="h-2 w-3/4 rounded bg-neutral-200" />
          </div>
        </div>
      )
    case "staff":
      return (
        <div className="space-y-3 opacity-60 blur-[0.5px] filter">
          <div className="flex justify-between">
            <div className="h-3 w-1/3 rounded bg-neutral-300" />
            <div className="h-3 w-1/4 rounded bg-brand-200" />
          </div>
          <div className="space-y-1.5 pt-2">
            <div className="h-2 w-full rounded bg-neutral-200" />
            <div className="h-2 w-11/12 rounded bg-neutral-200" />
            <div className="h-2 w-4/5 rounded bg-neutral-200" />
          </div>
          <div className="space-y-1.5 pt-2">
            <div className="h-2 w-full rounded bg-neutral-200" />
            <div className="h-2 w-2/3 rounded bg-neutral-200" />
          </div>
        </div>
      )
    case "executive":
      return (
        <div className="space-y-3 opacity-60 blur-[0.5px] filter">
          <div className="h-3 w-2/5 rounded bg-neutral-300" />
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="h-8 rounded-lg bg-neutral-100" />
            <div className="h-8 rounded-lg bg-neutral-100" />
          </div>
          <div className="space-y-1.5 pt-2">
            <div className="h-2 w-full rounded bg-neutral-200" />
            <div className="h-2 w-5/6 rounded bg-neutral-200" />
          </div>
        </div>
      )
    default: {
      const exhaustive: never = preview
      return exhaustive
    }
  }
}
