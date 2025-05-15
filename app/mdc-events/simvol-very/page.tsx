import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";
import heroImg from "@/public/hero/simvol-very.webp"

export const metadata: Metadata = {
  title: "Символ Веры",
  description: "Церемония принятия Символа Веры Санатана Дхармы и Прибежища",
};


const page = () => {
  return (
    <Container>
      <div className="flex flex-wrap">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="w-full text-center lg:text-start text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white textColor">
              Символ Веры
            </h1>
            <p className="w-full text-center lg:text-start py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              2 ЯНВАРЯ в Москве состоятся ДВЕ церемонии
            </p>

            <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col md:items-start space-y-3 sm:space-x-4 sm:space-y-0 items-center sm:flex-row">
              <a
                href="https://t.me/kevbrush"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md "
              >
                Записаться на церемонию
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src={heroImg}
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
        preTitle="Символ Веры"
        title="Церемония принятия Символа Веры Санатана Дхармы"
      >
        <p className="text-left py-4">
          Проходя церемонию, духовный искатель входит в культуру и принципы Санатана Дхармы, разделяет духовные, этические постулаты Санатана Дхармы и принимает пять принципов (пять шраддх) как свое собственное мировоззрение, свою систему ценностей.
        </p>
        <p className="text-left py-4">
          Этот тип Символа Веры подходит для искателей, которые еще не готовы принять единственно нашу традицию, но с уважением и почтением относятся к Гуру, Учению и духовной общине, хотят посещать мероприятия и ашрамы.
        </p>
      </SectionTitle>
      <SectionTitle
        preTitle="Символ Веры"
        title="Церемония принятия Символа Веры Прибежища"
      >
        <p className="text-left py-4">
          Духовный искатель уже принимает Прибежище и мантру Прибежища.
        </p>
        <p className="text-left py-4">
          Это вхождение в линию Передачи, означающее, что человек входит в Традицию нашего Учения и намеревается практиковать именно то Учение, которое передает Гуру.
        </p>
        <p className="text-left py-4">
          Искатели принимают статус «ученика», статус обучающегося в ВОСД (Всемирной Общине Санатана Дхармы). То есть ими принимается ученичество.
        </p>
      </SectionTitle>
      <SectionTitle
        preTitle="символ веры"
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
                        2 января в 10:30 (четверг)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <LuCalendarHeart className=" shrink-0 w-10 h-10 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Формат</p>
                    <p className="text-left">
                      Церемонии проведет монахиня Ведаматри Гири.
                      Проведение ОЧНО 2 января в 10:30.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <IoLocation className=" shrink-0 w-10 h-10 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Где</p>
                    <p className="text-left">
                      Москва, зал рядом с метро Новослободская.
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start gap-5">
                  <BiDonateHeart className=" shrink-0 w-10 h-10 text-indigo-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Стоимость</p>
                    <p className="text-left">Объем свободного пожертвования определяете самостоятельно </p>

                  </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </SectionTitle>

      <div className="flex justify-center mt-10">
        <a
          href="https://t.me/kevbrush"
          target="_blank"
          rel="noopener"
          className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md" >Записаться на церемонию</a>
      </div>
    </Container >
  )
}

export default page