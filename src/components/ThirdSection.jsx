import React from "react";
import { FaCheck } from "react-icons/fa";

function ThirdSection() {
  return (
    <div className="max-w-4xl mx-auto my-10 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section - Top on mobile, left on desktop */}
        <div className="lg:w-1/2 p-4">
          <img
            src="4.jpg"
            alt="Sexual education cartoon illustration"
            className="w-full h-auto object-cover lg:h-full rounded-lg "
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">
            لماذا التوعية الجنسية مهمة؟
          </h2>

          <ul className="space-y-4 text-right">
            {[
              "حماية الصحة: تقلل من انتشار الأمراض الجنسية غير المعروفة والأحمال غير المخطط لها.",
              "تعزيز الفهم تساعد الأفراد على فهم أجسادهم وتقبلها.",
              "تجنب المخاطر تُمكّن الناس من التمييز بين العلاقات الصحية وغير الصحية.",
              "تشجيع الحوار تجعل مناقشة الجنس والعلاقات موضوعًا طبيعيًا بدلاً من أن يكون موضوعًا محظورًا أو مخجلا.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full mx-3 my-1 flex-shrink-0">
                  <FaCheck className="h-4 w-4" />
                </span>
                <span className="text-gray-700 text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;