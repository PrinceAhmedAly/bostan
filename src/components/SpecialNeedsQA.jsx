import React, { useState } from "react";
import { FaPlus, FaMinus, FaChild, FaHeart } from "react-icons/fa";

function SpecialNeedsQA() {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const qaList = [
    {
      question: "من يملك جسدي؟",
      answer: "جسدي ملكي وحدي، ولا أحد يستطيع لمسه دون إذني.",
    },
    {
      question: "ما هي أجزاء جسدي الخاصة؟",
      answer: "هي الأجزاء التي تُغطى بالملابس، هي خاصة بي.",
    },
    {
      question: "متى يمكن لشخص أن يلمس جسدي؟",
      answer:
        "فقط إذا كنت أحتاج مساعدة من شخص أعرفه وأثق به، مثل والدي أو الطبيب أثناء الفحص.",
    },
    {
      question: "ماذا أفعل إذا لمسني أحد دون إذني؟",
      answer: "أقول 'لا' بصوت واضح، أبتعد فورًا وأخبر والدي أو معلمي.",
    },
    {
      question: "هل يمكنني سؤال شخص كبير إذا لم أفهم شيئًا؟",
      answer: "نعم، من حقي أن أسأل والدي أو معلمي عن أي شيء يخص جسدي.",
    },
    {
      question: "هل يجب أن ألمس الآخرين دون إذنهم؟",
      answer: "لا، يجب أن أحترم جسد الآخرين مثلما أرغب في احترام جسدي.",
    },
    {
      question: "كيف أحافظ على خصوصية جسدي؟",
      answer:
        "أحتفظ بأجزاء جسدي الخاصة لنفسي ولا أظهرها أو أشاركها مع أي شخص غير موثوق به.",
    },
    {
      question: "ماذا أفعل إذا رأيت شخصا يتعرض للمس بطريقة غير مناسبة؟",
      answer: "أخبر شخصا بالغًا تثق به مثل والدي أو معلمي، فورًا.",
    },
    {
      question: "كيف أعرف إذا كانت علاقتي مع شخص ما صحية؟",
      answer:
        "تكون العلاقة صحية إذا كنت أشعر بالأمان والراحة ولا يُطلب مني شيء يجعلني غير مرتاح.",
    },
    {
      question: "لماذا أتعلم عن جسدي وحدودي؟",
      answer: "لأحمي نفسي وأعرف ما هو التصرف الصحيح والخاطئ فيما يتعلق بجسدي.",
    },
  ];

  return (
    <div id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <FaChild className="text-3xl text-blue-600" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            توعية ذوي الاحتياجات الخاصة حول حقوقهم الجنسية
          </h1>
        </div>
        <p className="text-gray-700 text-center">
          هذه الأسئلة والإجابات سهلة الفهم لتساعد في توعية ذوي الاحتياجات الخاصة
          حول حقوقهم وواجباتهم الجنسية.
        </p>
      </div>

      <div className="space-y-4">
        {qaList.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden   transition-all duration-200 hover:shadow-lg"
          >
            <button
              className="w-full flex items-center justify-between p-4 md:p-5 text-right focus:outline-none"
              onClick={() => toggleItem(index)}
              aria-expanded={expandedItems.includes(index)}
              aria-controls={`qa-${index}`}
            >
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mx-2">
                  {index + 1}
                </span>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {item.question}
                </h2>
              </div>
              <span className="text-blue-600 ml-3">
                {expandedItems.includes(index) ? (
                  <FaMinus className="text-lg" />
                ) : (
                  <FaPlus className="text-lg" />
                )}
              </span>
            </button>

            <div
              id={`qa-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedItems.includes(index) ? "max-h-96" : "max-h-0"
              }`}
            >
              <div
                className={`px-4 md:px-5 pb-4 md:pb-5 transform transition-opacity duration-300 ${
                  expandedItems.includes(index)
                    ? "opacity-100 delay-200"
                    : "opacity-0"
                }`}
              >
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-right leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-5 flex items-center justify-center h-[250px] md:h-[400px] relative">
  {/* Text Container (z-index 0) */}
  <div className="w-2/3 border border-gray-200 rounded-lg flex justify-center items-center bg-white shadow-md h-full z-0">
    <p className="text-blue-800 p-5 text-center text-xl">
      تذكر أن من حقك أن تشعر بالأمان وأن تحمي حدودك الشخصية دائماً.
      <FaHeart className="text-red-500 text-2xl inline" />
    </p>
  </div>

  {/* Image Container (z-index 10) */}
  <div className="w-1/3 h-full overflow-visible relative z-10">
    <img
      src="10.png"
      alt="peaking-girl"
      className="absolute right-[-17px] md:right-[-27px] h-full w-auto object-contain"
      style={{ transform: 'translateX(0)' }}
    />
  </div>
</div>
    </div>
  );
}

export default SpecialNeedsQA;
