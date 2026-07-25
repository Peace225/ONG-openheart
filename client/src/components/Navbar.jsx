import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown,
  Heart, Briefcase, Users, Handshake, Leaf, LayoutGrid, Image, Bell, Mail, FileText
} from 'lucide-react';
import Button from './ui/Button';

// Icon Map for easy referencing by name
const iconMap = {
  Accueil: LayoutGrid,
  'A propos de nous': Users,
  'Notre Team': Users,
  'Bénévolats & Partenariats': Handshake,
  'Nos membres': Users,
  Événements: Bell,
  Activités: FileText,
  'Initiative pour le bien-être socio-économique': Heart,
  'Lutte contre le réchauffement climatique': Leaf,
  'Nos projets': Briefcase,
  Galeries: Image,
  Actualités: Bell,
  Contact: Mail,
};

// Helper function to render an icon with custom size and style
const Icon = ({ name, size = 16, className = "" }) => {
  const LucideIcon = iconMap[name] || FileText; // Default to a simple document icon
  return <LucideIcon size={size} className={`transition-all duration-300 ${className}`} />;
};

export default function Navbar() {
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

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { 
      name: 'A propos de nous', 
      path: '#',
      dropdown: [
        { name: 'Notre Team', path: '/team' },
        { name: 'Bénévolats & Partenariats', path: '/benevolats' },
        { name: 'Nos membres', path: '/membres' },
        { name: 'Événements', path: '/evenements' },
      ]
    },
    { 
      name: 'Activités', 
      path: '#',
      dropdown: [
        { name: 'Initiative pour le bien-être socio-économique', path: '/bien-etre' },
        { name: 'Lutte contre le réchauffement climatique', path: '/ecologie' },
      ]
    },
    { name: 'Nos projets', path: '/projets' },
    { name: 'Galeries', path: '/galeries' },
    { name: 'Actualités', path: '/actualites' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
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
          
          {/* LOGO SECTION */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img 
              src="/images/logo.png" 
              alt="Logo Open Heart & Green Vision" 
              className={`transition-all duration-700 ease-out object-contain ${
                isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-16'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex flex-grow justify-center px-4">
            <div className="flex items-center space-x-6 2xl:space-x-10">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/item py-2">
                  {link.dropdown ? (
                    <button 
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      className={`${linkStyle} ${activeDropdown === link.name ? 'text-brand-green' : ''}`}
                    >
                      <Icon name={link.name} className="group-hover/item:scale-110 flex-shrink-0" />
                      {/* AJOUT DE WHITESPACE-NOWRAP ICI */}
                      <span className="whitespace-nowrap">{link.name}</span>
                      <ChevronDown size={14} className={`flex-shrink-0 transition-transform duration-500 ${activeDropdown === link.name ? 'rotate-180 text-brand-green' : 'opacity-70'}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`${linkStyle} ${location.pathname === link.path ? '!text-brand-green' : ''}`}
                    >
                      <Icon name={link.name} className="group-hover/item:scale-110 flex-shrink-0" />
                      {/* AJOUT DE WHITESPACE-NOWRAP ICI */}
                      <span className="whitespace-nowrap">{link.name}</span>
                    </Link>
                  )}

                  {/* Dropdowns */}
                  {link.dropdown && (
                    <div 
                      onMouseLeave={() => setActiveDropdown(null)}
                      className={desktopDropdownStyle}
                    >
                      <div className="p-3 flex flex-col space-y-1">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="px-5 py-4 text-sm font-medium text-brand-dark hover:bg-brand-green hover:text-white transition-colors duration-300 rounded-lg flex items-center gap-3.5"
                          >
                            <Icon name={sub.name} size={18} className="text-gray-400 group-hover:text-white flex-shrink-0" />
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

          {/* BOUTON FAIRE UN DON */}
          <div className="hidden xl:block flex-shrink-0">
            <Link to="/faire-un-don">
              <Button variant="primary" className="!px-6 !py-3.5 shadow-xl !rounded-full text-sm font-semibold group flex items-center gap-2 whitespace-nowrap">
                <Heart size={18} className="group-hover:scale-125 transition-transform flex-shrink-0" />
                Faire un don
              </Button>
            </Link>
          </div>

          {/* Mobile Trigger */}
          <button 
            className={`xl:hidden p-2.5 transition-colors flex-shrink-0 ${isScrolled ? 'text-brand-green' : 'text-white'}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={35} className="drop-shadow-lg" /> : <Menu size={35} className="drop-shadow-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (reste inchangé) */}
      <div className={`xl:hidden fixed inset-0 top-[80px] bg-brand-dark overflow-y-auto transition-transform duration-700 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-10 flex flex-col space-y-8">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-white/10 pb-6">
              {link.dropdown ? (
                <div>
                  <button 
                    onClick={() => toggleDropdown(link.name)}
                    className="flex items-center justify-between w-full text-2xl font-extrabold uppercase text-white group"
                  >
                    <div className="flex items-center gap-3">
                        <Icon name={link.name} size={28} className="text-brand-green/70 group-hover:text-brand-green group-hover:scale-110" />
                        <span>{link.name}</span>
                    </div>
                    <ChevronDown size={28} className={`transition-transform duration-500 ${activeDropdown === link.name ? 'rotate-180 text-brand-green' : 'text-white/50'}`} />
                  </button>
                  <div className={`mt-6 space-y-5 overflow-hidden transition-all duration-500 ease-in-out ${activeDropdown === link.name ? 'max-h-max' : 'max-h-0'}`}>
                    {link.dropdown.map((sub) => (
                      <Link key={sub.name} to={sub.path} className="flex items-center gap-4 text-xl font-medium text-gray-400 pl-6 hover:text-brand-green group">
                        <Icon name={sub.name} size={22} className="text-gray-600 group-hover:text-brand-green" />
                        <span>{sub.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={link.path} className="flex items-center gap-3 text-2xl font-extrabold uppercase text-white hover:text-brand-green group">
                  <Icon name={link.name} size={28} className="text-brand-green/70 group-hover:text-brand-green group-hover:scale-110" />
                  <span>{link.name}</span>
                </Link>
              )}
            </div>
          ))}
          <Link to="/faire-un-don">
            <Button variant="primary" className="w-full text-xl py-6 mt-6 rounded-2xl flex items-center justify-center gap-4">
                <Leaf size={24} />
                S'engager maintenant
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}