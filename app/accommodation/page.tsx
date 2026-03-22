'use client'

import { useLanguage } from '@/lib/language'
import { MapPin, ExternalLink, Star } from 'lucide-react'
import Link from 'next/link'

const hotels = [
  {
    name: 'Windhoek Country Club Resort',
    descEn: 'Our wedding venue — stay where the magic happens. Lush gardens, golf course, and pool. Special rates available for wedding guests.',
    descPt: 'Nosso local de casamento — fique onde a magia acontece. Jardins exuberantes, campo de golfe e piscina. Tarifas especiais para convidados.',
    type: 'Venue Hotel',
    rating: 4.3,
    reviews: 1247,
    reviewQuote: '"Beautiful venue with excellent service. The gardens are stunning and rooms are very comfortable."',
    price: 'N$1,200 - N$2,800',
    maps: 'https://maps.google.com/?q=Windhoek+Country+Club+Resort',
  },
  {
    name: 'Hilton Windhoek',
    descEn: 'Centrally located luxury hotel with rooftop pool and panoramic city views. Approximately 15 minutes from the venue.',
    descPt: 'Hotel de luxo central com piscina no terraço e vistas panoramicas da cidade. A aproximadamente 15 minutos do local.',
    type: 'Luxury',
    rating: 4.5,
    reviews: 2103,
    reviewQuote: '"World-class service in the heart of Windhoek. The rooftop pool is the best in the city."',
    price: 'N$1,800 - N$3,500',
    maps: 'https://maps.google.com/?q=Hilton+Windhoek',
  },
  {
    name: 'Hotel Heinitzburg',
    descEn: 'A charming castle-hotel perched on a hilltop with panoramic views. Intimate, romantic, and full of old-world elegance.',
    descPt: 'Um encantador hotel-castelo no topo de uma colina com vistas panoramicas. Intimo, romantico e cheio de elegancia classica.',
    type: 'Boutique',
    rating: 4.6,
    reviews: 892,
    reviewQuote: '"Like staying in a fairy tale. The sunset views from the terrace are unforgettable."',
    price: 'N$2,200 - N$4,000',
    maps: 'https://maps.google.com/?q=Hotel+Heinitzburg+Windhoek',
  },
  {
    name: 'The Weinberg Windhoek',
    descEn: 'Modern boutique hotel in a quiet neighbourhood with a vibrant restaurant and bar. 10 minutes from the venue.',
    descPt: 'Hotel boutique moderno em um bairro tranquilo com restaurante e bar vibrantes. A 10 minutos do local.',
    type: 'Boutique',
    rating: 4.4,
    reviews: 1456,
    reviewQuote: '"Stylish rooms, fantastic breakfast, and the friendliest staff in Windhoek."',
    price: 'N$1,500 - N$2,500',
    maps: 'https://maps.google.com/?q=The+Weinberg+Windhoek',
  },
  {
    name: 'Galton House',
    descEn: 'Affordable, stylish guesthouse with a warm Namibian welcome. Homely atmosphere with beautiful gardens.',
    descPt: 'Pousada acessivel e elegante com uma calorosa recepcao namibiana. Atmosfera acolhedora com belos jardins.',
    type: 'Guesthouse',
    rating: 4.7,
    reviews: 534,
    reviewQuote: '"Hidden gem! Feels like staying with family. The homemade breakfast is incredible."',
    price: 'N$800 - N$1,400',
    maps: 'https://maps.google.com/?q=Galton+House+Windhoek',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-soft-gold fill-soft-gold' : 'text-beige'}`}
        />
      ))}
      <span className="text-chocolate text-xs font-medium ml-1">{rating}</span>
    </div>
  )
}

export default function AccommodationPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-6">
      <div className="text-center mb-16">
        <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4 animate-fade-in">
          {t('Where to Stay', 'Onde Ficar')}
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6 animate-fade-in-up">
          {t('Accommodation', 'Alojamento')}
        </h1>
        <div className="section-divider" />
        <p className="text-caramel max-w-xl mx-auto">
          {t(
            'Windhoek offers wonderful accommodation near our venue. Here are our top recommendations for your stay.',
            'Windhoek oferece alojamentos maravilhosos perto do local. Aqui estao as nossas principais recomendacoes.'
          )}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {hotels.map((hotel, i) => (
          <div key={hotel.name} className={`card-elegant overflow-hidden animate-fade-in-up`} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-shrink-0 flex items-start">
                <div className="w-14 h-14 rounded-full bg-soft-gold/10 border border-soft-gold/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-soft-gold" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-display text-xl text-chocolate">{hotel.name}</h3>
                  <span className="text-xs text-soft-gold bg-soft-gold/10 px-2 py-0.5 rounded-full">
                    {hotel.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <StarRating rating={hotel.rating} />
                  <span className="text-caramel/50 text-xs">
                    ({hotel.reviews.toLocaleString()} {t('reviews', 'avaliacoes')})
                  </span>
                  <span className="text-chocolate text-xs font-medium bg-champagne/50 px-2 py-0.5 rounded">
                    {hotel.price} / {t('night', 'noite')}
                  </span>
                </div>

                <p className="text-caramel text-sm leading-relaxed mb-3">
                  {t(hotel.descEn, hotel.descPt)}
                </p>

                <blockquote className="text-caramel/60 text-xs italic border-l-2 border-soft-gold/20 pl-3 mb-4">
                  {hotel.reviewQuote}
                </blockquote>

                <a
                  href={hotel.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-gold text-sm hover:text-chocolate transition-colors inline-flex items-center gap-1 font-medium"
                >
                  {t('View on Google Maps', 'Ver no Google Maps')}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-caramel text-sm mb-4">
          {t('Need help with accommodation?', 'Precisa de ajuda com alojamento?')}
        </p>
        <Link href="/rsvp" className="btn-gold">
          {t('RSVP & Let Us Know', 'Confirme & Informe-nos')}
        </Link>
      </div>
    </div>
  )
}
