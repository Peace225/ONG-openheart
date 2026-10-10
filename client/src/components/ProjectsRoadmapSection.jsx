import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Clock, ArrowRight, X, Heart, Handshake } from 'lucide-react';
import Button from './ui/Button';

const projectsData = [
  // ==========================================
  // --- PROJETS COURT TERME (Impact Direct & Terrain) ---
  // ==========================================
  {
    id: 1,
    term: 'short',
    category: 'Éducation & Solidarité',
    title: 'Distribution de kits scolaires aux familles démunies',
    echeance: 'Rentrée 2026 - 2027',
    progress: 75,
    status: 'Collecte & Logistique',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
    description: 'Dotation complète en sacs, cahiers, stylos et manuels pédagogiques pour soulager la charge financière des parents vulnérables et garantir la scolarisation de chaque enfant.',
    cible: '1 500 élèves équipés',
    slug: 'distribution-kits-scolaires-familles-demunies'
  },
  {
    id: 2,
    term: 'short',
    category: 'Santé Publique',
    title: 'Campagnes de dépistage et prévention (Diabète, Hypertension, Cancer, etc.)',
    echeance: 'Campagnes en cours (2026 - 2027)',
    progress: 60,
    status: 'Caravanes médicales actives',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    description: 'Déploiement de caravanes médicales mobiles sillonnant communes et villages ivoiriens pour offrir bilans de glycémie, prise de tension, dépistages précoces et conseils hygiéno-diététiques gratuits.',
    cible: '+10 000 personnes dépistées',
    slug: 'campagnes-depistage-prevention-cote-divoire'
  },
  {
    id: 3,
    term: 'short',
    category: 'Environnement & Climat',
    title: 'Campagne de reboisement de plusieurs hectares',
    echeance: 'T2 2027',
    progress: 40,
    status: 'Pépinière & Préparation des sols',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
    description: 'Restauration des écosystèmes dégradés par la mise en terre communautaire d’arbres d’ombrage, d’essences forestières locales et d’arbres fruitiers, combinée à des ateliers de protection de la biodiversité.',
    cible: '50 hectares reboisés',
    slug: 'campagne-reboisement-hectares-foret'
  },
  {
    id: 4,
    term: 'short',
    category: 'Cadre de Vie & Famille',
    title: 'Aménagement d’espaces de jeux et de loisirs pour enfants et adultes',
    echeance: 'Fin 2027',
    progress: 30,
    status: 'Planification & Sécurisation',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop',
    description: 'Création d’aires de détente sécurisées comprenant modules ludiques et motricité pour les tout-petits, bancs ombragés et zones de socialisation intergénérationnelle en plein air.',
    cible: '3 espaces aménagés',
    slug: 'espace-jeux-loisirs-enfants-adultes'
  },

  // ==========================================
  // --- PROJETS LONG TERME (Grandes Infrastructures Durables) ---
  // ==========================================
  {
    id: 5,
    term: 'long',
    category: 'Infrastructure Éducative',
    title: 'Construction d’une école primaire de 6 classes',
    echeance: 'Horizon 2027 - 2028',
    progress: 25,
    status: 'Acquisition foncière & Plans',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    description: 'Édification d’un établissement scolaire éco-conçu de 6 salles de classe, avec bloc administratif, latrines hygiéniques séparées et cantine alimentée par panneaux solaires photovoltaïques.',
    cible: '300 enfants scolarisés/an',
    slug: 'construction-ecole-primaire-6-classes'
  },
  {
    id: 6,
    term: 'long',
    category: 'Santé Rurale',
    title: 'Construction de centres de santé en zone rurale',
    echeance: 'Horizon 2028',
    progress: 20,
    status: 'Études techniques & Partenariats',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    description: 'Création de dispensaires et maternités rurales de proximité afin d’assurer la prise en charge des urgences obstétricales, la vaccination des nourrissons et réduire les temps d’évacuation médicale.',
    cible: '15 000 villageois couverts',
    slug: 'construction-centres-sante-zones-rurales'
  },
  {
    id: 7,
    term: 'long',
    category: 'Hydraulique Villageoise',
    title: 'Construction d’un château d’eau potable',
    echeance: 'Horizon 2028 - 2029',
    progress: 15,
    status: 'Étude hydrogéologique',
    image: '/images/chato.jpg',
    description: 'Forage d’eau profonde couplé à un réservoir surélevé et un réseau de bornes fontaines publiques solaires, pour éradiquer les maladies d’origine hydrique et faciliter le quotidien des femmes.',
    cible: '5 000 habitants alimentés',
    slug: 'construction-chateau-deau-potable'
  },
  {
    id: 8,
    term: 'long',
    category: 'Sport & Jeunesse',
    title: 'Infrastructures sportives dans des villages péri-urbains',
    echeance: 'Horizon 2029',
    progress: 10,
    status: 'Identification des sites',
    image: '/images/sport.jpg',
    description: 'Aménagement de plateaux multisports (football à 7, basketball, handball) équipés de vestiaires pour encourager la pratique sportive, renforcer la cohésion sociale et détecter les jeunes talents.',
    cible: '2 complexes omnisports',
    slug: 'infrastructures-sportives-villages-peri-urbains'
  },
  {
    id: 9,
    term: 'long',
    category: 'Inclusion Numérique',
    title: 'Centre numérique communautaire multifonction',
    echeance: 'Vision 2029 - 2030',
    progress: 35,
    status: 'Conception technique & Équipements',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    description: 'Tiers-lieu technologique comprenant un parc d’ordinateurs connectés par fibre, un espace de coworking et des formations certifiantes au codage, à la bureautique et aux démarches administratives en ligne.',
    cible: '+2 500 jeunes formés/an',
    slug: 'centre-numerique-communautaire-multifonction'
  }
];

