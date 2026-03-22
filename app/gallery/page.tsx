'use client'

import Image from 'next/image'
import { LanguageProvider, useLanguage } from '@/lib/language'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const photos = [
  { src: '/images/hero-couple.jpg', captionEn: 'Engagement Session', captionPt: 'Sessao de Noivado', aspect: 'aspect-[3/4]' },
  { src: '/images/gallery/couple-2.jpg', captionEn: 'Sunset in Sossusvlei', captionPt: 'Por do Sol em Sossusvlei', aspect: 'aspect-square' },
  { src: '/images/gallery/couple-3.webp', captionEn: 'Together in the City', captionPt: 'Juntos na Cidade', aspect: 'aspect-[4/3]' },
  { src: '/images/gallery/couple-4.jpg', captionEn: 'The Proposal', captionPt: 'O Pedido', aspect: 'aspect-[3/4]' },
  { src: '/images/couple-portrait.jpg', captionEn: 'Laughter & Joy', captionPt: 'Risos e Alegria', aspect: 'aspect-square' },
  { src: '/images/gallery/couple-2.jpg', captionEn: 'Hand in Hand', captionPt: 'De Maos Dadas', aspect: 'aspect-[4/3]' },
  { src: '/images/gallery/couple-3.webp', captionEn: 'Desert Love', captionPt: 'Amor no Deserto', aspect: 'aspect-square' },
  { src: '/images/gallery/couple-4.jpg', captionEn: 'Our Adventure', captionPt: 'Nossa Aventura', aspect: 'aspect-[3/4]' },
  { src: '/images/hero-couple.jpg', captionEn: 'Pure Happiness', captionPt: 'Pura Felicidade', aspect: 'aspect-[4/3]' },
]

function GalleryContent() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-32 pb-24 px-6">
        <div className="text-center mb-20">
          <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
            {t('Memories', 'Memorias')}
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6">
            {t('Our Gallery', 'Nossa Galeria')}
          </h1>
          <div className="section-divider" />
        </div>

        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="break-inside-avoid mb-4 group relative overflow-hidden rounded-2xl">
              <div className={`${photo.aspect} relative`}>
                <Image
                  src={photo.src}
                  alt={photo.captionEn}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-chocolate/50">
                  <p className="text-champagne font-display text-xl italic">
                    {t(photo.captionEn, photo.captionPt)}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-chocolate/60 to-transparent">
                  <p className="text-champagne/80 text-xs">{t(photo.captionEn, photo.captionPt)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-caramel/50 text-xs mt-12">
          {t('Photos by Moses Media House', 'Fotos por Moses Media House')}
        </p>
      </main>
      <Footer />
    </>
  )
}

export default function GalleryPage() {
  return (
    <LanguageProvider>
      <GalleryContent />
    </LanguageProvider>
  )
}
