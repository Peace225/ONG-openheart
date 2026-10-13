import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <-- Import de i18next
import {
  Menu, X, ChevronDown,
  Heart, Briefcase, Users, Handshake, Leaf, LayoutGrid, Image, Bell, Mail, FileText
} from 'lucide-react';
import Button from './ui/Button';

// Icon Map basé sur des IDs fixes (indépendants de la langue)
const iconMap = {
  home: LayoutGrid,
  about: Users,
  team: Users,
  benevolats: Handshake,
  membres: Users,
  evenements: Bell,
  activites: FileText,
  bien_etre: Heart,
  ecologie: Leaf,
  projets: Briefcase,
  galeries: Image,
  actualites: Bell,
  contact: Mail,
};

// Mise à jour de Helper function pour utiliser l'ID
const Icon = ({ id, size = 16, className = "" }) => {
  const LucideIcon = iconMap[id] || FileText;
  return <LucideIcon size={size} className={`transition-all duration-300 ${className}`} />;
};

export default function Navbar() {
  const { t, i18n } = useTranslation(); // <-- Initialisation de la traduction
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Utilisation de t() pour les noms et ajout d'un champ 'id'
  const navLinks = [
    { id: 'home', name: t('navbar.home'), path: '/' },
    { 
      id: 'about',
      name: t('navbar.about'), 
      path: '#',
      dropdown: [
        { id: 'team', name: t('navbar.team'), path: '/team' },
        { id: 'benevolats', name: t('navbar.volunteering'), path: '/benevolats' },
        { id: 'membres', name: t('navbar.members'), path: '/membres' },
        { id: 'evenements', name: t('navbar.events'), path: '/evenements' },
      ]
    },
    { 
      id: 'activites',
      name: t('navbar.activities'), 
      path: '#',
      dropdown: [
        { id: 'bien_etre', name: t('navbar.welfare'), path: '/bien-etre' },
        { id: 'ecologie', name: t('navbar.ecology'), path: '/ecologie' },
      ]
    },
    { id: 'projets', name: t('navbar.projects'), path: '/projets' },
    { id: 'galeries', name: t('navbar.galleries'), path: '/galeries' },
    { id: 'actualites', name: t('navbar.news'), path: '/actualites' },
    { id: 'contact', name: t('navbar.contact'), path: '/contact' },
  ];

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const linkStyle = `text-[14px] font-medium tracking-wide transition-all duration-500 ease-in-out flex items-center gap-2 py-1.5
    ${isScrolled 
      ? 'text-gray-300 hover:text-brand-green' 
      : 'text-white hover:text-brand-green drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
    }`;

  const desktopDropdownStyle = `absolute top-full left-0 mt-4 w-80 bg-white shadow-2xl transition-all duration-500 ease-in-out origin-top-left border-t-4 border-brand-green scale-95 opacity-0 pointer-events-none group-hover/item:scale-100 group-hover/item:opacity-100 group-hover/item:pointer-events-auto`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
      isScrolled 
        ? 'bg-brand-dark/95 backdrop-blur-lg shadow-2xl py-2' 
        : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-4' 
    }`}>
      <div className="max-w-[1550px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between w-full">
          
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img 
              src="/images/logo.png" 
              alt="Logo Open Heart & Green Vision" 
              className={`transition-all duration-700 ease-out object-contain ${
                isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-16'
              }`}
            />
          </Link>

          <div className="hidden xl:flex flex-grow justify-center px-4">
            <div className="flex items-center space-x-6 2xl:space-x-10">
              {navLinks.map((link) => (
                <div key={link.id} className="relative group/item py-2">
                  {link.dropdown ? (
                    <button 
                      onMouseEnter={() => setActiveDropdown(link.id)}
                      className={`${linkStyle} ${activeDropdown === link.id ? 'text-brand-green' : ''}`}
                    >
                      <Icon id={link.id} className="group-hover/item:scale-110 flex-shrink-0" />
                      <span className="whitespace-nowrap">{link.name}</span>
                      <ChevronDown size={14} className={`flex-shrink-0 transition-transform duration-500 ${activeDropdown === link.id ? 'rotate-180 text-brand-green' : 'opacity-70'}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`${linkStyle} ${location.pathname === link.path ? '!text-brand-green' : ''}`}
                    >
                      <Icon id={link.id} className="group-hover/item:scale-110 flex-shrink-0" />
                      <span className="whitespace-nowrap">{link.name}</span>
                    </Link>
                  )}

                  {link.dropdown && (
                    <div 
                      onMouseLeave={() => setActiveDropdown(null)}
                      className={desktopDropdownStyle}
                    >
                      <div className="p-3 flex flex-col space-y-1">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.id}
                            to={sub.path}
                            className="px-5 py-4 text-sm font-medium text-brand-dark hover:bg-brand-green hover:text-white transition-colors duration-300 rounded-lg flex items-center gap-3.5"
                          >
                            <Icon id={sub.id} size={18} className="text-gray-400 group-hover:text-white flex-shrink-0" />
                            <span>{sub.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
            {/* Sélecteur de langue */}
            <div className="flex gap-2 mr-2 text-white font-medium">
                <button onClick={() => changeLanguage('fr')} className={`hover:text-brand-green ${i18n.language === 'fr' ? 'text-brand-green' : ''}`}>FR</button>
                <span>|</span>
                <button onClick={() => changeLanguage('en')} className={`hover:text-brand-green ${i18n.language === 'en' ? 'text-brand-green' : ''}`}>EN</button>
            </div>

            <Link to="/faire-un-don">
              <Button variant="primary" className="!px-6 !py-3.5 shadow-xl !rounded-full text-sm font-semibold group flex items-center gap-2 whitespace-nowrap">
                <Heart size={18} className="group-hover:scale-125 transition-transform flex-shrink-0" />
                {t('navbar.donate')}
              </Button>
            </Link>
          </div>

          <button 
            className={`xl:hidden p-2.5 transition-colors flex-shrink-0 ${isScrolled ? 'text-brand-green' : 'text-white'}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={35} className="drop-shadow-lg" /> : <Menu size={35} className="drop-shadow-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden fixed inset-0 top-[80px] bg-brand-dark overflow-y-auto transition-transform duration-700 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-10 flex flex-col space-y-8">
          
          {/* Sélecteur de langue Mobile */}
          <div className="flex gap-4 text-2xl text-white font-extrabold mb-4 border-b border-white/10 pb-6">
                <button onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'text-brand-green' : ''}>FR</button>
                <span>/</span>
                <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'text-brand-green' : ''}>EN</button>
          </div>

          {navLinks.map((link) => (
            <div key={link.id} className="border-b border-white/10 pb-6">
              {link.dropdown ? (
                <div>
                  <button 
                    onClick={() => toggleDropdown(link.id)}
                    className="flex items-center justify-between w-full text-2xl font-extrabold uppercase text-white group"
                  >
                    <div className="flex items-center gap-3">
                        <Icon id={link.id} size={28} className="text-brand-green/70 group-hover:text-brand-green group-hover:scale-110" />
                        <span>{link.name}</span>
                    </div>
                    <ChevronDown size={28} className={`transition-transform duration-500 ${activeDropdown === link.id ? 'rotate-180 text-brand-green' : 'text-white/50'}`} />
                  </button>
                  <div className={`mt-6 space-y-5 overflow-hidden transition-all duration-500 ease-in-out ${activeDropdown === link.id ? 'max-h-max' : 'max-h-0'}`}>
                    {link.dropdown.map((sub) => (
                      <Link key={sub.id} to={sub.path} className="flex items-center gap-4 text-xl font-medium text-gray-400 pl-6 hover:text-brand-green group">
                        <Icon id={sub.id} size={22} className="text-gray-600 group-hover:text-brand-green" />
                        <span>{sub.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={link.path} className="flex items-center gap-3 text-2xl font-extrabold uppercase text-white hover:text-brand-green group">
                  <Icon id={link.id} size={28} className="text-brand-green/70 group-hover:text-brand-green group-hover:scale-110" />
                  <span>{link.name}</span>
                </Link>
              )}
            </div>
          ))}
          <Link to="/faire-un-don">
            <Button variant="primary" className="w-full text-xl py-6 mt-6 rounded-2xl flex items-center justify-center gap-4">
                <Leaf size={24} />
                {t('navbar.engage')}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}