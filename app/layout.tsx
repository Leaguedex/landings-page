import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leaguedex - Virtual Coach for League of Legends",
  description: "Create custom cues to build better habits, sharpen your skills, and stay mentally sharp. Get TTS reminders based on time or in-game state. Open source virtual coach for League of Legends players.",
  keywords: ["League of Legends", "LoL", "virtual coach", "gaming coach", "TTS reminders", "game coaching", "League coaching", "open source"],
  authors: [{ name: "Leaguedex" }],
  creator: "Leaguedex",
  publisher: "Leaguedex",
  openGraph: {
    title: "Leaguedex - Virtual Coach for League of Legends",
    description: "Create custom cues to build better habits, sharpen your skills, and stay mentally sharp. Get TTS reminders based on time or in-game state.",
    url: "https://leaguedex.landingspage",
    siteName: "Leaguedex",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leaguedex - Virtual Coach for League of Legends",
    description: "Create custom cues to build better habits, sharpen your skills, and stay mentally sharp. Get TTS reminders based on time or in-game state.",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/leaguedex.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  )
}
