import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CheckCircle2, Users, Megaphone, TreePine, HeartHandshake } from 'lucide-react';
import Button from './ui/Button';

export default function AboutSection() {
  const { t } = useTranslation();

  // On stocke uniquement les identifiants, les valeurs chiffrées et les icônes
  const statsData = [
    { id: "volunteers", value: "15k+", icon: HeartHandshake },
    { id: "beneficiaries", value: "380+", icon: Users },
    { id: "campaigns", value: "125", icon: Megaphone },
    { id: "forests", value: "77+", icon: TreePine },
  ];

  // Liste des identifiants pour les points
  const pointsData = ["point1", "point2", "point3", "point4"];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
          
          {/* Colonne Gauche : Image avec Badges Intégrés */}
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-green/20 rounded-sm -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-dark/5 rounded-sm -z-10"></div>
            
            <div className="relative z-10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-gray-100 aspect-[4/5] xl:aspect-[4/5]">
              <img 
                src="/images/about.jpeg" 
                alt="Impact Open Heart" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />

              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 bg-brand-dark/95 backdrop-blur-sm border-t-4 border-brand-green">
                {statsData.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`p-6 flex flex-col items-center text-center ${
                      index === 0 || index === 2 ? 'border-r border-white/10' : ''
                    } ${index < 2 ? 'border-b border-white/10' : ''}`}
                  >
                    <stat.icon className="text-brand-green mb-2" size={24} strokeWidth={1.5} />
                    <span className="text-2xl font-black text-white leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 leading-tight">
                      {t(`aboutSection.stats.${stat.id}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne Droite : Textes institutionnels */}
          <div className="flex flex-col justify-center">
            <span className="text-brand-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              {t('aboutSection.badge')}
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter mb-8 leading-tight">
              {t('aboutSection.title.part1')} <br />
              <span className="text-brand-green">{t('aboutSection.title.highlight')}</span> <br /> {t('aboutSection.title.part2')}
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
              {t('aboutSection.description1')}
            </p>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              {t('aboutSection.description2')}
            </p>

            <ul className="space-y-4 mb-10">
              {pointsData.map((pointId) => (
                <li key={pointId} className="flex items-center text-brand-dark font-bold text-sm uppercase tracking-wide">
                  <CheckCircle2 className="text-brand-green mr-4 flex-shrink-0" size={20} />
                  {t(`aboutSection.points.${pointId}`)}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <Link to="/team">
                <Button variant="primary" className="px-10 py-5 shadow-xl">
                  {t('aboutSection.button')}
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}