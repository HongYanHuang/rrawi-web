import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-source-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s | raawi',
    default: 'raawi — Audio walking tours, narrated by people who know the place',
  },
  description:
    'raawi turns a city walk into a story. Narrated audio tours that unfold as you walk, made by locals who actually know the place. Rome, Kyoto, Lisbon, and more.',
  metadataBase: new URL('https://www.rrawi.com'),
  openGraph: {
    siteName: 'raawi',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  )
}
