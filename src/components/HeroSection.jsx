import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef(null);
  const youtubeVideoId = "WccJu3lAAjs?si"; // Replace with your YouTube ID

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // YouTube iframes require postMessage to control playback
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: isPlaying ? "pauseVideo" : "playVideo",
        }),
        "*"
      );
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* YouTube Video Background - Full Screen */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&enablejsapi=1`}
          className="w-full h-full object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Background Video"
        />
        {/* Video overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Play/Pause Button (Bottom Right) */}
      <button
        onClick={togglePlayPause}
        className="absolute z-10 bottom-8 right-8 p-4 40 transition-all"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <FaPause className="h-8 w-8 text-white" />
        ) : (
          <FaPlay className="h-8 w-8 text-white" />
        )}
      </button>

      {/* About Link - Bottom Left */}
      <Link
        to="/about"
        className="absolute left-8 bottom-12 z-10 px-6 py-2 border border-white rounded-sm text-white hover:bg-white/10 transition duration-300"
      >
        من نحن؟ 
      </Link>
    </section>
  );
};

export default Hero;
