import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { benefitOne } from "@/components/data";
import GalaryMDC from '@/components/GalaryMDC'
import Banner2 from "@/components/Banner2";
import NashaTradiciya from "@/components/NashaTradiciya";

export default function Home() {
  return (
    <Container>

      <Hero />

      <div className="mt-10 text-base md:text-lg w-full text-center font-light dark:text-gray-300">
        Наш центр организован учениками просветленного мастера Адвайты - Гуру Свами Вишнудевананда Гири Махараджа.
        Мы являемся носителями традиции.
      </div>

      <Container>
        <div className="mt-5 w-full flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Более <span className="text-red-400 ">2 000+</span>{" "}
            садху практикуют в нашей традиции
          </div>

          <div className="w-full flex flex-wrap lg:justify-center lg:gap-20 text-xs md:text-base gap-5 my-10 justify-around">
            <div className=" text-gray-400 dark:text-gray-400 font-light">
              В России
            </div>
            <div className="text-gray-400 dark:text-gray-400 font-light">
              В Европе
            </div>
            <div className="text-gray-400 dark:text-gray-400 font-light">
              В США
            </div>
            <div className=" text-gray-400 dark:text-gray-400 font-light">
              В Индии
            </div>
            <div className=" text-gray-400 dark:text-gray-400 font-light">
              В Непале
            </div>
          </div>
        </div>
      </Container>

      {/* <Benefits data={benefitOne} /> */}
      <NashaTradiciya />

      <Banner2 />

      <SectionTitle
        preTitle="Галерея"
        title="Фотографии"
      >
      </SectionTitle>

      <GalaryMDC />

    </Container>
  );
}
