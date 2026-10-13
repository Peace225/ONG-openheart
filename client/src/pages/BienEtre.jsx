import { useTranslation } from 'react-i18next';
import { Users, GraduationCap, Briefcase, HeartPulse } from 'lucide-react';
import Button from '../components/ui/Button';

// On conserve uniquement les identifiants et les icônes
const initiativesData = [
  { id: "women", icon: Users },
  { id: "education", icon: GraduationCap },
  { id: "youth", icon: Briefcase },
  { id: "health", icon: HeartPulse },
];

export default function BienEtre() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section Page */}
      <div className="max-w-[1440px] mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              {t('bienEtre.hero.badge')}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-none mb-8">
              {t('bienEtre.hero.titlePart1')} <br /> <span className="text-brand-green">{t('bienEtre.hero.titlePart2')}</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              {t('bienEtre.hero.description')}
            </p>
          </div>
          <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544928147-7972fc44099e?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt={t('bienEtre.hero.imageAlt')} 
            />
          </div>
        </div>
      </div>

      {/* Grille d'initiatives */}
      <div className="bg-gray-50 py-24 px-8">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest mb-16 text-center underline decoration-brand-green decoration-4">
            {t('bienEtre.initiatives.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiativesData.map((item) => (
              <div key={item.id} className="bg-white p-10 flex gap-8 items-start hover:shadow-xl transition-all border-b-4 border-transparent hover:border-brand-green">
                <div className="w-16 h-16 bg-brand-green/10 flex items-center justify-center rounded-2xl text-brand-green flex-shrink-0">
                  <item.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-brand-dark uppercase mb-4 tracking-tight">
                    {t(`bienEtre.initiatives.items.${item.id}.title`)}
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    {t(`bienEtre.initiatives.items.${item.id}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}