export default function ProjectsRoadmapSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Verrouille le défilement de la page arrière lorsque la modale est affichée
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedProject(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const filteredProjects = activeTab === 'all' 
    ? projectsData 
    : projectsData.filter((p) => p.term === activeTab);

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-[1440px] mx-auto">
        
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-green font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
              Feuille de route & Réalisations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark uppercase tracking-tight leading-tight">
              Nos Grands Projets <br className="hidden sm:inline" />
              <span className="text-brand-green">Court & Long termes</span>
            </h2>
          </div>

          {/* Onglets de filtrage */}
          <div className="flex bg-white p-1.5 rounded-xl border border-gray-200 self-start md:self-auto shadow-sm w-full sm:w-auto overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-brand-dark text-white shadow-sm'
                  : 'text-gray-600 hover:text-brand-dark hover:bg-gray-50'
              }`}
            >
              Tous ({projectsData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('short')}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'short'
                  ? 'bg-brand-green text-white shadow-sm'
                  : 'text-gray-600 hover:text-brand-green hover:bg-gray-50'
              }`}
            >
              Court terme (4)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('long')}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'long'
                  ? 'bg-brand-green text-white shadow-sm'
                  : 'text-gray-600 hover:text-brand-green hover:bg-gray-50'
              }`}
            >
              Long terme (5)
            </button>
          </div>
        </div>

        {/* Grille des 9 projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image carte : gestion portrait & paysage avec arrière-plan flouté */}
                <div 
                  className="relative h-56 sm:h-60 w-full overflow-hidden bg-gray-950 flex items-center justify-center cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image d'ambiance floutée */}
                  <img
                    src={project.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl scale-125 opacity-30"
                  />
                  {/* Image nette intégrale (non rognée) */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop";
                    }}
                    className="relative z-10 max-h-full max-w-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3.5 left-3.5 z-20 bg-brand-green/95 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Corps de la carte */}
                <div className="p-5 sm:p-6 pb-2">
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold mb-3">
                    <Clock size={14} className="text-brand-green shrink-0" />
                    <span>{project.echeance}</span>
                  </div>

                  {/* Titre cliquable */}
                  <h3 
                    title={project.title}
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-black text-brand-dark uppercase leading-snug mb-3 group-hover:text-brand-green transition-colors duration-200 line-clamp-2 cursor-pointer text-left"
                  >
                    {project.title}
                  </h3>

                  {/* Description résumée */}
                  <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bloc métrique & Bouton Pop-up */}
              <div className="px-5 sm:px-6 pb-6 pt-2">
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs mb-2.5">
                    <span className="inline-flex items-center gap-1.5 font-bold text-brand-dark">
                      <Target size={15} className="text-brand-green shrink-0" />
                      {project.cible}
                    </span>
                    <span className="text-gray-500 font-medium">
                      {project.status}
                    </span>
                  </div>

                  {/* Barre de progression */}
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mb-5 overflow-hidden">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-700 ${
                        project.term === 'short' ? 'bg-brand-green' : 'bg-brand-dark'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>

                  {/* Bouton déclenchant la modale */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-green transition-colors cursor-pointer text-left"
                  >
                    <span>Lire les détails & Soutenir</span>
                    <ArrowRight size={15} className="transform group-hover:translate-x-1.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bannière d'appel à action */}
        <div className="mt-12 sm:mt-16 bg-brand-dark text-white rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
              Contribuez à l'un de ces chantiers
            </h3>
            <p className="text-gray-300 text-sm sm:text-base font-normal">
              Partenariats institutionnels, apports de matériaux, compétences médicales ou dons directs : chaque soutien accélère notre calendrier de livraison.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="w-full justify-center bg-brand-green hover:bg-white hover:text-brand-dark text-white py-3 px-8 transition-colors">
                Devenir partenaire
              </Button>
            </Link>
            <Link to="/dons" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full justify-center border-gray-600 text-white hover:border-white py-3 px-8 transition-colors">
                Faire un don
              </Button>
            </Link>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* --- POPUP / MODALE DE DÉTAIL DU PROJET --- */}
      {/* ======================================================== */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl lg:max-w-3xl max-h-[92vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/50 hover:bg-black text-white backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Fermer la fenêtre"
            >
              <X size={20} />
            </button>

            {/* Image modale : portrait & paysage 100% visibles sans découpe */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full shrink-0 overflow-hidden bg-gray-950 flex items-center justify-center">
              {/* Image de fond floutée */}
              <img
                src={selectedProject.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-35"
              />

              {/* Image principale au premier plan */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop";
                }}
                className="relative z-10 max-h-full max-w-full object-contain p-2"
              />

              {/* Badge catégorie */}
              <div className="absolute bottom-4 left-4 sm:left-6 z-20 bg-brand-green/95 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-md">
                {selectedProject.category}
              </div>
            </div>

            {/* Contenu complet défilable */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-gray-500 text-xs sm:text-sm font-semibold">
                <span className="flex items-center gap-1.5 text-brand-green">
                  <Clock size={16} />
                  {selectedProject.echeance}
                </span>
                <span>•</span>
                <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-xs">
                  {selectedProject.status}
                </span>
              </div>

              {/* Titre COMPLET sans coupure */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-dark uppercase leading-tight">
                {selectedProject.title}
              </h2>

              {/* Cible & Avancement */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="inline-flex items-center gap-2 font-bold text-brand-dark">
                    <Target size={18} className="text-brand-green" />
                    Impact visé : {selectedProject.cible}
                  </span>
                  <span className="font-bold text-brand-green">
                    {selectedProject.progress}% réalisé
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-brand-green transition-all duration-700"
                    style={{ width: `${selectedProject.progress}%` }}
                  />
                </div>
              </div>

              {/* Description complète */}
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
                <h4 className="font-bold uppercase tracking-wider text-xs text-gray-400">
                  Présentation du projet
                </h4>
                <p>
                  {selectedProject.description}
                </p>
              </div>
            </div>

            {/* Pied de page du Popup */}
            <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <Button
                variant="outline"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Fermer
              </Button>
              <div className="flex gap-2.5 w-full sm:w-auto">
                <Link to="/contact" className="flex-1 sm:flex-none">
                  <Button variant="outline" className="w-full border-brand-green text-brand-green hover:bg-brand-green/10">
                    <Handshake size={16} className="mr-1.5" /> Devenir partenaire
                  </Button>
                </Link>
                <Link to="/dons" className="flex-1 sm:flex-none">
                  <Button className="w-full bg-brand-green text-white hover:bg-brand-green/90">
                    <Heart size={16} className="mr-1.5" /> Soutenir ce projet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}