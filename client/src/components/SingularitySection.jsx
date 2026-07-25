import { UserPlus, Leaf, Handshake, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const singularityFeatures = [
  {
    icon: UserPlus,
    title: "Une action multisectorielle",
    description: "Nous intervenons dans de nombreux domaines essentiels : éducation, santé, droits humains, accès à l’eau potable, sécurité alimentaire, droits des femmes, droits des enfants, et soutien aux personnes vulnérables.",
    // Couleurs par défaut (Teintes douces)
    baseBg: "bg-pink-50/60",
    borderColor: "border-pink-100",
    baseIconColor: "text-pink-600",
    baseIconBg: "bg-pink-100/80",
    // Couleurs au survol (Dégradés vibrants)
    gradientHover: "from-pink-500 to-rose-500",
    shadowHover: "hover:shadow-pink-500/30",
  },
  {
    icon: Leaf,
    title: "Un engagement environnemental",
    description: "Notre lutte contre le changement climatique s’articule autour de la conservation des forêts, de la préservation de la biodiversité et de la promotion d’écosystèmes durables en Côte d'Ivoire.",
    // Couleurs par défaut (Teintes douces)
    baseBg: "bg-green-50/60",
    borderColor: "border-green-100",
    baseIconColor: "text-green-600",
    baseIconBg: "bg-green-100/80",
    // Couleurs au survol (Dégradés vibrants)
    gradientHover: "from-green-500 to-emerald-600",
    shadowHover: "hover:shadow-green-500/30",
  },
  {
    icon: Handshake,
    title: "Des actions de terrain concrètes",
    description: "Nous travaillons main dans la main avec les citoyens, les gouvernements, les ONG partenaires et les entreprises pour construire ensemble des solutions durables et adaptées aux réalités locales.",
    // Couleurs par défaut (Teintes douces)
    baseBg: "bg-teal-50/60",
    borderColor: "border-teal-100",
    baseIconColor: "text-teal-600",
    baseIconBg: "bg-teal-100/80",
    // Couleurs au survol (Dégradés vibrants)
    gradientHover: "from-teal-500 to-emerald-400",
    shadowHover: "hover:shadow-teal-500/30",
  },
];

// Configuration des animations Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }, 
  },
};

export default function SingularitySection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-24"
        >
          <span className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-semibold tracking-[0.2em] uppercase text-green-700 bg-green-50 border border-green-100 rounded-full">
            Notre Singularité
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2]">
            Une approche <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">humaine et globale</span> pour un impact réel
          </h2>
        </motion.div>

        {/* Grille de caractéristiques */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {singularityFeatures.map((feature, index) => (
            <motion.div 
              variants={cardVariants}
              key={index} 
              // La carte a une couleur douce par défaut
              className={`group relative p-10 lg:p-12 ${feature.baseBg} rounded-[2rem] border ${feature.borderColor} shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl ${feature.shadowHover} overflow-hidden cursor-default`}
            >
              {/* Le fond coloré dégradé qui "remplit" la carte au survol */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradientHover} opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 z-0`} />

              {/* Contenu (z-10 pour rester par-dessus le fond qui apparait) */}
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Icône qui devient blanche avec un fond semi-transparent au survol */}
                <div className={`w-16 h-16 mb-8 rounded-2xl flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-white/20 group-hover:shadow-lg ${feature.baseIconBg}`}>
                  <feature.icon size={32} strokeWidth={1.5} className={`transition-colors duration-500 ${feature.baseIconColor} group-hover:text-white`} />
                </div>
                
                {/* Titre qui passe du sombre au blanc pur */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-5 transition-colors duration-500 group-hover:text-white">
                  {feature.title}
                </h3>
                
                {/* Description qui passe du gris au blanc cassé pour la lisibilité */}
                <p className="text-gray-600 font-medium leading-relaxed text-[15px] lg:text-base flex-grow transition-colors duration-500 group-hover:text-white/90">
                  {feature.description}
                </p>

                {/* Flèche d'action (entièrement blanche sur le fond coloré) */}
                <div className="mt-8 flex items-center gap-2 opacity-0 -translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="text-sm font-bold text-white">En savoir plus</span>
                  <ArrowRight size={16} className="text-white" />
                </div>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}