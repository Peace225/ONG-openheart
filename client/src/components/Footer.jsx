import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Globe, MessageCircle, Camera, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t-[6px] border-brand-green">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        
        {/* Grille Principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Colonne 1 : Marque et Mission */}
          <div className="flex flex-col space-y-6">
            {/* LOGO IMAGE LOCALE */}
            <Link to="/" className="inline-block group">
              <img 
                src="/images/logo.png" 
                alt="Logo Open Heart & Green Vision" 
                className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Engagés pour le bien-être socio-économique et la lutte active contre le réchauffement climatique. Ensemble, bâtissons un avenir durable.
            </p>

            {/* Réseaux Sociaux */}
            <div className="flex space-x-4 pt-4">
              {[Globe, MessageCircle, Camera, Share2].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-lg font-black uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-4">
              {['Accueil', 'À propos de nous', 'Nos projets', 'Actualités', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link to="#" className="group flex items-center text-gray-400 hover:text-brand-green transition-colors text-sm font-semibold uppercase tracking-wider">
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Domaines d'Action */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-lg font-black uppercase tracking-widest text-white">
              Nos Actions
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/bien-etre" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-semibold leading-loose">
                  Bien-être socio-économique
                </Link>
              </li>
              <li>
                <Link to="/ecologie" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-semibold leading-loose">
                  Lutte contre le réchauffement climatique
                </Link>
              </li>
              <li>
                <Link to="/benevolats" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-semibold leading-loose">
                  Devenir Bénévole
                </Link>
              </li>
              <li>
                <Link to="/evenements" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-semibold leading-loose">
                  Événements à venir
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-lg font-black uppercase tracking-widest text-white">
              Nous Contacter
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-brand-green mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm font-medium leading-relaxed">
                  Siège Social<br />
                  Abidjan, Côte d'Ivoire
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-brand-green flex-shrink-0" size={20} />
                <a href="tel:+2250555582274" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-medium">
                  +225 05 55 58 22 74
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-brand-green flex-shrink-0" size={20} />
                <a href="mailto:info@openheart-greenvision.org" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-medium">
                  info@openheart-greenvision.org
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Barre de Copyright */}
        <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-semibold tracking-wider uppercase text-center md:text-left">
            &copy; {currentYear} Open Heart & Green Vision. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <Link to="/mentions-legales" className="hover:text-brand-green transition-colors">
              Mentions Légales
            </Link>
            <Link to="/confidentialite" className="hover:text-brand-green transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}