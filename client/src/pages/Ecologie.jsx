import { useTranslation } from 'react-i18next';
import { TreePine, Wind, Recycle, Droplets } from 'lucide-react';
import Button from '../components/ui/Button';

// On conserve uniquement les identifiants et les icônes
const goalsData = [
  { id: "reforestation", icon: TreePine },
  { id: "energy", icon: Wind },
  { id: "waste", icon: Recycle },
  { id: "water", icon: Droplets },
];

export default function Ecologie() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24">
      {/* Header Immersif */}
      <div className="max-w-[1440px] mx-auto px-8 mb-24">
        <div className="relative h-[600px] rounded-[3rem] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-110" 
            alt={t('ecologie.hero.imageAlt')} 
          />
          <div className="absolute inset-0 bg-brand-dark/40 flex items-center px-12">
            <div className="max-w-3xl">
              <span className="text-brand-green font-bold tracking-[0.4em] uppercase text-sm mb-4 block">
                {t('ecologie.hero.badge')}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                {t('ecologie.hero.titlePart1')} <br /> <span className="text-brand-green">{t('ecologie.hero.titlePart2')}</span>
              </h1>
              <p className="text-2xl text-white/90 font-medium tracking-tight">
                {t('ecologie.hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu détaillé */}
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
        <div>
          <h2 className="text-4xl font-black text-brand-dark uppercase tracking-tighter mb-8 leading-tight">
            {t('ecologie.mission.titlePart1')} <span className="text-brand-green">{t('ecologie.mission.titlePart2')}</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
            {t('ecologie.mission.p1')}
          </p>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            {t('ecologie.mission.p2')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {goalsData.map((goal) => (
            <div key={goal.id} className="p-8 border-2 border-gray-50 bg-gray-50/30 hover:border-brand-green transition-all">
              <goal.icon className="text-brand-green mb-4" size={40} />
              <h4 className="text-lg font-black text-brand-dark uppercase tracking-wider mb-2">
                {t(`ecologie.goals.${goal.id}.title`)}
              </h4>
              <p className="text-sm text-gray-500 font-bold">
                {t(`ecologie.goals.${goal.id}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}