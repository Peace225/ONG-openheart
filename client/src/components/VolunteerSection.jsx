import { Link } from 'react-router-dom';
import { HeartHandshake, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function VolunteerSection() {
  const benefits = [
    "Participez à des missions concrètes sur le terrain",
    "Développez de nouvelles compétences professionnelles",
    "Intégrez un réseau de citoyens engagés",
    "Faites une différence visible en Côte d'Ivoire"
  ];

  return (
    <section className="py-28 lg:py-40 px-6 lg:px-12 bg-white overflow-hidden">
      
      {/* Conteneur principal avec effet "Carte XXL" et animations fluides */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1440px] mx-auto bg-[#0B0F0E] rounded-[3rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.15)] relative"
      >
        
        {/* Lumières d'ambiance décoratives */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-green-500/10 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
          
          {/* Colonne de texte */}
          <div className="p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 text-green-400 font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-8 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 w-fit"
            >
              <HeartHandshake size={20} className="text-green-400" />
              <span>S'engager avec nous</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6"
            >
              Votre énergie peut <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-300">
                transformer des vies
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg mb-10 font-normal leading-relaxed"
            >
              Nous sommes toujours à la recherche de personnes passionnées, prêtes à mettre leurs talents au service d'une cause noble. Que vous soyez étudiant, professionnel ou retraité, vous avez un rôle essentiel à jouer.
            </motion.p>
            
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 mb-12"
            >
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-200 font-medium text-base sm:text-lg">
                  <div className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle2 className="text-green-400" size={16} />
                  </div>
                  {benefit}
                </li>
              ))}
            </motion.ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/benevolats">
                <Button variant="primary" className="px-10 py-5 rounded-full text-base sm:text-lg w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(34,197,94,0.3)]">
                  Soumettre ma candidature
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Colonne Image avec effet de zoom fluide au survol */}
          <div className="relative min-h-[420px] lg:min-h-full overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0B0F0E] lg:via-transparent lg:to-transparent z-10 opacity-70"></div>
            <img 
              src="/images/volunteer.jpg" 
              alt="Groupe de bénévoles enthousiastes" 
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[1500ms] group-hover:scale-110"
            />
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}