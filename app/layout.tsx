import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: 'CPACE Philippines | Center for Professional Advancement & Continuing Education',
    template: '%s | CPACE Philippines',
  },
  description: 'CPACE Philippines — Professional advancement, continuing education, and industry-recognized certifications for individuals and organizations.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    siteName: 'CPACE Philippines',
    title: 'CPACE Philippines — Professional Advancement & Continuing Education',
    description: 'Elevate your career with industry-recognized certifications, business consultancy, and lifelong learning programs.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col justify-between">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
