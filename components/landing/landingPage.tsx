import { AtsSection } from "@/components/landing/atsSection"
import { DualEngineSection } from "@/components/landing/dualEngineSection"
import { PitchSection } from "@/components/landing/pitchSection"
import { PricingSection } from "@/components/landing/pricingSection"
import { SiteFooter } from "@/components/landing/siteFooter"
import { SiteHeader } from "@/components/landing/siteHeader"
import { TemplatesSection } from "@/components/landing/templatesSection"

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main className="w-full flex-1 bg-surface-canvas pt-16">
        <div className="flex w-full flex-col">
          <PitchSection />
          <DualEngineSection />
          <AtsSection />
          <TemplatesSection />
          <PricingSection />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
