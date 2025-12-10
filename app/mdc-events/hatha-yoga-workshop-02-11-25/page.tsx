import type { Metadata } from "next"
import { Container } from "@/components/Container"
import { SectionTitle } from "@/components/SectionTitle"
import Image from 'next/image'
import yoga from "@/public/mdc-events/yoga.webp"
import yogaAsana from "@/public/svg/yoga-asana2.svg"
import tirthadeva from "@/public/mdc-events/tirthadeva.webp"
import asana2 from '@/public/svg/Yoga SVG/1801507.svg'
import asana1 from '@/public/svg/Yoga SVG/2029430.svg'
import asana3 from '@/public/svg/Yoga SVG/3176805.svg'
import asana4 from '@/public/svg/Yoga SVG/3394168.svg'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";
import { Benefits } from "@/components/Benefits";
import { benefitOne, benefitTwo } from "@/components/data";
import { GiHealthIncrease } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { TbHealthRecognition } from "react-icons/tb";
import { FaOm } from "react-icons/fa6";
import Link from "next/link"

export const metadata: Metadata = {
  title: "Семинар по хатха йоге",
  description: "Практический семинар по хатха йоге в ДЦ ШактиМа 2 ноября (воскресение) в 11:00",
};


const page = () => {
  return (
    <>
      <Container className="flex flex-wrap justify-between">
        <div className=" flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 lg:h-3/5 flex flex-col justify-between">
            <h1 className="w-full text-center text-balance text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-4xl 2xl:text-5xl xl:leading-tight dark:text-white textColor">
              Семинар по ХАТХА йоге
            </h1>
            <p className="w-full text-center text-balance py-5 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Откройте для себя гармонию и созерцательное присутствие в практике хатха йоги. Присоединяйтесь к сообществу, которое стремится к гармонии, росту и внутреннему балансу.
            </p>
            <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col space-y-3 sm:space-x-4 sm:space-y-0 items-center justify-center  sm:flex-row">
              <a
                href="https://wa.me/79672067710?text=Ом+намасте%2C+хочу+записаться+к+вам+на+семинар+по+хатха+йоге."
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md ">
                Записаться на семинар
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={yoga}
              width="855"
              height="638"
              className={"object-cover w-full h-auto rounded-md border shadow-lg"}
              alt="Hero Illustration"
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>

        <p className="mt-10"></p>
        <SectionTitle preTitle="программа семинара" title="Cеминар будет состоять из двух частей">
          <h3 className="text-left font-semibold text-xl md:text-2xl mt-5 md:mt-7">1 часть - Практика</h3>
          <p className="text-left py-2">Комплекс асан для расслабления и подготовки ума и тела к медитации. Занятие подойдёт для всех уровней подготовки и направлено на раскрытие гибкости тела, улучшение дыхания и укрепление внутренней гармонии.
          </p>
          <h3 className="text-left font-semibold text-xl md:text-2xl mt-5 md:mt-7">2 часть - Теория</h3>
          <p className="text-left py-2">Теория хатха йоги. История возникновения и приход йоги на Запад. Традиционные и современные школы йоги, их подходы и отличия. Гармония в практике и способы её достижения. Созерцание в асанах, что это такое и зачем это нужно. А также многое другое.
          </p>
        </SectionTitle>

        <SectionTitle preTitle="profit" title="Что Вы получите на семинаре">
          <div className="flex justify-center">
            <div className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-5">
              <div className="flex flex-col items-start justify-start">
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 lg:grid-cols-2">

                  <div className="flex items-start gap-5">
                    <Image src={asana1} alt="" className=" shrink-0 w-14 h-14 text-indigo-500 " />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-left">
                        Улучшение гибкости, осанки и подвижности суставов
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <Image src={asana2} alt="Йога асана" className="shrink-0 w-14 h-14" />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-left">
                        Повышение физического здоровья, тонуса и эластичности мышц
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <Image src={asana3} alt="" className=" shrink-0 w-14 h-14 text-indigo-500 " />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-left">
                        Развитие осознанности, навыков концентрации и бережности к себе
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <Image src={asana4} alt="" className=" shrink-0 w-14 h-14 text-indigo-500" />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-left">
                        Получение новых знаний и поддерживающего окружения единомышленников
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </SectionTitle>

        <div className="mt-10 lg:mt-20 flex flex-wrap flex-row-reverse justify-between">
          <div className="flex items-center justify-center w-full lg:w-6/12">
            <div className="pb-10">
              <h2 className="w-full text-center text-xl md:text-3xl xl:text-4xl  font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight xl:leading-tight dark:text-white">
                Информация о ведущем
              </h2>
              <p className="w-full pb-1 pt-1 mt-10 lg:mt-16 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
                Практикует йогу более 15 лет
              </p>
              <p className="w-full py-1 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
                Преподает хатха йогу более 10 лет
              </p>
              <p className="w-full py-1 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
                При обучении на преподавателя йоги прошел более 50 семинаров и около 20 ритритов
              </p>
              <p className="w-full py-1 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
                В традиции Адвайта сиддхов с 2021 года
              </p>
              <p className="w-full py-1 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
                Является официальным инструктором всемирной общины Санатана Дхармы
              </p>
              <p className="w-full py-1 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
                Проводит семинары и ритриты ВОСД
              </p>
              <p className="w-full py-1 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
                Духовное имя — Тиртхадева
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-6/12">
            <Image
              src={tirthadeva}
              className="object-cover w-full lg:w-4/5 h-auto rounded-md shadow-lg"
              alt="Hero Illustration"
              loading="lazy"
            //placeholder="blur"
            />
          </div>
        </div>


        <p className="mt-10"></p>
        <SectionTitle
          preTitle="семинар йога сиддхов"
          title="Детали мероприятия"
        >
          <div className="flex justify-center">
            <div className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-5">
              <div className="flex flex-col items-start justify-start">
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 lg:grid-cols-2">

                  <div className="flex items-start gap-5">
                    <IoCalendarNumberOutline className="shrink-0 w-10 h-10 text-indigo-500" />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-2xl text-indigo-500  font-semibold">Когда</p>
                      <p className="text-left">В воскресение 2 ноября. Начало семинара в 11-00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <LuCalendarHeart className=" shrink-0 w-10 h-10 text-indigo-500 " />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-2xl text-indigo-500  font-semibold">Формат</p>
                      <p className="text-left">
                        Практика будет длится около 5-6 часов.
                        Специальная подготовка не требуется.
                        Форма одежды - спортивная.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <IoLocation className=" shrink-0 w-10 h-10 text-indigo-500 " />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-2xl text-indigo-500  font-semibold">Где</p>
                      <p className="text-left">
                        Дхарма центр ШактиМА. <Link href="/contacts/#address">Нижняя Красносельская улица, 40/12к2</Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <BiDonateHeart className=" shrink-0 w-10 h-10 text-indigo-500" />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-2xl text-indigo-500  font-semibold">Ценность</p>
                      <p className="text-left">2800₽. Реквизиты для перевода на карту по номеру телефона: +79672067710 Т-банк (Тимур)
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </SectionTitle>

        <div className="flex justify-center mt-10">
          <a
            href="https://wa.me/79672067710?text=Ом+намасте%2C+хочу+записаться+к+вам+на+семинар+по+хатха+йоге."
            target="_blank"
            rel="noopener"
            className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md" >Записаться на семинар</a>
        </div>


      </Container>
    </>
  )
}

export default page