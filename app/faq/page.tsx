'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/language'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    qEn: 'What time should I arrive?',
    qPt: 'A que horas devo chegar?',
    aEn: 'We kindly ask guests to arrive by 09:30 so everyone can be seated comfortably before the ceremony begins at 10:00.',
    aPt: 'Pedimos gentilmente aos convidados que cheguem as 09:30 para que todos possam sentar-se confortavelmente antes da cerimonia comecar as 10:00.',
  },
  {
    qEn: 'Where is the church announcement?',
    qPt: 'Onde e o anuncio na igreja?',
    aEn: 'The church announcement will take place on Sunday, 16 August 2026 at 09:00 at Eros Primary School Hall in Windhoek.',
    aPt: 'O anuncio na igreja sera no domingo, 16 de agosto de 2026 as 09:00 no Salao da Escola Primaria de Eros em Windhoek.',
  },
  {
    qEn: 'Where is the wedding venue?',
    qPt: 'Onde e o local do casamento?',
    aEn: 'The wedding ceremony and reception will take place at Windhoek Country Club Resort, located on the Western Bypass in Windhoek, Namibia.',
    aPt: 'A cerimonia e recepcao serao no Windhoek Country Club Resort, localizado no Western Bypass em Windhoek, Namibia.',
  },
  {
    qEn: 'Is the ceremony indoors or outdoors?',
    qPt: 'A cerimonia e interior ou exterior?',
    aEn: 'The ceremony will be held outdoors, and the reception will take place indoors at the venue.',
    aPt: 'A cerimonia sera ao ar livre, e a recepcao sera no interior do local.',
  },
  {
    qEn: 'What is the dress code?',
    qPt: 'Qual e o traje?',
    aEn: 'Our wedding theme is shades of brown, and we invite our guests to dress in formal, classy, and elegant attire in tones such as chocolate and mocha. However, please feel free to wear what you already have — there is absolutely no pressure.',
    aPt: 'O tema do nosso casamento e tons de castanho, e convidamos os nossos convidados a vestir-se de forma formal, elegante e sofisticada em tons como chocolate e mocha. No entanto, sinta-se a vontade para usar o que ja tem — nao ha absolutamente nenhuma pressao.',
  },
  {
    qEn: 'Can I bring a plus-one?',
    qPt: 'Posso trazer um acompanhante?',
    aEn: 'Our wedding is an intimate celebration, so we kindly ask that only guests listed on the invitation attend.',
    aPt: 'O nosso casamento e uma celebracao intima, por isso pedimos gentilmente que apenas os convidados indicados no convite compareçam.',
  },
  {
    qEn: 'What time does the reception begin?',
    qPt: 'A que horas comeca a recepcao?',
    aEn: 'The reception will begin at 18:00 and will continue into the evening with dinner, dancing, and celebration.',
    aPt: 'A recepcao comecara as 18:00 e continuara pela noite com jantar, danca e celebracao.',
  },
  {
    qEn: 'Is there a gift registry?',
    qPt: 'Ha uma lista de presentes?',
    aEn: 'Your presence at our wedding is the greatest gift we could ask for. For those who wish to bless us further, we have included a monetary gift registry on the website.',
    aPt: 'A sua presenca no nosso casamento e o maior presente que podemos pedir. Para aqueles que desejam abencoar-nos ainda mais, incluimos uma lista de presentes monetarios no site.',
  },
  {
    qEn: 'Who do I contact with questions?',
    qPt: 'Com quem devo contactar com perguntas?',
    aEn: 'If you have any questions, please contact Unda or Edgar, who will be happy to assist.',
    aPt: 'Se tiver alguma pergunta, por favor contacte Unda ou Edgar, que terao todo o gosto em ajudar.',
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

export default function FaqPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-6">
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
    </div>
  )
}
