import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Evenements() {
  const events = [
    { title: "Marche Verte Abidjan", date: "22 Mai 2026", time: "08:00", loc: "Plateau", category: "Écologie" },
    { title: "Gala de Charité Open Heart", date: "10 Juin 2026", time: "19:00", loc: "Hôtel Ivoire", category: "Don" },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <h1 className="text-6xl font-black text-brand-dark uppercase tracking-tighter mb-16">Agenda des <span className="text-brand-green">actions</span></h1>
        
        <div className="space-y-8">
          {events.map((e, i) => (
            <div key={i} className="flex flex-col lg:flex-row bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="bg-brand-green text-white p-12 flex flex-col justify-center items-center lg:w-64 text-center">
                <span className="text-4xl font-black leading-none">{e.date.split(' ')[0]}</span>
                <span className="text-sm font-bold uppercase tracking-widest mt-2">{e.date.split(' ')[1]}</span>
              </div>
              <div className="p-10 flex-1 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <span className="text-brand-green font-bold uppercase tracking-widest text-xs mb-2 block">{e.category}</span>
                  <h3 className="text-3xl font-black text-brand-dark uppercase mb-4">{e.title}</h3>
                  <div className="flex flex-wrap gap-6 text-gray-500 font-bold text-sm uppercase">
                    <span className="flex items-center gap-2"><Clock size={16}/> {e.time}</span>
                    <span className="flex items-center gap-2"><MapPin size={16}/> {e.loc}</span>
                  </div>
                </div>
                <Button variant="dark">S'inscrire</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}