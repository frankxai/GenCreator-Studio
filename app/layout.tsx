import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'GenCreator Studio',
    template: '%s · GenCreator Studio',
  },
  description:
    'The Vercel template that runs on a Creator Intelligence System (CIS) instance. Capture, strategy, production, distribution, and learning — with cryptographic attestation on every output.',
  metadataBase: new URL('https://gencreator-studio.vercel.app'),
  openGraph: {
    title: 'GenCreator Studio',
    description: 'Sovereign content studio. Open-source, MIT, bootable.',
    url: 'https://gencreator-studio.vercel.app',
    siteName: 'GenCreator Studio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GenCreator Studio',
    description: 'Sovereign content studio. Open-source, MIT, bootable.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-void text-ink antialiased">{children}</body>
    </html>
  )
}
