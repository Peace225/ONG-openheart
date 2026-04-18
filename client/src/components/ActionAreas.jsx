import { Link } from 'react-router-dom';
import { ArrowUpRight, Leaf, Heart } from 'lucide-react';
import Button from './ui/Button';

const actions = [
  {
    title: "Initiatives pour le bien-être socio-économique",
    description: "Favoriser l'éducation, la santé et l'autonomisation des femmes et des enfants pour un développement durable et équitable.",
    icon: Heart,
    image: "/images/action-bien-etre.jpeg", 
    link: "/bien-etre",
    stats: "15+ Projets actifs"
  },
  {
    title: "Lutte contre le réchauffement climatique",
    description: "Préserver la biodiversité et nos forêts tout en sensibilisant les populations, pour bâtir une Côte d'Ivoire plus verte.",
    icon: Leaf,
    image: "/images/action-ecologie.jpeg", 
    link: "/ecologie",
    stats: "50k Arbres plantés"
  }
];

export default function ActionAreas() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header de section asymétrique */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
              DOMAINES D'INTERVENTION
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-none">
              Nos actions pour <br />
              <span className="text-brand-green">le changement.</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-gray-500 font-medium max-w-sm text-right lg:text-left">
              Nous déployons des solutions innovantes et durables pour répondre aux défis majeurs de notre époque.
            </p>
          </div>
        </div>

        {/* Grille des domaines d'action */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {actions.map((action, index) => (
            <div key={index} className="group relative overflow-hidden bg-brand-dark aspect-[16/10] flex items-end p-8 md:p-12">
              {/* Image de fond avec overlay dynamique */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={action.image} 
                  alt={action.title} 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
              </div>

              {/* Contenu de la carte */}
              <div className="relative z-10 w-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-brand-green flex items-center justify-center rounded-full text-white">
                    <action.icon size={32} />
                  </div>
                  <span className="text-brand-green font-bold text-sm uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    {action.stats}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-4 leading-tight">
                  {action.title}
                </h3>
                
                <p className="text-gray-300 text-lg mb-8 max-w-md line-clamp-2 group-hover:line-clamp-none transition-all duration-500 font-medium">
                  {action.description}
                </p>

                <Link 
                  to={action.link} 
                  className="inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest group/btn"
                >
                  <span className="border-b-2 border-brand-green pb-1 group-hover/btn:pr-4 transition-all duration-300">
                    En savoir plus
                  </span>
                  <ArrowUpRight className="text-brand-green group-hover/btn:rotate-45 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Petit CTA de réassurance */}
        <div className="mt-20 p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-50/50">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                  <img src={`/images/avatar${i}.jpg`} alt={`Avatar bénévole ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-brand-dark uppercase tracking-wider">
              Plus de <span className="text-brand-green">250 bénévoles</span> déjà engagés
            </p>
          </div>
          <Link to="/contact">
            <Button variant="outline" className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">
              Nous rejoindre
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}