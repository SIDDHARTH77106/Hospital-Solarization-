import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://suryasangam.com'),
  title: 'Surya Sangam | Transparent & Cost-Effective Solar Solutions',
  description: 'Make solar simple with Surya Sangam. Calculate savings, understand subsidies and connect with verified installers for your home or business.',
  keywords: ['solar solutions India', 'rooftop solar', 'solar subsidy', 'hospital solarization', 'commercial solar', 'agrivoltaics'],
  alternates: { canonical: '/' },
  authors: [{ name: 'Surya Sangam' }],
  creator: 'Surya Sangam',
  publisher: 'Surya Sangam',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://suryasangam.com',
    siteName: 'Surya Sangam',
    title: 'Surya Sangam | Transparent & Cost-Effective Solar Solutions',
    description: 'Calculate savings, understand subsidies and connect with verified solar pathways for your home, business or institution.',
    images: [{ url: '/images/surya-home.jpg', alt: 'Rooftop solar installation on an Indian home' }],
  },
  twitter: { card: 'summary_large_image', title: 'Surya Sangam | Solar made simple', description: 'Clear solar pathways for homes, businesses and infrastructure.', images: ['/images/surya-home.jpg'] },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#f4f8fc',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
