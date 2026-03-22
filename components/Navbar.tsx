'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { href: '/', label: t('Home', 'Inicio') },
    { href: '/story', label: t('Our Story', 'Nossa Historia') },
    { href: '/gallery', label: t('Gallery', 'Galeria') },
    { href: '/events', label: t('Events', 'Eventos') },
    { href: '/dresscode', label: t('Dress Code', 'Traje') },
    { href: '/party', label: t('Wedding Party', 'Cortejo') },
    { href: '/accommodation', label: t('Stay', 'Alojamento') },
    { href: '/rsvp', label: 'RSVP' },
    { href: '/guestbook', label: t('Guestbook', 'Livro') },
    { href: '/registry', label: t('Gifts', 'Presentes') },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-beige/50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl text-chocolate">
          <span className="italic font-light">C</span>
          <span className="text-soft-gold mx-1">&amp;</span>
          <span className="italic font-light">N</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-wider text-caramel hover:text-soft-gold transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          {/* Language toggle */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLanguage('en')}
              className={`text-xs px-2 py-1 rounded-full transition-colors ${
                language === 'en'
                  ? 'bg-soft-gold text-white'
                  : 'text-caramel hover:text-soft-gold'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('pt')}
              className={`text-xs px-2 py-1 rounded-full transition-colors ${
                language === 'pt'
                  ? 'bg-soft-gold text-white'
                  : 'text-caramel hover:text-soft-gold'
              }`}
            >
              PT
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLanguage('en')}
              className={`text-xs px-2 py-1 rounded-full transition-colors ${
                language === 'en' ? 'bg-soft-gold text-white' : 'text-caramel'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('pt')}
              className={`text-xs px-2 py-1 rounded-full transition-colors ${
                language === 'pt' ? 'bg-soft-gold text-white' : 'text-caramel'
              }`}
            >
              PT
            </button>
          </div>
          <button className="text-chocolate" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-3 bg-cream/95">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-wider text-caramel hover:text-soft-gold py-2 border-b border-beige/30"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
