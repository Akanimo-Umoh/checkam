import { Figtree, Bricolage_Grotesque } from "next/font/google"

import type { Metadata } from "next"
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        figtree.variable,
        "font-sans",
        bricolage.variable
      )}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
