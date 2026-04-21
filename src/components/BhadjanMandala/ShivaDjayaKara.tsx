import MyAccordion from './MyAccordion'

const ShivaDjayaKara = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion title='Джая-кара' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">


          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/Djaya-kara/Shiva.mp3"
              className="w-full"
            ></audio>
          </div>

          <div className='w-4xl'>
            Шива Махадева ки –  джей!<br />
            Шри Шамбху ки – джей!<br />
            Шри Пинаки ки – джей!<br />
            Шри Гириша ки – джей!<br />
            Шри Стхану ки – джей!<br />
            Шри Бхарга ки – джей!<br />
            Шри Садашива ки – джей!<br />
            Шри Шива ки – джей!<br />
            Шри Хара ки – джей!<br />
            Шри Шарва ки – джей!<br />
            Шри Капали ки – джей!<br />
            Шри Бхава – ки – джей!<br />
          </div>

        </div>
      </MyAccordion>
    </div>
  )
}

export default ShivaDjayaKara