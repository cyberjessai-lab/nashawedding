'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LanguageProvider, useLanguage } from '@/lib/language'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const maidOfHonour = { name: 'Unda Namwandi', roleEn: 'Maid of Honour', rolePt: 'Madrinha de Honra', photo: '/images/party/unda.jpg' }
const bestMan = { name: 'Edgar Neto', roleEn: 'Best Man', rolePt: 'Padrinho', photo: '/images/party/edgar.jpg' }

const pairs = [
  {
    groomsman: { name: 'Leonel Nangolo', photo: '/images/party/leonel.jpg' },
    bridesmaid: { name: 'Ashleigh Ajiambo', photo: '/images/party/ashleigh.jpg' },
  },
  {
    groomsman: { name: 'Cléusio César', photo: '/images/party/cleusio.jpg' },
    bridesmaid: { name: 'Chantel Uiras', photo: '/images/party/chantel.jpg' },
  },
  {
    groomsman: { name: 'Joshua Schiceya', photo: '/images/party/joshua.jpg' },
    bridesmaid: { name: 'Elizabeth Uiras', photo: '/images/party/elizabeth.jpg' },
  },
  {
    groomsman: { name: 'Gilberto da Costa', photo: '/images/party/gilberto.jpg' },
    bridesmaid: { name: 'Angélique da Silva', photo: '/images/party/angelique.jpg' },
  },
]

function PersonCard({ name, role, photo }: { name: string; role: string; photo: string }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="text-center">
      <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-soft-gold/30 bg-champagne/50">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center bg-soft-gold/10">
            <span className="font-display text-3xl text-soft-gold/40">{name.charAt(0)}</span>
          </div>
        ) : (
          <Image
            src={photo}
            alt={name}
            width={144}
            height={144}
            className="object-cover w-full h-full"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <h3 className="font-display text-lg text-chocolate mb-1">{name}</h3>
      <p className="text-soft-gold text-xs uppercase tracking-wider">{role}</p>
    </div>
  )
}

function PartyContent() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-32 pb-24 px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
            {t('The Ones We Love', 'Os Que Amamos')}
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6">
            {t('Wedding Party', 'Cortejo Nupcial')}
          </h1>
          <div className="section-divider" />
        </div>

        {/* Maid of Honour & Best Man */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-items-center">
            <PersonCard
              name={maidOfHonour.name}
              role={t(maidOfHonour.roleEn, maidOfHonour.rolePt)}
              photo={maidOfHonour.photo}
            />
            <PersonCard
              name={bestMan.name}
              role={t(bestMan.roleEn, bestMan.rolePt)}
              photo={bestMan.photo}
            />
          </div>
        </div>

        {/* Groomsmen & Bridesmaids */}
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl text-chocolate text-center italic font-light mb-12">
            {t('Groomsmen & Bridesmaids', 'Padrinhos e Madrinhas')}
          </h2>

          <div className="space-y-16">
            {pairs.map((pair, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-2xl mx-auto">
                <PersonCard
                  name={pair.groomsman.name}
                  role={t('Groomsman', 'Padrinho')}
                  photo={pair.groomsman.photo}
                />
                <PersonCard
                  name={pair.bridesmaid.name}
                  role={t('Bridesmaid', 'Madrinha')}
                  photo={pair.bridesmaid.photo}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function PartyPage() {
  return (
    <LanguageProvider>
      <PartyContent />
    </LanguageProvider>
  )
}
