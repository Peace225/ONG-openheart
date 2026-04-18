import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsArticles = [
  {
    id: 1,
    title: "Lancement de la caravane de sensibilisation climatique",
    excerpt: "Une tournée nationale pour éduquer les jeunes aux enjeux de la protection de l'environnement.",
    date: "17 Avril 2026",
    author: "Admin Open Heart",
    image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=800",
    category: "Événement"
  },
  {
    id: 2,
    title: "Partenariat stratégique avec les autorités locales",
    excerpt: "Une nouvelle alliance pour renforcer l'accès à l'eau potable dans les zones rurales de Côte d'Ivoire.",
    date: "10 Avril 2026",
    author: "Direction",
    image: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?q=80&w=800",
    category: "Institutionnel"
  },
  {
    id: 3,
    title: "Témoignage : Comment le micro-crédit a changé ma vie",
    excerpt: "Awa raconte son parcours depuis l'obtention de son prêt pour lancer sa coopérative agricole.",
    date: "05 Avril 2026",
    author: "Social Team",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800",
    category: "Récit"
  }
];

export default function Actualites() {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Actualités</span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter">
            Notre Journal <span className="text-brand-green">de bord</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {newsArticles.map((article) => (
            <article key={article.id} className="bg-white group overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <span className="absolute top-6 left-6 bg-brand-green text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2">
                  {article.category}
                </span>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14}/> {article.date}</span>
                  <span className="flex items-center gap-1"><User size={14}/> {article.author}</span>
                </div>
                
                <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight leading-tight mb-6 group-hover:text-brand-green transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-gray-500 font-medium mb-8 line-clamp-3">
                  {article.excerpt}
                </p>

                <Link 
                  to={`/actualites/${article.id}`} 
                  className="inline-flex items-center gap-2 text-brand-dark font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all"
                >
                  Lire la suite <ArrowRight size={16} className="text-brand-green" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}