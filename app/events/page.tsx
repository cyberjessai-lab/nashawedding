'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/language'
import Link from 'next/link'
import { Heart, Wine, Music, Smile, MapPin, Church, Camera, CalendarHeart } from 'lucide-react'

const preEvents = [
  {
    date: 'Saturday, 16 August 2026',
    time: '09:00 AM',
    titleEn: 'Church Announcement',
    titlePt: 'Anuncio na Igreja',
    descEn: 'Join us for the official church announcement of our upcoming wedding. Family and friends are warmly invited to share this special moment with us.',
    descPt: 'Junte-se a nos para o anuncio oficial do nosso casamento. Familiares e amigos sao cordialmente convidados a partilhar este momento especial connosco.',
    venue: 'Eros Primary School Hall, Windhoek',
    icon: Church,
  },
]

const weddingEvents = [
  {
    time: '10:00 AM',
    titleEn: 'Wedding Ceremony',
    titlePt: 'Cerimonia de Casamento',
    descEn: 'Join us as we exchange our vows and begin our journey as husband and wife. The ceremony will take place in the garden chapel at the Windhoek Country Club Resort.',
    descPt: 'Junte-se a nos enquanto trocamos nossos votos e comecamos nossa jornada como marido e esposa. A cerimonia sera no jardim da capela do Windhoek Country Club Resort.',
    icon: Heart,
  },
  {
    time: '12:00 PM',
    titleEn: 'Photos & Portraits',
    titlePt: 'Fotos e Retratos',
    descEn: 'Family and bridal party photographs in the beautiful resort gardens. Guests are welcome to relax and enjoy the grounds.',
    descPt: 'Fotografias da familia e do cortejo nupcial nos belos jardins do resort. Os convidados sao bem-vindos a relaxar e desfrutar do espaco.',
    icon: Camera,
  },
  {
    time: '1:00 PM',
    titleEn: 'Cocktail Hour',
    titlePt: 'Hora do Coquetel',
    descEn: 'Enjoy canapes and refreshments on the terrace while we capture family photographs. Live music will set the mood as guests mingle.',
    descPt: 'Aproveite canapes e bebidas no terraco enquanto capturamos fotografias de familia. Musica ao vivo criara o ambiente enquanto os convidados se misturam.',
    icon: Wine,
  },
  {
    time: '3:00 PM',
    titleEn: 'Reception & Dinner',
    titlePt: 'Recepcao e Jantar',
    descEn: 'The main celebration begins! Enjoy a three-course dinner, heartfelt speeches, the first dance, and an evening of celebration with family and friends.',
    descPt: 'A grande celebracao comeca! Aproveite um jantar de tres pratos, discursos emocionantes, a primeira danca e uma noite de celebracao com familia e amigos.',
    icon: Music,
  },
  {
    time: '6:00 PM',
    titleEn: 'Dancing & Celebration',
    titlePt: 'Danca e Celebracao',
    descEn: 'Hit the dance floor! The DJ takes over for an unforgettable night of music, laughter, and celebration. Dancing until late!',
    descPt: 'Va para a pista de danca! O DJ assume para uma noite inesquecivel de musica, risos e celebracao. Dancando ate tarde!',
    icon: Smile,
  },
]

export default function EventsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-6">
      <div className="text-center mb-20">
        <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4 animate-fade-in">
          {t('The Big Day', 'O Grande Dia')}
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6 animate-fade-in-up">
          {t('Wedding Events', 'Eventos do Casamento')}
        </h1>
        <div className="section-divider" />
      </div>

      {/* Pre-wedding: Church Announcement */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="font-display text-2xl text-chocolate text-center italic font-light mb-8 animate-fade-in">
          {t('Pre-Wedding', 'Pre-Casamento')}
        </h2>
        {preEvents.map((event) => {
          const Icon = event.icon
          return (
            <div key={event.titleEn} className="card-elegant border-2 border-soft-gold/20 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="flex-shrink-0 text-center">
                  <div className="w-16 h-16 rounded-full bg-soft-gold/10 border-2 border-soft-gold/30 flex items-center justify-center mb-2">
                    <Icon className="w-7 h-7 text-soft-gold" />
                  </div>
                </div>
                <div>
                  <p className="text-soft-gold text-xs font-medium uppercase tracking-wider mb-1">
                    {event.date} — {event.time}
                  </p>
                  <h3 className="font-display text-2xl text-chocolate mb-3">
                    {t(event.titleEn, event.titlePt)}
                  </h3>
                  <p className="text-caramel leading-relaxed text-sm mb-3">
                    {t(event.descEn, event.descPt)}
                  </p>
                  <div className="flex items-center gap-2 text-caramel/60">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs">{event.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Wedding Day */}
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-soft-gold/20" />
          <h2 className="font-display text-2xl text-chocolate text-center italic font-light flex items-center gap-3">
            <CalendarHeart className="w-5 h-5 text-soft-gold" />
            {t('Wedding Day', 'Dia do Casamento')}
          </h2>
          <div className="h-px flex-1 bg-soft-gold/20" />
        </div>
        <p className="text-center text-soft-gold text-sm mb-10">Saturday, 22 August 2026</p>

        <div className="space-y-6">
          {weddingEvents.map((event, i) => {
            const Icon = event.icon
            return (
              <div key={event.time} className="card-elegant flex flex-col sm:flex-row items-start gap-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex-shrink-0 text-center">
                  <div className="w-14 h-14 rounded-full bg-soft-gold/10 border border-soft-gold/30 flex items-center justify-center mb-2">
                    <Icon className="w-6 h-6 text-soft-gold" />
                  </div>
                  <p className="text-soft-gold text-xs font-medium">{event.time}</p>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-chocolate mb-3">
                    {t(event.titleEn, event.titlePt)}
                  </h3>
                  <p className="text-caramel leading-relaxed text-sm">
                    {t(event.descEn, event.descPt)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Venue card */}
      <div className="max-w-xl mx-auto mt-16">
        <div className="card-elegant text-center overflow-hidden animate-fade-in-up">
          <div className="relative h-48 -mx-8 -mt-8 mb-6">
            <Image
              src="/images/venue-country-club.jpeg"
              alt="Windhoek Country Club Resort"
              fill
              className="object-cover"
            />
          </div>
          <MapPin className="w-8 h-8 text-soft-gold mx-auto mb-4" />
          <h3 className="font-display text-2xl text-chocolate mb-2">{t('Venue', 'Local')}</h3>
          <p className="text-caramel text-sm mb-1">Windhoek Country Club Resort</p>
          <p className="text-caramel/60 text-xs mb-6">Western Bypass, Windhoek, Namibia</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://maps.google.com/?q=Windhoek+Country+Club+Resort"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              {t('Get Directions', 'Obter Direcoes')}
            </a>
            <Link href="/accommodation" className="btn-gold">
              {t('Find a Hotel', 'Encontrar Hotel')}
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link href="/rsvp" className="btn-gold text-base px-10 py-4">
          {t('RSVP Now', 'Confirmar Presenca')}
        </Link>
      </div>
    </div>
  )
}
