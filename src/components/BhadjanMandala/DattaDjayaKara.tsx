import MyAccordion from './MyAccordion'

const DattaDjayaKara = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion title='Джая-кара 16 аватарам Даттатрее' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5 font-light">


          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/Djaya-kara/Datta.mp3"
              className="w-full"
            ></audio>
          </div>

          <div className='w-4xl'>
            Шри Гуру Даттатрея Авадхута ки – джей <br />
            Шри Йогирадж ки – джей!<br />
            Шри Атриварада ки – джей!<br />
            Шри Даттатрея ки – джей!<br />
            Шри Калаагни Шамана ки – джей!<br />
            Шри Йогиджняна Валлабха ки – джей!<br />
            Шри Лила Вишвамбхара ки – джей!<br />
            Шри Сиддхарадж ки – джей!<br />
            Шри Джняна Сагара ки – джей!<br />
            Шри Вишвабхар Авадхута ки – джей!<br />
            Шри Майямукта Авадхута ки – джей!<br />
            Шри Майяюкта Авадхута ки – джей!<br />
            Шри Ади Гуру ки – джей!<br />
            Шри Шиварупа ки – джей!<br />
            Шри Дева Дева ки – джей!<br />
            Шри Дигамбара ки – джей!<br />
            Шри Кришна Шьямала Камала Наяна ки – джей!<br /><br />
          </div>

        </div>
      </MyAccordion>
    </div>
  )
}

export default DattaDjayaKara