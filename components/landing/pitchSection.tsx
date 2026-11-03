import { pitchCopy } from "@/data/landing"
import { SampleResumeCard } from "@/components/landing/sampleResumeCard"
import { MaterialIcon } from "@/components/ui/materialIcon"
import { SectionKicker } from "@/components/ui/sectionKicker"

export function PitchSection() {
  return (
    <section className="relative w-full overflow-hidden pt-16 pb-20 md:py-24">
      <div className="pointer-events-none absolute top-10 right-10 -z-10 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 left-10 -z-10 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-6">
              <SectionKicker
                index={pitchCopy.index}
                label={pitchCopy.label}
                note={pitchCopy.note}
                tone="pitch"
              />
            </div>
            <h1 className="mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              {pitchCopy.headline}
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed font-normal text-neutral-600">
              {pitchCopy.body}
            </p>
            <div className="mb-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-6 text-sm font-medium text-white shadow-md shadow-neutral-900/10 transition-all hover:bg-neutral-800 hover:shadow-lg sm:text-base"
                href="#editor-preview"
              >
                <span>{pitchCopy.primaryCta}</span>
                <MaterialIcon name="arrow_forward" size={18} />
              </a>
              <a
                className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-neutral-200/80 bg-white px-6 text-sm font-medium text-neutral-800 shadow-sm transition-all hover:bg-neutral-50 sm:text-base"
                href="#engine-demo"
              >
                <MaterialIcon name="play_circle" size={18} className="text-brand-600" />
                <span>{pitchCopy.secondaryCta}</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-neutral-500">
              {pitchCopy.checks.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-brand-600">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center lg:col-span-5">
            <SampleResumeCard />
          </div>
        </div>
      </div>
    </section>
  )
}
