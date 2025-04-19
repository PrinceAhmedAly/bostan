import React from "react";
import { 
  FaChild, 
  FaSchool, 
  FaHome, 
  FaUsers, 
  FaExclamationTriangle, 
  FaShieldAlt,
  FaUserShield,
  FaBook,
  FaHandsHelping,
  FaUserFriends,
  FaLaptopHouse,
  FaSchool as FaSchoolBuilding,
  FaPhotoVideo,
  FaHands,
  FaUser,
  FaUserCircle,
  FaHandPaper,
  FaCommentAlt,
  FaEye,
  FaBookOpen
} from "react-icons/fa";

function AwarenessEducation() {
  const educationSections = [
    {
      title: "كيف يتم تقديم التوعية الجنسية؟",
      icon: <FaChild className="text-blue-600 text-2xl" />,
      image: "5.jpg",
      items: [
        {
          icon: <FaSchool className="text-blue-500" />,
          title: "في المدارس",
          content: "تقديم دروس تناسب أعمار الطلاب واحتياجاتهم"
        },
        {
          icon: <FaHome className="text-blue-500" />,
          title: "من خلال الأهل",
          content: "بناء حوار مفتوح وصادق مع الأطفال حول هذه المواضيع"
        },
        {
          icon: <FaUsers className="text-blue-500" />,
          title: "المجتمع والإعلام",
          content: "حملات تثقيفية وأدوات تعليمية موجهة للجميع"
        }
      ],
      conclusion: "التوعية الجنسية ليست مجرد معلومات، بل هي أداة لبناء مجتمع أكثر وعيًا واحتراما للصحة والكرامة الفردية"
    },
    {
      title: "الاستغلال الجنسي والتوعية!",
      icon: <FaExclamationTriangle className="text-red-600 text-2xl" />,
      image: "8.jpg",
      items: [
        {
          icon: <FaUserFriends className="text-red-500" />,
          content: "الاستغلال من قبل أفراد العائلة أو مقدمي الرعاية - يمكن أن يتعرض الطفل للاستغلال من قبل شخص مقرب يستغل صعوبة الطفل في التواصل أو فهم الحدود الشخصية."
        },
        {
          icon: <FaLaptopHouse className="text-red-500" />,
          content: "الاستدراج عبر الإنترنت - قد يتم استهداف الأطفال المصابين بالتوحد عبر الإنترنت من قبل أشخاص يستغلون قلة وعيهم بالمخاطر الاجتماعية، مثل التلاعب العاطفي لإرسال صور غير لائقة أو مقابلتهم شخصيًا."
        },
        {
          icon: <FaSchoolBuilding className="text-red-500" />,
          content: "الإساءة في المراكز العلاجية أو المدارس - في بعض الحالات، قد يحدث استغلال من قبل موظفين أو معلمين يسيئون استغلال ضعف قدرة الطفل على التعبير عن الإساءة أو الإبلاغ عنها."
        },
        {
          icon: <FaPhotoVideo className="text-red-500" />,
          content: "الاستغلال في صناعة المحتوى - بعض الأطفال المصابين بالتوحد يتم استغلالهم من قبل الأهل أو الآخرين في تصوير محتوى غير لائق ونشره لتحقيق مكاسب مالية أو اجتماعية."
        },
        {
          icon: <FaHands className="text-red-500" />,
          content: "الإجبار على أفعال غير لائقة - يمكن أن يُجبر الطفل على سلوكيات جنسية دون أن يدرك خطورتها، بسبب ضعف الفهم الاجتماعي لديهم أو عدم قدرتهم على تفسير النوايا السيئة."
        }
      ],
      note: "يجب على الأهل والمجتمع الانتباه إلى العلامات التحذيرية، مثل التغيرات السلوكية المفاجئة أو الخوف غير المبرر من أشخاص معينين، واتخاذ خطوات لحماية الأطفال من أي استغلال."
    },
    {
      title: "توعية الطفل من ذوي الاحتياجات الخاصة",
      icon: <FaShieldAlt className="text-green-600 text-2xl" />,
      image: "7.jpg",
      items: [
        {
          icon: <FaUserShield className="text-green-500" />,
          title: "تعزيز الثقة بالنفس والاستقلالية",
          content: "علمي الطفل أنه يمتلك حقًا في جسده، ولا يجب لأحد أن يلمسه دون إذنه. استخدمي أسلوبًا إيجابيًا يعزز ثقته في قدرته على قول 'لا'."
        },
        {
          icon: <FaHandsHelping className="text-green-500" />,
          title: "استخدام لغة بسيطة ومفهومة",
          content: "استخدمي كلمات واضحة وسهلة تناسب مستوى إدراكه. علميه أسماء الأعضاء الحساسة بأسماء صحيحة، حتى يتمكن من التعبير عن أي موقف غير مريح."
        },
        {
          icon: <FaShieldAlt className="text-green-500" />,
          title: "تعليمه الحدود الجسدية",
          content: "وضحي الفرق بين اللمس المسموح وغير المسموح به بطريقة غير مخيفة. استخدمي تمثيلاً بسيطاً أو صورًا توضيحية تساعده على الفهم."
        },
        {
          icon: <FaBook className="text-green-500" />,
          title: "تدريب الطفل على كيفية التصرف في المواقف غير المريحة",
          content: "علميه أن يصرخ أو يهرب أو يخبر شخصا موثوقًا به إذا شعر بأي خطر. استخدمي سيناريوهات تمثيلية لتدريبه على الاستجابة الصحيحة."
        }
      ]
    },
    {
      title: "تعليم الطفل كيفية حماية نفسه من الاستغلال الجنسي",
      icon: <FaShieldAlt className="text-purple-600 text-2xl" />,
      image: "6.png",
      items: [
        {
          icon: <FaUser className="text-purple-500" />,
          title: "تعليمه ملكية جسده",
          content: "اجعلي الطفل يفهم أن جسده ملك له، ولا يحق لأحد لمسه دون إذنه. استخدمي تعابير مثل 'جسدك يخصك وحدك'."
        },
        {
          icon: <FaUserCircle className="text-purple-500" />,
          title: "استخدام قاعدة 'المناطق الخاصة'",
          content: "وضحي أن المناطق الخاصة (المناطق التي تغطيها الملابس الداخلية) لا يجب لأحد لمسها أو النظر إليها، إلا في حالات ضرورية مثل الفحص الطبي وبوجود أحد الوالدين."
        },
        {
          icon: <FaHandPaper className="text-purple-500" />,
          title: "تعليمه قول 'لا'",
          content: "دربيه على قول 'لا' بصوت واضح إذا حاول شخص لمسه بطريقة غير مريحة. علميه أن الهروب أو الصراخ في مثل هذه الحالات أمر مقبول."
        },
        {
          icon: <FaCommentAlt className="text-purple-500" />,
          title: "التمييز بين اللمس الجيد والسيئ",
          content: "استخدمي أمثلة توضيحية، مثل أن المصافحة أو العناق العائلي يكونان مقبولين، لكن اللمس غير المناسب ليس كذلك. يمكنك استخدام صور أو تمثيل مواقف لمساعدته في الفهم."
        },
        {
          icon: <FaUserShield className="text-purple-500" />,
          title: "تعزيز الثقة بالنفس",
          content: "شجعي الطفل على التحدث بحرية عن مشاعره وعدم الشعور بالخجل إذا شعر بأي شيء غير مريح. ذكريه دائما بأنه لن يتعرض للعقاب إذا أخبرك بشيء مهم."
        },
        {
          icon: <FaHandsHelping className="text-purple-500" />,
          title: "تدريبه على كيفية التصرف في المواقف غير المريحة",
          content: "استخدمي تمثيل الأدوار لتعليمه ماذا يفعل إذا حاول أحدهم لمسه أو طلب منه سرًا غير مريح. دربيه على إبلاغ شخص بالغ موثوق به على الفور."
        },
        {
          icon: <FaEye className="text-purple-500" />,
          title: "توضيح مفهوم 'الأسرار الجيدة والسيئة'",
          content: "علميه أن بعض الأسرار، مثل مفاجأة عيد ميلاد، جيدة، لكن أي سر يجعله يشعر بالخوف أو الحزن هو سر سيئ، ويجب إخبارك به فورًا."
        },
        {
          icon: <FaCommentAlt className="text-purple-500" />,
          title: "تعزيز التواصل المفتوح معه",
          content: "اجعلي الطفل يشعر بالأمان عند التحدث معكِ، ولا توبخيه أو تتجاهلي مخاوفه. اسأليه بلطف عن يومه وما إذا كان هناك شيء أزعجه."
        },
        {
          icon: <FaEye className="text-purple-500" />,
          title: "مراقبة سلوكيات الطفل",
          content: "انتبهي لأي تغيرات مفاجئة في سلوكه، مثل الخوف، العزلة اضطرابات النوم أو التصرفات غير المعتادة. كوني حذرة من الأشخاص الذين يبدون اهتمامًا زائدًا بالطفل دون مبرر."
        },
        {
          icon: <FaBookOpen className="text-purple-500" />,
          title: "قراءة قصص توعوية",
          content: "استخدمي قصصًا تعليمية تناسب عمره لتوضيح المفاهيم بطريقة ممتعة وسهلة."
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {educationSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section - Full width on mobile, half on desktop */}
            <div className="md:w-1/2">
              <img 
                src={section.image} 
                alt={section.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Content Section - Full width on mobile, half on desktop */}
            <div className="md:w-1/2 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <h2 className="text-2xl sm:text-3xl font-bold text-right">{section.title}</h2>
              </div>

              {section.items && (
                <ol className="space-y-5 text-right">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex flex-col gap-2">
                      <div className="flex items-start gap-3">
                        {item.icon && (
                          <span className="bg-blue-100 text-blue-800 p-2 rounded-full mt-1">
                            {item.icon}
                          </span>
                        )}
                        <div className="flex-1">
                          {item.title && (
                            <h3 className="font-semibold text-lg text-gray-800">
                              {itemIndex + 1}. {item.title}
                            </h3>
                          )}
                          <p className="text-gray-700 mt-1 leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              )}

              {section.conclusion && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg text-right">
                  <p className="text-blue-800">{section.conclusion}</p>
                </div>
              )}

              {section.note && (
                <div className="mt-6 p-4 bg-red-50 rounded-lg text-right">
                  <p className="text-red-800">{section.note}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AwarenessEducation;