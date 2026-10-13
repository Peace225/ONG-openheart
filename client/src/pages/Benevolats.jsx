import { useTranslation } from 'react-i18next';
import { Heart, Handshake, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

// On conserve la structure logique et les icônes
const sectorsData = [
  { id: "education", icon: Heart },
  { id: "environment", icon: Handshake },
  { id: "logistics", icon: CheckCircle }
];

export default function Benevolats() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              {t('benevolats.badge')}
            </span>
            <h1 className="text-6xl font-black text-brand-dark uppercase tracking-tighter mb-8 leading-tight">
              {t('benevolats.title.part1')} <br /> {t('benevolats.title.part2')} <span className="text-brand-green">{t('benevolats.title.highlight')}</span>
            </h1>
            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
              {t('benevolats.description')}
            </p>
            <div className="space-y-4">
              {sectorsData.map((s) => (
                <div key={s.id} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                  <s.icon className="text-brand-green" />
                  <span className="font-bold text-brand-dark uppercase tracking-wider">
                    {t(`benevolats.sectors.${s.id}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-dark p-12 rounded-[2rem] text-white">
            <h3 className="text-2xl font-black uppercase mb-8">{t('benevolats.form.title')}</h3>
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder={t('benevolats.form.namePlaceholder')} 
                className="w-full bg-white/10 border-b border-white/20 p-4 outline-none focus:border-brand-green transition-colors font-bold uppercase text-xs" 
              />
              <input 
                type="email" 
                placeholder={t('benevolats.form.emailPlaceholder')} 
                className="w-full bg-white/10 border-b border-white/20 p-4 outline-none focus:border-brand-green transition-colors font-bold uppercase text-xs" 
              />
              <select className="w-full bg-white/10 border-b border-white/20 p-4 outline-none focus:border-brand-green transition-colors font-bold uppercase text-xs text-gray-400">
                <option>{t('benevolats.form.typePlaceholder')}</option>
                <option>{t('benevolats.form.typeIndividual')}</option>
                <option>{t('benevolats.form.typeCorporate')}</option>
              </select>
              <Button variant="primary" className="w-full py-5">
                {t('benevolats.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}