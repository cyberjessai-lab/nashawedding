'use client'

import Image from 'next/image'
import { LanguageProvider, useLanguage } from '@/lib/language'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Heart, Wine, Music, Smile, MapPin } from 'lucide-react'

const events = [
  {
    time: '2:00 PM',
    titleEn: 'Wedding Ceremony',
    titlePt: 'Cerimonia de Casamento',
    descEn: 'Join us as we exchange our vows and begin our journey as husband and wife. The ceremony will take place in the garden chapel at the Windhoek Country Club Resort.',
    descPt: 'Junte-se a nos enquanto trocamos nossos votos e comecamos nossa jornada como marido e esposa. A cerimonia sera no jardim da capela do Windhoek Country Club Resort.',
    icon: Heart,
  },
  {
    time: '3:30 PM',
    titleEn: 'Cocktail Hour',
    titlePt: 'Hora do Coquetel',
    descEn: 'Enjoy canapes and refreshments on the terrace while we capture family photographs. Live music will set the mood as guests mingle.',
    descPt: 'Aproveite canapes e bebidas no terraco enquanto capturamos fotografias de familia. Musica ao vivo criara o ambiente enquanto os convidados se misturam.',
    icon: Wine,
  },
  {
    time: '5:00 PM',
    titleEn: 'Reception & Dinner',
    titlePt: 'Recepcao e Jantar',
    descEn: 'The main celebration begins! Enjoy a three-course dinner, heartfelt speeches, the first dance, and an evening of celebration with family and friends.',
    descPt: 'A grande celebracao comeca! Aproveite um jantar de tres pratos, discursos emocionantes, a primeira danca e uma noite de celebracao com familia e amigos.',
    icon: Music,
  },
  {
    time: '8:00 PM',
    titleEn: 'Dancing & Celebration',
    titlePt: 'Danca e Celebracao',
    descEn: 'Hit the dance floor! The DJ takes over for an unforgettable night of music, laughter, and celebration. Dancing until late!',
    descPt: 'Va para a pista de danca! O DJ assume para uma noite inesquecivel de musica, risos e celebracao. Dancando ate tarde!',
    icon: Smile,
  },
]

function EventsContent() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-32 pb-24 px-6">
        <div className="text-center mb-20">
          <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
            {t('The Big Day', 'O Grande Dia')}
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6">
            {t('Wedding Events', 'Eventos do Casamento')}
          </h1>
          <div className="section-divider" />
          <p className="text-caramel">Saturday, 22 August 2026</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {events.map((event) => {
            const Icon = event.icon
            return (
              <div key={event.time} className="card-elegant flex flex-col sm:flex-row items-start gap-6">
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

        {/* Venue card */}
        <div className="max-w-xl mx-auto mt-16">
          <div className="card-elegant text-center overflow-hidden">
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
            <a
              href="https://maps.google.com/?q=Windhoek+Country+Club+Resort"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold inline-block"
            >
              {t('Get Directions', 'Obter Direcoes')}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function EventsPage() {
  return (
    <LanguageProvider>
      <EventsContent />
    </LanguageProvider>
  )
}
