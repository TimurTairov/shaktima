import { Container } from "@/components/Container";
import MyAccordion from '@/components/MyAccordion'
import SendMessageToTirthadeva from "@/components/SendMessageToTirthadeva";
import SendMessageToMadhavapriya from "@/components/SendMessageToMadhavapriya";

const page = () => {
  return (
    <Container className="min-h-screen">
      {/* <h1 className="textColor w-full text-center text-3xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Расписание регулярных занятий
      </h1> */}

      <h1 className="mainTitle">
        Расписание регулярных занятий
      </h1>

      <div className="flex justify-center mt-10 dark:text-black">
        <div className="w-full grid grid-cols-5 gap-1 rounded-md">
          {/* ДНИ НЕДЕЛИ */}
          {/* <div className="">
            <p className="hidden md:block"></p>
            <p className="block md:hidden"></p>
          </div> */}
          <div className="grid-item-dn">
            <p className="hidden md:block">Понедельник</p>
            <p className="block md:hidden">Пн</p>
          </div>
          <div className="grid-item-dn">
            <p className="hidden md:block">Вторник</p>
            <p className="block md:hidden">Вт</p>
          </div>
          <div className="grid-item-dn">
            <p className="hidden md:block">Среда</p>
            <p className="block md:hidden">Ср</p>
          </div>
          <div className="grid-item-dn">
            <p className="hidden md:block">Четверг</p>
            <p className="block md:hidden">Чт</p>
          </div>
          <div className="grid-item-dn">
            <p className="hidden md:block">Пятница</p>
            <p className="block md:hidden">Пт</p>
          </div>

          {/* <div className="grid-item-dn">
            <p className="hidden md:block">Суббота</p>
            <p className="block md:hidden">Сб</p>
          </div>
          <div className="grid-item-dn">
            <p className="hidden md:block">Воскресение</p>
            <p className="block md:hidden">Вс</p>
          </div> */}

          {/* 1 */}
          <div className="grid-item-rasp bg-green-100">
            <p className="w-full text-center dark:text-black">8:00 - 9:30</p>
            <b className="w-full text-center dark:text-black">Хатха йога</b>
            <SendMessageToTirthadeva />
          </div>
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp bg-green-100">
            <p className="w-full text-center">8:00 - 9:30</p>
            <b className="w-full text-center">Хатха йога</b>
            <SendMessageToTirthadeva />
          </div >
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
          </div>

          {/* <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
          </div> */}

          {/* 2 */}
          <div className="grid-item-rasp bg-blue-100">
            <p className="w-full text-center">10:00 - 11:30</p>
            <b className="w-full text-center">Кундалини йога</b>
            <SendMessageToTirthadeva />
          </div>
          <div className="grid-item-rasp bg-blue-100">
            <p className="w-full text-center">9:00 - 10:30</p>
            <b className="w-full text-center">Йога сиддхов</b>
            <p className="w-full text-center">Арати</p>
          </div>
          <div className="grid-item-rasp bg-blue-100">
            <p className="w-full text-center">10:00 - 11:30</p>
            <b className="w-full text-center">Кундалини йога</b>
            <SendMessageToTirthadeva />
          </div >
          <div className="grid-item-rasp bg-blue-100">
            <p className="w-full text-center">10:00 - 11:30</p>
            <b className="w-full text-center">Йога сиддхов</b>
            <p className="w-full text-center">Тарини</p>
          </div>
          <div className="grid-item-rasp bg-blue-100">
            <p className="w-full text-center">9:00 - 10:30</p>
            <b className="w-full text-center">Йога сиддхов</b>
            <SendMessageToMadhavapriya />
          </div>

          {/* <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
          </div> */}


          {/* 3 */}
          <div className="grid-item-rasp bg-red-100">
            <p className="w-full text-center">11:30 - 12:30</p>
            <b className="w-full text-center">Сутра</b>
            <SendMessageToTirthadeva />
          </div>
          <div className="grid-item-rasp bg-red-100">
            <p className="w-full text-center">11:00 - 12:00</p>
            <b className="w-full text-center">Сутра</b>
            <p className="w-full text-center">Арати</p>
          </div>
          <div className="grid-item-rasp bg-red-100">
            <p className="w-full text-center">11:30 - 12:30</p>
            <b className="w-full text-center">Сутра</b>
            <SendMessageToTirthadeva />
          </div >
          <div className="grid-item-rasp bg-red-100">
            <p className="w-full text-center">11:30 - 12:30</p>
            <b className="w-full text-center">Сутра</b>
            <p className="w-full text-center">Тарини</p>
          </div>
          <div className="grid-item-rasp bg-red-100">
            <p className="w-full text-center">11:00 - 12:00</p>
            <b className="w-full text-center">Сутра</b>
            <SendMessageToMadhavapriya />
          </div>
          {/* <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
          </div> */}

          {/* 4 */}
          <div className="grid-item-rasp ">

          </div>
          <div className="grid-item-rasp ">

          </div>
          <div className="grid-item-rasp bg-green-100">
            <p className="w-full text-center">17:00 - 18:30</p>
            <b className="w-full text-center">Хатха йога</b>
            <SendMessageToTirthadeva />
          </div >
          <div className="grid-item-rasp bg-blue-100">
            <p className="w-full text-center">15:00 - 16:30</p>
            <b className="w-full text-center">Пранавидья</b>
            <p className="w-full text-center">Тарини</p>
          </div>
          <div className="grid-item-rasp ">
          </div>
          {/* <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp ">
          </div> */}

          {/* 5 */}
          <div className="grid-item-rasp bg-red-100">
            <p className="w-full text-center">18:00 - 21:00</p>
            <b className="w-full text-center">Бхаджан Мандала</b>
            <p className="w-full text-center"></p>
          </div>
          <div className="grid-item-rasp bg-red-100">
            <p className="w-full text-center">18:00 - 21:00</p>
            <b className="w-full text-center">Бхаджан Мандала</b>
            <p className="w-full text-center"></p>
          </div>
          <div className="grid-item-rasp bg-red-100">
            <p className="w-full text-center">19:00 - 22:00</p>
            <b className="w-full text-center">Бхаджан Мандала</b>
            <SendMessageToTirthadeva />
          </div >
          <div className="grid-item-rasp bg-red-100">
            <p className="w-full text-center">18:00 - 21:00</p>
            <b className="w-full text-center">Бхаджан Мандала</b>
            <p className="w-full text-center">Сатьянанда</p>
          </div>
          <div className="grid-item-rasp bg-red-100">
            <p className="w-full text-center">18:00 - 21:00</p>
            <b className="w-full text-center">Бхаджан Мандала</b>
            <p className="w-full text-center"></p>
          </div>

        </div >
      </div >

      <h3 className="text-sm my-1 mt-10">Условные обозначения:</h3>
      <div className="w-full grid grid-cols-1 gap-2">
        <div className="w-full flex items-center gap-1">
          <div className="size-8 bg-green-100 shrink-0 rounded-md"></div>
          <p className="w-full text-xs">телесные практики: асаны, виньясы, вьяямы, физические крии. </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-8 bg-blue-100 shrink-0 rounded-md"></div>
          <p className="w-full text-xs">дыхательные и ментальные практики: пранаямы, медитации, мантры. </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-8 bg-red-100 shrink-0 rounded-md"></div>
          <p className="w-full text-xs">алтарные садханы: ритуальные практики у алтаря. </p>
        </div>
      </div>
      <h3 className="text-sm my-1 mt-10">Краткое описание практик:</h3>
      <div className="w-full">
        <MyAccordion title='Хатха йога' className="w-full flex flex-col text-xs gap-1">
          <p>Хатха йога — это древняя индийская духовная практика, являющаяся фундаментальной и самой популярной в мире системой йоги.
            Главная цель классической хатха йоги — подготовка тела и ума к высшим ступеням йоги, таким как медитация (дхьяна) и достижение состояния самадхи (просветления). Она создает «инструмент» — здоровое, сильное и подконтрольное сознанию тело, и спокойный, сконцентрированный ум.
          </p>
          <p className="mt-1">Для чего нужна хатха йога? <br />
            Физический уровень:<br />
            · Улучшает гибкость, силу и осанку.<br />
            · Укрепляет опорно-двигательный аппарат и суставы.<br />
            · Нормализует работу всех систем организма (пищеварительной, сердечно-сосудистой, эндокринной).<br />
            · Повышает иммунитет и общий тонус.<br />
            Ментальный и эмоциональный уровень:<br />
            · Снижает стресс, тревожность и беспокойство.<br />
            · Успокаивает ум и способствует ментальной ясности.<br />
            · Развивает концентрацию и самодисциплину.<br />
            · Учит осознанности и нахождению в настоящем моменте.
          </p>
        </MyAccordion>
        <div className="flex items-center">
          <MyAccordion title='Кундалини йога' className="w-full flex flex-col text-xs">
            <p>Кундалини йога — это такой вид йоги, посредством которой мудрецы древности достигали совершенства. Её главная цель — пробудить дремлющую в каждом человеке энергию Кундалини и поднять её через все энергетические центры (чакры) для достижения высшего состояния сознания.
            </p>
            <p className="mt-1">В соответствии с нашим Учением, в основании позвоночника (в области крестца) находится свёрнутая в 3.5 оборота космическая энергия, символически изображаемая в виде змеи. Это Кундалини-шакти — наша нераскрытая духовная потенция. Задача практики — «разбудить эту змею» и, поднимая её по центральному энергетическому каналу (сушумна), соединить с высшим сознанием (Шивой) в области макушки головы (сахасрара-чакры). Это соединение приводит к полной трансформации сознания и просветлению.</p>
            <p className="mt-1">Ключевые цели Кундалини йоги:<br />
              · Пробуждение энергии Кундалини.<br />
              · Укрепление нервной и эндокринной систем для того, чтобы тело могло выдержать подъём мощной энергии.<br />
              · Расширение сознания и обретение внутренней ясности.<br />
              · Избавление от внутренних ограничений и подсознательных блоков.<br />
              · Обретение жизненной силы, целостности и связи со своим «Высшим Я».<br />
            </p>
          </MyAccordion>
        </div>
        <div className="flex items-center">
          <MyAccordion title='Йога сиддхов' className="w-full flex flex-col text-xs">
            <p>Йога сиддхов — это мощная и трансформационная духовная практика. Сочетает в себе элементы хатха, мантра, кундалини и раджа йоги.
            </p>
            <p className="mt-1">Основные практики:<br />
              · Асаны, пранаямы крии.<br />
              · Практика очищения с 21 ОМ.<br />
              · Элементы шат-чакра-йоги.<br />
              · Шанти карма садхана.<br />
              · Медитация Чандали.<br />
              · Медитация на дыхании.<br />
              · Медитация 4-х бесконечных вихар (4БСБ).<br />
            </p>
          </MyAccordion>
        </div>

        <div className="flex items-center">
          <MyAccordion title='Сутра' className="w-full flex flex-col text-xs">
            <p>Сутра — это утренняя пуджа в традиции Адвайта сиддхов.
            </p>
            <p className="mt-1">Что включает:<br />
              · Гуру йога с ОМ.<br />
              · Мантры Ганеше + Ганеша Арати.<br />
              · Сарасвати Арати.<br />
              · Четыре мантры, очищающие пространство.<br />
              · Даттатрейя стотра.<br />
              · Дигамбара мантра.<br />
              · Мантры Даттатрее.<br />
              · Мантры Брахмананде.<br />
              · И т.д.<br />
            </p>
          </MyAccordion>
        </div>

        <div className="flex items-center">
          <MyAccordion title='Бхаджан Мандала' className="w-full flex flex-col text-xs">
            <p>Бхаджан Мандала — это вечерняя пуджа в нашей традиции.
            </p>
            <p className="mt-1">
              В зависимости от дня недели выполняются разные практики:<br />
              · Понедельник — пуджа Шиве для достижения успеха в аскетичных садханах.<br />
              · Вторник — пуджа Даттатрее для углубления недвойственного воззрения и постижения Высшей реальности.<br />
              · Среда — пуджа Вишну для поддержки со стороны Высших сил в относительном измерении и утверждении себя в саттвичных энергиях<br />
              · Четверг — пуджа Гуру для укрпеления связи с коренным Учителям, парам-гуру Брахмандой и другими Учителями традиции.<br />
              · Пятница — пуджа Шакти для обретения иччха (сила воли), джняна (мудрость) и крийя (сила действия) шакти.
            </p>
            <p className="mt-1">Что включает:<br />
              · Гуру йога с ОМ.<br />
              · Мантры Ганеше + Ганеша Арати.<br />
              · Арати, стотры и бхаджаны в соответствии с днем недели.<br />
              · Лекция Гуру.<br />
              · Умиротворяющие мантры.<br />
              · Медитация любви.<br />
              · И т.д.<br />
            </p>
          </MyAccordion>
        </div>
      </div>

    </Container >
  )
}

export default page