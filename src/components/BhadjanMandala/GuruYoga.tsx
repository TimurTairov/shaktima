import MyAccordion from './MyAccordion'

const GuruYoga = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='GuruYoga' title='Гуру йога' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/GuruYoga.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-medium w-2xl">
            Намо Гуру Дева <br />
            Намо Сатья Дхарма <br />
            Намо Арья Сангха
          </p>
          <p className="font-medium">
            Брахма Ахам Бхава ки – джей! <br />
            Шри Адинатха Шива ки – джей!<br />
            Адья Шакти ки – джей!<br /> <br />

            Риши Васиштха ки – джей! <br />
            Риши Бхарадваджа ки – джей! <br />
            Риши Вишвамитра ки – джей! <br />
            Риши Кашьяпа ки – джей! <br />
            Риши Гаутама ки – джей! <br />
            Риши Джамадагни ки – джей! <br />
            Риши Атри ки – джей! <br /><br />

            Бхагаван Шри Даттатрейя Авадхута ки – джей! <br />
            Шри Кришна Бхагаван ки – джей! <br />
            Бхагаван Шри Ади Шанкарачарья ки – джей! <br />
            Лайя Йога Парампара ки – джей! <br />
            Бхагаван Шри Гуру Брахмананда Махараджа ки – джей! <br />
            Адвайта йога ашрам гухья самаджа ки – джей! <br />
            Лайя Йога Ануграха ки – джей! <br /><br />
            Шри Гуру Свами Вишнудевананда Гири Джи ки – джей! <br />

          </p>

        </div>
      </MyAccordion>
    </div>
  )
}

export default GuruYoga