import type { Metadata } from "next";
import { Container } from "@/components/Container";
import Image from 'next/image'
import Link from 'next/link'
import anandalila from "@/public/hero/anandalila.webp"
import anandalila2 from "@/public/hero/anandalila2.webp"
import satsang from "@/public/hero/satsang.jpeg"
import seminar from "@/public/hero/seminar.jpeg"
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Приезд Анандалила Гири в Москву",
  description: "МАХАМАНДАЛЕШВАР СВАМИНИ АНАНДАЛИЛА ГИРИ В МОСКВЕ",
};


const page = () => {
  return (
    <Container>

      <div className="flex flex-wrap justify-between">
        <div className="flex items-center justify-center w-full lg:w-6/12">
          <div className="flex flex-col justify-between pb-10">
            <h1 className="textColor w-full text-center pb-2 lg:pb-5  text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight xl:leading-tight">
              МАХАМАНДАЛЕШВАР СВАМИНИ АНАНДАЛИЛА ГИРИ В МОСКВЕ
            </h1>
            <div className="text-left md:text-center  py-2 lg:py-5 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
              <b>29 мая</b> — Открытый сатсанг «Ценность духовного пути. Драгоценность человеческого рождения»
            </div>
            <div className="text-left md:text-center  py-2 lg:py-5 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
              <b>30, 31 мая и 1 июня</b> — Трёхдневный семинар «20 крий кундалини йоги»
            </div>


            <div className="mt-5 md:mt-10 lg:mt-12 flex flex-col justify-center  space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSelhE4QibXkDf9KgzlIfjcGXxYGZFg-u7lDrFPRq7AkvVn-QQ/viewform"
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
            src={anandalila}
            className="w-full lg:w-4/5 h-auto rounded-md"
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="mt-10 lg:mt-20 flex flex-wrap flex-row-reverse justify-between">
        <div className="flex items-center justify-center w-full lg:w-6/12">
          <div className="pb-10">
            <h2 className="w-full text-center text-xl md:text-3xl xl:text-4xl  font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight xl:leading-tight dark:text-white">
              МАХАМАНДАЛЕШВАР СВАМИНИ АНАНДАЛИЛА ГИРИ
            </h2>
            <p className="w-full pb-1 pt-1 mt-10 lg:mt-16 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
              Первая европейская женщина, получившая статус «Махамандалешвар»
            </p>
            <p className="w-full py-1 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
              Более 20 ретритов в уединении, в том числе годовой и несколько «тёмных»
            </p>
            <p className="w-full py-1 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
              Практики и обучение в Индии и Непале, взаимодействие с ведущими мастерами
            </p>
            <p className="w-full py-1 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
              Многолетний опыт преподавания крий кундалини йоги и духовных дисциплин
            </p>
            <p className="w-full py-1 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
              Признанная наставница для искателей по всему миру, делящаяся знаниями в духе традиции Пратьякша Адвайта
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-6/12">
          <Image
            src={anandalila2}
            className="object-cover w-full lg:w-4/5 h-auto rounded-md"
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>


      <SectionTitle preTitle="Сатсанг со Свамини АнандаЛилой" title="Ценность духовного пути. Драгоценность человеческого рождения">

        <div className="flex flex-wrap flex-row justify-between">
          <div className="flex items-center justify-center w-full lg:w-6/12">
            <div className="pb-10">

              <div className="w-full text-left flex flex-col pb-1 pt-1 mt-10 lg:mt-16 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
                <b>Уникальная возможность</b>
                <p>задать вопросы и услышать наставления от практика, сумевшего пройти глубокую трансформацию</p>
              </div>
              <div className="w-full text-left flex flex-col pb-1 pt-1 mt-10 lg:mt-16 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
                <b>Пространство для обсуждения</b>
                <p>самопознания и укрепления мотивации на духовном пути</p>
              </div>
              <div className="w-full text-left flex flex-col pb-1 pt-1 mt-10 lg:mt-16 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
                <b>Место и время</b>
                <p>29 мая 19-00 г. Москва</p>
                <p>Встреча состоится в центре города, точное место уточняется и будет сообщено после регистрации лично</p>
                <p>С собой: осанка, улыбка и хорошее настроение.</p>
                <p>Благоприятно прийти на встречу в светлой удобной одежде</p>
              </div>

            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-6/12">
            <Image
              src={satsang}
              className="object-cover w-full lg:w-4/5 h-auto lg:h-4/5 rounded-md"
              alt="Hero Illustration"
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>

      </SectionTitle>

      <SectionTitle preTitle="Трёхдневный семинар" title="«20 крий кундалини йоги»">

        <div className="flex flex-wrap flex-row-reverse justify-between">
          <div className="flex items-center justify-center w-full lg:w-5/12">
            <div className="pb-10">

              <div className="w-full text-left flex flex-col pb-1 pt-1 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">

              </div>
              <div className="w-full text-left flex flex-col pb-1 pt-1 mt-5 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
                Глубокое погружение в практики для пробуждения жизненной энергии и укрепления духовной дисциплины.
                <br />
                <br />
                Исследование тонких аспектов сознания, раскрытие внутренних ресурсов и формирование прочной основы для дальнейшего самосовершенствования и гармоничной жизни.
              </div>
              <div className="w-full text-left flex flex-col pb-1 pt-1 mt-5 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
                <b>Семинар пройдет с 30 мая по 1 июня. Начало занятий:</b>
                <p>30 мая - 19:00</p>
                <p>31 мая - 10:00</p>
                <p>1 июня - 10:00</p>
                <p>Длительность ~ 4 часа.</p>
              </div>

            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-6/12">
            <Image
              src={seminar}
              className="object-cover w-full h-auto  rounded-md"
              alt="Hero Illustration"
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>

      </SectionTitle>

      <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col justify-center  space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSelhE4QibXkDf9KgzlIfjcGXxYGZFg-u7lDrFPRq7AkvVn-QQ/viewform"
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