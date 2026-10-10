import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
// Importation de la section des projets court et long termes
import ProjectsRoadmapSection from '../components/ProjectsRoadmapSection';

const projectsList = [
  {
    id: 1,
    category: "Solidarité",
    title: "Don en espèces à plusieurs structures pour personnes handicapées",
    excerpt: "Remise officielle de dons financiers et accompagnement de plusieurs structures dédiées à la prise en charge des personnes en situation de handicap.",
    content: "Dans le cadre de nos engagements en faveur de l'inclusion sociale et du soutien aux populations vulnérables, nous avons procédé à une remise officielle de fonds à trois centres d'accueil majeurs. Cette aide financière permettra de moderniser leurs équipements orthopédiques, d'assurer le renouvellement du matériel pédagogique et de financer les frais médicaux et d'assistance des résidents les plus démunis. Les responsables de structures ont chaleureusement salué cette initiative citoyenne qui renforce directement la dignité et l'autonomie des bénéficiaires.",
    date: "15 Avril 2024",
    image: "/images/slide13.jpg",
    slug: "don-especes-structures-personnes-handicapees"
  },
  {
    id: 2,
    category: "Solidarité",
    title: "Don en espèces et en nature à plusieurs mères nourricières",
    excerpt: "Distribution de vivres, kits de première nécessité et appui financier pour soutenir plusieurs mères nourricières et leurs nourrissons.",
    content: "Cette campagne solidaire a réuni bénévoles et professionnels de santé autour de mères célibataires et de familles en situation précaire. Plus de 120 kits composés de produits d'hygiène infantile, laits maternisés, couches, vivres de base et enveloppes d'aide directe ont été distribués. Au-delà de l'aide d'urgence, des ateliers de sensibilisation à la nutrition infantile et à la santé maternelle ont été animés afin de fournir des repères durables aux jeunes mères.",
    date: "02 Avril 2023",
    image: "/images/slide9.jpg",
    slug: "don-en-especes-et-en-nature-a-plusieurs-meres-nourricieres"
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
    <div className="pt-24 sm:pt-32 pb-16 min-h-screen bg-white">
      {/* --- SECTION 1 : Projets phares & réalisations terrain --- */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-brand-green font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
            Notre Impact
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-dark uppercase tracking-tight leading-tight mb-6 sm:mb-8">
            Nos projets <br className="hidden sm:inline" /> 
            <span className="text-brand-green">sur le terrain</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            Découvrez comment nous transformons les dons et l'engagement de nos bénévoles en résultats concrets pour les communautés locales.
          </p>
        </div>
        
        {/* Grille des réalisations immédiates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {projectsList.map((project, index) => (
            <Card 
              key={index} 
              title={project.title} 
              description={project.desc} 
              imageUrl={project.image}
            >
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                <span className="text-xs font-black uppercase tracking-widest text-brand-green bg-green-50 px-3 py-1.5 rounded">
                  {project.status}
                </span>
                <Button variant="outline" className="!px-4 !py-2 text-xs">
                  Détails
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* --- SECTION 2 : Feuille de route (Projets à court & long termes) --- */}
      <ProjectsRoadmapSection />
    </div>
  );
}