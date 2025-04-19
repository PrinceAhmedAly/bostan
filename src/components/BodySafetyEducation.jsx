import React from "react";
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img 
                src={section.image} 
                alt={section.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Content Section */}
            <div className="md:w-1/2 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-2xl sm:text-3xl font-bold text-right">{section.title}</h2>
              </div>

              {section.introduction && (
                <p className="text-gray-700 mb-6 text-right leading-relaxed">
                  {section.introduction}
                </p>
              )}

              <ol className="space-y-6 text-right">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 p-2 rounded-full mt-1">
                        {item.icon}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-800">
                          {itemIndex + 1}. {item.title}
                        </h3>
                        <p className="text-gray-700 mt-1 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BodySafetyEducation;