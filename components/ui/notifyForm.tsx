"use client"

import { useState } from "react"

import { templatesCopy } from "@/data/landing"
import { MaterialIcon } from "@/components/ui/materialIcon"

type NotifyStatus = { kind: "idle" } | { kind: "invalid" } | { kind: "done" }

const copy = templatesCopy.notify

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function NotifyForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<NotifyStatus>({ kind: "idle" })

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isEmail(email.trim())) {
      setStatus({ kind: "invalid" })
      return
    }
    setStatus({ kind: "done" })
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-neutral-900 p-6 text-white shadow-xl sm:p-8 lg:flex-row"
    >
      <div className="flex items-center gap-4 text-center sm:text-left">
        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-400 sm:flex">
          <MaterialIcon name="mark_email_unread" size={26} />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">{copy.title}</h4>
          <p className="text-xs text-neutral-400 sm:text-sm">{statusMessage(status) ?? copy.body}</p>
        </div>
      </div>
      {status.kind === "done" ? null : (
        <div className="flex w-full items-center gap-2 lg:w-auto">
          <label className="sr-only" htmlFor="template-email">
            Email
          </label>
          <input
            id="template-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={copy.placeholder}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              if (status.kind === "invalid") setStatus({ kind: "idle" })
            }}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-brand-400 focus:outline-none lg:w-72"
          />
          <button
            type="submit"
            className="rounded-2xl bg-brand-500 px-5 py-3 text-sm font-medium whitespace-nowrap text-white shadow-md shadow-brand-500/20 transition-all hover:bg-brand-600"
          >
            {copy.cta}
          </button>
        </div>
      )}
    </form>
  )
}

function statusMessage(status: NotifyStatus): string | null {
  switch (status.kind) {
    case "idle":
      return null
    case "invalid":
      return copy.invalid
    case "done":
      return copy.success
    default: {
      const exhaustive: never = status
      return exhaustive
    }
  }
}
