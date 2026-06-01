import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = { themeColor: '#050505' };

export const metadata: Metadata = {
  metadataBase: new URL('https://TopDrop.ch'),
  title: 'TopDrop.ch – Premium Swiss Domain For Sale | E-commerce, Dropshipping, SaaS',
  description: 'TopDrop.ch – premium Swiss domain (.ch) for sale. 8+ years history, strong SEO, perfect for e-commerce, dropshipping, logistics & SaaS. Secure escrow transfer via Sedo / Dan.',
  keywords: 'TopDrop.ch, domain for sale, premium domain, swiss domain, .ch domain, dropshipping, e-commerce, SaaS, logistics, domain investment',
  authors: [{ name: 'andrzejmich.ch' }],
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://TopDrop.ch/' },
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  openGraph: {
    type: 'website',
    title: 'TopDrop.ch – Premium Swiss Domain For Sale',
    description: 'Premium .ch domain with 8+ years history. Ideal for e-commerce, dropshipping & SaaS. Secure escrow transfer.',
    url: 'https://TopDrop.ch',
    images: ['/logo.svg'],
  },
  twitter: { card: 'summary_large_image' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'TopDrop.ch',
  description: 'Premium Swiss .ch domain for sale. 8+ years history, perfect for e-commerce, dropshipping, SaaS and logistics.',
  brand: { '@type': 'Brand', name: 'TopDrop.ch' },
  category: 'Domain Name',
  offers: { '@type': 'Offer', priceCurrency: 'CHF', availability: 'https://schema.org/InStock', url: 'https://TopDrop.ch' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
