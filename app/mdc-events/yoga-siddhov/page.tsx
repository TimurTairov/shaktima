import { Container } from "@/components/Container";
import Image from "next/image";
import yogaSiddhovImg from "@/public/hero/yoga-siddhov.webp"
import { SectionTitle } from "@/components/SectionTitle";
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

const page = () => {
  return (
    <>
      <Container className="flex flex-wrap justify-between">
        <div className=" flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 lg:h-3/5 flex flex-col justify-between">
            <h1 className="w-full text-center text-balance text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-4xl 2xl:text-5xl xl:leading-tight dark:text-white">
              Семинар «Йога Сиддхов»: путь к ясности, гармонии и внутреннему покою
            </h1>
            <p className="w-full text-center text-balance py-5 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Откройте для себя практики хатха йоги и медитации, а также погрузитесь в обсуждение осознанной жизни в мегаполисе.     Присоединяйтесь к сообществу, которое стремится к гармонии, росту и внутреннему балансу.
            </p>
            <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col space-y-3 sm:space-x-4 sm:space-y-0 items-center justify-center  sm:flex-row">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf5ooHKPkZXV2kb4Lbi06qErVELoZMuDyf35U-xLk___2L-vg/viewform"
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
              src={yogaSiddhovImg}
              width="855"
              height="638"
              className={"object-cover w-full h-auto rounded-md"}
              alt="Hero Illustration"
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>

        <p className="mt-10"></p>
        <SectionTitle preTitle="программа семинара" title="Cеминар будет состоять из трех частей">
          <h3 className="text-left font-semibold text-xl md:text-2xl mt-5 md:mt-7">1 часть  - Хатха йога</h3>
          <p className="text-left py-2">Комплекс асан для расслабления и подготовки ума и тела к медитации. Занятие подойдёт для всех уровней подготовки и направлено на раскрытие гибкости тела, улучшение дыхания и укрепление внутренней гармонии.
          </p>
          <h3 className="text-left font-semibold text-xl md:text-2xl mt-5 md:mt-7">2 часть - Медитация Сиддхов</h3>
          <p className="text-left py-2">Практика для достижения ясности и концентрации, унаследованная от древних йогов-сиддхов Южной Индии. Позволяет погрузиться в глубокое состояние покоя и осознанности.
          </p>
          <h3 className="text-left font-semibold text-xl md:text-2xl mt-5 md:mt-7">3 часть - Обсуждение "Практика в большом городе" + чаепитие</h3>
          <p className="text-left py-2">Открытое общение с участниками семинара, где мы обсудим, как сохранять осознанность и гармонию, живя в динамичном городском окружении.</p>
        </SectionTitle>

        <SectionTitle preTitle="profit" title="Что Вы получите на семинаре">
          <div className="flex justify-center">
            <div className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-5">
              <div className="flex flex-col items-start justify-start">
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 lg:grid-cols-2">

                  <div className="flex items-start gap-5">
                    <GiHealthIncrease className=" shrink-0 w-14 h-14 text-indigo-500 " />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-left">Улучшение физического и психического здоровья
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <RiMentalHealthFill className=" shrink-0 w-14 h-14 text-indigo-500 " />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-left">
                        Развитие навыков концентрации и устойчивости к стрессу
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

        <p className="mt-10"></p>
        <Benefits data={benefitTwo} />
        <Benefits imgPos="right" data={benefitOne} />

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
                      <p className="text-left">В субботу 30 ноября. Начало семинара в 12-00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <LuCalendarHeart className=" shrink-0 w-10 h-10 text-indigo-500 " />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-2xl text-indigo-500  font-semibold">Формат</p>
                      <p className="text-left">
                        Практика длится 4-4.5 часа.
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
                        Семинар будет проходить в студии Абрау-йога. Ул. Петровка 26 стр. 2
                        Большой зал
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <BiDonateHeart className=" shrink-0 w-10 h-10 text-indigo-500" />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-2xl text-indigo-500  font-semibold">Стоимость</p>
                      <p className="text-left">Участие основано на добровольных пожертвованиях. Благоприятная сумма от 1080 рублей. Средства идут на оплату помещения и развитие Дхарма центра;
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5ooHKPkZXV2kb4Lbi06qErVELoZMuDyf35U-xLk___2L-vg/viewform"
            target="_blank"
            rel="noopener"
            className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md" >Записаться на семинар</a>
        </div>


      </Container>

    </>
  )
}

export default page