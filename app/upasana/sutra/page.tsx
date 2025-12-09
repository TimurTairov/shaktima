import Altar from '@/components/NewAltar'
import Disclaimer from '@/components/BhadjanMandala/Disclaimer';
import MyAccordion from '@/components/MyAccordion'
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

const page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto text-gray-700 dark:text-gray-300 font-light">
      <div className="mx-2">
        <div className="py-5 flex justify-center items-center gap-3 text-lg font-semibold leading-snug tracking-tight lg:leading-tight lg:text-4xl">
          <h1 className="mainTitle">
            Утреняя сутра
          </h1>
          <Link href="/upasana/" className="inline-flex text-lg">
            <RiArrowGoBackFill />
          </Link>
        </div>
        <Altar audio />
        <div
          id="sutra"
          className="mt-10 w-full flex flex-col items-center justify-center gap-5 "
        >
          <MyAccordion id='Nachalo' title='Начало практики' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                Ачамана
              </h2>
              <p className=" text-balance max-w-screen-sm">
                Перед началом практики выполняются{' '}
                <a
                  href="/upasana/achamana"
                  className="text-indigo-600 dark:text-indigo-300 hover:underline"
                >
                  ачамана
                </a>{' '}
                и далее
                <a
                  href="/upasana/pancha-ratna-pranama-mantra"
                  className="text-indigo-600 dark:text-indigo-300 hover:underline ml-1"
                >
                  ежедневная практика принятия Прибежища:
                </a>{' '}
              </p>

              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                ПАНЧА-РАТНА-ПРАНАМА-МАНТРА
              </h2>

              <p className="font-bold uppercase ">
                Ом Шивам шаранам прападйам
              </p>

              <p className="font-bold uppercase ">
                Ом Дхармам шаранам прападйам
              </p>

              <p className="font-bold uppercase ">
                Ом Сангхам шаранам прападйам
              </p>

              <p className="font-bold uppercase">
                Ом Шактим шаранам прападйам
              </p>

              <p className="font-bold uppercase">
                Ом Садгурум шаранам прападйам
              </p>

            </div>
          </MyAccordion>

          <MyAccordion id='Rakovina' title='Звучит раковина' big className='max-w-xl'>
            <p className="sutra-title w-xl"></p>
          </MyAccordion>

          <MyAccordion id='GuruYogaOm' title='Гуру-йога с Ом' big className='max-w-xl'>
            <p className="sutra-title w-xl"></p>
          </MyAccordion>

          <MyAccordion id='PervyiPoklon' title='Первый поклон' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-xl">
                Выполняется первый поклон из практики пяти поклонов.
              </p>
              <p className="w-xl">
                Поклон Коренному Гуру (выполняется под звук колокольчика).
              </p>
            </div>
          </MyAccordion>

          <MyAccordion id='MantraGaneshi' title='Мантра Ганеши' big className='max-w-xl'>
            <div className="w-full  flex flex-col justify-center gap-5">
              <p className="font-bold">
                ВАККРАТУНДА МАХА КАЙА
                <br />
                СУРЬЯ КОТИ САМА ПРАБХА
                <br />
                НИРВИГНАМ КУРУ МЭ ДЭВА
                <br />
                САРВА КАРЙЕ ЩУ САРУАДА
              </p>
              <p className=" text-balance text-sm">
                О, Изгибающий хобот, Огромнотелый, превосходящий своим сиянием свет
                миллионов Солнц! Устрани препятствия, о Бог, во всех моих
                начинаниях!
              </p>
              <p className="font-bold">ОМ ГАМ ГАНАПАТАЙЕ НАМАХА</p>
              <p className=" text-sm">
                Поклонение Ганеше, Предводителю ганов!
              </p>
              <p className="font-bold">
                ГАНЕШАМ ПРАМАТХАДХИШАМ
                <br />
                НИРГУНАМ САГУНАМ ШИВАМ
                <br />
                ЙОГИНО ЙАТ ПАДАМ ЙАНТИ
                <br />
                ГОУРИНАНДАНАМ БХАДЖЕТА
              </p>
              <p className="text-balance text-sm">
                Ганешу, предводителя праматхов (духов), находящегося вне гун,
                наделенного добродетелями, благого, к стопам которого устремляются
                йогины, сына Гаури – почитаем!
              </p>
            </div>
          </MyAccordion>

          <MyAccordion id='SarasvatiAratiSutra' title='Сарасвати арати' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="font-bold">
                ОМ ДЖЕЙ САРАСВАТИ МААТА
                <br />
                МАЙЯ ДЖЕЙ САРАСВАТИ МААТА
                <br />
                САТГУНА ВЭЙБХАВа ШААЛИНИ
                <br />
                САТГУНА ВЭЙБХАВа ШААЛИНИ
                <br />
                ТРИБХУВАНА ВИИКЬХЙААТАА
                <br />
                ОМ ДЖЕЙ САРАСВАТИ МААТА
              </p>
              <> (2 раза)</>
              <p className=" text-balance max-w-screen-sm text-sm">
                Слава Матери Сарасвати, преисполненной благих качеств,
                Повелительнице Трех Миров! Слава Матери Сарасвати!
              </p>
              <p className="font-bold">
                ЧАНДРА ВАДАНИ ПАДМАСИНИ
                <br />
                ДхйУТИ МАНГАЛАКААРИ
                <br />
                МАЙЯ ДхйУТИ МАНГАЛАКААРИИ
                <br />
                СОХЕ ШУБХЕ ХАНСЕ САВААРИ
                <br />
                СОХЕ ШУБХЕ ХАНСЕ САВААРИ
                <br />
                АТУЛе ТЕДЖа ДХААРИИ
                <br />
                ОМ ДЖЕЙ САРАСВАТИ МААТА
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Луноликой, восседающей на лотосе, излучающей благодатный свет;
                восседающей на белом лебеде, обладающей несравненной силой – Слава
                Матери Сарасвати!
              </p>
              <p className="font-bold">
                БААЙЕ КААРе МЭ ВИНА
                <br />
                ДААЙЕ КААРе МААЛЯ
                <br />
                МАЙЯ ДААЙЕ КААРе МААЛЯА
                <br />
                ШИИШа МУКУТе МАНИ СОХЕ
                <br />
                ШИИШа МУКУТе МАНИ СОХЕ
                <br />
                ГААЛе МОТИЯНа МААЛЯА
                <br />
                ОМ ДЖЕЙ САРАСВАТИ МААТА
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                В её левой руке вина, а в правой – четки. На её голове драгоценная
                корона, а на шее ожерелье из жемчуга. Слава Матери Сарасвати!
              </p>
              <p className="font-bold">
                ДЕВИ ШАРАНЕ ДЖО АЙЕ
                <br />
                УНеКА УДДХААРе КИЙАА
                <br />
                МАЙЯ УНеКА УДДХААРэ КИЙАА
                <br />
                ПЭТхИ МАНТХеРА ДААСИ
                <br />
                ПЭТхИ МАНТХеРА ДААСИ
                <br />
                РАВАНе САНХААРЕ КИЙЯА
                <br />
                ОМ ДЖЕЙ САРАСВАТИ МААТА
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Кто бы ни обратился к Тебе, обретает Твою поддержку. Ты – Та, кто
                повлияла на служанку [царицы Кайкейи] Мантхару, чтобы убить Равану.
                Слава Матери Сарасвати!
              </p>
              <p className="font-bold">
                ВИДЬЯ ГЬЯНА ПРЭДАИНИ
                <br />
                ГЬЯНА ПРАКААШЕ КАРОО
                <br />
                МАЙЯ ГЬЯНА ПРАКААШЕ КАРОО
                <br />
                МОХо АГЬЯНА ТИМИРИ КАА
                <br />
                МОХо АГЬЯНА ТИМИРИ КАА
                <br />
                ДЖАГе СЕ НААШе КАРОО
                <br />
                ОМ ДЖЕЙ САРАСВАТИ МААТА
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                О Богиня, дарующая знание и мудрость, наполни меня светом мудрости!
                Рассей полностью тьму неведения и иллюзию! Слава Матери Сарасвати!
              </p>
              <p className="font-bold">
                ДХУУПа ДИИПа ПХАЛе МЕЕВА
                <br />
                МАА СВИКААРе КАРОО
                <br />
                МАЙЯ МАА СВИКААРе КАРОО
                <br />
                ГЬЯНА ЧААКШУ ДЕ МААТА
                <br />
                ГЬЯНА ЧАКШУ ДЕ МААТА
                <br />
                ДЖАГА НИСТААРе КАРОО
                <br />
                ОМ ДЖЕЙ САРАСВАТИ МААТА
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                О Мать, прими благовония, светильники, фрукты и сладости. О Мать,
                надели нас оком мудрости! Слава Матери Сарасвати!
              </p>
              <p className="font-bold">
                МАА САРАСВАТИ КИ ААРАТИ
                <br />
                ДЖО КОИ ДЖАНе ГААВЕЕ
                <br />
                МАЙЯ ДЖО КОИ ДЖАНе ГААВЕЕ
                <br />
                ХИТЭКААРИ СУКХАКАРИ
                <br />
                ХИТЭКААРИ СУКХАКАРИ
                <br />
                ГЬЯНа БХАКТИ ПААВЕЕ
                <br />
                ОМ ДЖЕЙ САРАСВАТИ МААТА
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Тот, кто поет это арати Матери Сарасвати, приносящее благо и
                радость, будет благословлен мудростью и преданностью. Слава Матери
                Сарасвати!
              </p>
              <p className="font-bold">
                ОМ ДЖЕЙ САРАСВАТИ МААТА
                <br />
                МАЙЯ ДЖЕЙ САРАСВАТИ МААТА
                <br />
                САТГУНА ВЭЙБХАВа ШААЛИНИ
                <br />
                САТГУНА ВЭЙБХАВа ШААЛИНИ
                <br />
                ТРИБХУВАНА ВИИКЬХЙААТАА
                <br />
                ОМ ДЖЕЙ САРАСВАТИ МААТА
              </p>
              <p>(2 раза)</p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Слава Матери Сарасвати, преисполненной благих качеств,
                Повелительнице Трех Миров! Слава Матери Сарасвати!
              </p>
              <p className="font-bold ">
                ШРИ МАХАСАРАСВАТИ МАТА КИ — ДЖЕЙ!
                <br />
                ШРИ Гуру СВАМИ ВИШНУДЕВАНАНДА ГИРИ ДЖИ КИ — ДЖЕЙ!
              </p>
            </div>
          </MyAccordion>

          <MyAccordion id='ChetyreMantry' title='Четыре мантры' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="">
                Поются четыре мантры, очищающие пространство
              </p>
              <p className=" text-balance">ГАЯТРИ МАНТРА</p>
              <p className="font-bold">
                ОМ БХУР БХУВАХ СВАХА
                <br />
                ТАТ САВИТУР ВАРЕНЬЯМ
                <br />
                БХАРГО ДЭВАСЬЯ ДХИМАХИ
                <br />
                ДХЬЙО ЙО НАХ ПРАЧОДАЯТ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                О, Всевышний Источник! Ты есть высший Свет, разрушающий грехи. Мы
                медитируем на Тебя, чтобы Ты вдохновлял, просветлял и вел нас к
                освобождению!
              </p>
              <p className=" text-balance">МАХАМРИТЬЮНДЖАЯ МАНТРА</p>
              <p className="font-bold">
                ОМ ТРАЯМБАКАМ ЯДЖАМАХЕ
                <br />
                СУГАНДХИМ ПУШТИ ВАРДХАНАМ
                <br />
                УРВАРУКАМИВА БАНДХАНАМ
                <br />
                МРИТЬОР МУКШИЯ МА’МРИТАТ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Почитаем Трехокого Господа Шиву, Благоухающего, Несущего благо всем!
                Разрушающий узы рождений и смертей, да освободит Он нас от смерти
                ради Бессмертия!
              </p>
              <p>АСАТОМА МАНТРА</p>
              <p className="font-bold">
                ОМ АСАТО МА САТ ГАМАЙЯ
                <br />
                ТАМАСО МА ДЖЬОТИР ГАМАЙЯ
                <br />
                МРИТЬЮР МА АМРИТАМ ГАМАЙЯ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                От неистины веди меня к Истине, от тьмы веди меня к свету, от смерти
                веди меня к бессмертию.
              </p>
              <p className=" text-balance">ГУРУ МАНТРА</p>
              <p className="font-bold">
                ГуруР БРАХМА ГуруР ВИШНУ
                <br />
                ГуруР ДЭВО МАХЕШВАРА
                <br />
                Гуру САКШАТ ПАРАБРАХМА
                <br />
                ТАСМАЙ ШРИ ГУРАВЕ НАМАХА
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Гуру – это Брахма, Гуру – это Вишну, Гуру – это Господь Махешвара.
                Гуру – это сам Парабрахман. Тому Шри Гуру поклонение!
              </p>
            </div>
          </MyAccordion>

          <MyAccordion id='Prarthana' title='Прартхана' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="">Поется открывающая молитва Прартхана</p>
              <p className="font-bold">
                ОМ СВАРУПАЯ НАМАХА
                <br />
                ОМ ШРИ САТГУРАВЕ НАМАХА
                <br />
                ОМ ДРАМ ДАТТАТРЕЙЯЯ НАМАХА
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Истинной природе поклонение! Духовному учителю поклонение! Ом,
                Бхагавану Даттатрее поклонение!
              </p>
              <p className="font-bold">
                ОМКАРАМ БИНДУ САМЬЮКТАМ
                <br />
                НИТЬЯМ ДХЬЯЯНТИ ЙОГИНАХ
                <br />
                КАМАДАМ МОКША ДАМ ЧАЙВА
                <br />
                ОМКАРАЯ НАМО НАМАХА
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Йоги всегда медитируют на отмеченный анусварой слог Ом, исполняющий
                все желания и дарующий освобождение. Мы почтительно склоняемся перед
                Омкарой
              </p>
              <p className="font-bold">
                ГуруР БРАХМА, ГуруР ВИШНУ
                <br />
                ГуруР ДЕВО МАХЕШВАРА
                <br />
                ГуруР САКШАТ ПАРАБРАХМАН
                <br />
                ТАС МАЙ ШРИ ГУРАВЕ НАМАХА
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Гуру – это Брахма, Гуру – это Вишну, Гуру – это Господь Махешвара.
                Гуру – это сам Парабрахман, Тому Шри Гуру поклонение!
              </p>
            </div>
          </MyAccordion>

          {/* 9 */}
          <MyAccordion id='Datta-stotra' title='Даттатрея стотра' big className='max-w-xl'>
            <div className="w-full  flex flex-col justify-center gap-5">
              <p className="font-bold">
                АСЬЯ ШРИ ДАТТАТРЕЙЯ СТОТРАМ
                <br />
                ШРИ ГАНЕШАЯ НАМАХА!
              </p>
              <p className="font-bold">
                ДЖАТА ДХАРАМ ПАНДУРАНГАМ
                <br />
                ШУЛА ХАСТАМ КРИПА НИДХИМ
                <br />
                САРВА РОГА ХАРАМ ДЕВАМ
                <br />
                ДАТТАТРЕЙАМ АХАМ БХАДЖЕ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Имеющий спутанные волосы, являющийся Пандурангой (Вишну), с
                трезубцем в руке, океан милосердия. Божественный избавитель от
                всех болезней – Даттатрея, я поклоняюсь Тебе.
              </p>
              <p className="font-bold md:text-left">
                АСЙА ШРИ ДАТТАТРЕЙА СТОТРА МАНТРАСЙА
                <br />
                БХАГАВАН НАРАДА РУШИХИ
                <br />
                АНУШТУП ЧАНДАХА
                <br />
                ШРИ ДАТТА ПАРАМАТМА ДЕВАТА
                <br />
                ШРИ ДАТТА ПРИТЙАРТХЕ ДЖАПЭ ВИНИЙОГАХА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Мантры этого гимна Даттатрее божественный мудрец Нарада сочинил в
                стихотворном размере ануштубх. Шри Датта, Высшая душа, Божество
                [этого гимна]. Чтобы порадовать Шри Датту, поется этот гимн.
              </p>
              <p className="font-bold">
                ДЖАГАД УТПАТХИ КАРТРЕ ЧА
                <br />
                СТХИТИ САМХАРА ХЕТАВЕ
                <br />
                БХАВА ПАША ВИМУКТАЙА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Источник мира, его творец, хранитель и разрушитель, дарующий
                освобождение от привязанностей к миру – Даттатрея, мы склоняемся
                перед Тобой.
              </p>
              <p className="font-bold">
                ДЖАРА ДЖАНМА ВИНАШАЙА
                <br />
                ДЕХА ШУДДХИ КАРАЯ ЧА
                <br />
                ДИГАМБАРА ДАЙА МУРТЕ
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Разрушитель печали, рождения и старости, очищающий наше тело и
                душу, одеянием Тебе служит Небо. Даттатрея, мы склоняемся перед
                Тобой.
              </p>
              <p className="font-bold">
                КАРПУРА КАНТИ ДЕХАЙА
                <br />
                БРАХМА МУРТИ ДХАРАЯ ЧА
                <br />
                ВЕДА ШАСТРА ПАРИДЖНАЙА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Твое тело лучезарное, как горящая камфара. Ты – проявленный образ
                Брахмы. Ты овладел всеми Ведами и писаниями. Даттатрея, мы
                склоняемся перед Тобой.
              </p>
              <p className="font-bold">
                РХАСВА ДИРГХА КРИША СТХУЛА
                <br />
                НАМА ГОТРА ВИВАРДЖИТА
                <br />
                ПАНЧА БХУТАИКА ДИПТАЙА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Поклоняюсь Даттатрее, Который далеко за пределами тонкого,
                плотного, короткого и высокого, Кто не может быть ограничен именем
                или кастой, И Кто сияет в пяти стихиях мира.
              </p>
              <p className="font-bold">
                ЯДЖНА БХОКТЕ ЧА ЯДЖНАЙА
                <br />
                ЯДЖНА РУПА ДХАРАЙА ЧА
                <br />
                ЯДЖНА ПРИЙАЯ СИДДХАЙА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Поклоняюсь Даттатрее, Кто есть результат пяти жертвоприношений,
                Который является самим жертвенным огнем, Кто принимает форму
                жертвенного огня, Святой, Который любит жертвенный огонь.
              </p>
              <p className="font-bold">
                АДАУ БРАХМА МАДХЙА ВИШНУ
                <br />
                АНТЕ ДЕВА САДА ШИВАХА
                <br />
                МУРТИ ТРАЙА СВАРУПАЙА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Поклоняюсь Даттатрее, который в начале – Творец, Который в
                середине – Вишну, Хранитель, Который в конце – Шива, Разрушитель,
                И Кто есть Господь, представляющий Тримурти.
              </p>
              <p className="font-bold">
                БХОГА ЛАЙАЯ БХОГАЙА
                <br />
                ЙОГА ЙОГЙАЯ ДХАРИНЕ
                <br />
                ДЖИТЕНДРИЙА ДЖИТА ДЖНАЙА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Ты источник всех удовольствий и Ты само удовольствие. О, мастер
                йоги! О совершенный повелитель своих чувств, Даттатрея, мы
                склоняемся перед Тобой.
              </p>
              <p className="font-bold">
                ДИГАМБАРАЙА ДИВЬЯЯ
                <br />
                ДИВЬЯ РУПА ДХАРАЙА ЧА
                <br />
                САДОДИТА ПАРА БРАХМА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Твое одеяние – это лишь стороны света, Твоя форма сияет
                божественностью, Ты вечный, высший, Брахман, Даттатрея, мы
                склоняемся перед Тобой.
              </p>
              <p className="font-bold">
                ДЖАМБУ ДВИПА МАХАКШЕТРА
                <br />
                МАТА ПУРА НИВАСИНЕ
                <br />
                ДЖАЙА МАНАСА ТАМ ДЕВА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЭ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                В Джамбудвипе, на великой земле, находится Твое жилище Матапура.
                Победивший ум, Ты сам являешься Божеством. Даттатрея, мы
                склоняемся перед тобой.
              </p>
              <p className="font-bold">
                БХИКШАТАНАМ ГРИХЕ ГРАМЭ
                <br />
                ПАТРАМ ХЕМАМАЙАМ КАРЭ
                <br />
                НАНА СВАДА МАЙИ БХИКША
                <br />
                ДАТТАТРЕЙА НАМОСТУТЭ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Как обнаженный нищий, Ты движешься от дома к дому, из деревни в
                деревню, с золотой чашей в руках, собирая милостыню. Даттатрея, мы
                склоняемся перед Тобой.
              </p>
              <p className="font-bold">
                БРАХМА ДЖНАНА МАЙИ МУДРА
                <br />
                ВАСТРЕ ЧА АКАША БХУТАЛЕ
                <br />
                ПРАДЖНАНА ГХАНА БОДХАЙА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Поклоняюсь Даттатрее, Кто заключает в себе знание Абсолюта, Кто
                носит небо и землю как свои одежды, Кто есть три стадии:
                бодрствование, сон и глубокий сон.
              </p>
              <p className="font-bold">
                АВАДХУТА САДАНАНДА
                <br />
                ПАРАБРАХМА СВАРУПИНЭ
                <br />
                ВИДЭХА ДЭХА РУПАЙА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЭ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Авадхута, вечно-блаженный, твоя природа – Парабрахман. Имея тело,
                Ты – вне тела. Даттатрея, мы склоняемся перед Тобой.
              </p>
              <p className="font-bold">
                САТЙАМ РУПА САДАЧАРА
                <br />
                САТЙА ДХАРМА ПАРАЙАНА
                <br />
                САТЙАШРАЙА ПАРОКШАЙА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Поклоняюсь Даттатрейе, Кто есть олицетворение истины, чье
                поведение совершенно, Кто следует истине как своей дхарме, Кто
                является прибежищем истины, и Кто не имеет видимой формы.
              </p>
              <p className="font-bold">
                ШУЛА ХАСТА ГАДА ПАНЕ
                <br />
                ВАНА МАЛЯ СУКАН ДХАРА
                <br />
                ЯДЖНА СУТРА ДХАРА БРАХМАН
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Поклоняюсь Даттатрее, Кто держит в руках трезубец и булаву, Кто
                носит гирланду из душистых полевых цветов, и Кто является главным
                исполнителем огненных жертвоприношений.
              </p>
              <p className="font-bold">
                КШАРАКШАРА СВАРУПАЙА
                <br />
                ПАРАТ ПАРА ТАРАЙА ЧА
                <br />
                ДАТТА МУКТИ ПАРА СТОТРА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЭ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Поклоняюсь Даттатрее, Чья природа одновременно тленна и нетленна.
                Кто вышел за пределы трансцендентной реальности. Датта
                освобожденный, высшая хвала Тебе!
              </p>
              <p className="font-bold">
                ДАТТА ВИДЙАДХЙА ЛАКШМИЧА
                <br />
                ДАТТА СВАТМА СВАРУПИНЕ
                <br />
                ГУНА НИРГУНА РУПАЙА
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Поклоняюсь Даттатрее, Кто является величайшим знанием, Господином
                Лакшми, Датте, Который имеет форму души, и Кто имеет форму с
                качествами и без качеств.
              </p>
              <p className="font-bold">
                ШАТРУ НАШАКАРАМ СТОТРАМ
                <br />
                ДЖНАНА ВИДЖНАНА ДАЙАКАМ
                <br />
                САРВА ПАПАМ ШАМАМ ЙАТИ
                <br />
                ДАТТАТРЕЙА НАМОСТУТЕ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Поклоняюсь Даттатрее, Который уничтожает моих врагов, Кто дарует
                мне знания и мастерство, и Кто уничтожает все мои грехи.
              </p>
              <p className="font-bold">
                ИДАМ СТОТРАМ МАХАДИВЙАМ
                <br />
                ДАТТА ПРАТЙАКША КАРАКАМ
                <br />
                ДАТТАТРЕЙА ПРАСАДАЧЧА
                <br />
                НАРАДЭНА ПРАКИРТИТАМ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Этот великий божественный гимн дарует прямое восприятие
                реальности. Я, Нарада, сочинил его только благодаря милости
                Даттатреи.
              </p>
              <p className="font-bold">
                ИТИ ШРИ НАРАДА ПУРАНЭ НАРАДА КРТАМ
                <br />
                ДАТТАРЕЙА СТОТРАМ САМПУРНАМ
                <br />
                ШРИ ДАТТАРЕЙА ПАРАМАСТУ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Так заканчивается Даттатрея стотра в Нарада пуране.
              </p>
            </div>
          </MyAccordion>

          {/* <MyAccordion id='DattaStava' title='9.2 Датта-става (по средам)' big className='max-w-xl'>
            <div className="w-full  flex flex-col justify-center gap-5">
              <p className='font-bold'>
                Шри Ганешайа Намаха Шри Сарасватйаи Намаха<br />
                Шри Пaдаваллабха Нарасимха Сарасвати <br />
                Шри Гуру Даттатрейaя Намаха <br />
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Поклонение Ганеше, поклонение Сарасвати, поклонение Шри
                Нарасимхе Сарасвати (воплощению Даттатрейи)
                Поклонение Даттатрейе!
              </p>
              <p className='font-bold'>
                ДАТТAТРЕЙАМ МАХAТМAНАМ <br />
                ВАРАДАМ БХАКТАВАТСАЛАМ <br />
                ПРАПАННAРТИ ХАРАМ ВАНДЕ <br />
                СМАРТРГAМИ САМАВАТУ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Я поклоняюсь Даттатрейе, Махаатману, который дарует
                блага, защищает преданных и немедленно уничтожает
                страдания тех, кто помнит Его с верой.
              </p>
              <p className='font-bold'>
                ДИНАБАНДХУМ КРУПAСИНДХУМ <br />
                САРВА КAРАНА КAРАНАМ <br />
                САРВА РАКШAКАРАМ ВАНДЕ <br />
                СМАРТРГAМИ САМАВАТУ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Я поклоняюсь Даттатрейе, который друг бедных, море
                сострадания, причина всех причин и защитник всех тех, кто
                помнит Его искренне.
              </p>
              <p className='font-bold'>
                ШАРАНAГАТА ДИНAРТА <br />
                ПАРИТРAНА ПАРAЙАНАМ <br />
                НAРAЙАНАМ ВИБХУМ ВАНДЕ <br />
                СМАРТРГAМИ САМАВАТУ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Я поклоняюсь Даттатрейе, который убежище для бедных и
                страдающих и дарует освобождение немедленно тем, кто
                непоколебимо предан и помнит Его искренне.
              </p>
              <p className='font-bold'>
                САРВAНАРТА ХАРАМ ВАНДЕ <br />
                САРВА МАНГАЛА МАНГАЛАМ <br />
                САРВА КЛЕША ХАРАМ ВАНДЕ <br />
                СМАРТРГAМИ САМАВАТУ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Я поклоняюсь Даттатрейе, который уничтожает все
                бесполезные и пагубные обстоятельства и дарит все
                благоприятные объекты, устраняет все печали и несчастья тех,
                кто помнит Его искренне.
              </p>
              <p className='font-bold'>
                ШОШАНАМ ПAПА ПАНКАСЙЯ <br />
                ДИПАНАМ ДЖНЯНА ТЕДЖАСАХ <br />
                БХАКТAБХИШТА ПРАДАМ ВАНДЕ <br />
                СМАРТРГAМИ САМАВАТУ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Я поклоняюсь Даттатрейе, который устраняет болото
                (трясину) грехов, зажигает пламя мудрости, смягчает
                страдания и мучения тех, кто помнит Его искренне.
              </p>
              <p className='font-bold'>
                САРВАРОГА ПРАЩАМАНАМ <br />
                САРВА ПИТA НИВAРАНАМ <br />
                ТAПАПРАЩАМАНАМ ВАНДЕ <br />
                СМАРТРГAМИ САМАВАТУ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Я поклоняюсь Даттатрейе, который исцеляет все болезни,
                облегчает все страдания и устраняет все бедствия тех, кто
                помнит Его искренне.
              </p>
              <p className='font-bold'>
                БРАХМАНЬЯМ ДХАРМА ТАТВАДЖНАМ <br />
                БХАКТА КИРТИ ВИВАРДХАНАМ <br />
                АПАДУДДХАРАНАМ ВАНДЕ <br />
                СМАРТРГAМИ САМАВАТУ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Я поклоняюсь Даттатрейе, совершенно сведущему в Ведах,
                знатоку сути религии, который вызывает увеличение славы Его
                преданных и который дарит в чём бы ни нуждались преданные,
                которые помнят Его искренне.
              </p>
              <p className='font-bold'>
                ДЖАНМА САМСAРА БАНДХАГНАМ <br />
                СВАРЎПAНАНДА ДAЙЯКАМ <br />
                НИХШРЕЙЯСА ПРАДАМ ВАНДЕ <br />
                СМАРТРГAМИ САМАВАТУ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Я поклоняюсь Даттатрейе, который самый превосходный и
                освобождает от цикла рождения и смерти в этом мире и
                который даёт блаженство тем, кто помнит Его искренне.
              </p>
              <p className='font-bold'>
                ДЖАЯ ЛAБХА ЙАШАХ КAМА <br />
                ДAТУРДАТТАСЙЯ ЙЯХ СТАВАМ <br />
                БХОГА МОКША ПРАДAСЙЕМАМ <br />
                ПРАПАТЕТ САКРАТИ БХАВЭТ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Те, кто повторяет (по памяти) это восхваление Даттатрейи
                регулярно и с верой, становится мудрым и достигает победы,
                славы, удовлетворения всех мирских желаний и достижений и в
                конце концов получает освобождение от зависимости жизни.
              </p>
              <p className='font-bold'>
                Шри Ганешайа Намаха <br />
                Шри Сарасватйаи Намаха <br />
                Шри Пaдаваллобха Нарасимха Сарасвати <br />
                Шри Гуру Даттатрейaя Намаха
              </p>
            </div>
          </MyAccordion> */}

          <MyAccordion id='VtoroiPoklon' title='Второй поклон' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-xl">
                Выполняется второй поклон из практики пяти поклонов.
              </p>
              <p className="w-xl">
                Поклон Истинной Дхарме (выполняется под звук колокольчика).
              </p>
            </div>
          </MyAccordion>

          <MyAccordion id='Digambara' title='Дигамбара-мантра' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-xl">
                Поется молитва-почитание Даттатреи в аспекте «одетого в стороны
                света» – дигамбары
              </p>

              <p className="font-bold ">
                ДИГАМБАРА ДИГАМБАРА
                <br />
                ШРИ ПАДАВАЛЛАБХА ДИГАМБАРА
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Одетому в пространство поклонение! Святому Шрипаде Валлабхе
                поклонение!
              </p>
            </div>
          </MyAccordion>

          <MyAccordion id='TretiiPoklon' title='Третий поклон' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-xl">
                Выполняется третий поклон из практики пяти поклонов.
              </p>
              <p className="w-xl">
                Поклон Святой Сангхе (выполняется под звук колокольчика).
              </p>
            </div>
          </MyAccordion>

          <MyAccordion id='DattaMantra' title='Мантра Даттатрее' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-xl">
                Поется семенная мантра Даттатреи, 7 раз.
              </p>
              <p className="font-bold">ОМ ДРАМ ДАТТАТРЕЙАЙА НАМАХА</p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Ом, Бхагавану Даттатрее поклонение!
              </p>
            </div>
          </MyAccordion>

          <MyAccordion id='GayatriMantraDattatrei' title='Гаятри мантра Даттатреи' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-xl">
                Поется гаятри мантра Даттатреи.
              </p>
              <p className="font-bold">
                ОМ ДАТТАТРЕЙАЙА ВИДМАХЕ
                <br />
                АТРИПУТРАЙА ДХИМАХИ
                <br />
                ТАННО ДАТТА ПРАЧОДАЙАТ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Ом! Да услышит нас Даттатрея! Мы медитируем на сына Атри. Да дарует
                нам Даттатрея свою силу просветления!
              </p>

            </div>
          </MyAccordion>

          {/* <MyAccordion id='BhadjanyDattatree' title='Бхаджаны Даттатрее' big className='max-w-xl'>
            <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5">
              <a href='https://t.me/jkjlkjscksj/58/1235' target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-300 text-xs sm:text-sm md:text-md lg:text-base">
                Аудио файлы бхаджанов Даттатрее
              </a>

              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                1. АТРИ НАНДАНА
              </h2>
              <p className="font-bold">
                АТРИ НАНДАНА АГАЩАМАНА<br />
                ТРИГУНАТИТА ДЖНЯНАДХАНА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                О Сын Атри! Подобный пространству!
                Превосходящий три гуны! Богатство знания!
              </p>
              <p className="font-bold">
                НАМБИРЕ НИС ЧАЯ БХАВА ТАРАНА<br />
                ДАЯПААЛИСУВУДУ ГУРУ ЧАРАНА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Наделяющий отсутствием сомнения, спасающий из мирского
                бытия! Милосредный, я поклоняюсь стопам Гуру.
              </p>
              <p className="font-bold">
                НАТАДЖАНА ПАЛАКА ДЖАЯКАРАНА<br />
                АНАГХА САХИТА БХАЙЯ ХАРАНА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Спаситель людей, творящий победу.
                Безупречный, устраняющий страх.
              </p>
              <p className="font-bold">
                ГХАНА МАХИМАНВИТА ГХАНА КАРУНА<br />
                ЩАТА РАВИ БХАСУРА ТАМА ХАРАНА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Средоточие величия, средоточие милосердия!
                Сияющий, как сотни солнц, устраняющий тьму.
              </p>
              <p className="font-bold">
                МАНАВАНУ БЕЛАГУВА ЩУБХАКИРАНА<br />
                НАМИСУВЕ САТЧИТАНАНДА ГХАНА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Творящий милосердие людям,
                поклонение Тебе - Бытие, Сознание, Блаженство!
              </p>

              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                2. ДАТТА ДЕВА
              </h2>
              <p className="font-bold">
                ДАТТА ДЕВА ДАТТА ДЕВА<br />
                БХУКТИ ПРАДАЯ МУКТИ ПРАДАЯ ДАТТА ДЕВА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                О, Датта Дева, Бог, Бог! Дарующий как освобождение,
                так и мирские блага, Датта Дева.
              </p>
              <p className="font-bold">
                ОМ АНАСУЯ СУТУЯ НАМАХ ОМ ДАТТАЯ НАМАХ<br />
                ОМ АТРИ ПУТРАЯ НАМАХ ОМ ЙОГИНДРАЯ НАМАХ<br />
                АДИ ДЕВАЯ МАХА ДЕВАЯ<br />
                ПАДМА ХАСТАЯ ПАДМА ПАДАЯ ГУРУ ДАТТАЯ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Поклонение Тебе, сын Атри и Анасуи!
                Царь среди йогов! Изначальный Бог, Великий бог!
                Тому, чьи ладони и стопы подобны цветкам лотоса, поклонение!
              </p>
              <p className="font-bold">
                ОМ ВИШВА РУПАЯ НАМАХ ОМ ВАРАДАЯ НАМАХ<br />
                ОМ САРВЕШАЯ НАМАХ ОМ ДИВЬЯ МУРТАЙЕ НАМАХ<br />
                САДАНАНДАЯ ГУНАТИТАЯ<br />
                МАХАДИШАЯ МАХЕШВАРАЯ ГУРУ ДАТТАЯ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Поклонение Тебе, Чья форма - вся Вселенная!
                Поклонение Раздающему дары! Поклонение тому, кто является
                сущностью всего мира, Кто есть образ божественного!
                Превосходящий гуны, Великий Владыка!
              </p>
              <p className="font-bold">
                ОМ АВАДХУТАЯ НАМАХ ОМ ДХАРМАЯ НАМАХ<br />
                ОМ ГУРУГАМЙАЯ НАМАХ ОМ СИДДХАЯ НАМАХ<br />
                ВАРИШТХАЯ САДАШИВАЯ<br />
                ВИШВАМБАРАЯ ВИШВАНАДХАЯ ГУРУ ДАТТАЯ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Поклонение запредельному Авадхуте! Поклонение воплощенной
                Дхарме! Духовному Учителю, у Которого находят Прибежище,
                Наивысшему! Облачённому в этот мир, как в одеяния, чья форма —
                вся вселенная. О Гуру Датта, прими это воспевание твоих Имен как наше подношение!
              </p>


              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                3. ДАТТАТРЕЙЯ АТРЕЙЯ ПУТРА
              </h2>
              <p className="font-bold">
                ДАТТАТРЕЙЯ АТРЕЙЯ ПУТРА<br />
                АРАВИНДА ГАТРА АПАДА МИТРА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Даттатрейя, сын Атри.
                Пребывающий в лотосе, Друг страждущих!
              </p>
              <p className="font-bold">
                СУДЖАНА ЧАРИТРА ПАРАМА ПАВИТРА<br />
                ШРИКАРАГАТРА КАРУНАРАСАТРА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Деяние праведных, самый священный!
                Отмеченный благоприятными знаками, сущность милосердия!
              </p>
              <p className="font-bold">
                СВАПРЕМАПАТРА ДУШТА КАЛАТРА<br />
                САТЧИТАНАНДА МИТРА СУНЕТРА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Сосуд любви к Истинному Я, устраняющий грех,
                Бытие, Сознание, Блаженство, прекрасноокий друг!
              </p>

              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                4. ШРИ ГУРУ ДАТТА
              </h2>
              <p className="font-bold">
                ДЖАЯ ГУРУ ДАТТА ДЖАЯ ГУРУ ДАТТА<br />
                ДЖАЯ ГУРУ ДАТТА ШРИ ДАТТА<br />
                ШРИ ГУРУ ДАТТА ШРИ ГУРУ ДАТТА<br />
                ШРИ ГУРУ ДАТТА ШРИ ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Слава Гуру Датте! Слава святому Датте!
              </p>
              <p className="font-bold">
                НА ТАЛЛИ ДАТТА НА ТАНДРИ ДАТТА<br />
                НА ЙАННА ДАТТА ШРИ ДАТТА<br />
                НА ПАРУВУ ДАТТА НА ТЕРУВУ ДАТТА<br />
                НА ГУРУВУ ДАТТА ШРИ ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Моя мать, мой отец, мой ведущий - Шри Датта!
                Мой почтенный, мой путь, мой учитель - Шри Датта!
              </p>
              <p className="font-bold">
                НА КАЛИМИ ДАТТА НА БАЛИМИ ДАТТА<br />
                НА ЦЕЛИМИ ДАТТА ШРИ ДАТТА<br />
                НА БУДДХИ ДАТТА НА ВРДДХИ ДАТТА<br />
                НА СИДДХИ ДАТТА ШРИ ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Моя драгоценность, мое могущество, мой друг - Шри Датта!
                Мой интеллект, мое процветание, мое совершенство - Датта!
              </p>
              <p className="font-bold">
                НА ЦУПУ ДАТТА НА РУПУ ДАТТА<br />
                НА ЕПУ ДАТТА ШРИ ДАТТА<br />
                НА НИДРА ДАТТА НА МУДРА ДАТТА<br />
                НА БХАДРА ДАТТА ШРИ ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Моя философия, моя природа, мой родственник - Шри Датта!
                Мой сон, моя мудра, мое счастье - Шри Датта!
              </p>
              <p className="font-bold">
                НА ЦЕТА ДАТТА НА ВРАТА ДАТТА<br />
                НА КАИТА ДАТТА ШРИ ДАТТА<br />
                НА МАТА ДАТТА НА ПАТА ДАТТА<br />
                НА БАТА ДАТТА ШРИ ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Мое деяние, мой обет, мой поэт - Шри Датта!
                Мое обещание, моя музыка, мой путь - Шри Датта!
              </p>
              <p className="font-bold">
                НА ПАНТА ДАТТА НА ИНТА ДАТТА<br />
                НА ВЕНТА ДАТТА ШРИ ДАТТА<br />
                НА МАНАСУ ДАТТА НА ТАПАСУ ДАТТА<br />
                НА СОГАСУ ДАТТА ШРИ ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Мой плод, мой храм, моя кшетра – Шри Датта!
                Мой мудрый, мой аскетичный, мой прекрасный Шри Датта!
              </p>
              <p className="font-bold">
                НА БРАХМА ДАТТА НА ВИШНУ ДАТТА<br />
                НА ШИВА ДАТТА ШРИ ДАТТА<br />
                НА ГАНАМ ДАТТА НА ДХЬЯНАМ ДАТТА<br />
                НА ЛИНАМ ДАТТА ШРИ ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Мой Брахма, мой Вишну, мой Шива - Шри Датта!
                Мое воспевание, моя медитация, моя преданность - Датта!
              </p>


              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                5. ДАТТАМ ДИНА ДЖАНАРТИ
              </h2>
              <p className="font-bold">
                ДАТТАМ ДИНА ДЖАНАРТИ НАЩАНАКАРАМ<br />
                ВИШНУМ ВИДХИМ ЩАНКАРАМ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Датта - уничтожитель бедствий бедных,
                Он Вишну, Брахма и Шанкара.
              </p>
              <p className="font-bold">
                СВАРТХАНАРТХА НИВАРАНАМ МРУДУПАДАМ<br />
                ДХАРМАВАДХУТАМ ГХАНАМ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Устраняющий бесполезные цели, Обладатель нежных стоп,
                Дхарма авадхута.
              </p>
              <p className="font-bold">
                АТРЕЯМ БАХУЧИТРА ВЕЩАДХАРАНАМ<br />
                САХИАДРИ САНЧАРИНАМ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Сын Атри, Принимающий множество форм,
                движущийся в лесу Сахиадри.
              </p>
              <p className="font-bold">
                СЕВЕ САДГУРУ МУРТИМ ЕКАМАНИЩАМ<br />
                ШРИ САТЧИТАНАНДАНАМ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Я неусыпно почитаю образ единого Истинного Гуру, Бытие, Сознание, Блаженство!
              </p>

              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                6. ОМ ДРАМ ДАТТАТРЕЯЯ НАМАХА
              </h2>
              <p className="font-bold">
                ОМ ДРАМ ДАТТАТРЕЙАЯ НАМАХА<br />
                ДЖАЯ САТГУРУ ДАТТА<br />
                НАМО ДАТТАТРЕЙА БХАГАВАН
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Мы приветствуем Бхагавана Даттатрейю!
                Слава Божественному, Истинному Гуру!
              </p>

              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                7. ГУРУ ДАТТА ДИГАМБАРА ТАВА ЩАРАНАМ
              </h2>
              <p className="font-bold">
                ГУРУ ДАТТА ДИГАМБАРА ТАВА ЩАРАНАМ<br />
                ДАТТА ДАТТА ДИГАМБАРА ТАВА ЩАРАНАМ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                О, Гуру Датта, Одетый в пространство, незапятнанный!
                В Тебе я принимаю Прибежище!
              </p>
              <p className="font-bold">
                АТРИ СУНУ АНАСУЙЯ НАНДАНА<br />
                ОМ ЙОГИ РАДЖА ГУРУ ТАВА ЩАРАНАМ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Сын риши Атри, радость Анасуи. Царь среди йогов,
                Духовный учитель, зажигающий пламя мудрости,
                в Тебе я принимаю Прибежище!
              </p>
              <p className="font-bold">
                ШРИ ПАДА ШРИ ВАЛЛАБХА ЯТИ ВАРА<br />
                СИДДХА САРАСВАТИ ТАВА ЩАРАНАМ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Являвшийся как Шри Валлабха и великий сиддха Муни
                Сарасвати. О Гуру Датта, в Тебе я принимаю Прибежище!
              </p>
              <p className="font-bold">
                КАРТАВИРЬЯ БХУКТИ МУКТИ ПРАДА<br />
                ПИНГАЛЯ ПУДЖИТА ТАВА ЩАРАНАМ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Картавирью одаривший процветанием и Освобождением,
                Змея Пингалу благословлявший.
                О Гуру Датта, в Тебе я принимаю Прибежище!
              </p>
              <p className="font-bold">
                ГОРАКХА ЧАРВА ВИНАЩАКА ДАТТА<br />
                АВАДХУТА НИРАНДЖАНА ТАВА ЩАРАНАМ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Уничтоживший демона Чарву, незапятнанный Авадхута!
                О Гуру Датта, в Тебе я принимаю Прибежище!
              </p>
              <p className="font-bold">
                ЭКНАТА ДЖАНАРДАНА СВАМИ<br />
                АКАЛЬКОТА ГУРУ ТАВА ЩАРАНАМ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Освятивший жизнь Джанардана Свами и его ученика Экнатха.
                Являвшийся как Сатгуру в Аккалькоте.
                О Гуру Датта, в Тебе я принимаю Прибежище!
              </p>
              <p className="font-bold">
                ПУРНА ПАРАТ ПАРАСА ГУНА ГУНЕЩВАРА<br />
                НИРАКАРЕ ГУРУ ТАВА ЩАРАНАМ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Безграничный, пребывающий за пределами всего запредельного,
                неподвластный ограничениям гун, вне формы.
                Одетый в Пространство, Незапятнанный!
                О Гуру Датта, в Тебе я принимаю Прибежище!
              </p>

              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                8. ШРИ ДАТТА
              </h2>
              <p className="font-bold">
                ШРИ ДАТТА ШРИ ДАТТА ШРИ ДАТТА ДЖЕЙ ДЖЕЙ ДАТТА<br />
                ДЖЕЙ ДАТТА ДЖЕЙ ДАТТА ДЖЕЙ ДАТТА ШРИ ШРИ ДАТТА<br />
                ДЭВА ДАТТА ДЭВА ДАТТА ДЭВА ДАТТА ШРИ ДАТТА<br />
                ДЖЕЙ ДАТТА ДЖЕЙ ДАТТА ДЖЕЙ ДАТТА ДЭВА ДАТТА<br />
                БРАХМА ДАТТА ВИШНУ ДАТТА ШИВА ДАТТА ДЖЕЙ ДАТТА<br />
                ШРИ ДАТТА ШРИ ДАТТА ШРИ ДАТТА ДЖЕЙ ДЖЕЙ ДАТТА<br />
                ГУРУ ДАТТА ГУРУ ДАТТА ГУРУ ДАТТА ШРИ ГУРУ ДАТТА<br />
                ДЖЕЙ ДАТТА ДЖЕЙ ДАТТА ДЖЕЙ ДАТТА ШРИ ГУРУ ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Вновь и вновь я, дрожа от радости, плача от благоговейного
                восторга и преданности, восхваляю того величайшего Владыку,
                Гуру всех Гуру, царя среди всех йогов, авадхутов и сиддхов, бога
                среди богов – Бхагавана Даттатрейю! Слава, Победа! О Святой
                Датта! О Господь, вмещающий в Себе Брахму, Вишну и Шиву!
                О Духовный Учитель! Слава Тебе, вновь и вновь!
              </p>

              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                9. ДАТТА ДИГАМБАРА
              </h2>
              <p className="font-bold">
                ОМ ГУРУ ДАТТА НАМО НАМАХА<br />
                ДАТТА ДИГАМБАРА НАМО НАМАХА<br />
                ДЖАГА ГУРУ ДАТТА НАМО НАМАХА<br />
                САРВА АВАТАРА НАМО НАМАХА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                О Гуру Датта, пклонение Тебе! О Датта, одетый в пространство,
                поклонение Тебе! Гуру всего мира, вселенский Аватара,
                поклонение Тебе, Датта!
              </p>

              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                10. НАМО ДАТТА
              </h2>
              <p className="font-bold">
                НАМО ДАТТА НАМО ДАТТА ДАТТА ДАТТА НАМО НАМО<br />
                ГУРУ ДАТТА ГУРУ ДАТТА ДАТТА ДАТТА ГУРУ ГУРО
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Поклонение Датте! Поклонение Датте!
                Датта, Датта, поклонение, поколонение!
                О Гуру Датта, Гуру Датта, Датта, Датта, Гуру, Гуру!
              </p>
              <p className="font-bold">
                ДИВЬЯ ПАДА НАМО НАМО ДИНА РЭКША НАМО НАМО<br />
                ДИВЬЯ ПАДА ДИНА РЭКША НАМО НАМО
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Божественному состоянию, поклонение, поклонение!
                Защитнику бедных, поклонение, поклонение!
              </p>
              <p className="font-bold">
                ДИРА ХРИДАЯ НАМО НАМО БХАКТА САДАЯ НАМО НАМО<br />
                ДИРА ХРИДАЯ БХАКТА САДАЯ НАМО НАМО
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Устойчивому, Сердечному поклонение, поклонение!
                Милостивому к преданным поклонение, поклонение!
              </p>
              <p className="font-bold">
                МАНДЖУ ХАСА НАМО НАМО МОХАНАНГА НАМО НАМО<br />
                МАНДЖУ ХАСА МОХАНАНГА НАМО НАМО
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Улыбающемуся нежно поклонение, поклонение!
                Устраняющему омрачение поклонение, поклонение!
              </p>
              <p className="font-bold">
                ЙОГА НЕТРА НАМО НАМО ШАКТИПАТА НАМО НАМО<br />
                ЙОГА НЕТРА ШАКТИПАТА НАМО НАМО
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Оку йоги поклонение, поклонение!
                Шактипату поклонение, поклонение!
              </p>
              <p className="font-bold">
                САТЬЯ РУПА НАМО НАМО САТЧИТАНАНДА НАМО НАМО<br />
                САТЬЯ РУПА САТЧИТАНАНДА НАМО НАМО
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Форме Истины, поклонение, поклонение! Бытию, Сознанию,
                Блаженству - поклонение, поклонение!
              </p>

              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                11. ДАТТАТРЕЙЯ ТРИМУРТИ РУПА
              </h2>
              <p className="font-bold">
                ДАТТАТРЕЙЯ ТРИМУРТИ РУПА<br />
                ТРИБХУВАНА ЛОКА РАКШАКА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                О Даттатрейя, образ Тримурти, защитник трех миров!
              </p>
              <p className="font-bold">
                КАМАДХЕНУ КАЛЬПАВРУКША<br />
                КАМИТА ПАЛАДА ГА ДАЙАКА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Корова желания, древо желания! Желанный, дающий плоды!
              </p>
              <p className="font-bold">
                ДАНДА КАМАНДАЛУ ШУЛА ДАМАРУКА<br />
                ШАНКХАЧАКРА КА ШОБИТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Украшенный посохом, чашей, трезубцем, дамару,
                раковиной и чакрой.
              </p>
              <p className="font-bold">
                УТТАМА УТТАМА ПУРУШОТАММА<br />
                ПУРНАЧАНДРА ГА ПРАКАТИТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Высший, высший, Высочайший Пуруша! Являющийся как полная луна.
              </p>
              <p className="font-bold">
                БХАВАБАНДАНА БХАВАБАЙА ДУРА<br />
                БХАКТА КАРУНА ГА САГАРА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Удаляющий привязанность к мирскому бытию и страх перед
                мирским бытием. Океан милосердия для преданных!
              </p>
              <p className="font-bold">
                КРТТИКАКАРА СИДДХАНУЗАРА<br />
                СИДДХАДУТА МАНОХАРА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Образ созвездия плеяд, тот за кем следуют сиддхи,
                Посланник сиддхов, уносящий ум!
              </p>
              <p className="font-bold">
                САХИАДРИ ВАСА САТЧИТАНАНДА<br />
                ШРИ ГУРУ ДАТТА СВАРУПА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Обитающий в лесу Сахиадри, О, Гуру Датта!
                По сути Ты - Бытие, Сознание, Блаженство!
              </p>

              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                12. ДАТТА ДЭВА ДЭВА ДЭВА
              </h2>
              <p className="font-bold">
                ДАТТА ДЭВА ДЭВА ДЭВА<br />
                ДАНАВАНТА ДИНА РЭКША
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                О, Датта Дева, Бог, Бог! Разрушитель демонов, защитник бедных
              </p>
              <p className="font-bold">
                ДОЩАДУРА ДИКША ДХАРА<br />
                САРВАБХАКТА РАКША ДИРА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Удаляющий грехи, имеющий дикшу!
                защитник всех преданных, устойчивый!
              </p>
              <p className="font-bold">
                ДХЕНУ САХИТА ДАЩА ДИЩА ВЬЯПТА<br />
                ДХАРМАПАЛА ДАНА ЩИЛА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Вместе с коровой Дхену, охватывающий десять направлений!
                Хранитель Дхармы, щедрый, твердый!
              </p>
              <p className="font-bold">
                ДАСА АБХАЙЯ ДЭЩА КИРТА<br />
                ДАСЬЯ МУКТА ПУРНА ГАНА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Бесстрашие для своих слуг, Прославляемый по всем местам,
                Свободный от рабства, полнота щедрости!
              </p>
              <p className="font-bold">
                ДЭЩА КАЛА КАЛА ГОЧАРА<br />
                КАЛА РУПА КАЛА КАЛА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Место и время, Пребывающий в вечности, Образ Вечности,
                Конец Времени!
              </p>
              <p className="font-bold">
                ДАНДАДХАРАХА САТЧИТАНАНДА<br />
                АКХАНДА ТЕДЖА ДИВЬЯ ПУНЖЬЯ
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Держащий посох, Бытие, Сознание, Блаженство!
                Бесконечный свет, Божественный поток!
              </p>

              <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
                13. ГУРУТТАМА
              </h2>
              <p className="font-bold">
                ГУРУТТАМА ДАТТА ГУРУТТАМА<br />
                ДЖАЙОСТУ ДАТТА ГУРУТТАМА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Луший гуру Датта, Наивысший гуру!
                Победа тебе Датта, Наивысший гуру!
              </p>
              <p className="font-bold">
                СУРЕЩА МАХЕЩА ПАРЕЩА ДАТТА<br />
                ГИРИЩА НИРИЩА МАДИЩА ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Владыка богов, Великий владыка, Высший владыка Датта!
                Владыка гор, Неимеющий владык, мой владыка, Датта!
              </p>
              <p className="font-bold">
                СМАРАМИ ВАДАМИ ГРУНАМИ ДАТТА<br />
                НАМАМИ БХАДЖАМИ ЙАДЖАМИ ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Тебя я помятую, о тебе говорю, тебя обоняю, Датта!
                Поклоняюсь, почитаю, жертвую тебе, Датта!
              </p>
              <p className="font-bold">
                ТВАМЕВА ГАТИРХИ МАМАСИ ДАТТА<br />
                ПАТИСЧА ДХРУТИСЧА МАТИСЧА ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Ты мой путь, Датта! Ты мой владыка, опора и разум, Датта!
              </p>
              <p className="font-bold">
                ШРИЙАМ ЧА ДХИЙАМ ЧА ДЖАЙАМ ЧА ДАТТА<br />
                ДАДАСИ ПРАПАСИ ТАНОСИ ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Ты мое счастье, разум, и победа, Датта!
                Ты даритель, защитник, и хранитель, Датта!
              </p>
              <p className="font-bold">
                ВИДХАТРА ХАРИЩА МУКХОСИ ДАТТА<br />
                КАРЕЩУ ТАДАНКА ВАХОСИ ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Ты поддержатель, Владыка Хари, Ты главный, Датта!
                Ты носишь благие знаки на руках, Датта!
              </p>
              <p className="font-bold">
                ЩАМЕНА ДАМЕНА ЙАМЕНА ДАТТА<br />
                БХАВАНТА МУПАЙТИ НАРОТРА ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Ты наделен спокойствием, терпением, и самоограничением,
                Датта! Ими человек тебя обретает, о Датта!
              </p>
              <p className="font-bold">
                ИХАПИ ПАРЕПИ СУКХАМ ХИ ДАТТА<br />
                ПРАЙАЧЧА ШРИ САТЧИТАНАНДА ДАТТА
              </p>
              <p className="text-balance max-w-screen-sm text-sm">
                Здесь и там ты Счастье, Датта!
                Ты Благо, Бытие, Сознание, Блаженство, о Датта!
              </p>
            </div>
          </MyAccordion> */}

          <MyAccordion id='GayatriMantraBrahmanandy' title='Гаятри мантра Брахмананды' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-xl">
                Поется гаятри мантра Брахмананды.
              </p>
              <p className="font-bold">
                ОМ СИДДХА ЙОГИ ВИДМАХЕ
                <br />
                ПАРАМАХАМСАЙА ДХИМАХИ
                <br />
                ТАННО ПРАБХАКАРА ПРАЧОДАЙАТ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Ом! Да услышит нас сиддха йоги Прабхакара! Мы медитируем на
                Парамахамсу. Да осветит Шива Прабхакара наш разум!
              </p>

            </div>
          </MyAccordion>

          <MyAccordion id='MolitvaBrahmanande' title='Молитва к Брахмананде' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-xl">
                Поется молитва к Парамгуру Брахмананде.
              </p>

              <p className="font-bold  md:text-laft">
                ПРАБХАКАРАМ ШАНКАРА ЛОЧАНАМ
                <br />
                ПРАБХАНКУРАМ ШАКТИ ВИШЕША ДАЙАКАМ
                <br />
                ПРАБХАКАРА ШРИ ШИВА СИДДХА ЙОГИНАМ
                <br />
                СМАРААМИ НИТЙАМ МАНАСА НАМАМЙАХАМ
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Человек с глазами Господа Шивы, Рассвет, который рождает силу! Я
                держу тебя в своей памяти каждый день И склоняю голову перед тобой.
              </p>
            </div>
          </MyAccordion>

          <MyAccordion id='MantraBrahmanandy' title='Мантра Брахмананды' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-xl">
                Поется мантра Брахмананды, 3 раза.
              </p>
              <p className="font-bold">
                ОМ НАМО НАМАХ ШИВАЙА
                <br />
                ОМ ШИВА ПРАБХАКАРАЙА
              </p>
              <p className=" text-balance max-w-screen-sm text-sm">
                Ом поклонение, поклонение Шиве, Шиве Прабхакаре!
              </p>

            </div>
          </MyAccordion>

          <MyAccordion id='Hvala' title='Восхваление' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-xl">
                Звучит восхваление.
              </p>

              <p className="font-bold max-w-screen-sm">
                БХАГАВАН ШРИ АВАДХУТА ДАТТАТРЕЙЯ КИ — ДЖЕЙ!
                <br />
                БХАГАВАН ШИВА ПРАБХАКАРА СИДДХАЙОГИ ШРИ Гуру БРАХМАНАНДА АВАДХУТА КИ
                — ДЖЕЙ!
                <br />
                ШРИ Гуру СВАМИ ВИШНУДЕВАНАНДА ГИРИ ДЖИ КИ — ДЖЕЙ!
                <br />
                САТЬЯ САНАТАНА ДХАРМА КИ — ДЖЕЙ!
                <br />
                ЛАЙЯ ЙОГА Гуру ПАРАМПАРА КИ- ДЖЕЙ!
                <br />
                САХАДЖА ДХАРМА КИ-ДЖЕЙ!
                <br />
                АРЬЯ САНГХА КИ-ДЖЕЙ!
              </p>

            </div>
          </MyAccordion>

          <MyAccordion id='Rakovina' title='Звучит раковина' big className='max-w-xl'>
            <p className="sutra-title w-xl"></p>
          </MyAccordion>

          <MyAccordion id='ChetvertyiPoklon' title='Четвертый поклон' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-xl">
                Выполняется четвертый поклон из практики пяти поклонов.
              </p>
              <p className="w-xl">
                Поклон Самайе (выполняется под звук колокольчика).
              </p>
            </div>
          </MyAccordion>

          <MyAccordion id='TextSytry' title='Текст сутры' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <h6 className="">Шлоки для сутр</h6>
              <div className="px-2 md:px-5">
                <MyAccordion title="1 день">
                  <p className="text-sm">
                    Шуддха Дхарма сказал: «Пойми, о Анама, весь мир как иллюзию,
                    как мираж в пустыне. Познай, существует лишь неделимое,
                    бесформенное, всепронизывающее Сознание – Источник. Он превыше
                    учений и методов йоги. Нет иного Бхагавана, кроме нерожденного
                    Ума. Называют его Пустотой или Праджняной, но не ведают сути.
                    Познай, о Анама, твое «Я» – подобно пространству,
                    непостижимое, незапятнанное и бесконечное, безупречное, полное
                    блаженства. Оно, а не что-то другое, лежит в основании
                    вселенной имен и форм. В нем нет ни рождения, ни смерти.
                    /Освобождающий нектар драгоценных наставлений/
                  </p>
                </MyAccordion>
                <MyAccordion title="2 день">
                  <p className="text-sm">
                    Единый Атман есть всё. В Нём нет ни разделения, ни
                    неразделения. «Он существует», «Он не существует» - эти
                    высказывания о Нём кажутся мне бессмысленными. Суть всей
                    Веданты – это знание и осознание Атмана. Я есть Атман,
                    бесформенный и всепронизывающий по самой своей природе.
                    /Авадхута-Гита/
                  </p>
                </MyAccordion>
                <MyAccordion title="3 день">
                  <p className="text-sm">
                    Вода может быть спокойной или взволнованной – также и Брахман
                    может быть спокойным или неспокойным. Такова его природа. Это
                    глупость и непонимание делят единое на «это сознательное
                    существо», а «это бессознательная материя» - мудрые не
                    придерживаются таких ошибочных точек зрения. Потому для глупца
                    мир полон страданий, для мудрого тот же мир полон блаженства,
                    как для слепого весь мир погружен в тьму, а для того, кто
                    видит, мир полон света. /Йога Васиштха/
                  </p>
                </MyAccordion>
                <MyAccordion title="4 день">
                  <p className="text-sm">
                    Для тебя нет ни рождения, ни смерти, у тебя нет ума, для тебя
                    не существует ни связанности, ни освобождения, ни благого, ни
                    неблагого. Почему же ты рыдаешь, сын Мой? Имя и форма не
                    относятся ни к тебе, ни ко Мне. /Авадхута-Гита/
                  </p>
                </MyAccordion>
                <MyAccordion title="5 день">
                  <p className="text-sm">
                    Ты не рождался и не умрёшь. У тебя никогда не было тела. “Всё
                    есть Брахман” – так говорят многие священные писания. Ты
                    внутри и снаружи. Ты – Шива, который есть всегда и повсюду.
                    /Авадхута-Гита/
                  </p>
                </MyAccordion>
                <MyAccordion title="6 день">
                  <p className="text-sm">
                    Высшее Я остается самим собой, даже если энергии мира вызывают
                    бесконечные волнения на поверхности океана сознания. В этом
                    мире нет ничего независимого от Брахмана, что можно назвать
                    «телом» или еще чем. То, что видится как тело, и то, что
                    видится как понятия, объекты восприятия, разрушающееся и
                    нерушимое, мысли и чувства и их значения – все это есть
                    Брахман в Брахмане – бесконечном сознании. /Йога Васиштха/
                  </p>
                </MyAccordion>
                <MyAccordion title="7 день">
                  <p className="text-sm">
                    Если хочешь жить без страданий – не порождай понятий того или
                    этого, созерцая, не отвлекайся днем и ночью. Исследуя «я», ищи
                    его корень-основу, обнаружив – поймешь: есть один Бхагаван –
                    нираламбха, поклоняясь ему, воистину, тебе не на что
                    опереться! Познай состояние без опоры как само совершенство и
                    пребывай уверенно в свободе!» /Освобождающий нектар
                    драгоценных наставлений/
                  </p>
                </MyAccordion>
                <MyAccordion title="8 день">
                  <p className="text-sm">
                    «Из-за авидьи – демона неведения, вся вселенная, которой
                    никогда не было, видится непросветленному грудой объектов.
                    Из-за асмиты – демона забвения совершенного Источника – Ума,
                    «я» кажется реально существующим. Из-за раги – демона
                    привязанности к двойственности, мы живем в клетке этого мира.
                    Отсеки корни неведения! Познай истинную природу «Я»! Нет иного
                    Бхагавана, кроме Ума! /Освобождающий нектар драгоценных
                    наставлений/
                  </p>
                </MyAccordion>
                <MyAccordion title="9 день">
                  <p className="text-sm">
                    Двойственность видна только глазами непонимающих. Разум,
                    интеллект, чувство эго, космические изначальные элементы,
                    чувства и все разнообразные феномены есть только Брахман,
                    удовольствие и боль – просто бессмысленные слова и иллюзии.
                    Как звук в горах вызывает многочисленные эхо, так же и единое
                    космическое сознание ощущает множественность внутри себя, с
                    такими понятиями, как «это я» и «это мой разум» и т.д. Единое
                    космическое сознание видит множественность в себе, как
                    видящему сон снятся разнообразные объекты внутри него самого.
                    /Йога Васиштха/
                  </p>
                </MyAccordion>
                <MyAccordion title="10 день">
                  <p className="text-sm">
                    Нет Брахмана иного, кроме Сознания! Все явления, такие, как
                    мир и тело – проекции Сознания. А Сознания в самом деле не
                    существует, оно пусто в своей сути. Высшая Реальность «Я»
                    абсолютно чиста, и за пределами усилий. Хотя она и пуста, все
                    постоянно возникает в ней. /Освобождающий нектар драгоценных
                    наставлений/
                  </p>
                </MyAccordion>
                <MyAccordion title="11 день">
                  <p className="text-sm">
                    В разбитом кувшине пространство внутри кувшина растворяется в
                    беспредельном пространстве. Очищенный Ум становится единым с
                    Шивой. Никакое разделение не проявляется во Мне. Нет кувшина и
                    пространства внутри него, нет дживы, нет тела дживы. Знай:
                    есть только Брахман, лишенный познаваемого и познающего.
                    /Авадхута-Гита/
                  </p>
                </MyAccordion>
                <MyAccordion title="12 день">
                  <p className="text-sm">
                    Будучи всемогущим, Брахман становится всем тем, чем пожелает,
                    безо всяких мотиваций для этого. Знающие Брахмана заявляют,
                    что Брахман это Бог, великое неподвижное существо, без
                    движения, действия и инструмента действия, лишенное причинной
                    мотивации и неизменяемое. Когда эта истина не понимается, это
                    проявляется как глупость в глупом, но когда она понимается,
                    глупость оканчивается. Когда родственника не узнают, он
                    остается чужим, когда он узнается, пропадает понятие чужого.
                    /Йога Васиштха/
                  </p>
                </MyAccordion>
                <MyAccordion title="13 день">
                  <p className="text-sm">
                    В совершенном Уме нет разделений на учения, касты и философии.
                    Нерожденный, вечно свободный Ум – Брахман, не имеет ни начала,
                    ни середины, ни формы, ни бесформенности, он не постигает и не
                    объект постижения. В Высшей Реальности нет ни признаков, ни
                    ярлыков, как я могу сказать о ней то или это? Никакие
                    утверждения на нее не влияют, никакие отрицания не заставят ее
                    прекратиться, а потому – преодолей сомнения, обнаружив ее в
                    себе самоисследованием и созерцанием! /Освобождающий нектар
                    драгоценных наставлений/
                  </p>
                </MyAccordion>
                <MyAccordion title="14 день">
                  <p className="text-sm">
                    Атман существует повсюду, всегда и во всём. Он вечный и
                    низменный. Всё есть пустота и не пустота. Знай: Я – этот
                    Атман, не сомневайся в этом. /Авадхута-Гита/
                  </p>
                </MyAccordion>
                <MyAccordion title="15 день">
                  <p className="text-sm">
                    Если ты знаешь, что двойственность - это проявленная иллюзия,
                    ты знаешь абсолютного Брахмана. Если ты знаешь, что «это не
                    я», - понимается нереальность чувства эго. Отсюда возникает
                    непривязанность к нему. «Я воистину есть великий Брахман» -
                    когда понимается эта истина, индивидуальные проявления всего
                    сливаются в этом понимании. Когда понимается вся
                    несостоятельность понятий «я» и «ты», возникает понимание
                    истины и ты понимаешь, что все это, воистину, есть великий
                    Брахман. /Йога Васиштха/
                  </p>
                </MyAccordion>
                <MyAccordion title="16 день">
                  <p className="text-sm">
                    Если самоисследованием снова и снова проникаешь в свое «Я» –
                    увидишь его Пустоту, полную света. Если исследуешь этот свет,
                    поймешь: безупречное Сознание узнает себя прямо как совершенно
                    чистого Брахмана. Так же, как лев видит в реке свое отражение,
                    или словно царь, видя дурные сны, просыпается на своем троне,
                    вспомнив себя царем, о сын, узнав себя, рычи, танцуя в
                    пространстве!» /Освобождающий нектар драгоценных наставлений/
                  </p>
                </MyAccordion>
                <MyAccordion title="17 день">
                  <p className="text-sm">
                    Некоторые желают двойственности, другие желают
                    недвойственности, но они не достигают Истины, лишенной
                    двойственности и недвойственности. Она лишена цвета, белого
                    или иных цветов. Она лишена качеств, таких как звук или иных.
                    Как говорить о Ней, недостижимой умом и речью? Когда всё в
                    этом мире, включая тело и прочее, становится нереальным и
                    пустотным, подобно пространству, тогда познаётся Брахман, и не
                    будет никакой двойственности. /Авадхута-Гита/
                  </p>
                </MyAccordion>
                <MyAccordion title="18 день">
                  <p className="text-sm">
                    Что есть истина? «Я не имею никакого отношения к страданиям,
                    действиям, желаниям и непониманиям. Я нахожусь в спокойствии,
                    свободный от страданий. Я есть Брахман», – такова истина. «Я
                    свободен от всех недостатков, я есть все, я не ищу ничего и
                    ничего не покидаю, я есть Брахман», - такова истина. «Я есть
                    моя кровь, плоть, кость, тело, сознание, разум, я есть
                    Брахман», – такова истина. «Я есть основа, я есть
                    пространство, я есть солнце и все пространство, я есть все
                    здесь, я есть Брахман», – такова истина. «Я есть травинка, я
                    вся земля, я пень, я лес, я гора и океаны, я есть
                    недвойственный Брахман» – такова истина. «Я есть сознание, на
                    которое все нанизано и благодаря чему все занимаются тем чем
                    занимаются, я суть всех вещей», – такова истина. /Йога
                    Васиштха/
                  </p>
                </MyAccordion>
                <MyAccordion title="19 день">
                  <p className="text-sm">
                    «Уловленные в глубокий колодец шести философий, глупцы
                    придерживаются умственных учений о том, что Брахман находится
                    в теле, или что он создатель или разрушитель форм, или же о
                    том, что он не имеет формы, или что он – Пустота, или что он
                    есть все. Мудрые же – избегают любых, утешающих ум, учений и
                    понятий, просто прямо глядя в них, обнажая меч осознавания.
                    Так созерцая, пойми – твой Ум подобен небесному пространству,
                    у него нет ни верха, ни низа, ни центра, ни границ. Созерцать
                    всевышнюю Реальность – это пребывать, не отвлекаясь, в
                    присутствии, где нет ни края, ни центра, оставляя все,
                    отдаваясь ему! Затем, оставь оставление и себя, оставляющего!»
                    /Освобождающий нектар драгоценных наставлений/
                  </p>
                </MyAccordion>
                <MyAccordion title="20 день">
                  <p className="text-sm">
                    “Я” и Высшее “Я” являются нераздельными подобно единому
                    пространству. Как, в таком случае, может быть созерцающий и
                    созерцание? Что бы Я ни делал, что бы ни вкушал, какие бы
                    жертвоприношения ни совершал, и чего бы ни отдавал – ничто из
                    этого не принадлежит Мне. Я чистый, нерождённый и неизменный.
                    /Авадхута-Гита/
                  </p>
                </MyAccordion>
                <MyAccordion title="21 день">
                  <p className="text-sm">
                    Как одинаков вкус сахара, сделанного из сахарного тростника,
                    выращенного в разных местах, также и сознание, обитающее во
                    всех существах, – едино, и я являюсь этим сознанием. Я есть
                    эта сознательная энергия, которая больше всей вселенной и
                    меньше самого мелкого атома и потому невидимая. Я есть
                    сознание, существующее повсюду, как масло в молоке, и чья
                    истинная природа есть ощущение. /Йога Васиштха/
                  </p>
                </MyAccordion>
                <MyAccordion title="22 день">
                  <p className="text-sm">
                    Йогин сказал: «На пути Дхармы ищи благословения Гуру, затем
                    убедись: Брахман – это твой Ум в его основе. Он изначально
                    свободен от рождения и смерти. Решись один раз войти в него и
                    вечно пребывай в этом невымышленном, нерожденном присутствии.
                    На острове драгоценностей нет грязи. Если самосверкающая
                    чистота изначально свободна и безупречна, разве найдешь что-то
                    нечистое? Если все – его игра, как мысли и чувства могут
                    помешать ему? Тот, кто понял, никогда не утратит практику».
                    /Освобождающий нектар драгоценных наставлений/
                  </p>
                </MyAccordion>
                <MyAccordion title="23 день">
                  <p className="text-sm">
                    Только бесконечное сознание существует повсюду и всегда. То,
                    что кажется существующим, - только кажется. Когда иллюзорная
                    внешняя форма осознается как таковая, осознается и то, что
                    ЕСТЬ. Или осознай, что «я не существую и эти ощущения не мои»,
                    или знай, что «я есть все», и ты будешь свободен от сетей
                    кажущегося мира. Обе эти точки зрения хороши – прими ту,
                    которая тебе больше нравится. Ты освободишься от стремлений и
                    отвращений. /Йога Васиштха/
                  </p>
                </MyAccordion>
                <MyAccordion title="24 день">
                  <p className="text-sm">
                    Как все золотые украшения являются золотом, так Я есть чистое
                    сознание в этом теле. Я есть высшее Я, находящееся во всех
                    существах, внутри и вовне. Я есть это сознание, которое
                    отражает все ощущения, само не претерпевая никаких изменений,
                    и не затрагиваясь нечистотой. /Йога Васиштха/
                  </p>
                </MyAccordion>
                <MyAccordion title="25 день">
                  <p className="text-sm">
                    Отпусти ум, отсеки цепляния, прими Реальность в объятия
                    созерцания, подобного пространству. Устойчиво созерцай, не
                    созерцая, день и ночь практикуй без усилий, отбросив понятия о
                    практикующем, но без отвлечения, оставь вещи пребывать, как
                    они есть. Разве это не истинное Просветление?» /Освобождающий
                    нектар драгоценных наставлений/
                  </p>
                </MyAccordion>
                <MyAccordion title="26 день">
                  <p className="text-sm">
                    Четкое понимание и осознание очищает собственную сущность, и
                    она не будет снова загрязнена. Что это за четкое верное
                    понимание? Это понимание того, что этот мир – только отражение
                    чистого сознания и потому не является ни реальным, ни не
                    реальным. Рождение, смерть, рай, знание и невежество – все это
                    только отражение сознания. Я, ты, стороны света и вообще все
                    является сознанием – таково верное понимание. Когда есть
                    верное понимание, разум не возникает и не пропадает, а
                    достигает высшего спокойствия. Он не занимается хвалой или
                    осуждением, восторгом или депрессией, но постоянно спокоен и
                    находится в истине. /Йога Васиштха/
                  </p>
                </MyAccordion>
                <MyAccordion title="27 день">
                  <p className="text-sm">
                    Это сознание является истиной сущностью существования и
                    несуществования, и там находится все прекрасное и
                    божественное. Оно играет роли всех существ и оно является
                    источником всей нежности и спокойствия, оставаясь при этом
                    единым и свободным. Это есть жизнь во всех живых существах,
                    несозданный нектар, который никто не может украсть, вечно
                    существующая реальность. /Йога Васиштха/
                  </p>
                </MyAccordion>
                <MyAccordion title="28 день">
                  <p className="text-sm">
                    Йогин сказал: «Мудрость естественного присутствия превосходит
                    любые ограничения и присутствует во всех чувствах и объектах.
                    В практике следует опираться на Гуру. Гуру – есть сама
                    проявленная сущность Ума, которая никогда не проявляется
                    иначе. Когда корень Ума обнаружен как неизменный, не остается
                    другого Просветления, которое нужно искать еще где-то. Ты не
                    можешь стать ТЕМ во второй раз. Поняв это – будь свободен!»
                    /Освобождающий нектар драгоценных наставлений/
                  </p>
                </MyAccordion>
                <MyAccordion title="29 день">
                  <p className="text-sm">
                    Я не являюсь ни деятелем, ни наслаждающимся. Во Мне нет ни
                    прошлой, ни нынешней кармы. У меня нет тела или бестелесности,
                    как же Я могу говорить, что оно “Моё” или “не Моё”? У меня нет
                    страсти и прочих пороков. У меня нет тела, страданий и
                    прочего. Знай, Я – Атман, который един и обширен, подобно
                    пространству. /Авадхута-Гита/
                  </p>
                </MyAccordion>
                <MyAccordion title="30 день">
                  <p className="text-sm">
                    Я созерцаю это бесконечное осознание, которое присутствует в
                    пране, но которое не есть ни прана и ни что другое. Я созерцаю
                    это осознание, которое есть дыхание дыхания, жизнь жизни,
                    которое единственно ответственно за сохранение этого тела,
                    разум разума, интеллект интеллекта, реальность чувства эго. Я
                    приветствую это сознание в котором находится все, и откуда все
                    появляется, которое есть все и которое все во всем и
                    бесконечно, очищающее все и видение чего – высшая добродетель.
                    Я приветствую это осознание, которое позволяет функционировать
                    органам чувств, которое есть сущность внешнего и внутреннего,
                    единственная цель всех практик и причина всех причин. Я ищу
                    прибежища у этого высшего существа. /Йога Васиштха/
                  </p>
                </MyAccordion>
                <MyAccordion title="31 день">
                  <p className="text-sm">
                    Познай всю эту Вселенную, как не имеющую формы. Познай всю эту
                    Вселенную, как лишенную изменений. Познай всю эту Вселенную,
                    как чистое существование. Познай всю эту Вселенную, как единую
                    с Шивой. /Авадхута-Гита/
                  </p>
                </MyAccordion>
              </div>
            </div>
          </MyAccordion>

          {/* <MyAccordion id='DattaMeditation' title='Медитация' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-[36rem]">
                Выполняется краткая медитация на один из аспектов Бхагавана Даттатреи.
              </p>
              <h6>1008 имен Даттатреи</h6>
              <div>

                <MyAccordion title="Январь">
                  <div className='mt-5 flex flex-col gap-3 lg:gap-4'>
                    <p className="text-sm">
                      01.01.2025 ОМ ДИВЙА ДЖЙОТИР МАЙА НАМАХ ОМ Полному божественного
                      Света – поклонение!
                    </p>
                    <p className="text-sm">
                      02.01.2025 ОМ САТЙА ВИДЖ НАНА БХАС КАРАЙА НАМАХ ОМ Солнцу Знания
                      и Истины – поклонение!
                    </p>
                    <p className="text-sm">
                      03.01.2025 ОМ НИТЙА ЩУДДХАЙА НАМАХ ОМ Вечно чистому –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      04.01.2025 ОМ ПАРАЙА НАМАХ ОМ Высшему – поклонение!
                    </p>
                    <p className="text-sm">
                      05.01.2025 ОМ ПУРНАЙА НАМАХ ОМ Совершенному – поклонение!
                    </p>
                    <p className="text-sm">
                      06.01.2025 ОМ ПРАКАЩАЙА НАМАХ ОМ Пракаше – поклонение!
                    </p>
                    <p className="text-sm">
                      07.01.2025 ОМ ПРА КАТОД БХАВАЙА НАМАХ ОМ Являющему Свет –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      08.01.2025 ОМ ПРА МАДА ВИГАТАЙА НАМАХ ОМ Лишенному ошибок –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      09.01.2025 ОМ ПАРЕЩАЙА НАМАХ ОМ Высшему Владыке – поклонение!
                    </p>
                    <p className="text-sm">
                      10.01.2025 ОМ ПАРА ВИКРА МАЙА НАМАХ ОМ Высшему могуществу –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      11.01.2025 ОМ ЙОГИНЕ НАМАХ ОМ Йогину – поклонение!
                    </p>
                    <p className="text-sm">
                      12.01.2025 ОМ ЙОГАЙА НАМАХ ОМ Йоге – поклонение!
                    </p>
                    <p className="text-sm">
                      13.01.2025 ОМ ЙОГА ПАЙА НАМАХ ОМ Покровителю йоги – поклонение!
                    </p>
                    <p className="text-sm">
                      14.01.2025 ОМ ЙОГА БХЙАСА ПРАКАЩАНАЙА НАМАХ ОМ Являющему
                      практику йоги – поклонение!
                    </p>
                    <p className="text-sm">
                      15.01.2025 ОМ ЙОКТРЕ НАМАХ ОМ Соединенному йогой – поклонение!
                    </p>
                    <p className="text-sm">
                      16.01.2025 ОМ МОКТРЕ НАМАХ ОМ Освобождающему – поклонение!
                    </p>
                    <p className="text-sm">
                      17.01.2025 ОМ ВИДХА ТРЕ НАМАХ ОМ Творящему – поклонение!
                    </p>
                    <p className="text-sm">
                      18.01.2025 ОМ ТРА ТРЕ НАМАХ ОМ Спасающему – поклонение!
                    </p>
                    <p className="text-sm">
                      19.01.2025 ОМ ПА ТРЕ НАМАХ ОМ Защищающему – поклонение!
                    </p>
                    <p className="text-sm">
                      20.01.2025 ОМ НИРА ЙУДХАЙА НАМАХ ОМ Невооруженному – поклонение!
                    </p>
                    <p className="text-sm">
                      21.01.2025 ОМ НИТЙА МУКТАЙА НАМАХ ОМ Вечно Освобожденному –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      22.01.2025 ОМ НИТЙА ЙУКТАЙА НАМАХ ОМ Вечно впряженному в йогу –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      23.01.2025 ОМ САТЙАЙА НАМАХ ОМ Истине – поклонение!
                    </p>
                    <p className="text-sm">
                      24.01.2025 ОМ САТЙА ПАРА КАМАЙА НАМАХ ОМ Наделенному высшей
                      Истиной – поклонение!
                    </p>
                    <p className="text-sm">
                      25.01.2025 ОМ САТТВА ЩУДДХИ КАРАЙА НАМАХ ОМ Творящему очищение
                      бытия – поклонение!
                    </p>
                    <p className="text-sm">
                      26.01.2025 ОМ САТТВАЙА НАМАХ ОМ Саттве – поклонение!
                    </p>
                    <p className="text-sm">
                      27.01.2025 ОМ САТТВА БРТАН ГАТАЙЕ НАМАХ ОМ Содержащему в своем
                      теле саттву – поклонение!
                    </p>
                    <p className="text-sm">
                      28.01.2025 ОМ ЩРИ ДХАРАЙА НАМАХ ОМ Держащему Шри – поклонение!
                    </p>
                    <p className="text-sm">
                      29.01.2025 ОМ ЩРИ ВАПУЩЕ НАМАХ ОМ Воплощению Шри – поклонение!
                    </p>
                    <p className="text-sm">
                      30.01.2025 ОМ ШРИ МАТЕ НАМАХ ОМ Благословенному – поклонение!
                    </p>
                    <p className="text-sm">
                      31.01.2025 ОМ ШРИ НИВА САЙА НАМАХ ОМ Обители Шри – поклонение!
                    </p>
                  </div>
                </MyAccordion>

                <MyAccordion title="Февраль">
                  <div className='mt-5 flex flex-col gap-3 lg:gap-4'>
                    <p className="text-sm">
                      01.02.2025 ОМ АМАРА ЧИНТАЙА НАМАХ ОМ Созерцаемому бессмертными –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      02.02.2025 ОМ ШРИ НИДХАЙЕ НАМАХ ОМ Океану Шри – поклонение!
                    </p>
                    <p className="text-sm">
                      03.02.2025 ОМ ШРИПАТАЙЕ НАМАХ ОМ Владыке Шри – поклонение!
                    </p>
                    <p className="text-sm">
                      04.02.2025 ОМ ШРЕ ШТХАЙА НАМАХ ОМ Лучшему – поклонение!
                    </p>
                    <p className="text-sm">
                      05.02.2025 ОМ ШРЕЙА СКАЙА НАМАХ ОМ Благословенному – поклонение!
                    </p>
                    <p className="text-sm">
                      06.02.2025 ОМ ЧАРАМ АЩРАЙАЙА НАМАХ ОМ Вместилищу благословений –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      07.02.2025 ОМ ТЙАГА РЙАСАМ ПАННАЙА НАМАХ ОМ Являющему
                      благородное отречение – поклонение!
                    </p>
                    <p className="text-sm">
                      08.02.2025 ОМ ТЙАГИНЕ НАМАХ ОМ Отреченному – поклонение!
                    </p>
                    <p className="text-sm">
                      09.02.2025 ОМ ТЙАГ АТМАНЕ НАМАХ ОМ Душе отречения – поклонение!
                    </p>
                    <p className="text-sm">
                      10.02.2025 ОМ ТЙАГ АВИ ГРАХАЙА НАМАХ ОМ Воплощенному отречению –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      11.02.2025 ОМ ТЙАГА ЛАКШАНА СИДДХ АТМАНЕ НАМАХ ОМ Душе
                      совершенства, отмеченному отречением – поклонение!
                    </p>
                    <p className="text-sm">
                      12.02.2025 ОМ ТЙАГА ДЖНАЙА НАМАХ ОМ Знающему отречение –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      13.02.2025 ОМ ТЙАГА КАРАНАЙА НАМАХ ОМ Причине отречения –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      14.02.2025 ОМ БХАГАЙА НАМАХ ОМ Счастью – поклонение!
                    </p>
                    <p className="text-sm">
                      15.02.2025 ОМ БХОКТРЕ НАМАХ ОМ Наслаждающемуся – поклонение!
                    </p>
                    <p className="text-sm">
                      16.02.2025 ОМ БХОГЙАЙА НАМАХ ОМ Объекту наслаждения –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      17.02.2025 ОМ БХОГА САД ХАНА КАРАНАЙА НАМАХ ОМ Причине обретения
                      насаждения – поклонение!
                    </p>
                    <p className="text-sm">
                      18.02.2025 ОМ БХОГИНЕ НАМАХ ОМ Наслаждающемуся – поклонение!
                    </p>
                    <p className="text-sm">
                      19.02.2025 ОМ БХОГ АРТА САМПАН НАЙА НАМАХ ОМ Являющему предмет
                      наслаждения – поклонение!
                    </p>
                    <p className="text-sm">
                      20.02.2025 ОМ БХОГА ДЖНАНА ПРАКАЩА НАЙА НАМАХ ОМ Являющему
                      знание наслаждения – поконение!
                    </p>
                    <p className="text-sm">
                      21.02.2025 ОМ КЕВА ЛАЙА НАМАХ ОМ Единственному – поклонение!
                    </p>
                    <p className="text-sm">
                      22.02.2025 ОМ КЕЩА ВАЙА НАМАХ ОМ Кешаве – поклонение!
                    </p>
                    <p className="text-sm">
                      23.02.2025 ОМ КРШНАЙА НАМАХ ОМ Кришне – поклонение!
                    </p>
                    <p className="text-sm">
                      24.02.2025 ОМ КАМВА САСЕ НАМАХ ОМ Являющемуся в водах –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      25.02.2025 ОМ КАМАЛА ЛАЙАЙА НАМАХ ОМ Обители Камалы (Лакшми) –
                      поклонение!
                    </p>
                    <p className="text-sm">
                      26.02.2025 ОМ КАМАЛА САНА ПУДЖЙАЙА НАМАХ ОМ Почитаемому
                      восседающим в лотосе (Брахмой) – поклонение!
                    </p>
                    <p className="text-sm">
                      27.02.2025 ОМ ХАРАЙЕ НАМАХ ОМ Уносящему – поклонение!
                    </p>
                    <p className="text-sm">
                      28.02.2025 ОМ АДЖНАНА КХАНДАЙА НАМАХ ОМ Уничтожителю незнания –
                      поклонение!
                    </p>
                  </div>
                </MyAccordion>

                <MyAccordion title="Март">
                  <div className='mt-5 flex flex-col gap-3 lg:gap-4'>
                    <p className="text-sm">01.03.2025
                      ОМ МАХ АТМАНЕ НАМАХ ОМ
                      Великому Духу – поклонение!</p>
                    <p className="text-sm">02.03.2025
                      ОМ МАХ АДАДАЙЕ НАМАХ ОМ
                      Великому Началу – поклонение!</p>
                    <p className="text-sm">03.03.2025
                      ОМ МАХЕЩ ОТТАМА ВАНДИТАЙА НАМАХ ОМ
                      Почитаемому высшему Махеше – поклонение!</p>
                    <p className="text-sm">04.03.2025
                      ОМ МАНО ВРДДХИ ВИХИН АТМАНЕ НАМАХ ОМ
                      Сущности лишенной разрастания ума – поклонение!</p>
                    <p className="text-sm">05.03.2025
                      ОМ МАН АТМАНЕ НАМАХ ОМ
                      Сущности Ума – поклонение!</p>
                    <p className="text-sm">06.03.2025
                      ОМ МАНА ВАДХИ ПАЙА НАМАХ ОМ
                      Владыке людей – поклонение!</p>
                    <p className="text-sm">07.03.2025
                      ОМ БХУВА НЕЩАЙА НАМАХ ОМ
                      Владыке мира – поклонение!</p>
                    <p className="text-sm">08.03.2025
                      ОМ ВИБХУ ТАЙЕ НАМАХ ОМ
                      Великому – поклонение!</p>
                    <p className="text-sm">09.03.2025
                      ОМ ДХРТАЙЕ НАМАХ ОМ
                      Твердому – поклонение!</p>
                    <p className="text-sm">10.03.2025
                      ОМ МЕД ХАЙА НАМАХ ОМ
                      Мудрости – поклонение!</p>
                    <p className="text-sm">11.03.2025
                      ОМ СМРТАЙЕ НАМАХ ОМ
                      Памяти – поклонение!</p>
                    <p className="text-sm">12.03.2025
                      ОМ ДАЙАЙЕ НАМАХ ОМ
                      Состраданию – поклонение!</p>
                    <p className="text-sm">13.03.2025
                      ОМ ДУХ КХА ДАВА НАЛАЙА НАМАХ ОМ
                      Лесному пожару для страдания – поклонение!</p>
                    <p className="text-sm">14.03.2025
                      ОМ БУДДХАЙА НАМАХ ОМ
                      Разуму – поклонение!</p>
                    <p className="text-sm">15.03.2025
                      ОМ ПРА БУДДХАЙА НАМАХ ОМ
                      Пробужденному – поклонение!</p>
                    <p className="text-sm">16.03.2025
                      ОМ ПАРА МЕЩ ВАРАЙА НАМАХ ОМ
                      Высшему Владыке – поклонение!</p>
                    <p className="text-sm">17.03.2025
                      ОМ КАМА ХАЙЕ НАМАХ ОМ
                      Устранителю желания – поклонение!</p>
                    <p className="text-sm">18.03.2025
                      ОМ КРОДХА ХАЙЕ НАМАХ ОМ
                      Устранителю гнева – поклонение!</p>
                    <p className="text-sm">19.03.2025
                      ОМ ДАМ БХА ДАР ПАМАДА ПАХАЙА НАМАХ ОМ
                      Устранителю немоты, гордости и безумия – поклонение!</p>
                    <p className="text-sm">20.03.2025
                      ОМ АДЖНА НАТИ МИРА РАЙЕ НАМАХ ОМ
                      Врагу темноты незнания – поклонение!</p>
                    <p className="text-sm">21.03.2025
                      ОМ БХАВА РАЙЕ НАМАХ ОМ
                      Врагу мирского бытия – поклонение!</p>
                    <p className="text-sm">22.03.2025
                      ОМ БХУВА НЕЩВА РАЙА НАМАХ ОМ
                      Владыке миров – поклонение!</p>
                    <p className="text-sm">23.03.2025
                      ОМ РУПА КРТАЙЕ НАМАХ ОМ
                      Творцу форм – поклонение!</p>
                    <p className="text-sm">24.03.2025
                      ОМ РУПА БРТЕ НАМАХ ОМ
                      Поддерживающему формы – поклонение!</p>
                    <p className="text-sm">25.03.2025
                      ОМ РУПИНЕ НАМАХ ОМ
                      Прекрасному – поклонение!</p>
                    <p className="text-sm">26.03.2025
                      ОМ РУПА ГНАЙА НАМАХ ОМ
                      Врагу мирского бытия – поклонение!</p>
                    <p className="text-sm">27.03.2025
                      ОМ РУПА КАРА НАЙА НАМАХ ОМ
                      Причине форм – поклонение!</p>
                    <p className="text-sm">28.03.2025
                      ОМ РУПА ДЖНАЙА НАМАХ ОМ
                      Знающему формы – поклонение!</p>
                    <p className="text-sm">29.03.2025
                      ОМ РУПА САКШИНЕ НАМАХ ОМ
                      Свидетелю форм – поклонение!</p>
                    <p className="text-sm">30.03.2025
                      ОМ НАМА РУПАЙА НАМАХ ОМ
                      Имени и форме – поклонение!</p>
                    <p className="text-sm">31.03.2025
                      ОМ ГУНА НТАКАЙА НАМАХ ОМ
                      Прекращающему качества – поклонение!</p>
                  </div>
                </MyAccordion>

                <MyAccordion title="Апрель">
                  <div className='mt-5 flex flex-col gap-3 lg:gap-4'>
                    <p className="text-sm">01.04.2025
                      ОМ АПРА МЕЙАЙА НАМАХ ОМ
                      Непостижимому – поклонение!</p>
                    <p className="text-sm">02.04.2025
                      ОМ ПРАМЕЙАЙА НАМАХ ОМ
                      Постигаемому – поклонение!</p>
                    <p className="text-sm">03.04.2025
                      ОМ ПРАМАНАЙА НАМАХ ОМ
                      Средству постижения – поклонение!</p>
                    <p className="text-sm">04.04.2025
                      ОМ ПРАНАВА ЩРАЙАЙА НАМАХ ОМ
                      Вместилищу Пранавы – поклонение!</p>
                    <p className="text-sm">05.04.2025
                      ОМ ПРАМАНА РАХИТАЙА НАМАХ ОМ
                      Наделённому средством постижения – поклонение!</p>
                    <p className="text-sm">06.04.2025
                      ОМ АЧИНТЙАЙА НАМАХ ОМ
                      Непостижимому – поклонение!</p>
                    <p className="text-sm">07.04.2025
                      ОМ ЧЕТАНА ВИГАТАЙА НАМАХ ОМ
                      Недостижимому умом – поклонение!</p>
                    <p className="text-sm">08.04.2025
                      ОМ АДЖАРАЙА НАМАХ ОМ
                      Нестареющему – поклонение!</p>
                    <p className="text-sm">09.04.2025
                      ОМ АКШАРАЙА НАМАХ ОМ
                      Негибнущему – поклонение!</p>
                    <p className="text-sm">10.04.2025
                      ОМ АКШАРА МУКТАЙА НАМАХ ОМ
                      Свободному от слов – поклонение!</p>
                    <p className="text-sm">11.04.2025
                      ОМ ВИДЖВА РАЙА НАМАХ ОМ
                      Нестрадающему – поклонение!</p>
                    <p className="text-sm">12.04.2025
                      ОМ ДЖВАРА НАЩАНАЙА НАМАХ ОМ
                      Уничтожающему страдания – поклонение!</p>
                    <p className="text-sm">13.04.2025
                      ОМ ВИЩИШТАЙА НАМАХ ОМ
                      Особому – поклонение!</p>
                    <p className="text-sm">14.04.2025
                      ОМ ВИТТА ШАСТРИНЕ НАМАХ ОМ
                      Богатому шастрами – поклонение!</p>
                    <p className="text-sm">15.04.2025
                      ОМ ДУШТАЙА НАМАХ ОМ
                      Порицаемому – поклонение!</p>
                    <p className="text-sm">16.04.2025
                      ОМ ДУШТАН ТАВАР ДЖИТАЙА НАМАХ ОМ
                      Лишенному изнутри порицаний – поклонение!</p>
                    <p className="text-sm">17.04.2025
                      ОМ ГУНЕ ЩАЙА НАМАХ ОМ
                      Владыке гун – поклонение!</p>
                    <p className="text-sm">18.04.2025
                      ОМ ГУНА КАЙАЙА НАМАХ ОМ
                      Тому, чье тело – гуны – поклонение!</p>
                    <p className="text-sm">19.04.2025
                      ОМ ГУН АТМАНЕ НАМАХ ОМ
                      Сущности гун – поклонение!</p>
                    <p className="text-sm">20.04.2025
                      ОМ ГУН БХАВАНАЙА НАМАХ ОМ
                      Бытию гун – поклонение!</p>
                    <p className="text-sm">21.04.2025
                      ОМ АНАНТА ГУНА САМПАННАЙА НАМАХ ОМ
                      Проявляющего бесконечные качества – поклонение!</p>
                    <p className="text-sm">22.04.2025
                      ОМ ГУНА ГАРБХАЙА НАМАХ ОМ
                      Утробе гун – поклонение!</p>
                    <p className="text-sm">23.04.2025
                      ОМ ГУНА ДХИПАЙА НАМАХ ОМ
                      Владыке гун – поклонение!</p>
                    <p className="text-sm">24.04.2025
                      ОМ ГУНЕЩАЙА НАМАХ ОМ
                      Владыке качеств – поклонение!</p>
                    <p className="text-sm">25.04.2025
                      ОМ ГУНА НАТХАЙА НАМАХ ОМ
                      Господу качеств – поклонение!</p>
                    <p className="text-sm">26.04.2025
                      ОМ ГУН АТМАНЕ НАМАХ ОМ
                      Душе качеств – поклонение!</p>
                    <p className="text-sm">27.04.2025
                      ОМ ГУН БХАВАНАЙА НАМАХ ОМ
                      Бытию качеств – поклонение!</p>
                    <p className="text-sm">28.04.2025
                      ОМ ГУНА БАНДХАВЕ НАМАХ ОМ
                      Другу качеств – поклонение!</p>
                    <p className="text-sm">29.04.2025
                      ОМ ВИВЕК АТМАНЕ НАМАХ ОМ
                      Сущности различения – поклонение!</p>
                    <p className="text-sm">30.04.2025
                      ОМ ГУНА ЙУКТАЙА НАМАХ ОМ
                      Соединенного с гунами – поклонение!</p>
                  </div>
                </MyAccordion>

                <MyAccordion title="Май">
                  <div className='mt-5 flex flex-col gap-3 lg:gap-4'>
                    <p className="text-sm">
                      01.05.2025
                      ОМ ПАРА КРАМИНЕ НАМАХ ОМ
                      Наделенному высшем могуществом – поклонение!
                    </p>
                    <p className="text-sm">
                      02.05.2025
                      ОМ АТАРКЙАЙА НАМАХ ОМ
                      Недоказуемому – поклонение!
                    </p>
                    <p className="text-sm">
                      03.05.2025
                      ОМ АКРА ТАВЕ НАМАХ ОМ
                      Лишенному желаний – поклонение!
                    </p>
                    <p className="text-sm">
                      04.05.2025
                      ОМ АГНАЙЕ НАМАХ ОМ
                      Огню – поклонение!
                    </p>
                    <p className="text-sm">
                      05.05.2025
                      ОМ КРТА ДЖНАЙА НАМАХ ОМ
                      Знающему деяния – поклонение!
                    </p>
                    <p className="text-sm">
                      06.05.2025
                      ОМ САПХАЛА ЩРАЙАЙА НАМАХ ОМ
                      Вместилищу плодов жертвоприношения – поклонение!
                    </p>
                    <p className="text-sm">
                      07.05.2025
                      ОМ ЙАДЖНАЙА НАМАХ ОМ
                      Жертвоприношению – поклонение!
                    </p>
                    <p className="text-sm">
                      08.05.2025
                      ОМ ЙАДЖНА ПХАЛА ДАТРЕ НАМАХ ОМ
                      Дающему плоды жертвоприношения – поклонение!
                    </p>
                    <p className="text-sm">
                      09.05.2025
                      ОМ ЙАДЖНА АТМАНЕ НАМАХ ОМ
                      Сущности жертвоприношения – поклонение!
                    </p>
                    <p className="text-sm">
                      10.05.2025
                      ОМ ИДЙАЙА НАМАХ ОМ
                      Призываемому подношению – поклонение!
                    </p>
                    <p className="text-sm">
                      11.05.2025
                      ОМ АМАРОТ ТАМАЙА НАМАХ ОМ
                      Лучшему из бессмертных – поклонение!
                    </p>
                    <p className="text-sm">
                      12.05.2025
                      ОМ ХИРАНЬЯ ГАРБХАЙА НАМАХ ОМ
                      Жертвоприношению – поклонение!
                    </p>
                    <p className="text-sm">
                      13.05.2025
                      ОМ ШРИ ГАРБХАЙА НАМАХ ОМ
                      Утробе Шри – поклонение!
                    </p>
                    <p className="text-sm">
                      14.05.2025
                      ОМ СВА ГАРБХАЙА НАМАХ ОМ
                      Саморожденному – поклонение!
                    </p>
                    <p className="text-sm">
                      15.05.2025
                      ОМ КУНА ПЕШ ВАРАЙА НАМАХ ОМ
                      Владыке трупов – поклонение!
                    </p>
                    <p className="text-sm">
                      16.05.2025
                      ОМ МАЙО ГАРБХАЙА НАМАХ ОМ
                      Утробе майи – поклонение!
                    </p>
                    <p className="text-sm">
                      17.05.2025
                      ОМ ЛОКА ГАРБХАЙА НАМАХ ОМ
                      Утробе мира – поклонение!
                    </p>
                    <p className="text-sm">
                      18.05.2025
                      ОМ СВАЙАМ БХУВЕ НАМАХ ОМ
                      Самосущему – поклонение!
                    </p>
                    <p className="text-sm">
                      19.05.2025
                      ОМ БХУВ АНАТА КАЙА НАМАХ ОМ
                      Разрушителю миров – поклонение!
                    </p>
                    <p className="text-sm">
                      20.05.2025
                      ОМ НИШ ПАПАЙА НАМАХ ОМ
                      Безгрешному – поклонение!
                    </p>
                    <p className="text-sm">
                      21.05.2025
                      ОМ НИБИДАЙА НАМАХ ОМ
                      Непривязанному – поклонение!
                    </p>
                    <p className="text-sm">
                      22.05.2025
                      ОМ НАНДИНЕ НАМАХ ОМ
                      Радующемуся – поклонение!
                    </p>
                    <p className="text-sm">
                      23.05.2025
                      ОМ БОДХИНЕ НАМАХ ОМ
                      Мудрому – поклонение!
                    </p>
                    <p className="text-sm">
                      24.05.2025
                      ОМ БОДХА САМАЩРАЙАЙА НАМАХ ОМ
                      Вместилищу осознаности – поклонение!
                    </p>
                    <p className="text-sm">
                      25.05.2025
                      ОМ БОДХ АТМАНЕ НАМАХ ОМ
                      Сущности Сознания – поклонение!
                    </p>
                    <p className="text-sm">
                      26.05.2025
                      ОМ БОДХ АН АТМАНЕ НАМАХ ОМ
                      Душе осознанности – поклонение!
                    </p>
                    <p className="text-sm">
                      27.05.2025
                      ОМ БХЕДА ВАЙТАН ДАКХАН ДАНАЙА НАМАХ ОМ
                      Разрушающему двойственное воззрение – поклонение!
                    </p>
                    <p className="text-sm">
                      28.05.2025
                      ОМ СВАБХА ВЙАЙА НАМАХ ОМ
                      Самосознающему – поклонение!
                    </p>
                    <p className="text-sm">
                      29.05.2025
                      ОМ БХАВА НИР МУКТАЙА НАМАХ ОМ
                      Свободному от эмоций – поклонение!
                    </p>
                    <p className="text-sm">
                      30.05.2025
                      ОМ ВЙАКТАЙА НАМАХ ОМ
                      Явленному разума – поклонение!
                    </p>
                    <p className="text-sm">
                      31.05.2025
                      ОМ АВЙАКТ САМАЩ РАЙАЙА НАМАХ ОМ
                      Сокрытому в Непроявленном – поклонение!
                    </p>
                  </div>
                </MyAccordion>

                <MyAccordion title="Июнь">
                  <div className='mt-5 flex flex-col gap-3 lg:gap-4'>
                    <p className="text-sm">
                      01.06.2025
                      ОМ НИТЙА ТРИП ТАЙА НАМАХ ОМ
                      Вечно удовлетворенному – поклонение!
                    </p>
                    <p className="text-sm">
                      02.06.2025
                      ОМ НИР АБХАСАЙА НАМАХ ОМ
                      Неявленному – поклонение!
                    </p>
                    <p className="text-sm">
                      03.06.2025
                      ОМ НИР ВАНАЙА НАМАХ ОМ
                      Нирване – поклонение!
                    </p>
                    <p className="text-sm">
                      04.06.2025
                      ОМ ШАРАНЕ НАМАХ ОМ
                      Прибежищу – поклонение!
                    </p>
                    <p className="text-sm">
                      05.06.2025
                      ОМ СУХРДЕ НАМАХ ОМ
                      Другу – поклонение!
                    </p>
                    <p className="text-sm">
                      06.06.2025
                      ОМ ГУХ ЙЕЩАЙА НАМАХ ОМ
                      Владыке тайны – поклонение!
                    </p>
                    <p className="text-sm">
                      07.06.2025
                      ОМ ГУНА ГАМБ ХИРАЙА НАМАХ ОМ
                      ОМ Бездне качеств – поклонение!
                    </p>
                    <p className="text-sm">
                      08.06.2025
                      ОМ ГУНА ДОША НИВАРА НАЙА НАМАХ ОМ
                      Устраняющий пороки качеств – поклонение!
                    </p>
                    <p className="text-sm">
                      09.06.2025
                      ОМ ГУНА САНГА ВИХИ НАЙА НАМАХ ОМ
                      Лишенному совокупности качеств – поклонение!
                    </p>
                    <p className="text-sm">
                      10.06.2025
                      ОМ ЙОГА РЕРДАР ПАНА ШАНАЙА НАМАХ ОМ
                      Уничтожающему гордость врагов йоги – поклонение!
                    </p>
                    <p className="text-sm">
                      11.06.2025
                      ОМ АНАНДАЙА НАМАХ ОМ
                      Блаженству – поклонение!
                    </p>
                    <p className="text-sm">
                      12.06.2025
                      ОМ ПАРАМ АНАНДАЙА НАМАХ ОМ
                      Высшему блаженству – поклонение!
                    </p>
                    <p className="text-sm">
                      13.06.2025
                      ОМ СВАНАНДА СУКХА ВАРДХА НАЙА НАМАХ ОМ
                      Увеличивающему блаженство собственной Самости – поклонение!
                    </p>
                    <p className="text-sm">
                      14.06.2025
                      ОМ САТЙ АНАНДАЙА НАМАХ ОМ
                      Истине и блаженству – поклонение!
                    </p>
                    <p className="text-sm">
                      15.06.2025
                      ОМ ЧИД АНАНДАЙА НАМАХ ОМ
                      Сознанию и блаженству – поклонение!
                    </p>
                    <p className="text-sm">
                      16.06.2025
                      ОМ САРВ АНАНДАЙА ПАРАЙА НАЙА НАМАХ ОМ
                      Предающемуся всему блаженству – поклонение!
                    </p>
                    <p className="text-sm">
                      17.06.2025
                      ОМ САД РУПАЙА НАМАХ ОМ
                      Форме Истины – поклонение!
                    </p>
                    <p className="text-sm">
                      18.06.2025
                      ОМ САХА ДЖАЙА НАМАХ ОМ
                      Естественному – поклонение!
                    </p>
                    <p className="text-sm">
                      19.06.2025
                      ОМ САТЙАЙА НАМАХ ОМ
                      Истине – поклонение
                    </p>
                    <p className="text-sm">
                      20.06.2025
                      ОМ СВАНАНДАЙА НАМАХ ОМ
                      Блаженству Самости – поклонение!
                    </p>
                    <p className="text-sm">
                      21.06.2025
                      ОМ СУМАНА ХАРАЙА НАМАХ ОМ
                      Прекраснейшему – поклонение!
                    </p>
                    <p className="text-sm">
                      22.06.2025
                      ОМ САРВАЙА НАМАХ ОМ
                      Всему – поклонение!
                    </p>
                    <p className="text-sm">
                      23.06.2025
                      ОМ САРВАН ТАРАЙА НАМАХ ОМ
                      Пребывающему внутри всего – поклонение!
                    </p>
                    <p className="text-sm">
                      24.06.2025
                      ОМ ПУРВАТ ПУРВАН ТАРАЙА НАМАХ ОМ
                      Бывшему прежде бывшего – поклонение!
                    </p>
                    <p className="text-sm">
                      25.06.2025
                      ОМ СВА МАЙАЙА НАМАХ ОМ
                      Самотождественному – поклонение!
                    </p>
                    <p className="text-sm">
                      26.06.2025
                      ОМ СВА ПАРАЙА НАМАХ ОМ
                      Превосходящему Самого Себя – поклонение!
                    </p>
                    <p className="text-sm">
                      27.06.2025
                      ОМ СВАДАЙЕ НАМАХ ОМ
                      Источнику Самого Себя – поклонение!
                    </p>
                    <p className="text-sm">
                      28.06.2025
                      ОМ СВАМ БРАХМАНЕ НАМАХ ОМ
                      Самому Брахману – поклонение!
                    </p>
                    <p className="text-sm">
                      29.06.2025
                      ОМ СВА ТАНАВЕ НАМАХ ОМ
                      Тождественному своему телу – поклонение!
                    </p>
                    <p className="text-sm">
                      30.06.2025
                      ОМ СВАГАЙА НАМАХ ОМ
                      Пребывающему в Себе – поклонение!
                    </p>
                  </div>
                </MyAccordion>

                <MyAccordion title="Июль">
                  <div className='mt-5 flex flex-col gap-3 lg:gap-4'>
                    <p className="text-sm">
                      01.07.2025
                      ОМ СВА ВАСАСЕ НАМАХ ОМ
                      Обитающему в Себе – поклонение!
                    </p>
                    <p className="text-sm">
                      02.07.2025
                      ОМ СВА МИНАЙА НАМАХ ОМ
                      Владеющему Собой – поклонение!
                    </p>
                    <p className="text-sm">
                      03.07.2025
                      ОМ СВА НИДХАЙЕ НАМАХ ОМ
                      Наполненному Собой – поклонение!
                    </p>
                    <p className="text-sm">
                      04.07.2025
                      ОМ СВА ПАРАЩ РАЙАЙА НАМАХ ОМ
                      Вместилищу Себя Самого – поклонение!
                    </p>
                    <p className="text-sm">
                      05.07.2025
                      ОМ АНАНТАЙА НАМАХ ОМ
                      Бесконечному – поклонение!
                    </p>
                    <p className="text-sm">
                      06.07.2025
                      ОМ АДИ РУПАЙА НАМАХ ОМ
                      Изначальной форме – поклонение!
                    </p>
                    <p className="text-sm">
                      07.07.2025
                      ОМ СУРЙА МАНДАЛА МАДХЙА ГАЙА НАМАХ ОМ
                      Пребывающему в середине солнечной мандалы – поклонение!
                    </p>
                    <p className="text-sm">
                      08.07.2025
                      ОМ АМО ГХАЙА НАМАХ ОМ
                      Безупречному – поклонение!
                    </p>
                    <p className="text-sm">
                      09.07.2025
                      ОМ ПАРАМА МОГХАЙА НАМАХ ОМ
                      Высшему Безупречному – поклонение!
                    </p>
                    <p className="text-sm">
                      10.07.2025
                      ОМ ПАРО КШАЙА НАМАХ ОМ
                      Таинственному – поклонение!
                    </p>
                    <p className="text-sm">
                      11.07.2025
                      ОМ ВАРАДАЙА НАМАХ ОМ
                      Дающему благо – поклонение!
                    </p>
                    <p className="text-sm">
                      12.07.2025
                      ОМ КАВАЙЕ НАМАХ ОМ
                      Поэту – поклонение!
                    </p>
                    <p className="text-sm">
                      13.07.2025
                      ОМ ВИЩВА ЧАКША СЕ НАМАХ ОМ
                      Вселенскому оку – поклонение!
                    </p>
                    <p className="text-sm">
                      14.07.2025
                      ОМ ВИЩВА САКШИНЕ НАМАХ ОМ
                      Свидетелю вселенной – поклонение!
                    </p>
                    <p className="text-sm">
                      15.07.2025
                      ОМ ВИЩВА БАХАВЕ НАМАХ ОМ
                      Руке вселенной – поклонение!
                    </p>
                    <p className="text-sm">
                      16.07.2025
                      ОМ ДХАНЕ ЩВАРАЙА НАМАХ ОМ
                      Владыке богатства – поклонение!
                    </p>
                    <p className="text-sm">
                      17.07.2025
                      ОМ ДХАНАН ДЖАЙАЙА НАМАХ ОМ
                      Завоевателю богатств – поклонение!
                    </p>
                    <p className="text-sm">
                      18.07.2025
                      ОМ МАХА ТЕДЖАСЕ НАМАХ ОМ
                      Великому Свету – поклонение!
                    </p>
                    <p className="text-sm">
                      19.07.2025
                      ОМ ТЕДЖИ19Ш.0Н7А.2Й0А25НАМАХ ОМ
                      Пребывающему в Свете – поклонение!
                    </p>
                    <p className="text-sm">
                      20.07.2025
                      ОМ ТАЙДЖА САЙА НАМАХ ОМ
                      Светоносному – поклонение!
                    </p>
                    <p className="text-sm">
                      21.07.2025
                      ОМ СУКХИНЕ НАМАХ ОМ
                      Счастливому – поклонение!
                    </p>
                    <p className="text-sm">
                      22.07.2025
                      ОМ ДЖЙОТИШЕ НАМАХ ОМ
                      Сияющему – поклонение!
                    </p>
                    <p className="text-sm">
                      23.07.2025
                      ОМ ДЖЙОТИР МАЙАЙА НАМАХ ОМ
                      Наполненному Светом – поклонение!
                    </p>
                    <p className="text-sm">
                      24.07.2025
                      ОМ ДЖЕТРЕ НАМАХ ОМ
                      Победному – поклонение!
                    </p>
                    <p className="text-sm">
                      25.07.2025
                      ОМ ДЖЙОТИШАМ ДЖЙОИР АТМАКАЙА НАМАХ ОМ
                      Сияющей сущности Света – поклонение!
                    </p>
                    <p className="text-sm">
                      26.07.2025
                      ОМ ДЖЙОТИШАМ АПИ ДЖЙОТИЩЕ НАМАХ ОМ
                      Свету Светочей – поклонение!
                    </p>
                    <p className="text-sm">
                      27.07.2025
                      ОМ ДЖАНА КАЙА НАМАХ ОМ
                      Отцу – поклонение!
                    </p>
                    <p className="text-sm">
                      28.07.2025
                      ОМ ДЖАНА МОХА НАЙА НАМАХ ОМ
                      Очаровывающему людей – поклонение!
                    </p>
                    <p className="text-sm">
                      29.07.2025
                      ОМ ДЖИТЕН ДРИЙАЙА НАМАХ ОМ
                      Победителю чувств – поклонение!
                    </p>
                    <p className="text-sm">
                      30.07.2025
                      ОМ ДЖИТ АКРО ДХАЙА НАМАХ ОМ
                      Победителю гнева – поклонение!
                    </p>
                    <p className="text-sm">
                      31.07.2025
                      ОМ ДЖИТ АТМАНЕ НАМАХ ОМ
                      Победителю Себя – поклонение!
                    </p>
                  </div>
                </MyAccordion>

                <MyAccordion title="Август">
                  <div className='mt-5 flex flex-col gap-3 lg:gap-4'>
                    <p className="text-sm">
                      01.08.2025
                      ОМ ДЖИТ АМАНАСАЙА НАМАХ ОМ
                      Победителю ума – поклонение!
                    </p>
                    <p className="text-sm">
                      02.08.2025
                      ОМ ДЖИТ АСАН ГАЙА НАМАХ ОМ
                      Победившему привязанность – поклонение!
                    </p>
                    <p className="text-sm">
                      03.08.2025
                      ОМ ДЖИТ АПРА НАЙА НАМАХ ОМ
                      Победившему дыхание – поклонение!
                    </p>
                    <p className="text-sm">
                      04.08.2025
                      ОМ ДЖИТ АСАМ САРАЙА НАМАХ ОМ
                      Победившему самсару – поклонение!
                    </p>
                    <p className="text-sm">
                      05.08.2025
                      ОМ НИ ВАСАНАЙА НАМАХ ОМ
                      Не имеющему васан – поклонение!
                    </p>
                    <p className="text-sm">
                      06.08.2025
                      ОМ НИР АЛАМБАЙА НАМАХ ОМ
                      Безопорному – поклонение!
                    </p>
                    <p className="text-sm">
                      07.08.2025
                      ОМ НИР ЙОГА КЩЕМА ВАР ДЖИТАЙА НАМАХ ОМ
                      Лишенного предвзятости – поклонение!
                    </p>
                    <p className="text-sm">
                      08.08.2025
                      ОМ НИР ИХАЙА НАМАХ ОМ
                      Бесстрастному – поклонение!
                    </p>
                    <p className="text-sm">
                      09.08.2025
                      ОМ НИР АХАМ КАРАЙА НАМАХ ОМ
                      Не имеющему эго – поклонение!
                    </p>
                    <p className="text-sm">
                      10.08.2025
                      ОМ НИР АЩИР НИ РУПА ДХИКАЙА НАМАХ ОМ
                      Неимеющему желаний и ограничений – поклонение!
                    </p>
                    <p className="text-sm">
                      11.08.2025
                      ОМ НИТЙА БОДХЙАЙА НАМАХ ОМ
                      Вечному Сознанию – поклонение!
                    </p>
                    <p className="text-sm">
                      12.08.2025
                      ОМ ВИВИКТ АТМАНЕ НАМАХ ОМ
                      Сущности уединения – поклонение!
                    </p>
                    <p className="text-sm">
                      13.08.2025
                      ОМ ВИЩУДДХ ОТТАМА ГАУРА ВАЙА НАМАХ ОМ
                      Чистейшему, Золотому – поклонение!
                    </p>
                    <p className="text-sm">
                      14.08.2025
                      ОМ ВИДЙА РТХАЙЕ НАМАХ ОМ
                      Наделенному знанием – поклонение!
                    </p>
                    <p className="text-sm">
                      15.08.2025
                      ОМ ПАРАМА РТХАЙ0Е НАМАХ ОМ
                      Стремящемуся к Высшей цели – поклонение!
                    </p>
                    <p className="text-sm">
                      16.08.2025
                      ОМ ЩРАД ДХА РТХИНЕ НАМАХ ОМ
                      Объекту Веры – поклонение!
                    </p>
                    <p className="text-sm">
                      17.08.2025
                      ОМ САДХАНА ТМАКАЙА НАМАХ ОМ
                      Сущности садханы – поклонение!
                    </p>
                    <p className="text-sm">
                      18.08.2025
                      ОМ ПРАТЙА ХАРИНЕ НАМАХ ОМ
                      Устраняющемуся – поклонение!
                    </p>
                    <p className="text-sm">
                      19.08.2025
                      ОМ НИРА ХАРИНЕ НАМАХ ОМ
                      Постящемуся – поклонение!
                    </p>
                    <p className="text-sm">
                      20.08.2025
                      ОМ САРВА ХАРА ПАРАЙА НАЙА НАМАХ ОМ
                      Поедающему все – поклонение!
                    </p>
                    <p className="text-sm">
                      21.08.2025
                      ОМ НИТЙА ЩУДДХАЙА НАМАХ ОМ
                      Вечно Чистому – поклонение!
                    </p>
                    <p className="text-sm">
                      22.08.2025
                      ОМ НИРА КАКШИНЕ НАМАХ ОМ
                      Неимеющему желаний – поконение
                    </p>
                    <p className="text-sm">
                      23.08.2025
                      ОМ ПАРАЙА НАПАРАЙ АНАЙА НАМАХ ОМ
                      Предающему спасению – поклонение!
                    </p>
                    <p className="text-sm">
                      24.08.2025
                      ОМ АНОРАН УТТАРАЙА НАМАХ ОМ
                      Превосходящему Атом – поклонение!
                    </p>
                    <p className="text-sm">
                      25.08.2025
                      ОМ СУКШМАЙА НАМАХ ОМ
                      Тонкому – поклонение!
                    </p>
                    <p className="text-sm">
                      26.08.2025
                      ОМ СТХУЛАЙА НАМАХ ОМ
                      Плотному – поклонение!
                    </p>
                    <p className="text-sm">
                      27.08.2025
                      ОМ СТХУЛА ТАРАЙА НАМАХ ОМ
                      Превосходящему плотное – поклонение!
                    </p>
                    <p className="text-sm">
                      28.08.2025
                      ОМ ЭКАЙА НАМАХ ОМ
                      Единому – поклонение!
                    </p>
                    <p className="text-sm">
                      29.08.2025
                      ОМ АНЕКА РУПАЙА НАМАХ ОМ
                      Имеющему множество форм – поклонение!
                    </p>
                    <p className="text-sm">
                      30.08.2025
                      ОМ ВИЩВА РУПАЙА НАМАХ ОМ
                      Форме Вселенной – поклонение!
                    </p>
                    <p className="text-sm">
                      31.08.2025
                      ОМ САНАТА НАЙА НАМАХ ОМ
                      Вечному – поклонение!
                    </p>
                  </div>
                </MyAccordion>    

              </div>
            </div>
          </MyAccordion> */}

          <MyAccordion id='GuruYogaOm2' title='Гуру-йога с Ом' big className='max-w-xl'>
            <p className="sutra-title w-xl"></p>
          </MyAccordion>

          <MyAccordion id='PyatyiPoklon' title='Пятый поклон' big className='max-w-xl'>
            <div className="mt-5 w-full flex flex-col justify-center gap-5">
              <p className="w-xl">
                Выполняется пятый поклон из практики пяти поклонов.
              </p>
              <p className=" text-balance max-w-screen-sm">
                Поклон Единой Самайе созерцания (выполняется под звук колокольчика).
              </p>
            </div>
          </MyAccordion>

          <MyAccordion id='Rakovina' title='Звучит раковина' big className='max-w-xl'>
            <p className="sutra-title w-xl"></p>
          </MyAccordion>

          <MyAccordion id='Prostiranie' title='Простирание' big className='max-w-xl'>
            <p className=" w-xl">
              Выполняется полное простирание в сторону алтаря.
            </p>
          </MyAccordion>

          <p className="sutra-title">Практика завершена!</p>

          <Disclaimer />
        </div>
      </div>
    </div>
  )
}

export default page
