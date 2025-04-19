import React from "react";
import { FaHeart, FaQuoteLeft } from "react-icons/fa";

const StoryOne = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Story Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          قصة وعي: عندما يتحدث الصمت
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      {/* Story Content */}
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Image Container */}
        <div className="lg:w-1/2 relative">
          <div className="blob-shape w-full h-64 md:h-96 bg-blue-100 overflow-hidden">
            <img
              src="/11.jpg"
              alt="Teacher comforting child"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-3/4">
            <FaQuoteLeft className="text-blue-600 text-2xl mb-2" />
            <p className="text-gray-700 text-right">
              "الصمت ليس حلاً، والحقيقة تستحق القتال من أجلها"
            </p>
          </div>
        </div>

        {/* Story Text */}
        <div className="lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-800 mb-4 text-right">
              قصة لمساعدة ولي الأمر على إدراك اهمية الموضوع:
            </h2>
            <div className="space-y-4 text-right text-gray-700 leading-relaxed">
              <p>
                في إحدى المدارس الدولية، حيث تتشابك أحلام الصغار مع براءة
                الطفولة، كانت "نيلي" تعمل معلمة للغة العربية. كانت تحب وظيفتها،
                تراها رسالة أكثر منها مجرد عمل، لكن ما لم تكن تتوقعه هو أن تصبح
                شاهدة على سر خطير.
              </p>
              <p>
                بدأ الأمر عندما لاحظت تغيّرًا في سلوك "ليلى"، تلك الطفلة الذكية
                التي كانت دائما الأولى في الصف، لكنها صارت فجأة صامتة، تنزوي في
                المقعد الأخير، وتهرب من أنظار الجميع.
              </p>
              <p className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-600">
                <FaHeart className="text-red-500 inline mx-2" />
                لم يكن الأمر طبيعيًا، فحاولت نيللي التقرب منها بلطف، حتى كشفت
                لها الطفلة سرها المؤلم: كانت تتعرض للتحرش من أحد الأشخاص داخل
                المدرسة.
              </p>
              <p>
                اهتز كيان نيلي، لكنها قررت ألا تصمت بدأت رحلة البحث عن الحقيقة،
                رغم التحذيرات التي تلقتها من الإدارة وبعض الزملاء بعدم التدخل.
                كانت تعلم أن مواجهة هذا الأمر لن تكون سهلة، لكن ضميرها لم يسمح
                لها بغض الطرف.{" "}
              </p>
              <p>
                بمساعدة "عمر"، زميلها الذي كان يشاركها الشغف نفسه، بدأت نيلي في
                جمع الأدلة والتحدث مع طلاب آخرين، فاكتشفت أن ليلى لم تكن
                الوحيدة. هناك أطفال آخرون يعانون في صمت. وعندما حاولت تقديم شكوى
                رسمية، ووجهت بالرفض والتكذيب، بل وصل الأمر إلى تهديدها بخسارة
                وظيفتها.{" "}
              </p>
              <p>
              لم تستسلم لجأت إلى الصحافة، وأثارت القضية على وسائل التواصل الاجتماعي، حتى تحولت إلى قضية رأي عام. ومع تصاعد الضغوط، فتحت السلطات تحقيقا كشف عن شبكة من الانتهاكات التي كانت تُخفى تحت ستار النظام التعليمي المرموق.
              </p>
              <p>
              في النهاية، تم القبض على الجاني، واتخذت المدرسة إجراءات صارمة لحماية الأطفال، لكن الأهم من ذلك، أن نيلي أثبتت أن الصمت ليس حلا، وأن الحقيقة تستحق القتال من أجلها، حتى لو كانت  
              <span className="text-blue-900"> "لام شمسية" </span> تحاول أن تختفي في الظل.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Conclusion */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 rounded-xl">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-right">
          الدروس المستفادة
        </h3>
        <ul className="space-y-3 text-right text-gray-700">
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center ml-2">
              1
            </span>
            <span>تغيرات السلوك المفاجئة قد تكون علامة تحذيرية</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center ml-2">
              2
            </span>
            <span>الصمت ليس حلاً عند مواجهة الانتهاكات</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center ml-2">
              3
            </span>
            <span>التوعية الجنسية تحمي الأطفال من الاستغلال</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StoryOne;
