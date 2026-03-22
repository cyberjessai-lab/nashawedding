'use client'

import { useLanguage } from '@/lib/language'
import { MapPin, ExternalLink, Star } from 'lucide-react'
import Link from 'next/link'

const hotels = [
  {
    name: 'Windhoek Country Club Resort',
    descEn: 'Our wedding venue — stay where the celebration happens. Lush gardens, golf course, pool, and special rates for wedding guests.',
    descPt: 'Nosso local de casamento — fique onde a celebracao acontece. Jardins exuberantes, campo de golfe, piscina e tarifas especiais para convidados.',
    type: 'Hotel',
    rating: 4.3,
    reviews: 1247,
    reviewQuote: '"Beautiful venue with excellent service. The gardens are stunning and rooms are very comfortable."',
    price: 'N$1,200 - N$2,800',
    maps: 'https://maps.google.com/?q=Windhoek+Country+Club+Resort+Windhoek',
  },
  {
    name: 'Hilton Windhoek',
    descEn: 'Centrally located luxury hotel with rooftop pool and panoramic city views. Approximately 15 minutes from the venue.',
    descPt: 'Hotel de luxo central com piscina no terraco e vistas panoramicas da cidade. A aproximadamente 15 minutos do local.',
    type: 'Luxury',
    rating: 4.5,
    reviews: 2103,
    reviewQuote: '"World-class service in the heart of Windhoek. The rooftop pool is the best in the city."',
    price: 'N$1,800 - N$3,500',
    maps: 'https://maps.google.com/?q=Hilton+Windhoek',
  },
  {
    name: 'Avani Windhoek Hotel & Casino',
    descEn: 'Modern hotel in the city centre with a casino, restaurant, and conference facilities. A solid option for convenience.',
    descPt: 'Hotel moderno no centro da cidade com casino, restaurante e instalacoes para conferencias. Uma opcao solida pela conveniencia.',
    type: 'Hotel',
    rating: 4.1,
    reviews: 1856,
    reviewQuote: '"Great location, clean rooms, and the breakfast buffet is excellent value."',
    price: 'N$1,100 - N$2,200',
    maps: 'https://maps.google.com/?q=Avani+Windhoek+Hotel+Casino+Windhoek',
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
    name: 'Arebbusch Travel Lodge',
    descEn: 'A peaceful lodge on the outskirts of Windhoek, surrounded by nature. Great for families who want space and tranquillity.',
    descPt: 'Um lodge tranquilo nos arredores de Windhoek, rodeado de natureza. Otimo para familias que querem espaco e tranquilidade.',
    type: 'Lodge',
    rating: 4.2,
    reviews: 987,
    reviewQuote: '"Lovely grounds with a real bush feel. The chalets are spacious and well-maintained."',
    price: 'N$900 - N$1,800',
    maps: 'https://maps.google.com/?q=Arebbusch+Travel+Lodge+Windhoek',
  },
]

