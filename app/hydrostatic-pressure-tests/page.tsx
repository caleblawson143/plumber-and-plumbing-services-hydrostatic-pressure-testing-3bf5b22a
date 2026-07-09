import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Hydrostatic Pressure Tests | G & M Plumbing Pflugerville & Austin TX',
  description:
    'G & M Plumbing offers expert hydrostatic pressure testing in Pflugerville and Austin, TX. We locate hidden slab leaks and plumbing failures fast. Call 512-990-0505.',
  alternates: { canonical: '/hydrostatic-pressure-tests' },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hydrostatic Pressure Testing',
  provider: {
    '@type': 'PlumbingService',
    name: 'G & M Plumbing, Inc.',
    telephone: '+15129900505',
    address: { '@type': 'PostalAddress', addressLocality: 'Pflugerville', addressRegion: 'TX' },
  },
  areaServed: ['Pflugerville, TX', 'Austin, TX'],
  description:
    'Professional hydrostatic pressure testing to identify slab leaks and plumbing failures in residential and commercial properties.',
}

const faqItems = [
  {
    q: 'What is a hydrostatic pressure test?',
    a: 'A hydrostatic pressure test is a diagnostic procedure where your plumbing system is filled with water and pressurized to check for leaks in the pipes — especially under the slab.',
  },
  {
    q: 'When do I need a hydrostatic test?',
    a: 'You should schedule a hydrostatic pressure test if you notice unexplained increases in your water bill, damp spots on floors, or if a home inspection requires it before purchase.',
  },
  {
    q: 'How long does the test take?',
    a: 'Most hydrostatic pressure tests take between 2–4 hours depending on the size and complexity of your plumbing system.',
  },
  {
    q: 'Do you serve Austin and surrounding areas?',
    a: 'Yes — G & M Plumbing serves Pflugerville, Austin, Round Rock, Cedar Park, Leander, Georgetown, and more.',
  },
]

export default function HydrostaticPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Nav />
      <main>
        {/* Page hero */}
        <section className="bg-[#0f172a] text-white py-14 px-4" aria-label="Page header">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-xs text-gray-400 mb-4 font-sans">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-200">Hydrostatic Pressure Tests</li>
              </ol>
            </nav>
            <h1
              className="text-3xl md:text-4xl font-extrabold text-white text-balance mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Hydrostatic Pressure Testing in Pflugerville &amp; Austin, TX
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
              G &amp; M Plumbing performs professional hydrostatic pressure tests to locate hidden slab leaks and plumbing failures in the Pflugerville and Austin, TX area. Schedule your job today.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 px-4 bg-white" aria-labelledby="hydro-what-heading">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
            <article className="flex-1 font-sans text-[#334155]">
              <h2
                id="hydro-what-heading"
                className="text-2xl font-extrabold text-[#0f172a] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                What Is a Hydrostatic Pressure Test?
              </h2>
              <p className="leading-relaxed mb-4">
                A hydrostatic pressure test is one of the most reliable methods for diagnosing plumbing leaks — particularly those hidden beneath a concrete slab. Our plumbers pressurize your system with water to identify any drop in pressure that indicates a failure point.
              </p>
              <p className="leading-relaxed mb-4">
                In the growing Pflugerville and Austin communities, slab foundations are common, making hydrostatic pressure testing an essential diagnostic tool for homeowners and buyers alike.
              </p>
              <h2
                className="text-xl font-extrabold text-[#0f172a] mb-3 mt-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Why Choose G &amp; M Plumbing for Hydrostatic Testing?
              </h2>
              <ul className="flex flex-col gap-3 mb-6">
                {[
                  'Licensed and insured plumbers with hands-on experience',
                  'Fast, accurate results — we find the problem so repairs stay targeted',
                  'Serving Pflugerville, Austin, Round Rock, Cedar Park & more',
                  'Transparent pricing — no surprise charges',
                  'Ready to schedule your job at a time that works for you',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 w-5 h-5 bg-[#eff6ff] rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg width="12" height="12" fill="none" stroke="#3b82f6" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:+15129900505"
                className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-6 py-3 rounded transition-colors text-sm"
              >
                Call 512-990-0505 to Schedule
              </a>
            </article>

            {/* Sidebar image */}
            <aside className="md:w-64 flex-shrink-0">
              <img
                src="https://gandmplumbingtx.com/files/bigstock/2017/07/Closeup-of-manometer-pipes-an-93843143.jpg"
                alt="Manometer and pipes used during a hydrostatic pressure test in Pflugerville TX"
                width="256"
                height="320"
                className="rounded-lg object-cover w-full"
                loading="lazy"
                decoding="async"
              />
              <div className="mt-4 bg-[#eff6ff] border border-[#bfdbfe] rounded-lg p-4">
                <p className="font-bold text-[#1d4ed8] text-sm mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Ready to schedule?</p>
                <p className="text-xs text-[#334155] mb-3">Our plumbers are standing by to serve the Pflugerville and Austin area.</p>
                <a href="tel:+15129900505" className="block text-center bg-[#3b82f6] text-white font-bold py-2 px-4 rounded text-sm hover:bg-[#2563eb] transition-colors">
                  512-990-0505
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-[#f8fafc]" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2
              id="faq-heading"
              className="text-2xl font-extrabold text-[#0f172a] mb-8 text-center"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Frequently Asked Questions About Hydrostatic Pressure Tests
            </h2>
            <div className="flex flex-col gap-5">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-[#e2e8f0] rounded-lg p-5">
                  <h3 className="font-semibold text-[#0f172a] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{item.q}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
              Need a Hydrostatic Pressure Test in Pflugerville or Austin?
            </h2>
            <p className="text-blue-100 mb-6">
              Call G &amp; M Plumbing at 512-990-0505 to schedule your hydrostatic pressure test today.
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
