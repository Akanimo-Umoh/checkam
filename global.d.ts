import type messages from "./messages/en.json"
import type { locales } from "./i18n/config"

// Tells TypeScript which message keys and locales exist.
// t("result.matchd.title") (typo) becomes a red line instead of a blank screen.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof locales)[number]
    Messages: typeof messages
  }
}
