// Every language the app supports. "pcm" is the ISO code for Nigerian Pidgin.
export const locales = ["en", "pcm"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

// The cookie that remembers the choice.
export const LOCALE_COOKIE = "CHECKAM_LOCALE"

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}
