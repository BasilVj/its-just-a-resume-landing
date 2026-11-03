import { engineCopy } from "@/data/landing"
import { RenderedResume } from "@/components/landing/renderedResume"
import { TexEditor } from "@/components/landing/texEditor"
import { SectionKicker } from "@/components/ui/sectionKicker"

export function DualEngineSection() {
  return (
    <section
      className="relative mx-auto my-4 w-full max-w-[98%] overflow-hidden rounded-3xl bg-surface-dark py-20 text-white md:rounded-[2.5rem] md:py-28"
      id="engine-demo"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3">
            <SectionKicker index={engineCopy.index} label={engineCopy.label} tone="engine" />
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {engineCopy.headline}
          </h2>
          <p className="text-base leading-relaxed text-neutral-400">{engineCopy.body}</p>
        </div>
        <TexEditor>
          <RenderedResume />
        </TexEditor>
      </div>
    </section>
  )
}
