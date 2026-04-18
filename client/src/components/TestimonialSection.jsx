import { Quote } from 'lucide-react';

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
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            TÉMOIGNAGES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark uppercase tracking-tighter leading-tight">
            La voix de ceux qui <br />
            <span className="text-brand-green">vivent le changement</span>
          </h2>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Piste de défilement avec l'animation Tailwind v4 */}
        <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] px-4 w-max">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`} 
              className="bg-white p-10 shadow-lg border-t-4 border-brand-green w-[350px] md:w-[450px] flex-shrink-0 relative"
            >
              <Quote 
                size={80} 
                className="absolute top-6 right-6 text-gray-100 rotate-12 z-0" 
              />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-gray-600 text-lg font-medium leading-relaxed mb-10 flex-grow italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-green flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-brand-dark font-black uppercase tracking-wider text-sm">
                      {testimonial.author}
                    </h4>
                    <p className="text-brand-green font-bold text-xs uppercase tracking-widest mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}