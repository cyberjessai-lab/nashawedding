'use client'

import { useState, FormEvent } from 'react'
import { LanguageProvider, useLanguage } from '@/lib/language'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function RsvpContent() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [attending, setAttending] = useState('yes')
  const [guests, setGuests] = useState('1')
  const [dietary, setDietary] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Wedding RSVP — ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nAttending: ${attending === 'yes' ? 'Yes' : 'No'}\nGuests: ${guests}\nDietary: ${dietary || 'None'}`
    )
    window.open(
      `mailto:mbinajedanisha@gmail.com?cc=nashasch@gmail.com&subject=${subject}&body=${body}`,
      '_blank'
    )
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-32 pb-24 px-6">
        <div className="text-center mb-16">
          <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
            {t('We Hope You Can Make It', 'Esperamos Que Possa Comparecer')}
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6">
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
            <div className="card-elegant text-center">
              <h2 className="font-display text-3xl text-chocolate mb-4">
                {t('Thank You!', 'Obrigado!')}
              </h2>
              <p className="text-caramel">
                {t(
                  'Your RSVP has been received. We look forward to celebrating with you!',
                  'Seu RSVP foi recebido. Estamos ansiosos para celebrar com voce!'
                )}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-elegant space-y-6">
              <div>
                <label className="block text-chocolate text-sm mb-2">
                  {t('Full Name', 'Nome Completo')} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-beige rounded-lg px-4 py-3 text-chocolate text-sm focus:border-soft-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-chocolate text-sm mb-2">
                  {t('Email Address', 'Endereco de Email')} *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-beige rounded-lg px-4 py-3 text-chocolate text-sm focus:border-soft-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-chocolate text-sm mb-2">
                  {t('Will you attend?', 'Voce ira comparecer?')} *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={attending === 'yes'}
                      onChange={() => setAttending('yes')}
                      className="accent-soft-gold"
                    />
                    <span className="text-caramel text-sm">
                      {t('Joyfully Accept', 'Aceito com Alegria')}
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={attending === 'no'}
                      onChange={() => setAttending('no')}
                      className="accent-soft-gold"
                    />
                    <span className="text-caramel text-sm">
                      {t('Regretfully Decline', 'Infelizmente Declino')}
                    </span>
                  </label>
                </div>
              </div>

              {attending === 'yes' && (
                <div>
                  <label className="block text-chocolate text-sm mb-2">
                    {t(
                      'Number of Guests (including yourself)',
                      'Numero de Convidados (incluindo voce)'
                    )}
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-white border border-beige rounded-lg px-4 py-3 text-chocolate text-sm focus:border-soft-gold focus:outline-none transition-colors"
                  >
                    {['1', '2', '3', '4', '5+'].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              )}

              {attending === 'yes' && (
                <div>
                  <label className="block text-chocolate text-sm mb-2">
                    {t('Dietary Requirements', 'Requisitos Alimentares')}
                  </label>
                  <textarea
                    rows={3}
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    placeholder={t(
                      'E.g., vegetarian, halal, allergies...',
                      'Ex.: vegetariano, halal, alergias...'
                    )}
                    className="w-full bg-white border border-beige rounded-lg px-4 py-3 text-chocolate text-sm focus:border-soft-gold focus:outline-none transition-colors resize-none"
                  />
                </div>
              )}

              <button type="submit" className="btn-gold w-full">
                {t('Send RSVP', 'Enviar RSVP')}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function RsvpPage() {
  return (
    <LanguageProvider>
      <RsvpContent />
    </LanguageProvider>
  )
}
