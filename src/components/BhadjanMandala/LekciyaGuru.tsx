import MyAccordion from './MyAccordion'

const LekciyaGuru = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='LekciyaGuru' title='Лекция Гуру' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <h2 className="mt-4 md:mt-7 lg:mt-10 text-sm md:text-base lg:text-lg w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - <b>Бог не чужой!</b>
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center pb-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/LekciiGuru/god.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mt-4 md:mt-7 lg:mt-10 text-sm md:text-base lg:text-lg w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - <b>Кундалини самадхи и сахадж самадхи</b>
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center pb-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/LekciiGuru/kundalini_i_sahadja_samadhi.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mt-4 md:mt-7 lg:mt-10 text-sm md:text-base lg:text-lg w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - <b>О любви</b>
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center pb-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/LekciiGuru/love.mp3"
              className="w-full"
            ></audio>
          </div>


          <h2 className="mt-4 md:mt-7 lg:mt-10 text-sm md:text-base lg:text-lg w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - <b>Неоадвайта</b>
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center pb-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/LekciiGuru/neoadvayta.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mt-4 md:mt-7 lg:mt-10 text-sm md:text-base lg:text-lg w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - <b>Стать Мастером</b>
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center pb-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/LekciiGuru/master.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mt-4 md:mt-7 lg:mt-10 text-sm md:text-base lg:text-lg w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - <b>Люди заложники своих шаблонов</b>
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center pb-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/LekciiGuru/shablon.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mt-4 md:mt-7 lg:mt-10 text-sm md:text-base lg:text-lg w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - <b>О паломничестве</b>
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center pb-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/LekciiGuru/palomnichestvo.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mt-4 md:mt-7 lg:mt-10 text-sm md:text-base lg:text-lg w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - <b>Самое главное в медитации</b>
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center pb-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/LekciiGuru/meditation.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mt-4 md:mt-7 lg:mt-10 text-sm md:text-base lg:text-lg w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - <b>Меня никогда не было! Какое счастье!</b>
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center pb-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/LekciiGuru/menya_ne_bylo.mp3"
              className="w-full"
            ></audio>
          </div>

        </div>
      </MyAccordion>
    </div >
  )
}

export default LekciyaGuru