import { Container } from "@/components/Container";
import MyAccordion from '@/components/MyAccordion'
import SendMessageToTirthadeva from "@/components/SendMessageToTirthadeva";
import SendMessageToMadhavapriya from "@/components/SendMessageToMadhavapriya";
import SendMessageToArati from "@/components/SendMessageToArati";
import SendMessageToTarini from "@/components/SendMessageToTarini";
import SendMessageTo from "@/components/SendMessageTo";
import { BsExclamationTriangle } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoNavigateSharp } from "react-icons/io5";
import Link from "next/link";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Расписание ШактиМа',
  description: 'Актуальное расписание регулярных занятий в ШактиМа',
}

const page = () => {
  return (
    <Container className="min-h-screen">

      <h1 className="mainTitle">
        Расписание регулярных занятий
      </h1>

      <div className="flex justify-center mt-2 md:mt-5 lg:mt-10 dark:text-black">
        <div className="w-full grid grid-cols-6 gap-1 rounded-md">
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
          <div className="grid-item-dn">
            <p className="hidden md:block">Суббота</p>
            <p className="block md:hidden">Сб</p>
          </div>

          {/* 1 */}
          <div className="grid-item-rasp bg-green-100">
            <p className="w-full text-center dark:text-black">9:00 - 10:30</p>
            <b className="w-full text-center dark:text-black">Хатха йога</b>
            <SendMessageToTirthadeva />
          </div>
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp bg-green-100">
            {/* <p className="w-full text-center">9:00 - 10:30</p>
            <b className="w-full text-center">Хатха йога</b>
            <SendMessageToTirthadeva /> */}
            <p className="text-red-600">Отмена занятия 10.12.2025</p>
          </div >
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp">
          </div>
          <div className="grid-item-rasp">
          </div>


          {/* 2 */}
          <div className="grid-item-rasp bg-blue-100">
            <p className="w-full text-center">10:30 - 12:00</p>
            <b className="w-full text-center">Кундалини йога</b>
            <SendMessageToTirthadeva />
          </div>
          <div className="grid-item-rasp bg-blue-100">
            <p className="w-full text-center">10:00 - 11:30</p>
            <b className="w-full text-center">Шат-чакра-йога</b>
            <SendMessageToArati />
          </div>
          <div className="grid-item-rasp bg-blue-100">
            {/* <p className="w-full text-center">10:30 - 12:00</p>
            <b className="w-full text-center">Кундалини йога</b>
            <SendMessageToTirthadeva /> */}
            <p className="text-red-600">Отмена занятия 10.12.2025</p>
          </div >
          <div className="grid-item-rasp bg-blue-100">
            {/* <p className="w-full text-center">10:00 - 11:30</p>
            <b className="w-full text-center">Йога сиддхов</b>
            <SendMessageToTarini /> */}
            <p className="text-red-600">Отмена занятия 10.12.2025</p>
          </div>
          <div className="grid-item-rasp bg-blue-100">
            <p className="w-full text-center">10:00 - 11:30</p>
            <b className="w-full text-center">Йога сиддхов</b>
            <SendMessageToMadhavapriya />
          </div>
          <div className="grid-item-rasp row-span-2 bg-fuchsia-200">

          </div>

          {/* 3 */}
          <div className="grid-item-rasp bg-amber-100">
            <p className="w-full text-center">12:00 - 13:00</p>
            <b className="w-full text-center">Сутра</b>
            <p className="w-full text-center font-light italic">Утрення пуджа Даттатрее</p>
          </div>
          <div className="grid-item-rasp bg-amber-100">
            <p className="w-full text-center">11:30 - 12:30</p>
            <b className="w-full text-center">Сутра</b>
            <p className="w-full text-center font-light italic">Утрення пуджа Даттатрее</p>
          </div>
          <div className="grid-item-rasp bg-amber-100">
            {/* <p className="w-full text-center">12:00 - 13:00</p>
            <b className="w-full text-center">Сутра</b>
            <p className="w-full text-center font-light italic">Утрення пуджа Даттатрее</p> */}
            <p className="text-red-600">Отмена занятия 10.12.2025</p>
          </div >
          <div className="grid-item-rasp bg-amber-100">
            {/* <p className="w-full text-center">11:30 - 12:30</p>
            <b className="w-full text-center">Сутра</b>
            <p className="w-full text-center font-light italic">Утрення пуджа Даттатрее</p> */}
            <p className="text-red-600">Отмена занятия 10.12.2025</p>
          </div>
          <div className="grid-item-rasp bg-amber-100">
            <p className="w-full text-center">11:30 - 12:30</p>
            <b className="w-full text-center">Сутра</b>
            <p className="w-full text-center font-light italic">Утрення пуджа Даттатрее</p>
          </div>
          <div className="grid-item-rasp ">
          </div>

          {/* 4 */}
          {/* <div className="grid-item-rasp ">
          </div> */}
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp bg-green-100">
            <p className="w-full text-center">17:00 - 18:30</p>
            <b className="w-full text-center">Хатха йога</b>
            <SendMessageToTirthadeva />
          </div >
          <div className="grid-item-rasp bg-blue-100">
            {/* <p className="w-full text-center">14:00 - 15:30</p>
            <b className="w-full text-center">Пранавидья</b>
            <SendMessageToTarini /> */}
            <p className="text-red-600">Отмена занятия 10.12.2025</p>
          </div>
          <div className="grid-item-rasp ">
          </div>
          <div className="grid-item-rasp bg-fuchsia-200">
            <p className="w-full text-center">15:00 - 17:00</p>
            <b className="w-full text-center">Астро консультации</b>
            <SendMessageTo name="Лалитасундари" phone="79637239294" />
          </div>

          {/* 5 */}
          <div className="grid-item-rasp bg-amber-100">
            <p className="w-full text-center">19:00 - 22:00</p>
            <b className="w-full text-center">Бхаджан Мандала</b>
            <p className="w-full text-center font-light italic">Вечерняя пуджа Шиве</p>
          </div>
          <div className="grid-item-rasp bg-amber-100">
            <p className="w-full text-center">19:00 - 22:00</p>
            <b className="w-full text-center">Бхаджан Мандала</b>
            <p className="w-full text-center font-light italic">Вечерняя пуджа Даттатрее</p>
          </div>
          <div className="grid-item-rasp bg-amber-100">
            <p className="w-full text-center">19:00 - 22:00</p>
            <b className="w-full text-center">Бхаджан Мандала</b>
            <p className="w-full text-center font-light italic">Вечерняя пуджа Вишну</p>
          </div >
          <div className="grid-item-rasp bg-amber-100">
            <p className="w-full text-center">19:00 - 22:00</p>
            <b className="w-full text-center">Бхаджан Мандала</b>
            <p className="w-full text-center font-light italic">Вечерняя пуджа Гуру</p>
          </div>
          <div className="grid-item-rasp bg-amber-100">
            <p className="w-full text-center">19:00 - 22:00</p>
            <b className="w-full text-center">Бхаджан Мандала</b>
            <p className="w-full text-center font-light italic">Вечерняя пуджа Шакти</p>
          </div>
          <div className="grid-item-rasp">
          </div>
        </div >
      </div >

      <h3 className="textColor font-medium text-base mt-5 md:mt-5 lg:mt-10 mb-1 text-gray-700 dark:text-gray-100">Условные обозначения</h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-gray-700 dark:text-gray-300">
        <div className="w-full flex items-center gap-1">
          <div className="size-8 bg-green-100 shrink-0 rounded-md"></div>
          <p className="w-full text-xs">Телесные практики: асаны, виньясы, вьяямы, физические крии. </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-8 bg-blue-100 shrink-0 rounded-md"></div>
          <p className="w-full text-xs">Дыхательные и ментальные практики: пранаямы, медитации, мантры. </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-8 bg-amber-100 shrink-0 rounded-md"></div>
          <p className="w-full text-xs">Алтарные садханы: ритуальные практики у алтаря. </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-8 bg-fuchsia-200 shrink-0 rounded-md"></div>
          <p className="w-full text-xs">Семинары и ретриты выходного дня. </p>
        </div>
      </div>


      <>
        <h3 className="textColor text-base font-medium my-1 mt-5 md:mt-5 lg:mt-10 text-gray-700 dark:text-gray-100">Записаться на практику к инструктору</h3>
        <div className="flex flex-col gap-2">
          <MyAccordion title="Тиртхадева" className="w-full flex flex-col text-sm bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-md p-2">
            <div className="flex flex-col gap-1">
              <p className="mt-1">Расписание:</p>
              <p className="font-light">ПН СР 9:00 Хатха йога</p>
              <p className="font-light">ПН СР 10:30 Кундалини йога</p>
              <p className="font-light">СР 17:00 Хатха йога</p>

            </div>
            <div className="flex gap-1 mt-1">
              <p className="">Контакты:</p>
              <a href="whatsapp://send?phone=79672067710"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsappSquare className="size-5 text-green-400" />
              </a>
              <a href="https://t.me/tirthadeva"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram className="size-5 text-sky-500" />
              </a>
            </div>
          </MyAccordion>

          <MyAccordion title="Арати" className="w-full flex flex-col text-sm bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-md p-2">
            <div className="flex flex-col gap-1">
              <p className="mt-1">Расписание:</p>
              <p className="font-light">ВТ 10:00 Шат-чакра-йога</p>
            </div>
            <div className="flex gap-1 mt-1">
              <p className="">Контакты:</p>
              <a href="whatsapp://send?phone=79266260215"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsappSquare className="size-6 text-green-400" />
              </a>
              <a href="https://t.me/Arati_108"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram className="size-6 text-sky-500" />
              </a>
            </div>

          </MyAccordion>

          <MyAccordion title="Тарини" className="w-full flex flex-col text-sm bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-md p-2">
            <div className="flex flex-col gap-1">
              <p className="mt-1">Расписание:</p>
              <p className="font-light">ЧТ 10:00 Йога сиддхов</p>
              <p className="font-light">ЧТ 14:00 Пранавидья</p>
            </div>
            <div className="flex gap-1 mt-1">
              <p className="">Контакты:</p>
              <a href="whatsapp://send?phone=79154779637"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsappSquare className="size-6 text-green-400" />
              </a>
              <a href="https://t.me/om_tarini"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram className="size-6 text-sky-500" />
              </a>
            </div>
          </MyAccordion>

          <MyAccordion title="Мадхаваприя" className="w-full flex flex-col text-sm bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-md p-2">
            <div className="flex flex-col gap-1">
              <p className="mt-1">Расписание:</p>
              <p className="font-light">ПТ 10:00 Йога сиддхов</p>
            </div>
            <div className="flex gap-1 mt-1">
              <p className="">Контакты:</p>
              <a href="whatsapp://send?phone=79852597978"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsappSquare className="size-6 text-green-400" />
              </a>
              <a href="https://t.me/margo9978"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram className="size-6 text-sky-500" />
              </a>
            </div>
          </MyAccordion>

          <MyAccordion title="Запись на пуджу" className="w-full flex flex-col text-sm bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-md p-2">
            <div className="flex flex-col gap-1">
              <p className="mt-1">Расписание:</p>
              <p className="font-light">ПН 12:00 Утрення пуджа Даттатрее</p>
              <p className="font-light">ПН 19:00 Вечерняя пуджа Шиве</p>
              <p className="font-light">ВТ 11:30 Утрення пуджа Даттатрее</p>
              <p className="font-light">ВТ 19:00 Вечерняя пуджа Даттатрее</p>
              <p className="font-light">СР 12:00 Утрення пуджа Даттатрее</p>
              <p className="font-light">СР 19:00 Вечерняя пуджа Вишну</p>
              <p className="font-light">ЧТ 11:30 Утрення пуджа Даттатрее</p>
              <p className="font-light">ЧТ 19:00 Вечерняя пуджа Гуру</p>
              <p className="font-light">ПН 11:30 Утрення пуджа Даттатрее</p>
              <p className="font-light">ПН 19:00 Вечерняя пуджа Шакти</p>
            </div>
            <div className="flex gap-1 mt-1">
              <p className="">Контакты:</p>
              <a href="whatsapp://send?phone=79852191619"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsappSquare className="size-6 text-green-400" />
              </a>
              <a href="https://t.me/Shartatiana"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram className="size-6 text-sky-500" />
              </a>
            </div>
          </MyAccordion>

        </div>

        <span className="mt-1 text-xs inline-flex gap-1 text-gray-700 dark:text-gray-300"><BsExclamationTriangle className="text-amber-400 dark:text-amber-200" />В сообщении обязательно укажите время и день занятия!</span>
      </>



      <h3 className="textColor font-medium text-base my-1 mt-5 md:mt-5 lg:mt-10 text-gray-700 dark:text-gray-100">Краткое описание практик</h3>
      <div className="w-full flex flex-col gap-2">

        <MyAccordion title='Хатха йога' className="w-full flex flex-col text-sm bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-md p-2">
          <p className="mt-1">Хатха йога — это древняя индийская духовная практика, являющаяся фундаментальной и самой популярной в мире системой йоги.
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

        <MyAccordion title='Кундалини йога' className="w-full flex flex-col text-sm bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-md p-2">
          <p className="mt-1">Кундалини йога — это такой вид йоги, посредством которой мудрецы древности достигали совершенства. Её главная цель — пробудить дремлющую в каждом человеке энергию Кундалини и поднять её через все энергетические центры (чакры) для достижения высшего состояния сознания.
          </p>
          <p className="mt-1">В соответствии с нашим Учением, в основании позвоночника (в области муладхара чакры) находится свёрнутая в три с половиной оборота космическая энергия, символически изображаемая в виде змеи. Это Кундалини-шакти — наша нераскрытая духовная потенция. Задача практики — «разбудить эту змею» и, поднимая её по центральному энергетическому каналу (сушумна), соединить с высшим сознанием (Шивой) в области макушки головы (сахасрара-чакры). Это соединение приводит к полной трансформации сознания и просветлению.</p>
          <p className="mt-1">Ключевые цели Кундалини йоги:<br />
            · Пробуждение энергии Кундалини.<br />
            · Укрепление нервной и эндокринной систем для того, чтобы тело могло выдержать подъём мощной энергии.<br />
            · Расширение сознания и обретение внутренней ясности.<br />
            · Избавление от внутренних ограничений и подсознательных блоков.<br />
            · Обретение жизненной силы, целостности и связи со своим «Высшим Я».<br />
          </p>
        </MyAccordion>

        <MyAccordion title='Шат-чакра-йога' className="w-full flex flex-col text-sm bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-md p-2">
          <p className="mt-1">ШАТ-ЧАКРА-ЙОГА —  это практика, направленная на очищение и активацию шести основных чакр человека, расположенных вдоль позвоночника.
          </p>
          <p className="mt-1">Основная цель — достижение баланса и гармонии через работу с этими энергетическими центрами, что включает в себя физические позы, дыхательные техники и медитации. Практикуется в стиле Кундалини йоги.
          </p>
          <p className="mt-1">Практикуется в стиле Кундалини йоги.
            Вся вселенная состоит из вращающихся колес энергии. Цветы, ветви деревьев, планеты, люди - все мы сделаны из маленьких колес, которые крутятся внутри. Все мы находимся на большом колесе Земли, которая вращается по своей орбите в космосе.
          </p>
          <p className="mt-1">И в глубине нас вращаются семь энергетических центров, которые похожи на колеса. Они называются ЧАКРАМИ. Вместе семь чакр образуют формулу единства, которая объединяет РАЗУМ , ТЕЛО и ДУХ.
          </p>
          <p className="mt-1">О чакрах как о духовных центрах сознания упоминается в йогических упанишадах (примерно 600 год до нашей эры) и позже в Йога Сутре Патанджали (примерно 200 год до нашей эры).
          </p>
          <p className="mt-1">Вся совокупность чакр формирует в нашем теле вертикальный столб, который называется СУШУМНА. Он является центральным каналом, соединяя чакры. Можно назвать «скоростным шоссе» по которому движется энергия.
            Каждую чакру можно представить как компакт-диск, на котором записана программа, отвечающая за определенную часть нашей жизни. И от того, что мы создаем, зависит то, что мы получаем, и поэтому нам следует работать над нашими чакрами , очищать их от устаревших, испорченных, негативных программ, которые могут мешать нам в жизни.
          </p>
          <p className="mt-1">Во время Шат-Чакра-Йоги:<br />
            · просыпается мудрость чакр<br />
            · пробуждается энергия и активность<br />
            · увеличивается концентрация<br />
            · восстанавливается аура<br />
            · ум приходит к гармонии и спокойствию<br />
            · просыпается творчество и интуиция<br />
            · растет воля и самоконтроль<br />
            · тело становится сильным<br />
            · происходит оздоровление<br />
            · сохраняется  молодость<br />
            · продлевается жизнь<br />
            · изменяется наше сознание и мир<br />
          </p>
        </MyAccordion>

        <MyAccordion title='Йога сиддхов' className="w-full flex flex-col text-sm bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-md p-2">
          <p className="mt-1">Йога сиддхов — это мощная и трансформационная духовная практика. Сочетает в себе элементы хатха, мантра, кундалини и раджа йоги.
          </p>
          <p className="mt-1">Основные практики:<br />
            · Асаны, пранаямы, крийи.<br />
            · Практика очищения с 21 ОМ.<br />
            · Мантры.<br />
            · Шанти карма садхана.<br />
            · Элементы шат-чакра-йоги.<br />
            · Медитация Чандали.<br />
            · Медитация на дыхании.<br />
            · Медитация в ходьбе.<br />
            · Медитация 4-х бесконечных состояний: любовь, сострадание, радость, равностность (4БСБ).<br />
            · Медитация Махашанти.<br />
          </p>
        </MyAccordion>

        <MyAccordion title='Сутра' className="w-full flex flex-col text-sm bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-md p-2">
          <p className="mt-1">Сутра — это утренняя пуджа в традиции Адвайта сиддхов.
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

        <MyAccordion title='Бхаджан Мандала' className="w-full flex flex-col text-sm bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-md p-2">
          <p className="mt-1">Бхаджан Мандала — это вечерняя пуджа в нашей традиции.
          </p>
          <p className="mt-1">
            В зависимости от дня недели выполняются разные практики:<br />
            · Понедельник — пуджа Шиве для достижения успеха в аскетичных садханах.<br />
            · Вторник — пуджа Даттатрее для углубления недвойственного воззрения и постижения Высшей реальности.<br />
            · Среда — пуджа Вишну для поддержки со стороны Высших сил в относительном измерении и утверждении себя в саттвичных энергиях<br />
            · Четверг — пуджа Гуру для укрпеления связи с коренным Учителям, парам-гуру Брахманандой и другими Учителями традиции сиддхов.<br />
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

      <div className="w-full flex justify-center">
        <div className="mt-5 md:mt-5 lg:mt-10 flex flex-row items-center gap-1 border px-8 py-4  rounded-sm text-white dark:text-white bg-red-500 border-white dark:border-slate-800 hover:bg-gray-50 hover:text-red-500 hover:border-red-500 text-lg font-medium text-center">
          <Link href="/contacts/#address">
            Как до нас добраться
          </Link>
          <IoNavigateSharp />
        </div>
      </div>

    </Container >
  )
}

export default page