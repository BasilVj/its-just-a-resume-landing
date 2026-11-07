export type NavLink = {
  label: string
  href: "#engine-demo" | "#templates" | "#pricing"
}

export type InfoIconKind = "vault" | "shield" | "history"

export type InfoCardData = {
  icon: InfoIconKind
  kicker: string
  title: string
  body: string
  statLabel: string
  statValue: string
}

export type TemplatePreview = "academic" | "staff" | "executive"

export type TemplateCardData = {
  badge: string
  title: string
  body: string
  comingSoon: string
  lockLabel: string
  preview: TemplatePreview
}

export type PricingTone = "light" | "dark"

export type PricingPlanData = {
  tone: PricingTone
  name: string
  badge: string
  price: string
  period: string
  description: string
  features: readonly [string, ...string[]]
  cta: string
}
