import React from "react";
import { FaHandsHelping, FaShieldAlt, FaPrayingHands } from "react-icons/fa";

const Ending = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Main Conclusion Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 md:p-8 shadow-md mb-8">
        <div className="flex items-center gap-3 mb-4">
          <FaShieldAlt className="text-blue-600 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800">خاتمة وتوصيات</h2>
        </div>
        
        <div className="space-y-4 text-right text-gray-700 text-lg leading-relaxed">
          <p className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">
              <FaHandsHelping />
            </span>
            <span>
              في النهاية، التوعية الجنسية موضوع مهم لحماية الناس ومساعدتهم على فهم أجسامهم واتخاذ قرارات صحيحة. عندما نتكلم عن هذه الأمور بشكل واضح وصحيح، نحمي أنفسنا ومجتمعنا من الأخطاء والمشاكل.
            </span>
          </p>
          
          <p>
            لذلك، يجب أن نهتم بالتعليم والتوعية لنعيش حياة أفضل وأكثر أمانًا.
          </p>
        </div>
      </div>

      {/* Closing Dua Section */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 md:p-8 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <FaPrayingHands className="text-green-600 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800">ختامًا</h2>
        </div>
        
        <div className="space-y-4 text-right text-gray-700 text-lg leading-relaxed">
          <p>
            وفي الختام، إن وفقنا فيما قدمنا فذلك فضل من الله وكرم، وإن قصرنا فهو من نفسنا ومن الشيطان.
          </p>
          
          <p className="flex items-start gap-2">
            <span className="text-green-500 mt-1">
              <FaPrayingHands />
            </span>
            <span>
              وأرجو منكم دعوةً بظهر الغيب تسعد بها ارواحنا. أسأل الله لي ولكم التوفيق والسداد في القول والعمل.
            </span>
          </p>
          
          <p className="text-center text-xl font-medium text-green-700 mt-6">
            والسلام عليكم ورحمة الله وبركاته
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="flex justify-center mt-8 space-x-4">
        <div className="w-12 h-1 bg-blue-300 rounded-full"></div>
        <div className="w-12 h-1 bg-purple-300 rounded-full"></div>
        <div className="w-12 h-1 bg-green-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Ending;