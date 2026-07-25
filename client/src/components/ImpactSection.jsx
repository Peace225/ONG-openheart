import { TreePine, Users, FolderHeart, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const impacts = [
  {
    id: 1,
    icon: TreePine,
    number: "50 000+",
    label: "Arbres plantés",
    description: "Dans le cadre de notre lutte pour la reforestation."
  },
  {
    id: 2,
    icon: Users,
    number: "15 000+",
    label: "Vies impactées",
    description: "Personnes aidées via nos programmes socio-économiques."
  },
  {
    id: 3,
    icon: FolderHeart,
    number: "120+",
    label: "Projets réalisés",
    description: "Des actions concrètes menées à terme sur le terrain."
  },
  {
    id: 4,
    icon: Globe2,
    number: "300+",
    label: "Bénévoles actifs",
    description: "Une communauté dévouée à travers la Côte d'Ivoire."
  }
];

// Configuration des animations de la grille (stagger children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Courbe smooth type Apple / Vercel
    },
  },
};

export default function ImpactSection() {
  return (
    <section className="relative py-32 lg:py-44 bg-[#0B0F0E] overflow-hidden">
      
      {/* 1. IMAGE DE FOND AVEC EFFET PARALLAXE VISUEL */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity scale-105"
        style={{ backgroundImage: "url('/images/impact-bg.jpg')" }}
      />
      
      {/* 2. DÉGRADÉ DE PROFONDEUR SOPHISTIQUÉ */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B0F0E] via-[#0B0F0E]/80 to-[#0B0F0E]" />

      {/* 3. LUMIÈRE D'AMBIANCE FLOUTÉE (ORB) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* En-tête de la section animé */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
        >
          <span className="inline-block text-green-400 font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            Notre Impact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
            Des chiffres qui <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-300">
              changent le monde
            </span>
          </h2>
        </motion.div>

        {/* Grille des statistiques animée (Framer Motion) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {impacts.map((item) => (
            <motion.div 
              variants={cardVariants}
              key={item.id} 
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 lg:p-10 rounded-[2.5rem] transition-all duration-700 ease-out hover:-translate-y-2 hover:bg-white/[0.07] hover:border-green-500/40 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] flex flex-col items-center text-center overflow-hidden cursor-default"
            >
              {/* Effet de lueur interne au survol */}
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />
              
              {/* Icône avec double cercle et effet de zoom */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-green-500/50 group-hover:bg-green-500/10">
                  <item.icon size={28} strokeWidth={1.8} className="text-green-400 transition-colors duration-500" />
                </div>
              </div>

              {/* Chiffre avec dégradé subtil */}
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">
                {item.number}
              </h3>

              {/* Label */}
              <h4 className="text-base font-bold text-gray-200 uppercase tracking-wider mb-3 transition-colors duration-300 group-hover:text-green-400">
                {item.label}
              </h4>

              {/* Description épurée */}
              <p className="text-gray-400 text-sm font-medium leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}