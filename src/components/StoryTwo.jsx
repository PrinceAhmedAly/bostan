import React, { useState } from "react";
import { FaHeart, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const StoryTwo = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const storyParts = [
    {
      text: "كان هناك أرنب صغير اسمه لوز، وكان يعيش في الغابة مع عائلته وأصدقائه. كان لوز طيبًا ومحبوبًا من الجميع، وكان يحب اللعب في الغابة والركض بين الأشجار. لكن هناك شيء كان غريبا عن لوز؛ كان لديه سر صغير لا يخبر به أحدًا.",
      image: "story1.jpg",
    },
    {
      text: "في يوم من الأيام، بينما كان لوز يلعب مع أصدقائه في الحديقة، جاء أحدهم وقال له: لوز، تعال هنا أرني أين يختبئ ذيلك!، وأخذ يلمس ظهر لوز. وريني ذيلك شعر لوز بشيء غريب في قلبه، وابتسم بخجل، وقال بصوت هادئ لا، هذا جزء من جسمي وأنا لا أحب أن يلمسه أحد.",
      image: "story2.jpg",
    },
    {
      text: "ثم ذهب لوز إلى والدته، وأخبرها بما حدث. قالت له والدته بابتسامة حانية لوز، جسمك هو سرك الصغير. لا يحق لأي شخص أن يلمس أي جزء من جسمك دون إذنك. إذا شعرت بشيء غير مريح، عليك أن تقول لا وتبتعد عن الموقف. ومن المهم أن تخبرني أو تخبر أي شخص بالغ عندما يحدث شيء يجعلك تشعر بالغرابة.",
      image: "story3.jpg",
    },
    {
      text: "ثم علم لوز درسًا مهمًا أنه يجب عليه دائمًا حماية جسده وأنه لا يوجد شخص آخر يمكنه أن يتعدى على خصوصيته. في الأيام التالية، كان لوز يطمئن نفسه عندما كان يلعب مع أصدقائه، وكان يعلم أن سر لوز الصغير هو أنه يستطيع أن يقول لا إذا شعر بشيء غريب، وأنه يمكنه دائما طلب المساعدة من شخص بالغ.",
      image: "story4.jpg",
    },
  ];

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setActiveSection((prev) => {
      const newIndex = prev + newDirection;
      return Math.max(0, Math.min(storyParts.length - 1, newIndex));
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Story Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mb-2">
          قصة "سر لوز الصغير"
        </h1>
        <p className="text-gray-600">قصه يمكن روايتها للطفل للتوعية</p>
      </div>

      {/* Interactive Story */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100">
        {/* Story Content */}
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/2 px-3 pt-3 flex justify-center items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeSection}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-purple-100 w-full h-64 md:w-100 md:h-90 overflow-hidden rounded-lg"
              >
                <motion.img
                  src={storyParts[activeSection].image}
                  alt="قصة لوز"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-1">
                  <h2 className="text-xl font-semibold text-purple-800 text-right">
                    الجزء {activeSection + 1}
                  </h2>
                </div>

                <motion.p
                  className="text-gray-700 text-right text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {storyParts[activeSection].text}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons with improved styling */}
            <div className="flex justify-between">
              <motion.button
                onClick={() => navigate(-1)}
                disabled={activeSection === 0}
                className={`px-4 py-2 rounded-lg flex items-center gap-1 ${
                  activeSection === 0
                    ? "bg-purple-300 text-white cursor-not-allowed"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
                whileHover={activeSection !== 0 ? { scale: 1.05 } : {}}
                whileTap={activeSection !== 0 ? { scale: 0.95 } : {}}
              >
                <FaArrowRight />
                السابق
              </motion.button>

              <motion.button
                onClick={() => navigate(1)}
                disabled={activeSection === storyParts.length - 1}
                className={`px-4 py-2 rounded-lg flex items-center gap-1 ${
                  activeSection === storyParts.length - 1
                    ? "bg-purple-300 text-white cursor-not-allowed"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
                whileHover={
                  activeSection !== storyParts.length - 1 ? { scale: 1.05 } : {}
                }
                whileTap={
                  activeSection !== storyParts.length - 1 ? { scale: 0.95 } : {}
                }
              >
                التالي
                <FaArrowLeft />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Moral Lesson */}
      <motion.div
        className="mt-8 p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-start">
          <FaHeart className="text-red-500 text-4xl md:text-3xl mx-2" />
          <div>
            <h3 className="text-xl font-bold text-gray-800 ">
              الدرس المستفاد:
            </h3>
            <p className="text-gray-700 text-right">
              "جسدك هو سرك الصغير، ويجب أن تحميه. لا أحد يحق له أن يلمس أجزاء من
              جسمك إذا لم تشعر بالراحة، ويمكنك دائمًا أن تقول 'لا'."
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StoryTwo;
