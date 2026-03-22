'use client'

import { useLanguage } from '@/lib/language'
import Link from 'next/link'
import { Heart } from 'lucide-react'

const timelineEvents = [
  {
    year: '2019',
    titleEn: 'A Spark in the Crowd',
    titlePt: 'Uma Faísca na Multidao',
    descEn: "In a room full of people, their eyes found each other. Celson and Nasha crossed paths at a mutual friend's gathering in Windhoek — and from the very first laugh, the very first glance, something shifted. The kind of shift you only recognise looking back. It wasn't just a meeting. It was a beginning.",
    descPt: 'Numa sala cheia de pessoas, os seus olhos encontraram-se. Celson e Nasha cruzaram-se pela primeira vez numa reuniao de amigos em Windhoek — e desde o primeiro riso, o primeiro olhar, algo mudou. O tipo de mudanca que so se reconhece olhando para tras. Nao foi apenas um encontro. Foi um começo.',
  },
  {
    year: '2020',
    titleEn: 'The Night Everything Changed',
    titlePt: 'A Noite em Que Tudo Mudou',
    descEn: "A candlelit dinner at Joe's Beerhouse. What was supposed to be a casual evening turned into hours of conversation — deep, effortless, real. The restaurant emptied around them, but neither noticed. By the time they stepped outside into the Windhoek night, both knew: this was the start of something extraordinary.",
    descPt: "Um jantar a luz de velas no Joe's Beerhouse. O que deveria ser uma noite casual transformou-se em horas de conversa — profunda, facil, real. O restaurante esvaziou ao redor deles, mas nenhum dos dois percebeu. Quando sairam para a noite de Windhoek, ambos sabiam: este era o inicio de algo extraordinario.",
  },
  {
    year: '2021',
    titleEn: 'Building a Future',
    titlePt: 'Construindo um Futuro',
    descEn: 'After months of falling deeper, Celson asked Nasha to be his girlfriend during a golden sunset drive through the Khomas Hochland. The mountains glowed amber. She said yes before he finished the sentence. From that moment, they stopped dreaming alone — and started dreaming together.',
    descPt: 'Apos meses de se apaixonarem cada vez mais, Celson pediu Nasha para ser sua namorada durante um passeio ao por do sol pelo Khomas Hochland. As montanhas brilhavam em ambar. Ela disse sim antes dele terminar a frase. A partir daquele momento, pararam de sonhar sozinhos — e comecaram a sonhar juntos.',
    quoteEn: '"Dear Mr. My boyfriend, please find the attached file." — she sent him a house for sale. He replied: "Dear future wife, I must admit that you never cease to amaze me, the quality and details of your piece of work are exquisite. P.S. LFG!"',
    quotePt: '"Caro Sr. Meu namorado, por favor encontre o ficheiro anexo." — ela enviou-lhe uma casa a venda. Ele respondeu: "Cara futura esposa, devo admitir que nunca deixas de me surpreender, a qualidade e os detalhes do teu trabalho sao requintados. P.S. LFG!"',
  },
  {
    year: '2023',
    titleEn: 'Home Is a Person',
    titlePt: 'O Lar E Uma Pessoa',
    descEn: "They found it — not just a house, but a home. In Windhoek, between late-night movies and Sunday morning cooking, between arguments about whose turn it was to do the dishes and quiet evenings on the couch — they discovered that home isn't four walls. Home is a person. And they had found theirs.",
    descPt: 'Encontraram — nao apenas uma casa, mas um lar. Em Windhoek, entre filmes a noite e cozinhar no domingo de manha, entre discussoes sobre de quem era a vez de lavar a louca e noites tranquilas no sofa — descobriram que o lar nao sao quatro paredes. O lar e uma pessoa. E encontraram o deles.',
  },
  {
    year: '2025',
    titleEn: 'The Question That Changed Everything',
    titlePt: 'A Pergunta Que Mudou Tudo',
    descEn: "Sossusvlei at sunrise. The ancient red dunes glowed like fire against the pale sky. Celson's heart raced as he reached for the ring. When he dropped to one knee on the warm sand, time stopped. Through tears that caught the desert light, Nasha whispered the only word that mattered: Yes.",
    descPt: 'Sossusvlei ao nascer do sol. As antigas dunas vermelhas brilhavam como fogo contra o ceu palido. O coracao de Celson acelerou quando pegou o anel. Quando se ajoelhou na areia quente, o tempo parou. Atraves de lagrimas que capturaram a luz do deserto, Nasha sussurrou a unica palavra que importava: Sim.',
  },
  {
    year: '2026',
    titleEn: 'Forever Starts Here',
    titlePt: 'A Eternidade Comeca Aqui',
    descEn: "And now, the greatest chapter begins. On 22 August 2026, surrounded by the people they love most in this world, Celson and Nasha will stand before God and say the words they've whispered to each other a thousand times: I choose you. Today. Tomorrow. Always.",
    descPt: 'E agora, o maior capitulo comeca. Em 22 de agosto de 2026, rodeados pelas pessoas que mais amam neste mundo, Celson e Nasha estarao diante de Deus e dirao as palavras que sussurraram um ao outro mil vezes: Eu escolho-te. Hoje. Amanha. Sempre.',
  },
]

