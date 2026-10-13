import { useTranslation } from 'react-i18next';
import { Mail, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

// On conserve les noms et les images dans le composant car ils ne nécessitent pas de traduction
const executiveBoardData = [
  { id: "martin", name: "K. Kouassi Martin Stanislas", image: "/images/team/martin-stanislas.jpg" },
  { id: "jemima", name: "K. Yaoua Jemima Esther R.", image: "/images/team/jemima-esther.jpg" },
  { id: "rosine", name: "Yedoh Amari Rosine", image: "/images/team/amari-rosine.jpg" }
];

const administrativeBureauData = [
  { id: "alberto", name: "K. Alberto Carlos", image: "/images/team/alberto-carlos.jpg" },
  { id: "charles", name: "Koua Aka Charles", image: "/images/team/aka-charles.jpg" },
  { id: "willy", name: "Kobenan Willy C. Lebon", image: "/images/team/willy-lebon.jpg" },
  { id: "felix", name: "Konan Kouadio Félix", image: "/images/team/koffi-maurice.jpeg" },
];

const councilMembersData = [
  { name: "Ouattara Mariame", image: "/images/team/mariame-ouattara.jpg" },
  { name: "K. Kossia Elise", image: "/images/team/kossia-elise.jpeg" },
  { name: "Fatoumata Koné", image: "/images/team/fatoumata-kone.jpg" },
  { name: "Fieni Sylvie", image: "/images/team/sylvie-fieni.jpeg" },
  { name: "Tiemele B. Alexandre", image: "/images/team/tiemele-alexandre.jpeg" },
  { name: "Djane Koffi Maurice", image: "/images/team/koffi-maurice.jpeg" },
  { name: "Niamkey Roland Benjamin", image: "/images/team/roland-benjamin.jpg" },
  { name: "Koutouan Léon", image: "/images/team/koutouan-leon.jpg" },
  { name: "Ehouman Narcisse", image: "/images/team/ehouman-narcisse.jpg" },
];

export default function Team() {
  const { t } = useTranslation();

  return (
    <div className="bg-white pt-32 pb-24">
      
      {/* 1. Header de la page */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-24">
        <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
          {t('team.header.badge')}
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
          {t('team.header.titlePart1')} <span className="text-brand-green">{t('team.header.titleHighlight')}</span> <br /> {t('team.header.titlePart2')}
        </h1>
        <p className="text-lg text-gray-600 mt-8 max-w-2xl mx-auto font-medium">
          {t('team.header.description')}
        </p>
      </div>

      {/* 2. Section Bureau Exécutif (XXL) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-32">
        <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest mb-16 border-l-8 border-brand-green pl-6 italic">
          {t('team.executiveBoard.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {executiveBoardData.map((leader) => (
            <div key={leader.id} className="group relative">
              <div className="relative overflow-hidden aspect-[3/4] bg-gray-100 mb-6 rounded-2xl shadow-xl">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                     <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white"><Share2 size={18} /></div>
                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-dark"><Mail size={18} /></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-1">{leader.name}</h3>
                <p className="text-brand-green font-extrabold text-sm tracking-widest uppercase mb-4">
                  {t(`team.executiveBoard.${leader.id}.role`)}
                </p>
                <p className="text-gray-500 font-medium leading-relaxed italic">
                  "{t(`team.executiveBoard.${leader.id}.bio`)}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Section Bureau Administratif & Trésorerie */}
      <div className="bg-gray-50 py-24 mb-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest mb-16 text-center">
            {t('team.administrativeBureau.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {administrativeBureauData.map((member) => (
              <div key={member.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 text-center border-b-4 border-transparent hover:border-brand-green group">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden mb-6 rotate-3 group-hover:rotate-0 transition-transform shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-black text-brand-dark uppercase tracking-tighter mb-1 leading-tight">{member.name}</h4>
                <p className="text-brand-green font-bold text-xs tracking-widest uppercase">
                  {t(`team.administrativeBureau.${member.id}.role`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Section Conseil d'Administration */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-32">
        <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest mb-16 border-r-8 border-brand-green pr-6 text-right italic">
          {t('team.council.title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {councilMembersData.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden aspect-square rounded-full mb-4 border-4 border-gray-100 group-hover:border-brand-green transition-colors duration-500 shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="text-center px-2">
                <h4 className="text-sm font-black text-brand-dark uppercase tracking-tighter leading-tight">{member.name}</h4>
                <p className="text-[10px] text-brand-green font-bold uppercase tracking-tighter mt-1 opacity-70">
                  {t('team.council.memberRole')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Bannière de recrutement */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="bg-brand-dark p-12 lg:p-20 text-center relative overflow-hidden rounded-[3rem] shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
              {t('team.banner.titlePart1')} <span className="text-brand-green">{t('team.banner.titleHighlight')}</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-medium">
              {t('team.banner.description')}
            </p>
            <Link to="/contact">
              <Button variant="primary" className="px-12 py-5 text-lg">
                {t('team.banner.btn')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}