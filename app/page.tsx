import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Trusted Plumber in Pflugerville & Austin, TX | G & M Plumbing',
  description:
    'G & M Plumbing, Inc. provides expert plumbing repair and installation in Pflugerville and Austin, TX. Schedule your service today — call 512-990-0505.',
}

const services = [
  {
    title: 'Hydrostatic Pressure Tests',
    href: '/hydrostatic-pressure-tests',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    description:
      'Detect hidden slab leaks and pipe failures with our professional hydrostatic pressure testing service — fast, accurate, and non-invasive.',
  },
  {
    title: 'Water Heater Installation & Repair',
    href: '/water-heaters',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v4l3 3" />
      </svg>
    ),
    description:
      'Traditional and tankless water heater installations and repairs for homes and businesses throughout the Austin and Pflugerville area.',
  },
  {
    title: 'Yard & Gas Lines',
    href: '/yard-and-gas-lines',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
    description:
      'Yard line repairs, gas line installation and repair services to keep your property safe and your plumbing system running smoothly.',
  },
  {
    title: 'Plumbing Repairs & Remodels',
    href: '/contact-us',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    description:
      'Full-service plumbing repairs and remodel work for kitchens, bathrooms, and whole-home projects across the greater Austin area.',
  },
]

const differentiators = [
  { label: 'Licensed & Insured', desc: 'Fully licensed Texas plumber with comprehensive insurance coverage.' },
  { label: 'Family-Run Business', desc: 'A local family business that puts your best interests first on every job.' },
  { label: 'Pflugerville Specialists', desc: 'Deep knowledge of the Pflugerville and Austin area plumbing systems.' },
  { label: 'Fast Scheduling', desc: 'Call today to schedule your service — we work around your timeline.' },
  { label: 'Transparent Pricing', desc: 'Clear, upfront estimates before any work begins — no surprise invoices.' },
  { label: 'Quality Workmanship', desc: 'Every job done right the first time, backed by professional craftsmanship.' },
  { label: 'Growing Community Trust', desc: 'Proudly serving the fast-growing Pflugerville community since day one.' },
  { label: 'Comprehensive Services', desc: 'From hydrostatic tests to full remodels — one team for all your plumbing needs.' },
]

