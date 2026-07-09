'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Hydrostatic Tests', href: '/hydrostatic-pressure-tests' },
  { label: 'Water Heaters', href: '/water-heaters' },
  { label: 'Yard & Gas Lines', href: '/yard-and-gas-lines' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-[#0f172a] text-white sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-[#1d4ed8] py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm">
          <span className="font-sans">Serving Pflugerville, Austin &amp; the surrounding TX area</span>
          <a
            href="tel:+15129900505"
            className="font-bold tracking-wide text-white hover:text-yellow-300 transition-colors"
            aria-label="Call G & M Plumbing at 512-990-0505"
          >
            Call: 512-990-0505
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex flex-col leading-tight" aria-label="G & M Plumbing home">
          <span className="text-xl font-display font-bold tracking-tight text-white">G &amp; M Plumbing</span>
          <span className="text-xs text-[#93c5fd] font-sans">Pflugerville &amp; Austin, TX</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+15129900505"
            className="ml-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-bold px-4 py-2 rounded transition-colors"
          >
            512-990-0505
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="md:hidden bg-[#1e293b] border-t border-white/10 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 rounded text-sm font-medium text-gray-300 hover:bg-[#3b82f6] hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+15129900505"
                className="block mt-2 py-2 px-3 rounded text-sm font-bold bg-[#3b82f6] text-white text-center"
              >
                Call 512-990-0505
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
