import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaLeaf, FaShieldAlt } from "react-icons/fa";

const AboutUsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Owners data (names and placeholder images)
  const owners = [
    {
      id: 1,
      name: "أحمد محمد",
      role: "مؤسس الموقع",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "سارة عبد الله",
      role: "مطورة المحتوى",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "خالد محمود",
      role: "مصمم واجهات",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 4,
      name: "نورا علي",
      role: "أخصائية نفسية",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      id: 5,
      name: "يوسف إبراهيم",
      role: "مدير تقني",
      image: "https://randomuser.me/api/portraits/men/81.jpg"
    }
  ];

  // Doctors data
  const doctors = [
    { id: 1, name: "د. محمد عبد الرحمن", specialty: "طب نفسي أطفال" },
    { id: 2, name: "د. هناء السيد", specialty: "أخصائية تربية خاصة" },
    { id: 3, name: "د. وليد مصطفى", specialty: "استشاري طب أسرة" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const slideVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <FaLeaf className="text-green-600 text-4xl" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            بستان أمان
          </h1>
        </div>
        <p className="text-xl text-green-600">نزرع الوعي .. فنحصد الأمان</p>
      </motion.div>

      {/* About Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="bg-white rounded-xl shadow-lg px-3"
      >
        <motion.h2 variants={itemVariants} className="text-2xl font-bold text-right mb-3">
          نبذة تعريفية عن الموقع
        </motion.h2>
        
        <motion.div variants={itemVariants} className="space-y-4 text-right text-gray-700 leading-relaxed text-lg mb-6 py-2">
          <p>أهلاً وسهلاً بكم</p>
          <p>خلونا نتكلم في هذا الويب سايت عن موضوع مهم جدًا يغفل عنه للأسف كثير من أولياء الأمور أو أي شخص مسؤول عن طفل بشكل عام، وهو موضوع <span className="text-amber-500"> التوعية الجنسية </span> .</p>
          
          <p>خلينا متفقين أن أغلبنا كأولياء أمور أو مدرسين أو حتى أخصائيين نرفض نتكلم في الموضوع ده مع الأطفال، وأول كلمة بتيجي على اللسان: عيب، ده طفل مش هانفتح عينه على الحاجات دي، هو ها يفهم يعني إيه الكلام ده؟</p>
          <p>والحقيقة بقى أن هنا المصيبة. الطفل، من وهو صغير، لازم يعرف الأماكن المسموح لمسها والأماكن الممنوع لمسها. الحدود الشخصية. يعني إيه "عمو ده حلو ومش عاوز يؤذيني" ويعني إيه "عمو ده وحش وعاوز حاجات وحشة".</p>
          <p>لازم يفهم إنه لما تحصل حاجة من الممنوع اللي اتربى عليه، يروح يقول لماما أو بابا وما يخافش منهم.</p>
          <p>وطبعًا، كولي أمر لازم تكون عارف إن الطفل ملهوش أي ذنب وما ينفعش نحاسبه هو. وهنا، لازم نفتكر إنه طفل ومش هيعرف يتصرف زي الكبار.</p>
          <p>کمان لازم نبقى فاهمين إننا ما ينفعش نخوف الطفل خالص أو نخليه يرفض حتى الناس اللي بتحبه، لأن ده مش الغرض. بالعكس، إحنا عاوزين نخليه فاهم حدوده الشخصية اللي ما ينفعش حد يتخطاها.</p>
          <p>والحقيقة، يا جماعة، الفكرة دي مجتش لينا من فراغ، لكنها بسبب اللي بنشوفه الأيام دي. وآخرها كانت قصة الطفلة اللي حصلت في العاشر من رمضان. وبالمناسبة، المجرم عمل كده في نهار رمضان وفي الجامع.</p>
          <p>فبصراحة، لازم نخاف جدًا على أطفالنا. الموضوع بقى خطير لدرجة إنهم بقوا يعملوا توعية عليه في وسائل الإعلام وآخرها كان مسلسل (لام) شمسية اللي حاول يخاطب الأهل ويوعيهم.</p>
          <p>في هذا الموقع، هتكون كل حاجة موجودة بالتفصيل. وأتمنى إن هذا الجهد يكون شافعًا لينا يوم القيامة عند ربنا. ونقدر نساعد ناس كتير في حماية أطفالهم في الزمن الصعب ده. وإن شاء الله، نحاول نجمع كل حاجة عن الموضوع وأتمنى لو استفدت يوما من الأيام، تدعيلنا.</p>
        </motion.div>
      </motion.div>

{/* Owners Section */}
<motion.div 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-16"
>
  <h2 className="text-2xl font-bold text-center mb-8">فريق العمل</h2>
  
  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
    {owners.map((owner, index) => (
      <motion.div
        key={owner.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.5,
          delay: index * 0.1
        }}
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <img 
          src={owner.image} 
          alt={owner.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold">{owner.name}</h3>
          <p className="text-gray-600">{owner.role}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

      {/* Doctors Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-blue-50 rounded-xl p-8"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-6">
          <h2 className="text-2xl font-bold">تحت إشراف: </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <h3 className="text-xl font-semibold text-blue-800">{doctor.name}</h3>
              <p className="text-gray-600 mt-2">{doctor.specialty}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;