import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Play and Pause Icons
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>
);

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // We use a promise here to handle play() rejection which can happen if user hasn't interacted with page
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/song.mp3" 
        loop
        onEnded={() => setIsPlaying(false)}
      />
      <motion.button
        onClick={togglePlay}
        whileHover={!isPlaying ? { scale: 1.05 } : undefined}
        whileTap={{ scale: 0.95 }}
        animate={
          isPlaying
            ? {
                scale: [1, 1.15, 1],
                rotate: [0, -10, 10, -10, 0],
                x: [0, -5, 5, -5, 0],
                y: [0, -5, 5, -5, 0]
              }
            : { scale: 1, rotate: 0, x: 0, y: 0 }
        }
        transition={
          isPlaying
            ? {
                duration: 0.15,
                repeat: Infinity,
                ease: "linear"
              }
            : { duration: 0.2 }
        }
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 bg-neo-yellow neo-border rounded-full flex items-center justify-center neo-shadow-hover z-50 text-black overflow-hidden"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <div className="flex items-center justify-center w-full h-full pl-1">
          {/* pl-1 slightly centers the play icon visually since a triangle is left-heavy */}
          {isPlaying ? <span className="-ml-1"><PauseIcon /></span> : <PlayIcon />}
        </div>
      </motion.button>
    </>
  );
}
