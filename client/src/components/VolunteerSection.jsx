import { Link } from 'react-router-dom';
import { HeartHandshake, CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';

export default function VolunteerSection() {
  const benefits = [
    "Participez à des missions concrètes sur le terrain",
    "Développez de nouvelles compétences professionnelles",
    "Intégrez un réseau de citoyens engagés",
    "Faites une différence visible en Côte d'Ivoire"
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      {/* Conteneur principal avec effet "Carte XXL" */}
      <div className="max-w-[1440px] mx-auto bg-brand-dark rounded-[2rem] overflow-hidden shadow-2xl relative">
        
        {/* Motif décoratif */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
          
          {/* Colonne de texte */}
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-8">
              <HeartHandshake size={24} />
              <span>S'engager avec nous</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
              Votre énergie peut <br />
              <span className="text-brand-green">transformer des vies</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-10 font-medium leading-relaxed">
              Nous sommes toujours à la recherche de personnes passionnées, prêtes à mettre leurs talents au service d'une cause noble. Que vous soyez étudiant, professionnel ou retraité, vous avez un rôle essentiel à jouer.
            </p>
            
            <ul className="space-y-5 mb-12">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-white/90 font-medium text-lg">
                  <CheckCircle2 className="text-brand-green mr-4 flex-shrink-0" size={24} />
                  {benefit}
                </li>
              ))}
            </ul>
            
            <div>
              <Link to="/benevolats">
                <Button variant="primary" className="px-10 py-5 text-lg w-full sm:w-auto">
                  Soumettre ma candidature
                </Button>
              </Link>
            </div>
          </div>

          {/* Colonne Image */}
          <div className="relative min-h-[400px] lg:min-h-full">
            <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply z-10"></div>
            <img 
              // --- Image locale ---
              src="/images/volunteer.jpg" 
              alt="Groupe de bénévoles enthousiastes" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}