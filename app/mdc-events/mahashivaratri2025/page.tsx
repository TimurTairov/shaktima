import type { Metadata } from "next";
import { Container } from "@/components/Container";
import Image from 'next/image'
import Link from 'next/link'
import mahashivaratri2025 from "@/public/mdc-events/mahashivaratri2025-2.webp"
import shiva from "@/public/hero/shiva.webp"
import { SectionTitle } from "@/components/SectionTitle";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";

import { FaOm } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import { TbYoga } from "react-icons/tb";
import { GiHealthIncrease } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { TbHealthRecognition } from "react-icons/tb";
import { FaHandsPraying } from "react-icons/fa6";

import { FaArrowDown } from "react-icons/fa6";

import MahaShivaRatriFoto from "@/components/MahaShivaRatriFoto";

export const metadata: Metadata = {
  title: "МахаШиваРатри 2025 в Москве",
  description: "МахаШиваратри 2025: Священная ночь трансформации и вдохновения",
};


const page = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center justify-center w-full lg:w-5/12">
          <div className="pb-10">
            <h1 className="w-full text-center lg:text-start py-5 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight xl:leading-tight dark:text-white">
              МахаШиваРатри
            </h1>
            <p className="w-full text-center lg:text-start py-5 text-lg leading-normal text-gray-500 lg:text-lg xl:text-2xl dark:text-gray-300">
              Священная ночь Шивы. Ночь трансформации и вдохновения.
            </p>
            <p className="w-full text-center lg:text-start py-5 text-lg leading-normal text-gray-500 lg:text-lg xl:text-2xl dark:text-gray-300">
              26 февраля, Москва, пространство "Вкус и цвет" в 3-х минутах от метро Дмитровская. Начало в 21:00.
            </p>
            <p className="w-full text-center lg:text-start py-5 text-lg leading-normal text-gray-500 lg:text-lg xl:text-2xl dark:text-gray-300">
              Откройте для себя атмосферу древнего праздника, наполненного мудростью и глубокой энергией. Вас ждут ритуалы, практики и вдохновение.
            </p>

            <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col justify-center lg:justify-start space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSf_G9HpJKL2HtcpxARh3lmpui9LYiq8kyhWpg2sXVYenD17vQ/viewform"
                target="_blank"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md "
              >
                Записаться на МахаШиваРатри
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-6/12">
          <Image
            src={mahashivaratri2025}
            width="855"
            height="638"
            className="object-cover w-full h-auto rounded-md"
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="mt-10 lg:my-20 flex flex-wrap flex-row-reverse justify-between">
        <div className="flex items-center justify-center w-full lg:w-5/12">
          <div className="pb-10">
            <h2 className="w-full text-center lg:text-start text-2xl md:text-3xl xl:text-4xl  font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight xl:leading-tight dark:text-white">
              Великая ночь Шивы
            </h2>
            <p className="w-full pt-5 leading-normal text-gray-500 lg:text-base  xl:text-2xl dark:text-gray-300">
              МахаШиваратри — это одна из самых почитаемых ночей в году, посвящённая Шиве, великому йогину и разрушителю иллюзий. В нашей традиции эта ночь считается временем, когда энергия вселенной находится в состоянии максимального равновесия, что даёт уникальную возможность для духовного роста.
            </p>
            <p className="w-full pb-1 pt-3 text-lg leading-normal text-gray-500 lg:text-base xl:text-2xl dark:text-gray-300">Эта ночь объединяет три главных аспекта практики:</p>
            <p className="w-full py-1 text-lg leading-normal text-gray-500 lg:text-base xl:text-2xl dark:text-gray-300"> <b>Созерцание (Дхьяна):</b> глубокие медитации, раскрывающие внутреннюю тишину и ясность.</p>
            <p className="w-full py-1 text-lg leading-normal text-gray-500 lg:text-base xl:text-2xl dark:text-gray-300"><b>Почитание (Пуджа):</b> священные ритуалы, которые направляют внимание к высшему.</p>
            <p className="w-full py-1 text-lg leading-normal text-gray-500 lg:text-base xl:text-2xl dark:text-gray-300"><b>Постижение (Адвайта):</b> единство с источником всего сущего.</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-6/12">
          <Image
            src={shiva}
            width="855"
            height="638"
            className="object-cover w-full h-auto rounded-md"
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>

      <SectionTitle preTitle="profit" title="Что Вам даст МахаШиваРатри?">
        <div className="flex justify-center">
          <div className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-5">
            <div className="flex flex-col items-start justify-start">
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 lg:grid-cols-2">

                <div className="flex items-start gap-5">
                  <FaHandsPraying className=" shrink-0 w-14 h-14 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-left">
                      Благославение и Ануграха шакти от Махадева
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <TbHealthRecognition className=" shrink-0 w-14 h-14 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-left">
                      Получение новых знаний и поддерживающего окружения единомышленников
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <RiMentalHealthFill className=" shrink-0 w-14 h-14 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-left">Улучшение физического и психического здоровья
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <FaOm className=" shrink-0 w-14 h-14 text-indigo-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-left">
                      Возможность приобщиться к духовной традиции йоги
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </SectionTitle>

      <div className="mt-10 lg:my-20 w-full flex justify-center">
        <div className="max-w-6xl">
          <h5 className="w-full text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight xl:leading-tight dark:text-white ">
            Программа МахаШиваРатри
          </h5>
          <p className="w-full pt-5 pb-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Праздник начнётся вечером 26 февраля и будет длиться всю ночь, наполняя вас вдохновением и энергией. Вас ждёт насыщенная программа, включающая:
          </p>

          <p className="pt-3 pb-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"><b>21:00</b> — Сбор гостей. Ритуал "Санкальпа Видья" — создание намерения на год.</p>
          <p className="py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>22:00</b> — Вступительное слово и ритуалы открытия (Ганеша и Дурга арати).</p>
          <p className="py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>23:00</b> — Первая пуджа (Саттва): настройка на внутреннюю гармонию.</p>
          <p className="py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>00:00</b> — Практика с монахиней Махешвари.</p>
          <p className="py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>01:00</b> — Вторая пуджа (Раджас): раскрытие силы действия.</p>
          <p className="py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>02:00</b> — Шива Пати: танцы и мантры в честь Шивы.</p>
          <p className="py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>03:30</b> — Третья пуджа (Тамас): путь через покой и тишину.</p>
          <p className="py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>04:30</b> — Практики йоги (Сурья Намаскара и Хатха-йога).</p>
          <p className="py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>05:30</b> — Четвёртая пуджа (Абсолют): завершение в энергии Шивы.</p>
          <p className="pt-1 pb-3  text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>07:00</b> — Утреннее угощение и завершение праздника.</p>
          <p className="py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>Дополнительно:</b> на протяжении всего праздника будет работать чайный стол с мастерами чайной церемонии. Также у вас будет возможность: </p>
          <p className="py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            — Поучаствовать в стоянии на гвоздях cадху с опытными мастерами.
          </p>
          <p className="py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">— Записаться на индивидуальную встречу с монахом.</p>
          <p className="py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>Примечание:</b> расписание может незначительно изменяться в зависимости от хода мероприятия.</p>
        </div>
      </div>

      <SectionTitle
        preTitle="подготовка"
        title="Пост на МахаШиваРатри"
      >
        <p className="w-full text-start pt-5 pb-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
          Поздравляем Вас, что Вы решили принять участие в совместном праздновании Великой ночи Шивы – МахаШиваРатри! Воистину эта ночь способна изменить Вашу жизнь, если посвятить ее Шиве! Хотим рассказать Вам, как лучше подготовиться к этой ночи.
        </p>
        <p className="w-full text-start pt-5 pb-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
          На Махашиваратри принято поститься с утра до утра, то есть в нашем случае это с утра 26 февраля до рассвета 27 февраля. Пост может быть разным по вашему выбору:<br />
          <b>1.</b>	Полный пост (без воды и еды)<br />
          <b>2.</b>	Пост только на чистой воде<br />
          <b>3.</b>	Пост только на воде, соках, травяном чае<br />
          <b>4.</b>	Фрукты, ягоды<br />
          <b>5.</b>	Плюс овощи свежие, не термообработанные, молочные продукты<br />
          <b>6.</b>	Любая пища крофме зернобобовых (подсолнечное масло – зернобобовое!) и животных продуктов<br />
        </p>
        <p className="w-full text-start pt-5 pb-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
          Каждый последующий пункт включает предыдущие. Таким образом на уровне питания самый лёгкий пост — это пост наподобие поста
          в	Экадаши. Но не менее важны более тонкие уровни — максимальная осознанность и концентрация на почитании Шивы и практике.
        </p>
      </SectionTitle>


      <SectionTitle
        preTitle="санкальпа"
        title="Ритуал целеполагания"
      >
        <p className="w-full pt-5 pb-1 text-start text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
          Мы будем закладывать санкальпу (намерение) — ее стоит продумать заранее, чтобы не сочинять впопыхах. Благоприятно закладывать духовные санкальпы, а также вторую санкальпу на благо всех живых существ. Листы для санкальпы мы вам выдадим, а вот ручку лучше взять с собой (желательно абсолютно новую).
        </p>
        <p className="w-full pt-5 pb-1 text-start text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
          Также матаджи смогут начать пост 16 понедельников, если есть такое желание. Если будут вопросы об этом – можно задать заранее или в начале праздника/в перерывах.
        </p>
      </SectionTitle>


      <SectionTitle
        preTitle="Дресс-код"
        title="Что с собой взять на МахаШиваРатри?"
      >
        <p className="w-full pt-5 pb-1 text-start text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
          Удобная светлая одежда. Если у вас есть одежда специально для ритуальных практик, будет благоприятно взять ее. А также что-то удобное для участия в динамической медитации и Сурья Намаскар утром. Кроме того, благоприятно захватить с собой коврик, повязку на глаза, теплую кофту/палантин и теплые носки.
        </p>
        <p className="w-full pt-5 pb-1 text-start text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
          <b>Итак, что рекомендуется:</b><br />
          ✅ приходить в светлой удобной одежде<br />
          ✅ принести подношения (фрукты, вегетарианские сладости, лепестки, цветы, кроме синих)<br />
          ✅ держать пост в течение дня (можно пить воду и чай)<br />
          ✅ взять с собой чётки из рудракши для участия в мантра-джапе. Считается, что чтение мантр в ночь Шиваратри обладает невероятной силой.<br />
        </p>
        <p className="w-full pt-5 pb-1 text-start text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
          <b> ❗️Не рекомендуется:</b><br />
          Надевать металлические мирские украшения (серёжки, часы, цепочки и пр.), т.к. металл забирает энергию. Духовные украшения можно оставить на себе.
        </p>
        <p className="w-full pt-5 pb-1 text-start text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
          Пожалуйста, выспитесь накануне! Это важный пункт, так как наиболее благоприятно бодрствовать всю ночь!
        </p>
      </SectionTitle>

      <MahaShivaRatriFoto />

      <SectionTitle
        preTitle="Стоимость"
        title="Предпродажа билетов уже открыта!"
      >
        <p className="w-full pt-5 pb-1 text-start text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
          Рекомендуем оплатить участие заранее — это не только обеспечит ваше место на празднике, но и поможет покрыть важные организационные расходы:
          🏠 аренду пространства,
          🕉️ приезд монаха,
          🔥 подготовку всех необходимых элементов для проведения мероприятия.
        </p>

        <div className="flex justify-center">
          <div className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-5">
            <div className="flex flex-col items-start justify-start">
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 lg:grid-cols-2">

                <div className="flex items-start gap-5">
                  <IoCalendarNumberOutline className=" shrink-0 w-10 h-10 text-indigo-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Когда</p>
                    <p className="text-left">
                      <a href="/calendar">
                        В ночь с 26 на 27 февраля (со среды на четверг)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <LuCalendarHeart className=" shrink-0 w-10 h-10 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Формат</p>
                    <p className="text-left">
                      Практика длится всю ночь с 21:00 до 7:00 утра. 4.	Светлая/ритуальная одежда (пуджи) +
                      свободная одежда для технических практик (хатха йога, медитации).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <IoLocation className=" shrink-0 w-10 h-10 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Где</p>
                    <p className="text-left">

                      г. Москва,
                      ул. Большая Новодмитровская, д. 36, стр. 7, вход 1, Дизайн-завод «Флакон».
                      Вход со стороны Хлебзавод №9 от ст. м. Дмитровская

                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <BiDonateHeart className=" shrink-0 w-10 h-10 text-indigo-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Стоимость</p>
                    <div className="text-left">
                      ⏳ До 3 февраля: 4000 руб.<br />
                      📅 С 4 февраля по 25 февраля: 5000 руб.<br />
                      🚪 В день мероприятия: 6000 руб.<br />
                      ✨ Благотворительные подношения очень приветствуются 🙏🏻
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </SectionTitle>

      <SectionTitle
        preTitle="По всем вопросам можете обращаться к Татьяне "
        title="Контакты Татьяны"
      >
        <div className="flex flex-wrap gap-5">
          <Link
            href="http://t.me/shartatiana"
            target="_blank"
            className="px-3 py-2 text-xs text-center text-white bg-indigo-500 rounded-md "
          >
            Telegram
          </Link>
          <Link
            href="https://wa.me/message/PXESQR73QY3FE1"
            target="_blank"
            className="px-3 py-2 text-xs text-center text-white bg-indigo-500 rounded-md "
          >
            WhatsApp
          </Link>
        </div>
      </SectionTitle>


      <SectionTitle preTitle="регистрация" title="Зарегистрируйтесь на мероприятие по книпке ниже ⬇">

        <div className="flex flex-col justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSf_G9HpJKL2HtcpxARh3lmpui9LYiq8kyhWpg2sXVYenD17vQ/viewform"
            target="_blank"
            className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md "
          >
            Записаться на МахаШиваРатри 2025
          </Link>
        </div>

      </SectionTitle>


    </Container >
  )
}

export default page