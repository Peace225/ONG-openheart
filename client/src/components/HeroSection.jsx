import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const slides = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    title: "Agir pour notre planète",
    subtitle: "Rejoignez notre lutte active contre le réchauffement climatique et protégeons notre écosystème.",
    cta1: "Nos Actions",
    link1: "/ecologie",
    cta2: "Faire un don",
    link2: "/contact"
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    title: "Bien-être socio-économique",
    subtitle: "Ensemble, bâtissons un avenir durable et solidaire pour les communautés les plus vulnérables.",
    cta1: "Découvrir les projets",
    link1: "/projets",
    cta2: "S'engager",
    link2: "/benevolats"
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    title: "Devenez le changement",
    subtitle: "Chaque geste compte. Engagez-vous en tant que bénévole et donnez vie à notre vision verte.",
    cta1: "Rejoindre l'équipe",
    link1: "/benevolats",
    cta2: "Nous contacter",
    link2: "/contact"
  },
  {
    id: 4,
    image: "/images/slide4.jpg",
    title: "Difficile accès à l'eau potable",
    subtitle: "L'eau potable est un besoin vital. Mobilisons-nous pour installer des forages et garantir une eau saine à ceux qui en manquent.",
    cta1: "Projets Eau",
    link1: "/projets",
    cta2: "Faire un don",
    link2: "/contact"
  },
  {
    id: 5,
    image: "/images/slide5.jpg",
    title: "La souffrance des femmes en milieu rural",
    subtitle: "Face aux corvées, à l’isolement et à la précarité, agissons pour soutenir et alléger le quotidien des femmes de nos campagnes.",
    cta1: "Soutenir les Femmes",
    link1: "/projets",
    cta2: "S'engager",
    link2: "/benevolats"
  },
  {
    id: 6,
    image: "/images/slide6.jpg",
    title: "La souffrance des femmes en milieu rural",
    subtitle: "Face aux lourdes corvées, à l’isolement et à la précarité, agissons pour alléger et transformer le quotidien des femmes de nos campagnes.",
    cta1: "Soutenir les Femmes",
    link1: "/projets",
    cta2: "S'engager",
    link2: "/benevolats"
  },
  {
    id: 7,
    image: "/images/slide7.jpg",
    title: "La souffrance des femmes en milieu rural",
    subtitle: "Face aux lourdes corvées, à l’isolement et à la précarité, agissons pour alléger et transformer le quotidien des femmes de nos campagnes.",
    cta1: "Aide d'Urgence",
    link1: "/projets",
    cta2: "Soutenir",
    link2: "/contact"
  },
  {
    id: 8,
    image: "/images/slide8.jpg",
    title: "La souffrance des femmes en milieu rural",
    subtitle: "Face aux lourdes corvées, à l’isolement et à la précarité, agissons pour alléger et transformer le quotidien des femmes de nos campagnes.",
    cta1: "Planter un arbre",
    link1: "/ecologie",
    cta2: "Rejoindre",
    link2: "/benevolats"
  },
  {
    id: 9,
    image: "/images/slide9.jpg",
    title: "Dons en nature et en espèces aux femmes nourrices",
    subtitle: "Apportons une aide matérielle, alimentaire et financière directe pour soutenir la santé des jeunes mamans et de leurs nouveau-nés.",
    cta1: "Faire un don",
    link1: "/contact",
    cta2: "Nos Actions",
    link2: "/projets"
  },
  {
    id: 10,
    image: "/images/slide10.jpg",
    title: "Alerte à la pauvreté",
    subtitle: "Face à l'extrême précarité qui frappe tant de familles, unissons nos forces pour apporter une aide d'urgence et redonner espoir.",
    cta1: "Agir maintenant",
    link1: "/projets",
    cta2: "Faire un don",
    link2: "/contact"
  },
  {
    id: 11,
    image: "/images/slide11.jpg",
    title: "Modes traditionnels d'accès à la nourriture",
    subtitle: "Préservons les pratiques vivrières ancestrales et soutenons les méthodes de subsistance locales face aux défis alimentaires.",
    cta1: "Découvrir",
    link1: "/projets",
    cta2: "Nous soutenir",
    link2: "/contact"
  },
  {
    id: 12,
    image: "/images/slide12.jpg",
    title: "Modes traditionnels d'accès à la nourriture",
    subtitle: "Grâce à votre engagement et vos dons, chaque action transforme durablement le quotidien.",
    cta1: "Nos Réalisations",
    link1: "/projets",
    cta2: "Faire un don",
    link2: "/contact"
  },
  {
    id: 13,
    image: "/images/slide13.jpg",
    title: "Dons en espèces aux structures pour personnes handicapées",
    subtitle: "Soutenons financièrement les centres spécialisés pour améliorer la prise en charge, l'accessibilité et la dignité des personnes en situation de handicap.",
    cta1: "Faire un don",
    link1: "/contact",
    cta2: "Nos Actions",
    link2: "/projets"
  },
  {
    id: 14,
    image: "/images/slide14.jpg",
    title: "Vie précaire et besoin d'aide",
    subtitle: "Face aux conditions de vie difficiles et au dénuement extrême, apportons un soutien indispensable et redonnons de la dignité à ceux qui en ont le plus besoin.",
    cta1: "Agir maintenant",
    link1: "/projets",
    cta2: "Faire un don",
    link2: "/contact"
  },
  {
    id: 15,
    image: "/images/slide15.jpg",
    title: "Lutte contre la pollution plastique",
    subtitle: "Nettoyons nos espaces de vie, éliminons les déchets plastiques et sensibilisons les communautés pour préserver notre environnement.",
    cta1: "Nos Collectes",
    link1: "/ecologie",
    cta2: "Devenir Bénévole",
    link2: "/benevolats"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // Défilement automatique toutes les 7 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Support du glissement tactile (Swipe mobile)
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) nextSlide();
    if (distance < -45) prevSlide();
  };

  return (
    <div 
      className="relative h-[100dvh] min-h-[560px] w-full overflow-hidden bg-neutral-900 select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Image d'arrière-plan */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={slide.image} 
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[15000ms] ease-out will-change-transform ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>

            {/* Dégradé doux et léger */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

            {/* Contenu Texte & Boutons centré et adaptatif */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-8 pb-16 pt-10 sm:py-0">
              <div className="max-w-4xl mx-auto flex flex-col items-center">
                
                {/* Titre responsive */}
                <h1 
                  className={`text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white uppercase tracking-tight mb-3 sm:mb-6 leading-tight transition-all duration-[1000ms] ease-out delay-200 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] ${
                    isActive ? 'translate-y-0 opacity-100 filter-none' : 'translate-y-8 opacity-0 blur-sm'
                  }`}
                >
                  {slide.title}
                </h1>
                
                {/* Sous-titre responsive */}
                <p 
                  className={`text-xs sm:text-base md:text-xl text-white font-medium mb-6 sm:mb-10 max-w-xl mx-auto leading-relaxed line-clamp-3 sm:line-clamp-none transition-all duration-[1000ms] ease-out delay-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  {slide.subtitle}
                </p>
                
                {/* Boutons d'action adaptés sur mobile */}
                <div 
                  className={`flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto transition-all duration-[1000ms] ease-out delay-600 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  <Link to={slide.link1} className="w-full sm:w-auto">
                    <Button 
                      variant="primary" 
                      className="w-full sm:w-auto px-6 sm:px-10 py-2.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-full shadow-2xl hover:shadow-brand-green/40 active:scale-95 transition-all duration-300"
                    >
                      {slide.cta1}
                    </Button>
                  </Link>
                  <Link to={slide.link2} className="w-full sm:w-auto">
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto px-6 sm:px-10 py-2.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-full border-2 border-white text-white bg-black/30 backdrop-blur-md hover:bg-white hover:text-black hover:border-white active:scale-95 transition-all duration-300 shadow-lg shadow-black/40"
                    >
                      {slide.cta2}
                    </Button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Flèches de navigation visibles uniquement sur écran moyen/large (Desktop/Tablette) */}
      <div className="hidden md:flex absolute inset-y-0 left-4 sm:left-6 items-center z-20">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full border border-white/40 text-white bg-black/40 backdrop-blur-md hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg shadow-black/30"
          aria-label="Diapositive précédente"
        >
          <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2} />
        </button>
      </div>

      <div className="hidden md:flex absolute inset-y-0 right-4 sm:right-6 items-center z-20">
        <button 
          onClick={nextSlide}
          className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full border border-white/40 text-white bg-black/40 backdrop-blur-md hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg shadow-black/30"
          aria-label="Diapositive suivante"
        >
          <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2} />
        </button>
      </div>

      {/* Pagination ultra-compacte (parfaitement alignée sur smartphone) */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-1.5 sm:gap-2.5 px-4 pointer-events-auto">
        
        {/* Barre des 15 indicateurs miniatures */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 max-w-[95%] overflow-x-hidden">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="py-1 focus:outline-none"
              aria-label={`Aller à la diapositive ${index + 1}`}
            >
              <div 
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-4 sm:w-8 bg-white shadow-sm shadow-white/90' 
                    : 'w-1 sm:w-2 bg-white/40 hover:bg-white/80'
                }`} 
              />
            </button>
          ))}
        </div>

        {/* Compteur numérique épuré : 01 / 15 */}
        <div className="text-[10px] sm:text-xs font-mono tracking-widest text-white/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          <span className="text-white font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="mx-1 text-white/50">/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>

      </div>
      
    </div>
  );
}