import { useState } from 'react';
import { ShieldCheck, Heart, Leaf, Globe } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Don() {
  const [amount, setAmount] = useState(5000);
  const [frequency, setFrequency] = useState('once'); // 'once' or 'monthly'

  const suggestedAmounts = [2000, 5000, 10000, 25000, 50000];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Colonne Gauche : Argumentaire & Confiance */}
          <div>
            <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Votre Soutien</span>
            <h1 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-none mb-8">
              Chaque don <br /> <span className="text-brand-green">compte vraiment.</span>
            </h1>
            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-12">
              Votre générosité alimente directement nos actions sur le terrain. De la plantation d'arbres à l'autonomisation des communautés rurales, vous êtes le moteur du changement en Côte d'Ivoire.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-green shadow-sm flex-shrink-0">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-brand-dark uppercase tracking-tight">Don 100% Sécurisé</h4>
                  <p className="text-gray-500 text-sm font-medium">Vos informations de paiement sont cryptées et protégées.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-green shadow-sm flex-shrink-0">
                  <Globe size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-brand-dark uppercase tracking-tight">Transparence Totale</h4>
                  <p className="text-gray-500 text-sm font-medium">85% de votre don va directement aux projets de terrain.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire de Don */}
          <div className="bg-white p-8 md:p-12 shadow-2xl rounded-[2.5rem] border border-gray-100">
            {/* Sélecteur de fréquence */}
            <div className="flex p-1 bg-gray-100 rounded-xl mb-10">
              <button 
                onClick={() => setFrequency('once')}
                className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${frequency === 'once' ? 'bg-white text-brand-dark shadow-sm' : 'text-gray-400 hover:text-brand-dark'}`}
              >
                Don Ponctuel
              </button>
              <button 
                onClick={() => setFrequency('monthly')}
                className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${frequency === 'monthly' ? 'bg-brand-green text-white shadow-sm' : 'text-gray-400 hover:text-brand-dark'}`}
              >
                Don Mensuel
              </button>
            </div>

            {/* Sélecteur de montant */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {suggestedAmounts.map((amt) => (
                <button 
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`py-4 border-2 rounded-xl font-black text-sm transition-all ${amount === amt ? 'border-brand-green bg-green-50 text-brand-green' : 'border-gray-100 text-gray-400 hover:border-brand-green/30'}`}
                >
                  {amt.toLocaleString()} 
                </button>
              ))}
              <div className="col-span-3">
                <input 
                  type="number" 
                  placeholder="Autre montant (FCFA)" 
                  className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-brand-green rounded-xl outline-none font-bold text-center"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            {/* Impact visuel du montant */}
            <div className="bg-brand-green/5 p-6 rounded-2xl mb-10 flex items-center gap-4 border border-brand-green/10">
              <Heart className="text-brand-green animate-pulse" />
              <p className="text-sm font-bold text-brand-dark">
                Avec <span className="text-brand-green">{Number(amount).toLocaleString()} FCFA</span>, vous permettez de planter environ {Math.floor(amount/500)} arbres.
              </p>
            </div>

            {/* Informations Donneur */}
            <div className="space-y-4 mb-10">
              <input type="text" placeholder="NOM COMPLET" className="w-full p-4 border-b-2 border-gray-100 focus:border-brand-green outline-none font-bold uppercase text-xs tracking-widest" />
              <input type="email" placeholder="ADRESSE EMAIL" className="w-full p-4 border-b-2 border-gray-100 focus:border-brand-green outline-none font-bold uppercase text-xs tracking-widest" />
            </div>

            <Button variant="primary" className="w-full py-6 text-lg">
              Finaliser mon don sécurisé
            </Button>
            
            <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6">
              Paiement disponible via Orange Money, Wave, Moov et Carte Bancaire
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}