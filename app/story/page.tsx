'use client'

import { LanguageProvider, useLanguage } from '@/lib/language'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const timelineEvents = [
  {
    year: '2019',
    titleEn: 'First Meeting',
    titlePt: 'Primeiro Encontro',
    descEn: "Celson and Nasha first crossed paths at a mutual friend's gathering in Windhoek. There was an instant connection — laughter, shared stories, and a feeling that something special had begun.",
    descPt: 'Celson e Nasha se encontraram pela primeira vez em uma reuniao de amigos em Windhoek. Houve uma conexao instantanea — risos, historias compartilhadas e a sensacao de que algo especial havia comecado.',
  },
  {
    year: '2020',
    titleEn: 'First Date',
    titlePt: 'Primeiro Encontro',
    descEn: "A candlelit dinner at Joe's Beerhouse turned into hours of conversation. By the end of the night, both knew this was more than a casual date.",
    descPt: "Um jantar a luz de velas no Joe's Beerhouse se transformou em horas de conversa. No final da noite, ambos sabiam que isso era mais do que um encontro casual.",
  },
  {
    year: '2021',
    titleEn: 'Making It Official',
    titlePt: 'Tornando Oficial',
    descEn: 'After months of getting to know each other, Celson asked Nasha to be his girlfriend during a sunset drive through the Khomas Hochland.',
    descPt: 'Apos meses de conhecer um ao outro, Celson pediu Nasha para ser sua namorada durante um passeio ao por do sol pelo Khomas Hochland.',
    quoteEn: '"Dear Mr. My boyfriend, please find the attached file." — and she sent him a house for sale. He replied: "Dear future wife, I must admit that you never cease to amaze me, the quality and details of your piece of work are exquisite. P.S. LFG!"',
    quotePt: '"Caro Sr. Meu namorado, por favor encontre o ficheiro anexo." — e ela enviou-lhe uma casa a venda. Ele respondeu: "Cara futura esposa, devo admitir que nunca deixas de me surpreender, a qualidade e os detalhes do teu trabalho sao requintados. P.S. LFG!"',
  },
  {
    year: '2023',
    titleEn: 'Moving In Together',
    titlePt: 'Morando Juntos',
    descEn: 'Building a home together in Windhoek. Cooking together, late-night movies, and planning their future side by side.',
    descPt: 'Construindo um lar juntos em Windhoek. Cozinhando juntos, filmes a noite e planejando o futuro lado a lado.',
  },
  {
    year: '2025',
    titleEn: 'The Proposal',
    titlePt: 'O Pedido',
    descEn: 'On a trip to Sossusvlei, with the red dunes glowing at sunrise, Celson got down on one knee. Through happy tears, Nasha said yes.',
    descPt: 'Em uma viagem a Sossusvlei, com as dunas vermelhas brilhando ao nascer do sol, Celson se ajoelhou. Entre lagrimas de felicidade, Nasha disse sim.',
  },
  {
    year: '2026',
    titleEn: 'The Wedding',
    titlePt: 'O Casamento',
    descEn: 'And now, we celebrate! Join us on 22 August 2026 at the Windhoek Country Club Resort as we begin our forever.',
    descPt: 'E agora, celebramos! Junte-se a nos em 22 de agosto de 2026 no Windhoek Country Club Resort enquanto comecamos nossa eternidade.',
  },
]

function StoryContent() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-32 pb-24">
        {/* Header */}
        <div className="text-center px-6 mb-20">
          <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
            {t('How It All Began', 'Como Tudo Comecou')}
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6">
            {t('Our Story', 'Nossa Historia')}
          </h1>
          <div className="section-divider" />
          <p className="text-caramel max-w-xl mx-auto">
            {t(
              'From a chance meeting to a lifetime commitment — this is the story of Celson and Nasha.',
              'De um encontro casual a um compromisso para toda a vida — esta e a historia de Celson e Nasha.'
            )}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto px-6 space-y-12 md:space-y-16">
          {timelineEvents.map((event, i) => (
            <div
              key={event.year}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-soft-gold/10 border-2 border-soft-gold/30 flex items-center justify-center">
                  <span className="font-display text-xl text-chocolate">{event.year}</span>
                </div>
              </div>
              <div className={`flex-1 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} text-center ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <h3 className="font-display text-2xl text-chocolate mb-3">
                  {t(event.titleEn, event.titlePt)}
                </h3>
                <p className="text-caramel leading-relaxed">
                  {t(event.descEn, event.descPt)}
                </p>
                {'quoteEn' in event && (event as any).quoteEn && (
                  <blockquote className="mt-4 pl-4 border-l-2 border-soft-gold/30 italic text-caramel/70 text-sm leading-relaxed">
                    {t((event as any).quoteEn, (event as any).quotePt)}
                  </blockquote>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Families */}
        <div className="max-w-4xl mx-auto px-6 mt-20">
          <h2 className="font-display text-3xl text-chocolate text-center italic font-light mb-12">
            {t('Our Families', 'Nossas Familias')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card-elegant text-center">
              <p className="text-soft-gold uppercase tracking-wider text-xs mb-2">
                {t('The Groom', 'O Noivo')}
              </p>
              <h3 className="font-display text-2xl text-chocolate mb-2">Celson Schiceya</h3>
              <p className="text-caramel text-sm">
                {t('Son of the Schiceya family', 'Filho da familia Schiceya')}
              </p>
            </div>
            <div className="card-elegant text-center">
              <p className="text-soft-gold uppercase tracking-wider text-xs mb-2">
                {t('The Bride', 'A Noiva')}
              </p>
              <h3 className="font-display text-2xl text-chocolate mb-2">Nasha Nangolo</h3>
              <p className="text-caramel text-sm">
                {t('Daughter of the Nangolo family', 'Filha da familia Nangolo')}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function StoryPage() {
  return (
    <LanguageProvider>
      <StoryContent />
    </LanguageProvider>
  )
}
