import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importation des Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Importation du Bouton WhatsApp
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Importation des Pages Publiques
import Home from './pages/Home';
import Team from './pages/Team';
import Benevolats from './pages/Benevolats';
import Membres from './pages/Membres';
import Evenements from './pages/Evenements';
import Projets from './pages/Projets';
import Galeries from './pages/Galeries';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';
import BienEtre from './pages/BienEtre';
import Ecologie from './pages/Ecologie';
import Don from './pages/Don';

// Importation des Pages Admin
import AdminDashboard from './pages/AdminDashboard'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* =========================================
            ROUTES PUBLIQUES (Site web principal)
            Utilisent le MainLayout (Navbar + Footer)
        ========================================= */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          
          {/* Menu À propos */}
          <Route path="team" element={<Team />} />
          <Route path="benevolats" element={<Benevolats />} />
          <Route path="membres" element={<Membres />} />
          <Route path="evenements" element={<Evenements />} />
          
          {/* Menu Activités */}
          <Route path="bien-etre" element={<BienEtre />} />
          <Route path="ecologie" element={<Ecologie />} />
          
          {/* Autres pages */}
          <Route path="projets" element={<Projets />} />
          <Route path="galeries" element={<Galeries />} />
          <Route path="actualites" element={<Actualites />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faire-un-don" element={<Don />} />
        </Route>

        {/* =========================================
            ROUTES PRIVÉES (Back-office)
            Utilisent le AdminLayout (Sidebar + Topbar)
        ========================================= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* Tu pourras ajouter /admin/articles, /admin/benevoles, etc. plus tard */}
        </Route>

      </Routes>
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;