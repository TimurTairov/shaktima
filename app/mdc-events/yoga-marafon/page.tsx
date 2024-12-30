import type { Metadata } from "next"
import { Container } from "@/components/Container"
import { SectionTitle } from "@/components/SectionTitle"

import { FaOm } from "react-icons/fa6";
import { GiHealthIncrease } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { TbHealthRecognition } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import { TbYoga } from "react-icons/tb";

import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";

import Image from 'next/image'
import yogaMarafon from "@/public/hero/yoga-marafon.webp"
import rasp1 from '@/public/yoga-marafon/rasp1.webp'
import rasp2 from '@/public/yoga-marafon/rasp2.webp'

export const metadata: Metadata = {
  title: "Йога марафон",
  description: "В новый год с чистыми каналами",
};


const page = () => {
  return (
    <Container>
      <div className="flex flex-wrap py-10">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="w-full text-center lg:text-start text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Йога марафон
            </h1>
            <p className="w-full text-center lg:text-start py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              В новый год с чистыми каналами
            </p>
            <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col md:items-start space-y-3 sm:space-x-4 sm:space-y-0 items-center sm:flex-row">
              <a
                href="https://t.me/tedzhovati"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md "
              >
                Записаться на марафон
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src={yogaMarafon}
            width="855"
            height="638"
            className={'object-cover w-full h-auto rounded-md'}
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>

      <SectionTitle
        title="Марафон: в новый год с чистыми каналами"
        preTitle="с 3 по 17 января 2025 года"
      >
        <p className="py-4">Приглашаем всех желающих на 15-ти дневный цикл практик с опытными преподавателями и инструкторами ВОСД. В программе хатха йога, пранаямы, крийи и другие базовые практики с подробными объяснениями.</p>
      </SectionTitle>

      <div className="flex flex-col gap-5 lg:flex-row justify-around py-10">
        <div className="flex items-center justify-center w-full lg:w-5/12">
          <Image
            src={rasp1}
            width="855"
            height="638"
            className={'object-cover w-full h-auto rounded-md'}
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="flex items-center justify-center w-full lg:w-5/12">
          <Image
            src={rasp2}
            width="855"
            height="638"
            className={'object-cover w-full h-auto rounded-md'}
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>


      <SectionTitle preTitle="profit" title="Что Вам даст марафон?">
        <div className="flex justify-center">
          <div className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-5">
            <div className="flex flex-col items-start justify-start">
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 lg:grid-cols-2">

                <div className="flex items-start gap-5">
                  <GrYoga className=" shrink-0 w-14 h-14 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-left">
                      Чистота энергетических каналов (нади) и центров (чакр)
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
                  <GiHealthIncrease className=" shrink-0 w-14 h-14 text-indigo-500 " />
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

      <SectionTitle
        preTitle="йога марафон"
        title="Детали мероприятия"
      >
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
                        Каждое утро с 3 по 17 января
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <LuCalendarHeart className=" shrink-0 w-10 h-10 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Формат</p>
                    <p className="text-left">
                      Практика длится 1-1.5 часа. Форма одежды - свободная.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <IoLocation className=" shrink-0 w-10 h-10 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Где</p>
                    <p className="text-left">
                      <a href="/raspisanie">
                        Онлайн. Трансляции через Zoom.
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <BiDonateHeart className=" shrink-0 w-10 h-10 text-indigo-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Стоимость</p>
                    <p className="text-left">1800₽</p>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </SectionTitle>

      <div className="flex justify-center mt-10">
        <a
          href="https://t.me/tedzhovati"
          target="_blank"
          rel="noopener"
          className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md" >Записаться на марафон</a>
      </div>

    </Container >
  )
}

export default page