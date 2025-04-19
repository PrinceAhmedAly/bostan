import React from "react";
import {
  FaHandsHelping,
  FaDoorOpen,
  FaTshirt,
  FaSmile,
  FaUsers,
  FaHandPaper,
  FaChild,
  FaHeart
} from "react-icons/fa";

function SpecialNeedsBoundaries() {
  const examples = [
    {
      title: "اللمس الشخصي",
      icon: <FaHandPaper className="text-purple-500" />,
      image: "personal-space.jpg",
      example: "لو حسيت أنك لا تريد أن يلمسك أحد، ممكن أن تقول 'لا' أو تبتعد عنهم. من حقك أن تكون مرتاح وأن تقرر من يستطيع لمسك.",
      explanation: "من المهم أن يتعلم الطفل أن له الحق في رفض اللمس إذا لم يكن مريحًا له، سواء كان من أقرانه أو البالغين. يمكن استخدام إشارات أو صور لمساعدة الطفل على فهم هذه الفكرة."
    },
    {
      title: "الخصوصية في غرفة النوم",
      icon: <FaDoorOpen className="text-blue-500" />,
      image: "bedroom-privacy.jpg",
      example: "غرفتك هي مكانك الخاص. عندما تكون في غرفتك، من حقك أن تطلب من الآخرين أن يطرقوا الباب قبل الدخول.",
      explanation: "تعلم الأطفال أن لكل شخص مساحة خاصة به، ومن المهم احترام هذه المساحة."
    },
    {
      title: "الاختيارات الشخصية",
      icon: <FaTshirt className="text-green-500" />,
      image: "personal-choices.jpg",
      example: "يمكنك اختيار ما ترتديه اليوم إذا لم يعجبك شيء، يمكننا تبديله. هذا اختيارك.",
      explanation: "من المهم أن يشعر الطفل بأن له الحق في اتخاذ قراراته الخاصة، مثل اختيار الملابس أو الأنشطة التي يشارك فيها."
    },
    {
      title: "التعبير عن المشاعر",
      icon: <FaSmile className="text-yellow-500" />,
      image: "expressing-feelings.jpg",
      example: "لو حسيت بالحزن أو الغضب ممكن أن تقول 'أنا غاضب' أو 'أحتاج إلى وقت لأنني لا أريد التحدث الآن'.",
      explanation: "يساعد الطفل على فهم أن لديه الحق في التعبير عن مشاعره وأنه يمكنه طلب وقت خاص عندما يشعر بالضغط أو الاضطراب."
    },
    {
      title: "التفاعل مع الآخرين",
      icon: <FaUsers className="text-red-500" />,
      image: "social-interaction.jpg",
      example: "إذا كان أحدهم يزعجك أو يجعلك تشعر بعدم الارتياح، يمكنك إخبارهم أن يبتعدوا عنك. يمكن أن تقول 'من فضلك، توقف' أو 'أنا لا أحب ذلك'.",
      explanation: "من الضروري تعليم الطفل كيفية وضع حدود مع الآخرين في المواقف الاجتماعية والابتعاد عن الأشخاص أو المواقف التي تجعله غير مرتاح."
    },
    {
      title: "الموافقة على المساعدة",
      icon: <FaHandsHelping className="text-teal-500" />,
      image: "consent-help.jpg",
      example: "إذا كنت بحاجة إلى مساعدة في حمل شيء ثقيل أو في القيام بشيء، يمكنك أن تطلب المساعدة، ولكن إذا لم تكن بحاجة إلى المساعدة، يمكنك قول 'لا شكرًا'.",
      explanation: "من المهم أن يتعلم الطفل كيف يقرر متى يحتاج إلى مساعدة ومتى يريد القيام بشيء بمفرده."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaChild className="text-3xl text-purple-600" />
          <h1 className="text-2xl sm:text-3xl font-bold text-right">
            تعليم الحدود الشخصية للأطفال ذوي الاحتياجات الخاصة
          </h1>
        </div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-right">
          هذه الأمثلة تساعد الأطفال ذوي الاحتياجات الخاصة على فهم حدودهم الشخصية وتعلم كيفية الدفاع عنها، مما يعزز استقلالهم ورفاههم النفسي والعاطفي.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* <div className="h-48 overflow-hidden">
              <img
                src={example.image}
                alt={example.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div> */}
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-gray-100">
                  {example.icon}
                </div>
                <span>{index +1}.</span>
                <h2 className="text-xl font-semibold text-right flex-1">
                  {example.title}
                </h2>
              </div>
              
              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-right font-medium">
                  "{example.example}"
                </p>
              </div>
              
              <p className="text-gray-700 text-right leading-relaxed">
                {example.explanation}
              </p>
            </div>
          </div>
        ))}
      </div>

 
    </div>
  );
}

export default SpecialNeedsBoundaries;