import { heroResume } from "@/data/resumes"
import type { StackChip } from "@/types/resumes"
import { MaterialIcon } from "@/components/ui/materialIcon"
import { cn } from "@/lib/utils"

const chipTones = {
  soft: "bg-neutral-100 text-neutral-700 font-medium",
  green: "bg-brand-50 text-brand-700 border border-brand-200/50 font-semibold",
} satisfies Record<StackChip["tone"], string>

export function SampleResumeCard() {
  const resume = heroResume

  return (
    <>
      <div className="pointer-events-none absolute top-4 -right-2 -z-0 h-[94%] w-[88%] rotate-2 rounded-3xl bg-brand-100/60 sm:-right-4" />
      <div className="relative z-10 w-full max-w-[440px] rounded-3xl border border-neutral-100 bg-white p-7 shadow-xl shadow-neutral-900/5 transition-all hover:shadow-2xl">
        <div className="mb-5 flex items-center justify-between border-b border-neutral-100 pb-4">
          <div>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-brand-600 uppercase">
              {resume.eyebrow}
            </span>
            <p className="text-xl font-bold tracking-tight text-neutral-900">{resume.name}</p>
            <p className="text-xs text-neutral-500">{resume.role}</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-600 shadow-sm">
            <MaterialIcon name="check_circle" size={20} />
          </div>
        </div>
        <div className="space-y-4 text-left">
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-xs font-bold tracking-wide text-neutral-800 uppercase">
                {resume.experienceLabel}
              </span>
              <span className="font-mono text-[11px] text-neutral-400">{resume.dates}</span>
            </div>
            <div className="space-y-1 rounded-2xl border border-neutral-100 bg-neutral-50/80 p-3">
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-900">
                <span>{resume.title}</span>
                <span className="font-mono text-[11px] text-brand-600">{resume.company}</span>
              </div>
              <p className="text-[12px] leading-relaxed text-neutral-600">{resume.summary}</p>
            </div>
          </div>
          <div>
            <span className="mb-2 block text-xs font-bold tracking-wide text-neutral-800 uppercase">
              {resume.stackLabel}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {resume.stack.map((chip) => (
                <span
                  key={chip.label}
                  className={cn("rounded-lg px-2.5 py-1 text-xs", chipTones[chip.tone])}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-neutral-900 p-3 font-mono text-xs text-white">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-400" />
              <span className="text-neutral-300">{resume.compileLabel}</span>
            </div>
            <span className="font-medium text-brand-400">{resume.compileMeta}</span>
          </div>
        </div>
        <div className="absolute -bottom-4 -left-4 flex items-center gap-2.5 rounded-2xl border border-neutral-100 bg-white px-4 py-2.5 shadow-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
            <MaterialIcon name="verified" size={18} />
          </div>
          <div>
            <div className="text-xs font-bold text-neutral-900">{resume.atsTitle}</div>
            <div className="text-[11px] text-neutral-500">{resume.atsDetail}</div>
          </div>
        </div>
      </div>
    </>
  )
}
