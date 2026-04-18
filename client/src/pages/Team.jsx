import { Mail, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const executiveBoard = [
  {
    name: "K. Kouassi Martin Stanislas",
    role: "Président Fondateur - Superviseur Général",
    image: "/images/team/martin-stanislas.jpg",
    bio: "Visionnaire et pilier de l'organisation, il supervise l'ensemble des projets pour un impact durable."
  },
  {
    name: "K. Yaoua Jemima Esther R.",
    role: "Vice Présidente",
    image: "/images/team/jemima-esther.jpg",
    bio: "Chargée du suivi des jeunes filles déscolarisées, élèves et étudiantes."
  },
  {
    name: "Yedoh Amari Rosine",
    role: "Vice Présidente",
    image: "/images/team/amari-rosine.jpg",
    bio: "Chargée de la lutte contre les violences conjugales et de l'insertion socio-économique des femmes."
  }
];

const administrativeBureau = [
  { name: "K. Alberto Carlos", role: "Secrétaire Général", image: "/images/team/alberto-carlos.jpg" },
  { name: "Koua Aka Charles", role: "D. Secrétaire Adjoint", image: "/images/team/aka-charles.jpg" },
  { name: "Kobenan Willy C. Lebon", role: "Trésorier & Coordonnateur Projets Handicapés", image: "/images/team/willy-lebon.jpg" },
  { name: "Konan Kouadio Félix", role: "Commissaire aux comptes", image: "/images/team/koffi-maurice.jpeg" },
  
];

const councilMembers = [
  { name: "Ouattara Mariame", role: "Membre du Conseil d'Administration", image: "/images/team/mariame-ouattara.jpg" },
  { name: "K. Kossia Elise", role: "Membre du Conseil d'Administration", image: "/images/team/kossia-elise.jpeg" },
  { name: "Fatoumata Koné", role: "Membre du Conseil d'Administration", image: "/images/team/fatoumata-kone.jpg" },
  { name: "Fieni Sylvie", role: "Membre du Conseil d'Administration", image: "/images/team/sylvie-fieni.jpeg" },
  { name: "Tiemele B. Alexandre", role: "Membre du Conseil d'Administration", image: "/images/team/tiemele-alexandre.jpeg" },
  { name: "Djane Koffi Maurice", role: "Membre du Conseil d'Administration", image: "/images/team/koffi-maurice.jpeg" },
  { name: "Niamkey Roland Benjamin", role: "Membre du Conseil d'Administration", image: "/images/team/roland-benjamin.jpg" },
  { name: "Koutouan Léon", role: "Membre du Conseil d'Administration", image: "/images/team/koutouan-leon.jpg" },
  { name: "Ehouman Narcisse", role: "Membre du Conseil d'Administration", image: "/images/team/ehouman-narcisse.jpg" },
];

export default function Team() {
  return (
    <div className="bg-white pt-32 pb-24">
      
      {/* 1. Header de la page */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-24">
        <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
          NOTRE ORGANISATION
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
          L'Équipe <span className="text-brand-green">Open Heart</span> <br /> & Green Vision
        </h1>
        <p className="text-lg text-gray-600 mt-8 max-w-2xl mx-auto font-medium">
          Une structure organisée et dévouée pour répondre aux défis sociaux et environnementaux de la Côte d'Ivoire.
        </p>
      </div>

      {/* 2. Section Bureau Exécutif (XXL) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-32">
        <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest mb-16 border-l-8 border-brand-green pl-6 italic">
          Haute Direction
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {executiveBoard.map((leader, index) => (
            <div key={index} className="group relative">
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
                <p className="text-brand-green font-extrabold text-sm tracking-widest uppercase mb-4">{leader.role}</p>
                <p className="text-gray-500 font-medium leading-relaxed italic">"{leader.bio}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Section Bureau Administratif & Trésorerie */}
      <div className="bg-gray-50 py-24 mb-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest mb-16 text-center">
            Secrétariat & Trésorerie
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {administrativeBureau.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 text-center border-b-4 border-transparent hover:border-brand-green group">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden mb-6 rotate-3 group-hover:rotate-0 transition-transform shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-black text-brand-dark uppercase tracking-tighter mb-1 leading-tight">{member.name}</h4>
                <p className="text-brand-green font-bold text-xs tracking-widest uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Section Conseil d'Administration */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-32">
        <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest mb-16 border-r-8 border-brand-green pr-6 text-right italic">
          Conseil d'Administration
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {councilMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden aspect-square rounded-full mb-4 border-4 border-gray-100 group-hover:border-brand-green transition-colors duration-500 shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="text-center px-2">
                <h4 className="text-sm font-black text-brand-dark uppercase tracking-tighter leading-tight">{member.name}</h4>
                <p className="text-[10px] text-brand-green font-bold uppercase tracking-tighter mt-1 opacity-70">Membre CA</p>
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
              Rejoignez le <span className="text-brand-green">mouvement</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Nous sommes une équipe ouverte. Si vous souhaitez mettre vos compétences au service de l'humanité et de la nature, contactez-nous.
            </p>
            <Link to="/contact">
              <Button variant="primary" className="px-12 py-5 text-lg">Devenir membre</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}