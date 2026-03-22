'use client'

import { useState, FormEvent } from 'react'
import { useLanguage } from '@/lib/language'

export default function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const { language, setLanguage, t } = useLanguage()

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
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 relative">
      {/* Language toggle — top header */}
      <div className="absolute top-0 left-0 right-0 flex justify-center py-4">
        <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm rounded-full px-1 py-1">
          <button
            onClick={() => setLanguage('en')}
            className={`text-xs px-4 py-1.5 rounded-full transition-colors ${
              language === 'en'
                ? 'bg-soft-gold text-white'
                : 'text-caramel hover:text-soft-gold'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('pt')}
            className={`text-xs px-4 py-1.5 rounded-full transition-colors ${
              language === 'pt'
                ? 'bg-soft-gold text-white'
                : 'text-caramel hover:text-soft-gold'
            }`}
          >
            Português
          </button>
        </div>
      </div>

      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
            {t('Welcome to Celson & Nasha\'s wedding', 'Bem-vindo ao casamento de Celson e Nasha')}
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
            placeholder={t('Enter password', 'Digite a senha')}
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setError(false)
            }}
            className="w-full bg-white border border-beige rounded-full px-6 py-3 text-center text-chocolate text-sm focus:border-soft-gold focus:outline-none transition-colors"
          />
          {error && (
            <p className="text-red-400 text-xs">
              {t(
                'Incorrect password. Please check your invitation.',
                'Senha incorreta. Verifique o seu convite.'
              )}
            </p>
          )}
          <button type="submit" className="btn-gold w-full">
            {t('Enter', 'Entrar')}
          </button>
        </form>

        <p className="text-caramel/50 text-xs mt-8">
          {t(
            'Please enter the password provided in your invitation to continue.',
            'Por favor, insira a senha fornecida no seu convite para continuar.'
          )}
        </p>
      </div>
    </div>
  )
}
