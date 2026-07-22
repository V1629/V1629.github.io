
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 border-b-[4px] border-black bg-neo-bg sticky top-0 z-40">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 bg-neo-red border-[3px] border-black"></div>
        <span className="font-heading text-2xl tracking-tight uppercase">Vaibhav Mishra</span>
      </div>

      {/* Links (Hidden on mobile) */}
      <div className="hidden md:flex items-center gap-4 font-bold">
        <a href="#experience" className="px-3 py-1 uppercase border-[3px] border-transparent hover:border-black hover:bg-neo-red hover:text-white transition-colors duration-200">Work</a>
        <a href="#projects" className="px-3 py-1 uppercase border-[3px] border-transparent hover:border-black hover:bg-neo-blue hover:text-white transition-colors duration-200">Projects</a>
        <a href="#skills" className="px-3 py-1 uppercase border-[3px] border-transparent hover:border-black hover:bg-neo-yellow hover:text-black transition-colors duration-200">Skills</a>
        <a href="#education" className="px-3 py-1 uppercase border-[3px] border-transparent hover:border-black hover:bg-neo-red hover:text-white transition-colors duration-200">Education</a>
      </div>

      {/* Resume Button */}
      <a href="https://drive.google.com/file/d/1lceAzeX4ll7dTPBe06Rdnheqf4WwdrDr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold py-2 px-6 uppercase border-[3px] border-black neo-shadow-red hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_var(--color-neo-red)] transition-all">
        Resume
      </a>
    </nav>
  );
}
