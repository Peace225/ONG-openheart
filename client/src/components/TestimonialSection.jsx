import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

// On garde uniquement les identifiants et les images
const testimonialsData = [
  { id: 1, image: "/images/testi1.jpg" },
  { id: 2, image: "/images/testi2.jpg" },
  { id: 3, image: "/images/testi3.jpg" },
  { id: 4, image: "/images/testi4.jpg" }
];

export default function TestimonialSection() {
  const { t } = useTranslation();
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

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
            {t('testimonialSection.badge')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.05]">
            {t('testimonialSection.title.part1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              {t('testimonialSection.title.part2')}
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
                  "{t(`testimonialSection.testimonials.${testimonial.id}.content`)}"
                </p>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-500/20 flex-shrink-0 shadow-sm">
                    <img 
                      src={testimonial.image} 
                      alt={t(`testimonialSection.testimonials.${testimonial.id}.author`)} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold tracking-tight text-sm sm:text-base">
                      {t(`testimonialSection.testimonials.${testimonial.id}.author`)}
                    </h4>
                    <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mt-0.5">
                      {t(`testimonialSection.testimonials.${testimonial.id}.role`)}
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