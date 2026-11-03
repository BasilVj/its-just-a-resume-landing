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

export const landingNav = {
  wordmark: "it's just a resume",
  honesty: "(honestly)",
  signIn: "Sign In",
  startFree: "Start Free",
  startFreeNote: "— 10 Resumes",
  links: [
    { label: "How it works", href: "#engine-demo" },
    { label: "Templates", href: "#templates" },
    { label: "Pricing", href: "#pricing" },
  ],
} as const satisfies {
  wordmark: string
  honesty: string
  signIn: string
  startFree: string
  startFreeNote: string
  links: readonly NavLink[]
}

export const pitchCopy = {
  index: "01",
  label: "The Pitch",
  note: "no fluff, just interviews",
  headline:
    "Because spending 6 hours in Microsoft Word aligning bullet points is a tragedy.",
  body: "LaTeX math under the hood, but you never have to suffer through cryptic compiler logs. Build mathematically crisp, parser-immune resumes in minutes.",
  primaryCta: "Create Resume Free",
  secondaryCta: "See How Simple It Is",
  checks: [
    "10 Free saved resumes in your vault",
    "5 Custom .tex imports anytime",
    "Instant ATS compliance",
  ],
} as const

export const engineCopy = {
  index: "02",
  label: "Dual Engine",
  headline: "Form-guided ease. Raw code when you want it.",
  body: "Don't want to type code? Use the friendly form builder. Want raw precision? Pop open the .tex editor. It syncs in real-time without breaking your brain.",
  filename: "resume.tex",
  modes: [
    { id: "raw", label: "Raw .tex Mode" },
    { id: "guided", label: "Guided Form View" },
  ],
  activeModeId: "raw",
  syncLabel: "Live Syncing",
  compileLabel: "Compile",
  highlights: [
    "5 Custom .tex Imports for Free",
    "Auto-fixes unclosed brackets",
    "1-Click PDF Export",
  ],
} as const

export const atsCopy = {
  index: "03",
  label: "ATS Friendly",
  headline:
    "Engineered for robot screeners. Delightful for actual human recruiters.",
  body: "Most resume tools export invisible messy layers, overlapping tables, and garbage characters that break ATS systems. We compile clean, linear typographic streams that Workday and Greenhouse parse instantly.",
  cards: [
    {
      icon: "vault",
      kicker: "Free vault",
      title: "10 Resumes in Your Account",
      body: "Save up to 10 tailored versions for different roles — Frontend, Lead Engineer, DevRel — without having to juggle scattered files on your desktop.",
      statLabel: "Account Storage",
      statValue: "10 Full Resumes",
    },
    {
      icon: "shield",
      kicker: "ATS guarantee",
      title: "Zero Floating Layout Bugs",
      body: "Single-stream typographical output. No multi-column collision traps where your experience gets dumped into phone number fields.",
      statLabel: "Parser Accuracy",
      statValue: "100% Pure Vectors",
    },
    {
      icon: "history",
      kicker: "Instant rollback",
      title: "Keystroke History & Diffs",
      body: "Mess up an edit? Compare changes side-by-side or roll back in one click. Plus download cleanly zipped sources whenever you wish.",
      statLabel: "Checkpoints",
      statValue: "Unlimited Undos",
    },
  ],
} as const satisfies {
  index: string
  label: string
  headline: string
  body: string
  cards: readonly InfoCardData[]
}

export const templatesCopy = {
  index: "04",
  label: "Templates",
  droppingSoon: "DROPPING SOON",
  headline: "Curated Resume Templates.",
  body: "We're obsessing over every point of line-height and margin spacing so you never have to nudge boxes in Figma again.",
  testingNote: "In private testing with tech talent leads",
  cards: [
    {
      badge: "BibTeX Ready",
      title: "Minimal Academic",
      body: "Perfect for researchers, ML fellows, and postdocs.",
      comingSoon: "COMING SOON",
      lockLabel: "Dropping in Vault v2.5",
      preview: "academic",
    },
    {
      badge: "Single Column",
      title: "Staff Engineer Clean",
      body: "Maximum information density without visual clutter.",
      comingSoon: "COMING SOON",
      lockLabel: "Dropping in Vault v2.5",
      preview: "staff",
    },
    {
      badge: "Executive Grid",
      title: "Product & Tech Leader",
      body: "Highlight metrics, acquisitions, and team scale effortlessly.",
      comingSoon: "COMING SOON",
      lockLabel: "Dropping in Vault v2.5",
      preview: "executive",
    },
  ],
  notify: {
    title: "Get pinged when the template drop goes live",
    body: "Zero spam, zero promotions. Only one short email when the vault opens.",
    placeholder: "name@domain.com",
    cta: "Notify Me",
    success: "You're on the list. One short email when the vault opens.",
    invalid: "Enter an email address so we know where to ping you.",
  },
} as const satisfies {
  index: string
  label: string
  droppingSoon: string
  headline: string
  body: string
  testingNote: string
  cards: readonly TemplateCardData[]
  notify: {
    title: string
    body: string
    placeholder: string
    cta: string
    success: string
    invalid: string
  }
}

export const pricingCopy = {
  index: "05",
  label: "Simple Pricing",
  headline: "Simple, honest pricing.",
  body: "No sneaky $3 trial renewals that charge you $50 later. Keep 10 resumes 100% free, forever.",
  plans: [
    {
      tone: "light",
      name: "Starter",
      badge: "FREE FOREVER",
      price: "$0",
      period: "/ lifetime",
      description:
        "Generous enough so job-seekers never hit an artificial wall mid-interview cycle.",
      features: [
        "10 Resumes stored in free vault",
        "5 Custom LaTeX (.tex) imports",
        "Real-time compiler & instant live preview",
        "100% ATS parser verification",
        "Zero watermarks or branding on your PDFs",
      ],
      cta: "Start Free — 10 Resumes Included",
    },
    {
      tone: "dark",
      name: "Pro Architect",
      badge: "FOR POWER USERS",
      price: "$5",
      period: "/ monthly",
      description:
        "For contractors, managers, and designers who manage high-frequency application variations.",
      features: [
        "Unlimited resumes in your vault",
        "Unlimited custom .tex code imports",
        "Priority background compilation queue",
        "Auto BibTeX citation & publication ingestion",
        "Early VIP access to all new templates",
      ],
      cta: "Upgrade to Pro — $5/mo",
    },
  ],
  closing: {
    title: "Ready to stop fighting your resume editor?",
    body: "Take the stress out of typesetting. Store your first 10 versions free in your vault.",
    cta: "Start Building Now",
  },
} as const satisfies {
  index: string
  label: string
  headline: string
  body: string
  plans: readonly PricingPlanData[]
  closing: { title: string; body: string; cta: string }
}

export const footerCopy = {
  mark: "© it's just a resume company. built for humans who just want a job.",
  notes: ["LaTeX under the hood", "Zero compiler errors"],
} as const
