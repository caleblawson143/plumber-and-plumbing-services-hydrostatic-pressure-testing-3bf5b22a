import Link from 'next/link'

const serviceLinks = [
  { label: 'Hydrostatic Pressure Tests', href: '/hydrostatic-pressure-tests' },
  { label: 'Water Heater Installation & Repair', href: '/water-heaters' },
  { label: 'Yard & Gas Lines', href: '/yard-and-gas-lines' },
]

const areaLinks = [
  { label: 'Pflugerville, TX', href: '/pflugerville-tx' },
  { label: 'Austin, TX', href: '/austin-tx' },
  { label: 'Round Rock, TX', href: '/round-rock-tx' },
  { label: 'Cedar Park, TX', href: '/cedar-park-tx' },
  { label: 'Leander, TX', href: '/leander-tx' },
  { label: 'Georgetown, TX', href: '/georgetown-tx' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 font-sans">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <p className="text-xl font-display font-bold text-white mb-2">G &amp; M Plumbing, Inc.</p>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Pflugerville &amp; Austin TX&apos;s premier plumbing and hydrostatic pressure testing provider. Family-run and committed to quality.
          </p>
          <a
            href="tel:+15129900505"
            className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-5 py-2 rounded transition-colors text-sm"
          >
            Call 512-990-0505
          </a>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Services</h3>
          <ul className="flex flex-col gap-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[#93c5fd] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Service Areas</h3>
          <ul className="flex flex-col gap-2">
            {areaLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[#93c5fd] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} G &amp; M Plumbing, Inc. All rights reserved.</p>
          <p>Proudly serving Pflugerville, Austin &amp; the greater Central Texas area.</p>
        </div>
      </div>
    </footer>
  )
}
