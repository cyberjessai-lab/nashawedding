'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/language'

const colours = [
  { name: 'Chocolate', hex: '#3E2723' },
  { name: 'Mocha', hex: '#5D4037' },
  { name: 'Caramel', hex: '#8D6E63' },
  { name: 'Beige', hex: '#D7CCC8' },
  { name: 'Cream', hex: '#FFF8F0' },
  { name: 'Soft Gold', hex: '#C9A96E' },
]

export default function DressCodePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-6">
      <div className="text-center mb-16">
        <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
          {t('What to Wear', 'O Que Vestir')}
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6">
          {t('Dress Code', 'Traje')}
        </h1>
        <div className="section-divider" />
      </div>

      {/* Inspiration image */}
      <div className="max-w-md mx-auto mb-16 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/images/dresscode-inspiration.jpeg"
          alt="Dress code inspiration — shades of brown"
          width={448}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Formal elegance */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="font-display text-3xl text-chocolate mb-4">
          {t('Formal Elegance', 'Elegancia Formal')}
        </h2>
        <p className="text-caramel leading-relaxed">
          {t(
            'We invite you to dress in formal attire for our special day. Think elegant, sophisticated, and celebratory.',
            'Convidamos voce a vestir traje formal para o nosso dia especial. Pense em elegante, sofisticado e festivo.'
          )}
        </p>
      </div>

      {/* Colour palette */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {colours.map((c) => (
            <div key={c.hex} className="text-center">
              <div
                className="w-16 h-16 rounded-full border-2 border-beige/50 mx-auto mb-2"
                style={{ backgroundColor: c.hex }}
              />
              <p className="text-chocolate text-xs">{c.name}</p>
              <p className="text-caramel/50 text-xs">{c.hex}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guidelines */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card-elegant">
          <h3 className="font-display text-2xl text-chocolate mb-6 text-center">
            {t('Ladies', 'Senhoras')}
          </h3>
          <ul className="space-y-3">
            {[
              t(
                'Floor-length or midi dresses in earthy tones, champagne, or gold',
                'Vestidos longos ou midi em tons terrosos, champanhe ou dourado'
              ),
              t(
                'Elegant jumpsuits or tailored suits are welcome',
                'Macacoes elegantes ou ternos sob medida sao bem-vindos'
              ),
              t(
                'Heels or dressy flats — the venue has garden paths',
                'Saltos ou sapatos rasos elegantes — o local tem caminhos de jardim'
              ),
              t(
                'Please avoid white, ivory, or bright neon colours',
                'Por favor, evite branco, marfim ou cores neon brilhantes'
              ),
            ].map((rule, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-soft-gold mt-1">&#x2022;</span>
                <span className="text-caramel text-sm leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-elegant">
          <h3 className="font-display text-2xl text-chocolate mb-6 text-center">
            {t('Gentlemen', 'Senhores')}
          </h3>
          <ul className="space-y-3">
            {[
              t(
                'Suit and tie in dark or earthy tones',
                'Terno e gravata em tons escuros ou terrosos'
              ),
              t(
                'Brown, navy, charcoal, or olive suits recommended',
                'Ternos marrom, azul marinho, carvao ou oliva recomendados'
              ),
              t(
                'Pocket squares and gold accessories are a nice touch',
                'Lencos de bolso e acessorios dourados sao um toque agradavel'
              ),
              t(
                'Dress shoes — loafers or oxfords',
                'Sapatos sociais — mocassins ou oxfords'
              ),
            ].map((rule, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-soft-gold mt-1">&#x2022;</span>
                <span className="text-caramel text-sm leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
