'use client'

import { LanguageProvider, useLanguage } from '@/lib/language'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, ExternalLink } from 'lucide-react'

const hotels = [
  {
    name: 'Windhoek Country Club Resort',
    descEn: 'Our wedding venue. Stay where the celebration happens — special rates for wedding guests.',
    descPt: 'Nosso local de casamento. Fique onde a celebracao acontece — tarifas especiais para convidados.',
    type: 'Hotel',
    maps: 'https://maps.google.com/?q=Windhoek+Country+Club+Resort',
  },
  {
    name: 'Hilton Windhoek',
    descEn: 'Centrally located luxury hotel, approximately 15 minutes from the venue.',
    descPt: 'Hotel de luxo central, a aproximadamente 15 minutos do local.',
    type: 'Hotel',
    maps: 'https://maps.google.com/?q=Hilton+Windhoek',
  },
  {
    name: 'Hotel Heinitzburg',
    descEn: 'A charming castle-hotel on a hilltop with panoramic views of the city.',
    descPt: 'Um encantador hotel-castelo no topo de uma colina com vistas panoramicas da cidade.',
    type: 'Boutique',
    maps: 'https://maps.google.com/?q=Hotel+Heinitzburg+Windhoek',
  },
  {
    name: 'The Weinberg Windhoek',
    descEn: 'Modern boutique hotel in a quiet neighbourhood, 10 minutes from the venue.',
    descPt: 'Hotel boutique moderno em um bairro tranquilo, a 10 minutos do local.',
    type: 'Boutique',
    maps: 'https://maps.google.com/?q=The+Weinberg+Windhoek',
  },
  {
    name: 'Galton House',
    descEn: 'Affordable, stylish guesthouse with a warm Namibian welcome.',
    descPt: 'Pousada acessivel e elegante com uma calorosa recepcao namibiana.',
    type: 'Guesthouse',
    maps: 'https://maps.google.com/?q=Galton+House+Windhoek',
  },
]

function AccommodationContent() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-32 pb-24 px-6">
        <div className="text-center mb-16">
          <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
            {t('Where to Stay', 'Onde Ficar')}
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6">
            {t('Accommodation', 'Alojamento')}
          </h1>
          <div className="section-divider" />
          <p className="text-caramel max-w-xl mx-auto">
            {t(
              'Windhoek offers a variety of accommodation options near the venue. Here are some of our recommendations.',
              'Windhoek oferece uma variedade de opcoes de alojamento perto do local. Aqui estao algumas das nossas recomendacoes.'
            )}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {hotels.map((hotel) => (
            <div key={hotel.name} className="card-elegant flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-soft-gold/10 border border-soft-gold/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-soft-gold" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-xl text-chocolate">{hotel.name}</h3>
                  <span className="text-xs text-soft-gold bg-soft-gold/10 px-2 py-0.5 rounded-full">
                    {hotel.type}
                  </span>
                </div>
                <p className="text-caramel text-sm leading-relaxed mb-3">
                  {t(hotel.descEn, hotel.descPt)}
                </p>
                <a
                  href={hotel.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-gold text-xs hover:text-chocolate transition-colors inline-flex items-center gap-1"
                >
                  {t('View on Google Maps', 'Ver no Google Maps')}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function AccommodationPage() {
  return (
    <LanguageProvider>
      <AccommodationContent />
    </LanguageProvider>
  )
}
