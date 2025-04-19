import React from "react";
import { AwareContents } from "../data/data";
import { FaPlay, FaPause } from 'react-icons/fa';

function SecondSection() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 mt-5">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-right">مكونات التوعية الجنسية</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {AwareContents.map((content) => (
                    <div 
                        key={content.elNum} 
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-200"
                    >
                        {/* Header with number, title, and icon */}
                        <div className="flex items-center gap-4 p-4 sm:p-6 bg-gray-50">
                            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white text-lg sm:text-xl font-medium">
                                {content.elNum}
                            </div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex-grow text-right">
                                {content.elName}
                            </h2>
                        </div>
                        
                        {/* Description */}
                        <div className="p-4 sm:p-6 text-gray-700 space-y-3 sm:space-y-4 text-right">
                            {content.describtion.split('\n').map((paragraph, i) => (
                                <p key={i} className="text-base sm:text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SecondSection;