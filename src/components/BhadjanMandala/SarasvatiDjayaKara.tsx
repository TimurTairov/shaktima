import MyAccordion from './MyAccordion'

const SarasvatiDjayaKara = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion title='Джая-кара Сарасвати' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">


          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/Djaya-kara/Sarasvati.mp3"
              className="w-full"
            ></audio>
          </div>

          <div className='font-medium'>
            Шри Чинтамани Сарасвати ки – джей!<br />
            Шри Джняна Сарасвати ки – джей!<br />
            Шри Нила Сарасвати ки – джей!<br />
            Шри Гхата Сарасвати ки – джей!<br />
            Шри Кини Сарасвати ки – джей!<br />
            Шри Антарикша Сарасвати ки – джей!<br />
            Шри Маха Сарасвати ки – джей!<br /><br />
            Шри Гуру Свами Вишнудевананда Гири Джи ки – джей!
          </div>

          <p className='w-xl'></p>

        </div>
      </MyAccordion>
    </div>
  )
}

export default SarasvatiDjayaKara