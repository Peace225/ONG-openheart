import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, X } from 'lucide-react';
import Button from './ui/Button';

// On garde uniquement les identifiants, les images et les slugs
const articlesData = [
  {
    id: "article1",
    image: "/images/slide13.jpg",
    slug: "don-especes-structures-personnes-handicapees"
  },
  {
    id: "article2",
    image: "/images/slide9.jpg",
    slug: "don-en-especes-et-en-nature-a-plusieurs-meres-nourricieres"
  },
  {
    id: "article3",
    image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=800&auto=format&fit=crop",
    slug: "marche-climat-abidjan-2026"
  }
];

export default function JournalSection() {
  const { t } = useTranslation();
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
              {t('journal.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark uppercase tracking-tight leading-tight">
              {t('journal.title.part1')} <br className="hidden sm:inline" />
              <span className="text-brand-green">{t('journal.title.part2')}</span>
            </h2>
          </div>
          
          <Link to="/actualites" className="hidden md:inline-block">
            <Button 
              variant="outline" 
              className="border-gray-200 text-brand-dark hover:border-brand-green hover:bg-brand-green hover:text-white transition-colors"
            >
              {t('journal.viewAll')}
            </Button>
          </Link>
        </div>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {articlesData.map((article) => (
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
                  alt={t(`journal.articles.${article.id}.title`)} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-brand-green text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm shadow-sm">
                  {t(`journal.articles.${article.id}.category`)}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  <Calendar size={15} className="text-brand-green shrink-0" />
                  <span>{t(`journal.articles.${article.id}.date`)}</span>
                </div>

                {/* Titre cliquable */}
                <h3 
                  onClick={() => setSelectedArticle(article)}
                  className="text-lg sm:text-xl font-black text-brand-dark uppercase leading-snug mb-3 group-hover:text-brand-green transition-colors duration-200 line-clamp-2 cursor-pointer text-left"
                >
                  {t(`journal.articles.${article.id}.title`)}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base font-normal leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {t(`journal.articles.${article.id}.excerpt`)}
                </p>

                {/* Bouton déclencheur du Popup */}
                <button 
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-green transition-colors mt-auto pt-2 cursor-pointer text-left self-start"
                >
                  {t('journal.readArticle')}
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
              {t('journal.viewAll')}
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
              aria-label={t('journal.close')}
            >
              <X size={20} />
            </button>

            {/* Image de couverture */}
            <div className="relative h-56 sm:h-72 w-full shrink-0">
              <img 
                src={selectedArticle.image} 
                alt={t(`journal.articles.${selectedArticle.id}.title`)} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 sm:left-6 bg-brand-green text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm shadow-md">
                {t(`journal.articles.${selectedArticle.id}.category`)}
              </div>
            </div>

            {/* Contenu textuel scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm font-semibold">
                <Calendar size={16} className="text-brand-green shrink-0" />
                <span>{t(`journal.articles.${selectedArticle.id}.date`)}</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-dark uppercase leading-tight">
                {t(`journal.articles.${selectedArticle.id}.title`)}
              </h2>

              <p className="text-brand-dark font-medium text-sm sm:text-base border-l-4 border-brand-green pl-4 italic bg-gray-50 py-3 rounded-r">
                {t(`journal.articles.${selectedArticle.id}.excerpt`)}
              </p>

              <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-3 pt-2">
                <p>
                  {t(`journal.articles.${selectedArticle.id}.content`)}
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
                {t('journal.close')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}