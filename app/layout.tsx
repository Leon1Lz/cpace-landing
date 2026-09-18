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
  description: 'CPACE Philippines offers industry-recognized certifications & training programs across the Philippines. Expert consultancy & upskilling to advance your career.',
  keywords: [
    'CPACE Philippines',
    'professional certification',
    'continuing education',
    'CFMS certification',
    'CMMS certification',
    'COMS certification',
    'CHRA review',
    'business consultancy',
    'ISO certification',
    'professional development Philippines',
    'career advancement',
    'corporate training',
  ],
  authors: [{ name: 'CPACE Philippines' }],
  creator: 'CPACE Philippines',
  publisher: 'CPACE Philippines',
  icons: {
    icon: [
      {
        url: '/cpace-icon.png',
      },
    ],
    shortcut: '/cpace-icon.png',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL('https://cpaceph.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    siteName: 'CPACE Philippines',
    title: 'CPACE Philippines — Professional Advancement & Continuing Education',
    description: 'CPACE Philippines offers industry-recognized certifications & training programs across the Philippines. Expert consultancy & upskilling to advance your career.',
    url: 'https://cpaceph.com',
    images: [
      {
        url: '/cpace-logo.png',
        width: 1800,
        height: 600,
        alt: 'CPACE Philippines Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CPACE Philippines — Professional Advancement & Continuing Education',
    description: 'CPACE Philippines offers industry-recognized certifications & training programs across the Philippines. Expert consultancy & upskilling to advance your career.',
    images: ['/cpace-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
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
