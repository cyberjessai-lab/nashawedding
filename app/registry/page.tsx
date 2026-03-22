'use client'

import { LanguageProvider, useLanguage } from '@/lib/language'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function RegistryContent() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-32 pb-24 px-6">
        <div className="text-center mb-16">
          <p className="text-soft-gold uppercase tracking-[0.3em] text-xs mb-4">
            {t('With Love', 'Com Amor')}
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-chocolate italic font-light mb-6">
            {t('Gift Registry', 'Lista de Presentes')}
          </h1>
          <div className="section-divider" />
          <p className="text-caramel max-w-xl mx-auto">
            {t(
              'Your presence at our wedding is the greatest gift. However, if you wish to bless us with a contribution towards our future together, we would be deeply grateful.',
              'Sua presenca no nosso casamento e o maior presente. No entanto, se desejar nos abencoar com uma contribuicao para o nosso futuro juntos, ficaremos profundamente gratos.'
            )}
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Local Transfer */}
          <div className="card-elegant">
            <h3 className="font-display text-xl text-chocolate mb-6 text-center">
              {t('Local Transfer (FNB Namibia)', 'Transferencia Local (FNB Namibia)')}
            </h3>
            <div className="space-y-3">
              {[
                [t('Account Holder', 'Titular da Conta'), 'Nasha W Schiceya'],
                [t('Bank', 'Banco'), 'FNB Namibia'],
                [t('Account Number', 'Numero da Conta'), '62156989257'],
                [t('Branch Code', 'Codigo da Agencia'), '280872'],
                [t('Reference', 'Referencia'), 'CN Wedding'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-beige/30 pb-2">
                  <span className="text-caramel text-sm">{label}</span>
                  <span className="text-chocolate text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* International Transfer */}
          <div className="card-elegant">
            <h3 className="font-display text-xl text-chocolate mb-6 text-center">
              {t('International Transfer', 'Transferencia Internacional')}
            </h3>
            <div className="space-y-3">
              {[
                [t('Account Holder', 'Titular da Conta'), 'Celson Nangolo'],
                ['IBAN', 'AO06006001040100594061404'],
                ['SWIFT / BIC', 'FIABORNAL'],
                [t('Bank', 'Banco'), 'FNB Namibia'],
                [t('Reference', 'Referencia'), 'CN Wedding'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-beige/30 pb-2">
                  <span className="text-caramel text-sm">{label}</span>
                  <span className="text-chocolate text-sm font-medium break-all">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-caramel/50 text-xs mt-12 max-w-md mx-auto">
          {t(
            'Please use "CN Wedding" as your payment reference so we can thank you personally.',
            'Por favor, use "CN Wedding" como referencia de pagamento para que possamos agradecer pessoalmente.'
          )}
        </p>
      </main>
      <Footer />
    </>
  )
}

export default function RegistryPage() {
  return (
    <LanguageProvider>
      <RegistryContent />
    </LanguageProvider>
  )
}
