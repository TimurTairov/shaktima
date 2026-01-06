import MyAccordion from './MyAccordion'

const PanchabrahmaMantry = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='PanchabrahmaMantry' title='Панчабрахма-мантры' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/PanchabrahmaMantry.mp3"
              className="w-full"
            ></audio>
          </div>
          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">Садйоджата мантра</h2>
          <p className="font-medium">
            ОМ САДЙОДЖАТАМ ПРАПАДЙАМИ <br />
            САДЙОДЖАТАЙА ВАИ НАМО НАМАХА<br />
            БХАВЕ БХАВЕ НАТИ БХАВЕ<br />
            БХАВАСВА МАМ БХАВОДБХАВАЙА НАМАХА
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Ищу прибежище в Перворожденном, почитаю Изначальную Причину рождений;
            Не дай мне рождаться снова и снова; направь меня по ту сторону рождений.
          </p>
          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">Вамадева мантра</h2>
          <p className="font-medium">
            ВАМАДЕВАЙА НАМО <br />
            ДЖИЕШТХАЙА НАМО <br />
            ШРЕШТХАЙА НАМО <br />
            РУДРАЙА НАМО <br />
            КАЛАЙА НАМО <br />
            КАЛАВИКАРАНАЙА НАМО<br />
            БАЛАВИКАРАНАЙА НАМО <br />
            БАЛАЙА НАМО <br />
            БАЛАПРАМАТХАНАЙА НАМО <br />
            САРВАБХУТА ДАМАНАЙА НАМО <br />
            МАНОНМАНАЙА НАМАХА
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Ом. Великодушнейшему поклонение, Старейшему поклонение, Наилучшему поклонение, Рудре поклонение, Времени поклонение;
            Непостижимейшему поклонение, Величайшей силе поклонение, Причине сил поклонение, Дарующему силы поклонение; Владыке существ поклонение, Источнику света поклонение.
          </p>
          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">Агхора мантра</h2>
          <p className="font-medium">
            АГХОРЕБХЙО ТХА ГХОРЕБХЙО<br />
            ГХОРАГХОРЕ ТАРЕБХЙАХА<br />
            САРВЕБХЙАХ ШАРВАХ САРВЕБХЙО<br />
            НАМАСТЕ АСТУ РУДРА РУПЕБХЙАХА
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Поклонение Неужасному и ужасному, Тому, кто ужасающий и неужасающий одновременно.
            Всегда и везде, о Шарва, почитаю Рудру во всех его формах.
          </p>
          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">Татпуруша мантра</h2>
          <p className="font-medium">
            ТАТПУРУШАЙА ВИДМАХЕ <br />
            МАХАДЕВАЙА ДХИМАХИ <br />
            ТАННО РУДРА ПРАЧОДАЙАТЕ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Познаем Высочайшего, будем медитировать на Величайшего.
            Пусть приведет нас Рудра к просветлению.
          </p>
          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">Ишана мантра</h2>
          <p className="font-medium">
            ИШАНА САРВА ВИДЙАНАМ <br />
            ИШВАРАХ САРВА БХУТАНАМ <br />
            БРАХМАДИПАТИ БРАХМАНО ДХИПАТИ <br />
            БРАХМА ШИВО МЕ АСТУ САДАШИВАМ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Владыка знания и Владыка всех существ, Цель всех учений и служений.
            Он — истинное благо! Да пребудет со мной это Благо вовек!
          </p>
        </div>
      </MyAccordion>
    </div >
  )
}

export default PanchabrahmaMantry