import MyAccordion from './MyAccordion'

const ChitsthairakamStotra = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='ChitsthairakamStotra' title='Читтстхаирйакам Cтотра' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/ChitsthairakamStotra.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-bold">
            АНАСУЙААТРИСАМБХУТА<br />
            ДАТТАТРЕЙА МАХААМАТЕ<br />
            САРВАДЕВААДИДЕВА ТВАМ<br />
            МАМА ЧИТТАМ СТИРИКУРУ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Родившийся у Анасуи и мудреца Атри Даттатрея!
            Бог всех богов! Прошу, Ты сделай моё сознание стойким.
          </p>
          <p className="font-bold">
            ШАРАНААГАТА ДИИНААРТА<br />
            ТААРАКААКИЛЯКААРАКО<br />
            САВРАЧААЛЯКА ДЕВА ТВАМ<br />
            МАМА ЧИТТАМ СТИРИКУРУ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Спаситель несчастных и страдающих, ищущих защиту,
            создатель всего! Бог, ведущий всех!
            Прошу, Ты сделай моё сознание стойким.
          </p>
          <p className="font-bold">
            САРВАМАНГАЛЯМААННГАЛЙА<br />
            САРВА ДИВЙААДИ БХЕШАДЖА<br />
            САРВАСАНКАТАХААРИНА ТВАМ<br />
            МАМА ЧИТТАМ СТИРИКУРУ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Самый благой из благих, лекарь всех болезней! Забирающий
            все трудности! Прошу, Ты сделай моё сознание стойким.
          </p>
          <p className="font-bold">
            СМАРТРУГААМИ СВАБХАКТААНААМ<br />
            КААМАДО РИПУНААШАНА<br />
            БХУКТИМУКТИПРАДА СА ТВАМ<br />
            МАМА ЧИТТАМ СТИРИКУРУ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Для своих почитателей ты даёшь желаемое, приводишь к
            учителю и уничтожаешь врагов! Дающий любовь и
            освобождение! Прошу, Ты сделай моё сознание стойким.
          </p>
          <p className="font-bold">
            САРВАПААПА КШАЙАКАРА<br />
            СТААПАДАИНЙА НИВАРАНА<br />
            ЙОБХИШТАДА ПРАБХУ СА ТВАМ<br />
            МАМА ЧИТТАМ СТИРИКУРУ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Уничтожающий все грехи и страдания, подавленность
            прекращающий! Тот, который даёт сокровенное!
            Прошу, Ты сделай моё сознание стойким.
          </p>
          <p className="font-bold">
            ЙА ЕТАТПРАЙАТА ШЛОКА<br />
            ПАНЧАКАМ ПРАПАТХЕТСУДХИИ<br />
            СТХИРАЧИТТА СА БХАГАВАТ<br />
            КРУПААПААТРАМ БХАВИШЙАТИ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Тот чистый душой разумный человек, который прочитал бы
            эти 5 шлок, получит стойкое сознание милостью Бхагавана.
          </p>

        </div>
      </MyAccordion>
    </div >
  )
}

export default ChitsthairakamStotra