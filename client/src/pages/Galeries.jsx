export default function Galeries() {
  // On utilise des chemins relatifs pointant vers le dossier public/images/
  const images = [
    "/images/galerie-1.jpeg",
    "/images/galerie-2.jpeg",
    "/images/galerie-3.jpeg",
    "/images/galerie-4.jpeg",
    "/images/galerie-5.jpeg",
    "/images/galerie-6.jpeg",
    "/images/galerie-7.jpeg",
    "/images/galerie-8.jpeg",
    "/images/galerie-9.jpeg",
    "/images/galerie-10.jpeg",
    "/images/galerie-11.jpeg",
    "/images/galerie-12.jpeg",
    "/images/galerie-13.jpeg",
    "/images/galerie-14.jpeg",
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-8 text-center mb-16">
        <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
          Immersion
        </span>
        <h1 className="text-6xl font-black text-brand-dark uppercase tracking-tighter">
          Galerie <span className="text-brand-green">Photos</span>
        </h1>
      </div>
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 px-8 space-y-8">
        {images.map((img, i) => (
          <img 
            key={i} 
            src={img} 
            alt={`Action sur le terrain - Image ${i + 1}`} 
            className="w-full rounded-2xl hover:scale-[1.02] transition-transform duration-500 shadow-xl" 
          />
        ))}
      </div>
    </div>
  );
}