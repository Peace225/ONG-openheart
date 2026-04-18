import { Mail, ArrowRight, Share2, ExternalLink } from 'lucide-react'; // On remplace Linkedin et Twitter
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const executiveBoard = [
  {
    name: "Dr. Aminata Sylla",
    role: "Présidente Fondatrice",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Experte en développement durable avec plus de 15 ans d'expérience sur le terrain en Afrique de l'Ouest."
  },
  {
    name: "Jean-Marc Kouadio",
    role: "Directeur des Opérations",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    bio: "Ancien logisticien humanitaire, il coordonne toutes nos actions de terrain avec une précision chirurgicale."
  },
  {
    name: "Sarah Kone",
    role: "Responsable RSE & Partenariats",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=800&auto=format&fit=crop",
    bio: "Le pont entre notre ONG et le secteur privé, elle garantit le financement de nos projets majeurs."
  }
];

const teamMembers = [
  { name: "Cédric Bamba", role: "Chef de projet - Écologie", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=800&auto=format&fit=crop" },
  { name: "Marie Dubois", role: "Coordinatrice Santé", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
  { name: "Paul Traoré", role: "Responsable Logistique", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
  { name: "Aïcha Bocoum", role: "Communication Sociale", image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=800&auto=format&fit=crop" },
];

export default function Team() {
  return (
    <div className="bg-white pt-32 pb-24">
      
      {/* En-tête de la page */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-24">
        <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
          NOTRE ÉQUIPE
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
          Les visages derrière <br />
          <span className="text-brand-green">la vision verte</span>
        </h1>
        <p className="text-lg text-gray-600 mt-8 max-w-2xl mx-auto font-medium">
          Une équipe multidisciplinaire de passionnés, unis par une volonté commune : bâtir un avenir plus juste et durable pour la Côte d'Ivoire.
        </p>
      </div>

      {/* Section Bureau Exécutif */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-32">
        <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest mb-12 border-l-4 border-brand-green pl-6">
          Bureau Exécutif
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {executiveBoard.map((leader, index) => (
            <div key={index} className="group relative">
              <div className="relative overflow-hidden aspect-[3/4] bg-gray-100 mb-6 rounded-sm">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Réseaux sociaux - Remplacé par Share2 et Mail */}
                <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    <Share2 size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-brand-dark uppercase tracking-wider mb-1">{leader.name}</h3>
                <p className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4">{leader.role}</p>
                <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Équipe Terrain */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest mb-12 text-center">
            L'Équipe Opérationnelle
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 text-center border-t border-gray-100">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-50">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-black text-brand-dark uppercase tracking-wider mb-1">{member.name}</h4>
                <p className="text-brand-green font-bold text-xs tracking-widest uppercase">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Bannière de recrutement */}
          <div className="mt-24 bg-brand-dark p-12 lg:p-20 text-center relative overflow-hidden rounded-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                Rejoignez la <span className="text-brand-green">famille</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-medium">
                Nous sommes toujours à la recherche de nouveaux talents et de cœurs engagés pour renforcer notre impact sur le terrain.
              </p>
              <Link to="/benevolats">
                <Button variant="primary" className="px-10 py-4">Voir les offres de bénévolat</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}