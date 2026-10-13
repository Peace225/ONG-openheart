import { useTranslation } from 'react-i18next'; // 1. Import du hook
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ActionAreas from '../components/ActionAreas';
import SingularitySection from '../components/SingularitySection';
import VolunteerSection from '../components/VolunteerSection';
import ImpactSection from '../components/ImpactSection';
import TestimonialSection from '../components/TestimonialSection';
import JournalSection from '../components/JournalSection';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import ProjectsRoadmapSection from '../components/ProjectsRoadmapSection';

export default function Home() {
  const { t } = useTranslation(); // 2. Initialisation

  return (
    <div className="bg-white flex flex-col">
      <HeroSection />
      <SingularitySection />
      <AboutSection />
      <ActionAreas />
      <JournalSection />
      <ProjectsRoadmapSection />
      <ImpactSection />
      <VolunteerSection />
      <TestimonialSection />

      {/* Call to Action Final (Bannière d'engagement) */}
      <section className="relative py-32 bg-brand-green overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
            {t('home.cta.titlePart1')} <br />
            <span className="text-brand-dark">{t('home.cta.titlePart2')}</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 font-medium max-w-2xl mx-auto">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/benevolats">
              <Button variant="dark" className="w-full sm:w-auto px-12 py-5 text-lg">
                {t('home.cta.volunteerBtn')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full sm:w-auto px-12 py-5 text-lg border-white text-white hover:bg-white hover:text-brand-green">
                {t('home.cta.donateBtn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}