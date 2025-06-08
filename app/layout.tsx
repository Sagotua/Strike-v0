import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://strike-face-armor.vercel.app"),
  title: {
    default: "Strike Face Ceramic Armor Plates — Class 6 | Certified Protection",
    template: "%s | Strike Face Armor",
  },
  description:
    "Certified ceramic armor plates Class 6. Withstands B-32 armor-piercing bullets. Weight only 2.8kg. DSTU certified with ballistic certificate. Fast delivery across Ukraine.",
  keywords:
    "ceramic armor plates, ballistic protection, class 6 armor, B-32 resistant, DSTU certified, military equipment, body armor, Ukraine",
  authors: [{ name: "Strike Face Armor" }],
  creator: "Strike Face Armor",
  publisher: "Strike Face Armor",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strike-face-armor.vercel.app",
    siteName: "Strike Face Armor",
    title: "Strike Face Ceramic Armor Plates — Class 6",
    description: "Certified ceramic armor plates. Withstands B-32 bullets. Only 2.8kg weight.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Strike Face Ceramic Armor Plates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strike Face Ceramic Armor Plates — Class 6",
    description: "Certified ceramic armor plates. Withstands B-32 bullets. Only 2.8kg weight.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://strike-face-armor.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#12150c" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
