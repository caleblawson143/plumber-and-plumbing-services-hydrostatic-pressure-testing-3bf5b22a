import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Yard Line & Gas Line Repair in Pflugerville & Austin, TX',
  description:
    'G & M Plumbing repairs and installs yard lines and gas lines throughout Pflugerville and Austin, TX. Licensed, safe, code-compliant. Call 512-990-0505 to schedule.',
  alternates: { canonical: 'https://gandmplumbingtx.com/yard-and-gas-lines' },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Yard Line & Gas Line Repair and Installation',
  provider: {
    '@type': 'PlumbingService',
    name: 'G & M Plumbing, Inc.',
    telephone: '+15129900505',
    address: { '@type': 'PostalAddress', addressLocality: 'Pflugerville', addressRegion: 'TX' },
  },
  areaServed: ['Pflugerville, TX', 'Austin, TX'],
  description:
    'Professional yard line and gas line repair and installation in Pflugerville and Austin, TX.',
}

const services = [
  {
    title: 'Yard Line Repair',
    description:
      'Broken or leaking water lines between the meter and your home can waste water and drive up your bill. We locate and repair yard line issues quickly across the Pflugerville and Austin area.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3l-9 9 9 9 9-9-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Gas Line Installation',
    description:
      'Planning to add a gas appliance, outdoor grill, or fire pit? We install gas lines safely and to code for homeowners throughout the growing Pflugerville and Austin communities.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    title: 'Gas Line Repair',
    description:
      'Gas leaks are serious and require immediate attention. If you suspect a gas line problem at your Pflugerville or Austin property, call us right away. Our licensed plumbers respond fast.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Yard Line Replacement',
    description:
      'Old or corroded yard lines can fail unexpectedly. We replace aging water supply lines with modern materials that are built to last for decades in Central Texas soil conditions.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
]

const gasWarningSigns = [
  'Smell of sulfur or rotten eggs near gas appliances',
  'Hissing or whistling sounds near gas lines',
  'Dead or dying vegetation in a line pattern across your yard',
  'Higher than usual gas bills with no obvious cause',
  'Visible damage to exterior gas lines or connections',
]

export default function YardAndGasLinesPage() {
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
          aria-labelledby="yg-hero-heading"
          style={{ backgroundColor: '#0f172a' }}
          className="text-white py-16 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-xs text-[#94a3b8] mb-4">
              <ol className="flex items-center gap-1.5">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Yard &amp; Gas Lines</li>
              </ol>
            </nav>
            <h1
              id="yg-hero-heading"
              className="text-3xl md:text-4xl font-extrabold text-white text-balance mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Yard Line &amp; Gas Line Repair in Pflugerville &amp; Austin, TX
            </h1>
            <p className="text-[#cbd5e1] text-lg leading-relaxed max-w-2xl">
              G &amp; M Plumbing repairs and installs yard lines and gas lines for homeowners throughout
              the Pflugerville and Austin, TX area. Licensed, safe, and code-compliant — call us to
              schedule your job today.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="tel:5129900505"
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold text-white transition-colors text-base"
                style={{ backgroundColor: '#3b82f6' }}
              >
                Call 512-990-0505
              </a>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section
          aria-labelledby="yg-services-heading"
          className="py-14 px-4"
          style={{ backgroundColor: '#f8fafc' }}
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="yg-services-heading"
              className="text-2xl md:text-3xl font-extrabold text-[#0f172a] text-center mb-10 text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Yard &amp; Gas Line Services in the Pflugerville &amp; Austin Area
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((svc) => (
                <div
                  key={svc.title}
                  className="bg-white border border-[#e2e8f0] rounded-xl p-6 flex gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-[#3b82f6]"
                    style={{ backgroundColor: '#eff6ff' }}
                    aria-hidden="true"
                  >
                    {svc.icon}
                  </div>
                  <div>
                    <h3
                      className="text-[#0f172a] font-bold text-base mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{svc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gas safety */}
        <section
          aria-labelledby="gas-safety-heading"
          className="py-14 px-4 bg-white"
        >
          <div className="max-w-4xl mx-auto">
            <div
              className="border-l-4 rounded-xl p-6 md:p-8"
              style={{ borderColor: '#ef4444', backgroundColor: '#fef2f2' }}
            >
              <h2
                id="gas-safety-heading"
                className="text-xl md:text-2xl font-extrabold mb-3"
                style={{ color: '#991b1b', fontFamily: 'var(--font-heading)' }}
              >
                Gas Line Safety: Warning Signs to Watch For
              </h2>
              <p className="text-[#7f1d1d] text-sm leading-relaxed mb-5">
                A gas leak is a serious emergency. If you suspect a gas leak in your Pflugerville or Austin
                home, leave the building immediately and call your gas company, then contact G &amp; M Plumbing.
              </p>
              <ul className="flex flex-col gap-3 mb-6">
                {gasWarningSigns.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#7f1d1d]">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-red-200"
                      aria-hidden="true"
                    >
                      <svg width="10" height="10" fill="#dc2626" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                    </span>
                    {sign}
                  </li>
                ))}
              </ul>
              <a
                href="tel:5129900505"
                className="inline-block font-bold text-white px-6 py-3 rounded text-sm transition-colors"
                style={{ backgroundColor: '#dc2626' }}
              >
                Emergency: Call 512-990-0505
              </a>
            </div>

            <div className="mt-10">
              <h2
                className="text-xl md:text-2xl font-extrabold text-[#0f172a] mb-4 text-balance"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Why Choose G &amp; M Plumbing for Yard &amp; Gas Line Work?
              </h2>
              <p className="text-[#64748b] text-sm leading-relaxed mb-4">
                Gas and yard line work requires a licensed, experienced plumber — not a handyman. G &amp; M Plumbing
                is fully licensed and insured in Texas, and our plumbers understand the specific needs of the
                growing Pflugerville and Austin communities.
              </p>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                We serve homeowners across Pflugerville, Austin, Round Rock, Cedar Park, Leander, and Georgetown.
                Whether you need a yard line repaired or a gas line installed for a new appliance, we are ready
                to schedule your job.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:5129900505"
                  className="inline-block font-bold text-white px-6 py-3 rounded text-sm transition-colors"
                  style={{ backgroundColor: '#3b82f6' }}
                >
                  Call 512-990-0505 Today
                </a>
                <Link
                  href="/"
                  className="inline-block font-semibold text-[#3b82f6] px-6 py-3 rounded text-sm border border-[#3b82f6] hover:bg-[#eff6ff] transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
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
              Schedule Yard Line or Gas Line Service in Pflugerville or Austin
            </h2>
            <p className="text-blue-100 mb-6">
              G &amp; M Plumbing is ready to handle your yard and gas line needs throughout the Central TX area.
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
