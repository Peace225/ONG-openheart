import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, X } from 'lucide-react';
import Button from './ui/Button';

const articles = [
  {
    id: 1,
    category: "Solidarité",
    title: "Don en espèces à plusieurs structures pour personnes handicapées",
    excerpt: "Remise officielle de dons financiers et accompagnement de plusieurs structures dédiées à la prise en charge des personnes en situation de handicap.",
    content: "Dans le cadre de nos engagements en faveur de l'inclusion sociale et du soutien aux populations vulnérables, nous avons procédé à une remise officielle de fonds à trois centres d'accueil majeurs. Cette aide financière permettra de moderniser leurs équipements orthopédiques, d'assurer le renouvellement du matériel pédagogique et de financer les frais médicaux et d'assistance des résidents les plus démunis. Les responsables de structures ont chaleureusement salué cette initiative citoyenne qui renforce directement la dignité et l'autonomie des bénéficiaires.",
    date: "15 Avril 2024",
    image: "/images/slide13.jpg",
    slug: "don-especes-structures-personnes-handicapees"
  },
  {
    id: 2,
    category: "Solidarité",
    title: "Don en espèces et en nature à plusieurs mères nourricières",
    excerpt: "Distribution de vivres, kits de première nécessité et appui financier pour soutenir plusieurs mères nourricières et leurs nourrissons.",
    content: "Cette campagne solidaire a réuni bénévoles et professionnels de santé autour de mères célibataires et de familles en situation précaire. Plus de 120 kits composés de produits d'hygiène infantile, laits maternisés, couches, vivres de base et enveloppes d'aide directe ont été distribués. Au-delà de l'aide d'urgence, des ateliers de sensibilisation à la nutrition infantile et à la santé maternelle ont été animés afin de fournir des repères durables aux jeunes mères.",
    date: "02 Avril 2023",
    image: "/images/slide9.jpg",
    slug: "don-en-especes-et-en-nature-a-plusieurs-meres-nourricieres"
  },
  {
    id: 3,
    category: "Événement",
    title: "Retour sur notre grande marche pour le climat à Abidjan",
    excerpt: "Des centaines de citoyens ont marché à nos côtés pour sensibiliser les décideurs à l'urgence climatique urbaine.",
    content: "Une mobilisation historique s'est tenue dans les artères principales de la métropole. Étudiants, collectifs associatifs et familles ont défilé pacifiquement afin de porter un plaidoyer fort : accélération de la végétalisation urbaine, meilleure gestion du tri des déchets plastiques et protection des berges lagunaires. La manifestation s'est conclue par la remise officielle d'un mémorandum citoyen aux représentants des collectivités territoriales.",
    date: "28 Mars 2026",
    image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=800&auto=format&fit=crop",
    slug: "marche-climat-abidjan-2026"
  }
];

export default function JournalSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Bloque le scroll de la page principale quand la modale est ouverte
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedArticle(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedArticle]);

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white relative">
      <div className="max-w-[1440px] mx-auto">
        
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-green font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
              Actualités & Récits
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark uppercase tracking-tight leading-tight">
              Notre Journal <br className="hidden sm:inline" />
              <span className="text-brand-green">de bord</span>
            </h2>
          </div>
          
          <Link to="/actualites" className="hidden md:inline-block">
            <Button 
              variant="outline" 
              className="border-gray-200 text-brand-dark hover:border-brand-green hover:bg-brand-green hover:text-white transition-colors"
            >
              Voir tous les articles
            </Button>
          </Link>
        </div>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="group flex flex-col bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Image avec zoom */}
              <div 
                className="relative h-52 sm:h-64 overflow-hidden cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-brand-green text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm shadow-sm">
                  {article.category}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  <Calendar size={15} className="text-brand-green shrink-0" />
                  <span>{article.date}</span>
                </div>

                {/* Titre cliquable */}
                <h3 
                  onClick={() => setSelectedArticle(article)}
                  className="text-lg sm:text-xl font-black text-brand-dark uppercase leading-snug mb-3 group-hover:text-brand-green transition-colors duration-200 line-clamp-2 cursor-pointer text-left"
                >
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base font-normal leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>

                {/* Bouton déclencheur du Popup */}
                <button 
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-green transition-colors mt-auto pt-2 cursor-pointer text-left self-start"
                >
                  Lire l'article 
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bouton mobile */}
        <div className="mt-8 sm:mt-12 md:hidden">
          <Link to="/actualites" className="block w-full">
            <Button variant="outline" className="w-full justify-center border-gray-200 text-brand-dark py-3">
              Voir tous les articles
            </Button>
          </Link>
        </div>

      </div>

      {/* --- POPUP / MODALE ARTICLE --- */}
      {selectedArticle && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="relative w-full max-w-2xl lg:max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black text-white backdrop-blur-md transition-colors"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            {/* Image de couverture */}
            <div className="relative h-56 sm:h-72 w-full shrink-0">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 sm:left-6 bg-brand-green text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm shadow-md">
                {selectedArticle.category}
              </div>
            </div>

            {/* Contenu textuel scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm font-semibold">
                <Calendar size={16} className="text-brand-green shrink-0" />
                <span>{selectedArticle.date}</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-dark uppercase leading-tight">
                {selectedArticle.title}
              </h2>

              <p className="text-brand-dark font-medium text-sm sm:text-base border-l-4 border-brand-green pl-4 italic bg-gray-50 py-3 rounded-r">
                {selectedArticle.excerpt}
              </p>

              <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-3 pt-2">
                <p>
                  {selectedArticle.content || selectedArticle.excerpt}
                </p>
              </div>
            </div>

            {/* Pied de page de la modale */}
            <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
              <Button 
                variant="outline" 
                onClick={() => setSelectedArticle(null)}
                className="border-gray-300 text-brand-dark hover:bg-gray-100 px-6"
              >
                Fermer
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}