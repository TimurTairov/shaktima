import MyAccordion from '@/components/MyAccordion'

const LekciyaGuru = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='LekciyaGuru' title='Лекция Гуру' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5">
          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - Бог не чужой!
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds\Lekcii Guru/god.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - Кундалини самадхи и сахадж самадхи
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds\Lekcii Guru/kundalini_i_sahadja_samadhi.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - О любви
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds\Lekcii Guru/love.mp3"
              className="w-full"
            ></audio>
          </div>


          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - Неоадвайта
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds\Lekcii Guru/neoadvayta.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - Стать Мастером
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds\Lekcii Guru/master.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - Люди заложники своих шаблонов
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds\Lekcii Guru/shablon.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - О паломничестве
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds\Lekcii Guru/palomnichestvo.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - Самое главное в медитации
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds\Lekcii Guru/meditation.mp3"
              className="w-full"
            ></audio>
          </div>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full text-center">
            Отрывок из сатсанга Гуру Свами Вишнудевананда Гири Махараджа - Меня никогда не было! Какое счастье!
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds\Lekcii Guru/menya_ne_bylo.mp3"
              className="w-full"
            ></audio>
          </div>

        </div>
      </MyAccordion>
    </div >
  )
}

export default LekciyaGuru