const guesthouses = [
  {
    name: "Kate's Nest Guesthouse",
    descEn: 'A cosy, well-run guesthouse with warm hospitality and a homely atmosphere. Excellent breakfast included.',
    descPt: 'Uma pousada acolhedora e bem administrada com hospitalidade calorosa e ambiente caseiro. Excelente cafe da manha incluido.',
    type: 'Guesthouse',
    rating: 4.6,
    reviews: 312,
    reviewQuote: '"Felt like home from the moment we arrived. Kate is an incredible host."',
    price: 'N$700 - N$1,200',
    maps: "https://maps.google.com/?q=Kate's+Nest+Guesthouse+Windhoek",
  },
  {
    name: 'Maison Ambre Guesthouse',
    descEn: 'Charming guesthouse with elegant rooms and a beautiful courtyard garden. Centrally located in Klein Windhoek.',
    descPt: 'Pousada encantadora com quartos elegantes e um belo jardim no patio. Localizada centralmente em Klein Windhoek.',
    type: 'Guesthouse',
    rating: 4.5,
    reviews: 487,
    reviewQuote: '"Beautifully decorated, quiet location, and the hosts go above and beyond."',
    price: 'N$800 - N$1,400',
    maps: 'https://maps.google.com/?q=Maison+Ambre+Guesthouse+Windhoek',
  },
  {
    name: 'Londiningi Guesthouse',
    descEn: 'A modern guesthouse with spacious rooms and lovely views. Known for friendly service and attention to detail.',
    descPt: 'Uma pousada moderna com quartos espacosos e belas vistas. Conhecida pelo servico amigavel e atencao aos detalhes.',
    type: 'Guesthouse',
    rating: 4.4,
    reviews: 278,
    reviewQuote: '"Spotless rooms and the staff remember your name. Would definitely return."',
    price: 'N$750 - N$1,300',
    maps: 'https://maps.google.com/?q=Londiningi+Guesthouse+Windhoek',
  },
  {
    name: 'Olive Grove Guesthouse',
    descEn: 'Peaceful guesthouse set among olive trees with a sparkling pool. A tranquil retreat close to the city centre.',
    descPt: 'Pousada tranquila entre oliveiras com piscina. Um refugio sereno perto do centro da cidade.',
    type: 'Guesthouse',
    rating: 4.5,
    reviews: 534,
    reviewQuote: '"The garden is absolutely gorgeous. Perfect for a quiet evening by the pool."',
    price: 'N$850 - N$1,500',
    maps: 'https://maps.google.com/?q=Olive+Grove+Guesthouse+Windhoek',
  },
  {
    name: 'Villa Moringa Guesthouse',
    descEn: 'Stylish guesthouse with contemporary decor and a relaxed vibe. Known for generous portions at breakfast.',
    descPt: 'Pousada elegante com decoracao contemporanea e ambiente descontraido. Conhecida pelas porcoes generosas no cafe da manha.',
    type: 'Guesthouse',
    rating: 4.3,
    reviews: 345,
    reviewQuote: '"Modern, clean, and the breakfast spread is outstanding. Great value."',
    price: 'N$700 - N$1,200',
    maps: 'https://maps.google.com/?q=Villa+Moringa+Guesthouse+Windhoek',
  },
  {
    name: 'Capbon Guesthouse',
    descEn: 'Affordable and well-maintained guesthouse with a friendly atmosphere. A solid budget-friendly choice.',
    descPt: 'Pousada acessivel e bem conservada com atmosfera amigavel. Uma otima opcao economica.',
    type: 'Guesthouse',
    rating: 4.1,
    reviews: 213,
    reviewQuote: '"Simple but clean and comfortable. The owners are very helpful and welcoming."',
    price: 'N$550 - N$950',
    maps: 'https://maps.google.com/?q=Capbon+Guesthouse+Windhoek',
  },
  {
    name: 'Windhoek Gardens Guesthouse',
    descEn: 'A lovely guesthouse with lush gardens and a swimming pool. Quiet location with easy access to main roads.',
    descPt: 'Uma linda pousada com jardins exuberantes e piscina. Localizacao tranquila com facil acesso as estradas principais.',
    type: 'Guesthouse',
    rating: 4.3,
    reviews: 298,
    reviewQuote: '"Beautiful gardens, comfortable beds, and the pool was a welcome bonus."',
    price: 'N$650 - N$1,100',
    maps: 'https://maps.google.com/?q=Windhoek+Gardens+Guesthouse+Windhoek',
  },
  {
    name: 'Klein Windhoek Guesthouse',
    descEn: 'Nestled in the leafy suburb of Klein Windhoek, this guesthouse offers quiet comfort and personal service.',
    descPt: 'Situado no bairro arborizado de Klein Windhoek, esta pousada oferece conforto tranquilo e servico personalizado.',
    type: 'Guesthouse',
    rating: 4.4,
    reviews: 267,
    reviewQuote: '"Lovely quiet street, walking distance to restaurants. Rooms are immaculate."',
    price: 'N$750 - N$1,300',
    maps: 'https://maps.google.com/?q=Klein+Windhoek+Guesthouse+Windhoek',
  },
  {
    name: 'Ti Melen Boutique Guesthouse',
    descEn: 'An upmarket boutique guesthouse with individually styled rooms and a refined atmosphere. Perfect for a special stay.',
    descPt: 'Uma pousada boutique sofisticada com quartos individualmente decorados e ambiente refinado. Perfeita para uma estadia especial.',
    type: 'Guesthouse',
    rating: 4.7,
    reviews: 389,
    reviewQuote: '"Absolutely exquisite. Each room has its own character. Breakfast is five-star quality."',
    price: 'N$1,000 - N$1,800',
    maps: 'https://maps.google.com/?q=Ti+Melen+Boutique+Guesthouse+Windhoek',
  },
  {
    name: 'Uzuri Guesthouse',
    descEn: 'A warm and welcoming guesthouse with clean rooms and attentive hosts. Great value for money.',
    descPt: 'Uma pousada calorosa e acolhedora com quartos limpos e anfitrioes atenciosos. Otima relacao qualidade-preco.',
    type: 'Guesthouse',
    rating: 4.2,
    reviews: 241,
    reviewQuote: '"Everything you need and nothing you don\'t. Friendly staff and very clean."',
    price: 'N$600 - N$1,000',
    maps: 'https://maps.google.com/?q=Uzuri+Guesthouse+Windhoek',
  },
  {
    name: 'Windhoek West Guesthouse',
    descEn: 'A comfortable guesthouse in the Windhoek West area with easy access to shops and restaurants.',
    descPt: 'Uma pousada confortavel na area de Windhoek West com facil acesso a lojas e restaurantes.',
    type: 'Guesthouse',
    rating: 4.0,
    reviews: 198,
    reviewQuote: '"Good base for exploring Windhoek. Rooms are neat and the location is convenient."',
    price: 'N$500 - N$900',
    maps: 'https://maps.google.com/?q=Windhoek+West+Guesthouse+Windhoek',
  },
  {
    name: "Tilla's Guesthouse",
    descEn: 'A charming family-run guesthouse with a personal touch. Beautiful garden and generous home-cooked breakfasts.',
    descPt: 'Uma encantadora pousada familiar com toque pessoal. Belo jardim e generosos cafes da manha caseiros.',
    type: 'Guesthouse',
    rating: 4.6,
    reviews: 356,
    reviewQuote: '"Tilla makes you feel like family. The best guesthouse breakfast in Windhoek, hands down."',
    price: 'N$700 - N$1,200',
    maps: "https://maps.google.com/?q=Tilla's+Guesthouse+Windhoek",
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

function AccommodationCard({ hotel, index }: { hotel: typeof hotels[0]; index: number }) {
  const { t } = useLanguage()
  return (
    <div className={`card-elegant overflow-hidden animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
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

      <div className="max-w-3xl mx-auto">
        {/* Hotels Section */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl text-chocolate italic font-light">
            {t('Hotels', 'Hoteis')}
          </h2>
          <div className="w-12 h-px bg-soft-gold/40 mx-auto mt-3" />
        </div>
        <div className="space-y-6 mb-16">
          {hotels.map((hotel, i) => (
            <AccommodationCard key={hotel.name} hotel={hotel} index={i} />
          ))}
        </div>

        {/* Section Separator */}
        <div className="flex items-center gap-4 my-12">
          <div className="flex-1 h-px bg-soft-gold/20" />
          <div className="w-2 h-2 rounded-full bg-soft-gold/30" />
          <div className="flex-1 h-px bg-soft-gold/20" />
        </div>

        {/* Guesthouses Section */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl text-chocolate italic font-light">
            {t('Guesthouses', 'Pousadas')}
          </h2>
          <div className="w-12 h-px bg-soft-gold/40 mx-auto mt-3" />
        </div>
        <div className="space-y-6">
          {guesthouses.map((gh, i) => (
            <AccommodationCard key={gh.name} hotel={gh} index={i + hotels.length} />
          ))}
        </div>
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
