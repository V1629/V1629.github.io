import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionTemplate } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SpiderAnimation() {
  const { scrollY } = useScroll();
  const [isDropped, setIsDropped] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Initial drop spring animation (starts at 0, goes to 200)
  const initialDrop = useSpring(0, { stiffness: 60, damping: 12 });
  
  useEffect(() => {
    // Delay slightly so the user sees it drop after load
    const timer = setTimeout(() => {
      initialDrop.set(200);
      
      // Trigger chat bubble after drop finishes settling
      setTimeout(() => {
        setIsDropped(true);
      }, 1000);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [initialDrop]);

  // Scroll offset: moving down further as user scrolls
  const scrollOffset = useTransform(scrollY, [0, 2000], [0, 800]);

  // Combine drop distance and scroll distance for the thread length
  const totalHeight = useMotionTemplate`calc(${initialDrop}px + ${scrollOffset}px)`;

  // Fade out chat bubble when scrolling down
  const chatOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <div className="fixed top-0 right-4 md:right-24 h-screen w-64 pointer-events-none z-50 overflow-visible hidden sm:flex flex-col items-center">
      {/* New Custom Web Sling */}
      <motion.div
        className="relative origin-top flex justify-center w-8"
        style={{
          height: totalHeight,
          minHeight: '20px'
        }}
      >
        {/* Main string core */}
        <div className="absolute inset-y-0 w-[4px] bg-gray-200 border-x-2 border-gray-400 z-10 shadow-sm"></div>
        {/* Web knots/textures (mimicking the uploaded image) */}
        <div 
          className="absolute inset-0 z-20 w-8"
          style={{
            backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 60px, #9ca3af 60px, #9ca3af 68px, transparent 68px)',
          }}
        />
      </motion.div>
      
      {/* Spider / Spiderman Container */}
      {/* Adjust the marginTop value here to perfectly attach the web to his hands. 
          More negative (e.g. -250px) pulls him higher up the string. */}
      <motion.div
        className="relative flex items-start justify-center z-30"
        style={{ y: 0, marginTop: '-240px' }}
      >
        {!imageError ? (
          <img 
            src="/spidey.png" 
            alt="Spiderman" 
            className="object-contain pointer-events-auto" 
            style={{ width: '400px', height: '400px' }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-black opacity-60 mt-12">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <circle cx="12" cy="16" r="5" fill="currentColor" />
              <path d="M9 12 C 5 10, 2 12, 2 14" />
              <path d="M8 14 C 4 14, 2 16, 2 18" />
              <path d="M8 15 C 5 16, 3 19, 4 21" />
              <path d="M9 10 C 6 8, 4 8, 4 6" />
              <path d="M15 12 C 19 10, 22 12, 22 14" />
              <path d="M16 14 C 20 14, 22 16, 22 18" />
              <path d="M16 15 C 19 16, 21 19, 20 21" />
              <path d="M15 10 C 18 8, 20 8, 20 6" />
            </svg>
          </div>
        )}

        {/* Chat Bubble */}
        <AnimatePresence>
          {isDropped && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -10, y: 10 }}
              animate={{ opacity: 1, scale: 1, x: -10, y: 10 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{ opacity: chatOpacity }}
              className="absolute right-[80%] top-[40%] mr-4 w-48 bg-white border-2 border-black rounded-2xl p-3 shadow-lg pointer-events-auto"
            >
              {/* Chat Bubble Tail */}
              <div className="absolute right-[-10px] top-4 w-4 h-4 bg-white border-r-2 border-b-2 border-black rotate-[-45deg]" />
              <p className="text-sm font-bold text-black m-0 leading-tight">hii , i am spidey. what do you like to see</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
