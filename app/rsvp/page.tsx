'use client'

import { useState, FormEvent } from 'react'
import { useLanguage } from '@/lib/language'
import Link from 'next/link'
import { Send, Check, Heart } from 'lucide-react'

export default function RsvpPage() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [attending, setAttending] = useState('yes')
  const [guests, setGuests] = useState('1')
  const [dietary, setDietary] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)

    const subject = `Wedding RSVP — ${name}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Attending: ${attending === 'yes' ? 'Joyfully Accept' : 'Regretfully Decline'}`,
      attending === 'yes' ? `Number of Guests: ${guests}` : '',
      attending === 'yes' && dietary ? `Dietary Requirements: ${dietary}` : '',
      message ? `Personal Message: ${message}` : '',
    ].filter(Boolean).join('\n')

    // Send via mailto
    const mailtoSubject = encodeURIComponent(subject)
    const mailtoBody = encodeURIComponent(body)
    window.open(
      `mailto:mbinajedanisha@gmail.com?cc=nashasch@gmail.com&subject=${mailtoSubject}&body=${mailtoBody}`,
      '_self'
    )

    setSending(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-6">
      <div className="text-center mb-16">
        <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4 animate-fade-in">
          {t('We Hope You Can Make It', 'Esperamos Que Possa Comparecer')}
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6 animate-fade-in-up">
          RSVP
        </h1>
        <div className="section-divider" />
        <p className="text-caramel max-w-md mx-auto">
          {t(
            'Please let us know if you will be joining us by 1 July 2026.',
            'Por favor, informe-nos se estara conosco ate 1 de julho de 2026.'
          )}
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        {submitted ? (
          <div className="card-elegant text-center animate-scale-in">
            <div className="w-16 h-16 rounded-full bg-soft-gold/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-soft-gold" />
            </div>
            <h2 className="font-display text-3xl text-chocolate mb-4">
              {t('Thank You!', 'Obrigado!')}
            </h2>
            <p className="text-caramel mb-8">
              {t(
                'Your RSVP has been sent. We look forward to celebrating with you!',
                'Seu RSVP foi enviado. Estamos ansiosos para celebrar com voce!'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/events" className="btn-outline-gold">
                {t('View Events', 'Ver Eventos')}
              </Link>
              <Link href="/accommodation" className="btn-outline-gold">
                {t('Find a Hotel', 'Encontrar Hotel')}
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-elegant space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-chocolate text-sm mb-2 font-medium">
                  {t('Full Name', 'Nome Completo')} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-beige rounded-lg px-4 py-3 text-chocolate text-sm focus:border-soft-gold focus:outline-none focus:ring-2 focus:ring-soft-gold/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-chocolate text-sm mb-2 font-medium">
                  {t('Phone Number', 'Numero de Telefone')}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-beige rounded-lg px-4 py-3 text-chocolate text-sm focus:border-soft-gold focus:outline-none focus:ring-2 focus:ring-soft-gold/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-chocolate text-sm mb-2 font-medium">
                {t('Email Address', 'Endereco de Email')} *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-beige rounded-lg px-4 py-3 text-chocolate text-sm focus:border-soft-gold focus:outline-none focus:ring-2 focus:ring-soft-gold/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-chocolate text-sm mb-3 font-medium">
                {t('Will you attend?', 'Voce ira comparecer?')} *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAttending('yes')}
                  className={`py-4 rounded-xl border-2 text-sm font-medium transition-all ${
                    attending === 'yes'
                      ? 'border-soft-gold bg-soft-gold/10 text-chocolate'
                      : 'border-beige text-caramel hover:border-soft-gold/50'
                  }`}
                >
                  <Heart className={`w-5 h-5 mx-auto mb-2 ${attending === 'yes' ? 'text-soft-gold' : 'text-caramel/40'}`} />
                  {t('Joyfully Accept', 'Aceito com Alegria')}
                </button>
                <button
                  type="button"
                  onClick={() => setAttending('no')}
                  className={`py-4 rounded-xl border-2 text-sm font-medium transition-all ${
                    attending === 'no'
                      ? 'border-soft-gold bg-soft-gold/10 text-chocolate'
                      : 'border-beige text-caramel hover:border-soft-gold/50'
                  }`}
                >
                  {t('Regretfully Decline', 'Infelizmente Declino')}
                </button>
              </div>
            </div>

            {attending === 'yes' && (
              <>
                <div>
                  <label className="block text-chocolate text-sm mb-2 font-medium">
                    {t('Number of Guests (including yourself)', 'Numero de Convidados (incluindo voce)')}
                  </label>
                  <div className="flex gap-2">
                    {['1', '2', '3', '4', '5+'].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setGuests(n)}
                        className={`flex-1 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                          guests === n
                            ? 'border-soft-gold bg-soft-gold text-white'
                            : 'border-beige text-caramel hover:border-soft-gold/50'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-chocolate text-sm mb-2 font-medium">
                    {t('Dietary Requirements', 'Requisitos Alimentares')}
                  </label>
                  <textarea
                    rows={2}
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    placeholder={t('E.g., vegetarian, halal, allergies...', 'Ex.: vegetariano, halal, alergias...')}
                    className="w-full bg-white border border-beige rounded-lg px-4 py-3 text-chocolate text-sm focus:border-soft-gold focus:outline-none focus:ring-2 focus:ring-soft-gold/20 transition-all resize-none"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-chocolate text-sm mb-2 font-medium">
                {t('Personal Message (optional)', 'Mensagem Pessoal (opcional)')}
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('A note for the couple...', 'Uma nota para o casal...')}
                className="w-full bg-white border border-beige rounded-lg px-4 py-3 text-chocolate text-sm focus:border-soft-gold focus:outline-none focus:ring-2 focus:ring-soft-gold/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn-gold w-full flex items-center justify-center gap-2 py-4 text-base"
            >
              <Send className="w-4 h-4" />
              {sending ? t('Sending...', 'Enviando...') : t('Send RSVP', 'Enviar RSVP')}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
