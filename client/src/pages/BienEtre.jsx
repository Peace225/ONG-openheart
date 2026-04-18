import { Users, GraduationCap, Briefcase, HeartPulse } from 'lucide-react';
import Button from '../components/ui/Button';

export default function BienEtre() {
  const initiatives = [
    { title: "Autonomisation des Femmes", desc: "Micro-crédits et formations à l'entrepreneuriat pour les groupements de femmes rurales.", icon: Users },
    { title: "Éducation & Alphabétisation", desc: "Soutien aux infrastructures scolaires et cours du soir pour adultes.", icon: GraduationCap },
    { title: "Insertion des Jeunes", desc: "Programmes de mentorat et stages dans les métiers techniques et numériques.", icon: Briefcase },
    { title: "Santé Communautaire", desc: "Campagnes de sensibilisation et accès aux soins de base en zone reculée.", icon: HeartPulse },
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section Page */}
      <div className="max-w-[1440px] mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Développement Humain</span>
            <h1 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-none mb-8">
              Bien-être <br /> <span className="text-brand-green">Socio-Économique</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              Nous croyons que la dignité humaine passe par l'autonomie financière et l'accès aux droits fondamentaux. Nos programmes visent à briser le cycle de la pauvreté par l'action concrète.
            </p>
          </div>
          <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544928147-7972fc44099e?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Social Welfare" 
            />
          </div>
        </div>
      </div>

      {/* Grille d'initiatives */}
      <div className="bg-gray-50 py-24 px-8">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest mb-16 text-center underline decoration-brand-green decoration-4">Nos axes stratégiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((item, i) => (
              <div key={i} className="bg-white p-10 flex gap-8 items-start hover:shadow-xl transition-all border-b-4 border-transparent hover:border-brand-green">
                <div className="w-16 h-16 bg-brand-green/10 flex items-center justify-center rounded-2xl text-brand-green flex-shrink-0">
                  <item.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-brand-dark uppercase mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}