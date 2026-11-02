import content from "@/data/portfolio.json"
import { GeistSans } from "geist/font/sans"
import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = {
  metadataBase: new URL(content.metadata.siteUrl),
  title: content.metadata.title,
  authors: [{ name: content.personal.name, url: content.metadata.siteUrl }],
  creator: content.personal.name,
  robots: { index: true, follow: true },
  description: content.metadata.description,
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang={content.metadata.language} className={`${GeistSans.variable} antialiased`}><body>{children}</body></html>
}
