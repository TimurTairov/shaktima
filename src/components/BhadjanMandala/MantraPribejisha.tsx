import MyAccordion from './MyAccordion'

const MantraPribejisha = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='MantraPribejisha' title='Мантра Прибежища' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/MantraPribejisha.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-medium">
            Намо Гуру Дева <br />
            Намо Сатья Дхарма <br />
            Намо Арья Сангха
          </p>
          <p className="max-w-screen-sm text-sm">
            Почтение Гуру Дэву, почтение истинной Дхарме, почтение святой Сангхе (всем святым и сиддхам традиции)!
          </p>

        </div>
      </MyAccordion>
    </div>
  )
}

export default MantraPribejisha