import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.goldenerpfau.com"),
  title: 'Goldener Pfau — Global luxury, privately arranged',
  description: 'Private concierge, exceptional residences, mobility and travel by Goldener Pfau.',
  openGraph: {
    title: 'Goldener Pfau — Global luxury, privately arranged',
    description: 'Private Concierge · Residences · Travel · Membership',
    url: 'https://www.goldenerpfau.com',
    siteName: 'Goldener Pfau',
    images: [{ url: '/images/img53.jpg', width: 1122, height: 1402, alt: 'Goldener Pfau' }],
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
