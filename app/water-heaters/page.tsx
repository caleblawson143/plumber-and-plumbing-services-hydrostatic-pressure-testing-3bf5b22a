import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Water Heater Installation & Repair in Pflugerville & Austin, TX',
  description:
    'G & M Plumbing installs and repairs tank and tankless water heaters throughout Pflugerville and Austin, TX. Fast scheduling, fair pricing. Call 512-990-0505.',
  alternates: { canonical: '/water-heaters' },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Water Heater Installation & Repair',
  provider: {
    '@type': 'PlumbingService',
    name: 'G & M Plumbing, Inc.',
    telephone: '+15129900505',
    address: { '@type': 'PostalAddress', addressLocality: 'Pflugerville', addressRegion: 'TX' },
  },
  areaServed: ['Pflugerville, TX', 'Austin, TX'],
  description:
    'Professional water heater installation and repair for tank and tankless systems in Pflugerville and Austin, TX.',
}

const waterHeaterTypes = [
  {
    title: 'Traditional Tank Water Heaters',
    description:
      'We install and repair traditional storage-tank water heaters for homes and businesses throughout Pflugerville and Austin. Affordable, reliable, and long-lasting.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="2" width="10" height="18" rx="2" />
        <path strokeLinecap="round" d="M9 6h6M9 10h6M10 20h4" />
      </svg>
    ),
  },
  {
    title: 'Tankless Water Heaters',
    description:
      'On-demand tankless water heaters save energy and never run out of hot water. Our plumbers install and service all major tankless brands across the Austin area.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Water Heater Repair',
    description:
      'No hot water? Strange noises? Leaking tank? Our plumbers diagnose and repair water heater problems fast so your home is back to normal as soon as possible.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94L6.64 20.4a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Water Heater Replacement',
    description:
      'Old water heater past its prime? We handle full replacement jobs in Pflugerville and Austin — removal of the old unit, proper disposal, and installation of the new one.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

const signs = [
  'No hot water or inconsistent water temperature',
  'Rust-colored or discolored water from hot taps',
  'Rumbling, popping, or banging sounds from the heater',
  'Visible leaks around the tank or connections',
  'Water heater is 10+ years old',
  'Unexplained increases in your energy bill',
]

export default function WaterHeatersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section
          aria-labelledby="wh-hero-heading"
          style={{ backgroundColor: '#0f172a' }}
          className="text-white py-16 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-xs text-[#94a3b8] mb-4">
              <ol className="flex items-center gap-1.5">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Water Heaters</li>
              </ol>
            </nav>
            <h1
              id="wh-hero-heading"
              className="text-3xl md:text-4xl font-extrabold text-white text-balance mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Water Heater Installation &amp; Repair in Pflugerville &amp; Austin, TX
            </h1>
            <p className="text-[#cbd5e1] text-lg leading-relaxed max-w-2xl">
              G &amp; M Plumbing installs, repairs, and replaces tank and tankless water heaters throughout
              the Pflugerville and Austin, TX area. Schedule your job with our licensed plumbers today.
            </p>
            <a
              href="tel:5129900505"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded font-bold text-white transition-colors text-base"
              style={{ backgroundColor: '#3b82f6' }}
            >
              Call 512-990-0505 to Schedule
            </a>
          </div>
        </section>

        {/* Service types */}
        <section
          aria-labelledby="wh-services-heading"
          className="py-14 px-4"
          style={{ backgroundColor: '#f8fafc' }}
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="wh-services-heading"
              className="text-2xl md:text-3xl font-extrabold text-[#0f172a] text-center mb-10 text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Water Heater Services in the Pflugerville &amp; Austin Area
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {waterHeaterTypes.map((type) => (
                <div
                  key={type.title}
                  className="bg-white border border-[#e2e8f0] rounded-xl p-6 flex gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-[#3b82f6]"
                    style={{ backgroundColor: '#eff6ff' }}
                    aria-hidden="true"
                  >
                    {type.icon}
                  </div>
                  <div>
                    <h3
                      className="text-[#0f172a] font-bold text-base mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {type.title}
                    </h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signs you need service */}
        <section
          aria-labelledby="wh-signs-heading"
          className="py-14 px-4 bg-white"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2
                id="wh-signs-heading"
                className="text-2xl md:text-3xl font-extrabold text-[#0f172a] mb-4 text-balance"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Signs You Need Water Heater Repair or Replacement
              </h2>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                Catching water heater issues early can save you money and prevent more costly damage.
                If you notice any of these signs in your Pflugerville or Austin home, call G &amp; M Plumbing right away.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {signs.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#334155]">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#eff6ff' }}
                      aria-hidden="true"
                    >
                      <svg width="12" height="12" fill="none" stroke="#3b82f6" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {sign}
                  </li>
                ))}
              </ul>
              <a
                href="tel:5129900505"
                className="inline-block px-6 py-3 rounded font-bold text-white text-sm transition-colors"
                style={{ backgroundColor: '#3b82f6' }}
              >
                Call 512-990-0505 Now
              </a>
            </div>
            <aside
              className="md:w-72 flex-shrink-0 rounded-xl p-6 border border-[#bfdbfe]"
              style={{ backgroundColor: '#eff6ff' }}
            >
              <h3
                className="text-[#1d4ed8] font-bold text-lg mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Ready to schedule your water heater service?
              </h3>
              <p className="text-[#334155] text-sm leading-relaxed mb-4">
                Our plumbers serve Pflugerville, Austin, Round Rock, Cedar Park, Leander, Georgetown, and surrounding TX communities.
              </p>
              <a
                href="tel:5129900505"
                className="block text-center font-bold text-white py-2.5 px-4 rounded transition-colors text-sm"
                style={{ backgroundColor: '#3b82f6' }}
              >
                512-990-0505
              </a>
              <p className="text-center text-xs text-[#64748b] mt-3">Licensed &amp; Insured Plumbers</p>
            </aside>
          </div>
        </section>

        {/* CTA */}
        <section
          aria-label="Call to action"
          style={{ backgroundColor: '#3b82f6' }}
          className="py-12 text-white text-center px-4"
        >
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-extrabold mb-3 text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Need a Water Heater Plumber in Pflugerville or Austin?
            </h2>
            <p className="text-blue-100 mb-6">
              Call G &amp; M Plumbing today to schedule your water heater installation or repair.
            </p>
            <a
              href="tel:5129900505"
              className="inline-block bg-white font-bold text-[#1d4ed8] px-8 py-3 rounded text-lg hover:bg-blue-50 transition-colors"
            >
              Call 512-990-0505
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
