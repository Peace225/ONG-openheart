import { Link } from 'react-router-dom';
import { ArrowUpRight, Leaf, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const actions = [
  {
    title: "Initiatives pour le bien-être socio-économique",
    description: "Favoriser l'éducation, la santé et l'autonomisation des femmes et des enfants pour un développement durable et équitable.",
    icon: Heart,
    image: "/images/action-bien-etre.jpeg", 
    link: "/bien-etre",
    stats: "15+ Projets actifs"
  },
  {
    title: "Lutte contre le réchauffement climatique",
    description: "Préserver la biodiversité et nos forêts tout en sensibilisant les populations, pour bâtir une Côte d'Ivoire plus verte.",
    icon: Leaf,
    image: "/images/action-ecologie.jpeg", 
    link: "/ecologie",
    stats: "50k Arbres plantés"
  }
];

export default function ActionAreas() {
  return (
    <section className="relative py-28 lg:py-40 bg-white overflow-hidden">
      
      {/* Lumière d'ambiance subtile */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-green-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header de section asymétrique avec animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 lg:mb-24 gap-8"
        >
          <div className="max-w-2xl">
            <span className="inline-block text-green-600 font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 px-3.5 py-1.5 bg-green-50 rounded-full border border-green-100">
              Domaines d'intervention
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.05]">
              Nos actions pour <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                le changement.
              </span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-gray-500 font-medium max-w-sm text-left lg:text-right text-base leading-relaxed">
              Nous déployons des solutions innovantes et durables pour répondre aux défis majeurs de notre époque.
            </p>
          </div>
        </motion.div>

        {/* Grille des domaines d'action épurée & haut de gamme */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {actions.map((action, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              key={index} 
              className="group relative overflow-hidden rounded-[2.5rem] bg-gray-900 aspect-[16/11] flex items-end p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] cursor-default"
            >
              {/* Image de fond avec effet de zoom fluide */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={action.image} 
                  alt={action.title} 
                  className="w-full h-full object-cover opacity-60 transition-transform duration-[1500ms] group-hover:scale-110"
                />
                {/* Dégradé moderne pour lisibilité parfaite */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/40 to-transparent"></div>
              </div>

              {/* Contenu de la carte */}
              <div className="relative z-10 w-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center rounded-2xl text-green-400 transition-transform duration-500 group-hover:scale-110">
                    <action.icon size={28} strokeWidth={1.8} />
                  </div>
                  <span className="text-green-400 font-semibold text-xs tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                    {action.stats}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 leading-snug">
                  {action.title}
                </h3>
                
                <p className="text-gray-300/90 text-sm sm:text-base mb-8 max-w-md font-normal leading-relaxed">
                  {action.description}
                </p>

                <Link 
                  to={action.link} 
                  className="inline-flex items-center gap-3 text-white font-semibold tracking-wide group/btn"
                >
                  <span className="border-b border-green-500 pb-0.5 group-hover/btn:border-white transition-colors duration-300">
                    En savoir plus
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:bg-green-500">
                    <ArrowUpRight size={16} className="text-white transition-transform duration-300 group-hover/btn:rotate-45" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bloc de réassurance élégant */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 sm:p-10 rounded-[2rem] border border-gray-100 bg-[#FAFAFA] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm"
        >
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                  <img src={`/images/avatar${i}.jpg`} alt={`Avatar bénévole ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm sm:text-base font-bold text-gray-900 tracking-tight">
              Plus de <span className="text-green-600">250 bénévoles</span> déjà engagés à nos côtés
            </p>
          </div>
          <Link to="/contact">
            <Button variant="outline" className="px-8 py-4 rounded-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 font-semibold shadow-sm">
              Nous rejoindre
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}