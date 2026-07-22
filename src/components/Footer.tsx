
export default function Footer() {
  return (
    <footer className="px-8 md:px-16 lg:px-24 py-12 border-t-[4px] border-black bg-neo-bg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left Side: Logo and Copyright */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-neo-red border-[3px] border-black"></div>
            <span className="font-heading text-2xl tracking-tight uppercase">Vaibhav Mishra</span>
          </div>
          <div className="bg-black text-white font-bold text-xs md:text-sm px-4 py-2 uppercase tracking-wide">
            &copy; 2026 Vaibhav Mishra. Engineered for performance.
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="bg-white neo-border px-6 py-3 font-bold uppercase text-sm flex gap-4 md:gap-6 neo-shadow">
          <a href="https://www.linkedin.com/in/vaibhav-mishra-a60736294/" target="_blank" rel="noopener noreferrer" className="hover:text-neo-red transition-colors">LinkedIn</a>
          <span>/</span>
          <a href="https://www.github.com/V1629" target="_blank" rel="noopener noreferrer" className="hover:text-neo-blue transition-colors">GitHub</a>
          <span>/</span>
          <a href="mailto:vaibhavmishraad794@gmail.com" className="hover:text-neo-yellow transition-colors">Email</a>
        </div>
        
      </div>
    </footer>
  );
}
