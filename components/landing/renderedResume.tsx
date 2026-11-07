import { compiledResume } from "@/data/resumes"
import type { ResumeBlock } from "@/types/resumes"

export function RenderedResume() {
  const resume = compiledResume

  return (
    <article className="flex h-full flex-col justify-between rounded-2xl bg-white p-7 text-neutral-900 shadow-md">
      <div>
        <div className="mb-4 border-b border-neutral-100 pb-4 text-center">
          <h3 className="text-lg font-bold tracking-tight text-neutral-900 uppercase">{resume.name}</h3>
          <p className="mt-0.5 font-mono text-xs text-neutral-500">{resume.contact}</p>
        </div>
        <div className="space-y-4">
          {resume.blocks.map((block) => (
            <ResumeBlockView key={block.heading} block={block} />
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-3 font-mono text-xs text-neutral-400">
        <span className="flex items-center gap-1.5 font-semibold text-brand-600">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {resume.renderedLabel}
        </span>
        <span>{resume.fitLabel}</span>
      </div>
    </article>
  )
}

function ResumeBlockView({ block }: { block: ResumeBlock }) {
  switch (block.kind) {
    case "experience":
      return (
        <section>
          <h4 className="mb-2 border-b border-neutral-200 pb-1 text-xs font-bold tracking-wider text-neutral-900 uppercase">
            {block.heading}
          </h4>
          <div className="mb-0.5 flex items-baseline justify-between">
            <span className="text-xs font-semibold text-neutral-900">{block.title}</span>
            <span className="font-mono text-[11px] text-neutral-500">{block.dates}</span>
          </div>
          <div className="mb-1 text-xs font-medium text-brand-700">{block.org}</div>
          <ul className="list-inside list-disc space-y-1 text-xs text-neutral-600">
            {block.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>
      )
    case "skills":
      return (
        <section>
          <h4 className="mb-2 border-b border-neutral-200 pb-1 text-xs font-bold tracking-wider text-neutral-900 uppercase">
            {block.heading}
          </h4>
          <p className="text-xs text-neutral-600">
            <strong className="text-neutral-800">{block.label}:</strong> {block.value}
          </p>
        </section>
      )
    default: {
      const exhaustive: never = block
      return exhaustive
    }
  }
}
