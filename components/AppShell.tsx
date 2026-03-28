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
          <Navbar />
          <MusicPlayer />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FeedbackWidget />
        </>
      )}
    </LanguageProvider>
  )
}
