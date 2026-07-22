import { motion } from 'framer-motion';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <motion.div 
        animate={{ x: [0, 40, 40, 0, 0], y: [0, 0, 40, 40, 0], rotate: [0, 90, 180, 270, 360] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute top-20 right-1/4 w-16 h-16 bg-neo-yellow rounded-full border-[3px] border-black hidden md:block"
      />
      <motion.div 
        animate={{ x: [0, -40, -40, 0, 0], y: [0, 0, -40, -40, 0], rotate: [0, -90, -180, -270, -360] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute bottom-40 right-1/3 w-12 h-12 bg-neo-red border-[3px] border-black hidden md:block"
      />
      <motion.div 
        animate={{ x: [0, 40, 40, 0, 0], y: [0, 0, -40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute top-40 left-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-neo-blue drop-shadow-[0_4px_0_rgba(0,0,0,1)] hidden lg:block"
      />

      <div className="max-w-4xl relative z-10">
        {/* Tag Pill */}
        <div className="inline-block bg-neo-yellow neo-border px-4 py-1.5 font-bold text-sm uppercase mb-8 neo-shadow">
          AI INTERN @ HOOC AI TECHNOLOGIES
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading leading-[1.1] mb-8">
          ENGINEERING THE FUTURE OF <br />
          <span className="text-neo-red relative inline-block">
            INTELLIGENT
            <span className="absolute bottom-0 left-0 w-full h-[6px] md:h-[8px] bg-neo-red -mb-2 border-y-[2px] border-black hidden sm:block"></span>
          </span>
          {' '}SYSTEMS.
        </h1>

        {/* Description Paragraph */}
        <div className="border-l-[6px] border-neo-blue pl-6 my-10 max-w-2xl">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            Specializing in Generative AI, RAG architectures, and Multilingual Temporal Extraction. 
            Currently an IT student at KIET Group of Institutions, building systems that bridge the gap between complex algorithms and human needs.
          </p>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="https://www.linkedin.com/in/vaibhav-mishra-a60736294/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white neo-border px-6 py-3 font-bold uppercase neo-shadow-hover text-black">
            <LinkedinIcon />
            LinkedIn
          </a>
          <a href="https://www.github.com/V1629" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white neo-border px-6 py-3 font-bold uppercase neo-shadow-hover text-black">
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
