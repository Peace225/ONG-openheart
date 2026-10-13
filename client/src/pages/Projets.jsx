import { useTranslation } from 'react-i18next';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
// Importation de la section des projets court et long termes
import ProjectsRoadmapSection from '../components/ProjectsRoadmapSection';

// On ne conserve que les identifiants et les images
const projectsData = [
  {
    id: "project1",
    image: "/images/slide13.jpg"
  },
  {
    id: "project2",
    image: "/images/slide9.jpg"
  },
  {
    id: "project3",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200"
  }
];

export default function Projets() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 sm:pt-32 pb-16 min-h-screen bg-white">
      {/* --- SECTION 1 : Projets phares & réalisations terrain --- */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-brand-green font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
            {t('projets.hero.badge')}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-dark uppercase tracking-tight leading-tight mb-6 sm:mb-8">
            {t('projets.hero.titlePart1')} <br className="hidden sm:inline" /> 
            <span className="text-brand-green">{t('projets.hero.titlePart2')}</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            {t('projets.hero.description')}
          </p>
        </div>
        
        {/* Grille des réalisations immédiates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {projectsData.map((project) => (
            <Card 
              key={project.id} 
              title={t(`projets.featured.${project.id}.title`)} 
              description={t(`projets.featured.${project.id}.desc`)} 
              imageUrl={project.image}
            >
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                <span className="text-xs font-black uppercase tracking-widest text-brand-green bg-green-50 px-3 py-1.5 rounded">
                  {t(`projets.featured.${project.id}.status`)}
                </span>
                <Button variant="outline" className="!px-4 !py-2 text-xs">
                  {t('projets.cardBtn')}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* --- SECTION 2 : Feuille de route (Projets à court & long termes) --- */}
      <ProjectsRoadmapSection />
    </div>
  );
}