'use client'

import { useLanguage } from '@/lib/language'

export default function RegistryPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-6">
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

      <div className="max-w-md mx-auto mt-12 text-center card-elegant">
        <p className="text-chocolate font-medium text-sm mb-2">
          {t('Payment Reference', 'Referencia de Pagamento')}
        </p>
        <p className="font-display text-2xl text-soft-gold mb-3">CN Wedding</p>
        <p className="text-caramel/60 text-xs">
          {t(
            'Please use this reference so we can identify your gift and thank you personally.',
            'Por favor, use esta referencia para que possamos identificar o seu presente e agradecer pessoalmente.'
          )}
        </p>
      </div>
    </div>
  )
}
