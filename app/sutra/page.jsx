import Altar from '@/components/Altar'

const page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto min-h-screen">
      <div className="mx-2">
        <Altar />
        <div
          id="sutra"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <p className="text-lg">Cутра</p>
          <audio controls src="/sounds/sutra.mp3"></audio>
        </div>

        <div className="mt-10 w-full  flex flex-col items-center justify-center gap-5">
          <p className="sutra-title">1. Начало практики</p>
          <p className="text-center text-balance max-w-screen-sm">
            Перед началом практики выполняются ачамана и ежедневная практика
            принятия Прибежища.
          </p>
          <p className="sutra-title">2. Звучит раковина</p>
          <p className="sutra-title">3. Выполняется Гуру-йога с Ом</p>
          <p className="sutra-title">
            4. Первый поклон из практики пяти поклонов
          </p>
          <p className="text-center text-balance max-w-screen-sm">
            Поклон Коренному Гуру (выполняется под звук колокольчика).
          </p>
          <p className="sutra-title">5. Поклонение Ганеше. Мантра Ганеши</p>
          <p className="font-bold">
            ВАККРАТУНДА МАХА КАЙА
            <br />
            СУРЬЯ КОТИ САМА ПРАБХА
            <br />
            НИРВИГНАМ КУРУ МЭ ДЭВА
            <br />
            САРВА КАРЙЕ ЩУ САРУАДА
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
            О, Изгибающий хобот, Огромнотелый, превосходящий своим сиянием свет
            миллионов Солнц! Устрани препятствия, о Бог, во всех моих
            начинаниях!
          </p>
          <p className="font-bold">ОМ ГАМ ГАНАПАТАЙЕ НАМАХА</p>
          <p className="text-center text-sm">
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
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Ганешу, предводителя праматхов (духов), находящегося вне гун,
            наделенного добродетелями, благого, к стопам которого устремляются
            йогины, сына Гаури – почитаем!
          </p>
          <p className="sutra-title">6. Поется Сарасвати арати</p>
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
          <p className="text-center text-balance max-w-screen-sm text-sm">
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
          <p className="text-center text-balance max-w-screen-sm text-sm">
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
          <p className="text-center text-balance max-w-screen-sm text-sm">
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
          <p className="text-center text-balance max-w-screen-sm text-sm">
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
          <p className="text-center text-balance max-w-screen-sm text-sm">
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
          <p className="text-center text-balance max-w-screen-sm text-sm">
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
          <p className="text-center text-balance max-w-screen-sm text-sm">
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
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Слава Матери Сарасвати, преисполненной благих качеств,
            Повелительнице Трех Миров! Слава Матери Сарасвати!
          </p>
          <p className="font-bold text-center">
            ШРИ МАХАСАРАСВАТИ МАТА КИ — ДЖЕЙ!
            <br />
            ШРИ Гуру СВАМИ ВИШНУДЕВАНАНДА ГИРИ ДЖИ КИ — ДЖЕЙ!
          </p>

          <p className="sutra-title">
            7. Поются четыре мантры, очищающие пространство
          </p>
          <p className="text-center text-balance">ГАЯТРИ МАНТРА</p>
          <p className="font-bold">
            ОМ БХУР БХУВАХ СВАХА
            <br />
            ТАТ САВИТУР ВАРЕНЬЯМ
            <br />
            БХАРГО ДЭВАСЬЯ ДХИМАХИ
            <br />
            ДХЬЙО ЙО НАХ ПРАЧОДАЯТ
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
            О, Всевышний Источник! Ты есть высший Свет, разрушающий грехи. Мы
            медитируем на Тебя, чтобы Ты вдохновлял, просветлял и вел нас к
            освобождению!
          </p>
          <p className="text-center text-balance">МАХАМРИТЬЮНДЖАЯ МАНТРА</p>
          <p className="font-bold">
            ОМ ТРАЯМБАКАМ ЯДЖАМАХЕ
            <br />
            СУГАНДХИМ ПУШТИ ВАРДХАНАМ
            <br />
            УРВАРУКАМИВА БАНДХАНАМ
            <br />
            МРИТЬОР МУКШИЯ МА’МРИТАТ
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
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
          <p className="text-center text-balance max-w-screen-sm text-sm">
            От неистины веди меня к Истине, от тьмы веди меня к свету, от смерти
            веди меня к бессмертию.
          </p>
          <p className="text-center text-balance">ГУРУ МАНТРА</p>
          <p className="font-bold">
            ГуруР БРАХМА ГуруР ВИШНУ
            <br />
            ГуруР ДЭВО МАХЕШВАРА
            <br />
            Гуру САКШАТ ПАРАБРАХМА
            <br />
            ТАСМАЙ ШРИ ГУРАВЕ НАМАХА
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Гуру – это Брахма, Гуру – это Вишну, Гуру – это Господь Махешвара.
            Гуру – это сам Парабрахман. Тому Шри Гуру поклонение!
          </p>
          <p className="sutra-title">8. Поется открывающая молитва Прартхана</p>
          <p className="font-bold">
            ОМ СВАРУПАЯ НАМАХА
            <br />
            ОМ ШРИ САТГУРАВЕ НАМАХА
            <br />
            ОМ ДРАМ ДАТТАТРЕЙЯЯ НАМАХА
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
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
          <p className="text-center text-balance max-w-screen-sm text-sm">
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
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Гуру – это Брахма, Гуру – это Вишну, Гуру – это Господь Махешвара.
            Гуру – это сам Парабрахман, Тому Шри Гуру поклонение!
          </p>

          {/* 9 */}
          <div className="w-full  flex flex-col items-center justify-center gap-5">
            <p className="sutra-title">9. Поется Шри Даттатрея стотра</p>
            <p className="font-bold text-center">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
              Имеющий спутанные волосы, являющийся Пандурангой (Вишну), с
              трезубцем в руке, океан милосердия. Божественный избавитель от
              всех болезней – Даттатрея, я поклоняюсь Тебе.
            </p>
            <p className="font-bold text-center md:text-left">
              АСЙА ШРИ ДАТТАТРЕЙА СТОТРА МАНТРАСЙА
              <br />
              БХАГАВАН НАРАДА РУШИХИ АНУШТУП
              <br />
              ЧАНДАХА ШРИ ДАТТА ПАРАМАТМА ДЕВАТА
              <br />
              ШРИ ДАТТА ПРИТЙАРТХЕ ДЖАПЭ ВИНИЙОГАХА
            </p>
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
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
            <p className="text-center text-balance max-w-screen-sm text-sm">
              Этот великий божественный гимн дарует прямое восприятие
              реальности. Я, Нарада, сочинил его только благодаря милости
              Даттатреи.
            </p>
            <p className="font-bold text-center">
              ИТИ ШРИ НАРАДА ПУРАНЭ НАРАДА КРТАМ
              <br />
              ДАТТАРЕЙА СТОТРАМ САМПУРНАМ
              <br />
              ШРИ ДАТТАРЕЙА ПАРАМАСТУ
            </p>
            <p className="text-center text-balance max-w-screen-sm text-sm">
              Так заканчивается Даттатрея стотра в Нарада пуране.
            </p>
          </div>

          <p className="sutra-title">
            10. Второй поклон из практики пяти поклонов
          </p>
          <p className="text-center text-balance max-w-screen-sm">
            Поклон Истинной Дхарме (выполняется под звук колокольчика).
          </p>

          <p className="sutra-title max-w-screen-sm">
            11. Поется молитва-почитание Даттатреи в аспекте «одетого в стороны
            света» – дигамбары
          </p>
          <p className="font-bold text-center">
            ДИГАМБАРА ДИГАМБАРА
            <br />
            ШРИ ПАДАВАЛЛАБХА ДИГАМБАРА
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Одетому в пространство поклонение! Святому Шрипаде Валлабхе
            поклонение!
          </p>

          <p className="sutra-title">
            12. Третий поклон из практики пяти поклонов
          </p>
          <p className="text-center text-balance max-w-screen-sm">
            Поклон Святой Сангхе (выполняется под звук колокольчика).
          </p>

          <p className="sutra-title">
            13. Поется семенная мантра Даттатреи, 7 раз
          </p>
          <p className="font-bold">ОМ ДРАМ ДАТТАТРЕЙАЙА НАМАХА</p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Ом, Бхагавану Даттатрее поклонение!
          </p>

          <p className="sutra-title">14. Поется гаятри мантра Даттатреи</p>
          <p className="font-bold">
            ОМ ДАТТАТРЕЙАЙА ВИДМАХЕ
            <br />
            АТРИПУТРАЙА ДХИМАХИ
            <br />
            ТАННО ДАТТА ПРАЧОДАЙАТ
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Ом! Да услышит нас Даттатрея! Мы медитируем на сына Атри. Да дарует
            нам Даттатрея свою силу просветления!
          </p>

          <p className="sutra-title">15. Поется гаятри мантра Брахмананды</p>
          <p className="font-bold">
            ОМ СИДДХА ЙОГИ ВИДМАХЕ
            <br />
            ПАРАМАХАМСАЙА ДХИМАХИ
            <br />
            ТАННО ПРАБХАКАРА ПРАЧОДАЙАТ
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Ом! Да услышит нас сиддха йоги Прабхакара! Мы медитируем на
            Парамахамсу. Да осветит Шива Прабхакара наш разум!
          </p>

          <p className="sutra-title">
            16. Поется молитва к Парамгуру Брахмананде
          </p>
          <p className="font-bold text-center md:text-laft">
            ПРАБХАКАРАМ ШАНКАРА ЛОЧАНАМ
            <br />
            ПРАБХАНКУРАМ ШАКТИ ВИШЕША ДАЙАКАМ
            <br />
            ПРАБХАКАРА ШРИ ШИВА СИДДХА ЙОГИНАМ
            <br />
            СМАРААМИ НИТЙАМ МАНАСА НАМАМЙАХАМ
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Человек с глазами Господа Шивы, Рассвет, который рождает силу! Я
            держу тебя в своей памяти каждый день И склоняю голову перед тобой.
          </p>

          <p className="sutra-title">17. Поется мантра Брахмананды, 3 раза</p>
          <p className="font-bold">
            ОМ НАМО НАМАХ ШИВАЙА
            <br />
            ОМ ШИВА ПРАБХАКАРАЙА
          </p>
          <p className="text-center text-balance max-w-screen-sm text-sm">
            Ом поклонение, поклонение Шиве, Шиве Прабхакаре!
          </p>

          <p className="sutra-title">18. Звучит восхваление</p>
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

          <p className="sutra-title">19. Звучит раковина</p>

          <p className="sutra-title">
            20. Четвертый поклон из практики пяти поклонов
          </p>
          <p className="text-center text-balance max-w-screen-sm">
            Поклон Самайе (выполняется под звук колокольчика).
          </p>

          <p className="sutra-title">21. Звучит текст сутры</p>

          <p className="sutra-title">
            22. Краткая медитация на один из аспектов Бхагавана Даттатреи
          </p>

          <p className="sutra-title">23. Выполняется Гуру-йога с Ом</p>

          <p className="sutra-title">
            24. Пятый поклон из практики пяти поклонов
          </p>
          <p className="text-center text-balance max-w-screen-sm">
            Поклон Единой Самайе созерцания (выполняется под звук колокольчика).
          </p>

          <p className="sutra-title">25. Звучит раковина</p>

          <p className="sutra-title">
            26. Выполняется полное простирание в сторону алтаря
          </p>

          <p className="sutra-title">Практика завершена!</p>
        </div>
      </div>
    </div>
  )
}

export default page