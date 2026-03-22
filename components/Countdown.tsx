'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/language'

const WEDDING_DATE = new Date('2026-08-22T14:00:00+02:00').getTime()

export default function Countdown() {
  const { t } = useLanguage()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const update = () => {
      const now = Date.now()
      const diff = Math.max(0, WEDDING_DATE - now)
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { value: timeLeft.days, label: t('Days', 'Dias') },
    { value: timeLeft.hours, label: t('Hours', 'Horas') },
    { value: timeLeft.minutes, label: t('Minutes', 'Minutos') },
    { value: timeLeft.seconds, label: t('Seconds', 'Segundos') },
  ]

  return (
    <div className="flex justify-center gap-4 sm:gap-8">
      {units.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-soft-gold/30 flex items-center justify-center bg-white/50 backdrop-blur-sm">
            <span className="font-display text-2xl sm:text-4xl text-chocolate">
              {String(value).padStart(2, '0')}
            </span>
          </div>
          <p className="text-caramel text-xs mt-3 uppercase tracking-wider">{label}</p>
        </div>
      ))}
    </div>
  )
}
