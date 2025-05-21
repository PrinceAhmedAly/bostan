import React from "react";
import { motion } from "framer-motion";

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

const FadeIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.div>
);

function FirstSection() {
  return (
    <div id="about" className="mt-5 text-lg max-w-6xl mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-2xl font-bold mb-6 text-right">يعني ايه التوعية الجنسية ؟!</h2>
      </ScrollReveal>

      {/* First section - image left on md+ */}
      <div className="flex flex-col md:flex-row mb-8 md:mb-12 gap-4 md:gap-8">
        <div className="w-full md:w-1/2">
          <FadeIn>
            <img 
              src="/1-1.png" 
              alt="male-female" 
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </FadeIn>
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <ScrollReveal delay={0.2}>
            <p className="text-right text-gray-700 leading-relaxed">
              التوعية الجنسية هي عملية تثقيفية شاملة تهدف إلى تمكين الأفراد من فهم
              أفضل لجوانب الحياة الجنسية والجسدية والعاطفية، بحيث يصبحون قادرين على
              اتخاذ قرارات سليمة وصحية بشأن أجسادهم وعلاقاتهم. تتجاوز هذه التوعية
              مجرد تقديم معلومات عن الجسد إلى تقديم فهم أعمق للحقوق والمسؤوليات
              المرتبطة بالجنس والهوية والعلاقات.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Second section - image right on md+ (reversed) */}
      <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-8">
        <div className="w-full md:w-1/2">
          <FadeIn>
            <img 
              src="/3.jpg" 
              alt="special needs education" 
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </FadeIn>
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <ScrollReveal delay={0.2}>
            <p className="text-right text-gray-700 leading-relaxed">
              كما يرتبط موضوع التوعية الجنسية، بموضوع التربية الجنسية والبرامج التي
              تصمم من أجلها لحماية ذوي الاحتياجات الخاصة من الإساءة الجنسية وذلك
              بهدف تنمية الوعي لديهم بحقوقهم الجنسية وتعتبر هذه الفئة من أكثر
              الشرائح الاجتماعية التي تعرضت ومازالت تتعرض للإساءة والاستغلال الجنسي
              وهو ما يترتب عليه عديد من الآثار النفسية والجسدية السيئة التي تزيد من
              معاناتهم ومعاناة القائمين على رعايتهم.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;