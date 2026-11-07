import { landingNav } from "@/data/landing"

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-3">
          <a className="group flex items-center gap-1.5 tracking-tight sm:gap-2" href="#">
            <span className="text-base font-extrabold leading-none tracking-tight whitespace-nowrap text-neutral-900 sm:text-xl">
              {landingNav.wordmark}
              <span className="text-brand-500">.</span>
            </span>
            <span className="rounded-full border border-brand-200/60 bg-brand-50 px-2 py-0.5 font-mono text-[11px] font-medium text-brand-700 transition-transform group-hover:scale-105">
              {landingNav.honesty}
            </span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex">
            {landingNav.links.map((link) => (
              <a
                key={link.href}
                className="transition-colors hover:text-neutral-900"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="hidden px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 sm:inline-block"
              href="#"
            >
              {landingNav.signIn}
            </a>
            <a
              className="flex shrink-0 items-center gap-1.5 rounded-xl bg-brand-500 px-3 py-1.5 text-sm font-medium whitespace-nowrap text-white shadow-sm shadow-brand-500/20 transition-all hover:bg-brand-600 hover:shadow-brand-500/30 sm:px-4 sm:py-2"
              href="#"
            >
              <span>{landingNav.startFree}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
