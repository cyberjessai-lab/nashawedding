'use client'

import { useState, useRef, useEffect } from 'react'
import { Music, Pause } from 'lucide-react'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.3
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play().catch(() => {})
    }
    setPlaying(!playing)
  }

  return (
    <>
      <audio ref={audioRef} src="/music/nervous.m4a" loop preload="none" />
      <button
        onClick={toggle}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-soft-gold text-white flex items-center justify-center shadow-lg hover:bg-[#B8943D] transition-all duration-300"
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? <Pause className="w-5 h-5" /> : <Music className="w-5 h-5" />}
      </button>
      {playing && (
        <p className="fixed bottom-20 right-6 z-50 text-caramel/60 text-xs text-right">
          Nervous — John Legend
        </p>
      )}
    </>
  )
}
