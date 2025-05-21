import React from "react";
import { FaHeart, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation components
const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const FadeIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    {children}
  </motion.div>
);

const StoryOne = () => {
  return (
    <div id="story" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Story Header */}
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            قصة وعي: عندما يتحدث الصمت
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
      </ScrollReveal>

      {/* Story Content */}
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Image Container */}
        <ScrollReveal>
          <div className="lg:w-2/2 relative">
            <FadeIn>
              <div className="w-full h-64 md:h-96 bg-blue-100 overflow-hidden">
                <img
                  src="/11.jpg"
                  alt="Teacher comforting child"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </FadeIn>
            <ScrollReveal>
              <div className="absolute -bottom-6 -right-3 bg-white p-4 rounded-lg shadow-lg w-3/4">
                <FaQuoteLeft className="text-blue-600 text-2xl mb-2" />
                <p className="text-gray-700 text-right">
                  "الصمت ليس حلاً، والحقيقة تستحق القتال من أجلها"
                </p>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Story Text */}
        <div className="lg:w-1/2">
          <ScrollReveal>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-1xl md:text-2xl font-bold text-gray-800 mb-4 text-right">
                قصة لمساعدة ولي الأمر على إدراك اهمية الموضوع:
              </h2>
              <div className="space-y-4 text-right text-gray-700 leading-relaxed">
                <ScrollReveal>
                  <p>
                    في إحدى المدارس الدولية، حيث تتشابك أحلام الصغار مع براءة
                    الطفولة، كانت "نيلي" تعمل معلمة للغة العربية. كانت تحب وظيفتها،
                    تراها رسالة أكثر منها مجرد عمل، لكن ما لم تكن تتوقعه هو أن تصبح
                    شاهدة على سر خطير.
                  </p>
                </ScrollReveal>
                <ScrollReveal>
                  <p>
                    بدأ الأمر عندما لاحظت تغيّرًا في سلوك "ليلى"، تلك الطفلة الذكية
                    التي كانت دائما الأولى في الصف، لكنها صارت فجأة صامتة، تنزوي في
                    المقعد الأخير، وتهرب من أنظار الجميع.
                  </p>
                </ScrollReveal>
                <ScrollReveal>
                  <p className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-600">
                    <FaHeart className="text-red-500 inline mx-2" />
                    لم يكن الأمر طبيعيًا، فحاولت نيللي التقرب منها بلطف، حتى كشفت
                    لها الطفلة سرها المؤلم: كانت تتعرض للتحرش من أحد الأشخاص داخل
                    المدرسة.
                  </p>
                </ScrollReveal>
                <ScrollReveal>
                  <p>
                    اهتز كيان نيلي، لكنها قررت ألا تصمت بدأت رحلة البحث عن الحقيقة،
                    رغم التحذيرات التي تلقتها من الإدارة وبعض الزملاء بعدم التدخل.
                    كانت تعلم أن مواجهة هذا الأمر لن تكون سهلة، لكن ضميرها لم يسمح
                    لها بغض الطرف.
                  </p>
                </ScrollReveal>
                <ScrollReveal>
                  <p>
                    بمساعدة "عمر"، زميلها الذي كان يشاركها الشغف نفسه، بدأت نيلي في
                    جمع الأدلة والتحدث مع طلاب آخرين، فاكتشفت أن ليلى لم تكن
                    الوحيدة. هناك أطفال آخرون يعانون في صمت.
                  </p>
                </ScrollReveal>
                <ScrollReveal>
                  <p>
                    لم تستسلم لجأت إلى الصحافة، وأثارت القضية على وسائل التواصل الاجتماعي، حتى تحولت إلى قضية رأي عام. ومع تصاعد الضغوط، فتحت السلطات تحقيقا كشف عن شبكة من الانتهاكات.
                  </p>
                </ScrollReveal>
                <ScrollReveal>
                  <p>
                    في النهاية، تم القبض على الجاني، واتخذت المدرسة إجراءات صارمة لحماية الأطفال، لكن الأهم من ذلك، أن نيلي أثبتت أن الصمت ليس حلا، وأن الحقيقة تستحق القتال من أجلها.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Story Conclusion */}
      <ScrollReveal>
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-right">
            الدروس المستفادة
          </h3>
          <ul className="space-y-3 text-right text-gray-700">
            <ScrollReveal>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center ml-2">
                  1
                </span>
                <span>تغيرات السلوك المفاجئة قد تكون علامة تحذيرية</span>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center ml-2">
                  2
                </span>
                <span>الصمت ليس حلاً عند مواجهة الانتهاكات</span>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center ml-2">
                  3
                </span>
                <span>التوعية الجنسية تحمي الأطفال من الاستغلال</span>
              </li>
            </ScrollReveal>
          </ul>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default StoryOne;