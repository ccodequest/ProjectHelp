import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://projecthelp.in'),
  title: {
    default: 'ProjectHelp | Premium Academic Projects & Custom Solutions',
    template: '%s | ProjectHelp'
  },
  description: 'Get expertly crafted academic projects with complete source code, documentation, and 24/7 support. 500+ ready-made projects across AI/ML, Web Development, Cybersecurity & more. Custom solutions available with publication support.',
  keywords: ['academic projects', 'college projects', 'university projects', 'project help', 'custom projects', 'AI ML projects', 'web development projects', 'cybersecurity projects', 'source code', 'project documentation', 'student projects', 'final year projects', 'research projects', 'publication support'],
  authors: [{ name: 'ProjectHelp Team' }],
  creator: 'ProjectHelp',
  publisher: 'ProjectHelp',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://projecthelp.in',
    title: 'ProjectHelp | Premium Academic Projects & Custom Solutions',
    description: 'Get expertly crafted academic projects with complete source code, documentation, and 24/7 support. Trusted by 1000+ students worldwide.',
    siteName: 'ProjectHelp',
    images: [{
      url: '/Logo.jpg',
      width: 1200,
      height: 630,
      alt: 'ProjectHelp - Academic Projects Marketplace',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProjectHelp | Premium Academic Projects & Custom Solutions',
    description: 'Get expertly crafted academic projects with complete source code, documentation, and 24/7 support.',
    images: ['/Logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
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
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ProjectHelp',
  },
  other: {
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#2563eb',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ProjectHelp',
    description: 'Premium academic projects marketplace with expert support',
    url: 'https://projecthelp.in',
    logo: 'https://projecthelp.in/Logo.jpg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-89512-16187',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://wa.me/919845293201',
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ProjectHelp" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
