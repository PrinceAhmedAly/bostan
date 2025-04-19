import { useState, useRef } from 'react';
import { FaPlay, FaPause, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100dvh" }}>
      {/* Full-screen video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animated arrow at middle bottom */}
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaArrowDown className="text-white text-2xl opacity-80" />
      </motion.div>

      {/* Play/Pause button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-5 right-5 text-white p-4 flex items-center justify-center"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
      </button>
    </section>
  );
}