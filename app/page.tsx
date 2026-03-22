'use client'

import { useState, useEffect } from 'react'
import { LanguageProvider, useLanguage } from '@/lib/language'
import PasswordGate from '@/components/PasswordGate'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Countdown from '@/components/Countdown'
import Link from 'next/link'
import { Calendar, MapPin, Clock } from 'lucide-react'

function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-chocolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/50 via-chocolate/30 to-chocolate/50" />
        <div className="relative z-10 text-center px-6 pt-20">
          <p className="text-soft-gold uppercase tracking-[0.4em] text-xs mb-6">
            {t('Together with their families', 'Juntos com as suas familias')}
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-champagne font-light mb-4">
            <span className="italic">Celson</span>
            <span className="text-soft-gold mx-3">&amp;</span>
            <span className="italic">Nasha</span>
          </h1>
          <div className="section-divider" />
          <p className="text-champagne/80 text-sm max-w-md mx-auto mb-4">
            {t(
              'Request the honour of your presence at their wedding celebration',
              'Solicitam a honra da sua presenca na celebracao do seu casamento'
            )}
          </p>
          <p className="text-soft-gold text-sm mb-8">22 August 2026</p>
          <p className="text-champagne/60 text-xs mb-12">Windhoek Country Club Resort</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/rsvp" className="btn-gold">RSVP Now</Link>
            <Link href="/story" className="btn-outline-gold">
              {t('Our Story', 'Nossa Historia')}
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="bg-cream py-20 px-6">
        <Countdown />
      </section>

      {/* Couple Portrait */}
      <section className="bg-champagne/50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
            {t("We're Getting Married", 'Vamos Casar')}
          </p>
          <h2 className="font-display text-5xl text-chocolate italic font-light mb-6">
            Celson &amp; Nasha
          </h2>
          <div className="section-divider" />
          <p className="text-caramel leading-relaxed max-w-2xl mx-auto mb-8">
            {t(
              'From the red dunes of Sossusvlei to the streets of Windhoek, our journey has been one of love, laughter, and faith. We cannot wait to celebrate this next chapter with you — our dearest family and friends.',
              'Das dunas vermelhas de Sossusvlei as ruas de Windhoek, a nossa jornada tem sido de amor, risos e fe. Mal podemos esperar para celebrar este proximo capitulo convosco — nossos queridos familiares e amigos.'
            )}
          </p>
          <Link href="/story" className="btn-outline-gold">
            {t('Read Our Story', 'Leia Nossa Historia')}
          </Link>
        </div>
      </section>

      {/* Bible Verse */}
      <section className="bg-chocolate py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-display text-2xl md:text-3xl text-champagne italic leading-relaxed mb-6">
            &ldquo;{t(
              'I found the one whom my soul loves. I held him and would not let him go.',
              'Encontrei aquele a quem a minha alma ama. Segurei-o e nao o deixei ir.'
            )}&rdquo;
          </p>
          <p className="text-soft-gold text-xs uppercase tracking-[0.3em]">
            Song of Solomon 3:4
          </p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-elegant text-center">
            <Calendar className="w-8 h-8 text-soft-gold mx-auto mb-4" />
            <h3 className="font-display text-xl text-chocolate mb-2">
              {t('Save the Date', 'Reserve a Data')}
            </h3>
            <p className="text-caramel text-sm">Saturday, 22 August 2026</p>
          </div>
          <div className="card-elegant text-center">
            <MapPin className="w-8 h-8 text-soft-gold mx-auto mb-4" />
            <h3 className="font-display text-xl text-chocolate mb-2">
              {t('Venue', 'Local')}
            </h3>
            <p className="text-caramel text-sm">Windhoek Country Club Resort</p>
          </div>
          <div className="card-elegant text-center">
            <Clock className="w-8 h-8 text-soft-gold mx-auto mb-4" />
            <h3 className="font-display text-xl text-chocolate mb-2">
              {t('Ceremony', 'Cerimonia')}
            </h3>
            <p className="text-caramel text-sm">2:00 PM</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default function Page() {
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('nasha-unlocked') === 'true') {
      setUnlocked(true)
    }
  }, [])

  return (
    <LanguageProvider>
      {!unlocked ? (
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      ) : (
        <>
          <Navbar />
          <main className="min-h-screen">
            <HomePage />
          </main>
          <Footer />
        </>
      )}
    </LanguageProvider>
  )
}
