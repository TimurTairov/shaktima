'use client'
import { Suspense } from 'react';

const MahaShivaRatri2024Video = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <Suspense fallback={<p>Загрузка ...</p>}>
        <iframe src="https://rutube.ru/play/embed/65cff768edabe0447d5211b2162e5742?skinColor=e53935" frameBorder="0" allow="clipboard-write; autoplay" allowFullScreen className='w-full h-56 md:h-96 lg:h-[25rem] xl:h-[30rem] 2xl:h-[40rem] mx-2 lg:mx-8 rounded-md'></iframe>
      </Suspense>
    </div>
  )
}

export default MahaShivaRatri2024Video