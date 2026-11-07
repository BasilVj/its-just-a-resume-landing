import { footerCopy } from "@/data/landing"

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t border-neutral-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 font-mono text-xs text-neutral-500 md:flex-row">
          <div className="flex items-center gap-2">
            <span>{footerCopy.mark}</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>{footerCopy.notes[0]}</span>
            <span>•</span>
            <span>{footerCopy.notes[1]}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