export default function StoryPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      {/* Header */}
      <div className="text-center px-6 mb-20">
        <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4 animate-fade-in">
          {t('How It All Began', 'Como Tudo Comecou')}
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-chocolate italic font-light mb-6 animate-fade-in-up">
          {t('Our Story', 'Nossa Historia')}
        </h1>
        <div className="section-divider" />
        <p className="text-caramel max-w-xl mx-auto text-lg leading-relaxed font-light animate-fade-in-up delay-200">
          {t(
            'Every great love story has a beginning. Ours started with a glance, grew through laughter, and became everything.',
            'Toda grande historia de amor tem um inicio. A nossa comecou com um olhar, cresceu com risos, e tornou-se tudo.'
          )}
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto px-6 space-y-16 md:space-y-24">
        {timelineEvents.map((event, i) => (
          <div
            key={event.year}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
          >
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-soft-gold/10 border-2 border-soft-gold/30 flex items-center justify-center shadow-lg">
                <span className="font-display text-2xl text-chocolate">{event.year}</span>
              </div>
            </div>
            <div className={`flex-1 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} text-center ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
              <h3 className="font-display text-3xl text-chocolate mb-4">
                {t(event.titleEn, event.titlePt)}
              </h3>
              <p className="text-caramel leading-relaxed text-base">
                {t(event.descEn, event.descPt)}
              </p>
              {'quoteEn' in event && (event as any).quoteEn && (
                <blockquote className="mt-6 p-4 bg-soft-gold/5 rounded-xl border-l-2 border-soft-gold/40 italic text-caramel/70 text-sm leading-relaxed text-left">
                  {t((event as any).quoteEn, (event as any).quotePt)}
                </blockquote>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Divider quote */}
      <div className="max-w-2xl mx-auto text-center px-6 mt-24 mb-20">
        <Heart className="w-6 h-6 text-soft-gold/40 mx-auto mb-6" />
        <p className="font-display text-2xl text-chocolate/60 italic leading-relaxed">
          {t(
            'Two hearts, one story. And the best chapters are still unwritten.',
            'Dois coracoes, uma historia. E os melhores capitulos ainda estao por escrever.'
          )}
        </p>
      </div>

      {/* Families */}
      <div className="max-w-4xl mx-auto px-6">
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

      {/* CTA */}
      <div className="text-center mt-16 px-6">
        <Link href="/rsvp" className="btn-gold text-base px-10 py-4">
          {t('Be Part of Our Story — RSVP', 'Faca Parte da Nossa Historia — RSVP')}
        </Link>
      </div>
    </div>
  )
}
