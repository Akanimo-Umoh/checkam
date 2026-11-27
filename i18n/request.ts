import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"
import { defaultLocale, isLocale, LOCALE_COOKIE } from "./config"

// Runs on the server for every request: read the cookie, load that language's words.
export default getRequestConfig(async () => {
  const store = await cookies() // async in Next 16
  const saved = store.get(LOCALE_COOKIE)?.value
  const locale = isLocale(saved) ? saved : defaultLocale

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
