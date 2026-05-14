import MyAccordion from './MyAccordion'

const DurgaDjayaKara = () => {
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

          <div className='w-4xl'>
            Шри Шайлапутри ки – джей!<br />
            Шри Брахмачарини ки – джей!<br />
            Шри Чандрагханта ки – джей!<br />
            Шри Кушманда ки – джей!<br />
            Шри Скандамата ки – джей!<br />
            Шри Катьяяни ки – джей!<br />
            Шри Каларатри ки – джей!<br />
            Шри Махагаури ки – джей!<br />
            Шри Сиддхидатри ки – джей!<br /><br />
            Шри Гуру Свами Вишнудевананда Гири Джи ки – джей!
          </div>

        </div>
      </MyAccordion>
    </div>
  )
}

export default DurgaDjayaKara