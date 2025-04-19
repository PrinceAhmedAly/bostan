import React from 'react'
import Spinner from './Spinner'

 const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img 
        src="/logo-main.png"
        alt="main-logo" 
        className='w-1/3 md:w-1/4 max-w-xs mb-8'
      />
      <div className='text-center'>
        <h2 className="text-2xl font-bold mb-2">بستان أمان</h2>
        <h3 className="text-lg">نزرع الوعي فنحصد الأمان</h3>

        <p className='animate-pulse'>جاري التحميل</p>
        <Spinner />
      </div>
    </div>
  )
}

export default LoadingScreen;