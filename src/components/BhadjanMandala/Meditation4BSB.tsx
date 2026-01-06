import MyAccordion from './MyAccordion'

const Meditation4BSB = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='Meditation4BSB' title='Медитация 4 БСБ' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">
          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-sm md:text-base lg:text-lg w-full">
            Медитация четырех бесконечных Брахма вихар - любовь, сострадание, счастье, равностность
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/4BSB.mp3"
              className="w-full"
            ></audio>
          </div>



        </div>
      </MyAccordion>
    </div >
  )
}

export default Meditation4BSB