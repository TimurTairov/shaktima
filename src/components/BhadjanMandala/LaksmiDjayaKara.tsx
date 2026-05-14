import MyAccordion from './MyAccordion'

const LaksmiDjayaKara = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion title='Джая-кара Лакшми' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">


          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/Djaya-kara/Lakshmi.mp3"
              className="w-full"
            ></audio>
          </div>

          <div className='w-4xl'>
            Шри Ади Лакшми ки – джей!<br />
            Шри Дханья Лакшми ки – джей!<br />
            Шри Дхарья Лакшми ки – джей!<br />
            Шри Гаджа Лакшми ки – джей!<br />
            Шри Сантан Лакшми ки – джей!<br />
            Шри Виджая Лакшми ки – джей!<br />
            Шри Видья Лакшми ки – джей!<br />
            Шри Дхана Лакшми ки – джей!<br /><br />
            Шри Гуру Свами Вишнудевананда Гири Джи ки – джей!
          </div>

        </div>
      </MyAccordion>
    </div>
  )
}

export default LaksmiDjayaKara