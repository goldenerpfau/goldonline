import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = { themeColor: '#000000', colorScheme: 'dark' };

const siteTitle = 'Goldener Pfau — Qualität auf Goldbasis';
const siteDescription = 'Every detail, personally arranged. Private concierge, residences, travel and membership.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.goldenerpfau.com'),
  title: siteTitle,
  description: siteDescription,
  applicationName: 'Goldener Pfau',
  icons: {
    icon: [
      { url: '/icon-gold-v3.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon-v3.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://www.goldenerpfau.com',
    siteName: 'Goldener Pfau',
    images: [{ url: '/share-goldener-pfau-v3.jpg', width: 1200, height: 630, alt: 'Goldener Pfau — Qualität auf Goldbasis. Every detail, personally arranged.' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/share-goldener-pfau-v3.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
