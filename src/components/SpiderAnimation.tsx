import { motion, useScroll, useTransform } from 'framer-motion';

export default function SpiderAnimation() {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress (0 to 1) to vertical translation (e.g., 0 to 80vh)
  const spiderY = useTransform(scrollYProgress, [0, 1], [0, 800]);

  return (
    <div className="fixed top-0 right-4 md:right-12 h-screen w-8 pointer-events-none z-50 overflow-visible hidden sm:flex flex-col items-center">
      {/* Silk Thread */}
      <motion.div
        className="w-[1px] bg-black opacity-30 origin-top"
        style={{
          height: spiderY,
          minHeight: '20px'
        }}
      />
      
      {/* Spider SVG */}
      <motion.div
        className="text-black opacity-60"
        style={{
          y: 0,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Body */}
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <circle cx="12" cy="16" r="5" fill="currentColor" />
          
          {/* Left Legs */}
          <path d="M9 12 C 5 10, 2 12, 2 14" />
          <path d="M8 14 C 4 14, 2 16, 2 18" />
          <path d="M8 15 C 5 16, 3 19, 4 21" />
          <path d="M9 10 C 6 8, 4 8, 4 6" />

          {/* Right Legs */}
          <path d="M15 12 C 19 10, 22 12, 22 14" />
          <path d="M16 14 C 20 14, 22 16, 22 18" />
          <path d="M16 15 C 19 16, 21 19, 20 21" />
          <path d="M15 10 C 18 8, 20 8, 20 6" />
        </svg>
      </motion.div>
    </div>
  );
}
