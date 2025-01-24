import MyAccordion from '@/components/MyAccordion'

const Start = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='Start' title='Начало практики' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5">

          <p className="text-center text-balance max-w-screen-sm">
            Перед началом практики выполняются{' '}
            <a
              href="/achamana"
              className="text-indigo-600 dark:text-indigo-300"
            >
              ачамана
            </a>{' '}
            и ежедневная практика принятия Прибежища:
          </p>

          <p className="font-bold uppercase text-center">
            Ом Шивам шаранам прападйам
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Ом! Прибегаю к Шиве, всевышнему Богу, за защитой! <br />
            Ладони молитвенно сложены над сахасрара-чакрой, над макушкой головы.
          </p>
          <p className="font-bold uppercase text-center">
            Ом Дхармам шаранам прападйам
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Ом! прибегаю к дхарме, истинному освобождающему Учению, за защитой!
            <br />
            Ладони молитвенно сложены перед аджна-чакрой на уровне лба.
          </p>
          <p className="font-bold uppercase text-center">
            Ом Сангхам шаранам прападйам
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Ом! прибегаю к сангхе, общине садху, преданных Богу и дхарме за
            защитой! <br />
            Ладони молитвенно сложены в центре груди, перед анахата-чакрой.
          </p>
          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full text-center">
            Выполняется Гуру-йога с Ом
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/3OM.mp3"
              className="w-full"
            ></audio>
          </div>

        </div>
      </MyAccordion>
    </div >
  )
}

export default Start