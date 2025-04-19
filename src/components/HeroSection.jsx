import { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-screen video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        
        // poster='/poster.jpg'
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-5 right-5 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-all flex items-center justify-center"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
      </button>
    </section>
  );
}