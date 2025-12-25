import MyAccordion from './MyAccordion'

const Start = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='Start' title='Начало практики' big className='max-w-xl'>
        <div className="w-full flex flex-col gap-5">
          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
            Ачамана
          </h2>

          <p className="text-balance max-w-screen-sm">
            Перед началом практики выполняются{' '}
            <a
              href="/upasana/achamana"
              className="text-indigo-600 dark:text-amber-400 hover:underline"
            >
              ачамана
            </a>{' '}
            и далее

            <a
              href="/upasana/pancha-ratna-pranama-mantra"
              className="text-indigo-600 dark:text-amber-400 hover:underline ml-1"
            >
              ежедневная практика принятия Прибежища:
            </a>{' '}


          </p>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
            ПАНЧА-РАТНА-ПРАНАМА-МАНТРА
          </h2>

          <p className="font-bold uppercase">
            Ом Шивам шаранам прападйам
          </p>

          <p className="font-bold uppercase">
            Ом Дхармам шаранам прападйам
          </p>

          <p className="font-bold uppercase">
            Ом Сангхам шаранам прападйам
          </p>

          <p className="font-bold uppercase">
            Ом Шактим шаранам прападйам
          </p>

          <p className="font-bold uppercase">
            Ом Садгурум шаранам прападйам
          </p>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
            Выполняется Гуру-йога с Ом
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/OM.mp3"
              className="w-full"
            ></audio>
          </div>

        </div>
      </MyAccordion>
    </div >
  )
}

export default Start