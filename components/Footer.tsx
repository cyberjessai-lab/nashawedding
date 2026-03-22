'use client'

import { useLanguage } from '@/lib/language'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-chocolate py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="font-display text-3xl text-champagne italic font-light mb-4">
          Celson &amp; Nasha
        </h3>
        <p className="text-champagne/60 text-sm mb-2">22 August 2026</p>
        <p className="text-champagne/60 text-sm mb-8">Windhoek Country Club Resort</p>

        <div className="section-divider" />

        <p className="font-display text-xl text-champagne/80 italic mb-2">
          &ldquo;{t(
            'I found the one whom my soul loves.',
            'Encontrei aquele a quem a minha alma ama.'
          )}&rdquo;
        </p>
        <p className="text-soft-gold text-xs uppercase tracking-[0.3em]">
          Song of Solomon 3:4
        </p>

        <div className="mt-12 text-champagne/30 text-xs">
          {t('Built with love by', 'Feito com amor por')}{' '}
          <a href="https://nova-cx.com" target="_blank" rel="noopener noreferrer" className="text-soft-gold/50 hover:text-soft-gold transition-colors">Nova CX</a>
        </div>
      </div>
    </footer>
  )
}
