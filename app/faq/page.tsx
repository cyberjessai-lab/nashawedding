'use client'

import { useState } from 'react'
import { LanguageProvider, useLanguage } from '@/lib/language'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    qEn: 'What is the dress code?',
    qPt: 'Qual e o traje?',
    aEn: 'Formal elegance in shades of brown — chocolate, mocha, caramel, beige, cream, or champagne. Please avoid white, ivory, or bright neon colours.',
    aPt: 'Elegancia formal em tons de marrom — chocolate, mocha, caramelo, bege, creme ou champanhe. Por favor, evite branco, marfim ou cores neon brilhantes.',
  },
  {
    qEn: 'When is the RSVP deadline?',
    qPt: 'Qual e o prazo para RSVP?',
    aEn: 'Please RSVP by 1 July 2026 so we can finalise arrangements.',
    aPt: 'Por favor, confirme presenca ate 1 de julho de 2026 para que possamos finalizar os preparativos.',
  },
  {
    qEn: 'Can I bring a plus one?',
    qPt: 'Posso trazer um acompanhante?',
    aEn: 'Due to venue capacity, we can only accommodate guests named on the invitation. Please check your invite for details.',
    aPt: 'Devido a capacidade do local, so podemos acomodar convidados nomeados no convite. Verifique seu convite para detalhes.',
  },
  {
    qEn: 'Are children welcome?',
    qPt: 'Criancas sao bem-vindas?',
    aEn: 'We love your little ones! However, this is an adults-only celebration. We hope you understand.',
    aPt: 'Amamos os pequenos! No entanto, esta e uma celebracao apenas para adultos. Esperamos que entenda.',
  },
  {
    qEn: 'Where should I park?',
    qPt: 'Onde devo estacionar?',
    aEn: 'The Windhoek Country Club Resort has ample free parking for all guests.',
    aPt: 'O Windhoek Country Club Resort tem amplo estacionamento gratuito para todos os convidados.',
  },
  {
    qEn: 'Will there be food for guests with dietary requirements?',
    qPt: 'Havera comida para convidados com restricoes alimentares?',
    aEn: 'Yes! Please let us know your dietary requirements when you RSVP and we will ensure you are catered for.',
    aPt: 'Sim! Por favor, informe suas restricoes alimentares ao confirmar presenca e garantiremos que voce sera atendido.',
  },
  {
    qEn: 'Is there accommodation nearby?',
    qPt: 'Ha alojamento por perto?',
    aEn: 'Yes — check our Accommodation page for hotel and guesthouse recommendations near the venue.',
    aPt: 'Sim — consulte nossa pagina de Alojamento para recomendacoes de hoteis e pousadas perto do local.',
  },
  {
    qEn: 'Can I take photos during the ceremony?',
    qPt: 'Posso tirar fotos durante a cerimonia?',
    aEn: 'We kindly ask for an unplugged ceremony — our photographer will capture every moment. You are welcome to take photos during the reception!',
    aPt: 'Pedimos gentilmente uma cerimonia sem aparelhos — nosso fotografo capturara cada momento. Voce e bem-vindo para tirar fotos durante a recepcao!',
  },
  {
    qEn: 'Who should I contact with questions?',
    qPt: 'Com quem devo entrar em contacto com perguntas?',
    aEn: 'Please reach out to Unda (Maid of Honour) or Edgar for any questions about the wedding.',
    aPt: 'Por favor, entre em contacto com Unda (Madrinha de Honra) ou Edgar para quaisquer perguntas sobre o casamento.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-beige/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-chocolate text-sm font-medium pr-4">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-soft-gold flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-40 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-caramel text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

function FaqContent() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-32 pb-24 px-6">
        <div className="text-center mb-16">
          <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
            {t('Questions?', 'Perguntas?')}
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6">
            {t('FAQ', 'Perguntas Frequentes')}
          </h1>
          <div className="section-divider" />
        </div>

        <div className="max-w-2xl mx-auto card-elegant">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={t(faq.qEn, faq.qPt)} a={t(faq.aEn, faq.aPt)} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function FaqPage() {
  return (
    <LanguageProvider>
      <FaqContent />
    </LanguageProvider>
  )
}
