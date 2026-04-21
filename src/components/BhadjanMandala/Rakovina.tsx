import MyAccordion from './MyAccordion'

const Rakovina = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion title='Раковина' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-4xl">
            Звучит раковина
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/Rakovina.mp3"
              className="w-full"
            ></audio>
          </div>

        </div>
      </MyAccordion>
    </div>
  )
}

export default Rakovina