import { useState, useEffect } from 'react';
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
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Défilement automatique toutes les 7 secondes pour un rythme plus posé
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image de fond avec effet de zoom ultra lent (Ken Burns) */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={slide.image} 
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[20000ms] ease-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>

          {/* Calques d'assombrissement premium */}
          <div className="absolute inset-0 bg-black/40" /> 
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Contenu Texte */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-5xl pt-24 flex flex-col items-center">
              
              <h1 
                className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight mb-8 transition-all duration-[1200ms] ease-out delay-300 ${
                  index === currentSlide ? 'translate-y-0 opacity-100 filter-none' : 'translate-y-12 opacity-0 blur-sm'
                }`}
              >
                {slide.title}
              </h1>
              
              <p 
                className={`text-lg md:text-2xl text-white/90 font-light mb-14 max-w-3xl mx-auto leading-relaxed transition-all duration-[1200ms] ease-out delay-500 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                {slide.subtitle}
              </p>
              
              {/* Boutons d'action */}
              <div 
                className={`flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-[1200ms] ease-out delay-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <Link to={slide.link1}>
                  <Button variant="primary" className="w-full sm:w-auto px-10 py-4 text-sm font-semibold tracking-widest uppercase rounded-full shadow-2xl hover:shadow-brand-green/20 hover:-translate-y-1 transition-all duration-300">
                    {slide.cta1}
                  </Button>
                </Link>
                <Link to={slide.link2}>
                  <Button variant="outline" className="w-full sm:w-auto px-10 py-4 text-sm font-semibold tracking-widest uppercase rounded-full border border-white/40 text-white backdrop-blur-md hover:bg-white hover:text-black hover:border-white hover:-translate-y-1 transition-all duration-300">
                    {slide.cta2}
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Flèches de navigation (Desktop uniquement) */}
      <div className="hidden md:flex absolute inset-y-0 left-6 items-center z-20 group">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 flex items-center justify-center rounded-full border border-white/20 text-white/70 backdrop-blur-md opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 hover:bg-white/10 hover:text-white hover:border-white transition-all duration-500"
          aria-label="Diapositive précédente"
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>
      </div>
      <div className="hidden md:flex absolute inset-y-0 right-6 items-center z-20 group">
        <button 
          onClick={nextSlide}
          className="w-14 h-14 flex items-center justify-center rounded-full border border-white/20 text-white/70 backdrop-blur-md opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 hover:bg-white/10 hover:text-white hover:border-white transition-all duration-500"
          aria-label="Diapositive suivante"
        >
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Indicateurs de pagination (Dots minimalistes) */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-700 ease-out rounded-full ${
              index === currentSlide 
                ? 'w-10 h-1.5 bg-white' 
                : 'w-2 h-1.5 bg-white/30 hover:bg-white/60 hover:scale-125'
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
      
    </div>
  );
}