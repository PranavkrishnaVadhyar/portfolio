import { GeistSans } from "geist/font/sans"
import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = {
  title: "B Pranavkrishna Vadhyar | ML + Backend Engineer",
  description: "Generative AI, intelligent systems, and scalable backends. Explore the projects and experience of B Pranavkrishna Vadhyar.",
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${GeistSans.variable} antialiased`}><body>{children}</body></html>
}
