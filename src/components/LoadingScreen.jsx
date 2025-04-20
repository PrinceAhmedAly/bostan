import React from 'react'
import Spinner from './Spinner'
import { FaLeaf } from 'react-icons/fa';

 const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img 
        src="/logo-main.png"
        alt="main-logo" 
        className='w-1/3 md:w-1/4 max-w-xs mb-8'
      />
      <div className='text-center'>
     <div className="flex items-center justify-center gap-3 mb-4">
           <FaLeaf className="text-green-600 text-4xl" />
           <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
             بستان أمان
           </h1>
         </div>
         <p className="text-xl text-green-600 mb-2">نزرع الوعي .. فنحصد الأمان</p>

        <p className='animate-pulse'>جاري التحميل</p>
        <Spinner />
      </div>
    </div>
  )
}

export default LoadingScreen;