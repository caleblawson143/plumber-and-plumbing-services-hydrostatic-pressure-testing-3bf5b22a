import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white border border-[#e2e8f0] rounded-lg p-6 flex flex-col gap-3 hover:border-[#3b82f6] hover:shadow-md transition-all"
    >
      <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-colors" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-display font-bold text-[#0f172a] text-lg leading-tight">{title}</h3>
      <p className="text-sm text-[#64748b] leading-relaxed">{description}</p>
      <span className="text-[#3b82f6] text-sm font-semibold mt-auto group-hover:underline">Learn more &rarr;</span>
    </Link>
  )
}
