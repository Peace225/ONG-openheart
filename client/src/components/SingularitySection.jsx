import { UserPlus, Leaf, Handshake } from 'lucide-react';

const singularityFeatures = [
  {
    icon: UserPlus,
    title: "Une action multisectorielle",
    description: "Nous intervenons dans de nombreux domaines essentiels : éducation, santé, droits humains, accès à l’eau potable, sécurité alimentaire, droits des femmes, droits des enfants, et soutien aux personnes vulnérables. Chaque projet est conçu pour répondre aux besoins réels des communautés locales.",
    bgColor: "bg-pink-600",
  },
  {
    icon: Leaf,
    title: "Un engagement environnemental fort",
    description: "Notre lutte contre le changement climatique s’articule autour de la conservation des forêts, de la préservation de la biodiversité et de la promotion d’écosystèmes durables. Nous croyons que protéger l’environnement, c’est aussi protéger l’avenir des générations futures en Côte d'Ivoire.",
    bgColor: "bg-green-600",
  },
  {
    icon: Handshake,
    title: "Des actions de terrain concrètes et collaboratives",
    description: "Nous travaillons main dans la main avec les citoyens, les gouvernements, les ONG partenaires et les entreprises pour construire ensemble des solutions durables et adaptées aux réalités locales.",
    bgColor: "bg-lime-600",
  },
];

export default function SingularitySection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gray-50 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        
        {/* En-tête de section centré */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-pink-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            NOTRE SINGULARITÉ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-green-700 uppercase tracking-tighter leading-tight">
            Une approche humaine et globale pour un impact réel en Côte d’Ivoire
          </h2>
        </div>

        {/* Grille de caractéristiques responsive (1 col sur mobile, 3 sur desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {singularityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`p-10 text-white shadow-2xl ${feature.bgColor} transition-transform duration-300 hover:scale-105`}
            >
              {/* Icône stylisée et Titre */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center justify-center w-20 h-20 rounded-full border border-white/40 flex-shrink-0">
                  <feature.icon size={44} className="text-white" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest leading-none">
                  {feature.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-base font-semibold leading-relaxed text-white/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}