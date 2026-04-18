import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const slides = [
  {
    id: 1,
    image: "/images/slide1.jpg", // <-- Chemin direct vers public/images/
    title: "Agir pour notre planète",
    subtitle: "Rejoignez notre lutte active contre le réchauffement climatique et protégeons notre écosystème.",
    cta1: "Nos Actions",
    link1: "/ecologie",
    cta2: "Faire un don",
    link2: "/contact"
  },
  {
    id: 2,
    image: "/images/slide2.jpg", // <-- Chemin direct vers public/images/
    title: "Bien-être socio-économique",
    subtitle: "Ensemble, bâtissons un avenir durable et solidaire pour les communautés les plus vulnérables.",
    cta1: "Découvrir les projets",
    link1: "/projets",
    cta2: "S'engager",
    link2: "/benevolats"
  },
  {
    id: 3,
    image: "/images/slide3.jpg", // <-- Chemin direct vers public/images/
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

  // Défilement automatique toutes les 6 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-dark">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image de fond avec effet de zoom très lent */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={slide.image} 
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>

          {/* Calque d'assombrissement pour la lisibilité (Gradient) */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" />
          <div className="absolute inset-0 bg-black/30" /> {/* Filtre global */}

          {/* Contenu Texte */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-4xl pt-20">
              <h1 
                className={`text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-6 transition-all duration-1000 delay-300 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {slide.title}
              </h1>
              <p 
                className={`text-lg md:text-2xl text-gray-200 font-medium mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {slide.subtitle}
              </p>
              
              {/* Boutons d'action */}
              <div 
                className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <Link to={slide.link1}>
                  <Button variant="primary" className="w-full sm:w-auto px-10 py-5 text-lg">
                    {slide.cta1}
                  </Button>
                </Link>
                <Link to={slide.link2}>
                  <Button variant="outline" className="w-full sm:w-auto px-10 py-5 text-lg border-white text-white hover:bg-white hover:text-brand-dark">
                    {slide.cta2}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Flèches de navigation (Desktop uniquement) */}
      <div className="hidden md:flex absolute inset-y-0 left-8 items-center z-20">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 flex items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm hover:bg-brand-green hover:border-brand-green transition-all duration-300"
        >
          <ChevronLeft size={30} />
        </button>
      </div>
      <div className="hidden md:flex absolute inset-y-0 right-8 items-center z-20">
        <button 
          onClick={nextSlide}
          className="w-14 h-14 flex items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm hover:bg-brand-green hover:border-brand-green transition-all duration-300"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Indicateurs de pagination (Dots) */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide 
                ? 'w-12 h-2 bg-brand-green' 
                : 'w-2 h-2 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
      
    </div>
  );
}