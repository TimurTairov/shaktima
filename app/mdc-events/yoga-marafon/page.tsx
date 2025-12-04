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
import yogaMarafon from "@/public/yoga-marafon/yoga-marafon.webp"
import rasp1 from '@/public/yoga-marafon/rasp1.webp'
import rasp2 from '@/public/yoga-marafon/rasp2.webp'
import { FaHandsPraying } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Йога марафон",
  description: "В новый год с чистыми каналами",
};


const page = () => {
  return (
    <Container>
      <div className="flex flex-wrap gap-5 lg:gap-0 py-10">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl h-[20rem] lg:h-full mb-8 flex flex-col justify-around">
            <h1 className="w-full text-center lg:text-start text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight textColor">
              Йога марафон
            </h1>
            <p className="w-full text-center lg:text-start text-lg leading-normal font-light text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              В новый год с чистыми каналами
            </p>
            <p className="w-full text-center lg:text-start text-lg leading-normal font-light text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Онлайн трансляции через <b>Zoom</b>
            </p>
            <p className="w-full text-center lg:text-start text-lg leading-normal font-light text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              с 15 по 28 декабря
            </p>
            <div className="w-full flex flex-col items-center sm:flex-row">
              <a
                href="https://t.me/indivarini"
                target="_blank"
                rel="noopener"
                // className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md "
                className="w-full px-8 py-4 text-lg font-medium text-center text-white dark:text-white bg-red-600 dark:bg-red-500 rounded-md "
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
            className={'object-cover w-full lg:w-auto lg:h-[36rem] rounded-md'}
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>

      <SectionTitle
        title="Марафон: в новый год с чистыми каналами"
        preTitle="с 15 по 28 декабря 2025 года"
      >
        <p className="py-4 font-light">Мы приглашаем Вас к участию в йога-марафоне, в котором будут подробно разобраны и разъяснены следующие темы и практики:
          методы шакти-янтры;
          хатха-йога;
          мудры и бандхи;
          пранаямы и крийи;
          очищающие техники йоги;
          управление энергией.</p>
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
                  <GrYoga className=" shrink-0 w-14 h-14 text-red-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-left font-light">
                      Чистота энергетических каналов (нади) и центров (чакр)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <TbHealthRecognition className=" shrink-0 w-14 h-14 text-red-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-left font-light">
                      Получение новых знаний и поддерживающего окружения единомышленников
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <FaHandsPraying className=" shrink-0 w-14 h-14 text-red-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-left font-light">Улучшение физического и психического здоровья
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <FaOm className=" shrink-0 w-14 h-14 text-red-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-left font-light">
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
                  <IoCalendarNumberOutline className=" shrink-0 w-10 h-10 text-red-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-red-500  font-semibold">Когда</p>
                    <div className="flex items-center gap-1 font-light">
                      Каждое утро с 15 по 28 декабря
                      <Link href={'/raspisanie'}>
                        <FiExternalLink />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <LuCalendarHeart className=" shrink-0 w-10 h-10 text-red-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-red-500  font-semibold">Формат</p>
                    <p className="text-left font-light">
                      Практика длится 1-1.5 часа. Форма одежды - свободная.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <IoLocation className=" shrink-0 w-10 h-10 text-red-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-red-500  font-semibold">Где</p>
                    <p className="text-left font-light">
                      <>
                        Онлайн. Трансляции через <b>Zoom</b>.
                      </>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <BiDonateHeart className=" shrink-0 w-10 h-10 text-red-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-red-500  font-semibold">Подношение</p>
                    <p className="text-left font-light">Уточните у организатора при регистрации</p>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </SectionTitle>

      <div className="flex justify-center mt-10">
        <a
          href="https://t.me/indivarini"
          target="_blank"
          rel="noopener"
          className="px-8 py-4 text-lg font-medium text-center text-white dark:text-white bg-red-500 rounded-md" >Записаться на марафон</a>
      </div>

    </Container >
  )
}

export default page