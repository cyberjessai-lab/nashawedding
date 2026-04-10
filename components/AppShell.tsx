'use client'

import { useState, useEffect } from 'react'
import { LanguageProvider } from '@/lib/language'
import PasswordGate from '@/components/PasswordGate'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MusicPlayer from '@/components/MusicPlayer'
import FeedbackWidget from '@/components/FeedbackWidget'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (sessionStorage.getItem('nasha-unlocked') === 'true') {
      setUnlocked(true)
    }
  }, [])

  if (!mounted) return null

  return (
    <LanguageProvider>
      {!unlocked ? (
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      ) : (
        <>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[99999] focus:bg-soft-gold focus:text-chocolate focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold focus:text-sm">
            Skip to content
          </a>
          <Navbar />
          <MusicPlayer />
          <main id="main-content" tabIndex={-1} className="min-h-screen">{children}</main>
          <Footer />
          <FeedbackWidget />
        </>
      )}
    </LanguageProvider>
  )
}
