import Link from 'next/link'

const services = [
  { label: 'Hydrostatic Pressure Tests', href: '/hydrostatic-pressure-tests' },
  { label: 'Water Heaters', href: '/water-heaters' },
  { label: 'Yard & Gas Lines', href: '/yard-and-gas-lines' },
  { label: 'Contact Us', href: '/contact-us' },
]

const serviceAreas = [
  'Pflugerville, TX',
  'Austin, TX',
  'Round Rock, TX',
  'Cedar Park, TX',
  'Leander, TX',
  'Georgetown, TX',
]

export default function Footer() {
  return (
    <footer role="contentinfo" style={{ backgroundColor: '#0f172a' }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-white text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              G &amp; M Plumbing, Inc.
            </h2>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              Pflugerville and Austin TX&apos;s trusted plumber for repairs, installations, hydrostatic
              pressure testing, water heaters, and yard &amp; gas lines.
            </p>
            <a
              href="tel:5129900505"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#93c5fd] transition-colors"
              aria-label="Call G&M Plumbing"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
              </svg>
              512-990-0505
            </a>
          </div>

          {/* Services */}
          <nav aria-label="Footer services navigation">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul role="list" className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[#94a3b8] text-sm hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul role="list" className="flex flex-col gap-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-[#94a3b8] text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e293b] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748b] text-xs">
            &copy; {new Date().getFullYear()} G &amp; M Plumbing, Inc. All rights reserved. Pflugerville, TX.
          </p>
          <p className="text-[#64748b] text-xs">
            Licensed &amp; Insured Plumber — Serving the Greater Austin Area
          </p>
        </div>
      </div>
    </footer>
  )
}
