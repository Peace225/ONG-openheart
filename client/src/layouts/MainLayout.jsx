import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* L'en-tête de navigation, présent sur toutes les pages */}
      <Navbar />
      
      {/* Le conteneur principal. 
        'flex-grow' permet à ce bloc de prendre tout l'espace disponible, 
        poussant ainsi le footer tout en bas.
      */}
      <main className="flex-grow">
        {/* L'Outlet de React Router injecte ici le contenu de la page active (Home, Contact, etc.) */}
        <Outlet />
      </main>
      
      {/* Le pied de page, présent sur toutes les pages */}
      <Footer />
    </div>
  );
}