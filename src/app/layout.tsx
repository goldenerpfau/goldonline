import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import './page.module.scss'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Goldener Pfau',
  description:
    'Goldener Pfau redefines luxury and exclusivity with bespoke experiences in hospitality, investments, and lifestyle.',

  openGraph: {
    title: 'Goldener Pfau — Where Prestige Meets the Road',
    description:
      'Discover a new dimension of luxury, elegance, and sophistication with Goldener Pfau.',
    url: 'https://www.goldenerpfau.com',
    siteName: 'Goldener Pfau',
    images: [
      {
        url: 'https://www.goldenerpfau.com/og-image.jpg', // place your image in /public/og-image.jpg
        width: 1280,
        height: 1138,
        alt: 'Goldener Pfau — Luxury and Elegance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Goldener Pfau — Where Prestige Meets the Road',
    description:
      'Luxury, exclusivity, and tailor-made experiences by Goldener Pfau.',
    images: ['https://www.goldenerpfau.com/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} background-site`}>
        <main className="no-spacing">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
