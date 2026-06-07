import MyAccordion from './MyAccordion'

const LakshmiMantra = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion title='Мантра Лакшми' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">

          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="\sounds\BhadjanMandala\LakshmiMantra.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-medium">
            ОМ ХРИМ ШРИ ЛАКШМИ БХЙО НАМАХА (108 раз)
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            О, богиня Лакшми! Проявись во мне, и даруй Твое изобилие всем аспектам моего существования!
          </p>

        </div>
      </MyAccordion>
    </div>
  )
}

export default LakshmiMantra