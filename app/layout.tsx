import type { Metadata, Viewport } from 'next'
import { Inter, Barlow } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: {
    default: 'G & M Plumbing | Plumber in Pflugerville & Austin, TX',
    template: '%s | G & M Plumbing',
  },
  description:
    'G & M Plumbing, Inc. is Pflugerville and Austin TX\'s trusted plumber for repairs, installations, hydrostatic pressure testing, water heaters, and yard & gas lines. Call 512-990-0505.',
  keywords: [
    'plumber Pflugerville TX',
    'plumbing Austin TX',
    'hydrostatic pressure test',
    'water heater installation repair',
    'yard line repair',
    'gas line repair',
    'plumbing repair Austin',
    'G&M Plumbing',
  ],
  authors: [{ name: 'G & M Plumbing, Inc.' }],
  creator: 'G & M Plumbing, Inc.',
  metadataBase: new URL(''),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '',
    siteName: 'G & M Plumbing',
    title: 'G & M Plumbing | Plumber in Pflugerville & Austin, TX',
    description:
      'Pflugerville and Austin TX\'s premier plumbing and hydrostatic pressure testing provider. Repairs, water heaters, yard & gas lines.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#3b82f6',
  width: 'device-width',
  initialScale: 1,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'PlumbingService',
      '@id': '/#organization',
      name: 'G & M Plumbing, Inc.',
      url: '',
      telephone: '+15129900505',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pflugerville',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Pflugerville', containedIn: 'Texas' },
        { '@type': 'City', name: 'Austin', containedIn: 'Texas' },
        { '@type': 'City', name: 'Round Rock', containedIn: 'Texas' },
        { '@type': 'City', name: 'Cedar Park', containedIn: 'Texas' },
        { '@type': 'City', name: 'Leander', containedIn: 'Texas' },
        { '@type': 'City', name: 'Georgetown', containedIn: 'Texas' },
      ],
      description:
        'G & M Plumbing, Inc. is Pflugerville and Austin TX\'s premier plumbing and hydrostatic pressure testing provider.',
      priceRange: '$$',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    },
    {
      '@type': 'WebSite',
      '@id': '/#website',
      url: '',
      name: 'G & M Plumbing',
      publisher: { '@id': '/#organization' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#ffffff]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${barlow.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
