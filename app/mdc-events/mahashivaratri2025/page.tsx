import type { Metadata } from "next";
import { Container } from "@/components/Container";
import Image from 'next/image'
import Link from 'next/link'
import mahashivaratri2025 from "@/public/mdc-events/mahashivaratri2025.jpg"
import shiva from "@/public/hero/shiva.jpg"



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
            <h1 className="w-full text-center lg:text-start text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight xl:leading-tight dark:text-white">
              МахаШиваРатри
            </h1>
            <p className="w-full text-center lg:text-start py-5 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Священная ночь Шивы. Ночь трансформации и вдохновения. 26 февраля, Москва, пространство "Вкус и цвет" в 3-х минутах от метро Дмитровская. Начало в 21:00. Описание: Откройте для себя атмосферу древнего праздника, наполненного мудростью и глубокой энергией. Вас ждут ритуалы, практики и вдохновение.
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
            <h2 className="w-full text-center lg:text-start text-2xl md:text-3xl lg:text-4xl  font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight xl:leading-tight dark:text-white">
              Великая ночь Шивы
            </h2>
            <p className="w-full text-center lg:text-start pt-5 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              МахаШиваратри — это одна из самых почитаемых ночей в году, посвящённая Шиве, великому йогину и разрушителю иллюзий. В нашей традиции эта ночь считается временем, когда энергия вселенной находится в состоянии максимального равновесия, что даёт уникальную возможность для духовного роста.
            </p>
            <p className="w-full text-center lg:text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">Эта ночь объединяет три главных аспекта практики:</p>
            <p className="w-full text-center lg:text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"> <b>Созерцание (Дхьяна):</b> глубокие медитации, раскрывающие внутреннюю тишину и ясность.</p>
            <p className="w-full text-center lg:text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"><b>Почитание (Пуджа):</b> священные ритуалы, которые направляют внимание к высшему.</p>
            <p className="w-full text-center lg:text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"><b>Постижение (Адвайта):</b> единство с источником всего сущего.</p>
            <p></p>
            <p></p>
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

      <div className="mt-10 lg:my-20 w-full flex justify-center">
        <div className="max-w-6xl">
          <h5 className="w-full text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight xl:leading-tight dark:text-white ">
            Программа МахаШиваратри
          </h5>
          <p className="w-full text-center lg:text-start pt-5 pb-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Праздник начнётся вечером 26 февраля и будет длиться всю ночь, наполняя вас вдохновением и энергией. Вас ждёт насыщенная программа, включающая:
          </p>

          <p className="text-start pt-3 pb-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"><b>21:00</b> — Сбор гостей. Ритуал "Санкальпа Видья" — создание намерения на год.</p>
          <p className="text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>22:00</b> — Вступительное слово и ритуалы открытия (Ганеша и Дурга арати).</p>
          <p className="text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>23:00</b> — Первая пуджа (Саттва): настройка на внутреннюю гармонию.</p>
          <p className="text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>00:00</b> — Практика с монахиней Махешвари.</p>
          <p className="text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>01:00</b> — Вторая пуджа (Раджас): раскрытие силы действия.</p>
          <p className="text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>02:00</b> — Шива Пати: танцы и мантры в честь Шивы.</p>
          <p className="text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>03:30</b> — Третья пуджа (Тамас): путь через покой и тишину.</p>
          <p className="text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>04:30</b> — Практики йоги (Сурья Намаскара и Хатха-йога).</p>
          <p className="text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>05:30</b> — Четвёртая пуджа (Абсолют): завершение в энергии Шивы.</p>
          <p className="text-start pt-1 pb-3  text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>07:00</b> — Утреннее угощение и завершение праздника.</p>
          <p className="text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>Дополнительно:</b> на протяжении всего праздника будет работать чайный стол с мастерами чайной церемонии. Также у вас будет возможность: </p>
          <p className="text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            — Поучаствовать в стоянии на гвоздях cадху с опытными мастерами.
          </p>
          <p className="text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">— Записаться на индивидуальную встречу с монахом.</p>
          <p className="text-start py-1 text-lg leading-normal text-balance text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            <b>Примечание:</b> расписание может незначительно изменяться в зависимости от хода мероприятия.</p>
        </div>
      </div>

    </Container>
  )
}

export default page