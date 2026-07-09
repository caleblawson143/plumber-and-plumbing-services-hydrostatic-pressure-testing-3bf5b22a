export default function CtaBanner({ heading = "Ready to Schedule Your Plumbing Job?", subtext = "Call the pros at G & M Plumbing — Pflugerville and Austin's trusted plumbers." }: { heading?: string; subtext?: string }) {
  return (
    <section className="bg-[#1d4ed8] text-white py-12 px-4" aria-label="Call to action">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-balance mb-3">{heading}</h2>
        <p className="text-blue-100 mb-6 text-sm md:text-base">{subtext}</p>
        <a
          href="tel:+15129900505"
          className="inline-block bg-white text-[#1d4ed8] font-bold px-8 py-3 rounded text-lg hover:bg-blue-50 transition-colors"
          aria-label="Call G & M Plumbing now"
        >
          Call 512-990-0505 Now
        </a>
      </div>
    </section>
  )
}
