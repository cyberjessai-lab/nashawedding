import type { Metadata } from 'next'
import AppShell from '@/components/AppShell'
import './globals.css'

export const metadata: Metadata = {
  title: 'Celson & Nasha — 22 August 2026',
  description: 'Wedding celebration of Celson da Costa Lourenço Nangolo & Nasha Schiceya — 22 August 2026 at Windhoek Country Club Resort, Namibia.',
  openGraph: {
    title: 'Celson & Nasha — 22 August 2026',
    description: 'Wedding celebration at Windhoek Country Club Resort',
    url: 'https://nashandcelson.vercel.app',
    images: [{ url: 'https://nashandcelson.vercel.app/images/hero-couple.jpg', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_NA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celson & Nasha — 22 August 2026',
    description: 'Wedding celebration at Windhoek Country Club Resort',
    images: ['https://nashandcelson.vercel.app/images/hero-couple.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
