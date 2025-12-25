import MyAccordion from './MyAccordion'

const ShantiStotra = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='ShantiStotra' title='Шанти Стотра' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/ShantiStotra.mp3"
              className="w-full"
            ></audio>
          </div>
          <p className="font-bold">
            БХУТА ПРЕТА ПИШАЧААДЙА<br />
            ЙАСЙА СМАРАНА МАТРАТАХ<br />
            ДУРА ДЕВА ПАЛАЙАНТЕ<br />
            ДАТТАТРЕЙАМ НАМАМИ ТАМ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Приведения, духи и демоны далеко убегают от одного
            воспоминания о ком, того Даттатрейю я почитаю.
          </p>
          <p className="font-bold">
            ЙАН НАМА СМАРАНА ДАИНЙАМ<br />
            ПАПАМ ТАПАШЧА НАШЙАТИ<br />
            БХИТИГРА ХААРТИНДУХ СВАПНАМ<br />
            ДАТТАТРЕЙАМ НАМАМИ ТАМ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Бедность, грех, страдание, страх, грабёж, горе - гибнут от
            вспоминания чьего имени, того Даттатрейю я почитаю.
          </p>
          <p className="font-bold">
            ДАДРУ СПХОТАКА КУШТХАДИ<br />
            МАХАМАРИ ВИШУЧИКА<br />
            НАШЙАН ТЙАНЙЕПИ РОГАШЧА<br />
            ДАТТАТРЕЙАМ НАМАМИ ТАМ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Сыпи, опухоли, проказа, холера и прочие болезни уничтожаются от
            воспоминания чьего Имени, того Даттатрейю я почитаю.
          </p>
          <p className="font-bold">
            САНГАДЖА ДЭЩА КАЛОТТХА<br />
            АПИ САНКРАМИТА ГАДАХ<br />
            ШАМЙАНТИ ЙАТ СМАРАНАТО<br />
            ДАТТАТРЕЙАМ НАМАМИ ТАМ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Рождённые привязанностью, местом и временем,
            непреодолеваемые недуги умиротворяются от воспоминания о ком,
            того Даттатрейю я почитаю.
          </p>
          <p className="font-bold">
            САРПА ВРШЧИ КАДАШТАНАМ<br />
            ВИШАРТАНАМ ШАРИРИНАМ<br />
            ЙАН НАМА ШАНТИДАМ ЩИГХРАМ<br />
            ДАТТАТРЕЙАМ НАМАМИ ТАМ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Людям, укушенным змеями и скорпионами и страдающим от
            яда, чьё Имя быстро даёт покой, того Даттатрейю я почитаю.
          </p>
          <p className="font-bold">
            ТРИВИДХОТ ПАТА ШАМАНАМ<br />
            ВИВИДХА РИШТА НАШАНАМ<br />
            ЙАН НАМА КРУРАБХИ ТИГХНАМ<br />
            ДАТТАТРЕЙАМ НАМАМИ ТАМ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Чьё Имя три вида неблагоприятных примет умиротворяет,
            различных врагов уничтожает, уничтожает ужасный страх, того
            Даттатрейю я почитаю.
          </p>
          <p className="font-bold">
            ВАЙРЙА ДИ КРТА МАНТРА ДИ<br />
            ПРАЙОГА ЙАСЙА КИРТАНАТ<br />
            НАШЙАНТИ ДЕВА БАДХАШЧА<br />
            ДАТТАТРЕЙАМ НАМАМИ ТАМ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Применяющие мощь и магию, причиняющие вред богам
            гибнут от чьего восславления, того Даттатрейю я почитаю.
          </p>
          <p className="font-bold">
            ЙАЧЧЕШЙА СМАРАНАТ САДЙО<br />
            ГАТА НАШТАДИ ЛАБХЙАТЕ<br />
            ЙАХ ИШАХ САРВАТА СТРАТА<br />
            ДАТТАТРЕЙАМ НАМАМИ ТАМ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Мгновенно уходят несчастья от воспоминания чьего Имени; Кто
            Господь, спасающий от всего, того Даттатрейю я почитаю.
          </p>
          <p className="font-bold">
            ДЖАЙА ЛАБХАЙАШАХ КАМА<br />
            ДАТУР ДАТТАСЙА ЙАХ СТАВАМ<br />
            БХОГА МОКША ПРАДАСЙЕ МАМ<br />
            ПАТХЕД ДАТТА ПРИЙО БХАВЕТ<br />
            ДАТТАТРЕЙАМ НАМАМИ ТАМ
          </p>
          <p className="text-balance max-w-screen-sm text-sm">
            Кто прочитает это восхваление, дающее желаемое, славу,
            обретение и победу, наслаждение и освобождение, тот будет
            дорог Даттатрейе.
          </p>
        </div>
      </MyAccordion>
    </div >
  )
}

export default ShantiStotra