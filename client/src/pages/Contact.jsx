import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Contactez-nous</span>
          <h1 className="text-6xl font-black text-brand-dark uppercase tracking-tighter mb-8 text-brand-dark leading-tight">Parlons de <br/><span className="text-brand-green">votre engagement</span></h1>
          <p className="text-gray-600 text-lg mb-12 max-w-md font-medium">Vous avez des questions ou souhaitez devenir partenaire ? Notre équipe est à votre écoute.</p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-brand-green/10 flex items-center justify-center rounded-full text-brand-green"><Mail size={24}/></div>
              <span className="font-bold text-brand-dark">contact@openheart.org</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-brand-green/10 flex items-center justify-center rounded-full text-brand-green"><Phone size={24}/></div>
              <span className="font-bold text-brand-dark">+225 00 00 00 00 00</span>
            </div>
          </div>
        </div>

        <form className="bg-gray-50 p-12 rounded-3xl space-y-6">
          <input type="text" placeholder="NOM COMPLET" className="w-full p-4 bg-white border-b-2 border-gray-200 focus:border-brand-green outline-none font-bold uppercase tracking-widest text-sm" />
          <input type="email" placeholder="EMAIL" className="w-full p-4 bg-white border-b-2 border-gray-200 focus:border-brand-green outline-none font-bold uppercase tracking-widest text-sm" />
          <textarea placeholder="VOTRE MESSAGE" rows="4" className="w-full p-4 bg-white border-b-2 border-gray-200 focus:border-brand-green outline-none font-bold uppercase tracking-widest text-sm"></textarea>
          <Button variant="primary" className="w-full">Envoyer le message</Button>
        </form>
      </div>
    </div>
  );
}