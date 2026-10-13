import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Globe, MessageCircle, Camera, Share2 } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: 'home', path: '/' },
    { id: 'about', path: '#' },
    { id: 'projects', path: '/projets' },
    { id: 'news', path: '/actualites' },
    { id: 'contact', path: '/contact' }
  ];

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t-[6px] border-brand-green">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="flex flex-col space-y-6">
            <Link to="/" className="inline-block group">
              <img 
                src="/images/logo.png" 
                alt="Logo Open Heart & Green Vision" 
                className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              {t('footer.description')}
            </p>

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

          <div className="flex flex-col space-y-6">
            <h4 className="text-lg font-black uppercase tracking-widest text-white">
              {t('footer.navigation.title')}
            </h4>
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link to={item.path} className="group flex items-center text-gray-400 hover:text-brand-green transition-colors text-sm font-semibold uppercase tracking-wider">
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {t(`footer.navigation.${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="text-lg font-black uppercase tracking-widest text-white">
              {t('footer.actions.title')}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/bien-etre" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-semibold leading-loose">
                  {t('footer.actions.welfare')}
                </Link>
              </li>
              <li>
                <Link to="/ecologie" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-semibold leading-loose">
                  {t('footer.actions.ecology')}
                </Link>
              </li>
              <li>
                <Link to="/benevolats" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-semibold leading-loose">
                  {t('footer.actions.volunteer')}
                </Link>
              </li>
              <li>
                <Link to="/evenements" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-semibold leading-loose">
                  {t('footer.actions.events')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="text-lg font-black uppercase tracking-widest text-white">
              {t('footer.contact.title')}
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-brand-green mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm font-medium leading-relaxed">
                  {t('footer.contact.hq')}<br />
                  {t('footer.contact.location')}
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

        <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-semibold tracking-wider uppercase text-center md:text-left">
            &copy; {currentYear} {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <Link to="/mentions-legales" className="hover:text-brand-green transition-colors">
              {t('footer.legal')}
            </Link>
            <Link to="/confidentialite" className="hover:text-brand-green transition-colors">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}