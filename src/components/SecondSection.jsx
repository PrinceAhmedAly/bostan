import React from "react";
import { motion } from "framer-motion";
import { AwareContents } from "../data/data";
import { FaPlay, FaPause } from 'react-icons/fa';

// Reusable animation components
const ScrollReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const StaggerReveal = ({ children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.6,
      delay: index * 0.1
    }}
  >
    {children}
  </motion.div>
);

function SecondSection() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 mt-5">
            <ScrollReveal>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-right">مكونات التوعية الجنسية</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {AwareContents.map((content, index) => (
                    <StaggerReveal key={content.elNum} index={index}>
                        <div 
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-200"
                        >
                            {/* Header with number, title, and icon */}
                            <div className="flex items-center gap-4 p-4 sm:p-6 bg-gray-50">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: index * 0.1 + 0.2
                                    }}
                                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white text-lg sm:text-xl font-medium"
                                >
                                    {content.elNum}
                                </motion.div>
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex-grow text-right">
                                    {content.elName}
                                </h2>
                            </div>
                            
                            {/* Description */}
                            <div className="p-4 sm:p-6 text-gray-700 space-y-3 sm:space-y-4 text-right">
                                {content.describtion.split('\n').map((paragraph, i) => (
                                    <motion.p 
                                        key={i} 
                                        className="text-lg leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.4,
                                            delay: index * 0.1 + 0.3 + i * 0.05
                                        }}
                                    >
                                        {paragraph}
                                    </motion.p>
                                ))}
                            </div>
                        </div>
                    </StaggerReveal>
                ))}
            </div>
        </div>
    );
}

export default SecondSection;