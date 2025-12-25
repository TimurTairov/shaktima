import MyAccordion from './MyAccordion'

const GaneshaMantra = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='GaneshaMantra' title='Мантра Ганеши' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/GaneshaMantra.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-bold">
            ВАККРАТУНДА МАХА КАЙА
            <br />
            СУРЬЯ КОТИ САМА ПРАБХА
            <br />
            НИРВИГНАМ КУРУ МЭ ДЭВА
            <br />
            САРВА КАРЙЕ ЩУ САРУАДА
          </p>

          <p className="text-balance max-w-screen-sm text-sm">
            О, Изгибающий хобот, Огромнотелый, превосходящий своим сиянием свет
            миллионов Солнц! Устрани препятствия, о Бог, во всех моих
            начинаниях!
          </p>
          <p className="font-bold">ОМ ГАМ ГАНАПАТАЙЕ НАМАХА</p>
          <p className="text-sm">
            Поклонение Ганеше, Предводителю ганов!
          </p>
          <p className="font-bold">
            ГАНЕШАМ ПРАМАТХАДХИШАМ
            <br />
            НИРГУНАМ САГУНАМ ШИВАМ
            <br />
            ЙОГИНО ЙАТ ПАДАМ ЙАНТИ
            <br />
            ГОУРИНАНДАНАМ БХАДЖЕТА
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Ганешу, предводителя праматхов (духов), находящегося вне гун,
            наделенного добродетелями, благого, к стопам которого устремляются
            йогины, сына Гаури – почитаем!
          </p>
        </div>
      </MyAccordion>
    </div>
  )
}

export default GaneshaMantra