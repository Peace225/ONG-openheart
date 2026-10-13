import { useTranslation } from 'react-i18next';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

// On ne conserve que les identifiants et les données non traduisibles (comme l'heure)
const eventsData = [
  { id: "marcheVerte", time: "08:00" },
  { id: "galaCharite", time: "19:00" },
];

export default function Evenements() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <h1 className="text-6xl font-black text-brand-dark uppercase tracking-tighter mb-16">
          {t('evenements.title.part1')} <span className="text-brand-green">{t('evenements.title.highlight')}</span>
        </h1>
        
        <div className="space-y-8">
          {eventsData.map((e) => (
            <div key={e.id} className="flex flex-col lg:flex-row bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="bg-brand-green text-white p-12 flex flex-col justify-center items-center lg:w-64 text-center">
                <span className="text-4xl font-black leading-none">{t(`evenements.events.${e.id}.day`)}</span>
                <span className="text-sm font-bold uppercase tracking-widest mt-2">{t(`evenements.events.${e.id}.month`)}</span>
              </div>
              <div className="p-10 flex-1 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <span className="text-brand-green font-bold uppercase tracking-widest text-xs mb-2 block">
                    {t(`evenements.events.${e.id}.category`)}
                  </span>
                  <h3 className="text-3xl font-black text-brand-dark uppercase mb-4">
                    {t(`evenements.events.${e.id}.title`)}
                  </h3>
                  <div className="flex flex-wrap gap-6 text-gray-500 font-bold text-sm uppercase">
                    <span className="flex items-center gap-2"><Clock size={16}/> {e.time}</span>
                    <span className="flex items-center gap-2"><MapPin size={16}/> {t(`evenements.events.${e.id}.location`)}</span>
                  </div>
                </div>
                <Button variant="dark">{t('evenements.registerBtn')}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}