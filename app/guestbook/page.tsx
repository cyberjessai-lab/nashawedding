'use client'

import { useState, FormEvent } from 'react'
import { useLanguage } from '@/lib/language'

const sampleMessages = [
  {
    name: 'Maria & Paulo',
    date: 'March 2026',
    message: 'Wishing you both a lifetime of love and happiness! We are so excited to celebrate with you.',
  },
  {
    name: 'Uncle Thomas',
    date: 'March 2026',
    message: 'Celson, you found a wonderful partner. Nasha, welcome to the family! Blessings upon your union.',
  },
  {
    name: 'Amanda Shikongo',
    date: 'February 2026',
    message: 'Two beautiful souls coming together. This wedding is going to be magical! Love you both.',
  },
]

export default function GuestbookPage() {
  const { t } = useLanguage()
  const [messages, setMessages] = useState(sampleMessages)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)

    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      })

      if (!res.ok) throw new Error('Submit failed')

      const now = new Date()
      const dateStr = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      setMessages([{ name, date: dateStr, message }, ...messages])
      setName('')
      setMessage('')
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    } catch {
      // Silently fail — message still added locally
      setMessages([{ name, date: 'March 2026', message }, ...messages])
      setName('')
      setMessage('')
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-6">
      <div className="text-center mb-16">
        <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
          {t('Leave Your Wishes', 'Deixe Seus Desejos')}
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6">
          {t('Guestbook', 'Livro de Convidados')}
        </h1>
        <div className="section-divider" />
        <p className="text-caramel max-w-md mx-auto">
          {t(
            'Share your love, advice, and well-wishes for the happy couple.',
            'Compartilhe seu amor, conselhos e bons desejos para o casal feliz.'
          )}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Form */}
        <form onSubmit={handleSubmit} className="card-elegant mb-12 space-y-4">
          <div>
            <label className="block text-chocolate text-sm mb-2">
              {t('Your Name', 'Seu Nome')} *
            </label>
            <input
              type="text"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-beige rounded-lg px-4 py-3 text-chocolate text-sm focus:border-soft-gold focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-chocolate text-sm mb-2">
              {t('Your Message', 'Sua Mensagem')} *
            </label>
            <textarea
              rows={4}
              required
              maxLength={1000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white border border-beige rounded-lg px-4 py-3 text-chocolate text-sm focus:border-soft-gold focus:outline-none transition-colors resize-none"
            />
          </div>
          <button type="submit" disabled={sending} className="btn-gold w-full">
            {sending ? t('Sending...', 'Enviando...') : t('Leave a Message', 'Deixar Mensagem')}
          </button>
          {submitted && (
            <p className="text-soft-gold text-xs text-center">
              {t(
                'Your message has been added! Thank you for your kind words.',
                'Sua mensagem foi adicionada! Obrigado pelas suas palavras gentis.'
              )}
            </p>
          )}
        </form>

        {/* Messages */}
        <div className="space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className="card-elegant">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-lg text-chocolate">{msg.name}</h3>
                <span className="text-caramel/50 text-xs">{msg.date}</span>
              </div>
              <p className="text-caramel text-sm leading-relaxed">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
