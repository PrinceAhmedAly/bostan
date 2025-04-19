import React from "react";
import { motion } from "framer-motion";
import {
  FaChild,
  FaHandsHelping,
  FaUserShield,
  FaComments,
  FaSchool,
  FaHeart,
  FaDoorOpen,
  FaTshirt,
  FaSmile,
  FaUsers,
  FaHandPaper
} from "react-icons/fa";

// Animation components
const SectionReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const ItemReveal = ({ children, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.5,
      delay: index * 0.1
    }}
  >
    {children}
  </motion.div>
);

function BodySafetyEducation() {
  const sections = [
    {
      title: "كيف نوضح للطفل حق رفض أي لمسة غير مرغوب فيها ؟!",
      icon: <FaChild className="text-blue-600 text-2xl" />,
      image: "9-9.jpg",
      introduction: "تعليم الأطفال عن سلامة أجسادهم قد يكون تحديًا للآباء ومقدمي الرعاية، لكن من الضروري البدء في توعية الأطفال منذ سن مبكرة باستخدام لغة وأساليب مناسبة لأعمارهم.",
      items: [
        {
          icon: <FaHandsHelping className="text-blue-500" />,
          title: "شرح أجزاء الجسم باللغة المناسبة",
          content: "عندما يتعلم الأطفال الكلمات الصحيحة لأجزاء الجسم، يصبحون قادرين على التعبير بشكل أفضل عن أي شيء غير مناسب يحدث لهم. من المهم تضمين الأسماء الصحيحة للأعضاء الخاصة بجانب الأسماء الأخرى مثل 'البطن' والذراعين'، هذه الطريقة تعزز لديهم فهما صحيًا لأجسادهم."
        },
        {
          icon: <FaUserShield className="text-blue-500" />,
          title: "التوعية باللمسات الآمنة وغير الآمنة",
          content: "من الضروري توضيح مفهوم 'اللمسة الآمنة' للأطفال، وهي اللمسات التي تجعلهم يشعرون بالراحة والأمان، مثل العناق أو وضع الذراع حول الكتف. كما يجب أن يعرفوا أن لهم الحق في رفض أي لمسة تجعلهم غير مرتاحين، حتى من الأشخاص المقربين."
        },
        {
          icon: <FaHandPaper className="text-blue-500" />,
          title: "تعليم الحدود الشخصية",
          content: "يحتاج الأطفال إلى فهم أهمية وضع حدود لمساحتهم الشخصية. هذا يعني أنه من حقهم أن يقولوا 'لا' إذا شعروا بعدم الراحة تجاه أي نوع من اللمس أو السلوك."
        },
        {
          icon: <FaComments className="text-blue-500" />,
          title: "تشجيع التواصل المفتوح",
          content: "يجب إخبار الأطفال أنهم يمكنهم اللجوء إلى آبائهم أو مقدمي الرعاية في أي وقت للتحدث عن أي موقف غير مريح، بغض النظر عن مدى إحراجهم أو خوفهم."
        },
        {
          icon: <FaSchool className="text-blue-500" />,
          title: "تدريب على المواقف الصعبة",
          content: "ممارسة السيناريوهات المحتملة مع الأطفال يساعدهم على التعرف على السلوكيات غير المناسبة وكيفية التصرف حيالها. اجعلهم يتدربون على رفض اللمسات غير الآمنة."
        },
        {
          icon: <FaHeart className="text-blue-500" />,
          title: "بناء الثقة",
          content: "تمكين الطفل من تولي مسؤولية سلامة جسده يعزز ثقته بنفسه ويمنحه الأدوات اللازمة لحماية نفسه في المستقبل."
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {sections.map((section, sectionIndex) => (
        <SectionReveal key={sectionIndex} delay={sectionIndex * 0.2}>
          <div className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row-reverse">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:w-1/2"
              >
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              
              {/* Content Section */}
              <div className="md:w-1/2 p-6 sm:p-8">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      delay: 0.4
                    }}
                  >
                    {section.icon}
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-right">
                    {section.title}
                  </h2>
                </motion.div>

                {section.introduction && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-700 mb-6 text-right leading-relaxed"
                  >
                    {section.introduction}
                  </motion.p>
                )}

                <ol className="space-y-6 text-right">
                  {section.items.map((item, itemIndex) => (
                    <ItemReveal key={itemIndex} index={itemIndex}>
                      <li className="flex flex-col gap-2">
                        <div className="flex items-start gap-3">
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              type: "spring",
                              stiffness: 300,
                              damping: 15,
                              delay: itemIndex * 0.1 + 0.6
                            }}
                            className="bg-blue-100 text-blue-800 p-2 rounded-full mt-1"
                          >
                            {item.icon}
                          </motion.span>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-800">
                              {itemIndex + 1}. {item.title}
                            </h3>
                            <motion.p 
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: itemIndex * 0.1 + 0.7 }}
                              className="text-gray-700 mt-1 leading-relaxed"
                            >
                              {item.content}
                            </motion.p>
                          </div>
                        </div>
                      </li>
                    </ItemReveal>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}

export default BodySafetyEducation;