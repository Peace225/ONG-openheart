import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './ui/Button';

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
      name: 'À propos de nous', 
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

  const linkStyle = `text-[13px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-1
    ${isScrolled 
      ? 'text-gray-300 hover:text-brand-green' 
      : 'text-white hover:text-brand-green drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-brand-dark/95 backdrop-blur-md shadow-2xl py-2' 
        : 'bg-gradient-to-b from-black/70 via-black/20 to-transparent py-5' 
    }`}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* SECTION LOGO (IMAGE LOCALE) */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/images/logo.png" 
              alt="Logo Open Heart & Green Vision" 
              className={`transition-all duration-500 object-contain ${
                isScrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/item">
                {link.dropdown ? (
                  <button 
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    className={linkStyle}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`${linkStyle} ${location.pathname === link.path ? '!text-brand-green' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <div 
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`absolute top-full left-0 mt-4 w-72 bg-white shadow-2xl transition-all duration-300 origin-top-left border-t-4 border-brand-green ${
                      activeDropdown === link.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="p-2 flex flex-col">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="px-4 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-green hover:text-white transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden xl:block">
            <Link to="/faire-un-don">
              <Button variant="primary" className="!px-6 !py-3 shadow-xl">Faire un don</Button>
            </Link>
          </div>

          {/* Mobile Trigger */}
          <button 
            className={`xl:hidden p-2 transition-colors ${isScrolled ? 'text-brand-green' : 'text-white'}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={35} /> : <Menu size={35} className="drop-shadow-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden fixed inset-0 top-[80px] bg-brand-dark overflow-y-auto transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-white/10 pb-4">
              {link.dropdown ? (
                <div>
                  <button 
                    onClick={() => toggleDropdown(link.name)}
                    className="flex items-center justify-between w-full text-2xl font-black uppercase text-white"
                  >
                    {link.name}
                    <ChevronDown size={24} className={activeDropdown === link.name ? 'rotate-180 text-brand-green' : ''} />
                  </button>
                  <div className={`mt-4 space-y-4 overflow-hidden transition-all duration-300 ${activeDropdown === link.name ? 'max-h-96' : 'max-h-0'}`}>
                    {link.dropdown.map((sub) => (
                      <Link key={sub.name} to={sub.path} className="block text-lg font-bold text-gray-400 pl-4 hover:text-brand-green">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={link.path} className="text-2xl font-black uppercase text-white hover:text-brand-green">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link to="/faire-un-don">
            <Button variant="primary" className="w-full text-lg py-5 mt-4">S'engager maintenant</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}