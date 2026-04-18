import { TreePine, Users, FolderHeart, Globe2 } from 'lucide-react';

const impacts = [
  {
    id: 1,
    icon: TreePine,
    number: "50 000+",
    label: "Arbres plantés",
    description: "Dans le cadre de notre lutte pour la reforestation."
  },
  {
    id: 2,
    icon: Users,
    number: "15 000+",
    label: "Vies impactées",
    description: "Personnes aidées via nos programmes socio-économiques."
  },
  {
    id: 3,
    icon: FolderHeart,
    number: "120+",
    label: "Projets réalisés",
    description: "Des actions concrètes menées à terme sur le terrain."
  },
  {
    id: 4,
    icon: Globe2,
    number: "300+",
    label: "Bénévoles actifs",
    description: "Une communauté dévouée à travers la Côte d'Ivoire."
  }
];

export default function ImpactSection() {
  return (
    <section className="relative py-32 bg-brand-dark overflow-hidden">
      
      {/* 1. L'IMAGE DE FOND (CSS Background) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale opacity-30 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/impact-bg.jpg')" }}
      ></div>
      
      {/* 2. LE DÉGRADÉ DE PROTECTION (Laisse passer la lumière au centre) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/70 to-brand-dark/95"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* En-tête de la section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            NOTRE IMPACT
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
            Des chiffres qui <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">
              changent le monde
            </span>
          </h2>
        </div>

        {/* Grille des statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-brand-green transition-all duration-500 flex flex-col items-center text-center overflow-hidden rounded-sm"
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Icône */}
              <div className="w-20 h-20 mb-8 rounded-full border-2 border-brand-green group-hover:border-white flex items-center justify-center transition-colors duration-500">
                <item.icon size={36} className="text-brand-green group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Chiffre */}
              <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">
                {item.number}
              </h3>

              {/* Label */}
              <h4 className="text-lg font-bold text-brand-green group-hover:text-white uppercase tracking-wider mb-4 transition-colors duration-500">
                {item.label}
              </h4>

              {/* Description (visible au survol sur desktop, toujours visible sur mobile) */}
              <p className="text-gray-400 group-hover:text-white/90 text-sm font-medium transition-colors duration-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}