import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Gas, Heating, Plumbing & Electrical, Enfield`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  generator: "v0.app",
  keywords: [
    "gas engineer Enfield",
    "boiler repair Enfield",
    "plumber Enfield London",
    "central heating installation",
    "emergency plumber London",
    "gas safety certificate",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: siteConfig.shortName,
    title: `${siteConfig.name} | Gas, Heating, Plumbing & Electrical`,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Gas, Heating, Plumbing & Electrical`,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      {
        url: "/brand/gsp-logo-mark-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/brand/gsp-logo-mark-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: "/brand/gsp-logo-mark-32.png",
    apple: [
      {
        url: "/brand/gsp-logo-mark-180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${jakarta.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground overflow-x-hidden">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
