import MyAccordion from './MyAccordion'

const ShivaMantra = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion title='Мантра Шивы' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-4xl">
            Выполняется Шива-линга пуджа.
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/Om Namah Shivaya 3 Times.mp3"
              className="w-full"
            ></audio>
          </div>

        </div>
      </MyAccordion>
    </div>
  )
}

export default ShivaMantra