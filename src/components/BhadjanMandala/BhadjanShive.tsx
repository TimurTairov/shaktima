import MyAccordion from './MyAccordion'

const BhadjanShive = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion title='Бхаджан Шиве' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-4xl">
            Шива Самба Сада (или любой другой)
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/ShivaBhadjans/Shiva samba sada.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-4xl">
            Шива Шамбху
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/ShivaBhadjans/Div'ya Loka - SHiva SHambhu.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-4xl">
            Ом Намах Шивайя
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/ShivaBhadjans/Ом Намах Шивайя.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-4xl">
            Сатьям Шивам Сундарам (Sat sound)
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/ShivaBhadjans/Сатьям Шивам Сундарам 2017 10 25бх Sat sound.mp3"
              className="w-full"
            ></audio>
          </div>

        </div>
      </MyAccordion>
    </div>
  )
}

export default BhadjanShive