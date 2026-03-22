'use client'

import { useState, FormEvent } from 'react'

export default function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const pwd = input.toLowerCase().trim()
    if (pwd === 'amor eterno' || pwd === 'amoreterno') {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('nasha-unlocked', 'true')
      }
      onUnlock()
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
            You are invited
          </p>
          <h1 className="font-display text-5xl font-light text-chocolate italic">
            Celson &amp; Nasha
          </h1>
          <div className="section-divider" />
          <p className="text-caramel text-sm">22 August 2026</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setError(false)
            }}
            className="w-full bg-white border border-beige rounded-full px-6 py-3 text-center text-chocolate text-sm focus:border-soft-gold focus:outline-none transition-colors"
          />
          {error && (
            <p className="text-red-400 text-xs">
              Incorrect password. Please check your invitation.
            </p>
          )}
          <button type="submit" className="btn-gold w-full">
            Enter
          </button>
        </form>

        <p className="text-caramel/50 text-xs mt-8">
          The password is on your invitation card.
        </p>
      </div>
    </div>
  )
}
