import MyAccordion from './MyAccordion'

const LakshmiGayatri = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='LakshmiGayatri' title='Лакшми Гаятри' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/LakshmiGayatri.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-bold">
            ОМ МАХАЛАКШМЙАИ ЧА ВИДМАХЕ<br />
            ВИШНУ ПАТНИЙАИ ЧА ДХЕЕМАХИ<br />
            ТАННО ЛАКШМИ ПРАЧОДАЙАТЕ<br />
            (3 раза)
          </p>

          <p className="text-balance max-w-screen-sm text-sm">
            Ом! Мы медитируем на великую богиню Лакшми!
            О супруга господа Вишну, даруй нам высший интеллект!
            И пусть Лакшми осветит наш разум!
          </p>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">Лакшми мантра</h2>

          <p className="font-bold">
            ОМ ХРИМ ШРИ ЛАКШМИ БХЙО НАМАХА<br />
            (7 раз)
          </p>

          <p className="text-balance max-w-screen-sm text-sm">
            О, богиня Лакшми! Проявись во мне,
            и даруй Твое изобилие всем аспектам моего существования!
          </p>

        </div>
      </MyAccordion>
    </div>
  )
}

export default LakshmiGayatri