'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/language'
import Lightbox from '@/components/Lightbox'

const photos = [
  { src: '/images/hero-couple.jpg', captionEn: 'Engagement Session', captionPt: 'Sessao de Noivado', aspect: 'aspect-[3/4]' },
  { src: '/images/gallery/couple-2.jpg', captionEn: 'Sunset in Sossusvlei', captionPt: 'Por do Sol em Sossusvlei', aspect: 'aspect-square' },
  { src: '/images/gallery/couple-3.webp', captionEn: 'Together in the City', captionPt: 'Juntos na Cidade', aspect: 'aspect-[4/3]' },
  { src: '/images/gallery/couple-4.jpg', captionEn: 'The Proposal', captionPt: 'O Pedido', aspect: 'aspect-[3/4]' },
  { src: '/images/gallery/couple-5.jpg', captionEn: 'Our Love Story', captionPt: 'Nossa Historia de Amor', aspect: 'aspect-square' },
  { src: '/images/couple-portrait.jpg', captionEn: 'Laughter & Joy', captionPt: 'Risos e Alegria', aspect: 'aspect-[4/3]' },
  { src: '/images/gallery/couple-6.jpg', captionEn: 'Hand in Hand', captionPt: 'De Maos Dadas', aspect: 'aspect-[3/4]' },
  { src: '/images/gallery/couple-7.jpg', captionEn: 'Desert Love', captionPt: 'Amor no Deserto', aspect: 'aspect-square' },
  { src: '/images/gallery/couple-8.jpg', captionEn: 'Forever Begins', captionPt: 'O Inicio do Sempre', aspect: 'aspect-[4/3]' },
  { src: '/images/gallery/couple-9.jpg', captionEn: 'Our Adventure', captionPt: 'Nossa Aventura', aspect: 'aspect-[3/4]' },
  { src: '/images/hero-couple.jpg', captionEn: 'Pure Happiness', captionPt: 'Pura Felicidade', aspect: 'aspect-square' },
]

export default function GalleryPage() {
  const { t } = useLanguage()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const lightboxImages = photos.map((p) => ({
    src: p.src,
    caption: t(p.captionEn, p.captionPt),
  }))

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-6">
      <div className="text-center mb-20">
        <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4 animate-fade-in">
          {t('Memories', 'Memorias')}
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6 animate-fade-in-up">
          {t('Our Gallery', 'Nossa Galeria')}
        </h1>
        <div className="section-divider" />
        <p className="text-caramel text-sm">
          {t('Click any photo to view full size', 'Clique em qualquer foto para ver em tamanho real')}
        </p>
      </div>

      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-4 group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-[1.02] transition-transform duration-300"
            onClick={() => setLightboxIndex(i)}
          >
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

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}
