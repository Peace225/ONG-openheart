import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  FolderKanban, 
  HeartHandshake, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Bell, 
  UserCircle
} from 'lucide-react';
// import { useAuth } from '../hooks/useAuth'; // Décommente ceci quand tu seras prêt à lier l'authentification
// import { supabase } from '../lib/supabase';

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // const { user } = useAuth(); // Récupère l'admin connecté

  const menuItems = [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/admin' },
    { icon: FileText, label: 'Actualités', path: '/admin/actualites' },
    { icon: Calendar, label: 'Événements', path: '/admin/evenements' },
    { icon: FolderKanban, label: 'Projets', path: '/admin/projets' },
    { icon: HeartHandshake, label: 'Bénévoles', path: '/admin/benevoles' },
    { icon: Settings, label: 'Paramètres', path: '/admin/parametres' },
  ];

  const handleLogout = async () => {
    // await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* Overlay sombre pour mobile quand la sidebar est ouverte */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-brand-dark/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar (Barre latérale) */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-brand-dark text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0 flex flex-col ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* En-tête de la Sidebar */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
          <Link to="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-green rounded-sm flex items-center justify-center text-white font-black text-xl">
              OH
            </div>
            <span className="text-lg font-black tracking-widest uppercase">Admin Panel</span>
          </Link>
          <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-brand-green text-white shadow-lg' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <item.icon size={22} className={isActive ? 'text-white' : 'text-gray-400'} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bouton de déconnexion en bas */}
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 px-4 py-3 w-full rounded-lg font-semibold text-red-400 hover:bg-red-400/10 transition-colors"
          >
            <LogOut size={22} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Contenu Principal */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Topbar (Barre supérieure) */}
        <header className="h-20 bg-white shadow-sm flex items-center justify-between px-6 lg:px-10 z-10 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-brand-dark p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={28} />
            </button>
            <h1 className="text-xl font-bold text-brand-dark hidden sm:block">
              {menuItems.find(item => item.path === location.pathname)?.label || 'Administration'}
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-brand-green relative transition-colors">
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-brand-dark group-hover:text-brand-green transition-colors">Admin Open Heart</p>
                <p className="text-xs text-gray-500 font-medium">Super Administrateur</p>
              </div>
              <UserCircle size={36} className="text-gray-300 group-hover:text-brand-green transition-colors" />
            </div>
          </div>
        </header>

        {/* Zone où les pages s'affichent */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
}