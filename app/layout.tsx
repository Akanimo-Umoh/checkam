import { Figtree, Bricolage_Grotesque } from "next/font/google"

import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getLocale } from "next-intl/server"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "CheckAm NG",
  description: "Check if your medicine is registered with NAFDAC",
}

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-heading",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // "en" or "pcm", from the cookie
  const locale = await getLocale()

  return (
    // lang tells screen readers which language to read in
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        "antialiased",
        figtree.variable,
        "font-sans",
        bricolage.variable
      )}
    >
      <body>
        {/* passes the language and words down to client components */}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
