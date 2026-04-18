import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Button from './ui/Button';

const articles = [
  {
    id: 1,
    category: "Écologie",
    title: "Succès retentissant de la campagne de reboisement à l'Ouest",
    excerpt: "Plus de 10 000 plants ont été mis en terre ce week-end grâce à la mobilisation exceptionnelle de nos bénévoles et partenaires locaux.",
    date: "15 Avril 2026",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    slug: "succes-campagne-reboisement-ouest"
  },
  {
    id: 2,
    category: "Solidarité",
    title: "Inauguration du nouveau centre de formation pour femmes",
    excerpt: "Un espace dédié à l'autonomisation socio-économique ouvre ses portes pour accompagner plus de 200 femmes par an.",
    date: "02 Avril 2026",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=800&auto=format&fit=crop",
    slug: "inauguration-centre-formation-femmes"
  },
  {
    id: 3,
    category: "Événement",
    title: "Retour sur notre grande marche pour le climat à Abidjan",
    excerpt: "Des centaines de citoyens ont marché à nos côtés pour sensibiliser les décideurs à l'urgence climatique urbaine.",
    date: "28 Mars 2026",
    image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=800&auto=format&fit=crop",
    slug: "marche-climat-abidjan-2026"
  }
];

export default function JournalSection() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        
        {/* En-tête de la section avec bouton aligné à droite sur Desktop */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              ACTUALITÉS & RÉCITS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark uppercase tracking-tighter leading-tight">
              Notre Journal <br />
              <span className="text-brand-green">de bord</span>
            </h2>
          </div>
          <Link to="/actualites" className="hidden md:block">
            <Button variant="outline" className="border-gray-200 text-brand-dark hover:border-brand-green hover:bg-brand-green hover:text-white">
              Voir tous les articles
            </Button>
          </Link>
        </div>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="group flex flex-col bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100"
            >
              {/* Image avec effet de zoom */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Badge Catégorie */}
                <div className="absolute top-6 left-6 bg-brand-green text-white text-xs font-bold uppercase tracking-widest px-4 py-2">
                  {article.category}
                </div>
              </div>

              {/* Contenu de l'article */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold mb-4">
                  <Calendar size={16} className="text-brand-green" />
                  {article.date}
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-black text-brand-dark uppercase leading-snug mb-4 group-hover:text-brand-green transition-colors duration-300 line-clamp-2">
                  <Link to={`/actualites/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Extrait */}
                <p className="text-gray-600 font-medium mb-8 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>

                {/* Lien Lire la suite */}
                <Link 
                  to={`/actualites/${article.slug}`} 
                  className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-green transition-colors mt-auto"
                >
                  Lire l'article 
                  <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bouton mobile (visible uniquement sur petits écrans) */}
        <div className="mt-12 text-center md:hidden">
          <Link to="/actualites">
            <Button variant="outline" className="w-full border-gray-200 text-brand-dark">
              Voir tous les articles
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}