const serviceAreas = [
  { city: 'Pflugerville, TX', primary: true },
  { city: 'Austin, TX', primary: true },
  { city: 'Round Rock, TX', primary: false },
  { city: 'Cedar Park, TX', primary: false },
  { city: 'Leander, TX', primary: false },
  { city: 'Georgetown, TX', primary: false },
]

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* ===== HERO ===== */}
        <section
          aria-labelledby="hero-heading"
          style={{ backgroundColor: '#0f172a' }}
          className="relative text-white overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 70% 50%, #3b82f6 0%, transparent 60%)',
            }}
          />
          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#93c5fd] text-sm font-semibold uppercase tracking-widest mb-3">
                Pflugerville &amp; Austin, TX
              </p>
              <h1
                id="hero-heading"
                className="text-3xl md:text-5xl font-extrabold text-white leading-tight text-balance mb-5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                A Trusted Resource for Plumbing Solutions in the Pflugerville and Austin, TX Area
              </h1>
              <p className="text-[#cbd5e1] text-lg leading-relaxed mb-8 max-w-xl">
                G &amp; M Plumbing, Inc. delivers reliable plumbing repair and installation services
                for homeowners and businesses across the growing Austin and Pflugerville community.
                Don&apos;t mess with other guys — call the pros.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:5129900505"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold text-white text-base transition-colors"
                  style={{ backgroundColor: '#3b82f6' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3b82f6')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
                  </svg>
                  Call 512-990-0505
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-white text-base border border-white/30 hover:bg-white/10 transition-colors"
                >
                  Schedule a Job
                </Link>
              </div>
            </div>

            {/* Stats card */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {[
                { stat: '512-990-0505', label: 'Call Us Today' },
                { stat: 'Licensed', label: 'Texas Plumber' },
                { stat: '6 Cities', label: 'Service Area' },
                { stat: 'Family', label: 'Owned & Operated' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg p-5 border border-white/10"
                  style={{ backgroundColor: '#1e293b' }}
                >
                  <div
                    className="text-xl font-extrabold mb-1"
                    style={{ color: '#93c5fd', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.stat}
                  </div>
                  <div className="text-[#94a3b8] text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES GRID ===== */}
        <section
          aria-labelledby="services-heading"
          className="py-16 md:py-20"
          style={{ backgroundColor: '#f8fafc' }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                id="services-heading"
                className="text-3xl md:text-4xl font-extrabold mb-3 text-[#0f172a] text-balance"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Reliable Plumbing Repair and Installation Services
              </h2>
              <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
                We offer comprehensive plumbing services in the Pflugerville and Austin, TX areas —
                ready to handle any plumbing job, large or small.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 border border-[#e2e8f0] hover:border-[#3b82f6] hover:shadow-md transition-all flex flex-col"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-[#3b82f6] group-hover:text-white transition-colors"
                    style={{ backgroundColor: '#eff6ff' }}
                    onMouseEnter={(e) => {
                      const parent = e.currentTarget.closest('a')
                      if (parent) e.currentTarget.style.backgroundColor = '#3b82f6'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#eff6ff'
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className="text-[#0f172a] font-bold text-base mb-2 group-hover:text-[#3b82f6] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed flex-1">{service.description}</p>
                  <span className="mt-4 text-[#3b82f6] text-sm font-semibold flex items-center gap-1">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section
          aria-label="Call to action"
          style={{ backgroundColor: '#3b82f6' }}
          className="py-12"
        >
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2
                className="text-white text-2xl md:text-3xl font-extrabold text-balance"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Call 512-990-0505 today to schedule your job
              </h2>
              <p className="text-blue-100 mt-1">
                G &amp; M Plumbing is standing by to fix your pipes — plumbers ready to help you now.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="tel:5129900505"
                className="px-6 py-3 bg-white rounded font-bold text-[#1d4ed8] text-base hover:bg-blue-50 transition-colors"
              >
                Call Now
              </a>
              <Link
                href="/contact-us"
                className="px-6 py-3 rounded font-semibold text-white text-base border border-white/40 hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 8 DIFFERENTIATORS ===== */}
        <section
          aria-labelledby="why-heading"
          className="py-16 md:py-20 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                id="why-heading"
                className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-3 text-balance"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                8 Ways We Distinguish Ourselves from Other Plumbing Companies
              </h2>
              <p className="text-[#64748b] text-lg">
                A family-run business that keeps your best interests in mind.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item, i) => (
                <div
                  key={item.label}
                  className="flex gap-3 items-start p-4 rounded-lg border border-[#e2e8f0]"
                >
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: '#3b82f6' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[#0f172a] text-sm mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.label}
                    </h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICE AREAS ===== */}
        <section
          aria-labelledby="areas-heading"
          style={{ backgroundColor: '#f8fafc' }}
          className="py-16 md:py-20"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2
                id="areas-heading"
                className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-3 text-balance"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Plumbing Services Across the Greater Austin Area
              </h2>
              <p className="text-[#64748b] text-lg max-w-xl mx-auto">
                From Pflugerville to Georgetown, we&apos;re the area&apos;s plumbers ready to serve your
                growing community.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area.city}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium border ${
                    area.primary
                      ? 'text-[#1d4ed8] border-[#3b82f6] bg-[#eff6ff]'
                      : 'text-[#374151] border-[#e2e8f0] bg-white'
                  }`}
                >
                  {area.city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT BOTTOM CTA ===== */}
        <section
          aria-labelledby="contact-cta-heading"
          style={{ backgroundColor: '#0f172a' }}
          className="py-16 text-white text-center"
        >
          <div className="max-w-2xl mx-auto px-4">
            <h2
              id="contact-cta-heading"
              className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contact G &amp; M Plumbing Today for Assistance
            </h2>
            <p className="text-[#94a3b8] text-lg mb-8 leading-relaxed">
              Whether you need a quick repair, a full installation, or a hydrostatic pressure test, our
              Pflugerville and Austin plumbers are ready to schedule your job.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:5129900505"
                className="px-8 py-3.5 rounded font-bold text-white text-base transition-colors"
                style={{ backgroundColor: '#3b82f6' }}
              >
                Call 512-990-0505
              </a>
              <Link
                href="/contact-us"
                className="px-8 py-3.5 rounded font-semibold text-white text-base border border-white/30 hover:bg-white/10 transition-colors"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
