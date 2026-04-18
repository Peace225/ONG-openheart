import { TreePine, Wind, Recycle, Droplets } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Ecologie() {
  const goals = [
    { title: "Reforestation Massive", desc: "Reboisement des forêts classées et création de pépinières communautaires.", icon: TreePine },
    { title: "Énergies Propres", desc: "Promotion des kits solaires et foyers améliorés pour réduire le charbon de bois.", icon: Wind },
    { title: "Gestion des Déchets", desc: "Programmes de tri sélectif et de valorisation des déchets plastiques.", icon: Recycle },
    { title: "Protection des Eaux", desc: "Nettoyage des lagunes et sensibilisation à la préservation des nappes phréatiques.", icon: Droplets },
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Header Immersif */}
      <div className="max-w-[1440px] mx-auto px-8 mb-24">
        <div className="relative h-[600px] rounded-[3rem] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-110" 
            alt="Nature" 
          />
          <div className="absolute inset-0 bg-brand-dark/40 flex items-center px-12">
            <div className="max-w-3xl">
              <span className="text-brand-green font-bold tracking-[0.4em] uppercase text-sm mb-4 block">Environnement</span>
              <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                Lutte <br /> <span className="text-brand-green">Climatique</span>
              </h1>
              <p className="text-2xl text-white/90 font-medium tracking-tight">
                Pour que la Côte d'Ivoire de demain reste une terre de forêts et de vie.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu détaillé */}
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
        <div>
          <h2 className="text-4xl font-black text-brand-dark uppercase tracking-tighter mb-8 leading-tight">Notre mission pour <span className="text-brand-green">la biodiversité</span></h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
            Le dérèglement climatique n'est plus une menace lointaine, c'est une réalité quotidienne pour nos agriculteurs et nos écosystèmes côtiers. 
          </p>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Open Heart déploie des projets de régénération naturelle et de sensibilisation pour faire de chaque citoyen un gardien de la nature.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {goals.map((goal, i) => (
            <div key={i} className="p-8 border-2 border-gray-50 bg-gray-50/30 hover:border-brand-green transition-all">
              <goal.icon className="text-brand-green mb-4" size={40} />
              <h4 className="text-lg font-black text-brand-dark uppercase tracking-wider mb-2">{goal.title}</h4>
              <p className="text-sm text-gray-500 font-bold">{goal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}