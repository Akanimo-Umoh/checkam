"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { setLocale } from "@/i18n/actions"
import type { Locale } from "@/i18n/config"
import { cn } from "@/lib/utils"

const options: { value: Locale; short: string; key: "english" | "pidgin" }[] = [
  { value: "en", short: "EN", key: "english" },
  { value: "pcm", short: "PG", key: "pidgin" },
]

export function LanguageToggle({ className }: { className?: string }) {
  const t = useTranslations("common")
  const current = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function choose(locale: Locale) {
    if (locale === current) return
    startTransition(async () => {
      // save the cookie on the server
      await setLocale(locale)
      // re-render the page with the new words
      router.refresh()
    })
  }

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={cn("inline-flex rounded-full bg-muted p-[3px]", className)}
      aria-busy={isPending}
    >
      {options.map((o) => {
        const active = o.value === current
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => choose(o.value)}
            aria-pressed={active}
            aria-label={t(o.key)}
            disabled={isPending}
            className={cn(
              "h-9 min-w-11 rounded-full text-label-sm transition-colors",
              active
                ? "bg-card text-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {o.short}
          </button>
        )
      })}
    </div>
  )
}
