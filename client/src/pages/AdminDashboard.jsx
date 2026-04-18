import { Users, HeartHandshake, Calendar, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: "Bénévoles Actifs", value: "248", increase: "+12%", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Dons ce mois", value: "2 450 000 FCFA", increase: "+8%", icon: TrendingUp, color: "text-brand-green", bg: "bg-green-100" },
    { title: "Nouveaux Projets", value: "14", increase: "+2", icon: HeartHandshake, color: "text-purple-600", bg: "bg-purple-100" },
    { title: "Événements à venir", value: "3", increase: "Stable", icon: Calendar, color: "text-orange-600", bg: "bg-orange-100" },
  ];

  const recentVolunteers = [
    { name: "Kouadio Cédric", role: "Logistique", date: "Aujourd'hui", status: "Nouveau" },
    { name: "Awa Sylla", role: "Communication", date: "Hier", status: "Vérifié" },
    { name: "Marc Olivier", role: "Terrain", date: "15 Avril 2026", status: "Vérifié" },
  ];

  return (
    <div className="space-y-8">
      
      {/* En-tête de bienvenue */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-brand-dark tracking-tight">Vue d'ensemble</h1>
          <p className="text-gray-500 font-medium mt-1">Bienvenue sur l'espace de gestion d'Open Heart.</p>
        </div>
        <button className="bg-brand-green text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-brand-dark transition-colors">
          + Nouveau Rapport
        </button>
      </div>

      {/* Cartes de statistiques (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start justify-between group hover:shadow-md transition-shadow">
            <div>
              <p className="text-gray-500 font-bold text-sm uppercase tracking-wider mb-2">{stat.title}</p>
              <h3 className="text-2xl font-black text-brand-dark">{stat.value}</h3>
              <p className="text-brand-green text-sm font-bold mt-2 flex items-center gap-1">
                <ArrowUpRight size={16} />
                {stat.increase}
              </p>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Section inférieure : Tableau des récents inscrits */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-brand-dark">Nouvelles inscriptions bénévoles</h2>
          <button className="text-brand-green font-bold text-sm hover:underline">Voir tout</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-bold">Nom complet</th>
                <th className="p-4 font-bold">Domaine souhaité</th>
                <th className="p-4 font-bold">Date d'inscription</th>
                <th className="p-4 font-bold">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentVolunteers.map((volunteer, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-bold text-brand-dark">{volunteer.name}</td>
                  <td className="p-4 text-gray-600 font-medium">{volunteer.role}</td>
                  <td className="p-4 text-gray-500 text-sm">{volunteer.date}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      volunteer.status === 'Nouveau' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-brand-green'
                    }`}>
                      {volunteer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}