import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ActionAreas from '../components/ActionAreas';
import SingularitySection from '../components/SingularitySection';
import VolunteerSection from '../components/VolunteerSection'; // 1. Ajout de l'import
import ImpactSection from '../components/ImpactSection';
import TestimonialSection from '../components/TestimonialSection';
import JournalSection from '../components/JournalSection';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import ProjectsRoadmapSection from '../components/ProjectsRoadmapSection';

export default function Home() {
  return (
    <div className="bg-white flex flex-col">
      {/* 1. Introduction visuelle XXL */}
      <HeroSection />
      {/* 4. Ce qui nous rend unique en Côte d'Ivoire */}
      <SingularitySection />

      {/* 2. L'histoire et la mission */}
      <AboutSection />

      {/* 3. Les piliers d'intervention concrets */}
      <ActionAreas />
      <JournalSection />
      {/* 5. Section Devenir Bénévole */}
         <ProjectsRoadmapSection />

      {/* 6. Les Chiffres Clés / Nos réussites */}
      <ImpactSection />

      
      {/* 8. Notre Journal de bord (Actualités) */}
      
      <VolunteerSection />
      {/* 7. Les Témoignages */}
      <TestimonialSection />


      {/* 9. Call to Action Final (Bannière d'engagement) */}
      <section className="relative py-32 bg-brand-green overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
            Il n'y a pas de plan B pour la planète. <br />
            <span className="text-brand-dark">Engagez-vous aujourd'hui.</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 font-medium max-w-2xl mx-auto">
            Que ce soit par votre temps, votre expertise ou une contribution financière, votre soutien est le moteur de notre action.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/benevolats">
              <Button variant="dark" className="w-full sm:w-auto px-12 py-5 text-lg">Devenir Bénévole</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full sm:w-auto px-12 py-5 text-lg border-white text-white hover:bg-white hover:text-brand-green">Faire un don</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}