import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

function ThirdSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto my-10 bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Section - Top on mobile, left on desktop */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 p-4"
        >
          <img
            src="4.jpg"
            alt="Sexual education cartoon illustration"
            className="w-full h-auto object-cover lg:h-full rounded-lg"
          />
        </motion.div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-right"
          >
            لماذا التوعية الجنسية مهمة؟
          </motion.h2>

          <ul className="space-y-4 text-right">
            {[
              "حماية الصحة: تقلل من انتشار الأمراض الجنسية غير المعروفة والأحمال غير المخطط لها.",
              "تعزيز الفهم تساعد الأفراد على فهم أجسادهم وتقبلها.",
              "تجنب المخاطر تُمكّن الناس من التمييز بين العلاقات الصحية وغير الصحية.",
              "تشجيع الحوار تجعل مناقشة الجنس والعلاقات موضوعًا طبيعيًا بدلاً من أن يكون موضوعًا محظورًا أو مخجلا.",
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1 + 0.3
                }}
                className="flex items-start"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: index * 0.1 + 0.3
                  }}
                  className="bg-blue-100 text-blue-800 p-1 rounded-full mx-3 my-1 flex-shrink-0"
                >
                  <FaCheck className="h-4 w-4" />
                </motion.span>
                <span className="text-gray-700 text-base md:text-lg">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default ThirdSection;