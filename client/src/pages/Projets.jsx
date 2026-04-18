import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const projectsList = [
  {
    title: "Reforestation à l'Ouest",
    desc: "Restauration de 50 hectares de forêt classée pour lutter contre l'érosion des sols et préserver la biodiversité.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200",
    status: "En cours"
  },
  {
    title: "Centre de Santé Rural",
    desc: "Construction et équipement d'un centre de santé primaire pour faciliter l'accès aux soins des populations vulnérables.",
    image: "https://images.unsplash.com/photo-1511174511562-5f7f185854c8?q=80&w=1200",
    status: "Terminé"
  },
  {
    title: "Formation Digital Women",
    desc: "Programme d'initiation au numérique pour 100 jeunes femmes afin de favoriser leur insertion socio-professionnelle.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200",
    status: "Nouveau"
  }
];

export default function Projets() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Notre Impact</span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-none mb-8">
            Nos projets <br /> <span className="text-brand-green">sur le terrain</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Découvrez comment nous transformons les dons et l'engagement de nos bénévoles en résultats concrets pour les communautés locales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsList.map((project, index) => (
            <Card 
              key={index} 
              title={project.title} 
              description={project.desc} 
              imageUrl={project.image}
            >
              <div className="flex justify-between items-center mt-6">
                <span className="text-xs font-black uppercase tracking-widest text-brand-green bg-green-50 px-3 py-1">
                  {project.status}
                </span>
                <Button variant="outline" className="!px-4 !py-2 text-xs">Détails</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}