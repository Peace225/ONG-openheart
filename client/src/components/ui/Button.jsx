export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ease-in-out";
  
  const variants = {
    primary: "bg-brand-green text-white hover:bg-brand-dark hover:shadow-lg",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
    dark: "bg-brand-dark text-white hover:bg-brand-green hover:shadow-lg"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}