import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { notFound } from 'next/navigation'

const areas: Record<string, { city: string; state: string; description: string }> = {
  'pflugerville-tx': {
    city: 'Pflugerville',
    state: 'TX',
    description:
      'G & M Plumbing serves the growing Pflugerville, TX community with expert plumbing repair, installation, hydrostatic pressure testing, water heater service, and yard & gas line work.',
  },
  'austin-tx': {
    city: 'Austin',
    state: 'TX',
    description:
      'G & M Plumbing provides trusted plumbing services throughout Austin, TX — from hydrostatic pressure tests to water heater installation and gas line repair.',
  },
  'round-rock-tx': {
    city: 'Round Rock',
    state: 'TX',
    description:
      'G & M Plumbing serves Round Rock, TX homeowners with reliable plumbing repairs, water heater services, hydrostatic pressure testing, and yard & gas line work.',
  },
  'cedar-park-tx': {
    city: 'Cedar Park',
    state: 'TX',
    description:
      'Residents of Cedar Park, TX trust G & M Plumbing for all plumbing needs — repairs, water heaters, hydrostatic pressure testing, and more.',
  },
  'leander-tx': {
    city: 'Leander',
    state: 'TX',
    description:
      'G & M Plumbing provides licensed plumbing services to Leander, TX — including hydrostatic testing, water heater installation, and gas line repair.',
  },
  'georgetown-tx': {
    city: 'Georgetown',
    state: 'TX',
    description:
      'G & M Plumbing serves Georgetown, TX with professional plumbing repairs, hydrostatic pressure tests, water heater service, and yard & gas lines.',
  },
}

export async function generateMetadata({ params }: { params: { area: string } }): Promise<Metadata> {
  const { area } = params
  const data = areas[area]
  if (!data) return {}
  return {
    title: `Plumber in ${data.city}, ${data.state} | G & M Plumbing`,
    description: `${data.description} Call 512-990-0505 to schedule.`,
    alternates: { canonical: `/${area}` },
  }
}

export function generateStaticParams() {
  return Object.keys(areas).map((area) => ({ area }))
}

const services = [
  { title: 'Hydrostatic Pressure Tests', href: '/hydrostatic-pressure-tests' },
  { title: 'Water Heater Installation & Repair', href: '/water-heaters' },
  { title: 'Yard & Gas Lines', href: '/yard-and-gas-lines' },
]

export default async function AreaPage({ params }: { params: { area: string } }) {
  const { area } = params
  const data = areas[area]
  if (!data) notFound()

  return (
    <>
      <Nav />
      <main id="main-content">
        <section
          aria-labelledby="area-heading"
          style={{ backgroundColor: '#0f172a' }}
          className="text-white py-16 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-xs text-[#94a3b8] mb-4">
              <ol className="flex items-center gap-1.5">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">{data.city}, {data.state}</li>
              </ol>
            </nav>
            <h1
              id="area-heading"
              className="text-3xl md:text-4xl font-extrabold text-white text-balance mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Plumber in {data.city}, {data.state} — G &amp; M Plumbing
            </h1>
            <p className="text-[#cbd5e1] text-lg leading-relaxed max-w-2xl">{data.description}</p>
            <a
              href="tel:5129900505"
              className="inline-block mt-6 px-6 py-3 rounded font-bold text-white text-base transition-colors"
              style={{ backgroundColor: '#3b82f6' }}
            >
              Call 512-990-0505 to Schedule
            </a>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl font-extrabold text-[#0f172a] mb-6 text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Plumbing Services in {data.city}, {data.state}
            </h2>
            <p className="text-[#64748b] text-sm leading-relaxed mb-8">
              G &amp; M Plumbing is a licensed, family-owned plumbing company serving {data.city} and the greater Austin, TX area. Whether you need a hydrostatic pressure test, water heater repair, or yard and gas line work, we are ready to schedule your job.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {services.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-5 hover:border-[#3b82f6] hover:bg-[#eff6ff] transition-all group"
                >
                  <p
                    className="font-semibold text-[#0f172a] text-sm mb-1 group-hover:text-[#1d4ed8] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {svc.title}
                  </p>
                  <span className="text-xs text-[#3b82f6]">Learn more &rarr;</span>
                </Link>
              ))}
            </div>
            <div
              className="rounded-xl p-6 border border-[#bfdbfe]"
              style={{ backgroundColor: '#eff6ff' }}
            >
              <h3
                className="text-[#1d4ed8] font-bold text-lg mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Ready to schedule your plumbing service in {data.city}?
              </h3>
              <p className="text-[#334155] text-sm leading-relaxed mb-4">
                Call G &amp; M Plumbing today. Our licensed plumbers serve {data.city}, Pflugerville, Austin, and surrounding Central Texas communities.
              </p>
              <a
                href="tel:5129900505"
                className="inline-block font-bold text-white px-6 py-2.5 rounded text-sm transition-colors"
                style={{ backgroundColor: '#3b82f6' }}
              >
                Call 512-990-0505
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
