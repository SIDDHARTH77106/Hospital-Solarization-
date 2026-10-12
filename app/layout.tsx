import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://hospital-solorr.vercel.app';
const siteName = 'Surya Sangam';
const defaultTitle = 'Surya Sangam | Transparent & Cost-Effective Solar Solutions';
const defaultDescription = 'Make solar simple with Surya Sangam. Explore clear solar pathways, understand savings and subsidies, and connect with verified clean-energy guidance for homes, businesses and institutions.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: ['solar solutions India', 'rooftop solar', 'solar subsidy', 'hospital solarization', 'commercial solar', 'agrivoltaics'],
  alternates: { canonical: '/' },
  authors: [{ name: 'Surya Sangam' }],
  creator: 'Surya Sangam',
  publisher: 'Surya Sangam',
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: '/images/surya-home.jpg', alt: 'Rooftop solar installation on an Indian home' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/images/surya-home.jpg'],
  },
  icons: { icon: '/favicon.svg' },
  formatDetection: { telephone: true, email: true, address: false },
};

export const viewport: Viewport = {
  themeColor: '#091936',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" dir="ltr">
      <body className="site-shell" suppressHydrationWarning>
        <div id="site-root">{children}</div>
      </body>
    </html>
  );
}
