import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Goldener Pfau — Global luxury, privately arranged',
  description: 'Private luxury concierge, assets, travel and investments by Goldener Pfau Sp. z o.o.',
  openGraph: {
    title: 'Goldener Pfau — Global luxury, privately arranged',
    description: 'Luxury Concierge · Assets · Travel · Investments',
    url: 'https://www.goldenerpfau.com',
    siteName: 'Goldener Pfau',
    images: [{ url: '/og-image.jpg', width: 1280, height: 1138, alt: 'Goldener Pfau' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
