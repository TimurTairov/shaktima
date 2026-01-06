import MyAccordion from './MyAccordion'

const SarasvatiGayatri = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='SarasvatiGayatri' title='Сарасвати Гаятри' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/SarasvatiGayatri.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-medium">
            ОМ ВАК ДЕВЙАИ ЧА ВИДМАХЕ<br />
            КАМАРАДЖАЙА ДХЕЕМАХИ<br />
            ТАННО ДЕВИ ПРАЧОДАЙАТЕ (3 раза)
          </p>

          <p className="text-balance max-w-screen-sm text-sm">
            Ом, мы медитируем на богиню речи!
            О богиня, владычица над желаниями, даруй нам высший
            интеллект! О богиня Сарасвати, освети наш разум!
          </p>

        </div>
      </MyAccordion>
    </div>
  )
}

export default SarasvatiGayatri