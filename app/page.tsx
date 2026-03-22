'use client'

import { useLanguage } from '@/lib/language'
import Countdown from '@/components/Countdown'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Clock, Heart, Users, Gift, Camera } from 'lucide-react'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-chocolate overflow-hidden">
        <Image
          src="/images/hero-couple.jpg"
          alt="Celson and Nasha"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/60 via-chocolate/30 to-chocolate/60" />
        <div className="relative z-10 text-center px-6 pt-20">
          <p className="text-soft-gold uppercase tracking-[0.4em] text-xs mb-6 animate-fade-in">
            {t('Together with their families', 'Juntos com as suas familias')}
          </p>
          <h1 className="font-display text-7xl md:text-9xl text-champagne font-light mb-2 animate-fade-in-up">
            <span className="italic block">Celson</span>
            <span className="text-soft-gold text-5xl md:text-6xl animate-float inline-block my-2">&amp;</span>
            <span className="italic block">Nasha</span>
          </h1>
          <div className="section-divider animate-fade-in delay-300" />
          <p className="text-champagne/80 text-base md:text-lg max-w-lg mx-auto mb-4 animate-fade-in-up delay-200 font-light leading-relaxed">
            {t(
              'Request the honour of your presence at their wedding celebration',
              'Solicitam a honra da sua presenca na celebracao do seu casamento'
            )}
          </p>
          <p className="text-soft-gold text-lg font-display italic mb-2 animate-fade-in delay-300">22 August 2026</p>
          <p className="text-champagne/60 text-sm mb-12 animate-fade-in delay-400">Windhoek Country Club Resort</p>
          <div className="flex justify-center gap-4 flex-wrap animate-fade-in-up delay-500">
            <Link href="/rsvp" className="btn-gold text-base px-10 py-4">
              {t('RSVP Now', 'Confirmar Presenca')}
            </Link>
            <Link href="/story" className="btn-outline-gold text-base px-10 py-4">
              {t('Our Story', 'Nossa Historia')}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-champagne/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-champagne/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="bg-cream py-20 px-6">
        <div className="text-center mb-8">
          <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-2">
            {t('Counting Down To', 'Contagem Regressiva Para')}
          </p>
          <h2 className="font-display text-3xl text-chocolate italic font-light">
            {t('Our Special Day', 'Nosso Dia Especial')}
          </h2>
        </div>
        <Countdown />
      </section>

      {/* Couple Portrait */}
      <section className="bg-champagne/50 py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-soft-gold/30 shadow-xl">
            <Image
              src="/images/couple-portrait.jpg"
              alt="Celson and Nasha together"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
              {t("We're Getting Married", 'Vamos Casar')}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-chocolate italic font-light mb-4">
              Celson &amp; Nasha
            </h2>
            <p className="text-caramel leading-relaxed mb-8">
              {t(
                'From the red dunes of Sossusvlei to the streets of Windhoek, our journey has been one of love, laughter, and faith. We cannot wait to celebrate this next chapter with you.',
                'Das dunas vermelhas de Sossusvlei as ruas de Windhoek, a nossa jornada tem sido de amor, risos e fe. Mal podemos esperar para celebrar este proximo capitulo convosco.'
              )}
            </p>
            <Link href="/story" className="btn-outline-gold">
              {t('Read Our Story', 'Leia Nossa Historia')}
            </Link>
          </div>
        </div>
      </section>

      {/* Bible Verse */}
      <section className="bg-chocolate py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-soft-gold/10 via-transparent to-transparent" />
        <div className="max-w-2xl mx-auto relative z-10">
          <Heart className="w-8 h-8 text-soft-gold/30 mx-auto mb-6" />
          <p className="font-display text-3xl md:text-4xl text-champagne italic leading-relaxed mb-6">
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
          <div className="card-elegant text-center group cursor-pointer">
            <Calendar className="w-8 h-8 text-soft-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-xl text-chocolate mb-2">
              {t('Save the Date', 'Reserve a Data')}
            </h3>
            <p className="text-caramel text-sm">Saturday, 22 August 2026</p>
          </div>
          <Link href="/events" className="card-elegant text-center group">
            <MapPin className="w-8 h-8 text-soft-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-xl text-chocolate mb-2">
              {t('Venue', 'Local')}
            </h3>
            <p className="text-caramel text-sm">Windhoek Country Club Resort</p>
            <p className="text-soft-gold text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {t('View Events →', 'Ver Eventos →')}
            </p>
          </Link>
          <Link href="/events" className="card-elegant text-center group">
            <Clock className="w-8 h-8 text-soft-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-xl text-chocolate mb-2">
              {t('Ceremony', 'Cerimonia')}
            </h3>
            <p className="text-caramel text-sm">2:00 PM</p>
            <p className="text-soft-gold text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {t('Full Schedule →', 'Programa Completo →')}
            </p>
          </Link>
        </div>
      </section>

      {/* Quick Links CTA Section */}
      <section className="bg-champagne/30 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl text-chocolate text-center italic font-light mb-12">
            {t('Everything You Need', 'Tudo Que Precisa')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/party', icon: Users, label: t('Wedding Party', 'Cortejo') },
              { href: '/gallery', icon: Camera, label: t('Gallery', 'Galeria') },
              { href: '/registry', icon: Gift, label: t('Gifts', 'Presentes') },
              { href: '/rsvp', icon: Heart, label: 'RSVP' },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                className="card-elegant text-center py-6 px-4 group"
              >
                <Icon className="w-6 h-6 text-soft-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-chocolate text-sm font-medium">{label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cream py-20 px-6 text-center">
        <h2 className="font-display text-4xl text-chocolate italic font-light mb-4">
          {t('We Can\'t Wait to See You!', 'Mal Podemos Esperar Para Ve-lo!')}
        </h2>
        <p className="text-caramel mb-8 max-w-md mx-auto">
          {t(
            'Please RSVP by 1 July 2026 so we can prepare for your arrival.',
            'Por favor, confirme presenca ate 1 de julho de 2026.'
          )}
        </p>
        <Link href="/rsvp" className="btn-gold text-base px-12 py-4">
          {t('RSVP Now', 'Confirmar Presenca')}
        </Link>
      </section>
    </>
  )
}
