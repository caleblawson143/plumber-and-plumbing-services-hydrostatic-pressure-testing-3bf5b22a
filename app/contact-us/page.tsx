import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Contact G & M Plumbing | Pflugerville & Austin, TX Plumber',
  description:
    'Contact G & M Plumbing, Inc. in Pflugerville and Austin, TX. Call 512-990-0505 to schedule a plumbing repair, water heater service, or hydrostatic pressure test.',
  alternates: { canonical: 'https://gandmplumbingtx.com/contact-us' },
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section
          aria-labelledby="contact-heading"
          style={{ backgroundColor: '#0f172a' }}
          className="text-white py-16 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-xs text-[#94a3b8] mb-4">
              <ol className="flex items-center gap-1.5">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Contact Us</li>
              </ol>
            </nav>
            <h1
              id="contact-heading"
              className="text-3xl md:text-4xl font-extrabold text-white text-balance mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contact G &amp; M Plumbing in Pflugerville &amp; Austin, TX
            </h1>
            <p className="text-[#cbd5e1] text-lg leading-relaxed max-w-2xl">
              Ready to schedule a plumbing job? Our licensed plumbers serve the Pflugerville, Austin, and
              surrounding Central Texas communities. Call us today.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Contact info */}
            <div>
              <h2
                className="text-xl font-extrabold text-[#0f172a] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get in Touch
              </h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#3b82f6]"
                    style={{ backgroundColor: '#eff6ff' }}
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a] mb-0.5">Phone</p>
                    <a
                      href="tel:5129900505"
                      className="text-[#3b82f6] font-bold text-lg hover:text-[#1d4ed8] transition-colors"
                    >
                      512-990-0505
                    </a>
                    <p className="text-xs text-[#64748b] mt-0.5">Call to schedule your plumbing job</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#3b82f6]"
                    style={{ backgroundColor: '#eff6ff' }}
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a] mb-0.5">Service Area</p>
                    <p className="text-[#334155] text-sm">Pflugerville, Austin, Round Rock, Cedar Park, Leander, Georgetown, TX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#3b82f6]"
                    style={{ backgroundColor: '#eff6ff' }}
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a] mb-0.5">Hours</p>
                    <p className="text-[#334155] text-sm">Monday – Friday: 8:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                <h3
                  className="text-base font-bold text-[#0f172a] mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Services
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: 'Hydrostatic Pressure Tests', href: '/hydrostatic-pressure-tests' },
                    { label: 'Water Heater Installation & Repair', href: '/water-heaters' },
                    { label: 'Yard & Gas Lines', href: '/yard-and-gas-lines' },
                  ].map((svc) => (
                    <li key={svc.href}>
                      <Link
                        href={svc.href}
                        className="text-sm text-[#3b82f6] hover:text-[#1d4ed8] transition-colors"
                      >
                        &rarr; {svc.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call-to-action card */}
            <div
              className="rounded-xl p-8 flex flex-col justify-between"
              style={{ backgroundColor: '#0f172a' }}
            >
              <div>
                <h2
                  className="text-2xl font-extrabold text-white mb-3 text-balance"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  G &amp; M Plumbing is Standing By to Fix Your Pipes
                </h2>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                  Don&apos;t mess with the other guys — call the pros. Our licensed plumbers are ready to
                  handle any plumbing job in the Pflugerville and Austin, TX area.
                </p>
                <ul className="flex flex-col gap-2 mb-8">
                  {['Licensed &amp; Insured', 'Family-Run Business', 'Fast Response', 'Transparent Pricing'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                      <svg width="14" height="14" fill="none" stroke="#3b82f6" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="tel:5129900505"
                className="block text-center font-bold text-white py-3.5 px-6 rounded text-lg transition-colors"
                style={{ backgroundColor: '#3b82f6' }}
              >
                Call 512-990-0505 Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
