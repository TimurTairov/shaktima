import MyAccordion from './MyAccordion'

const ShantiMantras = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion title='Шанти мантры' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">

          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/Loka samasta 7 times.mp3"
              className="w-full"
            ></audio>
          </div>

          <div className='w-4xl'>
            <p className='font-bold'>Лока самаста сукхино бхаванту</p>
            <p>Пусть все живые существа будут счастливы!</p>
          </div>

          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/Om shanti.mp3"
              className="w-full"
            ></audio>
          </div>

          <div>
            <p className='font-bold'>Ом шанти шанти шанти</p>
            <p>Да будет мир, да будет мир, да будет покой</p>
          </div>


        </div>
      </MyAccordion>
    </div>
  )
}

export default ShantiMantras