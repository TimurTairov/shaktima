import MyAccordion from './MyAccordion'

const DurgaMantra = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion title='Мантра Дурги' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">

          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="\sounds\BhadjanMandala\DurgaMantra.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-medium w-xl">
            Ом Дум Дургайай Намаха (108 раз)
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Ом Дум! Богине Дурге поклонение!
          </p>

        </div>
      </MyAccordion>
    </div>
  )
}

export default DurgaMantra