import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "L'approche d'Open Heart est unique. Ils ne se contentent pas de donner, ils accompagnent les communautés vers une véritable autonomie. J'ai vu des vies changer en quelques mois.",
    author: "Aminata Diallo",
    role: "Bénévole terrain",
    image: "/images/testi1.jpg" 
  },
  {
    id: 2,
    content: "Grâce au programme de reboisement, notre village a pu restaurer une grande partie de sa forêt sacrée. C'est un héritage inestimable que nous laissons à nos enfants.",
    author: "Kouassi Jean-Marc",
    role: "Chef de projet communautaire",
    image: "/images/testi2.jpg" 
  },
  {
    id: 3,
    content: "Soutenir Green Vision, c'est investir dans l'avenir de la Côte d'Ivoire. Leur transparence et leur efficacité sur le terrain sont exemplaires. Un partenaire de confiance.",
    author: "Sarah Martin",
    role: "Donatrice et Partenaire",
    image: "/images/testi3.jpg" 
  },
  {
    id: 4,
    content: "L'impact de leurs campagnes de sensibilisation dans les écoles est remarquable. Les enfants deviennent de véritables ambassadeurs de l'écologie à la maison.",
    author: "M. Traoré",
    role: "Directeur d'école",
    image: "/images/testi4.jpg" 
  }
];

export default function TestimonialSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative py-28 lg:py-40 bg-[#FAFAFA] overflow-hidden">
      
      {/* Lumière d'ambiance subtile */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-green-50/80 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 mb-16 lg:mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-green-600 font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 px-3.5 py-1.5 bg-green-50 rounded-full border border-green-100">
            Témoignages
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.05]">
            La voix de ceux qui <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              vivent le changement
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Piste de défilement fluide avec animation Tailwind */}
        <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] px-4 w-max">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`} 
              className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100/80 w-[360px] sm:w-[440px] flex-shrink-0 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              {/* Icône de citation épurée en arrière-plan */}
              <Quote 
                size={70} 
                className="absolute top-6 right-6 text-gray-50/80 rotate-12 z-0 pointer-events-none" 
              />
              
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-gray-600 text-base sm:text-lg font-normal leading-relaxed mb-10 flex-grow">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-500/20 flex-shrink-0 shadow-sm">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold tracking-tight text-sm sm:text-base">
                      {testimonial.author}
                    </h4>
                    <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dégradés latéraux pour estomper les bords */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}