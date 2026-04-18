export default function Card({ title, description, imageUrl, children }) {
  return (
    <div className="group overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500">
      {imageUrl && (
        <div className="overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700" 
          />
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-brand-dark mb-4">{title}</h3>
        {description && <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>}
        {children}
      </div>
    </div>
  );
}