import { Heart, Handshake, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Benevolats() {
  const sectors = [
    { title: "Éducation & Santé", icon: Heart },
    { title: "Environnement", icon: Handshake },
    { title: "Logistique & Digital", icon: CheckCircle }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Engagement</span>
            <h1 className="text-6xl font-black text-brand-dark uppercase tracking-tighter mb-8 leading-tight">
              Devenez un acteur <br /> du <span className="text-brand-green">changement</span>
            </h1>
            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
              Que vous soyez un individu souhaitant donner de son temps ou une entreprise désireuse d'investir dans la RSE, nous construisons des partenariats basés sur l'impact réel.
            </p>
            <div className="space-y-4">
              {sectors.map((s, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                  <s.icon className="text-brand-green" />
                  <span className="font-bold text-brand-dark uppercase tracking-wider">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-dark p-12 rounded-[2rem] text-white">
            <h3 className="text-2xl font-black uppercase mb-8">Postuler maintenant</h3>
            <form className="space-y-6">
              <input type="text" placeholder="NOM COMPLET" className="w-full bg-white/10 border-b border-white/20 p-4 outline-none focus:border-brand-green transition-colors font-bold uppercase text-xs" />
              <input type="email" placeholder="EMAIL PROFESSIONNEL" className="w-full bg-white/10 border-b border-white/20 p-4 outline-none focus:border-brand-green transition-colors font-bold uppercase text-xs" />
              <select className="w-full bg-white/10 border-b border-white/20 p-4 outline-none focus:border-brand-green transition-colors font-bold uppercase text-xs text-gray-400">
                <option>TYPE D'ENGAGEMENT</option>
                <option>BÉNÉVOLAT INDIVIDUEL</option>
                <option>PARTENARIAT ENTREPRISE</option>
              </select>
              <Button variant="primary" className="w-full py-5">Envoyer ma demande</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}