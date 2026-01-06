import MyAccordion from './MyAccordion'
import ShriBheshaKioShambho from './ShriBheshaKioShambho'

const DattaArati = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='DattaArati' title='Датта Арати' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/DattaArati.mp3"
              className="w-full"
            ></audio>
          </div>
          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
            Гуру Датта Дигамбар Стотра
          </h2>

          <p className="font-medium">
            Харе Ом!<br />
            Гуру джи дигамбара<br />
            датта джи дигамбара<br />
            Алакх джи дигамбара<br />
            суами джи дигамбара<br />
            чАлаве кАмбало пАхихе питАмбара<br />
            бИси хе багАмбара кАно ме кУндала<br />
            хАто камАндало цАранка ДаогуруджИ<br />
            тАле дхАРи упАРе Амбаре<br />
            парамахАмса махАмунИ<br />
            шири ансУя мАтаджи ки<br />
            гхЕлатанандана шАРатасАндана джУлятанАндана<br />
            дАршана дЭво шри гурудЭва дАтта дигАмбара<br />
            шири гурудЭво дАтта дигАмбара…
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Гуруджи Дигамбара, Датта Дигамбара,
            Господь Дигамбара, Свамиджи Дигамбара!
            Умащенный пеплом, одетый в шафрановые одежды, [восседающий]
            на тигриной шкуре, с серьгами в ушах и сосудом для воды
            (камандалой) в руке, обутый в деревянные сандалии, о Гуруджи,
            Ты паришь над поверхностью земли высоко в небе!
            О Совершенный святой, Великий мудрец, умащенный сандаловой
            пастой! Чудесный сын матушки Анасуи!
            Так вижу Господа Шри Гуру Даттатрею.
          </p>

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
            Даттатрейя Арати
          </h2>

          <p className="font-medium">
            1. шригурудЭва дАтта авадхУта мааРеге<br />
            сиддхи чаурАси тапасьЯ каРе
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Я поклоняюсь Гуру Дева Датте, который в просветленной
            форме Авадхуты, который совершенен в 84х сиддхах.
          </p>
          <ShriBheshaKioShambho />

          <p className="font-medium">
            2. бИчхи хэ джАджамэ лАги хэ тАкия<br />
            нАм нирАнджана свами ве джапЭ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приветствую Гуруджи, который восседает на сидении
            Джаджама, облокачиваясь на подушку, и всегда повторяя имя
            бесформенного Бога.
          </p>
          <ShriBheshaKioShambho />

          <p className="font-medium">
            3. пИри джо хОкаре гАддхи джо бЕйтхе<br />
            тАджа тарАнга хАсти ве чаРе
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приветствую Йога, восседающего на своем троне,
            величественно, словно на слоне.
          </p>
          <ShriBheshaKioShambho />

          <p className="font-medium">
            4. пАньдите хОкари вЕда джо бАнче<br />
            дхАнда упАдхи сЭ ньярА рахе
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Тот, кто приветстует Гуруджи в форме духовного учителя,
            воспевающего Веды, держащего жезл как символ власти и
            возмездия, - освобождается от всякой беды.
          </p>
          <ShriBheshaKioShambho />

          <p className="font-medium">
            5. рИши джо мУни гуру дУддха джо дхАри<br />
            Урдхва вахАне тапасьяА каРе
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приветствую ГуруДжи в форме Риши: того, кто пьет чистое
            коровье молоко и совершает аскезу в месте под названием Урдвахам.
          </p>
          <ShriBheshaKioShambho />

          <p className="font-medium">
            6. рУкхаРа шУкхаРа дхУпо джо кхЕве<br />
            нАга нирбхАйа тапасьЯ каРе
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приветствую ГуруДжи в форме обнаженного Бога, бесстрашно
            медитирующего, вдыхающего ароматные пары или благовония.
          </p>
          <ShriBheshaKioShambho />

          <p className="font-medium">
            7. кОи хе лАкхи гуру кОи хе кхАаки<br />
            вАНкхаНди вАн ме тапасьЯ каРе
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приветствую ГуруДжи, медитирующего в лесу Ванкханди,
            безразличного к богатству или к бедности.
          </p>
          <ShriBheshaKioShambho />

          <p className="font-medium">
            8. Абуджо гАРха гиринАрэ вАасаа<br />
            мохАрегАРха бхикшА каРе
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приветствую ГуруДжи, который в форме Бикшу принимает
            подаяния на горе Абу в Мохаргархе.
          </p>
          <ShriBheshaKioShambho />

          <p className="font-medium">
            9. ДжАпата брАхмма гуру рАтата вИшНу<br />
            Ади дЭва махЕшвара
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приветствую ГуруДжи, постоянно повторяющего имена
            Бхармы, Вишну и Махешвары.
          </p>
          <ShriBheshaKioShambho />

          <p className="font-medium">
            10. чАнда ДжО сУурадже нОулакхе тАРэ<br />
            гУруджи тумхАРи парикрамА каРе
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приветствую ГуруДжи, чей образ окружен Солнцем, Луной и
            900 000 звезд.
          </p>
          <ShriBheshaKioShambho />

          <p className="font-medium">
            11. шири дАшнама бхЭша гуру шИля санньАасии<br />
            сАрва дЭва ракшА каРе
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приветствую ГуруДжи в форме Санньяси наивысшего уровня,
            того, кто защищен всеми Богами.
          </p>
          <ShriBheshaKioShambho />

          <p className="font-medium">
            12. дЭэва бхАаРати дЭва лИила<br />
            дОу каРа джОре астутИ каРе
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приветствую ГуруДжи, ведущего божественную игру на святой
            земле бога – в Индии и кого восхваляют и уважают все живые
            существа.
          </p>
          <ShriBheshaKioShambho />

          {/* <p className="font-medium">
            13. ширидЭва бхАаРати дЭва лИила<br />
            дОу кара джЁри астутИ каРе
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приветствую ГуруДжи, играющегов божественную игру на
            святой земле Бхарата, кого восхваляют и уважают все живые
            существа.
          </p>
          <ShriBheshaKioShambho /> */}

          <p className="font-medium">
            13. Шри гурудЭва дАтта абадхУта мааРеге<br />
            сиддхи чеурАси тапасьЯ каРе
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Восхваляйте Гуру Дева Датту, величайшего Господа среди всех!
          </p>
          <ShriBheshaKioShambho />

          <h2 className="mb-2 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl w-full">
            Датта пранам
          </h2>
          <p className="font-medium">
            дАтта дАтта нибхАйаджата<br />
            чАРоно ме читта лагАи джата<br />
            джахаА дАтта хе вахА сАттйа хе<br />
            джахА дАтта нехИ вахА сАттйа нехИ<br />
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            О Господь Датта, дарующий бесстрашие! Мысленно мы касаемся
            твоих стоп! Где Датта – там Истина, где нет Датты – там нет
            Истины!
          </p>
          <p className="font-medium">
            дАтта хе баре парамАртхИ<br />
            шИтал джинаке анга буджхАве<br />
            дете хе оурене ко апно рангА<br />
            боло гурудева датта махАрАджа ки - джей!
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Датта – Высшая реальность! О обладатель нежных стоп и рук,
            ты даруешь силу и веру! Слава Гурудеву Датте Махарадже!
            Шри Даттатрейя Авадхута Ки Джай!
          </p>

        </div>
      </MyAccordion>
    </div>
  )
}

export default DattaArati