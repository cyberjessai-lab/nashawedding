'use client'

import { useLanguage } from '@/lib/language'
import Link from 'next/link'
import { Heart } from 'lucide-react'

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
    quoteEn: '"Dear Mr. My boyfriend, please find the attached file." — she sent him a house for sale. He replied: "Dear future wife, I must admit that you never cease to amaze me, the quality and details of your piece of work are exquisite. P.S. LFG!"',
    quotePt: '"Caro Sr. Meu namorado, por favor encontre o ficheiro anexo." — ela enviou-lhe uma casa a venda. Ele respondeu: "Cara futura esposa, devo admitir que nunca deixas de me surpreender, a qualidade e os detalhes do teu trabalho sao requintados. P.S. LFG!"',
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

export default function StoryPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero header with gradient */}
      <div className="relative bg-chocolate pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-soft-gold/15 via-transparent to-transparent" />
        <div className="relative z-10 text-center">
          <p className="text-soft-gold uppercase tracking-[0.4em] text-xs mb-4 animate-fade-in">
            {t('How It All Began', 'Como Tudo Comecou')}
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-champagne italic font-light mb-6 animate-fade-in-up">
            {t('Our Story', 'Nossa Historia')}
          </h1>
          <div className="w-24 h-px bg-soft-gold mx-auto my-6" />
          <p className="text-champagne/70 max-w-lg mx-auto text-lg leading-relaxed font-light animate-fade-in-up delay-200">
            {t(
              'From a chance meeting to a lifetime commitment — this is the story of Celson and Nasha.',
              'De um encontro casual a um compromisso para toda a vida — esta e a historia de Celson e Nasha.'
            )}
          </p>
        </div>
      </div>

      {/* Timeline with vertical line */}
      <div className="relative max-w-4xl mx-auto px-6 py-20">
        {/* Vertical centre line (desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-soft-gold/30 to-transparent -translate-x-px" />

        <div className="space-y-20 md:space-y-28">
          {timelineEvents.map((event, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={event.year} className="relative">
                {/* Year circle on the line (desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 w-20 h-20 rounded-full bg-cream border-2 border-soft-gold/40 items-center justify-center z-10 shadow-lg">
                  <span className="font-display text-xl text-chocolate">{event.year}</span>
                </div>

                <div className={`md:grid md:grid-cols-2 md:gap-16 items-start ${isLeft ? '' : 'direction-rtl'}`}>
                  {/* Content side */}
                  <div className={`${isLeft ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16 md:text-left'} animate-fade-in-up`} style={{ animationDelay: `${i * 0.15}s` }}>
                    {/* Mobile year badge */}
                    <div className="md:hidden flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-soft-gold/10 border-2 border-soft-gold/30 flex items-center justify-center flex-shrink-0">
                        <span className="font-display text-lg text-chocolate">{event.year}</span>
                      </div>
                      <div className="h-px flex-1 bg-soft-gold/20" />
                    </div>

                    <h3 className="font-display text-3xl md:text-4xl text-chocolate mb-4 leading-tight">
                      {t(event.titleEn, event.titlePt)}
                    </h3>
                    <p className="text-caramel leading-relaxed text-base md:text-lg">
                      {t(event.descEn, event.descPt)}
                    </p>

                    {'quoteEn' in event && (event as any).quoteEn && (
                      <div className="mt-6 p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-soft-gold/20 shadow-sm text-left">
                        <p className="text-xs text-soft-gold uppercase tracking-wider mb-2">
                          {t('From their emails', 'Dos seus emails')} — Aug 2021
                        </p>
                        <p className="italic text-caramel/80 text-sm leading-relaxed">
                          {t((event as any).quoteEn, (event as any).quotePt)}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Empty side for desktop layout balance */}
                  {isLeft ? <div /> : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quote divider */}
      <div className="bg-champagne/30 py-20 px-6 text-center">
        <Heart className="w-6 h-6 text-soft-gold/40 mx-auto mb-6 animate-float" />
        <p className="font-display text-2xl md:text-3xl text-chocolate/70 italic leading-relaxed max-w-xl mx-auto">
          &ldquo;{t(
            'I found the one whom my soul loves.',
            'Encontrei aquele a quem a minha alma ama.'
          )}&rdquo;
        </p>
        <p className="text-soft-gold text-xs uppercase tracking-[0.3em] mt-4">
          Song of Solomon 3:4
        </p>
      </div>

      {/* Families */}
      <div className="bg-cream py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-chocolate text-center italic font-light mb-12 animate-fade-in-up">
            {t('Our Families', 'Nossas Familias')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-elegant text-center animate-fade-in-up delay-100">
              <div className="w-16 h-16 rounded-full bg-soft-gold/10 border border-soft-gold/30 flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl text-soft-gold">C</span>
              </div>
              <p className="text-soft-gold uppercase tracking-wider text-xs mb-2">
                {t('The Groom', 'O Noivo')}
              </p>
              <h3 className="font-display text-2xl text-chocolate mb-2">Celson Schiceya</h3>
              <p className="text-caramel text-sm">
                {t('Son of the Schiceya family', 'Filho da familia Schiceya')}
              </p>
            </div>
            <div className="card-elegant text-center animate-fade-in-up delay-200">
              <div className="w-16 h-16 rounded-full bg-soft-gold/10 border border-soft-gold/30 flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl text-soft-gold">N</span>
              </div>
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
      </div>

      {/* CTA */}
      <div className="bg-chocolate py-16 px-6 text-center">
        <p className="text-champagne/60 text-sm mb-4">
          {t('Be part of our celebration', 'Faca parte da nossa celebracao')}
        </p>
        <Link href="/rsvp" className="btn-gold text-base px-10 py-4 inline-block">
          {t('RSVP Now', 'Confirmar Presenca')}
        </Link>
      </div>
    </div>
  )
}
