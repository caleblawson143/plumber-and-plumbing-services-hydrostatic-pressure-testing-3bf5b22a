'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Hydrostatic Tests', href: '/hydrostatic-pressure-tests' },
  { label: 'Water Heaters', href: '/water-heaters' },
  { label: 'Yard & Gas Lines', href: '/yard-and-gas-lines' },
  { label: 'Contact Us', href: '/contact-us' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header role="banner">
      {/* Top bar */}
      <div style={{ backgroundColor: '#0f172a' }} className="text-white text-sm py-2">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span className="text-[#94a3b8]">Serving Pflugerville, Austin & surrounding TX areas</span>
          <a
            href="tel:5129900505"
            className="font-bold text-white hover:text-[#93c5fd] transition-colors"
            aria-label="Call G&M Plumbing at 512-990-0505"
          >
            Call: 512-990-0505
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="bg-white border-b border-[#e2e8f0] sticky top-0 z-50 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo / brand */}
          <Link href="/" className="flex items-center gap-2" aria-label="G & M Plumbing home">
            <div
              className="w-9 h-9 rounded flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: '#3b82f6' }}
              aria-hidden="true"
            >
              G&M
            </div>
            <div>
              <span className="font-bold text-[#0f172a] text-base leading-tight block" style={{ fontFamily: 'var(--font-heading)' }}>
                G &amp; M Plumbing
              </span>
              <span className="text-[#64748b] text-xs block">Pflugerville, TX</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-[#1e293b] hover:text-[#3b82f6] hover:bg-[#eff6ff] rounded transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="tel:5129900505"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded text-white text-sm font-semibold transition-colors"
            style={{ backgroundColor: '#3b82f6' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3b82f6')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
            </svg>
            512-990-0505
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-[#1e293b] hover:bg-[#f1f5f9]"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="md:hidden border-t border-[#e2e8f0] bg-white">
            <ul role="list" className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2.5 text-sm font-medium text-[#1e293b] hover:text-[#3b82f6] hover:bg-[#eff6ff] rounded transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="tel:5129900505"
                  className="block text-center px-4 py-2.5 rounded text-white text-sm font-semibold"
                  style={{ backgroundColor: '#3b82f6' }}
                >
                  Call 512-990-0505
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
