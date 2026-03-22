'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
  images: { src: string; caption: string }[]
  initialIndex: number
  onClose: () => void
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex)

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <div className="fixed inset-0 z-[100] bg-chocolate/95 flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 right-6 text-champagne/80 hover:text-white transition-colors z-10">
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-4 md:left-8 text-champagne/60 hover:text-white transition-colors z-10"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <div className="relative w-full h-full max-w-4xl max-h-[80vh] mx-16" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[index].src}
          alt={images[index].caption}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-4 md:right-8 text-champagne/60 hover:text-white transition-colors z-10"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-champagne font-display text-lg italic mb-2">{images[index].caption}</p>
        <p className="text-champagne/40 text-xs">{index + 1} / {images.length}</p>
      </div>
    </div>
  )
}
