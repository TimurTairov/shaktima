import type { Metadata } from "next";
import { Container } from "@/components/Container";
import Image from 'next/image'
import Link from 'next/link'
import maheshvari from "@/public/hero/Без имени-1.jpg"
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Приезд Махешвари Гири в Москву",
  description: "Мероприятия с саньяси (монахиней) традиции Адвайта сиддхов Махешвари Гири",
};

const page = () => {
  return (
    <Container>

      <div className="flex flex-wrap justify-between">
        <div className="flex items-center justify-center w-full lg:w-5/12">
          <div className="flex flex-col justify-between pb-10 md:pb-0">
            <h1 className="w-full text-center pb-2 lg:pb-5  text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight xl:leading-tight dark:text-white">
              Приезд Махешвари в Москву
            </h1>
            <p className="text-left md:text-center  py-2 lg:py-5 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
              Пранавидья, передача в метод управления энергией
            </p>
            <p className="text-left md:text-center  py-2 lg:py-5 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
              Хома Шри Дурге
            </p>
            <p className="text-left md:text-center  py-2 lg:py-5 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
              3-х дневный зачетный ритрит по практике безусловной любви
            </p>

            <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col justify-center  space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfVJIxf0NCLn38HOdNT0oOjVJyCVlHTZelZ6dEGwQhY0Sk7gw/viewform?usp=header"
                target="_blank"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md "
              >
                Зарегистрироваться
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-6/12">
          <Image
            src={maheshvari}
            className="w-full h-auto rounded-md"
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>

      <SectionTitle title="Мероприятия с Махешвари Гири">
        <div className="w-full flex justify-center">
          <div className="max-w-8xl">
            <p className="text-start w-full pt-3 pb-1 text-base font-bold md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              1. 23 апреля 19-00 ПРАНАВИДЬЯ, управление энергией: передача в метод «Очищение каналов веером и палочками».
            </p>
            <p className="text-start pt-3 pb-1 text-base font-bold md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              В программе:
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              - Беседа о пране и способах ее накопления.
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              - Пранавидья (цигун) - поза дерева (столб) и обрамляющие практики.
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              - Передача в практику очищение каналов веером и палочками.
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              - Даосский метод, позволяющие легко и эффективно очищать постоянно забивающиеся поверхностные и глубинные каналы.
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Чистые каналы – это свободно циркулирующая энергия, а значит – здоровье и избыток жизненной силы, который мы можем направит на духовное продвижение по бесконечно манящему Пути свободы…
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              К передачи нужно определенная подготовка, поэтому благоприятно зарегистрироваться заранее
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Возможно ОНЛАЙН участие. По онлайн участию всё вопросы к
              <a href="https://t.me/Natalia_Nandayanti" target="_blank" className="mx-1 text-indigo-500">
                Nandayanti
              </a>
              (Телеграмм)
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              <b>Рекомендованные подношения:</b> от 1800 руб
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Бамбуковые палки для массажа в подарок
            </p>
            <p className="text-start mt-7 py-1 text-base font-bold md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              2. 24 апреля 10-00 Хома Шри Дурге
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Не так давно прошел Весенний Наваратри и, сейчас, когда благословения Деви ощущаются во всей полноте, мы проведем хому Дурге, с наварна-мантрой почитания 9 аспектов ее проявлений,
              с санкальпой на: «Призывание Милости Богини Ади Шакти, раскрытие и усиление нашей веры и преданности, обретение истинного духовно опыта, устранение влияния негативных карм и дурных привычек»
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Возможно участие несамайных. Условие участия – подписание небольших этических правил (яма-нияма), и принятие обязательств их соблюдения в день ритуала.
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Можно присоединиться он-лайн или через Санкальпу (заложение вашего намерения на ритуале)
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              <b>Рекомендованные подношения:</b> от 1800 руб
            </p>
            <p className="text-start py-1 mt-7 text-base font-bold md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              3. 25-27 апреля – 3-х дневный зачетный ритрит по практике безусловной любви (4 БСБ). ОН-ЛАЙН
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              «4 Бесконечных с годами должны все больше и больше становиться вашей сущностью. Они должны вытеснить привычные шаблонные кармы ума, например, тенденцию гневаться, тенденцию раздражаться, привязываться, ревновать, соперничать, язвить, то есть любые несаттвичные тенденции, должны быть заменены состоянием безусловной любви.
              4 бесконечных это основа вашей будущей ауры, расширенной чистой ауры в качестве божества. Такая аура называется «аура лока».Как боги имеют лучезарное сияние, исходящее из их тонких тел на тысячи километров, так и вы должны обрести такое сияние благодаря практике Безусловной любви».
              Шри Гуру Свами Вишнудевананда Гири
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              На ритрите будут переданы методы Гуру в 4 БСБ уровня сутры, тантры и Аннутара тантры.
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Ритрит будет проходить «в живую» в Подмосковье (всё места заняты) , и онлайн (места есть).
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              К практикам можно присоединяться в режиме семинара – с посещением избранных сессий, ведь нарабатывать и закрепляться в этом Мета-состоянии – нелишне никому из нас.
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              В режиме семинара (офлайн или онлайн) также могут присоединяться несамайные, с принятием этических принципов йоги на время практик.
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              <b>Рекомендованные подношения за он-лайн участие:</b> 20 евро за 1 день
            </p>
            <p className="text-start py-1 text-base md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              <b>PS:</b> Если у Вас нет возможности внести указанную сумму подношений, но вы хотите участвовать - напишите, пожалуйста, нам.
            </p>
          </div>
        </div>

      </SectionTitle>

      <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col justify-center  space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfVJIxf0NCLn38HOdNT0oOjVJyCVlHTZelZ6dEGwQhY0Sk7gw/viewform?usp=header"
          target="_blank"
          className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md "
        >
          Зарегистрироваться
        </Link>
      </div>
    </Container>
  )
}

export default page