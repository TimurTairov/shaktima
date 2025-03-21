import type { Metadata } from "next";
import { Container } from "@/components/Container";
import Image from 'next/image'
import Link from 'next/link'
import sadhutapovan from '@/public/mdc-events/sadhutapovan2.webp'
import img2 from "@/public/sudhu-tapovan/2.jpg"
import img3 from "@/public/sudhu-tapovan/3.jpg"
import img4 from "@/public/sudhu-tapovan/4.jpg"
import img6 from "@/public/sudhu-tapovan/6.jpg"
import img7 from "@/public/sudhu-tapovan/7.jpg"
import img9 from "@/public/sudhu-tapovan/9.jpg"
import { SectionTitle } from "@/components/SectionTitle";
import { FaOm } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Йога туры на Алтае",
  description: "Приглашаем посетить Алтайский Ашрам - Садху Тапован",
};

const page = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center justify-center w-full lg:w-5/12">
          <div className="pb-10">
            <h1 className="w-full text-center lg:text-start py-2 lg:py-5  text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight xl:leading-tight dark:text-white">
              Йога туры на Алтае
            </h1>
            <p className="w-full text-center lg:text-start py-2 lg:py-5 leading-normal text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300">
              Ашрам Гуру Свами Вишнудевананда Гири Махараджа -  Садху Тапован, расположенный на Алтае, приглашает углубить свою практику йоги во время йога туров и совершить духовный прорыв во время ритритов. Различные программы начнутся с начала мая и до осени.
            </p>

            <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col justify-center lg:justify-start space-y-3 sm:space-x-4 sm:space-y-0 sm:flex-row">
              <Link
                href="https://t.me/arina_vandana"
                target="_blank"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md "
              >
                Записаться на йога тур
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-6/12">
          <Image
            src={sadhutapovan}
            width="855"
            height="638"
            className="object-cover w-full h-auto rounded-md"
            alt="Hero Illustration"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="mt-20 flex flex-col md:flex-row items-start">
        <SectionTitle preTitle="в программе" title="Йога туры на Алтае">
          <div className="flex justify-center">
            <div className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-5">
              <div className="flex flex-col items-start justify-start">
                <div className="mt-3 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 lg:grid-cols-2">

                  <div className="flex items-center gap-5">
                    <FaOm className=" shrink-0 size-6 md:size-8 lg:size-10 text-indigo-500 " />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-left text-base md:text-lg lg:text-xl xl:text-2xl">
                        4-10 мая
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <FaOm className=" shrink-0 size-6 md:size-8 lg:size-10 text-indigo-500 " />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-left text-base md:text-lg lg:text-xl xl:text-2xl">
                        15-21 июня
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <FaOm className=" shrink-0 size-6 md:size-8 lg:size-10 text-indigo-500 " />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-left text-base md:text-lg lg:text-xl xl:text-2xl">
                        20-26 июля
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <FaOm className=" shrink-0 size-6 md:size-8 lg:size-10 text-indigo-500" />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-left text-base md:text-lg lg:text-xl xl:text-2xl">
                        7-13 сентября
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </SectionTitle>
        <SectionTitle preTitle="в программе" title="2-х недельный ритрит">
          <div className="flex justify-center">
            <div className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-5">
              <div className="flex flex-col items-start justify-start">
                <div className="mt-3 lg:mt-10 flex justify-center gap-5 xl:gap-10 lg:grid-cols-2">

                  <div className="flex items-center gap-5">
                    <FaOm className=" shrink-0 size-6 md:size-8 lg:size-10 text-indigo-500 " />
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-left text-base md:text-lg lg:text-xl xl:text-2xl">
                        4-10 мая
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </SectionTitle>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-3 p-4  place-items-center">
        <Image src={img4} alt="Ашрам Садху Тапован" />
        <Image src={img2} alt="Ашрам Садху Тапован" />
        <Image src={img3} alt="Ашрам Садху Тапован" />

        <Image src={img7} alt="Ашрам Садху Тапован" />
        <Image src={img6} alt="Ашрам Садху Тапован" />
        <Image src={img9} alt="Ашрам Садху Тапован" />
      </div>

      <div className="mt-20 flex flex-col gap-5">
        <p>Приглашаем приезжать как на программы, обозначенные выше, так и на индивидуальные ритриты от 3 дней до одного месяца (для тех, кто не в традиции, оговаривается отдельно).</p>
        <p>При содействии ашрама Садху Тапован возможна организация детского лагеря на территории близкой к ашраму. Зависит от количества заявок.  Ашрам – это большое благословение для всех, кто живет Дхармой, идет по пути Мокши, стремится углубить созерцание, укрепиться в благости и переживании Божественных энергий. </p>
        <p>По вопросам приезда в ашрам на ритриты, индивидуальную практику и детские программы пишите:
          <a href="https://t.me/Irina_Leshova"
            target="_blank"
            className="font-medium text-indigo-500 ml-1"
          >
            Ишвари
          </a>
        </p>
        <p>Регистрация на йога-туры:
          <a href="https://t.me/arina_vandana"
            target="_blank"
            className="font-medium text-indigo-500 ml-1"
          >
            Вандана
          </a>
        </p>
      </div>
    </Container>
  )
}

export default page