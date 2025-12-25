import MyAccordion from './MyAccordion'

const Prarthana = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='Prarthana' title='Прартхана' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/Prarthana.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-bold">
            ОМ СВАРУПАЯ НАМАХА<br />
            ОМ ШРИ САТГУРАВЕ НАМАХА<br />
            ОМ ДРАМ ДАТТАТРЕЙЯЯ НАМАХА
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Истинной Природе – поклонение! Истинному Гуру – поклонение! Святому Даттатрейе – поклонение!
          </p>
          <p className="font-bold">
            ОМКАРАМ БИНДУ САМЬЮКТАМ<br />
            НИТЬЯМ ДХЬЯЯНТИ ЙОГИНАХ<br />
            КАМАДАМ МОКША ДАМ ЧАЙВА<br />
            ОМКАРАЯ НАМО НАМАХА
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Йоги всегда медитируют на отмеченный анусварой слог
            Ом, исполняющий все желания и дарующий освобождение.
            Мы почтительно склоняемся перед Омкарой.
          </p>

          <p className="font-bold">
            ГУРУР БРАХМА, ГУРУР ВИШНУ<br />
            ГУРУР ДЕВО МАХЕШВАРА<br />
            ГУРУР САКШАТ ПАРАБРАХМАН<br />
            ТАС МАЙ ШРИ ГУРАВЕ НАМАХА
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Гуру – это Брахма, Гуру – это Вишну, Гуру – это Господь
            Махешвара. Я созерцаю в Гуру самого Парабрахмана, и так
            вечно поклоняюсь Шри Гуру.
          </p>
        </div>
      </MyAccordion>
    </div >
  )
}

export default Prarthana