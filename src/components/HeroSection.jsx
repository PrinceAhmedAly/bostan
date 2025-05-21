import React, { useState, useRef } from "react";
import { FaPlay, FaPause, FaLeaf, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./NavBar";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const leaf = {
    hidden: { rotate: -90, opacity: 0 },
    show: { 
      rotate: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const videoContainer = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navbar />
      <motion.section 
        initial="hidden"
        animate="show"
        variants={container}
        className="relative w-full min-h-screen flex flex-col items-center justify-center gap-6 md:gap-8 px-4 py-12 md:py-16 bg-gray-100"
      >
        {/* Text Content */}
        <motion.div variants={container} className="text-center space-y-4 md:space-y-6">
          <motion.h1 variants={item} className="text-3xl md:text-5xl font-bold text-gray-800">
            مرحبا بكم في موقع
          </motion.h1>
          
          <motion.div 
            variants={container}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <motion.div variants={leaf}>
              <FaLeaf className="text-green-600 text-4xl" />
            </motion.div>
            <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-gray-800">
              طوق نجاة
            </motion.h1>
          </motion.div>
          
          <motion.p variants={item} className="text-xl text-green-600">
            للتوعية والإرشاد الجنسي
          </motion.p>
          
          <motion.p variants={item} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            نحن موقع متخصص في التوعية والإرشاد الجنسي عن طريق عرض محتوى قيّم موجه لأكثر من فئة مثل الأطفال والأهالي و الاخصائيون.
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          variants={container}
          className="flex flex-col sm:flex-row gap-2"
        >
          <motion.div variants={item}>
            <Link
              to="/about"
              className="px-6 py-2 border border-gray-600 hover:bg-gray-200 rounded-md text-gray-700 transition duration-300 text-center flex items-center justify-center gap-3"
            >
              اعرف أكثر
              <FaHeart className="text-red-400"/>
            </Link>
          </motion.div>
          
          <motion.div variants={item}>
            <button
              onClick={togglePlayPause}
              className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300"
            >
              {isPlaying ? (
                <>
                  <FaPause />
                  إيقاف الفيديو
                </>
              ) : (
                <>
                  <FaPlay />
                  شاهد الفيديو
                </>
              )}
            </button>
          </motion.div>
        </motion.div>

        {/* Video Container */}
        <motion.div 
          variants={videoContainer}
          className="w-full max-w-4xl aspect-video px-4 md:px-8 md:mt-2"
        >
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/u87uTUTJqU0?si?autoplay=0&mute=0&enablejsapi=1`}
            className="w-full h-full rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="فيديو التوعية"
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero;