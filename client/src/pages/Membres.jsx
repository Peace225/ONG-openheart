export default function Membres() {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8 text-center">
        <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Communauté</span>
        <h1 className="text-6xl font-black text-brand-dark uppercase tracking-tighter mb-16">Espace <span className="text-brand-green">Membres</span></h1>
        
        <div className="bg-white p-20 shadow-2xl rounded-[3rem] max-w-3xl mx-auto">
          <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-green">
            <svg size={40} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-brand-dark uppercase mb-4 tracking-tight">Accès réservé</h2>
          <p className="text-gray-500 font-medium mb-10">Cet espace est dédié aux membres actifs de l'ONG pour accéder aux rapports internes et aux outils de collaboration.</p>
          <div className="flex flex-col gap-4 max-w-xs mx-auto">
            <button className="bg-brand-dark text-white font-bold py-4 px-8 uppercase tracking-widest hover:bg-brand-green transition-all">Se connecter</button>
            <button className="text-brand-dark font-black text-xs uppercase tracking-[0.2em] border-b-2 border-brand-green py-2 self-center">Devenir membre actif</button>
          </div>
        </div>
      </div>
    </div>
  );
}