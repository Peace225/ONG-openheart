import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Heart, Leaf, Globe } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Don() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(5000);
  const [frequency, setFrequency] = useState('once'); // 'once' or 'monthly'

  const suggestedAmounts = [2000, 5000, 10000, 25000, 50000];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Colonne Gauche : Argumentaire & Confiance */}
          <div>
            <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              {t('don.badge')}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-none mb-8">
              {t('don.titlePart1')} <br /> <span className="text-brand-green">{t('don.titlePart2')}</span>
            </h1>
            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-12">
              {t('don.description')}
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-green shadow-sm flex-shrink-0">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-brand-dark uppercase tracking-tight">
                    {t('don.features.secureTitle')}
                  </h4>
                  <p className="text-gray-500 text-sm font-medium">
                    {t('don.features.secureDesc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-green shadow-sm flex-shrink-0">
                  <Globe size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-brand-dark uppercase tracking-tight">
                    {t('don.features.transparentTitle')}
                  </h4>
                  <p className="text-gray-500 text-sm font-medium">
                    {t('don.features.transparentDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire de Don */}
          <div className="bg-white p-8 md:p-12 shadow-2xl rounded-[2.5rem] border border-gray-100">
            {/* Sélecteur de fréquence */}
            <div className="flex p-1 bg-gray-100 rounded-xl mb-10">
              <button 
                onClick={() => setFrequency('once')}
                className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${frequency === 'once' ? 'bg-white text-brand-dark shadow-sm' : 'text-gray-400 hover:text-brand-dark'}`}
              >
                {t('don.form.once')}
              </button>
              <button 
                onClick={() => setFrequency('monthly')}
                className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${frequency === 'monthly' ? 'bg-brand-green text-white shadow-sm' : 'text-gray-400 hover:text-brand-dark'}`}
              >
                {t('don.form.monthly')}
              </button>
            </div>

            {/* Sélecteur de montant */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {suggestedAmounts.map((amt) => (
                <button 
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`py-4 border-2 rounded-xl font-black text-sm transition-all ${amount === amt ? 'border-brand-green bg-green-50 text-brand-green' : 'border-gray-100 text-gray-400 hover:border-brand-green/30'}`}
                >
                  {amt.toLocaleString()} 
                </button>
              ))}
              <div className="col-span-3">
                <input 
                  type="number" 
                  placeholder={t('don.form.otherAmount')}
                  className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-brand-green rounded-xl outline-none font-bold text-center"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            {/* Impact visuel du montant */}
            <div className="bg-brand-green/5 p-6 rounded-2xl mb-10 flex items-center gap-4 border border-brand-green/10">
              <Heart className="text-brand-green animate-pulse" />
              <p className="text-sm font-bold text-brand-dark">
                {t('don.form.impact.part1')} <span className="text-brand-green">{Number(amount).toLocaleString()} FCFA</span>{t('don.form.impact.part2')} {Math.floor(amount/500)} {t('don.form.impact.part3')}
              </p>
            </div>

            {/* Informations Donneur */}
            <div className="space-y-4 mb-10">
              <input type="text" placeholder={t('don.form.namePlaceholder')} className="w-full p-4 border-b-2 border-gray-100 focus:border-brand-green outline-none font-bold uppercase text-xs tracking-widest" />
              <input type="email" placeholder={t('don.form.emailPlaceholder')} className="w-full p-4 border-b-2 border-gray-100 focus:border-brand-green outline-none font-bold uppercase text-xs tracking-widest" />
            </div>

            <Button variant="primary" className="w-full py-6 text-lg">
              {t('don.form.submitBtn')}
            </Button>
            
            <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6">
              {t('don.form.paymentInfo')}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}